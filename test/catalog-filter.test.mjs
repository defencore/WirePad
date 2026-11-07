import assert from 'node:assert/strict';
import { test } from 'node:test';

import { components } from '../src/catalog/index.js';
import { createLibraryIndex, filterLibrary, manufacturerName } from '../src/catalog/filter.js';

test('every manufacturer option resolves to its complete, nonempty component list', () => {
  const index = createLibraryIndex(components);
  assert.ok(index.manufacturers.length > 30);
  assert.equal(index.manufacturers.reduce((sum, maker) => sum + maker.count, 0), components.length);
  for (const { name, count } of index.manufacturers) {
    const matches = filterLibrary(index, { manufacturer: name });
    assert.ok(matches.length, name);
    assert.equal(matches.length, count, name);
    assert.ok(matches.every(entry => manufacturerName(entry.component.manufacturer) === name), name);
  }
});

test('Gowin and Espressif aliases find all boards under one manufacturer', () => {
  const index = createLibraryIndex(components);
  for (const [alias, canonical] of [['GOWIN', 'Gowin Semiconductor'], ['Espressif', 'Espressif Systems']]) {
    const expected = components.filter(component => manufacturerName(component.manufacturer) === canonical).map(c => c.id);
    assert.deepEqual(filterLibrary(index, { manufacturer: alias }).map(e => e.component.id), expected);
    assert.deepEqual(filterLibrary(index, { manufacturer: canonical }).map(e => e.component.id), expected);
    assert.equal(index.manufacturers.filter(maker => maker.name === canonical).length, 1);
    assert.ok(filterLibrary(index, { query: canonical }).length >= expected.length);
  }
});

test('manufacturer combines with category and all search terms; clearing restores the catalog', () => {
  const index = createLibraryIndex(components);
  const matches = filterLibrary(index, { manufacturer: 'Adafruit', category: 'Sensors', query: 'temperature humidity' });
  assert.ok(matches.length > 0);
  assert.ok(matches.every(entry => entry.manufacturer === 'Adafruit' && entry.component.category === 'Sensors'));
  assert.deepEqual(filterLibrary(index, { manufacturer: 'GOWIN', category: 'Sensors' }), []);
  assert.deepEqual(filterLibrary(index, { query: '', manufacturer: '', category: '' }).map(e => e.component), components);
  assert.ok(filterLibrary(index, { query: 'FriendlyArm' }).some(e => e.component.id.startsWith('friendlyelec-')));
});

test('the Gowin FPGA category includes every official development kit revision', () => {
  const index = createLibraryIndex(components);
  const kits = filterLibrary(index, { manufacturer: 'Gowin Semiconductor', category: 'FPGA boards' });
  const expected = components.filter(component => component.id.startsWith('gowin-dk-'));
  assert.equal(expected.length, 32);
  assert.deepEqual(new Set(kits.map(entry => entry.component.id)), new Set(expected.map(component => component.id)));
});
