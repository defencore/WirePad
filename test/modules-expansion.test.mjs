import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { componentById, components } from '../src/catalog/index.js';
import { manufacturerName } from '../src/catalog/filter.js';
import { sourceModule } from '../src/catalog/shared/modules-source-board.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';
import { accuracyByComponent, readAccuracy } from '../scripts/catalog-tree.mjs';

const entries = catalogFamilies.filter(f => f.id.startsWith('modules-')).flatMap(f => f.entries);
const files = [
  'catalog-modules-mikroe-2026-11-08.json',
  'catalog-modules-adafruit-sparkfun-2026-11-08.json',
  'catalog-modules-dfrobot-seeed-2026-11-08.json',
  'catalog-modules-dfrobot-converters-2026-11-08.json',
  'catalog-modules-seeed-extended-2026-11-08.json',
];

test('the second expansion adds at least 1000 distinct boards and modules to the previous 1002 parts', () => {
  assert.ok(entries.length >= 1000, `Only ${entries.length} additional modules.`);
  assert.ok(components.length >= 2002);
  const codes = entries.map(({ component: c }) => `${manufacturerName(c.manufacturer)}:${c.shortName.toUpperCase()}`);
  assert.equal(new Set(codes).size, codes.length, 'Ordering codes must identify distinct products.');
  for (const { component: c } of entries) {
    assert.equal(c.module, true, c.id);
    assert.equal(c.contactLayout, 'physical', c.id);
    assert.match(c.source, /^https:\/\//, c.id);
    assert.ok(c.revision && c.shortName && c.manufacturer, c.id);
    assert.match(c.availability?.checked ?? '', /^\d{4}-\d{2}-\d{2}$/, c.id);
    assert.match(c.availability?.url ?? '', /^https:\/\//, c.id);
    assert.match(c.availability?.status ?? '', /stock|available|order|offer/i, c.id);
    assert.doesNotMatch(c.availability.status, /\b(?:out of stock|not in stock|unavailable|sold out|zero stock)\b/i, c.id);
  }
});

test('every added module has one source audit with matching contact count and an explicit scoped KiCad assessment', async () => {
  const rows = (await Promise.all(files.map(async name => JSON.parse(await readFile(new URL(`../docs/${name}`, import.meta.url), 'utf8')).entries))).flat();
  const byId = new Map(rows.map(e => [e.id, e]));
  assert.equal(byId.size, rows.length, 'Source audit ownership must not overlap.');
  assert.deepEqual([...byId.keys()].sort(), entries.map(e => e.component.id).sort());
  const accuracy = accuracyByComponent(catalogFamilies, await readAccuracy());
  for (const { component: c } of entries) {
    const row = byId.get(c.id);
    assert.equal(row.sku, c.shortName, c.id);
    assert.equal(row.contactCount ?? (Array.isArray(row.contacts) ? row.contacts.length : row.contacts), c.pins.length, c.id);
    const mark = row.accuracy?.footprint ?? row.footprintStatus ?? /^FP:([MCR?])/.exec(row.footprintRecommendation ?? '')?.[1];
    assert.match(mark ?? '', /^[CR]$/, `${c.id}: module contact references must not claim production mating verification`);
    assert.equal(accuracy.get(c.id)?.footprint, mark, c.id);
  }
});

const sample = (extra = {}) => ({
  id: 'physical-module-review', sku: 'REVIEW-1', name: 'Physical module review',
  manufacturer: 'Review', source: 'https://example.com/board', revision: '1.0',
  description: 'A geometry regression fixture.', board: { width: 20, height: 12 },
  footprintMode: 'reference', footprintNote: 'Selected reference lands.',
  contacts: [
    { number: 'J1.D+', label: 'D+', type: 'bidirectional', description: 'Front USB data.', x: -7, y: -2, size: [2, 2], drill: 1, shape: 'rect' },
    { number: 'J1.D-', label: 'D-', type: 'bidirectional', description: 'Rear USB data.', x: -7, y: 2, size: [1, 1], smd: true, shape: 'circle', back: true },
  ], ...extra,
});

test('mirrored underside views move canvas anchors while retaining source coordinates and USB terminal identity', () => {
  const entry = sourceModule(sample());
  const [front, rear] = entry.component.pins;
  assert.notEqual(front.id, rear.id, 'USB D+ and D- must remain distinct.');
  assert.ok(front.x < entry.component.width / 2);
  assert.ok(rear.x > entry.component.width / 2);
  assert.ok(rear.y > front.y);
  assert.deepEqual(entry.footprint.pads.map(p => [p.x, p.y]), [[-7, -2], [-7, 2]]);
  for (const p of entry.component.pins) assert.equal(p.surface, true);
  const svg = entry.render(entry.component, true);
  assert.match(svg, /UNDERSIDE BELOW · MIRRORED/);
  assert.match(svg, /data-contact="p-j1-dplus" stroke-width="0\.06"/);
  assert.match(svg, /<rect[^>]+fill="#d4bb75"[^>]*\/><circle[^>]+r="0.5"[^>]+fill="#203b35"/);
  assert.match(svg, /<circle[^>]+r="0.5"[^>]+fill="#d4bb75"/);
});

test('connector overhang expands the illustration without moving native pads or enlarging the PCB body', () => {
  const plain = sourceModule(sample());
  const overhang = sourceModule(sample({ artworkBounds: [-22, -9, 11, 8], backArtworkBounds: [-11, -6, 13, 6] }));
  assert.ok(overhang.component.width > plain.component.width);
  assert.ok(overhang.component.height > plain.component.height);
  assert.deepEqual(overhang.footprint, plain.footprint);
  assert.deepEqual(overhang.footprint.body, [20, 12]);
});

test('physical module drafts reject missing terminal numbers and malformed source geometry', () => {
  const contact = sample().contacts[0];
  for (const invalid of [{ number: undefined }, { number: '' }, { size: [1, 0] }, { drill: -1 }, { x: NaN }]) {
    assert.throws(() => sourceModule(sample({ contacts: [{ ...contact, ...invalid }] })), /physical|geometry/i);
  }
  assert.throws(() => sourceModule(sample({ artworkBounds: [5, 0, -5, 1] })), /artwork bounds/);
});

test('verified DFRobot physical pin numbers and repeated edge lands follow the vendor CAD', () => {
  const magnetometer = componentById.get('dfrobot-fermion-bmm150-sen0419');
  assert.deepEqual(magnetometer.pins.map(p => p.label), ['VCC', 'GND', 'SCK', 'SDI', 'SDO', 'CS', 'PS', 'DRDY', 'INT']);
  assert.equal(magnetometer.pins[1].type, 'power_in');
  const gesture = componentById.get('dfrobot-fermion-gr10-30-sen0543');
  assert.equal(gesture.pins.length, 12);
  assert.equal(footprintLayout(gesture).pads.length, 24);
  const byNumber = new Map(gesture.pins.map(p => [p.number, p]));
  assert.equal(byNumber.get('6').type, 'no_connect');
  assert.equal(byNumber.get('11').label, 'GND');
  assert.equal(byNumber.get('12').label, 'VCC');
});

test('mirroring a bottom-layer Kailh socket places its source contacts on the front view', () => {
  for (const [id, ref] of [['adafruit-module-4978', 'SW1'], ['adafruit-module-5695', 'SW2']]) {
    const contacts = componentById.get(id).pins.filter(p => p.number.startsWith(`${ref}.`));
    assert.equal(contacts.length, 2, id);
    for (const p of contacts) assert.doesNotMatch(p.description, /Underside contact/, `${id}/${p.number}`);
  }
});

test('converter outputs retain physical channel order and distinguish host logic supply from high-voltage input', () => {
  const pins = id => new Map(componentById.get(id).pins.map(p => [p.number, p]));
  const dual = pins('dfrobot-gravity-gp8501-dfr1037');
  assert.equal(dual.get('P2.1').label, 'VOUT1');
  assert.equal(dual.get('P2.2').label, 'GND');
  assert.equal(dual.get('P2.3').label, 'VOUT0');
  assert.equal(dual.get('P3.1').label, 'D1');
  assert.equal(dual.get('P1.1').label, 'D0');
  const current = pins('dfrobot-gravity-gp8302-dfr0972');
  assert.match(current.get('J2.1').description, /18–24V/);
  assert.match(current.get('P1.4').description, /3.3–5V/);
  assert.equal(current.get('J1.1').type, 'output');
  const adc = pins('dfrobot-gravity-ads1115-0-10v-dfr1184');
  assert.equal(adc.get('P2.1').label, 'AIN1');
  assert.equal(adc.get('P2.3').label, 'GND');
  assert.equal(adc.get('P1.1').label, 'D/T');
});

test('the SC18IS602B Click bridge exposes SPI master directions on its printed SPI contacts', () => {
  const pins = new Map(componentById.get('mikroe-mikroe-3743-i2ctospi').pins.map(p => [p.number, p]));
  assert.equal(pins.get('4').type, 'output');
  assert.equal(pins.get('5').type, 'input');
  assert.equal(pins.get('6').type, 'output');
});

test('voltage-prefixed enable contacts retain their schematic control direction', () => {
  for (const [id, number, type] of [
    ['adafruit-module-5956', 'JP2.3', 'input'],
    ['adafruit-module-5858', 'JP4.4', 'input'],
    ['sparkfun-module-dev15443', 'J4.1', 'input'],
    ['sparkfun-module-dev16401', 'J1.4', 'bidirectional'],
  ]) {
    assert.equal(componentById.get(id).pins.find(p => p.number === number).type, type, `${id}/${number}`);
  }
});

test('isolated DFRobot interfaces keep the two source ground domains separate', () => {
  for (const [id, first, second] of [
    ['dfrobot-adum1250-isolator-dfr0565', 'P3.2', 'P4.3'],
    ['dfrobot-isolated-rs485-uart-dfr0845', 'P4.2', 'P1.3'],
  ]) {
    const component = componentById.get(id);
    const a = component.pins.find(p => p.number === first).id;
    const b = component.pins.find(p => p.number === second).id;
    assert.ok(!component.internalConnections.some(group => group.includes(a) && group.includes(b)), id);
  }
});

test('Click control roles follow their schematic wiring instead of generic bus or channel names', () => {
  const pins = id => new Map(componentById.get(id).pins.map(p => [p.number, p]));
  const lcd = pins('mikroe-mikroe-3789-lcdmono');
  assert.equal(lcd.get('5').type, 'input', 'Nominal SDO is the display-enable input.');
  assert.equal(lcd.get('16').type, 'input', 'COM inversion is driven by the host.');
  const touch = pins('mikroe-mikroe-5204-ldctouch');
  for (const number of ['1', '2', '3', '16']) assert.equal(touch.get(number).type, 'output');
  const alcohol = pins('mikroe-mikroe-3097-alcohol2');
  for (const number of ['15', '16']) {
    assert.equal(alcohol.get(number).label, 'NC');
    assert.equal(alcohol.get(number).type, 'no_connect');
  }
});

test('THVD1424 uses Y and Z for half-duplex communication while A and B remain receiver inputs', () => {
  const pins = new Map(componentById.get('mikroe-mikroe-5659-rs4857').pins.map(p => [p.number, p]));
  for (const number of ['CN1.A', 'CN1.B']) assert.equal(pins.get(number).type, 'input');
  for (const number of ['CN2.Y', 'CN2.Z']) assert.equal(pins.get(number).type, 'bidirectional');
});
