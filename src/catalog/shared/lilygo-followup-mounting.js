import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';
import { circle, rect } from './svg.js';
import { lilygoFollowupReviews } from '../data/lilygo-mounting-followup/reviews.js';

// Capture canonical hardware before resolving an instance's physical view. The
// manufacturer lead grid is independent of the published composite drawing.
export function lilygoFollowupMounting(entry, boardBounds) {
  const review = lilygoFollowupReviews[entry.component.id];
  if (!review) return undefined;
  const { component } = entry, scale = 10, origin = { x: 20, y: 20 };
  const coordinates = new Map(), leads = [];
  for (const row of review.rows) {
    const pins = component.pins.filter(pin => pin.number.startsWith(`${row.ref}.`));
    if (pins.length !== row.count) throw new Error(`${component.id}: incomplete ${row.ref} source header`);
    for (const [index, pin] of pins.entries()) {
      const point = { x: row.x, y: row.y + index * 2.54 };
      coordinates.set(pin.id, point);
      leads.push({ pinId: pin.id, ...point });
    }
  }
  for (const pin of component.pins) {
    const auxiliary = review.auxiliary[pin.number];
    if (auxiliary) coordinates.set(pin.id, auxiliary);
    if (!coordinates.has(pin.id)) throw new Error(`${component.id}: missing source contact ${pin.number}`);
  }
  const points = component.pins.map(pin => {
    const physical = coordinates.get(pin.id);
    return { pinId: pin.id, x: origin.x + physical.x * scale, y: origin.y + physical.y * scale,
      face: physical.face ?? 'front', description: physical.description ?? pin.description,
      ...(review.labels?.[pin.number] ? { label: review.labels[pin.number] } : {}) };
  });
  const regions = review.regions ?? [{ x: 0, y: 0, width: review.size[0], height: review.size[1] }];
  const bodyRegions = regions.map(region => ({ x: origin.x + region.x * scale,
    y: origin.y + region.y * scale, width: region.width * scale, height: region.height * scale }));
  const x = Math.min(...bodyRegions.map(region => region.x), ...points.map(point => point.x - 4));
  const y = Math.min(...bodyRegions.map(region => region.y), ...points.map(point => point.y - 4));
  const viewBounds = { x, y,
    width: Math.max(...bodyRegions.map(region => region.x + region.width), ...points.map(point => point.x + 4)) - x,
    height: Math.max(...bodyRegions.map(region => region.y + region.height), ...points.map(point => point.y + 4)) - y };
  const [bx, by, bw, bh] = boardBounds;
  const sx = review.size[0] * scale / bw, sy = review.size[1] * scale / bh;
  const clip = `${component.id}-source-material`;
  const hardware = entry.renderHardware(component, false);
  const leadIds = new Set(leads.map(lead => lead.pinId));
  const pinById = new Map(component.pins.map(pin => [pin.id, pin]));
  const common = new Map();
  if (review.connectionSource) for (const pin of component.pins) {
    if (pin.type === 'no_connect') continue;
    if (!common.has(pin.label)) common.set(pin.label, []);
    common.get(pin.label).push(pin.id);
  }
  const connections = [...common.values()].filter(group => group.length > 1);
  return reviewedBoardMounting({ source: review.source, contacts: leads,
    calibration: { origin, unitsPerMm: scale }, bodyRegions, viewBounds,
    bodyEvidence: review.evidence, note: review.note,
    view: { id: 'breadboard', pins: points, note: review.evidence,
      ...(connections.length ? { connections, connectionSource: review.connectionSource } : {}) },
    renderMounted: () => `<defs><clipPath id="${clip}">${bodyRegions.map(region =>
      rect(region.x, region.y, region.width, region.height, 0, '#fff')).join('')}</clipPath></defs>` +
      `<g clip-path="url(#${clip})"><g transform="matrix(${sx} 0 0 ${sy} ${origin.x - bx * sx} ${origin.y - by * sy})">${hardware}</g></g>` +
      points.filter(point => point.face !== 'rear').map(point => {
        const main = leadIds.has(point.pinId), radius = main ? 7.2 : 2.7;
        return circle(point.x, point.y, radius, '#bca86f', '#e7d8a0') +
          circle(point.x, point.y, main ? 3.7 : 1.4, '#263331');
      }).join('') + rearContactOverlay(points.map(point => ({ ...pinById.get(point.pinId), ...point })), { radius: 4, labelSize: 5 }),
  });
}
