import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use native fetch (available in Node.js 18+)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_API = 'https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&_embed&_fields=id,date,title,slug,excerpt,featured_media,_links,_embedded';
const DATA_PATH = path.resolve(__dirname, '../../public/data/posts.json');
const IMG_DIR = path.resolve(__dirname, '../../public/images/posts');

async function downloadImage(url, filename) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(path.join(IMG_DIR, filename), buffer);
}

async function syncPosts() {
    try {
        console.log('Starting post sync...');

        if (!fs.existsSync(IMG_DIR)) {
            fs.mkdirSync(IMG_DIR, { recursive: true });
        }

        const res = await fetch(POSTS_API);
        const posts = await res.json();

        const updatedPosts = await Promise.all(posts.map(async (post) => {
            const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            if (imgUrl) {
                const ext = path.extname(imgUrl) || '.jpg';
                const filename = `${post.slug}${ext}`;
                await downloadImage(imgUrl, filename);
                post.local_image = `/images/posts/${filename}`;
            }
            return post;
        }));

        if (!fs.existsSync(path.dirname(DATA_PATH))) {
            fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
        }

        fs.writeFileSync(DATA_PATH, JSON.stringify(updatedPosts, null, 2));
        console.log('Posts and images synced successfully to public folder');
    } catch (err) {
        console.error('Sync failed:', err);
        process.exit(1);
    }
}

syncPosts();