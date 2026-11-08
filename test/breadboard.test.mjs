import assert from "node:assert/strict";
import { test } from 'node:test';

import {
  BREADBOARD_DEFAULTS, breadboardArt, breadboardFootprint,
  createBreadboard, normalizeBreadboardConfig,
} from "../src/catalog/families/catalog-breadboard.js";

import { componentById } from "../src/catalog/index.js";
const breadboardComponent = componentById.get("breadboard");

const noRails = { topRails: 0, bottomRails: 0, leftRails: 0, rightRails: 0 };
const connection = (component, id) => component.internalConnections.find(group => group.includes(id));

test("breadboard settings default canonically and reject coerced or out-of-range values", () => {
  assert.deepEqual(normalizeBreadboardConfig(), BREADBOARD_DEFAULTS);
  assert.deepEqual(normalizeBreadboardConfig({ rows: 1, splitRails: true }), {
    ...BREADBOARD_DEFAULTS, rows: 1, splitRails: true,
  });
  const settings = { rows: 12, leftRails: 1 };
  const snapshot = { ...settings };
  normalizeBreadboardConfig(settings);
  assert.deepEqual(settings, snapshot);

  for (const value of [null, [], 0, false, "30"]) {
    assert.throws(() => normalizeBreadboardConfig(value), TypeError);
  }
  for (const rows of [0, 101, 1.5, "30", true, null, NaN, Infinity]) {
    assert.throws(() => normalizeBreadboardConfig({ rows }), RangeError);
  }
  for (const key of ["topRails", "bottomRails", "leftRails", "rightRails"]) {
    for (const value of [-1, 5, 1.5, "2", false, null]) {
      assert.throws(() => normalizeBreadboardConfig({ [key]: value }), RangeError);
    }
  }
  for (const splitRails of [0, 1, "false", null]) {
    assert.throws(() => normalizeBreadboardConfig({ splitRails }), TypeError);
  }
});

test("each five-hole strip is isolated from the next row and the opposite side of the trench", () => {
  const component = createBreadboard({ ...noRails, rows: 2 });
  assert.equal(component.pins.length, 20);
  assert.deepEqual(connection(component, "a1"), ["a1", "b1", "c1", "d1", "e1"]);
  assert.deepEqual(connection(component, "j1"), ["f1", "g1", "h1", "i1", "j1"]);
  assert.deepEqual(connection(component, "a2"), ["a2", "b2", "c2", "d2", "e2"]);
  assert.notEqual(connection(component, "e1"), connection(component, "f1"));
  assert.notEqual(connection(component, "e1"), connection(component, "e2"));
});

test("all four rail orientations stay independent and split into electrically separate halves", () => {
  const config = { rows: 5, topRails: 2, bottomRails: 1, leftRails: 2, rightRails: 1 };
  const continuous = createBreadboard(config);
  assert.equal(connection(continuous, "top-1-1").length, 10);
  assert.equal(connection(continuous, "left-1-1").length, 5);
  assert.equal(connection(continuous, "left-1-1"), connection(continuous, "left-1-5"));
  assert.notEqual(connection(continuous, "top-1-1"), connection(continuous, "top-2-1"));
  assert.notEqual(connection(continuous, "left-1-1"), connection(continuous, "left-2-1"));
  assert.notEqual(connection(continuous, "top-1-1"), connection(continuous, "bottom-1-1"));
  assert.notEqual(connection(continuous, "left-1-1"), connection(continuous, "a1"));

  const split = createBreadboard({ ...config, splitRails: true });
  for (const side of ["top", "bottom"]) {
    assert.deepEqual(connection(split, `${side}-1-1`), [1, 2, 3, 4, 5].map(hole => `${side}-1-${hole}`));
    assert.deepEqual(connection(split, `${side}-1-10`), [6, 7, 8, 9, 10].map(hole => `${side}-1-${hole}`));
  }
  for (const side of ["left", "right"]) {
    assert.deepEqual(connection(split, `${side}-1-1`), [1, 2, 3].map(hole => `${side}-1-${hole}`));
    assert.deepEqual(connection(split, `${side}-1-5`), [4, 5].map(hole => `${side}-1-${hole}`));
  }
  const singleRow = createBreadboard({ rows: 1, splitRails: true });
  assert.deepEqual(connection(singleRow, "left-1-1"), ["left-1-1"]);
  assert.ok(singleRow.internalConnections.every(group => group.length));
});

