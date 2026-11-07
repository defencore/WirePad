import { pinById } from './component-pins.js';
import { traceNet } from './continuity.js';
import { componentForPart } from './part-component.js';
import { endpointKey } from '../model/endpoints.js';

export const DEFAULT_WIRE_COLOR = '#2c83d9';
export const SUPPLY_WIRE_COLOR = '#e35050';
export const GROUND_WIRE_COLOR = '#1b2531';
export const wirePalette = [
  [SUPPLY_WIRE_COLOR, 'Red'], ['#d08722', 'Orange'], ['#eab739', 'Yellow'], ['#12946d', 'Green'],
  [DEFAULT_WIRE_COLOR, 'Blue'], ['#8b5cc7', 'Violet'], ['#46536a', 'Slate'], [GROUND_WIRE_COLOR, 'Black'],
];

const normalize = value => String(value ?? '').trim().toUpperCase().replace(/[−–]/g, '-');
const groundName = /^(?:GND|AGND|DGND|PGND|SGND|GNDA|GNDD|VSS|VSSA|VSSD|GROUND)(?:[-_]?\d+)?$/;
const supplyName = /^(?:[AD]?VCC|[AD]?VDD|VIN|VOUT|VBUS|VBAT|VSYS|VMOT|VRTC|VBACKUP|VBCKP)(?:[-_]?(?:\d+(?:[VP.]\d+)?V?|IO\d*|AUX|IN|OUT|DCIN|SYS|RF|RTC|ADJ|H|R|T))*$/;
const voltageName = /^\+?(?:\d+(?:[P.]\d+)?V|\d+V\d+)(?:D|A)?$/;
const referenceOrControl = /(?:REF|ADC|(?:^|[-_])EN(?:$|[-_])|ENABLE|SENSE|DET(?:ECT)?|GOOD|PGOOD)/;
const roleCaches = new WeakMap();

export function pinPowerRole(pin) {
  if (!pin) return null;
  const id = normalize(pin.id);
  const label = normalize(pin.label);
  const power = pin.type === 'power_in' || pin.type === 'power_out';
  const contact = power || pin.type === 'passive';
  if (!contact) return null;
  if (groundName.test(id) || groundName.test(label)) return 'ground';
  if (power && (/^(?:BAT|B|IN|OUT|DC|ESC)-$/.test(label) || label === '-' || label === 'G' || /^(?:CH\d+ )GND$/.test(label))) {
    return 'ground';
  }
  if (referenceOrControl.test(id) || referenceOrControl.test(label)) return null;
  if (supplyName.test(id) || supplyName.test(label) || voltageName.test(id) || voltageName.test(label)) return 'supply';
  if (power && (/^(?:V|BAT|B|IN|OUT|DC|ESC)\+$/.test(label) || label === '+')) {
    return 'supply';
  }
  return null;
}

function netRole(project, seed) {
  if (!seed) return null;
  const key = seed.wireId ? `wire/${seed.wireId}` : endpointKey(seed);
  // Saved history snapshots are immutable; temporary editable projects must be traced afresh.
  const immutable = Object.isFrozen(project) && Object.isFrozen(project.parts) && Object.isFrozen(project.wires);
  let cache = immutable ? roleCaches.get(project) : null;
  if (cache?.has(key)) return cache.get(key);
  const net = traceNet(project, seed);
  const parts = new Map(project.parts.map(part => [part.id, part]));
  const roles = new Set();
  for (const endpoint of net.endpoints.values()) {
    const role = pinPowerRole(pinById(componentForPart(parts.get(endpoint.partId)), endpoint.pinId));
    if (role) roles.add(role);
  }
  const role = roles.size > 1 ? 'conflict' : roles.values().next().value ?? null;
  if (immutable) {
    if (!cache) roleCaches.set(project, cache = new Map());
    cache.set(key, role);
    for (const endpoint of net.endpoints.values()) cache.set(endpointKey(endpoint), role);
    for (const wireId of net.wireIds) cache.set(`wire/${wireId}`, role);
  }
  return role;
}

export function connectionPowerRole(project, from, to) {
  const roles = new Set([netRole(project, from), netRole(project, to)]);
  roles.delete(null);
  return roles.has('conflict') || roles.size > 1 ? 'conflict' : roles.values().next().value ?? null;
}

export function automaticWireColor(project, from, to, fallback = DEFAULT_WIRE_COLOR) {
  const role = connectionPowerRole(project, from, to);
  if (role === 'ground') return GROUND_WIRE_COLOR;
  if (role === 'supply') return SUPPLY_WIRE_COLOR;
  if (role === 'conflict') return DEFAULT_WIRE_COLOR;
  return fallback;
}
