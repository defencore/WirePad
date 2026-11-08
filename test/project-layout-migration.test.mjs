import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { componentById } from '../src/catalog/index.js';
import { version1Contacts } from '../src/model/data/contact-layout-v1.js';
import { endpointPositions } from '../src/geometry/parts.js';
import { routeFor } from '../src/geometry/routing.js';
import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject, validateProject } from '../src/model/project.js';

function oldDiagram(rotation = 0) {
  return {
    version: 1, title: 'Existing board wiring',
    parts: [{ id: 'sensor', componentId: 'bme280', x: 100, y: 200, rotation }],
    junctions: [{ id: 'outside', x: -100, y: 218 }],
    wires: [{ id: 'wire', color: '#12946d', from: { partId: 'sensor', pinId: 'vin' }, to: { junctionId: 'outside' },
      fixedRoute: true, points: [{ x: 85, y: 218 }, { x: 60, y: 218 }, { x: 60, y: 260 }, { x: -100, y: 260 }] }],
  };
}

test('version-1 imports retire obsolete bank stubs while preserving outside routes and terminal identities', () => {
  const input = oldDiagram();
  const saved = JSON.stringify(input);
  const migrated = parseProject(saved);
  assert.equal(migrated.version, 2);
  assert.deepEqual(migrated.parts, input.parts);
  assert.deepEqual(migrated.junctions, input.junctions);
  assert.deepEqual(migrated.wires[0].from, input.wires[0].from);
  assert.deepEqual(migrated.wires[0].to, input.wires[0].to);
  assert.deepEqual(migrated.wires[0].points, input.wires[0].points.slice(1));
  assert.equal(migrated.wires[0].id, input.wires[0].id);
  assert.equal(migrated.wires[0].color, input.wires[0].color);
  assert.equal(JSON.stringify(input), saved);
  const route = routeFor(migrated.wires[0], endpointPositions(migrated));
  assert.equal(route[0].x, 127);
  assert.equal(route[0].y, 225);
  assert.deepEqual(route.at(-1), { x: -100, y: 218 });
  const internal = oldDiagram();
  internal.wires[0].points = [{ x: 160, y: 250 }, { x: 60, y: 250 }];
  assert.deepEqual(parseProject(JSON.stringify(internal)).wires[0].points, internal.wires[0].points, 'Keep intentional interior waypoints away from the obsolete lead.');
});

test('a version-2 round trip and history do not repeatedly migrate already physical routes', () => {
  const project = { ...oldDiagram(), version: 2 };
  const history = new ProjectHistory(project);
  assert.deepEqual(history.project.wires[0].points, project.wires[0].points);
  assert.deepEqual(parseProject(serializeProject(history.project)), history.project);
  const changed = history.commit({ ...history.project, title: 'Edited' });
  assert.deepEqual(changed.wires[0].points, project.wires[0].points);
  assert.deepEqual(history.undo().wires[0].points, project.wires[0].points);
  assert.equal(newProject().version, 2);
  assert.throws(() => validateProject({ ...project, version: 3 }), /unsupported/);
});

test('unmodified part geometry and both-side migrated endpoints keep valid orthogonal routes at every rotation', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const input = oldDiagram(rotation);
    input.parts.push({ id: 'other', componentId: 'max3485', x: 800, y: 500, rotation });
    input.wires[0].to = { partId: 'other', pinId: 'vcc' };
    const project = parseProject(JSON.stringify(input));
    const position = endpointPositions(project), route = routeFor(project.wires[0], position);
    assert.deepEqual(route[0], position(project.wires[0].from));
    assert.deepEqual(route.at(-1), position(project.wires[0].to));
    assert.ok(route.every((point, index) => !index || point.x === route[index - 1].x || point.y === route[index - 1].y));
    assert.deepEqual(parseProject(serializeProject(project)), project);
  }
});

test('the migration manifest reconstructs every published version-1 geometry exactly', () => {
  const fixture = JSON.parse(readFileSync(new URL('./fixtures/catalog-geometry.json', import.meta.url)));
  for (const entry of fixture) {
    const component = componentById.get(entry.id);
    const original = version1Contacts[entry.id];
    const geometry = { width: component.width, height: component.height, pins: component.pins.map(({ id, x, y }) => {
      const prior = original?.[id];
      return { id, x: prior?.[0] ?? x, y: prior?.[1] ?? y };
    }) };
    assert.equal(createHash('sha256').update(JSON.stringify(geometry)).digest('hex'), entry.geometry, entry.id);
    assert.equal(Boolean(original), Boolean(entry.physicalGeometry), entry.id);
  }
});
