const fs = require('fs');
const path = require('path');

const terms = ['term-dfinery', 'term-adbrix', 'term-mobileindex', 'term-tvindex', 'term-tradingworks', 'term-advertisement'];

function cleanExtracted(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('<>')) cleaned = cleaned.slice(2);
  if (cleaned.endsWith(');')) cleaned = cleaned.slice(0, -2);
  return cleaned.trim();
}

function cleanOriginal(text) {
  let cleaned = text.trim();
  const aboutIdx = cleaned.indexOf('\n[About]');
  if (aboutIdx !== -1) cleaned = cleaned.substring(0, aboutIdx);
  cleaned = cleaned.replace(/^---\s*\n?/gm, '');
  cleaned = cleaned.replace(/^#{1,6}\s*/gm, '');
  cleaned = cleaned.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  cleaned = cleaned.replace(/\*\*([^*]*)\*\*/g, '$1');
  cleaned = cleaned.replace(/\*([^*]*)\*/g, '$1');
  cleaned = cleaned.replace(/^[•◦]\s*/gm, '');
  // Don't remove pipes - they might be in table data
  return cleaned.trim();
}

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}

console.log('=== TERM FILE COMPARISON: TSX (extracted) vs ORIGINAL WEBSITE ===\n');

for (const term of terms) {
  const extPath = path.join(__dirname, 'extracted-texts', `${term}.txt`);
  const origPath = path.join(__dirname, 'original-texts', `${term}.txt`);
  
  if (!fs.existsSync(origPath)) {
    console.log(`[${term}] ⚠️  No original text file. Skipping.`);
    continue;
  }
  
  const ext = normalize(cleanExtracted(fs.readFileSync(extPath, 'utf-8')));
  const orig = normalize(cleanOriginal(fs.readFileSync(origPath, 'utf-8')));
  
  console.log(`\n========== ${term} ==========`);
  console.log(`  TSX text length:  ${ext.length} chars`);
  console.log(`  Orig text length: ${orig.length} chars`);
  
  if (ext === orig) {
    console.log(`  ✅ MATCH`);
    continue;
  }
  
  console.log(`  ❌ DIFFERENCES FOUND`);
  
  // Find all difference regions
  let i = 0, j = 0;
  let diffNum = 0;
  
  while (i < ext.length && j < orig.length) {
    if (ext[i] !== orig[j]) {
      diffNum++;
      const startI = i, startJ = j;
      
      // Try to resync
      let synced = false;
      for (let skip = 1; skip < 200; skip++) {
        const matchLen = 20;
        if (i + skip + matchLen <= ext.length && j + matchLen <= orig.length) {
          if (ext.substring(i + skip, i + skip + matchLen) === orig.substring(j, j + matchLen)) {
            const extChunk = ext.substring(startI, i + skip);
            const origChunk = orig.substring(startJ, j);
            console.log(`  Diff #${diffNum} (pos ~${startI}):`);
            console.log(`    TSX:  "${extChunk.substring(0, 120)}${extChunk.length > 120 ? '...' : ''}"`);
            console.log(`    ORIG: "${(origChunk || '(nothing)').substring(0, 120)}${origChunk.length > 120 ? '...' : ''}"`);
            i += skip;
            synced = true;
            break;
          }
        }
        if (j + skip + matchLen <= orig.length && i + matchLen <= ext.length) {
          if (ext.substring(i, i + matchLen) === orig.substring(j + skip, j + skip + matchLen)) {
            const extChunk = ext.substring(startI, i);
            const origChunk = orig.substring(startJ, j + skip);
            console.log(`  Diff #${diffNum} (pos ~${startI}):`);
            console.log(`    TSX:  "${(extChunk || '(nothing)').substring(0, 120)}${extChunk.length > 120 ? '...' : ''}"`);
            console.log(`    ORIG: "${origChunk.substring(0, 120)}${origChunk.length > 120 ? '...' : ''}"`);
            j += skip;
            synced = true;
            break;
          }
        }
      }
      if (!synced) {
        // Show context and skip
        console.log(`  Diff #${diffNum} (pos ~${startI}): UNABLE TO RESYNC`);
        console.log(`    TSX context:  "${ext.substring(startI, startI + 80)}..."`);
        console.log(`    ORIG context: "${orig.substring(startJ, startJ + 80)}..."`);
        i++; j++;
      }
    } else {
      i++; j++;
    }
  }
  
  // Check remaining text
  if (i < ext.length) {
    console.log(`  Extra text in TSX (${ext.length - i} chars): "${ext.substring(i, i + 100)}..."`);
  }
  if (j < orig.length) {
    console.log(`  Extra text in ORIG (${orig.length - j} chars): "${orig.substring(j, j + 100)}..."`);
  }
  
  console.log(`  Total differences: ${diffNum}`);
}
