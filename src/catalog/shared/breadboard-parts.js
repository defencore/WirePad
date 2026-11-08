import { circle, label, line, path, rect } from './svg.js';

const UNITS = 8;
const metal = '#aeb9bc';

export function rigidBreadboardPart(source, contacts, body, note) {
  return { type: 'breadboard-part', mode: 'rigid', pitch: 2.54, source, contacts, body, note };
}

// A mounted body has fixed physical dimensions. Only its metal lead tips move;
// normal catalog artwork and native package geometry are independent of this view.
export function bendableBreadboardPart(component, specification) {
  const { kind, dimensions, source, note, tips, exits, maxLeadMm = 20 } = specification;
  const origin = { x: component.width / 2, y: component.height / 2 };
  const body = { x: origin.x - dimensions[0] * UNITS / 2, y: origin.y - dimensions[1] * UNITS / 2,
    width: dimensions[0] * UNITS, height: dimensions[1] * UNITS };
  const roots = exits.map(([x, y], index) => ({ pinId: component.pins[index].id,
    x: origin.x + x * UNITS, y: origin.y + y * UNITS }));
  const contacts = tips.map(([x, y], index) => ({ pinId: component.pins[index].id, x, y }));
  const color = specification.color ?? '#c98b4b';
  function drawBody(labels) {
    if (specification.renderBody) return specification.renderBody({ component, origin, body, labels });
    const cx = origin.x, cy = origin.y, { x, y, width: w, height: h } = body;
    if (kind === 'resistor' || kind === 'inductor' || kind === 'ferrite') {
      return rect(x, y, w, h, Math.min(h / 2, 6), color, '#795c3c') +
        (kind === 'ferrite' ? '' : ['#76512b', '#b34137', '#76512b', '#b59a4b'].map((band, i) =>
          rect(x + w * [.16, .34, .51, .81][i], y + 1, Math.max(2, w * .06), h - 2, .5, band)).join(''));
    }
    if (kind === 'diode') return rect(x, y, w, h, h / 2, color, '#6e655c') +
      rect(specification.cathodeRight ? x + w * .78 : x + w * .12, y + 1, Math.max(3, w * .12), h - 2, .4, '#d7d6c9');
    if (kind === 'led') return circle(cx, cy, w / 2, color, '#a0a9a1') +
      (specification.cathodeRight === undefined ? '' : path(`M${x + w * (specification.cathodeRight ? .85 : .15)} ${cy - h * .34}V${cy + h * .34}`, 'none', '#7e222d', 2)) +
      path(`M${cx - w * .15} ${cy - h * .27}q${w * .2} -${h * .16} ${w * .36} 0`, 'none', '#f2b2a6', 2);
    if (kind === 'electrolytic') return circle(cx, cy, w / 2, '#3a4854', '#73828b') +
      rect(x + w * .72, y + h * .16, w * .13, h * .68, 1, '#d0d7d6') +
      line(cx - w * .19, cy, cx + w * .19, cy, '#c4cece', 1.3) +
      line(cx, cy - h * .19, cx, cy + h * .19, '#c4cece', 1.3);
    if (kind === 'tactile') return rect(x, y, w, h, 3, '#313d37', '#67766c') +
      rect(x + 1, y + 1, w - 2, h - 2, 2, '#a7aaa1', '#e0e4d7') +
      [[.15, .15], [.85, .15], [.15, .85], [.85, .85]].map(([dx, dy]) => circle(x + w * dx, y + h * dy, 2.2, '#69766c', '#e0e4d7')).join('') +
      circle(cx, cy, Math.min(w, h) * 3.5 / 12, '#e4dfc4', '#747c6d');
    if (kind === 'to92') return path(`M${x} ${y + h}V${cy}A${w / 2} ${h / 2} 0 0 1 ${x + w} ${cy}V${y + h}Z`, '#293432', '#6c7b72') +
      (labels ? label(cx, cy, specification.marking ?? component.shortName ?? '', Math.min(5.5, w / Math.max(1, (specification.marking ?? component.shortName ?? '').length) / .65), '#dce2d8') : '');
    return rect(x, y, w, h, Math.min(6, h / 2), color, '#95673f') +
      (labels ? label(cx, cy, specification.marking ?? '104', 5.5, '#5d452d') : '');
  }
  return { type: 'breadboard-part', mode: 'bendable', pitch: 2.54, source, note,
    unitsPerMm: UNITS, origin, body, contacts, roots, maxLeadMm, allowRails: true,
    leadRadius: Math.max((specification.leadDiameter ?? .4) * UNITS / 2, 1.7) + .5,
    render: (_component, localLeads, labels = true) => {
      const tipsById = new Map(localLeads.map(lead => [lead.pinId, lead]));
      const leads = roots.map(root => {
        const tip = tipsById.get(root.pinId);
        if (!tip) throw new Error(`Missing formed lead ${component.id}/${root.pinId}.`);
        const pin = component.pins.find(pin => pin.id === root.pinId);
        const [labelX, labelY] = specification.labelOffsets?.[root.pinId] ?? [3.5, -3.5];
        return `<g data-contact="${root.pinId}">` + line(root.x, root.y, tip.x, tip.y, metal, specification.leadDiameter ? specification.leadDiameter * UNITS : 3.2) +
          line(root.x, root.y - .5, tip.x, tip.y - .5, '#e2e8e5', .7) + circle(tip.x, tip.y, 1.7, '#b6c1bd') +
          (labels ? label(tip.x + labelX, tip.y + labelY, pin.label, 6, '#314a43', 'start') : '') + '</g>';
      }).join('');
      return leads + drawBody(labels);
    },
  };
}
