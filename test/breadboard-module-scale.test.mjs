import assert from 'node:assert/strict';
import { test } from 'node:test';
import { components, configurationFor, mountingFor } from '../src/catalog/index.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { fitPart } from '../src/geometry/breadboard-placement.js';
import { mountingTargets, partCenter } from '../src/geometry/breadboard-targets.js';
import { partBodyBounds, partBounds, pointInsidePartBody, pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingScale, mountingTolerance, sameContactNet } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { partScale } from '../src/model/part-placement.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const sourceModules = components.filter(component => mountingFor(component.id)?.calibration);
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function safeGrid(component) {
  const profile = mountingFor(component.id), first = profile.contacts[0];
  for (const rotation of [0, 90]) {
    const points = profile.contacts.map(contact => {
      const x = Math.round((contact.x - first.x) / 2.54), y = Math.round((contact.y - first.y) / 2.54);
      return { ...contact, x: rotation ? -y : x, y: rotation ? x : y };
    });
    const minX = Math.min(...points.map(point => point.x)), maxX = Math.max(...points.map(point => point.x));
    const minY = Math.min(...points.map(point => point.y)), maxY = Math.max(...points.map(point => point.y));
    if (maxY - minY >= 100) continue;
    const offsets = Array.from({ length: Math.max(0, 102 - maxX + minX) }, (_, index) => index - minX)
      .sort((a, b) => Math.abs(a + (minX + maxX) / 2 - 50.5) - Math.abs(b + (minX + maxX) / 2 - 50.5));
    for (const dx of offsets) {
      const used = new Map();
      if (points.every(point => {
        const x = point.x + dx, group = `${x < 50 ? 'left' : 'right'}:${point.y}`;
        if (x === 50 || x === 51 || used.has(group) && !sameContactNet(component, used.get(group), point.pinId)) return false;
        used.set(group, point.pinId);
        return true;
      })) return { rotation, dx, dy: Math.round(50 - (minY + maxY) / 2) };
    }
  }
  assert.fail(`${component.id} has no electrically safe whole-header insertion`);
}

function sourcePose(component, host, layout = safeGrid(component)) {
  const intrinsic = mountingScale(component, componentForPart(host)), hostScale = partScale(host);
  assert.ok(intrinsic, component.id);
  const turned = layout.rotation % 180 !== 0;
  const scale = { x: intrinsic.x * hostScale[turned ? 'y' : 'x'], y: intrinsic.y * hostScale[turned ? 'x' : 'y'] };
  const part = { id: 'module', componentId: component.id, x: 0, y: 0,
    rotation: ((host.rotation ?? 0) + layout.rotation) % 360, scale };
  const first = pointOnPart(part, pinById(component, mountingFor(component.id).contacts[0].pinId), component);
  const anchor = pointOnPart(host, { x: 96 + layout.dx * 16, y: 96 + layout.dy * 16 });
  return { ...part, x: anchor.x - first.x, y: anchor.y - first.y };
}

test('every reviewed source-module header fits at physical scale without electrical shorts or saved-project changes', () => {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25,
    breadboard: configurationFor('breadboard').normalize({ rows: 100, leftCells: 50, rightCells: 50 }) };
  const probe = sourcePose(sourceModules[0], host), base = { ...newProject(), parts: [host, probe] };
  const targets = mountingTargets(base, probe, mountingFor(probe.componentId), { nearby: false });
  assert.ok(sourceModules.length >= 582);
  for (const component of sourceModules) {
    const part = sourcePose(component, host), project = { ...base, parts: [host, part] };
    const fit = fitPart(project, part, { targets, rotation: part.rotation });
    assert.ok(fit, component.id);
    assert.equal(fit.contacts.length, mountingFor(component.id).contacts.length, component.id);
    const next = { ...project, parts: [host, fit.part] };
    assert.equal(attachmentError(next, fit.part), null, component.id);
    const tolerance = mountingTolerance(fit.part, host);
    for (const { pinId, hostPinId } of fit.part.attachment.contacts) {
      const lead = pointOnPart(fit.part, pinById(component, pinId)), hole = pointOnPart(host, pinById(componentForPart(host), hostPinId));
      close(lead.x, hole.x, tolerance); close(lead.y, hole.y, tolerance);
    }
    assert.deepEqual(parseProject(serializeProject(next)), next, component.id);
  }
});

