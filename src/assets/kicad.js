import { footprintLayout } from "./footprint-layout.js";
import { modelLayout } from "./model-layout.js";
import { symbolLayout } from "./symbol-layout.js";
import { format, quote, rgb } from "./format.js";

const pinTypes = new Set([
  "input", "output", "bidirectional", "tri_state", "passive", "free",
  "unspecified", "power_in", "power_out", "open_collector", "open_emitter", "no_connect",
]);

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

export function kicadModel(component) {
  // KiCad's VRML importer uses a unit of 0.1 inch.
  const units = (values) => values.map((value) => format(value / 2.54)).join(" ");
  const boxes = modelLayout(component).map(([x, y, z, width, height, depth, color]) => [
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
