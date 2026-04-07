/**
 * Complete comparison script
 * Reads raw original texts from original-texts/, cleans them,
 * reads extracted texts from extracted-texts/, cleans them,
 * and compares line by line
 */
const fs = require('fs');
const path = require('path');

function cleanOriginalSiteText(rawText) {
  let text = rawText;
  // Remove everything from [About] onwards (footer)
  const footerIdx = text.indexOf('[About]');
  if (footerIdx > 0) text = text.substring(0, footerIdx);
  // Remove Additional Links section
  const addLinksIdx = text.indexOf('## Additional Links');
  if (addLinksIdx > 0) text = text.substring(0, addLinksIdx);
  // Remove leading ---
  text = text.replace(/^---\s*\n/, '');
  // Remove markdown headings
  text = text.replace(/^#{1,6}\s*/gm, '');
  // Remove markdown links -> text only
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // Normalize whitespace
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\u00a0/g, ' ');
  // Clean lines
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  return text;
}

function cleanExtractedText(text) {
  text = text.replace(/^<>\s*\n?/, '');
  text = text.replace(/\);\s*$/, '');
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\u00a0/g, ' ');
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  return text;
}

function compareTexts(extText, orgText) {
  const ext = extText.split('\n');
  const org = orgText.split('\n');
  const diffs = [];
  let ei = 0, oi = 0;
  let matchCount = 0;

  while (ei < ext.length && oi < org.length) {
    if (ext[ei] === org[oi]) {
      matchCount++;
      ei++; oi++;
      continue;
    }
    let bestMatch = null;
    for (let look = 1; look <= 10; look++) {
      if (oi + look < org.length && ext[ei] === org[oi + look]) {
        bestMatch = { type: 'org_skip', skip: look, at: oi };
        break;
      }
      if (ei + look < ext.length && ext[ei + look] === org[oi]) {
        bestMatch = { type: 'ext_skip', skip: look, at: ei };
        break;
      }
    }
    if (bestMatch && bestMatch.type === 'org_skip') {
      for (let k = oi; k < oi + bestMatch.skip; k++) {
        diffs.push({ type: 'MISSING_IN_TSX', orgLine: k + 1, text: org[k].substring(0, 300) });
      }
      oi += bestMatch.skip;
    } else if (bestMatch && bestMatch.type === 'ext_skip') {
      for (let k = ei; k < ei + bestMatch.skip; k++) {
        diffs.push({ type: 'EXTRA_IN_TSX', extLine: k + 1, text: ext[k].substring(0, 300) });
      }
      ei += bestMatch.skip;
    } else {
      const e = ext[ei];
      const o = org[oi];
      let diffPos = 0;
      while (diffPos < e.length && diffPos < o.length && e[diffPos] === o[diffPos]) diffPos++;
      const ctx = 50;
      const start = Math.max(0, diffPos - ctx);
      diffs.push({
        type: 'DIFF',
        extLine: ei + 1,
        orgLine: oi + 1,
        position: diffPos,
        extSnippet: e.substring(start, diffPos + ctx),
        orgSnippet: o.substring(start, diffPos + ctx),
        extFull: e,
        orgFull: o,
      });
      ei++; oi++;
    }
  }
  while (ei < ext.length) {
    diffs.push({ type: 'EXTRA_IN_TSX', extLine: ei + 1, text: ext[ei].substring(0, 300) });
    ei++;
  }
  while (oi < org.length) {
    diffs.push({ type: 'MISSING_IN_TSX', orgLine: oi + 1, text: org[oi].substring(0, 300) });
    oi++;
  }
  return { diffs, matchCount, extTotal: ext.length, orgTotal: org.length };
}

// Main
const extractedDir = path.join(__dirname, 'extracted-texts');
const originalDir = path.join(__dirname, 'original-texts');

const termFiles = [
  'term-dfinery',
  'term-adbrix',
  'term-mobileindex',
  'term-tvindex',
  'term-tradingworks',
  'term-advertisement',
];

let totalDiffs = 0;
for (const name of termFiles) {
  const extFile = path.join(extractedDir, name + '.txt');
  const orgFile = path.join(originalDir, name + '.txt');
  if (!fs.existsSync(extFile)) { console.log(`SKIP: ${name} (no extracted)`); continue; }
  if (!fs.existsSync(orgFile)) { console.log(`SKIP: ${name} (no original)`); continue; }

  const extracted = cleanExtractedText(fs.readFileSync(extFile, 'utf-8'));
  const original = cleanOriginalSiteText(fs.readFileSync(orgFile, 'utf-8'));

  const { diffs, matchCount, extTotal, orgTotal } = compareTexts(extracted, original);

  if (diffs.length === 0) {
    console.log(`\n✅ ${name}: PERFECT MATCH (${matchCount} lines)`);
  } else {
    console.log(`\n⚠️  ${name}: ${diffs.length} differences (matched: ${matchCount}/${Math.max(extTotal, orgTotal)} lines)`);
    for (const d of diffs) {
      if (d.type === 'DIFF') {
        console.log(`  [DIFF] TSX L${d.extLine} vs Original L${d.orgLine} (pos ${d.position})`);
        console.log(`    TSX: "${d.extSnippet}"`);
        console.log(`    ORG: "${d.orgSnippet}"`);
      } else if (d.type === 'MISSING_IN_TSX') {
        console.log(`  [MISSING IN TSX] Original L${d.orgLine}: "${d.text}"`);
      } else if (d.type === 'EXTRA_IN_TSX') {
        console.log(`  [EXTRA IN TSX] TSX L${d.extLine}: "${d.text}"`);
      }
    }
    totalDiffs += diffs.length;
  }
}
console.log(`\n=== TOTAL: ${totalDiffs} differences across all files ===`);
