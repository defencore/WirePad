import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { kicadFootprint, kicadModel, kicadSymbol } from '../src/assets/kicad.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-remaining-wireless-mounting-2026-11-08.json', import.meta.url)));
const entries = new Map(audit.entries.map(entry => [entry.id, entry]));
const digest = value => createHash('sha256').update(value).digest('hex');

const expectedFamilies = {
  'semtech-radios': 15, 'm5stack-units': 3, elrs: 3, 'flight-controllers': 3,
  'fpv-navigation': 1, 'nordic-ready': 2, hilink: 4, 'cellular-gnss': 7, 'nxp-more': 2,
};

test('the remaining wireless audit accounts for all forty assigned IDs and distinguishes unresolved assemblies', () => {
  assert.equal(audit.entries.length, 40);
  assert.equal(entries.size, 40);
  assert.equal(audit.summary.checked, 40);
  assert.equal(audit.summary.enabled, 0);
  assert.equal(audit.summary.pending, 5);
  assert.deepEqual(Object.fromEntries(Object.keys(expectedFamilies).map(family => [family,
    audit.entries.filter(entry => entry.family === family).length])), expectedFamilies);
  for (const entry of audit.entries) {
    assert.ok(componentById.has(entry.id), entry.id);
    assert.ok(entry.reason.length > 80, entry.id);
    assert.ok(entry.evidence.length > 0 && entry.evidence.every(source => source.label && /^https:\/\//.test(source.url)), entry.id);
    assert.equal(entry.facts.exposedContacts, componentById.get(entry.id).pins.length, entry.id);
    assert.equal(mountingFor(entry.id), undefined, entry.id);
    assert.equal(entry.canonicalGeometryPreserved, true);
    assert.equal(entry.nativeAccuracyChanged, false);
  }
});

test('all forty published definitions, default SVG variants and native exports retain their baseline bytes', () => {
  assert.equal(Object.keys(audit.canonicalPreservation).length, 40);
  for (const [id, expected] of Object.entries(audit.canonicalPreservation)) {
    const component = componentById.get(id);
    assert.equal(digest(JSON.stringify(component)), expected.definition, id);
    assert.deepEqual([true, false].map(labels => digest(componentArt(component, { labels }))), expected.art, id);
    assert.deepEqual([kicadSymbol, kicadFootprint, kicadModel].map(render => digest(render(component))), expected.native, id);
  }
});

test('actual 2.54 mm castellations and supplied header candidates are never mislabeled as wrong-pitch parts', () => {
  for (const id of ['e22-400m30s', 'e22-900m30s', 'e22-900m33s']) {
    const entry = entries.get(id);
    assert.equal(entry.facts.contactPitchMm, 2.54);
    assert.equal(entry.facts.segmentPitchIs254, true);
    assert.equal(entry.facts.wholeInstalledHeaderGridEstablished, false);
    assert.match(entry.reason, /7\.60 mm/);
    assert.equal(entry.status, 'requires-smd-carrier');
  }
  const dongle = entries.get('nordic-nrf52840-dongle');
  assert.equal(dongle.facts.edgeContactPitchMm, 2.54);
  assert.equal(dongle.facts.edgeRowSeparationMm, 15.24);
  assert.equal(dongle.status, 'pending-installed-post-assembly');
  const superd = entries.get('betafpv-superd-2-4ghz');
  assert.equal(superd.facts.suppliedFourPinHeader, true);
  assert.equal(superd.facts.contactPitchMm, null);
  assert.equal(superd.status, 'pending-complete-header-mechanics');
});

test('PPK2 source packages are surface-mount right-angle lists, independent of its off-board carrier', () => {
  const entry = entries.get('nordic-power-profiler-kit-ii');
  assert.deepEqual(entry.facts.productionFootprints, {
    P1: 'LIST_ANG_1x4-SMD-2.54MM', P2: 'LIST_ANG_1x10-SMD-2.54MM', P3: 'HDR_2x5-SMD-1.27mm-ANG',
  });
  assert.equal(entry.facts.throughHolePrimaryBanks, 0);
  assert.equal(entry.facts.primaryPitchMm, 2.54);
  assert.equal(entry.facts.debugPitchMm, 1.27);
  assert.equal(entry.status, 'right-angle-smd-headers');
  const source = audit.sourceArtifacts.find(source => source.id === 'nordic-ppk-cad');
  assert.match(source.sha256, /^[a-f0-9]{64}$/);
});

test('the complete ER4 connector cannot occupy any safe terminal-bank pose despite its genuine 2.54 mm pitch', () => {
  const entry = entries.get('radiomaster-er4');
  assert.equal(entry.facts.contactPitchMm, 2.54);
  assert.equal(entry.facts.connectorContacts, 12);
  // Exact mating-face order: CH2/CH1, two supply pairs, then CH4/CH3.
  // Check both rotations against wide terminal banks, including every trench offset.
  const rows = [['ch2', 'ch1'], ['v+', 'v+'], ['gnd', 'gnd'], ['gnd', 'gnd'], ['v+', 'v+'], ['ch4', 'ch3']];
  const contacts = rows.flatMap((nets, y) => nets.map((net, x) => ({ x, y, net })));
  let safe = 0;
  for (const quarterTurn of [false, true]) for (let offset = -8; offset <= 28; offset++) {
    const conductors = new Map();
    const fits = contacts.every(contact => {
      const x = (quarterTurn ? contact.y : contact.x) + offset;
      const y = quarterTurn ? contact.x : contact.y;
      if (x < 0 || x > 41 || x === 20 || x === 21) return false;
      const group = `${x < 20 ? 'left' : 'right'}:${y}`;
      if (conductors.has(group) && conductors.get(group) !== contact.net) return false;
      conductors.set(group, contact.net); return true;
    });
    if (fits) safe++;
  }
  assert.equal(safe, 0);
  assert.equal(entry.status, 'requires-adapter-as-fitted');
});

test('connector-maker pitch and revision mismatches remain explicit instead of silently substituting other hardware', () => {
  const gps = entries.get('matek-m10q-5883');
  assert.equal(gps.facts.connector, 'SM06B-GHS-TB');
  assert.equal(gps.facts.connectorPitchMm, 1.25);
  assert.equal(gps.facts.sourcePagePitchTypoMm, 1.27);
  assert.ok(gps.evidence.some(source => source.url === 'https://www.jst-mfg.com/product/pdf/eng/eGH.pdf'));
  const nxp = entries.get('nxp-frdm-kl25z-e');
  assert.match(nxp.reason, /Rev D/);
  assert.match(nxp.reason, /404/);
  assert.equal(nxp.facts.exactRevisionMechanicalMapReviewed, false);
  for (const id of ['simcom-sim7600g-h-m2', 'simcom-sim7600e-minipcie', 'quectel-ec25-e-minipcie']) {
    assert.equal(entries.get(id).status, 'card-edge-interface');
    assert.equal(entries.get(id).facts.downwardMalePosts, 0);
  }
});
