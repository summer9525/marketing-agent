/**
 * 원본 사이트 텍스트를 정리하여 original-texts/에 저장하고
 * extracted-texts/와 비교하는 통합 스크립트
 */
const fs = require('fs');
const path = require('path');

// 원본 사이트 텍스트 정리 함수
function cleanOriginalSiteText(rawText) {
  let text = rawText;
  
  // footer 제거 - [About] 이후 모두 제거
  const footerIdx = text.indexOf('\n[About]');
  if (footerIdx > 0) text = text.substring(0, footerIdx);
  
  // Additional Links 제거
  const addLinksIdx = text.indexOf('## Additional Links');
  if (addLinksIdx > 0) text = text.substring(0, addLinksIdx);
  
  // 맨 앞의 --- 제거
  text = text.replace(/^---\s*\n/, '');
  
  // markdown heading 제거 (##, ###, ####)
  text = text.replace(/^#{1,6}\s*/gm, '');
  
  // markdown 링크 -> 텍스트만
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  
  // 공백 정리
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\u00a0/g, ' ');
  
  // 줄 정리
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  
  return text;
}

// TSX 추출 텍스트 정리 함수
function cleanExtractedText(text) {
  // 맨 앞의 <> 제거
  text = text.replace(/^<>\s*\n?/, '');
  // 맨 뒤의 ); 제거
  text = text.replace(/\);\s*$/, '');
  
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\u00a0/g, ' ');
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  
  return text;
}

// 두 텍스트를 줄 단위로 비교
function compareTexts(extText, orgText, name) {
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
    
    // 가까운 매칭 찾기
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
        diffs.push({ type: 'MISSING_IN_TSX', orgLine: k + 1, text: org[k].substring(0, 200) });
      }
      oi += bestMatch.skip;
    } else if (bestMatch && bestMatch.type === 'ext_skip') {
      for (let k = ei; k < ei + bestMatch.skip; k++) {
        diffs.push({ type: 'EXTRA_IN_TSX', extLine: k + 1, text: ext[k].substring(0, 200) });
      }
      ei += bestMatch.skip;
    } else {
      // 줄이 다름
      const e = ext[ei];
      const o = org[oi];
      let diffPos = 0;
      while (diffPos < e.length && diffPos < o.length && e[diffPos] === o[diffPos]) diffPos++;
      
      const ctx = 30;
      const start = Math.max(0, diffPos - ctx);
      
      diffs.push({
        type: 'DIFF',
        extLine: ei + 1,
        orgLine: oi + 1,
        position: diffPos,
        extSnippet: e.substring(start, diffPos + ctx),
        orgSnippet: o.substring(start, diffPos + ctx),
      });
      ei++; oi++;
    }
  }
  
  while (ei < ext.length) {
    diffs.push({ type: 'EXTRA_IN_TSX', extLine: ei + 1, text: ext[ei].substring(0, 200) });
    ei++;
  }
  while (oi < org.length) {
    diffs.push({ type: 'MISSING_IN_TSX', orgLine: oi + 1, text: org[oi].substring(0, 200) });
    oi++;
  }
  
  return { diffs, matchCount, extTotal: ext.length, orgTotal: org.length };
}

// Main
const extractedDir = path.join(__dirname, 'extracted-texts');
const originalDir = path.join(__dirname, 'original-texts');

if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir);

// 비교할 파일 목록
const files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.txt'));
const origFiles = fs.readdirSync(originalDir).filter(f => f.endsWith('.txt'));

console.log(`추출된 텍스트: ${files.length}개`);
console.log(`원본 텍스트: ${origFiles.length}개\n`);

let totalDiffs = 0;
let comparedCount = 0;
let skippedCount = 0;

for (const file of files) {
  const name = file.replace('.txt', '');
  const origFile = path.join(originalDir, file);
  
  if (!fs.existsSync(origFile)) {
    console.log(`⏭️  ${name}: 원본 파일 없음`);
    skippedCount++;
    continue;
  }
  
  const extracted = cleanExtractedText(fs.readFileSync(path.join(extractedDir, file), 'utf-8'));
  const original = cleanOriginalSiteText(fs.readFileSync(origFile, 'utf-8'));
  
  const { diffs, matchCount, extTotal, orgTotal } = compareTexts(extracted, original, name);
  comparedCount++;
  
  if (diffs.length === 0) {
    console.log(`✅ ${name}: 완전 일치 (${matchCount}줄)`);
  } else {
    console.log(`\n⚠️  ${name}: ${diffs.length}개 차이 (일치: ${matchCount}/${Math.max(extTotal, orgTotal)}줄)`);
    for (const d of diffs.slice(0, 20)) { // 최대 20개만 출력
      if (d.type === 'DIFF') {
        console.log(`  [다름] TSX L${d.extLine} vs 원본 L${d.orgLine} (pos ${d.position})`);
        console.log(`    TSX: ...${d.extSnippet}...`);
        console.log(`    원본: ...${d.orgSnippet}...`);
      } else if (d.type === 'MISSING_IN_TSX') {
        console.log(`  [TSX에 없음] 원본 L${d.orgLine}: ${d.text}`);
      } else if (d.type === 'EXTRA_IN_TSX') {
        console.log(`  [TSX에 추가] TSX L${d.extLine}: ${d.text}`);
      }
    }
    if (diffs.length > 20) {
      console.log(`  ... 외 ${diffs.length - 20}개 더`);
    }
    totalDiffs += diffs.length;
  }
}

console.log(`\n=== 요약 ===`);
console.log(`비교 완료: ${comparedCount}개, 건너뜀: ${skippedCount}개`);
console.log(`총 차이: ${totalDiffs}개`);
