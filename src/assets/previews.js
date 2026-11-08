import { footprintLayout } from "./footprint-layout.js";
import { modelLayout } from "./model-layout.js";
import { symbolLayout } from "./symbol-layout.js";
import { format, rgb } from "./format.js";
import { escapeText } from "../shared/text.js";

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
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${left} ${top} ${format(right - left)} ${format(bottom - top)}" role="img" aria-label="${escapeText(component.name)} ${label}">${markup}</svg>`;
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
    return `${wire}<text x="${x + dx * 0.75}" y="${y + 0.36}" font-size="1.05" fill="#334155" text-anchor="${anchor}">${escapeText(pin.label)}</text><text x="${(pin.x + x) / 2}" y="${y - 0.47}" font-size=".74" fill="#475569" text-anchor="middle">${escapeText(pin.number)}</text>`;
  }).join("");
  return svgFrame(component, layout.bounds,
    `<g fill="none" stroke="#9a4831" stroke-width=".23" stroke-linejoin="round" stroke-linecap="round">${layout.shapes.map(svgShape).join("")}</g><g font-family="ui-monospace, monospace">${pins}</g>`,
    "circuit symbol");
}

export function footprintPreview(component) {
  const layout = footprintLayout(component);
  const { width, height, halfWidth, halfHeight } = layout;
  const bounds = [-halfWidth - 2.1, -halfHeight - 2.1, halfWidth + 2.1, halfHeight + 2.1];
  const pads = layout.pads.map(({ number, x, y, width, height, drill, shape, cornerRatio }) => {
    const round = shape === "circle";
    const radius = shape === "oval" ? Math.min(width, height) / 2
      : shape === "roundrect" ? Math.min(width, height) * cornerRatio : 0.08;
    const copper = round
      ? `<ellipse cx="${x}" cy="${y}" rx="${width / 2}" ry="${height / 2}"/>`
      : `<rect x="${x - width / 2}" y="${y - height / 2}" width="${width}" height="${height}" rx="${radius}"/>`;
    const hole = drill ? `<circle cx="${x}" cy="${y}" r="${drill / 2}" fill="#0f172a"/>` : "";
    return `<g><title>Pad ${escapeText(number)}</title><g fill="#d89036" stroke="#f0b762" stroke-width=".1">${copper}</g>${hole}</g>`;
  }).join("");
  const [left, top, right, bottom] = bounds;
  return svgFrame(component, bounds, [
    `<rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" rx=".35" fill="#10222c"/>`,
    `<rect x="${-halfWidth - 0.25}" y="${-halfHeight - 0.25}" width="${halfWidth * 2 + 0.5}" height="${halfHeight * 2 + 0.5}" fill="none" stroke="#a7a7ce" stroke-width=".1" stroke-dasharray=".35 .24"/>`,
    `<rect x="${-width / 2}" y="${-height / 2}" width="${width}" height="${height}" fill="#1e383c" stroke="#b0d4d0" stroke-width=".12"/>`,
    pads,
  ].join(""), "PCB footprint");
}

const shade = (color, level) => `rgb(${rgb(color).map((value) => Math.round(value * level)).join(",")})`;

export function modelPreview(component) {
  const project = (x, y, z) => [0.9 * x - 0.6 * y, 0.42 * x + 0.62 * y - z];
  const points = [];
  const boxes = modelLayout(component).map(([x, y, z, width, height, depth, color]) => {
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
