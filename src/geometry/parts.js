import { componentForPart } from '../model/part-component.js';
import { pinById } from '../model/component-pins.js';
import { endpointKey } from '../model/endpoints.js';

export const translation = (x, y) => `translate(${x} ${y})`;
export const partRotation = ({ rotation = 0 }, { width, height }) => `rotate(${rotation} ${width / 2} ${height / 2})`;
export const labelPosition = ({ rotation = 0 }, { width, height }) =>
  translation(width / 2, height / 2 + (rotation % 180 ? width : height) / 2 + 8);

export function partBounds(part, component = componentForPart(part)) {
  const { width, height } = component;
  const turned = (part.rotation ?? 0) % 180 !== 0;
  const visualWidth = turned ? height : width;
  const visualHeight = turned ? width : height;
  const left = part.x + (width - visualWidth) / 2;
  const top = part.y + (height - visualHeight) / 2;
  return { left, top, right: left + visualWidth, bottom: top + visualHeight };
}

function rotateVector({ x, y }, rotation) {
  switch (rotation) {
    case 90: return { x: -y, y: x };
    case 180: return { x: -x, y: -y };
    case 270: return { x: y, y: -x };
    default: return { x, y };
  }
}

function pinVector(pin, component) {
  if (pin.x === 0) return { x: -1, y: 0 };
  if (pin.x === component.width) return { x: 1, y: 0 };
  if (pin.y === 0) return { x: 0, y: -1 };
  if (pin.y === component.height) return { x: 0, y: 1 };
  return { x: 1, y: 0 };
}

export function endpointPositions(project) {
  const parts = new Map(project.parts.map(part => [part.id, part]));
  const junctions = new Map((project.junctions ?? []).map(({ id, x, y }) => [id, { x, y }]));
  const pins = new Map();
  return endpoint => {
    if (endpoint.wireId) return endpoint.point;
    if (endpoint.junctionId) return junctions.get(endpoint.junctionId);
    const key = endpointKey(endpoint);
    if (pins.has(key)) return pins.get(key);
    const part = parts.get(endpoint.partId);
    const component = componentForPart(part);
    const pin = pinById(component, endpoint.pinId);
    const cx = component.width / 2;
    const cy = component.height / 2;
    const offset = rotateVector({ x: pin.x - cx, y: pin.y - cy }, part.rotation);
    const normal = pin.surface ? undefined : rotateVector(pinVector(pin, component), part.rotation);
    const bounds = partBounds(part, component);
    const point = {
      x: part.x + cx + offset.x, y: part.y + cy + offset.y, normal,
      surfacePartId: pin.surface && component.contactLayout === 'physical' ? part.id : undefined,
      bounds: pin.surface ? undefined : {
        x: [bounds.left, bounds.right],
        y: [bounds.top, bounds.bottom],
      },
    };
    pins.set(key, point);
    return point;
  };
}
