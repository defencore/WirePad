import assert from 'node:assert/strict';
import { test } from 'node:test';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { componentById, componentArt } from '../src/catalog/index.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const families = new Set(['arduino', 'stm32', 'esp-rp', 'nordic-boards', 'nordic', 'heltec-semtech', 'semtech-radios', 'power', 'switches-mosfets', 'prototyping-ics']);

test('development boards, radio modules and packages expose their illustrated physical contacts', () => {
  const entries = catalogFamilies.filter(family => families.has(family.id)).flatMap(family => family.entries);
  assert.ok(entries.length >= 107, "Every audited family entry is covered, including future additions.");
  for (const { component } of entries) {
    assert.equal(component.contactLayout, 'physical', component.id);
    assert.ok(component.pins.every(pin => pin.surface === true), component.id);
    assert.ok(component.pins.every(pin => pin.x > 0 && pin.x < component.width && pin.y > 0 && pin.y < component.height), component.id);
    const coordinates = new Set(component.pins.map(pin => `${pin.x},${pin.y}`));
    assert.equal(coordinates.size, component.pins.length, `${component.id}: different electrical contacts need distinct pads`);
    for (const labels of [true, false]) assert.doesNotMatch(componentArt(component, { labels }), /NaN|undefined/);
  }
});

test('Arduino ICSP and STM32 Morpho contacts retain their physical two-row topology', () => {
  const uno = componentById.get('arduino-uno-rev3');
  const icsp = uno.pins.filter(pin => pin.number.startsWith('ICSP.'));
  assert.equal(new Set(icsp.map(pin => pin.x)).size, 3);
  assert.equal(new Set(icsp.map(pin => pin.y)).size, 2);
  const nucleo = componentById.get('stm32-nucleo-f401re');
  const morpho = nucleo.pins.filter(pin => pin.number.startsWith('CN7.'));
  assert.equal(morpho.length, 38);
  assert.equal(new Set(morpho.map(pin => pin.x)).size, 2);
  assert.equal(new Set(morpho.map(pin => pin.y)).size, 19);
  const labeled = componentArt(nucleo);
  const unlabeled = componentArt(nucleo, { labels: false });
  const transform = /<g transform="([^"]+)">/.exec(labeled)[1];
  assert.ok(unlabeled.includes(`transform="${transform}"`), 'Label visibility must not resize or move the physical PCB.');
});

test('Pico debug anchors sit on the debug pads and hidden module contacts use explicit mirrored views', () => {
  for (const [id, xs, y] of [['raspberry-pi-pico', [57, 73, 89], 316], ['raspberry-pi-pico-w', [78, 94, 110], 204]]) {
    const board = componentById.get(id);
    assert.deepEqual(board.pins.filter(pin => pin.number.startsWith('SWD.')).map(pin => [pin.x, pin.y]), xs.map(x => [x, y]));
  }
  for (const id of ['raytac-mdbt42q-512kv2', 'xiao-nrf52840', 'seeed-xiao-esp32-s3-plus', 'esp32-s3-usb-otg']) {
    assert.match(componentArt(componentById.get(id)), /UNDERSIDE · MIRRORED/, id);
  }
  const module = componentById.get('raytac-mdbt42q-512kv2');
  const pads = footprintLayout(module).pads;
  const a = pads.find(pad => pad.id === 'pad-1'), b = pads.find(pad => pad.id === 'pad-41');
  const pa = module.pins.find(pin => pin.id === a.id), pb = module.pins.find(pin => pin.id === b.id);
  assert.equal(Math.sign(pa.x - pb.x), -Math.sign(a.x - b.x), 'The underside must mirror the carrier top view horizontally.');
});
