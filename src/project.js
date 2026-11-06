import { componentById } from "./catalog.js";
import { pinById } from "./component-pins.js";

const VERSION = 1;
const STORAGE_KEY = "wirepad.project";
const MAX_PARTS = 500;
const MAX_WIRES = 3000;
const MAX_JUNCTIONS = 3000;
// Routing can materialize extra orthogonal corners when a wire is split or dragged.
const MAX_FIXED_ROUTE_POINTS = 216;
const MAX_PROJECT_ROUTE_POINTS = 320_000;

export const DEFAULT_PROJECT_TITLE = "Untitled project";
export const POSITION_LIMIT = 1_000_000;
export const MAX_POINTS_PER_WIRE = 100;
export const PROJECT_FILE_LIMIT = 24 * 1024 * 1024;

// Only normalized, frozen records and lists can bypass their structural checks.
const snapshots = new WeakSet();
const snapshotRecords = new WeakMap();
const snapshotLists = new WeakMap();

export function newProject(title = DEFAULT_PROJECT_TITLE) {
  return { version: VERSION, title, parts: [], wires: [] };
}

export function makeId(prefix = "item") {
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(12));
  const suffix = Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
  return `${prefix}-${suffix}`;
}

function record(value, label) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be an object.`);
  }
}

function readList(value, label, limit, read) {
  if (!Array.isArray(value) || value.length > limit) {
    throw new Error(`${label} must be a list with at most ${limit} items.`);
  }
  const items = new Array(value.length);
  for (let index = 0; index < value.length; index++) {
    items[index] = read(value[index], index);
  }
  return items;
}

function freezeRecord(value) {
  if (value !== null && typeof value === "object") {
    for (const child of Object.values(value)) freezeRecord(child);
    Object.freeze(value);
  }
}

function readRecords(value, label, singular, limit, read, immutable) {
  const cached = immutable ? snapshotLists.get(value) : undefined;
  if (cached?.read === read) return cached;
  const byId = new Map();
  const items = readList(value, label, limit, (input, index) => {
    const reused = immutable && snapshotRecords.get(input) === read;
    const item = reused ? input : read(input, `${singular} ${index + 1}`);
    if (byId.has(item.id)) {
      throw new Error(`${singular} ID “${item.id}” is duplicated.`);
    }
    if (immutable && !reused) {
      freezeRecord(item);
      snapshotRecords.set(item, read);
    }
    byId.set(item.id, item);
    return item;
  });
  const list = { items, byId, read };
  if (immutable) snapshotLists.set(Object.freeze(items), list);
  return list;
}

function string(value, label, limit, required = true) {
  if (typeof value !== "string" || value.length > limit || (required && !value.trim())) {
    throw new Error(`${label} must be text, up to ${limit} characters long.`);
  }
  return value;
}

function identifier(value, label) {
  if (typeof value !== "string" || !/^[a-zA-Z0-9_-]{1,120}$/.test(value)) {
    throw new Error(`${label} has an invalid ID.`);
  }
  return value;
}

function position(value, label) {
  record(value, label);
  const { x, y } = value;
  if (!Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > POSITION_LIMIT || Math.abs(y) > POSITION_LIMIT) {
    throw new Error(`${label} has an invalid position.`);
  }
  return { x, y };
}

function readPart(value, label) {
  record(value, label);
  const id = identifier(value.id, label);
  const component = componentById.get(value.componentId);
  if (!component) {
    throw new Error(`${label} uses a component that is missing from the library.`);
  }
  const part = { id, componentId: component.id, ...position(value, label) };
  if (value.rotation !== undefined) {
    if (![0, 90, 180, 270].includes(value.rotation)) {
      throw new Error(`${label} must be rotated in 90° increments.`);
    }
    part.rotation = value.rotation;
  }
  if (value.label !== undefined) {
    part.label = string(value.label, `${label} label`, 60, false);
  }
  return part;
}

function readJunction(value, label) {
  record(value, label);
  return { id: identifier(value.id, label), ...position(value, label) };
}

function readEndpoint(value, label) {
  record(value, label);
  if (value.junctionId !== undefined) {
    if (value.partId !== undefined || value.pinId !== undefined) {
      throw new Error(`${label} must refer to a pin or a junction.`);
    }
    return { junctionId: identifier(value.junctionId, label) };
  }
  return { partId: identifier(value.partId, label), pinId: identifier(value.pinId, label) };
}

function readColor(value, label) {
  if (typeof value !== "string" || !/^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(value)) {
    throw new Error(`${label} must have a hexadecimal color.`);
  }
  const color = value.toLowerCase();
  return color.length === 4 ? color.replace(/[a-f0-9]/g, digit => digit + digit) : color;
}

function readWire(value, label) {
  record(value, label);
  const id = identifier(value.id, label);
  const from = readEndpoint(value.from, `${label} start`);
  const to = readEndpoint(value.to, `${label} end`);
  const selfLoop = from.junctionId
    ? from.junctionId === to.junctionId
    : from.partId === to.partId && from.pinId === to.pinId;
  if (selfLoop) {
    throw new Error(`${label} connects an endpoint to itself.`);
  }
  const wire = { id, from, to, color: readColor(value.color, label) };
  if (value.points !== undefined) {
    const limit = value.fixedRoute === true ? MAX_FIXED_ROUTE_POINTS : MAX_POINTS_PER_WIRE;
    wire.points = readList(value.points, `${label} route`, limit,
      (point, index) => position(point, `${label} waypoint ${index + 1}`));
  }
  if (value.fixedRoute !== undefined) {
    if (typeof value.fixedRoute !== "boolean") {
      throw new Error(`${label} has an invalid fixed route setting.`);
    }
    wire.fixedRoute = value.fixedRoute;
  }
  return wire;
}

function checkEndpoint({ partId, pinId, junctionId }, parts, junctions, index, side) {
  if (junctionId) {
    if (!junctions?.has(junctionId)) throw new Error(`Wire ${index + 1} ${side} refers to a missing junction.`);
    return;
  }
  const component = componentById.get(parts.get(partId)?.componentId);
  if (!pinById(component, pinId)) throw new Error(`Wire ${index + 1} ${side} refers to a missing component or pin.`);
}

function readProject(value, immutable) {
  record(value, "Project");
  if (value.version !== VERSION) {
    throw new Error("This WirePad project version is unsupported.");
  }
  const title = string(value.title, "Project name", 100);
  const parts = readRecords(value.parts, "Components", "Component", MAX_PARTS, readPart, immutable);
  const junctions = value.junctions === undefined
    ? null
    : readRecords(value.junctions, "Junctions", "Junction", MAX_JUNCTIONS, readJunction, immutable);
  const { items: wires } = readRecords(value.wires, "Wires", "Wire", MAX_WIRES, readWire, immutable);
  let routePoints = 0;
  for (let index = 0; index < wires.length; index++) {
    const wire = wires[index];
    routePoints += wire.points?.length ?? 0;
    if (routePoints > MAX_PROJECT_ROUTE_POINTS) {
      throw new Error(`A project can contain up to ${MAX_PROJECT_ROUTE_POINTS} wire waypoints.`);
    }
    checkEndpoint(wire.from, parts.byId, junctions?.byId, index, "start");
    checkEndpoint(wire.to, parts.byId, junctions?.byId, index, "end");
  }
  const project = { version: VERSION, title, parts: parts.items, wires };
  if (junctions) project.junctions = junctions.items;
  return project;
}

export function validateProject(value) {
  return readProject(value, false);
}

export function projectSnapshot(value) {
  if (snapshots.has(value)) return value;
  const project = Object.freeze(readProject(value, true));
  snapshots.add(project);
  return project;
}

export function parseProject(text) {
  let value;
  try {
    value = JSON.parse(text);
  } catch {
    throw new Error("This file does not contain valid JSON.");
  }
  return validateProject(value);
}

function encodeProject(project) {
  return JSON.stringify(snapshots.has(project) ? project : validateProject(project));
}

export function serializeProject(project) {
  return `${encodeProject(project)}\n`;
}

export function loadProject() {
  try {
    const saved = globalThis.localStorage.getItem(STORAGE_KEY);
    return saved === null ? null : parseProject(saved);
  } catch {
    return null;
  }
}

export function saveProject(project) {
  globalThis.localStorage.setItem(STORAGE_KEY, encodeProject(project));
}
