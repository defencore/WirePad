import { componentArt, mountingFor } from '../catalog/index.js';

export function usesMountedView(part, component) {
  return Boolean(part.scale && mountingFor(component.id)?.renderMounted);
}

export function partArt(part, component, { labels = true } = {}) {
  const profile = mountingFor(component.id);
  if (usesMountedView(part, component)) return svgFrame(component, profile.renderMounted(component, false));
  if (!part.leads) return componentArt(component, { labels: labels && !(part.attachment &&
    (profile?.type === 'breadboard-module' || profile?.type === 'breadboard-part' && profile.mode === 'rigid')) });
  return svgFrame(component, profile.render(component, part.leads, labels));
}

function svgFrame(component, graphic) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${component.width}" height="${component.height}" viewBox="0 0 ${component.width} ${component.height}" overflow="visible" aria-hidden="true">${graphic}</svg>`;
}
