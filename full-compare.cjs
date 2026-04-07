/**
 * 추출된 TSX 텍스트와 원본 사이트 텍스트를 줄 단위로 비교
 * 원본 텍스트는 original-texts/ 디렉토리에 수동으로 저장해야 함
 */
const fs = require('fs');
const path = require('path');

function normalize(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\u00a0/g, ' ')  // non-breaking space
    .replace(/\u200b/g, '')   // zero-width space
    .replace(/[""]/g, '"')    // smart quotes
    .replace(/['']/g, "'")    // smart quotes
    .replace(/–/g, '-')       // en-dash
    .replace(/—/g, '-')       // em-dash
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .join('\n');
}

function cleanOriginal(text) {
  // footer 제거
  let idx = text.indexOf('\n[About]');
  if (idx > 0) text = text.substring(0, idx);
  idx = text.indexOf('## Additional Links');
  if (idx > 0) text = text.substring(0, idx);
  // markdown heading 제거
  text = text.replace(/^#{1,6}\s*/gm, '');
  // 링크 -> 텍스트만
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  return text;
}

// 두 텍스트의 줄을 비교하여 차이점 찾기
function compare(extractedText, originalText) {
  const ext = normalize(extractedText).split('\n');
  const org = normalize(cleanOriginal(originalText)).split('\n');
  
  const results = [];
  let ei = 0, oi = 0;
  let matchCount = 0;
  
  while (ei < ext.length && oi < org.length) {
    if (ext[ei] === org[oi]) {
      matchCount++;
      ei++; oi++;
      continue;
    }
    
    // 가까운 매칭 찾기 (최대 10줄 앞까지)
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
        results.push({ type: 'MISSING', orgLine: k + 1, text: org[k].substring(0, 150) });
      }
      oi += bestMatch.skip;
    } else if (bestMatch && bestMatch.type === 'ext_skip') {
      for (let k = ei; k < ei + bestMatch.skip; k++) {
        results.push({ type: 'EXTRA', extLine: k + 1, text: ext[k].substring(0, 150) });
      }
      ei += bestMatch.skip;
    } else {
      // 줄이 다름 - 어디가 다른지 찾기
      const e = ext[ei];
      const o = org[oi];
      let diffPos = 0;
      while (diffPos < e.length && diffPos < o.length && e[diffPos] === o[diffPos]) diffPos++;
      
      const context = 20;
      const start = Math.max(0, diffPos - context);
      const eSnippet = e.substring(start, diffPos + context);
      const oSnippet = o.substring(start, diffPos + context);
      
      results.push({
        type: 'DIFF',
        extLine: ei + 1,
        orgLine: oi + 1,
        position: diffPos,
        extSnippet: `...${eSnippet}...`,
        orgSnippet: `...${oSnippet}...`,
        extFull: e.substring(0, 200),
        orgFull: o.substring(0, 200)
      });
      ei++; oi++;
    }
  }
  
  while (ei < ext.length) {
    results.push({ type: 'EXTRA', extLine: ei + 1, text: ext[ei].substring(0, 150) });
    ei++;
  }
  while (oi < org.length) {
    results.push({ type: 'MISSING', orgLine: oi + 1, text: org[oi].substring(0, 150) });
    oi++;
  }
  
  return { results, matchCount, extTotal: ext.length, orgTotal: org.length };
}

// Main
const extractedDir = path.join(__dirname, 'extracted-texts');
const originalDir = path.join(__dirname, 'original-texts');

const files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.txt'));

let totalDiffs = 0;
for (const file of files) {
  const name = file.replace('.txt', '');
  const origFile = path.join(originalDir, file);
  
  if (!fs.existsSync(origFile)) {
    console.log(`⏭️  ${name}: 원본 파일 없음 (${origFile})`);
    continue;
  }
  
  const extracted = fs.readFileSync(path.join(extractedDir, file), 'utf-8');
  const original = fs.readFileSync(origFile, 'utf-8');
  
  const { results, matchCount, extTotal, orgTotal } = compare(extracted, original);
  
  if (results.length === 0) {
    console.log(`✅ ${name}: 동일 (${matchCount}줄 일치)`);
  } else {
    console.log(`\n⚠️  ${name}: ${results.length}개 차이 발견 (일치: ${matchCount}/${Math.max(extTotal, orgTotal)}줄)`);
    for (const r of results) {
      if (r.type === 'DIFF') {
        console.log(`  [다름] 위치 ${r.position}자`);
        console.log(`    TSX: ${r.extSnippet}`);
        console.log(`    원본: ${r.orgSnippet}`);
      } else if (r.type === 'MISSING') {
        console.log(`  [TSX에 없음] 원본L${r.orgLine}: ${r.text}`);
      } else if (r.type === 'EXTRA') {
        console.log(`  [TSX에 추가] 추출L${r.extLine}: ${r.text}`);
      }
    }
    totalDiffs += results.length;
  }
}

console.log(`\n총 차이: ${totalDiffs}개`);
