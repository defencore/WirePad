import { mountingFor } from '../catalog/index.js';
import { pinById } from '../model/component-pins.js';
import { componentForPart } from '../model/part-component.js';
import { leadShapeError } from '../model/part-pins.js';
import { attachmentError } from '../model/mounting.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { pointFromPart, pointOnPart } from './parts.js';
import { gap, mountingTargets } from './breadboard-targets.js';
import { nominalLeads } from './bendable-placement.js';

const replace = (project, part) => ({ ...project, parts: project.parts.map(item => item.id === part.id ? part : item) });
const withoutAttachment = part => { const { attachment, ...rest } = part; return rest; };

export function moveLead(project, partId, pinId, world) {
  const part = project.parts.find(item => item.id === partId);
  const component = componentForPart(part), profile = component && mountingFor(component.id);
  if (profile?.mode !== 'bendable' || !profile.contacts.some(contact => contact.pinId === pinId) ||
      ![world.x, world.y].every(Number.isFinite)) return null;
  const raw = pointFromPart(part, world, component), root = profile.roots.find(root => root.pinId === pinId);
  const maximum = profile.maxLeadMm * profile.unitsPerMm;
  const length = gap(raw, root), ratio = Math.min(1, maximum / Math.max(length, 1e-12));
  const point = { x: root.x + (raw.x - root.x) * ratio, y: root.y + (raw.y - root.y) * ratio };
  const leads = (part.leads ?? nominalLeads(component, profile)).map(lead => lead.pinId === pinId ? { pinId, ...point } : lead);
  const remaining = part.attachment?.contacts.filter(contact => contact.pinId !== pinId) ?? [];
  let moved = { ...withoutAttachment(part), leads };
  if (remaining.length) moved.attachment = { hostPartId: part.attachment.hostPartId, contacts: remaining };
  if (leadShapeError(moved, component)) return null;
  if (length > maximum) return replace(project, moved);
  const tip = pointOnPart(moved, pinById(component, pinId), component);
  const hosts = mountingTargets(project, moved, profile, { nearby: false });
  const options = hosts.filter(host => !remaining.length || host.part.id === part.attachment.hostPartId)
    .flatMap(host => host.holes.filter(hole => !host.occupied.has(hole.pinId) &&
      !remaining.some(contact => contact.hostPinId === hole.pinId) && gap(tip, hole.point) <= host.radius * .65)
      .map(hole => ({ host, hole, distance: gap(tip, hole.point) }))).sort((a, b) => a.distance - b.distance);
  for (const { host, hole } of options) {
    const local = pointFromPart(moved, hole.point, component);
    const candidate = { ...moved, leads: moved.leads.map(lead => lead.pinId === pinId ? { pinId, ...local } : lead),
      attachment: { hostPartId: host.part.id, contacts: [...remaining, { pinId, hostPinId: hole.pinId }] } };
    const next = replace(project, candidate);
    if (!leadShapeError(candidate, component) && !attachmentError(next, candidate)) return next;
  }
  return replace(project, moved);
}

export function moveBodyKeepingLeads(project, partId, destination) {
  const part = project.parts.find(item => item.id === partId);
  const component = componentForPart(part), profile = component && mountingFor(component.id);
  if (profile?.mode !== 'bendable' || !part.leads || ![destination.x, destination.y].every(Number.isFinite)) return null;
  const x = Math.max(-POSITION_LIMIT, Math.min(POSITION_LIMIT, destination.x));
  const y = Math.max(-POSITION_LIMIT, Math.min(POSITION_LIMIT, destination.y));
  if (x === part.x && y === part.y) return null;
  const tips = part.leads.map(lead => ({ pinId: lead.pinId,
    world: pointOnPart(part, pinById(component, lead.pinId), component) }));
  function attempt(fraction) {
    const moved = { ...part, x: part.x + (x - part.x) * fraction, y: part.y + (y - part.y) * fraction };
    moved.leads = tips.map(({ pinId, world }) => ({ pinId, ...pointFromPart(moved, world, component) }));
    if (leadShapeError(moved, component)) return null;
    const next = replace(project, moved);
    return attachmentError(next, moved) ? null : next;
  }
  const full = attempt(1);
  if (full) return full;
  let low = 0, high = 1, best;
  for (let index = 0; index < 20; index++) {
    const middle = (low + high) / 2, next = attempt(middle);
    if (next) { low = middle; best = next; } else high = middle;
  }
  return low > 1e-5 ? best : null;
}
