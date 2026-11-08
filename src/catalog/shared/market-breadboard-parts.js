import { bendableBreadboardPart } from './breadboard-parts.js';

// Families opt in explicitly. These views use already reviewed manufacturer
// package facts and stable terminal order; no native land pattern grants entry.
export function marketBreadboardPart(component, spec, dimensions) {
  const source = { label: `${spec.manufacturer} ${spec.part} ${spec.packageName} package drawing`, url: spec.source };
  const common = { dimensions, source, marking: spec.marking ?? spec.part,
    note: `${spec.manufacturer} ${spec.part}, ${spec.packageName}. Source pin functions and the published component-side terminal order are retained. The body is a fixed-size package illustration; formed insertion tips are an assembly choice. Verify the fitted package and available untrimmed lead length before assembly.` };
  if (spec.shape === 'axial') {
    const span = Math.ceil((dimensions[0] + 4) / 2.54) * 2.54;
    return bendableBreadboardPart(component, { ...common, kind: 'diode',
      exits: [[-dimensions[0] / 2, 0], [dimensions[0] / 2, 0]], tips: [[-span / 2, 0], [span / 2, 0]],
      color: spec.glass ? '#bf794b' : '#303c39', cathodeRight: component.pins[1].label === 'K', maxLeadMm: 20,
    });
  }
  if (spec.shape === 'to92' && /^TO-92(?:$|\s|-3)/.test(spec.packageName)) {
    return bendableBreadboardPart(component, { ...common, kind: 'to92',
      exits: [[-1.27, dimensions[1] / 2], [0, dimensions[1] / 2], [1.27, dimensions[1] / 2]],
      tips: [[-2.54, 5.08], [0, 5.08], [2.54, 5.08]], leadDiameter: .5, maxLeadMm: 10,
    });
  }
  if (['led3', 'led5'].includes(spec.shape)) {
    const cathode = component.pins.findIndex(pin => pin.label === 'K');
    return bendableBreadboardPart(component, { ...common, kind: 'led',
      exits: [[-1.27, 0], [1.27, 0]], tips: [[-1.27, 5.08], [1.27, 5.08]],
      color: spec.color ?? '#c34c4e', ...(cathode >= 0 ? { cathodeRight: cathode === 1 } : {}), leadDiameter: .5, maxLeadMm: 20,
    });
  }
  return undefined;
}
