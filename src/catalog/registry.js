const electricalTypes = new Set([
  'input', 'output', 'bidirectional', 'tri_state', 'passive', 'free', 'unspecified',
  'power_in', 'power_out', 'open_collector', 'open_emitter', 'no_connect',
]);

function requireText(value, context) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${context} must be nonempty text.`);
}

function requirePositive(value, context) {
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${context} must be a positive finite number.`);
}

export function validateComponent(component) {
  if (!component || typeof component !== 'object') throw new Error('A catalog entry must have a component.');
  const context = `Component "${component.id ?? '?'}"`;
  requireText(component.id, `${context} ID`);
  if (!/^[a-zA-Z0-9_-]{1,120}$/.test(component.id)) throw new Error(`${context} has an invalid ID.`);
  requireText(component.name, `${context} name`);
  requireText(component.category, `${context} category`);
  requirePositive(component.width, `${context} width`);
  requirePositive(component.height, `${context} height`);
  if (!Array.isArray(component.pins) || !component.pins.length) throw new Error(`${context} must define contacts.`);
  const ids = new Set(), numbers = new Set();
  component.pins.forEach((pin, index) => {
    const contact = `${context} contact "${pin.id ?? '?'}"`;
    requireText(pin.id, `${contact} ID`);
    requireText(pin.label, `${contact} label`);
    if (ids.has(pin.id)) throw new Error(`${context} has duplicate contact ID "${pin.id}".`);
    ids.add(pin.id);
    const number = String(pin.number ?? index + 1);
    requireText(number, `${contact} terminal number`);
    if (numbers.has(number)) throw new Error(`${context} has duplicate terminal number "${number}".`);
    numbers.add(number);
    if (!electricalTypes.has(pin.type)) throw new Error(`${contact} has an invalid electrical type "${pin.type}".`);
    if (!Number.isFinite(pin.x) || !Number.isFinite(pin.y) || pin.x < 0 || pin.y < 0 || pin.x > component.width || pin.y > component.height) {
      throw new Error(`${contact} is outside the component drawing.`);
    }
    if (component.contactLayout === 'physical' && pin.surface !== true) throw new Error(`${contact} must be marked as a surface contact.`);
  });
  for (const group of component.internalConnections ?? []) {
    if (!Array.isArray(group) || !group.length || group.some(id => !ids.has(id))) {
      throw new Error(`${context} has an internal connection to an unknown contact.`);
    }
  }
  return component;
}

function validateFootprint(footprint, component, context) {
  if (typeof footprint === 'function') return;
  if (!Array.isArray(footprint.body) || footprint.body.length !== 2) throw new Error(`${context} footprint must define its body dimensions.`);
  footprint.body.forEach(value => requirePositive(value, `${context} footprint body`));
  const ids = new Set(component.pins.map(pin => pin.id));
  const references = [...(footprint.groups ?? []).flatMap(group => group.ids), ...(footprint.pads ?? []).map(pad => pad.id)];
  for (const id of references) if (!ids.has(id)) throw new Error(`${context} footprint refers to unknown contact "${id}".`);
}

function validateEntry(entry, familyId) {
  validateComponent(entry?.component);
  const { component, render, footprint, model, configuration } = entry;
  const context = `Component "${component.id}" in family "${familyId}"`;
  if (typeof render !== 'function') throw new Error(`${context} is missing its artwork renderer.`);
  if (!footprint || (typeof footprint !== 'function' && typeof footprint !== 'object')) throw new Error(`${context} is missing its footprint definition.`);
  validateFootprint(footprint, component, context);
  if (model !== undefined && model !== null) {
    requireText(model.label, `${context} CAD label`);
    requireText(model.url, `${context} CAD URL`);
    if (!/^https?:\/\//.test(model.url)) throw new Error(`${context} CAD URL must use HTTP or HTTPS.`);
  }
  if (configuration !== undefined) {
    requireText(configuration.key, `${context} configuration key`);
    if (['id', 'componentId', 'x', 'y', 'rotation', 'label', '__proto__', 'constructor', 'prototype'].includes(configuration.key)) throw new Error(`${context} uses a reserved configuration key.`);
    if (typeof configuration.normalize !== 'function' || typeof configuration.create !== 'function') throw new Error(`${context} configuration must define normalize and create functions.`);
  }
  return Object.freeze({ component, render, footprint, ...(model ? { model } : {}), ...(configuration ? { configuration: Object.freeze(configuration) } : {}) });
}

// A component's definition, artwork, footprint and CAD reference travel as one entry.
export function defineFamily(id, entries) {
  requireText(id, 'Catalog family ID');
  if (!Array.isArray(entries) || !entries.length) throw new Error(`Catalog family "${id}" must contain entries.`);
  return Object.freeze({ id, entries: Object.freeze(entries.map(entry => validateEntry(entry, id))) });
}

export function createCatalog(families) {
  const componentById = new Map(), definitionsById = new Map(), familyIds = new Set();
  for (const family of families) {
    if (familyIds.has(family.id)) throw new Error(`Duplicate catalog family "${family.id}".`);
    familyIds.add(family.id);
    for (const entry of family.entries) {
      const { component } = entry;
      if (componentById.has(component.id)) throw new Error(`Duplicate catalog component "${component.id}".`);
      componentById.set(component.id, component);
      definitionsById.set(component.id, entry);
    }
  }
  return Object.freeze({ components: Object.freeze([...componentById.values()]), componentById, definitionsById });
}
