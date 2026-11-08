import { catalogFamilies } from './catalog-families.js';
import { createCatalog } from './registry.js';

const catalog = createCatalog(catalogFamilies);
export const components = catalog.components;
export const componentById = catalog.componentById;
export const definitionFor = component => catalog.definitionsById.get(component.id);
export const footprintDefinitionFor = component => definitionFor(component)?.footprint;
export const modelFor = component => definitionFor(component)?.model ?? null;
export const configurationFor = componentId => catalog.definitionsById.get(componentId)?.configuration;
export const mountingFor = componentId => catalog.definitionsById.get(componentId)?.mounting;
export const isMountable = componentId => ['breadboard-module', 'breadboard-part'].includes(mountingFor(componentId)?.type);
