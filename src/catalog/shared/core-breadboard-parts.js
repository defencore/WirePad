import { bendableBreadboardPart, rigidBreadboardPart } from './breadboard-parts.js';

// These generic catalog parts have representative, explicitly sourced bodies.
// Their formed tips describe an assembly choice, not an exact native footprint.
const specifications = {
  inductor: {
    kind: 'inductor', dimensions: [7.11, 2.79], tips: [[-5.08, 0], [5.08, 0]], exits: [[-3.555, 0], [3.555, 0]],
    leadDiameter: .51, maxLeadMm: 20, color: '#476457',
    source: { label: 'Bourns 78F axial RF choke mechanical example, product dimensions', url: 'https://www.bourns.com/docs/product-datasheets/78f_series.pdf' },
    note: 'Representative Bourns 78F-style axial choke, not identification of the unspecified generic inductor. The fixed 7.11 × 2.79 mm envelope uses the manufacturer maximum body dimensions and 0.51 mm round leads. Form only the leads to the initial 10.16 mm span; at least 25.4 mm of untrimmed lead is supplied on either side. The 20 mm projected reach leaves insertion allowance. Bands are representative and do not specify inductance. Default artwork and native geometry are unchanged.',
  },
  'ferrite-bead': {
    kind: 'ferrite', dimensions: [5.3, 3.75], tips: [[-5.08, 0], [5.08, 0]], exits: [[-2.65, 0], [2.65, 0]],
    leadDiameter: .65, maxLeadMm: 15, color: '#303a42',
    source: { label: 'Murata BL01RN1A1D2B manufacturer reference specification JENF243G-0003E-01, page 3 (distributor-hosted original)', url: 'https://media.digikey.com/pdf/Data%20Sheets/Murata%20PDFs/BL01RN1A_Spec.pdf' },
    note: 'Representative straight-leaded Murata BL01RN1A1D2B mechanical example; it does not identify every generic ferrite bead. The fixed 5.3 × 3.75 mm envelope uses maximum source dimensions, with 0.65 mm round leads. Initial 10.16 mm tip spacing leaves more than the source 1.5 mm coating extension beyond either body exit before bending downward. Limit projected reach to 15 mm from each exit; the source supplies at least 20 mm of straight lead per side. Default artwork and native geometry are unchanged.',
  },
  resistor: {
    kind: 'resistor', dimensions: [6.5, 2.5], tips: [[-5.08, 0], [5.08, 0]], exits: [[-3.25, 0], [3.25, 0]], leadDiameter: .6,
    source: { label: 'Vishay MRS25 DIN0207 mechanical example, document 28724', url: 'https://www.vishay.com/docs/28724/mrs16m25.pdf' },
    note: 'Representative DIN0207 axial resistor body. The manufacturer example has a minimum 10 mm formed span; the default insertion tips use 10.16 mm. Only the metal leads bend. Verify the actual generic resistor before assembly.',
  },
  diode: {
    kind: 'diode', dimensions: [3.4, 1.75], tips: [[-3.81, 0], [3.81, 0]], exits: [[-1.7, 0], [1.7, 0]], leadDiameter: .55,
    source: { label: 'Vishay 1N4148 DO-35 mechanical drawing, document 81857', url: 'https://www.vishay.com/docs/81857/1n4148.pdf' },
    note: '1N4148 DO-35 package example, maximum 3.4 mm body length and 1.75 mm diameter. The cathode band follows the stable K contact. Its two metal leads can be formed to the breadboard holes without stretching the body.',
    color: '#b57a4f', cathodeRight: false,
  },
  led: {
    kind: 'led', dimensions: [5.9, 5.9], tips: [[-1.27, 5.08], [1.27, 5.08]], exits: [[-1.27, 0], [1.27, 0]], leadDiameter: .5,
    source: { label: 'Kingbright WP7113ID 5 mm lamp mechanical example', url: 'https://www.kingbrightusa.com/images/catalog/SPEC/WP7113ID.pdf' },
    note: 'Representative red 5 mm LED with a 5.9 mm flange and 2.54 mm lead spacing, based on the Kingbright mechanical example. The flat mark follows K, and A retains the anode identity. Form only the leads; actual generic LED polarity must be checked.',
    color: '#c14c4f', cathodeRight: false,
  },
  capacitor: {
    kind: 'ceramic', dimensions: [5, 3.5], tips: [[-1.27, 5.08], [1.27, 5.08]], exits: [[-1.25, 0], [1.25, 0]], leadDiameter: .6, maxLeadMm: 6,
    source: { label: 'Vishay D-series ceramic disc package and lead-style example, document 28549', url: 'https://www.vishay.com/docs/28549/dseries.pdf' },
    note: 'Representative small radial ceramic body, using a 5 mm diameter / 3.5 mm thickness D-series package example. It does not identify the unspecified generic capacitance or voltage ordering code. The 2.5 mm exit spacing is gently formed to 2.54 mm insertion spacing; only the leads move.',
    color: '#bf9251', marking: 'C',
  },
  electrolytic: {
    kind: 'electrolytic', dimensions: [6.3, 6.3], tips: [[-1.27, 5.08], [1.27, 5.08]], exits: [[-1.25, 0], [1.25, 0]], leadDiameter: .5, maxLeadMm: 12,
    source: { label: 'Nichicon radial-lead aluminum electrolytic mechanical examples', url: 'https://www.nichicon.co.jp/english/products/pdf_x/Miniature_Type_Aluminum_Electrolytic_Capacitors_E.pdf' },
    note: 'Representative 6.3 mm radial electrolytic body with 2.5 mm exit spacing, using the Nichicon mechanical table. Positive and negative contact IDs and sleeve stripe remain separate. Actual rating, body height and available trimmed lead length depend on the fitted part.',
  },
};

export function coreBreadboardMounting(component) {
  if (specifications[component.id]) return bendableBreadboardPart(component, specifications[component.id]);
  if (component.id !== 'pin-header-4') return undefined;
  const units = (component.pins[1].x - component.pins[0].x) / 2.54;
  return rigidBreadboardPart(
    { label: 'Würth Elektronik 61300411121 four-position 2.54 mm header example', url: 'https://www.we-online.com/components/products/datasheet/61300411121.pdf' },
    component.pins.map((pin, index) => ({ pinId: pin.id, x: (index - 1.5) * 2.54, y: 0 })),
    { x: component.pins[0].x - units * 1.27, y: component.pins[0].y - units * 1.27,
      width: 10.16 * units, height: 2.54 * units },
    'Representative straight four-pin male header, 2.54 mm pitch and 7.62 mm center span. The 10.16 × 2.54 mm housing follows the named manufacturer example. All four pins must fit distinct free holes; the 2 mm JST connector is not interchangeable.',
  );
}
