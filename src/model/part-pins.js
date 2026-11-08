import { mountingFor } from '../catalog/index.js';
import { POSITION_LIMIT } from './limits.js';
import { viewForPart, viewPin } from './part-view.js';

export function instancePinPoint(part, pin) {
  const lead = part.leads?.find(lead => lead.pinId === pin.id);
  const projected = viewPin(viewForPart(part), pin.id);
  return { x: lead?.x ?? projected?.x ?? pin.x, y: lead?.y ?? projected?.y ?? pin.y };
}

export function instancePins(part, component) {
  const view = viewForPart(part);
  if (!part.leads && !view) return component.pins;
  const leads = new Map((part.leads ?? []).map(lead => [lead.pinId, lead]));
  return component.pins.map(pin => {
    const projected = viewPin(view, pin.id);
    const physical = projected ? { ...pin, ...projected, id: pin.id, face: projected.face ?? 'front', back: false, surface: true,
      description: `${projected.description ?? pin.description ?? ''}${projected.face === 'rear' ? ' Rear contact projected through the PCB; shown with a dashed BACK marker.' : ''}` } : pin;
    const lead = leads.get(pin.id);
    return lead ? { ...physical, x: lead.x, y: lead.y, surface: true } : physical;
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
