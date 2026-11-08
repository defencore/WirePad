// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-bob09816": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -3.81,
        "y": 10.541,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -1.27,
        "y": 10.541,
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
        "label": "OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT. Physical source contact JP1.3.",
        "x": 1.27,
        "y": 10.541,
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
        "label": "IN",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN. Physical source contact JP1.4.",
        "x": 3.81,
        "y": 10.541,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-5.08\" y=\"9.271\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.362\" y=\"-2.438\" width=\"4.724\" height=\"3.606\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.14\" y=\"-11.125\" width=\"3.2\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_OpAmp_Breakout-LMV358.brd",
      "boardSha256": "af3f1b3575564cb2a40c429ca2cabcdc107b1d9d6c6cad17c3156e0fc236752f",
      "sourceBounds": [
        0,
        0,
        12.7,
        24.13
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/OpAmp_Breakout-LMV358",
      "commit": "0a805d06e228d5c3a6631d51dfaceebe121e18a8",
      "boardURL": "https://github.com/sparkfun/OpAmp_Breakout-LMV358/blob/0a805d06e228d5c3a6631d51dfaceebe121e18a8/Hardware/SparkFun_OpAmp_Breakout-LMV358.brd",
      "schematicURL": "https://github.com/sparkfun/OpAmp_Breakout-LMV358/blob/0a805d06e228d5c3a6631d51dfaceebe121e18a8/Hardware/SparkFun_OpAmp_Breakout-LMV358.sch",
      "schematicSha256": "d081cb27ed5c347a4e86dc44f2193d01b87021563f9d35d66bc1ea4e283f7204",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/OpAmp_Breakout-LMV358/blob/0a805d06e228d5c3a6631d51dfaceebe121e18a8/LICENSE.md",
      "sourceArchiveSha256": "9f631061f20c5393c5bef544dd58f797e6ab3ad3faad7ee2b538dec42104b6b1",
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
  "sparkfun-module-bob00573": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -11.43,
        "y": -8.509,
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
        "label": "RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST. Physical source contact JP1.2.",
        "x": -11.43,
        "y": -5.969,
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
        "label": "CLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLK. Physical source contact JP1.3.",
        "x": -11.43,
        "y": -3.429,
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
        "label": "SW1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SW1. Physical source contact JP1.4.",
        "x": -11.43,
        "y": -0.889,
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
        "label": "SW2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SW2. Physical source contact JP1.5.",
        "x": -11.43,
        "y": 1.651,
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
        "label": "I/O",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: I/O. Physical source contact JP1.6.",
        "x": -11.43,
        "y": 4.191,
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
        "label": "VPP",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VPP. Physical source contact JP1.7.",
        "x": -11.43,
        "y": 6.731,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.8.",
        "x": -11.43,
        "y": 9.271,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-5.08\" y=\"-14.859\" width=\"17.245\" height=\"29.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"-9.779\" width=\"2.54\" height=\"20.32\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Sim_Breakout.brd",
      "boardSha256": "f14299cafc7164fdab0e84cc0e095e9b620e7b85b405db6a8e975a9099ed1338",
      "sourceBounds": [
        0,
        0,
        25.4,
        31.242
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SIM_Card_Breakout",
      "commit": "9a9e1751c6ae69d9c76797d829cb1a3879996651",
      "boardURL": "https://github.com/sparkfun/SIM_Card_Breakout/blob/9a9e1751c6ae69d9c76797d829cb1a3879996651/Hardware/Sim_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/SIM_Card_Breakout/blob/9a9e1751c6ae69d9c76797d829cb1a3879996651/Hardware/Sim_Breakout.sch",
      "schematicSha256": "b46cdc1bde884cb0d4c64dd05c56673d154e62414957f6bb7abc93427081613d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SIM_Card_Breakout/blob/9a9e1751c6ae69d9c76797d829cb1a3879996651/README.md",
      "sourceArchiveSha256": "f4f81df24148f66fe8f7959f77d467ace1f769a415dba6f4a363f481e713f84e",
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
  "sparkfun-module-bob11189": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "T1OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: T1OUT. Physical source contact JP2.1.",
        "x": 11.43,
        "y": 5.715,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "T2OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: T2OUT. Physical source contact JP2.2.",
        "x": 8.89,
        "y": 5.715,
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
        "label": "R1IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: R1IN. Physical source contact JP2.3.",
        "x": 6.35,
        "y": 5.715,
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
        "label": "R2IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: R2IN. Physical source contact JP2.4.",
        "x": 3.81,
        "y": 5.715,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.5.",
        "x": 1.27,
        "y": 5.715,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.6.",
        "x": -1.27,
        "y": 5.715,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "T1IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: T1IN. Physical source contact JP2.7.",
        "x": -3.81,
        "y": 5.715,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "T2IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: T2IN. Physical source contact JP2.8.",
        "x": -6.35,
        "y": 5.715,
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "R1OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: R1OUT. Physical source contact JP2.9.",
        "x": -8.89,
        "y": 5.715,
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "R2OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: R2OUT. Physical source contact JP2.10.",
        "x": -11.43,
        "y": 5.715,
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
    "artwork": "<rect x=\"-12.7\" y=\"4.445\" width=\"25.4\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.2578\" y=\"-2.5813\" width=\"10.5156\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.279\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.15\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.322619\" y=\"-2.758841\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.320081\" y=\"0.959722\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_MAX3232_Breakout.brd",
      "boardSha256": "613a2d13cdead00c8db685ba180e1d84f49bb3363339259f6d7e727d24d76cc1",
      "sourceBounds": [
        0,
        0,
        25.4,
        13.97
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/MAX3232_Breakout",
      "commit": "a622b6bf9c8cedb17b93a7e8bec73c2f4ea1efc2",
      "boardURL": "https://github.com/sparkfun/MAX3232_Breakout/blob/a622b6bf9c8cedb17b93a7e8bec73c2f4ea1efc2/Hardware/SparkFun_MAX3232_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/MAX3232_Breakout/blob/a622b6bf9c8cedb17b93a7e8bec73c2f4ea1efc2/Hardware/SparkFun_MAX3232_Breakout.sch",
      "schematicSha256": "d287b2c850bb6507cbb7537223392730259bd790c92bc3cc80755bbeaf9859b9",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/MAX3232_Breakout/blob/a622b6bf9c8cedb17b93a7e8bec73c2f4ea1efc2/LICENSE.md",
      "sourceArchiveSha256": "e5ae077931b1ed77b168e02d4e0f4d9f7803f30d5e478bfab985939002f0c2b6",
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
  "sparkfun-module-sen22858": {
    "contacts": [
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": 7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": 7.62,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": 7.62,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": 7.62,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": -5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": -2.54,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": 0,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": 2.54,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -7.62,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": -7.62,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": -7.62,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": -7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "int-1",
        "number": "INT.1",
        "label": "!INT!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT!. Physical source contact INT.1.",
        "x": 5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "INT",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.2035\" y=\"-1.6135\" width=\"3.277\" height=\"3.277\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.41935\" y=\"-1.44145\" width=\"2.7813\" height=\"2.8829\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.1749\" y=\"4.157522\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.475469\" y=\"-6.112509\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.550597\" y=\"-3.619116\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.988878\" y=\"8.278241\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.502522\" y=\"-7.052119\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.245038\" y=\"-3.631822\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.956503\" y=\"-3.837559\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.344359\" y=\"5.498581\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.004\" y=\"1.063\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.020181\" y=\"4.0172\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.913437\" y=\"-3.883275\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.716541\" y=\"3.415219\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.714\" y=\"2.417\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.522519\" y=\"-5.519037\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.763841\" y=\"-3.837559\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.000381\" y=\"3.463481\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-10.7823\" y=\"-5.692144\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.551422\" y=\"4.958081\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.376925\" y=\"-5.750559\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.116841\" y=\"-3.141981\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_ENS160_BME280_Breakout.brd",
      "boardSha256": "ddcb1145332ad6d3b8766254a1bee943e43d9b1165987966cc96a756161e438d",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J3",
        "J4",
        "J1",
        "INT"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Environmental_Combo_Breakout_ENS160_BME280_QWIIC",
      "commit": "f268b703dbc4f751e621dbbfca2c8875c3241058",
      "boardURL": "https://github.com/sparkfun/SparkFun_Environmental_Combo_Breakout_ENS160_BME280_QWIIC/blob/f268b703dbc4f751e621dbbfca2c8875c3241058/Hardware/SparkFun_ENS160_BME280_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Environmental_Combo_Breakout_ENS160_BME280_QWIIC/blob/f268b703dbc4f751e621dbbfca2c8875c3241058/Hardware/SparkFun_ENS160_BME280_Breakout.sch",
      "schematicSha256": "f482001325f9cd112862a4023b80d2d69f039577efe2426dacf509f0abce4ded",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Environmental_Combo_Breakout_ENS160_BME280_QWIIC/blob/f268b703dbc4f751e621dbbfca2c8875c3241058/LICENSE.md",
      "sourceArchiveSha256": "edb065fda8d2faac6868a8cb45c5ac554932a4bc827424c041ea5e26041f4329",
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
  "sparkfun-module-bob11771": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -5.08,
        "y": 7.62,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -5.08,
        "y": 5.08,
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
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact JP1.3.",
        "x": -5.08,
        "y": 2.54,
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
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$2. Physical source contact JP1.4.",
        "x": -5.08,
        "y": 0,
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
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$3. Physical source contact JP1.5.",
        "x": -5.08,
        "y": -2.54,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$4. Physical source contact JP1.6.",
        "x": -5.08,
        "y": -5.08,
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
        "label": "OE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OE. Physical source contact JP1.7.",
        "x": -5.08,
        "y": -7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": 5.08,
        "y": 7.62,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP2.2.",
        "x": 5.08,
        "y": 5.08,
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
        "label": "B4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B4. Physical source contact JP2.3.",
        "x": 5.08,
        "y": 2.54,
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
        "label": "B3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B3. Physical source contact JP2.4.",
        "x": 5.08,
        "y": 0,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "B2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B2. Physical source contact JP2.5.",
        "x": 5.08,
        "y": -2.54,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "B1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1. Physical source contact JP2.6.",
        "x": 5.08,
        "y": -5.08,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "OE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OE. Physical source contact JP2.7.",
        "x": 5.08,
        "y": -7.62,
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
    "artwork": "<rect x=\"3.81\" y=\"-8.89\" width=\"2.54\" height=\"17.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-8.89\" width=\"2.54\" height=\"17.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9463\" y=\"-4.6228\" width=\"3.8926\" height=\"9.2456\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0\" y=\"-8.62\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.108\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.972\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "TXB0104_breakout.brd",
      "boardSha256": "cbc95b9d58535050ba95fbf71247c9ef8e59da89155d0a8bb25222447943315c",
      "sourceBounds": [
        0,
        0,
        12.7,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/TXB0104_breakout",
      "commit": "c8bf609f801a894d4af649a7134cd0ecddab8fa3",
      "boardURL": "https://github.com/sparkfun/TXB0104_breakout/blob/c8bf609f801a894d4af649a7134cd0ecddab8fa3/Hardware/TXB0104_breakout.brd",
      "schematicURL": "https://github.com/sparkfun/TXB0104_breakout/blob/c8bf609f801a894d4af649a7134cd0ecddab8fa3/Hardware/TXB0104_breakout.sch",
      "schematicSha256": "64561a82349fdc8f3883cc50b5d7b982e2ff647535f4f69753a7dbad38d506ac",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/TXB0104_breakout/blob/c8bf609f801a894d4af649a7134cd0ecddab8fa3/License.md",
      "sourceArchiveSha256": "090b5ce329c31016c3055a0a87d3542dd16f7b2f3790297b0ad12b1dc99c8b8c",
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
  "sparkfun-module-sen18020": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "!CS!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS!. Physical source contact JP1.1.",
        "x": 6.35,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "SDO/SA0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO/SA0. Physical source contact JP1.2.",
        "x": 3.81,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": 1.27,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": -1.27,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.5.",
        "x": -3.81,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": -6.35,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "INT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT2. Physical source contact JP3.1.",
        "x": -6.35,
        "y": -11.43,
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
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "INT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT1. Physical source contact JP3.2.",
        "x": -3.81,
        "y": -11.43,
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
        "label": "OCS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OCS. Physical source contact JP3.3.",
        "x": -1.27,
        "y": -11.43,
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
        "label": "SCX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCX. Physical source contact JP3.4.",
        "x": 1.27,
        "y": -11.43,
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
        "label": "SDI_AUX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI_AUX. Physical source contact JP3.5.",
        "x": 3.81,
        "y": -11.43,
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
        "label": "SDO_AUX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO_AUX. Physical source contact JP3.6.",
        "x": 6.35,
        "y": -11.43,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 7.5946,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": 7.5946,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 7.5946,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 7.5946,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -7.62,
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
        "x": -7.62,
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
        "x": -7.62,
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
        "x": -7.62,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9446\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.651\" y=\"-1.375\" width=\"3.276\" height=\"3.153\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.23315\" y=\"-6.8199\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0252\" y=\"-4.5089\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.6772\" y=\"-5.6392\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.188\" y=\"-5.5884\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.60335\" y=\"3.2\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.9148\" y=\"-2.642\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.4673\" y=\"-2.642\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.3748\" y=\"3.1873\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.88255\" y=\"3.2\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.71475\" y=\"-1.7272\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6256\" y=\"1.67005\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.7536\" y=\"-6.858\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5654\" y=\"-10.2362\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0508\" y=\"-10.2616\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_6DoF_LSM6DSO.brd",
      "boardSha256": "fe20d338600a9e1b63814a85b266e08ef391034f1487bdf5e798a7909eccf8b7",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Qwiic_6DoF_LSM6DSO",
      "commit": "fef35123412fc2935d342e2837b1f5b8fdf1caf0",
      "boardURL": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_LSM6DSO/blob/fef35123412fc2935d342e2837b1f5b8fdf1caf0/Hardware/SparkFun_6DoF_LSM6DSO.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_LSM6DSO/blob/fef35123412fc2935d342e2837b1f5b8fdf1caf0/Hardware/SparkFun_6DoF_LSM6DSO.sch",
      "schematicSha256": "ba9ddd985b1c0430cd1061114d5a6e1d6ebf5fafce43cd1d3911ba7f745895c0",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Qwiic_6DoF_LSM6DSO/blob/fef35123412fc2935d342e2837b1f5b8fdf1caf0/LICENSE.md",
      "sourceArchiveSha256": "09d6750ea09ce98c2cf49f4ba6375a5e9cecb8321989a81515e8a10b23d0716d",
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
  "sparkfun-module-bob10680": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "QA",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$3. Physical source contact JP1.1.",
        "x": -10.16,
        "y": -8.89,
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
        "label": "QB",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$4. Physical source contact JP1.2.",
        "x": -10.16,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "QC",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$5. Physical source contact JP1.3.",
        "x": -10.16,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "QD",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$6. Physical source contact JP1.4.",
        "x": -10.16,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "QE",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$7. Physical source contact JP1.5.",
        "x": -10.16,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "QF",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$8. Physical source contact JP1.6.",
        "x": -10.16,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "QG",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$9. Physical source contact JP1.7.",
        "x": -10.16,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "QH",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$10. Physical source contact JP1.8.",
        "x": -10.16,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -5.08,
        "y": -13.97,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -2.54,
        "y": -13.97,
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
        "label": "/RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: /RESET. Physical source contact JP2.3.",
        "x": 0,
        "y": -13.97,
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
        "label": "/OUTPUT_ENABLE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: /OUTPUT_ENABLE. Physical source contact JP2.4.",
        "x": 2.54,
        "y": -13.97,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CLOCK. Physical source contact JP2.5.",
        "x": 5.08,
        "y": -13.97,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "LATCH_CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LATCH_CLOCK. Physical source contact JP2.6.",
        "x": 7.62,
        "y": -13.97,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "SERIAL_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SERIAL_IN. Physical source contact JP2.7.",
        "x": 10.16,
        "y": -13.97,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 13.97,
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
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": -2.54,
        "y": 13.97,
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
        "label": "/RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: /RESET. Physical source contact JP3.3.",
        "x": 0,
        "y": 13.97,
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
        "label": "/OUTPUT_ENABLE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: /OUTPUT_ENABLE. Physical source contact JP3.4.",
        "x": 2.54,
        "y": 13.97,
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
        "label": "CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CLOCK. Physical source contact JP3.5.",
        "x": 5.08,
        "y": 13.97,
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
        "label": "LATCH_CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LATCH_CLOCK. Physical source contact JP3.6.",
        "x": 7.62,
        "y": 13.97,
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
        "label": "SERIAL_OUT",
        "type": "tri_state",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SERIAL_OUT. Physical source contact JP3.7.",
        "x": 10.16,
        "y": 13.97,
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
    "artwork": "<rect x=\"-11.43\" y=\"-10.16\" width=\"2.54\" height=\"20.32\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"12.7\" width=\"17.78\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-15.24\" width=\"17.78\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6858\" y=\"-5.08\" width=\"3.9116\" height=\"10.16\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Shift_Register_Breakout-74HC595.brd",
      "boardSha256": "92010d8df145ab7237f9f2e32de2480219d7a0e85e9086f724393708b32aeebe",
      "sourceBounds": [
        0,
        0,
        22.86,
        30.48
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Shift_Register_Breakout-74HC595",
      "commit": "f4b8fcbc33bc4909edb6585cc242096297a6a2ce",
      "boardURL": "https://github.com/sparkfun/Shift_Register_Breakout-74HC595/blob/f4b8fcbc33bc4909edb6585cc242096297a6a2ce/Hardware/SparkFun_Shift_Register_Breakout-74HC595.brd",
      "schematicURL": "https://github.com/sparkfun/Shift_Register_Breakout-74HC595/blob/f4b8fcbc33bc4909edb6585cc242096297a6a2ce/Hardware/SparkFun_Shift_Register_Breakout-74HC595.sch",
      "schematicSha256": "4ef94a42d935185632c1c3ce7ac1ea371a5421b286fe5c3b878c9777aa38766c",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Shift_Register_Breakout-74HC595/blob/f4b8fcbc33bc4909edb6585cc242096297a6a2ce/LICENSE.md",
      "sourceArchiveSha256": "5ed5d636a8fd47b51c52a2b98a2d498d6d9b7bd59b2f74ca848e33c10a840e04",
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
  "sparkfun-module-sen16826": {
    "contacts": [
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "VCCIO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VCCIO. Physical source contact J4.1.",
        "x": 15.24,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.3.",
        "x": 12.7,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-5",
        "number": "J4.5",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.5.",
        "x": 10.16,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-7",
        "number": "J4.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.7.",
        "x": 7.62,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-9",
        "number": "J4.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.9.",
        "x": 5.08,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-11",
        "number": "J4.11",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.11.",
        "x": 2.54,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-13",
        "number": "J4.13",
        "label": "ENABLE_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ENABLE_RPI. Physical source contact J4.13.",
        "x": 0,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-15",
        "number": "J4.15",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.15.",
        "x": -2.54,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-17",
        "number": "J4.17",
        "label": "VCCIO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VCCIO. Physical source contact J4.17.",
        "x": -5.08,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-19",
        "number": "J4.19",
        "label": "MOSI_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_RPI. Physical source contact J4.19.",
        "x": -7.62,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-21",
        "number": "J4.21",
        "label": "MISO_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO_RPI. Physical source contact J4.21.",
        "x": -10.16,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-23",
        "number": "J4.23",
        "label": "SCLK_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK_RPI. Physical source contact J4.23.",
        "x": -12.7,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-25",
        "number": "J4.25",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.25.",
        "x": -15.24,
        "y": 15.875,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-26",
        "number": "J4.26",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.26.",
        "x": -15.24,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-24",
        "number": "J4.24",
        "label": "!CS!_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS!_RPI. Physical source contact J4.24.",
        "x": -12.7,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-22",
        "number": "J4.22",
        "label": "INTERRUPT_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INTERRUPT_RPI. Physical source contact J4.22.",
        "x": -10.16,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-20",
        "number": "J4.20",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.20.",
        "x": -7.62,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-18",
        "number": "J4.18",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.18.",
        "x": -5.08,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-16",
        "number": "J4.16",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.16.",
        "x": -2.54,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-14",
        "number": "J4.14",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.14.",
        "x": 0,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-12",
        "number": "J4.12",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.12.",
        "x": 2.54,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-10",
        "number": "J4.10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.10.",
        "x": 5.08,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-8",
        "number": "J4.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J4.8.",
        "x": 7.62,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-6",
        "number": "J4.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.6.",
        "x": 10.16,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J4.4.",
        "x": 12.7,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J4.2.",
        "x": 15.24,
        "y": 18.415,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "!CS!_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CS!_RPI. Physical source contact J1.1.",
        "x": -10.16,
        "y": 13.335,
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
        "label": "SCLK_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK_RPI. Physical source contact J1.2.",
        "x": -7.62,
        "y": 13.335,
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
        "label": "MISO_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO_RPI. Physical source contact J1.3.",
        "x": -5.08,
        "y": 13.335,
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
        "label": "MOSI_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_RPI. Physical source contact J1.4.",
        "x": -2.54,
        "y": 13.335,
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
        "label": "INTERRUPT_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INTERRUPT_RPI. Physical source contact J1.5.",
        "x": 0,
        "y": 13.335,
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
        "label": "ENABLE_RPI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ENABLE_RPI. Physical source contact J1.6.",
        "x": 2.54,
        "y": 13.335,
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
        "label": "VCCIO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VCCIO. Physical source contact J1.7.",
        "x": 5.08,
        "y": 13.335,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.8.",
        "x": 7.62,
        "y": 13.335,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J1.9.",
        "x": 10.16,
        "y": 13.335,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-16.51\" y=\"14.224\" width=\"33.02\" height=\"5.461\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.727\" y=\"-9.862\" width=\"5.454\" height=\"5.754\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.7094\" y=\"12.319\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.703\" y=\"-7.442\" width=\"2.754\" height=\"3.454\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.15\" y=\"7.23\" width=\"4.3\" height=\"2.05\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.63\" y=\"6.855\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.201\" y=\"-7.849\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.201\" y=\"-4.42\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-9.944\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-11.468\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"0.089\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"-2.972\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"-1.448\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.823\" y=\"7.899\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.186\" y=\"7.899\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-8.941\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-7.417\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "A111_Pulsed_Radar_Breakout.brd",
      "boardSha256": "c4142eedbf55f74e8db65a2bef36b2580ea022d2cc8b66f7642744235f68564e",
      "sourceBounds": [
        0,
        0,
        33.02,
        39.37
      ],
      "selectedConnectors": [
        "J4",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Pulsed_Radar_Breakout_A111",
      "commit": "5f4d608a017d88721af725bd75d14d3e65de6438",
      "boardURL": "https://github.com/sparkfun/SparkFun_Pulsed_Radar_Breakout_A111/blob/5f4d608a017d88721af725bd75d14d3e65de6438/Hardware/A111_Pulsed_Radar_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Pulsed_Radar_Breakout_A111/blob/5f4d608a017d88721af725bd75d14d3e65de6438/Hardware/A111_Pulsed_Radar_Breakout.sch",
      "schematicSha256": "2438982f4d5ede389d0cd1e68f2747da85117d7ffc65d6900d381bf68531399a",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Pulsed_Radar_Breakout_A111/blob/5f4d608a017d88721af725bd75d14d3e65de6438/LICENSE.md",
      "sourceArchiveSha256": "74e78a71e24db5dbca374f883df46262ace29b18b4cc4543b67c6fcd641479c4",
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
  "sparkfun-module-dev13746": {
    "contacts": [
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "TXO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TXO. Physical source contact JP2.4.",
        "x": -0.004,
        "y": 1.27,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "RXI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXI. Physical source contact JP2.5.",
        "x": -0.004,
        "y": 3.81,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "!DTR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !DTR. Physical source contact JP2.6.",
        "x": -0.004,
        "y": 6.35,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "3V3",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U1.OUT to this rail. CAD net: 3V3. Physical source contact JP2.3.",
        "x": -0.004,
        "y": -1.27,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "!CTS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CTS. Physical source contact JP2.2.",
        "x": -0.004,
        "y": -3.81,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": -0.004,
        "y": -6.35,
        "size": [
          3,
          1.25
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-dplus1",
        "number": "JP1.D+1",
        "label": "USB_D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USB_D+. Physical source contact JP1.D+1.",
        "x": 6.6984,
        "y": 0,
        "size": [
          1.45,
          0.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-d-1",
        "number": "JP1.D-1",
        "label": "USB_D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USB_D-. Physical source contact JP1.D-1.",
        "x": 6.6984,
        "y": 0.65,
        "size": [
          1.45,
          0.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-vbus1",
        "number": "JP1.VBUS1",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP1.VBUS1.",
        "x": 6.6984,
        "y": 1.3,
        "size": [
          1.45,
          0.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-id1",
        "number": "JP1.ID1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.ID1.",
        "x": 6.6984,
        "y": -0.65,
        "size": [
          1.45,
          0.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-gnd1",
        "number": "JP1.GND1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.GND1.",
        "x": 6.6984,
        "y": -1.3,
        "size": [
          1.45,
          0.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-shield1",
        "number": "JP1.SHIELD1",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact JP1.SHIELD1.",
        "x": 9.4234,
        "y": 3.685,
        "size": [
          1.5,
          1.8
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-shield3",
        "number": "JP1.SHIELD3",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact JP1.SHIELD3.",
        "x": 9.4234,
        "y": 0,
        "size": [
          1.5,
          2.5
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-shield2",
        "number": "JP1.SHIELD2",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact JP1.SHIELD2.",
        "x": 9.4234,
        "y": -3.685,
        "size": [
          1.5,
          1.8
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"6.4234\" y=\"-4.0\" width=\"6.0\" height=\"11.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.3307\" y=\"-1.9558\" width=\"8.6614\" height=\"3.9116\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.976241\" y=\"5.1754\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.3024\" y=\"-1.4\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4476\" y=\"-5.2582\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.203\" y=\"-5.2582\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4266\" y=\"-3.4162\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6392\" y=\"-5.0418\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.5252\" y=\"-2.4134\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6392\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-11.479\" y=\"-7.5\" width=\"8.5\" height=\"15.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Beefy_3.brd",
      "boardSha256": "2a5f6d7f3b71db3b06455a548020e55566afc1febbd6de59ae03bc8b69cab612",
      "sourceBounds": [
        0,
        0,
        22.86,
        17.272
      ],
      "selectedConnectors": [
        "JP2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP2.3",
          "sourceNet": "3V3",
          "before": {
            "type": "power_in",
            "label": "3V3"
          },
          "after": {
            "type": "power_out",
            "label": "3V3"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "OUT",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Beefy_3/Hardware/Beefy_3.sch"
        },
        {
          "number": "JP1.SHIELD1",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Beefy_3/Hardware/Beefy_3.sch"
        },
        {
          "number": "JP1.SHIELD3",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Beefy_3/Hardware/Beefy_3.sch"
        },
        {
          "number": "JP1.SHIELD2",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Beefy_3/Hardware/Beefy_3.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Beefy_3",
      "commit": "1a71bb997699b4622a6928de9686144e5ce14850",
      "boardURL": "https://github.com/sparkfun/Beefy_3/blob/1a71bb997699b4622a6928de9686144e5ce14850/Hardware/Beefy_3.brd",
      "schematicURL": "https://github.com/sparkfun/Beefy_3/blob/1a71bb997699b4622a6928de9686144e5ce14850/Hardware/Beefy_3.sch",
      "schematicSha256": "63cfc5916c4719701094950fd821d71dd6229c60c6e9c136a7b2ba837f710e3c",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Beefy_3/blob/1a71bb997699b4622a6928de9686144e5ce14850/README.md",
      "sourceArchiveSha256": "dfb2b2ff0e21c1426045754b6dab090a0a949845414805d196a839955aeebde2",
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
        "sourceWarnings": [
          "JP1.SHIELD1: unresolved electrical role on SHIELD.",
          "JP1.SHIELD3: unresolved electrical role on SHIELD.",
          "JP1.SHIELD2: unresolved electrical role on SHIELD."
        ]
      }
    }
  },
  "sparkfun-module-wrl12775": {
    "contacts": [
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": 12.7,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "ANT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ANT. Physical source contact JP5.2.",
        "x": 12.7,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.3.",
        "x": 12.7,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.1.",
        "x": -12.7,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -12.7,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP2.1.",
        "x": -12.7,
        "y": -8.89,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "MOSI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MOSI. Physical source contact JP2.2.",
        "x": -12.7,
        "y": -6.35,
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
        "label": "SCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCK. Physical source contact JP2.3.",
        "x": -12.7,
        "y": -3.81,
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
        "label": "NSS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: NSS. Physical source contact JP2.4.",
        "x": -12.7,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact JP2.5.",
        "x": -12.7,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "DIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO0. Physical source contact JP3.1.",
        "x": -12.7,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "DIO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO1. Physical source contact JP4.1.",
        "x": 12.7,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "DIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO2. Physical source contact JP4.2.",
        "x": 12.7,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "DIO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO3. Physical source contact JP4.3.",
        "x": 12.7,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "DIO4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO4. Physical source contact JP4.4.",
        "x": 12.7,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "DIO5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO5. Physical source contact JP4.5.",
        "x": 12.7,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-8.0\" y=\"-9.27\" width=\"16.0\" height=\"16.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.21\" y=\"7.2725\" width=\"3.2\" height=\"2.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"8.471\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "RFM69HCW_BOB.brd",
      "boardSha256": "99b27b7491ea6f200b42e5cadc26512eede00b5cf7fc9273f52a5ac32cf1691f",
      "sourceBounds": [
        0,
        0,
        27.94,
        20.32
      ],
      "selectedConnectors": [
        "JP5",
        "JP1",
        "JP2",
        "JP3",
        "JP4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/RFM69HCW_Breakout",
      "commit": "bbdeb90abd7d484141efe302b7735fe7d42c3550",
      "boardURL": "https://github.com/sparkfun/RFM69HCW_Breakout/blob/bbdeb90abd7d484141efe302b7735fe7d42c3550/hardware/RFM69HCW_BOB.brd",
      "schematicURL": "https://github.com/sparkfun/RFM69HCW_Breakout/blob/bbdeb90abd7d484141efe302b7735fe7d42c3550/hardware/RFM69HCW_BOB.sch",
      "schematicSha256": "6e57b243a0ededc6905e59ac3edb298bfb5109e9df86b3151fcf0baef8cc671d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/RFM69HCW_Breakout/blob/bbdeb90abd7d484141efe302b7735fe7d42c3550/README.md",
      "sourceArchiveSha256": "5a8fbbca8f00fb6fbb6b2390b65a9877b840783400722e2dbc4b2098d6326e1e",
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
  "sparkfun-module-wig13279": {
    "contacts": [
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "SER_OUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SER_OUT. Physical source contact JP2.4.",
        "x": -10.24,
        "y": -2.54,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP2.5.",
        "x": -10.24,
        "y": 0,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 12V. Physical source contact JP2.6.",
        "x": -10.24,
        "y": 2.54,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CLOCK. Physical source contact JP2.3.",
        "x": -10.24,
        "y": -5.08,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "LATCH",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LATCH. Physical source contact JP2.2.",
        "x": -10.24,
        "y": -7.62,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": -10.24,
        "y": -10.16,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "S0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S0. Physical source contact JP1.1.",
        "x": 20.32,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "S1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S1. Physical source contact JP4.1.",
        "x": 15.748,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "S2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S2. Physical source contact JP5.1.",
        "x": 11.176,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP5",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "S3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S3. Physical source contact JP6.1.",
        "x": 6.604,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP6",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "S4",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S4. Physical source contact JP7.1.",
        "x": -6.604,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP7",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "S5",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S5. Physical source contact JP8.1.",
        "x": -11.176,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP8",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "S6",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S6. Physical source contact JP9.1.",
        "x": -15.748,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP9",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp10-1",
        "number": "JP10.1",
        "label": "S7",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S7. Physical source contact JP10.1.",
        "x": -20.32,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP10",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp11-1",
        "number": "JP11.1",
        "label": "12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 12V. Physical source contact JP11.1.",
        "x": 1.905,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP11",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp12-1",
        "number": "JP12.1",
        "label": "12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 12V. Physical source contact JP12.1.",
        "x": -2.032,
        "y": 11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP12",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp13-4",
        "number": "JP13.4",
        "label": "CLOCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CLOCK. Physical source contact JP13.4.",
        "x": 10.24,
        "y": -5.08,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp13-5",
        "number": "JP13.5",
        "label": "LATCH",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LATCH. Physical source contact JP13.5.",
        "x": 10.24,
        "y": -7.62,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp13-6",
        "number": "JP13.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP13.6.",
        "x": 10.24,
        "y": -10.16,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp13-3",
        "number": "JP13.3",
        "label": "SER_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SER_IN. Physical source contact JP13.3.",
        "x": 10.24,
        "y": -2.54,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp13-2",
        "number": "JP13.2",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP13.2.",
        "x": 10.24,
        "y": 0,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp13-1",
        "number": "JP13.1",
        "label": "12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 12V. Physical source contact JP13.1.",
        "x": 10.24,
        "y": 2.54,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "JP13",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP3.1.",
        "x": -2.032,
        "y": -11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp14-1",
        "number": "JP14.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP14.1.",
        "x": 1.905,
        "y": -11.43,
        "size": [
          1.8796,
          3.7592
        ],
        "shape": "oval",
        "connector": "JP14",
        "back": false,
        "drill": 1.1176
      }
    ],
    "artwork": "<rect x=\"-22.49\" y=\"-11.43\" width=\"8.5\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.99\" y=\"-11.43\" width=\"8.5\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.2578\" y=\"-5.7563\" width=\"10.5156\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.906\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.05\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.478\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.635\" y=\"-12.065\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"-12.065\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.59\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.334\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.635\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.874\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.018\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.446\" y=\"10.795\" width=\"2.54\" height=\"1.27\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.167\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.595\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.739\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.185\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.901\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.329\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.757\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.023\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFunLargeDigitDriver.brd",
      "boardSha256": "239542b7812cb15212f528291fdc81950cee846230c5d460afa8038a2944f779",
      "sourceBounds": [
        0,
        0,
        45.72,
        22.86
      ],
      "selectedConnectors": [
        "JP2",
        "JP1",
        "JP4",
        "JP5",
        "JP6",
        "JP7",
        "JP8",
        "JP9",
        "JP10",
        "JP11",
        "JP12",
        "JP13",
        "JP3",
        "JP14"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Large_Digit_Driver",
      "commit": "10e7c4d8e63a7fee790a0cef35d12d5dc099fbbd",
      "boardURL": "https://github.com/sparkfun/Large_Digit_Driver/blob/10e7c4d8e63a7fee790a0cef35d12d5dc099fbbd/Hardware/SparkFunLargeDigitDriver.brd",
      "schematicURL": "https://github.com/sparkfun/Large_Digit_Driver/blob/10e7c4d8e63a7fee790a0cef35d12d5dc099fbbd/Hardware/SparkFunLargeDigitDriver.sch",
      "schematicSha256": "2eaf887b155e6547eb030b4bf7e47ef0a7e262f06a4f1ca56a0d23e89b47d3d1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Large_Digit_Driver/blob/10e7c4d8e63a7fee790a0cef35d12d5dc099fbbd/LICENSE.md",
      "sourceArchiveSha256": "15be636a35e91ae2d9f236c4a89be0c4c6f820d897e708188ffffccdbec26ead",
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
  "sparkfun-module-dev15164": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -7.62,
        "y": -2.135,
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
        "x": -7.62,
        "y": -1.135,
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
        "x": -7.62,
        "y": -0.135,
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
        "x": -7.62,
        "y": 0.865,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -3.81,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": -1.27,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": 1.27,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": 3.81,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 7.62,
        "y": 0.865,
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
        "x": 7.62,
        "y": -0.135,
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
        "x": 7.62,
        "y": -1.135,
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
        "x": 7.62,
        "y": -2.135,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J5.1.",
        "x": -2.54,
        "y": -10.033,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J5.2.",
        "x": -2.54,
        "y": -12.573,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact J5.3.",
        "x": 0,
        "y": -10.033,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact J5.4.",
        "x": 0,
        "y": -12.573,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-5",
        "number": "J5.5",
        "label": "RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST. Physical source contact J5.5.",
        "x": 2.54,
        "y": -10.033,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-6",
        "number": "J5.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J5.6.",
        "x": 2.54,
        "y": -12.573,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.1.",
        "x": 6.35,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.2.",
        "x": 3.81,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J6.3.",
        "x": 1.27,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "RXI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXI. Physical source contact J6.4.",
        "x": -1.27,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-5",
        "number": "J6.5",
        "label": "TXO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TXO. Physical source contact J6.5.",
        "x": -3.81,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-6",
        "number": "J6.6",
        "label": "DTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DTR. Physical source contact J6.6.",
        "x": -6.35,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-cd2",
        "number": "J1.CD2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.CD2.",
        "x": 0.765,
        "y": 3.029,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-cd1",
        "number": "J1.CD1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.CD1.",
        "x": -4.935,
        "y": 3.029,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-gnd3",
        "number": "J1.GND3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.GND3.",
        "x": -6.535,
        "y": -10.121,
        "size": [
          1.4,
          1.9
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-gnd1",
        "number": "J1.GND1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.GND1.",
        "x": 6.615,
        "y": -11.121,
        "size": [
          1.4,
          1.9
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-rsv1",
        "number": "J1.RSV1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.RSV1.",
        "x": 1.955,
        "y": -7.271,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-cs",
        "number": "J1.CS",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact J1.CS.",
        "x": 0.855,
        "y": -6.871,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-di",
        "number": "J1.DI",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact J1.DI.",
        "x": -0.245,
        "y": -7.271,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-vcc",
        "number": "J1.VCC",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.VCC.",
        "x": -1.345,
        "y": -7.471,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-sclk",
        "number": "J1.SCLK",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact J1.SCLK.",
        "x": -2.445,
        "y": -7.271,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-gnd",
        "number": "J1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.GND.",
        "x": -3.545,
        "y": -7.471,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-do",
        "number": "J1.DO",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J1.DO.",
        "x": -4.645,
        "y": -7.271,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-rsv2",
        "number": "J1.RSV2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.RSV2.",
        "x": -5.745,
        "y": -7.271,
        "size": [
          0.8,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.505\" y=\"-4.14\" width=\"7.01\" height=\"7.01\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.635\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.635\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.6172\" y=\"9.779\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.471259\" y=\"-6.375159\" width=\"3.749859\" height=\"1.310159\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4925\" y=\"-10.00125\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.23875\" y=\"-10.00125\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-8.687\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.769\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.134\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.422\" y=\"4.648\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.274\" y=\"-0.991\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.849\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.423\" y=\"-0.991\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-8.674\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.985\" y=\"-17.271\" width=\"14.0\" height=\"20.7\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.16\" y=\"5.985\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.516\" y=\"-7.417\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic-OpenLog.brd",
      "boardSha256": "eef0112c12bc691637164a21dc202afd789bf97938f3c4305f4cfe324585f287",
      "sourceBounds": [
        0,
        0,
        25.4,
        26.67
      ],
      "selectedConnectors": [
        "J2",
        "J3",
        "J4",
        "J5",
        "J6",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_OpenLog",
      "commit": "f3f6a3ec3f70fe4c14612b38fac360f26ee79a4c",
      "boardURL": "https://github.com/sparkfun/Qwiic_OpenLog/blob/f3f6a3ec3f70fe4c14612b38fac360f26ee79a4c/Hardware/Qwiic-OpenLog.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_OpenLog/blob/f3f6a3ec3f70fe4c14612b38fac360f26ee79a4c/Hardware/Qwiic-OpenLog.sch",
      "schematicSha256": "9c7c5e36c6c33858044099e6118e59d11d1a490edf871ef86924eaa22c68af57",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_OpenLog/blob/f3f6a3ec3f70fe4c14612b38fac360f26ee79a4c/License.md",
      "sourceArchiveSha256": "e061c2bdd301d3fe34f7edfdb5573acab96ec30dc89a5b2a47920f76079a8605",
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
  "sparkfun-module-bob23589": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact J1.1.",
        "x": -6.35,
        "y": -2,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "INT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INT. Physical source contact J1.2.",
        "x": -6.35,
        "y": -1,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.3.",
        "x": -6.35,
        "y": 0,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.4.",
        "x": -6.35,
        "y": 1,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.5.",
        "x": -6.35,
        "y": 2,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 6.35,
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
        "id": "j2-2",
        "number": "J2.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U1.OUT to this rail. CAD net: 3.3V. Physical source contact J2.2.",
        "x": 6.35,
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
        "id": "j2-3",
        "number": "J2.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": 6.35,
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 6.35,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "INT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INT. Physical source contact J3.1.",
        "x": 0,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-11.05\" y=\"-3.7\" width=\"4.7\" height=\"7.4\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.7\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.27\" y=\"0.0\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"-3.305\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.29\" y=\"-2.8495\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.79\" y=\"-2.8495\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_ESLOV_to_Qwiic_Bridge.brd",
      "boardSha256": "d2dc66f431a2156803f156b5fe438ddc9da78f293f3b4aae05ff57016aa16597",
      "sourceBounds": [
        0,
        0,
        22.86,
        8.89
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "J1.2 passive pass-through verified from schematic endpoints.",
        "J1.3 passive pass-through verified from schematic endpoints.",
        "J1.4 passive pass-through verified from schematic endpoints.",
        "J2.3 passive pass-through verified from schematic endpoints.",
        "J2.4 passive pass-through verified from schematic endpoints.",
        "J3.1 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "J1.2",
          "sourceNet": "INT",
          "before": {
            "type": "unspecified",
            "label": "INT"
          },
          "after": {
            "type": "passive",
            "label": "INT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J1.3",
          "sourceNet": "SCL",
          "before": {
            "type": "unspecified",
            "label": "SCL"
          },
          "after": {
            "type": "passive",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J1.4",
          "sourceNet": "SDA",
          "before": {
            "type": "unspecified",
            "label": "SDA"
          },
          "after": {
            "type": "passive",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J2.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J2.3",
          "sourceNet": "SDA",
          "before": {
            "type": "unspecified",
            "label": "SDA"
          },
          "after": {
            "type": "passive",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J2.4",
          "sourceNet": "SCL",
          "before": {
            "type": "unspecified",
            "label": "SCL"
          },
          "after": {
            "type": "passive",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        },
        {
          "number": "J3.1",
          "sourceNet": "INT",
          "before": {
            "type": "unspecified",
            "label": "INT"
          },
          "after": {
            "type": "passive",
            "label": "INT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_ESLOV_to_Qwiic_Bridge/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_ESLOV_to_Qwiic_Bridge",
      "commit": "a666bf9ff5f64aa4173cf14a91c46ec30a275723",
      "boardURL": "https://github.com/sparkfun/SparkFun_ESLOV_to_Qwiic_Bridge/blob/a666bf9ff5f64aa4173cf14a91c46ec30a275723/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_ESLOV_to_Qwiic_Bridge/blob/a666bf9ff5f64aa4173cf14a91c46ec30a275723/Hardware/SparkFun_ESLOV_to_Qwiic_Bridge.sch",
      "schematicSha256": "2e0cd8a380e161d43a6acfc88ba305248cf5cb7b6672ae68338baa61921d6b36",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_ESLOV_to_Qwiic_Bridge/blob/a666bf9ff5f64aa4173cf14a91c46ec30a275723/LICENSE.md",
      "sourceArchiveSha256": "9d39c3a2a4d5a7680c2720e75d843f849d9cfa4c883c333adc86d3db239c80f3",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "J1.2: unresolved electrical role on INT.",
        "J1.3: unresolved electrical role on SCL.",
        "J1.4: unresolved electrical role on SDA.",
        "J2.3: unresolved electrical role on SDA.",
        "J2.4: unresolved electrical role on SCL.",
        "J3.1: unresolved electrical role on INT."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "J1.2: unresolved electrical role on INT.",
          "J1.3: unresolved electrical role on SCL.",
          "J1.4: unresolved electrical role on SDA.",
          "J2.3: unresolved electrical role on SDA.",
          "J2.4: unresolved electrical role on SCL.",
          "J3.1: unresolved electrical role on INT."
        ]
      }
    }
  },
  "sparkfun-module-bob12941": {
    "contacts": [
      {
        "id": "u1-1",
        "number": "U1.1",
        "label": "D3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3. Physical source contact U1.1.",
        "x": -10.525,
        "y": -6.77,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-2",
        "number": "U1.2",
        "label": "CMD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CMD. Physical source contact U1.2.",
        "x": -10.525,
        "y": -4.27,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-3",
        "number": "U1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U1.3.",
        "x": -10.525,
        "y": -2.52,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-cd",
        "number": "U1.CD",
        "label": "CD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CD. Physical source contact U1.CD.",
        "x": -10.525,
        "y": -1.02,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-4",
        "number": "U1.4",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact U1.4.",
        "x": -10.525,
        "y": 0.73,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-5",
        "number": "U1.5",
        "label": "CLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CLK. Physical source contact U1.5.",
        "x": -10.525,
        "y": 3.23,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-6",
        "number": "U1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U1.6.",
        "x": -10.525,
        "y": 5.73,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-7",
        "number": "U1.7",
        "label": "D0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0. Physical source contact U1.7.",
        "x": -10.525,
        "y": 8.15,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-8",
        "number": "U1.8",
        "label": "D1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1. Physical source contact U1.8.",
        "x": -10.525,
        "y": 9.85,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-sh-1",
        "number": "U1.SH@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U1.SH@1.",
        "x": 10.475,
        "y": -14.496,
        "size": [
          2,
          1.4
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-sh-2",
        "number": "U1.SH@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U1.SH@2.",
        "x": 11.625,
        "y": 13.589,
        "size": [
          2,
          1.527
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-wp",
        "number": "U1.WP",
        "label": "WP",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: WP. Physical source contact U1.WP.",
        "x": -10.525,
        "y": 13,
        "size": [
          1.8,
          1.1
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "u1-9",
        "number": "U1.9",
        "label": "D2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2. Physical source contact U1.9.",
        "x": -10.525,
        "y": -9.27,
        "size": [
          1.8,
          0.9
        ],
        "shape": "rect",
        "connector": "U1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "WP",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: WP. Physical source contact JP5.1.",
        "x": -18.415,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "D1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1. Physical source contact JP5.2.",
        "x": -18.415,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "D0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0. Physical source contact JP5.3.",
        "x": -18.415,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-4",
        "number": "JP5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.4.",
        "x": -18.415,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP5.5.",
        "x": -18.415,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "CLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CLK. Physical source contact JP5.6.",
        "x": -18.415,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-7",
        "number": "JP5.7",
        "label": "CD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CD. Physical source contact JP5.7.",
        "x": -18.415,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-8",
        "number": "JP5.8",
        "label": "CMD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CMD. Physical source contact JP5.8.",
        "x": -18.415,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-9",
        "number": "JP5.9",
        "label": "D3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3. Physical source contact JP5.9.",
        "x": -18.415,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-10",
        "number": "JP5.10",
        "label": "D2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2. Physical source contact JP5.10.",
        "x": -18.415,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-9.62\" y=\"-14.418\" width=\"35.695\" height=\"28.745\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.685\" y=\"-12.7\" width=\"2.54\" height=\"25.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SD_MMC Breakout-v20.brd",
      "boardSha256": "d45a574a7c39e9aefa9bf25a571e81dc03e0f15a0356ce900266f90ec3c64276",
      "sourceBounds": [
        0,
        -1.27,
        39.37,
        34.29
      ],
      "selectedConnectors": [
        "U1",
        "JP5"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "U1.1 passive pass-through verified from schematic endpoints.",
        "U1.2 passive pass-through verified from schematic endpoints.",
        "U1.CD passive pass-through verified from schematic endpoints.",
        "U1.5 passive pass-through verified from schematic endpoints.",
        "U1.7 passive pass-through verified from schematic endpoints.",
        "U1.8 passive pass-through verified from schematic endpoints.",
        "U1.WP passive pass-through verified from schematic endpoints.",
        "U1.9 passive pass-through verified from schematic endpoints.",
        "JP5.1 passive pass-through verified from schematic endpoints.",
        "JP5.2 passive pass-through verified from schematic endpoints.",
        "JP5.3 passive pass-through verified from schematic endpoints.",
        "JP5.6 passive pass-through verified from schematic endpoints.",
        "JP5.7 passive pass-through verified from schematic endpoints.",
        "JP5.8 passive pass-through verified from schematic endpoints.",
        "JP5.9 passive pass-through verified from schematic endpoints.",
        "JP5.10 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "U1.1",
          "sourceNet": "D3",
          "before": {
            "type": "unspecified",
            "label": "D3"
          },
          "after": {
            "type": "passive",
            "label": "D3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.2",
          "sourceNet": "CMD",
          "before": {
            "type": "unspecified",
            "label": "CMD"
          },
          "after": {
            "type": "passive",
            "label": "CMD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.CD",
          "sourceNet": "CD",
          "before": {
            "type": "unspecified",
            "label": "CD"
          },
          "after": {
            "type": "passive",
            "label": "CD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.5",
          "sourceNet": "CLK",
          "before": {
            "type": "unspecified",
            "label": "CLK"
          },
          "after": {
            "type": "passive",
            "label": "CLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.7",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.8",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.WP",
          "sourceNet": "WP",
          "before": {
            "type": "unspecified",
            "label": "WP"
          },
          "after": {
            "type": "passive",
            "label": "WP"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "U1.9",
          "sourceNet": "D2",
          "before": {
            "type": "unspecified",
            "label": "D2"
          },
          "after": {
            "type": "passive",
            "label": "D2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.1",
          "sourceNet": "WP",
          "before": {
            "type": "unspecified",
            "label": "WP"
          },
          "after": {
            "type": "passive",
            "label": "WP"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.2",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.3",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.6",
          "sourceNet": "CLK",
          "before": {
            "type": "unspecified",
            "label": "CLK"
          },
          "after": {
            "type": "passive",
            "label": "CLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.7",
          "sourceNet": "CD",
          "before": {
            "type": "unspecified",
            "label": "CD"
          },
          "after": {
            "type": "passive",
            "label": "CD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.8",
          "sourceNet": "CMD",
          "before": {
            "type": "unspecified",
            "label": "CMD"
          },
          "after": {
            "type": "passive",
            "label": "CMD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.9",
          "sourceNet": "D3",
          "before": {
            "type": "unspecified",
            "label": "D3"
          },
          "after": {
            "type": "passive",
            "label": "D3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        },
        {
          "number": "JP5.10",
          "sourceNet": "D2",
          "before": {
            "type": "unspecified",
            "label": "D2"
          },
          "after": {
            "type": "passive",
            "label": "D2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SD-MMC_Breakout/Hardware/SD_MMC Breakout-v20.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SD-MMC_Breakout",
      "commit": "d472cfaa8c39cf9efc94f010e50b85bc87eefc7b",
      "boardURL": "https://github.com/sparkfun/SD-MMC_Breakout/blob/d472cfaa8c39cf9efc94f010e50b85bc87eefc7b/Hardware/SD_MMC%20Breakout-v20.brd",
      "schematicURL": "https://github.com/sparkfun/SD-MMC_Breakout/blob/d472cfaa8c39cf9efc94f010e50b85bc87eefc7b/Hardware/SD_MMC%20Breakout-v20.sch",
      "schematicSha256": "7685f7fbd59b749011d549458518c5256cead2a7788d50221aceb46ad28d311b",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SD-MMC_Breakout/blob/d472cfaa8c39cf9efc94f010e50b85bc87eefc7b/README.md",
      "sourceArchiveSha256": "390f4ff9c398f54050d9cd9d2ce81768c70eaff1c1a1eb67916eddbf92cfc5e9",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "U1.1: unresolved electrical role on D3.",
        "U1.2: unresolved electrical role on CMD.",
        "U1.CD: unresolved electrical role on CD.",
        "U1.5: unresolved electrical role on CLK.",
        "U1.7: unresolved electrical role on D0.",
        "U1.8: unresolved electrical role on D1.",
        "U1.WP: unresolved electrical role on WP.",
        "U1.9: unresolved electrical role on D2.",
        "JP5.1: unresolved electrical role on WP.",
        "JP5.2: unresolved electrical role on D1.",
        "JP5.3: unresolved electrical role on D0.",
        "JP5.6: unresolved electrical role on CLK.",
        "JP5.7: unresolved electrical role on CD.",
        "JP5.8: unresolved electrical role on CMD.",
        "JP5.9: unresolved electrical role on D3.",
        "JP5.10: unresolved electrical role on D2."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "U1.1: unresolved electrical role on D3.",
          "U1.2: unresolved electrical role on CMD.",
          "U1.CD: unresolved electrical role on CD.",
          "U1.5: unresolved electrical role on CLK.",
          "U1.7: unresolved electrical role on D0.",
          "U1.8: unresolved electrical role on D1.",
          "U1.WP: unresolved electrical role on WP.",
          "U1.9: unresolved electrical role on D2.",
          "JP5.1: unresolved electrical role on WP.",
          "JP5.2: unresolved electrical role on D1.",
          "JP5.3: unresolved electrical role on D0.",
          "JP5.6: unresolved electrical role on CLK.",
          "JP5.7: unresolved electrical role on CD.",
          "JP5.8: unresolved electrical role on CMD.",
          "JP5.9: unresolved electrical role on D3.",
          "JP5.10: unresolved electrical role on D2."
        ]
      }
    }
  },
  "sparkfun-module-bob23055": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 4.445,
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
        "id": "j1-2",
        "number": "J1.2",
        "label": "SHLD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHLD. Physical source contact J1.2.",
        "x": 4.445,
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
        "id": "j1-3",
        "number": "J1.3",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact J1.3.",
        "x": 4.445,
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
        "id": "j1-4",
        "number": "J1.4",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact J1.4.",
        "x": 4.445,
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
        "id": "j1-5",
        "number": "J1.5",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact J1.5.",
        "x": 4.445,
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
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact J1.6.",
        "x": 4.445,
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
        "id": "j1-7",
        "number": "J1.7",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact J1.7.",
        "x": 4.445,
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
        "id": "j2-shld2",
        "number": "J2.SHLD2",
        "label": "SHLD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHLD. Physical source contact J2.SHLD2.",
        "x": -4.47,
        "y": -2,
        "size": [
          0.6,
          1.2
        ],
        "shape": "oval",
        "connector": "J2",
        "back": false,
        "drill": 0.4
      },
      {
        "id": "j2-a6",
        "number": "J2.A6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact J2.A6.",
        "x": -3.24,
        "y": 0.45,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a7",
        "number": "J2.A7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact J2.A7.",
        "x": -3.24,
        "y": -0.45,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b7",
        "number": "J2.B7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact J2.B7.",
        "x": -1.84,
        "y": 0.45,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b6",
        "number": "J2.B6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact J2.B6.",
        "x": -1.84,
        "y": -0.45,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a5",
        "number": "J2.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact J2.A5.",
        "x": -3.24,
        "y": 1.35,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b5",
        "number": "J2.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact J2.B5.",
        "x": -1.84,
        "y": -1.35,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b4",
        "number": "J2.B4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact J2.B4.",
        "x": -1.84,
        "y": -2.3,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b1",
        "number": "J2.B1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.B1.",
        "x": -1.84,
        "y": -3.25,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b9",
        "number": "J2.B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact J2.B9.",
        "x": -1.84,
        "y": 2.3,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-b12",
        "number": "J2.B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.B12.",
        "x": -1.84,
        "y": 3.25,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a4",
        "number": "J2.A4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact J2.A4.",
        "x": -3.24,
        "y": 2.3,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a1",
        "number": "J2.A1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.A1.",
        "x": -3.24,
        "y": 3.25,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a9",
        "number": "J2.A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact J2.A9.",
        "x": -3.24,
        "y": -2.3,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-a12",
        "number": "J2.A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.A12.",
        "x": -3.24,
        "y": -3.25,
        "size": [
          0.65,
          0.65
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.5
      },
      {
        "id": "j2-shld1",
        "number": "J2.SHLD1",
        "label": "SHLD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHLD. Physical source contact J2.SHLD1.",
        "x": -4.47,
        "y": 2,
        "size": [
          0.6,
          1.2
        ],
        "shape": "oval",
        "connector": "J2",
        "back": false,
        "drill": 0.4
      },
      {
        "id": "j2-shld3",
        "number": "J2.SHLD3",
        "label": "SHLD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHLD. Physical source contact J2.SHLD3.",
        "x": -0.61,
        "y": -2,
        "size": [
          0.6,
          1.2
        ],
        "shape": "oval",
        "connector": "J2",
        "back": false,
        "drill": 0.4
      },
      {
        "id": "j2-shld4",
        "number": "J2.SHLD4",
        "label": "SHLD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHLD. Physical source contact J2.SHLD4.",
        "x": -0.61,
        "y": 2,
        "size": [
          0.6,
          1.2
        ],
        "shape": "oval",
        "connector": "J2",
        "back": false,
        "drill": 0.4
      }
    ],
    "artwork": "<rect x=\"-4.77\" y=\"-4.75\" width=\"4.46\" height=\"9.5\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"0.914\" y=\"5.931\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "USB C Vertical Breakout-PTH.brd",
      "boardSha256": "2784335f3c81b08a377dbf816ee3ebcd176c5af507873616b0ec695450e0484f",
      "sourceBounds": [
        0,
        0,
        11.43,
        20.32
      ],
      "selectedConnectors": [
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "J1.4 passive pass-through verified from schematic endpoints.",
        "J1.5 passive pass-through verified from schematic endpoints.",
        "J2.A6 passive pass-through verified from schematic endpoints.",
        "J2.A7 passive pass-through verified from schematic endpoints.",
        "J2.B7 passive pass-through verified from schematic endpoints.",
        "J2.B6 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "J1.4",
          "sourceNet": "D+",
          "before": {
            "type": "unspecified",
            "label": "D+"
          },
          "after": {
            "type": "passive",
            "label": "D+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        },
        {
          "number": "J1.5",
          "sourceNet": "D-",
          "before": {
            "type": "unspecified",
            "label": "D-"
          },
          "after": {
            "type": "passive",
            "label": "D-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        },
        {
          "number": "J2.A6",
          "sourceNet": "D+",
          "before": {
            "type": "unspecified",
            "label": "D+"
          },
          "after": {
            "type": "passive",
            "label": "D+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        },
        {
          "number": "J2.A7",
          "sourceNet": "D-",
          "before": {
            "type": "unspecified",
            "label": "D-"
          },
          "after": {
            "type": "passive",
            "label": "D-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        },
        {
          "number": "J2.B7",
          "sourceNet": "D-",
          "before": {
            "type": "unspecified",
            "label": "D-"
          },
          "after": {
            "type": "passive",
            "label": "D-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        },
        {
          "number": "J2.B6",
          "sourceNet": "D+",
          "before": {
            "type": "unspecified",
            "label": "D+"
          },
          "after": {
            "type": "passive",
            "label": "D+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_USB-C_Vertical_Breakout/Hardware/USB C Vertical Breakout-PTH.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_USB-C_Vertical_Breakout",
      "commit": "4c7334fc922f8f0e9de07536f063adfe0231c05f",
      "boardURL": "https://github.com/sparkfun/SparkFun_USB-C_Vertical_Breakout/blob/4c7334fc922f8f0e9de07536f063adfe0231c05f/Hardware/USB%20C%20Vertical%20Breakout-PTH.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_USB-C_Vertical_Breakout/blob/4c7334fc922f8f0e9de07536f063adfe0231c05f/Hardware/USB%20C%20Vertical%20Breakout-PTH.sch",
      "schematicSha256": "ada024a0ead3be37c2efef9e04962daf352269f0fb5c16acbed2532c9ce74fff",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_USB-C_Vertical_Breakout/blob/4c7334fc922f8f0e9de07536f063adfe0231c05f/LICENSE.md",
      "sourceArchiveSha256": "b97255fec3c6dcdcf4180b71d05cdfb12e984194a9701756f99ee875ab6819e9",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "J1.4: unresolved electrical role on D+.",
        "J1.5: unresolved electrical role on D-.",
        "J2.A6: unresolved electrical role on D+.",
        "J2.A7: unresolved electrical role on D-.",
        "J2.B7: unresolved electrical role on D-.",
        "J2.B6: unresolved electrical role on D+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "J1.4: unresolved electrical role on D+.",
          "J1.5: unresolved electrical role on D-.",
          "J2.A6: unresolved electrical role on D+.",
          "J2.A7: unresolved electrical role on D-.",
          "J2.B7: unresolved electrical role on D-.",
          "J2.B6: unresolved electrical role on D+."
        ]
      }
    }
  },
  "sparkfun-module-dev14495": {
    "contacts": [
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": 6.35,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": 6.35,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": 6.35,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": 6.35,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 3.81,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": 1.27,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": -1.27,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": -3.81,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -6.35,
        "y": -1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": -6.35,
        "y": -0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": -6.35,
        "y": 0.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": -6.35,
        "y": 1.5,
        "size": [
          1.35,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.08\" y=\"-2.54\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.7\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.95\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun Qwiic Adapter.brd",
      "boardSha256": "ee8143e72753364d7861bdb4fc1808b668e18d1d660bd7e160217177a5341644",
      "sourceBounds": [
        0,
        0,
        22.86,
        7.62
      ],
      "selectedConnectors": [
        "J3",
        "J4",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "J3.3 passive pass-through verified from schematic endpoints.",
        "J3.4 passive pass-through verified from schematic endpoints.",
        "J4.3 passive pass-through verified from schematic endpoints.",
        "J4.4 passive pass-through verified from schematic endpoints.",
        "J1.3 passive pass-through verified from schematic endpoints.",
        "J1.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "J3.3",
          "sourceNet": "SDA",
          "before": {
            "type": "unspecified",
            "label": "SDA"
          },
          "after": {
            "type": "passive",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        },
        {
          "number": "J3.4",
          "sourceNet": "SCL",
          "before": {
            "type": "unspecified",
            "label": "SCL"
          },
          "after": {
            "type": "passive",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        },
        {
          "number": "J4.3",
          "sourceNet": "SDA",
          "before": {
            "type": "unspecified",
            "label": "SDA"
          },
          "after": {
            "type": "passive",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        },
        {
          "number": "J4.4",
          "sourceNet": "SCL",
          "before": {
            "type": "unspecified",
            "label": "SCL"
          },
          "after": {
            "type": "passive",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        },
        {
          "number": "J1.3",
          "sourceNet": "SDA",
          "before": {
            "type": "unspecified",
            "label": "SDA"
          },
          "after": {
            "type": "passive",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        },
        {
          "number": "J1.4",
          "sourceNet": "SCL",
          "before": {
            "type": "unspecified",
            "label": "SCL"
          },
          "after": {
            "type": "passive",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Qwiic_Adapter/Hardware/SparkFun Qwiic Adapter.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Adapter",
      "commit": "3c810f09ea89ea3e10fd5907076c6cccff8b224a",
      "boardURL": "https://github.com/sparkfun/Qwiic_Adapter/blob/3c810f09ea89ea3e10fd5907076c6cccff8b224a/Hardware/SparkFun%20Qwiic%20Adapter.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Adapter/blob/3c810f09ea89ea3e10fd5907076c6cccff8b224a/Hardware/SparkFun%20Qwiic%20Adapter.sch",
      "schematicSha256": "9321e50e38439681a34d109b8d4c7e8ff1e719dccdaf6e9c74937c53166b576b",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Adapter/blob/3c810f09ea89ea3e10fd5907076c6cccff8b224a/LICENSE.md",
      "sourceArchiveSha256": "d53a26b719ac3387f65fdf02f4c5abc1eaf43e324f59a814ab94720dce0ee822",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "J3.3: unresolved electrical role on SDA.",
        "J3.4: unresolved electrical role on SCL.",
        "J4.3: unresolved electrical role on SDA.",
        "J4.4: unresolved electrical role on SCL.",
        "J1.3: unresolved electrical role on SDA.",
        "J1.4: unresolved electrical role on SCL."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "J3.3: unresolved electrical role on SDA.",
          "J3.4: unresolved electrical role on SCL.",
          "J4.3: unresolved electrical role on SDA.",
          "J4.4: unresolved electrical role on SCL.",
          "J1.3: unresolved electrical role on SDA.",
          "J1.4: unresolved electrical role on SCL."
        ]
      }
    }
  }
};
