import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';
import { circle, label, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';

// Manufacturer millimetres are deliberately separate from published artwork,
// saved-project anchors and approximate off-board native footprints.
export function miniComputingMounting(component, review) {
  const units = 10, margin = 20;
  const points = component.pins.map(pin => {
    const point = review.pins[pin.id];
    if (!point) throw new Error(`${component.id}: missing reviewed physical contact ${pin.id}`);
    return { pinId: pin.id, x: margin + point.x * units, y: margin + point.y * units,
      face: point.face ?? 'front', description: point.description ?? pin.description,
      ...(point.number ? { number: point.number } : {}) };
  });
  const selected = new Set(review.contacts);
  const contacts = points.filter(point => selected.has(point.pinId)).map(point => ({
    pinId: point.pinId, x: review.pins[point.pinId].x, y: review.pins[point.pinId].y,
  }));
  const sourceRegions = review.regions ?? [{ x: 0, y: 0, width: review.size[0], height: review.size[1] }];
  const bodyRegions = sourceRegions.map(region => ({ x: margin + region.x * units,
    y: margin + region.y * units, width: region.width * units, height: region.height * units }));
  const x = Math.min(...bodyRegions.map(region => region.x), ...points.map(point => point.x - 5));
  const y = Math.min(...bodyRegions.map(region => region.y), ...points.map(point => point.y - 5));
  const viewBounds = { x, y,
    width: Math.max(...bodyRegions.map(region => region.x + region.width), ...points.map(point => point.x + 5)) - x,
    height: Math.max(...bodyRegions.map(region => region.y + region.height), ...points.map(point => point.y + 5)) - y };
  const pins = new Map(component.pins.map(pin => [pin.id, pin]));
  const source = typeof review.source === 'string'
    ? { label: `${component.manufacturer} manufacturer mechanical and pinout reference`, url: review.source } : review.source;
  return reviewedBoardMounting({ source, contacts, bodyRegions, viewBounds,
    calibration: { origin: { x: margin, y: margin }, unitsPerMm: units },
    bodyEvidence: review.evidence, note: review.note,
    view: { id: 'breadboard', pins: points, note: review.evidence,
      ...(review.connections ? { connections: review.connections, connectionSource: review.connectionSource } : {}) },
    renderMounted: (_component, showLabels = true) => {
      const material = review.renderHardware?.() ?? rect(0, 0, review.size[0], review.size[1], .7, '#293b38', '#83958b');
      const pads = points.filter(point => point.face !== 'rear').map(point => {
        const pin = pins.get(point.pinId), insideLeft = point.x < margin + review.size[0] * units / 2;
        const horizontal = review.labelAxis === 'y';
        const text = review.captions?.[pin.id] ?? pin.label.replace(/^GPIO|^IO(?=\d)/, '');
        const dx = horizontal ? 0 : insideLeft ? 11 : -11;
        const dy = horizontal ? point.y < margin + review.size[1] * units / 2 ? 11 : -11 : 0;
        const copper = review.renderPad?.(pin, point) ??
          circle(point.x, point.y, 7.5, '#bfaa6b', '#e3d7a8') + circle(point.x, point.y, 3.9, '#1b2a29');
        return `<g><title>${escapeText(`${point.number ?? pin.number} — ${pin.label}. ${point.description}`)}</title>` + copper +
          (showLabels ? label(point.x + dx, point.y + dy, text.length > 9 ? point.number ?? pin.number : text, 7.4, '#e4eadd', horizontal ? 'middle' : insideLeft ? 'start' : 'end') : '') + '</g>';
      }).join('');
      const clipId = `${component.id}-insertion-material`;
      const mask = sourceRegions.map(region => rect(region.x, region.y, region.width, region.height, 0, '#fff')).join('');
      return `<g transform="translate(${margin} ${margin}) scale(${units})"><defs><clipPath id="${clipId}">${mask}</clipPath></defs><g clip-path="url(#${clipId})">${material}</g></g>` + pads +
        rearContactOverlay(points.map(point => ({ ...pins.get(point.pinId), ...point })), { radius: 5, labelSize: 5 });
    },
  });
}

export function projectMiniHardware(render, component, canvasBoard, millimetres) {
  const [x, y, width, height] = canvasBoard;
  const sx = millimetres[0] / width, sy = millimetres[1] / height;
  return `<g transform="matrix(${sx} 0 0 ${sy} ${-x * sx} ${-y * sy})">${render(component, false)}</g>`;
}
