import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, components, configurationFor, mountingFor } from '../src/catalog/index.js';
import { defineFamily } from '../src/catalog/registry.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const close = (actual, expected, message) => assert.ok(Math.abs(actual - expected) < 1e-7, `${message}: ${actual} != ${expected}`);
const guests = {
  'arduino-nano': [30, 15.24],
  'arduino-nano-every': [30, 15.24],
  'arduino-nano-esp32': [30, 15.24],
  'arduino-nano-rp2040-connect': [30, 15.24],
  'arduino-nano-r4': [30, 15.24],
  'raspberry-pi-pico': [40, 17.78],
  'raspberry-pi-pico-w': [40, 17.78],
  'adafruit-feather-esp32-s3': [28, 20.32],
  'adafruit-feather-rp2040': [28, 20.32],
  'esp32-s3-devkitm-1': [44, 22.86],
  'esp32-devkitc-v4-wroom-32e': [38, 25.4],
  'esp32-c3-devkitc-02': [30, 22.86],
  'esp32-c6-devkitm-1': [30, 22.86],
  'esp32-s2-devkitm-1': [42, 22.86],
};

test('breadboard mounting enumerates terminal holes and their existing conductors without power rails', () => {
  const mounting = mountingFor('breadboard');
  assert.equal(mounting.type, 'breadboard');
  assert.equal(mounting.pitch, 2.54);
  assert.equal(mounting.canvasPitch, 16);
  const create = configurationFor('breadboard').create;
  for (const configuration of [{}, { rows: 2, leftCells: 3, rightCells: 4, topRails: 4, bottomRails: 1, leftRails: 0, rightRails: 4, splitRails: true }]) {
    const component = create(configuration), contacts = mounting.contacts(component);
    assert.equal(contacts.length, component.breadboard.rows * (component.breadboard.leftCells + component.breadboard.rightCells));
    const pins = new Map(component.pins.map(pin => [pin.id, pin]));
    for (const contact of contacts) {
      assert.doesNotMatch(contact.pinId, /-/);
      assert.equal(contact.x, pins.get(contact.pinId).x);
      assert.equal(contact.y, pins.get(contact.pinId).y);
      const strip = component.internalConnections.find(ids => ids.includes(contact.pinId));
      assert.equal(contact.group, strip[0]);
      assert.ok(strip.includes(contact.group));
    }
    assert.equal(new Set(contacts.map(contact => contact.group)).size, component.breadboard.rows * 2);
  }
});

