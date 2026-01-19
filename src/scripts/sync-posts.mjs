import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_API = 'https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&_embed&_fields=id,date,title,slug,excerpt,featured_media,_links,_embedded';
const DATA_PATH = path.resolve(__dirname, '../../public/data/posts.json');
const IMG_DIR = path.resolve(__dirname, '../../public/images/posts');

async function processImage(url, slug) {
    const filename = `${slug}.webp`;
    const targetPath = path.join(IMG_DIR, filename);

    try {
        const response = await fetch(url);
        const buffer = Buffer.from(await response.arrayBuffer());

        // RESIZE TO MOBILE-FRIENDLY WIDTH AND CONVERT TO WEBP
        await sharp(buffer)
            .resize(800, 533, { fit: 'cover' })
            .webp({ quality: 80 })
            .toFile(targetPath);

        return `/images/posts/${filename}`;
    } catch (err) {
        console.error(`Failed to process image for ${slug}:`, err);
        return url; // Fallback to original URL
    }
}

async function syncPosts() {
    try {
        console.log('Starting sync and WebP conversion...');
        if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

        const res = await fetch(POSTS_API);
        const posts = await res.json();

        const updatedPosts = await Promise.all(posts.map(async (post) => {
            const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            if (imgUrl) {
                // Store the local WebP path in the JSON
                post.local_image = await processImage(imgUrl, post.slug);
            }
            return post;
        }));

        fs.writeFileSync(DATA_PATH, JSON.stringify(updatedPosts, null, 2));
        console.log('Success: Posts synced with WebP local images');
    } catch (err) {
        console.error('Sync failed:', err);
        process.exit(1);
    }
}

syncPosts();