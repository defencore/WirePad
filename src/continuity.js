import { componentById } from './catalog.js';
import { pinById } from './component-pins.js';
import { endpointKey } from './routing.js';

function seedEndpoint(project, seed) {
  if (seed?.wireId) return project.wires.find(wire => wire.id === seed.wireId)?.from;
  if (seed?.junctionId) {
    return project.junctions?.some(junction => junction.id === seed.junctionId) ? seed : undefined;
  }
  if (seed?.partId && seed.pinId) {
    const part = project.parts.find(part => part.id === seed.partId);
    if (pinById(componentById.get(part?.componentId), seed.pinId)) return seed;
  }
}

export function traceNet(project, seed) {
  const wireIds = new Set();
  const endpoints = new Map();
  const start = seedEndpoint(project, seed);
  if (!start) return { wireIds, endpoints };

  const adjacent = new Map();
  for (const wire of project.wires) {
    for (const endpoint of [wire.from, wire.to]) {
      const key = endpointKey(endpoint);
      if (!adjacent.has(key)) adjacent.set(key, []);
      adjacent.get(key).push(wire);
    }
  }

  const remaining = [start];
  while (remaining.length) {
    const endpoint = remaining.pop();
    const key = endpointKey(endpoint);
    if (endpoints.has(key)) continue;
    endpoints.set(key, endpoint);
    for (const wire of adjacent.get(key) ?? []) {
      if (wireIds.has(wire.id)) continue;
      wireIds.add(wire.id);
      remaining.push(wire.from, wire.to);
    }
  }
  return { wireIds, endpoints };
}
