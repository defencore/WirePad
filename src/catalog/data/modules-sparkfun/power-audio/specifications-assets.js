// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-bob19389": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": 5.715,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": 5.715,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "AUD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: AUD. Physical source contact JP1.3.",
        "x": 5.715,
        "y": -2.54,
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
    "artwork": "<rect x=\"-5.965\" y=\"-1.49\" width=\"3.04\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1556\" y=\"-1.0698\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.5434\" y=\"1.2696\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.5434\" y=\"-2.007\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.0572\" y=\"-2.007\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.0296\" y=\"-4.2674\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.229\" y=\"-4.2674\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.229\" y=\"-2.7812\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6672\" y=\"-3.3024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9148\" y=\"2.2734\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd",
      "boardSha256": "109ba7a9ae40dd8649400f1c7b516a9dc7c90544bba68763e4e8434bee8663ea",
      "sourceBounds": [
        0,
        0,
        13.97,
        10.16
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1",
      "commit": "4d01f22a9be9f5e66b14664ec486083617988b34",
      "boardURL": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/Hardware/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/Hardware/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1.sch",
      "schematicSha256": "4a937f10da7eee285e501d4a7507af72124e2abe8ab8c178c4ff7371420dec0d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Analog_MEMS_Microphone_Breakout_SPH8878LR5H-1/blob/4d01f22a9be9f5e66b14664ec486083617988b34/LICENSE.md",
      "sourceArchiveSha256": "12a38efcee09471548e2c8a190c63f436934b1701019d0cf4446e3cda5ac6360",
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
  "sparkfun-module-rob14538": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "OUT-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$6. Physical source contact JP2.1.",
        "x": 8.89,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "OUT+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$7. Physical source contact JP2.2.",
        "x": 8.89,
        "y": 3.81,
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
        "label": "EN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$5. Physical source contact JP1.1.",
        "x": -8.89,
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
        "label": "IN/TRIG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$4. Physical source contact JP1.2.",
        "x": -8.89,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$2. Physical source contact JP1.3.",
        "x": -8.89,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact JP1.4.",
        "x": -8.89,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.5.",
        "x": -8.89,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": -8.89,
        "y": -3.81,
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
    "artwork": "<rect x=\"-10.16\" y=\"-5.08\" width=\"2.54\" height=\"15.24\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.62\" y=\"0.0\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.72875\" y=\"-2.9475\" width=\"3.0\" height=\"2.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.73025\" y=\"2.31775\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.23225\" y=\"3.1365\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6415\" y=\"3.1365\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Haptic_Motor_Driver_DRV2605L_v20.brd",
      "boardSha256": "07a3ee9fad3003569ce7c447a21b3fb19174a5c49214beec30ca40df215db1f2",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "JP2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Haptic_Motor_Driver",
      "commit": "a300e3885810ff5475729ed6713678cf1b613451",
      "boardURL": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Hardware/Haptic_Motor_Driver_DRV2605L_v20.brd",
      "schematicURL": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Hardware/Haptic_Motor_Driver_DRV2605L_v20.sch",
      "schematicSha256": "f7090b8b31a6c0231f8a9f738ee71131d76d8c9c9e15dd2159c974d7a898aeeb",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Haptic_Motor_Driver/blob/a300e3885810ff5475729ed6713678cf1b613451/Libraries/Arduino/LICENSE.md",
      "sourceArchiveSha256": "6da90fc1a16ce7ba7776f532078c78faca765e2e5f20236fd9a1741bdd047285",
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
  "sparkfun-module-bob11083": {
    "contacts": [
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "ANT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ANT. Physical source contact JP5.1.",
        "x": -11.43,
        "y": -5.715,
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
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP1.1.",
        "x": -11.43,
        "y": 5.715,
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
        "label": "GPIO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO1. Physical source contact JP1.2.",
        "x": -8.89,
        "y": 5.715,
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
        "label": "!RST",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RST. Physical source contact JP1.3.",
        "x": -6.35,
        "y": 5.715,
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
        "label": "!SEN",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !SEN. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 5.715,
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
        "label": "SCLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCLK. Physical source contact JP1.5.",
        "x": -1.27,
        "y": 5.715,
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
        "label": "SDIO",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDIO. Physical source contact JP1.6.",
        "x": 1.27,
        "y": 5.715,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.7.",
        "x": 3.81,
        "y": 5.715,
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
        "x": 6.35,
        "y": 5.715,
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
        "label": "ROUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ROUT. Physical source contact JP1.9.",
        "x": 8.89,
        "y": 5.715,
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
        "label": "LOUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LOUT. Physical source contact JP1.10.",
        "x": 11.43,
        "y": 5.715,
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
    "artwork": "<rect x=\"-12.7\" y=\"4.445\" width=\"25.4\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.46\" y=\"-3.555\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"-6.985\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_FM_Tuner_Basic_Breakout.brd",
      "boardSha256": "1cbb646d6d43c423e61958e951e2c602677a09b96471b4d69324985a68b35d53",
      "sourceBounds": [
        0,
        0,
        25.4,
        13.97
      ],
      "selectedConnectors": [
        "JP5",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/FM_Tuner_Basic_Breakout-Si4703",
      "commit": "bd5b348b039c89b253dc2b6c1805658ba16a4a94",
      "boardURL": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/Hardware/SparkFun_FM_Tuner_Basic_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/Hardware/SparkFun_FM_Tuner_Basic_Breakout.sch",
      "schematicSha256": "e6a57599ee191a9cb999a153134c991cf01df789fba499bc2ceb7e26febb4283",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/FM_Tuner_Basic_Breakout-Si4703/blob/bd5b348b039c89b253dc2b6c1805658ba16a4a94/LICENSE.md",
      "sourceArchiveSha256": "3908a2231505a20d15f4f6ddbedae9617ec636b5168e2289f55fa3ab064cfe0f",
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
  "sparkfun-module-bob09540": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "OUT4",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source OUT4 node. The intended user-fitted device is not included. Physical source contact JP1.1.",
        "x": 17.78,
        "y": 10.795,
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
        "label": "IN4",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source IN4 node. The intended user-fitted device is not included. Physical source contact JP1.2.",
        "x": 15.24,
        "y": 10.795,
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
        "label": "IN3",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source IN3 node. The intended user-fitted device is not included. Physical source contact JP1.3.",
        "x": 12.7,
        "y": 10.795,
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
        "label": "CSB",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source CSB node. The intended user-fitted device is not included. Physical source contact JP1.4.",
        "x": 10.16,
        "y": 10.795,
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
        "label": "OUT3",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source OUT3 node. The intended user-fitted device is not included. Physical source contact JP1.5.",
        "x": 7.62,
        "y": 10.795,
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
        "label": "ENB",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source ENB node. The intended user-fitted device is not included. Physical source contact JP1.6.",
        "x": 5.08,
        "y": 10.795,
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
        "label": "VLS",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source VLS node. The intended user-fitted device is not included. Physical source contact JP1.7.",
        "x": 2.54,
        "y": 10.795,
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
        "label": "IN2",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source IN2 node. The intended user-fitted device is not included. Physical source contact JP1.8.",
        "x": 0,
        "y": 10.795,
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
        "label": "IN1",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source IN1 node. The intended user-fitted device is not included. Physical source contact JP1.9.",
        "x": -2.54,
        "y": 10.795,
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
        "label": "OUT2",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source OUT2 node. The intended user-fitted device is not included. Physical source contact JP1.10.",
        "x": -5.08,
        "y": 10.795,
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
        "label": "CSA",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source CSA node. The intended user-fitted device is not included. Physical source contact JP1.11.",
        "x": -7.62,
        "y": 10.795,
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
        "label": "GND",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source GND node. The intended user-fitted device is not included. Physical source contact JP1.12.",
        "x": -10.16,
        "y": 10.795,
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
        "label": "ENA",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source ENA node. The intended user-fitted device is not included. Physical source contact JP1.13.",
        "x": -12.7,
        "y": 10.795,
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
        "label": "VS",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source VS node. The intended user-fitted device is not included. Physical source contact JP1.14.",
        "x": -15.24,
        "y": 10.795,
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
        "label": "OUT1",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source OUT1 node. The intended user-fitted device is not included. Physical source contact JP1.15.",
        "x": -17.78,
        "y": 10.795,
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
    "artwork": "<rect x=\"-19.05\" y=\"9.525\" width=\"38.1\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\" />",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd",
      "boardSha256": "3f56c8a7b6bb1ec172aff8c554bab79a22ff1257a9658f09bb1c8d41c728d681",
      "sourceBounds": [
        0,
        0,
        40.64,
        24.13
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N",
      "commit": "8b81b873540e59a232a5abee3694d54799e0bcac",
      "boardURL": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/Hardware/SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.brd",
      "schematicURL": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/Hardware/SparkFun_Full_Bridge_Motor_Driver_Breakout-L298N.sch",
      "schematicSha256": "bd0fee1b57cf4566c88bdd9fa7b0f2f8e2d8425392163306bb9a8011ce806e33",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Full_Bridge_Motor_Driver_Breakout-L298N/blob/8b81b873540e59a232a5abee3694d54799e0bcac/LICENSE.md",
      "sourceArchiveSha256": "08bcb5ba257420104c4edc19eeedbba047ee3ec3ba1f9720a541a70515a5d432",
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
          "L298N"
        ],
        "scope": "Manufacturer primary product photo and exact board-only product variant; user-fitted device/control footprint is a ghost outline, not an asserted populated component. Assembly lands are not separate external wiring ports."
      }
    }
  },
  "sparkfun-module-rob14451": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -7.62,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "B01",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B01. Physical source contact JP1.2.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "B02",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B02. Physical source contact JP1.3.",
        "x": -7.62,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "A02",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A02. Physical source contact JP1.4.",
        "x": -7.62,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "A01",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A01. Physical source contact JP1.5.",
        "x": -7.62,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": -7.62,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.7.",
        "x": -7.62,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "VM",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VM. Physical source contact JP1.8.",
        "x": -7.62,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "PWMA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PWMA. Physical source contact JP2.1.",
        "x": 7.62,
        "y": -8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "AIN2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN2. Physical source contact JP2.2.",
        "x": 7.62,
        "y": -6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "AIN1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN1. Physical source contact JP2.3.",
        "x": 7.62,
        "y": -3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "STBY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: STBY. Physical source contact JP2.4.",
        "x": 7.62,
        "y": -1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "BIN1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BIN1. Physical source contact JP2.5.",
        "x": 7.62,
        "y": 1.27,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "BIN2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BIN2. Physical source contact JP2.6.",
        "x": 7.62,
        "y": 3.81,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "PWMB",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PWMB. Physical source contact JP2.7.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.8.",
        "x": 7.62,
        "y": 8.89,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.1176
      }
    ],
    "artwork": "<rect x=\"-2.5\" y=\"-2.98\" width=\"5.0\" height=\"8.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.641\" y=\"-7.95\" width=\"5.241\" height=\"3.15\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Motor_Driver-TB6612FNG_v11.brd",
      "boardSha256": "0c71c32c7531e2c468b7752a91a1cac0903d8cac6a23562e9ce99de4ec855f6e",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Motor_Driver-Dual_TB6612FNG",
      "commit": "76bbcba16c4510c8bd9ab6b4622172a7d70bfd22",
      "boardURL": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/Hardware/SparkFun_Motor_Driver-TB6612FNG_v11.brd",
      "schematicURL": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/Hardware/SparkFun_Motor_Driver-TB6612FNG_v11.sch",
      "schematicSha256": "44ce9a604d4e81dee2541beb71ab3d393c8213c18f08b3bb5f67cc83391dc00b",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Motor_Driver-Dual_TB6612FNG/blob/76bbcba16c4510c8bd9ab6b4622172a7d70bfd22/LICENSE.md",
      "sourceArchiveSha256": "b95200cd40d0713c0ae75c30751b74dff4ef435ea8352c88f4f6a8905352770f",
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
  "sparkfun-module-prt10217": {
    "contacts": [
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.1.",
        "x": 3.175,
        "y": -1.27,
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
        "x": 3.175,
        "y": 1.27,
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
        "id": "jp9-dplus1",
        "number": "JP9.D+1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP9.D+1.",
        "x": -10.563878,
        "y": 0,
        "size": [
          1.4,
          0.4
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp9-d-1",
        "number": "JP9.D-1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP9.D-1.",
        "x": -10.563878,
        "y": -0.65,
        "size": [
          1.4,
          0.4
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp9-vbus1",
        "number": "JP9.VBUS1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP9.VBUS1.",
        "x": -10.563878,
        "y": -1.3,
        "size": [
          1.4,
          0.4
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp9-id1",
        "number": "JP9.ID1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP9.ID1.",
        "x": -10.563878,
        "y": 0.65,
        "size": [
          1.4,
          0.4
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp9-gnd1",
        "number": "JP9.GND1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP9.GND1.",
        "x": -10.563878,
        "y": 1.3,
        "size": [
          1.4,
          0.4
        ],
        "shape": "rect",
        "connector": "JP9",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 7.095,
        "y": -1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.2.",
        "x": 7.095,
        "y": 1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"6.295\" y=\"-4.0\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.263878\" y=\"-5.6\" width=\"6.0\" height=\"9.6\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.701416\" y=\"-0.9398\" width=\"1.6104\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.969\" y=\"3.048\" width=\"0.508\" height=\"1.524\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.666878\" y=\"-4.2417\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.585859\" y=\"-2.844703\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.669419\" y=\"-2.860241\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.506616\" y=\"3.390697\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"1.905\" y=\"-2.54\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Lipo_Charger_Basic-microUSB.brd",
      "boardSha256": "637f853c79a6d959e20d70d7893093e8a89d1185536f8c03c84c43dc80201c31",
      "sourceBounds": [
        0,
        0,
        29.21,
        10.16
      ],
      "selectedConnectors": [
        "JP8",
        "JP9",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Lipo_Charger_Basic-microUSB",
      "commit": "73710c1269a31963b9878e43a2877c6df5e5454a",
      "boardURL": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/Hardware/SparkFun_Lipo_Charger_Basic-microUSB.brd",
      "schematicURL": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/Hardware/SparkFun_Lipo_Charger_Basic-microUSB.sch",
      "schematicSha256": "a8d64e9962fcc57188b1699be663272f8b38fe3dd6cca08c6a438915ece82165",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Lipo_Charger_Basic-microUSB/blob/73710c1269a31963b9878e43a2877c6df5e5454a/LICENSE.md",
      "sourceArchiveSha256": "7eef2cd6a402cc2486628cc551f72afa063f0e8896709f611fae336f9f0ef052",
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
  "sparkfun-module-prt10401": {
    "contacts": [
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.1.",
        "x": 9,
        "y": -1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": false,
        "smd": true
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP7.2.",
        "x": 9,
        "y": 1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": false,
        "smd": true
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.1.",
        "x": 3.81,
        "y": -1.27,
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
        "x": 3.81,
        "y": 1.27,
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
        "id": "x1-dplus",
        "number": "X1.D+",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.D+.",
        "x": -8.93,
        "y": 0,
        "size": [
          2.5,
          0.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-d-",
        "number": "X1.D-",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.D-.",
        "x": -8.93,
        "y": -0.8,
        "size": [
          2.5,
          0.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-gnd",
        "number": "X1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND.",
        "x": -8.93,
        "y": 1.6,
        "size": [
          2.5,
          0.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-id",
        "number": "X1.ID",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.ID.",
        "x": -8.93,
        "y": 0.8,
        "size": [
          2.5,
          0.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-vbus",
        "number": "X1.VBUS",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X1.VBUS.",
        "x": -8.93,
        "y": -1.6,
        "size": [
          2.5,
          0.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-17.33\" y=\"-3.8\" width=\"9.2\" height=\"7.6\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2\" y=\"-4.0\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.8904\" y=\"-1.4224\" width=\"1.6104\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.54\" y=\"-2.54\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_LiPo-Charger-Basic-MiniUSB.brd",
      "boardSha256": "439bb2d34bb47858b790cc5285f5f0f4d06f686970e7955ce380d04fe5fe0905",
      "sourceBounds": [
        0,
        0,
        33.02,
        12.7
      ],
      "selectedConnectors": [
        "JP7",
        "JP8",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Lipo_Charger_Basic-miniUSB",
      "commit": "2337e59b6f3262da4831704031a2917ebb83dce3",
      "boardURL": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/Hardware/SparkFun_LiPo-Charger-Basic-MiniUSB.brd",
      "schematicURL": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/Hardware/SparkFun_LiPo-Charger-Basic-MiniUSB.sch",
      "schematicSha256": "7639296d66a56fd020d6f0d2e1387f163fdc7d8f6dd0985051c2ef3e1c146770",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Lipo_Charger_Basic-miniUSB/blob/2337e59b6f3262da4831704031a2917ebb83dce3/README.md",
      "sourceArchiveSha256": "37aa45c0d4f1034ffbd6cb01077f34c5ddf311dfebd148c40254e36fd645a696",
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
  "sparkfun-module-prt15353": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 5.19,
        "y": -3.794,
        "size": [
          4.6,
          1
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
        "x": 5.19,
        "y": -1.794,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11. Physical source contact JP2.1.",
        "x": -6.35,
        "y": -9.906,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "VDD_OUT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD_OUT. Physical source contact JP2.2.",
        "x": -5.334,
        "y": -9.906,
        "size": [
          0.635,
          1.27
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 6.35,
        "y": 11.43,
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
        "label": "VDD_OUT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD_OUT. Physical source contact J2.2.",
        "x": 3.81,
        "y": 11.43,
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
        "label": "DONE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DONE. Physical source contact J2.3.",
        "x": 1.27,
        "y": 11.43,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.4.",
        "x": -1.27,
        "y": 11.43,
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
        "label": "DELAY/M_DRIVE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DELAY/M_DRIVE. Physical source contact J2.5.",
        "x": -3.81,
        "y": 11.43,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J2.6.",
        "x": -6.35,
        "y": 11.43,
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
    "artwork": "<rect x=\"-8.684\" y=\"-8.355\" width=\"6.7\" height=\"16.71\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.39\" y=\"-6.794\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.8166\" y=\"2.0828\" width=\"5.08\" height=\"5.08\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.016\" y=\"-5.08\" width=\"1.524\" height=\"5.588\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.9906\" y=\"4.8388\" width=\"2.8448\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.4676\" y=\"8.7122\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.05155\" y=\"-10.78865\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.124\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.6\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.076\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.705\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.1466\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.648\" y=\"-11.024\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.2234\" y=\"-12.0144\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.0612\" y=\"-10.922\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_TPL5110_Nano_Power_Switch.brd",
      "boardSha256": "3b5a15fd87b6339122e6a34d8e176a6792b38310286e60065ac622f715409c05",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "JP2",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_TPL5110_Nano_Power_Timer",
      "commit": "2d8d2cce78c7de05692d414d517ff05b5ec02b5c",
      "boardURL": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/Hardware/SparkFun_TPL5110_Nano_Power_Switch.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/Hardware/SparkFun_TPL5110_Nano_Power_Switch.sch",
      "schematicSha256": "57743a94f3ddf3fe8e8e65a3e9e641802d652d0c71859cc4036e9c52084833bb",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_TPL5110_Nano_Power_Timer/blob/2d8d2cce78c7de05692d414d517ff05b5ec02b5c/LICENSE.md",
      "sourceArchiveSha256": "0785d0c157f86c1eefee9354a8552c80f7e3ebc544bede5694ba69a34461d326",
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
  "sparkfun-module-prt11214": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 3.285,
        "y": -1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "V_BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_BATT. Physical source contact JP1.2.",
        "x": 3.285,
        "y": 1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "TRIG+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRIG+. Physical source contact JP3.1.",
        "x": -1,
        "y": -9.271,
        "size": [
          1.4478,
          1.4478
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": 1,
        "y": -9.271,
        "size": [
          1.4478,
          1.4478
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "V_BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_BATT. Physical source contact JP4.1.",
        "x": 1,
        "y": 9.271,
        "size": [
          1.4478,
          1.4478
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "OUT-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT-. Physical source contact JP4.2.",
        "x": -1,
        "y": 9.271,
        "size": [
          1.4478,
          1.4478
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "OUT-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT-. Physical source contact JP2.1.",
        "x": -1.397,
        "y": 12.7,
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
        "label": "V_BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_BATT. Physical source contact JP2.2.",
        "x": 1.143,
        "y": 12.7,
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
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": 1.27,
        "y": -12.7,
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
        "label": "TRIG+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRIG+. Physical source contact JP5.2.",
        "x": -1.27,
        "y": -12.7,
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
        "id": "bh1-1",
        "number": "BH1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH1.1.",
        "x": -6.985,
        "y": -12.7,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH1",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh1-p-2",
        "number": "BH1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH1.P$2.",
        "x": -6.985,
        "y": -7.62,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH1",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh1-p-1",
        "number": "BH1.P$1",
        "label": "TRIG+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TRIG+. Physical source contact BH1.P$1.",
        "x": -5.08,
        "y": -10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH1",
        "back": false,
        "smd": true
      },
      {
        "id": "bh1-p-3",
        "number": "BH1.P$3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH1.P$3.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH1",
        "back": false,
        "smd": true
      },
      {
        "id": "bh2-1",
        "number": "BH2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH2.1.",
        "x": 6.985,
        "y": -7.62,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH2",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh2-p-2",
        "number": "BH2.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH2.P$2.",
        "x": 6.985,
        "y": -12.7,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH2",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh2-p-1",
        "number": "BH2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact BH2.P$1.",
        "x": 5.08,
        "y": -10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH2",
        "back": false,
        "smd": true
      },
      {
        "id": "bh2-p-3",
        "number": "BH2.P$3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH2.P$3.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH2",
        "back": false,
        "smd": true
      },
      {
        "id": "bh3-1",
        "number": "BH3.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH3.1.",
        "x": 6.985,
        "y": 12.7,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH3",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh3-p-2",
        "number": "BH3.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH3.P$2.",
        "x": 6.985,
        "y": 7.62,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH3",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh3-p-1",
        "number": "BH3.P$1",
        "label": "V_BATT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: V_BATT. Physical source contact BH3.P$1.",
        "x": 5.08,
        "y": 10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH3",
        "back": false,
        "smd": true
      },
      {
        "id": "bh3-p-3",
        "number": "BH3.P$3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH3.P$3.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH3",
        "back": false,
        "smd": true
      },
      {
        "id": "bh4-1",
        "number": "BH4.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH4.1.",
        "x": -6.985,
        "y": 7.62,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH4",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh4-p-2",
        "number": "BH4.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH4.P$2.",
        "x": -6.985,
        "y": 12.7,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "BH4",
        "back": false,
        "drill": 2.2
      },
      {
        "id": "bh4-p-1",
        "number": "BH4.P$1",
        "label": "OUT-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT-. Physical source contact BH4.P$1.",
        "x": -5.08,
        "y": 10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH4",
        "back": false,
        "smd": true
      },
      {
        "id": "bh4-p-3",
        "number": "BH4.P$3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BH4.P$3.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.27,
          0.635
        ],
        "shape": "rect",
        "connector": "BH4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"2.485\" y=\"-4.0\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"7.471\" width=\"6.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"-15.271\" width=\"6.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.248\" y=\"-2.362\" width=\"3.606\" height=\"4.724\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.667\" y=\"11.43\" width=\"5.08\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.54\" y=\"-13.97\" width=\"5.08\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_MOSFET_Power_Controller.brd",
      "boardSha256": "971244da9f2c86b71e2753a4f3c90cbcaff4e15aa76e1979e935bf74de7c1dbc",
      "sourceBounds": [
        0,
        0,
        21.59,
        30.48
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "JP4",
        "JP2",
        "JP5",
        "BH1",
        "BH2",
        "BH3",
        "BH4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.2",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "passive",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/MOSFET_Power_Controller/Hardware/SparkFun_MOSFET_Power_Controller.sch"
        },
        {
          "number": "JP4.1",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "passive",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/MOSFET_Power_Controller/Hardware/SparkFun_MOSFET_Power_Controller.sch"
        },
        {
          "number": "JP2.2",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "passive",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/MOSFET_Power_Controller/Hardware/SparkFun_MOSFET_Power_Controller.sch"
        },
        {
          "number": "BH3.P$1",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "passive",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/MOSFET_Power_Controller/Hardware/SparkFun_MOSFET_Power_Controller.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/MOSFET_Power_Controller",
      "commit": "d20f59094c1d7a4e9a1747663bc88a6df2e4bed8",
      "boardURL": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/SparkFun_MOSFET_Power_Controller.brd",
      "schematicURL": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/SparkFun_MOSFET_Power_Controller.sch",
      "schematicSha256": "c5f8461989f85e7ec4c833128b20eab3d9f3a032fc56ca3e0d470c91a13c7ad5",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/MOSFET_Power_Controller/blob/d20f59094c1d7a4e9a1747663bc88a6df2e4bed8/Hardware/README.md",
      "sourceArchiveSha256": "aa151b81fc1b4946d03d879d7ca69a870c20eeaed7ec9033f9201448f65f4a93",
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
          "JP1.2: unresolved electrical role on V_BATT.",
          "JP4.1: unresolved electrical role on V_BATT.",
          "JP2.2: unresolved electrical role on V_BATT.",
          "BH3.P$1: unresolved electrical role on V_BATT."
        ]
      }
    }
  },
  "sparkfun-module-prt13032": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -24.765,
        "y": -6.985,
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
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC. Physical source contact JP2.1.",
        "x": -22.225,
        "y": -6.985,
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
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC. Physical source contact JP3.1.",
        "x": 22.86,
        "y": -6.985,
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
        "x": 20.32,
        "y": -6.985,
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
        "id": "j1-vin0",
        "number": "J1.VIN0",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact J1.VIN0.",
        "x": -14.717,
        "y": 2.54,
        "size": [
          2.4,
          2.8
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-gnd",
        "number": "J1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.GND.",
        "x": -3.317,
        "y": 2.54,
        "size": [
          2.4,
          2.8
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-vin1",
        "number": "J1.VIN1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J1.VIN1.",
        "x": -14.717,
        "y": -3.56,
        "size": [
          2.4,
          2.8
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-p-4",
        "number": "J1.P$4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.P$4.",
        "x": -3.317,
        "y": -3.56,
        "size": [
          2.4,
          2.8
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP5.1.",
        "x": 5.715,
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
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.2.",
        "x": 8.255,
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
        "x": -24.765,
        "y": -4.445,
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
        "label": "VCC",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC. Physical source contact JP7.1.",
        "x": -22.225,
        "y": -4.445,
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
        "label": "VCC",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC. Physical source contact JP8.1.",
        "x": 22.86,
        "y": -4.445,
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
        "x": 20.32,
        "y": -4.445,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-13.517\" y=\"-7.26\" width=\"9.0\" height=\"14.8\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.611\" y=\"-4.365\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.245\" y=\"-0.425\" width=\"3.5\" height=\"7.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.745\" y=\"-0.425\" width=\"3.5\" height=\"7.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.7084\" y=\"-1.016\" width=\"6.5532\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.357\" y=\"-0.903\" width=\"2.9\" height=\"4.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"5.715\" width=\"5.08\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.105\" y=\"-6.915\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.205\" y=\"4.715\" width=\"4.8\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.59\" y=\"-8.255\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.05\" y=\"-8.255\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.59\" y=\"-5.715\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.05\" y=\"-5.715\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.035\" y=\"-8.255\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.495\" y=\"-8.255\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.035\" y=\"-5.715\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.495\" y=\"-5.715\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.923\" y=\"-6.707\" width=\"2.032\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.375\" y=\"-7.163\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.375\" y=\"-5.372\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.249\" y=\"1.486\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.249\" y=\"-3.594\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.979\" y=\"-6.198\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd",
      "boardSha256": "3f2b692b18f62be937900cbe56e51cb079645673557a58d07d9cabd276810a92",
      "sourceBounds": [
        0,
        0,
        54.61,
        16.51
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "J1",
        "JP5",
        "JP6",
        "JP7",
        "JP8",
        "JP9"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V",
      "commit": "61db9993900f6341ecfdf4ad78172a0a0ff155b8",
      "boardURL": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/Hardware/SparkFun_Breadboard_Power_Supply-5v_3V_SMD.brd",
      "schematicURL": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/Hardware/SparkFun_Breadboard_Power_Supply-5v_3V_SMD.sch",
      "schematicSha256": "1aa594257eaf5bf7d79f094c950aca45f1ebc7a68ac03f2b8e64a361f31a8cfa",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Breadboard_Power_Supply_Stick_5V-3.3V/blob/61db9993900f6341ecfdf4ad78172a0a0ff155b8/README.md",
      "sourceArchiveSha256": "42a4c12d3e2b6c1fbd3ed764a96c425dda63a91a9e04d77f6f156d9b518a3919",
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
  "sparkfun-module-prt14765": {
    "contacts": [
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.1.",
        "x": -11.43,
        "y": -7.62,
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
        "label": "VIN",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VIN. Physical source contact JP7.2.",
        "x": -11.43,
        "y": -10.16,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "5V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U2.VOUT to this rail. CAD net: 5V. Physical source contact JP3.1.",
        "x": 11.43,
        "y": -10.16,
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
        "x": 11.43,
        "y": -7.62,
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
        "label": "VCCA",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U3.OUT to this rail. CAD net: VCCA. Physical source contact JP3.3.",
        "x": 11.43,
        "y": -5.08,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.4.",
        "x": 11.43,
        "y": -2.54,
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
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A4. Physical source contact J1.1.",
        "x": -11.43,
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
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact J1.2.",
        "x": -11.43,
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
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact J1.3.",
        "x": -11.43,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact J1.4.",
        "x": -11.43,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "B4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B4. Physical source contact J2.1.",
        "x": 11.43,
        "y": 12.7,
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
        "label": "B3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B3. Physical source contact J2.2.",
        "x": 11.43,
        "y": 10.16,
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
        "label": "B2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B2. Physical source contact J2.3.",
        "x": 11.43,
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "B1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1. Physical source contact J2.4.",
        "x": 11.43,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -11.43,
        "y": 2.54,
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
        "x": 11.43,
        "y": 2.54,
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
    "artwork": "<rect x=\"10.16\" y=\"-11.43\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"3.81\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.16\" y=\"3.81\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.2828\" y=\"0.0254\" width=\"4.5656\" height=\"5.0292\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"-11.43\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.73675\" y=\"5.8312\" width=\"2.4\" height=\"5.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.651\" y=\"-8.1\" width=\"3.401\" height=\"3.335\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"11.938\" width=\"5.588\" height=\"1.524\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"1.27\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.16\" y=\"1.27\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.67\" y=\"7.455\" width=\"2.8\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.22605\" y=\"6.4897\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.27975\" y=\"-6.706\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.120925\" y=\"-7.604525\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.0415\" y=\"-3.76575\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.11745\" y=\"-1.6636\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.283225\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.5595\" y=\"8.534\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.8485\" y=\"-1.702\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"12.268\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.730425\" y=\"7.6704\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.70775\" y=\"-3.76575\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Single_Supply_Logic_Level_Converter.brd",
      "boardSha256": "3ead1c827915e1e6a4b37e2e7e2778d566275e38b9ad99a188eef871f0487f51",
      "sourceBounds": [
        0,
        0,
        25.4,
        27.94
      ],
      "selectedConnectors": [
        "JP7",
        "JP3",
        "J1",
        "J2",
        "J3",
        "J4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP3.1",
          "sourceNet": "5V",
          "before": {
            "type": "power_in",
            "label": "5V"
          },
          "after": {
            "type": "power_out",
            "label": "5V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VCCB",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VOUT",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "IN",
              "direction": "in"
            },
            {
              "part": "U3",
              "pin": "EN",
              "direction": "in"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Single_Supply_Logic_Level_Converter/Hardware/Single_Supply_Logic_Level_Converter.sch"
        },
        {
          "number": "JP3.3",
          "sourceNet": "VCCA",
          "before": {
            "type": "bidirectional",
            "label": "VCCA"
          },
          "after": {
            "type": "power_out",
            "label": "VCCA"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "OUT",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VCCA",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "OE",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Single_Supply_Logic_Level_Converter/Hardware/Single_Supply_Logic_Level_Converter.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Single_Supply_Logic_Level_Converter",
      "commit": "5f675f2d775cb42f4a4552231788bdc252794832",
      "boardURL": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/Hardware/Single_Supply_Logic_Level_Converter.brd",
      "schematicURL": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/Hardware/Single_Supply_Logic_Level_Converter.sch",
      "schematicSha256": "604059a2b4fd8d97f97fb52bf1f988441e0eea0e2ae164c84e90f5344acb72ea",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Single_Supply_Logic_Level_Converter/blob/5f675f2d775cb42f4a4552231788bdc252794832/LICENSE.md",
      "sourceArchiveSha256": "bea7283eb0297753fa17ecd43501f00f53e163510fb0df328b2b43b2af2c9bae",
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
  "sparkfun-module-wig13118": {
    "contacts": [
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP9.1.",
        "x": 7.62,
        "y": 6.358,
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
        "x": 10.16,
        "y": 6.358,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP9.3.",
        "x": 7.62,
        "y": 8.898,
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
        "id": "jp9-4",
        "number": "JP9.4",
        "label": "MOSI/PWM",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI/PWM. Physical source contact JP9.4.",
        "x": 10.16,
        "y": 8.898,
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
        "id": "jp9-5",
        "number": "JP9.5",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact JP9.5.",
        "x": 7.62,
        "y": 11.438,
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
        "id": "jp9-6",
        "number": "JP9.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP9.6.",
        "x": 10.16,
        "y": 11.438,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "BTN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BTN. Physical source contact JP1.1.",
        "x": -1.27,
        "y": 20.328,
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
        "x": 1.27,
        "y": 20.328,
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
        "x": 2.54,
        "y": -20.312,
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
        "x": 0,
        "y": -20.312,
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
        "label": "MOSI/PWM",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI/PWM. Physical source contact JP2.3.",
        "x": -2.54,
        "y": -20.312,
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
        "x": -10.16,
        "y": -13.962,
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
        "x": -10.16,
        "y": -11.422,
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
        "x": 10.16,
        "y": -13.962,
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
        "x": 10.16,
        "y": -11.422,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "A",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A. Physical source contact TP1.P$1.",
        "x": -7.62,
        "y": -3.802,
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
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "B",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B. Physical source contact TP2.P$1.",
        "x": 0.635,
        "y": -3.802,
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
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "T",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: T. Physical source contact TP3.P$1.",
        "x": 6.35,
        "y": -3.802,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"6.015\" y=\"5.088\" width=\"5.415\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1628\" y=\"5.6817\" width=\"9.2456\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.75\" y=\"-5.762\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.95\" y=\"-5.762\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6\" y=\"-5.762\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.502\" y=\"-11.89\" width=\"2.4\" height=\"5.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.951119\" y=\"13.328\" width=\"3.749859\" height=\"1.310159\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.026\" y=\"3.462\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.013\" y=\"11.082\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.322\" y=\"6.002\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.322\" y=\"11.082\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"4.08\" y=\"-11.152\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.54\" y=\"-11.152\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Servo_Trigger.brd",
      "boardSha256": "c891ae61398f1943bb29b6a94c5bdc44f366dd48da34d227fe98137282d22338",
      "sourceBounds": [
        0,
        0.016,
        22.86,
        43.18
      ],
      "selectedConnectors": [
        "JP9",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "TP1",
        "TP2",
        "TP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Servo_Trigger",
      "commit": "92e979266c02ae5d4a299a0ea645edb494bfdf73",
      "boardURL": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/Hardware/SparkFun_Servo_Trigger.brd",
      "schematicURL": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/Hardware/SparkFun_Servo_Trigger.sch",
      "schematicSha256": "e3e0ad0f813ca97e7becffad215fb6ba7755a399c30bb8d564b5f4a7ac30af95",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Servo_Trigger/blob/92e979266c02ae5d4a299a0ea645edb494bfdf73/README.md",
      "sourceArchiveSha256": "10eacaafc2ce9b6524d989d5cbd555e9e0a52734f3f0168cb36c208e2d6de341",
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
  "sparkfun-module-com16810": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J1.1.",
        "x": -29.845,
        "y": 32.385,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact J1.2.",
        "x": -32.385,
        "y": 32.385,
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
        "x": -34.925,
        "y": 32.385,
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
        "x": -37.465,
        "y": 32.385,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.1.",
        "x": 40.005,
        "y": 22.455,
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
        "x": 40.005,
        "y": 21.455,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact J2.3.",
        "x": 40.005,
        "y": 20.455,
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J2.4.",
        "x": 40.005,
        "y": 19.455,
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
        "x": -40.005,
        "y": 19.455,
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
        "x": -40.005,
        "y": 20.455,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact J3.3.",
        "x": -40.005,
        "y": 21.455,
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J3.4.",
        "x": -40.005,
        "y": 22.455,
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
        "id": "j9-1",
        "number": "J9.1",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact J9.1.",
        "x": 6.73,
        "y": 19.685,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j9-2",
        "number": "J9.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J9.2.",
        "x": 9.27,
        "y": 19.685,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j9-3",
        "number": "J9.3",
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact J9.3.",
        "x": 6.73,
        "y": 17.145,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j9-4",
        "number": "J9.4",
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact J9.4.",
        "x": 9.27,
        "y": 17.145,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j9-5",
        "number": "J9.5",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact J9.5.",
        "x": 6.73,
        "y": 14.605,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j9-6",
        "number": "J9.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J9.6.",
        "x": 9.27,
        "y": 14.605,
        "size": [
          0.8636,
          0.8636
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.508
      },
      {
        "id": "j4-p1",
        "number": "J4.P1",
        "label": "~AC1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$5. Physical source contact J4.P1.",
        "x": -27.94,
        "y": -25.4,
        "size": [
          2.8,
          2.8
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.6
      },
      {
        "id": "j4-p2",
        "number": "J4.P2",
        "label": "~AC2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$6. Physical source contact J4.P2.",
        "x": -34.29,
        "y": -25.4,
        "size": [
          2.8,
          2.8
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.6
      },
      {
        "id": "j5-p1",
        "number": "J5.P1",
        "label": "~AC1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$8. Physical source contact J5.P1.",
        "x": 16.51,
        "y": -25.4,
        "size": [
          2.8,
          2.8
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.6
      },
      {
        "id": "j5-p2",
        "number": "J5.P2",
        "label": "~AC2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$9. Physical source contact J5.P2.",
        "x": 10.16,
        "y": -25.4,
        "size": [
          2.8,
          2.8
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.6
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact J6.1.",
        "x": -27.305,
        "y": 32.385,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"0.635\" y=\"-16.383\" width=\"43.18\" height=\"22.86\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-43.815\" y=\"-16.383\" width=\"43.18\" height=\"22.86\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.685\" y=\"-33.3\" width=\"13.3\" height=\"13.262\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-37.765\" y=\"-33.3\" width=\"13.3\" height=\"13.262\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.0537\" y=\"12.5222\" width=\"3.8926\" height=\"9.2456\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"40.355\" y=\"17.955\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-44.605\" y=\"17.955\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.765\" y=\"-29.464\" width=\"4.699\" height=\"4.318\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.685\" y=\"-29.464\" width=\"4.699\" height=\"4.318\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-34.1122\" y=\"21.209\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.7008\" y=\"18.669\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.016\" y=\"26.0858\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.3774\" y=\"13.905\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.0726\" y=\"13.905\" width=\"2.8448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.70125\" y=\"10.63625\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.15875\" y=\"31.90875\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.74875\" y=\"10.63625\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"29.426\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.644\" y=\"9.093\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.644\" y=\"10.998\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.346\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.266\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.253\" y=\"14.249\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.197\" y=\"14.249\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.184\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.117\" y=\"10.439\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.501\" y=\"-22.657\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.979\" y=\"21.869\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.629\" y=\"21.869\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"29.489\" y=\"-22.657\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic Solid State Relay.brd",
      "boardSha256": "dcd657b0f55346df6c9833d3de89538098175353e67458e5fe158f3c718644d7",
      "sourceBounds": [
        0,
        0,
        90.17,
        67.31
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J9",
        "J4",
        "J5",
        "J6"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Dual_Solid_State_Relay",
      "commit": "f9fa87f14ecabf325691b4dac59270415eae224c",
      "boardURL": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/Hardware/Qwiic%20Solid%20State%20Relay.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/Hardware/Qwiic%20Solid%20State%20Relay.sch",
      "schematicSha256": "be8f930efbae601e5e82db9669a077df2976b7b52fd033d4520f65f6d40d0cc4",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Dual_Solid_State_Relay/blob/f9fa87f14ecabf325691b4dac59270415eae224c/LICENSE.md",
      "sourceArchiveSha256": "062c7d6a23b4b7ae96d6dd4f4f1f6159cf4502b6ef8b08b5eb4d7e5c7f6b6dfc",
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
  "sparkfun-module-wrl15484": {
    "contacts": [
      {
        "id": "j10-1",
        "number": "J10.1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact J10.1.",
        "x": -0.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SWDCK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWDCK. Physical source contact J2.1.",
        "x": 3.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "BOOTLOAD",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOTLOAD. Physical source contact J7.1.",
        "x": 1,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j32-1",
        "number": "J32.1",
        "label": "~AD11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD11. Physical source contact J32.1.",
        "x": -6.2,
        "y": 1,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J32",
        "back": true,
        "smd": true
      },
      {
        "id": "j26-1",
        "number": "J26.1",
        "label": "~AD12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD12. Physical source contact J26.1.",
        "x": -6.2,
        "y": -2,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J26",
        "back": true,
        "smd": true
      },
      {
        "id": "j28-1",
        "number": "J28.1",
        "label": "~AD13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD13. Physical source contact J28.1.",
        "x": -6.2,
        "y": -1,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J28",
        "back": true,
        "smd": true
      },
      {
        "id": "j19-1",
        "number": "J19.1",
        "label": "~D27",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D27. Physical source contact J19.1.",
        "x": -5,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J19",
        "back": true,
        "smd": true
      },
      {
        "id": "j35-1",
        "number": "J35.1",
        "label": "XI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XI. Physical source contact J35.1.",
        "x": -7,
        "y": 2.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J35",
        "back": true,
        "smd": true
      },
      {
        "id": "j34-1",
        "number": "J34.1",
        "label": "XO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XO. Physical source contact J34.1.",
        "x": -6.2,
        "y": 2,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J34",
        "back": true,
        "smd": true
      },
      {
        "id": "j16-1",
        "number": "J16.1",
        "label": "~D24",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D24. Physical source contact J16.1.",
        "x": -3.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J16",
        "back": true,
        "smd": true
      },
      {
        "id": "j25-1",
        "number": "J25.1",
        "label": "~D25",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D25. Physical source contact J25.1.",
        "x": -7,
        "y": -2.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J25",
        "back": true,
        "smd": true
      },
      {
        "id": "j27-1",
        "number": "J27.1",
        "label": "~D26",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D26. Physical source contact J27.1.",
        "x": -7,
        "y": -1.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J27",
        "back": true,
        "smd": true
      },
      {
        "id": "j21-1",
        "number": "J21.1",
        "label": "~D28",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D28. Physical source contact J21.1.",
        "x": -6,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J21",
        "back": true,
        "smd": true
      },
      {
        "id": "j33-1",
        "number": "J33.1",
        "label": "~AD29",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD29. Physical source contact J33.1.",
        "x": -7,
        "y": 1.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J33",
        "back": true,
        "smd": true
      },
      {
        "id": "j24-1",
        "number": "J24.1",
        "label": "~AD32",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD32. Physical source contact J24.1.",
        "x": -6.2,
        "y": -3,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J24",
        "back": true,
        "smd": true
      },
      {
        "id": "j14-1",
        "number": "J14.1",
        "label": "~AD35",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD35. Physical source contact J14.1.",
        "x": -2.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J14",
        "back": true,
        "smd": true
      },
      {
        "id": "j23-1",
        "number": "J23.1",
        "label": "~D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D6. Physical source contact J23.1.",
        "x": -7,
        "y": -3.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J23",
        "back": true,
        "smd": true
      },
      {
        "id": "j13-1",
        "number": "J13.1",
        "label": "D7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D7. Physical source contact J13.1.",
        "x": -2,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J13",
        "back": true,
        "smd": true
      },
      {
        "id": "j12-1",
        "number": "J12.1",
        "label": "~D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D5. Physical source contact J12.1.",
        "x": -1.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J12",
        "back": true,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "~D39",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D39. Physical source contact J4.1.",
        "x": 2.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J4",
        "back": true,
        "smd": true
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "D40",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D40. Physical source contact J5.1.",
        "x": 2,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J5",
        "back": true,
        "smd": true
      },
      {
        "id": "j58-1",
        "number": "J58.1",
        "label": "~D44",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D44. Physical source contact J58.1.",
        "x": 3.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J58",
        "back": true,
        "smd": true
      },
      {
        "id": "j36-1",
        "number": "J36.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J36.1.",
        "x": -6.2,
        "y": 3,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J36",
        "back": true,
        "smd": true
      },
      {
        "id": "j50-1",
        "number": "J50.1",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact J50.1.",
        "x": -0.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J50",
        "back": true,
        "smd": true
      },
      {
        "id": "j9-1",
        "number": "J9.1",
        "label": "TXO-0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TXO-0. Physical source contact J9.1.",
        "x": 0,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J9",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "RXI-0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXI-0. Physical source contact J3.1.",
        "x": 3,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j30-1",
        "number": "J30.1",
        "label": "~AD33/SWO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD33/SWO. Physical source contact J30.1.",
        "x": -6.2,
        "y": 0,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J30",
        "back": true,
        "smd": true
      },
      {
        "id": "j44-1",
        "number": "J44.1",
        "label": "~AD31",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~AD31. Physical source contact J44.1.",
        "x": -3.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J44",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 4,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j59-1",
        "number": "J59.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J59.1.",
        "x": 4,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J59",
        "back": true,
        "smd": true
      },
      {
        "id": "j22-1",
        "number": "J22.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J22.1.",
        "x": -7,
        "y": -4.5,
        "size": [
          0.6,
          0.6
        ],
        "shape": "rect",
        "connector": "J22",
        "back": true,
        "smd": true
      },
      {
        "id": "j52-1",
        "number": "J52.1",
        "label": "~D43",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D43. Physical source contact J52.1.",
        "x": 0.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J52",
        "back": true,
        "smd": true
      },
      {
        "id": "j56-1",
        "number": "J56.1",
        "label": "D38",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D38. Physical source contact J56.1.",
        "x": 2.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J56",
        "back": true,
        "smd": true
      },
      {
        "id": "j53-1",
        "number": "J53.1",
        "label": "~D42",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D42. Physical source contact J53.1.",
        "x": 1,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J53",
        "back": true,
        "smd": true
      },
      {
        "id": "j55-1",
        "number": "J55.1",
        "label": "D36",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D36. Physical source contact J55.1.",
        "x": 2,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J55",
        "back": true,
        "smd": true
      },
      {
        "id": "j57-1",
        "number": "J57.1",
        "label": "~D37",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D37. Physical source contact J57.1.",
        "x": 3,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J57",
        "back": true,
        "smd": true
      },
      {
        "id": "j17-1",
        "number": "J17.1",
        "label": "~D22",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D22. Physical source contact J17.1.",
        "x": -4,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J17",
        "back": true,
        "smd": true
      },
      {
        "id": "j15-1",
        "number": "J15.1",
        "label": "~D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D4. Physical source contact J15.1.",
        "x": -3,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J15",
        "back": true,
        "smd": true
      },
      {
        "id": "j11-1",
        "number": "J11.1",
        "label": "D8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D8. Physical source contact J11.1.",
        "x": -1,
        "y": -4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J11",
        "back": true,
        "smd": true
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact J8.1.",
        "x": 0.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J8",
        "back": true,
        "smd": true
      },
      {
        "id": "j38-1",
        "number": "J38.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J38.1.",
        "x": -7,
        "y": 4.5,
        "size": [
          0.6,
          0.6
        ],
        "shape": "rect",
        "connector": "J38",
        "back": true,
        "smd": true
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact J6.1.",
        "x": 1.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J6",
        "back": true,
        "smd": true
      },
      {
        "id": "j39-1",
        "number": "J39.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J39.1.",
        "x": -6,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J39",
        "back": true,
        "smd": true
      },
      {
        "id": "j37-1",
        "number": "J37.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact J37.1.",
        "x": -7,
        "y": 3.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J37",
        "back": true,
        "smd": true
      },
      {
        "id": "j51-1",
        "number": "J51.1",
        "label": "D0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0. Physical source contact J51.1.",
        "x": 0,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J51",
        "back": true,
        "smd": true
      },
      {
        "id": "j49-1",
        "number": "J49.1",
        "label": "D1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1. Physical source contact J49.1.",
        "x": -1,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J49",
        "back": true,
        "smd": true
      },
      {
        "id": "j48-1",
        "number": "J48.1",
        "label": "D2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D2. Physical source contact J48.1.",
        "x": -1.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J48",
        "back": true,
        "smd": true
      },
      {
        "id": "j54-1",
        "number": "J54.1",
        "label": "D3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D3. Physical source contact J54.1.",
        "x": 1.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J54",
        "back": true,
        "smd": true
      },
      {
        "id": "j20-1",
        "number": "J20.1",
        "label": "D14",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D14. Physical source contact J20.1.",
        "x": -5.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J20",
        "back": true,
        "smd": true
      },
      {
        "id": "j29-1",
        "number": "J29.1",
        "label": "D15",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D15. Physical source contact J29.1.",
        "x": -7,
        "y": -0.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J29",
        "back": true,
        "smd": true
      },
      {
        "id": "j42-1",
        "number": "J42.1",
        "label": "AD16",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD16. Physical source contact J42.1.",
        "x": -4.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J42",
        "back": true,
        "smd": true
      },
      {
        "id": "j43-1",
        "number": "J43.1",
        "label": "D17",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D17. Physical source contact J43.1.",
        "x": -4,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J43",
        "back": true,
        "smd": true
      },
      {
        "id": "j41-1",
        "number": "J41.1",
        "label": "~D18",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D18. Physical source contact J41.1.",
        "x": -5,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J41",
        "back": true,
        "smd": true
      },
      {
        "id": "j40-1",
        "number": "J40.1",
        "label": "~D19",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D19. Physical source contact J40.1.",
        "x": -5.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J40",
        "back": true,
        "smd": true
      },
      {
        "id": "j18-1",
        "number": "J18.1",
        "label": "~D23",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D23. Physical source contact J18.1.",
        "x": -4.5,
        "y": -3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J18",
        "back": true,
        "smd": true
      },
      {
        "id": "j31-1",
        "number": "J31.1",
        "label": "AD34",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD34. Physical source contact J31.1.",
        "x": -7,
        "y": 0.5,
        "size": [
          0.6,
          0.4
        ],
        "shape": "rect",
        "connector": "J31",
        "back": true,
        "smd": true
      },
      {
        "id": "j45-1",
        "number": "J45.1",
        "label": "D41",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D41. Physical source contact J45.1.",
        "x": -3,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J45",
        "back": true,
        "smd": true
      },
      {
        "id": "j46-1",
        "number": "J46.1",
        "label": "~D45",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ~D45. Physical source contact J46.1.",
        "x": -2.5,
        "y": 3.7,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J46",
        "back": true,
        "smd": true
      },
      {
        "id": "j47-1",
        "number": "J47.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J47.1.",
        "x": -2,
        "y": 4.5,
        "size": [
          0.4,
          0.6
        ],
        "shape": "rect",
        "connector": "J47",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.2136\" y=\"-4.1026\" width=\"5.2032\" height=\"5.2032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.3\" y=\"-4.5\" width=\"1.4\" height=\"8.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.17\" y=\"1.73\" width=\"2.34\" height=\"1.94\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3\" y=\"-0.4\" width=\"1.6\" height=\"2.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.3\" y=\"1.9\" width=\"2.0\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.4\" y=\"3.85\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.7\" y=\"3.85\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9\" y=\"3.85\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.65\" y=\"2.3\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.8\" y=\"-3.25\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.4\" y=\"0.75\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.4\" y=\"-0.25\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.35\" y=\"2.2\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.6\" y=\"-2.85\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.6\" y=\"-1.95\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.588\" y=\"-1.049\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.371\" y=\"-0.023\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.9\" y=\"-2.95\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.9\" y=\"-2.15\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.9\" y=\"-1.35\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.85\" y=\"2.3\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.05\" y=\"2.3\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.25\" y=\"2.3\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.95\" y=\"2.2\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Artemis.brd",
      "boardSha256": "877b565be79d75baa3626a1e53ceb6ec0ac4c43489167dcb828ad485485e2174",
      "sourceBounds": [
        0,
        0,
        15,
        10
      ],
      "selectedConnectors": [
        "J10",
        "J2",
        "J7",
        "J32",
        "J26",
        "J28",
        "J19",
        "J35",
        "J34",
        "J16",
        "J25",
        "J27",
        "J21",
        "J33",
        "J24",
        "J14",
        "J23",
        "J13",
        "J12",
        "J4",
        "J5",
        "J58",
        "J36",
        "J50",
        "J9",
        "J3",
        "J30",
        "J44",
        "J1",
        "J59",
        "J22",
        "J52",
        "J56",
        "J53",
        "J55",
        "J57",
        "J17",
        "J15",
        "J11",
        "J8",
        "J38",
        "J6",
        "J39",
        "J37",
        "J51",
        "J49",
        "J48",
        "J54",
        "J20",
        "J29",
        "J42",
        "J43",
        "J41",
        "J40",
        "J18",
        "J31",
        "J45",
        "J46",
        "J47"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "J2.1",
          "sourceNet": "SWDCK",
          "before": {
            "type": "bidirectional",
            "label": "SWDCK"
          },
          "after": {
            "type": "input",
            "label": "SWDCK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "GPIO20/SWDCK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_Artemis/Hardware/SparkFun_Artemis.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Artemis",
      "commit": "e1d026549109ea02264e977fc1f7b8d49bcfdfe9",
      "boardURL": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/Hardware/SparkFun_Artemis.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/Hardware/SparkFun_Artemis.sch",
      "schematicSha256": "69dbbd8de41de779df43445e5c937f3ba6cf75ef2cd73c5edddfb66d103d9966",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Artemis/blob/e1d026549109ea02264e977fc1f7b8d49bcfdfe9/LICENSE.md",
      "sourceArchiveSha256": "5ad280a844decb571b5a56f964b5518f1c0ebce92e518948b61e03e8fd7cd685",
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
  "sparkfun-module-prt10588": {
    "contacts": [
      {
        "id": "u1-sleeve",
        "number": "U1.SLEEVE",
        "label": "GND",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source GND node. The intended user-fitted device is not included. Physical source contact U1.SLEEVE.",
        "x": -6.985,
        "y": 0,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "U1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "u1-rsh",
        "number": "U1.RSH",
        "label": "RING_SHUNT",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source RING_SHUNT node. The intended user-fitted device is not included. Physical source contact U1.RSH.",
        "x": -1.985,
        "y": -2.5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "U1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "u1-ring",
        "number": "U1.RING",
        "label": "RING",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source RING node. The intended user-fitted device is not included. Physical source contact U1.RING.",
        "x": -1.985,
        "y": -5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "U1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "u1-tsh",
        "number": "U1.TSH",
        "label": "TIP_SHUNT",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source TIP_SHUNT node. The intended user-fitted device is not included. Physical source contact U1.TSH.",
        "x": -1.985,
        "y": 2.5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "U1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "u1-tip",
        "number": "U1.TIP",
        "label": "TIP",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source TIP node. The intended user-fitted device is not included. Physical source contact U1.TIP.",
        "x": -1.985,
        "y": 5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "U1",
        "back": false,
        "drill": 1.3
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source GND node. The intended user-fitted device is not included. Physical source contact JP1.1.",
        "x": 8.255,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "RING",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source RING node. The intended user-fitted device is not included. Physical source contact JP1.2.",
        "x": 8.255,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RING_SHUNT",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source RING_SHUNT node. The intended user-fitted device is not included. Physical source contact JP1.3.",
        "x": 8.255,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "TIP_SHUNT",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source TIP_SHUNT node. The intended user-fitted device is not included. Physical source contact JP1.4.",
        "x": 8.255,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "TIP",
        "type": "passive",
        "description": "Passive unpopulated carrier connection for the source TIP node. The intended user-fitted device is not included. Physical source contact JP1.5.",
        "x": 8.255,
        "y": 5.08,
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
    "artwork": "<rect x=\"-13.485\" y=\"-6.0\" width=\"14.0\" height=\"12.0\" rx=\".12\" fill=\"none\" stroke=\"#7b9d8d\" stroke-width=\".08\" stroke-dasharray=\".5 .4\" /><rect x=\"6.985\" y=\"-6.35\" width=\"2.54\" height=\"12.7\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\" />",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Audio_Jack_Breakout.brd",
      "boardSha256": "ebe65ab9efaac33e60a681a3257789c860aed0c0244d8b9f353c4f09a02c7a88",
      "sourceBounds": [
        0,
        0,
        21.59,
        15.24
      ],
      "selectedConnectors": [
        "U1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "U1.RSH passive pass-through verified from schematic endpoints.",
        "U1.RING passive pass-through verified from schematic endpoints.",
        "U1.TSH passive pass-through verified from schematic endpoints.",
        "U1.TIP passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "U1.RSH",
          "sourceNet": "RING_SHUNT",
          "before": {
            "type": "unspecified",
            "label": "RING_SHUNT"
          },
          "after": {
            "type": "passive",
            "label": "RING_SHUNT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "U1.RING",
          "sourceNet": "RING",
          "before": {
            "type": "unspecified",
            "label": "RING"
          },
          "after": {
            "type": "passive",
            "label": "RING"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "U1.TSH",
          "sourceNet": "TIP_SHUNT",
          "before": {
            "type": "unspecified",
            "label": "TIP_SHUNT"
          },
          "after": {
            "type": "passive",
            "label": "TIP_SHUNT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "U1.TIP",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "RING",
          "before": {
            "type": "unspecified",
            "label": "RING"
          },
          "after": {
            "type": "passive",
            "label": "RING"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "RING_SHUNT",
          "before": {
            "type": "unspecified",
            "label": "RING_SHUNT"
          },
          "after": {
            "type": "passive",
            "label": "RING_SHUNT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "JP1.4",
          "sourceNet": "TIP_SHUNT",
          "before": {
            "type": "unspecified",
            "label": "TIP_SHUNT"
          },
          "after": {
            "type": "passive",
            "label": "TIP_SHUNT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        },
        {
          "number": "JP1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Audio_Jack_Breakout/Hardware/SparkFun_Audio_Jack_Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Audio_Jack_Breakout",
      "commit": "f0329895d5650231a612e34d667e27eaddbd1ccb",
      "boardURL": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/Hardware/SparkFun_Audio_Jack_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/Hardware/SparkFun_Audio_Jack_Breakout.sch",
      "schematicSha256": "a1ba67406630da38c4e726146a3b1c1489f3768e32aee7286b5675cf8a363ac8",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Audio_Jack_Breakout/blob/f0329895d5650231a612e34d667e27eaddbd1ccb/LICENSE.md",
      "sourceArchiveSha256": "21ff41b6d9291664c2e19ca71a0dcc6ee4c910fcc940b97a58d768384c3565a0",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "U1.RSH: unresolved electrical role on RING_SHUNT.",
        "U1.RING: unresolved electrical role on RING.",
        "U1.TSH: unresolved electrical role on TIP_SHUNT.",
        "U1.TIP: unresolved electrical role on TIP.",
        "JP1.2: unresolved electrical role on RING.",
        "JP1.3: unresolved electrical role on RING_SHUNT.",
        "JP1.4: unresolved electrical role on TIP_SHUNT.",
        "JP1.5: unresolved electrical role on TIP."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "U1.RSH: unresolved electrical role on RING_SHUNT.",
          "U1.RING: unresolved electrical role on RING.",
          "U1.TSH: unresolved electrical role on TIP_SHUNT.",
          "U1.TIP: unresolved electrical role on TIP.",
          "JP1.2: unresolved electrical role on RING.",
          "JP1.3: unresolved electrical role on RING_SHUNT.",
          "JP1.4: unresolved electrical role on TIP_SHUNT.",
          "JP1.5: unresolved electrical role on TIP."
        ]
      },
      "optionalAssemblyReview": {
        "refs": [
          "U1"
        ],
        "scope": "Manufacturer primary product photo and exact board-only product variant; user-fitted device/control footprint is a ghost outline, not an asserted populated component. Assembly lands are not separate external wiring ports."
      }
    }
  },
  "sparkfun-module-prt14380": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 8.492,
        "y": -1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "V_BATT",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V_BATT. Physical source contact J1.2.",
        "x": 8.492,
        "y": 1,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "V_BATT",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V_BATT. Physical source contact J2.1.",
        "x": 14.605,
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
        "id": "j2-2",
        "number": "J2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.2.",
        "x": 14.605,
        "y": -16.51,
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
        "id": "j3-gnd",
        "number": "J3.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.GND.",
        "x": -11.496081,
        "y": 1.331419,
        "size": [
          1.75,
          0.4
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-id",
        "number": "J3.ID",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.ID.",
        "x": -11.496081,
        "y": 0.681419,
        "size": [
          1.75,
          0.4
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-dplus",
        "number": "J3.D+",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.D+.",
        "x": -11.496081,
        "y": 0.031419,
        "size": [
          1.75,
          0.4
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-d-",
        "number": "J3.D-",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.D-.",
        "x": -11.496081,
        "y": -0.618581,
        "size": [
          1.75,
          0.4
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-vbus",
        "number": "J3.VBUS",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J3.VBUS.",
        "x": -11.496081,
        "y": -1.268581,
        "size": [
          1.75,
          0.4
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-sheild2",
        "number": "J3.SHEILD2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact J3.SHEILD2.",
        "x": -11.221081,
        "y": 2.831019,
        "size": [
          1.46,
          2
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J4.1.",
        "x": -14.605,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.2.",
        "x": -14.605,
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
        "id": "bt1-2",
        "number": "BT1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact BT1.2.",
        "x": 5.334,
        "y": 0,
        "size": [
          5.5,
          7.5
        ],
        "shape": "rect",
        "connector": "BT1",
        "back": true,
        "smd": true
      },
      {
        "id": "bt1-1",
        "number": "BT1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact BT1.1.",
        "x": 5.334,
        "y": 15.3,
        "size": [
          5.5,
          5.5
        ],
        "shape": "rect",
        "connector": "BT1",
        "back": true,
        "smd": true
      },
      {
        "id": "bt1-3",
        "number": "BT1.3",
        "label": "V_BATT",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V_BATT. Physical source contact BT1.3.",
        "x": 5.334,
        "y": -15.3,
        "size": [
          5.5,
          5.5
        ],
        "shape": "rect",
        "connector": "BT1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.652\" y=\"-4.672\" width=\"6.7\" height=\"16.71\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.692\" y=\"-4.0\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.097\" y=\"-12.319\" width=\"1.524\" height=\"5.588\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"-14.354\" width=\"1.6\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.38125\" y=\"-14.5415\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.19075\" y=\"-13.11275\" width=\"0.9525\" height=\"1.74625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.179\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.655\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.131\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.737\" y=\"-13.31\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.607\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.083\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.813\" y=\"-13.31\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.087\" y=\"-13.31\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.724\" y=\"-13.31\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.559\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.366\" y=\"-12.7\" width=\"22.479\" height=\"25.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>BT1 round housing from manufacturer package circles; finish representative</title><circle cx=\"5.334\" cy=\"0.0\" r=\"12.25\" fill=\"none\" stroke=\"#87958d\" stroke-width=\".22\"/></g>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Sparkfun_Adjustable_LiPo_Charger.brd",
      "boardSha256": "191b9c044aea17cc10cfba77a7f68fc77ece99c3bed6903de184746b17d44f88",
      "sourceBounds": [
        0,
        0,
        31.75,
        38.1
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J4",
        "BT1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "J1.2 supply role verified from connected power pins.",
        "J2.1 supply role verified from connected power pins."
      ],
      "pinOverrides": [
        {
          "number": "J1.2",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "power_in",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VBAT",
              "direction": "pwr"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Adjustable_Lipo_Charger/Hardware/Sparkfun_Adjustable_LiPo_Charger.sch"
        },
        {
          "number": "J2.1",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "power_in",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VBAT",
              "direction": "pwr"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Adjustable_Lipo_Charger/Hardware/Sparkfun_Adjustable_LiPo_Charger.sch"
        },
        {
          "number": "BT1.3",
          "sourceNet": "V_BATT",
          "before": {
            "type": "unspecified",
            "label": "V_BATT"
          },
          "after": {
            "type": "power_in",
            "label": "V_BATT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VBAT",
              "direction": "pwr"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Adjustable_Lipo_Charger/Hardware/Sparkfun_Adjustable_LiPo_Charger.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Adjustable_Lipo_Charger",
      "commit": "868eacc48301330d7427ae267d21163763f37c5c",
      "boardURL": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/Hardware/Sparkfun_Adjustable_LiPo_Charger.brd",
      "schematicURL": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/Hardware/Sparkfun_Adjustable_LiPo_Charger.sch",
      "schematicSha256": "079ae19c9940fd2e4055c41962aca608ae3a661102fc6b7680bf3999f392833a",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Adjustable_Lipo_Charger/blob/868eacc48301330d7427ae267d21163763f37c5c/LICENSE.md",
      "sourceArchiveSha256": "591df329f43b54df20d44fa4d183f8ded05ebabb9f55f224b19fb1f1156d5338",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "J1.2: non-rail V_BATT is marked pwr in the source symbol; independent role override required.",
        "J2.1: non-rail V_BATT is marked pwr in the source symbol; independent role override required."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [
          "J3.P$1",
          "J3.P$10",
          "J3.P$12",
          "J3.P$2",
          "J3.P$3",
          "J3.P$4",
          "J3.P$6",
          "J3.P$8"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "J1.2: non-rail V_BATT is marked pwr in the source symbol; independent role override required.",
          "J2.1: non-rail V_BATT is marked pwr in the source symbol; independent role override required.",
          "BT1.3: non-rail V_BATT is marked pwr in the source symbol; independent role override required."
        ]
      },
      "roundHousingReview": [
        {
          "ref": "BT1",
          "package": "BATTCON_24.5MM_SMD",
          "sourceLayer": "51",
          "center": [
            5.334,
            0
          ],
          "radius": 12.25,
          "back": true
        }
      ]
    }
  },
  "sparkfun-module-dev20690": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 2.77,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact J1.2.",
        "x": 1.77,
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
        "x": 0.77,
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
        "x": -0.23,
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
        "id": "j2-sleeve",
        "number": "J2.SLEEVE",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J2.SLEEVE.",
        "x": -11.103019,
        "y": -10.2873,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-tip",
        "number": "J2.TIP",
        "label": "INL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: INL. Physical source contact J2.TIP.",
        "x": -11.103019,
        "y": -0.9873,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ring",
        "number": "J2.RING",
        "label": "INR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: INR. Physical source contact J2.RING.",
        "x": -4.203019,
        "y": -8.3873,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-tsh",
        "number": "J2.TSH",
        "label": "INL_SCRWPN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INL_SCRWPN. Physical source contact J2.TSH.",
        "x": -6.903019,
        "y": 3.0627,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-rsh",
        "number": "J2.RSH",
        "label": "INR_SCRWPN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INR_SCRWPN. Physical source contact J2.RSH.",
        "x": -4.203019,
        "y": -11.1873,
        "size": [
          2.5,
          1.2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "SPK_L_+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SPK_L_+. Physical source contact J5.1.",
        "x": 17.78,
        "y": 5.25,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "SPK_L_-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SPK_L_-. Physical source contact J5.2.",
        "x": 17.78,
        "y": 1.75,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "SPK_R_-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SPK_R_-. Physical source contact J5.3.",
        "x": 17.78,
        "y": -1.75,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "SPK_R_+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SPK_R_+. Physical source contact J5.4.",
        "x": 17.78,
        "y": -5.25,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J4.1.",
        "x": 11.656063,
        "y": -9.1059,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J4.2.",
        "x": 8.156063,
        "y": -9.1059,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J6.1.",
        "x": -17.78,
        "y": -5.25,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J6",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "INR_SCRWPN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INR_SCRWPN. Physical source contact J6.2.",
        "x": -17.78,
        "y": -1.75,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "INL_SCRWPN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INL_SCRWPN. Physical source contact J6.3.",
        "x": -17.78,
        "y": 1.75,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "!SDZ!",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !SDZ!. Physical source contact J6.4.",
        "x": -17.78,
        "y": 5.25,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.1.",
        "x": 1.778,
        "y": -10.523219,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.2.",
        "x": 2.5908,
        "y": -10.523219,
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
        "id": "tp1-1",
        "number": "TP1.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact TP1.1.",
        "x": 0,
        "y": -8.89,
        "size": [
          0.6096,
          0.6096
        ],
        "shape": "circle",
        "connector": "TP1",
        "back": false,
        "drill": 0.381
      },
      {
        "id": "tp2-1",
        "number": "TP2.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact TP2.1.",
        "x": 0,
        "y": -5.08,
        "size": [
          0.6096,
          0.6096
        ],
        "shape": "circle",
        "connector": "TP2",
        "back": false,
        "drill": 0.381
      }
    ],
    "artwork": "<rect x=\"-21.38\" y=\"-7.5\" width=\"7.0\" height=\"15.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.38\" y=\"-7.5\" width=\"7.0\" height=\"15.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.653019\" y=\"-15.1873\" width=\"6.0\" height=\"17.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.906063\" y=\"-12.7059\" width=\"8.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.73\" y=\"-12.22\" width=\"6.0\" height=\"4.25\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.041659\" y=\"2.0259\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2423\" y=\"-4.677409\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.978278\" y=\"8.477444\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.202359\" y=\"-4.203322\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.964562\" y=\"7.479222\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.964559\" y=\"8.5384\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.959481\" y=\"-0.8723\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.959478\" y=\"0.2326\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1978\" y=\"-0.510159\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.913319\" y=\"7.706744\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.314\" y=\"3.0052\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.234497\" y=\"3.000119\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.598041\" y=\"-6.445059\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.598041\" y=\"-5.390959\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.003681\" y=\"-0.750384\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.903856\" y=\"0.557722\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.888619\" y=\"7.3827\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.194119\" y=\"8.710041\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.163641\" y=\"-1.503297\" width=\"0.5\" height=\"1.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.6322\" y=\"-7.244078\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.8049\" y=\"-10.541\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.0668\" y=\"-11.539219\" width=\"2.2352\" height=\"2.032\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_Qwiic_Speaker_Amp.brd",
      "boardSha256": "b2cdb12504c5b05efea8f7cd23b31b3e985e12d196f3a3e66d6f583daa4bb81f",
      "sourceBounds": [
        0,
        0,
        43.18,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J5",
        "J4",
        "J6",
        "JP1",
        "TP1",
        "TP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "J2.TSH passive pass-through verified from schematic endpoints.",
        "J2.RSH passive pass-through verified from schematic endpoints.",
        "J6.2 passive pass-through verified from schematic endpoints.",
        "J6.3 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "J2.TSH",
          "sourceNet": "INL_SCRWPN",
          "before": {
            "type": "unspecified",
            "label": "INL_SCRWPN"
          },
          "after": {
            "type": "passive",
            "label": "INL_SCRWPN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_Qwiic_Speaker_Amp/Hardware/SparkFun_Qwiic_Speaker_Amp.sch"
        },
        {
          "number": "J2.RSH",
          "sourceNet": "INR_SCRWPN",
          "before": {
            "type": "unspecified",
            "label": "INR_SCRWPN"
          },
          "after": {
            "type": "passive",
            "label": "INR_SCRWPN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_Qwiic_Speaker_Amp/Hardware/SparkFun_Qwiic_Speaker_Amp.sch"
        },
        {
          "number": "J6.2",
          "sourceNet": "INR_SCRWPN",
          "before": {
            "type": "unspecified",
            "label": "INR_SCRWPN"
          },
          "after": {
            "type": "passive",
            "label": "INR_SCRWPN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_Qwiic_Speaker_Amp/Hardware/SparkFun_Qwiic_Speaker_Amp.sch"
        },
        {
          "number": "J6.3",
          "sourceNet": "INL_SCRWPN",
          "before": {
            "type": "unspecified",
            "label": "INL_SCRWPN"
          },
          "after": {
            "type": "passive",
            "label": "INL_SCRWPN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/SparkFun_Qwiic_Speaker_Amp/Hardware/SparkFun_Qwiic_Speaker_Amp.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_Qwiic_Speaker_Amp",
      "commit": "0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf",
      "boardURL": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/Hardware/SparkFun_Qwiic_Speaker_Amp.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/Hardware/SparkFun_Qwiic_Speaker_Amp.sch",
      "schematicSha256": "0ffd0821e0cfc32f6d5d5cf8c5583091f9469fc24c260cb47e5f1d328985beb4",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_Qwiic_Speaker_Amp/blob/0666c55c884f3d58f34ac0dac3905eb5b8ca0fcf/LICENSE.md",
      "sourceArchiveSha256": "89b596dd8d70d1e0f210d25b1be81d79f87ff32d0ba20ddac509141dc3b3704d",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "J2.TSH: unresolved electrical role on INL_SCRWPN.",
        "J2.RSH: unresolved electrical role on INR_SCRWPN.",
        "J6.2: unresolved electrical role on INR_SCRWPN.",
        "J6.3: unresolved electrical role on INL_SCRWPN."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "J2.TSH: unresolved electrical role on INL_SCRWPN.",
          "J2.RSH: unresolved electrical role on INR_SCRWPN.",
          "J6.2: unresolved electrical role on INR_SCRWPN.",
          "J6.3: unresolved electrical role on INL_SCRWPN."
        ]
      }
    }
  },
  "sparkfun-module-prt13777": {
    "contacts": [
      {
        "id": "jp1-dplus1",
        "number": "JP1.D+1",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP1.D+1.",
        "x": 6.35,
        "y": -11.651,
        "size": [
          0.4,
          1.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-d-1",
        "number": "JP1.D-1",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP1.D-1.",
        "x": 7,
        "y": -11.651,
        "size": [
          0.4,
          1.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-vbus1",
        "number": "JP1.VBUS1",
        "label": "V_USB",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_USB. Physical source contact JP1.VBUS1.",
        "x": 7.65,
        "y": -11.651,
        "size": [
          0.4,
          1.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-id1",
        "number": "JP1.ID1",
        "label": "USB_ID",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB_ID. Physical source contact JP1.ID1.",
        "x": 5.7,
        "y": -11.651,
        "size": [
          0.4,
          1.4
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
        "x": 5.05,
        "y": -11.651,
        "size": [
          0.4,
          1.4
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.1.",
        "x": -7.095,
        "y": -2.81,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "BATTERY_IN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATTERY_IN. Physical source contact JP6.2.",
        "x": -7.095,
        "y": -4.81,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp10-1",
        "number": "JP10.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP10.1.",
        "x": -8.89,
        "y": 15.24,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "rect",
        "connector": "JP10",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp10-2",
        "number": "JP10.2",
        "label": "V_PU",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: V_PU. Physical source contact JP10.2.",
        "x": -6.35,
        "y": 15.24,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP10.3.",
        "x": -3.81,
        "y": 15.24,
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
        "id": "jp10-4",
        "number": "JP10.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP10.4.",
        "x": -1.27,
        "y": 15.24,
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
        "id": "jp12-1",
        "number": "JP12.1",
        "label": "SYSOFF",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SYSOFF. Physical source contact JP12.1.",
        "x": 10.16,
        "y": -6.35,
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
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": -15.24,
        "y": -2.54,
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
        "label": "BATTERY_IN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATTERY_IN. Physical source contact JP5.2.",
        "x": -15.24,
        "y": -5.08,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "V_USB",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_USB. Physical source contact JP3.1.",
        "x": -5.743,
        "y": -12.8905,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": -9.243,
        "y": -12.8905,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP7.1.",
        "x": 5.87,
        "y": 12.8905,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "JP7",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.2.",
        "x": 9.37,
        "y": 12.8905,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.1.",
        "x": 8.89,
        "y": 15.24,
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
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP8.2.",
        "x": 6.35,
        "y": 15.24,
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
        "x": 8.62,
        "y": 10.4775,
        "size": [
          1.6,
          1.6
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp9-2",
        "number": "JP9.2",
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP9.2.",
        "x": 6.62,
        "y": 10.4775,
        "size": [
          1.6,
          1.6
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "V_USB",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_USB. Physical source contact JP4.1.",
        "x": -6.35,
        "y": -10.16,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.2.",
        "x": -8.89,
        "y": -10.16,
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
        "id": "jp11-1",
        "number": "JP11.1",
        "label": "!CE!",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !CE!. Physical source contact JP11.1.",
        "x": 3.81,
        "y": 15.24,
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
        "label": "GPOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPOUT. Physical source contact JP11.2.",
        "x": 1.27,
        "y": 15.24,
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
        "id": "jp13-1",
        "number": "JP13.1",
        "label": "1.8V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 1.8V. Physical source contact JP13.1.",
        "x": -15.24,
        "y": 7.62,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "V_USB",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: V_USB. Physical source contact JP2.1.",
        "x": -6.35,
        "y": -15.24,
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
        "x": -8.89,
        "y": -15.24,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact TP1.P$1.",
        "x": 6.4135,
        "y": -9.8425,
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
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact TP2.P$1.",
        "x": 5.08,
        "y": -9.8425,
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
        "id": "jp1-shield1",
        "number": "JP1.SHIELD1",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact JP1.SHIELD1.",
        "x": 10.03,
        "y": -14.351,
        "size": [
          1.8,
          1.5
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
        "x": 2.67,
        "y": -14.351,
        "size": [
          1.8,
          1.5
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
        "x": 6.35,
        "y": -14.351,
        "size": [
          2.5,
          1.5
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-13.795\" y=\"-7.81\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.35\" y=\"-17.351\" width=\"9.6\" height=\"6.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.72\" y=\"9.4905\" width=\"7.8\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.393\" y=\"-16.4905\" width=\"7.8\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.62\" y=\"8.6775\" width=\"6.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.416\" y=\"-8.938\" width=\"4.1\" height=\"6.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.017\" y=\"-0.762\" width=\"4.826\" height=\"4.064\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.65\" y=\"-5.51\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.62\" y=\"-4.54\" width=\"2.7\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.25\" y=\"9.31\" width=\"3.1\" height=\"1.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.15\" y=\"6.77\" width=\"3.1\" height=\"1.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.15\" y=\"4.23\" width=\"3.1\" height=\"1.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.25\" y=\"4.23\" width=\"3.1\" height=\"1.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.385\" y=\"-8.407\" width=\"1.93\" height=\"1.574\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"-8.407\" width=\"1.93\" height=\"1.574\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.56\" y=\"-3.221\" width=\"1.2\" height=\"0.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.94\" y=\"-2.205\" width=\"1.2\" height=\"0.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"6.566\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.264\" y=\"5.296\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.549\" y=\"0.838\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"-11.151\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.1655\" y=\"2.108\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.741\" y=\"-9.246\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.419\" y=\"-11.151\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.056\" y=\"2.9465\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.499\" y=\"9.804\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"9.804\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.283\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.013\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.108\" y=\"9.804\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.419\" y=\"9.804\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.016\" y=\"-11.049\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7795\" y=\"1.0795\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.6205\" y=\"6.604\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.6205\" y=\"4.064\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.6995\" y=\"9.144\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "sparkfun-battery-babysitter.brd",
      "boardSha256": "8ef4fef8a1cf40eb6c866631f7e1a277656e9df615843cac785cfbed847463cf",
      "sourceBounds": [
        0,
        0,
        33.02,
        33.02
      ],
      "selectedConnectors": [
        "JP1",
        "JP6",
        "JP10",
        "JP12",
        "JP5",
        "JP3",
        "JP7",
        "JP8",
        "JP9",
        "JP4",
        "JP11",
        "JP13",
        "JP2",
        "TP1",
        "TP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.D+1 passive pass-through verified from schematic endpoints.",
        "JP1.D-1 passive pass-through verified from schematic endpoints.",
        "JP1.ID1 passive pass-through verified from schematic endpoints.",
        "TP1.P$1 passive pass-through verified from schematic endpoints.",
        "TP2.P$1 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP1.D+1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
        },
        {
          "number": "JP1.D-1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
        },
        {
          "number": "JP1.ID1",
          "sourceNet": "USB_ID",
          "before": {
            "type": "unspecified",
            "label": "USB_ID"
          },
          "after": {
            "type": "passive",
            "label": "USB_ID"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
        },
        {
          "number": "TP1.P$1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
        },
        {
          "number": "TP2.P$1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/Battery_Babysitter/Hardware/sparkfun-battery-babysitter.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Battery_Babysitter",
      "commit": "c3cb25541fb2fba7b2803e078727e8bec7a3da13",
      "boardURL": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/Hardware/sparkfun-battery-babysitter.brd",
      "schematicURL": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/Hardware/sparkfun-battery-babysitter.sch",
      "schematicSha256": "8470f20139d2d9e6dd233dc6933df9cfb26ea2af7da28330769f991f9cb38ae4",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Battery_Babysitter/blob/c3cb25541fb2fba7b2803e078727e8bec7a3da13/LICENSE.md",
      "sourceArchiveSha256": "52c95bfcca9c91f9450fde8eb465ad22c83848218ac0b71596d52301279c67c5",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.D+1: unresolved electrical role on D+.",
        "JP1.D-1: unresolved electrical role on D-.",
        "JP1.ID1: unresolved electrical role on USB_ID.",
        "TP1.P$1: unresolved electrical role on D-.",
        "TP2.P$1: unresolved electrical role on D+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.D+1: unresolved electrical role on D+.",
          "JP1.D-1: unresolved electrical role on D-.",
          "JP1.ID1: unresolved electrical role on USB_ID.",
          "JP1.SHIELD1: unresolved electrical role on SHIELD.",
          "JP1.SHIELD3: unresolved electrical role on SHIELD.",
          "JP1.SHIELD2: unresolved electrical role on SHIELD.",
          "TP1.P$1: unresolved electrical role on D-.",
          "TP2.P$1: unresolved electrical role on D+."
        ]
      }
    }
  }
};
