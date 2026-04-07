const fs = require('fs');
const path = require('path');

// This script saves the cleaned original texts from the website fetches
// The texts were fetched via webFetch rendered mode and need to be cleaned

function cleanOriginal(text) {
  let cleaned = text.trim();
  
  // Remove everything from [About] onwards (footer)
  const aboutIdx = cleaned.indexOf('\n[About]');
  if (aboutIdx !== -1) cleaned = cleaned.substring(0, aboutIdx);
  
  // Remove leading --- separator
  cleaned = cleaned.replace(/^---\s*\n/, '');
  
  // Remove markdown headers (##, ###, ####) but keep text
  cleaned = cleaned.replace(/^#{1,6}\s*/gm, '');
  
  // Remove markdown link syntax [text](url) -> text
  cleaned = cleaned.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  
  // Remove markdown bold/italic
  cleaned = cleaned.replace(/\*\*([^*]*)\*\*/g, '$1');
  cleaned = cleaned.replace(/\*([^*]*)\*/g, '$1');
  
  // Remove bullet markers (• ◦)
  cleaned = cleaned.replace(/^[•◦]\s*/gm, '');
  
  // Remove table pipe characters
  cleaned = cleaned.replace(/\|/g, '');
  
  return cleaned.trim();
}

const dir = path.join(__dirname, 'original-texts');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// The originals need to be saved from the webFetch results
// Since we can't re-fetch here, we'll just note that the comparison script
// needs the original-texts files to exist

console.log('Original texts directory:', dir);
console.log('Files:', fs.readdirSync(dir));
