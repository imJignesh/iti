const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './public/images';
const formats = ['webp', 'avif'];

async function optimizeImages() {
    console.log('Starting image optimization...\n');

    try {
        const files = fs.readdirSync(imageDir);
        let optimized = 0;
        let skipped = 0;

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();

            // Only process PNG and JPG files
            if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
                skipped++;
                continue;
            }

            const inputPath = path.join(imageDir, file);
            const baseName = path.basename(file, ext);

            // Check file size
            const stats = fs.statSync(inputPath);
            const fileSizeKB = (stats.size / 1024).toFixed(2);

            console.log(`Processing: ${file} (${fileSizeKB} KB)`);

            for (const format of formats) {
                const outputPath = path.join(imageDir, `${baseName}.${format}`);

                // Skip if already exists
                if (fs.existsSync(outputPath)) {
                    console.log(`  ${baseName}.${format} already exists, skipping`);
                    continue;
                }

                try {
                    if (format === 'webp') {
                        await sharp(inputPath)
                            .resize(2000, 2000, {
                                fit: 'inside',
                                withoutEnlargement: true
                            })
                            .webp({ quality: 85 })
                            .toFile(outputPath);
                    } else if (format === 'avif') {
                        await sharp(inputPath)
                            .resize(2000, 2000, {
                                fit: 'inside',
                                withoutEnlargement: true
                            })
                            .avif({ quality: 80 })
                            .toFile(outputPath);
                    }

                    const newStats = fs.statSync(outputPath);
                    const newSizeKB = (newStats.size / 1024).toFixed(2);
                    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);

                    console.log(`  Created ${baseName}.${format} (${newSizeKB} KB, saved ${saved}%)`);
                    optimized++;

                } catch (err) {
                    console.log(`  Failed to create ${baseName}.${format}: ${err.message}`);
                }
            }

            console.log('');
        }

        console.log('Optimization complete!');
        console.log(`Stats: ${optimized} images optimized, ${skipped} files skipped\n`);

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

optimizeImages();