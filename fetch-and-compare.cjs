/**
 * 원본 사이트 텍스트 파일(raw fetch 결과)을 정규화하여 original-texts/에 저장
 * Usage: node fetch-and-compare.cjs <name> <raw-file>
 */
const fs = require('fs');
const path = require('path');

function cleanAndNormalize(text) {
  // footer 제거
  let idx = text.indexOf('\n[About]');
  if (idx > 0) text = text.substring(0, idx);
  idx = text.indexOf('## Additional Links');
  if (idx > 0) text = text.substring(0, idx);
  
  // --- 구분선 제거
  text = text.replace(/^---\s*$/gm, '');
  
  // markdown heading 제거
  text = text.replace(/^#{1,6}\s*/gm, '');
  
  // 링크 -> 텍스트만 [(text)](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  
  // 테이블 구분자 제거 (| --- | --- |)
  text = text.replace(/^\|[\s-|]+\|$/gm, '');
  
  // 공백 정규화
  text = text.replace(/[ \t]+/g, ' ');
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  
  return text;
}

const name = process.argv[2];
const rawFile = process.argv[3];

if (!name || !rawFile) {
  console.log('Usage: node fetch-and-compare.cjs <name> <raw-file>');
  process.exit(1);
}

const outDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const raw = fs.readFileSync(rawFile, 'utf-8');
const cleaned = cleanAndNormalize(raw);
const outPath = path.join(outDir, name + '.txt');
fs.writeFileSync(outPath, cleaned, 'utf-8');
console.log(`Saved: ${name}.txt (${cleaned.length} chars)`);
