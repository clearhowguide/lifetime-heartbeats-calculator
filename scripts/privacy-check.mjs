import fs from 'node:fs';
import path from 'node:path';

const sourceDirectory = new URL('../src/', import.meta.url);

const forbiddenPatterns = [
  { label: 'fetch()', regex: /\bfetch\s*\(/ },
  { label: 'XMLHttpRequest', regex: /\bXMLHttpRequest\b/ },
  { label: 'WebSocket', regex: /\bWebSocket\b/ },
  { label: 'localStorage', regex: /\blocalStorage\b/ },
  { label: 'sessionStorage', regex: /\bsessionStorage\b/ },
  { label: 'IndexedDB', regex: /\bindexedDB\b/i },
  { label: 'document.cookie', regex: /\bdocument\.cookie\b/ },
  { label: 'sendBeacon', regex: /\bnavigator\.sendBeacon\b/ },
  { label: 'gtag()', regex: /\bgtag\s*\(/ },
  { label: 'umami.track()', regex: /\bumami\.track\s*\(/ }
];

const allowedExtensions = new Set([
  '.astro',
  '.js',
  '.mjs',
  '.ts',
  '.tsx',
  '.jsx'
]);

function walk(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const directoryPath = sourceDirectory.pathname;
const files = walk(directoryPath);

let failed = false;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');

  for (const pattern of forbiddenPatterns) {
    if (pattern.regex.test(source)) {
      console.error(
        `FAIL: ${pattern.label} found in ${path.relative(directoryPath, file)}`
      );

      failed = true;
    }
  }
}

if (failed) {
  console.error('');
  console.error(
    'Privacy check failed. Review the source before publishing.'
  );

  process.exit(1);
}

console.log(
  'PASS: no forbidden network, browser-storage or analytics patterns found.'
);
