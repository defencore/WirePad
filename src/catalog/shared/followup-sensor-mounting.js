import references from '../data/radio-followup/measurement-sensors.js';
import { sourceReferenceMounting } from './source-reference-mounting.js';

// Manufacturer facts apply only to an explicitly activated assembly view.
export function followupSensorMounting(component) {
  const reference = references[component.id];
  const profile = sourceReferenceMounting(component, reference);
  if (!profile || !reference.connections.length) return profile;
  return { ...profile, view: { ...profile.view,
    connections: reference.connections,
    connectionSource: { label: `${component.name} exact manufacturer schematic nets`,
      url: reference.source.url.replace(/\.brd$/, '.sch') },
  } };
}
