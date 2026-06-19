const fs = require('fs');
const path = require('path');

const folder = './out';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace absolute paths with relative
  content = content.replace(/href="\/(?!\/)/g, 'href="./');
  content = content.replace(/src="\/(?!\/)/g, 'src="./');
  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (full.endsWith('.html') || full.endsWith('.js') || full.endsWith('.css')) {
      fixFile(full);
    }
  }
}

walk(folder);
console.log('✅ Paths fixed.');