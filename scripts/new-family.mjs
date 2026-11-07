#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));

function scaffold(id) {
  return `import { defineFamily } from '../registry.js';

// Unregistered scaffold. Fill source-verified entries before importing this family.
// Keep each component, illustration, footprint and CAD reference together:
// {
//   component: {
//     id: '<stable-component-id>', name: '<exact part and board revision>',
//     manufacturer: '<manufacturer>', category: '<existing category>',
//     source: '<manufacturer datasheet/pinout URL>',
//     description: '<verified scope, voltage limits and any representative geometry>',
//     width: <drawing width>, height: <drawing height>, contactLayout: 'physical',
//     pins: [
//       { id: '<stable-pin-id>', number: '<physical terminal>', label: '<printed label>',
//         type: '<electrical type>', description: '<function and limits>',
//         x: <actual drawn pad center>, y: <actual drawn pad center>, surface: true },
//     ],
//   },
//   render(component, labels = true) {
//     // Return self-contained SVG markup from the documented side, without an outer <svg>.
//     // Draw pad centers at the same coordinates as the corresponding canvas contacts.
//   },
//   footprint: {
//     body: [<width in mm>, <height in mm>],
//     pads: [{ id: '<same stable-pin-id>', x: <mm>, y: <mm>, size: <mm>, drill: <mm> }],
//     note: '<manufacturer land-pattern reference or explicit reference-carrier scope>',
//   },
//   // Optional verified manufacturer CAD; omit when unavailable:
//   // model: { label: '<manufacturer CAD>', url: '<manufacturer CAD URL>' },
// }
const entries = [
  // Add verified entries here. An empty family intentionally fails registration.
];

export default defineFamily('${id}', entries);
`;
}

export async function createFamilyScaffold(id, { root = repositoryRoot } = {}) {
  if (typeof id !== 'string' || id.length > 80 || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id)) {
    throw new Error('Use a lowercase family ID with letters, numbers and single hyphens, starting with a letter.');
  }
  const filename = resolve(root, 'src/catalog/families', `catalog-${id}.js`);
  await mkdir(dirname(filename), { recursive: true });
  try {
    await writeFile(filename, scaffold(id), { flag: 'wx' });
  } catch (error) {
    if (error.code === 'EEXIST') throw new Error(`Family file already exists: ${filename}`);
    throw error;
  }
  const name = id.replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase()) + 'Family';
  return { filename, importStatement: `import ${name} from './families/catalog-${id}.js';`, listEntry: `  ${name},` };
}

async function main(args) {
  if (args.includes('--help')) {
    console.log('Usage: node scripts/new-family.mjs <family-id> [--root <destination>]\nCreate one unregistered, source-first family scaffold. Existing files are never overwritten.');
    return;
  }
  if (!args[0] || args[0].startsWith('-') || args.length !== 1 && (args.length !== 3 || args[1] !== '--root' || !args[2] || args[2].startsWith('--'))) {
    throw new Error('Usage: node scripts/new-family.mjs <family-id> [--root <destination>]');
  }
  const result = await createFamilyScaffold(args[0], args.length === 3 ? { root: resolve(args[2]) } : {});
  console.log(`Created ${result.filename}\nThe family is unregistered and contains no hardware entries.\nFill its verified component/source/pin/artwork/footprint data first; importing the empty scaffold intentionally fails.\n\nThen add exactly one import to src/catalog/catalog-families.js:\n${result.importStatement}\n\nAdd exactly one item inside its catalogFamilies list:\n${result.listEntry}\n\nCheck the registered family with:\nnode scripts/catalog.mjs`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
