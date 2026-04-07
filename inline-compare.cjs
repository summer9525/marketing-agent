// This script compares extracted TSX text vs original website text
// by reading the extracted files and comparing against saved originals
const fs = require('fs');
const path = require('path');

const terms = ['term-dfinery', 'term-adbrix', 'term-mobileindex', 'term-tvindex', 'term-tradingworks', 'term-advertisement'];

function cleanExtracted(text) {
  let c = text.trim();
  if (c.startsWith('<>')) c = c.slice(2);
  if (c.endsWith(');')) c = c.slice(0, -2);
  return c.trim();
}

function cleanOriginal(text) {
  let c = text.trim();
  // Remove footer from [About] onwards
  const idx = c.indexOf('\n[About]');
  if (idx !== -1) c = c.substring(0, idx);
  // Remove --- separator
  c = c.replace(/^---\s*$/gm, '');
  // Remove markdown headers
  c = c.replace(/^#{1,6}\s+/gm, '');
  // Remove markdown links [text](url) -> text
  c = c.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // Remove bullet markers
  c = c.replace(/^[•◦]\s*/gm, '');
  // Remove table pipes
  c = c.replace(/\|/g, '');
  return c.trim();
}

function norm(t) { return t.replace(/\s+/g, ' ').trim(); }

console.log('=== COMPARISON RESULTS ===\n');

for (const term of terms) {
  const extFile = path.join(__dirname, 'extracted-texts', `${term}.txt`);
  const origFile = path.join(__dirname, 'original-texts', `${term}.txt`);
  
  if (!fs.existsSync(origFile)) {
    console.log(`[${term}] SKIP - no original file`);
    continue;
  }
  
  const ext = norm(cleanExtracted(fs.readFileSync(extFile, 'utf-8')));
  const orig = norm(cleanOriginal(fs.readFileSync(origFile, 'utf-8')));
  
  console.log(`\n=== ${term} ===`);
  
  if (ext === orig) {
    console.log('✅ MATCH');
    continue;
  }
  
  // Find differences
  let diffs = [];
  let ei = 0, oi = 0;
  while (ei < ext.length && oi < orig.length) {
    if (ext[ei] !== orig[oi]) {
      const se = ei, so = oi;
      let synced = false;
      for (let s = 1; s < 300; s++) {
        const ml = 25;
        if (ei+s+ml <= ext.length && oi+ml <= orig.length && ext.substring(ei+s, ei+s+ml) === orig.substring(oi, oi+ml)) {
          diffs.push({ tsxExtra: ext.substring(se, ei+s), origExtra: orig.substring(so, oi), pos: se });
          ei += s; synced = true; break;
        }
        if (oi+s+ml <= orig.length && ei+ml <= ext.length && ext.substring(ei, ei+ml) === orig.substring(oi+s, oi+s+ml)) {
          diffs.push({ tsxExtra: ext.substring(se, ei), origExtra: orig.substring(so, oi+s), pos: se });
          oi += s; synced = true; break;
        }
      }
      if (!synced) { ei++; oi++; }
    } else { ei++; oi++; }
  }
  
  if (ei < ext.length) diffs.push({ tsxExtra: ext.substring(ei), origExtra: '', pos: ei, note: 'TSX has extra text at end' });
  if (oi < orig.length) diffs.push({ tsxExtra: '', origExtra: orig.substring(oi), pos: oi, note: 'Original has extra text at end' });
  
  if (diffs.length === 0) {
    console.log('✅ MATCH (after normalization)');
  } else {
    console.log(`❌ ${diffs.length} DIFFERENCE(S) FOUND:`);
    diffs.forEach((d, i) => {
      console.log(`  #${i+1} at pos ~${d.pos}:`);
      if (d.note) console.log(`    Note: ${d.note}`);
      const te = d.tsxExtra.substring(0, 150);
      const oe = d.origExtra.substring(0, 150);
      console.log(`    TSX:  "${te}${d.tsxExtra.length > 150 ? '...' : ''}"`);
      console.log(`    ORIG: "${oe}${d.origExtra.length > 150 ? '...' : ''}"`);
    });
  }
}
