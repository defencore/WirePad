import { componentForPart } from '../model/part-component.js';
import { endpointPositions, partBounds, translation } from '../geometry/parts.js';
import { partMarkup } from './markup.js';
import { group } from './layers.js';
import { escapeText } from '../shared/text.js';

export class PlacementPreview {
  constructor({ svg, before, scope, getScale }) {
    this.getScale = getScale;
    this.svg = svg;
    this.node = group(svg);
    this.node.setAttribute('class', 'placement-preview');
    this.node.setAttribute('aria-hidden', 'true');
    this.node.setAttribute('pointer-events', 'none');
    svg.insertBefore(this.node, before);
    scope.cleanup(() => { this.destroyed = true; this.state = null; this.node.remove(); });
  }

  show(state) {
    if (this.destroyed) return;
    this.state = state;
    this.render();
  }

  render() {
    if (this.destroyed) return;
    const { part, project, fit, assessment, ghost = false } = this.state ?? {};
    let markup = '';
    if (part) {
      const component = componentForPart(part);
      const matches = assessment?.contacts ?? fit?.contacts ?? part.attachment?.contacts ?? [];
      const hostPartId = assessment?.hostPartId ?? fit?.hostPartId ?? part.attachment?.hostPartId;
      const position = matches.length ? endpointPositions(project) : null;
      const points = matches.map(contact => contact.point ?? position({ partId: hostPartId, pinId: contact.hostPinId }));
      if (ghost) markup += `<g opacity=".58" transform="${translation(part.x, part.y)}">${partMarkup(part, component, new Set(), false)}</g>`;
      if (points.length || assessment) {
        const state = assessment?.state ?? 'fit';
        const colors = state === 'fit' ? ['#087a6f', '#b9f2d8', '#ecfdf5']
          : state === 'partial' ? ['#9a6500', '#ffe29a', '#fff8e6'] : ['#b44435', '#ffcfc5', '#fff1ee'];
        const scale = this.getScale();
        const { left, top, right, bottom } = partBounds(part, component);
        const gap = 5 / scale;
        markup += `<rect x="${left - gap}" y="${top - gap}" width="${right - left + gap * 2}" height="${bottom - top + gap * 2}" rx="${4 / scale}" fill="${colors[1]}" fill-opacity=".12" stroke="${colors[0]}" stroke-width="1.5" stroke-dasharray="5 3" vector-effect="non-scaling-stroke"/>`;
        markup += points.map(({ x, y }) => `<circle cx="${x}" cy="${y}" r="${4 / scale}" fill="${colors[1]}" fill-opacity=".65" stroke="${colors[0]}" stroke-width="1.3" vector-effect="non-scaling-stroke"/>`).join('');
        const text = state === 'fit' ? `Fits breadboard · ${points.length} ${points.length === 1 ? 'contact' : 'contacts'}`
          : state === 'partial' ? `${points.length} leads connected · move the free lead to a hole`
            : 'No fit here · choose free holes and space for the body';
        const words = text.split(' '), lines = [''];
        for (const word of words) {
          if ((lines.at(-1) + ' ' + word).trim().length > 38) lines.push(word);
          else lines[lines.length - 1] = `${lines.at(-1)} ${word}`.trim();
        }
        const width = (Math.max(...lines.map(line => line.length)) * 6 + 8) / scale;
        const frame = this.svg.viewBox?.baseVal;
        const labelX = frame?.width ? Math.max(frame.x + 8 / scale, Math.min(left, frame.x + frame.width - width - 8 / scale)) : left;
        const labelY = bottom + 29 + 14 / scale;
        markup += `<rect x="${labelX - 4 / scale}" y="${labelY - 12 / scale}" width="${width}" height="${(17 + (lines.length - 1) * 14) / scale}" rx="${3 / scale}" fill="${colors[2]}" stroke="${colors[0]}" stroke-width=".8" vector-effect="non-scaling-stroke"/>`;
        markup += `<text x="${labelX}" y="${labelY}" font-family="Arial, sans-serif" font-size="${11 / scale}" font-weight="700" fill="${colors[0]}"><title>${escapeText(assessment?.reason ?? text)}</title>${lines.map((line, index) => `<tspan x="${labelX}" dy="${index ? 14 / scale : 0}">${escapeText(line)}</tspan>`).join('')}</text>`;
      }
    }
    if (markup !== this.markup) {
      this.node.innerHTML = markup;
      this.markup = markup;
    }
  }
}
