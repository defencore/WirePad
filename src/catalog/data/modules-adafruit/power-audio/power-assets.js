// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-4683": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP1.1.",
        "x": 3.81,
        "y": 6.0325,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.2.",
        "x": 1.27,
        "y": 6.0325,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.0325,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 6.0325,
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
    "artwork": "<rect x=\"-4.151\" y=\"-0.5475\" width=\"5.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.499\" y=\"1.8415\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.032\" y=\"3.0865\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.438\" y=\"-0.6095\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.626\" y=\"-2.6415\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.422\" y=\"-2.6415\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MPM3610.brd",
      "boardSha256": "8026c7b02718230ea1bf308607b2a385e8a6c43c9fe3d7e85474357c54f96cce",
      "sourceBounds": [
        0,
        0,
        10.16,
        17.145
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 0,
          "y": -6.0325,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MPM3610-PCB",
      "commit": "8cdc9051c29e348b88fd83b331d0875e7154879b",
      "boardURL": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/Adafruit%20MPM3610.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/Adafruit%20MPM3610.sch",
      "schematicSha256": "14d0b984078e5b147b9eb169ae897b09b908b7197954cee8a62a7f2f01284b8e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MPM3610-PCB/blob/8cdc9051c29e348b88fd83b331d0875e7154879b/license.txt",
      "sourceArchiveSha256": "6a2f9836f42147ca66ef4ecdc90db27e325c6c617dabecf78a2eacc0fd0a19dd",
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
  "adafruit-module-4654": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP1.1.",
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VDD",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects IC1.VOUT to this rail. CAD net: VDD. Physical source contact JP1.2.",
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.4.",
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
      }
    ],
    "artwork": "<rect x=\"-4.782\" y=\"-2.723\" width=\"5.5\" height=\"5.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.359\" y=\"-0.473\" width=\"1.6\" height=\"1.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"3.5056\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"1.626\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.921\" y=\"3.531\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.505\" y=\"-3.531\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.505\" y=\"-0.4576\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.994\" y=\"-3.023\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPS61023.brd",
      "boardSha256": "3120167e68e07fa2f51759855c7cdb7ceba8e4b1cba024be39dd1c0edd274a68",
      "sourceBounds": [
        0,
        0,
        11.43,
        17.78
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.2",
          "sourceNet": "VDD",
          "before": {
            "type": "power_in",
            "label": "VDD"
          },
          "after": {
            "type": "power_out",
            "label": "VDD"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VOUT",
              "direction": "pwr"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-TPS61023-PCB/Adafruit TPS61023.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": -3.175,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPS61023-PCB",
      "commit": "82b5a33a1900a5c13849029bc84e7856a44086e0",
      "boardURL": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/Adafruit%20TPS61023.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/Adafruit%20TPS61023.sch",
      "schematicSha256": "ae9f9e9f5587018ee950311ffd6f205caa244c6c4115db3b9d5b9ea5cfee9575",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPS61023-PCB/blob/82b5a33a1900a5c13849029bc84e7856a44086e0/license.txt",
      "sourceArchiveSha256": "7e29ed23ed3a9ca1a47ac2e84c9888a2878861d3d6e96a34114207181cd6093e",
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
  "adafruit-module-2200": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.1.",
        "x": -3.81,
        "y": 5.715,
        "size": [
          1.6764,
          1.6764
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
        "x": -1.27,
        "y": 5.715,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "2.048V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 2.048V. Physical source contact JP1.3.",
        "x": 1.27,
        "y": 5.715,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "4.096V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 4.096V. Physical source contact JP1.4.",
        "x": 3.81,
        "y": 5.715,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-4.1124\" y=\"-1.5494\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.9676\" y=\"-1.5494\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"1.245\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"-4.343\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.921\" y=\"1.245\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.921\" y=\"-4.343\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LM4040.brd",
      "boardSha256": "6a640b786f6b9e1df08f4591164885f5e18e1a0340a75619fd9ce60d30dbd573",
      "sourceBounds": [
        0,
        0,
        12.7,
        16.51
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-LM4040-Voltage-Reference-PCB",
      "commit": "6e1c7a03f744e43faf24efe80b1913821f83badb",
      "boardURL": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/Adafruit%20LM4040.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/Adafruit%20LM4040.sch",
      "schematicSha256": "1aa35318de02bee064649d9af4c1dba7515023e5d46e772eab1e706cf2858054",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LM4040-Voltage-Reference-PCB/blob/6e1c7a03f744e43faf24efe80b1913821f83badb/license.txt",
      "sourceArchiveSha256": "f5dd47836eff6500084db1ebfd0e36eb0edd878212f6cbf4763d48b0ead59bc3",
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
  "adafruit-module-5644": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "EN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EN. Physical source contact JP1.1.",
        "x": 3.81,
        "y": 5.08,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.2.",
        "x": 1.27,
        "y": 5.08,
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
        "label": "V+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: V+. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 5.08,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 5.08,
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
    "artwork": "<rect x=\"-4.572\" y=\"-1.8415\" width=\"2.54\" height=\"3.683\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.523\" y=\"-1.685\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.89\" y=\"2.096\" width=\"2.7\" height=\"1.65\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.27\" y=\"2.261\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.556\" y=\"-3.454\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.772\" y=\"-3.15\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.759\" y=\"-0.102\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.248\" y=\"-3.15\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.248\" y=\"-0.102\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPS61040 Boost Converter.brd",
      "boardSha256": "c196b5b0c3a2a543644724cfb10de8592b588cadd00703ee36b9e536d98ae9c2",
      "sourceBounds": [
        0,
        0,
        10.16,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 0,
          "y": -5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPS61040-PCB",
      "commit": "07958c909f40c45c5aea5cdd2cc96ca19461ec96",
      "boardURL": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/Adafruit%20TPS61040%20Boost%20Converter.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/Adafruit%20TPS61040%20Boost%20Converter.sch",
      "schematicSha256": "4fa563a3539d2d0bfcb613154f1e241a86d39f3fe55a575403c64f6fe14c0e1c",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPS61040-PCB/blob/07958c909f40c45c5aea5cdd2cc96ca19461ec96/license.txt",
      "sourceArchiveSha256": "be9242fae101ba4f522d6cd6aa6fd1a47572be6a53999d10fea325b4d047d49f",
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
  "adafruit-module-4920": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP1.1.",
        "x": 3.81,
        "y": 5.715,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.2.",
        "x": 1.27,
        "y": 5.715,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Regulated 3.3 V buck-converter output after the source output inductor; follow the exact board current and input limits. CAD net: 3.3V. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 5.715,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 5.715,
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
    "artwork": "<rect x=\"-2.835\" y=\"0.3765\" width=\"4.4\" height=\"4.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.369\" y=\"-3.2265\" width=\"1.5\" height=\"1.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.918\" y=\"0.1275\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0\" y=\"-1.2315\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.819\" y=\"-1.651\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.597\" y=\"-1.651\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.277\" y=\"-4.0515\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.2135\" y=\"-7.0995\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.769\" y=\"-5.5625\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.073\" y=\"3.378\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.1875\" y=\"-1.195\" width=\"0.864\" height=\"0.612\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "TPS62827 3.3V Buck Converter.brd",
      "boardSha256": "02d33cb3b7cb6fcc3c3f78a1762702c69e3c59abb5ec072020e31ebd0a9a2b41",
      "sourceBounds": [
        0,
        0,
        10.16,
        16.51
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.3",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Exact manufacturer TPS62827 board is a 3.3 V output converter; source output inductor/feedback path reviewed.",
          "connectedSourcePins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-TPS62827-PCB/TPS62827 3.3V Buck Converter.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 2.54,
          "y": -5.715,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPS62827-PCB",
      "commit": "441e9beed498f62705ee2df458a903a010eae4a2",
      "boardURL": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/TPS62827%203.3V%20Buck%20Converter.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/TPS62827%203.3V%20Buck%20Converter.sch",
      "schematicSha256": "73f9c23e79715fe56eefbf548d16cb91f7dc4884c57322fa010df602b2b2b42b",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPS62827-PCB/blob/441e9beed498f62705ee2df458a903a010eae4a2/license.txt",
      "sourceArchiveSha256": "f7365aa00fbc6652b1b6e75c68a1e3832fae6accdbdc594e0d76a994e7f153b5",
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
  "adafruit-module-2745": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP1.1.",
        "x": 3.81,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
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
        "x": 1.27,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-4.475\" y=\"-0.484\" width=\"2.6\" height=\"3.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.669\" y=\"-0.634\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.794\" y=\"-2.946\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.769\" y=\"1.143\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.413\" y=\"-2.184\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LM3671 Buck.brd",
      "boardSha256": "3523a897b9278e8527dbab25d62bab4783d457c19c0fe15a6da4173a89e4e47d",
      "sourceBounds": [
        0,
        0,
        10.16,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 0,
          "y": -5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-LM3671-Buck-Converter-PCB",
      "commit": "7635cfe1f15899a86acc20f0ee553fb4e0e780c7",
      "boardURL": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/Adafruit%20LM3671%20Buck.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/Adafruit%20LM3671%20Buck.sch",
      "schematicSha256": "dd43ccb3bc645034fe048ca12c293e7c5e7686cba6e553971f6bcb90ca871108",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LM3671-Buck-Converter-PCB/blob/7635cfe1f15899a86acc20f0ee553fb4e0e780c7/license.txt",
      "sourceArchiveSha256": "ce189f104ace6ee0ebf12e621c6e3c08cbe2b93ad2deafc84a485a794ef555ea",
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
  "adafruit-module-3661": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "!SHDN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !SHDN. Physical source contact JP1.1.",
        "x": 3.81,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP1.2.",
        "x": 1.27,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
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
        "x": -1.27,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.4.",
        "x": -3.81,
        "y": 5.08,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-0.81\" y=\"-0.434\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.896\" y=\"0.635\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.286\" y=\"-2.565\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.835\" y=\"0.635\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.651\" y=\"-2.565\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit AP6302.brd",
      "boardSha256": "7659d8bc9faa45b74c7a1684b293a52a6fae2e0dd321a71df11a4f8adc0cd3a5",
      "sourceBounds": [
        0,
        0,
        10.16,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 0,
          "y": -5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-AP3602A-PCB",
      "commit": "31d35855d27654a2bdb78720d0c3fffcdbaa436e",
      "boardURL": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/Adafruit%20AP6302.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/Adafruit%20AP6302.sch",
      "schematicSha256": "b53fb5c7d10c2946601f7273b1bca23f876eef0218751a73b7e88806f9f1bce4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-AP3602A-PCB/blob/31d35855d27654a2bdb78720d0c3fffcdbaa436e/license.txt",
      "sourceArchiveSha256": "ffc7ab3969970d3a9049445ffc258b937e2553b97b677b25623836fddd3ea191",
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
  "adafruit-module-6280": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "+12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +12V. Physical source contact JP2.1.",
        "x": -7.62,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
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
        "x": -5.08,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP2.3.",
        "x": -2.54,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.4.",
        "x": 0,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "ENABLE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ENABLE. Physical source contact JP2.5.",
        "x": 2.54,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.6.",
        "x": 5.08,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "-12V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: -12V. Physical source contact JP2.7.",
        "x": 7.62,
        "y": 11.43,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"4.985\" y=\"-4.159\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.81\" y=\"2.826\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.635\" y=\"-4.794\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.1075\" y=\"-8.856\" width=\"3.3735\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.7765\" y=\"-8.354\" width=\"3.0\" height=\"3.3735\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.731\" y=\"-5.033\" width=\"1.65\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.16\" y=\"0.699\" width=\"2.7\" height=\"1.65\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.0106\" y=\"5.0546\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"3.658\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"1.753\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.772\" y=\"5.588\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.772\" y=\"1.778\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.295\" y=\"4.953\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.883\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.473\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.076\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.2925\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4985\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8955\" y=\"-7.976\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.057\" y=\"0.851\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.88\" y=\"8.09\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.432\" y=\"1.041\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"-1.626\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.528\" y=\"-1.626\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.991\" y=\"-1.626\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.309\" y=\"-3.988\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPS65131 Split Power Supply.brd",
      "boardSha256": "27b631085261bb1109804e20faf77a6d89c538969a495f2cc7b1feb885ee0583",
      "sourceBounds": [
        0,
        0,
        19.05,
        27.94
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -6.985,
          "y": -11.43,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": 6.985,
          "y": -11.43,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB",
      "commit": "5c4644c7acc1e285870881ca24b7542121193ce7",
      "boardURL": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/Adafruit%20TPS65131%20Split%20Power%20Supply.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/Adafruit%20TPS65131%20Split%20Power%20Supply.sch",
      "schematicSha256": "58bffb22cb27734ed736aff751d068c77aa750e8dd2cd162a31451fda8980711",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPS65131-Split-Power-Supply-PCB/blob/5c4644c7acc1e285870881ca24b7542121193ce7/license.txt",
      "sourceArchiveSha256": "a450d3659d79ff5494695692564e8de6c9027e6c397b35d30f435b0fe323c809",
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
  "adafruit-module-1400": {
    "contacts": [
      {
        "id": "cn1-1",
        "number": "CN1.1",
        "label": "KILL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: KILL. Physical source contact CN1.1.",
        "x": -8.89,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn1-2",
        "number": "CN1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.2.",
        "x": -8.89,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn1-3",
        "number": "CN1.3",
        "label": "OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT. Physical source contact CN1.3.",
        "x": -8.89,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn1-4",
        "number": "CN1.4",
        "label": "+18V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +18V. Physical source contact CN1.4.",
        "x": -8.89,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn2-1",
        "number": "CN2.1",
        "label": "KILL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: KILL. Physical source contact CN2.1.",
        "x": 8.89,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn2-2",
        "number": "CN2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN2.2.",
        "x": 8.89,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn2-3",
        "number": "CN2.3",
        "label": "OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT. Physical source contact CN2.3.",
        "x": 8.89,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn2-4",
        "number": "CN2.4",
        "label": "+18V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +18V. Physical source contact CN2.4.",
        "x": 8.89,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-2.45\" y=\"-2.15\" width=\"4.9\" height=\"4.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.9944\" y=\"-4.4664\" width=\"1.3208\" height=\"3.3448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.4196\" y=\"-3.8354\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.625\" y=\"6.154\" width=\"1.25\" height=\"0.925\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.699\" y=\"-6.76\" width=\"1.27\" height=\"0.82\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.924\" y=\"1.905\" width=\"0.82\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"5.94\" width=\"1.27\" height=\"0.82\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-6.76\" width=\"1.27\" height=\"0.82\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.359\" y=\"3.175\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.477\" y=\"-6.096\" width=\"12.954\" height=\"12.192\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Power Switch.brd",
      "boardSha256": "ecd6831c8ee5282f05be4e9cb793bfcc77007b54dd919f670d3c1d8fa5444d8e",
      "sourceBounds": [
        0,
        0,
        20.32,
        17.78
      ],
      "selectedConnectors": [
        "CN1",
        "CN2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Push-Button-Power-Switch-PCB",
      "commit": "6013b8b9aa67f74778996c69ec765875c787ff53",
      "boardURL": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/Adafruit%20Power%20Switch.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/Adafruit%20Power%20Switch.sch",
      "schematicSha256": "63817c5e44bb3567bad5bcbd3a2c6b14237e5cedd1f4201cc7d4935b797ce03f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Push-Button-Power-Switch-PCB/blob/6013b8b9aa67f74778996c69ec765875c787ff53/license.txt",
      "sourceArchiveSha256": "0c3ac4d77c6abb96503a6cc730c6822a10c19a95beaee7bfe78deb1b131c48a3",
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
  "adafruit-module-6359": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -8.89,
        "y": 1.8,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X1.2.",
        "x": -8.89,
        "y": -1.7,
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
        "label": "VOUT",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VOUT. Physical source contact X2.1.",
        "x": 8.89,
        "y": -1.8,
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
        "x": 8.89,
        "y": 1.7,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VOUT",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VOUT. Physical source contact JP1.1.",
        "x": 10.16,
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
        "label": "IMON",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: IMON. Physical source contact JP1.2.",
        "x": 7.62,
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
        "label": "DVDT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DVDT. Physical source contact JP1.3.",
        "x": 5.08,
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
        "label": "PGTH",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: PGTH. Physical source contact JP1.4.",
        "x": 2.54,
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
        "label": "PGOOD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: PGOOD. Physical source contact JP1.5.",
        "x": 0,
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
        "label": "OVLO",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: OVLO. Physical source contact JP1.6.",
        "x": -2.54,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP1.7.",
        "x": -5.08,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.8.",
        "x": -7.62,
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
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.9.",
        "x": -10.16,
        "y": 6.35,
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
    "artwork": "<rect x=\"-12.49\" y=\"-3.4\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.49\" y=\"-3.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.016\" y=\"0.143\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"-6.369\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.969\" y=\"-5.486\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.731\" y=\"-5.486\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.997\" y=\"3.073\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.721\" y=\"2.438\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.277\" y=\"-6.388\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.769\" y=\"0.089\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.943\" y=\"2.438\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.7235\" y=\"3.0605\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.159\" y=\"-6.985\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LM73100 Ideal Diode Breakout.brd",
      "boardSha256": "f3abf44de03a19922ef722be0eccb6d041af09243ae28b32da3063801916626f",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "X1",
        "X2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": -10.16,
          "y": -6.604,
          "drill": 2.5
        },
        {
          "sourceRef": "U$1",
          "x": 10.16,
          "y": -6.604,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB",
      "commit": "eb584e823d1e506ff31bf8f8e76e6a0b5fa13176",
      "boardURL": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/Adafruit%20LM73100%20Ideal%20Diode%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/Adafruit%20LM73100%20Ideal%20Diode%20Breakout.sch",
      "schematicSha256": "05d297e1832c8f49479c06607cdd71ddbbff4b75332da0de2648fec578484410",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LM73100-Ideal-Diode-Breakout-PCB/blob/eb584e823d1e506ff31bf8f8e76e6a0b5fa13176/license.txt",
      "sourceArchiveSha256": "fdc7929bf6c10559ccd5b7a7efcf020e0aa8c24272b1856544cdb16075e53323",
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
  "adafruit-module-5649": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact CONN3.2.",
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
        "label": "SDA_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_5V. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
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
        "label": "SCL_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_5V. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
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
        "x": -7.519,
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
        "label": "SDA_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_LV. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.519,
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
        "x": -7.519,
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
        "label": "SCL_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_LV. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.519,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": 5.08,
        "y": -6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP2.2.",
        "x": 2.54,
        "y": -6.35,
        "size": [
          1.9304,
          1.9304
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
        "x": 0,
        "y": -6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "SCL_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_5V. I2C serial clock / source-listed alternate function. Physical source contact JP2.4.",
        "x": -2.54,
        "y": -6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "SDA_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_5V. I2C serial data / source-listed alternate function. Physical source contact JP2.5.",
        "x": -5.08,
        "y": -6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP3.2.",
        "x": -2.54,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.3.",
        "x": 0,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "SCL_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_LV. I2C serial clock / source-listed alternate function. Physical source contact JP3.4.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "SDA_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_LV. I2C serial data / source-listed alternate function. Physical source contact JP3.5.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
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
        "x": -11.419,
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
        "x": -11.419,
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
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.472\" y=\"0.886\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.106\" y=\"-2.588\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.324\" y=\"-2.878\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.319\" y=\"3.283\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.477\" y=\"-4.724\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.311\" y=\"0.254\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"0.61\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.851\" y=\"2.87\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.55\" y=\"-1.88\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.985\" y=\"2.159\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"0.762\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit STEMMA QT Booster Breakout.brd",
      "boardSha256": "db3f974e5fa415078567784a426c3f02720560b0b041824ea5efc6fa1a2bc4f4",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP2",
        "JP3"
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
          "sourceRef": "U$17",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB",
      "commit": "13637316890d99395fe7f6b359de027a0f422c7b",
      "boardURL": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/Adafruit%20STEMMA%20QT%20Booster%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/Adafruit%20STEMMA%20QT%20Booster%20Breakout.sch",
      "schematicSha256": "334ab4f930739d24221437dd2587c1d33efdb9f9bb3da3e5d56e56e92ea9a90d",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-QT-3V-to-5V-Level-Booster-PCB/blob/13637316890d99395fe7f6b359de027a0f422c7b/license.txt",
      "sourceArchiveSha256": "4b9aa4c83fc6694b31127ebaf42131b2d24fbc77620d3f92dc9144a9de274bce",
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
  "adafruit-module-6516": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 8.89,
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
        "y": 8.89,
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 8.89,
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
        "y": 8.89,
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
        "label": "VOUT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VOUT0. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 8.89,
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
        "label": "VOUT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VOUT1. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 8.89,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "12V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 12V. Physical source contact JP2.1.",
        "x": 3.81,
        "y": -6.985,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "VOUT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VOUT1. Physical source contact JP2.2.",
        "x": 1.27,
        "y": -6.985,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "VOUT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VOUT0. Physical source contact JP2.3.",
        "x": -1.27,
        "y": -6.985,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.4.",
        "x": -3.81,
        "y": -6.985,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
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
    "artwork": "<rect x=\"-5.4\" y=\"-10.185\" width=\"10.8\" height=\"6.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.807\" y=\"-0.926\" width=\"3.9\" height=\"4.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"1.8566\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.822\" y=\"-1.678\" width=\"2.5\" height=\"1.832\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.874\" y=\"-3.619\" width=\"2.7\" height=\"1.65\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.001\" y=\"-4.591\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.401\" y=\"5.2896\" width=\"1.2\" height=\"0.8508\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.092\" y=\"4.4006\" width=\"1.2\" height=\"0.8508\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.382\" y=\"3.404\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"5.055\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.286\" y=\"-3.327\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.588\" y=\"5.055\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.899\" y=\"-4.356\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.899\" y=\"-5.88\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.579\" y=\"-3.34\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.041\" y=\"5.664\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.261\" y=\"5.664\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.103\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.579\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.941\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.537\" y=\"-2.515\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.296\" y=\"1.549\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.278\" y=\"-6.02\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.556\" y=\"0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.191\" y=\"0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.905\" y=\"0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit GP8403 Breakout Board rev B.brd",
      "boardSha256": "4e7fcc3098182dfa155d00224cb4a088911280e6c1dfa19ee7577d6582f2b53f",
      "sourceBounds": [
        0,
        0,
        25.4,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -8.89,
          "drill": 2.5
        },
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
      "repo": "adafruit/Adafruit-GP8403-Breakout-Board-PCB",
      "commit": "e1326df4fb03b1c9efe779644eaa711c6aadbcd8",
      "boardURL": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/Adafruit%20GP8403%20Breakout%20Board%20rev%20B.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/Adafruit%20GP8403%20Breakout%20Board%20rev%20B.sch",
      "schematicSha256": "025b4716cb41d87f998a08645f6b8047b99195eded91a17ddf7585acd19ddfca",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-GP8403-Breakout-Board-PCB/blob/e1326df4fb03b1c9efe779644eaa711c6aadbcd8/license.txt",
      "sourceArchiveSha256": "2bf6bff493f67d7c99642c8153212f7aa647671061a3b897df9341f9126effc6",
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
  "adafruit-module-259": {
    "contacts": [
      {
        "id": "cn1-gnd2",
        "number": "CN1.GND2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.GND2.",
        "x": 4.4,
        "y": -9.254,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-vbus",
        "number": "CN1.VBUS",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V. Physical source contact CN1.VBUS.",
        "x": 1.6,
        "y": -8.69,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-d-",
        "number": "CN1.D-",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.D-.",
        "x": 0.8,
        "y": -8.69,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-dplus",
        "number": "CN1.D+",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.D+.",
        "x": 0,
        "y": -8.69,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-id",
        "number": "CN1.ID",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.ID.",
        "x": -0.8,
        "y": -8.69,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -1.6,
        "y": -8.69,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd1",
        "number": "CN1.GND1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.GND1.",
        "x": 4.4,
        "y": -14.754,
        "size": [
          2.54,
          3.81
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd3",
        "number": "CN1.GND3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.GND3.",
        "x": -4.4,
        "y": -9.254,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd4",
        "number": "CN1.GND4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.GND4.",
        "x": -4.4,
        "y": -14.754,
        "size": [
          2.54,
          3.81
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn2-1",
        "number": "CN2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN2.1.",
        "x": 8.011,
        "y": 9.99,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "CN2",
        "back": false,
        "smd": true
      },
      {
        "id": "cn2-2",
        "number": "CN2.2",
        "label": "BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATT. Physical source contact CN2.2.",
        "x": 6.011,
        "y": 9.99,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "CN2",
        "back": false,
        "smd": true
      },
      {
        "id": "cn3-1",
        "number": "CN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN3.1.",
        "x": -6.213,
        "y": 9.99,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "CN3",
        "back": false,
        "smd": true
      },
      {
        "id": "cn3-2",
        "number": "CN3.2",
        "label": "BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATT. Physical source contact CN3.2.",
        "x": -8.213,
        "y": 9.99,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "CN3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.1.",
        "x": 13.742,
        "y": -7.138,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATT. Physical source contact JP3.2.",
        "x": 13.742,
        "y": -4.598,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": 13.742,
        "y": 3.022,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "BATT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BATT. Physical source contact JP5.2.",
        "x": 13.742,
        "y": 5.562,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 9.932,
        "y": -14.25,
        "size": [
          1.4064,
          2.8128
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V. Physical source contact JP1.2.",
        "x": 7.392,
        "y": -14.25,
        "size": [
          1.4064,
          2.8128
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "STAT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$3. Physical source contact JP6.1.",
        "x": 13.742,
        "y": -2.058,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "STAT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$4. Physical source contact JP6.2.",
        "x": 13.742,
        "y": 0.482,
        "size": [
          2.8128,
          1.4064
        ],
        "shape": "oval",
        "connector": "JP6",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-5.05\" y=\"-17.354\" width=\"10.13\" height=\"9.2\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.213\" y=\"9.19\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.011\" y=\"9.19\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.944\" y=\"-5.106\" width=\"2.286\" height=\"10.16\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.484\" y=\"-5.106\" width=\"2.286\" height=\"10.16\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.812\" y=\"-4.86\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.43\" y=\"-6.382\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.144\" y=\"4.016\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.032\" y=\"-7.176\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.396\" y=\"4.016\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.14\" y=\"-12.34\" width=\"3.6\" height=\"1.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.496\" y=\"13.1615\" width=\"1.6\" height=\"3.597\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.044\" y=\"13.1615\" width=\"1.6\" height=\"3.597\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.1385\" y=\"-15.955\" width=\"3.597\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.274\" y=\"-1.931\" width=\"0.82\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.274\" y=\"0.355\" width=\"0.82\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB LiIon-LiPoly Charger.brd",
      "boardSha256": "0ba67a31796be8960bf0d6b40ab2f872839593f3e6945026622ac93ed8a7518a",
      "sourceBounds": [
        0,
        0,
        35,
        35
      ],
      "selectedConnectors": [
        "CN1",
        "CN2",
        "CN3",
        "JP3",
        "JP5",
        "JP1",
        "JP6"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$11",
          "x": 14.5,
          "y": 14.5,
          "drill": 2
        },
        {
          "sourceRef": "U$16",
          "x": 14.5,
          "y": -14.5,
          "drill": 2
        },
        {
          "sourceRef": "U$18",
          "x": -14.5,
          "y": -14.5,
          "drill": 2
        },
        {
          "sourceRef": "U$19",
          "x": -14.5,
          "y": 14.5,
          "drill": 2
        }
      ],
      "repo": "adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB",
      "commit": "e8bcaf9566ca85bc555d8c7c849adb473948dc5f",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/Adafruit%20USB%20LiIon-LiPoly%20Charger.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/Adafruit%20USB%20LiIon-LiPoly%20Charger.sch",
      "schematicSha256": "e1a7d638f65b1b4650dff42abb3714a9b71bd0af723f6cdf3eead47ddf89eca1",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-LiIon-LiPoly-Charger-PCB/blob/e8bcaf9566ca85bc555d8c7c849adb473948dc5f/license.txt",
      "sourceArchiveSha256": "078a879ae39c7de2d252ddf62f6d73dc1e2b61d7f5a354a2e2805741b192ae29",
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
  "adafruit-module-5882": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP1.1.",
        "x": -7.62,
        "y": -7.5565,
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
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact JP1.2.",
        "x": -7.62,
        "y": -5.0165,
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
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact JP1.3.",
        "x": -7.62,
        "y": -2.4765,
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
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact JP1.4.",
        "x": -7.62,
        "y": 0.0635,
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": -7.62,
        "y": 2.6035,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
        "x": -7.62,
        "y": 5.1435,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP1.7.",
        "x": -7.62,
        "y": 7.6835,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP3.1.",
        "x": 7.62,
        "y": 7.6835,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP3.2.",
        "x": 7.62,
        "y": 5.1435,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 2.6035,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP3.4.",
        "x": 7.62,
        "y": 0.0635,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.5.",
        "x": 7.62,
        "y": -2.4765,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6.",
        "x": 7.62,
        "y": -5.0165,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "+5V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +5V. Physical source contact JP3.7.",
        "x": 7.62,
        "y": -7.5565,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-pwr",
        "number": "X1.PWR",
        "label": "A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2. Physical source contact X1.PWR.",
        "x": 0,
        "y": -2.461,
        "size": [
          5.4,
          2.7
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x1-gnd",
        "number": "X1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND.",
        "x": 0,
        "y": -8.361,
        "size": [
          5.4,
          2.7
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x1-gndbreak",
        "number": "X1.GNDBREAK",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GNDBREAK.",
        "x": -4.7,
        "y": -5.461,
        "size": [
          2.7,
          5.4
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 1.8,
        "y": 6.604,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2. Physical source contact J1.2.",
        "x": -1.7,
        "y": 6.604,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP4.1.",
        "x": 4.572,
        "y": 5.969,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": 4.572,
        "y": 7.747,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 0.8
      }
    ],
    "artwork": "<rect x=\"-4.54\" y=\"-16.061\" width=\"9.0\" height=\"14.204\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.4\" y=\"3.204\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.135\" y=\"-0.484\" width=\"5.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.397\" y=\"5.635\" width=\"1.65\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.934\" y=\"-9.563\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.039\" y=\"0.889\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.261\" y=\"0.8255\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.359\" y=\"-0.381\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.156\" y=\"-3.531\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.118\" y=\"2.819\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit DC Power BFF.brd",
      "boardSha256": "3d5bd469bd08190ebcc1980499bac0fad6b8374cd449b1a1a917674ec6f3758a",
      "sourceBounds": [
        -6.35,
        0,
        24.13,
        20.828
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "X1",
        "J1",
        "JP4",
        "JP5"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.1 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "JP3.2 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP1.1",
          "sourceNet": "A0",
          "before": {
            "type": "unspecified",
            "label": "A0"
          },
          "after": {
            "type": "passive",
            "label": "A0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "A1",
          "before": {
            "type": "unspecified",
            "label": "A1"
          },
          "after": {
            "type": "passive",
            "label": "A1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "A2",
          "before": {
            "type": "unspecified",
            "label": "A2"
          },
          "after": {
            "type": "passive",
            "label": "A2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.4",
          "sourceNet": "A3",
          "before": {
            "type": "unspecified",
            "label": "A3"
          },
          "after": {
            "type": "passive",
            "label": "A3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "TX",
          "before": {
            "type": "unspecified",
            "label": "TX"
          },
          "after": {
            "type": "passive",
            "label": "TX"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP3.1",
          "sourceNet": "RX",
          "before": {
            "type": "unspecified",
            "label": "RX"
          },
          "after": {
            "type": "passive",
            "label": "RX"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP3.2",
          "sourceNet": "SCK",
          "before": {
            "type": "unspecified",
            "label": "SCK"
          },
          "after": {
            "type": "passive",
            "label": "SCK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP3.3",
          "sourceNet": "MISO",
          "before": {
            "type": "unspecified",
            "label": "MISO"
          },
          "after": {
            "type": "passive",
            "label": "MISO"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        },
        {
          "number": "JP3.4",
          "sourceNet": "MOSI",
          "before": {
            "type": "unspecified",
            "label": "MOSI"
          },
          "after": {
            "type": "passive",
            "label": "MOSI"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-DC-Power-BFF-PCB/Adafruit DC Power BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$14",
          "x": -12.7,
          "y": -7.874,
          "drill": 2.5
        },
        {
          "sourceRef": "U$15",
          "x": -12.7,
          "y": 7.874,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 12.7,
          "y": -7.874,
          "drill": 2.5
        },
        {
          "sourceRef": "U$18",
          "x": 12.7,
          "y": 7.874,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-DC-Power-BFF-PCB",
      "commit": "de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677",
      "boardURL": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/Adafruit%20DC%20Power%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/Adafruit%20DC%20Power%20BFF.sch",
      "schematicSha256": "fb96d3be350bf8e7934091870be6f1660266aff2e08d1f56579fe4f379a3cbdb",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-DC-Power-BFF-PCB/blob/de89d2fa7b7cfbdea51fc6e946cd2e780d7b2677/license.txt",
      "sourceArchiveSha256": "98c5791bc38b3440df8fcbf7d32d15d0018cb1900314592a8c28db0cd86d994b",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.1: unresolved electrical role on A0.",
        "JP1.2: unresolved electrical role on A1.",
        "JP1.3: unresolved electrical role on A2.",
        "JP1.4: unresolved electrical role on A3.",
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.6: unresolved electrical role on SCL.",
        "JP1.7: unresolved electrical role on TX.",
        "JP3.1: unresolved electrical role on RX.",
        "JP3.2: unresolved electrical role on SCK.",
        "JP3.3: unresolved electrical role on MISO.",
        "JP3.4: unresolved electrical role on MOSI."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "X1.PWR",
            "net": "N$2",
            "sourceConnectorFunctions": [
              "PWR"
            ]
          },
          {
            "number": "J1.2",
            "net": "N$2",
            "sourceConnectorFunctions": [
              "PWR"
            ]
          }
        ],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.1: unresolved electrical role on A0.",
          "JP1.2: unresolved electrical role on A1.",
          "JP1.3: unresolved electrical role on A2.",
          "JP1.4: unresolved electrical role on A3.",
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.7: unresolved electrical role on TX.",
          "JP3.1: unresolved electrical role on RX.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI."
        ]
      }
    }
  },
  "adafruit-module-6106": {
    "contacts": [
      {
        "id": "x2-m3",
        "number": "X2.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M3.",
        "x": -13.148,
        "y": -4.32,
        "size": [
          2,
          1
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
        "x": -13.148,
        "y": 4.32,
        "size": [
          2,
          1
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
        "x": -8.968,
        "y": 4.32,
        "size": [
          2,
          1
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
        "x": -8.968,
        "y": -4.32,
        "size": [
          2,
          1
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
        "x": -8.393,
        "y": -3.2,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": -2.4,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": -1.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": -1.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X2.B7.",
        "x": -8.393,
        "y": -0.75,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X2.A6.",
        "x": -8.393,
        "y": -0.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X2.A7.",
        "x": -8.393,
        "y": 0.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X2.B6.",
        "x": -8.393,
        "y": 0.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 1.25,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 1.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 2.4,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-1",
        "number": "VBAT.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.1.",
        "x": -1.635,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-2",
        "number": "VBAT.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact VBAT.2.",
        "x": 0.365,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.1.",
        "x": -8.89,
        "y": 6.985,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.2.",
        "x": -6.35,
        "y": 6.985,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP3.3.",
        "x": -3.81,
        "y": 6.985,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP3.4.",
        "x": -1.27,
        "y": 6.985,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.5.",
        "x": 1.27,
        "y": 6.985,
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
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.6.",
        "x": 3.81,
        "y": 6.985,
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
        "label": "+5V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects IC1.VOUT to this rail. CAD net: +5V. Physical source contact JP3.7.",
        "x": 6.35,
        "y": 6.985,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.8.",
        "x": 8.89,
        "y": 6.985,
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
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": 10.795,
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
        "label": "+5V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects IC1.VOUT to this rail. CAD net: +5V. Physical source contact X1.2.",
        "x": 10.795,
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
        "id": "vbat-nc1",
        "number": "VBAT.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.NC1.",
        "x": -4.035,
        "y": -7.469,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-nc2",
        "number": "VBAT.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.NC2.",
        "x": 2.765,
        "y": -7.469,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.748\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.635\" y=\"-8.969\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.395\" y=\"-3.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.008\" y=\"-9.4175\" width=\"5.7\" height=\"5.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.608\" y=\"0.778\" width=\"2.2\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.431\" y=\"2.683\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1135\" y=\"-2.016\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.48\" y=\"-3.4035\" width=\"1.2\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.097\" y=\"3.8545\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.572\" y=\"-6.6865\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.445\" y=\"-9.163\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.1435\" y=\"1.7149\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.1435\" y=\"-0.152\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"3.658\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.499\" y=\"1.905\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.588\" y=\"3.6895\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0795\" y=\"3.7215\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.144\" y=\"-3.429\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit bq25185 with 5V Boost Breakout.brd",
      "boardSha256": "653b8636b76a9f31950635950c72c748811e7b3d7258f7a7b1a99ce2cabc7708",
      "sourceBounds": [
        0,
        0,
        29.21,
        19.05
      ],
      "selectedConnectors": [
        "X2",
        "VBAT",
        "JP3",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X2.B7 passive pass-through verified from schematic endpoints.",
        "X2.A6 passive pass-through verified from schematic endpoints.",
        "X2.A7 passive pass-through verified from schematic endpoints.",
        "X2.B6 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "X2.B7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "X2.A6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "X2.A7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "X2.B6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "JP3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "JP3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "JP3.7",
          "sourceNet": "+5V",
          "before": {
            "type": "power_in",
            "label": "+5V"
          },
          "after": {
            "type": "power_out",
            "label": "+5V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VOUT",
              "direction": "pwr"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        },
        {
          "number": "X1.2",
          "sourceNet": "+5V",
          "before": {
            "type": "power_in",
            "label": "+5V"
          },
          "after": {
            "type": "power_out",
            "label": "+5V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VOUT",
              "direction": "pwr"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-5V-Boost-PCB/Adafruit bq25185 with 5V Boost Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 12.065,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$10",
          "x": 12.065,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$11",
          "x": -12.065,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$12",
          "x": -12.065,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-bq25185-with-5V-Boost-PCB",
      "commit": "2ce979f3dec58aa42ab4ae3707f10a7df528ef12",
      "boardURL": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/Adafruit%20bq25185%20with%205V%20Boost%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/Adafruit%20bq25185%20with%205V%20Boost%20Breakout.sch",
      "schematicSha256": "d1f47f395296bb3e6450014745ead0d2665607e3f17d18c433826c5c35a9e039",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-bq25185-with-5V-Boost-PCB/blob/2ce979f3dec58aa42ab4ae3707f10a7df528ef12/license.txt",
      "sourceArchiveSha256": "af02a7b072c1250484e338eb8555cb2b81ab8c7b80e0b4dfb3406a3661fa26e4",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X2.B7: unresolved electrical role on D-.",
        "X2.A6: unresolved electrical role on D+.",
        "X2.A7: unresolved electrical role on D-.",
        "X2.B6: unresolved electrical role on D+.",
        "JP3.3: unresolved electrical role on D-.",
        "JP3.4: unresolved electrical role on D+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "X2.B7: unresolved electrical role on D-.",
          "X2.A6: unresolved electrical role on D+.",
          "X2.A7: unresolved electrical role on D-.",
          "X2.B6: unresolved electrical role on D+.",
          "JP3.3: unresolved electrical role on D-.",
          "JP3.4: unresolved electrical role on D+."
        ]
      }
    }
  },
  "adafruit-module-6092": {
    "contacts": [
      {
        "id": "x2-m3",
        "number": "X2.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.M3.",
        "x": -13.148,
        "y": -4.32,
        "size": [
          2,
          1
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
        "x": -13.148,
        "y": 4.32,
        "size": [
          2,
          1
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
        "x": -8.968,
        "y": 4.32,
        "size": [
          2,
          1
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
        "x": -8.968,
        "y": -4.32,
        "size": [
          2,
          1
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
        "x": -8.393,
        "y": -3.2,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": -2.4,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": -1.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": -1.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X2.B7.",
        "x": -8.393,
        "y": -0.75,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X2.A6.",
        "x": -8.393,
        "y": -0.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X2.A7.",
        "x": -8.393,
        "y": 0.25,
        "size": [
          1.15,
          0.275
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X2.B6.",
        "x": -8.393,
        "y": 0.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 1.25,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 1.75,
        "size": [
          1.15,
          0.275
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
        "x": -8.393,
        "y": 2.4,
        "size": [
          1.15,
          0.575
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
        "x": -8.393,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-1",
        "number": "VBAT.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.1.",
        "x": -1.635,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-2",
        "number": "VBAT.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact VBAT.2.",
        "x": 0.365,
        "y": -2.269,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP2.1.",
        "x": 10.16,
        "y": 2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
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
        "x": 10.16,
        "y": 0,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP2.3.",
        "x": 10.16,
        "y": -2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.1.",
        "x": -8.89,
        "y": 6.985,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.2.",
        "x": -6.35,
        "y": 6.985,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP3.3.",
        "x": -3.81,
        "y": 6.985,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP3.4.",
        "x": -1.27,
        "y": 6.985,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.5.",
        "x": 1.27,
        "y": 6.985,
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
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.6.",
        "x": 3.81,
        "y": 6.985,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.7.",
        "x": 6.35,
        "y": 6.985,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.8.",
        "x": 8.89,
        "y": 6.985,
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
        "id": "vbat-nc1",
        "number": "VBAT.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.NC1.",
        "x": -4.035,
        "y": -7.469,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      },
      {
        "id": "vbat-nc2",
        "number": "VBAT.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact VBAT.NC2.",
        "x": 2.765,
        "y": -7.469,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.748\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.635\" y=\"-8.969\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.06\" y=\"-4.06\" width=\"6.3\" height=\"8.12\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.834\" y=\"-4.983\" width=\"3.0\" height=\"2.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.684\" y=\"-1.0644\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9095\" y=\"0.778\" width=\"2.2\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.431\" y=\"2.683\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1135\" y=\"-2.016\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.557\" y=\"-5.4165\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.572\" y=\"-6.5595\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.445\" y=\"-9.163\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-8.534\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-6.629\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.8485\" y=\"3.048\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.007\" y=\"3.048\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.588\" y=\"3.6895\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0795\" y=\"3.7215\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.144\" y=\"-3.429\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit bq25185 with 3.3V Output.brd",
      "boardSha256": "1173310ae09d125c07f7315628f67d6e1f11320b3d804b510aa6ba301232f99c",
      "sourceBounds": [
        0,
        0,
        29.21,
        19.05
      ],
      "selectedConnectors": [
        "X2",
        "VBAT",
        "JP2",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X2.B7 passive pass-through verified from schematic endpoints.",
        "X2.A6 passive pass-through verified from schematic endpoints.",
        "X2.A7 passive pass-through verified from schematic endpoints.",
        "X2.B6 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "X2.B7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        },
        {
          "number": "X2.A6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        },
        {
          "number": "X2.A7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        },
        {
          "number": "X2.B6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        },
        {
          "number": "JP3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        },
        {
          "number": "JP3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-bq25185-with-3.3V-Buck-PCB/Adafruit bq25185 with 3.3V Output.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": 12.065,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$10",
          "x": 12.065,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$11",
          "x": -12.065,
          "y": 6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$12",
          "x": -12.065,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB",
      "commit": "a28ea1355e38f7f310f64ec49bac85a8aacb365c",
      "boardURL": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/Adafruit%20bq25185%20with%203.3V%20Output.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/Adafruit%20bq25185%20with%203.3V%20Output.sch",
      "schematicSha256": "ca0644e894840f134d7baedb8fb86622543717999e030995cb7aaf0c925c8b0f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-bq25185-with-3.3V-Buck-PCB/blob/a28ea1355e38f7f310f64ec49bac85a8aacb365c/license.txt",
      "sourceArchiveSha256": "53deda025ceef9a1870bed70740173d340367655d96c23369e98874f6d0c498e",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X2.B7: unresolved electrical role on D-.",
        "X2.A6: unresolved electrical role on D+.",
        "X2.A7: unresolved electrical role on D-.",
        "X2.B6: unresolved electrical role on D+.",
        "JP3.3: unresolved electrical role on D-.",
        "JP3.4: unresolved electrical role on D+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "X2.B7: unresolved electrical role on D-.",
          "X2.A6: unresolved electrical role on D+.",
          "X2.A7: unresolved electrical role on D-.",
          "X2.B6: unresolved electrical role on D+.",
          "JP3.3: unresolved electrical role on D-.",
          "JP3.4: unresolved electrical role on D+."
        ]
      }
    }
  }
};
