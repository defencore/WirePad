import { componentArt, mountingFor } from '../catalog/index.js';
import { contactLabels } from './contact-labels.js';

export function usesCompactBoardView(part, component) {
  return Boolean((part.scale || part.attachment) && mountingFor(component.id)?.type === 'breadboard-module');
}

export function partArt(part, component, { labels = true } = {}) {
  const profile = mountingFor(component.id);
  if (usesCompactBoardView(part, component)) {
    const graphic = profile.renderMounted ? profile.renderMounted(component, false) : componentArt(component, { labels: false });
    return svgFrame(component, graphic + (labels ? contactLabels(component, profile, part.rotation ?? 0) : ''));
  }
  if (!part.leads) return componentArt(component, { labels: labels && !(part.attachment &&
    (profile?.type === 'breadboard-module' || profile?.type === 'breadboard-part' && profile.mode === 'rigid')) });
  return svgFrame(component, profile.render(component, part.leads, labels));
}

function svgFrame(component, graphic) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${component.width}" height="${component.height}" viewBox="0 0 ${component.width} ${component.height}" overflow="visible" aria-hidden="true">${graphic}</svg>`;
}
