// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-bob09118": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "HV-GND",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: HV-GND. Physical source contact JP1.1.",
        "x": 6.35,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "OUT2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT2. Physical source contact JP1.2.",
        "x": 6.35,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.3.",
        "x": 6.35,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "OUT1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT1. Physical source contact JP1.4.",
        "x": 6.35,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.1.",
        "x": -6.35,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "IN1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN1. Physical source contact JP2.2.",
        "x": -6.35,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "IN2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN2. Physical source contact JP2.3.",
        "x": -6.35,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.4.",
        "x": -6.35,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-1.9463\" y=\"0.2032\" width=\"3.8926\" height=\"5.4356\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7244\" y=\"-4.51\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.4826\" y=\"-4.51\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9244\" y=\"-0.6862\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.886\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.772\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.737\" y=\"2.565\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.737\" y=\"-0.737\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.181\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.62\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Opto_Isolator_Breakout.brd",
      "boardSha256": "5ea67b035204ff4afbc6c603e9e443f4a5d0e34d139199b3fa7029315f8911da",
      "sourceBounds": [
        0,
        0,
        15.24,
        12.7
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Opto_Isolator_Breakout",
      "commit": "fcf3b555d61089760e7e3c924f89e31108b939b3",
      "boardURL": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware/SparkFun_Opto_Isolator_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware/SparkFun_Opto_Isolator_Breakout.sch",
      "schematicSha256": "6573e8615a6fa90dda1c1d4a4cbf123b54cfd03a4ee0f61d3ad1dfb197d0bcf7",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Opto_Isolator_Breakout/blob/fcf3b555d61089760e7e3c924f89e31108b939b3/LICENSE.md",
      "sourceArchiveSha256": "192ea9b4ca43ed97cc6ba85c000bb88d5e6a93230da14cf7f7aa5bc7a3daa7fb",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-bob13906": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "Y7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y7. Physical source contact J1.1.",
        "x": 5.08,
        "y": 12.7,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "Y6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y6. Physical source contact J1.2.",
        "x": 5.08,
        "y": 10.16,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "Y5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y5. Physical source contact J1.3.",
        "x": 5.08,
        "y": 7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "Y4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y4. Physical source contact J1.4.",
        "x": 5.08,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "Y3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y3. Physical source contact J1.5.",
        "x": 5.08,
        "y": 2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "Y2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y2. Physical source contact J1.6.",
        "x": 5.08,
        "y": 0,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-7",
        "number": "J1.7",
        "label": "Y1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y1. Physical source contact J1.7.",
        "x": 5.08,
        "y": -2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-8",
        "number": "J1.8",
        "label": "Y0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Y0. Physical source contact J1.8.",
        "x": 5.08,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-9",
        "number": "J1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.9.",
        "x": 5.08,
        "y": -7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-10",
        "number": "J1.10",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J1.10.",
        "x": 5.08,
        "y": -10.16,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-11",
        "number": "J1.11",
        "label": "VEE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VEE. Physical source contact J1.11.",
        "x": 5.08,
        "y": -12.7,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "!E!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !E!. Physical source contact J2.1.",
        "x": -5.08,
        "y": 7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "S2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: S2. Physical source contact J2.2.",
        "x": -5.08,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "S1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: S1. Physical source contact J2.3.",
        "x": -5.08,
        "y": 2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "S0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: S0. Physical source contact J2.4.",
        "x": -5.08,
        "y": 0,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "Z",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: Z. Physical source contact J2.5.",
        "x": -5.08,
        "y": -2.54,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.6.",
        "x": -5.08,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-7",
        "number": "J2.7",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J2.7.",
        "x": -5.08,
        "y": -7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-8",
        "number": "J2.8",
        "label": "VEE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VEE. Physical source contact J2.8.",
        "x": -5.08,
        "y": -10.16,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-1.377\" y=\"-1.877\" width=\"2.754\" height=\"3.754\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-4.229\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.81\" y=\"-13.97\" width=\"2.54\" height=\"27.94\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-11.43\" width=\"2.54\" height=\"20.32\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun-74HC4051-8-Channel-Mux-Breakout.brd",
      "boardSha256": "4005b7cbb6652c2b38402d8d6accb0fe260728bf81bd0086a54f780a6d578e29",
      "sourceBounds": [
        0,
        0,
        12.7,
        27.94
      ],
      "selectedConnectors": [
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/74HC4051_8-Channel_Mux_Breakout",
      "commit": "937d5446a825fcf739dcea2c65fb4e66cd9fd62f",
      "boardURL": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/Hardware/SparkFun-74HC4051-8-Channel-Mux-Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/Hardware/SparkFun-74HC4051-8-Channel-Mux-Breakout.sch",
      "schematicSha256": "dc1f37ca10969213b09810372b4da0511d878445b85e9193f7b6c0b2359e92c8",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/74HC4051_8-Channel_Mux_Breakout/blob/937d5446a825fcf739dcea2c65fb4e66cd9fd62f/LICENSE.md",
      "sourceArchiveSha256": "d3fbc4165ae5a4d905f32d2b8f95c5a444101331b099f667f7bfbd6042239f7d",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-bob09056": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "C0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C0. Physical source contact JP1.1.",
        "x": -7.62,
        "y": 19.05,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "C1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C1. Physical source contact JP1.2.",
        "x": -7.62,
        "y": 16.51,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "C2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C2. Physical source contact JP1.3.",
        "x": -7.62,
        "y": 13.97,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "C3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C3. Physical source contact JP1.4.",
        "x": -7.62,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "C4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C4. Physical source contact JP1.5.",
        "x": -7.62,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "C5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C5. Physical source contact JP1.6.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "C6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C6. Physical source contact JP1.7.",
        "x": -7.62,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "C7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C7. Physical source contact JP1.8.",
        "x": -7.62,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "C8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C8. Physical source contact JP1.9.",
        "x": -7.62,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "C9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C9. Physical source contact JP1.10.",
        "x": -7.62,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "C10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C10. Physical source contact JP1.11.",
        "x": -7.62,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "C11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C11. Physical source contact JP1.12.",
        "x": -7.62,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "C12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C12. Physical source contact JP1.13.",
        "x": -7.62,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "C13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C13. Physical source contact JP1.14.",
        "x": -7.62,
        "y": -13.97,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "C14",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C14. Physical source contact JP1.15.",
        "x": -7.62,
        "y": -16.51,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "C15",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: C15. Physical source contact JP1.16.",
        "x": -7.62,
        "y": -19.05,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.1.",
        "x": 7.62,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.2.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "S0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: S0. Physical source contact JP3.4.",
        "x": 7.62,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "S1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: S1. Physical source contact JP3.5.",
        "x": 7.62,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "S2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: S2. Physical source contact JP3.6.",
        "x": 7.62,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "S3",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: S3. Physical source contact JP3.7.",
        "x": 7.62,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "SIG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIG. Physical source contact JP3.8.",
        "x": 7.62,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-4.25\" y=\"-2.5\" width=\"8.5\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.121\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.121\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-8.89\" y=\"-20.32\" width=\"2.54\" height=\"40.64\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.35\" y=\"-10.16\" width=\"2.54\" height=\"20.32\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Analog-Digital-Mux-Breakout.brd",
      "boardSha256": "801aac85612c46bd2941977f1febb9f025d41f54f8ccf912b33ae60706d8f408",
      "sourceBounds": [
        0,
        0,
        17.78,
        40.64
      ],
      "selectedConnectors": [
        "JP1",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Analog_Digital_MUX_Breakout",
      "commit": "f7f2eeb117617e67ab8442edc7ba767d19f0fd75",
      "boardURL": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/Hardware/Analog-Digital-Mux-Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/Hardware/Analog-Digital-Mux-Breakout.sch",
      "schematicSha256": "5bb39ca81efcf248f6fb680c5b4eba4ba4b9e6f1aec0c7223e50122347ec8a05",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/Analog_Digital_MUX_Breakout/blob/f7f2eeb117617e67ab8442edc7ba767d19f0fd75/README.md",
      "sourceArchiveSha256": "53eb1988ad7e2bfafce2b8fd782a291b77e422307672ace6b95e0d79386fc11a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "sparkfun-module-dev17047": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -25.4,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
        "x": -25.4,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": -25.4,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": -25.4,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 25.4,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": 25.4,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": 25.4,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": 25.4,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J5.1.",
        "x": 18.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "P0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0. Physical source contact J5.2.",
        "x": 13.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "P1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1. Physical source contact J5.3.",
        "x": 8.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J5.4.",
        "x": 3.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.1.",
        "x": 3.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "P6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P6. Physical source contact J6.2.",
        "x": 8.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "P7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P7. Physical source contact J6.3.",
        "x": 13.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J6.4.",
        "x": 18.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.1.",
        "x": -18.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "P4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P4. Physical source contact J1.2.",
        "x": -13.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "P5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P5. Physical source contact J1.3.",
        "x": -8.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.4.",
        "x": -3.93,
        "y": -12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J8.1.",
        "x": -3.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "P2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P2. Physical source contact J8.2.",
        "x": -8.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j8-3",
        "number": "J8.3",
        "label": "P3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P3. Physical source contact J8.3.",
        "x": -13.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j8-4",
        "number": "J8.4",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J8.4.",
        "x": -18.93,
        "y": 12.7,
        "size": [
          2.25,
          2.25
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.5
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J7.1.",
        "x": 29.21,
        "y": 5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j9-1",
        "number": "J9.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J9.1.",
        "x": 29.21,
        "y": -5.08,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j9-2",
        "number": "J9.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J9.2.",
        "x": 29.21,
        "y": -7.62,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j9-3",
        "number": "J9.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J9.3.",
        "x": 29.21,
        "y": -10.16,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j9-4",
        "number": "J9.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J9.4.",
        "x": 29.21,
        "y": -12.7,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"1.33\" y=\"5.7\" width=\"20.2\" height=\"13.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.33\" y=\"-19.0\" width=\"20.2\" height=\"13.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.53\" y=\"5.7\" width=\"20.2\" height=\"13.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.53\" y=\"-19.0\" width=\"20.2\" height=\"13.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.75\" y=\"-5.25\" width=\"7.5\" height=\"10.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.75\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-30.0\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.28875\" y=\"-6.82625\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.642\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.61\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"2.121\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"-0.419\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.814\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.711\" y=\"7.899\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.011\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.486\" y=\"-4.877\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-28.3972\" y=\"-11.176\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6708\" y=\"-3.556\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6708\" y=\"-1.016\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6708\" y=\"1.524\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.5392\" y=\"-7.366\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.114\" y=\"8.9408\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_GPIO.brd",
      "boardSha256": "2d8ed56bf13a1880bb2ffd87c0260be6e3438df6c62a7c5c1bea361ca20d64c1",
      "sourceBounds": [
        0,
        0,
        60.96,
        38.1
      ],
      "selectedConnectors": [
        "J2",
        "J4",
        "J5",
        "J6",
        "J1",
        "J8",
        "J7",
        "J9"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_GPIO",
      "commit": "d3fc4672ccd731266f01de194a290f7923f77d8a",
      "boardURL": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/Hardware/Qwiic_GPIO.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/Hardware/Qwiic_GPIO.sch",
      "schematicSha256": "1fa5bb819344862faaac4d3bff6552182d775ba0c7b33d0ab9c9777b467f68b3",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_GPIO/blob/d3fc4672ccd731266f01de194a290f7923f77d8a/License.md",
      "sourceArchiveSha256": "89d2539efa2adcd63a1d659ab1e421693f1443193d54c7e2b9da8a5aec1ee895",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  }
};
