import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById } from '../src/catalog/index.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const terminal = (component, number) => component.pins.find(pin => pin.number === String(number));

test('Ra-01H preserves the dedicated SX1276 datasheet terminal assignments', () => {
  const radio = componentById.get('ra-01h');
  assert.ok(radio);
  assert.equal(radio.pins.length, 16);
  assert.equal(terminal(radio, 1).label, 'ANT');
  assert.equal(terminal(radio, 3).type, 'power_in');
  assert.equal(terminal(radio, 4).label, 'RESET');
  assert.equal(terminal(radio, 4).type, 'input');
  assert.deepEqual([5, 6, 7, 8, 10, 11].map(number => terminal(radio, number).label),
    ['DIO0', 'DIO1', 'DIO2', 'DIO3', 'DIO4', 'DIO5']);
  assert.deepEqual([12, 13, 14, 15].map(number => terminal(radio, number).label), ['SCK', 'MISO', 'MOSI', 'NSS']);
  assert.equal(terminal(radio, 13).type, 'output');
  assert.deepEqual([2, 9, 16].map(number => terminal(radio, number).label), ['GND', 'GND', 'GND']);
  // Ra-02 uses an IPEX connector; its first terminal is not the Ra-01H RF pad.
  assert.equal(terminal(componentById.get('ra-02'), 1).label, 'GND');
  assert.match(`${radio.subtitle} ${radio.description}`, /SX1276/);
  assert.match(`${radio.subtitle} ${radio.description}`, /803.*930/);
  assert.equal(footprintLayout(radio).pads.length, 16);
});

test('Ra modules retain the distinct LLCC68 and SX1281 host interfaces', () => {
  for (const id of ['ra-01sc', 'ra-01sch']) {
    const radio = componentById.get(id);
    assert.ok(radio);
    assert.equal(radio.pins.length, 16);
    assert.equal(terminal(radio, 5).label, 'TXEN');
    assert.equal(terminal(radio, 5).type, 'input');
    assert.equal(terminal(radio, 10).label, 'BUSY');
    assert.equal(terminal(radio, 10).type, 'output');
    assert.equal(terminal(radio, 11).label, 'RXEN');
  }
  const compact = componentById.get('ra-03sch');
  assert.equal(compact.pins.length, 14);
  assert.equal(terminal(compact, 1).label, 'MISO');
  assert.equal(terminal(compact, 11).label, 'CTL2');
  assert.equal(terminal(compact, 12).label, 'CTL1');
  assert.equal(terminal(compact, 14).type, 'power_in');
  for (const id of ['ra-05', 'ra-05u']) {
    const radio = componentById.get(id);
    assert.equal(radio.pins.length, 14);
    assert.equal(terminal(radio, 1).type, 'power_in');
    assert.equal(terminal(radio, 3).label, 'MISO_TX');
    assert.equal(terminal(radio, 4).label, 'MOSI_RX');
    assert.equal(terminal(radio, 10).label, 'BUSY');
    assert.match(`${radio.subtitle} ${radio.description}`, /SX1281/);
  }
});

test('LILYGO AMOLED variants preserve their different supply rails and connector assignments', () => {
  const original = componentById.get('lilygo-t-display-s3-amoled-original');
  const plus = componentById.get('lilygo-t-display-s3-amoled-plus-v1-0');
  assert.equal(terminal(original, 'P6.12').label, 'VSYS');
  assert.equal(terminal(original, 'P6.13').label, 'VSYS');
  assert.equal(terminal(plus, 'P5.12').label, 'VBUS');
  assert.equal(terminal(plus, 'P5.13').label, 'VBUS');
  assert.equal(terminal(original, 'P5.13').label, '3V3');
  assert.equal(terminal(plus, 'P4.13').label, 'VBAT');
  assert.equal(terminal(original, 'P5.3').type, 'input');
  assert.equal(terminal(plus, 'P4.3').type, 'input');
  const cc1101 = componentById.get('lilygo-t-embed-cc1101-v1-0');
  assert.deepEqual([1, 2, 3, 4].map(n => terminal(cc1101, `P6.${n}`).label), ['GND', '3V3', 'GPIO8', 'GPIO18']);
  assert.deepEqual([1, 2, 3, 4].map(n => terminal(cc1101, `P1.${n}`).label), ['GND', '3V3', 'GPIO43', 'GPIO44']);
  assert.ok(!cc1101.tags.includes('lora'));
});

