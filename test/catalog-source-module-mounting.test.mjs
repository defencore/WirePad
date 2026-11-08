import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sourceModule } from '../src/catalog/shared/modules-source-board.js';
import { defineFamily } from '../src/catalog/registry.js';
import { components, mountingFor } from '../src/catalog/index.js';

const contact = (id, x) => ({ id, number: `J1.${id}`, label: id.toUpperCase(), type: 'passive',
  description: 'Reviewed source header contact.', x, y: 3, connector: 'J1', size: [1.7, 1.7], drill: 1 });
const specification = () => ({
  id: 'source-header-test', sku: 'SOURCE-1', manufacturer: 'Test maker', name: 'Source header test',
  source: 'https://example.com/source', description: 'Source-coordinate fixture.', board: { width: 16, height: 12 },
  scale: 8, contacts: [contact('a', -2.54), contact('b', 0), contact('c', 2.54)],
  artwork: '<rect x="-4" y="-2" width="8" height="4" fill="#223344"/>',
  backArtwork: '<rect id="back-only" x="-2" y="-1" width="4" height="2"/>',
  footprintMode: 'reference', footprintNote: 'Reference copper does not establish insertion compatibility.',
});
const review = () => ({
  contactIds: ['a', 'b', 'c'], source: { label: 'Reviewed manufacturer header drawing', url: 'https://example.com/header.pdf' },
  installation: 'Install straight 2.54 mm male headers with insertion leads below the PCB.',
  evidence: { geometry: 'Manufacturer J1 is a 3-contact straight 2.54 mm through-hole header.' },
  bodyRegions: [{ x: -8, y: -6, width: 16, height: 12 }], bodyEvidence: 'Canonical PCB and physical hardware primitives.',
});
const build = spec => defineFamily('source-header-test', [sourceModule(spec)]).entries[0];

test('reviewed source headers expose scale and front-only art without changing canonical or native definitions', () => {
  const spec = specification(), original = build(spec), reviewed = build({ ...spec, mountingReview: review() });
  assert.deepEqual(reviewed.component, original.component);
  assert.deepEqual(reviewed.footprint, original.footprint);
  for (const labels of [true, false]) assert.equal(reviewed.render(reviewed.component, labels), original.render(original.component, labels));
  assert.equal(original.mounting, undefined, 'Reference carrier geometry alone never opts a module in.');
  const profile = reviewed.mounting;
  assert.equal(profile.calibration.unitsPerMm, 8);
  assert.ok(Object.isFrozen(profile.calibration) && Object.isFrozen(profile.calibration.origin) && Object.isFrozen(profile.viewBounds));
  assert.equal(profile.contacts.length, 3);
  for (const physical of profile.contacts) {
    const pin = reviewed.component.pins.find(pin => pin.id === physical.pinId);
    assert.equal(pin.x, profile.calibration.origin.x + physical.x * 8);
    assert.equal(pin.y, profile.calibration.origin.y + physical.y * 8);
  }
  assert.match(reviewed.render(reviewed.component), /back-only/);
  const mounted = profile.renderMounted(reviewed.component, false);
  assert.doesNotMatch(mounted, /back-only|UNDERSIDE|CONTACT VIEW|SOURCE-1/);
  assert.equal((mounted.match(/data-contact=/g) ?? []).length, 3);
  assert.ok(profile.viewBounds.height < reviewed.component.height / 2, 'The mirrored illustration does not reserve a second board.');
  assert.equal(profile.body.width, 16 * 8);
});

test('only explicit source precision can nominalize a quantized header map', () => {
  const spec = specification(); spec.contacts[2].x = 2.539;
  assert.throws(() => build({ ...spec, mountingReview: review() }), /outside the reviewed nominal pitch/);
  const reviewed = build({ ...spec, mountingReview: { ...review(), toleranceMm: .001 } });
  assert.equal(reviewed.mounting.contacts[2].x, 2.54);
  assert.equal(reviewed.component.pins[2].x, reviewed.mounting.calibration.origin.x + 2.539 * 8);
  assert.equal(reviewed.mounting.calibration.toleranceMm, .001);
  for (const toleranceMm of [-.001, .0011, Infinity]) assert.throws(() => build({ ...spec, mountingReview: { ...review(), toleranceMm } }), /source precision/);
});

