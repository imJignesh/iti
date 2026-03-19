// src/lib/blog-sync-util.js
const fs = require('fs');
const path = require('path');

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

// Download image utility (reusable)
async function downloadImage(url, destFilename) {
    try {
        const destPath = path.join(IMAGE_DIR, destFilename);
        if (fs.existsSync(destPath)) return `/images/blogs/${destFilename}`;

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
        if (!res.ok) break;
        if (page === 1) totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
        const data = await res.json();
        results = results.concat(data);
        page++;
    } while (page <= totalPages);
    return results;
}

// THE MAIN SYNC ACTION
// This can be called as a full sync (default) or potentially single sync in the future
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
        if (!response.ok) break;
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
                const localUrl = await downloadImage(originalUrl, filename);
                featuredMedia.source_url = localUrl;
            }

            fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify(post, null, 2));

            allLightweightPosts.push({
                id: post.id,
                date: post.date,
                slug: post.slug,
                title: post.title,
                excerpt: post.excerpt,
                categories: post.categories,
                tags: post.tags,
                _embedded: post._embedded
            });
        }
        page++;
    } while (page <= totalPages);

    const listData = {
        posts: allLightweightPosts,
        total: allLightweightPosts.length,
        syncDate: new Date().toISOString()
    };
    fs.writeFileSync(path.join(DATA_DIR, 'list.json'), JSON.stringify(listData, null, 2));

    // 3. Cleanup Deleted
    const localFiles = fs.readdirSync(POSTS_DIR);
    let deletedCount = 0;
    for (const file of localFiles) {
        if (file.endsWith('.json') && !activeSlugs.has(file)) {
            fs.unlinkSync(path.join(POSTS_DIR, file));
            deletedCount++;
        }
    }

    return {
        success: true,
        modified: allLightweightPosts.length,
        deleted: deletedCount,
        date: listData.syncDate
    };
}

module.exports = { runMirrorSync };
