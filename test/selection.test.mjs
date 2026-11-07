import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DiagramEditor } from '../src/editor/editor.js';
import { newProject } from '../src/model/project.js';
import { POSITION_LIMIT } from '../src/model/limits.js';
import { ProjectHistory } from '../src/model/history.js';
import { polylineInRect, selectionInBox, selectionRect, segmentIntersectsRect } from '../src/editor/selection.js';

const point = (x, y) => ({ x, y });
const part = (id, x, y) => ({ id, componentId: 'resistor', x, y });
const pin = (partId, pinId = '1') => ({ partId, pinId });
const junction = junctionId => ({ junctionId });
const wire = (id, from, to, points) => ({ id, from, to, color: '#2c83d9', ...(points && { fixedRoute: true, points }) });
const selected = (type, id) => ({ type, id });

function workspace(data = {}) {
  let renders = 0;
  const history = new ProjectHistory({ ...newProject(), parts: [part('a', 0, 0), part('b', 250, 0)], ...data });
  const editor = new DiagramEditor(history, () => { renders++; }, message => assert.fail(message));
  return { editor, history, renders: () => renders };
}

test('group movement affordances require components, junctions or movable wire bends', () => {
  const { editor } = workspace({ wires: [
    wire('one', pin('a'), pin('b')),
    wire('two', pin('a', '2'), pin('b', '2')),
  ] });
  editor.selectMany([selected('wire', 'one'), selected('wire', 'two')]);
  assert.equal(editor.canMoveSelection, false);
  editor.select('part', 'a', { additive: true });
  assert.equal(editor.canMoveSelection, true);
  editor.commit({ ...editor.project, wires: editor.project.wires.map(item => item.id === 'one'
    ? { ...item, points: [point(120, 100)], fixedRoute: true } : item) });
  editor.selectMany([selected('wire', 'one'), selected('wire', 'two')]);
  assert.equal(editor.canMoveSelection, true);
  editor.select(null);
  assert.equal(editor.canMoveSelection, false);
});

test('selection supports replacement, additive, toggle and subtract without editing the project', () => {
  const { editor, history, renders } = workspace();
  const original = editor.project;
  editor.select('part', 'b', { additive: true });
  assert.deepEqual(editor.selections, [selected('part', 'a'), selected('part', 'b')]);
  assert.deepEqual(editor.selection, selected('part', 'b'));
  assert.equal(editor.part, null);
  assert.equal(editor.rotatePart(), false);
  assert.equal(editor.hasSelection('part', 'a'), true);
  editor.select('part', 'a', { toggle: true });
  assert.deepEqual(editor.selections, [selected('part', 'b')]);
  assert.equal(editor.part.id, 'b');
  editor.select('part', 'a', { additive: true });
  editor.selectMany([selected('part', 'b')], { remove: true });
  assert.deepEqual(editor.selections, [selected('part', 'a')]);
  const before = renders();
  editor.select('part', 'a');
  assert.equal(renders(), before);
  editor.select(null);
  assert.equal(editor.selection, null);
  editor.selectMany([selected('part', 'missing'), selected('part', 'b'), selected('part', 'b')]);
  assert.deepEqual(editor.selections, [selected('part', 'b')]);
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
});

test('window selection encloses whole objects; crossing selection touches actual wire segments', () => {
  const project = {
    parts: [{ id: 'inside' }, { id: 'straddles' }, { id: 'outside' }],
    wires: [{ id: 'contained' }, { id: 'crosses' }, { id: 'detour' }],
    junctions: [{ id: 'edge', x: 10, y: 10 }, { id: 'outside', x: 12, y: 20 }],
  };
  const bounds = {
    inside: { left: 2, top: 2, right: 8, bottom: 8 },
    straddles: { left: 8, top: 2, right: 12, bottom: 8 },
    outside: { left: 20, top: 20, right: 30, bottom: 30 },
  };
  const routes = {
    contained: [point(1, 3), point(9, 3)],
    crosses: [point(-5, 5), point(15, 5)],
    // Its bounding box covers the selection but its segments never enter it.
    detour: [point(-5, 15), point(15, 15), point(15, -5)],
  };
  const geometry = { partBounds: part => bounds[part.id], wirePoints: wire => routes[wire.id] };
  assert.deepEqual(selectionInBox(project, point(0, 0), point(10, 10), geometry), [
    selected('part', 'inside'), selected('wire', 'contained'), selected('junction', 'edge'),
  ]);
  assert.deepEqual(selectionInBox(project, point(10, 10), point(0, 0), geometry), [
    selected('part', 'inside'), selected('part', 'straddles'),
    selected('wire', 'contained'), selected('wire', 'crosses'), selected('junction', 'edge'),
  ]);
});

