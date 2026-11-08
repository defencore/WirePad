import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import { components, componentById, footprintDefinitionFor, mountingFor } from '../src/catalog/index.js';
import { instancePins } from '../src/model/part-pins.js';
import { reviewedBoardMounting } from '../src/catalog/shared/reviewed-board-mounting.js';

const audit = JSON.parse(fs.readFileSync(new URL('../docs/catalog-popular-board-mounting-2026-11-08.json', import.meta.url)));
const close = (a, b, message) => assert.ok(Math.abs(a - b) < 1e-7, `${message}: ${a} != ${b}`);

test('popular-board audit explicitly covers every owned family entry and each eligibility decision', () => {
  assert.deepEqual(audit.summary, { checked: 121, enabled: 70, previouslyEnabled: 14, pending: 17, ineligibleAsFitted: 20 });
  const ids = audit.entries.map(entry => entry.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const entry of audit.entries) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    assert.ok(component, entry.id);
    assert.equal(entry.contactCount, component.pins.length, entry.id);
    assert.equal(entry.insertionContactCount, profile?.contacts.length ?? 0, entry.id);
    assert.ok(entry.evidence.length && entry.evidence.every(source => /^https:\/\//.test(source.url)), entry.id);
    assert.ok(entry.decision.length > 40, entry.id);
    assert.equal(entry.defaultGeometryPreserved, true, entry.id);
    assert.equal(entry.nativeAccuracyChanged, false, entry.id);
    if (!profile) assert.match(entry.status, /pending-source-review|ineligible-as-fitted/, entry.id);
  }
  assert.equal(audit.families.flatMap(family => family.ids).length, ids.length);
});

test('new assembly views calibrate every lead and retain all auxiliary front/rear contact IDs', () => {
  for (const entry of audit.entries.filter(entry => entry.status === 'enabled-reviewed')) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    if (!profile.view) continue;
    const view = new Map(profile.view.pins.map(pin => [pin.pinId, pin]));
    assert.deepEqual([...view.keys()].sort(), component.pins.map(pin => pin.id).sort(), entry.id);
    const { origin, unitsPerMm, toleranceMm = 0 } = profile.calibration;
    for (const contact of profile.contacts) for (const axis of ['x', 'y']) {
      const residual = Math.abs((view.get(contact.pinId)[axis] - origin[axis]) / unitsPerMm - contact[axis]);
      assert.ok(residual <= toleranceMm + 1e-9, `${entry.id}/${contact.pinId}/${axis}`);
    }
    const svg = profile.renderMounted(component);
    const effective = { ...component, pins: instancePins({ componentId: component.id, view: profile.view.id }, component) };
    const withoutTitles = value => value.replace(/<title>[^<]*<\/title>/g, '');
    assert.equal(withoutTitles(profile.renderMounted(effective)), withoutTitles(svg), `${entry.id} must not transform projected pins twice or draw rear pads as solid front metal`);
    assert.ok(svg.length > 100, entry.id);
    assert.doesNotMatch(svg, /NaN|undefined/, entry.id);
    for (const pin of profile.view.pins.filter(pin => pin.face === 'rear')) {
      assert.ok(svg.includes(`data-rear-contact="${pin.pinId}"`), `${entry.id}/${pin.pinId}`);
    }
  }
});

test('all nine XIAO boards use full straight-header posts independently of the old SMD lands and locking drills', () => {
  const boards = components.filter(component => /^(?:seeed-)?xiao-/.test(component.id));
  assert.equal(boards.length, 9);
  for (const component of boards) {
    const profile = mountingFor(component.id);
    assert.equal(profile.contacts.length, 14, component.id);
    assert.deepEqual([...new Set(profile.contacts.map(contact => contact.x))].sort((a,b)=>a-b), [-7.62, 7.62], component.id);
    const original = component.pins.find(pin => pin.number === '1');
    const mounted = profile.view.pins.find(pin => pin.pinId === original.id);
    assert.notEqual(original.x, mounted.x, component.id);
    const svg = profile.renderMounted(component);
    assert.equal((svg.match(/data-header-post=/g) ?? []).length, 14, component.id);
    assert.match(svg, /PCB through-hole; installed post center is shown as a square/);
    const carrier = footprintDefinitionFor(component);
    assert.ok(carrier.groups[0].x < -8, component.id);
  }
});

test('Feather RP2350 keeps the manufacturer drill offset and explicitly shows the nominal straight-header assembly', () => {
  const component = componentById.get('adafruit-feather-rp2350-6000'), profile = mountingFor(component.id);
  const pin = component.pins.find(pin => pin.number === 'JP3.1');
  const mounted = profile.view.pins.find(point => point.pinId === pin.id);
  close(pin.y, 20 + 1.2065 * profile.calibration.unitsPerMm, 'published source drill anchor');
  close(mounted.y, 20 + 1.27 * profile.calibration.unitsPerMm, 'installed nominal post');
  assert.notEqual(pin.y, mounted.y);
  assert.equal(profile.contacts.length, 28);
  assert.match(profile.note, /aligning the unsoldered headers/);
  assert.equal((profile.renderMounted(component).match(/data-header-post=/g) ?? []).length, 28);
});

test('reviewed view normalization checks all leads instead of only the two endpoints', () => {
  const specification = {
    source: { label: 'Reviewed manufacturer header assembly', url: 'https://example.com/assembly' },
    contacts: [{pinId:'a',x:0,y:0},{pinId:'b',x:2.54,y:0},{pinId:'c',x:0,y:2.54},{pinId:'d',x:2.54,y:2.54}],
    bodyRegions: [{x:5,y:5,width:40,height:70}], bodyEvidence: 'Reviewed same-side PCB material.',
    viewBounds: {x:5,y:5,width:40,height:70},
    view: {id:'breadboard',note:'Explicit complete assembly view.',pins:[{pinId:'a',x:10,y:10},{pinId:'b',x:35.4,y:10},{pinId:'c',x:10,y:60.8},{pinId:'d',x:35.4,y:60.8}]},
    renderMounted: () => '<rect x="5" y="5" width="40" height="70"/>',
  };
  const result = reviewedBoardMounting(specification);
  assert.equal(result.calibration.unitsPerMm, 10);
  close(result.view.pins[3].x - result.view.pins[0].x, 25.4, 'normalized X pitch');
  close(result.view.pins[3].y - result.view.pins[0].y, 25.4, 'normalized Y pitch');
  assert.throws(() => reviewedBoardMounting({ ...specification, view: { ...specification.view,
    pins: specification.view.pins.map(pin => pin.pinId === 'c' ? { ...pin, x: pin.x + 1 } : pin) } }), /Every reviewed header lead/);
});
