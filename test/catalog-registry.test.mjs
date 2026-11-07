import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { components, componentById, footprintDefinitionFor, modelFor, configurationFor } from '../src/catalog/index.js';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { createCatalog, defineFamily } from '../src/catalog/registry.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';
import { symbolLayout } from '../src/assets/symbol-layout.js';

const component = id => ({ id, art: id, name: id, category: 'Test', width: 80, height: 60,
  pins: [{ id: '1', label: 'GND', number: '1', x: 0, y: 30, type: 'power_in' }] });
const entry = id => ({ component: component(id), render: () => '', footprint: { body: [8, 8], pads: [{ id: '1', x: 0, y: 0 }] } });
const family = id => defineFamily(id, [entry(id)]);

test('family entries own their definition, artwork, footprint and optional CAD as one record', () => {
  assert.deepEqual(components, catalogFamilies.flatMap(family => family.entries.map(entry => entry.component)));
  for (const family of catalogFamilies) for (const entry of family.entries) {
    assert.equal(componentById.get(entry.component.id), entry.component);
    assert.equal(typeof entry.render, 'function');
    assert.equal(footprintDefinitionFor(entry.component), entry.footprint);
    assert.equal(modelFor(entry.component), entry.model ?? null);
  }
  const configuration = configurationFor('breadboard');
  assert.equal(configuration.key, 'breadboard');
  assert.equal(typeof configuration.normalize, 'function');
  assert.equal(typeof configuration.create, 'function');
  assert.equal(configurationFor('resistor'), undefined);
});

test('catalog registration rejects duplicate identities and incomplete physical definitions', () => {
  assert.throws(() => createCatalog([family('first'), family('first')]), /Duplicate catalog family/);
  assert.throws(() => createCatalog([family('first'), defineFamily('second', [entry('first')])]), /Duplicate catalog component/);
  assert.throws(() => defineFamily('empty', []), /must contain entries/);
  assert.throws(() => defineFamily('missing-art', [{ ...entry('one'), render: undefined }]), /artwork renderer/);
  assert.throws(() => defineFamily('missing-pcb', [{ ...entry('one'), footprint: undefined }]), /footprint definition/);
  assert.throws(() => defineFamily('bad-pcb', [{ ...entry('one'), footprint: { body: [0, 8] } }]), /positive finite/);
  assert.throws(() => defineFamily('bad-pcb', [{ ...entry('one'), footprint: { body: [8, 8], pads: [{ id: 'missing' }] } }]), /unknown contact/);
  assert.throws(() => defineFamily('bad-net', [{ ...entry('one'), component: { ...component('one'), internalConnections: [['missing']] } }]), /internal connection/);
  for (const patch of [{ width: NaN }, { height: 0 }, { pins: [] }, { name: '' }]) {
    assert.throws(() => defineFamily('bad', [{ ...entry('bad'), component: { ...component('bad'), ...patch } }]));
  }
  const original = component('bad-pin');
  for (const patch of [{ x: 81 }, { y: -1 }, { type: 'fictional' }, { label: '' }]) {
    assert.throws(() => defineFamily('bad', [{ ...entry('bad'), component: { ...original, pins: [{ ...original.pins[0], ...patch }] } }]));
  }
  assert.throws(() => defineFamily('bad', [{ ...entry('bad'), configuration: { key: 'x', normalize: x => x, create: () => ({}) } }]), /reserved configuration key/);
  assert.throws(() => defineFamily('bad', [{ ...entry('bad'), model: { label: 'CAD', url: 'javascript:alert(1)' } }]), /HTTP or HTTPS/);
});

test('shared renderer names are scoped to entries instead of colliding across families', () => {
  const first = entry('first'), second = entry('second');
  second.component.art = first.component.art;
  const catalog = createCatalog([defineFamily('one', [first]), defineFamily('two', [second])]);
  assert.equal(catalog.definitionsById.size, 2);
});

test('new identities reuse declared symbol presets without board-specific generator branches', () => {
  for (const id of ['resistor', 'npn', 'nmos', 'ao3400a']) {
    const original = componentById.get(id);
    assert.ok(original, id);
    assert.deepEqual(symbolLayout({ ...original, id: `new-${id}` }), symbolLayout(original), id);
  }
});

test('footprint references reject missing contacts and support explicit custom reference parts', () => {
  for (const id of ['bme280', 'jst-ph-2']) {
    const original = componentById.get(id);
    assert.throws(() => footprintLayout({ ...original, pins: original.pins.slice(1) }), /unknown contact/);
  }
  const custom = { ...componentById.get('resistor'), id: 'custom-reference-part' };
  assert.equal(footprintLayout(custom).pads.length, custom.pins.length);
  assert.match(footprintLayout(custom).note, /Reference carrier pattern/);
  assert.equal(modelFor(custom), null);
});

test('published component IDs, pin IDs and versioned canvas geometry remain guarded for saved projects', () => {
  const baseline = JSON.parse(readFileSync(new URL('./fixtures/catalog-geometry.json', import.meta.url)));
  for (const { id, geometry, physicalGeometry } of baseline) {
    const component = componentById.get(id);
    assert.ok(component, id);
    const shape = { width: component.width, height: component.height, pins: component.pins.map(({ id, x, y }) => ({ id, x, y })) };
    assert.equal(createHash('sha256').update(JSON.stringify(shape)).digest('hex'), physicalGeometry ?? geometry, id);
  }
});
