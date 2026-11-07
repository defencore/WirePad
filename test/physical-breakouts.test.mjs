import assert from 'node:assert/strict';
import { test } from 'node:test';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { componentById, componentArt } from '../src/catalog/index.js';
import { physicalComponent } from '../src/catalog/shared/physical-contacts.js';

const families = new Set([
  'common-interfaces', 'common-peripherals', 'common-power', 'common-sensors',
  'air-quality-sensors', 'environment-sensors', 'force-sensors', 'motion-sensors',
  'analog-prototyping', 'audio-prototyping', 'input-prototyping', 'adafruit-ready',
  'waveshare-ready', 'nordic-ready', 'nxp-ready', 'arduino-ready', 'espressif-ready', 'semtech-ready',
]);

const point = (id, pinId) => {
  const pin = componentById.get(id).pins.find(pin => pin.id === pinId);
  return [pin.x, pin.y];
};

test('all breakout families expose their physical contacts in both illustration modes', () => {
  const entries = catalogFamilies.filter(family => families.has(family.id)).flatMap(family => family.entries);
  assert.equal(entries.length, 105);
  for (const { component } of entries) {
    assert.equal(component.contactLayout, 'physical', component.id);
    assert.ok(component.pins.every(pin => pin.surface), component.id);
    for (const labels of [true, false]) {
      const svg = componentArt(component, { labels });
      assert.doesNotMatch(svg, /\b(?:NaN|undefined|Infinity)\b/, component.id);
      assert.match(svg, /^<svg/, component.id);
    }
  }
});

test('solder holes, screw terminals and socket contacts are direct connection points', () => {
  assert.deepEqual(point('sunfounder-l298n-hw095', 'out1'), [44, 146]);
  assert.deepEqual(point('keyestudio-ks0011-5v-relay', 'com'), [62.5, 35]);
  assert.deepEqual(point('adafruit-pca9685-815', 'pwm15'), [369, 135]);
  assert.deepEqual(point('adafruit-4226-ina260', 'ip-term'), [115, 68]);
  assert.deepEqual(point('adafruit-max31856-3263', 'therm-plus'), [87, 52]);
  assert.deepEqual(point('sparkfun-hx711-13879', 'b-plus'), [122, 77]);
  assert.deepEqual(point('interlink-fsr402-44-29103', '1'), [36, 163]);
  assert.deepEqual(point('dfrobot-capacitive-soil-sen0193', 'gnd'), [53, 31]);
  assert.deepEqual(point('nxp-brkt-stbc-agm01', 'gnd'), [292, 101]);
  assert.deepEqual(point('waveshare-rs232-board', 'db9-1'), [303, 63]);
  assert.deepEqual(point('waveshare-rs232-board', 'db9-9'), [275, 79]);
});

test('hidden Arduino service contacts sit on an identified rear PCB and Nordic pads on its underside', () => {
  for (const id of ['arduino-nano-33-iot', 'arduino-mkr-zero', 'arduino-mkr-wifi-1010']) {
    const component = componentById.get(id);
    const back = component.pins.filter(pin => pin.view === 'back');
    assert.ok(back.length >= 5, id);
    assert.ok(back.every(pin => pin.x > 10 && pin.x < 50 && pin.y > 170 && pin.y < 285), id);
    assert.match(componentArt(component), /BACK/, id);
  }
  assert.deepEqual(point('nordic-nrf52840-dongle', 'usb-dp'), [356.834, 144.334]);
  assert.deepEqual(point('nordic-nrf52840-dongle', 'reset'), [261.401, 117.014]);
  assert.deepEqual(point('nordic-power-profiler-kit-ii', 'dbg-vref'), [45.5, 117]);
  assert.match(componentArt(componentById.get('nordic-nrf52840-dongle')), /BACK \/ USB RIGHT/);
});

test('indexed contact positions preserve numeric pin identity and stable symbol ordering', () => {
  const component = { width: 100, height: 80, pins: [{ id: '1', x: 0, y: 30 }, { id: '2', x: 100, y: 20 }] };
  const physical = physicalComponent(component, [[12, 25], [88, 25]]);
  assert.deepEqual(physical.pins.map(pin => [pin.id, pin.x, pin.y]), [['1', 12, 25], ['2', 88, 25]]);
  assert.deepEqual(physical.pins.map(pin => pin.symbolPlacement), [{ side: 'left', order: 1 }, { side: 'right', order: 0 }]);
});
