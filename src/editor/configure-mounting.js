import { mountingFor } from '../catalog/index.js';
import { pinById } from '../model/component-pins.js';
import { componentForPart } from '../model/part-component.js';
import { breadboardOccupancy } from '../model/breadboard-occupancy.js';
import { attachmentError, mountingHoles, mountingTolerance, MOUNTING_EPSILON } from '../model/mounting.js';
import { leadShapeError } from '../model/part-pins.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { partBodiesOverlap, pointFromPart, pointInsidePartBody, pointOnPart } from '../geometry/parts.js';

const key = point => `${Math.round(point.x * 10000)},${Math.round(point.y * 10000)}`;
const conductor = hole => hole.conductor ?? hole.group;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const compare = (a, b) => Math.abs(a[0] - b[0]) > 1e-7 ? a[0] - b[0] : a[1] - b[1];

function atPosition(table, point, requiredConductor, tolerance) {
  const x = Math.round(point.x * 10000), y = Math.round(point.y * 10000);
  for (const dx of [-1, 0, 1]) for (const dy of [-1, 0, 1]) {
    const hole = table.positions.get(`${x + dx},${y + dy}`);
    if (hole && conductor(hole) === requiredConductor && distance(hole.point, point) <= MOUNTING_EPSILON) return hole;
  }
  if (tolerance > MOUNTING_EPSILON) {
    let best, closest = Infinity;
    for (const hole of table.groups.get(requiredConductor) ?? []) {
      if (Math.abs(hole.point.x - point.x) > tolerance || Math.abs(hole.point.y - point.y) > tolerance) continue;
      const gap = distance(hole.point, point);
      if (gap < closest) { best = hole; closest = gap; }
    }
    return best;
  }
}

function tableFor(oldHost, host, profile) {
  const oldComponent = componentForPart(oldHost), component = componentForPart(host);
  const old = new Map(mountingHoles(oldComponent, profile).map(hole => [hole.pinId, hole]));
  const holes = mountingHoles(component, profile).map(hole => ({ ...hole, point: pointOnPart(host, hole, component) }));
  const groups = new Map();
  for (const hole of holes) {
    const id = conductor(hole);
    if (!groups.has(id)) groups.set(id, []);
    groups.get(id).push(hole);
  }
  return { host, old, holes, groups, positions: new Map(holes.map(hole => [key(hole.point), hole])) };
}

function preserveWiredConductors(project, oldHost, host) {
  if (mountingFor(oldHost.componentId)?.type !== 'breadboard') return;
  const endpoints = project.wires.flatMap(wire => [wire.from, wire.to]).filter(endpoint => endpoint.partId === host.id);
  if (!endpoints.length) return;
  const oldComponent = componentForPart(oldHost), component = componentForPart(host);
  const allRegions = { allowRails: true };
  const oldHoles = new Map(mountingHoles(oldComponent, allRegions).map(hole => [hole.pinId, hole]));
  const newHoles = new Map(mountingHoles(component, allRegions).map(hole => [hole.pinId, hole]));
  for (const endpoint of endpoints) {
    const before = oldHoles.get(endpoint.pinId), after = newHoles.get(endpoint.pinId);
    if (!after) throw new Error('These settings would remove connected contacts. Disconnect their wires before changing the layout.');
    if (before && conductor(before) !== conductor(after)) {
      const label = pinById(oldComponent, endpoint.pinId)?.label ?? endpoint.pinId;
      throw new Error(`Wired contact ${label} would move to another rail section. Keep the split position, or move/disconnect that wire before resizing.`);
    }
  }
}

function recordFor(part, table, wired) {
  const component = componentForPart(part), profile = mountingFor(component.id);
  const contacts = part.attachment.contacts.map(contact => {
    const old = table.old.get(contact.hostPinId);
    return { ...contact, conductor: old && conductor(old) };
  });
  for (const contact of contacts) if (!contact.conductor || !table.groups.has(contact.conductor)) {
    throw new Error(`This layout removes a conductor with occupied breadboard contacts used by ${component.shortName ?? component.name}. Keep that row or rail, or detach the part before resizing.`);
  }
  return { part, component, profile, table, contacts, tolerance: mountingTolerance(part, table.host),
    available: (hole, contact) => !wired.has(hole.pinId) || hole.pinId === contact.hostPinId };
}

function candidateFor(record, part, contacts) {
  if ([part.x, part.y].some(value => !Number.isFinite(value) || Math.abs(value) > POSITION_LIMIT) ||
      leadShapeError(part, record.component)) return null;
  const old = record.part;
  const mapped = { ...part, attachment: { hostPartId: old.attachment.hostPartId, contacts } };
  let deformation = 0;
  if (part.leads) for (const lead of part.leads) {
    const previous = old.leads.find(previous => previous.pinId === lead.pinId);
    deformation += distance(lead, previous) / record.profile.unitsPerMm;
  }
  if (deformation < 1e-7) deformation = 0;
  return { part: mapped, cost: [deformation, distance(part, old)],
    tips: contacts.map(contact => pointOnPart(mapped, pinById(record.component, contact.pinId), record.component)) };
}

function translatedCandidates(record) {
  const { part, component, table, contacts } = record;
  const anchor = contacts[0], current = pointOnPart(part, pinById(component, anchor.pinId), component);
  const candidates = [];
  for (const hole of table.groups.get(anchor.conductor)) {
    if (!record.available(hole, anchor)) continue;
    const moved = { ...part, x: part.x + hole.point.x - current.x, y: part.y + hole.point.y - current.y };
    const mapped = [], used = new Set();
    for (const contact of contacts) {
      const point = pointOnPart(moved, pinById(component, contact.pinId), component);
      const target = atPosition(table, point, contact.conductor, record.tolerance);
      if (!target || used.has(target.pinId) || !record.available(target, contact)) break;
      used.add(target.pinId);
      mapped.push({ pinId: contact.pinId, hostPinId: target.pinId });
    }
    if (mapped.length === contacts.length) {
      const candidate = candidateFor(record, moved, mapped);
      if (candidate) candidates.push(candidate);
    }
  }
  return candidates.sort((a, b) => compare(a.cost, b.cost));
}

