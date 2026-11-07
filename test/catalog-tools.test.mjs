import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, copyFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { components } from '../src/catalog/index.js';
import { validateContactMap } from '../scripts/catalog.mjs';

const script = name => fileURLToPath(new URL(`../scripts/${name}.mjs`, import.meta.url));
const run = (name, args = [], options = {}) => spawnSync(process.execPath, [script(name), ...args], { encoding: 'utf8', ...options });

test('catalog command validates the live registry and reports both artwork modes and repeated physical pads', () => {
  const result = run('catalog', ['--json']);
  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(result.stdout);
  assert.equal(report.valid, true);
  assert.equal(report.components, components.length);
  assert.equal(report.contacts, components.reduce((count, component) => count + component.pins.length, 0));
  assert.equal(report.artworks, components.length * 2);
  assert.ok(report.families > 0);
  assert.ok(report.pads > report.contacts);
  const invalid = run('catalog', ['--unknown']);
  assert.equal(invalid.status, 1);
  assert.match(invalid.stderr, /Usage:/);
});

test('contact-map validation permits repeated lands while identifying missing, unknown and misnumbered contacts', () => {
  const component = { pins: [{ id: 'supply', number: '2' }, { id: 'return', number: '3' }] };
  const pad = (id, number, x) => ({ id, number, x, y: 0, width: 1.5, height: 1.5, shape: 'circle', drill: .8 });
  const pads = [pad('supply', '2', -1), pad('supply', '2', 1), pad('return', '3', 3)];
  assert.equal(validateContactMap(component, { pads }), 3);
  assert.throws(() => validateContactMap(component, { pads: pads.slice(0, 2) }), /return.*no footprint pad/);
  assert.throws(() => validateContactMap(component, { pads: [...pads, pad('unknown', '4', 5)] }), /unknown contact/);
  assert.throws(() => validateContactMap(component, { pads: [{ ...pads[0], number: '1' }, ...pads.slice(1)] }), /mismatched.*number/);
  assert.throws(() => validateContactMap(component, { pads: [{ ...pads[0], x: NaN }, ...pads.slice(1)] }), /invalid footprint geometry/);
});

test('new-family command creates only an unregistered scaffold and prints its exact registration edits', async t => {
  const root = await mkdtemp(join(tmpdir(), 'wirepad-family-tool-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const result = run('new-family', ['example-tools', '--root', root], { cwd: tmpdir() });
  assert.equal(result.status, 0, result.stderr);
  const filename = join(root, 'src/catalog/families/catalog-example-tools.js');
  const contents = await readFile(filename, 'utf8');
  assert.match(contents, /import \{ defineFamily \} from '\.\.\/registry\.js'/);
  assert.match(contents, /export default defineFamily\('example-tools', entries\)/);
  assert.match(result.stdout, /import exampleToolsFamily from '\.\/families\/catalog-example-tools\.js';/);
  assert.match(result.stdout, /\n  exampleToolsFamily,\n/);
  assert.match(result.stdout, /unregistered/);
  assert.deepEqual(await readdir(join(root, 'src/catalog')), ['families']);
  // The actual registry rejects a generated empty family rather than admitting invented hardware.
  await copyFile(new URL('../src/catalog/registry.js', import.meta.url), join(root, 'src/catalog/registry.js'));
  await assert.rejects(import(pathToFileURL(filename).href), /must contain entries/);
  const again = run('new-family', ['example-tools', '--root', root]);
  assert.equal(again.status, 1);
  assert.match(again.stderr, /already exists/);
  assert.equal(await readFile(filename, 'utf8'), contents);
});

test('new-family command rejects path traversal and invalid IDs without creating files', async t => {
  const root = await mkdtemp(join(tmpdir(), 'wirepad-family-invalid-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const id of ['../escape', 'MixedCase', 'two--hyphens', '1starts-with-number']) {
    const result = run('new-family', [id, '--root', root]);
    assert.equal(result.status, 1, id);
    assert.match(result.stderr, /lowercase family ID/);
  }
  assert.deepEqual(await readdir(root), []);
});
