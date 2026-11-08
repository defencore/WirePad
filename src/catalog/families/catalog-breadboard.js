import { defineFamily } from "../registry.js";
import { label, rect } from "../shared/svg.js";

export const BREADBOARD_DEFAULTS = Object.freeze({
  rows: 30,
  leftCells: 5,
  rightCells: 5,
  topRails: 0,
  bottomRails: 0,
  leftRails: 2,
  rightRails: 2,
  splitRails: false,
});

export const BREADBOARD_LIMITS = Object.freeze({
  rows: Object.freeze({ min: 1, max: 100 }),
  cells: Object.freeze({ min: 1, max: 50 }),
  rails: Object.freeze({ min: 0, max: 4 }),
});

const PITCH = 16;
const MILLIMETRE_PITCH = 2.54;
const CORE_X = 96;
const CORE_Y = 96;
// Existing A–E/F–J identities stay stable when either bank is resized.
const SIDES = ["top", "bottom", "left", "right"];
const RAIL_COLORS = ["#c15050", "#3e729e"];
const MAX_RAILS = BREADBOARD_LIMITS.rails.max;

export function breadboardColumnId(bank, cell) {
  if (![0, 1].includes(bank) || !Number.isInteger(cell) || cell < 0 || cell >= BREADBOARD_LIMITS.cells.max) {
    throw new RangeError('Breadboard column needs a valid bank and cell index.');
  }
  let index = Math.floor(cell / 5) * 10 + bank * 5 + cell % 5;
  let result = '';
  do {
    result = String.fromCharCode(97 + index % 26) + result;
    index = Math.floor(index / 26) - 1;
  } while (index >= 0);
  return result;
}

export function normalizeBreadboardConfig(value = {}) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError("Breadboard settings must be an object.");
  }
  const config = {};
  for (const key of ["rows", "leftCells", "rightCells", "topRails", "bottomRails", "leftRails", "rightRails"]) {
    const count = value[key] === undefined ? BREADBOARD_DEFAULTS[key] : value[key];
    const cells = key === "leftCells" || key === "rightCells";
    const { min: minimum, max: maximum } = BREADBOARD_LIMITS[key === "rows" ? "rows" : cells ? "cells" : "rails"];
    if (!Number.isInteger(count) || count < minimum || count > maximum) {
      throw new RangeError(`Breadboard ${key} must be an integer from ${minimum} to ${maximum}.`);
    }
    config[key] = count;
  }
  config.splitRails = value.splitRails === undefined ? BREADBOARD_DEFAULTS.splitRails : value.splitRails;
  if (typeof config.splitRails !== "boolean") {
    throw new TypeError("Breadboard splitRails must be a boolean.");
  }
  return config;
}

function hole(id, caption, x, y, description) {
  return { id, label: caption, number: id.toUpperCase(), x, y, type: "passive", surface: true, description };
}

function terminalBanks(config) {
  return [config.leftCells, config.rightCells].map((count, bank) =>
    Array.from({ length: count }, (_, index) => ({
      id: breadboardColumnId(bank, index), bank, x: CORE_X + (index + (bank ? config.leftCells + 2 : 0)) * PITCH,
    })));
}

function boardBounds(config) {
  const lastColumnX = terminalBanks(config)[1].at(-1).x;
  const lastRowY = CORE_Y + (config.rows - 1) * PITCH;
  return {
    left: config.leftRails ? CORE_X - (config.leftRails + 2) * PITCH : CORE_X - 24,
    right: config.rightRails ? lastColumnX + (config.rightRails + 2) * PITCH : lastColumnX + 24,
    top: CORE_Y - (config.topRails + 2) * PITCH,
    bottom: lastRowY + (config.bottomRails + 2) * PITCH,
  };
}

