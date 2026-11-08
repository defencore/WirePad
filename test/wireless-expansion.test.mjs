import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, componentArt } from '../src/catalog/index.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const pin = (component, number) => component.pins.find(pin => pin.number === String(number));

test('TI radio ICs retain the datasheet RF, SPI and exposed-ground terminal assignments', () => {
  for (const id of ['ti-cc1101-rgp20', 'ti-cc2500-rgp20']) {
    const component = componentById.get(id);
    assert.equal(component.pins.length, 21);
    assert.equal(pin(component, 1).label, 'SCLK');
    assert.equal(pin(component, 7).label, 'CSn');
    assert.equal(pin(component, 12).label, 'RF_P');
    assert.equal(pin(component, 13).label, 'RF_N');
    assert.equal(pin(component, 20).label, 'SI');
    assert.equal(pin(component, 21).label, 'GND');
    assert.equal(pin(component, 5).type, 'power_out');
    assert.deepEqual(component.internalConnections, [['pad-16', 'pad-19', 'exposed-pad']]);
    const lands = footprintLayout(component).pads;
    assert.deepEqual(lands.filter(pad => pad.number === '21').map(({ x, y, width, height }) => [x, y, width, height]), [[0, 0, 2.4, 2.4]]);
    // The canvas is the mirrored underside; the native footprint is a top projection.
    assert.ok(pin(component, 1).x > component.width / 2);
    assert.ok(lands.find(pad => pad.number === '1').x < 0);
    assert.match(componentArt(component), /UNDERSIDE · MIRRORED/);
  }
  for (const id of ['ti-cc1120-rhb32', 'ti-cc1200-rhb32']) {
    const component = componentById.get(id);
    assert.equal(component.pins.length, 33);
    assert.equal(pin(component, 2).label, 'RESET_N');
    assert.equal(pin(component, 16).type, 'no_connect');
    assert.equal(pin(component, 17).label, 'PA');
    assert.equal(pin(component, 19).label, 'LNA_P');
    assert.equal(pin(component, 20).label, 'LNA_N');
    assert.equal(pin(component, 32).label, 'EXT_XOSC');
    assert.equal(pin(component, 33).label, 'GND');
  }
});

test('TI LaunchPads distinguish their UART, buttons and default-disconnected reset positions', () => {
  const r1 = componentById.get('ti-launchxl-cc1352r1');
  const r7 = componentById.get('ti-lp-cc1312r7');
  assert.equal(pin(r1, 3).label, 'DIO12');
  assert.equal(pin(r7, 3).label, 'DIO2');
  assert.equal(pin(r1, 13).label, 'DIO15');
  assert.equal(pin(r7, 13).label, 'DIO13');
  assert.equal(pin(r1, 11).type, 'no_connect');
  assert.equal(pin(r7, 11).label, 'DIO15');
  assert.match(pin(r7, 35).description, /Not connected by default/);
  for (const component of [r1, r7]) {
    assert.equal(component.pins.length, 40);
    const lands = footprintLayout(component).pads;
    const at = number => lands.find(pad => pad.number === String(number));
    assert.equal(at(20).x - at(1).x, 45.72);
    assert.ok(Math.abs(at(21).x - at(1).x - 2.54) < 1e-9);
    assert.equal(at(1).y, at(21).y);
    assert.equal(at(1).y, at(20).y);
    assert.equal(at(20).y, at(40).y);
  }
});

test('EBYTE UART and CC1101 modules expose electrical terminals in the documented physical order', () => {
  for (const id of ['e22-400t22d', 'e22-900t22d', 'e32-433t20d', 'e32-900t20d', 'e220-400t22d', 'e220-900t22d']) {
    const component = componentById.get(id);
    assert.deepEqual(component.pins.map(({ label }) => label), ['M0', 'M1', 'RXD', 'TXD', 'AUX', 'VCC', 'GND']);
    assert.equal(pin(component, 3).type, 'input');
    assert.equal(pin(component, 4).type, 'output');
    assert.ok(pin(component, 1).x > pin(component, 7).x);
    assert.equal(component.pins.length, 7, 'mechanical fixing holes are not electrical terminals');
  }
  const cc1101 = componentById.get('e07-900m10s');
  assert.equal(pin(cc1101, 14).type, 'output');
  assert.equal(pin(cc1101, 15).type, 'bidirectional');
  assert.equal(pin(cc1101, 21).label, 'ANT');
  assert.equal(pin(cc1101, 9).label, 'VCC');
  const sx1262 = componentById.get('semtech-sx1262imltrt');
  assert.equal(pin(sx1262, 0).label, 'GND');
  assert.equal(pin(sx1262, 14).label, 'BUSY');
  assert.equal(pin(sx1262, 19).label, 'NSS');
});

test('LILYGO and Nordic expansion contacts retain schematic-specific functions', () => {
  const encoder = componentById.get('lilygo-t-encoder-pro-v1-0');
  assert.equal(pin(encoder, 'CN1.3').label, 'GPIO16');
  assert.equal(pin(encoder, 'CN1.4').label, 'GPIO15');
  assert.equal(pin(encoder, 'CN2.3').label, 'GPIO43');
  assert.equal(pin(encoder, 'CN2.4').label, 'GPIO44');
  const itsy = componentById.get('adafruit-itsybitsy-nrf52840-express-4481');
  assert.equal(pin(itsy, 'JP2.10').label, '5!');
  assert.equal(pin(itsy, 'JP2.10').type, 'output');
});

test('Analog Devices carriers preserve sense, force and DAC output contact assignments', () => {
  const rtd = componentById.get('adafruit-max31865-3328');
  assert.equal(pin(rtd, 'X1.1').label, 'RTD+');
  assert.equal(pin(rtd, 'X1.2').label, 'F+');
  assert.equal(pin(rtd, 'X2.1').label, 'F−');
  assert.equal(pin(rtd, 'X2.2').label, 'RTD−');
  const dac = componentById.get('adafruit-ad5693r-5811');
  assert.equal(pin(dac, 'JP3.1').label, 'VREF');
  assert.equal(pin(dac, 'X1.2').type, 'output');
  const grounds = footprintLayout(dac).pads.filter(pad => pad.number === 'CONN3.1');
  assert.equal(grounds.length, 3, 'the QT ground terminal includes its two connected retaining tabs');
});
