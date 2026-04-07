/**
 * Save all 6 original term texts to original-texts/ directory
 * Run this after fetching from the website
 */
const fs = require('fs');
const path = require('path');

const originalDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir);

// Process each file passed as argument pairs: name1 file1 name2 file2 ...
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i += 2) {
  const name = args[i];
  const file = args[i + 1];
  if (!name || !file) break;
  const content = fs.readFileSync(file, 'utf-8');
  const outPath = path.join(originalDir, name + '.txt');
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`Saved: ${name}.txt (${content.length} chars)`);
}
