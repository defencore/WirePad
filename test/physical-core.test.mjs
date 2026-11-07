import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { componentById, componentArt, components } from '../src/catalog/index.js';
import { kicadSymbol, kicadFootprint, kicadModel } from '../src/assets/kicad.js';
import { coreModulesFamily } from '../src/catalog/families/catalog-core.js';
import waveshare from '../src/catalog/families/catalog-waveshare.js';

test('every catalog module uses physical contacts; discrete parts terminate on their illustrated metal leads', () => {
  const leads = components.filter(component => component.contactLayout !== 'physical' && !component.surface);
  assert.deepEqual(leads.map(component => component.id), ['resistor', 'capacitor', 'electrolytic', 'inductor', 'ferrite-bead', 'diode', 'led', 'button', 'battery']);
  assert.ok(leads.every(component => component.contactLayout === 'leads'));
});

test('core modules and Waveshare connections use the illustrated holes, screw terminals and socket contacts', () => {
  for (const { component } of [...coreModulesFamily.entries, ...waveshare.entries]) {
    assert.equal(component.contactLayout, 'physical', component.id);
    assert.ok(component.pins.every(pin => pin.surface), component.id);
    for (const labels of [true, false]) assert.ok(componentArt(component, { labels }).includes('<svg'), component.id);
  }
  const positions = (id, ids) => ids.map(pinId => {
    const pin = componentById.get(id).pins.find(pin => pin.id === pinId);
    return [pin.x, pin.y];
  });
  assert.deepEqual(positions('bme280', ['vin', 'cs']), [[27, 25], [27, 103]]);
  assert.deepEqual(positions('ads1220', ['drdy', 'agnd']), [[15, 17], [161, 143]]);
  assert.deepEqual(positions('ina219', ['vin', 'scl', 'vin-minus', 'vin-plus']), [[37, 82], [65, 82], [93, 82], [107, 82]]);
  assert.deepEqual(positions('hw0519', ['vcc', 'earth']), [[10, 25], [222, 73]]);
  assert.deepEqual(positions('st3215', ['gnd', 'vcc', 'data']), [[147.5, 37], [147.5, 44], [147.5, 51]]);
  assert.deepEqual(positions('max3485', ['a', 'b']), [[122, 59], [122, 79]]);
  assert.deepEqual(positions('waveshare-esp32-s3-rs485-can', ['gnd', 'gpio1', 'dc-positive', 'can-high']), [[46.5, 116], [46.5, 134], [114, 35], [55, 294]]);
  assert.deepEqual(positions('pin-header-4', ['1', '4']), [[31.5, 17], [100.5, 17]]);
  assert.deepEqual(positions('npn', ['b', 'c', 'e']), [[39, 58], [47, 58], [55, 58]]);
});

test('moving canvas contacts preserves every published native symbol, footprint and 3D geometry', () => {
  const baseline = JSON.parse(readFileSync(new URL('./fixtures/native-geometry.json', import.meta.url)));
  const hash = value => createHash('sha256').update(value).digest('hex');
  const symbols = value => value.replace(/^    \(property "Description"[^\n]*\n/gm, '');
  for (const entry of baseline) {
    const component = componentById.get(entry.id);
    assert.equal(hash(symbols(kicadSymbol(component))), entry.symbol, entry.id + ' symbol');
    assert.equal(hash(kicadFootprint(component)), entry.footprint, entry.id + ' footprint');
    assert.equal(hash(kicadModel(component)), entry.model, entry.id + ' model');
  }
});