test('source scales and physical view centers survive rotated hosts, detachment and independent rotation', () => {
  const manufacturers = new Set(), examples = sourceModules.filter(component => {
    const rounded = mountingFor(component.id).calibration.toleranceMm;
    const key = rounded ? 'rounded-source' : component.manufacturer;
    if (manufacturers.has(key)) return false;
    manufacturers.add(key); return true;
  });
  for (const component of examples) for (const rotation of [0, 90, 180, 270]) {
    const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation, scale: { x: 1.2, y: .8 },
      breadboard: { rows: 100, leftCells: 50, rightCells: 50 } };
    const part = sourcePose(component, host), project = { ...newProject(), parts: [host, part] };
    const fit = fitPart(project, part, { rotation: part.rotation });
    assert.ok(fit, `${component.id}/${rotation}`);
    const history = new ProjectHistory({ ...project, parts: [host, fit.part] });
    const editor = new DiagramEditor(history, () => {}, () => {});
    const center = partCenter(fit.part), bounds = partBounds(fit.part), body = partBodyBounds(fit.part);
    close(center.x, (bounds.left + bounds.right) / 2); close(center.y, (bounds.top + bounds.bottom) / 2);
    assert.ok(body.left >= bounds.left && body.right <= bounds.right && body.top >= bounds.top && body.bottom <= bounds.bottom);
    editor.select('part', part.id);
    assert.equal(editor.rotatePart((fit.part.rotation + 90) % 360), true);
    const detached = editor.project.parts[1];
    assert.equal(detached.attachment, undefined);
    assert.deepEqual(detached.scale, fit.part.scale);
    close(partCenter(detached).x, center.x); close(partCenter(detached).y, center.y);
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.step('undo'); assert.deepEqual(editor.project.parts[1], fit.part);
  }
});

test('the pictured C6 covers material only and leaves label columns, antenna wings and the lower row accessible', () => {
  const component = components.find(component => component.id === 'esp32-c6-devkitm-1');
  for (const rotation of [0, 90, 180, 270]) {
    const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
      breadboard: { leftCells: 10, rightCells: 10 } };
    const hostComponent = componentForPart(host);
    const part = { id: 'c6', componentId: component.id, x: 0, y: 0, rotation, scale: mountingScale(component, hostComponent) };
    const hole = pointOnPart(host, pinById(hostComponent, 'l5')), first = pointOnPart(part, pinById(component, 'j1-1'));
    part.x = hole.x - first.x; part.y = hole.y - first.y;
    const project = { ...newProject(), parts: [host, part] }, fit = fitPart(project, part, { rotation });
    assert.ok(fit);
    const seated = { ...project, parts: [host, fit.part] }, drawing = resolveDrawing(seated);
    const covered = drawing.parts.get(host.id).covered;
    for (const id of ['a10', 'b10', 'c10', 'd10', 'e10', 'k10', 'j10', 'p10', 'q10', 'r10', 's10', 't10', 'l3', 'l24', 'f24']) {
      const point = pointOnPart(host, pinById(hostComponent, id));
      assert.equal(pointInsidePartBody(fit.part, point), false, `${rotation}/${id}`);
      assert.equal(covered.has(id), false, `${rotation}/${id}`);
    }
    assert.equal(covered.has('f3'), true, 'The narrow physical antenna still covers its real holes.');
    const left = pointOnPart(fit.part, pinById(component, 'j1-1')), next = pointOnPart(fit.part, pinById(component, 'j1-2'));
    close(Math.hypot(left.x - next.x, left.y - next.y), 16);
  }
});
