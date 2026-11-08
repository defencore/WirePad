import { escapeText } from '../../shared/text.js';

// A projected rear pad is a wiring reference seen through the PCB, rather than
// a visible component-side header or an additional downward insertion lead.
export function rearContactOverlay(pins, { radius = 3.2, labelSize = 4.5 } = {}) {
  const rear = pins.filter(pin => pin.face === 'rear');
  if (!rear.length) return '';
  return '<g class="rear-contact-overlay" pointer-events="none" aria-hidden="true">' +
    '<title>BACK PADS · projected through the PCB. Dashed magenta rings are rear contacts, not inserted header leads.</title>' +
    rear.map(pin => {
      const id = pin.pinId ?? pin.id;
      const title = `BACK PAD ${pin.number ?? id} — ${pin.label ?? id}: ${pin.description ?? 'Rear contact projected through the PCB.'}`;
      return `<g data-contact="${escapeText(id)}" data-rear-contact="${escapeText(id)}"><title>${escapeText(title)}</title>` +
        `<circle cx="${pin.x}" cy="${pin.y}" r="${radius}" fill="#f7eafa" fill-opacity=".24" stroke="#9b4899" stroke-width=".85" stroke-dasharray="1.4 1"/>` +
        `<text x="${pin.x + radius + .8}" y="${pin.y - radius}" font-family="Arial, sans-serif" font-size="${labelSize}" font-weight="700" fill="#8e368d">B</text></g>`;
    }).join('') + '</g>';
}
