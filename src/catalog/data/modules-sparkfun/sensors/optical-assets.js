// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-sen17372": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": -2.54,
        "y": 9.525,
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
        "label": "PIR_OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PIR_OUT. Physical source contact J1.2.",
        "x": 0,
        "y": 9.525,
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
        "x": 2.54,
        "y": 9.525,
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
    "artwork": "<rect x=\"3.454\" y=\"7.074\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"7.061\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"7.074\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.5\" y=\"6.135\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>U1 round housing from manufacturer package circles; finish representative</title><circle cx=\"0.0\" cy=\"0.635\" r=\"5.55\" fill=\"#b8b9ba\" stroke=\"#87958d\" stroke-width=\".22\"/><circle cx=\"0.0\" cy=\"0.635\" r=\"4.3845\" fill=\"#d4d6d4\" stroke=\"#7b8583\" stroke-width=\".1\"/></g>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_PIR_Breakout.brd",
      "boardSha256": "cd41717cef0c8bc4fb4ef4cf274d7152d1b093a0499c055decf0bd34c639bb90",
      "sourceBounds": [
        0,
        0,
        12.7,
        21.59
      ],
      "selectedConnectors": [
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/SparkFun_PIR_Breakout",
      "commit": "e1c86b1847447b501164085ba2aaa37a6c01d97a",
      "boardURL": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/Hardware/SparkFun_PIR_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/Hardware/SparkFun_PIR_Breakout.sch",
      "schematicSha256": "90e41958e660bfadefeaac8ab0d91d6afc69d61cb08c057c151225dbab6b4012",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/LICENSE.md",
      "sourceArchiveSha256": "08c288de33c78b12bab61872488855bd9e4ee7e33678abb2376653d352f5f507",
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
      "roundHousingReview": [
        {
          "ref": "U1",
          "package": "TO-3",
          "sourceLayer": "21",
          "center": [
            0,
            0.635
          ],
          "radius": 5.55,
          "back": false
        }
      ]
    }
  },
  "sparkfun-module-bob08688": {
    "contacts": [
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP4.1.",
        "x": -3.81,
        "y": 2.54,
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
        "x": -3.81,
        "y": 0,
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
        "label": "S",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: S. Physical source contact JP4.3.",
        "x": -3.81,
        "y": -2.54,
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
    "artwork": "<rect x=\"-5.08\" y=\"-3.81\" width=\"2.54\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.042\" y=\"-1.228\" width=\"1.96\" height=\"3.99\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_TEMT6000_Breakout-v12.brd",
      "boardSha256": "5f9db816deeb6b63a45ec8972c6280e5e6b5bbc061b9841241044e8b244ea745",
      "sourceBounds": [
        0,
        0,
        10.16,
        10.16
      ],
      "selectedConnectors": [
        "JP4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000",
      "commit": "e330459795e7a05b63107fdf66340e42b33b1c33",
      "boardURL": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/Hardware/SparkFun_TEMT6000_Breakout-v12.brd",
      "schematicURL": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/Hardware/SparkFun_TEMT6000_Breakout-v12.sch",
      "schematicSha256": "3befb45e72d50824b2f8e9a28cb90c83904637b3ebb811f744622b9794754fd1",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/LICENSE.md",
      "sourceArchiveSha256": "6314415654ffb51536dad4596b52366897efd532d15f3fa10867eea09993abdb",
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
  "sparkfun-module-bob09322": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIG. Physical source contact JP1.1.",
        "x": 2.54,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": 0,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.3.",
        "x": -2.54,
        "y": -5.08,
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
    "artwork": "<rect x=\"-9.5\" y=\"0.71\" width=\"19.0\" height=\"6.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"-6.35\" width=\"7.62\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"-2.032\" width=\"5.588\" height=\"1.524\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "PhotoInterrupter-Breakout.brd",
      "boardSha256": "9ac99faa0b102dd491433ad88cfda329743656ca80fd202f3d15aec4f2f53d13",
      "sourceBounds": [
        0,
        0,
        20.32,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Photo_Interrupter_Breakout",
      "commit": "a2d2437948c43567ae02486b14bb44938b972bb2",
      "boardURL": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/Hardware/PhotoInterrupter-Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/Hardware/PhotoInterrupter-Breakout.sch",
      "schematicSha256": "75f699bed2b2a3b9bc15b0a9eb61838c1686f4738652ccbfa0b0381f88f1cd76",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/README.md",
      "sourceArchiveSha256": "da50cd84476b17732b192d386b906145a90cb96c8316a2a48915ff4ab1c80f33",
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
  "sparkfun-module-rob09453": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": 2.54,
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
        "label": "OUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT. Physical source contact JP1.2.",
        "x": 0,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -2.54,
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
    "artwork": "<rect x=\"-1.4\" y=\"-1.065\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.88\" y=\"2.756\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.168\" y=\"2.756\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.81\" y=\"4.445\" width=\"7.62\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "QRE1113 Line Sensor Breakout - Analog.brd",
      "boardSha256": "ac6968e743283e9ae96fa28f0716d3bde0c03b757c72ffc377881cb58ca878f3",
      "sourceBounds": [
        0,
        0,
        7.62,
        13.97
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/QRE1113_Line_Sensor-Analog",
      "commit": "1671498b31a63009afdcaf7832a2de51793f45f2",
      "boardURL": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/Hardware/QRE1113%20Line%20Sensor%20Breakout%20-%20Analog.brd",
      "schematicURL": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/Hardware/QRE1113%20Line%20Sensor%20Breakout%20-%20Analog.sch",
      "schematicSha256": "0cfc2b33e6cf61147b1c291bfaca9709312e07ad6e1ba9e84812c384dbc9b78d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/README.md",
      "sourceArchiveSha256": "6f4befc59dd5fa54d5d0c954c12de44341b2ad485005e30fb076288bf33c3d19",
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
  "sparkfun-module-rob09454": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": 2.54,
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
        "label": "OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT. Physical source contact JP1.2.",
        "x": 0,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -2.54,
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
    "artwork": "<rect x=\"-1.4\" y=\"-1.065\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.81\" y=\"4.445\" width=\"7.62\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd",
      "boardSha256": "e0a672c7003eaba2524e3000f64ab2d30c478b346b7562f2aeae9f9cfaead6a6",
      "sourceBounds": [
        0,
        0,
        7.62,
        13.97
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/QRE1113_Line_Sensor_Breakout-Digital",
      "commit": "c9880cb4f6baa0265e30cb472d816f04ea348d86",
      "boardURL": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/Hardware/SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd",
      "schematicURL": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/Hardware/SparkFun_QRE1113_Line_Sensor_Breakout_Digital.sch",
      "schematicSha256": "a74a251ff3c08f7d54da7125fef54d9c06aafc950e0a837785403919334b4ad2",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/LICENSE.md",
      "sourceArchiveSha256": "0038a635d4a70013fc72822eb2946fd4a39c4a02764054d04d517ebfbf24c367",
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
  "sparkfun-module-sen11769": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 2.54,
        "y": 5.725,
        "size": [
          1.27,
          2.5
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V. Physical source contact JP1.2.",
        "x": 0,
        "y": 5.725,
        "size": [
          1.27,
          2.5
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "C",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$2. Physical source contact JP1.3.",
        "x": -2.54,
        "y": 5.725,
        "size": [
          1.27,
          2.5
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-1.4\" y=\"-11.225\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.851\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.689\" y=\"-6.071\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.81\" y=\"9.545\" width=\"7.62\" height=\"8.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "RedBot_Line_Sensor.brd",
      "boardSha256": "ef27a5ead43e36c45f97257ebb01fce0d7d3767e9c26e1605952d276a9c81618",
      "sourceBounds": [
        0,
        0,
        7.62,
        24.13
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/RedBot_Line_Sensor",
      "commit": "81f44b0843601dd5127585ba34b0852fb47d67b0",
      "boardURL": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/Hardware/RedBot_Line_Sensor.brd",
      "schematicURL": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/Hardware/RedBot_Line_Sensor.sch",
      "schematicSha256": "5aca96a74d5655b77a4d35e13383e134e7ed0bfa90b4c033a93a6e13c9367421",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/README.md",
      "sourceArchiveSha256": "880efc108571193c9b4fa630438467885ca3314daec71c34f8f68ef286d154a0",
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
  "sparkfun-module-sen12829": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -5.08,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -2.54,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
        "x": 0,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 2.54,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "!INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !INT. Physical source contact JP1.5.",
        "x": 5.08,
        "y": 6.985,
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
    "artwork": "<rect x=\"-6.35\" y=\"5.715\" width=\"12.7\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.825\" y=\"-1.46\" width=\"1.65\" height=\"1.65\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"1.473\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-0.432\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"1.473\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"-0.432\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"5.842\" y=\"0.889\" width=\"3.048\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_ISL29125_Breakout.brd",
      "boardSha256": "9c40d52b4345d2ebe63d2c04fa8d7a0840c9d0b24488638fa49be35ccec48b09",
      "sourceBounds": [
        0,
        0,
        17.78,
        16.51
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ISL29125_Breakout",
      "commit": "97a4a9128a247f3f6526d20b2deab9c502e6d48e",
      "boardURL": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/Hardware/SparkFun_ISL29125_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/Hardware/SparkFun_ISL29125_Breakout.sch",
      "schematicSha256": "a5aeaa1cd7d073c1b7701e72ac0614f32e24ba424055140f30bc96d9f9244cb2",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/LICENSE.md",
      "sourceArchiveSha256": "2e0509dd55128226a892af3e147242c18f3d4dc1ab614fc43f7b093ff5669ece",
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
  "sparkfun-module-sen12784": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 6.35,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "2.8V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 2.8V. Physical source contact JP1.2.",
        "x": 3.81,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
        "x": 1.27,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": -1.27,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "GPIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO0. Physical source contact JP1.5.",
        "x": -3.81,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GPIO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO1. Physical source contact JP1.6.",
        "x": -6.35,
        "y": 6.35,
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
    "artwork": "<rect x=\"-2.4\" y=\"-2.162\" width=\"4.8\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"0.762\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.422\" y=\"-3.861\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.134\" y=\"-3.848\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.438\" y=\"2.87\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.438\" y=\"1.346\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.782\" y=\"1.93\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.242\" y=\"1.93\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_VL6180_Breakout.brd",
      "boardSha256": "cb42395e065042391444b8f1c4a75090208085f8474b0353ceeb04da37e1117c",
      "sourceBounds": [
        0,
        0,
        17.78,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ToF_Range_Finder_Breakout-VL6180",
      "commit": "2faa308fd111d75ad37b4861f93b4bca551254aa",
      "boardURL": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/Hardware/SparkFun_VL6180_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/Hardware/SparkFun_VL6180_Breakout.sch",
      "schematicSha256": "cf9509f246897631b536097b0e8244a02585f08baa3daa2a5df0a13f773915fd",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/LICENSE.md",
      "sourceArchiveSha256": "aa42d66decddd670eb6c68019abfc8241b1e15ba3b674c1da64ba42ce1678238",
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
  "sparkfun-module-sen12785": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 6.349872,
        "y": 5.23059,
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
        "x": 3.809872,
        "y": 5.23059,
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.3.",
        "x": 1.269872,
        "y": 5.23059,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": -1.270128,
        "y": 5.23059,
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
        "label": "GPIO0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO0. Physical source contact JP1.5.",
        "x": -3.810128,
        "y": 5.23059,
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
        "label": "GPIO1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO1. Physical source contact JP1.6.",
        "x": -6.350128,
        "y": 5.23059,
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
    "artwork": "<rect x=\"-7.620128\" y=\"3.96059\" width=\"15.24\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.400256\" y=\"-2.39941\" width=\"2.8\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.851744\" y=\"-2.89741\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.839256\" y=\"-2.54181\" width=\"1.6104\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.635344\" y=\"-1.14481\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.635344\" y=\"-4.44681\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.561744\" y=\"-4.77741\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.871256\" y=\"-3.96441\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.423256\" y=\"-0.45941\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.442256\" y=\"-5.09441\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.442256\" y=\"-3.57041\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.883256\" y=\"-0.45941\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.470256\" y=\"-4.77741\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.871256\" y=\"1.89059\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.696256\" y=\"1.89059\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.670744\" y=\"-3.38041\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.657744\" y=\"-0.07841\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun_VL6180_Sensor.brd",
      "boardSha256": "158f0f6078e64fd06aeb544532c900dcde9cfc4c3794db36fbaa075e3a1096a1",
      "sourceBounds": [
        -3.99974375,
        0.00059,
        33.00025625,
        13.000590625
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/ToF_Range_Finder_Sensor-VL6180",
      "commit": "6df9637f3e0700be49c3cc0022caf16341af2d0b",
      "boardURL": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/Hardware/SparkFun_VL6180_Sensor.brd",
      "schematicURL": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/Hardware/SparkFun_VL6180_Sensor.sch",
      "schematicSha256": "b7963f857e7638718773dc66a571f5d3c91c6364c2443cc80b81870515423f0d",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/LICENSE.md",
      "sourceArchiveSha256": "95f16657255b5e774a4e147459c3f3f04563ccfdacb4059224b926dda0a9f8e4",
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
  "sparkfun-module-sen13582": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 45.72,
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
        "x": 43.18,
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
        "x": 45.72,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.4.",
        "x": 43.18,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.5.",
        "x": 45.72,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.6.",
        "x": 43.18,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "INT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT. Physical source contact JP2.1.",
        "x": 50.8,
        "y": 2.54,
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
    "artwork": "<rect x=\"-42.865\" y=\"-8.8925\" width=\"9.53\" height=\"9.53\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"41.91\" y=\"-3.81\" width=\"5.415\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"49.53\" y=\"1.27\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.79775\" y=\"-3.27025\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"30.25775\" y=\"-3.27025\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-20.9963\" y=\"-3.9878\" width=\"3.8926\" height=\"9.2456\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.1037\" y=\"-3.9878\" width=\"3.8926\" height=\"9.2456\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-33.55975\" y=\"1.32715\" width=\"3.302\" height=\"6.5532\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.08\" y=\"-2.0\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"41.0972\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.3972\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.9972\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.6972\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.7028\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.8028\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.4028\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.1028\" y=\"-7.366\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-50.3428\" y=\"-2.286\" width=\"6.7056\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-44.0925\" y=\"1.81625\" width=\"5.0\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"43.023\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"30.323\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.623\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-45.877\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.923\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.777\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-33.177\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.477\" y=\"-11.86\" width=\"2.827\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.699\" y=\"-2.794\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.1285\" y=\"-2.794\" width=\"2.032\" height=\"3.048\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.89\" y=\"3.01\" width=\"2.8\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-41.7624\" y=\"-1.49375\" width=\"2.2448\" height=\"1.3604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2165\" y=\"-2.972\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2315\" y=\"-4.5465\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.976\" y=\"-3.9115\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-37.186\" y=\"-7.7215\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-37.186\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.2135\" y=\"-4.5465\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.026\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.486\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.486\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.326\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.786\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.786\" y=\"-4.71825\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.786\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.626\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-41.3135\" y=\"4.48925\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-41.3135\" y=\"6.07675\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-39.726\" y=\"7.67725\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-49.886\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-49.886\" y=\"-3.9245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-49.886\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"37.668\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"36.398\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"31.318\" y=\"3.454\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.4735\" y=\"-0.0385\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.886\" y=\"-0.0385\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-39.726\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"49.174\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"39.014\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"39.014\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"36.474\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.314\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.314\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.774\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.614\" y=\"-6.769\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.614\" y=\"-11.849\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.074\" y=\"-9.309\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SparkFun Line Follower Array.brd",
      "boardSha256": "df45d35ffe307a260d90ac8b483ea76440e2e997c118f61b6d5b0a4388be35aa",
      "sourceBounds": [
        0,
        0,
        106.68,
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
      "repo": "sparkfun/Line_Follower_Array",
      "commit": "085d5392b6d6eb41aa79620b34c0454d9ededbc9",
      "boardURL": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/Hardware/SparkFun%20Line%20Follower%20Array.brd",
      "schematicURL": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/Hardware/SparkFun%20Line%20Follower%20Array.sch",
      "schematicSha256": "f400213ccade3e4c8ee800fa3ff98970387def16227a777722d98b1037418cfc",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/LICENSE.md",
      "sourceArchiveSha256": "32394fedd92d0256c06b75e19bf56d566ba4746cb4f34bd48753d64786aa8449",
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
  "sparkfun-module-sen15177": {
    "contacts": [
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
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J3.1.",
        "x": -5.08,
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
        "x": -2.54,
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
        "x": 0,
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
        "x": 2.54,
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
        "x": 7.62,
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
        "x": 7.62,
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
        "x": 7.62,
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
        "x": 7.62,
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
      }
    ],
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.286\" y=\"-1.016\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.68375\" y=\"6.12775\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"2.121\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.881\" y=\"7.569\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.512\" y=\"0.279\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.661\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"-4.242\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-4.229\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.7272\" y=\"-4.826\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.9695\" y=\"5.334\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic Proximity Sensor - VCNL4040.brd",
      "boardSha256": "cc03e494959d2951093f3621fd7b1702219af076d48c596a0a11a0c274ed9baa",
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
        "J5"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Proximity_Sensor",
      "commit": "af01991774b84238a18030e7f02f67c530ec456c",
      "boardURL": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/Hardware/Qwiic%20Proximity%20Sensor%20-%20VCNL4040.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/Hardware/Qwiic%20Proximity%20Sensor%20-%20VCNL4040.sch",
      "schematicSha256": "60b745cf4decafb6cf0bd4e8c1a22d5e97432769f42d3311d27dc9a86e5aaaf9",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/LICENSE.md",
      "sourceArchiveSha256": "77ee0b2e775f3983fedfef5a772a4298f40f023e4bef748c4d8bfcb4b45fcdde",
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
  "sparkfun-module-sen14722": {
    "contacts": [
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
        "x": 7.62,
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
        "x": 7.62,
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
        "x": 7.62,
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
        "x": 7.62,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "!SHUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !SHUT. Physical source contact J1.1.",
        "x": 6.35,
        "y": 11.43,
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
    "artwork": "<rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.7\" y=\"-1.5\" width=\"5.4\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.68375\" y=\"6.12775\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"3.378\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"3.391\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.881\" y=\"7.569\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.512\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.661\" y=\"-0.356\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.184\" y=\"-4.242\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"-4.229\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.7272\" y=\"-4.826\" width=\"3.4544\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.9695\" y=\"5.334\" width=\"2.159\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic Distance Sensor - VL53L1X.brd",
      "boardSha256": "0705d900704d4ba9d78a18d0126cd4067e52c2402f01f066310bbb0960f1f456",
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
        "J5",
        "J1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_Distance_VL53L1X",
      "commit": "543b1e2d80325a39c2585882808757361f86cc66",
      "boardURL": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/Hardware/Qwiic%20Distance%20Sensor%20-%20VL53L1X.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/Hardware/Qwiic%20Distance%20Sensor%20-%20VL53L1X.sch",
      "schematicSha256": "b1fbc00f11de5e5e7dfd44feace261043fc47c179a8182157090dc9147d43acc",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/LICENSE.md",
      "sourceArchiveSha256": "cd753d34a6004f605bee57e9275ea4c654280742e91cef7e96de78f6745e5df5",
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
  "sparkfun-module-sen17374": {
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
        "id": "j7-1",
        "number": "J7.1",
        "label": "SDO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO. Physical source contact J7.1.",
        "x": 2.54,
        "y": 6.35,
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
        "x": 2.54,
        "y": 3.81,
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
        "x": 0,
        "y": 6.35,
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
        "x": 0,
        "y": 3.81,
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
        "x": -2.54,
        "y": 6.35,
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
        "x": -2.54,
        "y": 3.81,
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
      }
    ],
    "artwork": "<rect x=\"-4.6228\" y=\"3.1337\" width=\"9.2456\" height=\"3.8926\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.97\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.22\" y=\"-3.0\" width=\"4.25\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.8425\" y=\"9.6393\" width=\"2.032\" height=\"2.4384\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.04875\" y=\"6.50875\" width=\"1.74625\" height=\"0.9525\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"9.728\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"7.823\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.534\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.931\" y=\"-10.516\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.246\" y=\"8.458\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.0705\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.3595\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.976\" y=\"-4.877\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.5\" y=\"-0.85\" width=\"1.0\" height=\"0.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>U1 round housing from manufacturer package circles; finish representative</title><circle cx=\"0.0\" cy=\"-6.35\" r=\"5.55\" fill=\"#b8b9ba\" stroke=\"#87958d\" stroke-width=\".22\"/><circle cx=\"0.0\" cy=\"-6.35\" r=\"4.3845\" fill=\"#d4d6d4\" stroke=\"#7b8583\" stroke-width=\".1\"/></g>",
    "backArtwork": "<rect x=\"7.9375\" y=\"5.5753\" width=\"2.032\" height=\"3.4544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.6708\" y=\"2.794\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5908\" y=\"0.889\" width=\"2.4384\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Qwiic_PIR.brd",
      "boardSha256": "66d605d4561e8aa24a5ac8eda0232f7803251440bdd50e3e21097a5555b3121c",
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
        "J7",
        "J5"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/Qwiic_PIR",
      "commit": "17b39a30d9ea2ae5aa8e94abd94721c7a31928aa",
      "boardURL": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/Hardware/Qwiic_PIR.brd",
      "schematicURL": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/Hardware/Qwiic_PIR.sch",
      "schematicSha256": "211b741b871ec55d8c79acee47c2c8f8ffbc3cc66ff5455232b30ff928122f1e",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-4.0",
      "licenseURL": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/LICENSE.md",
      "sourceArchiveSha256": "6f21cb5b5d27d4130f6d11eb8fd43a7b1aa27b42aeae4d9990b7845e7a31a0c5",
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
      "roundHousingReview": [
        {
          "ref": "U1",
          "package": "TO-3",
          "sourceLayer": "21",
          "center": [
            0,
            -6.35
          ],
          "radius": 5.55,
          "back": false
        }
      ]
    }
  }
};
