import assert from 'node:assert/strict';
import { test } from 'node:test';
import { breadboardFeedback, BreadboardFeedback } from '../src/canvas/breadboard-feedback.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { createScope } from '../src/shared/lifecycle.js';

const host = { id: 'host', componentId: 'breadboard', x: 0, y: 0, breadboard: { splitRails: true } };
const project = { version: 2, title: 'Breadboard feedback', parts: [host], wires: [] };
const seed = pinId => ({ partId: host.id, pinId });

test('hover identifies every actual strip contact and distinguishes free from physically wired holes', () => {
  const drawing = resolveDrawing(project);
  const feedback = breadboardFeedback(project, drawing, seed('b7'));
  assert.equal(feedback.points.length, 5);
  assert.match(feedback.label, /B7 · A7–E7 · Free hole/);
  const wired = { ...project, wires: [{ id: 'jumper', from: seed('a7'), to: seed('left-1-1'), color: '#f00' }] };
  const geometry = resolveDrawing(wired);
  assert.match(breadboardFeedback(wired, geometry, seed('a7')).label, /Wired hole/);
  assert.match(breadboardFeedback(wired, geometry, seed('b7')).label, /Free hole/);
  assert.equal(breadboardFeedback(wired, geometry, seed('b7')).points.length, 5);
  const net = breadboardFeedback(wired, geometry, seed('b7'), { net: true });
  assert.equal(net.points.length, 20, 'five terminal holes plus one fifteen-hole split rail');
  assert.equal(net.paths.length, 1);
});

test('hover follows configured bank widths and split rails without crossing isolated conductors', () => {
  const customized = { ...project, parts: [{ ...host, breadboard: { rows: 7, leftCells: 3, rightCells: 4, splitRails: true } }] };
  const geometry = resolveDrawing(customized);
  assert.equal(breadboardFeedback(customized, geometry, seed('a2')).points.length, 3);
  assert.equal(breadboardFeedback(customized, geometry, seed('f2')).points.length, 4);
  assert.equal(breadboardFeedback(customized, geometry, seed('left-1-1')).points.length, 4);
  assert.equal(breadboardFeedback(customized, geometry, seed('left-1-5')).points.length, 3);
});

test('transient strip feedback scales its handles and removes its layer on destroy', () => {
  const scope = createScope();
  const node = { setAttribute() {}, innerHTML: '', remove() { this.removed = true; } };
  const svg = { ownerDocument: { createElementNS: () => node }, insertBefore() {} };
  let scale = 1;
  const feedback = new BreadboardFeedback({ svg, scope, getState: () => ({ project, geometry: resolveDrawing(project), scale }) });
  feedback.show(seed('a2'));
  assert.equal((node.innerHTML.match(/<circle /g) ?? []).length, 5);
  assert.match(node.innerHTML, /r="5"/);
  scale = 2;
  feedback.render();
  assert.match(node.innerHTML, /r="2.5"/);
  feedback.show();
  assert.equal(node.innerHTML, '');
  scope.destroy();
  assert.equal(node.removed, true);
  feedback.show(seed('a2'));
  assert.equal(feedback.seed, null);
});

test('hole feedback stays inside a narrow canvas when the inspected contact is at its edge', () => {
  const scope = createScope();
  const node = { setAttribute() {}, innerHTML: '', remove() {} };
  const svg = { viewBox: { baseVal: { x: 0, y: 0, width: 180, height: 100 } },
    ownerDocument: { createElementNS: () => node }, insertBefore() {} };
  const feedback = new BreadboardFeedback({ svg, scope, getState: () => ({ project, geometry: resolveDrawing(project), scale: 1 }) });
  feedback.show(seed('j3'));
  const [, x, y, width] = node.innerHTML.match(/<g transform="translate\(([^ ]+) ([^)]+)\)"><rect width="([^"]+)"/).map(Number);
  assert.ok(x >= 8 && x + width <= 172);
  assert.ok(y >= 8 && y + 20 <= 92);
  scope.destroy();
});
