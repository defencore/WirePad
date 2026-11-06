import { componentById } from "./catalog.js";

const VERSION = 1;
const STORAGE_KEY = "wirepad.project";
const POSITION_LIMIT = 1_000_000;
const MAX_PARTS = 500;
const MAX_WIRES = 3000;
const MAX_JUNCTIONS = 3000;
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
  const endpoint = (part, pinId) => pinId ? { partId: part.id, pinId } : { junctionId: part.id };
  const wire = (id, color, start, startPin, end, endPin, points) => ({
    id,
    color,
    from: endpoint(start, startPin),
    to: endpoint(end, endPin),
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
  const powerJunction = { id: "power-branch", x: 474, y: pinY(sensor, "vin") };
  const groundJunction = { id: "ground-branch", x: 439, y: pinY(sensor, "gnd") };
  const directionJunction = { id: "direction-branch", x: 494, y: pinY(transceiver, "de") };
  project.junctions = [powerJunction, groundJunction, directionJunction];

  const powerTrunk = [
    point(4, pinY(controller, "3v3")),
    point(4, 10),
    point(powerJunction.x, 10),
  ];

  project.wires = [
    wire("power-trunk", power, controller, "3v3", powerJunction, null, powerTrunk),
    wire("sensor-power", power, powerJunction, null, sensor, "vin", []),
    wire("bus-power", power, powerJunction, null, transceiver, "vcc", [point(powerJunction.x, pinY(transceiver, "vcc"))]),
    wire("ground-trunk", ground, controller, groundPin, groundJunction, null, [point(groundJunction.x, pinY(controller, groundPin))]),
    wire("sensor-ground", ground, groundJunction, null, sensor, "gnd", []),
    wire("bus-ground", ground, groundJunction, null, transceiver, "gnd", [point(groundJunction.x, pinY(transceiver, "gnd"))]),
    wire("i2c-clock", "#2c83d9", controller, "gpio1", sensor, "scl", through(396, controller, "gpio1", sensor, "scl")),
    wire("i2c-data", "#12946d", controller, "gpio2", sensor, "sda", through(373, controller, "gpio2", sensor, "sda")),
    wire("uart-tx", "#8b5cc7", controller, "gpio42", transceiver, "di", through(386, controller, "gpio42", transceiver, "di")),
    wire("uart-rx", "#5475c5", controller, "gpio41", transceiver, "ro", through(350, controller, "gpio41", transceiver, "ro")),
    wire("direction-trunk", direction, controller, "gpio40", directionJunction, null, through(314, controller, "gpio40", transceiver, "de")),
    wire("driver-enable", direction, directionJunction, null, transceiver, "de", []),
    wire("receiver-enable", direction, directionJunction, null, transceiver, "re", [point(directionJunction.x, pinY(transceiver, "re"))]),
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

function readJunction(value, label, junctionIds) {
  record(value, label);
  const id = identifier(value.id, label);
  if (junctionIds.has(id)) {
    throw new Error(`Junction ID “${id}” is duplicated.`);
  }
  const junction = { id, ...position(value, label) };
  junctionIds.add(id);
  return junction;
}

function readEndpoint(value, label, partComponents, junctionIds) {
  record(value, label);
  if (value.junctionId !== undefined) {
    if (value.partId !== undefined || value.pinId !== undefined) {
      throw new Error(`${label} must refer to a pin or a junction.`);
    }
    const junctionId = identifier(value.junctionId, label);
    if (!junctionIds.has(junctionId)) {
      throw new Error(`${label} refers to a missing junction.`);
    }
    return { junctionId };
  }
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

function readWire(value, label, partComponents, junctionIds, wireIds) {
  record(value, label);
  const id = identifier(value.id, label);
  if (wireIds.has(id)) {
    throw new Error(`Wire ID “${id}” is duplicated.`);
  }
  const from = readEndpoint(value.from, `${label} start`, partComponents, junctionIds);
  const to = readEndpoint(value.to, `${label} end`, partComponents, junctionIds);
  const selfLoop = from.junctionId
    ? from.junctionId === to.junctionId
    : from.partId === to.partId && from.pinId === to.pinId;
  if (selfLoop) {
    throw new Error(`${label} connects an endpoint to itself.`);
  }
  const wire = { id, from, to, color: readColor(value.color, label) };
  if (value.points !== undefined) {
    wire.points = list(value.points, `${label} route`, MAX_POINTS_PER_WIRE).map((point, index) => {
      return position(point, `${label} waypoint ${index + 1}`);
    });
  }
  if (value.fixedRoute !== undefined) {
    if (typeof value.fixedRoute !== "boolean") {
      throw new Error(`${label} has an invalid fixed route setting.`);
    }
    wire.fixedRoute = value.fixedRoute;
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
  const junctionIds = new Set();
  const junctions = value.junctions === undefined
    ? undefined
    : list(value.junctions, "Junctions", MAX_JUNCTIONS).map((junction, index) => {
      return readJunction(junction, `Junction ${index + 1}`, junctionIds);
    });
  const wireIds = new Set();
  const wires = list(value.wires, "Wires", MAX_WIRES).map((wire, index) => {
    return readWire(wire, `Wire ${index + 1}`, partComponents, junctionIds, wireIds);
  });
  const project = { version: VERSION, title, parts, wires };
  if (junctions !== undefined) project.junctions = junctions;
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
