import { isMountable } from './catalog.js';

const manufacturerAliases = new Map([
  ['espressif', 'Espressif Systems'],
  ['espressif systems', 'Espressif Systems'],
  ['ebyte', 'EBYTE'],
  ['gowin', 'Gowin Semiconductor'],
  ['gowin semiconductor', 'Gowin Semiconductor'],
  ['friendlyarm', 'FriendlyElec'],
  ['friendly arm', 'FriendlyElec'],
  ['friendlyelec', 'FriendlyElec'],
  ['hi-link', 'Hi-Link'],
  ['hilink', 'Hi-Link'],
  ['simcom', 'SIMCom'],
  ['lilygo', 'LILYGO'],
  ['sparkfun', 'SparkFun Electronics'],
  ['sparkfun electronics', 'SparkFun Electronics'],
  ['raspberry pi', 'Raspberry Pi'],
  ['raspberry pi foundation', 'Raspberry Pi'],
  ['pjrc', 'PJRC'],
  ['teensy', 'PJRC'],
  ['mikroe', 'MIKROE'],
  ['mikroelektronika', 'MIKROE'],
  ['weact studio', 'WeAct Studio'],
]);

export function manufacturerName(value) {
  const name = typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
  return manufacturerAliases.get(name.toLowerCase()) ?? (name || 'Unspecified');
}

export function createLibraryIndex(components) {
  const counts = new Map();
  const entries = components.map(component => {
    const manufacturer = manufacturerName(component.manufacturer);
    counts.set(manufacturer, (counts.get(manufacturer) ?? 0) + 1);
    const aliases = [...manufacturerAliases].filter(([, name]) => name === manufacturer).map(([alias]) => alias);
    return {
      component, manufacturer, mountable: isMountable(component.id),
      text: [component.id, component.name, component.shortName, component.description, component.category,
        component.subtitle, component.manufacturer, manufacturer, ...aliases, ...(component.tags ?? [])].join(' ').toLowerCase(),
    };
  });
  return {
    entries,
    categories: [...new Set(components.map(component => component.category))].sort(),
    manufacturers: [...counts].sort(([a], [b]) => a.localeCompare(b)).map(([name, count]) => ({ name, count })),
  };
}

export function filterLibrary(index, { query = '', category = '', manufacturer = '', mountable = false } = {}) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const maker = manufacturer ? manufacturerName(manufacturer) : '';
  return index.entries.filter(entry =>
    (!mountable || entry.mountable) &&
    (!category || entry.component.category === category) &&
    (!maker || entry.manufacturer === maker) &&
    terms.every(term => entry.text.includes(term)));
}
