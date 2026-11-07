import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const sourceRoot = fileURLToPath(new URL('../src/', import.meta.url));
const files = readdirSync(sourceRoot, { recursive: true }).filter(name => name.endsWith('.js')).map(name => resolve(sourceRoot, name));
const imports = file => {
  const source = readFileSync(file, 'utf8');
  const statements = [...source.matchAll(/^import\s+(?:[\s\S]*?\s+from\s+)?['"](\.[^'"]+)['"]/gm),
    ...source.matchAll(/^export\s+[^;]*?from\s+['"](\.[^'"]+)['"]/gm)];
  return statements.map(match => resolve(dirname(file), match[1]));
};
const graph = new Map(files.map(file => [file, imports(file)]));
const name = file => relative(sourceRoot, file).split(sep).join('/');

test('browser module imports resolve within the shipped source tree and form an acyclic graph', () => {
  const visiting = new Set(), visited = new Set();
  function visit(file, stack) {
    assert.ok(!visiting.has(file), `Dependency cycle: ${[...stack, file].map(name).join(' → ')}`);
    if (visited.has(file)) return;
    visiting.add(file);
    for (const dependency of graph.get(file)) {
      assert.ok(dependency.startsWith(sourceRoot), `${name(file)} imports outside the static source tree`);
      assert.ok(existsSync(dependency), `${name(file)} has a missing import: ${name(dependency)}`);
      assert.ok(graph.has(dependency), `${name(dependency)} is a browser JavaScript module`);
      visit(dependency, [...stack, file]);
    }
    visiting.delete(file); visited.add(file);
  }
  for (const file of files) visit(file, []);
});

test('model, geometry, catalog and asset generation stay independent of UI and browser controllers', () => {
  const pureLayers = new Set(['model', 'geometry', 'catalog', 'assets']);
  const allowed = new Set([...pureLayers, 'shared']);
  for (const [file, dependencies] of graph) {
    if (!pureLayers.has(name(file).split('/')[0])) continue;
    for (const dependency of dependencies) {
      assert.ok(allowed.has(name(dependency).split('/')[0]), `${name(file)} depends on browser layer ${name(dependency)}`);
    }
    assert.doesNotMatch(readFileSync(file, 'utf8'), /\b(?:window|document|navigator|localStorage|sessionStorage)\s*\./, name(file));
  }
});

test('catalog families share builders and part data without loading peer families', () => {
  for (const [file, dependencies] of graph) {
    if (!name(file).startsWith('catalog/families/')) continue;
    for (const dependency of dependencies) {
      assert.ok(!name(dependency).startsWith('catalog/families/'), `${name(file)} must use a shared builder instead of ${name(dependency)}`);
    }
  }
});

test('the browser entry is the only JavaScript file at the source root after cutover', () => {
  assert.deepEqual(readdirSync(sourceRoot).filter(name => name.endsWith('.js')).sort(), ['main.js']);
});

test('every shipped JavaScript module is reachable from the browser entry', () => {
  const reached = new Set();
  function visit(file) {
    if (reached.has(file)) return;
    reached.add(file);
    for (const dependency of graph.get(file) ?? []) visit(dependency);
  }
  visit(resolve(sourceRoot, 'main.js'));
  assert.deepEqual(files.filter(file => !reached.has(file)).map(name).sort(), [], 'Remove unused source modules from the static site.');
});
