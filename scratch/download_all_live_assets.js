const https = require('https');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const domain = 'priorityhauliers.com';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const directAssets = [
  '/logo-icon.png',
  '/logo-full.png',
  '/logo-white.png',
  '/logo-dark.png',
  '/logo.png',
  '/favicon.ico',
  '/images/real/header.jpg',
  '/images/real/about.jpg',
  '/images/real/feature.jpg',
  '/images/real/blog-1.jpg',
  '/images/real/blog-2.jpg',
  '/images/real/service-1.jpg',
  '/images/real/service-2.jpg',
  '/images/real/service-3.jpg',
  '/images/real/service-4.jpg',
  '/images/real/team-1.jpg',
  '/images/real/team-2.jpg',
  '/images/real/team-3.jpg',
  '/images/real/team-4.jpg',
  '/images/real/testimonial-1.jpg',
  '/images/real/testimonial-2.jpg',
  '/images/real/quote.jpg'
];

function downloadFile(assetPath) {
  return new Promise((resolve) => {
    // Strip query string for local file saving
    const cleanUrlPath = assetPath.split('?')[0];
    const cleanRelativePath = cleanUrlPath.replace(/^\/+/, '');
    const dest = path.join(__dirname, '..', 'public', cleanRelativePath);
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const opts = {
      hostname: domain,
      path: assetPath,
      method: 'GET',
      headers: { 'User-Agent': userAgent }
    };

    https.get(opts, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          console.log('✓ Successfully downloaded:', assetPath, '->', cleanRelativePath);
          resolve(true);
        });
      } else {
        console.log('Status', res.statusCode, 'for', assetPath);
        resolve(false);
      }
    }).on('error', (e) => {
      resolve(false);
    });
  });
}

async function run() {
  for (const asset of directAssets) {
    await downloadFile(asset);
  }
  console.log('--- All downloads completed into public folder! ---');
}

run();
