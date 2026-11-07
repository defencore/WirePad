import { terminalNumber } from "../model/component-pins.js";

const GRID = 2.54;
const PIN_LENGTH = 5.08;
const path = (...points) => ({ points });
const rectangle = (left, top, right, bottom, background = false) => ({
  rectangle: [left, top, right, bottom], background,
});
const circle = (x, y, radius) => ({ circle: [x, y, radius] });
const arrow = (tail, tip, first, second) => [path(tail, tip), path(first, tip, second)];
const line = (x1, y1, x2, y2) => path([x1, y1], [x2, y2]);

const diode = [
  path([1.27, -2.54], [-1.27, 0], [1.27, 2.54], [1.27, -2.54]),
  line(-1.27, -2.54, -1.27, 2.54),
];

const coil = Array.from({ length: 4 }, (_, index) => {
  const center = -1.905 + index * 1.27;
  const points = Array.from({ length: 9 }, (_, step) => {
    const angle = Math.PI - step * Math.PI / 8;
    return [center + Math.cos(angle) * 0.635, -Math.sin(angle) * 1.27];
  });
  return path(...points);
});

const inlineSymbols = {
  resistor: { end: 2.54, shapes: [rectangle(-2.54, -1.27, 2.54, 1.27)] },
  capacitor: { end: 1.27, shapes: [line(-1.27, -2.54, -1.27, 2.54), line(1.27, -2.54, 1.27, 2.54)] },
  electrolytic: { end: 1.27, shapes: [
    line(-1.27, -2.54, -1.27, 2.54), path([1.8, -2.54], [1.27, -1.27], [1.27, 1.27], [1.8, 2.54]),
    line(-3.2, -2.5, -1.9, -2.5), line(-2.55, -3.15, -2.55, -1.85),
  ] },
  inductor: { end: 2.54, shapes: coil },
  "ferrite-bead": { end: 2.54, shapes: [
    path([-1.1, 1.65], [1.55, -1.65], [2.35, -1], [-0.3, 2.3], [-1.1, 1.65]),
    line(-2.54, 0, 0.22, 0), line(1.6, 0, 2.54, 0),
  ] },
  diode: { end: 1.27, shapes: diode },
  led: { end: 1.27, shapes: [
    ...diode,
    ...arrow([-0.7, -3], [1.2, -4.9], [0.3, -4.75], [1.05, -4]),
    ...arrow([1.2, -3], [3.1, -4.9], [2.2, -4.75], [2.95, -4]),
  ] },
  button: { end: 2.54, shapes: [
    circle(-2.12, 0, 0.42), circle(2.12, 0, 0.42),
    line(-2.5, -1.5, 2.5, -1.5), line(0, -1.5, 0, -2.9),
    line(-1.1, -2.9, 1.1, -2.9),
  ] },
  battery: { end: 2.54, shapes: [
    line(-2.54, -2.54, -2.54, 2.54), line(-0.85, -1.27, -0.85, 1.27),
    line(0.85, -2.54, 0.85, 2.54), line(2.54, -1.27, 2.54, 1.27),
    line(-4.8, -2.54, -3.5, -2.54), line(-4.15, -3.19, -4.15, -1.89),
  ] },
};

const transistorSymbols = {
  npn: {
    pins: ["b", "c", "e"],
    shapes: [
      line(-1.27, -2.54, -1.27, 2.54),
      path([2.54, -3.81], [2.54, -2.54], [-1.27, -0.76]),
      path([-1.27, 0.76], [2.54, 2.54], [2.54, 3.81]),
      path([0.7, 2.65], [1.85, 2.22], [1.25, 1.18]),
    ],
  },
  "nmos-basic": {
    pins: ["g", "d", "s"],
    shapes: [
      path([-1.27, 0], [-1.27, -2.54], [-0.76, -2.54]),
      ...[-1.78, 0, 1.78].map((y) => line(0, y - 0.64, 0, y + 0.64)),
      path([2.54, -3.81], [2.54, -1.78], [0, -1.78]),
      path([0, 1.78], [2.54, 1.78], [2.54, 3.81]),
      ...arrow([2.54, 0], [0, 0], [0.9, -0.6], [0.9, 0.6]),
      line(2.54, 0, 2.54, 1.78),
    ],
  },
};

function mosfetSymbol(pChannel) {
  const direction = pChannel ? -1 : 1;
  const barrier = -direction * 0.95;
  const base = direction * 0.75;
  const bodyArrow = pChannel
    ? arrow([0, 0], [1.7, 0], [1.05, -0.47], [1.05, 0.47])
    : arrow([1.7, 0], [0.35, 0], [0.95, -0.47], [0.95, 0.47]);
  return {
    pins: ["g", "d", "s"],
    shapes: [
      line(-1.27, -2.54, -1.27, 2.54),
      ...[-1.78, 0, 1.78].map(y => line(0, y - 0.64, 0, y + 0.64)),
      path([0, -1.78], [2.54, -1.78], [2.54, -3.81]),
      path([0, 1.78], [2.54, 1.78], [2.54, 3.81]),
      path([0, 0], [2.54, 0], [2.54, 1.78]),
      ...bodyArrow,
      path([2.54, -3.81], [5.08, -3.81], [5.08, Math.min(barrier, base)]),
      path([2.54, 3.81], [5.08, 3.81], [5.08, Math.max(barrier, base)]),
      path([4.19, base], [5.08, barrier], [5.97, base], [4.19, base]),
      line(4.19, barrier, 5.97, barrier),
    ],
  };
}

const mosfetSymbols = { nmos: mosfetSymbol(false), pmos: mosfetSymbol(true) };
const toggleSymbols = {
  "toggle-spst": { poles: 1, throws: 1 },
  "toggle-spdt": { poles: 1, throws: 2 },
  "toggle-spdt-center-off": { poles: 1, throws: 2, centerOff: true },
  "toggle-dpdt": { poles: 2, throws: 2 },
  "toggle-dpdt-center-off": { poles: 2, throws: 2, centerOff: true },
};

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
