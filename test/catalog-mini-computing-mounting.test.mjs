import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { instancePins } from '../src/model/part-pins.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-mini-computing-mounting-2026-11-08.json', import.meta.url), 'utf8'));
const supported = audit.entries.filter(entry => entry.decision === 'supported');
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-7, `${a} != ${b}`);

test('mini-computing audit checks every family entry and registers only complete reviewed source views', () => {
  assert.equal(audit.entries.length, 85);
  assert.equal(new Set(audit.entries.map(entry => entry.id)).size, 85);
  assert.equal(supported.length, 17);
  for (const entry of audit.entries) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    assert.ok(component, entry.id);
    assert.ok(entry.source && entry.reason, entry.id);
    assert.equal(Boolean(profile), entry.decision === 'supported', entry.id);
    if (!profile) continue;
    assert.deepEqual(profile.contacts.map(contact => contact.pinId), entry.selectedContactIds);
    assert.equal(profile.view.pins.length, component.pins.length, entry.id);
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId), component.pins.map(pin => pin.id), entry.id);
    const raw = { id: 'part', componentId: entry.id, x: 0, y: 0 };
    assert.equal(instancePins(raw, component), component.pins, entry.id);
    assert.equal(instancePins({ ...raw, scale: { x: .7, y: .7 } }, component), component.pins, entry.id);
    const projected = instancePins({ ...raw, view: 'breadboard' }, component);
    assert.equal(profile.renderMounted(component, false), profile.renderMounted({ ...component, pins: projected }, false), entry.id);
    assert.notEqual(profile.renderMounted(component, true), profile.renderMounted(component, false), entry.id);
    const byId = new Map(projected.map(pin => [pin.id, pin]));
    const first = profile.contacts[0];
    for (const contact of profile.contacts) {
      const pin = byId.get(contact.pinId);
      for (const axis of ['x', 'y']) {
        close((contact[axis] - first[axis]) / 2.54, Math.round((contact[axis] - first[axis]) / 2.54));
        close(pin[axis], 20 + contact[axis] * 10);
      }
      assert.equal(pin.face, 'front');
    }
    assert.match(profile.renderMounted(component), /<title>/, entry.id);
  }
});

test('manufacturer header pitch corrects Mini and Tang4K instance geometry while preserving old definitions', () => {
  const mini = mountingFor('luckfox-pico-mini-a'), miniPins = new Map(mini.contacts.map(pin => [pin.pinId, pin]));
  close(Math.abs(miniPins.get('1').x - miniPins.get('22').x), 17.78);
  const canonical = componentById.get('luckfox-pico-mini-a');
  close(Math.abs(canonical.pins.find(pin => pin.id === '1').x - canonical.pins.find(pin => pin.id === '22').x), 18 * 8);
  const tang = mountingFor('sipeed-tang-nano-4k'), pins = new Map(tang.contacts.map(pin => [pin.pinId, pin]));
  close(pins.get('p7-22').x - pins.get('p6-22').x, 20.32);
  close(pins.get('p6-1').y - pins.get('p6-22').y, 21 * 2.54);
  close(tang.bodyRegions[0].height / 10, 60);
  assert.equal(tang.contacts.length, 44);
});

test('M0sense uses the inner drilled row and M1s Dock retains all rear socket terminals', () => {
  const m0 = mountingFor('sipeed-maix-m0sense-30215'), pins = new Map(m0.contacts.map(pin => [pin.pinId, pin]));
  close(pins.get('j2-1').x - pins.get('j3-1').x, 15.24);
  assert.equal(m0.contacts.length, 16);
  const dock = mountingFor('sipeed-maix-m1s-dock-3272');
  assert.equal(dock.contacts.length, 32);
  assert.equal(dock.view.pins.length, 36);
  assert.deepEqual(dock.view.pins.filter(pin => pin.face === 'rear').map(pin => pin.pinId), ['p7-4', 'p7-3', 'p7-2', 'p7-1']);
  assert.deepEqual(dock.view.connections, [['p7-4', 'p5-13'], ['p7-3', 'p5-12'], ['p7-2', 'p6-1'], ['p7-1', 'p6-16']]);
  assert.match(dock.view.connectionSource.url, /M1s_Dock_3272_Schematic_V1\.pdf$/);
  assert.equal((dock.renderMounted(componentById.get('sipeed-maix-m1s-dock-3272')).match(/data-rear-contact=/g) ?? []).length, 4);
});
