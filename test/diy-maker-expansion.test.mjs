import assert from 'node:assert/strict';
import { test } from 'node:test';
import { components, componentById } from '../src/catalog/index.js';
import { createLibraryIndex, filterLibrary, manufacturerName } from '../src/catalog/filter.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const part = id => {
  const c = componentById.get(id);
  assert.ok(c, id);
  return c;
};
const pin = (c, id) => {
  const p = c.pins.find(p => p.id === id);
  assert.ok(p, `${c.id}/${id}`);
  return p;
};
const tied = (c, a, b) => (c.internalConnections ?? []).some(group => group.includes(a) && group.includes(b));

test('all catalog contacts provide their function to the inspector, pin picker and hover text', () => {
  for (const c of components) for (const p of c.pins) {
    assert.equal(typeof p.description, 'string', `${c.id}/${p.id}`);
    assert.ok(p.description.trim(), `${c.id}/${p.id}`);
  }
});

test('starter-kit joystick and encoder retain the manufacturer physical header order and dry switch contacts', () => {
  const joystick = part('keyestudio-ks0008-joystick');
  const leftToRight = c => [...c.pins].sort((a, b) => a.x - b.x);
  assert.deepEqual(leftToRight(joystick).map(p => p.label), ['−', '+', 'B', 'X', 'Y']);
  assert.equal(pin(joystick, 'button').number, '3');
  assert.equal(pin(joystick, 'button').type, 'passive');
  assert.equal(pin(joystick, 'x').type, 'output');
  const encoder = part('keyestudio-ks0013-encoder');
  assert.deepEqual(leftToRight(encoder).map(p => p.label), ['−', '+', 'SW', 'DT', 'CLK']);
  for (const id of ['sw', 'dt', 'clk']) assert.equal(pin(encoder, id).type, 'passive');
});

test('Grove slide potentiometer keeps its separate LED-control contact instead of treating pin two as unused', () => {
  const slide = part('seeed-grove-slide-101020036');
  assert.equal(slide.pins.length, 4);
  assert.deepEqual(slide.pins.map(p => [p.number, p.label, p.type]), [
    ['1', 'OUT', 'output'], ['2', 'LED', 'input'], ['3', 'VCC', 'power_in'], ['4', 'GND', 'power_in'],
  ]);
  assert.ok(!tied(slide, 'out', 'led'));
});

test('four-contact flame, MQ2 and sound modules preserve distinct analog and threshold outputs and supply order', () => {
  const flame = part('keyestudio-ks0036-flame'), gas = part('keyestudio-ks0040-mq2');
  assert.deepEqual(flame.pins.map(p => p.label), ['VCC', 'GND', 'D0', 'A0']);
  assert.deepEqual(gas.pins.map(p => p.label), ['GND', 'VCC', 'D0', 'A0']);
  for (const c of [flame, gas, part('joyit-ky037-sound-threshold')]) {
    assert.equal(c.pins.length, 4);
    assert.equal(pin(c, 'analog').type, 'output');
    assert.ok(!tied(c, 'analog', 'digital'));
  }
  assert.equal(pin(part('joyit-ky037-sound-threshold'), 'digital').type, 'open_collector');
  assert.equal(pin(part('joyit-ky003-hall'), 'digital').type, 'open_collector');
});

test('RGB common-anode, traffic-light ground and IR signal directions remain distinct', () => {
  const rgb = part('keyestudio-ks0032-rgb-led'), traffic = part('keyestudio-ks0310-traffic-light');
  assert.deepEqual(rgb.pins.map(p => p.label), ['G', 'R', 'B', 'V']);
  assert.equal(pin(rgb, 'green').type, 'input');
  assert.ok(!rgb.pins.some(p => p.id === 'gnd'));
  assert.equal(pin(traffic, 'gnd').number, 'GND');
  assert.equal(pin(traffic, 'green').number, 'G');
  assert.equal(pin(part('keyestudio-ks0027-ir-transmitter'), 'signal').type, 'input');
  assert.equal(pin(part('keyestudio-ks0026-ir-receiver'), 'signal').type, 'output');
});

