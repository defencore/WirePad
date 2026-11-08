import { circle, label, rect } from "./svg.js";

// Each caller supplies audited contact types, functions and physical artwork centers.
// The native asset deliberately terminates wires rather than claiming a mating PCB.
export function makerReferenceBoard(spec) {
  const pins = spec.contacts.map(p => ({ id: p.id, number: String(p.number), label: p.label, type: p.type,
    description: `${p.number} — ${p.description}`, x: p.x, y: p.y, surface: true }));
  const component = { id: spec.id, art: spec.id, name: spec.name, shortName: spec.shortName,
    manufacturer: spec.manufacturer, category: spec.category, referencePrefix: spec.referencePrefix ?? "U",
    subtitle: spec.subtitle, description: spec.description, source: spec.source, tags: spec.tags,
    width: spec.width, height: spec.height, contactLayout: "physical", pins,
    ...(spec.internalConnections ? { internalConnections: spec.internalConnections } : {}) };
  const groups = [...new Set(spec.contacts.map(p => p.group ?? "H"))];
  const pads = spec.contacts.map((p, i) => {
    const group = p.group ?? "H", column = groups.indexOf(group), members = spec.contacts.filter(c => (c.group ?? "H") === group);
    return { id: pins[i].id, x: column * 10.16, y: members.indexOf(p) * 2.54, size: 1.7, drill: 1, square: members.indexOf(p) === 0 };
  });
  const maxX = Math.max(...pads.map(p => p.x)), maxY = Math.max(...pads.map(p => p.y));
  pads.forEach(p => { p.x -= maxX / 2; p.y -= maxY / 2; });
  const footprint = { body: [maxX + 7.62, maxY + 7.62], color: spec.color ?? "#284e3b", pads,
    note: `Reference off-board 2.54 mm wire-termination carrier for ${spec.name}; not its production mating footprint. Connector groups and terminal identifiers match the illustrated contacts. Board outline, component heights and generated 3D are approximate. ${spec.footprintNote ?? "No manufacturer STEP was verified."}` };
  const render = (part, showLabels = true) => spec.draw(showLabels) + spec.contacts.map((p, i) => {
    const pin = part.pins[i], r = p.radius ?? 4;
    const metal = p.shape === "pad" ? rect(pin.x - (p.padWidth ?? r * 2) / 2, pin.y - (p.padHeight ?? r * 2) / 2, p.padWidth ?? r * 2, p.padHeight ?? r * 2, .5, "#d8bd76", "#f0dfaa")
      : p.shape === "pin" ? rect(pin.x - 7, pin.y - 1.7, 14, 3.4, .3, "#d2c493", "#eee0b4")
        : circle(pin.x, pin.y, r, "#d2b56e", "#f1d99e") + circle(pin.x, pin.y, r * .46, "#23372d");
    return `<g data-contact="${pin.id}">${metal}${showLabels && !p.hideLabel ? label(pin.x + (p.dx ?? 0), pin.y + (p.dy ?? -10), p.caption ?? p.label, p.font ?? 7, p.color ?? "#e8ecd9", p.anchor ?? "middle") : ""}</g>`;
  }).join("");
  return { component, render, footprint, ...(spec.model ? { model: spec.model } : {}) };
}

export const makerContact = (id, number, signal, type, description, x, y, options = {}) => ({ id, number, label: signal, type, description, x, y, ...options });
