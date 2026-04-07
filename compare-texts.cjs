const fs = require('fs');
const path = require('path');

function extractText(tsxContent) {
  let text = tsxContent;
  text = text.replace(/export\s+const\s+\w+\s*=\s*\(\)\s*=>\s*[({]/g, '');
  text = text.replace(/export\s+const\s+\w+\s*=\s*\(\)\s*=>\s*\{[\s\S]*?return\s*\(/g, '');
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '$2');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&apos;/g, "'");
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/\{[\s\S]*?\.map\([\s\S]*?\)\}/g, '');
  text = text.replace(/\{[^}]*\}/g, '');
  text = text.replace(/[ \t]+/g, ' ');
  text = text.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
  return text;
}

const files = [
  { file: 'src/data/term-dfinery.tsx', name: 'term-dfinery' },
  { file: 'src/data/term-adbrix.tsx', name: 'term-adbrix' },
  { file: 'src/data/term-mobileindex.tsx', name: 'term-mobileindex' },
  { file: 'src/data/term-tvindex.tsx', name: 'term-tvindex' },
  { file: 'src/data/term-tradingworks.tsx', name: 'term-tradingworks' },
  { file: 'src/data/term-advertisement.tsx', name: 'term-advertisement' },
  { file: 'src/data/privacy-content.tsx', name: 'privacy-content' },
  { file: 'src/data/privacy-custom-ad.tsx', name: 'privacy-custom-ad' },
  { file: 'src/data/copyright-content.tsx', name: 'copyright-content' },
  { file: 'src/data/old-terms/dfinery-210831.tsx', name: 'old-dfinery-210831' },
  { file: 'src/data/old-terms/dfinery-230531.tsx', name: 'old-dfinery-230531' },
  { file: 'src/data/old-terms/dfinery-230601.tsx', name: 'old-dfinery-230601' },
  { file: 'src/data/old-terms/mobileindex-20160701.tsx', name: 'old-mobileindex-20160701' },
  { file: 'src/data/old-terms/mobileindex-20210924.tsx', name: 'old-mobileindex-20210924' },
  { file: 'src/data/old-terms/mobileindex-20220801.tsx', name: 'old-mobileindex-20220801' },
  { file: 'src/data/old-privacy/privacy-160520.tsx', name: 'old-privacy-160520' },
  { file: 'src/data/old-privacy/privacy-170715.tsx', name: 'old-privacy-170715' },
  { file: 'src/data/old-privacy/privacy-171101.tsx', name: 'old-privacy-171101' },
  { file: 'src/data/old-privacy/privacy-200717.tsx', name: 'old-privacy-200717' },
  { file: 'src/data/old-privacy/privacy-210801.tsx', name: 'old-privacy-210801' },
  { file: 'src/data/old-privacy/privacy-220117.tsx', name: 'old-privacy-220117' },
  { file: 'src/data/old-privacy/privacy-230417.tsx', name: 'old-privacy-230417' },
  { file: 'src/data/old-privacy/privacy-230901.tsx', name: 'old-privacy-230901' },
  { file: 'src/data/old-privacy/privacy-241115.tsx', name: 'old-privacy-241115' },
  { file: 'src/data/old-privacy/privacy-250520.tsx', name: 'old-privacy-250520' },
  { file: 'src/data/old-privacy/privacy-251120.tsx', name: 'old-privacy-251120' },
];

const outDir = path.join(__dirname, 'extracted-texts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

for (const { file, name } of files) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIP: ' + file + ' (not found)');
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  const extracted = extractText(content);
  const outPath = path.join(outDir, name + '.txt');
  fs.writeFileSync(outPath, extracted, 'utf-8');
  console.log('OK: ' + name + '.txt (' + extracted.length + ' chars)');
}

console.log('\nDone! Extracted texts saved to: ' + outDir);
