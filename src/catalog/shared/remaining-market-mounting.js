import { bendableBreadboardPart, rigidBreadboardPart } from './breadboard-parts.js';
import { circle, label, line, path, rect } from './svg.js';

// Package-specific facts are independent of the old canvas illustration and
// native reference copper. These are complete native terminals, not carriers.
export const remainingMarketReviews = {
  'lm35dz-ic': { kind: 'to92', dimensions: [5.21, 4.19], leadDiameter: .55,
    source: 'https://www.ti.com/lit/ds/symlink/lm35.pdf',
    evidence: 'LM35DZ/NOPB is the LP three-lead TO-92 version. The LP0003A outline supplies 1.27 mm straight-lead pitch, a 5.21 × 4.19 mm maximum top envelope and at least 12.7 mm free lead length. Retain terminal order 1 +VS, 2 VOUT, 3 GND at the flat front. Form all three free lead tips onto separate 2.54 mm socket rows; the body does not stretch.' },
  'lm335z-ic': { kind: 'to92', dimensions: [5.21, 4.19], leadDiameter: .55,
    source: 'https://www.ti.com/lit/ds/symlink/lm135.pdf',
    evidence: 'LM335Z/LFT7 is the LP three-lead TO-92 version, not the SOIC ordering code. The LP package drawing specifies the complete three-lead body and 1.27 mm straight-lead pitch. Retain 1 ADJ, 2 positive shunt node, 3 negative shunt node at the flat front; the calibration terminal is a real lead and is not dropped. The formed tip spacing is 2.54 mm.' },
  'tmp36gt9z-ic': { kind: 'to92', dimensions: [5.207, 4.191], leadDiameter: .5588,
    source: 'https://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf',
    evidence: 'TMP36GT9Z is the T-3-1 TO-92 ordering code in Figure 38. Inch dimensions control: maximum top width 0.205 inch, depth 0.165 inch, nominal exit pitch 0.050 inch and at least 0.500 inch free lead. Pins remain +VS / VOUT / GND in the flat-front presentation. Millimeter values are converted from the controlling inches; new formed tips use 0.100 inch centers.' },
  'ds18b20-ic': { kind: 'to92', dimensions: [4.95, 3.94], leadDiameter: .5588,
    source: 'https://www.analog.com/media/en/technical-documentation/data-sheets/ds18b20.pdf',
    evidence: 'The exact DS18B20+ bulk version is three-lead TO-92 with straight leads; the datasheet distinguishes it from SO and microSOP variants and lists straight versus formed tape options. The manufacturer package index identifies Q3-1 / outline 21-0248 with a 4.95 × 3.94 mm top envelope. The 1.27 mm exit spacing and conservative free-lead reach are a nominal TO-92 assembly inference; they are not claimed as freshly extracted production-CAD coordinates. Retain all three leads, GND / DQ / VDD, even in parasite-power circuits. Only their free tips are formed to 0.100 inch centers.' },
  'market-j175': { kind: 'to92', dimensions: [4.78, 3.65], leadDiameter: .48, reverse: true,
    source: 'https://www.interfet.com/jfet-datasheets/jfet-j174-j175-interfet.pdf',
    evidence: 'InterFET IF35088.R00 identifies J175 as the TO-92 through-hole version and SMPJ175 as the separate SOT23 version. Its four-page drawing gives 1.27 mm pitch, 12.98 mm minimum lead length and a 4.78 × 3.65 mm maximum top envelope. The published drawing is a bottom view. The new flat-front body view places source 1 left, gate 2 center, drain 3 right; stable IDs p3/p2/p1 preserve their original electrical functions.' },
  'market-bt169d-116': { kind: 'to92', dimensions: [4.7, 3.7], leadDiameter: .48,
    source: 'https://www.ween-semi.com/datasheet/BT169D.pdf',
    evidence: 'WeEn BT169D Rev.04 pinning gives front order 3 cathode, 2 gate, 1 anode. Ordering table identifies BT169D,116 as the wide-pitch SOT54 version. All three terminals are retained on its nominal 2.54 mm formed post row; the current native 1.27 mm reference carrier remains unchanged. This profile makes no electrical operating-voltage qualification for the breadboard.' },
  'market-bpw34': { kind: 'photodiode', dimensions: [4.3, 4.65], leadDiameter: .35,
    leadCrossSectionMm: [.35, .3], maxLeadMm: 1,
    leadBudgetMm: { minimumFreeTail: 3, maximumPlanarReach: 1, reservedInsertionAndBend: 2 },
    source: 'https://www.vishay.com/docs/81521/bpw34.pdf',
    evidence: 'Vishay 81521 page 4 gives the optical-top 4.3 × 4.65 mm body, anode at the top and cathode at the bottom, nominal 5.1 ± 0.2 mm lead spacing and tapered rectangular tips 0.35 mm wide × 0.30 mm thick. The scalar leadDiameter is an illustration stroke weight, not a round-wire claim. The 5.0 mm minimum total height minus the 2.0 mm maximum body thickness leaves at least 3 mm free tail. Planar reach is capped at 1 mm, reserving at least 2 mm for insertion and bending. The nominal pose uses only about 0.215 mm planar reach per tail to give 5.08 mm tip separation. The optical face and cathode marking stay visible; the body is not a generic capacitor or 104 rectangle.' },
  'opt101p-ic': { kind: 'dip', dimensions: [6.52, 9.53],
    source: 'https://www.ti.com/lit/ds/symlink/opt101.pdf',
    evidence: 'OPT101P is the clear NTC eight-lead PDIP ordering code. The manufacturer package drawing gives 2.54 mm longitudinal pitch and nominal 7.62 mm row separation, and confirms all eight native terminal numbers including both NC positions. All eight contacts fit across the breadboard trench. The transparent optical face and existing component-side native geometry are already uniformly calibrated.' },
};

