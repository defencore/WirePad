// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-bob13282": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -7.62,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "DI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DI. Physical source contact JP1.2.",
        "x": -7.62,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.3.",
        "x": -7.62,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": 7.62,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "DO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DO. Physical source contact JP2.2.",
        "x": 7.62,
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
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.3.",
        "x": 7.62,
        "y": 0,
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
    "artwork": "<rect x=\"-2.54\" y=\"-0.482603\" width=\"5.08\" height=\"5.209544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.89\" y=\"-1.27\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.35\" y=\"-1.27\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.877\" y=\"2.3872\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFunws2812bBreakout.brd",
      "boardSha256": "6445dba001a8d593432aaf3131e787c4ce92b76b98955809a871d45b71109ca0",
      "sourceBounds": [
        0,
        0,
        17.78,
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
      "repo": "sparkfun/WS2812_Breakout",
      "commit": "80e00a06f2763d089633d80b3d5870311750e7d3",
      "boardURL": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/Hardware/SparkFunws2812bBreakout.brd",
      "schematicURL": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/Hardware/SparkFunws2812bBreakout.sch",
      "schematicSha256": "9daa3a372eb65ffa5d4989ae59f8ee1abe45ab2d88d134a970e5f417ce651b91",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/WS2812_Breakout/blob/80e00a06f2763d089633d80b3d5870311750e7d3/LICENSE.md",
      "sourceArchiveSha256": "64bec815b1ee74f6d1732835d3c64b22a2a4279f8ac1c74cb23136ef4490984f",
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
  "sparkfun-module-bob11722": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "B",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source B node. The intended user-fitted device is not included. Physical source contact JP1.1.",
        "x": -2.54,
        "y": 12.7,
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
        "label": "C",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source C node. The intended user-fitted device is not included. Physical source contact JP1.2.",
        "x": 0,
        "y": 12.7,
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
        "label": "A",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source A node. The intended user-fitted device is not included. Physical source contact JP1.3.",
        "x": 2.54,
        "y": 12.7,
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
        "label": "COMMON",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source COMMON node. The intended user-fitted device is not included. Physical source contact JP2.1.",
        "x": 5.08,
        "y": -12.7,
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
        "label": "BLUE",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source BLUE node. The intended user-fitted device is not included. Physical source contact JP2.2.",
        "x": 2.54,
        "y": -12.7,
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
        "label": "SWITCH",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source SWITCH node. The intended user-fitted device is not included. Physical source contact JP2.3.",
        "x": 0,
        "y": -12.7,
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
        "label": "GREEN",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source GREEN node. The intended user-fitted device is not included. Physical source contact JP2.4.",
        "x": -2.54,
        "y": -12.7,
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
        "label": "RED",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source RED node. The intended user-fitted device is not included. Physical source contact JP2.5.",
        "x": -5.08,
        "y": -12.7,
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
    "artwork": "<rect x=\"-6.2\" y=\"-8.605\" width=\"12.4\" height=\"13.4\" rx=\".12\" fill=\"none\" stroke=\"#7b9d8d\" stroke-width=\".08\" stroke-dasharray=\".5 .4\" /><rect x=\"-6.35\" y=\"-13.97\" width=\"12.7\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\" /><rect x=\"-3.81\" y=\"11.43\" width=\"7.62\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\" />",
    "backArtwork": "<rect x=\"-6.2\" y=\"-5.43\" width=\"12.4\" height=\"13.4\" rx=\".12\" fill=\"none\" stroke=\"#7b9d8d\" stroke-width=\".08\" stroke-dasharray=\".5 .4\" />",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Rotary_Encoder-Illuminated.brd",
      "boardSha256": "7e76fc3e166fd6fc347fcaafdad0c3bd996bc57911bf3be47b621f83c191ade6",
      "sourceBounds": [
        0,
        0,
        15.24,
        27.94
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Rotary_Encoder_Breakout-Illuminated",
      "commit": "340b6eaf4db65f28a62819535cf20a27ea37afab",
      "boardURL": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/Hardware/SparkFun_Rotary_Encoder-Illuminated.brd",
      "schematicURL": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/Hardware/SparkFun_Rotary_Encoder-Illuminated.sch",
      "schematicSha256": "7b38c053da5b86860700c2697acbba6530e18bd18d1e6908ffa20110e3f0f291",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Rotary_Encoder_Breakout-Illuminated/blob/340b6eaf4db65f28a62819535cf20a27ea37afab/LICENSE.md",
      "sourceArchiveSha256": "782316c277c884582fa4113e3489e351bf4755784b99fb6bfc8cc1de0a6f526b",
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
      },
      "optionalAssemblyReview": {
        "refs": [
          "SW1",
          "U1"
        ],
        "scope": "Manufacturer primary product photo and exact board-only product variant; user-fitted device/control footprint is a ghost outline, not an asserted populated component. Assembly lands are not separate external wiring ports."
      }
    }
  },
  "sparkfun-module-sen12041": {
    "contacts": [
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "PAD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PAD. Physical source contact JP5.1.",
        "x": 10.16,
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
        "id": "jp6-4",
        "number": "JP6.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.4.",
        "x": 3.81,
        "y": 10.24,
        "size": [
          1,
          3
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp6-3",
        "number": "JP6.3",
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP6.3.",
        "x": 1.27,
        "y": 10.24,
        "size": [
          1,
          3
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP6.2.",
        "x": -1.27,
        "y": 10.24,
        "size": [
          1,
          3
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "LED",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LED. Physical source contact JP6.1.",
        "x": -3.81,
        "y": 10.24,
        "size": [
          1,
          3
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp9-p-1",
        "number": "JP9.P$1",
        "label": "PAD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PAD. Physical source contact JP9.P$1.",
        "x": 10.16,
        "y": -3.81,
        "size": [
          2,
          1.5
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.1.",
        "x": 10.16,
        "y": 9.7028,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP8",
        "back": false,
        "smd": true
      },
      {
        "id": "jp8-2",
        "number": "JP8.2",
        "label": "SYNC/MODE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$3. Physical source contact JP8.2.",
        "x": 10.16,
        "y": 8.89,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP8",
        "back": false,
        "smd": true
      },
      {
        "id": "jp8-3",
        "number": "JP8.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP8.3.",
        "x": 10.16,
        "y": 8.0772,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP8",
        "back": false,
        "smd": true
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP7.1.",
        "x": -7.874,
        "y": 8.2296,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": false,
        "smd": true
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "LED",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LED. Physical source contact JP7.2.",
        "x": -7.874,
        "y": 9.0424,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 3.81,
        "y": 13.081,
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
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact J1.2.",
        "x": 1.27,
        "y": 13.081,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J1.3.",
        "x": -1.27,
        "y": 13.081,
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
        "label": "LED",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LED. Physical source contact J1.4.",
        "x": -3.81,
        "y": 13.081,
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
    "artwork": "<rect x=\"-5.08\" y=\"13.99\" width=\"10.16\" height=\"8.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"11.811\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.89\" y=\"-7.62\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.144\" y=\"7.366\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.89\" y=\"7.5184\" width=\"2.032\" height=\"2.2352\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.284\" y=\"3.826\" width=\"2.2172\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.5664\" y=\"0.57\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"2.121\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.728\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.642\" y=\"3.073\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.592\" y=\"5.613\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.931\" y=\"9.804\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.55\" y=\"5.232\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "AT42QT1010_Capacitive_Touch_Breakout.brd",
      "boardSha256": "920fd56cd362af6937b759443145304b1f7d672f41a0ae65608be4ab020328de",
      "sourceBounds": [
        0,
        0,
        25.4,
        33.02
      ],
      "selectedConnectors": [
        "JP5",
        "JP6",
        "JP9",
        "JP8",
        "JP7",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/AT42QT1010_Capacitive_Touch_Breakout",
      "commit": "333b46787981af4b0e9b28c46165f292fdfa80b6",
      "boardURL": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/Hardware/AT42QT1010_Capacitive_Touch_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/Hardware/AT42QT1010_Capacitive_Touch_Breakout.sch",
      "schematicSha256": "cecc28de1b59ddb7130a3d9ea6d15ac48db5f7689b597089ca104239b5d9c63e",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/AT42QT1010_Capacitive_Touch_Breakout/blob/333b46787981af4b0e9b28c46165f292fdfa80b6/LICENSE.md",
      "sourceArchiveSha256": "6a7bc3f6653c62fec7391a8656192643df429c0017ec289ef0cddfb5ed4cb802",
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
  "sparkfun-module-bob13884": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "R1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: R1. Physical source contact J2.1.",
        "x": 10.16,
        "y": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.2.",
        "x": 10.16,
        "y": -8.89,
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
        "label": "G1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: G1. Physical source contact J2.3.",
        "x": 10.16,
        "y": -11.43,
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
        "label": "B1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1. Physical source contact J2.4.",
        "x": 10.16,
        "y": -13.97,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "R2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: R2. Physical source contact J3.1.",
        "x": 10.16,
        "y": 3.81,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.2.",
        "x": 10.16,
        "y": 1.27,
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
        "label": "G2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: G2. Physical source contact J3.3.",
        "x": 10.16,
        "y": -1.27,
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
        "label": "B2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B2. Physical source contact J3.4.",
        "x": 10.16,
        "y": -3.81,
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
        "label": "R3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: R3. Physical source contact J4.1.",
        "x": 10.16,
        "y": 13.97,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.2.",
        "x": 10.16,
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
        "label": "G3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: G3. Physical source contact J4.3.",
        "x": 10.16,
        "y": 8.89,
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
        "label": "B3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B3. Physical source contact J4.4.",
        "x": 10.16,
        "y": 6.35,
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
        "x": -10.16,
        "y": 8.89,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J1.2.",
        "x": -10.16,
        "y": 6.35,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": -10.16,
        "y": 3.81,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": -10.16,
        "y": 1.27,
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
        "label": "EN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EN. Physical source contact J1.5.",
        "x": -10.16,
        "y": -1.27,
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
        "label": "INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT. Physical source contact J1.6.",
        "x": -10.16,
        "y": -3.81,
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
        "label": "TRIG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRIG. Physical source contact J1.7.",
        "x": -10.16,
        "y": -6.35,
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
        "label": "VOUT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VOUT. Physical source contact J1.8.",
        "x": -10.16,
        "y": -8.89,
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
    "artwork": "<rect x=\"2.58\" y=\"-2.5\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.58\" y=\"7.66\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.58\" y=\"-12.66\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.27\" y=\"-2.0\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.766\" y=\"-3.277\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.089\" y=\"8.026\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.087\" y=\"2.108\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.483\" y=\"8.026\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"8.026\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.435\" y=\"8.026\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.007\" y=\"8.026\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.42\" y=\"-5.639\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.118\" y=\"-5.639\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.826\" y=\"11.43\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.27\" y=\"-12.954\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.27\" y=\"-12.954\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "LP55231_breakout.brd",
      "boardSha256": "db51e5a97b85f7a35ce05a0a643947c9fce55d971f02a17c3887a7f39d8ca5dc",
      "sourceBounds": [
        0,
        0,
        22.86,
        30.48
      ],
      "selectedConnectors": [
        "J2",
        "J3",
        "J4",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/LP55231_Breakout",
      "commit": "22344d31a03233e4ea5ad2a805c65f5a140c4dda",
      "boardURL": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/Hardware/LP55231_breakout.brd",
      "schematicURL": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/Hardware/LP55231_breakout.sch",
      "schematicSha256": "9d82f293acca684527aa6fe1bdd530d6672c6846242196f91b0c2c1a4d337c15",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/LP55231_Breakout/blob/22344d31a03233e4ea5ad2a805c65f5a140c4dda/LICENSE.md",
      "sourceArchiveSha256": "dbe9c17901a3e396b82be52f464ca919c64ef5c95fcaab4bfbf0e877cb067f19",
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
  "sparkfun-module-bob15931": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 7.62,
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
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
        "x": 7.62,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": 7.62,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -7.62,
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
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": -7.62,
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
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": -7.62,
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
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": -7.62,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.1.",
        "x": 2.54,
        "y": 11.43,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.2.",
        "x": 0,
        "y": 11.43,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.3.",
        "x": -2.54,
        "y": 11.43,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.4.",
        "x": -5.08,
        "y": 11.43,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -9.2964,
        "y": 5.715,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "ADR0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR0. Physical source contact JP1.2.",
        "x": -8.4836,
        "y": 5.715,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "SCL_PU1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_PU1. I2C serial clock / source-listed alternate function. Physical source contact JP3.1.",
        "x": 10.922,
        "y": 6.858,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.2.",
        "x": 10.922,
        "y": 7.874,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "SDA_PU1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_PU1. I2C serial data / source-listed alternate function. Physical source contact JP3.3.",
        "x": 10.922,
        "y": 8.89,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J7.1.",
        "x": -1.27,
        "y": -2.54,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J7.2.",
        "x": 1.27,
        "y": -2.54,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J7.3.",
        "x": -1.27,
        "y": -5.08,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J7.4.",
        "x": 1.27,
        "y": -5.08,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J7.5.",
        "x": -1.27,
        "y": -7.62,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J7.6.",
        "x": 1.27,
        "y": -7.62,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J5.1.",
        "x": 5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.1.",
        "x": -9.2964,
        "y": 7.62,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "ADR1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR1. Physical source contact JP4.2.",
        "x": -8.4836,
        "y": 7.62,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": -9.2964,
        "y": 9.525,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": true,
        "smd": true
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "ADR2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR2. Physical source contact JP5.2.",
        "x": -8.4836,
        "y": 9.525,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": true,
        "smd": true
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.1.",
        "x": -9.2964,
        "y": 11.43,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": true,
        "smd": true
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "ADR3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR3. Physical source contact JP7.2.",
        "x": -8.4836,
        "y": 11.43,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.509\" y=\"-11.08\" width=\"14.509\" height=\"12.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.6228\" y=\"4.4037\" width=\"9.2456\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.906\" y=\"6.1468\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.04875\" y=\"6.50875\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"8.458\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"6.553\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.804\" y=\"-5.512\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"4.648\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.246\" y=\"8.458\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.516\" y=\"-5.512\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"7.6708\" y=\"2.794\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_Button.brd",
      "boardSha256": "c2783580884e2a6cfbae09d2224165c3b5d5da435c00d818f0dd3c50dadfbce4",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J2",
        "J3",
        "J1",
        "JP1",
        "JP3",
        "J7",
        "J5",
        "JP4",
        "JP5",
        "JP7"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Button",
      "commit": "e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359",
      "boardURL": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/Hardware/Qwiic_Button.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/Hardware/Qwiic_Button.sch",
      "schematicSha256": "25bc8fdd93d1510385b9621aece5b182ba709d6c7d31f36d6d3152237e1ecb0d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Button/blob/e89a82fe2ddb293bfe0d6d9f63ccf4782a77c359/LICENSE.md",
      "sourceArchiveSha256": "200fc40a59b742f58b415e0e54cef9968073acdd3bd237d5cf9f3404897fed57",
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
  "sparkfun-module-bob10616": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -20.955,
        "y": 12.065,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.2.",
        "x": -20.955,
        "y": 9.525,
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
        "label": "OUT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT0. Physical source contact JP1.3.",
        "x": -20.955,
        "y": 6.985,
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
        "x": -9.779,
        "y": 12.065,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.2.",
        "x": -9.779,
        "y": 9.525,
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
        "label": "OUT4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT4. Physical source contact JP2.3.",
        "x": -9.779,
        "y": 6.985,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.1.",
        "x": 1.397,
        "y": 12.065,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.2.",
        "x": 1.397,
        "y": 9.525,
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
        "label": "OUT8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT8. Physical source contact JP3.3.",
        "x": 1.397,
        "y": 6.985,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.1.",
        "x": 12.573,
        "y": 12.065,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP4.2.",
        "x": 12.573,
        "y": 9.525,
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
        "label": "OUT12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT12. Physical source contact JP4.3.",
        "x": 12.573,
        "y": 6.985,
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
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": -18.161,
        "y": 12.065,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP5.2.",
        "x": -18.161,
        "y": 9.525,
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
        "label": "OUT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT1. Physical source contact JP5.3.",
        "x": -18.161,
        "y": 6.985,
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
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.1.",
        "x": -6.985,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP6.2.",
        "x": -6.985,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp6-3",
        "number": "JP6.3",
        "label": "OUT5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT5. Physical source contact JP6.3.",
        "x": -6.985,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.1.",
        "x": 4.191,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP7.2.",
        "x": 4.191,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp7-3",
        "number": "JP7.3",
        "label": "OUT9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT9. Physical source contact JP7.3.",
        "x": 4.191,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.1.",
        "x": 15.367,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-2",
        "number": "JP8.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP8.2.",
        "x": 15.367,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-3",
        "number": "JP8.3",
        "label": "OUT13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT13. Physical source contact JP8.3.",
        "x": 15.367,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP9.1.",
        "x": -15.367,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp9-2",
        "number": "JP9.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP9.2.",
        "x": -15.367,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp9-3",
        "number": "JP9.3",
        "label": "OUT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT2. Physical source contact JP9.3.",
        "x": -15.367,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp10-1",
        "number": "JP10.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP10.1.",
        "x": -4.191,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP10",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp10-2",
        "number": "JP10.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP10.2.",
        "x": -4.191,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP10",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp10-3",
        "number": "JP10.3",
        "label": "OUT6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT6. Physical source contact JP10.3.",
        "x": -4.191,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP10",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp11-1",
        "number": "JP11.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP11.1.",
        "x": 6.985,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP11",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp11-2",
        "number": "JP11.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP11.2.",
        "x": 6.985,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP11",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp11-3",
        "number": "JP11.3",
        "label": "OUT10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT10. Physical source contact JP11.3.",
        "x": 6.985,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP11",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp12-1",
        "number": "JP12.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP12.1.",
        "x": 18.161,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP12",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp12-2",
        "number": "JP12.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP12.2.",
        "x": 18.161,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP12",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp12-3",
        "number": "JP12.3",
        "label": "OUT14",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT14. Physical source contact JP12.3.",
        "x": 18.161,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP12",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp13-1",
        "number": "JP13.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP13.1.",
        "x": -12.573,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP13",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp13-2",
        "number": "JP13.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP13.2.",
        "x": -12.573,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP13",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp13-3",
        "number": "JP13.3",
        "label": "OUT3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT3. Physical source contact JP13.3.",
        "x": -12.573,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP13",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp14-1",
        "number": "JP14.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP14.1.",
        "x": -1.397,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP14",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp14-2",
        "number": "JP14.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP14.2.",
        "x": -1.397,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP14",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp14-3",
        "number": "JP14.3",
        "label": "OUT7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT7. Physical source contact JP14.3.",
        "x": -1.397,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP14",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp15-1",
        "number": "JP15.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP15.1.",
        "x": 9.779,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp15-2",
        "number": "JP15.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP15.2.",
        "x": 9.779,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp15-3",
        "number": "JP15.3",
        "label": "OUT11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT11. Physical source contact JP15.3.",
        "x": 9.779,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp16-1",
        "number": "JP16.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP16.1.",
        "x": 20.955,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP16",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp16-2",
        "number": "JP16.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP16.2.",
        "x": 20.955,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP16",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp16-3",
        "number": "JP16.3",
        "label": "OUT15",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT15. Physical source contact JP16.3.",
        "x": 20.955,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP16",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp19-1",
        "number": "JP19.1",
        "label": "VPRG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VPRG. Physical source contact JP19.1.",
        "x": -28.575,
        "y": -8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP19",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp19-2",
        "number": "JP19.2",
        "label": "XERR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XERR. Physical source contact JP19.2.",
        "x": -28.575,
        "y": -5.715,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP19",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp20-1",
        "number": "JP20.1",
        "label": "VPRG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VPRG. Physical source contact JP20.1.",
        "x": 28.575,
        "y": -8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP20",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp20-2",
        "number": "JP20.2",
        "label": "XERR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XERR. Physical source contact JP20.2.",
        "x": 28.575,
        "y": -5.715,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP20",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-1",
        "number": "JP22.1",
        "label": "GSCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GSCLK. Physical source contact JP22.1.",
        "x": -28.575,
        "y": -3.175,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-2",
        "number": "JP22.2",
        "label": "XLAT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XLAT. Physical source contact JP22.2.",
        "x": -28.575,
        "y": -0.635,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-3",
        "number": "JP22.3",
        "label": "BLANK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BLANK. Physical source contact JP22.3.",
        "x": -28.575,
        "y": 1.905,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-4",
        "number": "JP22.4",
        "label": "SIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIN. Physical source contact JP22.4.",
        "x": -28.575,
        "y": 4.445,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-5",
        "number": "JP22.5",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact JP22.5.",
        "x": -28.575,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-6",
        "number": "JP22.6",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP22.6.",
        "x": -28.575,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp22-7",
        "number": "JP22.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP22.7.",
        "x": -28.575,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP22",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-1",
        "number": "JP23.1",
        "label": "GSCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GSCLK. Physical source contact JP23.1.",
        "x": 28.575,
        "y": -3.175,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-2",
        "number": "JP23.2",
        "label": "XLAT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XLAT. Physical source contact JP23.2.",
        "x": 28.575,
        "y": -0.635,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-3",
        "number": "JP23.3",
        "label": "BLANK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BLANK. Physical source contact JP23.3.",
        "x": 28.575,
        "y": 1.905,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-4",
        "number": "JP23.4",
        "label": "SOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SOUT. Physical source contact JP23.4.",
        "x": 28.575,
        "y": 4.445,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-5",
        "number": "JP23.5",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact JP23.5.",
        "x": 28.575,
        "y": 6.985,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-6",
        "number": "JP23.6",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP23.6.",
        "x": 28.575,
        "y": 9.525,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp23-7",
        "number": "JP23.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP23.7.",
        "x": 28.575,
        "y": 12.065,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP23",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"27.305\" y=\"-4.445\" width=\"2.54\" height=\"17.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.845\" y=\"-4.445\" width=\"2.54\" height=\"17.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.135\" y=\"-6.945\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.509\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.715\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.921\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.685\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.891\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.097\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.303\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.431\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.637\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.127\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.255\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.461\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.225\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.667\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.843\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.049\" y=\"5.715\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.005\" y=\"-12.125\" width=\"3.15\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.350759\" y=\"-12.146281\" width=\"5.588\" height=\"2.54\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.305\" y=\"-9.525\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.845\" y=\"-9.525\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.515\" y=\"-12.025\" width=\"2.4\" height=\"5.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.7146\" y=\"-10.9474\" width=\"1.6104\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.743\" y=\"-10.389\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.912759\" y=\"-11.308281\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.1454\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.58\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.786\" y=\"0.5838\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.36\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.566\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.772\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.155\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.615\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.948\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.154\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.978\" y=\"0.6092\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.404\" y=\"0.5838\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.61\" y=\"0.5838\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.992\" y=\"0.5838\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.198\" y=\"0.5838\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.816\" y=\"0.6346\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-13.081\" y=\"-2.9845\" width=\"2.032\" height=\"2.159\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_TLC5940_Breakout.brd",
      "boardSha256": "cc2d5f1c0f6d4971ff1d49f85919ce8b7f1205915b05bd88d867b6457ada6749",
      "sourceBounds": [
        0,
        0,
        59.69,
        26.67
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "JP3",
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
        "JP14",
        "JP15",
        "JP16",
        "JP19",
        "JP20",
        "JP22",
        "JP23"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/LED_Driver_Breakout-TLC5940",
      "commit": "52c035a3753d4f301d2620337d949fd105a381ee",
      "boardURL": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/Hardware/SparkFun_TLC5940_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/Hardware/SparkFun_TLC5940_Breakout.sch",
      "schematicSha256": "d9214ee7d6014359b30edd677128ea11ce3393d8b8b17c916590ef99f0185d5b",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/LED_Driver_Breakout-TLC5940/blob/52c035a3753d4f301d2620337d949fd105a381ee/LICENSE.md",
      "sourceArchiveSha256": "d8d26b90e63b6169daa78bc59614e38145518e79e8f80c1ae2568508ddf13d5c",
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
  "sparkfun-module-com16916": {
    "contacts": [
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": 8.89,
        "y": 3.81,
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
        "x": 8.89,
        "y": 1.27,
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
        "x": 8.89,
        "y": -1.27,
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
        "x": 8.89,
        "y": -3.81,
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
        "x": -18.91,
        "y": -5.923,
        "size": [
          1.55,
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
        "x": -18.91,
        "y": -4.923,
        "size": [
          1.55,
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
        "x": -18.91,
        "y": -3.923,
        "size": [
          1.55,
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
        "x": -18.91,
        "y": -2.923,
        "size": [
          1.55,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J5.1.",
        "x": 18.656,
        "y": 5.923,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J5.2.",
        "x": 18.656,
        "y": 4.923,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J5.3.",
        "x": 18.656,
        "y": 3.923,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J5.4.",
        "x": 18.656,
        "y": 2.923,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.97\" y=\"-3.75\" width=\"15.4\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.025\" y=\"-7.747\" width=\"3.21\" height=\"6.628\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.561\" y=\"1.119\" width=\"3.21\" height=\"6.628\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.915\" y=\"2.31\" width=\"2.8929\" height=\"3.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.3764\" y=\"-7.493\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.3764\" y=\"-4.953\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.405\" y=\"2.537\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.134\" y=\"-1.006\" width=\"2.67\" height=\"1.25\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.68\" y=\"-3.404\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.932\" y=\"-5.639\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.932\" y=\"-2.972\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.358\" y=\"1.219\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.849\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.693\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.66\" y=\"5.719\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.883\" y=\"6.227\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-19.982\" y=\"-7.983\" width=\"40.0\" height=\"16.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_Alphanumeric_Display.brd",
      "boardSha256": "b64c170669f4e289a9341475c9d0f37348bf9df369db651e4749bfc86ad7963d",
      "sourceBounds": [
        0,
        0,
        40.64,
        27.94
      ],
      "selectedConnectors": [
        "J3",
        "J4",
        "J5"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Alphanumeric_Display_Breakout",
      "commit": "93e6d110892d22604cbe8f278291b2ed05fefd52",
      "boardURL": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/Hardware/Qwiic_Alphanumeric_Display.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/Hardware/Qwiic_Alphanumeric_Display.sch",
      "schematicSha256": "0b91b06f16c795250a84e45014f2aea38e8381edc4afc8850cbf746ebae0001d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Alphanumeric_Display_Breakout/blob/93e6d110892d22604cbe8f278291b2ed05fefd52/LICENSE.md",
      "sourceArchiveSha256": "8586981f96b73fa5c4247ab9af5eca53a96b4941c1660f68d8fab67b163e904c",
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
  "sparkfun-module-lcd23453": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 1.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J1.2.",
        "x": 0.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
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
        "x": -0.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
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
        "x": -1.5,
        "y": -7.62,
        "size": [
          0.6,
          1.35
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
        "x": -1.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J2.2.",
        "x": -0.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
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
        "x": 0.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
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
        "x": 1.5,
        "y": 7.62,
        "size": [
          0.6,
          1.35
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
        "x": 16.51,
        "y": -3.81,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J3.2.",
        "x": 16.51,
        "y": -6.35,
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
        "x": 16.51,
        "y": -8.89,
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
        "x": 16.51,
        "y": -11.43,
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
    "artwork": "<rect x=\"-3.0\" y=\"-12.22\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"7.97\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7272\" y=\"-6.096\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1176\" y=\"-2.286\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.864\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.026\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.436\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.785\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.147\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.594\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.956\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.458\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.807\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.156\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.359\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.292\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-17.25\" y=\"2.66\" width=\"34.5\" height=\"35.15\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_OLED_1.3in.brd",
      "boardSha256": "2b544b4274e4b7049abdd823f1da822f5be284a95bf99d95a5b649739f2ac72f",
      "sourceBounds": [
        0,
        -5.715,
        35.56,
        31.115
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Qwiic_OLED_1.3in",
      "commit": "fe1cef157c993c8265288fbccf211043df3708be",
      "boardURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/Hardware/Qwiic_OLED_1.3in.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/Hardware/Qwiic_OLED_1.3in.sch",
      "schematicSha256": "cc99dd3fe23c88a3bf097a21e986d807953843935962e729da82e7bc1351fbc5",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED_1.3in/blob/fe1cef157c993c8265288fbccf211043df3708be/License.md",
      "sourceArchiveSha256": "61603e80bf6c90e0b62fcb990634aa45f100fd83a7f34a3ea9786c0b7c9f09cd",
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
  "sparkfun-module-lcd22495": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 1.5,
        "y": -5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J1.2.",
        "x": 0.5,
        "y": -5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "D1/SDA/PICO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1/SDA/PICO. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": -0.5,
        "y": -5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "D0/SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0/SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": -1.5,
        "y": -5.08,
        "size": [
          0.6,
          1.35
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
        "x": -1.5,
        "y": 5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J2.2.",
        "x": -0.5,
        "y": 5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "D1/SDA/PICO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1/SDA/PICO. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": 0.5,
        "y": 5.08,
        "size": [
          0.6,
          1.35
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "D0/SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0/SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 1.5,
        "y": 5.08,
        "size": [
          0.6,
          1.35
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
        "x": 8.89,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J4.2.",
        "x": 8.89,
        "y": -3.81,
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
        "label": "D1/SDA/PICO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1/SDA/PICO. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": 8.89,
        "y": -6.35,
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
        "label": "D0/SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0/SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": 8.89,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-3.0\" y=\"5.43\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"-9.68\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.699\" y=\"-3.556\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4224\" y=\"-3.556\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.042\" y=\"0.94\" width=\"1.574\" height=\"1.93\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.026\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.864\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.648\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.743\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.851\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.054\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.877\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.23\" y=\"-10.152\" width=\"18.505\" height=\"20.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_OLED_Breakout.brd",
      "boardSha256": "8328f8dc53a1cc0501968341a3cf96b779ce1e11d0e3cb69655dda4888c33451",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Micro_OLED",
      "commit": "c3ee0d437bd69ed8c1e5bce32e425c81365d2e21",
      "boardURL": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/Hardware/Qwiic_OLED_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/Hardware/Qwiic_OLED_Breakout.sch",
      "schematicSha256": "c88909cd17a131c820f016075bf8ef047f0723c099f6d52c1805d9abb9f99edb",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Micro_OLED/blob/c3ee0d437bd69ed8c1e5bce32e425c81365d2e21/LICENSE.md",
      "sourceArchiveSha256": "3ca1e97e8e7e11d9671475f4a91bf5bc48b0343dbfb72ea0180818f81a285a85",
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
  "sparkfun-module-lcd24606": {
    "contacts": [
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -17.901,
        "y": 1.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J3.2.",
        "x": -17.901,
        "y": 2.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": -17.901,
        "y": 3.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": -17.901,
        "y": 4.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 17.939,
        "y": 4.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": 17.939,
        "y": 3.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J1.3.",
        "x": 17.939,
        "y": 2.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J1.4.",
        "x": 17.939,
        "y": 1.047,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-1",
        "number": "TP1.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact TP1.1.",
        "x": -10.776,
        "y": 0.007,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-1",
        "number": "TP2.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact TP2.1.",
        "x": -10.776,
        "y": -2.533,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-1",
        "number": "TP3.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact TP3.1.",
        "x": -10.776,
        "y": 2.547,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-1",
        "number": "TP4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP4.1.",
        "x": -10.776,
        "y": 5.087,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-16.237\" y=\"-6.032\" width=\"32.6\" height=\"11.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-21.063\" y=\"-0.753\" width=\"3.302\" height=\"6.6\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.799\" y=\"-0.753\" width=\"3.302\" height=\"6.6\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.5468\" y=\"0.261\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.0416\" y=\"2.1406\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.108\" y=\"-4.476\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.108\" y=\"-2.965\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.108\" y=\"-1.428\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.728\" y=\"-3.219\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.108\" y=\"4.795\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.108\" y=\"0.083\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.728\" y=\"4.782\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.728\" y=\"3.258\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.728\" y=\"1.747\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.728\" y=\"-1.695\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "OLED Display.brd",
      "boardSha256": "171e6db3056cdedef674e19bd9a3fe9e75de477c2c5ab74cd0d62dd9f87521cd",
      "sourceBounds": [
        0,
        0,
        44.412,
        12.714
      ],
      "selectedConnectors": [
        "J3",
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Qwiic_OLED-0.91",
      "commit": "270ccc6685ca933dee99031f7079327c7b601f08",
      "boardURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/Hardware/OLED%20Display.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/Hardware/OLED%20Display.sch",
      "schematicSha256": "35d36219a073bc424a793a9e3353203fc4a06f97dffb85ed21b31d1d909f113a",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Qwiic_OLED-0.91/blob/270ccc6685ca933dee99031f7079327c7b601f08/LICENSE.md",
      "sourceArchiveSha256": "c3536d867bb6ea1d8fa132f5350a3eca21c0bbbe903ae076c2dd0ecc74cf50e5",
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
  "sparkfun-module-lcd13003": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP2.1.",
        "x": -8.89,
        "y": 8.89,
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
        "label": "WR/RW",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WR/RW. Physical source contact JP2.2.",
        "x": -6.35,
        "y": 8.89,
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
        "label": "RD/E",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RD/E. Physical source contact JP2.3.",
        "x": -3.81,
        "y": 8.89,
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
        "label": "D3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D3. Physical source contact JP2.4.",
        "x": -1.27,
        "y": 8.89,
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
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP2.5.",
        "x": 1.27,
        "y": 8.89,
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
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP2.6.",
        "x": 3.81,
        "y": 8.89,
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
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP2.7.",
        "x": 6.35,
        "y": 8.89,
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
        "label": "D7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D7. Physical source contact JP2.8.",
        "x": 8.89,
        "y": 8.89,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 8.89,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.2.",
        "x": 6.35,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "D1/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1/MOSI. Physical source contact JP1.3.",
        "x": 3.81,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "D0/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0/SCK. Physical source contact JP1.4.",
        "x": 1.27,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "D2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D2. Physical source contact JP1.5.",
        "x": -1.27,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "D/C",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D/C. Physical source contact JP1.6.",
        "x": -3.81,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact JP1.7.",
        "x": -6.35,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP1.8.",
        "x": -8.89,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact TP1.P$1.",
        "x": 7.62,
        "y": -1.27,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact TP2.P$1.",
        "x": 7.62,
        "y": -1.27,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "",
    "backArtwork": "<rect x=\"-2.286\" y=\"-4.064\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.906\" y=\"-4.064\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.096\" y=\"-4.064\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.54\" y=\"-3.54\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.563\" y=\"1.575\" width=\"1.574\" height=\"1.93\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.29\" y=\"2.24\" width=\"1.2\" height=\"0.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.49\" y=\"2.24\" width=\"1.2\" height=\"0.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.95\" y=\"2.24\" width=\"1.2\" height=\"0.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.838\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.391\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.229\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.689\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Micro-OLED_Breakout.brd",
      "boardSha256": "6665f3ec2e32420860d3fa23a59f6569055154653c0f312aea78b01b173e9ddc",
      "sourceBounds": [
        -10.16,
        -10.16,
        10.16,
        10.16
      ],
      "selectedConnectors": [
        "JP2",
        "JP1",
        "TP1",
        "TP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Micro_OLED_Breakout",
      "commit": "c7dd8939c905110a473beadf4ffc893d9c7b9ea2",
      "boardURL": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/Hardware/SparkFun_Micro-OLED_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/Hardware/SparkFun_Micro-OLED_Breakout.sch",
      "schematicSha256": "d75a15b3daf001565d97bb45456675fdcea23a1e2603906cb37026b24c89fb7b",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/Micro_OLED_Breakout/blob/c7dd8939c905110a473beadf4ffc893d9c7b9ea2/README.md",
      "sourceArchiveSha256": "da5f3ae1ac7907cb6e9e6b685ae99d973610e2af7a4963512baaa70fcc084ec2",
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
  "sparkfun-module-dev15083": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": -10.16,
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
        "x": -10.16,
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
        "x": -10.16,
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
        "x": -10.16,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -6.35,
        "y": 11.43,
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
        "x": -3.81,
        "y": 11.43,
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
        "x": -1.27,
        "y": 11.43,
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
        "x": 1.27,
        "y": 11.43,
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
        "x": 10.16,
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
        "x": 10.16,
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
        "x": 10.16,
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
        "x": 10.16,
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
        "x": 3.81,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j10-1",
        "number": "J10.1",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J10.1.",
        "x": 6.35,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.1.",
        "x": 13.1064,
        "y": -5.08,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": true,
        "smd": true
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "ADR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR. Physical source contact JP7.2.",
        "x": 12.2936,
        "y": -5.08,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": true,
        "smd": true
      },
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "SCL_PU1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_PU1. I2C serial clock / source-listed alternate function. Physical source contact JP9.1.",
        "x": -10.795,
        "y": 6.35,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": true,
        "smd": true
      },
      {
        "id": "jp9-2",
        "number": "JP9.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP9.2.",
        "x": -11.811,
        "y": 6.35,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": true,
        "smd": true
      },
      {
        "id": "jp9-3",
        "number": "JP9.3",
        "label": "SDA_PU1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_PU1. I2C serial data / source-listed alternate function. Physical source contact JP9.3.",
        "x": -12.827,
        "y": 6.35,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "BLUE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BLUE. Physical source contact J7.1.",
        "x": -9.525,
        "y": -11.43,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J7.2.",
        "x": -6.985,
        "y": -11.43,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J7.3.",
        "x": -9.525,
        "y": -8.89,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J7.4.",
        "x": -6.985,
        "y": -8.89,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J7.5.",
        "x": -9.525,
        "y": -6.35,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J7.6.",
        "x": -6.985,
        "y": -6.35,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.508
      }
    ],
    "artwork": "<rect x=\"-4.6228\" y=\"-1.9463\" width=\"9.2456\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.51\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.76\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.1125\" y=\"5.87375\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"7.442\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"4.407\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"5.283\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.217\" y=\"4.407\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.243\" y=\"-5.817\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.767\" y=\"-5.817\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"-8.306\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.28\" y=\"-5.245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.563\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.166\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"5.283\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"5.105\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.767\" y=\"5.105\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.7\" y=\"-6.2\" width=\"13.4\" height=\"12.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.5382\" y=\"5.334\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.4808\" y=\"5.334\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.5824\" y=\"-6.096\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic Twist.brd",
      "boardSha256": "dfed45e9931decad58f1f23342074318c8881930a878545e39d298638c7c0551",
      "sourceBounds": [
        0,
        0,
        30.48,
        25.4
      ],
      "selectedConnectors": [
        "J2",
        "J3",
        "J4",
        "J5",
        "J10",
        "JP7",
        "JP9",
        "J7"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Twist",
      "commit": "f9bbde3fad9b549a7cbdb31b192a003f8ffae182",
      "boardURL": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/Hardware/Qwiic%20Twist.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/Hardware/Qwiic%20Twist.sch",
      "schematicSha256": "2afd89dd49a475c41da70d2f1560173acd1cf91c5db2c142bdde63b15516a1d7",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Twist/blob/f9bbde3fad9b549a7cbdb31b192a003f8ffae182/License.md",
      "sourceArchiveSha256": "e4367ce7480b5aafae0e822733e358a7393376f60ad7edf905debee0b928845f",
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
  "sparkfun-module-com15290": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 7.62,
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
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J2.2.",
        "x": 7.62,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": 7.62,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": 6.35,
        "y": -11.43,
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
        "x": 3.81,
        "y": -11.43,
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
        "y": -11.43,
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
        "x": -1.27,
        "y": -11.43,
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
        "x": -7.62,
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
        "id": "j4-2",
        "number": "J4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J4.2.",
        "x": -7.62,
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
        "id": "j4-3",
        "number": "J4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J4.3.",
        "x": -7.62,
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
        "id": "j4-4",
        "number": "J4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J4.4.",
        "x": -7.62,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact J1.1.",
        "x": -3.81,
        "y": -11.43,
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
        "id": "j6-1",
        "number": "J6.1",
        "label": "MISO/6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO/6. Physical source contact J6.1.",
        "x": 2.54,
        "y": 5.08,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J6.2.",
        "x": 2.54,
        "y": 7.62,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact J6.3.",
        "x": 0,
        "y": 5.08,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact J6.4.",
        "x": 0,
        "y": 7.62,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-5",
        "number": "J6.5",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J6.5.",
        "x": -2.54,
        "y": 5.08,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j6-6",
        "number": "J6.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.6.",
        "x": -2.54,
        "y": 7.62,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J5.1.",
        "x": -6.35,
        "y": -11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.1.",
        "x": -10.5664,
        "y": -5.08,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "ADD1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADD1. Physical source contact JP4.2.",
        "x": -9.7536,
        "y": -5.08,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "1",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 1. Physical source contact J8.1.",
        "x": 7.62,
        "y": 11.557,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "2",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 2. Physical source contact J8.2.",
        "x": 5.08,
        "y": 11.303,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-3",
        "number": "J8.3",
        "label": "3",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3. Physical source contact J8.3.",
        "x": 2.54,
        "y": 11.557,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-4",
        "number": "J8.4",
        "label": "4",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 4. Physical source contact J8.4.",
        "x": 0,
        "y": 11.303,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-5",
        "number": "J8.5",
        "label": "5",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5. Physical source contact J8.5.",
        "x": -2.54,
        "y": 11.557,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-6",
        "number": "J8.6",
        "label": "MISO/6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO/6. Physical source contact J8.6.",
        "x": -5.08,
        "y": 11.303,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-7",
        "number": "J8.7",
        "label": "7",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 7. Physical source contact J8.7.",
        "x": -7.62,
        "y": 11.557,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-5.2578\" y=\"-1.9463\" width=\"9.2456\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.6172\" y=\"5.334\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.2776\" y=\"-6.096\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.3025\" y=\"6.12775\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"4.661\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.769\" y=\"5.994\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.849\" y=\"5.994\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.661\" y=\"0.914\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.981337\" y=\"-5.499\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-5.512\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_keypad.brd",
      "boardSha256": "ad7f6dc556e79fc8fadcbb98eaa701368dc0b581de4667a1c269544cf574d71b",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J2",
        "J3",
        "J4",
        "J1",
        "J6",
        "J5",
        "JP4",
        "J8"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Keypad",
      "commit": "3c219d96fedc362823868bff1757e3e6ec07d017",
      "boardURL": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/Hardware/Qwiic_keypad.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/Hardware/Qwiic_keypad.sch",
      "schematicSha256": "c0062316e6e891d2898415903194570a32907a6b1789337758201a926f714920",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Keypad/blob/3c219d96fedc362823868bff1757e3e6ec07d017/LICENSE.md",
      "sourceArchiveSha256": "24ef1c3ae9be7fc89e0c09cb42c45f42dc31963fd33a161d69a0e648f63b1532",
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
  "sparkfun-module-bob11570": {
    "contacts": [
      {
        "id": "jp2-tip",
        "number": "JP2.TIP",
        "label": "TIP",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TIP. Physical source contact JP2.TIP.",
        "x": 3.85,
        "y": -7.06,
        "size": [
          1.2,
          2.5
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-earth",
        "number": "JP2.EARTH",
        "label": "SLEEVE",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SLEEVE. Physical source contact JP2.EARTH.",
        "x": 4.95,
        "y": -0.56,
        "size": [
          1.2,
          2.5
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-ring1",
        "number": "JP2.RING1",
        "label": "RING1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RING1. Physical source contact JP2.RING1.",
        "x": -0.15,
        "y": -7.06,
        "size": [
          1.2,
          2.5
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-ring2",
        "number": "JP2.RING2",
        "label": "RING2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RING2. Physical source contact JP2.RING2.",
        "x": -3.15,
        "y": -7.06,
        "size": [
          1.2,
          2.5
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SLEEVE",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SLEEVE. Physical source contact JP1.1.",
        "x": -3.81,
        "y": 7.62,
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
        "label": "RING2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RING2. Physical source contact JP1.2.",
        "x": -1.27,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RING1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RING1. Physical source contact JP1.3.",
        "x": 1.27,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "TIP",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TIP. Physical source contact JP1.4.",
        "x": 3.81,
        "y": 7.62,
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
    "artwork": "<rect x=\"-5.08\" y=\"6.35\" width=\"10.16\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_TRRS_3.5mm_Jack_Breakout.brd",
      "boardSha256": "781c5e099bc9ae86c18defa8f4253c6b429597c6d5196df30e26eec4b24ce2a4",
      "sourceBounds": [
        0,
        0,
        12.7,
        17.78
      ],
      "selectedConnectors": [
        "JP2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP2.TIP passive pass-through verified from schematic endpoints.",
        "JP2.EARTH passive pass-through verified from schematic endpoints.",
        "JP2.RING1 passive pass-through verified from schematic endpoints.",
        "JP2.RING2 passive pass-through verified from schematic endpoints.",
        "JP1.1 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP2.TIP",
          "sourceNet": "TIP",
          "before": {
            "type": "unspecified",
            "label": "TIP"
          },
          "after": {
            "type": "passive",
            "label": "TIP"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP2.EARTH",
          "sourceNet": "SLEEVE",
          "before": {
            "type": "unspecified",
            "label": "SLEEVE"
          },
          "after": {
            "type": "passive",
            "label": "SLEEVE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP2.RING1",
          "sourceNet": "RING1",
          "before": {
            "type": "unspecified",
            "label": "RING1"
          },
          "after": {
            "type": "passive",
            "label": "RING1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP2.RING2",
          "sourceNet": "RING2",
          "before": {
            "type": "unspecified",
            "label": "RING2"
          },
          "after": {
            "type": "passive",
            "label": "RING2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP1.1",
          "sourceNet": "SLEEVE",
          "before": {
            "type": "unspecified",
            "label": "SLEEVE"
          },
          "after": {
            "type": "passive",
            "label": "SLEEVE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "RING2",
          "before": {
            "type": "unspecified",
            "label": "RING2"
          },
          "after": {
            "type": "passive",
            "label": "RING2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "RING1",
          "before": {
            "type": "unspecified",
            "label": "RING1"
          },
          "after": {
            "type": "passive",
            "label": "RING1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        },
        {
          "number": "JP1.4",
          "sourceNet": "TIP",
          "before": {
            "type": "unspecified",
            "label": "TIP"
          },
          "after": {
            "type": "passive",
            "label": "TIP"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/TRRS_3.5mm_Jack_Breakout/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/TRRS_3.5mm_Jack_Breakout",
      "commit": "1e6fa3677d11380108fc276f8680482839ed4603",
      "boardURL": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/Hardware/SparkFun_TRRS_3.5mm_Jack_Breakout.sch",
      "schematicSha256": "24675d1436447f11674819f8ca3cd8772b6c45b56da0d57705acbe5ed6168e46",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/TRRS_3.5mm_Jack_Breakout/blob/1e6fa3677d11380108fc276f8680482839ed4603/LICENSE.md",
      "sourceArchiveSha256": "62f316138ff94e7eb2b0907ee36998ae15f6e1905f3414c978f21c20c0c2117a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP2.TIP: unresolved electrical role on TIP.",
        "JP2.EARTH: unresolved electrical role on SLEEVE.",
        "JP2.RING1: unresolved electrical role on RING1.",
        "JP2.RING2: unresolved electrical role on RING2.",
        "JP1.1: unresolved electrical role on SLEEVE.",
        "JP1.2: unresolved electrical role on RING2.",
        "JP1.3: unresolved electrical role on RING1.",
        "JP1.4: unresolved electrical role on TIP."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP2.TIP: unresolved electrical role on TIP.",
          "JP2.EARTH: unresolved electrical role on SLEEVE.",
          "JP2.RING1: unresolved electrical role on RING1.",
          "JP2.RING2: unresolved electrical role on RING2.",
          "JP1.1: unresolved electrical role on SLEEVE.",
          "JP1.2: unresolved electrical role on RING2.",
          "JP1.3: unresolved electrical role on RING1.",
          "JP1.4: unresolved electrical role on TIP."
        ]
      }
    }
  }
};
