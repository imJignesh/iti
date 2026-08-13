const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- SHARED CONFIG ---
const API_BASE = 'https://api.ignitetraininginstitute.com/wp-json/wp/v2';
const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'blog');
const POSTS_DIR = path.join(DATA_DIR, 'posts');
const IMAGE_DIR = path.join(process.cwd(), 'public', 'images', 'blogs');

// Ensure directories exist
function ensureDirs() {
    [DATA_DIR, POSTS_DIR, IMAGE_DIR].forEach(dir => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
}

// Build top-posts.json from the 3 most recently published posts
function updateTopPosts(posts) {
    const TOP_POSTS_PATH = path.join(DATA_DIR, 'top-posts.json');

    const topPosts = posts
        .slice() // avoid mutating the original array
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
        .map(post => {
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
            const imgSrc = featuredMedia?.source_url || '/images/blogs/default.webp';

            // Strip HTML tags and whitespace from excerpt
            const rawExcerpt = post.excerpt?.rendered || '';
            const plainExcerpt = rawExcerpt.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            const desc = plainExcerpt.length > 120
                ? plainExcerpt.slice(0, 120) + '...'
                : plainExcerpt;

            return {
                img: imgSrc,
                title: (post.title?.rendered || post.slug)
                    .replace(/&amp;/g, '&')
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>'),
                desc,
                link: post.slug,
                width: 300,
                height: 200
            };
        });

    fs.writeFileSync(TOP_POSTS_PATH, JSON.stringify(topPosts, null, 2));
    console.log(`📝 Updated top-posts.json with latest ${topPosts.length} posts.`);
}

// Git Push Utility to sync back to GitHub
function gitPushChanges(message) {
    try {
        console.log(`📡 Preparing to push changes to GitHub: "${message}"`);
        
        // Stage only relevant data
        execSync('git add src/data/blog/ public/images/blogs/', { stdio: 'inherit' });
        
        // Check if there are actually changes to commit
        const status = execSync('git status --porcelain').toString();
        if (!status) {
            console.log('ℹ️ No changes to commit.');
            return false;
        }

        execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        
        console.log('✅ Changes successfully pushed to GitHub!');
        return true;
    } catch (err) {
        console.error('⚠️ Git Push Failed:', err.message);
        // We don't throw here to avoid failing the whole sync if only the push fails
        return false;
    }
}

// Download image utility (reusable)
async function downloadImage(url, destFilename, force = false) {
    try {
        const destPath = path.join(IMAGE_DIR, destFilename);
        
        // Skip if exists and not forced
        if (!force && fs.existsSync(destPath)) {
            return `/images/blogs/${destFilename}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Download status: ${res.status}`);
        
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`🖼️  Downloaded: ${destFilename}`);
        return `/images/blogs/${destFilename}`;
    } catch (err) {
        console.warn(`⚠️  Image failed for ${url}:`, err.message);
        return url;
    }
}

// Fetch all utility
async function fetchAll(endpoint) {
    let results = [];
    let page = 1;
    let totalPages = 1;
    do {
        const res = await fetch(`${API_BASE}/${endpoint}?per_page=100&page=${page}`);
        if (!res.ok) {
            throw new Error(`${endpoint} sync failed on page ${page}: HTTP ${res.status}`);
        }
        if (page === 1) totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
        const data = await res.json();
        results = results.concat(data);
        page++;
    } while (page <= totalPages);
    return results;
}

