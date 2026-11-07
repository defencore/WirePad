import assert from 'node:assert/strict';
import { test } from 'node:test';

import { nudgeTarget } from '../src/editor/nudge.js';
import { newProject, projectSnapshot } from '../src/model/project.js';
import { POSITION_LIMIT } from '../src/model/limits.js';
import { routeFor } from '../src/geometry/routing.js';
import { endpointPositions } from '../src/geometry/parts.js';

const point = (x, y) => ({ x, y });
const fixture = () => projectSnapshot({
  ...newProject(),
  parts: [{ id: 'board', componentId: 'resistor', x: 20, y: 40 }],
  junctions: [{ id: 'a', x: 0, y: 0 }, { id: 'b', x: 120, y: 0 }],
  wires: [{ id: 'wire', from: { junctionId: 'a' }, to: { junctionId: 'b' }, color: '#2c83d9' }],
});

test('non-drag movement clamps components and junctions without mutating the saved snapshot', () => {
  const project = fixture();
  const moved = nudgeTarget(project, { kind: 'part', id: 'board' }, 8, -8);
  assert.deepEqual(moved.project.parts[0], { ...project.parts[0], x: 28, y: 32 });
  assert.deepEqual(project.parts[0], { id: 'board', componentId: 'resistor', x: 20, y: 40 });
  const junction = nudgeTarget(project, { kind: 'junction', id: 'a' }, POSITION_LIMIT + 100, 0);
  assert.equal(junction.project.junctions[0].x, POSITION_LIMIT);
  assert.equal(nudgeTarget(projectSnapshot(junction.project), junction.target, 8, 0), null);
});

test('repeated segment nudges retain the same movement axis and both electrical endpoints', () => {
  let project = fixture();
  const original = project.wires[0];
  let target = { kind: 'segment', wireId: 'wire', index: 0, axis: 'y', point: point(60, 0) };
  assert.equal(nudgeTarget(project, target, 8, 0), null);
  for (let step = 0; step < 3; step++) {
    const moved = nudgeTarget(project, target, 0, 8);
    assert.ok(moved);
    project = projectSnapshot(moved.project);
    target = moved.target;
    assert.equal(target.kind, 'segment');
    assert.equal(target.axis, 'y');
    assert.equal(target.point.y, (step + 1) * 8);
    assert.deepEqual(project.wires[0].from, original.from);
    assert.deepEqual(project.wires[0].to, original.to);
    const route = routeFor(project.wires[0], endpointPositions(project));
    for (let index = 1; index < route.length; index++) {
      assert.notEqual(route[index].x === route[index - 1].x, route[index].y === route[index - 1].y);
    }
  }
});

test('a non-drag bend nudge preserves a movable target for the next activation', () => {
  const project = projectSnapshot({
    ...fixture(),
    wires: [{ ...fixture().wires[0], fixedRoute: true, points: [point(40, 0), point(40, 30), point(90, 30), point(90, 0)] }],
  });
  const moved = nudgeTarget(project, { kind: 'bend', wireId: 'wire', index: 2, point: point(40, 30) }, 4, 3);
  assert.ok(moved);
  assert.deepEqual(moved.target.point, point(44, 33));
  assert.equal(moved.target.kind, 'bend');
  assert.ok(nudgeTarget(projectSnapshot(moved.project), moved.target, 4, 3));
  assert.equal(nudgeTarget(project, { kind: 'from', wireId: 'wire' }, 4, 3), null);
});
