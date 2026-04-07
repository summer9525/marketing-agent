const fs = require('fs');
const path = require('path');

// Read extracted texts
const terms = ['term-dfinery', 'term-adbrix', 'term-mobileindex', 'term-tvindex', 'term-tradingworks', 'term-advertisement'];

function cleanExtracted(text) {
  // Remove leading <> and trailing );
  let cleaned = text.trim();
  if (cleaned.startsWith('<>')) cleaned = cleaned.slice(2);
  if (cleaned.endsWith(');')) cleaned = cleaned.slice(0, -2);
  return cleaned.trim();
}

function cleanOriginal(text) {
  // Remove markdown formatting and footer
  let cleaned = text.trim();
  
  // Remove everything after [About] (footer)
  const aboutIdx = cleaned.indexOf('\n[About]');
  if (aboutIdx !== -1) cleaned = cleaned.substring(0, aboutIdx);
  
  // Remove markdown headers (##, ###, ####)
  cleaned = cleaned.replace(/^#{1,6}\s*/gm, '');
  
  // Remove markdown link syntax but keep text
  cleaned = cleaned.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  
  // Remove markdown bold/italic
  cleaned = cleaned.replace(/\*\*([^*]*)\*\*/g, '$1');
  cleaned = cleaned.replace(/\*([^*]*)\*/g, '$1');
  
  // Remove markdown table syntax
  cleaned = cleaned.replace(/\|/g, '');
  
  // Remove leading/trailing dashes (---) 
  cleaned = cleaned.replace(/^---\s*/gm, '');
  
  // Remove bullet markers
  cleaned = cleaned.replace(/^[•◦]\s*/gm, '');
  
  return cleaned.trim();
}

function normalizeForCompare(text) {
  // Normalize whitespace: collapse multiple spaces/newlines into single space
  return text
    .replace(/\s+/g, ' ')
    .trim();
}

function findDifferences(extracted, original, name) {
  const normExtracted = normalizeForCompare(extracted);
  const normOriginal = normalizeForCompare(original);
  
  if (normExtracted === normOriginal) {
    return { match: true, differences: [] };
  }
  
  // Find specific differences
  const differences = [];
  
  // Split into sentences/chunks for comparison
  const extLines = extracted.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const origLines = original.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  // Compare line by line using normalized text
  const extNorm = extLines.map(l => l.replace(/\s+/g, ' ').trim());
  const origNorm = origLines.map(l => l.replace(/\s+/g, ' ').trim());
  
  // Find lines in extracted that don't exist in original
  for (let i = 0; i < extNorm.length; i++) {
    if (extNorm[i].length < 3) continue;
    let found = false;
    for (let j = 0; j < origNorm.length; j++) {
      if (origNorm[j].includes(extNorm[i]) || extNorm[i].includes(origNorm[j])) {
        found = true;
        break;
      }
    }
    if (!found) {
      // Check partial match
      let bestMatch = '';
      let bestScore = 0;
      for (let j = 0; j < origNorm.length; j++) {
        const common = longestCommonSubstring(extNorm[i], origNorm[j]);
        if (common.length > bestScore) {
          bestScore = common.length;
          bestMatch = origNorm[j];
        }
      }
      if (bestScore > extNorm[i].length * 0.5) {
        differences.push({
          type: 'MISMATCH',
          extracted: extNorm[i],
          original: bestMatch,
          detail: findCharDiff(extNorm[i], bestMatch)
        });
      }
    }
  }
  
  // Find lines in original that don't exist in extracted
  for (let i = 0; i < origNorm.length; i++) {
    if (origNorm[i].length < 3) continue;
    let found = false;
    for (let j = 0; j < extNorm.length; j++) {
      if (extNorm[j].includes(origNorm[i]) || origNorm[i].includes(extNorm[j])) {
        found = true;
        break;
      }
    }
    if (!found) {
      let bestMatch = '';
      let bestScore = 0;
      for (let j = 0; j < extNorm.length; j++) {
        const common = longestCommonSubstring(origNorm[i], extNorm[j]);
        if (common.length > bestScore) {
          bestScore = common.length;
          bestMatch = extNorm[j];
        }
      }
      if (bestScore < origNorm[i].length * 0.5) {
        differences.push({
          type: 'MISSING_IN_TSX',
          original: origNorm[i]
        });
      }
    }
  }
  
  return { match: differences.length === 0, differences };
}

function longestCommonSubstring(a, b) {
  if (!a || !b) return '';
  let longest = '';
  for (let i = 0; i < a.length; i++) {
    for (let len = 1; i + len <= a.length; len++) {
      const sub = a.substring(i, i + len);
      if (b.includes(sub) && sub.length > longest.length) {
        longest = sub;
      }
      if (i + len > a.length) break;
    }
  }
  return longest;
}

function findCharDiff(a, b) {
  // Find first difference position
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return 'identical';
  
  const context = 30;
  const start = Math.max(0, i - context);
  const endA = Math.min(a.length, i + context);
  const endB = Math.min(b.length, i + context);
  
  return `At position ${i}: TSX="...${a.substring(start, endA)}..." vs ORIG="...${b.substring(start, endB)}..."`;
}

// Main comparison
console.log('=== TERM FILE COMPARISON: TSX vs ORIGINAL WEBSITE ===\n');

for (const term of terms) {
  const extractedPath = path.join(__dirname, 'extracted-texts', `${term}.txt`);
  const extracted = cleanExtracted(fs.readFileSync(extractedPath, 'utf-8'));
  
  // Read saved original (we'll save them first)
  const origPath = path.join(__dirname, 'original-texts', `${term}.txt`);
  if (!fs.existsSync(origPath)) {
    console.log(`[${term}] SKIP - no original text file found at ${origPath}`);
    continue;
  }
  
  const original = cleanOriginal(fs.readFileSync(origPath, 'utf-8'));
  
  // Normalize both for comparison
  const normExt = normalizeForCompare(extracted);
  const normOrig = normalizeForCompare(original);
  
  console.log(`\n=== ${term} ===`);
  console.log(`  Extracted length: ${normExt.length}`);
  console.log(`  Original length:  ${normOrig.length}`);
  
  if (normExt === normOrig) {
    console.log(`  Result: ✅ MATCH - texts are identical`);
  } else {
    console.log(`  Result: ❌ DIFFERENCES FOUND`);
    
    // Find first difference
    let diffPos = 0;
    while (diffPos < normExt.length && diffPos < normOrig.length && normExt[diffPos] === normOrig[diffPos]) diffPos++;
    
    const ctx = 80;
    console.log(`  First diff at position ${diffPos}:`);
    console.log(`    TSX:  "...${normExt.substring(Math.max(0, diffPos-40), diffPos)}[HERE]${normExt.substring(diffPos, diffPos+ctx)}..."`);
    console.log(`    ORIG: "...${normOrig.substring(Math.max(0, diffPos-40), diffPos)}[HERE]${normOrig.substring(diffPos, diffPos+ctx)}..."`);
    
    // Count total differences
    let diffCount = 0;
    let i = 0, j = 0;
    while (i < normExt.length && j < normOrig.length) {
      if (normExt[i] !== normOrig[j]) {
        diffCount++;
        // Try to resync
        let foundSync = false;
        for (let skip = 1; skip < 50; skip++) {
          if (i + skip < normExt.length && normExt.substring(i + skip, i + skip + 10) === normOrig.substring(j, j + 10)) {
            i += skip;
            foundSync = true;
            break;
          }
          if (j + skip < normOrig.length && normExt.substring(i, i + 10) === normOrig.substring(j + skip, j + skip + 10)) {
            j += skip;
            foundSync = true;
            break;
          }
        }
        if (!foundSync) { i++; j++; }
      } else {
        i++; j++;
      }
    }
    console.log(`  Approximate difference regions: ${diffCount}`);
    
    // Show all difference regions
    console.log(`\n  --- Detailed differences ---`);
    let di = 0, dj = 0;
    let diffNum = 0;
    while (di < normExt.length && dj < normOrig.length) {
      if (normExt[di] !== normOrig[dj]) {
        diffNum++;
        const startDi = di, startDj = dj;
        
        // Find resync point
        let foundSync = false;
        for (let skip = 1; skip < 100; skip++) {
          if (di + skip < normExt.length && normExt.substring(di + skip, di + skip + 15) === normOrig.substring(dj, dj + 15)) {
            const extDiff = normExt.substring(startDi, di + skip);
            const origDiff = normOrig.substring(startDj, dj);
            if (diffNum <= 30) {
              console.log(`  Diff #${diffNum} at pos ~${startDi}:`);
              console.log(`    TSX:  "${extDiff}"`);
              console.log(`    ORIG: "${origDiff || '(empty)'}"`);
            }
            di += skip;
            foundSync = true;
            break;
          }
          if (dj + skip < normOrig.length && normExt.substring(di, di + 15) === normOrig.substring(dj + skip, dj + skip + 15)) {
            const extDiff = normExt.substring(startDi, di);
            const origDiff = normOrig.substring(startDj, dj + skip);
            if (diffNum <= 30) {
              console.log(`  Diff #${diffNum} at pos ~${startDi}:`);
              console.log(`    TSX:  "${extDiff || '(empty)'}"`);
              console.log(`    ORIG: "${origDiff}"`);
            }
            dj += skip;
            foundSync = true;
            break;
          }
        }
        if (!foundSync) { di++; dj++; }
      } else {
        di++; dj++;
      }
    }
    if (diffNum > 30) {
      console.log(`  ... and ${diffNum - 30} more differences`);
    }
    console.log(`  Total difference regions: ${diffNum}`);
  }
}
