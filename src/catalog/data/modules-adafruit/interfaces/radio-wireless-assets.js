// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-5970": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP1.1.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact X4.3.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP2.1.",
        "x": -2.54,
        "y": 6.985,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.2.",
        "x": 0,
        "y": 6.985,
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
        "x": 2.54,
        "y": 6.985,
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
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.113\" y=\"-3.75\" width=\"5.3\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-7.131\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.563\" y=\"6.585\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.311\" y=\"0.5715\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.388\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.198\" y=\"6.566\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.921\" y=\"0.254\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.9845\" y=\"-4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TSMP96000 Code Learning IR Breakout.brd",
      "boardSha256": "cf7267f3f02773507de611d0d1ffe84165100fa153288bbe6e3af3811348ed14",
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
      "repo": "adafruit/Adafruit-TSMP96000-Breakout-PCB",
      "commit": "5d456214739128a6fc19903849618996ac3116b8",
      "boardURL": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/Adafruit%20TSMP96000%20Code%20Learning%20IR%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/Adafruit%20TSMP96000%20Code%20Learning%20IR%20Breakout.sch",
      "schematicSha256": "33d756c16ba2ae29cde2c383421bebcbdc3036e47be6a36232b182aa4a21b3c8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TSMP96000-Breakout-PCB/blob/5d456214739128a6fc19903849618996ac3116b8/license.txt",
      "sourceArchiveSha256": "1e90e91a81b9491543c169d5a007978ef94b0ee2331a51813c4303fce2937ee3",
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
  "adafruit-module-5940": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP1.1.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact X4.3.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP2.1.",
        "x": -2.54,
        "y": 6.985,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.2.",
        "x": 0,
        "y": 6.985,
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
        "x": 2.54,
        "y": 6.985,
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
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.279\" y=\"-3.527\" width=\"3.0\" height=\"6.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-7.131\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.563\" y=\"6.585\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.311\" y=\"0.5715\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.69\" y=\"-7.163\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.198\" y=\"6.566\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.921\" y=\"0.254\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.9845\" y=\"-4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TSSP77038 IR Demodulator Breakout.brd",
      "boardSha256": "b394196f82725e438ce3c1eb84dc3d854f4c270c149f974e0841f5642436a18d",
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
      "repo": "adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB",
      "commit": "6df204dc531804658d977a4f69bc873b863bb6ac",
      "boardURL": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/Adafruit%20TSSP77038%20IR%20Demodulator%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/Adafruit%20TSSP77038%20IR%20Demodulator%20Breakout.sch",
      "schematicSha256": "a0f57d770559de2d949d328d2f27cf866584c56f7f30ef68af9bc27fd7380cd4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TSSP77038-IR-Demodulator-Breakout-PCB/blob/6df204dc531804658d977a4f69bc873b863bb6ac/license.txt",
      "sourceArchiveSha256": "5c9e49efc53719aeac96bb8db8f84efe4019abdf64e59f4aa16fe9f3f455e1f6",
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
  "adafruit-module-5939": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact JP1.1.",
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact X4.3.",
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "OUTH",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUTH. Physical source contact JP3.1.",
        "x": 5.08,
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
        "label": "OUTV",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUTV. Physical source contact JP3.2.",
        "x": 2.54,
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
        "label": "SIGNAL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact JP3.3.",
        "x": 0,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.4.",
        "x": -2.54,
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
        "x": -5.08,
        "y": 6.985,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.86\" y=\"-9.658\" width=\"6.8\" height=\"4.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.691\" y=\"-2.0\" width=\"5.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.668\" y=\"-1.811\" width=\"2.2\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.087\" y=\"-6.877\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.833\" y=\"6.077\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.914\" y=\"1.5875\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.722\" y=\"-6.909\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.499\" y=\"-0.94\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.179\" y=\"6.502\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.175\" y=\"0.254\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.1115\" y=\"-5.461\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Infrared IR Remote Receiver.brd",
      "boardSha256": "f50fbfcc07ef00a7bebb32add1226649072f2015b76425949dec7008db5214f9",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "X4",
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
          "sourceRef": "U$8",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB",
      "commit": "ead85073a5f1e06c649a5f8e9a143e4ecd4e9333",
      "boardURL": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/Adafruit%20Infrared%20IR%20Remote%20Receiver.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/Adafruit%20Infrared%20IR%20Remote%20Receiver.sch",
      "schematicSha256": "07e2b5d07bada6ed4144b564599ebbab05014c4f0f4afaec6474368703b14b3e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Infrared-IR-Remote-Receiver-PCB/blob/ead85073a5f1e06c649a5f8e9a143e4ecd4e9333/license.txt",
      "sourceArchiveSha256": "c98226292cd1c95dad4b26e6e46620a8d3a6b5ab5d4dc42894b2e842a36885ae",
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
  "adafruit-module-4201": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.1.",
        "x": -13.97,
        "y": 13.97,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -11.43,
        "y": 13.97,
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
        "x": -8.89,
        "y": 13.97,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.4.",
        "x": -6.35,
        "y": 13.97,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP1.5.",
        "x": -3.81,
        "y": 13.97,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.6.",
        "x": -1.27,
        "y": 13.97,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP1.7.",
        "x": 1.27,
        "y": 13.97,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "ESP_BUSY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ESP_BUSY. Physical source contact JP1.8.",
        "x": 3.81,
        "y": 13.97,
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
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact JP1.9.",
        "x": 6.35,
        "y": 13.97,
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
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "GPIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO0. Physical source contact JP1.10.",
        "x": 8.89,
        "y": 13.97,
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
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "RXD",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXD. Physical source contact JP1.11.",
        "x": 11.43,
        "y": 13.97,
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
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "ESP_TX",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: ESP_TX. Physical source contact JP1.12.",
        "x": 13.97,
        "y": 13.97,
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
    "artwork": "<rect x=\"-9.0\" y=\"-16.31\" width=\"18.0\" height=\"25.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.0584\" y=\"-2.9178\" width=\"5.0292\" height=\"4.5656\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.989\" y=\"2.291\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.911\" y=\"4.315\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.6374\" y=\"-3.174\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.128\" y=\"-8.661\" width=\"1.62\" height=\"2.844\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.7576\" y=\"8.4836\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.595\" y=\"5.188\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.595\" y=\"3.791\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.595\" y=\"2.521\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.208\" y=\"0.483\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.208\" y=\"-8.915\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.208\" y=\"-7.01\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.208\" y=\"-5.105\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"-7.849\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit AirLift Breakout.brd",
      "boardSha256": "0eef55dc751da3ebf41c4e466e9207e85e0dfd63fcedb1911a8e0dd2fa0088d9",
      "sourceBounds": [
        0,
        0,
        31.75,
        33.02
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$15",
          "x": -13.335,
          "y": -13.843,
          "drill": 2.5
        },
        {
          "sourceRef": "U$16",
          "x": 12.827,
          "y": -13.335,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-AirLift-Breakout-PCB",
      "commit": "821189f7f9160b896a46bf6e239c8a0262ba1a46",
      "boardURL": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/Adafruit%20AirLift%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/Adafruit%20AirLift%20Breakout.sch",
      "schematicSha256": "65ec305c6f034422fa6242abe38a474a00e8e72611cb6c301c919bc576acaf47",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-AirLift-Breakout-PCB/blob/821189f7f9160b896a46bf6e239c8a0262ba1a46/license.txt",
      "sourceArchiveSha256": "bdf330803a5f4d51e5384e874e87e60f598a46d4c11deb2bc20b8c6ccd4300bf",
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
  "adafruit-module-2999": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP2.1.",
        "x": -15.24,
        "y": 11.43,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -12.7,
        "y": 11.43,
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
        "label": "SCK_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK_5V. Physical source contact JP2.3.",
        "x": -10.16,
        "y": 11.43,
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP2.4.",
        "x": -7.62,
        "y": 11.43,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "MOSI_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_5V. Physical source contact JP2.5.",
        "x": -5.08,
        "y": 11.43,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "CS_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS_5V. Physical source contact JP2.6.",
        "x": -2.54,
        "y": 11.43,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "EN_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EN_5V. Physical source contact JP2.7.",
        "x": 0,
        "y": 11.43,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "!IRQ",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: !IRQ. Physical source contact JP2.8.",
        "x": 2.54,
        "y": 11.43,
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "RST_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST_5V. Physical source contact JP2.9.",
        "x": 5.08,
        "y": 11.43,
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "WAKE_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WAKE_5V. Physical source contact JP2.10.",
        "x": 7.62,
        "y": 11.43,
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "CFG_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CFG_5V. Physical source contact JP2.11.",
        "x": 10.16,
        "y": 11.43,
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "RXD_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXD_5V. Physical source contact JP2.12.",
        "x": 12.7,
        "y": 11.43,
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
        "id": "jp2-13",
        "number": "JP2.13",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP2.13.",
        "x": 15.24,
        "y": 11.43,
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
    "artwork": "<rect x=\"-6.685\" y=\"-13.129\" width=\"14.73\" height=\"21.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7288\" y=\"-3.4416\" width=\"4.5656\" height=\"6.6292\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.8\" y=\"-7.369\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.634\" y=\"1.144\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.712\" y=\"-3.592\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.538\" y=\"-3.592\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.125\" y=\"-3.592\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.489\" y=\"6.729\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.838\" y=\"6.602\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.303\" y=\"-0.533\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.795\" y=\"6.579\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.795\" y=\"4.801\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.392\" y=\"6.858\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.31\" y=\"5.715\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.017\" y=\"7.468\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit WINC1500 Breakout.brd",
      "boardSha256": "81ffcbd99149ec4625ff035a58d345a8a003be531b2789d8ce4555616fec9e27",
      "sourceBounds": [
        0,
        0,
        33.02,
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
          "sourceRef": "U$2",
          "x": -13.97,
          "y": -11.43,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": 13.97,
          "y": -11.43,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB",
      "commit": "7384f4727943c46e8f2473a765239112a8b48f12",
      "boardURL": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/Adafruit%20WINC1500%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/Adafruit%20WINC1500%20Breakout.sch",
      "schematicSha256": "37571c051012fa898ef64efcb5a8a37e9ca17ad3a59a0b6df0fb5acc2a35f3df",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ATWINC1500-WiFi-Breakout-PCB/blob/7384f4727943c46e8f2473a765239112a8b48f12/license.txt",
      "sourceArchiveSha256": "761d84c99c8d8c41fefe6b13df0d9374843a4800dd1763dee8f3ab24ecfbb722",
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
  "adafruit-module-3070": {
    "contacts": [
      {
        "id": "x1-p",
        "number": "X1.P",
        "label": "ANT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact X1.P.",
        "x": 8.636,
        "y": -11.43,
        "size": [
          1.016,
          2.032
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.1.",
        "x": -10.414,
        "y": 12.065,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": -7.874,
        "y": 12.065,
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
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.3.",
        "x": -5.334,
        "y": 12.065,
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
        "label": "DIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO0. Physical source contact JP3.4.",
        "x": -2.794,
        "y": 12.065,
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
        "label": "SCK_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK_5V. Physical source contact JP3.5.",
        "x": -0.254,
        "y": 12.065,
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
        "label": "MISO_3V",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO_3V. Physical source contact JP3.6.",
        "x": 2.286,
        "y": 12.065,
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
        "label": "MOSI_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_5V. Physical source contact JP3.7.",
        "x": 4.826,
        "y": 12.065,
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
        "label": "CS_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS_5V. Physical source contact JP3.8.",
        "x": 7.366,
        "y": 12.065,
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
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "RST_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST_5V. Physical source contact JP3.9.",
        "x": 9.906,
        "y": 12.065,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "DIO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO1. Physical source contact JP1.1.",
        "x": -10.414,
        "y": -13.335,
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
        "label": "DIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO2. Physical source contact JP1.2.",
        "x": -7.874,
        "y": -13.335,
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
        "label": "DIO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO3. Physical source contact JP1.3.",
        "x": -5.334,
        "y": -13.335,
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
        "label": "DIO4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO4. Physical source contact JP1.4.",
        "x": -2.794,
        "y": -13.335,
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
        "label": "DIO5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIO5. Physical source contact JP1.5.",
        "x": -0.254,
        "y": -13.335,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "ANT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact JP2.1.",
        "x": 8.636,
        "y": -9.906,
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
        "id": "x1-gnd-2",
        "number": "X1.GND@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND@2.",
        "x": 11.176,
        "y": -12.446,
        "size": [
          1.524,
          4.064
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-gnd-1",
        "number": "X1.GND@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND@1.",
        "x": 6.096,
        "y": -12.446,
        "size": [
          1.524,
          4.064
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-gnd-3",
        "number": "X1.GND@3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND@3.",
        "x": 11.176,
        "y": -12.446,
        "size": [
          1.524,
          4.064
        ],
        "shape": "rect",
        "connector": "X1",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-gnd-4",
        "number": "X1.GND@4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND@4.",
        "x": 6.096,
        "y": -12.446,
        "size": [
          1.524,
          4.064
        ],
        "shape": "rect",
        "connector": "X1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.322\" y=\"-8.227\" width=\"16.2\" height=\"16.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.461\" y=\"-23.6855\" width=\"6.35\" height=\"12.7649\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.1666\" y=\"-6.2198\" width=\"5.0292\" height=\"4.5656\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.064\" y=\"4.538\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.88\" y=\"-12.7\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.636\" y=\"1.372\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.28\" y=\"7.62\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.28\" y=\"4.191\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.582\" y=\"1.016\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.922\" y=\"8.357\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit RFM+LoRa Breakout.brd",
      "boardSha256": "7c1436eaafa74ed13a5871eb45f9e25420dd3151dfacd0a81cd1246867e30ca8",
      "sourceBounds": [
        0.254,
        0,
        25.654,
        29.21
      ],
      "selectedConnectors": [
        "X1",
        "JP3",
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB",
      "commit": "3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1",
      "boardURL": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/Adafruit%20RFM%2BLoRa%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/Adafruit%20RFM%2BLoRa%20Breakout.sch",
      "schematicSha256": "592011501f4b5f4f383d98c4215fda1fe5e63f814c71037611e34209229eb89a",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-RFM-LoRa-Radio-Breakout-PCB/blob/3ad6bed6e1b407afa7119ae548b5c2f1b107c6b1/license.txt",
      "sourceArchiveSha256": "f6b084d8214de6c5e4eb3ad93aae74600c5d8d25181902fe29bbf990b60e293c",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "X1.P",
            "net": "N$1",
            "sourceConnectorFunctions": [
              "ANT"
            ]
          },
          {
            "number": "JP2.1",
            "net": "N$1",
            "sourceConnectorFunctions": [
              "ANT"
            ]
          }
        ],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-4415": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 10.16,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated 3.3 V supply rail after the source regulator/ferrite filter. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 10.16,
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
        "y": 10.16,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 10.16,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 10.16,
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
        "y": 10.16,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": -6.35,
        "y": -10.16,
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
        "label": "1PPS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: 1PPS. Physical source contact JP2.2.",
        "x": -3.81,
        "y": -10.16,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.3.",
        "x": -1.27,
        "y": -10.16,
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
        "label": "RXI",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXI. Physical source contact JP2.4.",
        "x": 1.27,
        "y": -10.16,
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
        "label": "TXO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXO. Physical source contact JP2.5.",
        "x": 3.81,
        "y": -10.16,
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
        "label": "WAKEUP",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: WAKEUP. Physical source contact JP2.6.",
        "x": 6.35,
        "y": -10.16,
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
        "id": "b1--",
        "number": "B1.-",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B1.-.",
        "x": 7.6,
        "y": 0,
        "size": [
          4,
          2
        ],
        "shape": "rect",
        "connector": "B1",
        "back": true,
        "smd": true
      },
      {
        "id": "b1-plus",
        "number": "B1.+",
        "label": "VBACKUP",
        "type": "unspecified",
        "description": "Source symbol marks this non-rail signal as power; verify its actual function independently. CAD net: VBACKUP. Physical source contact B1.+.",
        "x": -8.29,
        "y": 0,
        "size": [
          4,
          2
        ],
        "shape": "rect",
        "connector": "B1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"-5.762\" width=\"10.0\" height=\"10.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.322\" y=\"-7.615\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.014\" y=\"-7.361\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.5574\" y=\"4.573\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.365\" y=\"-7.939\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.979\" y=\"-8.339\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.928\" y=\"-6.623\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.928\" y=\"-5.48\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.359\" y=\"5.969\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.454\" y=\"5.969\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.217\" y=\"5.461\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.103\" y=\"3.391\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.9\" y=\"-7.9\" width=\"15.5\" height=\"15.9\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>B1 round housing from manufacturer package circles; finish representative</title><circle cx=\"-0.2\" cy=\"0.0\" r=\"7.39\" fill=\"none\" stroke=\"#87958d\" stroke-width=\".22\"/></g>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PA1010D Mini GPS.brd",
      "boardSha256": "b8cb633d4010bac22016eebd44980994894d3cd42d402ad9628180a5a48b56e8",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4",
        "JP2",
        "B1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Manufacturer regulator output and ferrite power path to this net reviewed.",
          "connectedSourcePins": [
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
              "part": "FB1",
              "pin": "P$2",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "io"
            },
            {
              "part": "D1",
              "pin": "A",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "VCC",
              "direction": "pwr"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PA1010D-Mini-GPS-PCB/Adafruit PA1010D Mini GPS.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 10.16,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-PA1010D-Mini-GPS-PCB",
      "commit": "6f1d0f216b848bea8d473a4b1384fd0340536ea0",
      "boardURL": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/Adafruit%20PA1010D%20Mini%20GPS.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/Adafruit%20PA1010D%20Mini%20GPS.sch",
      "schematicSha256": "5f6ad1b78f494855c3460ebd4797c6e842be3583b5047eff778f9ffd5534380f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PA1010D-Mini-GPS-PCB/blob/6f1d0f216b848bea8d473a4b1384fd0340536ea0/license.txt",
      "sourceArchiveSha256": "ee475b8f4456c1c021817cd5e84b8f47f3ff11fb0f3b3af7b076f6e407774c5f",
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
          "B1.+: non-rail VBACKUP is marked pwr in the source symbol; independent role override required."
        ]
      },
      "roundHousingReview": [
        {
          "ref": "B1",
          "package": "CR1220-2",
          "sourceLayer": "51",
          "center": [
            -0.2,
            0
          ],
          "radius": 7.39,
          "back": true
        }
      ]
    }
  },
  "adafruit-module-4363": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP2.1.",
        "x": -16.51,
        "y": -7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -13.97,
        "y": -7.62,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP2.3.",
        "x": -11.43,
        "y": -7.62,
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "ESP_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ESP_CS. Physical source contact JP2.4.",
        "x": -8.89,
        "y": -7.62,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "ESP_RESET",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: ESP_RESET. Physical source contact JP2.5.",
        "x": -6.35,
        "y": -7.62,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "ESP_BUSY",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: ESP_BUSY. Physical source contact JP2.6.",
        "x": -3.81,
        "y": -7.62,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "GPIO0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO0. Physical source contact JP2.7.",
        "x": -1.27,
        "y": -7.62,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "D9",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D9. Physical source contact JP2.8.",
        "x": 1.27,
        "y": -7.62,
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "D7",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D7. Physical source contact JP2.9.",
        "x": 3.81,
        "y": -7.62,
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "D5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D5. Physical source contact JP2.10.",
        "x": 6.35,
        "y": -7.62,
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.11.",
        "x": 8.89,
        "y": -7.62,
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.12.",
        "x": 11.43,
        "y": -7.62,
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
        "id": "jp2-13",
        "number": "JP2.13",
        "label": "ERX",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ERX. Physical source contact JP2.13.",
        "x": 13.97,
        "y": -7.62,
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
        "id": "jp2-14",
        "number": "JP2.14",
        "label": "ETX",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ETX. Physical source contact JP2.14.",
        "x": 16.51,
        "y": -7.62,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "D2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2. Physical source contact JP4.1.",
        "x": 16.51,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP4.2.",
        "x": 13.97,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP4.3.",
        "x": 11.43,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP4.4.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact JP4.5.",
        "x": 6.35,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact JP4.6.",
        "x": 3.81,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact JP4.7.",
        "x": 1.27,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact JP4.8.",
        "x": -1.27,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-9",
        "number": "JP4.9",
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact JP4.9.",
        "x": -3.81,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-10",
        "number": "JP4.10",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP4.10.",
        "x": -6.35,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-11",
        "number": "JP4.11",
        "label": "VHI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: VHI. Physical source contact JP4.11.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-12",
        "number": "JP4.12",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact JP4.12.",
        "x": -11.43,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-13",
        "number": "JP4.13",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP4.13.",
        "x": -13.97,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-14",
        "number": "JP4.14",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact JP4.14.",
        "x": -16.51,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "u5-1",
        "number": "U5.1",
        "label": "ESP_MISO",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ESP_MISO. Physical source contact U5.1.",
        "x": 4.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-2",
        "number": "U5.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.2.",
        "x": 5.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-3",
        "number": "U5.3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.3.",
        "x": 6.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-4",
        "number": "U5.4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.4.",
        "x": 7.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-5",
        "number": "U5.5",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.5.",
        "x": 8.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-6",
        "number": "U5.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.6.",
        "x": 9.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-7",
        "number": "U5.7",
        "label": "ESP_BUSY",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: ESP_BUSY. Physical source contact U5.7.",
        "x": 10.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-8",
        "number": "U5.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.8.",
        "x": 11.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-9",
        "number": "U5.9",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact U5.9.",
        "x": 12.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-10",
        "number": "U5.10",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact U5.10.",
        "x": 13.575,
        "y": 4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-11",
        "number": "U5.11",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.11.",
        "x": 13.5,
        "y": 2,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-12",
        "number": "U5.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.12.",
        "x": 13.5,
        "y": 1,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-13",
        "number": "U5.13",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.13.",
        "x": 13.5,
        "y": 0,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-14",
        "number": "U5.14",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.14.",
        "x": 13.5,
        "y": -1,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-15",
        "number": "U5.15",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.15.",
        "x": 13.5,
        "y": -2,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-16",
        "number": "U5.16",
        "label": "GREEN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GREEN. Physical source contact U5.16.",
        "x": 13.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-17",
        "number": "U5.17",
        "label": "RED",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RED. Physical source contact U5.17.",
        "x": 12.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-18",
        "number": "U5.18",
        "label": "BLUE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BLUE. Physical source contact U5.18.",
        "x": 11.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-19",
        "number": "U5.19",
        "label": "ESP_RESET",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: ESP_RESET. Physical source contact U5.19.",
        "x": 10.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-20",
        "number": "U5.20",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.20.",
        "x": 9.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-21",
        "number": "U5.21",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.21.",
        "x": 8.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-22",
        "number": "U5.22",
        "label": "ESP_TX",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ESP_TX. Physical source contact U5.22.",
        "x": 7.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-23",
        "number": "U5.23",
        "label": "ESP_RX",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ESP_RX. Physical source contact U5.23.",
        "x": 6.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-24",
        "number": "U5.24",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.24.",
        "x": 5.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-25",
        "number": "U5.25",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.25.",
        "x": 4.575,
        "y": -4.125,
        "size": [
          0.7,
          1.15
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-26",
        "number": "U5.26",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.26.",
        "x": 4.65,
        "y": -2,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-27",
        "number": "U5.27",
        "label": "ESP_GPIO0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ESP_GPIO0. Physical source contact U5.27.",
        "x": 4.65,
        "y": -1,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-28",
        "number": "U5.28",
        "label": "ESP_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ESP_CS. Physical source contact U5.28.",
        "x": 4.65,
        "y": 0,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-29",
        "number": "U5.29",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact U5.29.",
        "x": 4.65,
        "y": 1,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-30",
        "number": "U5.30",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.30.",
        "x": 4.65,
        "y": 2,
        "size": [
          1.15,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-31",
        "number": "U5.31",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact U5.31.",
        "x": 6.025,
        "y": 2.75,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-32",
        "number": "U5.32",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.32.",
        "x": 6.025,
        "y": 1.65,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-33",
        "number": "U5.33",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.33.",
        "x": 6.025,
        "y": 0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-34",
        "number": "U5.34",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.34.",
        "x": 6.025,
        "y": -0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-35",
        "number": "U5.35",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.35.",
        "x": 6.025,
        "y": -1.65,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-36",
        "number": "U5.36",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U5.36.",
        "x": 6.025,
        "y": -2.75,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-1",
        "number": "U5.GND@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@1.",
        "x": 10.805,
        "y": 1.7,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-2",
        "number": "U5.GND@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@2.",
        "x": 10.805,
        "y": 0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-3",
        "number": "U5.GND@3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@3.",
        "x": 10.805,
        "y": -0.6,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-4",
        "number": "U5.GND@4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@4.",
        "x": 10.805,
        "y": -1.75,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-5",
        "number": "U5.GND@5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@5.",
        "x": 9.655,
        "y": 0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-6",
        "number": "U5.GND@6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@6.",
        "x": 9.655,
        "y": -0.6,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-7",
        "number": "U5.GND@7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@7.",
        "x": 8.505,
        "y": 1.7,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-8",
        "number": "U5.GND@8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@8.",
        "x": 8.505,
        "y": 0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-9",
        "number": "U5.GND@9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@9.",
        "x": 8.505,
        "y": -0.6,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-10",
        "number": "U5.GND@10",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@10.",
        "x": 8.505,
        "y": -1.75,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-11",
        "number": "U5.GND@11",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@11.",
        "x": 7.355,
        "y": 0.55,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      },
      {
        "id": "u5-gnd-12",
        "number": "U5.GND@12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U5.GND@12.",
        "x": 7.355,
        "y": -0.6,
        "size": [
          0.7,
          0.7
        ],
        "shape": "rect",
        "connector": "U5",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"3.775\" y=\"-5.0\" width=\"14.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.2858\" y=\"-5.1432\" width=\"3.8\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.4556\" y=\"2.0306\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.4866\" y=\"-5.2806\" width=\"3.5\" height=\"3.5805\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.928\" y=\"-3.6828\" width=\"1.6\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.6006\" y=\"-4.0638\" width=\"1.6\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.3148\" y=\"2.5682\" width=\"2.844\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.3722\" y=\"3.4036\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.662\" y=\"3.429\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.884\" y=\"3.429\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.0806\" y=\"3.4163\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.201\" y=\"3.4036\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.6234\" y=\"5.537\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-8.6868\" y=\"-3.4036\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4262\" y=\"-3.4036\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.9474\" y=\"-3.403597\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Airlift Bitsy Add-On.brd",
      "boardSha256": "6995df4878473bf0f659eff1ba39e56dcd1eae4a81ac63e066fd9b7a8c1496c2",
      "sourceBounds": [
        0,
        0,
        35.56,
        17.78
      ],
      "selectedConnectors": [
        "JP2",
        "JP4",
        "U5"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP2.5 passive pass-through verified from schematic endpoints.",
        "JP2.6 passive pass-through verified from schematic endpoints.",
        "JP2.8 passive pass-through verified from schematic endpoints.",
        "JP2.9 passive pass-through verified from schematic endpoints.",
        "JP2.10 passive pass-through verified from schematic endpoints.",
        "JP4.1 passive pass-through verified from schematic endpoints.",
        "JP4.3 passive pass-through verified from schematic endpoints.",
        "JP4.4 passive pass-through verified from schematic endpoints.",
        "JP4.5 passive pass-through verified from schematic endpoints.",
        "JP4.6 passive pass-through verified from schematic endpoints.",
        "JP4.7 passive pass-through verified from schematic endpoints.",
        "JP4.8 passive pass-through verified from schematic endpoints.",
        "JP4.9 passive pass-through verified from schematic endpoints.",
        "JP4.10 passive pass-through verified from schematic endpoints.",
        "JP4.11 passive pass-through verified from schematic endpoints.",
        "JP4.12 passive pass-through verified from schematic endpoints.",
        "U5.7 passive pass-through verified from schematic endpoints.",
        "U5.19 passive pass-through verified from schematic endpoints.",
        "U5.29 passive pass-through verified from schematic endpoints.",
        "U5.31 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP2.5",
          "sourceNet": "ESP_RESET",
          "before": {
            "type": "unspecified",
            "label": "ESP_RESET"
          },
          "after": {
            "type": "passive",
            "label": "ESP_RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP2.6",
          "sourceNet": "ESP_BUSY",
          "before": {
            "type": "unspecified",
            "label": "ESP_BUSY"
          },
          "after": {
            "type": "passive",
            "label": "ESP_BUSY"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP2.8",
          "sourceNet": "D9",
          "before": {
            "type": "unspecified",
            "label": "D9"
          },
          "after": {
            "type": "passive",
            "label": "D9"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP2.9",
          "sourceNet": "D7",
          "before": {
            "type": "unspecified",
            "label": "D7"
          },
          "after": {
            "type": "passive",
            "label": "D7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP2.10",
          "sourceNet": "D5",
          "before": {
            "type": "unspecified",
            "label": "D5"
          },
          "after": {
            "type": "passive",
            "label": "D5"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.5",
          "sourceNet": "A5",
          "before": {
            "type": "unspecified",
            "label": "A5"
          },
          "after": {
            "type": "passive",
            "label": "A5"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.6",
          "sourceNet": "A4",
          "before": {
            "type": "unspecified",
            "label": "A4"
          },
          "after": {
            "type": "passive",
            "label": "A4"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.8",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.9",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.10",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.11",
          "sourceNet": "VHI",
          "before": {
            "type": "unspecified",
            "label": "VHI"
          },
          "after": {
            "type": "passive",
            "label": "VHI"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "JP4.12",
          "sourceNet": "AREF",
          "before": {
            "type": "unspecified",
            "label": "AREF"
          },
          "after": {
            "type": "passive",
            "label": "AREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "U5.7",
          "sourceNet": "ESP_BUSY",
          "before": {
            "type": "unspecified",
            "label": "ESP_BUSY"
          },
          "after": {
            "type": "passive",
            "label": "ESP_BUSY"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "U5.19",
          "sourceNet": "ESP_RESET",
          "before": {
            "type": "unspecified",
            "label": "ESP_RESET"
          },
          "after": {
            "type": "passive",
            "label": "ESP_RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "U5.29",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        },
        {
          "number": "U5.31",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Airlift-Bitsy-Add-On-PCB/Adafruit Airlift Bitsy Add-On.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB",
      "commit": "e865b846cad8b220f4c14781b5a82e452e0712bc",
      "boardURL": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/Adafruit%20Airlift%20Bitsy%20Add-On.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/Adafruit%20Airlift%20Bitsy%20Add-On.sch",
      "schematicSha256": "8accdad0782cbb96830cbf9a7d4a0b69d807b6704aa74249f039ca6c95a88a7c",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Airlift-Bitsy-Add-On-PCB/blob/e865b846cad8b220f4c14781b5a82e452e0712bc/license.txt",
      "sourceArchiveSha256": "b9c553a875ffff12d5e5ec3469ffd44f5dd68620df6dfcef7203740aa7991e1f",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP2.5: unresolved electrical role on ESP_RESET.",
        "JP2.6: unresolved electrical role on ESP_BUSY.",
        "JP2.8: unresolved electrical role on D9.",
        "JP2.9: unresolved electrical role on D7.",
        "JP2.10: unresolved electrical role on D5.",
        "JP4.1: unresolved electrical role on D2.",
        "JP4.3: unresolved electrical role on MOSI.",
        "JP4.4: unresolved electrical role on SCK.",
        "JP4.5: unresolved electrical role on A5.",
        "JP4.6: unresolved electrical role on A4.",
        "JP4.7: unresolved electrical role on A3.",
        "JP4.8: unresolved electrical role on A2.",
        "JP4.9: unresolved electrical role on A1.",
        "JP4.10: unresolved electrical role on A0.",
        "JP4.11: unresolved electrical role on VHI.",
        "JP4.12: unresolved electrical role on AREF.",
        "U5.7: unresolved electrical role on ESP_BUSY.",
        "U5.19: unresolved electrical role on ESP_RESET.",
        "U5.29: unresolved electrical role on SCK.",
        "U5.31: unresolved electrical role on MOSI."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP2.5: unresolved electrical role on ESP_RESET.",
          "JP2.6: unresolved electrical role on ESP_BUSY.",
          "JP2.8: unresolved electrical role on D9.",
          "JP2.9: unresolved electrical role on D7.",
          "JP2.10: unresolved electrical role on D5.",
          "JP4.1: unresolved electrical role on D2.",
          "JP4.3: unresolved electrical role on MOSI.",
          "JP4.4: unresolved electrical role on SCK.",
          "JP4.5: unresolved electrical role on A5.",
          "JP4.6: unresolved electrical role on A4.",
          "JP4.7: unresolved electrical role on A3.",
          "JP4.8: unresolved electrical role on A2.",
          "JP4.9: unresolved electrical role on A1.",
          "JP4.10: unresolved electrical role on A0.",
          "JP4.11: unresolved electrical role on VHI.",
          "JP4.12: unresolved electrical role on AREF.",
          "U5.7: unresolved electrical role on ESP_BUSY.",
          "U5.19: unresolved electrical role on ESP_RESET.",
          "U5.29: unresolved electrical role on SCK.",
          "U5.31: unresolved electrical role on MOSI."
        ]
      }
    }
  }
};
