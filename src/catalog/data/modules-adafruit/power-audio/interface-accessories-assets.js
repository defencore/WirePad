// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-3435": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.1.",
        "x": -5.08,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -2.54,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "DELAY",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DELAY. Physical source contact JP1.3.",
        "x": 0,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "PWROUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PWROUT. Physical source contact JP1.4.",
        "x": 2.54,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "DONE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DONE. Physical source contact JP1.5.",
        "x": 5.08,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-3.0\" y=\"-8.38\" width=\"6.0\" height=\"6.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.082\" y=\"0.726\" width=\"3.0\" height=\"3.3735\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.064\" y=\"0.963\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.8996\" y=\"1.6256\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.425\" y=\"-2.353\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.833\" y=\"2.413\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.842\" y=\"-4.216\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.153\" y=\"2.54\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.366\" y=\"-1.651\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.064\" y=\"-1.651\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPL5110.brd",
      "boardSha256": "b061846be953bc507fd5a4ce2a502eb1391170cfa7c20995650e8a8ce8e6d3d1",
      "sourceBounds": [
        -1.524,
        -0.381,
        16.256,
        18.669
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$7",
          "x": 6.35,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$8",
          "x": -6.35,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB",
      "commit": "f1967694bc20333d31b167e4eeaff58742e37bba",
      "boardURL": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/Adafruit%20TPL5110.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/Adafruit%20TPL5110.sch",
      "schematicSha256": "f41e4845063ce1f30fdd5daf840ca7827bef5a9b9b3b58f51b4b1c617aeab453",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/license.txt",
      "sourceArchiveSha256": "8a8c038ddcc17a69c87b936bc9024cfca9775d325fdf1c16b0b2fd74babac5a9",
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
  "adafruit-module-3573": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.1.",
        "x": -5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "DELAY",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DELAY. Physical source contact JP1.3.",
        "x": 0,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "ENOUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: ENOUT. Physical source contact JP1.4.",
        "x": 2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "DONE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DONE. Physical source contact JP1.5.",
        "x": 5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "b1-1",
        "number": "B1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B1.1.",
        "x": 1,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "B1",
        "back": true,
        "smd": true
      },
      {
        "id": "b1-2",
        "number": "B1.2",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact B1.2.",
        "x": -1,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "B1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.0\" y=\"-8.38\" width=\"6.0\" height=\"6.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.304\" y=\"0.472\" width=\"3.0\" height=\"3.3735\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.46\" y=\"0.963\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.425\" y=\"-2.353\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.842\" y=\"-4.216\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.912\" y=\"2.413\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.248\" y=\"2.54\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.0\" y=\"-8.969\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.747\" y=\"-2.413\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"-2.54\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPL5111 Reset Enable Timer.brd",
      "boardSha256": "5469ffa16d557adc3fe37751d980e823c292b7ff933db4f5d915edfb25a39660",
      "sourceBounds": [
        0,
        0,
        17.78,
        19.05
      ],
      "selectedConnectors": [
        "JP1",
        "B1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$8",
          "x": 6.35,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$9",
          "x": -6.35,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB",
      "commit": "7a19d15939cb776f1931c3b4b38ac35509f06bd3",
      "boardURL": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/Adafruit%20TPL5111%20Reset%20Enable%20Timer.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/Adafruit%20TPL5111%20Reset%20Enable%20Timer.sch",
      "schematicSha256": "6cb7b9e1497613ad642e3fa8c6de5f224031c9b3340bc8683559862c3333eebb",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/license.txt",
      "sourceArchiveSha256": "b957b04dddd2833241b36516266e9b6cb5482d1d721b213a434449ebeddf3a5f",
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
  "adafruit-module-5639": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIGNAL. Physical source contact JP1.1.",
        "x": -10.033,
        "y": -2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.2.",
        "x": -10.033,
        "y": 0,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -10.033,
        "y": 2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x4-1",
        "number": "X4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.1.",
        "x": -5.3645,
        "y": 2,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-2",
        "number": "X4.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X4.2.",
        "x": -5.3645,
        "y": 0,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-3",
        "number": "X4.3",
        "label": "SIGNAL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIGNAL. Physical source contact X4.3.",
        "x": -5.3645,
        "y": -2,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "SIGNAL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIGNAL. Physical source contact JP2.1.",
        "x": -2.54,
        "y": 6.985,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.2.",
        "x": 0,
        "y": 6.985,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.3.",
        "x": 2.54,
        "y": 6.985,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.62\" y=\"-2.4985\" width=\"2.0\" height=\"4.997\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.595\" y=\"-1.6\" width=\"2.0\" height=\"3.2\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.8636\" y=\"-1.0374\" width=\"1.3208\" height=\"3.3448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-7.131\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.563\" y=\"6.585\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.311\" y=\"0.1905\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"-5.372\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"-3.848\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"-2.324\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.69\" y=\"-7.163\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.197\" y=\"-3.404\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.198\" y=\"6.553\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.286\" y=\"-2.159\" width=\"4.318\" height=\"4.699\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.921\" y=\"0.254\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.9845\" y=\"-4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "IR STEMMA LED Emitter.brd",
      "boardSha256": "19a72d16275acc1c11ffd83928dd37b7d0125f6942ddc8b2c4f5a5e42dcfb3ec",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "X4",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$8",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB",
      "commit": "bf82859bcb77e3b545f9ae6dc629a24ca0695343",
      "boardURL": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/IR%20STEMMA%20LED%20Emitter.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/IR%20STEMMA%20LED%20Emitter.sch",
      "schematicSha256": "1c68a06ab323b7c83620e0222487057928a22035f53679657e3dc56f2112c2d7",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/license.txt",
      "sourceArchiveSha256": "c39449760f2a2bf6cc8be6a1a212fcd65c34a8ec9a7829604dff32445fe04dcd",
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
  "adafruit-module-6354": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.1.",
        "x": -5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "PWM",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PWM. Physical source contact JP1.3.",
        "x": 0,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "+24V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +24V. Physical source contact JP1.4.",
        "x": 2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "LEDK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LEDK. Physical source contact JP1.5.",
        "x": 5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "LEDK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LEDK. Physical source contact X1.1.",
        "x": 8.89,
        "y": -1.8,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "+24V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +24V. Physical source contact X1.2.",
        "x": 8.89,
        "y": 1.7,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x2-1",
        "number": "X2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X2.1.",
        "x": -8.89,
        "y": 1.8,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X2",
        "back": false,
        "drill": 1
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.2.",
        "x": -8.89,
        "y": -1.7,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-12.49\" y=\"-3.4\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.49\" y=\"-3.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.938\" y=\"-9.396\" width=\"5.4\" height=\"6.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.097\" y=\"-0.06\" width=\"5.876\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.825\" y=\"3.239\" width=\"2.7\" height=\"1.65\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.754\" y=\"-2.624\" width=\"1.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.978\" y=\"-2.159\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"0.597\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"-2.451\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"-0.94\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"2.121\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.071\" y=\"-6.147\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.071\" y=\"-4.623\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.213\" y=\"-2.134\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.071\" y=\"-9.195\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.071\" y=\"-7.671\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPS61169 Constant Current Boost Converter LED Driver.brd",
      "boardSha256": "22622f6e0128bcb354970bcd1f5d957a282319632c4b21763f3e3a8d3ad35095",
      "sourceBounds": [
        0,
        0,
        25.4,
        19.05
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$7",
          "x": -10.16,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$18",
          "x": -10.16,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": 10.16,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$20",
          "x": 10.16,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB",
      "commit": "c538e5fd9950a652d65cf40744e51a227d458ab2",
      "boardURL": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/Adafruit%20TPS61169%20Constant%20Current%20Boost%20Converter%20LED%20Driver.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/Adafruit%20TPS61169%20Constant%20Current%20Boost%20Converter%20LED%20Driver.sch",
      "schematicSha256": "ff47770a3707bab19912902bb9874639dac18628e6445128d2aaea7655066b89",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/license.txt",
      "sourceArchiveSha256": "2fc3ec905e0aeec8d8d561b18042887d8f23a95ce8882557b4ad82576b01cff3",
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
  "adafruit-module-5959": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "!RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !RESET. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.546,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.546,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.4\" y=\"-8.134\" width=\"6.8\" height=\"4.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.68\" y=\"-2.408\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.373\" y=\"-2.516\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.891\" y=\"-2.87\" width=\"1.4\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.2286\" y=\"0.7406\" width=\"1.3208\" height=\"3.3448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.525\" y=\"-3.575\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.096\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.867\" y=\"-5.1945\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.023\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.607\" y=\"2.057\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.07\" y=\"2.057\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"5.6515\" y=\"0.254\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.794\" y=\"-5.207\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.8105\" y=\"-5.588\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit S-35710 Breakout.brd",
      "boardSha256": "c73e864165b283be90056b0bdc9407176ab68a8c840c4fe28fc7ed44f1491679",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-S-35710-Breakout-PCB",
      "commit": "acc0684ee70d88a395b09dcea589cb5b443159db",
      "boardURL": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/Adafruit%20S-35710%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/Adafruit%20S-35710%20Breakout.sch",
      "schematicSha256": "58641fcca63d907801db7b3be63ba00a763a2d06ff93d400aad82dc6cb7e0aff",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/license.txt",
      "sourceArchiveSha256": "c1a2923704ed2ee3f55fc612ee819fb1d5a2c72b0c2d7202a587be6e82f7bf73",
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
  "adafruit-module-4648": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -7.62,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "AOUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: AOUT. Physical source contact JP3.2.",
        "x": -5.08,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "AIN3",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: AIN3. Physical source contact JP3.3.",
        "x": -2.54,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "AIN2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: AIN2. Physical source contact JP3.4.",
        "x": 0,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "AIN1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: AIN1. Physical source contact JP3.5.",
        "x": 2.54,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "AIN0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: AIN0. Physical source contact JP3.6.",
        "x": 5.08,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.7.",
        "x": 7.62,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -5.08,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -2.54,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.3.",
        "x": 0,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.4.",
        "x": 2.54,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "OSC",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: OSC. Physical source contact JP2.5.",
        "x": 5.08,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.546,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.546,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.546,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.546,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.92\" y=\"-3.7\" width=\"10.38\" height=\"7.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.242\" y=\"2.7355\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.242\" y=\"-5.7735\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.842\" y=\"-4.591\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.994\" y=\"-0.254\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.772\" y=\"5.169\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.772\" y=\"3.632\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"1.27\" y=\"-2.159\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"-2.159\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.651\" y=\"3.556\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.016\" y=\"-2.159\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_PCF8591.brd",
      "boardSha256": "1707df29ec83e1947cac18dfd43d668d71f39834fb69cb5c1074ab919afe2b8b",
      "sourceBounds": [
        0,
        0,
        25.4,
        22.86
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP3",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-PCF8591-PCB",
      "commit": "618da56679c56b97583774e2c2f724c453e78396",
      "boardURL": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/Adafruit_PCF8591.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/Adafruit_PCF8591.sch",
      "schematicSha256": "72b1f8bbce7f5b4f444822a84ed5440b18d15d7ad60d94d5fb219bafce8748ff",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/license.txt",
      "sourceArchiveSha256": "efee2f3c42f4df636e7fd7e38d814c994983ee2fb860a6af0986cc87053056d9",
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
  "adafruit-module-5335": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "CTS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CTS. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "RXD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RXD. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "RTS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: RTS. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP4.1.",
        "x": -6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Onboard USB-to-UART internal regulator 3.3 V output rail. CAD net: 3.3V. Physical source contact JP4.2.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.3.",
        "x": -6.35,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST. Physical source contact JP4.4.",
        "x": -6.35,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "GPIO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO3. Physical source contact JP4.5.",
        "x": -6.35,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP4.6.",
        "x": -6.35,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "#SUSP",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: #SUSP. Physical source contact JP4.7.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "SUSP",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SUSP. Physical source contact JP4.8.",
        "x": -6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "CTS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CTS. Physical source contact JP2.1.",
        "x": 6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "RTS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: RTS. Physical source contact JP2.2.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "RXD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RXD. Physical source contact JP2.3.",
        "x": 6.35,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP2.4.",
        "x": 6.35,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "DSR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DSR. Physical source contact JP2.5.",
        "x": 6.35,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "DTR",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DTR. Physical source contact JP2.6.",
        "x": 6.35,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "DCD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DCD. Physical source contact JP2.7.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "RI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RI. Physical source contact JP2.8.",
        "x": 6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "x2-m3",
        "number": "X2.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M3.",
        "x": 4.32,
        "y": -12.259,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m4",
        "number": "X2.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M4.",
        "x": -4.32,
        "y": -12.259,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m2",
        "number": "X2.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M2.",
        "x": -4.32,
        "y": -8.079,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m1",
        "number": "X2.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M1.",
        "x": 4.32,
        "y": -8.079,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-a1b12",
        "number": "X2.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.A1B12.",
        "x": 3.2,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a4b9",
        "number": "X2.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.A4B9.",
        "x": 2.4,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b8",
        "number": "X2.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.B8.",
        "x": 1.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a5",
        "number": "X2.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X2.A5.",
        "x": 1.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b7",
        "number": "X2.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X2.B7.",
        "x": 0.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a6",
        "number": "X2.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X2.A6.",
        "x": 0.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a7",
        "number": "X2.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X2.A7.",
        "x": -0.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b6",
        "number": "X2.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X2.B6.",
        "x": -0.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a8",
        "number": "X2.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.A8.",
        "x": -1.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b5",
        "number": "X2.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X2.B5.",
        "x": -1.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b4a9",
        "number": "X2.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.B4A9.",
        "x": -2.4,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b1a12",
        "number": "X2.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.B1A12.",
        "x": -3.2,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-14.859\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.222\" y=\"-0.349\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0445\" y=\"7.074\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0985\" y=\"7.074\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.7055\" y=\"7.0485\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.3245\" y=\"-4.7625\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.962\" y=\"-4.826\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.6475\" y=\"-4.674\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6385\" y=\"-4.801\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.346\" y=\"7.3275\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.15\" y=\"0.7745\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-2.5145\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8325\" y=\"-0.7495\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.0515\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5275\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit CP2102N Friend.brd",
      "boardSha256": "9d241a35085e357bedf6f56045d40f577d9488fce722f8feea75ef65d676c6f3",
      "sourceBounds": [
        0,
        0,
        17.78,
        27.94
      ],
      "selectedConnectors": [
        "JP1",
        "JP4",
        "JP2",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP4.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Exact source USB-UART power path connects this header to the internal regulated supply output, despite a generic pwr symbol direction.",
          "connectedSourcePins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VIO",
              "direction": "pwr"
            },
            {
              "part": "IC1",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-CP2102N-Friend-PCB/Adafruit CP2102N Friend.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$18",
          "x": 6.858,
          "y": -11.938,
          "drill": 2.2
        },
        {
          "sourceRef": "U$19",
          "x": -6.858,
          "y": -11.938,
          "drill": 2.2
        }
      ],
      "repo": "adafruit/Adafruit-CP2102N-Friend-PCB",
      "commit": "1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb",
      "boardURL": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/Adafruit%20CP2102N%20Friend.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/Adafruit%20CP2102N%20Friend.sch",
      "schematicSha256": "c57f64b5d9d5f6a9953fad49b6bc1f1538a705bb4159e4bbe8a11b83b1763bed",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/license.txt",
      "sourceArchiveSha256": "cf6b6ecdea8210139108478f467cbf9ee5d1f95100b43f585f560a6ce834bf5e",
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
  "adafruit-module-5568": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "CTS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CTS. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "RXD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RXD. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "RTS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: RTS. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP4.1.",
        "x": -6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Onboard USB-to-UART internal regulator 3.3 V output rail. CAD net: 3.3V. Physical source contact JP4.2.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.3.",
        "x": -6.35,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST. Physical source contact JP4.4.",
        "x": -6.35,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "GPIO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO3. Physical source contact JP4.5.",
        "x": -6.35,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP4.6.",
        "x": -6.35,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "#SUSP",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: #SUSP. Physical source contact JP4.7.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "SUSP",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SUSP. Physical source contact JP4.8.",
        "x": -6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "CTS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CTS. Physical source contact JP2.1.",
        "x": 6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "RTS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: RTS. Physical source contact JP2.2.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "RXD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RXD. Physical source contact JP2.3.",
        "x": 6.35,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP2.4.",
        "x": 6.35,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "DSR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DSR. Physical source contact JP2.5.",
        "x": 6.35,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "DTR",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DTR. Physical source contact JP2.6.",
        "x": 6.35,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "DCD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DCD. Physical source contact JP2.7.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "RI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RI. Physical source contact JP2.8.",
        "x": 6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "x2-m3",
        "number": "X2.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M3.",
        "x": 4.32,
        "y": -12.259,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m4",
        "number": "X2.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M4.",
        "x": -4.32,
        "y": -12.259,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m2",
        "number": "X2.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M2.",
        "x": -4.32,
        "y": -8.079,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-m1",
        "number": "X2.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M1.",
        "x": 4.32,
        "y": -8.079,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x2-a1b12",
        "number": "X2.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.A1B12.",
        "x": 3.2,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a4b9",
        "number": "X2.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.A4B9.",
        "x": 2.4,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b8",
        "number": "X2.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.B8.",
        "x": 1.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a5",
        "number": "X2.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X2.A5.",
        "x": 1.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b7",
        "number": "X2.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X2.B7.",
        "x": 0.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a6",
        "number": "X2.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X2.A6.",
        "x": 0.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a7",
        "number": "X2.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X2.A7.",
        "x": -0.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b6",
        "number": "X2.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X2.B6.",
        "x": -0.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a8",
        "number": "X2.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.A8.",
        "x": -1.25,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b5",
        "number": "X2.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X2.B5.",
        "x": -1.75,
        "y": -7.504,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b4a9",
        "number": "X2.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.B4A9.",
        "x": -2.4,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b1a12",
        "number": "X2.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.B1A12.",
        "x": -3.2,
        "y": -7.504,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-14.859\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.222\" y=\"-0.349\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0445\" y=\"7.074\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0985\" y=\"7.074\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.7055\" y=\"7.0485\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.3245\" y=\"-4.7625\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.962\" y=\"-4.826\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.6475\" y=\"-4.674\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6385\" y=\"-4.801\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.346\" y=\"7.3275\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.15\" y=\"0.7745\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-2.5145\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8325\" y=\"-0.7495\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.0515\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5275\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.4605\" y=\"-4.0005\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit CH9102F.brd",
      "boardSha256": "210bf179614c7d111edf135b1b49dba4d0d21fad38688f27133298880928af13",
      "sourceBounds": [
        0,
        0,
        17.78,
        27.94
      ],
      "selectedConnectors": [
        "JP1",
        "JP4",
        "JP2",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP4.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Exact source USB-UART power path connects this header to the internal regulated supply output, despite a generic pwr symbol direction.",
          "connectedSourcePins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SJ1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-WCH-CH9102F-Friend-PCB/Adafruit CH9102F.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$18",
          "x": 6.858,
          "y": -11.938,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -6.858,
          "y": -11.938,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-WCH-CH9102F-Friend-PCB",
      "commit": "eb022866b738f738971172c8725546e7b221369f",
      "boardURL": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/Adafruit%20CH9102F.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/Adafruit%20CH9102F.sch",
      "schematicSha256": "9508a2b89bbb403e43e1b850dfa9a986e75b5c08f419f2885610413d509e1821",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/license.txt",
      "sourceArchiveSha256": "d9c2fd1fce255fdfd8b338cdc94eaa82bad8cdc21f1b8ad92e891396f35c78b3",
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
  "adafruit-module-6223": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 8.916,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 8.916,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 8.916,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 8.916,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -8.916,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -8.916,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -8.916,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -8.916,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VREFIN",
        "type": "input",
        "description": "External DAC reference-voltage input. CAD net: VREFIN. Physical source contact JP2.1.",
        "x": -11.684,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "VOUTA",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTA. Physical source contact JP2.2.",
        "x": -9.144,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "VOUTB",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTB. Physical source contact JP2.3.",
        "x": -6.604,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "VOUTC",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTC. Physical source contact JP2.4.",
        "x": -4.064,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "VOUTD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTD. Physical source contact JP2.5.",
        "x": -1.524,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "VOUTE",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTE. Physical source contact JP2.6.",
        "x": 1.016,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "VOUTF",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTF. Physical source contact JP2.7.",
        "x": 3.556,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "VOUTG",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTG. Physical source contact JP2.8.",
        "x": 6.096,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "VOUTH",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VOUTH. Physical source contact JP2.9.",
        "x": 8.636,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.10.",
        "x": 11.176,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.604,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -4.064,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.524,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.016,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "!LDAC",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !LDAC. Physical source contact JP1.5.",
        "x": 3.556,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "!CLR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !CLR. Physical source contact JP1.6.",
        "x": 6.096,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 12.816,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 12.816,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -12.816,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -12.816,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-13.516\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.216\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.3842\" y=\"-2.6416\" width=\"4.5656\" height=\"5.0292\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.75\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.048\" y=\"-0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.214\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.232\" y=\"3.124\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.356\" y=\"2.311\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.769\" y=\"-1.575\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.007\" y=\"3.01\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"2.997\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.032\" y=\"-4.445\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.287\" y=\"-2.921\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit DAC7578P Breakout.brd",
      "boardSha256": "922d65f912d8a4faff167ce5e1bc7184021036a1fc12ec07b3e3e4ffe8041e4c",
      "sourceBounds": [
        0,
        0,
        27.94,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP2.1 external analog reference input."
      ],
      "pinOverrides": [
        {
          "number": "JP2.1",
          "sourceNet": "VREFIN",
          "before": {
            "type": "unspecified",
            "label": "VREFIN"
          },
          "after": {
            "type": "input",
            "label": "VREFIN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "X1",
              "pin": "VREFIN",
              "direction": "pwr"
            },
            {
              "part": "SJ1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DAC7578-Breakout-PCB/Adafruit DAC7578P Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$19",
          "x": -11.43,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 11.43,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-DAC7578-Breakout-PCB",
      "commit": "b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9",
      "boardURL": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/Adafruit%20DAC7578P%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/Adafruit%20DAC7578P%20Breakout.sch",
      "schematicSha256": "3c7b91a2dee33cdd6741d6985938f9da00e8059459641689bf4ace4912a745f8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/license.txt",
      "sourceArchiveSha256": "462c1bae3dfc32bdb9c6cd1a95ec421235040f0cc27276f7b054bb697cdaa057",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP2.1: non-rail VREFIN is marked pwr in the source symbol; independent role override required."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP2.1: non-rail VREFIN is marked pwr in the source symbol; independent role override required."
        ]
      }
    }
  }
};
