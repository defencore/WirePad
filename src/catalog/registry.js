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
    if (pin.symbolPlacement && (!['left', 'right'].includes(pin.symbolPlacement.side) ||
        !Number.isFinite(pin.symbolPlacement.order) || pin.symbolPlacement.order < 0)) {
      throw new Error(`${contact} has an invalid symbol placement.`);
    }
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

function validateMountingView(mounting, component, context) {
  const view = mounting.view;
  if (view === undefined) return null;
  const rigid = mounting.type === 'breadboard-module' || mounting.type === 'breadboard-part' && mounting.mode === 'rigid';
  if (!view || typeof view !== 'object' || Array.isArray(view) || !rigid || view.id !== 'breadboard' ||
      !mounting.calibration || !mounting.viewBounds || typeof mounting.renderMounted !== 'function') {
    throw new Error(`${context} physical view needs a reviewed rigid profile, calibration, bounds and renderer.`);
  }
  requireText(view.note, `${context} physical view evidence`);
  if (!Array.isArray(view.pins) || view.pins.length !== component.pins.length) throw new Error(`${context} physical view must retain every contact.`);
  const canonical = new Set(component.pins.map(pin => pin.id)), ids = new Set();
  const { x, y, width, height } = mounting.viewBounds;
  for (const pin of view.pins) {
    if (!pin || !canonical.has(pin.pinId) || ids.has(pin.pinId) || ![pin.x, pin.y].every(Number.isFinite) ||
        pin.face !== undefined && !['front', 'rear'].includes(pin.face)) throw new Error(`${context} physical view has an invalid or repeated contact.`);
    if (pin.x < x - 1e-7 || pin.y < y - 1e-7 || pin.x > x + width + 1e-7 || pin.y > y + height + 1e-7) {
      throw new Error(`${context} physical view contact is outside its visible bounds.`);
    }
    ids.add(pin.pinId);
  }
  if (view.connections !== undefined) {
    if (!Array.isArray(view.connections) || !view.connections.length || view.connections.some(group =>
      !Array.isArray(group) || group.length < 2 || new Set(group).size !== group.length || group.some(id => !canonical.has(id)))) {
      throw new Error(`${context} physical view has invalid internal connections.`);
    }
    requireText(view.connectionSource?.label, `${context} physical view connection source label`);
    requireText(view.connectionSource?.url, `${context} physical view connection source URL`);
    if (!/^https?:\/\//.test(view.connectionSource.url)) throw new Error(`${context} physical view connection source must use HTTP or HTTPS.`);
  }
  return new Map(view.pins.map(pin => [pin.pinId, pin]));
}

function validateMounting(mounting, component, context) {
  if (!mounting || typeof mounting !== 'object') throw new Error(`${context} has an invalid mounting descriptor.`);
  if (!['breadboard', 'breadboard-module', 'breadboard-part'].includes(mounting.type)) throw new Error(`${context} has an unsupported mounting type.`);
  requirePositive(mounting.pitch, `${context} mounting pitch`);
  if (mounting.type === 'breadboard') {
    requirePositive(mounting.canvasPitch, `${context} mounting canvas pitch`);
    if (typeof mounting.contacts !== 'function') throw new Error(`${context} mounting host must generate its terminal holes.`);
    if (mounting.railContacts !== undefined && typeof mounting.railContacts !== 'function') throw new Error(`${context} mounting host must generate its rail holes.`);
  } else {
    requireText(mounting.source?.label, `${context} mounting source label`);
    requireText(mounting.source?.url, `${context} mounting source URL`);
    if (!/^https?:\/\//.test(mounting.source.url)) throw new Error(`${context} mounting source must use HTTP or HTTPS.`);
    requireText(mounting.note, `${context} mounting installation note`);
  }
  if (mounting.type === 'breadboard-part') {
    if (!['rigid', 'bendable'].includes(mounting.mode)) throw new Error(`${context} has an invalid breadboard part mode.`);
    if (mounting.body !== undefined && (!mounting.body || !['x', 'y', 'width', 'height'].every(key => Number.isFinite(mounting.body[key])) || mounting.body.width <= 0 || mounting.body.height <= 0)) throw new Error(`${context} mounting body has invalid bounds.`);
    if (mounting.allowRails !== undefined && typeof mounting.allowRails !== 'boolean') throw new Error(`${context} mounting rail permission must be boolean.`);
    if (mounting.mode === 'bendable') {
      requirePositive(mounting.unitsPerMm, `${context} mounted body scale`);
      requirePositive(mounting.maxLeadMm, `${context} maximum formed lead length`);
      if (mounting.leadRadius !== undefined) requirePositive(mounting.leadRadius, `${context} formed lead ink radius`);
      if (!mounting.body || !mounting.origin || ![mounting.origin.x, mounting.origin.y].every(Number.isFinite) || typeof mounting.render !== 'function') throw new Error(`${context} bendable mounting needs a body, origin and renderer.`);
      if (!Array.isArray(mounting.roots) || mounting.roots.length !== mounting.contacts?.length) throw new Error(`${context} bendable mounting roots must match its contacts.`);
      const rootIds = new Set();
      for (const root of mounting.roots) {
        if (!root || rootIds.has(root.pinId) || !mounting.contacts.some(contact => contact.pinId === root.pinId) || ![root.x, root.y].every(Number.isFinite)) throw new Error(`${context} mounting has invalid or repeated body roots.`);
        rootIds.add(root.pinId);
        const { x, y, width, height } = mounting.body;
        if (root.x < x - 1e-7 || root.x > x + width + 1e-7 || root.y < y - 1e-7 || root.y > y + height + 1e-7) throw new Error(`${context} mounting root is outside its physical body.`);
        const tip = mounting.contacts.find(contact => contact.pinId === root.pinId);
        if (Math.hypot(mounting.origin.x + tip.x * mounting.unitsPerMm - root.x, mounting.origin.y + tip.y * mounting.unitsPerMm - root.y) > mounting.maxLeadMm * mounting.unitsPerMm + 1e-7) throw new Error(`${context} nominal mounting lead exceeds its physical reach.`);
      }
    }
  }
  const validBodyRectangle = value => value && ['x', 'y', 'width', 'height'].every(key => Number.isFinite(value[key])) && value.width > 0 && value.height > 0;
  if (mounting.body !== undefined && !validBodyRectangle(mounting.body)) throw new Error(`${context} mounting body has invalid bounds.`);
  if (mounting.bodyFor !== undefined && (typeof mounting.bodyFor !== 'function' || !validBodyRectangle(mounting.bodyFor(component)))) throw new Error(`${context} mounting body resolver must return finite positive bounds.`);
  if (mounting.viewBounds !== undefined && !validBodyRectangle(mounting.viewBounds)) throw new Error(`${context} mounted view has invalid bounds.`);
  if (mounting.renderMounted !== undefined && typeof mounting.renderMounted !== 'function') throw new Error(`${context} mounted view renderer must be a function.`);
  if (mounting.calibration !== undefined) {
    const calibration = mounting.calibration;
    if (!calibration || !calibration.origin || ![calibration.origin.x, calibration.origin.y].every(Number.isFinite)) throw new Error(`${context} mounting calibration has an invalid source origin.`);
    requirePositive(calibration.unitsPerMm, `${context} source canvas units per mm`);
    if (calibration.toleranceMm !== undefined && (!Number.isFinite(calibration.toleranceMm) || calibration.toleranceMm < 0 || calibration.toleranceMm > .001)) throw new Error(`${context} mounting source precision must be between 0 and 0.001 mm.`);
  }
  if (mounting.bodyRegions !== undefined) {
    if (!Array.isArray(mounting.bodyRegions) || !mounting.bodyRegions.length || mounting.bodyRegions.length > 32 ||
        !mounting.bodyRegions.every(validBodyRectangle) || !validBodyRectangle(mounting.body)) {
      throw new Error(`${context} mounting physical body regions need finite positive rectangles and an envelope.`);
    }
    requireText(mounting.bodyEvidence, `${context} physical body region evidence`);
    const left = Math.min(...mounting.bodyRegions.map(region => region.x)), top = Math.min(...mounting.bodyRegions.map(region => region.y));
    const right = Math.max(...mounting.bodyRegions.map(region => region.x + region.width)), bottom = Math.max(...mounting.bodyRegions.map(region => region.y + region.height));
    if ([mounting.body.x - left, mounting.body.y - top, mounting.body.width - (right - left), mounting.body.height - (bottom - top)]
      .some(delta => Math.abs(delta) > 1e-7)) throw new Error(`${context} mounting body must match its physical region envelope.`);
  }
  const viewPins = validateMountingView(mounting, component, context);
  const terminals = mounting.type === 'breadboard' ? mounting.contacts(component) : mounting.contacts;
  const rails = mounting.type === 'breadboard' && mounting.railContacts ? mounting.railContacts(component) : [];
  if (!Array.isArray(terminals) || !Array.isArray(rails)) throw new Error(`${context} mounting must identify physical contacts.`);
  const contacts = [...terminals, ...rails];
  if (!Array.isArray(contacts) || !contacts.length) throw new Error(`${context} mounting must identify physical contacts.`);
  const pins = new Map(component.pins.map(pin => [pin.id, pin]));
  const ids = new Set(), positions = new Set();
  const origin = contacts[0];
  for (const contact of contacts) {
    const canonicalPin = pins.get(contact.pinId), projected = viewPins?.get(contact.pinId);
    const pin = projected ? { ...canonicalPin, ...projected, face: projected.face ?? 'front', back: false } : canonicalPin;
    if (!pin) throw new Error(`${context} mounting refers to unknown contact "${contact.pinId}".`);
    if (ids.has(contact.pinId)) throw new Error(`${context} mounting repeats contact "${contact.pinId}".`);
    ids.add(contact.pinId);
    if (![contact.x, contact.y].every(Number.isFinite)) throw new Error(`${context} mounting contact "${contact.pinId}" has invalid coordinates.`);
    const position = `${contact.x},${contact.y}`;
    if (positions.has(position)) throw new Error(`${context} mounting repeats a physical contact position.`);
    positions.add(position);
    if (mounting.type === 'breadboard') {
      requireText(contact.group, `${context} mounting conductor group`);
      if (contact.x !== pin.x || contact.y !== pin.y) throw new Error(`${context} mounting hole must use its published canvas position.`);
      if (!component.internalConnections?.some(ids => ids[0] === contact.group && ids.includes(contact.pinId))) {
        throw new Error(`${context} mounting hole must identify its existing internal conductor.`);
      }
      if (contact.region !== (rails.includes(contact) ? 'rail' : 'terminal')) throw new Error(`${context} mounting hole has an incorrect breadboard region.`);
    } else if (pin.back || ['back', 'rear'].includes(pin.face ?? pin.view)) {
      throw new Error(`${context} mounting cannot use a separate rear-view contact.`);
    } else if (['x', 'y'].some(axis => {
      const steps = (contact[axis] - origin[axis]) / mounting.pitch;
      return !Number.isFinite(steps) || Math.abs(steps - Math.round(steps)) > 1e-7;
    })) {
      throw new Error(`${context} mounting contacts must share the declared physical pitch grid.`);
    }
    if (mounting.calibration && ['x', 'y'].some(axis => Math.abs(pin[axis] - mounting.calibration.origin[axis] - contact[axis] * mounting.calibration.unitsPerMm) > (mounting.calibration.toleranceMm ?? 0) * mounting.calibration.unitsPerMm + 1e-7)) {
      throw new Error(`${context} mounting contact exceeds its reviewed source calibration precision.`);
    }
  }
  if (mounting.type === 'breadboard-part' && component.pins.some(pin => !ids.has(pin.id))) throw new Error(`${context} part mounting must include every electrical contact.`);
  return Object.freeze({ ...mounting, ...(mounting.type !== 'breadboard' ? {
    source: Object.freeze({ ...mounting.source }),
    contacts: Object.freeze(contacts.map(contact => Object.freeze({ ...contact }))),
  } : {}), ...(mounting.body ? { body: Object.freeze({ ...mounting.body }) } : {}),
    ...(mounting.bodyRegions ? { bodyRegions: Object.freeze(mounting.bodyRegions.map(region => Object.freeze({ ...region }))) } : {}),
    ...(mounting.viewBounds ? { viewBounds: Object.freeze({ ...mounting.viewBounds }) } : {}),
    ...(mounting.view ? { view: Object.freeze({ ...mounting.view,
      ...(mounting.view.connections ? { connections: Object.freeze(mounting.view.connections.map(group => Object.freeze([...group]))),
        connectionSource: Object.freeze({ ...mounting.view.connectionSource }) } : {}),
      pins: Object.freeze(mounting.view.pins.map(pin => Object.freeze({ ...pin,
        ...(Array.isArray(pin.size) ? { size: Object.freeze([...pin.size]) } : {}) }))) }) } : {}),
    ...(mounting.calibration ? { calibration: Object.freeze({ ...mounting.calibration, origin: Object.freeze({ ...mounting.calibration.origin }) }) } : {}),
    ...(mounting.origin ? { origin: Object.freeze({ ...mounting.origin }) } : {}),
    ...(mounting.roots ? { roots: Object.freeze(mounting.roots.map(root => Object.freeze({ ...root }))) } : {}) });
}

function validateEntry(entry, familyId) {
  validateComponent(entry?.component);
  const { component, render, footprint, model, configuration, mounting } = entry;
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
    if (['id', 'componentId', 'x', 'y', 'rotation', 'label', 'scale', 'scaleX', 'scaleY', 'attachment', 'attachments', 'mounting', 'leads', 'view', '__proto__', 'constructor', 'prototype'].includes(configuration.key)) throw new Error(`${context} uses a reserved configuration key.`);
    if (typeof configuration.normalize !== 'function' || typeof configuration.create !== 'function') throw new Error(`${context} configuration must define normalize and create functions.`);
  }
  return Object.freeze({ component, render, footprint, ...(model ? { model } : {}), ...(configuration ? { configuration: Object.freeze(configuration) } : {}),
    ...(mounting !== undefined ? { mounting: validateMounting(mounting, component, context) } : {}) });
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
