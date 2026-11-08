import { escapeText } from '../shared/text.js';

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const intersects = (a, b) => a.x < b.x + b.width && b.x < a.x + a.width &&
  a.y < b.y + b.height && b.y < a.y + a.height;
const angleOf = angle => ((angle % 360) + 360) % 360;
const contains = (body, pin) => pin.x >= body.x - 1e-7 && pin.x <= body.x + body.width + 1e-7 &&
  pin.y >= body.y - 1e-7 && pin.y <= body.y + body.height + 1e-7;
const distanceToRegion = (pin, body) => Math.hypot(Math.max(body.x - pin.x, 0, pin.x - body.x - body.width),
  Math.max(body.y - pin.y, 0, pin.y - body.y - body.height));
const textAdvance = text => [...text].reduce((width, character) => width +
  (/[MW]/.test(character) ? .95 : /[Iil|]/.test(character) ? .34 : /[0-9]/.test(character) ? .6
    : /[ .,:;/!\-]/.test(character) ? .35 : /[A-Z]/.test(character) ? .75 : .6), 0);

function headerPitch(pins) {
  let pitch = Infinity;
  for (let first = 0; first < pins.length; first++) for (const second of pins.slice(first + 1)) {
    const gap = distance(pins[first], second);
    if (gap > 1e-5) pitch = Math.min(pitch, gap);
  }
  return pitch;
}

function sideFor(pin, pins, body, primary) {
  const vertical = pins.filter(other => Math.abs(other.x - pin.x) < .02).length;
  const horizontal = pins.filter(other => Math.abs(other.y - pin.y) < .02).length;
  if (primary && Math.max(vertical, horizontal) > 1) {
    if (vertical >= horizontal) return pin.x < body.x + body.width / 2 ? 'left' : 'right';
    return pin.y < body.y + body.height / 2 ? 'top' : 'bottom';
  }
  if (['left', 'right', 'top', 'bottom'].includes(pin.edge)) return pin.edge;
  return Object.entries({ left: Math.abs(pin.x - body.x), right: Math.abs(pin.x - body.x - body.width),
    top: Math.abs(pin.y - body.y), bottom: Math.abs(pin.y - body.y - body.height) })
    .sort((a, b) => a[1] - b[1])[0][0];
}

function numberFor(pin) {
  return String(pin.number ?? pin.label).split('.').at(-1);
}

function labelRegion(pin, pins, body, pitch, side) {
  const vertical = side === 'left' || side === 'right', axis = vertical ? 'x' : 'y';
  const inward = side === 'left' || side === 'top' ? 1 : -1;
  const opposite = pins.filter(other => (other[axis] - pin[axis]) * inward > pitch / 2)
    .sort((a, b) => Math.abs(a[axis] - pin[axis]) - Math.abs(b[axis] - pin[axis]))[0];
  if (!opposite) return body;
  const midpoint = (pin[axis] + opposite[axis]) / 2;
  if (side === 'left') return { ...body, width: Math.min(body.x + body.width, midpoint) - body.x };
  if (side === 'right') return { ...body, x: Math.max(body.x, midpoint), width: body.x + body.width - Math.max(body.x, midpoint) };
  if (side === 'top') return { ...body, height: Math.min(body.y + body.height, midpoint) - body.y };
  return { ...body, y: Math.max(body.y, midpoint), height: body.y + body.height - Math.max(body.y, midpoint) };
}

function labelAt(pin, text, side, body, pitch, fontSize, shift, rotation) {
  const vertical = side === 'left' || side === 'right';
  const inward = side === 'left' || side === 'top' ? 1 : -1;
  const width = Math.max(fontSize * .6, textAdvance(text) * fontSize), padding = fontSize * .14;
  const gap = pitch * shift;
  let x = pin.x, y = pin.y;
  if (vertical) x += inward * gap;
  else y += inward * gap;
  const anchor = side === 'left' || side === 'bottom' ? 'start' : 'end';
  const bounds = vertical
    ? { x: x - (anchor === 'end' ? width : 0) - padding, y: y - fontSize / 2 - padding,
      width: width + padding * 2, height: fontSize + padding * 2 }
    : { x: x - fontSize / 2 - padding, y: y - (anchor === 'start' ? width : 0) - padding,
      width: fontSize + padding * 2, height: width + padding * 2 };
  const margin = fontSize * .16;
  if (bounds.x < body.x + margin || bounds.y < body.y + margin ||
      bounds.x + bounds.width > body.x + body.width - margin ||
      bounds.y + bounds.height > body.y + body.height - margin) return null;
  let angle = vertical ? 0 : -90, readableAnchor = anchor;
  if (angleOf(rotation + angle) >= 180) {
    angle += 180;
    readableAnchor = anchor === 'start' ? 'end' : 'start';
  }
  return { pinId: pin.id, text, x, y, angle, anchor: readableAnchor, fontSize, width, padding, bounds };
}

