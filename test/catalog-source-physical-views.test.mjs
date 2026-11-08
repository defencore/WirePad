import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, components, mountingFor } from '../src/catalog/index.js';
import { instancePinPoint, instancePins } from '../src/model/part-pins.js';
import { sameContactNet } from '../src/model/mounting.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-source-module-mounting-2026-11-08.json', import.meta.url), 'utf8'));
const sourceModules = components.filter(component => component.tags?.includes('modules expansion') && mountingFor(component.id));
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

test('rear source views retain every endpoint and require explicit activation instead of changing older scaled projects', () => {
  const physical = sourceModules.filter(component => mountingFor(component.id).view);
  assert.equal(physical.length, 180);
  for (const component of physical) {
    const profile = mountingFor(component.id), raw = { id: 'module', componentId: component.id, x: 0, y: 0 };
    const scaled = { ...raw, scale: { x: .8, y: .8 } }, active = { ...scaled, view: 'breadboard' };
    assert.equal(instancePins(raw, component), component.pins, component.id);
    assert.equal(instancePins(scaled, component), component.pins, component.id);
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId), component.pins.map(pin => pin.id), component.id);
    const effective = instancePins(active, component), byId = new Map(effective.map(pin => [pin.id, pin]));
    assert.ok(profile.view.pins.some(pin => {
      const previous = component.pins.find(other => other.id === pin.pinId);
      return Math.abs(pin.x - previous.x) > 1 || Math.abs(pin.y - previous.y) > 1;
    }), `${component.id} needs a real view migration`);
    for (const pin of profile.view.pins) {
      const canonical = component.pins.find(other => other.id === pin.pinId);
      assert.deepEqual(instancePinPoint(scaled, canonical), { x: canonical.x, y: canonical.y }, component.id);
      assert.deepEqual(instancePinPoint(active, canonical), { x: pin.x, y: pin.y }, component.id);
      assert.equal(byId.get(pin.pinId).face, pin.face);
      assert.doesNotMatch(byId.get(pin.pinId).description, /Underside contact, shown in the separate mirrored view/);
    }
    for (const contact of profile.contacts) {
      const pin = byId.get(contact.pinId), tolerance = (profile.calibration.toleranceMm ?? 0) * profile.calibration.unitsPerMm + 1e-7;
      assert.equal(pin.face, 'front', `${component.id}/${pin.id}`);
      close(pin.x, profile.calibration.origin.x + contact.x * profile.calibration.unitsPerMm, tolerance);
      close(pin.y, profile.calibration.origin.y + contact.y * profile.calibration.unitsPerMm, tolerance);
    }
    const mounted = profile.renderMounted(component, false);
    assert.doesNotMatch(mounted, /UNDERSIDE BELOW|SEPARATE MIRRORED/);
    assert.equal((mounted.match(/data-rear-contact=/g) ?? []).length, profile.view.pins.filter(pin => pin.face === 'rear').length, component.id);
    assert.match(componentArt(component), /UNDERSIDE BELOW · MIRRORED/, component.id);
  }
});

test('optional duplicate headers and outer castellations keep the existing canonical electrical connections', () => {
  let aliases = 0, duplicates = 0, subsetInstallations = 0;
  for (const entry of audit.entries.filter(entry => entry.status === 'supported')) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id), evidence = entry.headerGeometryEvidence;
    for (const pair of evidence.castellationAliases ?? []) {
      aliases++;
      assert.ok(profile.contacts.some(contact => contact.pinId === pair.equivalentPinId));
      assert.ok(!profile.contacts.some(contact => contact.pinId === pair.pinId));
      assert.equal(sameContactNet(component, pair.pinId, pair.equivalentPinId), true, `${entry.id}/${pair.pinId}`);
    }
    if (evidence.duplicateHeaderContacts?.length) subsetInstallations++;
    for (const pair of evidence.duplicateHeaderContacts ?? []) {
      duplicates++;
      assert.ok(profile.contacts.some(contact => contact.pinId === pair.equivalentPinId));
      assert.ok(!profile.contacts.some(contact => contact.pinId === pair.pinId));
      assert.equal(sameContactNet(component, pair.pinId, pair.equivalentPinId), true, `${entry.id}/${pair.pinId}`);
    }
    assert.equal(evidence.connectors.reduce((sum, connector) => sum + connector.count, 0), profile.contacts.length, entry.id);
  }
  assert.equal(aliases, 222); assert.equal(duplicates, 86); assert.equal(subsetInstallations, 17);
});

test('every mikroBUS module has its whole physical 16-lead installation, including headers published on the rear illustration', () => {
  const modules = sourceModules.filter(component => component.manufacturer === 'MIKROE');
  assert.equal(modules.length, 400);
  let sourceRearHeaders = 0;
  for (const component of modules) {
    const profile = mountingFor(component.id), ids = profile.contacts.map(contact => contact.pinId);
    assert.deepEqual(ids, Array.from({ length: 16 }, (_, index) => `p${index + 1}`), component.id);
    const xs = [...new Set(profile.contacts.map(contact => contact.x))].sort((a, b) => a - b);
    assert.equal(xs.length, 2); close(xs[1] - xs[0], 22.86);
    for (const x of xs) {
      const row = profile.contacts.filter(contact => contact.x === x).sort((a, b) => a.y - b.y);
      for (let index = 1; index < row.length; index++) close(row[index].y - row[index - 1].y, 2.54);
    }
    const evidence = audit.entries.find(entry => entry.id === component.id);
    if (evidence.physicalView?.reprojectedThroughHoleContacts) {
      sourceRearHeaders++;
      const rendered = profile.renderMounted(component, false);
      for (const pinId of ids) assert.ok(rendered.includes(`data-contact="${pinId}"`), `${component.id}/${pinId}`);
    }
  }
  assert.equal(sourceRearHeaders, 8);
});

test('projecting rear hardware has an explicit visible BACK outline matching the reviewed physical body region', () => {
  const entries = audit.entries.filter(entry => entry.rearOverhangRegionsMm?.length);
  assert.equal(entries.length, 13);
  for (const entry of entries) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id), art = profile.renderMounted(component, false);
    assert.match(art, /class="rear-hardware-overlay" pointer-events="none"/);
    assert.match(art, /BACK HARDWARE/);
    assert.match(art, />BACK<\/text>/);
    for (const region of entry.rearOverhangRegionsMm) {
      const { unitsPerMm, origin } = profile.calibration;
      const projected = { x: origin.x + region.x * unitsPerMm, y: origin.y + region.y * unitsPerMm,
        width: region.width * unitsPerMm, height: region.height * unitsPerMm };
      assert.ok(profile.bodyRegions.some(body => body.x <= projected.x + 1e-6 && body.y <= projected.y + 1e-6 &&
        body.x + body.width >= projected.x + projected.width - 1e-6 &&
        body.y + body.height >= projected.y + projected.height - 1e-6), entry.id);
    }
  }
});
