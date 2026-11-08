#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { manufacturerName } from '../src/catalog/filter.js';

export const componentTreePath = fileURLToPath(new URL('../docs/COMPONENTS.md', import.meta.url));
const accuracyPath = new URL('../docs/catalog-kicad-accuracy.json', import.meta.url);
const marks = ['M', 'C', 'R', '?'];
const singleLine = value => String(value).replace(/\s+/g, ' ').trim();
const compare = (a, b) => {
  const lowerA = a.toLowerCase(), lowerB = b.toLowerCase();
  return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : a < b ? -1 : a > b ? 1 : 0;
};

export function accuracyByComponent(families, accuracy) {
  if (accuracy?.version !== 1 || !Array.isArray(accuracy.assessments)) throw new Error('Invalid catalog accuracy manifest.');
  const ids = new Set(families.flatMap(family => family.entries.map(entry => entry.component.id)));
  const assessed = new Map();
  for (const assessment of accuracy.assessments) {
    if (!marks.includes(assessment.footprint) || typeof assessment.evidence !== 'string' || !assessment.evidence.trim() ||
        !Array.isArray(assessment.components) || !assessment.components.length) {
      throw new Error('Each accuracy assessment needs a footprint mark, evidence and component IDs.');
    }
    for (const id of assessment.components) {
      if (!ids.has(id)) throw new Error(`Accuracy assessment refers to unknown component "${id}".`);
      if (assessed.has(id)) throw new Error(`Duplicate accuracy assessment for "${id}".`);
      assessed.set(id, assessment);
    }
  }
  return assessed;
}

function add(map, key, create) {
  if (!map.has(key)) map.set(key, create());
  return map.get(key);
}

function treeLines(nodes, prefix = '') {
  return nodes.flatMap((node, index) => {
    const last = index === nodes.length - 1;
    return [`${prefix}${last ? '└── ' : '├── '}${node.label}`,
      ...treeLines(node.children ?? [], prefix + (last ? '    ' : '│   '))];
  });
}