test('matrix daisy chain and ULN2003 motor socket preserve their shared nets and low-side drive topology', () => {
  const matrix = part('haljia-max7219-8x8-dip');
  assert.equal(matrix.pins.length, 10);
  for (const name of ['vcc', 'gnd', 'cs', 'clk']) assert.ok(tied(matrix, `in-${name}`, `out-${name}`));
  assert.ok(!tied(matrix, 'in-din', 'out-dout'));
  assert.equal(pin(matrix, 'in-din').type, 'input');
  assert.equal(pin(matrix, 'out-dout').type, 'output');
  const stepper = part('keyestudio-ks0327-uln2003-stepper');
  assert.equal(stepper.pins.length, 11);
  assert.ok(tied(stepper, 'vcc', 'motor-vcc'));
  assert.ok(!tied(stepper, 'gnd', 'motor-vcc'));
  for (let i = 1; i <= 4; i++) assert.equal(pin(stepper, `motor-out${i}`).type, 'open_collector');
});

test('M5Stack Units retain source-schematic socket numbering and isolated relay contacts', () => {
  const light = part('m5stack-unit-light-u021'), pir = part('m5stack-unit-pir-u004'), relay = part('m5stack-unit-relay-u023');
  assert.equal(pin(light, 'analog').number, 'J1.1');
  assert.equal(pin(light, 'digital').number, 'J1.2');
  assert.equal(pin(light, 'digital').type, 'open_collector');
  assert.equal(pin(pir, 'motion').number, 'J1.1');
  assert.equal(pin(pir, 'nc').type, 'no_connect');
  assert.equal(pin(relay, 'unused').type, 'no_connect');
  assert.equal(pin(relay, 'control').number, 'J1.2');
  for (const id of ['com', 'no', 'relay-nc']) {
    assert.equal(pin(relay, id).type, 'passive');
    assert.ok(!tied(relay, id, 'gnd'));
  }
});

test('mikroBUS Click boards retain all sixteen terminals, unused contacts and independent supply selection', () => {
  for (const id of ['mikroe-buzz-click-945', 'mikroe-button-r-click-1901', 'mikroe-light-click-1424']) {
    const c = part(id);
    assert.deepEqual(c.pins.map(p => p.number), Array.from({ length: 16 }, (_, i) => String(i + 1)));
    assert.equal(pin(c, 'p2').type, 'no_connect');
    assert.ok(tied(c, 'p8', 'p9'));
    assert.ok(!tied(c, 'p7', 'p10'));
    assert.ok(c.pins.filter(p => Number(p.number) <= 8).every(p => p.x === pin(c, 'p1').x));
  }
  const buzz = part('mikroe-buzz-click-945');
  assert.ok(tied(buzz, 'p3', 'p16'));
  const button = part('mikroe-button-r-click-1901');
  assert.equal(pin(button, 'p15').type, 'output');
  assert.equal(pin(button, 'p16').type, 'input');
  const light = part('mikroe-light-click-1424');
  assert.equal(pin(light, 'p4').type, 'input');
  assert.equal(pin(light, 'p5').type, 'output');
  assert.equal(pin(light, 'p6').type, 'no_connect');
});

test('DFRobot liquid-sensor probe contacts remain separate from the host supply and output ground', () => {
  const ph = part('dfrobot-sen0161-v2-ph'), tds = part('dfrobot-sen0244-tds');
  assert.equal(pin(ph, 'bnc-center').type, 'input');
  assert.equal(pin(ph, 'bnc-shield').type, 'passive');
  assert.ok(!tied(ph, 'bnc-shield', 'gravity-1'));
  for (const id of ['probe-top', 'probe-bottom']) {
    assert.equal(pin(tds, id).type, 'passive');
    assert.ok(!tied(tds, id, 'gravity-1'));
    assert.ok(!tied(tds, id, 'gravity-2'));
  }
});

