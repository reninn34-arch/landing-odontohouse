const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const imagesToCompress = [
  { name: 'hero.jpg', output: 'hero.webp', width: 1600, quality: 80 },
  { name: 'before2.jpg', output: 'before2.webp', width: 800, quality: 80 },
  { name: 'after2.jpg', output: 'after2.webp', width: 800, quality: 80 }
];

console.log('Starting image compression...');

Promise.all(
  imagesToCompress.map(img => {
    const srcPath = path.join(publicDir, img.name);
    const destPath = path.join(publicDir, img.output);

    return sharp(srcPath)
      .resize({ width: img.width, withoutEnlargement: true })
      .webp({ quality: img.quality, effort: 6 })
      .toFile(destPath)
      .then(info => {
        console.log(`Success: ${img.name} -> ${img.output}`);
        console.log(`  - Optimized Size: ${(info.size / 1024).toFixed(2)} KB`);
      });
  })
)
.then(() => {
  console.log('All images compressed successfully!');
})
.catch(err => {
  console.error('Error during compression:', err);
});