function photodiodeBody({ body, labels }) {
  const { x, y, width, height } = body;
  return rect(x, y, width, height, .6, '#c9bdb2', '#e7e3d9') +
    rect(x + 2, y + 2, width - 4, height - 4, .3, '#d5c8ba', '#a99e89') +
    rect(x + (width - 24) / 2, y + (height - 24) / 2, 24, 24, 0, '#312a28', '#777067') +
    line(x + width / 2, y + height - 3, x + width / 2 + 5, y + height - 3, '#f2e5d0', 1.1) +
    (labels ? label(x + width / 2, y + height - 6, 'BPW34', 3.4, '#f0e5d4') : '');
}

export function withRemainingMarketMounting(entry) {
  const review = remainingMarketReviews[entry.component.id];
  if (!review) return entry;
  const component = entry.component;
  const source = { label: `${component.manufacturer} ${component.shortName} exact package drawing`, url: review.source };
  if (review.kind === 'dip') {
    const scale = 14, origin = { x: component.width / 2, y: component.height / 2 };
    const contacts = component.pins.map(pin => {
      const number = Number(pin.number), left = number <= 4, row = left ? number - 1 : 8 - number;
      return { pinId: pin.id, x: left ? -3.81 : 3.81, y: (row - 1.5) * 2.54 };
    });
    const body = { x: origin.x - review.dimensions[0] * scale / 2, y: origin.y - review.dimensions[1] * scale / 2,
      width: review.dimensions[0] * scale, height: review.dimensions[1] * scale };
    const pins = contacts.map(contact => ({ pinId: contact.pinId,
      x: origin.x + contact.x * scale, y: origin.y + contact.y * scale, face: 'front' }));
    const mountedArt = () => `<g transform="translate(${origin.x} ${origin.y}) scale(${scale})" stroke-width=".06">` +
      contacts.map(contact => line(contact.x < 0 ? -3.26 : 3.26, contact.y, contact.x, contact.y, '#b3b8ac', .46) +
        rect(contact.x - .28, contact.y - .23, .56, .46, .025, '#c4c9b9', '#e1e5d4')).join('') +
      rect(-3.26, -4.765, 6.52, 9.53, .12, '#d3c6a8', '#9a9f8e') +
      rect(-3.1, -4.6, 6.2, 9.2, .08, 'rgba(225,233,220,.32)', '#b5c3bc') +
      rect(-1.145, -1.145, 2.29, 2.29, .04, '#523f5a', '#9faba6') +
      path('M-1.1 -.7L-2.9 -3.81M1.1 .7L2.9 3.81', 'none', '#a3976c', .08) +
      circle(-2.8, -4.25, .14, '#444f4c') + '</g>';
    return { ...entry, mounting: { ...rigidBreadboardPart(source, contacts, body, review.evidence),
      calibration: { origin, unitsPerMm: scale }, bodyRegions: [body], bodyEvidence: review.evidence,
      viewBounds: { x: origin.x - 4.13 * scale, y: body.y - .6,
        width: 8.26 * scale, height: body.height + 1.2 },
      view: { id: 'breadboard', pins, note: review.evidence }, renderMounted: mountedArt,
    } };
  }
  const photodiode = review.kind === 'photodiode';
  const positions = review.reverse ? [1.27, 0, -1.27] : [-1.27, 0, 1.27];
  const exits = photodiode ? [[0, -review.dimensions[1] / 2], [0, review.dimensions[1] / 2]]
    : positions.map(x => [x, review.dimensions[1] / 2]);
  const tips = photodiode ? [[0, -2.54], [0, 2.54]] : positions.map(x => [x * 2, 5.08]);
  return { ...entry, mounting: bendableBreadboardPart(component, {
    kind: review.kind, dimensions: review.dimensions, source, note: review.evidence,
    marking: component.shortName, exits, tips, maxLeadMm: review.maxLeadMm ?? 10,
    leadDiameter: review.leadDiameter,
    ...(photodiode ? { renderBody: photodiodeBody,
      labelOffsets: { [component.pins[0].id]: [3.5, -3.5], [component.pins[1].id]: [3.5, 7] } } : {}),
  }) };
}
