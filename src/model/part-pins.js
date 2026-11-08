import { mountingFor } from '../catalog/index.js';
import { POSITION_LIMIT } from './limits.js';

export function instancePinPoint(part, pin) {
  const lead = part.leads?.find(lead => lead.pinId === pin.id);
  return { x: lead?.x ?? pin.x, y: lead?.y ?? pin.y };
}

export function instancePins(part, component) {
  if (!part.leads) return component.pins;
  const leads = new Map(part.leads.map(lead => [lead.pinId, lead]));
  return component.pins.map(pin => {
    const lead = leads.get(pin.id);
    return lead ? { ...pin, x: lead.x, y: lead.y, surface: true } : pin;
  });
}

export function leadShapeError(part, component) {
  if (part.leads === undefined) return null;
  const profile = mountingFor(component.id);
  const prefix = `Component “${part.id}”`;
  if (profile?.type !== 'breadboard-part' || profile.mode !== 'bendable') {
    return `${prefix} does not support formed leads.`;
  }
  if (!Array.isArray(part.leads) || part.leads.length !== profile.contacts.length) {
    return `${prefix} must define every formed lead exactly once.`;
  }
  const roots = new Map(profile.roots.map(root => [root.pinId, root]));
  const ids = new Set(profile.contacts.map(contact => contact.pinId));
  const used = new Set();
  for (const lead of part.leads) {
    if (!lead || !ids.has(lead.pinId) || used.has(lead.pinId)) return `${prefix} has an invalid or repeated formed lead.`;
    if (![lead.x, lead.y].every(value => Number.isFinite(value) && Math.abs(value) <= POSITION_LIMIT)) {
      return `${prefix} has a formed lead with invalid coordinates.`;
    }
    const root = roots.get(lead.pinId);
    if (!root || Math.hypot(lead.x - root.x, lead.y - root.y) / profile.unitsPerMm > profile.maxLeadMm + 1e-7) {
      return `${prefix} has a formed lead beyond its supported reach.`;
    }
    used.add(lead.pinId);
  }
  return null;
}
