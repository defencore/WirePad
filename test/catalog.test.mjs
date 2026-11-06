import assert from "node:assert/strict";
import { test } from "node:test";

import { componentArt, componentById, components } from "../src/catalog.js";
import { footprintLayout } from "../src/footprints.js";
import { kicadFootprint, kicadSymbol } from "../src/kicad.js";
import { parseProject } from "../src/project.js";

test("each library component maps its canvas contacts to KiCad pads", () => {
  assert.equal(componentById.size, components.length);
  for (const component of components) {
    const { id, pins, width, height } = component;
    const terminals = new Map(pins.map(pin => [pin.id, pin.number]));
    assert.equal(terminals.size, pins.length, id);
    assert.equal(new Set(terminals.values()).size, pins.length, id);
    assert.equal(new Set(pins.map(pin => `${pin.x},${pin.y}`)).size, pins.length, id);
    for (const pin of pins) {
      assert.ok(pin.x >= 0 && pin.x <= width && pin.y >= 0 && pin.y <= height, `${id}/${pin.id}`);
      assert.ok(pin.x === 0 || pin.x === width || pin.y === 0 || pin.y === height, `${id}/${pin.id}`);
    }

    const { pads } = footprintLayout(component);
    assert.deepEqual(new Map(pads.map(pad => [pad.id, pad.number])), terminals, id);
    for (const pad of pads) {
      assert.ok(Number.isFinite(pad.x) && Number.isFinite(pad.y), `${id}/${pad.id}`);
      assert.ok(pad.width > 0 && pad.height > 0, `${id}/${pad.id}`);
      assert.ok(pad.smd ? pad.drill === null : pad.drill > 0, `${id}/${pad.id}`);
    }
    assert.match(componentArt(component), /^<svg /, id);
    assert.equal([...kicadSymbol(component).matchAll(/^\s*\(pin /gm)].length, pins.length, id);
  }
});

test("KiCad exports numbered SMD lands, including round and rounded XIAO contacts", () => {
  const xiao = componentById.get("xiao-nrf52840-plus");
  const footprint = kicadFootprint(xiao);
  assert.match(footprint, /\(attr smd\)/);
  assert.match(footprint, /\(pad "1" smd roundrect \(at -8\.255 -7\.62\) \(size 2\.032 0\.95\).*\(roundrect_rratio 0\.1\)/);
  assert.match(footprint, /\(pad "24" smd circle \(at -1\.27 -8\.5725\)/);
  assert.doesNotMatch(footprint, /\(drill /);
});

test("the original Heltec V4 identifier still resolves saved V4.2 wire anchors", () => {
  const heltec = componentById.get("heltec-v4");
  const legacyHeaders = [
    ["J2.", 0, "gnd 5v ve ve-2 gpio44 gpio43 reset gpio0 gpio36 gpio35 gpio34 gpio33 gpio47 gpio48 gpio26 gpio21 gpio20 gpio19"],
    ["J3.", 142, "gnd-2 3v3 3v3-2 gpio37 gpio46 gpio45 gpio42 gpio41 gpio40 gpio39 gpio38 gpio1 gpio2 gpio3 gpio4 gpio5 gpio6 gpio7"],
  ];
  const headerPins = legacyHeaders.flatMap(([prefix, x, ids]) => ids.split(" ").map((id, index) => ({
    id, number: `${prefix}${index + 1}`, x, y: 20 + index * 15,
  })));
  const auxiliaryPins = [18, 17, 16, 15].map((gpio, index) => ({
    id: `gpio${gpio}`, number: `X${index + 1}`, x: 26 + 30 * index, y: 330,
  }));
  assert.deepEqual(heltec.pins.map(({ id, number, x, y }) => ({ id, number, x, y })), [...headerPins, ...auxiliaryPins]);
  const project = {
    version: 1, title: "Saved Heltec diagram",
    parts: [{ id: "board", componentId: "heltec-v4", x: 10, y: 20 }],
    wires: [{ id: "wire", from: { partId: "board", pinId: "gpio18" }, to: { partId: "board", pinId: "gpio19" }, color: "#1177cc" }],
  };
  assert.deepEqual(parseProject(JSON.stringify(project)), project);
});