test('SparkFun spectral boards preserve sensor-domain pins and the AS7331 reversed header numbers', () => {
  const spectral = part('sparkfun-as7343-sen23220'), uv = part('sparkfun-as7331-sen23517');
  for (const id of ['j3-5', 'j3-6']) assert.match(pin(spectral, id).description, /1\.8 V/);
  assert.equal(pin(spectral, 'd3-1').type, 'open_collector');
  assert.ok(tied(spectral, 'd3-2', 'j3-2'));
  assert.ok(!tied(spectral, 'd3-1', 'j3-1'));
  assert.deepEqual(uv.pins.filter(p => p.number.startsWith('J3.')).map(p => [p.number, p.label]), [
    ['J3.6', 'SCL'], ['J3.5', 'SDA'], ['J3.4', '3V3'], ['J3.3', 'GND'], ['J3.2', 'INT'], ['J3.1', 'SYN'],
  ]);
  assert.equal(pin(uv, 'j3-1').type, 'input');
});

test('Seeed actuator service contacts keep switched supply, oscillator output and coil return distinct', () => {
  const atomizer = part('seeed-grove-water-atomization-101020090');
  assert.equal(atomizer.pins.length, 14);
  assert.equal(pin(atomizer, 'vcc-t').type, 'power_out');
  assert.ok(!tied(atomizer, 'vcc-t', 'j1-3'));
  assert.equal(pin(atomizer, 'pwm-t').type, 'output');
  assert.ok(!tied(atomizer, 'pwm-t', 'j1-1'));
  assert.equal(pin(atomizer, 'j2-positive-').label, 'HV');
  assert.ok(tied(atomizer, 'j2-positive-', 'out-positive-t'));
  const magnet = part('seeed-grove-electromagnet-101020073');
  assert.equal(magnet.pins.length, 14);
  assert.equal(pin(magnet, 'j2-1').type, 'open_collector');
  assert.ok(tied(magnet, 'j2-1', 'tp5-t'));
  assert.ok(!tied(magnet, 'j2-1', 'j1-4'));
});

test('manufacturer aliases combine SparkFun names and recognize Raspberry Pi Foundation, Teensy and mikroe', () => {
  const index = createLibraryIndex(components);
  const sparkfun = components.filter(c => /sparkfun/i.test(c.manufacturer));
  for (const name of ['SparkFun', 'SparkFun Electronics']) {
    assert.deepEqual(filterLibrary(index, { manufacturer: name }).map(e => e.component.id).sort(), sparkfun.map(c => c.id).sort());
  }
  assert.equal(index.manufacturers.filter(m => /sparkfun/i.test(m.name)).length, 1);
  assert.equal(manufacturerName('Raspberry Pi Foundation'), 'Raspberry Pi');
  assert.equal(manufacturerName('Teensy'), 'PJRC');
  assert.equal(manufacturerName('MikroElektronika'), 'MIKROE');
});

test('Espressif variants keep separate header numbering and the ESP8684 unconnected package terminal', () => {
  const m = part('esp8684-devkitm-1-v1-1'), c = part('esp8684-devkitc-02-v1-0'), classic = part('esp32-devkitm-1-mini-v1');
  assert.deepEqual([m.pins.length, c.pins.length, classic.pins.length], [30, 30, 34]);
  assert.equal(pin(c, 'j3-13').type, 'no_connect');
  assert.equal(pin(c, 'j3-9').label, 'RX');
  assert.equal(pin(c, 'j3-10').label, 'TX');
  assert.equal(pin(classic, 'j3-2').label, 'TX');
  assert.equal(pin(classic, 'j3-3').label, 'RX');
  assert.equal(pin(classic, 'j3-1').label, 'GND');
  assert.equal(pin(classic, 'j3-17').label, '12');
  for (const number of [3, 4, 5, 6, 8, 9]) assert.equal(pin(classic, `j1-${number}`).type, 'input');
});

test('Pololu reflectance interfaces and RobotDyn duplicate corner contacts retain their distinct electrical roles', () => {
  assert.equal(pin(part('pololu-qtr-1a-958'), 'out').type, 'output');
  assert.equal(pin(part('pololu-qtr-1rc-959'), 'out').type, 'bidirectional');
  const divider = part('robotdyn-25v-voltage-sensor');
  assert.equal(divider.pins.length, 4);
  assert.ok(tied(divider, 'input-gnd', 'output-gnd'));
  assert.equal(pin(divider, 'input-vcc').type, 'input');
  assert.equal(pin(divider, 'output-ao').type, 'output');
  for (const id of ['robotdyn-ams1117-3-3v-module', 'robotdyn-ams1117-5v-module']) {
    const regulator = part(id);
    assert.equal(regulator.pins.length, 8);
    assert.equal(pin(regulator, 'vout').type, 'power_out');
    assert.ok(tied(regulator, 'vout', 'corner-vout'));
    assert.ok(tied(regulator, 'vin', 'corner-vin'));
    assert.ok(!tied(regulator, 'vin', 'vout'));
  }
});

