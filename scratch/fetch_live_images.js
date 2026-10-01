const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const baseUrl = 'https://priorityhauliers.com/';
const pages = ['', 'about.html', 'service.html', 'blog.html', 'contact.html', 'price.html', 'team.html', 'feature.html', 'quote.html'];

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function fetchPage(pagePath) {
  return new Promise((resolve) => {
    const fullUrl = urlModule.resolve(baseUrl, pagePath);
    console.log('Fetching page:', fullUrl);
    https.get(fullUrl, (res) => {
      let html = '';
      res.on('data', (c) => html += c);
      res.on('end', () => resolve(html));
    }).on('error', (err) => {
      console.error('Error fetching', fullUrl, err.message);
      resolve('');
    });
  });
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    const client = fileUrl.startsWith('https') ? https : http;
    client.get(fileUrl, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(destPath);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          console.log('Downloaded:', path.basename(destPath));
          resolve(true);
        });
      } else {
        console.warn('Failed status', res.statusCode, 'for', fileUrl);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error('Download error for', fileUrl, err.message);
      resolve(false);
    });
  });
}

async function main() {
  const allImages = new Set();

  for (const p of pages) {
    const html = await fetchPage(p);
    const re = /(?:src|href|url\(['"]?)=['"]?([^'"\)\s>]+\.(?:png|jpg|jpeg|webp|svg|ico|gif))['"]?/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
      let raw = m[1].replace(/['"]+/g, '');
      if (raw.startsWith('//')) raw = 'https:' + raw;
      if (!raw.startsWith('http')) raw = urlModule.resolve(baseUrl, raw);
      allImages.add(raw);
    }
  }

  console.log('Total unique images found across website:', allImages.size);
  console.log(Array.from(allImages));

  for (const imgUrl of allImages) {
    const filename = path.basename(urlModule.parse(imgUrl).pathname);
    const dest = path.join(outputDir, filename);
    await downloadFile(imgUrl, dest);
  }

  console.log('All downloads completed into public/images!');
}

main();
