import { moduleArt, pinRow } from "./svg.js";

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

export function boardDefinition(component, headers, footprint, bodyArt) {
  const { width, height } = component;
  const pins = [];
  const pads = [];
  for (const { name, side, start, specs, placement, displayPitch } of headers) {
    const { x, y, axis = "y", pitch = 2.54, acrossPitch = pitch, columns = 1, size = 1.65, drill = 0.85, ...options } = placement;
    const row = pinRow(side, width, height, start, displayPitch, specs, `${name}.`);
    row.forEach((pin, index) => {
      const along = Math.floor(index / columns) * pitch;
      const across = index % columns * acrossPitch;
      pins.push({ ...pin, description: `${pin.number} — ${pin.description}` });
      pads.push({
        id: pin.id,
        x: x + (axis === "x" ? along : across),
        y: y + (axis === "y" ? along : across),
        size, drill, square: pin.number.endsWith(".1"), ...options,
      });
    });
  }
  return {
    component: { category: "Microcontrollers", referencePrefix: "U", ...component, pins },
    footprint: { ...footprint, pads },
    art: moduleArt(bodyArt),
  };
}
