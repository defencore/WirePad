import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { kicadFootprint, kicadModel, kicadSymbol } from '../src/assets/kicad.js';
import { instancePins } from '../src/model/part-pins.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-mini-computing-mounting-followup-2026-11-08.json', import.meta.url)));
const supported = audit.entries.filter(entry => entry.decision === 'supported');
const digest = value => createHash('sha256').update(value).digest('hex');
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-7, `${a} != ${b}`);

test('mini follow-up distinguishes complete insertion maps, actual incompatible rows and source gaps', () => {
  assert.equal(audit.checkedEntries, 12);
  assert.equal(audit.entries.length, 12);
  assert.equal(new Set(audit.entries.map(entry => entry.id)).size, 12);
  assert.equal(supported.length, audit.newSupportedProfiles);
  assert.equal(supported.length, 7);
  for (const entry of audit.entries) {
    assert.ok(componentById.has(entry.id), entry.id);
    assert.ok(entry.reason && entry.sources.length, entry.id);
    assert.equal(Boolean(mountingFor(entry.id)), entry.decision === 'supported', entry.id);
  }
  const incompatible = audit.entries.find(entry => entry.id === 'sipeed-maix-ii-dock-3072');
  assert.equal(incompatible.decision, 'requires-adapter');
  close(incompatible.primaryRowsMm.separation, 28.99999788);
  assert.ok(Math.abs(incompatible.primaryRowsMm.separation / 2.54 - 11) > .4);
  assert.match(audit.entries.find(entry => entry.id === 'luckfox-pico2').reason, /Source identity mismatch/);
});

test('all audited published definitions, anchors, default SVGs and native KiCad assets remain byte-identical', () => {
  for (const [id, expected] of Object.entries(audit.canonicalPreservation)) {
    const component = componentById.get(id);
    assert.equal(digest(JSON.stringify(component)), expected.definition, id);
    assert.deepEqual([true, false].map(labels => digest(componentArt(component, { labels }))), expected.art, id);
    assert.deepEqual([kicadSymbol, kicadFootprint, kicadModel].map(render => digest(render(component))), expected.native, id);
  }
});

test('new physical views preserve every endpoint and use full nominal header grids without affecting old instances', () => {
  for (const entry of supported) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId), component.pins.map(pin => pin.id), entry.id);
    assert.equal(profile.view.pins.length, entry.completePublishedPinCount, entry.id);
    assert.deepEqual(profile.contacts, entry.primaryContactCentresMm, entry.id);
    const original = { id: 'part', componentId: entry.id, x: 17, y: 23 };
    assert.equal(instancePins(original, component), component.pins, entry.id);
    assert.equal(instancePins({ ...original, scale: { x: .7, y: .7 } }, component), component.pins, entry.id);
    const physical = instancePins({ ...original, view: 'breadboard' }, component);
    const points = new Map(physical.map(pin => [pin.id, pin])), first = profile.contacts[0];
    for (const contact of profile.contacts) for (const axis of ['x', 'y']) {
      close((contact[axis] - first[axis]) / 2.54, Math.round((contact[axis] - first[axis]) / 2.54));
      close(points.get(contact.pinId)[axis], 20 + contact[axis] * 10);
    }
    assert.equal(profile.calibration.toleranceMm, undefined, entry.id);
    assert.equal(profile.renderMounted(component, false), profile.renderMounted({ ...component, pins: physical }, false), entry.id);
    assert.notEqual(profile.renderMounted(component, true), profile.renderMounted(component, false), entry.id);
    assert.equal((profile.renderMounted(component).match(/<title>/g) ?? []).length, component.pins.length, entry.id);
  }
});

test('original and 1K Nano retain all four source-mapped optional JTAG pads and their electrical functions', () => {
  const original = mountingFor('sipeed-tang-nano'), one = mountingFor('sipeed-tang-nano-1k');
  for (const profile of [original, one]) {
    assert.equal(profile.contacts.length, 40);
    assert.equal(profile.view.pins.length, 44);
  }
  const pins = new Map(one.view.pins.map(pin => [pin.pinId, pin]));
  assert.match(pins.get('p2-2').description, /P3\.2 \/ TDI/);
  assert.match(pins.get('p3-2').description, /P2\.2 \/ TDO/);
  assert.equal(pins.get('p2-2').number, 'P3.2');
  assert.equal(pins.get('p3-2').number, 'P2.2');
  const instance = new Map(instancePins({ componentId: 'sipeed-tang-nano-1k', view: 'breadboard' },
    componentById.get('sipeed-tang-nano-1k')).map(pin => [pin.id, pin]));
  assert.equal(instance.get('p2-2').number, 'P3.2');
  assert.equal(instance.get('p3-2').number, 'P2.2');
  assert.ok(pins.get('p2-2').x > pins.get('p3-2').x);
  assert.ok(one.contacts.every(pin => !/^p[23]-/.test(pin.pinId)));
  const oldPins = new Map(original.view.pins.map(pin => [pin.pinId, pin]));
  assert.ok(oldPins.get('jtag-4').x < oldPins.get('jtag-7').x);
  assert.ok(oldPins.get('jtag-3').x < oldPins.get('jtag-6').x);
});

