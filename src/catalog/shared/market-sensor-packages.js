import { circle, label, path, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';

// Source dimensions use a component-side coordinate frame: x right, y down.
// All visible contacts and native lands use the same per-contact coordinates.
export function marketSensorPackage(spec) {
  const scale = spec.scale ?? (spec.kind === 'to92' ? 24 : Math.max(14, 13 / (spec.pitch ?? 1)));
  const numbersOnly = spec.numericLabels ?? spec.pins.length >= 10;
  const margin = numbersOnly ? 30 : 70;
  const width = Math.ceil(spec.body[0] * scale + margin * 2);
  const height = Math.ceil(spec.body[1] * scale + 62);
  const cx = width / 2, cy = height / 2;
  const contacts = spec.pads.map((p, i) => {
    const [caption, type, description] = spec.pins[i];
    if (!caption || !type || !description || !Number.isFinite(p.x) || !Number.isFinite(p.y)) throw new Error(`Invalid physical contact on ${spec.id}.`);
    return { ...p, id: p.id ?? `p${p.number ?? i + 1}`, number: String(p.number ?? i + 1), label: caption, type, description };
  });
  if (contacts.length !== spec.pins.length) throw new Error(`Missing package contacts on ${spec.id}.`);
  const pins = contacts.map(c => ({ id: c.id, number: c.number, label: c.label, type: c.type,
    description: `${c.number} — ${c.description}`, x: cx + c.x * scale, y: cy + c.y * scale,
    edge: c.edge ?? (c.x <= 0 ? 'left' : 'right'), surface: true,
    symbolPlacement: { side: c.x <= 0 ? 'left' : 'right', order: contacts.indexOf(c) } }));
  const component = { id: spec.id, art: spec.id, name: spec.name, shortName: spec.part,
    manufacturer: spec.manufacturer, category: spec.category ?? 'Sensors', referencePrefix: 'U',
    source: spec.source, references: spec.references ?? [], availability: spec.availability,
    subtitle: `${spec.packageName} / ${spec.subtitle}`,
    description: `${spec.description} Exact package: ${spec.packageName}. ${spec.view ?? 'Transparent component-side top view exposes the underside contacts without mirroring their coordinates.'} Package markings are representative. The native carrier uses reference copper lands; generated 3D geometry is approximate.`,
    tags: ['market expansion', 'sensor', spec.part.toLowerCase(), ...(spec.tags ?? [])],
    contactLayout: 'physical', width, height, pins,
    ...(spec.internalConnections ? { internalConnections: spec.internalConnections } : {}),
  };
  return { component,
    render: (part, showLabels = true) => {
      const left = cx - spec.body[0] * scale / 2, top = cy - spec.body[1] * scale / 2;
      const body = spec.kind === 'to92'
        ? path(`M${left} ${top + spec.body[1] * scale * .6}A${spec.body[0] * scale / 2} ${spec.body[1] * scale * .7} 0 0 1 ${left + spec.body[0] * scale} ${top + spec.body[1] * scale * .6}V${top + spec.body[1] * scale}H${left}Z`, spec.bodyColor ?? '#303b39', '#78847d')
        : rect(left, top, spec.body[0] * scale, spec.body[1] * scale, Math.min(4, scale * .1), spec.bodyColor ?? '#303b39', '#78847d');
      const pads = part.pins.map((p, i) => {
        const c = contacts[i], [w, h] = c.size ?? spec.padSize ?? [.4, .7];
        const side = c.edge ?? (c.x <= 0 ? 'left' : 'right');
        const textX = side === 'left' ? p.x - 7 : side === 'right' ? p.x + 7 : p.x;
        const textY = side === 'top' ? p.y - 9 : side === 'bottom' ? p.y + 10 : p.y;
        const anchor = side === 'left' ? 'end' : side === 'right' ? 'start' : 'middle';
        return `<g data-contact="${escapeText(p.id)}"><title>${escapeText(p.number + ' ' + p.label + ': ' + p.description)}</title>` +
          rect(p.x - w * scale / 2, p.y - h * scale / 2, w * scale, h * scale, .4, '#c5b775', '#eee4ad') +
          (showLabels ? label(textX, textY, numbersOnly ? p.number : `${p.number} ${p.label}`, numbersOnly ? 6 : 6.5, '#35545e', anchor) : '') + '</g>';
      }).join('');
      const mark = contacts[0];
      return body + (spec.kind === 'to92' ? '' : rect(left + 3, top + 3, spec.body[0] * scale - 6, spec.body[1] * scale - 6, 2, spec.bodyColor ? '#aab8b3' : '#3f4a46', 'none')) +
        circle(cx + mark.x * scale * .77, cy + mark.y * scale * .77, 1.8, '#e5dac1') +
        label(cx, top + 14, spec.part, Math.min(7, spec.body[0] * scale / Math.max(1, spec.part.length) * 1.5), '#d8e0d2') +
        (spec.opening ? (spec.opening === 'slot' ? rect(cx + (spec.openingAt?.[0] ?? 0) * scale - scale * .65, cy + (spec.openingAt?.[1] ?? 0) * scale - scale * .16, scale * 1.3, scale * .32, 2, '#171c1b', '#819087') : circle(cx + (spec.openingAt?.[0] ?? 0) * scale, cy + (spec.openingAt?.[1] ?? 0) * scale, (spec.openingRadius ?? Math.min(...spec.body) * .13) * scale, '#171c1b', '#819087')) : '') + pads +
        label(cx, height - 9, spec.caption ?? ('TRANSPARENT TOP VIEW'), 6, '#425e69');
    },
    footprint: { body: spec.body, color: spec.bodyColor ?? '#303b39', modelHeight: spec.modelHeight ?? 1,
      pads: contacts.map(c => ({ id: c.id, x: c.x, y: c.y, size: c.size ?? spec.padSize ?? [.4, .7],
        ...(c.drill ? { drill: c.drill, shape: 'oval', square: c.number === '1' } : { smd: true, shape: 'rect' }) })),
      note: `Reference ${spec.packageName} carrier for ${spec.part}. Body dimensions and contact-center positions are derived from the cited package drawing; copper sizes are selected reference values and are not a qualified production land pattern. ${spec.footprintNote ?? ''} View coordinates follow the component side of the PCB, x right and y down. Verify the source, solder clearances and assembly tolerances before manufacture. Generated WRL package body is approximate.`,
    },
    ...(spec.model ? { model: spec.model } : {}),
  };
}

// Numbered contacts around a four-sided, counterclockwise top-view package.
export function quadContacts(count, body, pitch, inset = .2, padSize = [.3, .65]) {
  if (count % 4) throw new Error('Four equal contact rows are required.');
  const side = count / 4, out = [], x = body[0] / 2 - inset, y = body[1] / 2 - inset;
  for (let i = 0; i < count; i++) {
    const q = Math.floor(i / side), row = i % side, t = (row - (side - 1) / 2) * pitch;
    out.push({ number: i + 1, x: q === 0 ? -x : q === 1 ? t : q === 2 ? x : -t,
      y: q === 0 ? t : q === 1 ? y : q === 2 ? -t : -y,
      edge: ['left', 'bottom', 'right', 'top'][q], size: q % 2 ? [padSize[1], padSize[0]] : padSize });
  }
  return out;
}

// Two underside rows, numbered down the left and up the right in top view.
export function dualContacts(count, rowSpacing, pitch, padSize = [.5, .6]) {
  if (count % 2) throw new Error('Two equal contact rows are required.');
  return Array.from({ length: count }, (_, i) => {
    const left = i < count / 2, row = left ? i : count - 1 - i;
    return { number: i + 1, x: (left ? -1 : 1) * rowSpacing / 2,
      y: (row - (count / 2 - 1) / 2) * pitch, edge: left ? 'left' : 'right', size: padSize };
  });
}
