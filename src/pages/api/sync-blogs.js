const { runMirrorSync, syncSinglePost } = require('../../lib/blog-sync-util');

export default async function handler(req, res) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const SYNC_TOKEN = "IGNITE_SYNC_SECRET_2026";
    
    // Check for authorization
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${SYNC_TOKEN}`) {
        const queryToken = req.query.token;
        if (queryToken !== SYNC_TOKEN) {
            console.warn(`⚠️ Unauthorized sync attempt blocked from ${req.socket.remoteAddress}`);
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }

    try {
        // Extract slug from body or query for targeted sync
        // WP Webhooks plugin usually sends the post object in the body
        const slug = req.body?.slug || req.body?.post_slug || req.query.slug || req.query.post_slug;

        if (slug) {
            console.log(`📡 TARGETED SYNC TRIGGERED for slug: ${slug}`);
            const result = await syncSinglePost(slug);
            return res.status(200).json({
                message: `Blog post '${slug}' successfully synced and updated.`,
                pushedToGithub: result.pushedToGithub,
                result
            });
        } else {
            console.log(`📡 FULL MIRROR SYNC TRIGGERED...`);
            const result = await runMirrorSync();
            return res.status(200).json({
                message: 'All blogs successfully mirrored from WordPress.',
                pushedToGithub: result.pushedToGithub,
                result
            });
        }
    } catch (err) {
        console.error('❌ Sync API Error:', err.message);
        return res.status(500).json({ 
            message: 'Sync failed on server.',
            error: err.message 
        });
    }
}