export function createBreadboard(value = {}) {
  const config = normalizeBreadboardConfig(value);
  const pins = [];
  const internalConnections = [];
  const lastRowY = CORE_Y + (config.rows - 1) * PITCH;
  const banks = terminalBanks(config);
  const columns = banks.flat();
  const lastColumnX = columns.at(-1).x;

  for (let row = 1; row <= config.rows; row += 1) {
    const strips = [[], []];
    for (const column of columns) {
      const id = `${column.id}${row}`;
      const strip = column.bank;
      const bank = banks[strip];
      const range = `${bank[0].id.toUpperCase()}${row}–${bank.at(-1).id.toUpperCase()}${row}`;
      const count = bank.length === 5 ? "five" : String(bank.length);
      pins.push(hole(id, id.toUpperCase(), column.x, CORE_Y + (row - 1) * PITCH,
        `Contact ${id.toUpperCase()} on the connected ${count}-hole strip ${range}.`));
      strips[strip].push(id);
    }
    internalConnections.push(...strips);
  }

  for (const side of SIDES) {
    const horizontal = side === "top" || side === "bottom";
    const count = horizontal ? columns.length : config.rows;
    const splitAt = config.splitRails ? Math.ceil(count / 2) : count;
    for (let rail = 1; rail <= config[`${side}Rails`]; rail += 1) {
      const segments = [[], []];
      for (let index = 0; index < count; index += 1) {
        const id = `${side}-${rail}-${index + 1}`;
        const x = horizontal ? columns[index].x
          : side === "left" ? CORE_X - (rail + 1) * PITCH : lastColumnX + (rail + 1) * PITCH;
        const y = horizontal
          ? side === "top" ? CORE_Y - (rail + 1) * PITCH : lastRowY + (rail + 1) * PITCH
          : CORE_Y + index * PITCH;
        const segment = index < splitAt ? 0 : 1;
        const first = segment === 0 ? 1 : splitAt + 1;
        const last = segment === 0 ? splitAt : count;
        pins.push(hole(id, `${side[0].toUpperCase()}${rail}.${index + 1}`, x, y,
          `${side[0].toUpperCase()}${side.slice(1)} rail ${rail}, hole ${index + 1}. Connected to holes ${first}–${last} of this rail.`));
        segments[segment].push(id);
      }
      internalConnections.push(...segments.filter(segment => segment.length));
    }
  }

  return {
    id: "breadboard", art: "breadboard", category: "Prototyping", referencePrefix: "BB",
    name: "Configurable Solderless Breadboard", shortName: `Breadboard ${config.rows} rows`,
    subtitle: `${config.rows} rows / ${pins.length} holes / configurable rails`,
    manufacturer: "Generic",
    source: "https://learn.adafruit.com/breadboards-for-beginners/breadboards",
    description: "Representative configurable breadboard with independent left and right terminal strips in each row. Each side has 1–50 cells; the default is A–E and F–J with five cells each. Each colored rail is an independent conductor. Optional rail splits isolate the two halves. Dimensions and 2.54 mm grid are a wiring reference for a custom layout.",
    tags: ["breadboard", "solderless", "prototype", "prototyping", "terminal strip", "power rail", "2.54mm", "socket"],
    width: lastColumnX + (MAX_RAILS + 2) * PITCH,
    height: lastRowY + (MAX_RAILS + 2) * PITCH,
    surface: true,
    breadboard: Object.freeze(config),
    pins,
    internalConnections,
  };
}

function railGuides(component, pinsById) {
  return component.internalConnections.filter(ids => ids[0].includes("-")).map(ids => {
    const first = pinsById.get(ids[0]);
    const last = pinsById.get(ids[ids.length - 1]);
    const [side, rail] = first.id.split("-");
    const color = RAIL_COLORS[(Number(rail) - 1) % RAIL_COLORS.length];
    const horizontal = side === "top" || side === "bottom";
    const startX = horizontal ? first.x - 4 : first.x + 6;
    const startY = horizontal ? first.y + 6 : first.y - 4;
    const endX = horizontal ? last.x + 4 : last.x + 6;
    const endY = horizontal ? last.y + 6 : last.y + 4;
    return rect(startX - 0.8, startY - 0.8, endX - startX + 1.6, endY - startY + 1.6, 0.8, color);
  }).join("");
}

function boardLegends(component) {
  const config = component.breadboard;
  const columns = terminalBanks(config).flat();
  const lastColumnX = columns.at(-1).x;
  const lastRowY = CORE_Y + (config.rows - 1) * PITCH;
  const columnLabels = columns.map(column =>
    label(column.x, CORE_Y - 18, column.id.toUpperCase(), 9, "#69746f") +
    label(column.x, lastRowY + 18, column.id.toUpperCase(), 9, "#69746f")
  ).join("");
  const rowLabels = Array.from({ length: config.rows }, (_, index) => index + 1)
    .filter(row => row === 1 || row === config.rows || row % 5 === 0)
    .map(row => label(CORE_X - 16, CORE_Y + (row - 1) * PITCH, row, 8, "#737a74") +
      label(lastColumnX + 16, CORE_Y + (row - 1) * PITCH, row, 8, "#737a74")).join("");
  const railLabels = SIDES.flatMap(side => Array.from({ length: config[`${side}Rails`] }, (_, index) => {
    const rail = index + 1;
    const color = RAIL_COLORS[index % RAIL_COLORS.length];
    const caption = `${side[0].toUpperCase()}${rail}`;
    if (side === "top" || side === "bottom") {
      const y = side === "top" ? CORE_Y - (rail + 1) * PITCH : lastRowY + (rail + 1) * PITCH;
      return label(CORE_X - 16, y, caption, 8, color);
    }
    const x = side === "left" ? CORE_X - (rail + 1) * PITCH : lastColumnX + (rail + 1) * PITCH;
    return label(x, CORE_Y - 18, caption, 8, color) + label(x, lastRowY + 18, caption, 8, color);
  })).join("");
  return columnLabels + rowLabels + railLabels;
}

