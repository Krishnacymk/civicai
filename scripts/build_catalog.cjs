const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('D:/civicai/frontend/src/data/schemes.ts', 'utf8');
const arrayCode = content.substring(
  content.indexOf('export const SCHEMES: Scheme[] = [') + 'export const SCHEMES: Scheme[] = '.length,
  content.indexOf('export const CATEGORIES_CONFIG =')
).trim().replace(/;\s*$/, '');
const existingSchemes = eval(arrayCode);
const centralSchemes = existingSchemes.filter(s => s.governmentLevel === 'central');

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const CENTRAL_SCHEMES: Scheme[] = ' + JSON.stringify(centralSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/central.ts', fileContent, 'utf8');
console.log('Central schemes written successfully:', centralSchemes.length);
