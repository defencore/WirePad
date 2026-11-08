import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { components } from '../src/catalog/index.js';
import { kicadModel } from '../src/assets/kicad.js';
import {
  accuracyByComponent, componentTreePath, readAccuracy, renderComponentTree, syncComponentTree,
} from '../scripts/catalog-tree.mjs';

const entry = (id, name, category = 'Wireless', manufacturer = 'EBYTE', model) => ({
  component: { id, name, category, manufacturer }, ...(model ? { model } : {}),
});
const assessment = (footprint, ...ids) => ({ footprint, evidence: 'Reviewed source geometry and export scope.', components: ids });
const manifest = (...assessments) => ({ version: 1, assessments });

test('component documentation is current and lists every live component exactly once with independent accuracy marks', async () => {
  const accuracy = await readAccuracy();
  const rendered = renderComponentTree(catalogFamilies, accuracy);
  assert.equal(await readFile(componentTreePath, 'utf8'), rendered, 'Run node scripts/catalog.mjs to refresh docs/COMPONENTS.md.');
  const leaves = [...rendered.matchAll(/^.* \[([^\]]+)\] \[FP:([MCR?])\] \[3D:A\] \[CAD:([+-])\] \[BB:([+H-])\]$/gm)];
  assert.deepEqual(leaves.map(match => match[1]).sort(), components.map(component => component.id).sort());
  assert.equal(new Set(leaves.map(match => match[1])).size, components.length);
  const assessed = accuracyByComponent(catalogFamilies, accuracy);
  const entries = new Map(catalogFamilies.flatMap(family => family.entries.map(item => [item.component.id, item])));
  for (const [, id, footprint, cad, breadboard] of leaves) {
    assert.equal(footprint, assessed.get(id)?.footprint ?? '?', id);
    assert.equal(cad, entries.get(id).model?.url ? '+' : '-', id);
    const type = entries.get(id).mounting?.type;
    assert.equal(breadboard, type === 'breadboard' ? 'H' : ['breadboard-module', 'breadboard-part'].includes(type) ? '+' : '-', id);
  }
});

test('component tree groups actual manufacturers and categories with deterministic family and component ordering', () => {
  const families = [
    { id: 'zeta', entries: [entry('z', 'Zeta', 'Wireless', 'Ebyte'), entry('a', 'Alpha')] },
    { id: 'alpha', entries: [entry('b', 'Beta'), entry('c', 'Contact', 'Connectors', '')] },
  ];
  const rendered = renderComponentTree(families, manifest());
  const reordered = families.toReversed().map(family => ({ ...family, entries: family.entries.toReversed() }));
  assert.equal(renderComponentTree(reordered, manifest()), rendered);
  const tree = rendered.split('```text\n')[1].split('```')[0];
  assert.equal(tree, [
    'WirePad (4)',
    '├── Connectors (1)',
    '│   └── Unspecified (1)',
    '│       └── alpha (1)',
    '│           └── Contact [c] [FP:?] [3D:A] [CAD:-] [BB:-]',
    '└── Wireless (3)',
    '    └── EBYTE (3)',
    '        ├── alpha (1)',
    '        │   └── Beta [b] [FP:?] [3D:A] [CAD:-] [BB:-]',
    '        └── zeta (2)',
    '            ├── Alpha [a] [FP:?] [3D:A] [CAD:-] [BB:-]',
    '            └── Zeta [z] [FP:?] [3D:A] [CAD:-] [BB:-]',
    '',
  ].join('\n'));
});

