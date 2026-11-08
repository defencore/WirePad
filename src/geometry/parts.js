import { componentForPart } from '../model/part-component.js';
import { pinById } from '../model/component-pins.js';
import { endpointKey } from '../model/endpoints.js';
import { partScale, partSize } from '../model/part-placement.js';
import { instancePinPoint, instancePins } from '../model/part-pins.js';
import { mountingFor } from '../catalog/index.js';

export const translation = (x, y) => `translate(${x} ${y})`;
export function partRotation(part, component) {
  const { width, height } = partSize(part, component);
  const { x, y } = partScale(part);
  const rotation = `rotate(${part.rotation ?? 0} ${width / 2} ${height / 2})`;
  return x === 1 && y === 1 ? rotation : `${rotation} scale(${x} ${y})`;
}

export function labelPosition(part, component) {
  if (part.leads) {
    const bounds = partBounds(part, component);
    return translation((bounds.left + bounds.right) / 2 - part.x, bounds.bottom - part.y + 8);
  }
  const { width, height } = partSize(part, component);
  return translation(width / 2, height / 2 + ((part.rotation ?? 0) % 180 ? width : height) / 2 + 8);
}

export function partBounds(part, component = componentForPart(part)) {
  if (part.leads) {
    const profile = mountingFor(component.id);
    const body = profile?.body ?? { x: 0, y: 0, width: component.width, height: component.height };
    const radius = profile?.leadRadius ?? 2.2;
    const leadEnvelope = [...(profile?.roots ?? []), ...part.leads]
      .flatMap(point => rectanglePoints({ x: point.x - radius, y: point.y - radius,
        width: radius * 2, height: radius * 2 }));
    const points = [...rectanglePoints({ x: body.x - .6, y: body.y - .6,
      width: body.width + 1.2, height: body.height + 1.2 }), ...leadEnvelope]
      .map(point => pointOnPart(part, { x: point.x, y: point.y }, component));
    return boundsForPoints(points);
  }
  return defaultPartBounds(part, component);
}

function defaultPartBounds(part, component) {
  const { width, height } = partSize(part, component);
  const turned = (part.rotation ?? 0) % 180 !== 0;
  const visualWidth = turned ? height : width;
  const visualHeight = turned ? width : height;
  const left = part.x + (width - visualWidth) / 2;
  const top = part.y + (height - visualHeight) / 2;
  return { left, top, right: left + visualWidth, bottom: top + visualHeight };
}

function rectanglePoints({ x, y, width, height }) {
  return [{ x, y }, { x: x + width, y }, { x: x + width, y: y + height }, { x, y: y + height }];
}

function boundsForPoints(points) {
  return { left: Math.min(...points.map(point => point.x)), top: Math.min(...points.map(point => point.y)),
    right: Math.max(...points.map(point => point.x)), bottom: Math.max(...points.map(point => point.y)) };
}

export function partBodyBounds(part, component = componentForPart(part)) {
  const body = mountingFor(component.id)?.body;
  return body ? boundsForPoints(rectanglePoints(body).map(point => pointOnPart(part, point, component)))
    : defaultPartBounds(part, component);
}

function rotateVector({ x, y }, rotation) {
  switch (rotation) {
    case 90: return { x: -y, y: x };
    case 180: return { x: -x, y: -y };
    case 270: return { x: y, y: -x };
    default: return { x, y };
  }
}

export function pointOnPart(part, point, component = componentForPart(part)) {
  const local = point.id === undefined ? point : instancePinPoint(part, point);
  const scale = partScale(part);
  const { width, height } = partSize(part, component);
  const cx = width / 2, cy = height / 2;
  const offset = rotateVector({ x: local.x * scale.x - cx, y: local.y * scale.y - cy }, part.rotation);
  return { x: part.x + cx + offset.x, y: part.y + cy + offset.y };
}

export function pointFromPart(part, point, component = componentForPart(part)) {
  const scale = partScale(part);
  const { width, height } = partSize(part, component);
  const cx = width / 2, cy = height / 2;
  const offset = rotateVector({ x: point.x - part.x - cx, y: point.y - part.y - cy }, (360 - (part.rotation ?? 0)) % 360);
  return { x: (cx + offset.x) / scale.x, y: (cy + offset.y) / scale.y };
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
    const pin = part.leads ? instancePins(part, component).find(pin => pin.id === endpoint.pinId) : pinById(component, endpoint.pinId);
    const normal = pin.surface ? undefined : rotateVector(pinVector(pin, component), part.rotation);
    const bounds = partBounds(part, component);
    const point = {
      ...pointOnPart(part, pin, component), normal,
      surfacePartId: pin.surface && (part.leads || component.contactLayout === 'physical') ? part.id : undefined,
      bounds: pin.surface ? undefined : {
        x: [bounds.left, bounds.right],
        y: [bounds.top, bounds.bottom],
      },
    };
    pins.set(key, point);
    return point;
  };
}
