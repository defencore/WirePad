import { terminalNumber } from "../model/component-pins.js";
import { circle, line, rectangle, coil, inlineSymbols, transistorSymbols, mosfetSymbols, toggleSymbols } from "./symbol-graphics.js";

const GRID = 2.54;
const PIN_LENGTH = 5.08;

function inlineLayout(component, design) {
  const [left, right] = component.pins.map((pin, index) => ({ ...pin, number: terminalNumber(pin, index) }))
    .sort((a, b) => a.x - b.x);
  return {
    shapes: design.shapes,
    pins: [
      { ...left, x: -7.62, y: 0, angle: 0, length: 7.62 - design.end },
      { ...right, x: 7.62, y: 0, angle: 180, length: 7.62 - design.end },
    ],
    bounds: [-9.5, -6.1, 9.5, 5.8],
    compact: true,
  };
}

function transistorLayout(component, design) {
  const terminals = [
    { x: -7.62, y: 0, angle: 0, length: 6.35 },
    { x: 2.54, y: -7.62, angle: 270, length: 3.81 },
    { x: 2.54, y: 7.62, angle: 90, length: 3.81 },
  ];
  const labels = [design.pins[0], design.pins[1], design.pins[2]].map((id) => ({
    b: "BASE", c: "COLLECTOR", e: "EMITTER", g: "GATE", d: "DRAIN", s: "SOURCE",
  })[id]);
  const pins = terminals.map((terminal, index) => {
    const pinIndex = component.pins.findIndex((pin) => (
      pin.id.toLowerCase() === design.pins[index] || pin.label.toUpperCase() === labels[index]
    ));
    const pin = component.pins[pinIndex];
    return { ...pin, ...terminal, number: terminalNumber(pin, pinIndex) };
  });
  return { shapes: design.shapes, pins, bounds: [-10, -9.5, 8, 9.5], compact: true };
}

function symbolTerminal(component, id, x, y, angle, length) {
  const index = component.pins.findIndex(pin => pin.id === id);
  const pin = component.pins[index];
  return { ...pin, x, y, angle, length, number: terminalNumber(pin, index) };
}

function toggleLayout(component, { poles, throws, centerOff }) {
  const pin = (id, x, y, angle) => symbolTerminal(component, id, x, y, angle, 2.54);
  const doublePole = poles === 2;
  const poleRows = doublePole ? [["a-", -5.08], ["b-", 5.08]] : [["", 0]];
  const throwRows = throws === 1 ? [0] : [-2.54, 2.54];
  const blade = throws === 1 ? [3.08, -1.85] : centerOff ? [3.35, 0] : [4.24, -2.32];
  const shapes = [];
  const pins = [];
  for (const [prefix, y] of poleRows) {
    pins.push(pin(`${prefix}common`, -7.62, y, 0));
    shapes.push(circle(-4.64, y, 0.44), line(-4.2, y, blade[0], y + blade[1]));
    throwRows.forEach((row, index) => {
      pins.push(pin(`${prefix}throw-${index + 1}`, 7.62, y + row, 180));
      shapes.push(circle(4.64, y + row, 0.44));
    });
  }
  if (doublePole) {
    for (const y of [-4.6, -2.6, -0.6, 1.4]) shapes.push(line(0, y, 0, y + 1.1));
  }
  const halfHeight = doublePole ? 9.5 : 4.6;
  return { pins, shapes, bounds: [-9.5, -halfHeight, 9.5, halfHeight], compact: true };
}

function filterLayout(component, pi) {
  const groundIds = component.pins.filter(pin => pin.id === "gnd" || pin.id === "gnd-2").map(pin => pin.id);
  const groundPositions = groundIds.map((_, index) => (index - (groundIds.length - 1) / 2) * 5.08);
  const capacitorPositions = pi ? [-5.08, 5.08] : [5.08];
  const shapes = [
    ...coil, line(-7.62, 0, -2.54, 0), line(2.54, 0, 7.62, 0),
    line(Math.min(capacitorPositions[0], groundPositions[0]), 5.08, 5.08, 5.08),
    ...capacitorPositions.flatMap(x => [
      line(x, 0, x, 2.12), line(x - 1.14, 2.12, x + 1.14, 2.12),
      line(x - 1.14, 3.17, x + 1.14, 3.17), line(x, 3.17, x, 5.08),
    ]),
  ];
  const pins = [
    symbolTerminal(component, "in", -12.7, 0, 0, 5.08),
    symbolTerminal(component, "out", 12.7, 0, 180, 5.08),
    ...groundIds.map((id, index) => symbolTerminal(component, id, groundPositions[index], 7.62, 90, 2.54)),
  ];
  return { pins, shapes, bounds: [-14.6, -4.5, 14.6, 9.5], compact: true };
}

function blockLayout(component) {
  const groups = [[], []];
  component.pins.forEach((pin, index) => {
    const side = pin.symbolPlacement ? Number(pin.symbolPlacement.side === "right") : Number(pin.x > component.width / 2);
    groups[side].push({ ...pin, number: terminalNumber(pin, index) });
  });
  const longest = groups.map((group) => Math.max(0, ...group.map(({ label }) => label.length)));
  const halfWidth = GRID * Math.max(4, Math.ceil((longest[0] + longest[1] + 7) / 9));
  const rows = Math.max(...groups.map((group) => group.length));
  const halfHeight = GRID * (Math.ceil((rows - 1) / 2) + 1);
  const pins = groups.flatMap((group, index) => {
    const direction = index === 0 ? -1 : 1;
    return group.sort((a, b) => (a.symbolPlacement?.order ?? a.y) - (b.symbolPlacement?.order ?? b.y) || a.x - b.x).map((pin, row) => ({
      ...pin,
      x: direction * (halfWidth + PIN_LENGTH),
      y: GRID * (row - Math.floor((rows - 1) / 2)),
      angle: index === 0 ? 0 : 180,
      length: PIN_LENGTH,
    }));
  });
  return {
    pins,
    shapes: [rectangle(-halfWidth, -halfHeight, halfWidth, halfHeight, true)],
    bounds: [-halfWidth - 7, -halfHeight - 2, halfWidth + 7, halfHeight + 2],
    compact: false,
  };
}

export function symbolLayout(component) {
  const inline = inlineSymbols[component.symbol];
  if (inline && component.pins.length === 2) return inlineLayout(component, inline);
  const transistor = mosfetSymbols[component.symbol] ?? transistorSymbols[component.symbol];
  if (transistor) return transistorLayout(component, transistor);
  const toggle = toggleSymbols[component.symbol];
  if (toggle) return toggleLayout(component, toggle);
  if (component.symbol === "lc-filter" || component.symbol === "pi-filter") {
    return filterLayout(component, component.symbol === "pi-filter");
  }
  return blockLayout(component);
}
