const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const terms = {
  'term-dfinery': 'https://igaworks.com/term/dfinery',
  'term-adbrix': 'https://igaworks.com/term/adbrix',
  'term-mobileindex': 'https://igaworks.com/term/mobileindex',
  'term-tvindex': 'https://igaworks.com/term/tvindex',
  'term-tradingworks': 'https://igaworks.com/term/tradingworks',
  'term-advertisement': 'https://igaworks.com/term/advertisement'
};

const origDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(origDir)) fs.mkdirSync(origDir, { recursive: true });

function cleanExtracted(text) {
  let c = text.trim();
  if (c.startsWith('<>')) c = c.slice(2);
  if (c.endsWith(');')) c = c.slice(0, -2);
  return c.trim();
}

function norm(t) { return t.replace(/\s+/g, ' ').trim(); }

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  console.log('=== Fetching original texts and comparing ===\n');
  
  for (const [name, url] of Object.entries(terms)) {
    console.log(`\nFetching ${name} from ${url}...`);
    const page = await context.newPage();
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      
      // Get the main content text - find the terms content container
      const origText = await page.evaluate(() => {
        // Try to find the main content area (not header/footer)
        const main = document.querySelector('main') || document.querySelector('.terms-content') || document.querySelector('[class*="term"]') || document.querySelector('[class*="content"]');
        if (main) return main.innerText;
        // Fallback: get body text but try to exclude nav/footer
        const body = document.body;
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        let text = body.innerText;
        if (nav) text = text.replace(nav.innerText, '');
        if (footer) text = text.replace(footer.innerText, '');
        return text;
      });
      
      // Save original
      fs.writeFileSync(path.join(origDir, `${name}.txt`), origText, 'utf-8');
      console.log(`  Saved ${origText.length} chars`);
      
      // Compare with extracted
      const extPath = path.join(__dirname, 'extracted-texts', `${name}.txt`);
      const ext = norm(cleanExtracted(fs.readFileSync(extPath, 'utf-8')));
      const orig = norm(origText.trim());
      
      if (ext === orig) {
        console.log(`  ✅ MATCH`);
      } else {
        // Find differences
        let diffs = [];
        let ei = 0, oi = 0;
        while (ei < ext.length && oi < orig.length) {
          if (ext[ei] !== orig[oi]) {
            const se = ei, so = oi;
            let synced = false;
            for (let s = 1; s < 500; s++) {
              const ml = 20;
              if (ei+s+ml <= ext.length && oi+ml <= orig.length && ext.substring(ei+s, ei+s+ml) === orig.substring(oi, oi+ml)) {
                diffs.push({ tsx: ext.substring(se, ei+s), orig: orig.substring(so, oi), pos: se });
                ei += s; synced = true; break;
              }
              if (oi+s+ml <= orig.length && ei+ml <= ext.length && ext.substring(ei, ei+ml) === orig.substring(oi+s, oi+s+ml)) {
                diffs.push({ tsx: ext.substring(se, ei), orig: orig.substring(so, oi+s), pos: se });
                oi += s; synced = true; break;
              }
            }
            if (!synced) { ei++; oi++; }
          } else { ei++; oi++; }
        }
        if (ei < ext.length) diffs.push({ tsx: ext.substring(ei), orig: '', pos: ei });
        if (oi < orig.length) diffs.push({ tsx: '', orig: orig.substring(oi), pos: oi });
        
        console.log(`  ❌ ${diffs.length} DIFFERENCE(S):`);
        diffs.forEach((d, i) => {
          console.log(`  #${i+1} (pos ~${d.pos}):`);
          console.log(`    TSX:  "${(d.tsx || '(empty)').substring(0, 200)}${d.tsx.length > 200 ? '...' : ''}"`);
          console.log(`    ORIG: "${(d.orig || '(empty)').substring(0, 200)}${d.orig.length > 200 ? '...' : ''}"`);
        });
      }
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  console.log('\nDone!');
}

main().catch(console.error);
