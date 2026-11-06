import { componentById } from "./catalog.js";

const VERSION = 1;
const STORAGE_KEY = "wirepad.project";
const POSITION_LIMIT = 1_000_000;
const MAX_PARTS = 500;
const MAX_WIRES = 3000;
const MAX_POINTS_PER_WIRE = 100;

export function newProject(title = "Untitled project") {
  return { version: VERSION, title, parts: [], wires: [] };
}

export function demoProject() {
  const project = newProject("RS-485 sensor node");
  const controller = { id: "u1", componentId: "esp32-s3", label: "ESP32-S3 DevKitC-1", x: 20, y: 35 };
  const sensor = { id: "u2", componentId: "bme280", label: "BME280", x: 515, y: 35 };
  const transceiver = { id: "u3", componentId: "max3485", label: "MAX3485 RS-485", x: 515, y: 268 };
  project.parts = [controller, sensor, transceiver];

  const pinY = (part, pinId) => part.y + componentById.get(part.componentId).pins.find(pin => pin.id === pinId).y;
  const point = (x, y) => ({ x, y });
  const wire = (id, color, start, startPin, end, endPin, points) => ({
    id,
    color,
    from: { partId: start.id, pinId: startPin },
    to: { partId: end.id, pinId: endPin },
    points,
  });
  const through = (x, start, startPin, end, endPin) => [
    point(x, pinY(start, startPin)),
    point(x, pinY(end, endPin)),
  ];

  const groundPin = "gnd-2";
  const power = "#e35050";
  const ground = "#46536a";
  const direction = "#d08722";
  const powerTrunk = [
    point(4, pinY(controller, "3v3")),
    point(4, 10),
    point(474, 10),
    point(474, pinY(sensor, "vin")),
  ];
  const groundTrunk = through(439, controller, groundPin, sensor, "gnd");

  project.wires = [
    wire("sensor-power", power, controller, "3v3", sensor, "vin", powerTrunk),
    wire("bus-power", power, controller, "3v3", transceiver, "vcc", [...powerTrunk, point(474, pinY(transceiver, "vcc"))]),
    wire("sensor-ground", ground, controller, groundPin, sensor, "gnd", groundTrunk),
    wire("bus-ground", ground, controller, groundPin, transceiver, "gnd", [...groundTrunk, point(439, pinY(transceiver, "gnd"))]),
    wire("i2c-clock", "#2c83d9", controller, "gpio1", sensor, "scl", through(396, controller, "gpio1", sensor, "scl")),
    wire("i2c-data", "#12946d", controller, "gpio2", sensor, "sda", through(373, controller, "gpio2", sensor, "sda")),
    wire("uart-tx", "#8b5cc7", controller, "gpio42", transceiver, "di", through(386, controller, "gpio42", transceiver, "di")),
    wire("uart-rx", "#5475c5", controller, "gpio41", transceiver, "ro", through(350, controller, "gpio41", transceiver, "ro")),
    wire("driver-enable", direction, controller, "gpio40", transceiver, "de", through(314, controller, "gpio40", transceiver, "de")),
    wire("receiver-enable", direction, transceiver, "de", transceiver, "re", through(494, transceiver, "de", transceiver, "re")),
  ];
  return project;
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
  return value;
}

function list(value, label, limit) {
  if (!Array.isArray(value) || value.length > limit) {
    throw new Error(`${label} must be a list with at most ${limit} items.`);
  }
  return value;
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

function readPart(value, label, partComponents) {
  record(value, label);
  const id = identifier(value.id, label);
  if (partComponents.has(id)) {
    throw new Error(`Component ID “${id}” is duplicated.`);
  }
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
  partComponents.set(id, component);
  return part;
}

function readEndpoint(value, label, partComponents) {
  record(value, label);
  const partId = identifier(value.partId, label);
  const pinId = identifier(value.pinId, label);
  if (!partComponents.get(partId)?.pins.some(pin => pin.id === pinId)) {
    throw new Error(`${label} refers to a missing component or pin.`);
  }
  return { partId, pinId };
}

function readColor(value, label) {
  if (typeof value !== "string" || !/^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(value)) {
    throw new Error(`${label} must have a hexadecimal color.`);
  }
  const color = value.toLowerCase();
  return color.length === 4 ? color.replace(/[a-f0-9]/g, digit => digit + digit) : color;
}

function readWire(value, label, partComponents, wireIds) {
  record(value, label);
  const id = identifier(value.id, label);
  if (wireIds.has(id)) {
    throw new Error(`Wire ID “${id}” is duplicated.`);
  }
  const from = readEndpoint(value.from, `${label} start`, partComponents);
  const to = readEndpoint(value.to, `${label} end`, partComponents);
  if (from.partId === to.partId && from.pinId === to.pinId) {
    throw new Error(`${label} connects a pin to itself.`);
  }
  const wire = { id, from, to, color: readColor(value.color, label) };
  if (value.points !== undefined) {
    wire.points = list(value.points, `${label} route`, MAX_POINTS_PER_WIRE).map((point, index) => {
      return position(point, `${label} waypoint ${index + 1}`);
    });
  }
  wireIds.add(id);
  return wire;
}

export function validateProject(value) {
  record(value, "Project");
  if (value.version !== VERSION) {
    throw new Error("This WirePad project version is unsupported.");
  }
  const title = string(value.title, "Project name", 100);
  const partComponents = new Map();
  const parts = list(value.parts, "Components", MAX_PARTS).map((part, index) => {
    return readPart(part, `Component ${index + 1}`, partComponents);
  });
  const wireIds = new Set();
  const wires = list(value.wires, "Wires", MAX_WIRES).map((wire, index) => {
    return readWire(wire, `Wire ${index + 1}`, partComponents, wireIds);
  });
  return { version: VERSION, title, parts, wires };
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

export function serializeProject(project) {
  return `${JSON.stringify(validateProject(project), null, 2)}\n`;
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
  globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(validateProject(project)));
}
