const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateBrandIcons(radiusPercent = 0.2) {
  const rootDir = path.join(__dirname, '..');
  const input = path.join(rootDir, 'public', 'logo.jpg');

  async function createRoundedPng(size) {
    const rx = Math.round(size * radiusPercent);
    const svgMask = `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${rx}" ry="${rx}" fill="#fff"/></svg>`;

    return await sharp(input)
      .resize(size, size)
      .composite([{
        input: Buffer.from(svgMask),
        blend: 'dest-in'
      }])
      .ensureAlpha()
      .png()
      .toBuffer();
  }

  // Generate resolutions
  const png16 = await createRoundedPng(16);
  const png32 = await createRoundedPng(32);
  const png48 = await createRoundedPng(48);
  const png96 = await createRoundedPng(96);
  const png180 = await createRoundedPng(180);
  const png192 = await createRoundedPng(192);
  const png512 = await createRoundedPng(512);

  // 1. Next.js App Router file-convention icons in app/
  fs.writeFileSync(path.join(rootDir, 'app', 'icon.png'), png192);
  fs.writeFileSync(path.join(rootDir, 'app', 'apple-icon.png'), png180);

  // 2. Static root assets in public/ for crawlers, browsers, and devices
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.png'), png192);
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-icon.png'), png180);
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-48x48.png'), png48);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-96x96.png'), png96);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-192x192.png'), png192);
  fs.writeFileSync(path.join(rootDir, 'public', 'logo-rounded.png'), png512);

  // 3. Multi-resolution ICO (16x16, 32x32, 48x48)
  const images = [
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 }
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  const totalHeaderSize = headerSize + dirEntrySize * images.length;

  let currentOffset = totalHeaderSize;
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    dirEntries.push(entry);
    currentOffset += img.buffer.length;
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...images.map(img => img.buffer)]);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoBuffer);

  console.log('Successfully generated all brand icons for Google Search, Apple, and browsers.');
}

generateBrandIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
