import assert from 'node:assert/strict';
import { test } from 'node:test';
import { components, componentById, createLibraryIndex, filterLibrary, isMountable, mountingFor } from '../src/catalog/index.js';
import { defineFamily } from '../src/catalog/registry.js';
import { bendableBreadboardPart } from '../src/catalog/shared/breadboard-parts.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';

const component = id => componentById.get(id);
const entries = () => components.filter(part => mountingFor(part.id)?.type === 'breadboard-part');

test('regular breadboard parts cover explicitly reviewed DIP packages and formed THT leads', () => {
  assert.equal(entries().filter(part => mountingFor(part.id).mode === 'rigid').length, 177);
  assert.equal(entries().filter(part => mountingFor(part.id).mode === 'bendable').length, 41);
  for (const id of ['resistor', 'diode', 'led', 'capacitor', 'electrolytic', 'market-2n3904ta', 'market-1n4007',
    'pin-header-4', 'ti-ne555p', 'ti-lm358p', 'sn74hc00n', 'cd4001be', 'omron-b3f-1000']) assert.equal(isMountable(id), true, id);
  for (const id of ['button', 'npn', 'nmos', 'jst-ph-2', 'battery', 'market-1n4148w-7-f', 'market-bav99-7-f']) assert.equal(isMountable(id), false, id);
  for (const part of entries()) {
    const profile = mountingFor(part.id);
    assert.match(profile.source.url, /^https:\/\//);
    assert.ok(profile.source.label && profile.note);
    assert.deepEqual(new Set(profile.contacts.map(lead => lead.pinId)), new Set(part.pins.map(pin => pin.id)), part.id);
    assert.equal(Object.hasOwn(part, 'mounting'), false, 'Capabilities must not alter published component definitions');
  }
});

test('rigid DIP insertion retains source physical numbering and calibrated body bounds', () => {
  for (const part of entries().filter(part => mountingFor(part.id).mode === 'rigid')) {
    const profile = mountingFor(part.id), pads = footprintLayout(part).pads;
    for (const lead of profile.contacts) {
      const pad = pads.find(pad => pad.id === lead.pinId);
      assert.ok(pad && !pad.smd, `${part.id}/${lead.pinId}`);
      assert.ok(Math.abs(lead.x - pad.x) < 1e-7, `${part.id}/${lead.pinId} physical X`);
      assert.ok(Math.abs(lead.y - pad.y) < 1e-7, `${part.id}/${lead.pinId} physical Y`);
    }
    assert.ok(profile.body.width > 0 && profile.body.height > 0);
  }
});

test('formed body scale is independent of chosen lead-tip positions and preserves polarity', () => {
  for (const id of ['resistor', 'led', 'diode', 'electrolytic', 'market-2n3904ta', 'omron-b3f-1000']) {
    const part = component(id), profile = mountingFor(id);
    const first = profile.contacts.map(lead => ({ pinId: lead.pinId, x: profile.origin.x + lead.x * profile.unitsPerMm,
      y: profile.origin.y + lead.y * profile.unitsPerMm }));
    const second = first.map((lead, index) => ({ ...lead, x: lead.x + (index % 2 ? 4 : -4), y: lead.y + 4 }));
    const a = profile.render(part, first, true), b = profile.render(part, second, true);
    for (const lead of first) assert.ok(a.includes(`data-contact="${lead.pinId}"`));
    assert.notEqual(a, b, 'Changing a tip must redraw metal leads');
    const bodyStartA = a.lastIndexOf('</g>') + 4, bodyStartB = b.lastIndexOf('</g>') + 4;
    assert.equal(a.slice(bodyStartA), b.slice(bodyStartB), `${id} body must not stretch with its legs`);
  }
  assert.equal(mountingFor('led').contacts[0].pinId, 'k');
  assert.equal(mountingFor('diode').contacts[0].pinId, 'k');
  assert.equal(mountingFor('electrolytic').contacts[0].pinId, 'positive');
  assert.deepEqual(component('market-2n3904ta').pins.map(pin => pin.label), ['E', 'B', 'C']);
});

test('all formed views have finite self-contained metal/body output in either label mode', () => {
  for (const part of entries().filter(part => mountingFor(part.id).mode === 'bendable')) {
    const profile = mountingFor(part.id);
    assert.ok(Object.isFrozen(profile.body) && Object.isFrozen(profile.roots) && Object.isFrozen(profile.contacts));
    assert.ok(profile.leadRadius >= 2.2);
    const leads = profile.contacts.map(lead => ({ pinId: lead.pinId, x: profile.origin.x + lead.x * profile.unitsPerMm,
      y: profile.origin.y + lead.y * profile.unitsPerMm }));
    for (const labels of [true, false]) {
      const svg = profile.render(part, leads, labels);
      assert.doesNotMatch(svg, /(?:NaN|undefined|Infinity|<script|<image|href=)/, part.id);
      assert.equal((svg.match(/data-contact=/g) ?? []).length, part.pins.length, part.id);
    }
  }
});

test('breadboard-compatible filtering exposes reviewed guests without admitting the host or SMD parts', () => {
  const index = createLibraryIndex(components), filtered = filterLibrary(index, { mountable: true });
  assert.equal(filtered.length, 1243);
  assert.equal(filtered.some(entry => entry.component.id === 'breadboard'), false);
  assert.equal(filterLibrary(index, { mountable: true, query: 'resistor' }).some(entry => entry.component.id === 'resistor'), true);
  assert.equal(filterLibrary(index, { mountable: true, query: '1N4148W-7-F' }).length, 0);
  assert.ok(filterLibrary(index, { mountable: true, manufacturer: 'Texas Instruments' }).length > 80);
});

test('Omron switch exposes all four physical terminals with manufacturer top-view common pairs', () => {
  const part = component('omron-b3f-1000'), profile = mountingFor(part.id);
  assert.deepEqual(part.pins.map(({ id, number, x, y }) => ({ id, number, x, y })), [
    { id: 'p4', number: '4', x: 24, y: 32 }, { id: 'p3', number: '3', x: 128, y: 32 },
    { id: 'p2', number: '2', x: 24, y: 104 }, { id: 'p1', number: '1', x: 128, y: 104 },
  ]);
  assert.deepEqual(part.internalConnections, [['p4', 'p3'], ['p2', 'p1']]);
  assert.equal(profile.maxLeadMm, 2);
  const pads = footprintLayout(part).pads;
  assert.deepEqual(pads.map(({ number, x, y }) => ({ number, x, y })), [
    { number: '4', x: -3.25, y: -2.25 }, { number: '3', x: 3.25, y: -2.25 },
    { number: '2', x: -3.25, y: 2.25 }, { number: '1', x: 3.25, y: 2.25 },
  ]);
});

test('catalog rejects unsupported formed geometry rather than silently making a decorative fit', () => {
  const part = component('resistor'), base = mountingFor(part.id);
  const entry = mounting => ({ component: part, render: () => '', footprint: { body: [6.5, 2.5] }, mounting });
  for (const changes of [{ unitsPerMm: 0 }, { maxLeadMm: Infinity }, { leadRadius: -1 }, { roots: [] },
    { roots: [{ ...base.roots[0], x: -100 }, base.roots[1]] }, { render: null }, { contacts: base.contacts.slice(0, 1) }]) {
    assert.throws(() => defineFamily('invalid-formed', [entry({ ...base, ...changes })]));
  }
  const representative = bendableBreadboardPart(part, { kind: 'resistor', dimensions: [6.5, 2.5],
    tips: [[-5.08, 0], [5.08, 0]], exits: [[-3.25, 0], [3.25, 0]], source: base.source, note: base.note });
  assert.equal(representative.unitsPerMm, 8);
});
