import { componentForPart } from './part-component.js';

export function partName(part, component = componentForPart(part)) {
  return part.label?.trim() || component.name;
}

export function endpointName(project, endpoint) {
  if (endpoint.junctionId) return 'Wire junction';
  if (endpoint.wireId) return 'Existing wire';
  const part = project.parts.find(item => item.id === endpoint.partId);
  const component = componentForPart(part);
  const pin = component.pins.find(item => item.id === endpoint.pinId);
  return `${partName(part, component)} · ${pin.label}`;
}