// Labels use the same canonical contact centers as the metal artwork. They
// stay inside PCB material, so they never enlarge the body or consume a socket.
export function contactLabelLayout(component, profile, rotation = 0) {
  const regions = profile.bodyRegions ?? (profile.body ? [profile.body] : []);
  const materials = [...regions].sort((a, b) => b.width * b.height - a.width * a.height);
  if (!materials.length) return [];
  const ids = new Set(profile.contacts.map(contact => contact.pinId));
  const headers = component.pins.filter(pin => ids.has(pin.id));
  const pitch = headerPitch(headers);
  if (!Number.isFinite(pitch) || pitch <= 0) return [];
  const result = [];
  const pins = [...headers, ...component.pins.filter(pin => !ids.has(pin.id))];
  const spacing = new Map(component.pins.map(pin => [pin.id,
    Math.min(...component.pins.filter(other => other !== pin).map(other => distance(pin, other)))]));
  const available = candidate => candidate && !result.some(label => intersects(label.bounds, candidate.bounds)) &&
    !component.pins.some(other => {
      const radius = Math.min(pitch, spacing.get(other.id)) * .21;
      return intersects(candidate.bounds, { x: other.x - radius, y: other.y - radius, width: radius * 2, height: radius * 2 });
    });
  for (const pin of pins) {
    const body = materials.find(region => contains(region, pin)) ?? [...materials]
      .sort((a, b) => distanceToRegion(pin, a) - distanceToRegion(pin, b))[0];
    const primary = ids.has(pin.id);
    const nearest = spacing.get(pin.id);
    const dense = !primary && (nearest < pitch * .8 ||
      component.pins.filter(other => Math.abs(other.x - pin.x) < .02).length > 1 &&
      component.pins.filter(other => Math.abs(other.y - pin.y) < .02).length > 1);
    const font = Math.min(pitch, primary ? pitch : nearest) * .52;
    const number = numberFor(pin), preferred = dense ? number : pin.label;
    const texts = preferred === number ? [preferred] : [preferred, number];
    const side = sideFor(pin, primary ? headers : component.pins, body, primary);
    const region = primary ? labelRegion(pin, headers, body, pitch, side) : body;
    let placed;
    for (const text of texts) {
      for (const ratio of [1, .85, .68]) {
        for (const shift of [.48, .75, 1, 1.25]) {
          const candidate = labelAt(pin, text, side, region, pitch, font * ratio, shift, rotation);
          if (available(candidate)) { placed = candidate; break; }
        }
        if (placed) break;
      }
      if (placed) break;
    }
    // Corner headers and projected service pads can occupy the normal legend
    // lane. Keep a nearby compact terminal number, with a short visual leader.
    if (!placed && primary) {
      const alternatives = [side, ...['left', 'right', 'top', 'bottom'].filter(value => value !== side)];
      outer: for (const direction of alternatives) for (const ratio of [.68, .6, .5]) for (const shift of [.28, .4, .55, .75, 1, 1.25]) {
        const candidate = labelAt(pin, number, direction, body, pitch, font * ratio, shift, rotation);
        if (available(candidate)) {
          placed = { ...candidate, leader: { x: pin.x, y: pin.y } };
          break outer;
        }
      }
    }
    if (placed) result.push(placed);
  }
  return result;
}

export function contactLabels(component, profile, rotation = 0) {
  const layout = contactLabelLayout(component, profile, rotation);
  if (!layout.length) return '';
  const pins = new Map(component.pins.map(pin => [pin.id, pin]));
  return `<g class="contact-labels" pointer-events="none" aria-hidden="true" font-family="Arial, sans-serif">` +
    layout.map(item => {
      const pin = pins.get(item.pinId), left = item.anchor === 'end' ? -item.width : 0;
      const leader = item.leader ? `<path d="M${item.leader.x} ${item.leader.y}L${item.x} ${item.y}" fill="none" stroke="#c8dcd5" stroke-width=".65"/>` : '';
      return leader + `<g data-contact-label="${escapeText(pin.id)}" transform="translate(${item.x} ${item.y}) rotate(${item.angle})">` +
        `<title>${escapeText(`${pin.number ?? pin.id} — ${pin.label}: ${pin.description ?? ''}`)}</title>` +
        `<rect x="${left - item.padding}" y="${-item.fontSize / 2 - item.padding}" width="${item.width + item.padding * 2}" height="${item.fontSize + item.padding * 2}" rx="${item.fontSize * .18}" fill="#17343a" fill-opacity=".94"/>` +
        `<text x="0" y="0" text-anchor="${item.anchor}" dominant-baseline="central" textLength="${item.width}" lengthAdjust="spacingAndGlyphs" font-size="${item.fontSize}" font-weight="600" fill="#f6faf5">${escapeText(item.text)}</text></g>`;
    }).join('') + '</g>';
}
