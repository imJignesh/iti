// scripts/sync-blogs.js
const { runMirrorSync } = require('../lib/blog-sync-util');

async function main() {
    try {
        console.log(`\n🔄 Starting Blog Sync (CLI)...`);
        const result = await runMirrorSync();
        console.log(`✅ Sync Complete: ${result.modified} total, ${result.deleted} deleted.`);
        console.log(`📊 Last updated: ${new Date(result.date).toLocaleString()}\n`);
    } catch (error) {
        console.error('\n❌ CLI Sync Error:', error.message);
        process.exit(1);
    }
}

main();
