import { circle, label, line, path, rect } from './svg.js';
import { rigidBreadboardPart } from './breadboard-parts.js';

// Even two-row packages, viewed from the component side: pin 1 upper left,
// numbers down the left row and back up the right. Dimensions are millimeters.
// Callers own the exact package drawing, pin functions and market evidence.
export function marketPackage(spec, { breadboard = false } = {}) {
  const { body, rowSpacing, pitch, pins: specs } = spec;
  if (!['dip', 'soic', 'tssop'].includes(spec.kind) || !Array.isArray(body) ||
      !body.every(n => Number.isFinite(n) && n > 0) || !Number.isFinite(rowSpacing) || rowSpacing <= body[0] ||
      !Number.isFinite(pitch) || pitch <= 0 || !Array.isArray(specs) || specs.length < 4 || specs.length % 2) {
    throw new Error(`Invalid two-row package geometry for ${spec.id}.`);
  }
  const count = specs.length, half = count / 2;
  const scale = spec.scale ?? Math.max(8, 12 / pitch);
  const captions = specs.map(p => Array.isArray(p) ? p[0] : p.label);
  const labelSpace = Math.max(48, ...captions.map(s => String(s).length * 4.6 + 15));
  const width = Math.ceil(rowSpacing * scale + labelSpace * 2 + 20);
  const height = Math.ceil(Math.max(body[1], (half - 1) * pitch + 2) * scale + 42);
  const cx = width / 2, cy = height / 2;
  const contacts = specs.map((p, i) => {
    const [caption, type, description] = Array.isArray(p) ? p : [p.label, p.type, p.description];
    if (![caption, type, description].every(v => typeof v === 'string' && v.trim())) {
      throw new Error(`Missing pin function/type on ${spec.id} terminal ${i + 1}.`);
    }
    const left = i < half, row = left ? i : count - 1 - i;
    const x = (left ? -1 : 1) * rowSpacing / 2;
    const y = (row - (half - 1) / 2) * pitch;
    return { id: Array.isArray(p) ? `p${i + 1}` : p.id ?? `p${i + 1}`,
      number: String(Array.isArray(p) ? i + 1 : p.number ?? i + 1), label: caption,
      type, description, x, y, left };
  });
  const component = {
    id: spec.id, art: spec.id, name: spec.name, shortName: spec.part,
    manufacturer: spec.manufacturer, category: spec.category ?? 'Semiconductors', referencePrefix: 'U',
    source: spec.source, ...(spec.references ? { references: spec.references } : {}),
    subtitle: `${spec.packageName} / ${spec.subtitle}`,
    description: `${spec.description} ${spec.part}, ${spec.packageName}, component-side package view with pin 1 at upper left. Body dimensions and lead pitch follow the cited package reference; small markings are representative. The native footprint uses selected reference lands rather than claiming an audited production pattern. Generated 3D geometry is approximate.`,
    tags: ['market expansion', 'ic', spec.kind, spec.part.toLowerCase(), ...(spec.tags ?? [])],
    availability: spec.availability,
    contactLayout: 'physical', width, height,
    pins: contacts.map(c => ({ id: c.id, number: c.number, label: c.label, type: c.type,
      description: `${c.number} — ${c.description}`, x: cx + c.x * scale, y: cy + c.y * scale,
      edge: c.left ? 'left' : 'right', surface: true,
      symbolPlacement: { side: c.left ? 'left' : 'right', order: Number(c.number) - 1 } })),
    ...(spec.internalConnections ? { internalConnections: spec.internalConnections } : {}),
  };
  const smd = spec.kind !== 'dip';
  const padWidth = spec.padSize?.[0] ?? (smd ? 1.55 : 1.8);
  const padHeight = spec.padSize?.[1] ?? (smd ? Math.min(pitch * .55, .65) : 2.0);
  return {
    component,
    ...(breadboard && spec.kind === 'dip' ? { mounting: rigidBreadboardPart(
      { label: `${spec.manufacturer} ${spec.part} ${spec.packageName} package drawing`, url: spec.source },
      contacts.map(({ id, x, y }) => ({ pinId: id, x, y })),
      { x: cx - body[0] * scale / 2, y: cy - body[1] * scale / 2, width: body[0] * scale, height: body[1] * scale },
      `Source-reviewed ${spec.packageName} lead centers: ${pitch} mm lead pitch and ${rowSpacing} mm row spacing, viewed from the component side. Fit every lead across independent breadboard terminal strips; do not insert the SMD ordering-code variants. Package body dimensions remain fixed.`,
    ) } : {}),
    render: (part, showLabels = true) => {
      const left = cx - body[0] * scale / 2, right = cx + body[0] * scale / 2;
      const top = cy - body[1] * scale / 2, bottom = cy + body[1] * scale / 2;
      const narrowBody = body[0] * scale < 32;
      const leadHeight = Math.max(2.4, Math.min(pitch * scale * .38, 5));
      const leads = part.pins.map((pin, i) => {
        const isLeft = contacts[i].left, edge = isLeft ? left : right;
        const x1 = Math.min(edge, pin.x - 2), x2 = Math.max(edge, pin.x + 2);
        return `<g data-contact="${pin.id}">` + rect(x1, pin.y - leadHeight / 2, x2 - x1, leadHeight, .5, '#b7c0c4', '#e1e5de') +
          (showLabels ? label(pin.x + (isLeft ? -8 : 8), pin.y,
            spec.numericLabels ? pin.number : narrowBody ? `${pin.number} ${pin.label}` : pin.label,
            7, '#354e5c', isLeft ? 'end' : 'start') : '') + '</g>';
      }).join('');
      const outline = spec.kind === 'dip'
        ? path(`M${left + 2} ${top}H${cx - 5}Q${cx - 5} ${top + 6} ${cx} ${top + 6}Q${cx + 5} ${top + 6} ${cx + 5} ${top}H${right - 2}Q${right} ${top} ${right} ${top + 2}V${bottom - 2}Q${right} ${bottom} ${right - 2} ${bottom}H${left + 2}Q${left} ${bottom} ${left} ${bottom - 2}V${top + 2}Q${left} ${top} ${left + 2} ${top}Z`, '#252c30', '#65716f')
        : rect(left, top, body[0] * scale, body[1] * scale, 2, '#252c30', '#65716f');
      const numbers = showLabels && !narrowBody ? part.pins.map((pin, i) => label(contacts[i].left ? left + 5 : right - 5,
        pin.y, pin.number, Math.min(6, pitch * scale * .42), '#b9c7c2')).join('') : '';
      const bodyMarking = spec.bodyMarking ?? spec.part;
      const makerMarking = spec.marking ?? spec.manufacturer;
      const availableLength = body[1] * scale - 12;
      const markingSize = (text, preferred) => Math.min(preferred, availableLength / (Math.max(1, text.length) * .64));
      return leads + outline + line(left + 2, top + 12, left + 2, bottom - 3, '#475350', .8) +
        circle(left + (narrowBody ? 3 : 6), top + (narrowBody ? 3 : 7), narrowBody ? 1 : 1.8, '#141c1c', '#7b8b83') + numbers +
        `<g data-package-marking="true" transform="rotate(-90 ${cx} ${cy})">` + label(cx, cy - 4, bodyMarking, markingSize(bodyMarking, 8), '#d2dbcd') +
        label(cx, cy + 7, makerMarking, markingSize(makerMarking, 5.5), '#9eafa6') + '</g>' +
        label(cx, height - 7, `${spec.packageName} · TOP VIEW`, 6, '#425e69');
    },
    footprint: {
      body, color: '#252c30', modelHeight: spec.modelHeight ?? (smd ? 1.5 : 3.5),
      pads: contacts.map(c => ({ id: c.id, x: c.x, y: c.y, size: [padWidth, padHeight],
        ...(smd ? { smd: true, shape: 'rect' } : { drill: spec.drill ?? 1, shape: 'oval', square: c.number === '1' }) })),
      note: `Reference ${spec.packageName} host pattern for ${spec.part}, viewed from the component side. Source package body ${body[0]} × ${body[1]} mm; ${pitch} mm lead pitch and ${rowSpacing} mm contact-row spacing. Copper ${padWidth} × ${padHeight} mm${smd ? '' : ` and ${spec.drill ?? 1} mm holes`} are selected carrier values, not a qualified manufacturer production land pattern. ${spec.footprintNote ?? 'Verify assembly clearances, solder tolerances and the linked source before manufacture.'} Generated WRL body is approximate.`,
    },
    ...(spec.model ? { model: spec.model } : {}),
  };
}
