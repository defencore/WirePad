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


export { circle, line, rectangle, coil, inlineSymbols, transistorSymbols, mosfetSymbols, toggleSymbols };