test('segment tests include endpoints, corners and degenerate segments and reject nearby lines', () => {
  const rect = selectionRect(point(10, 10), point(0, 0));
  assert.equal(segmentIntersectsRect(point(-5, -5), point(0, 0), rect), true);
  assert.equal(segmentIntersectsRect(point(5, 5), point(5, 5), rect), true);
  assert.equal(segmentIntersectsRect(point(11, 5), point(11, 5), rect), false);
  assert.equal(segmentIntersectsRect(point(-5, 11), point(15, 11), rect), false);
  assert.equal(segmentIntersectsRect(point(-5, 8), point(8, -5), rect), true);
  assert.equal(segmentIntersectsRect(point(-5, 2), point(2, -5), rect), false);
  assert.equal(polylineInRect([], rect, true), false);
});

test('group drag previews translate internal routes and preserve connections in one undo step', () => {
  const { editor, history } = workspace({
    parts: [part('a', 0, 0), part('b', 250, 0), part('c', 600, 0)],
    junctions: [{ id: 'joint', x: 100, y: 80 }],
    wires: [
      wire('internal', pin('a', '2'), pin('b'), [point(140, 16), point(140, 32)]),
      wire('branch', pin('a', '2'), junction('joint'), [point(100, 16)]),
      wire('external', pin('b', '2'), pin('c'), [point(450, 16)]),
    ],
  });
  const original = editor.project;
  const group = [selected('part', 'a'), selected('part', 'b'), selected('junction', 'joint')];
  editor.selectMany(group);
  const preview = editor.selectionProject(25, -10, original);
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  assert.deepEqual(preview.parts.map(({ x, y }) => point(x, y)), [point(25, -10), point(275, -10), point(600, 0)]);
  assert.deepEqual(preview.junctions[0], { id: 'joint', x: 125, y: 70 });
  assert.deepEqual(preview.wires[0].points, [point(165, 6), point(165, 22)]);
  assert.deepEqual(preview.wires[1].points, [point(125, 6)]);
  assert.equal(preview.wires[2], original.wires[2]);
  assert.equal(preview.wires[0].from, original.wires[0].from);
  assert.equal(preview.wires[0].to, original.wires[0].to);
  assert.equal(editor.commit(preview), true);
  assert.deepEqual(editor.selections, group);
  const moved = editor.project;
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  editor.step('redo');
  assert.equal(editor.project, moved);
  assert.deepEqual(editor.selections, group);
});

test('groups keep their spacing when clamped to the position limit and ignore zero movement', () => {
  const { editor, history } = workspace({ parts: [part('a', POSITION_LIMIT - 5, 0), part('b', POSITION_LIMIT - 25, 0)] });
  editor.selectAll();
  assert.equal(editor.moveSelection(50, 20), true);
  assert.equal(editor.project.parts[0].x, POSITION_LIMIT);
  assert.equal(editor.project.parts[1].x, POSITION_LIMIT - 20);
  const moved = editor.project;
  assert.equal(editor.moveSelection(0, 0), false);
  assert.equal(editor.moveSelection(Infinity, 0), false);
  assert.equal(editor.project, moved);
  editor.step('undo');
  assert.equal(history.canUndo, false);
});

test('deleting mixed selections removes dependent wires and unused junctions atomically', () => {
  const { editor, history } = workspace({
    parts: [part('a', 0, 0), part('b', 250, 0), part('c', 600, 0)],
    junctions: [{ id: 'removed', x: 100, y: 80 }, { id: 'remaining', x: 400, y: 80 }],
    wires: [
      wire('part-wire', pin('a'), pin('b')),
      wire('junction-wire', pin('b', '2'), junction('removed')),
      wire('selected-wire', pin('b', '2'), pin('c')),
      wire('remaining-wire', pin('c', '2'), junction('remaining')),
    ],
  });
  const original = editor.project;
  editor.selectMany([selected('part', 'a'), selected('junction', 'removed'), selected('wire', 'selected-wire')]);
  editor.removeSelection();
  assert.deepEqual(editor.project.parts.map(({ id }) => id), ['b', 'c']);
  assert.deepEqual(editor.project.wires.map(({ id }) => id), ['remaining-wire']);
  assert.deepEqual(editor.project.junctions.map(({ id }) => id), ['remaining']);
  assert.deepEqual(editor.selections, []);
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
});

test('single-item commits replace a group; undo removes selections whose records disappeared', () => {
  const { editor } = workspace();
  editor.selectAll();
  const next = editor.selectionProject(10, 10);
  editor.commit(next, { selection: selected('part', 'a') });
  assert.deepEqual(editor.selections, [selected('part', 'a')]);
  const added = editor.addPart('resistor', point(500, 500));
  assert.equal(editor.selection.id, added.id);
  editor.step('undo');
  assert.deepEqual(editor.selections, []);
  editor.selectAll();
  editor.replace(newProject());
  assert.deepEqual(editor.selections, []);
});
