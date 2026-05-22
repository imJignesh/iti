import fs from 'fs';
import path from 'path';

export async function getServerSideProps(context) {
    const { slug } = context.params;

    // Check if the slug exists in our synced blog lists
    const dataPaths = [
        path.join(process.cwd(), 'src', 'data', 'blog', 'list.json'),
        path.join(process.cwd(), 'src', 'data', 'blogs-list.json')
    ];

    let isBlogSlug = false;

    for (const listPath of dataPaths) {
        if (fs.existsSync(listPath)) {
            try {
                const listData = JSON.parse(fs.readFileSync(listPath, 'utf8'));
                if (listData && Array.isArray(listData.posts)) {
                    if (listData.posts.some(post => post.slug === slug)) {
                        isBlogSlug = true;
                        break;
                    }
                }
            } catch (error) {
                console.error(`Error parsing ${listPath}:`, error);
            }
        }
    }

    if (isBlogSlug) {
        // If it's a valid blog post, permanently redirect it
        return {
            redirect: {
                destination: `/blog/${slug}`,
                permanent: true,
            }
        };
    }

    // If it's NOT a blog post, return 404.
    // Next.js will automatically serve your custom src/pages/404.js page 
    // at the current URL (e.g., /subject-page)
    return {
        notFound: true,
    };
}

export default function RootSlugHandler() {
    return null; // This will never render due to the redirect or 404 above
}