test("expanding rail counts preserves every existing hole ID, terminal and canvas position", () => {
  const original = createBreadboard({ rows: 4, topRails: 1, bottomRails: 1, leftRails: 1, rightRails: 1 });
  const expanded = createBreadboard({ rows: 4, topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4 });
  const expandedPins = new Map(expanded.pins.map(pin => [pin.id, pin]));
  for (const { id, number, x, y } of original.pins) {
    const pin = expandedPins.get(id);
    assert.deepEqual([pin.id, pin.number, pin.x, pin.y], [id, number, x, y]);
  }

  const longer = createBreadboard({ rows: 6, topRails: 1, bottomRails: 1, leftRails: 1, rightRails: 1 });
  const longerPins = new Map(longer.pins.map(pin => [pin.id, pin]));
  for (const pin of original.pins) {
    const next = longerPins.get(pin.id);
    assert.equal(next.number, pin.number);
    assert.equal(next.x, pin.x);
    assert.equal(next.y, pin.y + (pin.id.startsWith("bottom-") ? 32 : 0));
  }
});

test("the default board and maximum board expose a unique interior contact for every connected hole", () => {
  assert.equal(breadboardComponent.pins.length, 420);
  assert.deepEqual(breadboardComponent.breadboard, BREADBOARD_DEFAULTS);
  const maximum = createBreadboard({ rows: 100, topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4, splitRails: true });
  assert.equal(maximum.pins.length, 1880);
  assert.equal(new Set(maximum.pins.map(pin => pin.id)).size, 1880);
  assert.equal(new Set(maximum.pins.map(pin => pin.number)).size, 1880);
  assert.equal(new Set(maximum.pins.map(pin => `${pin.x},${pin.y}`)).size, 1880);
  assert.equal(maximum.surface, true);
  for (const pin of maximum.pins) {
    assert.equal(pin.surface, true);
    assert.ok(pin.x > 0 && pin.x < maximum.width && pin.y > 0 && pin.y < maximum.height);
  }
  const membership = maximum.internalConnections.flat();
  assert.equal(membership.length, 1880);
  assert.deepEqual(new Set(membership), new Set(maximum.pins.map(pin => pin.id)));
  assert.ok(maximum.internalConnections.every(group => group.length));
  for (const labels of [false, true]) {
    const art = breadboardArt(maximum, labels);
    assert.ok(art.length < 300000, "Maximum board artwork remains compact.");
    assert.doesNotMatch(art, /NaN|undefined|Infinity/);
  }
});

test("the reference footprint preserves 2.54 mm contact spacing and the 7.62 mm trench crossing", () => {
  const component = createBreadboard({ ...noRails, rows: 3 });
  const footprint = breadboardFootprint(component);
  const pads = new Map(footprint.pads.map(pad => [pad.id, pad]));
  assert.equal(pads.size, component.pins.length);
  assert.ok(Math.abs(pads.get("b1").x - pads.get("a1").x - 2.54) < 1e-8);
  assert.ok(Math.abs(pads.get("f1").x - pads.get("e1").x - 7.62) < 1e-8);
  assert.ok(Math.abs(pads.get("a2").y - pads.get("a1").y - 2.54) < 1e-8);
  assert.match(footprint.note, /Representative off-board/);
});

test('terminal cell banks resize independently with stable identities and isolated connectivity', () => {
  const board = createBreadboard({ ...noRails, rows: 2, leftCells: 7, rightCells: 3 });
  assert.equal(board.pins.length, 20);
  assert.deepEqual(connection(board, 'a1'), ['a1', 'b1', 'c1', 'd1', 'e1', 'k1', 'l1']);
  assert.deepEqual(connection(board, 'f1'), ['f1', 'g1', 'h1']);
  assert.notEqual(connection(board, 'l1'), connection(board, 'f1'));
  assert.notEqual(connection(board, 'a1'), connection(board, 'a2'));
  const pins = new Map(board.pins.map(pin => [pin.id, pin]));
  assert.equal(pins.get('f1').x - pins.get('l1').x, 48);
  assert.equal(pins.get('a1').number, 'A1');
  assert.equal(pins.get('f1').number, 'F1');
  const pads = new Map(breadboardFootprint(board).pads.map(pin => [pin.id, pin]));
  assert.ok(Math.abs(pads.get('f1').x - pads.get('l1').x - 7.62) < 1e-8);
  for (const key of ['leftCells', 'rightCells']) for (const value of [0, 51, 1.5, '5', null, true]) {
    assert.throws(() => normalizeBreadboardConfig({ [key]: value }), RangeError);
  }
});

test('expanded left and right banks have unique pad numbers and bounded physical artwork', () => {
  const board = createBreadboard({ rows: 100, leftCells: 10, rightCells: 10,
    topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4, splitRails: true });
  assert.equal(board.pins.length, 2960);
  assert.equal(new Set(board.pins.map(pin => pin.id)).size, 2960);
  assert.equal(new Set(board.pins.map(pin => pin.number)).size, 2960);
  assert.ok(board.pins.every(pin => pin.x > 0 && pin.x < board.width && pin.y > 0 && pin.y < board.height));
  assert.deepEqual(new Set(board.internalConnections.flat()), new Set(board.pins.map(pin => pin.id)));
  for (const labels of [false, true]) assert.doesNotMatch(breadboardArt(board, labels), /NaN|undefined|Infinity/);
});
