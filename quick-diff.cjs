/**
 * 추출된 텍스트 파일 2개를 비교하여 차이점 출력
 * Usage: node quick-diff.cjs file1.txt file2.txt
 */
const fs = require('fs');

function norm(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .split('\n').map(l => l.trim()).filter(l => l.length > 0);
}

const f1 = process.argv[2];
const f2 = process.argv[3];
if (!f1 || !f2) { console.log('Usage: node quick-diff.cjs file1 file2'); process.exit(1); }

const lines1 = norm(fs.readFileSync(f1, 'utf-8'));
const lines2 = norm(fs.readFileSync(f2, 'utf-8'));

let diffs = 0;
let i = 0, j = 0;
while (i < lines1.length && j < lines2.length) {
  if (lines1[i] === lines2[j]) { i++; j++; continue; }
  
  // look ahead
  let found = false;
  for (let k = 1; k <= 5; k++) {
    if (j + k < lines2.length && lines1[i] === lines2[j + k]) {
      for (let m = j; m < j + k; m++) {
        console.log(`[F2에만] L${m+1}: ${lines2[m].substring(0,120)}`);
        diffs++;
      }
      j += k; found = true; break;
    }
    if (i + k < lines1.length && lines1[i + k] === lines2[j]) {
      for (let m = i; m < i + k; m++) {
        console.log(`[F1에만] L${m+1}: ${lines1[m].substring(0,120)}`);
        diffs++;
      }
      i += k; found = true; break;
    }
  }
  if (!found) {
    // find diff position
    let p = 0;
    while (p < lines1[i].length && p < lines2[j].length && lines1[i][p] === lines2[j][p]) p++;
    const s = Math.max(0, p - 30);
    console.log(`[다름] L${i+1} vs L${j+1} (pos ${p}):`);
    console.log(`  F1: ...${lines1[i].substring(s, p+40)}...`);
    console.log(`  F2: ...${lines2[j].substring(s, p+40)}...`);
    diffs++;
    i++; j++;
  }
}
while (i < lines1.length) { console.log(`[F1에만] L${i+1}: ${lines1[i].substring(0,120)}`); diffs++; i++; }
while (j < lines2.length) { console.log(`[F2에만] L${j+1}: ${lines2[j].substring(0,120)}`); diffs++; j++; }

console.log(`\n총 차이: ${diffs}개 (F1: ${lines1.length}줄, F2: ${lines2.length}줄)`);
