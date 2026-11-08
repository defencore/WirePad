import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, modelFor, mountingFor } from '../src/catalog/index.js';
import { kicadSymbol, kicadFootprint, kicadModel } from '../src/assets/kicad.js';
import { componentForPart } from '../src/model/part-component.js';
import { sameContactNet } from '../src/model/mounting.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-remaining-computing-mounting-2026-11-08.json', import.meta.url)));
const digest = value => createHash('sha256').update(value).digest('hex');
const entries = new Map(audit.entries.map(entry => [entry.id, entry]));

test('the remaining computing audit accounts for all 66 named boards and distinguishes missing assembly evidence', () => {
  assert.equal(audit.entries.length, 66);
  assert.equal(entries.size, 66);
  assert.equal(audit.summary.checked, 66);
  assert.equal(audit.summary.enabled, 0);
  assert.deepEqual(audit.summary.statuses, {
    'requires-adapter': 60, 'cable-connector': 3, 'pending-source-identity': 1,
    'pending-downward-auxiliary-assembly': 2,
  });
  assert.equal(Object.keys(audit.summary.families).length, 12);
  assert.equal(Object.values(audit.summary.families).reduce((sum, count) => sum + count, 0), 66);
  for (const entry of audit.entries) {
    const component = componentById.get(entry.id);
    assert.ok(component, entry.id);
    assert.equal(component.pins.length, entry.canonicalContactCount, entry.id);
    assert.equal(mountingFor(entry.id), undefined, entry.id);
    assert.ok(entry.reason.length > 80 && entry.reviewScope.length > 40, entry.id);
    assert.ok(entry.evidence.length > 0 && entry.evidence.every(source => /^https:\/\//.test(source.url)), entry.id);
    assert.ok(entry.evidence.some(source => /^[a-f0-9]{64}$/.test(source.sha256)), entry.id);
    assert.equal(entry.nativeAccuracyChanged, false);
    assert.equal(entry.canonicalGeometryChanged, false);
    assert.ok(entry.interfaces.length > 0, entry.id);
    assert.equal(entry.interfaces.reduce((sum, bank) => sum + bank.contacts, 0), component.pins.length, entry.id);
  }
  const fpga = audit.entries.filter(entry => entry.exactManualIdentity);
  assert.equal(fpga.length, 32);
  assert.equal(fpga.filter(entry => entry.exactManualIdentity.matched).length, 31);
});

test('all 66 pin sets, 132 default SVGs and 198 native outputs retain their published bytes', () => {
  let changedDefinitions = 0;
  for (const entry of audit.entries) {
    const component = componentById.get(entry.id), expected = audit.canonicalPreservation[entry.id];
    assert.equal(digest(JSON.stringify(component)), expected.reviewedDefinition, entry.id);
    assert.equal(digest(JSON.stringify(component.pins)), expected.publishedPins, entry.id);
    assert.deepEqual([false, true].map(labels => digest(componentArt(component, { labels }))), expected.defaultSvg, entry.id);
    assert.deepEqual([kicadSymbol, kicadFootprint, kicadModel].map(render => digest(render(component))), expected.native, entry.id);
    if (expected.baselineDefinition !== expected.reviewedDefinition) {
      changedDefinitions++;
      assert.equal(entry.id, 'banana-pi-bpi-r3');
      assert.deepEqual(entry.metadataCorrection.fields, ['component.documentation[2]', 'entry.model.url']);
    }
  }
  assert.equal(changedDefinitions, 1);
});

test('the corrected Banana Pi R3 reference is the exact manufacturer-linked file ID', () => {
  const entry = entries.get('banana-pi-bpi-r3'), component = componentById.get(entry.id);
  const { previous, corrected } = entry.metadataCorrection;
  assert.match(previous, /1BE09wS1ca 5x/);
  assert.doesNotMatch(corrected, /\s/);
  assert.equal(component.documentation[2], corrected);
  assert.equal(modelFor(component).url, corrected);
  assert.ok(entry.evidence.some(source => source.url === corrected && source.sha256));
  assert.ok(entry.evidence.some(source => source.url === component.source && source.sha256));
});

function completeHeaderCanFit(component, breadboard) {
  const host = componentForPart({ id: 'bb', componentId: 'breadboard', x: 0, y: 0, breadboard });
  const profile = mountingFor('breadboard');
  const holes = [...profile.contacts(host), ...profile.railContacts(host)];
  const key = point => `${point.x},${point.y}`;
  const index = new Map(holes.map(hole => [key(hole), hole]));
  const pins = component.pins.toSorted((a, b) => Number(a.number) - Number(b.number));
  const byId = new Map(pins.map(pin => [pin.id, pin]));
  // The manufacturer's repeated power and ground terminals are the same net,
  // even where an old logical component does not model those aliases.
  const sourceSameNet = (first, second) => sameContactNet(component, first, second) ||
    /^(GND|3V3|5V)$/.test(byId.get(first).label) && byId.get(first).label === byId.get(second).label;
  const points = pins.map((pin, i) => ({ pinId: pin.id, x: Math.floor(i / 2) * 16, y: i % 2 * 16 }));
  for (const rotation of [0, 90, 180, 270]) for (const anchor of holes) {
    const conductors = new Map();
    if (points.every(point => {
      const transformed = rotation === 0 ? point : rotation === 90 ? { x: -point.y, y: point.x }
        : rotation === 180 ? { x: -point.x, y: -point.y } : { x: point.y, y: -point.x };
      const hole = index.get(key({ x: anchor.x + transformed.x, y: anchor.y + transformed.y }));
      if (!hole) return false;
      if (conductors.has(hole.group) && !sourceSameNet(conductors.get(hole.group), point.pinId)) return false;
      conductors.set(hole.group, point.pinId);
      return true;
    })) return true;
  }
  return false;
}

test('complete 2x20 Pi headers cannot be made electrically safe by scaling or adding more breadboard cells', () => {
  const models = audit.entries.filter(entry => entry.family === 'raspberry-pi');
  for (const entry of models) {
    const component = componentById.get(entry.id);
    assert.equal(component.pins.length, 40);
    assert.equal(completeHeaderCanFit(component, { rows: 40, leftCells: 5, rightCells: 5 }), false, entry.id);
    assert.equal(completeHeaderCanFit(component, { rows: 40, leftCells: 20, rightCells: 20 }), false, entry.id);
  }
});

test('programmer cable ports and plausible NanoPi auxiliary strips retain distinct eligibility decisions', () => {
  for (const id of ['gowin-pl-usb-cable-v5-1', 'gowin-op720-4', 'gowin-b-op901-16']) {
    assert.equal(entries.get(id).status, 'cable-connector');
    assert.match(entries.get(id).reason, /enclosure|receptacle/);
  }
  for (const id of ['friendlyelec-nanopi-r5s', 'friendlyelec-nanopi-r6s']) {
    const entry = entries.get(id);
    assert.equal(entry.status, 'pending-downward-auxiliary-assembly');
    assert.equal(entry.interfaces.find(bank => bank.reference === 'J9510').manufacturerPitchMm, 2.54);
    assert.equal(entry.interfaces.find(bank => bank.reference === 'CON9').manufacturerPitchMm, .5);
    assert.match(entry.reason, /legitimate candidate/);
  }
  for (const id of ['friendlyelec-nanopi-neo', 'friendlyelec-nanopi-neo2']) {
    assert.match(entries.get(id).auxiliaryReview.reason, /four-contact.*2\.54 mm/);
    assert.match(entries.get(id).auxiliaryReview.reason, /2 mm/);
  }
  const mismatch = entries.get('gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0');
  assert.equal(mismatch.status, 'pending-source-identity');
  assert.equal(mismatch.exactManualIdentity.matched, false);
  assert.match(mismatch.reason, /PC8I7.*PC7I6/);
});