test('breadboard marks follow explicit insertion evidence independently of tags, CAD and KiCad accuracy', () => {
  const families = [{ id: 'insertion', entries: [
    { ...entry('tagged', 'Tagged'), component: { ...entry('tagged', 'Tagged').component, tags: ['2.54 mm', 'breadboard'] } },
    { ...entry('reviewed', 'Reviewed'), mounting: { type: 'breadboard-module' } },
    { ...entry('host', 'Host'), mounting: { type: 'breadboard' } },
  ] }];
  const rendered = renderComponentTree(families, manifest(assessment('R', 'reviewed')));
  assert.match(rendered, /Tagged \[tagged\] \[FP:\?\] \[3D:A\] \[CAD:-\] \[BB:-\]/);
  assert.match(rendered, /Reviewed \[reviewed\] \[FP:R\] \[3D:A\] \[CAD:-\] \[BB:\+\]/);
  assert.match(rendered, /Host \[host\] \[FP:\?\] \[3D:A\] \[CAD:-\] \[BB:H\]/);
});

test('new entries appear automatically without inheriting accuracy from a family or external CAD link', () => {
  const families = [{ id: 'reviewed-family', entries: [
    entry('verified', 'Verified'), entry('contact', 'Contact'), entry('reference', 'Reference'),
    entry('new', 'New part', 'Wireless', 'EBYTE', { url: 'https://example.com/manufacturer.step' }),
  ] }];
  const rendered = renderComponentTree(families, manifest(
    assessment('M', 'verified'), assessment('C', 'contact'), assessment('R', 'reference'),
  ));
  assert.match(rendered, /Verified \[verified\] \[FP:M\] \[3D:A\] \[CAD:-\]/);
  assert.match(rendered, /Contact \[contact\] \[FP:C\] \[3D:A\] \[CAD:-\]/);
  assert.match(rendered, /Reference \[reference\] \[FP:R\] \[3D:A\] \[CAD:-\]/);
  assert.match(rendered, /New part \[new\] \[FP:\?\] \[3D:A\] \[CAD:\+\]/);
  assert.match(rendered, /\*\*4 components · 1 source families · 1 categories\.\*\*/);
});

test('accuracy manifest rejects ambiguous or stale component assessments and missing evidence', () => {
  const families = [{ id: 'example', entries: [entry('one', 'One')] }];
  assert.throws(() => accuracyByComponent(families, { version: 2, assessments: [] }), /Invalid catalog accuracy/);
  assert.throws(() => accuracyByComponent(families, manifest(assessment('M', 'missing'))), /unknown component "missing"/);
  assert.throws(() => accuracyByComponent(families, manifest(assessment('M', 'one'), assessment('R', 'one'))), /Duplicate accuracy assessment/);
  for (const invalid of [assessment('verified', 'one'), { ...assessment('M', 'one'), evidence: ' ' }, assessment('M')]) {
    assert.throws(() => accuracyByComponent(families, manifest(invalid)), /needs a footprint mark, evidence and component IDs/);
  }
});

test('tree synchronization regenerates changes while freshness checks never write missing or stale files', async t => {
  const root = await mkdtemp(join(tmpdir(), 'wirepad-component-tree-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const filename = join(root, 'docs', 'COMPONENTS.md');
  await assert.rejects(syncComponentTree('first\n', { filename, check: true }), /stale or missing/);
  await assert.rejects(readFile(filename), { code: 'ENOENT' });
  assert.equal((await syncComponentTree('first\n', { filename })).changed, true);
  assert.equal((await syncComponentTree('first\n', { filename, check: true })).changed, false);
  assert.equal((await syncComponentTree('first\n', { filename })).changed, false);
  await writeFile(filename, 'stale\n');
  await assert.rejects(syncComponentTree('second\n', { filename, check: true }), /stale or missing/);
  assert.equal(await readFile(filename, 'utf8'), 'stale\n');
  assert.equal((await syncComponentTree('second\n', { filename })).changed, true);
  assert.equal(await readFile(filename, 'utf8'), 'second\n');
});

test('generated KiCad 3D models retain their approximate status independently of linked manufacturer CAD', () => {
  for (const component of components) {
    assert.match(kicadModel(component), /^#VRML V2\.0 utf8\n# Approximate WirePad mechanical model\n/, component.id);
  }
});
