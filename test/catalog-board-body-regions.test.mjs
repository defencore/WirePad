import assert from 'node:assert/strict';
import { test } from 'node:test';
import { components, mountingFor } from '../src/catalog/index.js';
import { defineFamily } from '../src/catalog/registry.js';

const expected = {
  'arduino-nano': [26, 39, 86, 222, 2],
  'arduino-nano-every': [26, 39, 86, 222, 2],
  'arduino-nano-esp32': [26, 39, 86, 222, 2],
  'arduino-nano-rp2040-connect': [26, 39, 86, 222, 2],
  'arduino-nano-r4': [26, 39, 86, 222, 2],
  'raspberry-pi-pico': [7, 2, 132, 327, 2],
  'raspberry-pi-pico-w': [7, 2, 132, 327, 2],
  'adafruit-feather-esp32-s3': [7, 3, 140, 288, 2],
  'adafruit-feather-rp2040': [7, 3, 140, 291, 3],
  'esp32-s3-devkitm-1': [7, 2, 136, 367, 4],
  'esp32-devkitc-v4-wroom-32e': [62, 20, 223.52, 438.4, 3],
  'esp32-c3-devkitc-02': [62, 20, 203.2, 363.28, 3],
  'esp32-c6-devkitm-1': [62, 20, 203.2, 433.04, 4],
  'esp32-s2-devkitm-1': [62, 20, 203.2, 472.8, 3],
};
const close = (actual, value, context) => assert.ok(Math.abs(actual - value) < 1e-7, `${context}: ${actual} != ${value}`);
const covered = (id, x, y) => mountingFor(id).bodyRegions.some(region => x >= region.x && x <= region.x + region.width && y >= region.y && y <= region.y + region.height);

test('reviewed board body regions follow rendered material and retain a tight frozen envelope', () => {
  const reviewed = components.filter(component => Object.hasOwn(expected, component.id));
  assert.deepEqual(reviewed.map(component => component.id).sort(), Object.keys(expected).sort());
  for (const component of reviewed) {
    const { body, bodyRegions, bodyEvidence } = mountingFor(component.id);
    const [x, y, width, height, count] = expected[component.id];
    for (const [key, value] of Object.entries({ x, y, width, height })) close(body[key], value, `${component.id}/${key}`);
    assert.equal(bodyRegions.length, count, component.id);
    assert.ok(Object.isFrozen(body) && Object.isFrozen(bodyRegions) && bodyRegions.every(Object.isFrozen), component.id);
    assert.match(bodyEvidence, /PCB/);
    for (const region of bodyRegions) {
      assert.ok(region.x >= 0 && region.y >= 0 && region.width > 0 && region.height > 0, component.id);
      assert.ok(region.x + region.width <= component.width && region.y + region.height <= component.height, component.id);
    }
  }
});

test('C6 label margins, antenna wings, USB gap and lower caption do not reserve breadboard holes', () => {
  const id = 'esp32-c6-devkitm-1';
  for (const [x, y] of [[20, 200], [80, 40], [163, 451], [163, 460]]) assert.equal(covered(id, x, y), false, `${x},${y}`);
  for (const [x, y] of [[80, 100], [163, 40], [100, 451], [200, 451]]) assert.equal(covered(id, x, y), true, `${x},${y}`);
});

test('Nano, Pico, Feather and S3 DevKit retain USB overhangs without annotation wings', () => {
  for (const [id, x, y, value] of [
    ['arduino-nano', 10, 120, false], ['arduino-nano', 30, 60, true], ['arduino-nano', 60, 40, true],
    ['raspberry-pi-pico', 15, 3, false], ['raspberry-pi-pico', 65, 3, true], ['raspberry-pi-pico', 145, 100, false],
    ['adafruit-feather-esp32-s3', 10, 5, false], ['adafruit-feather-esp32-s3', 70, 4, true],
    ['adafruit-feather-rp2040', 95, 293, true], ['adafruit-feather-rp2040', 70, 293, false],
    ['esp32-s3-devkitm-1', 40, 4, true], ['esp32-s3-devkitm-1', 10, 4, false],
    ['esp32-s3-devkitm-1', 10, 20, true], ['esp32-s3-devkitm-1', 40, 368, true], ['esp32-s3-devkitm-1', 75, 368, false],
  ]) assert.equal(covered(id, x, y), value, `${id}/${x},${y}`);
});

test('registry rejects malformed or undocumented physical body regions', () => {
  const base = {
    type: 'breadboard-module', pitch: 2.54,
    source: { label: 'Manufacturer insertion drawing', url: 'https://example.com/drawing.pdf' },
    note: 'Install downward male headers.', contacts: [{ pinId: 'a', x: 0, y: 0 }, { pinId: 'b', x: 2.54, y: 0 }],
    body: { x: 2, y: 3, width: 8, height: 9 }, bodyRegions: [{ x: 2, y: 3, width: 8, height: 9 }],
    bodyEvidence: 'Canonical PCB rendering coordinates.',
  };
  const accept = mounting => defineFamily('body-test', [{
    component: { id: 'body-test', name: 'Body test', category: 'Test', width: 20, height: 20,
      pins: [{ id: 'a', label: 'A', type: 'passive', x: 2, y: 2 }, { id: 'b', label: 'B', type: 'passive', x: 10, y: 2 }] },
    render: () => '', footprint: { body: [10, 10] }, mounting,
  }]);
  assert.doesNotThrow(() => accept(base));
  for (const bodyRegions of [[], {}, Array(33).fill(base.body), [{ ...base.body, x: NaN }], [{ ...base.body, width: -1 }]]) {
    assert.throws(() => accept({ ...base, bodyRegions }), /physical body regions/);
  }
  assert.throws(() => accept({ ...base, body: undefined }), /physical body regions/);
  assert.throws(() => accept({ ...base, body: { ...base.body, width: 9 } }), /physical region envelope/);
  assert.throws(() => accept({ ...base, bodyEvidence: '' }), /physical body region evidence/);
});
