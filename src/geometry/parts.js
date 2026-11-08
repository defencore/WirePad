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
  const profile = mountingFor(component.id);
  if (part.leads || profile?.bodyFor || profile?.type === 'breadboard-module' && (part.scale || part.attachment)) {
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
  const profile = mountingFor(component.id);
  const view = profile?.bodyFor?.(component) ??
    (profile?.type === 'breadboard-module' && (part.scale || part.attachment) && (profile.viewBounds ?? profile.body));
  if (view) return boundsForPoints(rectanglePoints(view).map(point => pointOnPart(part, point, component)));
  return defaultPartBounds(part, component);
}

export function partViewCenter(component) {
  const profile = mountingFor(component.id);
  const view = profile?.viewBounds ?? profile?.bodyFor?.(component);
  return view ? { x: view.x + view.width / 2, y: view.y + view.height / 2 }
    : { x: component.width / 2, y: component.height / 2 };
}

export function partOutlineLocalBounds(part, component = componentForPart(part)) {
  if (part.leads) {
    const bounds = partBounds({ ...part, x: 0, y: 0, rotation: 0, scale: { x: 1, y: 1 } }, component);
    return { x: bounds.left, y: bounds.top, width: bounds.right - bounds.left, height: bounds.bottom - bounds.top };
  }
  const profile = mountingFor(component.id);
  if (profile?.renderMounted && !part.scale && !part.attachment) {
    return { x: 0, y: 0, width: component.width, height: component.height };
  }
  return profile?.bodyFor?.(component) ?? profile?.body ?? { x: 0, y: 0, width: component.width, height: component.height };
}

export function partOutlineBounds(part, component = componentForPart(part)) {
  return boundsForPoints(rectanglePoints(partOutlineLocalBounds(part, component)).map(point => pointOnPart(part, point, component)));
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
  const regions = partBodyRegions(part, component);
  return { left: Math.min(...regions.map(region => region.left)), top: Math.min(...regions.map(region => region.top)),
    right: Math.max(...regions.map(region => region.right)), bottom: Math.max(...regions.map(region => region.bottom)) };
}

export function partBodyRegions(part, component = componentForPart(part)) {
  const profile = mountingFor(component.id);
  const body = profile?.bodyFor?.(component) ?? profile?.body;
  const regions = profile?.bodyRegions ?? (body ? [body] : null);
  return regions ? regions.map(region => boundsForPoints(rectanglePoints(region)
    .map(point => pointOnPart(part, point, component)))) : [defaultPartBounds(part, component)];
}

export function pointInsidePartBody(part, point, component = componentForPart(part)) {
  return partBodyRegions(part, component).some(region => point.x > region.left && point.x < region.right &&
    point.y > region.top && point.y < region.bottom);
}

export function bodyRegionsOverlap(first, second, tolerance = 1e-4) {
  return first.some(a => second.some(b => Math.min(a.right, b.right) - Math.max(a.left, b.left) > tolerance &&
    Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > tolerance));
}

export function partBodiesOverlap(first, second, tolerance = 1e-4) {
  return bodyRegionsOverlap(partBodyRegions(first), partBodyRegions(second), tolerance);
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
