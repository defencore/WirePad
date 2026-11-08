import { componentArt, mountingFor } from '../catalog/index.js';

export function partArt(part, component, { labels = true } = {}) {
  const profile = mountingFor(component.id);
  if (!part.leads) return componentArt(component, { labels: labels && !(part.attachment && profile?.type === 'breadboard-part' && profile.mode === 'rigid') });
  const graphic = profile.render(component, part.leads, labels);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${component.width}" height="${component.height}" viewBox="0 0 ${component.width} ${component.height}" overflow="visible" aria-hidden="true">${graphic}</svg>`;
}
