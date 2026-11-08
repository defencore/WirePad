import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { components, componentById, componentArt, mountingFor } from '../src/catalog/index.js';
import { partArt } from '../src/canvas/part-art.js';
import sensorReferences from '../src/catalog/data/popular-mounting/common-sensors.js';
import powerReferences from '../src/catalog/data/popular-mounting/common-power.js';
import peripheralReferences from '../src/catalog/data/popular-mounting/common-peripherals.js';
import coreReferences from '../src/catalog/data/popular-mounting/core.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointInsidePartBody, pointOnPart } from '../src/geometry/parts.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins } from '../src/model/part-pins.js';
import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-radio-diy-mounting-2026-11-08.json', import.meta.url), 'utf8'));
const reviewed = audit.families.flatMap(family => family.entries);
const enabled = reviewed.filter(entry => entry.status === 'enabled');
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

test('the named radio/DIY audit tracks every checked ID and its exact opt-in contact map', () => {
  assert.equal(audit.summary.families, audit.families.length);
  assert.equal(audit.summary.entries, reviewed.length);
  assert.equal(new Set(reviewed.map(entry => entry.id)).size, reviewed.length);
  assert.equal(audit.summary.enabled, enabled.length);
  assert.ok(enabled.length >= 105);
  for (const entry of reviewed) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    assert.ok(component, entry.id);
    assert.ok(entry.reason.trim(), entry.id);
    assert.equal(Boolean(profile), entry.status === 'enabled', entry.id);
    if (!profile) continue;
    assert.deepEqual(entry.contacts, profile.contacts, entry.id);
    assert.deepEqual(entry.source, profile.source, entry.id);
    assert.equal(entry.retainedPinCount, component.pins.length, entry.id);
    assert.equal(entry.physicalView, profile.view?.id ?? null, entry.id);
    assert.match(profile.source.url, /^https:\/\//, entry.id);
    const artwork = profile.renderMounted(component, false);
    assert.ok(artwork.length > 100, entry.id);
    assert.doesNotMatch(artwork, /NaN|undefined|Infinity/, entry.id);
  }
});

test('legacy Adafruit references use the exact SKU/revision header centers, including analog and optional terminals', () => {
  const expected = {
    'adafruit-aht20-4566': [['vin', -3.81, 6.35], ['sda', 3.81, 6.35]],
    bme280: [['vin', -7.62, 6.35], ['cs', 7.62, 6.35]],
    ads1115: [['vin', -6.35, 6.35], ['analog-v', -6.35, -6.35], ['analog-gnd', 6.35, -6.35]],
    ina219: [['vin', -6.35, 7.62], ['vin-plus', 6.35, 7.62], ['vin-minus', 3.81, 7.62]],
    'adafruit-ds3231-rtc': [['vin', -8.89, 6.35], ['rst', 8.89, 6.35]],
  };
  for (const [id, coordinates] of Object.entries(expected)) {
    const profile = mountingFor(id);
    for (const [pinId, x, y] of coordinates) {
      const contact = profile.contacts.find(contact => contact.pinId === pinId);
      close(contact.x, x); close(contact.y, y);
    }
    assert.equal(profile.view.pins.length, componentById.get(id).pins.length);
  }
  assert.equal(mountingFor('ads1115').contacts.length, 12, 'The complete analog bank is also inserted.');
  for (const [id, excluded] of [
    ['adafruit-max98357a-i2s', ['spk-n', 'spk-p']],
    ['adafruit-4226-ina260', ['ip-term', 'im-term']],
    ['adafruit-5580-max17048', ['bat', 'bat-gnd']],
  ]) {
    const profile = mountingFor(id);
    for (const pinId of excluded) {
      assert.ok(profile.view.pins.some(pin => pin.pinId === pinId), `${id}/${pinId}`);
      assert.equal(profile.contacts.some(contact => contact.pinId === pinId), false, `${id}/${pinId}`);
    }
  }
});

