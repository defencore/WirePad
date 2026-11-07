import { physicalComponent } from "./physical-contacts.js";
import { label, moduleArt, pinRow, rect } from "./svg.js";

export function contact(id, label, description, type = "passive") {
  return [id, label, description, type];
}

export const ground = (id = "gnd", label = "GND") => contact(id, label, "Ground reference.");
export const reset = (id = "reset", label = "RESET") => contact(id, label, "Active-low microcontroller reset.", "input");
export const supply = (id, label, description, type = "power_in") => contact(id, label, description, type);
export const gpio = (id, label, description) => contact(id, label, description, "bidirectional");

// Header positions are top-view coordinates in millimeters relative to the board center.
export function header(name, side, start, specs, placement, displayPitch = 16) {
  return { name, side, start, specs, placement, displayPitch };
}

export function boardDefinition(component, headers, footprint, bodyArt, projectContact) {
  const { width, height } = component;
  const pins = [];
  const rawPins = [];
  const pads = [];
  for (const { name, side, start, specs, placement, displayPitch } of headers) {
    const { x, y, axis = "y", pitch = 2.54, acrossPitch = pitch, columns = 1, size = 1.65, drill = 0.85, ...options } = placement;
    const row = pinRow(side, width, height, start, displayPitch, specs, `${name}.`);
    row.forEach((pin, index) => {
      const along = Math.floor(index / columns) * pitch;
      const across = index % columns * acrossPitch;
      const physical = { x: x + (axis === "x" ? along : across), y: y + (axis === "y" ? along : across) };
      const projected = projectContact ? projectContact(physical, pin, side, index, name) : {
        x: pin.x === 0 ? 9 : pin.x === width ? width - 9 : pin.x,
        y: pin.y === 0 ? 9 : pin.y === height ? height - 9 : pin.y,
      };
      rawPins.push({ ...pin, description: `${pin.number} — ${pin.description}` });
      pins.push({ ...pin, ...projected, edge: side, surface: true, description: `${pin.number} — ${pin.description}` });
      pads.push({
        id: pin.id,
        x: x + (axis === "x" ? along : across),
        y: y + (axis === "y" ? along : across),
        size, drill, square: pin.number.endsWith(".1"), ...options,
      });
    });
  }
  return {
    component: physicalComponent({ category: "Microcontrollers", referencePrefix: "U", ...component, pins: rawPins }, new Map(pins.map(pin => [pin.id, { x: pin.x, y: pin.y, edge: pin.edge }]))),
    footprint: { ...footprint, pads },
    art: moduleArt(bodyArt),
  };
}

// The numbered contact centers are also the interactive canvas anchors.
export function physicalHeaderArt(component, showLabels, { male = () => false, captionColor = "#334955" } = {}) {
  const groups = new Map();
  for (const pin of component.pins) {
    const connector = String(pin.number).split(".")[0];
    if (!groups.has(connector)) groups.set(connector, []);
    groups.get(connector).push(pin);
  }
  return [...groups].map(([connector, pins]) => {
    const xs = pins.map(pin => pin.x), ys = pins.map(pin => pin.y);
    const twoDimensional = new Set(xs).size > 1 && new Set(ys).size > 1;
    const vertical = Math.max(...ys) - Math.min(...ys) >= Math.max(...xs) - Math.min(...xs);
    const housing = rect(Math.min(...xs) - 3.5, Math.min(...ys) - 3.5,
      Math.max(...xs) - Math.min(...xs) + 7, Math.max(...ys) - Math.min(...ys) + 7, 1, "#222d32", "#6e7b7d");
    return housing + pins.map(pin => {
      const metal = male(connector) ? rect(pin.x - 1.2, pin.y - 1.2, 2.4, 2.4, .2, "#d6bd78")
        : rect(pin.x - 1.7, pin.y - 1.7, 3.4, 3.4, .3, "#111c20", "#a3996a");
      const outward = (pin.x < component.width / 2 ? -1 : 1) * (twoDimensional ? 1 : -1);
      const text = twoDimensional ? String(pin.number).split(".").at(-1) : pin.label;
      const caption = vertical ? label(pin.x + outward * 5, pin.y, text, twoDimensional ? 5.5 : 6.2, captionColor, outward < 0 ? "end" : "start")
        : label(pin.x, pin.y + 6, text, twoDimensional ? 5.5 : 6.2, captionColor);
      return metal + (showLabels ? caption : "");
    }).join("");
  }).join("");
}
