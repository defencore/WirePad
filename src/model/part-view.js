import { mountingFor } from '../catalog/index.js';

const pinIndexes = new WeakMap();
const connectionGroups = new WeakMap();
const NO_CONNECTIONS = Object.freeze([]);

export function viewForPart(part) {
  const view = mountingFor(part.componentId)?.view;
  return view && part.view === view.id ? view : null;
}

export function viewPin(view, pinId) {
  if (!view) return undefined;
  let index = pinIndexes.get(view);
  if (!index) {
    index = new Map(view.pins.map(pin => [pin.pinId, pin]));
    pinIndexes.set(view, index);
  }
  return index.get(pinId);
}

export function compactBoardView(part, componentId = part.componentId) {
  const profile = mountingFor(componentId);
  if (profile?.type === 'breadboard-part') {
    return profile.mode === 'rigid' && Boolean(profile.view) && part.view === profile.view.id;
  }
  return profile?.type === 'breadboard-module' && (profile.view
    ? part.view === profile.view.id : Boolean(part.scale || part.attachment));
}

export function activateMountingView(part, profile = mountingFor(part.componentId)) {
  return profile?.view ? { ...part, view: profile.view.id } : part;
}

export function partViewError(part) {
  if (part.view === undefined) return null;
  return viewForPart(part) ? null : `Component “${part.id}” has an unsupported physical view.`;
}

export function internalConnectionsFor(part, component) {
  const original = component?.internalConnections ?? NO_CONNECTIONS;
  const view = part && viewForPart(part);
  if (!view?.connections?.length) return original;
  let groups = connectionGroups.get(view);
  if (!groups) {
    groups = Object.freeze([...original, ...view.connections]);
    connectionGroups.set(view, groups);
  }
  return groups;
}
