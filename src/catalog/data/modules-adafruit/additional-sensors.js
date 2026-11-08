// Derived physical facts from Adafruit Industries open hardware.
// Source commits, license URLs and attribution are retained per entry and in ATTRIBUTION.json.
// Original simplified package primitives; decorative logos/copper/silkscreen art are not reproduced.
export default [
  {
    "id": "adafruit-module-4800",
    "mountingReview": {
      "contactIds": ["jp2-1", "jp2-2"],
      "source": {"label": "Adafruit ADA4800: EAGLE Adafruit MagTag 2.9in Rev D.brd; commit 274697655909 physical insertion headers", "url": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/Adafruit%20MagTag%202.9in%20Rev%20D.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP2", "count": 2, "package": "1X02_ROUND"}],
        "boardSha256": "cce711f4622f6e3467898ceadeee4bfa40f707be76a888e90f144c96211067a3"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -40.005, "y": -26.67, "width": 80.01, "height": 53.34},
        {"x": -40.894, "y": 9.5, "width": 7.35, "height": 8.94},
        {"x": 23.905, "y": -27.692, "width": 6.8, "height": 4.1},
        {"x": -40.627, "y": -2.23, "width": 3.4, "height": 7.0},
        {"x": -40.627, "y": -14.93, "width": 3.4, "height": 7.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA4800",
    "name": "Adafruit MagTag - 2.9\" Grayscale E-Ink WiFi Display",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4800",
    "revision": "EAGLE Adafruit MagTag 2.9in Rev D.brd; commit 274697655909",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -40.934,
      -27.732,
      34.9565,
      26.202
    ],
    "backArtworkBounds": [
      -28.755,
      -24.7716,
      28.755,
      24.8
    ],
    "board": {
      "width": 80.01,
      "height": 53.34,
      "color": "#246545",
      "outline": "M37.338 -26.67A2.543173 2.543173 0 0 1 40.005 -24.257L40.005 -9.652L38.227 -8.255L38.227 9.398L40.005 10.541L40.005 24.13A2.54 2.54 0 0 1 37.465 26.67L-37.475247 26.67A2.534873 2.534873 0 0 1 -40.005 24.136206L-40.005 -24.263206A2.410133 2.410133 0 0 1 -37.592 -26.67L37.338 -26.67Z"
    },
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": 34.1165,
        "y": 15.986,
        "size": [
          4.6,
          1.0
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X1.2.",
        "x": 34.1165,
        "y": 13.986,
        "size": [
          4.6,
          1.0
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-m3",
        "number": "X4.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M3.",
        "x": -38.294,
        "y": 9.65,
        "size": [
          2.0,
          1.0
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m4",
        "number": "X4.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M4.",
        "x": -38.294,
        "y": 18.29,
        "size": [
          2.0,
          1.0
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m2",
        "number": "X4.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M2.",
        "x": -34.114,
        "y": 18.29,
        "size": [
          2.0,
          1.0
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m1",
        "number": "X4.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M1.",
        "x": -34.114,
        "y": 9.65,
        "size": [
          2.0,
          1.0
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-a1b12",
        "number": "X4.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.A1B12.",
        "x": -33.539,
        "y": 10.77,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a4b9",
        "number": "X4.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X4.A4B9.",
        "x": -33.539,
        "y": 11.57,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b8",
        "number": "X4.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.B8.",
        "x": -33.539,
        "y": 12.22,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a5",
        "number": "X4.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X4.A5.",
        "x": -33.539,
        "y": 12.72,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b7",
        "number": "X4.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X4.B7.",
        "x": -33.539,
        "y": 13.22,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a6",
        "number": "X4.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X4.A6.",
        "x": -33.539,
        "y": 13.72,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a7",
        "number": "X4.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X4.A7.",
        "x": -33.539,
        "y": 14.22,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b6",
        "number": "X4.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X4.B6.",
        "x": -33.539,
        "y": 14.72,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a8",
        "number": "X4.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.A8.",
        "x": -33.539,
        "y": 15.22,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b5",
        "number": "X4.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X4.B5.",
        "x": -33.539,
        "y": 15.72,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b4a9",
        "number": "X4.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X4.B4A9.",
        "x": -33.539,
        "y": 16.37,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b1a12",
        "number": "X4.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.B1A12.",
        "x": -33.539,
        "y": 17.17,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 0.135,
        "y": 21.362,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 1.135,
        "y": 21.362,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": -0.865,
        "y": 21.362,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 2.135,
        "y": 21.362,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": -2.165,
        "y": 25.262,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 3.435,
        "y": 25.262,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "TXD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TXD0. Physical source contact JP2.1.",
        "x": -11.938,
        "y": -11.176,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "RXD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXD0. Physical source contact JP2.2.",
        "x": -11.938,
        "y": -13.716,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "BOOT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOT0. Physical source contact TP1.P$1.",
        "x": -38.735,
        "y": -16.51,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense-1",
        "number": "SENSE.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE.1.",
        "x": -14.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE",
        "back": false,
        "smd": true
      },
      {
        "id": "sense-2",
        "number": "SENSE.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SENSE.2.",
        "x": -16.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE",
        "back": false,
        "smd": true
      },
      {
        "id": "sense-3",
        "number": "SENSE.3",
        "label": "D10_JST",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D10_JST. Physical source contact SENSE.3.",
        "x": -18.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-1",
        "number": "SENSE1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE1.1.",
        "x": 18.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-2",
        "number": "SENSE1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SENSE1.2.",
        "x": 16.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-3",
        "number": "SENSE1.3",
        "label": "A1_JST1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1_JST1. Physical source contact SENSE1.3.",
        "x": 14.383,
        "y": 19.398,
        "size": [
          1.0,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP2.P$1.",
        "x": -36.195,
        "y": -22.86,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP2",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP3.P$1.",
        "x": -36.195,
        "y": 22.86,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP3",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP4.P$1.",
        "x": 36.195,
        "y": -22.86,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP4",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp5-p-1",
        "number": "TP5.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP5.P$1.",
        "x": 36.195,
        "y": 22.86,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP5",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp6-p-1",
        "number": "TP6.P$1",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact TP6.P$1.",
        "x": -38.735,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp7-p-1",
        "number": "TP7.P$1",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact TP7.P$1.",
        "x": -38.735,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-p-1",
        "number": "TP8.P$1",
        "label": "BOOT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOT0. Physical source contact TP8.P$1.",
        "x": -38.735,
        "y": -16.51,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "eink2-sprt1",
        "number": "EINK2.SPRT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.SPRT1.",
        "x": 29.7756,
        "y": -6.8904,
        "size": [
          3.0,
          2.0
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-sprt2",
        "number": "EINK2.SPRT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.SPRT2.",
        "x": 29.7756,
        "y": 8.1096,
        "size": [
          3.0,
          2.0
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-1",
        "number": "EINK2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.1.",
        "x": 27.3156,
        "y": -5.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-2",
        "number": "EINK2.2",
        "label": "GDR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GDR. Physical source contact EINK2.2.",
        "x": 27.3156,
        "y": -4.6404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-3",
        "number": "EINK2.3",
        "label": "RESE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESE. Physical source contact EINK2.3.",
        "x": 27.3156,
        "y": -4.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-4",
        "number": "EINK2.4",
        "label": "VGL/NC",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$16. Source connector functions: VGL/NC. Physical source contact EINK2.4.",
        "x": 27.3156,
        "y": -3.6404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-5",
        "number": "EINK2.5",
        "label": "VSH2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10. Source connector functions: VSH2. Physical source contact EINK2.5.",
        "x": 27.3156,
        "y": -3.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-6",
        "number": "EINK2.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.6.",
        "x": 27.3156,
        "y": -2.6404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-7",
        "number": "EINK2.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.7.",
        "x": 27.3156,
        "y": -2.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-8",
        "number": "EINK2.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.8.",
        "x": 27.3156,
        "y": -1.6404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-9",
        "number": "EINK2.9",
        "label": "EBUSY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EBUSY. Physical source contact EINK2.9.",
        "x": 27.3156,
        "y": -1.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-10",
        "number": "EINK2.10",
        "label": "ERESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ERESET. Physical source contact EINK2.10.",
        "x": 27.3156,
        "y": -0.6404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-11",
        "number": "EINK2.11",
        "label": "EDC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EDC. Physical source contact EINK2.11.",
        "x": 27.3156,
        "y": -0.1404,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-12",
        "number": "EINK2.12",
        "label": "ECS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ECS. Physical source contact EINK2.12.",
        "x": 27.3156,
        "y": 0.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-13",
        "number": "EINK2.13",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact EINK2.13.",
        "x": 27.3156,
        "y": 0.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-14",
        "number": "EINK2.14",
        "label": "MOSI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MOSI. Physical source contact EINK2.14.",
        "x": 27.3156,
        "y": 1.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-15",
        "number": "EINK2.15",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact EINK2.15.",
        "x": 27.3156,
        "y": 1.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-16",
        "number": "EINK2.16",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact EINK2.16.",
        "x": 27.3156,
        "y": 2.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-17",
        "number": "EINK2.17",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.17.",
        "x": 27.3156,
        "y": 2.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-18",
        "number": "EINK2.18",
        "label": "VDD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11. Source connector functions: VDD. Physical source contact EINK2.18.",
        "x": 27.3156,
        "y": 3.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-19",
        "number": "EINK2.19",
        "label": "VPP",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$17. Source connector functions: VPP. Physical source contact EINK2.19.",
        "x": 27.3156,
        "y": 3.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-20",
        "number": "EINK2.20",
        "label": "VSH1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$12. Source connector functions: VSH1. Physical source contact EINK2.20.",
        "x": 27.3156,
        "y": 4.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-21",
        "number": "EINK2.21",
        "label": "VGH",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VGH. Physical source contact EINK2.21.",
        "x": 27.3156,
        "y": 4.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-22",
        "number": "EINK2.22",
        "label": "VSL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$27. Source connector functions: VSL. Physical source contact EINK2.22.",
        "x": 27.3156,
        "y": 5.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-23",
        "number": "EINK2.23",
        "label": "VGL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VGL. Physical source contact EINK2.23.",
        "x": 27.3156,
        "y": 5.8596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-24",
        "number": "EINK2.24",
        "label": "VCOM",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$33. Source connector functions: VCOM. Physical source contact EINK2.24.",
        "x": 27.3156,
        "y": 6.3596,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      }
    ],
    "holes": [
      {
        "x": 28.805,
        "y": -24.892,
        "drill": 0.9
      },
      {
        "x": 25.805,
        "y": -24.892,
        "drill": 0.9
      },
      {
        "x": -34.614,
        "y": 16.86,
        "drill": 0.65
      },
      {
        "x": -34.614,
        "y": 11.08,
        "drill": 0.65
      },
      {
        "x": -38.527,
        "y": 0.12,
        "drill": 1.0
      },
      {
        "x": -38.527,
        "y": 2.42,
        "drill": 1.0
      },
      {
        "x": -38.527,
        "y": -12.58,
        "drill": 1.0
      },
      {
        "x": -38.527,
        "y": -10.28,
        "drill": 1.0
      }
    ],
    "artwork": "<rect x=\"-31.5425\" y=\"-26.549\" width=\"18.0\" height=\"31.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.383\" y=\"18.598\" width=\"10.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.383\" y=\"18.598\" width=\"10.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-40.894\" y=\"9.5\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.4165\" y=\"10.986\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.815\" y=\"7.045\" width=\"7.5\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.8156\" y=\"-6.4904\" width=\"3.75\" height=\"14.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.905\" y=\"-27.692\" width=\"6.8\" height=\"4.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.365\" y=\"21.662\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-40.627\" y=\"-2.23\" width=\"3.4\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-40.627\" y=\"-14.93\" width=\"3.4\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.035\" y=\"-14.827\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.938\" y=\"14.4925\" width=\"3.4\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.144\" y=\"24.13\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.478\" y=\"12.793\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.541\" y=\"21.2735\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.906\" y=\"14.806\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.3464\" y=\"13.4136\" width=\"1.3208\" height=\"3.1448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.7269\" y=\"13.1596\" width=\"1.3208\" height=\"3.1448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.6944\" y=\"7.3176\" width=\"1.3208\" height=\"3.1448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.748\" y=\"-20.0914\" width=\"1.3604\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.144\" y=\"19.112\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.271\" y=\"17.969\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.003\" y=\"-18.988\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.891\" y=\"-15.097\" width=\"1.4\" height=\"1.746\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.9395\" y=\"-20.893\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.2255\" y=\"11.365\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.5305\" y=\"23.5205\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.1175\" y=\"23.559\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.8315\" y=\"23.559\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.119\" y=\"22.2885\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"29.21\" y=\"19.5965\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"7.849\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"5.944\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"4.039\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"2.134\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"0.229\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.86\" y=\"-1.7395\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-32.2195\" y=\"10.6045\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.2725\" y=\"16.231\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.034\" y=\"10.897\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.566\" y=\"-20.32\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.352\" y=\"10.0715\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.3215\" y=\"-16.662\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"31.965\" y=\"-14.594\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"31.877\" y=\"-12.598\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"31.217\" y=\"-19.177\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"29.083\" y=\"-10.566\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.416\" y=\"-16.789\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.234\" y=\"-10.308\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.479\" y=\"-16.8525\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.306\" y=\"-19.202\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.306\" y=\"-17.297\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.179\" y=\"-15.392\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.915\" y=\"16.726\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.3745\" y=\"6.375\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.882\" y=\"12.903\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.151\" y=\"17.221\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.8805\" y=\"18.237\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-37.63\" y=\"6.0575\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-34.849\" y=\"-10.0715\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-34.3915\" y=\"1.1045\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.8215\" y=\"-3.2895\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.0255\" y=\"8.2675\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.263\" y=\"6.045\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.3065\" y=\"-3.5945\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.243\" y=\"-6.7695\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-31.1535\" y=\"12.8525\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-30.8995\" y=\"18.123\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-30.836\" y=\"16.5355\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"4.305\" y=\"20.96\" width=\"7.9\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.815\" y=\"20.96\" width=\"7.9\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.715\" y=\"20.96\" width=\"7.9\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.205\" y=\"20.96\" width=\"7.9\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.255\" y=\"-23.86\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.765\" y=\"-23.86\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.13\" y=\"-23.86\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.255\" y=\"-23.86\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.95\" y=\"-24.7316\" width=\"1.9\" height=\"1.2032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MagTag 2.9in Rev D.brd",
      "boardSha256": "cce711f4622f6e3467898ceadeee4bfa40f707be76a888e90f144c96211067a3",
      "sourceBounds": [
        0.0,
        0.0,
        80.01,
        53.34
      ],
      "selectedConnectors": [
        "X1",
        "X4",
        "CONN1",
        "JP2",
        "TP1",
        "SENSE",
        "SENSE1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "EINK2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit_MagTag_PCBs",
      "commit": "2746976559095738acfb7063a46d37e4d7c93603",
      "boardURL": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/Adafruit%20MagTag%202.9in%20Rev%20D.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/Adafruit%20MagTag%202.9in%20Rev%20D.sch",
      "schematicSha256": "c806c0753ec08f9f15d20b0939b2edaf670c6e474d983e35cf421d9d1e034e9e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/license.txt",
      "sourceArchiveSha256": "0343c035f174a1c75ca40c2f2c9d090b57b45eb1e77a9da4335901f4751bd444",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "finalPortInventoryReview": {
        "addedRefs": [
          "EINK2"
        ],
        "addedNumbers": [
          "EINK2.SPRT1",
          "EINK2.SPRT2",
          "EINK2.1",
          "EINK2.2",
          "EINK2.3",
          "EINK2.4",
          "EINK2.5",
          "EINK2.6",
          "EINK2.7",
          "EINK2.8",
          "EINK2.9",
          "EINK2.10",
          "EINK2.11",
          "EINK2.12",
          "EINK2.13",
          "EINK2.14",
          "EINK2.15",
          "EINK2.16",
          "EINK2.17",
          "EINK2.18",
          "EINK2.19",
          "EINK2.20",
          "EINK2.21",
          "EINK2.22",
          "EINK2.23",
          "EINK2.24"
        ],
        "excludedUnnettedMounts": [],
        "symbolFunctionEvidence": [
          {
            "number": "EINK2.4",
            "sourceNet": "N$16",
            "sourceFunctions": [
              "VGL/NC"
            ]
          },
          {
            "number": "EINK2.5",
            "sourceNet": "N$10",
            "sourceFunctions": [
              "VSH2"
            ]
          },
          {
            "number": "EINK2.18",
            "sourceNet": "N$11",
            "sourceFunctions": [
              "VDD"
            ]
          },
          {
            "number": "EINK2.19",
            "sourceNet": "N$17",
            "sourceFunctions": [
              "VPP"
            ]
          },
          {
            "number": "EINK2.20",
            "sourceNet": "N$12",
            "sourceFunctions": [
              "VSH1"
            ]
          },
          {
            "number": "EINK2.22",
            "sourceNet": "N$27",
            "sourceFunctions": [
              "VSL"
            ]
          },
          {
            "number": "EINK2.24",
            "sourceNet": "N$33",
            "sourceFunctions": [
              "VCOM"
            ]
          }
        ],
        "sourceWarnings": [],
        "unresolved": []
      }
    },
    "internalConnections": [
      [
        "x1-1",
        "x4-a1b12",
        "x4-b1a12",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "sense-1",
        "sense1-1",
        "tp2-p-1",
        "tp3-p-1",
        "tp4-p-1",
        "tp5-p-1",
        "eink2-sprt1",
        "eink2-sprt2",
        "eink2-8",
        "eink2-17"
      ],
      [
        "x4-a4b9",
        "x4-b4a9"
      ],
      [
        "x4-b7",
        "x4-a7"
      ],
      [
        "x4-a6",
        "x4-b6"
      ],
      [
        "conn1-2",
        "eink2-15",
        "eink2-16"
      ],
      [
        "tp1-p-1",
        "tp8-p-1"
      ],
      [
        "sense-2",
        "sense1-2"
      ],
      [
        "tp6-p-1",
        "tp7-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4800"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/Adafruit%20MagTag%202.9in%20Rev%20D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/Adafruit%20MagTag%202.9in%20Rev%20D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit_MagTag_PCBs/blob/2746976559095738acfb7063a46d37e4d7c93603/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4800",
      "status": "Official Adafruit stock feed reported 89 available.",
      "sku": "ADA4800",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "89"
    },
    "description": "Adafruit ADA4800. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  }
];