export function renderComponentTree(families, accuracy) {
  const assessed = accuracyByComponent(families, accuracy);
  const categories = new Map(), counts = Object.fromEntries(marks.map(mark => [mark, 0]));
  let total = 0, external = 0, insertable = 0, hosts = 0;
  for (const family of families) for (const entry of family.entries) {
    const { component } = entry;
    const category = add(categories, singleLine(component.category), () => new Map());
    const maker = add(category, manufacturerName(component.manufacturer), () => new Map());
    const entries = add(maker, family.id, () => []);
    const mark = assessed.get(component.id)?.footprint ?? '?';
    counts[mark]++;
    total++;
    if (entry.model?.url) external++;
    const breadboard = entry.mounting?.type === 'breadboard' ? 'H'
      : ['breadboard-module', 'breadboard-part'].includes(entry.mounting?.type) ? '+' : '-';
    if (breadboard === '+') insertable++;
    if (breadboard === 'H') hosts++;
    entries.push({ label: `${singleLine(component.name)} [${component.id}] [FP:${mark}] [3D:A] [CAD:${entry.model?.url ? '+' : '-'}] [BB:${breadboard}]` });
  }
  const nodes = [...categories].sort(([a], [b]) => compare(a, b)).map(([category, makers]) => {
    let categoryCount = 0;
    const children = [...makers].sort(([a], [b]) => compare(a, b)).map(([maker, groups]) => {
      let makerCount = 0;
      const children = [...groups].sort(([a], [b]) => compare(a, b)).map(([family, entries]) => {
        makerCount += entries.length;
        return { label: `${family} (${entries.length})`, children: entries.sort((a, b) => compare(a.label, b.label)) };
      });
      categoryCount += makerCount;
      return { label: `${maker} (${makerCount})`, children };
    });
    return { label: `${category} (${categoryCount})`, children };
  });
  return [
    '# Component library tree',
    '',
    'Generated from the live catalog. Do not edit the tree by hand.',
    '',
    `**${total} components · ${families.length} source families · ${categories.size} categories.**`,
    '',
    'Hierarchy: **library category → actual manufacturer → source family → component**. Categories and manufacturer names match the library filters; source families identify catalog ownership, not additional UI categories. Square-bracket IDs are stable saved-project identifiers.',
    '',
    '## KiCad accuracy marks',
    '',
    '| Mark | Meaning | Components |',
    '| --- | --- | ---: |',
    `| FP:M | Manufacturer-derived land/contact geometry for the stated package and reviewed scope. | ${counts.M} |`,
    `| FP:C | CAD/drawing-derived contact reference: source-board contact coordinates, not a complete mating or production footprint. | ${counts.C} |`,
    `| FP:R | Reference, approximate, mixed or off-board termination carrier. | ${counts.R} |`,
    `| FP:? | Accuracy not reviewed; do not assume manufacturer geometry. New/unclassified entries default here. | ${counts['?']} |`,
    `| 3D:A | Approximate generated WirePad WRL model. | ${total} |`,
    `| CAD:+ | A separate external CAD/reference link is available in the catalog. | ${external} |`,
    '',
    '**All current generated 3D models are approximate.** The [WRL exporter](../src/assets/kicad.js) constructs box geometry from [model layouts](../src/assets/model-layout.js); it does not import the external manufacturer CAD. A CAD link does not upgrade FP or 3D accuracy, and may identify a later mechanical reference rather than the exact electrical revision.',
    '',
    'M and C are scoped source assessments, not fabrication approval. Exports can omit mounting/support holes, antenna keepouts, thermal vias, paste segmentation or connector clearances. C patterns can include connector solder tails and reverse-side service pads exported on F.Cu. R patterns must not be substituted for the real board mating pattern. Read the specific footprint note and linked manufacturer source before manufacturing. Symbol/pad-number tests and successful KiCad parsing establish consistency and syntax, not physical accuracy.',
    '',
    'Explicit per-component assessments and their evidence are maintained in [catalog-kicad-accuracy.json](catalog-kicad-accuracy.json). No mark is promoted automatically from a URL, descriptive keyword, test result or geometry fixture. A missing assessment is always `FP:?`. `CAD:-` means no separate external CAD link is recorded.',
    '',
    '## Breadboard insertion marks',
    '',
    '| Mark | Meaning | Components |',
    '| --- | --- | ---: |',
    `| BB:+ | Reviewed direct insertion profile; fit checks every declared lead, physical pitch and electrical strip. | ${insertable} |`,
    `| BB:H | Configurable breadboard host. | ${hosts} |`,
    `| BB:- | No reviewed direct insertion profile. | ${total - insertable - hosts} |`,
    '',
    'Breadboard marks come only from explicit catalog mounting descriptors. A 2.54 mm product tag, a reference footprint or matching visual overlap does not create a profile. `BB:-` does not mean that the part has no 2.54 mm contacts: it can require a different header population, an adapter, or further source review. Insertion marks do not upgrade KiCad accuracy. See [BREADBOARD_MOUNTING.md](BREADBOARD_MOUNTING.md), the [complete audit coverage](BREADBOARD_AUDIT.md) and its per-component source decisions.',
    '',
    '## Tree',
    '',
    '```text',
    `WirePad (${total})`,
    ...treeLines(nodes),
    '```',
    '',
    '## Maintenance',
    '',
    'After adding, removing, renaming, regrouping or changing a component, mounting profile or CAD assessment, update the relevant source evidence and regenerate this file in the same change:',
    '',
    '```sh',
    'node scripts/catalog.mjs',
    '```',
    '',
    'The catalog command validates the entries and automatically refreshes this file. The standalone generator is `node scripts/catalog-tree.mjs`. For a read-only freshness check, run `node scripts/catalog-tree.mjs --check`; `node scripts/catalog.mjs --json` also checks freshness without writing. Tests reject a stale tree.',
    '',
  ].join('\n');
}

export async function readAccuracy() {
  return JSON.parse(await readFile(accuracyPath, 'utf8'));
}

export async function syncComponentTree(contents, { filename = componentTreePath, check = false } = {}) {
  let current;
  try {
    current = await readFile(filename, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const changed = current !== contents;
  if (changed && check) throw new Error('Component tree is stale or missing. Run node scripts/catalog.mjs to regenerate docs/COMPONENTS.md.');
  if (changed) {
    await mkdir(dirname(filename), { recursive: true });
    await writeFile(filename, contents);
  }
  return { filename, changed };
}

export async function syncCatalogTree({ check = false } = {}) {
  return syncComponentTree(renderComponentTree(catalogFamilies, await readAccuracy()), { check });
}

async function main(args) {
  if (args.includes('--help')) {
    console.log('Usage: node scripts/catalog-tree.mjs [--check]\nGenerate docs/COMPONENTS.md from the live catalog and explicit accuracy assessments. --check is read-only.');
    return;
  }
  if (args.some(arg => arg !== '--check')) throw new Error('Usage: node scripts/catalog-tree.mjs [--check]');
  const result = await syncCatalogTree({ check: args.includes('--check') });
  console.log(`Component tree ${result.changed ? 'updated' : 'up to date'}: docs/COMPONENTS.md`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
