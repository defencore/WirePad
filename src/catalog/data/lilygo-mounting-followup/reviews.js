// Primary CAD coordinates in millimetres, projected component-side with USB at
// the bottom. Auxiliary socket tails remain wiring contacts, never insertions.
const github = (repo, path, branch = 'main') => `https://github.com/Xinyuan-LilyGO/${repo}/blob/${branch}/${path}`;
const rear = (x, y, description) => ({ x, y, face: 'rear', description });
const tail = (x, y, description = 'Manufacturer connector solder-tail center; use the matching cable for the fitted socket.') => ({ x, y, description });
const qtAux = {
  'CNC1.1': rear(9.541307, 24.5723915, 'Projected underside CNC1 GND metal tail; rear pinmap is mirrored through the PCB.'),
  'CNC1.2': rear(8.5413085, 24.5723915, 'Projected underside CNC1 3V3 metal tail.'),
  'CNC1.3': rear(7.5413105, 24.5723915, 'Projected underside CNC1 UART TX/GPIO43 metal tail.'),
  'CNC1.4': rear(6.5488475, 24.5723915, 'Projected underside CNC1 UART RX/GPIO44 metal tail.'),
  'BAT.VBAT': rear(16.754, 28.550111, 'Projected underside positive battery solder land, 1.57 mm diameter in the Pro STEP.'),
  'BAT.GND': rear(15.61, 30.505111, 'Projected underside negative battery solder land, 1.57 mm diameter in the Pro STEP.'),
};
const ethAux = Object.fromEntries([7, 5, 3, 1, 8, 6, 4, 2].map((number, index) => [`P1.${number}`, tail(
  (index < 4 ? 24.13 : 21.59) - .00345186, 58.80054788 - (23.622 - index % 4 * 2.54),
  'Optional upward-facing PoE shield header contact; leave its insertion tails unfitted. Never insert this second two-row connector into the breadboard.')]));
