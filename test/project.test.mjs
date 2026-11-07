import assert from "node:assert/strict";
import { test } from 'node:test';

import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject, validateProject } from '../src/model/project.js';

function branchedProject() {
  return {
    ...newProject("Resistor branch"),
    parts: [{ id: "resistor", componentId: "resistor", x: 0, y: 0 }],
    junctions: [{ id: "branch", x: 20, y: 25 }],
    wires: [{
      id: "wire",
      from: { partId: "resistor", pinId: "1" },
      to: { junctionId: "branch" },
      color: "#AbC",
      points: [{ x: 10, y: 25 }],
      fixedRoute: true,
    }],
  };
}

test("project history shares unchanged data and protects old snapshots", () => {
  const input = branchedProject();
  const history = new ProjectHistory(input);
  const initial = history.project;
  assert.equal(initial.wires[0].color, "#aabbcc");
  input.wires[0].points[0].x = 200;
  assert.equal(initial.wires[0].points[0].x, 10);
  assert.throws(() => { initial.wires[0].points[0].x = 300; }, TypeError);

  const moved = history.commit({
    ...initial,
    parts: [{ ...initial.parts[0], rotation: 90 }],
  });
  assert.equal(moved.wires, initial.wires);
  assert.equal(moved.junctions, initial.junctions);
  assert.equal(moved.parts[0].rotation, 90);
  assert.deepEqual(parseProject(serializeProject(moved)), moved);
  assert.equal(history.canUndo, true);
  assert.equal(history.undo(), initial);
  assert.equal(history.canUndo, false);
  assert.equal(history.canRedo, true);
  assert.equal(history.redo(), moved);
  assert.equal(history.canRedo, false);
});

test("reused wires still require valid project endpoints", () => {
  const history = new ProjectHistory(branchedProject());
  const initial = history.project;
  const moved = history.commit({ ...initial, title: "Renamed branch" });
  history.undo();

  assert.throws(() => history.commit({ ...initial, parts: [] }), /missing component or pin/);
  assert.throws(() => history.replace({ ...initial, junctions: [] }), /missing junction/);
  assert.throws(() => history.commit({ ...initial, wires: [initial.wires[0], initial.wires[0]] }), /duplicated/);
  assert.equal(history.project, initial);
  assert.equal(history.redo(), moved);

  history.undo();
  const replacement = history.commit({ ...initial, title: "Another edit" });
  assert.equal(history.redo(), null);
  assert.equal(history.project, replacement);
  history.replace(newProject());
  assert.equal(history.undo(), null);
  assert.equal(history.redo(), null);
});

test("sparse records and waypoints cannot pass validation", () => {
  const project = branchedProject();
  assert.throws(() => validateProject({ ...project, parts: new Array(1) }), /Component 1 must be an object/);
  project.wires[0].points = new Array(1);
  assert.throws(() => validateProject(project), /waypoint 1 must be an object/);
});
