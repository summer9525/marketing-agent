// Usage: echo "content" | node write-original.cjs <filename>
const fs = require('fs');
const path = require('path');
const name = process.argv[2];
if (!name) { console.error('Usage: node write-original.cjs <name>'); process.exit(1); }
const dir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
let data = '';
process.stdin.setEncoding('utf-8');
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => {
  const outPath = path.join(dir, name + '.txt');
  fs.writeFileSync(outPath, data, 'utf-8');
  console.log(`Saved: ${outPath} (${data.length} chars)`);
});
