import assert from 'node:assert/strict';
import { test } from 'node:test';

import { createAutoRouter } from '../src/geometry/autoroute.js';
import { componentById } from '../src/catalog/index.js';
import { normalizeBreadboardConfig } from '../src/catalog/families/catalog-breadboard.js';
import { pinById } from '../src/model/component-pins.js';
import { traceNet } from '../src/model/continuity.js';
import { componentForPart } from '../src/model/part-component.js';
import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject, validateProject } from '../src/model/project.js';
import { routeFor, wireRoute } from '../src/geometry/routing.js';
import { endpointPositions } from '../src/geometry/parts.js';

const board = (id, breadboard, rotation = 0) => ({ id, componentId: 'breadboard', breadboard, rotation, x: 40, y: 60 });
const endpoint = (partId, pinId) => ({ partId, pinId });
const wire = (id, from, to) => ({ id, from, to, color: '#2985d5' });
const coords = ({ x, y }) => ({ x, y });
const bare = { rows: 4, topRails: 0, bottomRails: 0, leftRails: 0, rightRails: 0, splitRails: false };

test('breadboard instance settings survive JSON and history while old projects receive defaults', () => {
  const config = { rows: 100, topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4, splitRails: true };
  const project = {
    ...newProject('Configured breadboard'),
    parts: [board('board', config, 270)],
    wires: [wire('last-row', endpoint('board', 'j100'), endpoint('board', 'right-4-100'))],
  };
  const history = new ProjectHistory(project);
  const initial = history.project;
  assert.deepEqual(parseProject(serializeProject(initial)), initial);
  assert.deepEqual(initial.parts[0].breadboard, normalizeBreadboardConfig(config));
  assert.throws(() => { initial.parts[0].breadboard.rows = 20; }, TypeError);
  assert.throws(() => history.commit({
    ...initial, parts: [{ ...initial.parts[0], breadboard: { ...config, rows: 99 } }],
  }), /missing component or pin/);
  assert.equal(history.project, initial);

  const changed = history.commit({ ...initial, parts: [{ ...initial.parts[0], rotation: 90 }] });
  assert.deepEqual(changed.parts[0].breadboard, normalizeBreadboardConfig(config));
  assert.equal(history.undo(), initial);
  assert.equal(history.redo(), changed);

  const old = { ...newProject(), parts: [{ id: 'old', componentId: 'breadboard', x: 0, y: 0 }] };
  assert.deepEqual(validateProject(old).parts[0].breadboard, normalizeBreadboardConfig());
  const ordinary = validateProject({
    ...newProject(), parts: [{ id: 'r', componentId: 'resistor', x: 0, y: 0, breadboard: { rows: 7 } }],
  });
  assert.equal(Object.hasOwn(ordinary.parts[0], 'breadboard'), false);
});

test('breadboard validation rejects invalid settings and contacts absent from this instance', () => {
  const project = config => ({ ...newProject(), parts: [board('board', config)] });
  for (const config of [null, [], 4, 'board']) assert.throws(() => validateProject(project(config)));
  for (const rows of [0, 101, 1.5, '30', null, NaN, Infinity]) {
    assert.throws(() => validateProject(project({ rows })), `rows=${String(rows)}`);
  }
  for (const name of ['topRails', 'bottomRails', 'leftRails', 'rightRails']) {
    for (const value of [-1, 5, 0.5, '2', null]) {
      assert.throws(() => validateProject(project({ [name]: value })), `${name}=${String(value)}`);
    }
  }
  for (const splitRails of [0, 1, 'false', null]) {
    assert.throws(() => validateProject(project({ splitRails })));
  }
  const valid = validateProject(project({ rows: 1, topRails: 0, bottomRails: 4, leftRails: 4, rightRails: 0 }));
  assert.equal(valid.parts[0].breadboard.rows, 1);
  for (const pinId of ['a2', 'right-1-1', 'top-1-1', 'bottom-5-1']) {
    assert.throws(() => validateProject({
      ...valid, wires: [wire('invalid', endpoint('board', 'a1'), endpoint('board', pinId))],
    }), /missing component or pin/);
  }
});

