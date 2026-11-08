import { componentForPart } from './part-component.js';
import { pinById } from './component-pins.js';
import { endpointKey } from '../model/endpoints.js';
import { attachmentConnections } from './mounting.js';
import { internalConnectionsFor } from './part-view.js';

const connectionIndexes = new WeakMap();
const projectIndexes = new WeakMap();

function connectionsByPin(groups) {
  let index = connectionIndexes.get(groups);
  if (!index) {
    index = new Map();
    for (const group of groups) {
      for (const pinId of group) {
        if (!index.has(pinId)) index.set(pinId, []);
        index.get(pinId).push(group);
      }
    }
    connectionIndexes.set(groups, index);
  }
  return index;
}

function indexProject(project) {
  const immutable = Object.isFrozen(project) && Object.isFrozen(project.parts) && Object.isFrozen(project.wires);
  if (immutable && projectIndexes.has(project)) return projectIndexes.get(project);
  const parts = new Map(project.parts.map(part => [part.id, part]));
  const wires = new Map();
  const junctions = new Set((project.junctions ?? []).map(junction => junction.id));
  const adjacent = new Map();
  const mounted = new Map();
  for (const { from, to } of attachmentConnections(project)) {
    for (const [endpoint, neighbor] of [[from, to], [to, from]]) {
      const key = endpointKey(endpoint);
      if (!mounted.has(key)) mounted.set(key, []);
      mounted.get(key).push(neighbor);
    }
  }
  for (const wire of project.wires) {
    wires.set(wire.id, wire);
    for (const endpoint of [wire.from, wire.to]) {
      const key = endpointKey(endpoint);
      if (!adjacent.has(key)) adjacent.set(key, []);
      adjacent.get(key).push(wire);
    }
  }
  const index = { parts, wires, junctions, adjacent, mounted };
  if (immutable) projectIndexes.set(project, index);
  return index;
}

function seedEndpoint(index, seed) {
  if (seed?.wireId) return index.wires.get(seed.wireId)?.from;
  if (seed?.junctionId) {
    return index.junctions.has(seed.junctionId) ? seed : undefined;
  }
  if (seed?.partId && seed.pinId) {
    const part = index.parts.get(seed.partId);
    if (pinById(componentForPart(part), seed.pinId)) return seed;
  }
}

export function traceNet(project, seed) {
  const wireIds = new Set();
  const endpoints = new Map();
  if (!seed) return { wireIds, endpoints };
  const index = indexProject(project);
  const start = seedEndpoint(index, seed);
  if (!start) return { wireIds, endpoints };

  const { adjacent, mounted, parts } = index;
  const visitedGroups = new Map();

  const remaining = [start];
  while (remaining.length) {
    const endpoint = remaining.pop();
    const key = endpointKey(endpoint);
    if (endpoints.has(key)) continue;
    endpoints.set(key, endpoint);
    remaining.push(...(mounted.get(key) ?? []));
    const part = parts.get(endpoint.partId);
    if (part) {
      const component = componentForPart(part);
      const groups = connectionsByPin(internalConnectionsFor(part, component)).get(endpoint.pinId) ?? [];
      let visited = visitedGroups.get(part.id);
      if (!visited) {
        visited = new Set();
        visitedGroups.set(part.id, visited);
      }
      for (const group of groups) {
        if (visited.has(group)) continue;
        visited.add(group);
        remaining.push(...group.map(pinId => ({ partId: part.id, pinId })));
      }
    }
    for (const wire of adjacent.get(key) ?? []) {
      if (wireIds.has(wire.id)) continue;
      wireIds.add(wire.id);
      remaining.push(wire.from, wire.to);
    }
  }
  return { wireIds, endpoints };
}