export function breadboardArt(component, labels = true) {
  const config = component.breadboard;
  const bounds = boardBounds(config);
  const banks = terminalBanks(config);
  const rightStart = banks[1][0].x;
  const leftEnd = banks[0].at(-1).x;
  const rowHeight = (config.rows - 1) * PITCH;
  const pinsById = new Map(component.pins.map(pin => [pin.id, pin]));
  const strips = Array.from({ length: config.rows }, (_, index) => {
    const y = CORE_Y + index * PITCH - 4.5;
    return rect(CORE_X - 5, y, PITCH * (config.leftCells - 1) + 10, 9, 2.2, "#e0e3dc") +
      rect(rightStart - 5, y, PITCH * (config.rightCells - 1) + 10, 9, 2.2, "#e0e3dc");
  }).join("");
  const bevels = [];
  const openings = [];
  for (const { x, y } of component.pins) {
    bevels.push(`M${x - 3.2} ${y - 3.2}h6.4v6.4h-6.4Z`);
    openings.push(`M${x - 2} ${y - 2}h4v4h-4Z`);
  }
  return rect(bounds.left, bounds.top + 3, bounds.right - bounds.left, bounds.bottom - bounds.top, 7, "#bcc3bc", "#aeb9b1") +
    rect(bounds.left, bounds.top, bounds.right - bounds.left, bounds.bottom - bounds.top, 7, "#eceee7", "#bac3b9") +
    rect(CORE_X - 10, CORE_Y - 10, PITCH * (config.leftCells - 1) + 20, rowHeight + 20, 3, "#f5f6f0", "#d2d8ce") +
    rect(rightStart - 10, CORE_Y - 10, PITCH * (config.rightCells - 1) + 20, rowHeight + 20, 3, "#f5f6f0", "#d2d8ce") +
    rect(leftEnd + 14, CORE_Y - 8, PITCH * 2 - 12, rowHeight + 16, 3, "#ccd2c9", "#bdc6ba") +
    strips + railGuides(component, pinsById) +
    `<path d="${bevels.join("")}" fill="#bbc2b7"/><path d="${openings.join("")}" fill="#404b46"/>` +
    (labels ? boardLegends(component) : "");
}

export function breadboardFootprint(component) {
  const bounds = boardBounds(component.breadboard);
  const centerX = (bounds.left + bounds.right) / 2;
  const centerY = (bounds.top + bounds.bottom) / 2;
  const millimetres = pixels => Number((pixels / PITCH * MILLIMETRE_PITCH).toFixed(4));
  return {
    body: [millimetres(bounds.right - bounds.left), millimetres(bounds.bottom - bounds.top)],
    color: "#eceee7", modelHeight: 8.5, drill: 1, size: 1.6, shape: "circle",
    pads: component.pins.map(({ id, x, y }) => ({ id, x: millimetres(x - centerX), y: millimetres(y - centerY) })),
    note: "Representative off-board breadboard wiring reference on a 2.54 mm grid. Each numbered pad identifies one insertion hole. Internal spring-contact strips and rail splits follow the selected configuration. This electrical reference uses chosen 1 mm holes and omits the product's backing, latches and mounting details. Verify the fitted breadboard before fabrication. The exported 3D body is approximate.",
  };
}

const breadboardComponent = createBreadboard();
export default defineFamily("breadboard", [{
  component: breadboardComponent,
  render: breadboardArt,
  footprint: breadboardFootprint,
  configuration: { key: "breadboard", normalize: normalizeBreadboardConfig, create: createBreadboard, limits: BREADBOARD_LIMITS },
  mounting: {
    type: "breadboard", pitch: MILLIMETRE_PITCH, canvasPitch: PITCH,
    contacts: component => {
      const pins = new Map(component.pins.map(pin => [pin.id, pin]));
      return component.internalConnections.filter(ids => !ids[0].includes("-")).flatMap(ids =>
        ids.map(pinId => ({ pinId, x: pins.get(pinId).x, y: pins.get(pinId).y, group: ids[0], conductor: ids[0], region: "terminal" })));
    },
    railContacts: component => {
      const pins = new Map(component.pins.map(pin => [pin.id, pin]));
      const segments = new Map();
      return component.internalConnections.filter(ids => ids[0].includes("-")).flatMap(ids => {
        const rail = ids[0].slice(0, ids[0].lastIndexOf('-'));
        const segment = segments.get(rail) ?? 0;
        segments.set(rail, segment + 1);
        return ids.map(pinId => ({ pinId, x: pins.get(pinId).x, y: pins.get(pinId).y,
          group: ids[0], conductor: `${rail}/${segment}`, region: "rail" }));
      });
    },
  },
}]);
