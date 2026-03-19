// src/pages/api/sync-blogs.js
const { runMirrorSync } = require('../../lib/blog-sync-util');

export default async function handler(req, res) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }


    // --- SECURITY CHECK (Optional but recommended) ---
    // You can set this in your environment variables or just use a constant for now.
    const SYNC_TOKEN = "IGNITE_SYNC_SECRET_2026"; // You can change this to something more secure later
    
    // Check for authorization header or query param
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${SYNC_TOKEN}`) {
        // Fallback to query param if needed for simple webhooks
        const queryToken = req.query.token;
        if (queryToken !== SYNC_TOKEN) {
            console.warn(`⚠️  Unauthorized sync attempt blocked from ${req.socket.remoteAddress}`);
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }

    try {
        console.log(`📡 REAL-TIME SYNC TRIGGERED BY WEBHOOK...`);
        const result = await runMirrorSync();
        console.log(`✅ Webhook Sync Complete!`);
        
        return res.status(200).json({
            message: 'Blog structure successfully mirrored from WordPress.',
            result: result
        });
    } catch (err) {
        console.error('❌ Webhook Sync Error:', err.message);
        return res.status(500).json({ 
            message: 'Sync failed on server.',
            error: err.message 
        });
    }
}
