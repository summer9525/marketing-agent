const fs = require('fs');
const path = require('path');

const originalDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir);

// Read all raw text files from raw-originals/ directory
const rawDir = path.join(__dirname, 'raw-originals');
if (!fs.existsSync(rawDir)) {
  console.log('raw-originals/ directory not found. Create it first with the fetched content.');
  process.exit(1);
}

const files = fs.readdirSync(rawDir).filter(f => f.endsWith('.txt'));
for (const file of files) {
  const raw = fs.readFileSync(path.join(rawDir, file), 'utf-8');
  fs.writeFileSync(path.join(originalDir, file), raw, 'utf-8');
  console.log(`Copied: ${file} (${raw.length} chars)`);
}
