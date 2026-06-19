const fs = require('fs');
const path = require('path');

const folder = './out';

function addBaseTag(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Insert <base href="./" /> right after <head>
  content = content.replace(/<head>/, '<head><base href="./" />');
  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (full.endsWith('.html')) {
      addBaseTag(full);
    }
  }
}

walk(folder);
console.log('✅ <base> tag added to all HTML files.');