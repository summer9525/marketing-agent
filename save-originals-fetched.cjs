/**
 * Save fetched original website texts to original-texts/ directory
 * Then run comparison with extracted texts
 */
const fs = require('fs');
const path = require('path');

const originalDir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir);

// Read raw fetched content from stdin or from embedded data
// We'll use command line args: node save-originals-fetched.cjs <name> <file>
const name = process.argv[2];
const inputFile = process.argv[3];

if (name && inputFile) {
  const content = fs.readFileSync(inputFile, 'utf-8');
  const outPath = path.join(originalDir, name + '.txt');
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`Saved: ${outPath} (${content.length} chars)`);
} else {
  console.log('Usage: node save-originals-fetched.cjs <name> <input-file>');
}
