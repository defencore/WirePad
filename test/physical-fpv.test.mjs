import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, componentArt } from '../src/catalog/index.js';
import { endpointPositions } from '../src/geometry/parts.js';

const pin = (id, contact) => componentById.get(id).pins.find(pin => pin.id === contact);
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-8, `${actual} ≠ ${expected}`);

test('Raspberry Pi GPIO anchors occupy the illustrated two-row header in component-side numbering', () => {
  for (const id of ['raspberry-pi-3-model-a-plus', 'raspberry-pi-3-model-b', 'raspberry-pi-3-model-b-plus', 'raspberry-pi-4-model-b', 'raspberry-pi-5']) {
    const component = componentById.get(id);
    const first = component.pins.find(pin => pin.number === '1');
    const second = component.pins.find(pin => pin.number === '2');
    const last = component.pins.find(pin => pin.number === '40');
    close(first.x, 108.458); close(first.y, 70.218);
    close(second.x, first.x); close(second.y, 61.582);
    close(last.x, 272.542); close(last.y, second.y);
    assert.equal(new Set(component.pins.map(pin => pin.y)).size, 2);
    assert.ok(component.pins.every(pin => pin.surface));
  }
});

test('circular connector mating faces mirror the receptacle contacts and XT polarity stays on the metal', () => {
  const male = pin('weipu-sp1310-p3', 'pin-1');
  const female = pin('weipu-sp1312-s3', 'pin-1');
  close(male.x, 108.62); close(female.x, 89.38); close(male.y, 63.76);
  close(male.y, female.y);
  for (const id of ['amass-xt30u-f', 'amass-xt60h-m', 'amass-xt90s-f']) {
    const component = componentById.get(id);
    const positive = pin(id, 'positive'), negative = pin(id, 'negative');
    close(positive.x, component.width / 2); close(negative.x, positive.x);
    assert.ok(positive.y > negative.y);
  }
});

test('receiver connector rows and hidden service pads have explicit physical views', () => {
  close(pin('radiomaster-er4', 'ch1').x, 44);
  close(pin('radiomaster-er4', 'ch2').x, 24);
  close(pin('radiomaster-er4', 'ch3').y, 104);
  close(pin('radiomaster-er4', 'ch4').y, 104);
  for (const id of ['radiomaster-er4', 'pololu-cp2102n-usb-uart', 'matek-m10q-5883']) {
    assert.match(componentArt(componentById.get(id)), /BACK/);
    assert.ok(componentById.get(id).pins.every(pin => pin.surface));
  }
  close(pin('towerpro-sg90', 'pwm').x, 170);
  close(pin('towerpro-mg90s', 'gnd').x, 170);
});

test('flight-controller contacts stay on their front, rear and power-board views at every rotation', () => {
  for (const id of ['speedybee-f405-wing-mini', 'speedybee-f405-wing-app', 'matek-f405-wing-v2']) {
    const component = componentById.get(id);
    const artwork = componentArt(component);
    assert.equal(component.contactLayout, 'physical');
    for (const pin of component.pins) {
      assert.ok(pin.surface);
      assert.ok(pin.x > 0 && pin.x < component.width && pin.y > 0 && pin.y < component.height);
      assert.ok(artwork.includes(`data-physical-contact="${pin.id}"`));
      for (const rotation of [0, 90, 180, 270]) {
        const point = endpointPositions({ parts: [{ id: 'board', componentId: id, x: 10, y: 20, rotation }], wires: [] })({ partId: 'board', pinId: pin.id });
        assert.equal(point.normal, undefined);
        assert.equal(point.bounds, undefined);
        assert.equal(point.surfacePartId, 'board');
      }
    }
  }
});

test('Waveshare e-paper contacts follow the rear connector and servo signals use the printed S row', () => {
  const paper = componentById.get('waveshare-1in54-epaper-e');
  assert.match(componentArt(paper), /REAR/);
  assert.deepEqual(paper.pins.map(pin => pin.id), ['pwr', 'busy', 'rst', 'dc', 'cs', 'clk', 'din', 'gnd', 'vcc']);
  assert.ok(paper.pins.every(pin => pin.x === 34 && pin.surface));
  assert.ok(pin(paper.id, 'pwr').y < pin(paper.id, 'vcc').y);
  const servo = componentById.get('waveshare-servo-driver-hat-b');
  assert.ok(servo.pins.filter(pin => /^s\d+$/.test(pin.id)).every(pin => pin.y === 64 && pin.surface));
  close(pin('waveshare-sn65hvd230-can-board', 'can-l').x, 174);
  close(pin('waveshare-rs485-can-hat', 'can-h').x, 290);
});