test('T4-S3 dense contacts retain the rear-view physical row order', () => {
  const t4 = componentById.get('lilygo-t4-s3-v1-0');
  const header = t4.pins.filter(pin => pin.number.startsWith('P5.'));
  assert.equal(header.length, 30);
  const rows = new Map();
  for (const pin of header) {
    if (!rows.has(pin.y)) rows.set(pin.y, []);
    rows.get(pin.y).push(pin);
  }
  assert.equal(rows.size, 2);
  const [upper, lower] = [...rows].sort(([a], [b]) => a - b).map(([, pins]) => pins.sort((a, b) => a.x - b.x));
  assert.deepEqual(upper.map(pin => pin.number), Array.from({ length: 15 }, (_, i) => `P5.${15 - i}`));
  assert.deepEqual(lower.map(pin => pin.number), Array.from({ length: 15 }, (_, i) => `P5.${16 + i}`));
  assert.equal(terminal(t4, 'P5.4').label, 'GPIO18');
  assert.equal(terminal(t4, 'P5.4').type, 'output');
  assert.equal(terminal(t4, 'P5.16').label, 'VBAT');
  assert.equal(terminal(t4, 'P5.28').label, 'GPIO43');
});

test('LILYGO Ethernet boards preserve distinct diode-fed supplies and physical GPIO aliases', () => {
  const s3 = componentById.get('lilygo-t-eth-lite-s3-v1-0');
  const sameNet = (component, a, b) => (component.internalConnections ?? []).some(group =>
    group.includes(terminal(component, a).id) && group.includes(terminal(component, b).id));
  assert.equal(terminal(s3, 'P3.16').label, '5V-IN');
  assert.equal(terminal(s3, 'P3.16').type, 'power_in');
  assert.equal(terminal(s3, 'P3.1').label, '5V-OP');
  assert.equal(terminal(s3, 'P3.1').type, 'power_out');
  assert.equal(terminal(s3, 'P1.6').type, 'power_in');
  assert.ok(!sameNet(s3, 'P3.16', 'P3.1'));
  assert.ok(!sameNet(s3, 'P1.6', 'P3.1'));
  assert.ok(sameNet(s3, 'P1.6', 'P1.8'));
  assert.equal(terminal(s3, 'P3.3').type, 'input');
  const pads = footprintLayout(s3).pads;
  const at = number => pads.find(pad => pad.number === number);
  assert.ok(Math.abs(at('P3.16').x - at('P2.15').x - 25.4) < 1e-8);
  assert.ok(Math.abs(at('P2.14').y - at('P2.15').y - 2.54) < 1e-8);
  const esp32 = componentById.get('lilygo-t-eth-lite-esp32-v1-0');
  assert.equal(terminal(esp32, 'P2.14').label, 'GPIO36');
  assert.equal(terminal(esp32, 'P2.14').type, 'input');
  assert.equal(terminal(esp32, 'P3.7').label, 'GPIO39');
  assert.equal(terminal(esp32, 'P3.7').type, 'input');
});

test('T-ETH-ELite keeps its USB and UART functions on the numbered 40-pin header', () => {
  const elite = componentById.get('lilygo-t-eth-elite-2421');
  assert.equal(elite.pins.length, 40);
  assert.equal(terminal(elite, 'J1.8').label, 'TX');
  assert.equal(terminal(elite, 'J1.10').label, 'RX');
  assert.match(terminal(elite, 'J1.8').description, /GPIO43/);
  assert.match(terminal(elite, 'J1.10').description, /GPIO44/);
  assert.equal(terminal(elite, 'J1.28').type, 'input');
  for (const number of ['J1.35', 'J1.37']) {
    assert.equal(terminal(elite, number).type, 'bidirectional');
    assert.match(terminal(elite, number).description, /USB/);
  }
  assert.equal(terminal(elite, 'J1.39').label, 'GND');
  assert.equal(terminal(elite, 'J1.40').label, 'GPIO13');
});

test('T-SIM7080 service contacts keep their modem voltage, solar polarity and protected battery return', () => {
  const sim = componentById.get('lilygo-t-sim7080g-s3-v1-0');
  for (const number of ['P9.1', 'P8.1']) {
    assert.match(terminal(sim, number).description, /1\.8 V/);
    assert.doesNotMatch(terminal(sim, number).description, /3\.3 V signal/);
  }
  assert.equal(terminal(sim, 'P9.1').type, 'input');
  assert.equal(terminal(sim, 'P8.1').type, 'output');
  const negative = terminal(sim, 'P3.1');
  assert.equal(negative.label, 'BAT−');
  const grounds = new Set(sim.pins.filter(pin => pin.label === 'GND').map(pin => pin.id));
  assert.ok(!(sim.internalConnections ?? []).some(group => group.includes(negative.id) && group.some(id => grounds.has(id))));
  assert.equal(terminal(sim, 'P10.1').label, 'GND');
  assert.ok(terminal(sim, 'P10.1').y < terminal(sim, 'P10.2').y);
  for (const number of ['P1.7', 'P1.8', 'P1.9']) assert.match(terminal(sim, number).description, /PSRAM/);
});