test('9K production pads resolve the old PDF row discrepancy; nominal assembly inferences remain explicit', () => {
  const nine = mountingFor('sipeed-tang-nano-9k'), pins = new Map(nine.contacts.map(pin => [pin.pinId, pin]));
  close(pins.get('j6-1').x - pins.get('j5-1').x, 22.86);
  assert.equal(nine.contacts.length, 48);
  assert.match(nine.bodyEvidence, /production pad coordinates/);
  assert.match(mountingFor('sipeed-tang-nano-20k').bodyEvidence, /compatible-family nominal-header inference/);
  const bit = mountingFor('sipeed-maix-bit-v2-0');
  assert.equal(bit.contacts.length, 36);
  assert.ok(bit.contacts.every(pin => !/-1[01]$/.test(pin.pinId)));
  assert.match(bit.bodyEvidence, /documented nominal assembly inference/);
  close(bit.contacts.find(pin => pin.pinId === 'j13-12').x - bit.contacts.find(pin => pin.pinId === 'j13-9').x, 3 * 2.54);
});

test('Trenz uses complete nominal MKR posts and retains the source unpopulated auxiliary hole pattern', () => {
  const profile = mountingFor('trenz-tec0117-01'), component = componentById.get('trenz-tec0117-01');
  assert.equal(profile.contacts.length, 28);
  assert.equal(profile.view.pins.length, 46);
  const primary = new Map(profile.contacts.map(pin => [pin.pinId, pin]));
  close(primary.get('j2-14').x - primary.get('j1-1').x, 20.32);
  close(primary.get('j2-14').y, primary.get('j1-1').y);
  const pins = new Map(profile.view.pins.map(pin => [pin.pinId, pin]));
  close(pins.get('j6-1').x, pins.get('j6-7').x);
  close(pins.get('j6-7').y - pins.get('j6-1').y, 25.4);
  assert.ok(pins.get('j6-1').x > pins.get('j6-6').x);
  assert.ok(pins.get('j4-1').y < pins.get('j4-6').y);
  assert.match(profile.note, /not for an assembled right-angle Pmod socket/);
  const art = profile.renderMounted(component);
  assert.match(art, /J6\.1 — PIO_01/);
  assert.match(art, />1<\/text>/);
  assert.ok(profile.bodyRegions.every(region => region.width < component.width));
});

test('Lichee Zero uses every inner even-number tap and keeps all 84 source-mapped fine and auxiliary endpoints', () => {
  const component = componentById.get('sipeed-lichee-zero'), profile = mountingFor(component.id);
  assert.equal(profile.contacts.length, 30);
  assert.equal(profile.view.pins.length, 84);
  assert.ok(profile.contacts.every(pin => /^u[38]-/.test(pin.pinId) && Number(pin.pinId.split('-').at(-1)) % 2 === 0));
  const pins = new Map(profile.contacts.map(pin => [pin.pinId, pin]));
  close(pins.get('u3-2').x - pins.get('u8-2').x, 22.86);
  close(pins.get('u8-30').y - pins.get('u8-2').y, 14 * 2.54);
  const all = new Map(profile.view.pins.map(pin => [pin.pinId, pin]));
  assert.ok(all.get('j3-1').x > all.get('j3-20').x);
  close(all.get('j3-1').y, 20);
  assert.ok(all.get('j2-1').x < all.get('j12-1').x);
  assert.ok(all.get('u8-1').x < all.get('u8-2').x);
  assert.ok(all.get('u3-1').x > all.get('u3-2').x);
  const art = profile.renderMounted(component);
  assert.match(art, /J3\.1 — LCD_D23/);
  assert.match(art, /lichee-zero-reviewed-pcb-copper/);
  assert.match(profile.bodyEvidence, /MicroSD placement confirms the component-side handedness/);
});
