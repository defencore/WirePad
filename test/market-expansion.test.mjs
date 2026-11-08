import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { componentById, components } from '../src/catalog/index.js';
import { manufacturerName } from '../src/catalog/filter.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';
import { accuracyByComponent, readAccuracy } from '../scripts/catalog-tree.mjs';

const marketEntries = catalogFamilies.filter(f => f.id.startsWith('market-')).flatMap(f => f.entries);
const pin = (id, number) => componentById.get(id).pins.find(p => p.number === number);

test('the library contains at least 1000 components with distinct market ordering codes', () => {
  assert.ok(components.length >= 1000, `Only ${components.length} library components.`);
  assert.ok(marketEntries.length >= 392, 'Keep the requested expansion above the previous 608 components.');
  const codes = marketEntries.map(({ component: c }) => `${manufacturerName(c.manufacturer)}:${c.shortName.toUpperCase()}`);
  assert.equal(new Set(codes).size, codes.length, 'Do not count duplicate ordering codes as different components.');
});

test('every family descriptor on disk is registered exactly once', async () => {
  const directory = new URL('../src/catalog/families/', import.meta.url);
  const registered = new Map(catalogFamilies.map(f => [f.id, f]));
  for (const name of (await readdir(directory)).filter(n => /^catalog-.*\.js$/.test(n))) {
    const module = await import(new URL(name, directory));
    const descriptors = Object.values(module).filter(v => v && typeof v === 'object' && typeof v.id === 'string' && Array.isArray(v.entries));
    for (const descriptor of descriptors) assert.equal(registered.get(descriptor.id), descriptor, `${name}: missing or replaced family registration`);
  }
  assert.equal(registered.size, catalogFamilies.length);
});

test('market additions retain exact parts, sources and dated available offers', () => {
  for (const { component: c } of marketEntries) {
    assert.ok(c.shortName && c.manufacturer, c.id);
    assert.match(c.source, /^https:\/\//, c.id);
    assert.equal(c.contactLayout, 'physical', c.id);
    assert.match(c.availability?.checked ?? '', /^\d{4}-\d{2}-\d{2}$/, c.id);
    assert.match(c.availability?.url ?? '', /^https:\/\//, c.id);
    assert.match(c.availability?.status ?? '', /stock|available|ships|offer/i, c.id);
    assert.doesNotMatch(c.availability.status, /\b(?:out of stock|not in stock|unavailable|sold out|zero stock)\b/i, c.id);
  }
});

test('all market entries are included once in their source audit and explicit KiCad assessment', async () => {
  const files = [
    'catalog-market-logic-memory-2026-11-08.json',
    'catalog-market-analog-power-2026-11-08.json',
    'catalog-market-sensors-radios-2026-11-08.json',
    'catalog-market-discretes-2026-11-08.json',
    'catalog-market-optical-sensing-2026-11-08.json',
  ];
  const rows = (await Promise.all(files.map(async name => JSON.parse(await readFile(new URL(`../docs/${name}`, import.meta.url), 'utf8')).entries))).flat();
  const byId = new Map(rows.map(e => [e.id, e]));
  assert.equal(byId.size, rows.length, 'Overlapping audit ownership.');
  assert.deepEqual([...byId.keys()].sort(), marketEntries.map(e => e.component.id).sort());
  const accuracy = accuracyByComponent(catalogFamilies, await readAccuracy());
  for (const { component: c } of marketEntries) {
    assert.equal(byId.get(c.id).part ?? byId.get(c.id).partNumber, c.shortName, c.id);
    assert.equal(accuracy.get(c.id)?.footprint, 'R', `${c.id}: selected reference lands must not claim production verification`);
  }
});

test('source-specific CMOS controls and clock-edge outputs keep their physical terminal functions', () => {
  assert.deepEqual(['9', '10'].map(n => pin('cd4094be', n).label), ['QS', "QS'"]);
  assert.match(pin('cd4094be', '9').description, /positive/);
  assert.match(pin('cd4094be', '10').description, /negative/);
  assert.equal(pin('cd4020be', '9').label, 'Q1');
  assert.equal(pin('cd4020be', '3').label, 'Q14');
  assert.equal(pin('cd4049ube', '1').type, 'power_in');
  assert.equal(pin('cd4049ube', '16').type, 'no_connect');
  assert.equal(pin('sn74hc125n', '1').label, '1OE#');
  assert.equal(pin('sn74hc125n', '3').type, 'tri_state');
  assert.equal(pin('sn74hc126n', '1').label, '1OE');
  assert.match(componentById.get('sn74hc158n').description, /inverting/);
  assert.match(pin('sn74hc158n', '4').description, /G# high forces.*high/);
  assert.match(componentById.get('sn74hc688n').name, /equality/);
  assert.match(pin('sn74hc688n', '19').description, /all eight P\/Q bit pairs match/);
});

test('serial memories distinguish unused leads, open-drain data and required address strapping', () => {
  for (const id of ['24lc02b-i-p', '24lc16b-i-p']) {
    for (const n of ['1', '2', '3']) {
      assert.equal(pin(id, n).type, 'no_connect');
      assert.match(pin(id, n).description, /not internally connected/);
    }
    assert.equal(pin(id, '5').type, 'bidirectional');
    assert.match(pin(id, '5').description, /open-drain/);
  }
  assert.equal(pin('24lc256-i-p', '1').type, 'input');
  assert.match(pin('24lc1025-i-p', '3').description, /tied to VCC/);
  assert.equal(pin('25lc256-i-p', '2').type, 'tri_state');
  assert.equal(pin('23lc1024-i-p', '3').type, 'bidirectional');
});

test('new reference footprints keep copper on separate contacts from overlapping', () => {
  const radius = p => p.shape === 'circle' || p.shape === 'oval' ? Math.min(p.width, p.height) / 2
    : p.shape === 'roundrect' ? Math.min(p.width, p.height) * p.cornerRatio : 0;
  const overlaps = (a, b) => {
    const dx = Math.abs(a.x - b.x), dy = Math.abs(a.y - b.y);
    const halfWidth = (a.width + b.width) / 2, halfHeight = (a.height + b.height) / 2;
    if (dx >= halfWidth - 1e-7 || dy >= halfHeight - 1e-7) return false;
    const r = radius(a) + radius(b);
    if (r === 0) return true;
    return Math.hypot(Math.max(0, dx - halfWidth + r), Math.max(0, dy - halfHeight + r)) < r - 1e-7;
  };
  for (const { component: c } of marketEntries) {
    const { pads } = footprintLayout(c);
    for (let i = 0; i < pads.length; i++) for (let j = i + 1; j < pads.length; j++) {
      if (pads[i].id !== pads[j].id) assert.ok(!overlaps(pads[i], pads[j]), `${c.id}: copper pads ${pads[i].number}/${pads[j].number} overlap`);
    }
  }
});

test('canvas and native geometry fixtures cover every registered component', async () => {
  const expected = components.map(c => c.id).sort();
  for (const name of ['catalog-geometry.json', 'native-geometry.json']) {
    const fixture = JSON.parse(await readFile(new URL(`./fixtures/${name}`, import.meta.url), 'utf8'));
    assert.deepEqual(fixture.map(e => e.id).sort(), expected, name);
  }
});