test('the original reviewed board headers retain source-backed insertion centers', () => {
  const actual = components.filter(component => Object.hasOwn(guests, component.id) && mountingFor(component.id)?.type === 'breadboard-module').map(component => component.id).sort();
  assert.deepEqual(actual, Object.keys(guests).sort());
  for (const [id, [count, span]] of Object.entries(guests)) {
    const component = componentById.get(id), mounting = mountingFor(id);
    assert.equal(mounting.contacts.length, count, id);
    assert.equal(mounting.pitch, 2.54);
    assert.match(mounting.source.url, /^https:\/\//);
    assert.ok(mounting.source.label);
    assert.match(mounting.note, /male headers/);
    assert.ok(!Object.hasOwn(component, 'mounting'), 'Mounting metadata stays outside published component definitions.');
    const xs = [...new Set(mounting.contacts.map(contact => contact.x))].sort((a, b) => a - b);
    assert.equal(xs.length, 2, id);
    close(xs[1] - xs[0], span, `${id} row spacing`);
    for (const x of xs) {
      const row = mounting.contacts.filter(contact => contact.x === x).sort((a, b) => a.y - b.y);
      for (let index = 1; index < row.length; index++) close(row[index].y - row[index - 1].y, 2.54, `${id} insertion pitch`);
    }
    const pads = footprintLayout(component).pads;
    for (const contact of mounting.contacts) {
      assert.ok(component.pins.some(pin => pin.id === contact.pinId));
      const pad = pads.find(pad => pad.id === contact.pinId);
      close(contact.x, pad.x, `${id}/${contact.pinId} source x`);
      close(contact.y, pad.y, `${id}/${contact.pinId} source y`);
      for (const axis of ['x', 'y']) {
        const steps = (contact[axis] - mounting.contacts[0][axis]) / mounting.pitch;
        close(steps, Math.round(steps), `${id}/${contact.pinId} relative ${axis} grid`);
      }
    }
  }
  for (const id of ['arduino-uno-r3', 'pjrc-teensy-4-0', 'raspberry-pi-pico-2', 'seeed-xiao-rp2040', 'missing-board']) assert.equal(mountingFor(id), undefined, id);
});

test('reviewed mounting contacts admit positive independent canvas-axis calibration without reflections or nonlinear moves', () => {
  for (const id of Object.keys(guests)) {
    const component = componentById.get(id), contacts = mountingFor(id).contacts;
    const pairs = contacts.map(contact => ({ physical: contact, canvas: component.pins.find(pin => pin.id === contact.pinId) }));
    for (const axis of ['x', 'y']) {
      const a = pairs[0], b = pairs.find(pair => Math.abs(pair.physical[axis] - a.physical[axis]) > 1e-7);
      const scale = (b.canvas[axis] - a.canvas[axis]) / (b.physical[axis] - a.physical[axis]);
      assert.ok(scale > 0, `${id}/${axis} uses the component-side axes`);
      const origin = a.canvas[axis] - a.physical[axis] * scale;
      for (const pair of pairs) close(pair.canvas[axis], origin + pair.physical[axis] * scale, `${id}/${pair.physical.pinId}/${axis} affine calibration`);
    }
  }
});

test('header subsets preserve physical terminal order and exclude programming and jumper contacts', () => {
  const contact = (id, pinId) => mountingFor(id).contacts.find(contact => contact.pinId === pinId);
  assert.deepEqual(contact('arduino-nano', 'd13'), { pinId: 'd13', x: -7.62, y: -17.78 });
  assert.deepEqual(contact('arduino-nano', 'd12'), { pinId: 'd12', x: 7.62, y: -17.78 });
  assert.equal(contact('arduino-nano', 'spi-cipo'), undefined);
  for (const id of ['raspberry-pi-pico', 'raspberry-pi-pico-w']) {
    assert.deepEqual(contact(id, 'gp0'), { pinId: 'gp0', x: -8.89, y: -24.13 });
    assert.deepEqual(contact(id, 'vbus'), { pinId: 'vbus', x: 8.89, y: -24.13 });
    close(contact(id, 'gp16').y, 24.13, `${id} pin 21`);
    assert.ok(mountingFor(id).contacts.every(contact => !componentById.get(id).pins.find(pin => pin.id === contact.pinId).number.startsWith('SWD.')));
  }
  const feather = mountingFor('adafruit-feather-rp2040').contacts;
  close(Math.min(...feather.filter(contact => contact.x > 0).map(contact => contact.y)) - Math.min(...feather.filter(contact => contact.x < 0).map(contact => contact.y)), 10.16, 'Feather short-row offset');
  assert.equal(contact('esp32-c6-devkitm-1', 'j5-1'), undefined);
  assert.equal(contact('esp32-c6-devkitm-1', 'j5-2'), undefined);
});

const minimal = () => ({
  component: { id: 'mounting-test', name: 'Mounting test', category: 'Test', width: 20, height: 20,
    pins: [{ id: 'a', label: 'A', type: 'passive', x: 2, y: 2 }, { id: 'b', label: 'B', type: 'passive', x: 10, y: 2 }] },
  render: () => '', footprint: { body: [10, 10] },
});
const mounting = () => ({ type: 'breadboard-module', pitch: 2.54, source: { label: 'Reviewed maker drawing', url: 'https://example.com/drawing.pdf' },
  note: 'Use downward male header leads.', contacts: [{ pinId: 'a', x: 0, y: 0 }, { pinId: 'b', x: 2.54, y: 0 }] });

test('catalog rejects malformed mounting maps and configuration collisions with instance placement state', () => {
  const accept = value => defineFamily('mounting-test', [{ ...minimal(), mounting: value }]);
  assert.doesNotThrow(() => accept(mounting()));
  assert.throws(() => accept(false), /invalid mounting descriptor/);
  assert.throws(() => accept({ ...mounting(), type: 'guessed-board' }), /unsupported mounting type/);
  assert.throws(() => accept({ ...mounting(), pitch: 0 }), /positive finite/);
  assert.throws(() => accept({ ...mounting(), source: { label: 'Maker', url: 'file:///drawing' } }), /HTTP or HTTPS/);
  assert.throws(() => accept({ ...mounting(), contacts: [{ pinId: 'missing', x: 0, y: 0 }] }), /unknown contact/);
  assert.throws(() => accept({ ...mounting(), contacts: [{ pinId: 'a', x: 0, y: 0 }, { pinId: 'a', x: 2.54, y: 0 }] }), /repeats contact/);
  assert.throws(() => accept({ ...mounting(), contacts: [{ pinId: 'a', x: 0, y: 0 }, { pinId: 'b', x: 0, y: 0 }] }), /physical contact position/);
  assert.throws(() => accept({ ...mounting(), contacts: [{ pinId: 'a', x: NaN, y: 0 }] }), /invalid coordinates/);
  assert.throws(() => accept({ ...mounting(), contacts: [{ pinId: 'a', x: 0, y: 0 }, { pinId: 'b', x: 19.05, y: 0 }] }), /physical pitch grid/);
  assert.throws(() => accept({ type: 'breadboard', pitch: 2.54, canvasPitch: 16,
    contacts: () => [{ pinId: 'a', x: 2, y: 2, group: 'guessed-conductor' }] }), /existing internal conductor/);
  const entry = minimal(); entry.component.pins[0].face = 'rear';
  assert.throws(() => defineFamily('mounting-test', [{ ...entry, mounting: mounting() }]), /rear-view contact/);
  for (const key of ['scale', 'scaleX', 'scaleY', 'attachment', 'attachments', 'mounting']) {
    assert.throws(() => defineFamily('mounting-test', [{ ...minimal(), configuration: { key, normalize: value => value, create: value => value } }]), /reserved configuration key/);
  }
});
