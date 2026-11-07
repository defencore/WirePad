import { componentById, configurationFor } from '../catalog/index.js';

const instances = new WeakMap();
const configurations = new Map();
const MAX_CACHED_CONFIGURATIONS = 16;

export function componentForPart(part) {
  const configuration = configurationFor(part?.componentId);
  if (!configuration) return componentById.get(part?.componentId);
  const config = configuration.normalize(part[configuration.key]);
  const key = `${part.componentId}/${JSON.stringify(config)}`;
  const cached = instances.get(part);
  let component = cached?.key === key ? cached.component : configurations.get(key);
  component ??= configuration.create(config);
  configurations.delete(key);
  configurations.set(key, component);
  if (configurations.size > MAX_CACHED_CONFIGURATIONS) configurations.delete(configurations.keys().next().value);
  instances.set(part, { key, component });
  return component;
}