test('every visible source-CAD package envelope is represented by physical material and selection bounds', () => {
  const references = { ...sensorReferences, ...powerReferences, ...peripheralReferences, ...coreReferences };
  const contains = (outer, inner) => inner.x >= outer.x - 1e-7 && inner.y >= outer.y - 1e-7 &&
    inner.x + inner.width <= outer.x + outer.width + 1e-7 && inner.y + inner.height <= outer.y + outer.height + 1e-7;
  let projectingPackages = 0;
  for (const [id, reference] of Object.entries(references)) {
    const profile = mountingFor(id), { origin, unitsPerMm } = profile.calibration;
    const board = { x: -reference.board.width / 2, y: -reference.board.height / 2,
      width: reference.board.width, height: reference.board.height };
    for (const [tag] of reference.artwork.matchAll(/<rect\b[^>]*>/g)) {
      // Attribute boundaries distinguish x/width from rx/stroke-width.
      const attributes = Object.fromEntries([...tag.matchAll(/\s(x|y|width|height)="([-.0-9]+)"/g)]
        .map(([, key, value]) => [key, Number(value)]));
      assert.equal(Object.keys(attributes).length, 4, id);
      if (contains(board, attributes)) continue;
      projectingPackages++;
      assert.ok(reference.bodyRegions.some(region => contains(region, attributes)), `${id}: ${tag}`);
      const projected = { x: origin.x + attributes.x * unitsPerMm, y: origin.y + attributes.y * unitsPerMm,
        width: attributes.width * unitsPerMm, height: attributes.height * unitsPerMm };
      assert.ok(profile.bodyRegions.some(region => contains(region, projected)), id);
      assert.ok(contains(profile.viewBounds, projected), id);
    }
  }
  assert.ok(projectingPackages >= 5, 'The SD and USB package overhangs must be exercised.');
});

test('real connector projections reserve material while decorative PCB bevels reserve no extra row', () => {
  for (const [id, physicalX, bottomMm] of [
    ['adafruit-ad5693r-5811', 0, 8.89], ['adafruit-mcp4728-4470', 0, 8.89],
    ['adafruit-lis3dh-2809', 0, 8.89], ['adafruit-bmp390-4816', 0, 8.89],
    ['adafruit-tca4307-5159', 12.7, 17.78],
  ]) {
    const component = componentById.get(id), profile = mountingFor(id), { origin, unitsPerMm } = profile.calibration;
    const part = { id: 'front', componentId: id, x: 0, y: 0, scale: { x: 1, y: 1 } };
    const outside = { x: origin.x + physicalX * unitsPerMm, y: origin.y + bottomMm * unitsPerMm + 1e-5 };
    assert.equal(pointInsidePartBody(part, pointOnPart(part, outside), component), false, id);
  }
  for (const [id, x, y] of [['adafruit-ds2484-5976', 12, -.2], ['adafruit-pcm5102-6250', 31.6, 9]]) {
    const component = componentById.get(id), profile = mountingFor(id), { origin, unitsPerMm } = profile.calibration;
    const part = { id: 'front', componentId: id, x: 0, y: 0, scale: { x: 1, y: 1 } };
    assert.equal(pointInsidePartBody(part, pointOnPart(part,
      { x: origin.x + x * unitsPerMm, y: origin.y + y * unitsPerMm }), component), true, id);
  }
});

test('new physical views preserve old project artwork and anchors until an instance explicitly opts in', () => {
  for (const entry of enabled) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    if (!profile.view) continue;
    for (const scale of [undefined, { x: .8, y: .8 }]) {
      const part = { id: 'old', componentId: component.id, x: 25, y: 30, ...(scale ? { scale } : {}) };
      assert.equal(instancePins(part, component), component.pins, entry.id);
      assert.equal(partArt(part, component), componentArt(component), entry.id);
      const restored = parseProject(serializeProject({ ...newProject(), parts: [part] }));
      assert.deepEqual(restored.parts, [part], entry.id);
    }
    const part = { id: 'new', componentId: component.id, x: 0, y: 0, view: profile.view.id };
    const mapped = instancePins(part, component);
    assert.deepEqual(new Set(mapped.map(pin => pin.id)), new Set(component.pins.map(pin => pin.id)), entry.id);
    assert.doesNotMatch(partArt(part, component), /NaN|undefined|Infinity/, entry.id);
    assert.doesNotMatch(partArt(part, component, { labels: false }), /NaN|undefined|Infinity/, entry.id);
  }
});