test('source mounting review rejects rear contacts, surface contacts and missing physical evidence', () => {
  const spec = specification();
  assert.throws(() => build({ ...spec, contacts: [...spec.contacts, { ...contact('rear', 1), back: true }], mountingReview: review() }), /rear contacts/);
  assert.throws(() => build({ ...spec, contacts: spec.contacts.map(c => ({ ...c, smd: true })), mountingReview: review() }), /through-hole/);
  assert.throws(() => build({ ...spec, mountingReview: { ...review(), contactIds: ['a', 'a'] } }), /every reviewed insertion lead once/);
  assert.throws(() => build({ ...spec, mountingReview: { ...review(), contactIds: ['a', 'missing'] } }), /through-hole/);
  assert.throws(() => build({ ...spec, mountingReview: { ...review(), bodyRegions: [] } }), /material regions/);
  assert.throws(() => build({ ...spec, mountingReview: { ...review(), evidence: {} } }), /geometry evidence/);
});

test('registry rejects fabricated source scales, view bounds and precision', () => {
  const entry = sourceModule({ ...specification(), mountingReview: review() });
  const accept = mounting => defineFamily('source-header-test', [{ ...entry, mounting }]);
  assert.throws(() => accept({ ...entry.mounting, calibration: { origin: { x: 0, y: 0 }, unitsPerMm: 8 } }), /source calibration precision/);
  assert.throws(() => accept({ ...entry.mounting, calibration: { ...entry.mounting.calibration, toleranceMm: .1 } }), /source precision/);
  assert.throws(() => accept({ ...entry.mounting, viewBounds: { x: 0, y: 0, width: 0, height: 4 } }), /view has invalid bounds/);
  assert.throws(() => accept({ ...entry.mounting, renderMounted: true }), /renderer must be a function/);
});

test('the source-module review enables 789 precise header maps with explicit source scale and physical views', () => {
  const reviewed = components.filter(component => component.tags?.includes('modules expansion') && mountingFor(component.id)?.type === 'breadboard-module');
  assert.equal(reviewed.length, 789);
  const counts = {}, quantized = [];
  for (const component of reviewed) {
    const profile = mountingFor(component.id);
    counts[component.manufacturer] = (counts[component.manufacturer] ?? 0) + 1;
    assert.equal(typeof profile.renderMounted, 'function', component.id);
    assert.ok(profile.viewBounds.width > 0 && profile.viewBounds.height > 0, component.id);
    assert.ok(profile.calibration.unitsPerMm > 0, component.id);
    assert.ok(Object.isFrozen(profile.bodyRegions) && profile.bodyRegions.every(Object.isFrozen), component.id);
    for (const region of profile.bodyRegions) assert.ok(['x', 'y', 'width', 'height'].every(key => Number.isFinite(region[key])) && region.width > 0 && region.height > 0, component.id);
    assert.match(profile.note, /straight 2.54 mm male headers/, component.id);
    assert.ok(profile.contacts.every(contact => component.pins.some(pin => pin.id === contact.pinId)), component.id);
    if (profile.calibration.toleranceMm) {
      quantized.push(component.id);
      assert.equal(component.manufacturer, 'MIKROE');
      assert.equal(profile.calibration.toleranceMm, .001);
    }
    for (const labels of [false, true]) assert.doesNotMatch(profile.renderMounted(component, labels), /UNDERSIDE BELOW|SEPARATE MIRRORED|(?:NaN|undefined|Infinity)/, component.id);
  }
  assert.equal(quantized.length, 145);
  assert.deepEqual(counts, { Adafruit: 245, SparkFun: 95, DFRobot: 34, MIKROE: 400, 'Seeed Studio': 15 });
  for (const id of ['adafruit-module-5786', 'adafruit-module-2471', 'sparkfun-module-wrl11373', 'seeed-module-104020130', 'dfrobot-gravity-rgb-button-dfr0991']) assert.equal(mountingFor(id), undefined, id);
});
