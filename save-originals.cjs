/**
 * 원본 사이트에서 가져온 텍스트를 정규화하여 저장하는 스크립트
 * 웹에서 가져온 원본 텍스트 파일들을 original-texts/ 디렉토리에 저장
 */
const fs = require('fs');
const path = require('path');

function normalizeOriginal(text) {
  // footer 제거 ([About] 이후)
  let footerIdx = text.indexOf('\n[About]');
  if (footerIdx > 0) text = text.substring(0, footerIdx);
  // "## Additional Links" 이후도 제거
  let addLinksIdx = text.indexOf('## Additional Links');
  if (addLinksIdx > 0) text = text.substring(0, addLinksIdx);
  
  // markdown heading markers 제거
  text = text.replace(/^#{1,6}\s*/gm, '');
  // 링크 텍스트만 남기기 [(text)](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // HTML entities
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&apos;/g, "'");
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&nbsp;/g, ' ');
  // 공백 정규화
  text = text.replace(/[ \t]+/g, ' ');
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  
  return text;
}

const outDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// stdin에서 읽기
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node save-originals.cjs <name> <input-file>');
  process.exit(1);
}

const name = args[0];
const inputFile = args[1];
const content = fs.readFileSync(inputFile, 'utf-8');
const normalized = normalizeOriginal(content);
const outPath = path.join(outDir, name + '.txt');
fs.writeFileSync(outPath, normalized, 'utf-8');
console.log(`Saved: ${outPath} (${normalized.length} chars)`);
