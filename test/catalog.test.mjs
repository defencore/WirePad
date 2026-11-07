import assert from "node:assert/strict";
import { test } from 'node:test';

import { componentArt, componentById, components } from '../src/catalog/index.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';
import { kicadFootprint, kicadModel, kicadSymbol } from '../src/assets/kicad.js';
import { parseProject } from '../src/model/project.js';
import { version1Contacts } from '../src/catalog/data/contact-layout-v1.js';

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
      assert.ok(pin.surface || pin.x === 0 || pin.x === width || pin.y === 0 || pin.y === height, `${id}/${pin.id}`);
    }

    const { pads } = footprintLayout(component);
    assert.deepEqual(new Map(pads.map(pad => [pad.id, pad.number])), terminals, id);
    for (const pad of pads) {
      assert.equal(pad.number, terminals.get(pad.id), `${id}/${pad.id}`);
      assert.ok(Number.isFinite(pad.x) && Number.isFinite(pad.y), `${id}/${pad.id}`);
      assert.ok(pad.width > 0 && pad.height > 0, `${id}/${pad.id}`);
      assert.ok(pad.smd ? pad.drill === null : pad.drill > 0, `${id}/${pad.id}`);
    }
    const symbol = kicadSymbol(component);
    const footprint = kicadFootprint(component);
    const numbers = [...symbol.matchAll(/\(number "([^"]+)"/g)].map(([, number]) => number);
    const padNumbers = [...footprint.matchAll(/^\s*\(pad "([^"]+)"/gm)].map(([, number]) => number);
    assert.deepEqual(numbers.sort(), [...terminals.values()].sort(), id);
    assert.deepEqual(padNumbers, pads.map(pad => pad.number), id);
    assert.ok(symbol.includes(`(property "Footprint" "WirePad:${id}"`), id);
    assert.ok(footprint.includes(`(model "\${KIPRJMOD}/WirePad.3dshapes/${id}.wrl"`), id);
    const model = kicadModel(component);
    assert.match(model, /^#VRML V2\.0 utf8\n/, id);
    assert.match(model, /\bShape\s*\{/, id);
    assert.match(componentArt(component), /^<svg /, id);
    assert.match(componentArt(component, { labels: false }), /^<svg /, id);
  }
});

test("carrier footprints use the published header positions", () => {
  const padPositions = (id, number) => footprintLayout(componentById.get(id)).pads
    .filter(pad => pad.number === number).map(({ x, y }) => [x, y]);

  assert.deepEqual(padPositions("esp32-s3", "J1.1"), [[-11.43, -29.97]]);
  assert.deepEqual(padPositions("esp32-s3", "J3.1"), [[11.43, -29.97]]);
  assert.deepEqual(padPositions("bme280", "1"), [[-7.62, 6.35]]);
  assert.deepEqual(padPositions("ads1115", "1"), [[-6.35, 6.35]]);
  assert.deepEqual(padPositions("ads1115", "7"), [[-6.35, -6.35]]);
  const ina219 = componentById.get("ina219");
  assert.equal(ina219.pins.find(pin => pin.id === "vin-plus").number, "6");
  assert.equal(ina219.pins.find(pin => pin.id === "vin-minus").number, "5");
  assert.deepEqual(padPositions("ina219", "5").map(([, y]) => y), [7.62, -6.35]);
  assert.deepEqual(padPositions("ina219", "6").map(([, y]) => y), [7.62, -6.35]);
});

test("Raspberry Pi GPIO and Pololu UART carriers keep their component-side pin order", () => {
  const pi = componentById.get("raspberry-pi-5");
  const piPads = footprintLayout(pi).pads;
  assert.equal(piPads.length, 40);
  assert.deepEqual(piPads.filter(pad => ["1", "2", "40"].includes(pad.number)).map(({ label, x, y }) => [label, x, y]), [
    ["3V3", -34.13, -23.23], ["5V", -34.13, -25.77], ["GPIO21", 14.13, -25.77],
  ]);

  const adapter = componentById.get("pololu-cp2102n-usb-uart");
  const serialPads = footprintLayout(adapter).pads;
  const endHeader = serialPads.filter(pad => pad.y === 10.16).sort((a, b) => a.x - b.x);
  assert.deepEqual(endHeader.map(pad => pad.id), ["gnd", "cts", "vbus", "tx", "rx", "rts"]);
  for (const id of ["cts", "vbus", "tx", "rx"]) {
    const terminal = adapter.pins.find(pin => pin.id === id);
    assert.deepEqual(serialPads.filter(pad => pad.id === id).map(pad => pad.number), [terminal.number, terminal.number]);
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

test("LC filter symbols connect both return terminals to the ground rail", () => {
  const filter = componentById.get("lc-filter");
  const symbol = kicadSymbol(filter);
  assert.match(symbol, /\(xy -2\.54 -5\.08\) \(xy 5\.08 -5\.08\)/);
  for (const x of ["-2.54", "2.54"]) {
    assert.ok(symbol.includes(`(at ${x} -7.62 90) (length 2.54)`));
  }
});

test("LM1117 exports both VOUT lands under the same schematic terminal number", () => {
  const regulator = componentById.get("lm1117-3-3-sot223");
  assert.equal(regulator.pins.find(pin => pin.id === "vout").number, "2");
  const outputLands = footprintLayout(regulator).pads.filter(pad => pad.number === "2");
  assert.equal(outputLands.length, 2);
  assert.ok(outputLands[0].x < 0 && outputLands[1].x > 0);
  assert.equal([...kicadFootprint(regulator).matchAll(/\(pad "2" smd /g)].length, 2);
});

test("the original Heltec V4 identifier migrates its saved V4.2 connections onto physical contacts", () => {
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
  assert.deepEqual(heltec.pins.map(({ id, number, x, y }) => {
    const prior = version1Contacts[heltec.id][id];
    return { id, number, x: prior?.[0] ?? x, y: prior?.[1] ?? y };
  }), [...headerPins, ...auxiliaryPins]);
  assert.equal(heltec.contactLayout, 'physical');
  const project = {
    version: 1, title: "Saved Heltec diagram",
    parts: [{ id: "board", componentId: "heltec-v4", x: 10, y: 20 }],
    wires: [{ id: "wire", from: { partId: "board", pinId: "gpio18" }, to: { partId: "board", pinId: "gpio19" }, color: "#1177cc" }],
  };
  assert.deepEqual(parseProject(JSON.stringify(project)), { ...project, version: 2 });
});
