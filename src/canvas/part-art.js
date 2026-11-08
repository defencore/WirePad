import { componentArt, mountingFor } from '../catalog/index.js';
import { contactLabels } from './contact-labels.js';
import { instancePins } from '../model/part-pins.js';
import { compactBoardView, viewForPart } from '../model/part-view.js';

export function usesCompactBoardView(part, component) {
  return compactBoardView(part, component.id);
}

export function partArt(part, component, { labels = true } = {}) {
  const profile = mountingFor(component.id);
  if (usesCompactBoardView(part, component)) {
    const physical = viewForPart(part) ? { ...component, pins: instancePins(part, component) } : component;
    const graphic = profile.renderMounted ? profile.renderMounted(physical, false) : componentArt(component, { labels: false });
    return svgFrame(component, graphic + (labels ? contactLabels(physical, profile, part.rotation ?? 0) : ''));
  }
  if (!part.leads) return componentArt(component, { labels: labels && !(part.attachment &&
    (profile?.type === 'breadboard-module' || profile?.type === 'breadboard-part' && profile.mode === 'rigid')) });
  return svgFrame(component, profile.render(component, part.leads, labels));
}

function svgFrame(component, graphic) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${component.width}" height="${component.height}" viewBox="0 0 ${component.width} ${component.height}" overflow="visible" aria-hidden="true">${graphic}</svg>`;
}
