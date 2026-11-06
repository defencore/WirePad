import { footprintLayout } from "./footprints.js";

export { modelFor } from "./footprints.js";

const GRID = 2.54;
const PIN_LENGTH = 5.08;
const pinTypes = new Set([
  "input", "output", "bidirectional", "tri_state", "passive", "free",
  "unspecified", "power_in", "power_out", "open_collector", "open_emitter", "no_connect",
]);

const xml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
})[character]);
const quote = (value) => JSON.stringify(String(value));
const format = (value) => Number(value.toFixed(4));
const pinNumber = (pin, index) => String(pin.number ?? index + 1);
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
  nmos: {
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

function inlineLayout(component, design) {
  const [left, right] = component.pins.map((pin, index) => ({ ...pin, number: pinNumber(pin, index) }))
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
    return { ...pin, ...terminal, number: pinNumber(pin, pinIndex) };
  });
  return { shapes: design.shapes, pins, bounds: [-10, -9.5, 8, 9.5], compact: true };
}

function blockLayout(component) {
  const groups = [[], []];
  component.pins.forEach((pin, index) => {
    const side = pin.x <= component.width / 2 ? 0 : 1;
    groups[side].push({ ...pin, number: pinNumber(pin, index) });
  });
  const longest = groups.map((group) => Math.max(0, ...group.map(({ label }) => label.length)));
  const halfWidth = GRID * Math.max(4, Math.ceil((longest[0] + longest[1] + 7) / 9));
  const rows = Math.max(...groups.map((group) => group.length));
  const halfHeight = GRID * (Math.ceil((rows - 1) / 2) + 1);
  const pins = groups.flatMap((group, index) => {
    const direction = index === 0 ? -1 : 1;
    return group.sort((a, b) => a.y - b.y || a.x - b.x).map((pin, row) => ({
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

function symbolLayout(component) {
  const inline = inlineSymbols[component.id];
  if (inline && component.pins.length === 2) return inlineLayout(component, inline);
  const transistor = transistorSymbols[component.id];
  if (transistor) return transistorLayout(component, transistor);
  return blockLayout(component);
}

const svgLine = (x1, y1, x2, y2) => `<path d="M ${x1} ${y1} L ${x2} ${y2}"/>`;

function svgShape(shape) {
  if (shape.points) {
    return `<polyline points="${shape.points.map((point) => point.join(",")).join(" ")}"/>`;
  }
  if (shape.circle) {
    const [x, y, radius] = shape.circle;
    return `<circle cx="${x}" cy="${y}" r="${radius}"/>`;
  }
  const [x, y, right, bottom] = shape.rectangle;
  return `<rect x="${x}" y="${y}" width="${right - x}" height="${bottom - y}" fill="${shape.background ? "#fef2db" : "none"}"/>`;
}

function svgFrame(component, bounds, markup, label) {
  const [left, top, right, bottom] = bounds.map(format);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${left} ${top} ${format(right - left)} ${format(bottom - top)}" role="img" aria-label="${xml(component.name)} ${label}">${markup}</svg>`;
}

export function symbolPreview(component) {
  const layout = symbolLayout(component);
  const vectors = { 0: [1, 0], 90: [0, -1], 180: [-1, 0], 270: [0, 1] };
  const pins = layout.pins.map((pin) => {
    const [dx, dy] = vectors[pin.angle];
    const x = pin.x + dx * pin.length;
    const y = pin.y + dy * pin.length;
    const wire = `<g fill="none" stroke="#64748b" stroke-width=".16">${svgLine(pin.x, pin.y, x, y)}<circle cx="${pin.x}" cy="${pin.y}" r=".34" fill="#f8fafc"/></g>`;
    if (layout.compact) return wire;
    const anchor = dx === 1 ? "start" : "end";
    return `${wire}<text x="${x + dx * 0.75}" y="${y + 0.36}" font-size="1.05" fill="#334155" text-anchor="${anchor}">${xml(pin.label)}</text><text x="${(pin.x + x) / 2}" y="${y - 0.47}" font-size=".74" fill="#475569" text-anchor="middle">${xml(pin.number)}</text>`;
  }).join("");
  return svgFrame(component, layout.bounds,
    `<g fill="none" stroke="#9a4831" stroke-width=".23" stroke-linejoin="round" stroke-linecap="round">${layout.shapes.map(svgShape).join("")}</g><g font-family="ui-monospace, monospace">${pins}</g>`,
    "circuit symbol");
}

function kicadShape(shape) {
  const point = ([x, y]) => `${format(x)} ${format(-y)}`;
  const stroke = "(stroke (width 0.254) (type default))";
  const fill = `(fill (type ${shape.background ? "background" : "none"}))`;
  if (shape.points) {
    return `(polyline (pts ${shape.points.map((position) => `(xy ${point(position)})`).join(" ")}) ${stroke} ${fill})`;
  }
  if (shape.circle) {
    const [x, y, radius] = shape.circle;
    return `(circle (center ${point([x, y])}) (radius ${radius}) ${stroke} ${fill})`;
  }
  const [x, y, right, bottom] = shape.rectangle;
  return `(rectangle (start ${point([x, y])}) (end ${point([right, bottom])}) ${stroke} ${fill})`;
}

export function kicadSymbol(component) {
  const layout = symbolLayout(component);
  const effects = (size, hidden = false) => `(effects (font (size ${size} ${size}))${hidden ? " (hide yes)" : ""})`;
  const fields = [
    ["Reference", component.referencePrefix ?? "U", -layout.bounds[1] + 1, false],
    ["Value", component.name, layout.bounds[3] * -1 - 1, false],
    ["Footprint", `WirePad:${component.id}`, 0, true],
    ["Datasheet", typeof component.source === "string" ? component.source : component.source?.url ?? "", 0, true],
    ["Description", component.description ?? "", 0, true],
  ].map(([name, value, y, hidden]) => `    (property ${quote(name)} ${quote(value)} (at 0 ${format(y)} 0) ${effects(1.27, hidden)})`);
  const pins = layout.pins.map((pin) => {
    const type = pinTypes.has(pin.type) ? pin.type : "passive";
    return `      (pin ${type} line (at ${pin.x} ${format(-pin.y)} ${pin.angle}) (length ${format(pin.length)})
        (name ${quote(pin.label)} ${effects(1.016)})
        (number ${quote(pin.number)} ${effects(0.762)})
      )`;
  });
  return [
    "(kicad_symbol_lib (version 20231120) (generator wirepad)",
    `  (symbol ${quote(component.id)}`,
    layout.compact ? "    (pin_numbers (hide yes)) (pin_names (hide yes))" : "    (pin_names (offset 0.75))",
    "    (exclude_from_sim no) (in_bom yes) (on_board yes)",
    ...fields,
    `    (symbol ${quote(`${component.id}_0_1`)}`,
    ...layout.shapes.map((shape) => `      ${kicadShape(shape)}`),
    "    )",
    `    (symbol ${quote(`${component.id}_1_1`)}`,
    ...pins,
    "    )",
    "  )",
    ")",
    "",
  ].join("\n");
}

export function footprintNote(component) {
  return footprintLayout(component).note;
}

export function footprintPreview(component) {
  const layout = footprintLayout(component);
  const { width, height, halfWidth, halfHeight } = layout;
  const bounds = [-halfWidth - 2.1, -halfHeight - 2.1, halfWidth + 2.1, halfHeight + 2.1];
  const pads = layout.pads.map(({ number, x, y, width, height, drill, shape, cornerRatio }) => {
    const round = shape === "circle" || shape === "oval";
    const radius = shape === "roundrect" ? Math.min(width, height) * cornerRatio : 0.08;
    const copper = round
      ? `<ellipse cx="${x}" cy="${y}" rx="${width / 2}" ry="${height / 2}"/>`
      : `<rect x="${x - width / 2}" y="${y - height / 2}" width="${width}" height="${height}" rx="${radius}"/>`;
    const hole = drill ? `<circle cx="${x}" cy="${y}" r="${drill / 2}" fill="#0f172a"/>` : "";
    return `<g><title>Pad ${xml(number)}</title><g fill="#d89036" stroke="#f0b762" stroke-width=".1">${copper}</g>${hole}</g>`;
  }).join("");
  const [left, top, right, bottom] = bounds;
  return svgFrame(component, bounds, [
    `<rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" rx=".35" fill="#10222c"/>`,
    `<rect x="${-halfWidth - 0.25}" y="${-halfHeight - 0.25}" width="${halfWidth * 2 + 0.5}" height="${halfHeight * 2 + 0.5}" fill="none" stroke="#a7a7ce" stroke-width=".1" stroke-dasharray=".35 .24"/>`,
    `<rect x="${-width / 2}" y="${-height / 2}" width="${width}" height="${height}" fill="#1e383c" stroke="#b0d4d0" stroke-width=".12"/>`,
    pads,
  ].join(""), "PCB footprint");
}

export function kicadFootprint(component) {
  const layout = footprintLayout(component);
  const { width, height, halfWidth, halfHeight } = layout;
  const text = (type, label, y, layer) => (
    `  (fp_text ${type} ${quote(label)} (at 0 ${format(y)}) (layer ${quote(layer)}) (effects (font (size 1 1) (thickness 0.15))))`
  );
  const box = (x, y, layer, stroke) => (
    `  (fp_rect (start ${format(-x)} ${format(-y)}) (end ${format(x)} ${format(y)}) (stroke (width ${stroke}) (type solid)) (fill no) (layer ${quote(layer)}))`
  );
  const pads = layout.pads.map(({ number, x, y, width, height, drill, shape, cornerRatio, smd }) => {
    const placement = `(at ${format(x)} ${format(y)}) (size ${format(width)} ${format(height)})`;
    const corner = shape === "roundrect" ? ` (roundrect_rratio ${cornerRatio})` : "";
    return smd
      ? `  (pad ${quote(number)} smd ${shape} ${placement} (layers "F.Cu" "F.Paste" "F.Mask")${corner})`
      : `  (pad ${quote(number)} thru_hole ${shape} ${placement} (drill ${drill}) (layers "*.Cu" "*.Mask"))`;
  });
  const modelPath = "${KIPRJMOD}/WirePad.3dshapes/" + component.id + ".wrl";
  return [
    `(footprint ${quote(component.id)} (version 20240108) (generator wirepad)`,
    '  (layer "F.Cu")',
    `  (descr ${quote(`${component.name}. ${layout.note}`)})`,
    layout.pads.every(pad => pad.smd) ? "  (attr smd)" : "  (attr through_hole)",
    text("reference", "REF**", -halfHeight - 1.5, "F.SilkS"),
    text("value", component.id, halfHeight + 1.5, "F.Fab"),
    box(halfWidth + 0.25, halfHeight + 0.25, "F.CrtYd", 0.05),
    box(width / 2, height / 2, "F.Fab", 0.1),
    box(halfWidth + 0.17, halfHeight + 0.17, "F.SilkS", 0.12),
    ...pads,
    `  (model ${quote(modelPath)} (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`,
    ")",
    "",
  ].join("\n");
}

function modelBoxes(component) {
  const layout = footprintLayout(component);
  const { width, height, color = "#396c50", details = [] } = layout;
  const shell = layout.modelHeight ?? 1.6;
  const body = [0, 0, shell / 2 + 0.2, width, height, shell, color];
  const fittings = details.map(([x, y, w, h, depth, tint]) => [
    x, y, shell + 0.2 + depth / 2, w, h, depth, tint,
  ]);
  const leads = layout.pads.flatMap(({ x, y, smd }) => {
    if (smd) return [];
    const reach = Math.max(0, Math.abs(x) - width / 2);
    const lead = [x, y, -0.65, 0.53, 0.53, 2.4, "#a7b2bc"];
    if (!layout.inline || reach === 0) return [lead];
    const center = shell / 2 + 0.2;
    return [
      [x, y, (center - 1.85) / 2, 0.53, 0.53, center + 1.85, "#a7b2bc"],
      [x - Math.sign(x) * reach / 2, y, center, reach + 0.25, 0.53, 0.53, "#a7b2bc"],
    ];
  });
  const terminals = layout.inline || layout.switch ? [] : layout.pads.map((pad) => (
    pad.smd ? [pad.x, pad.y, 0.19, pad.width, pad.height, 0.14, "#d5a450"]
      : [pad.x, pad.y, shell + 0.27, 1.15, 1.15, 0.14, "#d5a450"]
  ));
  return [...leads, body, ...terminals, ...fittings];
}

const rgb = (color) => color.slice(1).match(/.{2}/g).map((part) => Number.parseInt(part, 16));
const shade = (color, level) => `rgb(${rgb(color).map((value) => Math.round(value * level)).join(",")})`;

export function modelPreview(component) {
  const project = (x, y, z) => [0.9 * x - 0.6 * y, 0.42 * x + 0.62 * y - z];
  const points = [];
  const boxes = modelBoxes(component).map(([x, y, z, width, height, depth, color]) => {
    const left = x - width / 2;
    const right = x + width / 2;
    const front = y + height / 2;
    const back = y - height / 2;
    const top = z + depth / 2;
    const bottom = z - depth / 2;
    const corners = [
      project(left, back, top), project(right, back, top),
      project(right, front, top), project(left, front, top),
      project(right, back, bottom), project(right, front, bottom), project(left, front, bottom),
    ];
    points.push(...corners);
    const face = (indices, level) => `<polygon points="${indices.map((index) => corners[index].map(format).join(",")).join(" ")}" fill="${shade(color, level)}"/>`;
    return face([1, 4, 5, 2], 0.68) + face([3, 2, 5, 6], 0.82) + face([0, 1, 2, 3], 1);
  }).join("");
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const bounds = [Math.min(...xs) - 1.3, Math.min(...ys) - 1.3, Math.max(...xs) + 1.3, Math.max(...ys) + 1.3];
  return svgFrame(component, bounds, boxes, "approximate 3D model");
}

export function kicadModel(component) {
  // KiCad's VRML importer uses a unit of 0.1 inch.
  const units = (values) => values.map((value) => format(value / 2.54)).join(" ");
  const boxes = modelBoxes(component).map(([x, y, z, width, height, depth, color]) => [
    "Transform {",
    `  translation ${units([x, -y, z])}`,
    "  children [ Shape {",
    `    appearance Appearance { material Material { diffuseColor ${rgb(color).map((channel) => format(channel / 255)).join(" ")} } }`,
    `    geometry Box { size ${units([width, height, depth])} }`,
    "  } ]",
    "}",
  ].join("\n"));
  return ["#VRML V2.0 utf8", "# Approximate WirePad mechanical model", ...boxes, ""].join("\n");
}
