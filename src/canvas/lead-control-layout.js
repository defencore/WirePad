import { instancePins } from '../model/part-pins.js';
import { partBodyBounds, pointOnPart } from '../geometry/parts.js';

export const LEAD_HIT_RADIUS = 10;
export const LEAD_HANDLE_SPACING = 24;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

function bodyClear(point, body, radius) {
  const x = Math.max(body.left - point.x, 0, point.x - body.right);
  const y = Math.max(body.top - point.y, 0, point.y - body.bottom);
  return Math.hypot(x, y) >= radius - 1e-7;
}

export function leadControlLayout(part, component, zoom) {
  const radius = LEAD_HIT_RADIUS / zoom;
  const spacing = LEAD_HANDLE_SPACING / zoom;
  const clearance = radius + 2 / zoom;
  const body = partBodyBounds(part, component);
  const controls = instancePins(part, component).map(pin => ({ pin, point: pointOnPart(part, pin, component) }));
  const clear = point => bodyClear(point, body, radius);
  const separated = (point, others) => others.every(other => distance(point, other) >= spacing - 1e-7);
  const fixed = controls.filter(control => clear(control.point) &&
    separated(control.point, controls.filter(other => other !== control).map(other => other.point)));
  const placed = fixed.map(control => control.point);
  const fixedControls = new Set(fixed);

  for (const control of controls) {
    if (fixedControls.has(control)) {
      control.display = control.point;
      continue;
    }
    const point = control.point;
    const sides = [
      { x: body.left - clearance, y: clamp(point.y, body.top, body.bottom), axis: 'y' },
      { x: body.right + clearance, y: clamp(point.y, body.top, body.bottom), axis: 'y' },
      { x: clamp(point.x, body.left, body.right), y: body.top - clearance, axis: 'x' },
      { x: clamp(point.x, body.left, body.right), y: body.bottom + clearance, axis: 'x' },
    ];
    const candidates = [point];
    for (const side of sides) {
      // Extra side slots ensure every lead remains accessible even when all
      // tips coincide or the body is smaller than one screen-space handle.
      for (let offset = -controls.length; offset <= controls.length; offset++) {
        candidates.push({ x: side.x + (side.axis === 'x' ? offset * spacing : 0),
          y: side.y + (side.axis === 'y' ? offset * spacing : 0) });
      }
    }
    for (const other of placed) {
      const angle = Math.atan2(point.y - other.y, point.x - other.x);
      for (let step = 0; step < 16; step++) {
        const direction = angle + step * Math.PI / 8;
        candidates.push({ x: other.x + Math.cos(direction) * spacing,
          y: other.y + Math.sin(direction) * spacing });
      }
    }
    control.display = candidates.filter(candidate => clear(candidate) && separated(candidate, placed))
      .sort((a, b) => distance(a, point) - distance(b, point))[0];
    placed.push(control.display);
  }
  return controls;
}