// THE MAIN SYNC ACTION
async function runMirrorSync() {
    ensureDirs();

    // 1. Sync Taxonomy
    const categories = await fetchAll('categories');
    const tags = await fetchAll('tags');
    fs.writeFileSync(path.join(DATA_DIR, 'categories.json'), JSON.stringify(categories, null, 2));
    fs.writeFileSync(path.join(DATA_DIR, 'tags.json'), JSON.stringify(tags, null, 2));

    // 2. Sync Posts
    const allLightweightPosts = [];
    const activeSlugs = new Set();
    let page = 1;
    let totalPages = 1;

    do {
        const fetchUrl = `${API_BASE}/posts?per_page=50&page=${page}&_embed`;
        const response = await fetch(fetchUrl);
        if (!response.ok) {
            throw new Error(`posts sync failed on page ${page}: HTTP ${response.status}`);
        }
        if (page === 1) totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1;

        const posts = await response.json();
        for (const post of posts) {
            const slug = post.slug;
            activeSlugs.add(`${slug}.json`);

            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
            if (featuredMedia && featuredMedia.source_url) {
                const originalUrl = featuredMedia.source_url;
                const extension = path.extname(new URL(originalUrl).pathname) || '.webp';
                const filename = `${slug}${extension}`;
                // Set force to true for all images as requested by the user
                const localUrl = await downloadImage(originalUrl, filename, true);
                featuredMedia.source_url = localUrl;
            }

            fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify(post, null, 2));

            // Only keep the featured image URL from _embedded — author/wp:term are
            // never read from list.json (they come from the full per-post file), and
            // including them bloated list.json to 6.7MB across 173 posts, pushing raw
            // HTML document size over Google's ~2MB crawl budget on every blog page.
            allLightweightPosts.push({
                id: post.id,
                date: post.date,
                slug: post.slug,
                title: post.title,
                excerpt: post.excerpt,
                categories: post.categories,
                tags: post.tags,
                _embedded: featuredMedia && featuredMedia.source_url
                    ? { 'wp:featuredmedia': [{ source_url: featuredMedia.source_url }] }
                    : {}
            });
        }
        page++;
    } while (page <= totalPages);

    const listData = {
        posts: allLightweightPosts,
        total: allLightweightPosts.length,
        syncDate: new Date().toISOString()
    };
    fs.writeFileSync(path.join(DATA_DIR, 'list.json'), JSON.stringify(listData));

    // Update top-posts.json with the 3 most recent posts
    updateTopPosts(allLightweightPosts);

    // 3. Cleanup Deleted
    const localFiles = fs.readdirSync(POSTS_DIR);
    let deletedCount = 0;
    for (const file of localFiles) {
        if (file.endsWith('.json') && !activeSlugs.has(file)) {
            fs.unlinkSync(path.join(POSTS_DIR, file));
            deletedCount++;
        }
    }

    // --- AUTO GITHUB PUSH ---
    const pushed = process.env.BLOG_SYNC_AUTO_PUSH === 'true'
        ? gitPushChanges(`Blog Sync: Full Mirror Update [${new Date().toISOString()}]`)
        : false;

    return {
        success: true,
        modified: allLightweightPosts.length,
        deleted: deletedCount,
        date: listData.syncDate,
        pushedToGithub: pushed
    };
}

async function syncSinglePost(slug) {
    if (!slug) throw new Error("No slug provided for single sync");
    ensureDirs();

    const fetchUrl = `${API_BASE}/posts?slug=${slug}&_embed`;
    const response = await fetch(fetchUrl);
    if (!response.ok) throw new Error(`WP API Error: ${response.status}`);

    const posts = await response.json();
    if (!posts || posts.length === 0) throw new Error(`Post not found with slug: ${slug}`);

    const post = posts[0];
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    if (featuredMedia && featuredMedia.source_url) {
        const originalUrl = featuredMedia.source_url;
        const extension = path.extname(new URL(originalUrl).pathname) || '.webp';
        const filename = `${slug}${extension}`;
        // FORCE re-download for single post updates to ensure images are fresh
        const localUrl = await downloadImage(originalUrl, filename, true);
        featuredMedia.source_url = localUrl;
    }

    // Update Post
    fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify(post, null, 2));

    // Update list.json (lightweight sync) 
    const listPath = path.join(DATA_DIR, 'list.json');
    if (fs.existsSync(listPath)) {
        const listData = JSON.parse(fs.readFileSync(listPath, 'utf8'));
        const index = listData.posts.findIndex(p => p.slug === slug);
        const slimPost = {
            id: post.id,
            date: post.date,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            categories: post.categories,
            tags: post.tags,
            _embedded: featuredMedia && featuredMedia.source_url
                ? { 'wp:featuredmedia': [{ source_url: featuredMedia.source_url }] }
                : {}
        };

        if (index > -1) {
            listData.posts[index] = slimPost;
        } else {
            listData.posts.unshift(slimPost);
        }
        listData.syncDate = new Date().toISOString();
        fs.writeFileSync(listPath, JSON.stringify(listData));

        // Update top-posts.json based on the latest list
        updateTopPosts(listData.posts);
    }

    // --- AUTO GITHUB PUSH ---
    const pushed = process.env.BLOG_SYNC_AUTO_PUSH === 'true'
        ? gitPushChanges(`Blog Sync: Updated "${post.title?.rendered || slug}"`)
        : false;

    return { success: true, slug: slug, date: new Date().toISOString(), pushedToGithub: pushed };
}

module.exports = { runMirrorSync, syncSinglePost };
