/**
 * Fetch original texts from igaworks.com and save to original-texts/
 * Uses puppeteer-like approach via simple HTTPS fetch
 * Since the site is a SPA, we use a simpler approach - 
 * just save the content that was already fetched via webFetch tool
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const urls = {
  'term-dfinery': 'https://igaworks.com/term/dfinery',
  'term-adbrix': 'https://igaworks.com/term/adbrix',
  'term-mobileindex': 'https://igaworks.com/term/mobileindex',
  'term-tvindex': 'https://igaworks.com/term/tvindex',
  'term-tradingworks': 'https://igaworks.com/term/tradingworks',
  'term-advertisement': 'https://igaworks.com/term/advertisement'
};

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Check which files already exist
const existing = fs.readdirSync(dir).filter(f => f.startsWith('term-'));
console.log('Existing files:', existing);
console.log('This script is a placeholder - original texts were saved via webFetch tool');
