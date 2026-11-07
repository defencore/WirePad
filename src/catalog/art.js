import { definitionFor } from './catalog.js';

export function componentArt(component, { labels = true } = {}) {
  const entry = definitionFor(component);
  if (!entry) throw new Error(`Component "${component.id}" has no registered artwork.`);
  const graphic = entry.render(component, labels);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${component.width}" height="${component.height}" viewBox="0 0 ${component.width} ${component.height}" aria-hidden="true">${graphic}</svg>`;
}
