import { circle, label, rect } from './svg.js';

// Component-side SOT contacts and front-face TO-220 leads use one coordinate map
// for the drawing and canvas. TO-220 host holes are the upright lead projection.
export function marketAnalogPackage(spec) {
  const vertical = spec.kind === 'TO220';
  const layout = vertical ? [[-2.54, 0], [0, 0], [2.54, 0]]
    : spec.kind === 'SOT235' ? [[-1.2, -.95], [-1.2, 0], [-1.2, .95], [1.2, .95], [1.2, -.95]]
      : spec.kind === 'SOT233' ? [[-1.2, -.95], [-1.2, .95], [1.2, 0]] : null;
  if (!layout || layout.length !== spec.pins.length) throw new Error(`Invalid analog package: ${spec.id}`);
  const scale = vertical ? 9 : 20;
  const width = 180, height = vertical ? 260 : 126;
  const cx = width / 2, cy = vertical ? 234 : height / 2;
  const pins = spec.pins.map(([caption, type, description], i) => {
    if (![caption, type, description].every(value => typeof value === 'string' && value.trim())) throw new Error(`Missing pin data: ${spec.id}`);
    const [x, y] = layout[i];
    return { id: `p${i + 1}`, number: String(i + 1), label: caption, type, description: `${i + 1} — ${description}`,
      x: cx + x * scale, y: cy + y * scale, surface: true,
      edge: vertical ? 'bottom' : x < 0 ? 'left' : 'right',
      symbolPlacement: { side: i < Math.ceil(layout.length / 2) ? 'left' : 'right', order: i } };
  });
  const component = { id: spec.id, art: spec.id, name: spec.name, shortName: spec.part,
    manufacturer: spec.manufacturer, category: spec.category, referencePrefix: 'U',
    source: spec.source, references: spec.references, availability: spec.availability,
    subtitle: `${spec.packageName} / ${spec.subtitle}`,
    description: `${spec.description} ${spec.part}, ${spec.packageName}. ${vertical ? 'Front face with the three actual leads below the body. The metal tab is electrically connected to terminal 2; it is shown as a tab, not an extra independent terminal. Native holes are a reference upright mounting projection.' : 'Component-side view, pin 1 at upper left, with contacts on the actual metal leads.'} Package outline and lead spacing follow the cited drawing; markings are representative. The selected host lands are reference geometry (FP:R). Generated 3D geometry is approximate.`,
    tags: ['market expansion', 'ic', spec.part.toLowerCase(), ...(spec.tags ?? [])],
    contactLayout: 'physical', width, height, pins };
  return { component,
    render: (part, showLabels = true) => {
      if (vertical) {
        return rect(cx - 46, 10, 92, 142, 2, '#adb4b7', '#e0e1db') +
          circle(cx, 41, 13, '#f7f5eb', '#617177') +
          part.pins.map(pin => rect(pin.x - 3, 146, 6, pin.y - 143, .4, '#b9c0bf', '#e0e2d8')).join('') +
          rect(cx - 46, 72, 92, 80, 3, '#252c30', '#586a6d') +
          label(cx, 103, spec.part, 9, '#e2dfcf') + label(cx, 126, 'TO-220 · FRONT', 6, '#b5bfb5') +
          (showLabels ? part.pins.map(pin => label(pin.x, 249, `${pin.number} ${pin.label}`, 7, '#354e5c')).join('') : '') +
          label(cx, 8, 'TAB = PIN 2', 6, '#425e69');
      }
      const bodyWidth = 1.6 * scale, bodyHeight = 2.9 * scale;
      const leads = part.pins.map(pin => {
        const left = pin.x < cx;
        return rect(left ? pin.x - 3 : cx + bodyWidth / 2 - 1, pin.y - 3,
          Math.abs(pin.x - cx) - bodyWidth / 2 + 4, 6, .5, '#b7c0c4', '#e1e5de') +
          (showLabels ? label(pin.x + (left ? -8 : 8), pin.y, `${pin.number} ${pin.label}`, 7, '#354e5c', left ? 'end' : 'start') : '');
      }).join('');
      return leads + rect(cx - bodyWidth / 2, cy - bodyHeight / 2, bodyWidth, bodyHeight, 2, '#252c30', '#65716f') +
        circle(cx - bodyWidth / 2 + 5, cy - bodyHeight / 2 + 6, 1.8, '#101b1c', '#a6b9a8') +
        `<g transform="rotate(-90 ${cx} ${cy})">` + label(cx, cy + 2, spec.marking ?? spec.part.replace(/IDBVR|IDBZR|NA\/3K/g, ''), 6.5, '#cbd8c5') + '</g>' +
        label(cx, height - 8, `${spec.packageName} · TOP VIEW`, 6, '#425e69');
    },
    footprint: { body: vertical ? [10.16, 4.7] : [1.6, 2.9], color: '#252c30', modelHeight: vertical ? 15 : 1.1,
      pads: pins.map((pin, i) => ({ id: pin.id, x: layout[i][0], y: vertical ? 3.7 : layout[i][1],
        size: vertical ? [1.8, 2] : [.8, .6], ...(vertical ? { drill: 1, shape: 'oval', square: i === 0 } : { smd: true, shape: 'rect' }) })),
      note: `Reference ${spec.packageName} host carrier for ${spec.part}. ${vertical ? 'Upright 2.54 mm lead pitch, selected 1 mm holes at y = 3.7 mm; body clearance and lead forming require mechanical review.' : 'Nominal 0.95 mm lead pitch, selected 0.8 × 0.6 mm lands on 2.4 mm contact rows.'} These selected lands are not an audited manufacturer production land pattern. Generated WRL geometry is approximate.` },
  };
}
