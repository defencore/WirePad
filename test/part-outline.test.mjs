import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, configurationFor, mountingFor } from '../src/catalog/index.js';
import { defineFamily } from '../src/catalog/registry.js';
import { drawingMarkup, partMarkup } from '../src/canvas/markup.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { labelPosition, partBounds, partOutlineBounds, partOutlineLocalBounds, pointOnPart } from '../src/geometry/parts.js';
import { ProjectHistory } from '../src/model/history.js';
import { componentForPart } from '../src/model/part-component.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-7, `${a} != ${b}`);
const center = bounds => ({ x: (bounds.left + bounds.right) / 2, y: (bounds.top + bounds.bottom) / 2 });

test('breadboard outline follows the visible plastic while its saved frame and contact coordinates stay unchanged', () => {
  const part = { id: 'bb', componentId: 'breadboard', x: 10, y: 20 };
  const component = componentForPart(part);
  assert.equal(component.width, 368); assert.equal(component.height, 656);
  assert.deepEqual(partOutlineLocalBounds(part), { x: 32, y: 64, width: 304, height: 531 });
  assert.deepEqual(partBounds(part), { left: 42, top: 84, right: 346, bottom: 615 });
  assert.deepEqual(partOutlineBounds(part), partBounds(part));
  assert.equal(labelPosition(part, component), 'translate(184 603)');
  assert.deepEqual(pointOnPart(part, component.pins.find(pin => pin.id === 'a1')), { x: 106, y: 116 });
  assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [part] })).parts,
    [{ ...part, breadboard: configurationFor('breadboard').normalize({}) }]);
});

test('configurable physical outlines include every rail and bevel at every rotation and instance scale', () => {
  for (const configuration of [
    { rows: 1, leftCells: 1, rightCells: 1, topRails: 0, bottomRails: 0, leftRails: 0, rightRails: 0 },
    { rows: 18, leftCells: 11, rightCells: 3, topRails: 4, bottomRails: 1, leftRails: 1, rightRails: 3 },
    { rows: 100, leftCells: 50, rightCells: 50, topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4 },
  ]) for (const rotation of [0, 90, 180, 270]) {
    const part = { id: 'bb', componentId: 'breadboard', x: 10, y: 20, rotation, scale: { x: .7, y: 1.2 },
      breadboard: configurationFor('breadboard').normalize(configuration) };
    const component = componentForPart(part), local = partOutlineLocalBounds(part);
    const corners = [{ x: local.x, y: local.y }, { x: local.x + local.width, y: local.y },
      { x: local.x, y: local.y + local.height }, { x: local.x + local.width, y: local.y + local.height }]
      .map(point => pointOnPart(part, point, component));
    const bounds = partOutlineBounds(part);
    close(bounds.left, Math.min(...corners.map(point => point.x))); close(bounds.right, Math.max(...corners.map(point => point.x)));
    close(bounds.top, Math.min(...corners.map(point => point.y))); close(bounds.bottom, Math.max(...corners.map(point => point.y)));
    for (const pin of component.pins) {
      const point = pointOnPart(part, pin, component);
      assert.ok(point.x >= bounds.left && point.x <= bounds.right && point.y >= bounds.top && point.y <= bounds.bottom, pin.id);
    }
  }
});

test('module outlines exclude annotation padding only when their hardware view is represented', () => {
  const nano = { id: 'nano', componentId: 'arduino-nano', x: 0, y: 0 };
  assert.deepEqual(partOutlineLocalBounds(nano), mountingFor(nano.componentId).body);
  const source = { id: 'source', componentId: 'adafruit-module-5832', x: 0, y: 0 };
  const component = componentById.get(source.componentId);
  assert.deepEqual(partOutlineLocalBounds(source), { x: 0, y: 0, width: component.width, height: component.height });
  assert.deepEqual(partOutlineLocalBounds({ ...source, scale: { x: 1, y: 1 } }), mountingFor(source.componentId).body);
});

test('rotating an asymmetric breadboard or Nano holds its visible outline center without adding instance fields', () => {
  for (const part of [
    { id: 'bb', componentId: 'breadboard', x: 10, y: 20,
      breadboard: configurationFor('breadboard').normalize({ topRails: 4, bottomRails: 0, leftRails: 0, rightRails: 4 }) },
    { id: 'nano', componentId: 'arduino-nano', x: 10, y: 20 },
  ]) {
    const history = new ProjectHistory({ ...newProject(), parts: [part] });
    const editor = new DiagramEditor(history, () => {}, () => {});
    editor.select('part', part.id);
    const original = center(partOutlineBounds(part));
    for (const rotation of [90, 180, 270, 0]) {
      assert.equal(editor.rotatePart(rotation), true);
      const rotated = editor.project.parts[0], actual = center(partOutlineBounds(rotated));
      close(actual.x, original.x); close(actual.y, original.y);
      assert.equal(rotated.scale, undefined);
      assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    }
  }
});

test('catalog rejects malformed dynamic physical outlines', () => {
  const entry = {
    component: { id: 'outline-test', name: 'Outline test', category: 'Test', width: 20, height: 20,
      pins: [{ id: 'a', label: 'A', type: 'passive', x: 2, y: 2 }, { id: 'b', label: 'B', type: 'passive', x: 10, y: 2 }],
      internalConnections: [['a', 'b']] }, render: () => '', footprint: { body: [10, 10] },
  };
  const mounting = { type: 'breadboard', pitch: 2.54, canvasPitch: 16,
    contacts: () => [{ pinId: 'a', x: 2, y: 2, group: 'a' }, { pinId: 'b', x: 10, y: 2, group: 'a' }] };
  for (const bodyFor of [true, () => null, () => ({ x: 0, y: NaN, width: 10, height: 10 }), () => ({ x: 0, y: 0, width: -1, height: 10 })]) {
    assert.throws(() => defineFamily('outline-test', [{ ...entry, mounting: { ...mounting, bodyFor } }]), /body resolver/);
  }
});

test('generic breadboard captions leave overhanging hardware clear while explicit user labels stay visible', () => {
  const part = { id: 'bb', componentId: 'breadboard', x: 0, y: 0 }, component = componentForPart(part);
  for (const editing of [true, false]) {
    const markup = partMarkup(part, component, new Set(), editing);
    assert.match(markup, /display="none" aria-hidden="true"/);
    const custom = partMarkup({ ...part, label: 'Power distribution' }, component, new Set(), editing);
    assert.doesNotMatch(custom, /display="none" aria-hidden="true"/);
    assert.match(custom, />Power distribution<\/text>/);
  }
  const exported = drawingMarkup({ ...newProject(), parts: [part] });
  assert.match(exported, /display="none" aria-hidden="true"/);
});
