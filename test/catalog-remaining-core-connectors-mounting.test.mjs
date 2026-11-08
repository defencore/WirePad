import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { partArt } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { partBodyBounds, pointOnPart } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins, leadShapeError } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-remaining-core-connectors-mounting-2026-11-08.json', import.meta.url)));
const ids = ['inductor', 'ferrite-bead'];
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seat(id, rotation) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
    scale: { x: 1.2, y: .8 }, breadboard: { rows: 30, leftCells: 10, rightCells: 10 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }), () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation}`);
  return { host, editor, part: editor.addPart(id, point, { mount: true, hostPartId: host.id }) };
}

test('all 48 core and SP/XT entries have specific decisions instead of inheriting fake host-wire geometry', () => {
  assert.equal(audit.entries.length, 48);
  assert.equal(new Set(audit.entries.map(entry => entry.id)).size, 48);
  assert.equal(audit.summary.enabled, 2);
  for (const entry of audit.entries) {
    assert.equal(componentById.get(entry.id).pins.length, entry.publishedPinCount);
    assert.equal(Boolean(mountingFor(entry.id)), entry.status.startsWith('enabled'), entry.id);
    assert.ok(entry.reason.length > 80, entry.id);
  }
  assert.equal(audit.entries.filter(entry => entry.family === 'sp-xt').length, 39);
  assert.ok(audit.entries.filter(entry => entry.id.startsWith('weipu-')).every(entry => entry.status === 'off-board-cable'));
  for (const id of ['amass-xt60pb-f', 'amass-xt60pb-m']) {
    const entry = audit.entries.find(entry => entry.id === id);
    assert.equal(entry.status, 'non-grid-pcb-power-connector');
    assert.match(entry.reason, /7\.20 mm/);
  }
  assert.equal(audit.entries.find(entry => entry.id === 'terminal-2').status, 'pending-exact-variant');
});

test('axial mechanical examples use fixed source envelopes, complete round leads and bounded forming', () => {
  for (const [id, width, height, lead, reach] of [['inductor', 7.11, 2.79, .51, 20], ['ferrite-bead', 5.3, 3.75, .65, 15]]) {
    const p = mountingFor(id);
    assert.equal(p.mode, 'bendable');
    assert.match(p.note, /Representative/);
    close(p.body.width / p.unitsPerMm, width); close(p.body.height / p.unitsPerMm, height);
    assert.equal(p.maxLeadMm, reach);
    assert.deepEqual(p.contacts.map(pin => pin.pinId), ['1', '2']);
    close(p.contacts[1].x - p.contacts[0].x, 10.16);
    assert.equal(audit.entries.find(entry => entry.id === id).leadDiameterMm, lead);
  }
});

test('both axial parts seat completely at every transformed host angle without shorting their leads', () => {
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const { host, editor, part } = seat(id, rotation), component = componentById.get(id);
    assert.equal(part.leads.length, 2); assert.equal(part.attachment.contacts.length, 2);
    assert.equal(attachmentError(editor.project, part), null);
    assert.equal(leadShapeError(part, component), null);
    const pins = instancePins(part, component), hostPins = componentForPart(host).pins;
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, pins.find(pin => pin.id === pinId)), hole = pointOnPart(host, hostPins.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, mountingTolerance(part, host)); close(lead.y, hole.y, mountingTolerance(part, host));
      const net = traceNet(editor.project, { partId: part.id, pinId });
      assert.ok(net.endpoints.has(`pin/${host.id}/${hostPinId}`));
      assert.equal(net.endpoints.has(`pin/${part.id}/${pinId === '1' ? '2' : '1'}`), false);
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.commit(editor.placementProject(part.id, { x: 3500, y: 2200 }));
    assert.equal(editor.project.parts[1].attachment, undefined);
    assert.deepEqual(editor.project.parts[1].leads, part.leads);
    editor.step('undo'); assert.deepEqual(editor.project.parts[1], part);
  }
});

test('formed lead edits redraw the metal without stretching the source body or changing old artwork', () => {
  for (const id of ids) {
    const c = componentById.get(id), p = mountingFor(id), { editor, part } = seat(id, 0);
    const originalBody = partBodyBounds(part);
    const { pinId } = part.leads[0], tip = pointOnPart(part, instancePins(part, c).find(pin => pin.id === pinId));
    editor.commit(editor.leadProject(part.id, pinId, { x: tip.x, y: tip.y + 8 }));
    assert.deepEqual(partBodyBounds(editor.project.parts[1]), originalBody);
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    for (const labels of [false, true]) {
      const art = partArt(part, c, { labels });
      assert.doesNotMatch(art, /NaN|undefined|Infinity/);
      assert.equal((art.match(/data-contact=/g) ?? []).length, 2);
    }
    const raw = { id: 'old', componentId: id, x: 0, y: 0, scale: { x: .8, y: .8 } };
    assert.equal(instancePins(raw, c), c.pins);
    assert.equal(partArt(raw, c), componentArt(c));
    const invalid = structuredClone(part);
    invalid.leads[0].x = p.roots[0].x + (p.maxLeadMm + 1) * p.unitsPerMm;
    assert.match(leadShapeError(invalid, c), /reach/);
  }
});
