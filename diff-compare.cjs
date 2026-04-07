/**
 * 원본 사이트 텍스트와 추출된 TSX 텍스트를 비교하는 스크립트
 * 사용법: node diff-compare.cjs <extracted-file> <original-file>
 */
const fs = require('fs');
const path = require('path');

function normalize(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .join('\n');
}

// 원본 사이트 텍스트에서 본문만 추출 (footer 이전까지)
function extractBody(text) {
  // [About] 이후는 footer
  const footerIdx = text.indexOf('\n[About]');
  if (footerIdx > 0) text = text.substring(0, footerIdx);
  // "## Additional Links" 이후도 footer
  const addLinksIdx = text.indexOf('## Additional Links');
  if (addLinksIdx > 0) text = text.substring(0, addLinksIdx);
  // markdown heading markers 제거
  text = text.replace(/^#{1,6}\s*/gm, '');
  // 링크 텍스트만 남기기 [(text)](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  return text;
}

function findDifferences(extracted, original) {
  const extLines = normalize(extracted).split('\n');
  const orgLines = normalize(extractBody(original)).split('\n');
  
  const diffs = [];
  
  // 간단한 LCS 기반 diff
  let ei = 0, oi = 0;
  while (ei < extLines.length && oi < orgLines.length) {
    if (extLines[ei] === orgLines[oi]) {
      ei++; oi++;
      continue;
    }
    
    // 가까운 매칭 찾기
    let foundExt = -1, foundOrg = -1;
    for (let look = 1; look < 5; look++) {
      if (oi + look < orgLines.length && extLines[ei] === orgLines[oi + look]) {
        foundOrg = oi + look;
        break;
      }
      if (ei + look < extLines.length && extLines[ei + look] === orgLines[oi]) {
        foundExt = ei + look;
        break;
      }
    }
    
    if (foundOrg > 0) {
      // 원본에 있지만 추출에 없는 줄
      for (let k = oi; k < foundOrg; k++) {
        diffs.push({ type: 'MISSING_IN_TSX', orgLine: k + 1, text: orgLines[k] });
      }
      oi = foundOrg;
    } else if (foundExt > 0) {
      // 추출에 있지만 원본에 없는 줄
      for (let k = ei; k < foundExt; k++) {
        diffs.push({ type: 'EXTRA_IN_TSX', extLine: k + 1, text: extLines[k] });
      }
      ei = foundExt;
    } else {
      // 줄이 다름
      diffs.push({ 
        type: 'DIFFERENT', 
        extLine: ei + 1, 
        orgLine: oi + 1,
        extracted: extLines[ei],
        original: orgLines[oi]
      });
      ei++; oi++;
    }
  }
  
  // 남은 줄 처리
  while (ei < extLines.length) {
    diffs.push({ type: 'EXTRA_IN_TSX', extLine: ei + 1, text: extLines[ei] });
    ei++;
  }
  while (oi < orgLines.length) {
    diffs.push({ type: 'MISSING_IN_TSX', orgLine: oi + 1, text: orgLines[oi] });
    oi++;
  }
  
  return diffs;
}

// Main
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node diff-compare.cjs <extracted.txt> <original.txt>');
  process.exit(1);
}

const extracted = fs.readFileSync(args[0], 'utf-8');
const original = fs.readFileSync(args[1], 'utf-8');

const diffs = findDifferences(extracted, original);

if (diffs.length === 0) {
  console.log('✅ 차이 없음! 텍스트가 동일합니다.');
} else {
  console.log(`⚠️ ${diffs.length}개 차이 발견:\n`);
  for (const d of diffs) {
    if (d.type === 'DIFFERENT') {
      console.log(`[다름] 추출 L${d.extLine} vs 원본 L${d.orgLine}`);
      console.log(`  TSX: ${d.extracted.substring(0, 120)}`);
      console.log(`  원본: ${d.original.substring(0, 120)}`);
      console.log();
    } else if (d.type === 'MISSING_IN_TSX') {
      console.log(`[TSX에 없음] 원본 L${d.orgLine}: ${d.text.substring(0, 120)}`);
      console.log();
    } else if (d.type === 'EXTRA_IN_TSX') {
      console.log(`[TSX에 추가됨] 추출 L${d.extLine}: ${d.text.substring(0, 120)}`);
      console.log();
    }
  }
}
