/**
 * stdin에서 원본 사이트 텍스트를 읽어 정규화하여 파일로 저장
 * Usage: echo "text" | node normalize-and-save.cjs <output-name>
 * Or: node normalize-and-save.cjs <output-name> < input.txt
 */
const fs = require('fs');
const path = require('path');

const name = process.argv[2];
if (!name) { console.log('Usage: node normalize-and-save.cjs <name>'); process.exit(1); }

let text = fs.readFileSync(0, 'utf-8'); // read from stdin

// footer 제거
let idx = text.indexOf('\n[About]');
if (idx > 0) text = text.substring(0, idx);
idx = text.indexOf('## Additional Links');
if (idx > 0) text = text.substring(0, idx);

// --- 구분선 제거
text = text.replace(/^---\s*$/gm, '');
// markdown heading 제거
text = text.replace(/^#{1,6}\s*/gm, '');
// 링크 -> 텍스트만
text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
// 테이블 구분자 제거
text = text.replace(/^\|[\s-|]+\|$/gm, '');
// 공백 정규화
text = text.replace(/[ \t]+/g, ' ');
text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');

const outDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, name + '.txt');
fs.writeFileSync(outPath, text, 'utf-8');
console.log(`Saved: ${name}.txt (${text.length} chars, ${text.split('\n').length} lines)`);