test('mounted artwork is identical for canonical and resolved physical component arguments', () => {
  for (const entry of enabled) {
    const component = componentById.get(entry.id), profile = mountingFor(entry.id);
    const part = { id: 'mounted', componentId: entry.id, ...(profile.view ? { view: profile.view.id } : {}) };
    const physical = { ...component, pins: instancePins(part, component) };
    assert.equal(profile.renderMounted(physical, false), profile.renderMounted(component, false), entry.id);
  }
});

test('common source references insert at every host angle and preserve every explicit attachment through save/undo', () => {
  const ids = ['ads1115', 'adafruit-aht20-4566', 'adafruit-powerboost-500c',
    'pololu-cp2102n-usb-uart', 'pololu-drv8838-2990', 'keyestudio-ks0032-rgb-led'];
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
      scale: { x: 1.2, y: .8 }, breadboard: { rows: 40, leftCells: 15, rightCells: 15 } };
    const history = new ProjectHistory({ ...newProject(), parts: [host] });
    const editor = new DiagramEditor(history, () => {}, message => assert.fail(message));
    const point = editor.suggestPlacement(id, host.id);
    assert.ok(point, `${id}/${rotation}`);
    const part = editor.addPart(id, point, { mount: true, hostPartId: host.id });
    assert.equal(attachmentError(editor.project, part), null, `${id}/${rotation}`);
    assert.equal(part.view, 'breadboard', `${id}/${rotation}`);
    assert.equal(part.attachment.contacts.length, mountingFor(id).contacts.length);
    const component = componentById.get(id), hostComponent = componentForPart(host);
    const tolerance = mountingTolerance(part, host);
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, component.pins.find(pin => pin.id === pinId));
      const hole = pointOnPart(host, hostComponent.pins.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, tolerance); close(lead.y, hole.y, tolerance);
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.step('undo'); assert.equal(editor.project.parts.length, 1);
    editor.step('redo'); assert.deepEqual(editor.project.parts[1], part);
  }
});

test('rear wire references, mirrored motor-driver banks and genuine pitch exceptions stay distinct', () => {
  const usb = mountingFor('pololu-cp2102n-usb-uart');
  assert.equal(usb.contacts.length, 18);
  assert.equal(usb.contacts.some(contact => contact.pinId === 'vio'), false);
  assert.equal(usb.view.pins.find(pin => pin.pinId === 'vio').face, 'rear');
  assert.match(usb.renderMounted(componentById.get('pololu-cp2102n-usb-uart')), /data-rear-contact="vio"/);
  const drv = mountingFor('pololu-drv8838-2990');
  close(drv.contacts.find(contact => contact.pinId === 'l-vin').x, 3.81);
  close(drv.contacts.find(contact => contact.pinId === 'r-vcc').x, -3.81);
  for (const id of ['ra-01h', 'ra-05', 'ebyte-e01-ml01d', 'ti-launchxl-cc1352r1']) {
    assert.equal(mountingFor(id), undefined, id);
    assert.ok(reviewed.find(entry => entry.id === id && !entry.status.startsWith('pending')), id);
  }
  assert.equal(mountingFor('dfrobot-dfplayer-mini-dfr0299'), undefined);
  const dfplayer = reviewed.find(entry => entry.id === 'dfrobot-dfplayer-mini-dfr0299');
  assert.equal(dfplayer.status, 'pending-nominal-post-evidence');
  assert.match(dfplayer.reason, /18\.03 mm/);
  assert.equal(components.length, 2003);
});
