import { footprintDefinitionFor } from "../catalog/index.js";
import { terminalNumber } from "../model/component-pins.js";

const GRID = 2.54;
const breakout = "Reference carrier pattern for the exposed connections. Verify pad positions and numbering against the exact breakout before fabrication.";

function padAt(pin, x, y, settings, square) {
  const size = settings.size ?? 1.6;
  const [width, height] = Array.isArray(size) ? size : [size, size];
  const smd = Boolean(settings.smd);
  const shape = settings.shape ?? (square || smd ? "rect" : width === height ? "circle" : "oval");
  return {
    ...pin, x, y, shape, width, height, smd,
    cornerRatio: settings.cornerRatio, drill: smd ? null : settings.drill ?? 0.8,
  };
}

function rowPads(pins, settings, axis, across, start) {
  const pitch = settings.pitch ?? GRID;
  const origin = start ?? -(pins.length - 1) * pitch / 2;
  return pins.map((pin, index) => {
    const along = origin + index * pitch;
    return axis === "x"
      ? padAt(pin, along, across, settings, index === 0)
      : padAt(pin, across, along, settings, index === 0);
  });
}

function connectorPads(component, pins, settings) {
  const pinsById = new Map(pins.map(pin => [pin.id, pin]));
  const pinFor = id => {
    const pin = pinsById.get(id);
    if (!pin) throw new Error(`Footprint "${component.id}" refers to unknown contact "${id}".`);
    return pin;
  };
  const groups = (settings.groups ?? []).flatMap(({ ids, x, y, axis = "x", ...dimensions }) => rowPads(
    ids.map(pinFor), { ...settings, ...dimensions }, axis, axis === "x" ? y : x, axis === "x" ? x : y,
  ));
  const individual = (settings.pads ?? []).map(({ id, x, y, square = false, ...dimensions }) => (
    padAt(pinFor(id), x, y, { ...settings, ...dimensions }, square)
  ));
  return [...groups, ...individual];
}

function modulePads(component, pins, settings) {
  const [width] = settings.body;
  const distance = (settings.rows ?? width - 3) / 2;
  const left = pins.filter((pin) => pin.x <= component.width / 2).sort((a, b) => a.y - b.y);
  const right = pins.filter((pin) => pin.x > component.width / 2).sort((a, b) => a.y - b.y);
  return [
    ...rowPads(left, settings, "y", -distance, settings.start),
    ...rowPads(right, settings, "y", distance, settings.start),
  ];
}

export function footprintLayout(component) {
  const definition = footprintDefinitionFor(component);
  const settings = (typeof definition === 'function' ? definition(component) : definition) ?? {
    body: [16, Math.max(8, component.pins.length * GRID + 3)], note: breakout,
  };
  const pins = component.pins.map((pin, index) => ({ ...pin, number: terminalNumber(pin, index) }));
  let pads;
  if (settings.groups || settings.pads) {
    pads = connectorPads(component, pins, settings);
  } else if (settings.switch && pins.length === 2) {
    const [a, b] = pins;
    pads = [
      padAt(a, -3.25, -2.25, settings, true),
      padAt(a, -3.25, 2.25, settings, false),
      padAt(b, 3.25, -2.25, settings, false),
      padAt(b, 3.25, 2.25, settings, false),
    ];
  } else if (settings.inline) {
    const ordered = [...pins].sort((a, b) => Number(a.number) - Number(b.number));
    pads = rowPads(ordered, settings, "x", 0);
  } else {
    pads = modulePads(component, pins, settings);
  }
  const [width, height] = settings.body;
  const halfWidth = Math.max(width / 2, ...pads.map((pad) => Math.abs(pad.x) + pad.width / 2));
  const halfHeight = Math.max(height / 2, ...pads.map((pad) => Math.abs(pad.y) + pad.height / 2));
  const note = settings.note ?? (settings.package
    ? `${settings.package}. Verify the package dimensions and pin numbering for your specific part.`
    : breakout);
  return { ...settings, width, height, halfWidth, halfHeight, pads, note };
}

export function footprintNote(component) {
  return footprintLayout(component).note;
}