test('Arduino Modulino source carriers keep mirrored fixture contacts and repeated grounded socket retainers', () => {
  for (const id of ['arduino-modulino-knob-abx00107', 'arduino-modulino-buttons-abx00110']) {
    const c = part(id), pads = footprintLayout(c).pads;
    assert.equal(c.pins.length, 37);
    assert.equal(pads.length, 41);
    const rear = c.pins.filter(p => p.number.startsWith('TP.'));
    assert.equal(rear.length, 15);
    assert.equal(rear.filter(p => p.type === 'no_connect').length, 8);
    assert.ok(tied(c, 'j3-4', 'tp-12'));
    assert.ok(tied(c, 'j3-5', 'tp-14'));
    assert.ok(tied(c, 'j3-6', 'tp-15'));
    assert.equal(pin(c, 'j3-3').type, 'power_in');
    for (const number of ['J1.1', 'J2.1']) assert.equal(pads.filter(p => p.number === number).length, 3);
  }
});

test('Teensy variants retain rear USB, SDIO and analog-reference contacts without merging distinct data signals', () => {
  for (const [id, count] of [['pjrc-teensy-4-0', 66], ['pjrc-teensy-lc', 41], ['pjrc-teensy-2-0', 31]]) {
    const c = part(id);
    assert.equal(c.pins.length, count);
    if (id !== 'pjrc-teensy-2-0') {
      assert.equal(pin(c, 'hr-3v3').type, 'power_out');
      assert.ok(tied(c, 'usb-vusb', 'usbpad-vusb'));
      assert.equal(pin(c, 'usbpad-dminus').type, 'bidirectional');
      assert.equal(pin(c, 'usbpad-dplus').type, 'bidirectional');
      assert.ok(!tied(c, 'usbpad-dminus', 'usbpad-dplus'));
    }
  }
  assert.equal(part('pjrc-teensy-4-0').pins.filter(p => /^SD\d\./.test(p.number)).length, 8);
  assert.equal(pin(part('pjrc-teensy-lc'), 'inner-aref').type, 'input');
  assert.equal(pin(part('pjrc-teensy-2-0'), 'inner-aref').type, 'input');
});

test('Pico 2 variants and Debug Probe distinguish rear service rails, USB signals and probe-versus-target SWD', () => {
  for (const [id, contacts, pads] of [['raspberry-pi-pico-2', 50, 54], ['raspberry-pi-pico-2-w', 49, 53]]) {
    const c = part(id);
    assert.equal(c.pins.length, contacts);
    assert.equal(footprintLayout(c).pads.length, pads);
    assert.equal(pin(c, 'tp2').label, 'USB_DM');
    assert.equal(pin(c, 'tp3').label, 'USB_DP');
    assert.ok(!tied(c, 'tp2', 'tp3'));
    assert.equal(pin(c, 'pin39').label, 'VSYS');
    assert.ok(!tied(c, 'pin39', 'pin40'));
  }
  assert.equal(pin(part('raspberry-pi-pico-2'), 'tp7').label, '1V1');
  assert.ok(!part('raspberry-pi-pico-2-w').pins.some(p => p.id === 'tp7'));
  const probe = part('raspberry-pi-debug-probe-rev2');
  assert.equal(probe.pins.length, 35);
  assert.ok(!probe.pins.some(p => p.number === 'TP4'));
  assert.equal(pin(probe, 'tp10').type, 'output');
  assert.equal(pin(probe, 'tp13').type, 'input');
  assert.ok(!tied(probe, 'tp10', 'tp13'));
  assert.equal(pin(probe, 'tp17').type, 'passive');
  assert.equal(pin(probe, 'tp27').label, '1V1');
});