test('part resolution reuses a configuration across moved parts and notices mutable setting changes', () => {
  assert.equal(componentForPart(), undefined);
  assert.equal(componentForPart({ componentId: 'missing' }), undefined);
  const resistor = { componentId: 'resistor' };
  assert.equal(componentForPart(resistor), componentById.get('resistor'));
  const part = board('board', { ...bare });
  const component = componentForPart(part);
  assert.equal(componentForPart(part), component);
  assert.equal(componentForPart({ ...part, x: 150, rotation: 90 }), component);
  part.breadboard.rows = 5;
  const extended = componentForPart(part);
  assert.notEqual(extended, component);
  assert.equal(pinById(component, 'a5'), undefined);
  assert.ok(pinById(extended, 'a5'));
});

test('continuity traverses breadboard strips and rails transitively without joining the trench or other boards', () => {
  const config = { rows: 4, topRails: 1, bottomRails: 1, leftRails: 2, rightRails: 1, splitRails: false };
  const project = {
    ...newProject(),
    parts: [board('one', config), board('two', config, 90), board('untouched', config, 270),
      { id: 'r', componentId: 'resistor', x: 0, y: 0 }],
    wires: [
      wire('external', endpoint('r', '1'), endpoint('one', 'a1')),
      wire('rail-start', endpoint('one', 'e1'), endpoint('one', 'left-1-1')),
      wire('rail-end', endpoint('one', 'left-1-4'), endpoint('one', 'f2')),
      wire('bridge', endpoint('one', 'j2'), endpoint('two', 'a1')),
      wire('second-rail', endpoint('two', 'e1'), endpoint('two', 'top-1-1')),
    ],
  };
  const net = traceNet(project, endpoint('one', 'c1'));
  assert.deepEqual([...net.wireIds].sort(), ['bridge', 'external', 'rail-end', 'rail-start', 'second-rail']);
  for (const [partId, pinIds] of [['one', ['a1', 'b1', 'e1', 'left-1-2', 'f2', 'j2']], ['two', ['a1', 'd1', 'top-1-10']]]) {
    for (const pinId of pinIds) assert.ok(net.endpoints.has(`pin/${partId}/${pinId}`));
  }
  for (const [partId, pinId] of [['r', '2'], ['one', 'f1'], ['one', 'a2'], ['one', 'left-2-1'],
    ['one', 'right-1-1'], ['one', 'top-1-1'], ['two', 'bottom-1-1'], ['untouched', 'a1']]) {
    assert.equal(net.endpoints.has(`pin/${partId}/${pinId}`), false);
  }
  assert.deepEqual([...traceNet(project, { wireId: 'bridge' }).wireIds].sort(), [...net.wireIds].sort());
});

test('split rails keep both halves isolated, including odd and one-row boards', () => {
  const config = { rows: 5, topRails: 1, bottomRails: 1, leftRails: 1, rightRails: 1, splitRails: true };
  const project = { ...newProject(), parts: [board('board', config)] };
  const left = traceNet(project, endpoint('board', 'left-1-1'));
  assert.deepEqual([...left.endpoints.values()].map(pin => pin.pinId).sort(), ['left-1-1', 'left-1-2', 'left-1-3']);
  const top = traceNet(project, endpoint('board', 'top-1-5'));
  assert.deepEqual([...top.endpoints.values()].map(pin => pin.pinId).sort(), ['top-1-1', 'top-1-2', 'top-1-3', 'top-1-4', 'top-1-5']);
  project.wires = [wire('join-halves', endpoint('board', 'left-1-3'), endpoint('board', 'left-1-4'))];
  const joined = traceNet(project, endpoint('board', 'left-1-1'));
  assert.equal(joined.endpoints.size, 5);
  assert.deepEqual([...joined.wireIds], ['join-halves']);
  project.wires = [];
  project.parts = [board('board', { ...config, rows: 1 })];
  const single = traceNet(project, endpoint('board', 'right-1-1'));
  assert.deepEqual([...single.endpoints.values()], [endpoint('board', 'right-1-1')]);
});