function formedCandidates(record) {
  const { part, component, profile, contacts, table } = record;
  const shifts = new Map([['0,0', { x: 0, y: 0 }]]);
  for (const contact of contacts) {
    const current = pointOnPart(part, pinById(component, contact.pinId), component);
    for (const hole of table.groups.get(contact.conductor)) {
      const shift = { x: hole.point.x - current.x, y: hole.point.y - current.y };
      shifts.set(key(shift), shift);
    }
  }
  const candidates = [];
  for (const shift of shifts.values()) {
    const moved = { ...part, x: part.x + shift.x, y: part.y + shift.y };
    const options = contacts.map(contact => {
      const preferred = pointOnPart(moved, pinById(component, contact.pinId), component);
      const root = profile.roots.find(root => root.pinId === contact.pinId);
      return { contact, holes: table.groups.get(contact.conductor).filter(hole => {
        if (!record.available(hole, contact)) return false;
        const local = pointFromPart(moved, hole.point, component);
        return distance(local, root) <= profile.maxLeadMm * profile.unitsPerMm + 1e-7;
      }).sort((a, b) => distance(a.point, preferred) - distance(b.point, preferred)).slice(0, 4) };
    }).sort((a, b) => a.holes.length - b.holes.length);
    if (options.some(option => !option.holes.length)) continue;
    function choose(index, selected) {
      if (index === options.length) {
        const leads = part.leads.map(lead => {
          const target = selected.find(target => target.contact.pinId === lead.pinId);
          return target ? { pinId: lead.pinId, ...pointFromPart(moved, target.hole.point, component) } : lead;
        });
        const mapped = contacts.map(({ pinId }) => ({ pinId,
          hostPinId: selected.find(target => target.contact.pinId === pinId).hole.pinId }));
        const candidate = candidateFor(record, { ...moved, leads }, mapped);
        if (candidate) candidates.push(candidate);
        return;
      }
      const option = options[index];
      for (const hole of option.holes) if (!selected.some(target => target.hole.pinId === hole.pinId)) {
        choose(index + 1, [...selected, { contact: option.contact, hole }]);
      }
    }
    choose(0, []);
  }
  return candidates.sort((a, b) => compare(a.cost, b.cost));
}

function compatible(first, second) {
  if (partBodiesOverlap(first.part, second.part)) return false;
  const occupied = new Set(first.part.attachment.contacts.map(contact => contact.hostPinId));
  if (second.part.attachment.contacts.some(contact => occupied.has(contact.hostPinId))) return false;
  return !first.tips.some(point => pointInsidePartBody(second.part, point)) &&
    !second.tips.some(point => pointInsidePartBody(first.part, point));
}

function solve(base, records, pools) {
  if (pools.some(pool => !pool.length)) return null;
  const order = records.map((record, index) => ({ record, pool: pools[index] })).sort((a, b) => a.pool.length - b.pool.length);
  const lower = Array.from({ length: order.length + 1 }, () => [0, 0]);
  for (let index = order.length - 1; index >= 0; index--) lower[index] = add(order[index].pool[0].cost, lower[index + 1]);
  let best, bestCost;
  function choose(index, selected, cost) {
    if (bestCost && compare(add(cost, lower[index]), bestCost) >= 0) return;
    if (index === order.length) {
      const replacements = new Map(selected.map(candidate => [candidate.part.id, candidate.part]));
      const next = { ...base, parts: base.parts.map(part => replacements.get(part.id) ?? part) };
      if (selected.some(candidate => attachmentError(next, candidate.part))) return;
      best = next;
      bestCost = cost;
      return;
    }
    for (const candidate of order[index].pool) if (selected.every(previous => compatible(previous, candidate))) {
      choose(index + 1, [...selected, candidate], add(cost, candidate.cost));
    }
  }
  choose(0, [], [0, 0]);
  return best;
}

// Reconfiguration is a single transaction: compare every part against the final
// host and its final neighbors, rather than rejecting other parts' old poses.
export function configureMountedParts(project, partId, host) {
  const oldHost = project.parts.find(part => part.id === partId);
  const base = { ...project, parts: project.parts.map(part => part.id === partId ? host : part) };
  preserveWiredConductors(project, oldHost, host);
  const children = project.parts.filter(part => part.attachment?.hostPartId === partId);
  if (!children.length) return base;
  const wired = new Set([...breadboardOccupancy(project, partId)].filter(([, value]) => value.wires.length).map(([id]) => id));
  const tables = new Map();
  const records = children.map(part => {
    const profile = mountingFor(part.componentId), variant = Boolean(profile?.allowRails);
    if (!tables.has(variant)) tables.set(variant, tableFor(oldHost, host, profile));
    return recordFor(part, tables.get(variant), wired);
  });
  const pools = records.map(record => translatedCandidates(record));
  let next = solve(base, records, pools);
  if (!next) {
    const flexible = records.map((record, index) => record.profile?.mode === 'bendable'
      ? [...pools[index], ...formedCandidates(record)].sort((a, b) => compare(a.cost, b.cost)) : pools[index]);
    next = solve(base, records, flexible);
  }
  if (!next) throw new Error('These dimensions cannot keep the mounted parts on their original conductors within their physical reach and clearance. Use a smaller change or detach the affected parts before resizing.');
  return next;
}