const originalAux = {
  // The original CAD intentionally has empty SMT connector blocks. X origins
  // and pitch are from those placements; tail-row Y is read from its own pinmap.
  'P4.1': tail(19.77798132, 53.0, 'Original manufacturer photo-projected UART socket GND tail, 1.0 mm contact pitch; placement is approximate.'),
  'P4.2': tail(20.77798132, 53.0, 'Original manufacturer photo-projected UART socket 3V3 tail, placement is approximate.'),
  'P4.3': tail(21.77798132, 53.0, 'Original manufacturer photo-projected UART TX/GPIO43 tail, placement is approximate.'),
  'P4.4': tail(22.77798132, 53.0, 'Original manufacturer photo-projected UART RX/GPIO44 tail, placement is approximate.'),
  'P7.2': tail(12.12222876, 51.6, 'Original manufacturer photo-projected negative battery socket contact; 1.25 mm pitch, placement is approximate.'),
  'P7.1': tail(13.37222876, 51.6, 'Original manufacturer photo-projected positive battery socket contact; 1.25 mm pitch, placement is approximate.'),
};
const plusAux = {};
for (const [ref, left, y] of [['CN2', 2.97261793, 3.73605697], ['CN1', 20.0726164, 3.63605849]]) {
  for (let index = 0; index < 4; index++) plusAux[`${ref}.${index + 1}`] = tail(left + index - .318, 53.792999267578 - y);
}
const t3sAux = {
  'U4.1': tail(17.6697953333, 62.5270966667, 'Positive fitted battery socket tail. Stable U4.1 ID is retained; source V1.3 CAD calls the connector P2.'),
  'U4.2': tail(19.6697906667, 62.5270966667, 'Negative fitted battery socket tail. Stable U4.2 ID is retained; source V1.3 CAD calls the connector P2.'),
  'J3.1': tail(24.2565, 44.2287, 'Solar socket GND solder tail, 2.0 mm connector pitch; not an insertion lead.'),
  'J3.2': tail(24.2565, 46.2287, 'Solar socket positive solder tail, 2.0 mm connector pitch; not an insertion lead.'),
};
for (const [ref, left, y] of [['P1', 18.9897226667, 20.0796706667], ['P3', 12.1323686667, 20.09492]]) {
  for (let index = 0; index < 4; index++) t3sAux[`${ref}.${index + 1}`] = tail(left + index - 10, 80.554 - y);
}
export const lilygoFollowupReviews = {
  'lilygo-t-qt-pro-v1-3': {
    size: [17.78, 31.595111], auxiliary: qtAux,
    rows: [{ ref: 'P1', count: 7, x: 1.259383, y: 7.8486 }, { ref: 'P2', count: 7, x: 16.499383, y: 7.8486 }],
    regions: [{ x: 0, y: 0, width: 17.78, height: 31.595111 }, { x: 4.55, y: 30.6, width: 8.7, height: 2.195111 }],
    source: { label: 'LILYGO T-QT Pro manufacturer STEP, DXF and Pro pinmap', url: github('T-QT', '3D_file/T_QT_Pro.stp') },
    evidence: 'Pro STEP gives all fourteen through-hole centers on two 2.54 mm rows, 15.24 mm apart. The 0.0002 mm DXF row offset is export rounding; installed straight posts are the nominal common grid. STEP metal faces and battery cylinders locate all six projected rear contacts. PCB and USB material exclude the composite rear inset and its caption.',
    note: 'Populate all fourteen main P1/P2 downward male posts. CNC1 and the battery solder lands are projected underside wiring contacts, not extra breadboard leads.',
  },
  'lilygo-t-eth-lite-esp32-v1-0': {
    size: [27.9610947, 58.82549576], auxiliary: ethAux, labels: { 'P2.14': '39', 'P3.7': '38' },
    rows: [{ ref: 'P2', count: 15, x: 1.26654814, y: 7.29054676 }, { ref: 'P3', count: 15, x: 26.66654814, y: 7.29054676 }],
    source: { label: 'LILYGO original ESP32 T-ETH-Lite manufacturer DXF', url: github('LilyGO-T-ETH-Series', 'shell/T-ETH-Lite-ESP32.DXF', 'master') },
    evidence: 'Exact original ESP32 DXF HDR1X15 drill centers are x=1.27/26.67 and y=15.95000112 through 51.51000112: thirty 2.54 mm leads with 25.4 mm row spacing. KeepOut PCB centerlines define physical material. The eight optional PoE contacts are mapped at their separate source centers; they are not downward leads.',
    note: 'Populate both complete fifteen-post main strips downward. Keep the optional two-row P1 PoE connector upward-facing or unfitted; a downward-populated P1 variant needs an adapter and is not this assembly.',
  },
  'lilygo-t-display-s3-amoled-original': {
    size: [25.49, 58.7820008], auxiliary: originalAux,
    rows: [{ ref: 'P6', count: 14, x: 1.28865884, y: 6.8385944 }, { ref: 'P5', count: 14, x: 24.14865884, y: 6.8385944 }],
    regions: [{ x: 0, y: 0, width: 25.49, height: 58.7820008 }, { x: 8.3, y: 57.5, width: 8.9, height: 2.45959306 }],
    source: { label: 'LILYGO original non-touch AMOLED own DXF, STEP and original pinmap', url: github('T-Display-S3-AMOLED', 'DXF_file/T-DISPLAY-S3-AMOLED.dxf') },
    evidence: 'The original non-touch board has its own manufacturer DXF and STEP; no later Touch assembly is substituted. Both fourteen-post rows have 2.54 mm pitch and 22.86 mm spacing. The source DXF 0.00039878 mm Y-row deviation is export precision; straight installed headers share the nominal grid. Original keyed UART/battery tail locations use CAD package placements and the original photo, with explicitly approximate photo-projected placement; they are not insertion leads.',
    note: 'Populate both complete fourteen-post rows downward. Retain original P5.12/.13 3V3 and P6.12/.13 VSYS assignments. The six fitted socket contacts use cables and do not participate in breadboard fitting.',
  },
  'lilygo-t-display-s3-amoled-plus-v1-0': {
    size: [25.49000061859, 53.870999269187], auxiliary: plusAux,
    rows: [{ ref: 'P5', count: 14, x: 1.27065824, y: 4.849998347578 }, { ref: 'P4', count: 14, x: 24.13065824, y: 4.849998347578 }],
    regions: [{ x: 0, y: 0, width: 25.49000061859, height: 53.870999269187 }, { x: 1.1, y: 53.4, width: 6.1, height: 1.5 }, { x: 18.2, y: 53.4, width: 6.1, height: 1.6 }],
    source: { label: 'LILYGO AMOLED Plus manufacturer DXF and assembled STEP', url: github('LilyGo-AMOLED-Series', 'dimensions/T-Display-S3-AMOLED-Plus.7z', 'master') },
    evidence: 'Plus-specific DXF and assembled STEP establish two complete fourteen-post 2.54 mm rows, 22.86 mm apart, and the 25.49 x 53.871 mm PCB. STEP solids 292/293 locate all eight 1.0 mm socket metal tails. Main-header contact numbers follow the Plus schematic and component-side pinmap, not the original AMOLED rail assignments.',
    note: 'Populate both fourteen-post P4/P5 strips downward. CN1/CN2 remain fitted cable sockets and are not breadboard leads.',
  },
  'lilygo-t3-s3-v1-3-sx1262': {
    size: [27.1272, 64.4652], auxiliary: t3sAux,
    connectionSource: { label: 'LILYGO T3-S3 V1.3 manufacturer schematic, repeated header/socket nets', url: github('LilyGo-LoRa-Series', 'schematic/T3_S3_V1.3.pdf', 'master') },
    rows: [{ ref: 'JP2', count: 14, x: 2.2606, y: 6.4262 }, { ref: 'JP1', count: 14, x: 25.1206, y: 6.4262 }],
    regions: [{ x: 0, y: 0, width: 27.1272, height: 64.4652 }, { x: 15.3, y: 63.5, width: 8.5, height: 2.1 }, { x: .3, y: 64.4, width: 13.3, height: 1.2 }],
    source: { label: 'LILYGO T3-S3 exact V1.3 manufacturer PADS DXF and 20250110 pinout', url: github('LilyGo-LoRa-Series', 'dimensions/T3S3%20V1.3.dxf', 'master') },
    evidence: 'V1.3 DXF BOARD_OUTLINE_00 establishes the 27.1272 x 64.4652 mm PCB. DRIL_SYMBOL centers place all twenty-eight main leads at 2.54 mm pitch and 22.86 mm row spacing. Physical 1.0 mm auxiliary solder pads, P2 battery tails and 2.0 mm J3 solar drills are read from package artwork, not logical SYM_TERMINAL text. The matching 20250110 photo establishes functions and polarities. Stable U4 battery IDs are retained even though CAD calls that socket P2.',
    note: 'Populate both complete fourteen-post JP1/JP2 strips downward. Leave OLED/display cables disconnected or folded within the assembly footprint without material below the header seating plane. The four fitted power/auxiliary sockets are cable contacts, not insertion leads.',
  },
};
