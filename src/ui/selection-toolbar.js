import { partOutlineBounds } from '../geometry/parts.js';

export function selectionToolbarBounds(canvas, selections) {
  let left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
  const include = (x, y) => {
    left = Math.min(left, x); top = Math.min(top, y);
    right = Math.max(right, x); bottom = Math.max(bottom, y);
  };
  for (const { type, id } of selections) {
    if (type === 'part') {
      const part = canvas.geometry?.parts.get(id)?.part;
      if (!part) continue;
      const bounds = partOutlineBounds(part);
      include(bounds.left, bounds.top); include(bounds.right, bounds.bottom);
    } else if (type === 'wire') for (const point of canvas.wireRoute(id) ?? []) include(point.x, point.y);
    else if (type === 'junction') {
      const point = canvas.geometry?.junctions.get(id);
      if (point) { include(point.x - 5, point.y - 5); include(point.x + 5, point.y + 5); }
    }
  }
  return left !== Infinity ? { left, top, right, bottom } : null;
}

const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) *
  Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));

export function selectionToolbarPosition(bounds, size, viewport, obstacles = []) {
  const margin = 8, gap = 10;
  const cx = (bounds.left + bounds.right) / 2, cy = (bounds.top + bounds.bottom) / 2;
  const candidates = [
    { x: cx - size.width / 2, y: bounds.top - size.height - gap },
    { x: cx - size.width / 2, y: bounds.bottom + gap },
  ];
  if (bounds.right + gap + size.width <= viewport.width - margin) candidates.push({ x: bounds.right + gap, y: cy - size.height / 2 });
  if (bounds.left - gap - size.width >= margin) candidates.push({ x: bounds.left - size.width - gap, y: cy - size.height / 2 });
  // Bound the search while still checking every obstacle for large selections.
  const nearby = [...obstacles].sort((a, b) => Math.hypot((a.left + a.right) / 2 - cx, (a.top + a.bottom) / 2 - cy) -
    Math.hypot((b.left + b.right) / 2 - cx, (b.top + b.bottom) / 2 - cy)).slice(0, 8);
  for (const obstacle of nearby) candidates.push(
    { x: cx - size.width / 2, y: obstacle.bottom + gap },
    { x: cx - size.width / 2, y: obstacle.top - size.height - gap },
  );
  let best;
  for (const [index, candidate] of candidates.entries()) {
    const x = Math.max(margin, Math.min(Math.max(margin, viewport.width - size.width - margin), candidate.x));
    const y = Math.max(margin, Math.min(Math.max(margin, viewport.height - size.height - margin), candidate.y));
    const rectangle = { left: x, top: y, right: x + size.width, bottom: y + size.height };
    const score = obstacles.reduce((sum, obstacle) => sum + overlap(rectangle, obstacle), 0) * 10000 +
      overlap(rectangle, bounds) * 100 + Math.hypot(x + size.width / 2 - cx, y + size.height / 2 - cy) + index * .001;
    if (!best || score < best.score) best = { x, y, score };
  }
  return { x: best.x, y: best.y };
}

export function positionSelectionToolbar({ toolbar, canvas, selections, root }) {
  const world = selectionToolbarBounds(canvas, selections), svg = canvas.svg;
  if (!world || !svg.clientWidth || !svg.clientHeight) return;
  const frame = svg.getBoundingClientRect(), parent = toolbar.parentElement.getBoundingClientRect();
  if (!frame.width || !frame.height) return;
  const ratioX = frame.width / svg.clientWidth, ratioY = frame.height / svg.clientHeight;
  const project = (value, axis) => ((value - canvas.center[axis]) * canvas.scale + svg[axis === 'x' ? 'clientWidth' : 'clientHeight'] / 2) * (axis === 'x' ? ratioX : ratioY);
  const bounds = { left: project(world.left, 'x'), right: project(world.right, 'x'),
    top: project(world.top, 'y'), bottom: project(world.bottom, 'y') };
  const captions = selections.filter(item => item.type === 'part').map(item => canvas.parts?.entries.get(item.id)?.caption);
  const obstacles = [...['.panel-controls', '.canvas-tools', '.canvas-guide', '.zoom', '.workspace-warning']
    .map(selector => root.querySelector(selector)), ...captions]
    .filter(node => node && !node.hidden).map(node => node.getBoundingClientRect())
    .filter(rect => rect.width > 0 && rect.height > 0)
    .map(rect => ({ left: rect.left - frame.left, top: rect.top - frame.top, right: rect.right - frame.left, bottom: rect.bottom - frame.top }));
  const size = toolbar.getBoundingClientRect();
  const point = selectionToolbarPosition(bounds, size, { width: frame.width, height: frame.height }, obstacles);
  toolbar.style.left = `${point.x + frame.left - parent.left}px`;
  toolbar.style.top = `${point.y + frame.top - parent.top}px`;
}