test('configured surface holes resolve at every rotation without forced leads or body detours', () => {
  const config = { rows: 80, topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4, splitRails: false };
  for (const rotation of [0, 90, 180, 270]) {
    const part = board('board', config, rotation);
    const component = componentForPart(part);
    const project = { ...newProject(), parts: [part] };
    const position = endpointPositions(project);
    const local = pinById(component, 'j80');
    const cx = component.width / 2;
    const cy = component.height / 2;
    const dx = local.x - cx;
    const dy = local.y - cy;
    const [x, y] = rotation === 90 ? [-dy, dx] : rotation === 180 ? [-dx, -dy] : rotation === 270 ? [dy, -dx] : [dx, dy];
    const point = position(endpoint('board', 'j80'));
    assert.deepEqual(coords(point), { x: part.x + cx + x, y: part.y + cy + y });
    assert.equal(point.normal, undefined);
    assert.equal(point.bounds, undefined);

    const from = position(endpoint('board', 'e80'));
    const to = position(endpoint('board', 'f80'));
    assert.deepEqual(wireRoute(from, to).map(coords), [from, to].map(coords));
    assert.deepEqual(createAutoRouter(project)(from, to).map(coords), [from, to].map(coords));
    const crossing = [{ x: part.x + cx - 2000, y: part.y + cy }, { x: part.x + cx + 2000, y: part.y + cy }];
    assert.deepEqual(createAutoRouter(project)(...crossing), crossing);

    const routed = wire('surface', endpoint('board', 'a1'), endpoint('board', 'right-4-80'));
    const route = routeFor(routed, position);
    const saved = parseProject(serializeProject({ ...project, wires: [{ ...routed, fixedRoute: true, points: route.slice(1, -1).map(coords) }] }));
    assert.deepEqual(routeFor(saved.wires[0], endpointPositions(saved)).map(coords), route.map(coords));
  }
});

test('automatic routing still avoids a module placed on a breadboard face', () => {
  const module = { id: 'module', componentId: 'bme280', x: 200, y: -50 };
  const project = { ...newProject(), parts: [board('board', bare), module] };
  const { width, height } = componentForPart(module);
  const route = createAutoRouter(project)({ x: 0, y: 0 }, { x: 500, y: 0 });
  assert.ok(route.length > 2);
  for (let index = 1; index < route.length; index++) {
    const a = route[index - 1];
    const b = route[index];
    const intersects = a.y === b.y
      ? a.y > module.y - 9 && a.y < module.y + height + 9 && Math.max(a.x, b.x) > module.x - 9 && Math.min(a.x, b.x) < module.x + width + 9
      : a.x > module.x - 9 && a.x < module.x + width + 9 && Math.max(a.y, b.y) > module.y - 9 && Math.min(a.y, b.y) < module.y + height + 9;
    assert.equal(intersects, false);
  }
});

test('independent terminal cell counts and added contact IDs survive a saved-project round trip', () => {
  const source = { ...newProject(), parts: [board('custom', { ...bare, leftCells: 7, rightCells: 6 })],
    wires: [wire('custom-link', endpoint('custom', 'k1'), endpoint('custom', 'p2'))] };
  const restored = parseProject(serializeProject(source));
  assert.equal(restored.parts[0].breadboard.leftCells, 7);
  assert.equal(restored.parts[0].breadboard.rightCells, 6);
  assert.deepEqual(restored.wires[0].from, endpoint('custom', 'k1'));
  assert.deepEqual(restored.wires[0].to, endpoint('custom', 'p2'));
  assert.ok(pinById(componentForPart(restored.parts[0]), 'k1'));
  assert.ok(pinById(componentForPart(restored.parts[0]), 'p2'));
});
