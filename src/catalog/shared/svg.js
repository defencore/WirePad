import { escapeText } from "../../shared/text.js";

export const rect = (x, y, width, height, radius, fill, stroke = "none") =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
export const circle = (cx, cy, r, fill, stroke = "none") =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}"/>`;
export const line = (x1, y1, x2, y2, stroke, width = 1) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round"/>`;
export const path = (d, fill, stroke = "none", width = 1) =>
  `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
export const label = (x, y, value, size = 9, fill = "#e3e9f1", anchor = "middle", weight = 600) =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="ui-monospace, monospace" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" dominant-baseline="central">${escapeText(value)}</text>`;

export function board(width, height, color, outline, inset = 7) {
  return rect(inset, inset + 2, width - inset * 2, height - inset * 2, 7, "#142032", "#142032") +
    rect(inset, inset, width - inset * 2, height - inset * 2, 7, color, outline) +
    rect(inset + 3, inset + 3, width - inset * 2 - 6, height - inset * 2 - 6, 5, "none", outline);
}

export function mountingHole(x, y) {
  return circle(x, y, 5.4, "#b69762") + circle(x, y, 3.3, "#151d2a") + circle(x, y, 2.5, "#26303e");
}

export function pad(x, y) {
  return circle(x, y, 4.4, "#dcb16a") + circle(x, y, 2.65, "#564736") + circle(x, y, 1.7, "#131923");
}

export function edgePads(component, showLabels) {
  const { width, height, pins } = component;
  return pins.map((pin) => {
    const edge = pin.edge ?? (pin.x === 0 ? "left" : pin.x === width ? "right" : pin.y === 0 ? "top" : "bottom");
    const horizontal = edge === "left" || edge === "right";
    const before = edge === "left" || edge === "top";
    const delta = before ? 1 : -1;
    const { x, y } = pin;
    const caption = horizontal
      ? label(x + delta * 7, y, pin.label, 8, "#f1f2ee", before ? "start" : "end")
      : label(x, y + delta * 10, pin.label, 7.5);
    return `<g data-contact="${escapeText(pin.id)}">${pad(x, y)}${showLabels ? caption : ""}</g>`;
  }).join("");
}

export function chip(x, y, width, height, caption = "", legs = 4) {
  const legSpacing = (height - 8) / Math.max(legs - 1, 1);
  const pins = Array.from({ length: legs }, (_, index) => {
    const pinY = y + 4 + index * legSpacing;
    return line(x - 5, pinY, x, pinY, "#9ca9ba", 2.5) +
      line(x + width, pinY, x + width + 5, pinY, "#9ca9ba", 2.5);
  }).join("");
  return pins + rect(x, y, width, height, 3, "#131823", "#65728a") +
    rect(x + 2, y + 2, width - 4, height - 4, 1, "#202936") +
    circle(x + 5, y + 5, 1.3, "#777f8a") +
    label(x + width / 2, y + height / 2 + 2, caption, 6, "#c2cbd4");
}

export function smd(x, y, color = "#bba778") {
  return rect(x, y, 8, 4, 1, "#9ba9b6") + rect(x + 2, y, 4, 4, 0.5, color);
}

export function screw(x, y, radius = 8) {
  return circle(x, y, radius, "#1d2d36") + circle(x, y, radius - 2, "#bcc7c7", "#e4eded") +
    line(x - 3, y + 3, x + 3, y - 3, "#49535b", 1.8);
}

export function usb(x, y, width = 27) {
  return rect(x, y, width, 18, 2, "#a6aeb9", "#dce2e8") +
    rect(x + 3, y + 4, width - 6, 8, 1, "#6d7786") +
    rect(x + 3, y + 13, width - 6, 5, 1, "#313b4a") +
    line(x + 6, y + 15, x + width - 6, y + 15, "#bbc4cd");
}

export function tactile(x, y) {
  return rect(x, y, 15, 15, 3, "#99a5b6", "#d8e0ea") + circle(x + 7.5, y + 7.5, 4.5, "#27303c", "#596579");
}

// Pin specifications are [id, label, description, electrical type, terminal number].
export function pinRow(side, width, height, start, pitch, specs, prefix = "") {
  const vertical = side === "left" || side === "right";
  const edge = side === "left" || side === "top" ? 0 : vertical ? width : height;
  return specs.map(([id, label, description, type, number], index) => {
    const offset = start + index * pitch;
    return {
      id, label, description, type,
      number: number ?? `${prefix}${index + 1}`,
      x: vertical ? edge : offset,
      y: vertical ? offset : edge,
    };
  });
}

export function moduleArt(body) {
  return (component, labels) => body(component) + edgePads(component, labels);
}
