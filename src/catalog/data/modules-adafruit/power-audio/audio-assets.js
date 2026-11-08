// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-6049": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP2.1.",
        "x": -6.35,
        "y": 3.81,
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
        "x": -3.81,
        "y": 3.81,
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
        "label": "BCLK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: BCLK. Physical source contact JP2.3.",
        "x": -1.27,
        "y": 3.81,
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
        "label": "DATA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DATA. Physical source contact JP2.4.",
        "x": 1.27,
        "y": 3.81,
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
        "label": "WS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: WS. Physical source contact JP2.5.",
        "x": 3.81,
        "y": 3.81,
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
        "label": "SELECT",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SELECT. Physical source contact JP2.6.",
        "x": 6.35,
        "y": 3.81,
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
    "artwork": "<rect x=\"-1.325\" y=\"-2.512\" width=\"2.65\" height=\"3.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.994\" y=\"1.359\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.168\" y=\"1.346\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.007\" y=\"1.346\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.782\" y=\"0.406\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.004\" y=\"0.406\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit I2S MEMS Microphone Breakout - ICS-43434.brd",
      "boardSha256": "7d9e59db046d49f8e54f1896ad9cf11875e30911d32c8ab85071b79651eecd4f",
      "sourceBounds": [
        0,
        0,
        16.51,
        12.7
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$12",
          "x": -5.715,
          "y": -3.81,
          "drill": 2.5
        },
        {
          "sourceRef": "U$6",
          "x": 5.715,
          "y": -3.81,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB",
      "commit": "cde79ddef57c7df69a5e7268b66567fa50b7e42d",
      "boardURL": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/Adafruit%20I2S%20MEMS%20Microphone%20Breakout%20-%20ICS-43434.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/Adafruit%20I2S%20MEMS%20Microphone%20Breakout%20-%20ICS-43434.sch",
      "schematicSha256": "8c10b76eee4e566c12f2e40e5fe6e4c0abc645ccdd6358b89cac94b159e40188",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-I2S-MEMS-Microphone-Breakout-PCB/blob/cde79ddef57c7df69a5e7268b66567fa50b7e42d/license.txt",
      "sourceArchiveSha256": "fcc4e59bc759dd805097a85b0607dc6f7a9cff97d6d0b57e8f9642bb10dee828",
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
  "adafruit-module-3885": {
    "contacts": [
      {
        "id": "sense-1",
        "number": "SENSE.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE.1.",
        "x": 2,
        "y": 11.143,
        "size": [
          1,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact SENSE.2.",
        "x": 0,
        "y": 11.143,
        "size": [
          1,
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
        "label": "SIG",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIG. Physical source contact SENSE.3.",
        "x": -2,
        "y": 11.143,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "SENSE",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP1.P$1.",
        "x": 7.366,
        "y": -15.748,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP1",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact TP2.P$1.",
        "x": 0.127,
        "y": -15.748,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP2",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "SIG",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIG. Physical source contact TP3.P$1.",
        "x": -7.493,
        "y": -15.748,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP3",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "u-13-1",
        "number": "U$13.1",
        "label": "SPKR+",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SPKR+. Physical source contact U$13.1.",
        "x": -9.916,
        "y": 11.43,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$13",
        "back": false,
        "smd": true
      },
      {
        "id": "u-13-2",
        "number": "U$13.2",
        "label": "SPKR-",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SPKR-. Physical source contact U$13.2.",
        "x": -11.166,
        "y": 11.43,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$13",
        "back": false,
        "smd": true
      },
      {
        "id": "u-13-m1",
        "number": "U$13.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U$13.M1.",
        "x": -7.356,
        "y": 8.68,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$13",
        "back": false,
        "smd": true
      },
      {
        "id": "u-13-m2",
        "number": "U$13.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact U$13.M2.",
        "x": -13.726,
        "y": 8.68,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$13",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"10.343\" width=\"10.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.291\" y=\"7.3675\" width=\"7.5\" height=\"4.3751\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.197\" y=\"13.817\" width=\"3.1\" height=\"3.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.485\" y=\"13.486\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.058\" y=\"14.605\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.153\" y=\"11.519\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.978\" y=\"8.471\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.315\" y=\"9.296\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.804\" y=\"10.82\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>VR2 round housing from manufacturer package circles; finish representative</title><circle cx=\"7.747\" cy=\"15.367\" r=\"1.2419\" fill=\"#b9aa89\" stroke=\"#87958d\" stroke-width=\".22\"/></g>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit STEMMA Speaker.brd",
      "boardSha256": "5f4896cdc8b9688f20ee9e4a07b70f13961142322b946788f2c4b7e901ab77f2",
      "sourceBounds": [
        0,
        0,
        30.48,
        36.83
      ],
      "selectedConnectors": [
        "SENSE",
        "TP1",
        "TP2",
        "TP3",
        "U$13"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$10",
          "x": 12.7,
          "y": -15.875,
          "drill": 2.2
        },
        {
          "sourceRef": "U$11",
          "x": -12.7,
          "y": -15.875,
          "drill": 2.2
        },
        {
          "sourceRef": "U$9",
          "x": 12.7,
          "y": 15.875,
          "drill": 2.2
        },
        {
          "sourceRef": "U$12",
          "x": -12.7,
          "y": 15.875,
          "drill": 2.2
        }
      ],
      "repo": "adafruit/Adafruit-STEMMA-Speaker-PCB",
      "commit": "2f4a20b1411e8ead3160e6e89889f20311b248a1",
      "boardURL": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/Adafruit%20STEMMA%20Speaker.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/Adafruit%20STEMMA%20Speaker.sch",
      "schematicSha256": "409c942e81f9fa23da2cc5ed94336c76376416c8f7574f276ba5837f0a66b384",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-STEMMA-Speaker-PCB/blob/2f4a20b1411e8ead3160e6e89889f20311b248a1/license.txt",
      "sourceArchiveSha256": "0bd076bd5108ec73d30a907061f4889026319d31cd2c9ad5d58bc9c79ee6183c",
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
          "ref": "VR2",
          "package": "TRIMPOT_BOURNS_3303W",
          "sourceLayer": "51",
          "center": [
            7.747,
            15.367
          ],
          "radius": 1.2419,
          "back": false
        }
      ]
    }
  },
  "adafruit-module-5647": {
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": -3.81,
        "y": 6.985,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.2.",
        "x": -1.27,
        "y": 6.985,
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
        "label": "SIGNAL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact JP2.3.",
        "x": 1.27,
        "y": 6.985,
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
        "label": "VO+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO+. Physical source contact JP2.4.",
        "x": 3.81,
        "y": 6.985,
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
        "label": "VO-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO-. Physical source contact JP2.5.",
        "x": 6.35,
        "y": 6.985,
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
        "id": "x2-1",
        "number": "X2.1",
        "label": "VO-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO-. Physical source contact X2.1.",
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
        "label": "VO+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO+. Physical source contact X2.2.",
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
      }
    ],
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.49\" y=\"-3.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.896\" y=\"-7.992\" width=\"4.3\" height=\"4.3\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.738\" y=\"-1.627\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.087\" y=\"5.95\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.635\" y=\"3.658\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"3.658\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"4.026\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.182\" y=\"-6.528\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.803\" y=\"-3.213\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.372\" y=\"1.994\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.372\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.182\" y=\"-8.052\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.803\" y=\"1.981\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.595\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.026\" y=\"1.041\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.013\" y=\"-2.261\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.0485\" y=\"2.032\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit STEMMA Audio Amp.brd",
      "boardSha256": "6bb1a218aad69da0ec33f8c407a69e3037d56cbb2e71267df75f8c0252ac2dc8",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "X4",
        "JP2",
        "X2"
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
      "repo": "adafruit/Adafruit-STEMMA-Audio-Amp-PCB",
      "commit": "12d0f77a674db2b356c9e6b385f3917d4eb3420a",
      "boardURL": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/Adafruit%20STEMMA%20Audio%20Amp.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/Adafruit%20STEMMA%20Audio%20Amp.sch",
      "schematicSha256": "2aa9670d485c014258dc4ec5d057799a481161905ba09914b05a2650bbf3c0d8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-STEMMA-Audio-Amp-PCB/blob/12d0f77a674db2b356c9e6b385f3917d4eb3420a/license.txt",
      "sourceArchiveSha256": "3835964c586e66c1935e92d95b756fbe4ab28e3ec878e5a0cfa3ed5d9b2c154b",
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
  "adafruit-module-1712": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.1.",
        "x": -9.271,
        "y": -11.43,
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
        "x": -9.271,
        "y": -8.89,
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
        "label": "SHUTDOWN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SHUTDOWN. Physical source contact JP1.3.",
        "x": -9.271,
        "y": -6.35,
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
        "label": "IN_R_N",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_R_N. Physical source contact JP1.4.",
        "x": -9.271,
        "y": -3.81,
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
        "label": "IN_R_P",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_R_P. Physical source contact JP1.5.",
        "x": -9.271,
        "y": -1.27,
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
        "label": "IN_L_P",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_L_P. Physical source contact JP1.6.",
        "x": -9.271,
        "y": 1.27,
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
        "label": "IN_L_N",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_L_N. Physical source contact JP1.7.",
        "x": -9.271,
        "y": 3.81,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.8.",
        "x": -9.271,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.9.",
        "x": -9.271,
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
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "I2C_VCC",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: I2C_VCC. Physical source contact JP1.10.",
        "x": -9.271,
        "y": 11.43,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT_L_N",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_L_N. Physical source contact J1.1.",
        "x": 7.239,
        "y": 2.01,
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
        "label": "OUT_L_P",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_L_P. Physical source contact J1.2.",
        "x": 7.239,
        "y": 5.51,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT_R_P",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_R_P. Physical source contact J2.1.",
        "x": 7.239,
        "y": -5.61,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "OUT_R_N",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_R_N. Physical source contact J2.2.",
        "x": 7.239,
        "y": -2.11,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"3.839\" y=\"-7.41\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.839\" y=\"0.21\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.492\" y=\"-1.873\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.679\" y=\"-11.74\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.543\" y=\"-8.152\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.808\" y=\"-10.055\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.401\" y=\"-10.625\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.149\" y=\"3.123\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.149\" y=\"0.951\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.149\" y=\"-4.503\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.47\" y=\"-6.985\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.11\" y=\"5.967\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.081\" y=\"8.334\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.065\" y=\"-11.865\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.032\" y=\"-10.058\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.13\" y=\"-5.035\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.149\" y=\"-2.558\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TPA2016D2.brd",
      "boardSha256": "68d39419e03c79cebe00a257c52ff096fbe560558f07d7df9f5416c007a8bf6b",
      "sourceBounds": [
        0,
        0,
        21.59,
        27.94
      ],
      "selectedConnectors": [
        "JP1",
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$20",
          "x": 8.255,
          "y": 11.43,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 8.255,
          "y": -11.43,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPA2016-PCB",
      "commit": "cad449b53378a89066d524a24f085207d74faf06",
      "boardURL": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/Adafruit%20TPA2016D2.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/Adafruit%20TPA2016D2.sch",
      "schematicSha256": "4074e4440da19e4926db94fda7a135198fbad2d5ed6dc3b987f2bae6b04c39b5",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPA2016-PCB/blob/cad449b53378a89066d524a24f085207d74faf06/license.txt",
      "sourceArchiveSha256": "a2225a7a2f4adfcda74612c26525764cecf85140d16705f7ae2a9417e322e113",
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
  "adafruit-module-1552": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.1.",
        "x": -10,
        "y": -11.43,
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
        "x": -10,
        "y": -8.89,
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
        "label": "SHUTDOWN_R",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SHUTDOWN_R. Physical source contact JP1.3.",
        "x": -10,
        "y": -6.35,
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
        "label": "IN_R_P",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_R_P. Physical source contact JP1.4.",
        "x": -10,
        "y": -3.81,
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
        "label": "IN_R_N",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_R_N. Physical source contact JP1.5.",
        "x": -10,
        "y": -1.27,
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
        "label": "IN_L_N",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_L_N. Physical source contact JP1.6.",
        "x": -10,
        "y": 1.27,
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
        "label": "IN_L_P",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN_L_P. Physical source contact JP1.7.",
        "x": -10,
        "y": 3.81,
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
        "label": "SHUTDOWN_L",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SHUTDOWN_L. Physical source contact JP1.8.",
        "x": -10,
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
        "label": "GAIN0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GAIN0. Physical source contact JP1.9.",
        "x": -10,
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
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "GAIN1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GAIN1. Physical source contact JP1.10.",
        "x": -10,
        "y": 11.43,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT_L_N",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_L_N. Physical source contact J1.1.",
        "x": 7.5,
        "y": 2.4,
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
        "label": "OUT_L_P",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_L_P. Physical source contact J1.2.",
        "x": 7.5,
        "y": 5.9,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT_R_P",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_R_P. Physical source contact J2.1.",
        "x": 7.5,
        "y": -5.8,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "OUT_R_N",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: OUT_R_N. Physical source contact J2.2.",
        "x": 7.5,
        "y": -2.3,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"4.1\" y=\"-7.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.1\" y=\"0.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"8.51\" width=\"6.0\" height=\"4.98\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.1\" y=\"-2.1\" width=\"4.2\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.465\" y=\"-3.61\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.135\" y=\"-10.81\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.465\" y=\"0.09\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.99\" y=\"-8.535\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.99\" y=\"-10.535\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.69\" y=\"2.865\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.99\" y=\"6.965\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.11\" y=\"3.265\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.11\" y=\"0.865\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.11\" y=\"-4.435\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.11\" y=\"-1.935\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.01\" y=\"6.965\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.01\" y=\"-8.535\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.01\" y=\"-10.535\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TS2012 TPA2012 Class D Audio Amp.brd",
      "boardSha256": "fc7ad0c559a9ccc08593a00ffb17fb4ecd0735347ac08e7940e2a87527f8daed",
      "sourceBounds": [
        0,
        0,
        23,
        28
      ],
      "selectedConnectors": [
        "JP1",
        "J1",
        "J2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$20",
          "x": 9,
          "y": 11.5,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 9,
          "y": -11.5,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB",
      "commit": "b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8",
      "boardURL": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/Adafruit%20TS2012%20TPA2012%20Class%20D%20Audio%20Amp.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/Adafruit%20TS2012%20TPA2012%20Class%20D%20Audio%20Amp.sch",
      "schematicSha256": "91c9543e7305527060ab9b92e5949215a9b44d49a822db974918afb712f6ab3a",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TPA2012-or-TS2012-Breakout-PCB/blob/b099d41a3fb4cddce5f19a7a8bbdc7a2d68711d8/license.txt",
      "sourceArchiveSha256": "1e5a49839fd5bd00b93d57a03f24e1133693279ab7d0e228e20c0ac2a53f6fa3",
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
  "adafruit-module-3678": {
    "contacts": [
      {
        "id": "x2-1",
        "number": "X2.1",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact X2.1.",
        "x": 16.55,
        "y": -3.5,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact X2.2.",
        "x": 7.35,
        "y": -3.5,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-4",
        "number": "X2.4",
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact X2.4.",
        "x": 3.25,
        "y": 0.75,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-3",
        "number": "X2.3",
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact X2.3.",
        "x": 14.75,
        "y": 3.5,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-5",
        "number": "X2.5",
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact X2.5.",
        "x": 17.55,
        "y": 3.5,
        "size": [
          1.2,
          2.5
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.1.",
        "x": -11.43,
        "y": 10.16,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.2.",
        "x": -8.89,
        "y": 10.16,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.3.",
        "x": -6.35,
        "y": 10.16,
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
        "label": "WORDSEL_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: WORDSEL_IN. Physical source contact JP3.4.",
        "x": -3.81,
        "y": 10.16,
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
        "label": "DATA_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DATA_IN. Physical source contact JP3.5.",
        "x": -1.27,
        "y": 10.16,
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
        "label": "BITCLK_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: BITCLK_IN. Physical source contact JP3.6.",
        "x": 1.27,
        "y": 10.16,
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
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact JP3.7.",
        "x": 3.81,
        "y": 10.16,
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
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP3.8.",
        "x": 6.35,
        "y": 10.16,
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
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact JP3.9.",
        "x": 8.89,
        "y": 10.16,
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
        "label": "SYSCLK_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SYSCLK_IN. Physical source contact JP1.1.",
        "x": -8.89,
        "y": -10.16,
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
        "label": "SFOR1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SFOR1. Physical source contact JP1.2.",
        "x": -6.35,
        "y": -10.16,
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
        "label": "MUTE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MUTE. Physical source contact JP1.3.",
        "x": -3.81,
        "y": -10.16,
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
        "label": "SFOR0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SFOR0. Physical source contact JP1.4.",
        "x": -1.27,
        "y": -10.16,
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
        "label": "PLL_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: PLL_IN. Physical source contact JP1.5.",
        "x": 1.27,
        "y": -10.16,
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
        "label": "DEEM/CLKOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DEEM/CLKOUT. Physical source contact JP1.6.",
        "x": 3.81,
        "y": -10.16,
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
    "artwork": "<rect x=\"4.55\" y=\"-3.0\" width=\"17.0\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.442\" y=\"-3.336\" width=\"5.072\" height=\"5.656\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.076\" y=\"-7.045\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.076\" y=\"2.226\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.302\" y=\"-1.342\" width=\"2.0\" height=\"3.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.454\" y=\"-6.08\" width=\"3.7\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.29\" y=\"2.795\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.255\" y=\"-8.026\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.239\" y=\"5.944\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.239\" y=\"3.912\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.573\" y=\"-4.978\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.319\" y=\"-7.518\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.557\" y=\"5.944\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"-7.645\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.424\" y=\"-0.762\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.748\" y=\"-5.486\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.351\" y=\"-8.153\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"0.483\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-1.295\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.811\" y=\"6.071\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.089\" y=\"-4.572\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.322\" y=\"4.978\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.925\" y=\"4.978\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.528\" y=\"4.978\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.358\" y=\"1.6\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.1\" y=\"3.835\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.497\" y=\"3.835\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit UDA1334 I2S DAC.brd",
      "boardSha256": "daf2f1a5a666db2157278f0fcc65eecf0efde9dd12f131d7b8b86c8fc0a740d6",
      "sourceBounds": [
        0,
        0,
        38.1,
        25.4
      ],
      "selectedConnectors": [
        "X2",
        "JP3",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$11",
          "x": -16.51,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$12",
          "x": 16.51,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$13",
          "x": -16.51,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$14",
          "x": 16.51,
          "y": -10.16,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB",
      "commit": "e836025c26c8dcfa3fab3e9aa7756542770f4849",
      "boardURL": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/Adafruit%20UDA1334%20I2S%20DAC.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/Adafruit%20UDA1334%20I2S%20DAC.sch",
      "schematicSha256": "ed5f22fd2b645d797d97316cc02a8872d747e7b37163ff7cb2b6bfcdabc89327",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-UDA1334A-I2S-Stereo-DAC-PCB/blob/e836025c26c8dcfa3fab3e9aa7756542770f4849/license.txt",
      "sourceArchiveSha256": "581734a7e62051f6d44082c8495db13a3dadec2128f240b6f85b5889604519aa",
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
  "adafruit-module-6421": {
    "contacts": [
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.1.",
        "x": -11.43,
        "y": 8.92175,
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
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP3.2.",
        "x": -8.89,
        "y": 8.92175,
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
        "label": "WORDSEL_IN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WORDSEL_IN. Physical source contact JP3.3.",
        "x": -6.35,
        "y": 8.92175,
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
        "label": "DATA_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DATA_IN. Physical source contact JP3.4.",
        "x": -3.81,
        "y": 8.92175,
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
        "label": "BITCLK_IN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: BITCLK_IN. Physical source contact JP3.5.",
        "x": -1.27,
        "y": 8.92175,
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
        "label": "MCLK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MCLK. Physical source contact JP3.6.",
        "x": 1.27,
        "y": 8.92175,
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
        "label": "MUTE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MUTE. Physical source contact JP3.7.",
        "x": 3.81,
        "y": 8.92175,
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
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact JP3.8.",
        "x": 6.35,
        "y": 8.92175,
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
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP3.9.",
        "x": 8.89,
        "y": 8.92175,
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
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact JP3.10.",
        "x": 11.43,
        "y": 8.92175,
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
        "label": "ADDR1/MISO/FMT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR1/MISO/FMT. Physical source contact JP2.1.",
        "x": -11.43,
        "y": -8.85825,
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
        "label": "ADDR2/SDOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR2/SDOUT. Physical source contact JP2.2.",
        "x": -8.89,
        "y": -8.85825,
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
        "label": "AGAIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AGAIN. Physical source contact JP2.3.",
        "x": -6.35,
        "y": -8.85825,
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
        "label": "MODE1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MODE1. Physical source contact JP2.4.",
        "x": -3.81,
        "y": -8.85825,
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
        "label": "MODE2/CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MODE2/CS. Physical source contact JP2.5.",
        "x": -1.27,
        "y": -8.85825,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact JP2.6.",
        "x": 1.27,
        "y": -8.85825,
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
        "label": "SCL/SCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact JP2.7.",
        "x": 3.81,
        "y": -8.85825,
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
        "label": "ATT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ATT0. Physical source contact JP2.8.",
        "x": 6.35,
        "y": -8.85825,
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
        "label": "FILTER",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: FILTER. Physical source contact JP2.9.",
        "x": 8.89,
        "y": -8.85825,
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
        "label": "DEMPH",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DEMPH. Physical source contact JP2.10.",
        "x": 11.43,
        "y": -8.85825,
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
        "id": "x3-2",
        "number": "X3.2",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact X3.2.",
        "x": 15.741,
        "y": 2.48175,
        "size": [
          3.302,
          1.651
        ],
        "shape": "oval",
        "connector": "X3",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x3-1",
        "number": "X3.1",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact X3.1.",
        "x": 15.841,
        "y": -2.96825,
        "size": [
          3.302,
          1.651
        ],
        "shape": "oval",
        "connector": "X3",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x3-5",
        "number": "X3.5",
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact X3.5.",
        "x": 6.891,
        "y": -3.61825,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-3",
        "number": "X3.3",
        "label": "OUTR",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTR. Physical source contact X3.3.",
        "x": 12.391,
        "y": -3.61825,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-4",
        "number": "X3.4",
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact X3.4.",
        "x": 8.591,
        "y": 3.58175,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-6",
        "number": "X3.6",
        "label": "OUTL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUTL. Physical source contact X3.6.",
        "x": 6.391,
        "y": 3.58175,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"5.978934\" y=\"-3.120822\" width=\"13.900937\" height=\"6.305144\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.3435\" y=\"-4.81825\" width=\"4.4\" height=\"9.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.5125\" y=\"-1.67775\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.5125\" y=\"-5.80525\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.13\" y=\"-6.24975\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.6059\" y=\"-0.03075\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.039\" y=\"-4.79425\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2065\" y=\"-2.21575\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.3035\" y=\"3.81675\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.471\" y=\"3.58775\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.4305\" y=\"-2.34275\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.535\" y=\"-4.85775\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"-0.33675\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.169\" y=\"4.87025\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.01\" y=\"-5.91175\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.0105\" y=\"-6.03875\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.3255\" y=\"-4.76925\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.277\" y=\"5.51825\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.5155\" y=\"3.67625\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.8225\" y=\"-0.32425\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2005\" y=\"3.10475\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.359\" y=\"3.10475\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.432\" y=\"3.10475\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-3.556\" y=\"-4.92125\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PCM5122 I2S DAC.brd",
      "boardSha256": "7f24c73f30ccfe31a1d2a66e51fe6a3d84efa4a6b2b04a689efced174e830643",
      "sourceBounds": [
        0,
        0,
        35.56,
        22.9235
      ],
      "selectedConnectors": [
        "JP3",
        "JP2",
        "X3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$11",
          "x": -15.24,
          "y": 8.92175,
          "drill": 2.5
        },
        {
          "sourceRef": "U$12",
          "x": 15.24,
          "y": 8.92175,
          "drill": 2.5
        },
        {
          "sourceRef": "U$13",
          "x": -15.24,
          "y": -8.92175,
          "drill": 2.5
        },
        {
          "sourceRef": "U$14",
          "x": 15.24,
          "y": -8.92175,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-PCM5122-I2S-DAC-PCB",
      "commit": "5ce8729798cefc4174524ae678db3958ad0b8113",
      "boardURL": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/Adafruit%20PCM5122%20I2S%20DAC.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/Adafruit%20PCM5122%20I2S%20DAC.sch",
      "schematicSha256": "58c36b598f01dab74b1e14ac710668a57b331a75d3c70471e37f3fdd0987b1a4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PCM5122-I2S-DAC-PCB/blob/5ce8729798cefc4174524ae678db3958ad0b8113/license.txt",
      "sourceArchiveSha256": "127f867de73255b6fc6c11223e76b70cff54ab00f5cd8234d8bc71c98fabd605",
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
  "adafruit-module-5769": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SD_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SD_CS. Physical source contact JP1.1.",
        "x": 7.62,
        "y": -7.62,
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
        "label": "DIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIN. Physical source contact JP1.2.",
        "x": 7.62,
        "y": -5.08,
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
        "label": "LRCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LRCLK. Physical source contact JP1.3.",
        "x": 7.62,
        "y": -2.54,
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
        "label": "BCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BCLK. Physical source contact JP1.4.",
        "x": 7.62,
        "y": 0,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": 7.62,
        "y": 2.54,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
        "x": 7.62,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP1.7.",
        "x": 7.62,
        "y": 7.62,
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
        "id": "jp1-1c",
        "number": "JP1.1C",
        "label": "SD_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SD_CS. Physical source contact JP1.1C.",
        "x": 8.943975,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "DIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIN. Physical source contact JP1.2C.",
        "x": 8.943975,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "LRCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LRCLK. Physical source contact JP1.3C.",
        "x": 8.943975,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4c",
        "number": "JP1.4C",
        "label": "BCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BCLK. Physical source contact JP1.4C.",
        "x": 8.943975,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5c",
        "number": "JP1.5C",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
        "x": 8.943975,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6c",
        "number": "JP1.6C",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
        "x": 8.943975,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7c",
        "number": "JP1.7C",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP1.7C.",
        "x": 8.943975,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
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
        "x": -7.62,
        "y": 7.62,
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
        "label": "SCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCK. Physical source contact JP3.2.",
        "x": -7.62,
        "y": 5.08,
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
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP3.3.",
        "x": -7.62,
        "y": 2.54,
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
        "label": "MOSI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MOSI. Physical source contact JP3.4.",
        "x": -7.62,
        "y": 0,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.5.",
        "x": -7.62,
        "y": -2.54,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6.",
        "x": -7.62,
        "y": -5.08,
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
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7.",
        "x": -7.62,
        "y": -7.62,
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
        "id": "jp3-1c",
        "number": "JP3.1C",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP3.1C.",
        "x": -8.943975,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCK. Physical source contact JP3.2C.",
        "x": -8.943975,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3c",
        "number": "JP3.3C",
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP3.3C.",
        "x": -8.943975,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MOSI. Physical source contact JP3.4C.",
        "x": -8.943975,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5c",
        "number": "JP3.5C",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.5C.",
        "x": -8.943975,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6c",
        "number": "JP3.6C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6C.",
        "x": -8.943975,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7c",
        "number": "JP3.7C",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7C.",
        "x": -8.943975,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.8.",
        "x": -4.672,
        "y": 8.9425,
        "size": [
          0.75,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact X1.7.",
        "x": -3.622,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.6.",
        "x": -2.522,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact X1.5.",
        "x": -1.422,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X1.4.",
        "x": -0.322,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact X1.3.",
        "x": 0.778,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "SD_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SD_CS. Physical source contact X1.2.",
        "x": 1.878,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.1.",
        "x": 2.978,
        "y": 8.9425,
        "size": [
          0.85,
          1.1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9",
        "number": "X1.9",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.9.",
        "x": 5.613,
        "y": 2.7925,
        "size": [
          1.2,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-10",
        "number": "X1.10",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.10.",
        "x": 5.613,
        "y": -0.9075,
        "size": [
          1.2,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "u-12-1",
        "number": "U$12.1",
        "label": "VO+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO+. Physical source contact U$12.1.",
        "x": -0.137,
        "y": -5.7785,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$12",
        "back": false,
        "smd": true
      },
      {
        "id": "u-12-2",
        "number": "U$12.2",
        "label": "VO-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO-. Physical source contact U$12.2.",
        "x": -1.387,
        "y": -5.7785,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$12",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-g3",
        "number": "X1.G3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G3.",
        "x": -3.857,
        "y": -1.8825,
        "size": [
          1.9,
          1.35
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-g4",
        "number": "X1.G4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G4.",
        "x": 2.113,
        "y": -1.8825,
        "size": [
          1.9,
          1.35
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-g2",
        "number": "X1.G2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G2.",
        "x": -5.882,
        "y": 8.5925,
        "size": [
          1.17,
          1.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-g1",
        "number": "X1.G1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G1.",
        "x": 5.438,
        "y": 8.8175,
        "size": [
          1.55,
          1.35
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "u-12-m1",
        "number": "U$12.M1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$12.M1.",
        "x": 2.423,
        "y": -8.5285,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$12",
        "back": false,
        "smd": true
      },
      {
        "id": "u-12-m2",
        "number": "U$12.M2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$12.M2.",
        "x": -3.947,
        "y": -8.5285,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$12",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.102\" y=\"-2.2075\" width=\"11.95\" height=\"11.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.512\" y=\"-9.841\" width=\"7.5\" height=\"4.3751\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.6045\" y=\"-6.4125\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.3968\" y=\"-5.0578\" width=\"1.1114\" height=\"2.1146\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.2227\" y=\"-5.0578\" width=\"1.1114\" height=\"2.1146\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.105\" y=\"-5.0165\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"-6.9215\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Audio BFF PCB.brd",
      "boardSha256": "e4908a1f8bca399eeb8b9dad9624ffb5c00c119024de8df2780e2c4778456a6f",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "X1",
        "U$12"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.5C passive pass-through verified from schematic endpoints.",
        "JP1.6C passive pass-through verified from schematic endpoints.",
        "JP1.7C passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "JP3.1C passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP1.5C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP1.6C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP1.7C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP3.1C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP3.2C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP3.3C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "JP3.4C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "X1.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "X1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        },
        {
          "number": "X1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Audio-BFF-PCB/Adafruit Audio BFF PCB.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Audio-BFF-PCB",
      "commit": "cc58e5b14991044038626a00b502c2e8eda2f85a",
      "boardURL": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/Adafruit%20Audio%20BFF%20PCB.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/Adafruit%20Audio%20BFF%20PCB.sch",
      "schematicSha256": "42a2a366116cc5ef1d6894cc6d5115d35c69a1b13d575503c31705667a5ba157",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Audio-BFF-PCB/blob/cc58e5b14991044038626a00b502c2e8eda2f85a/license.txt",
      "sourceArchiveSha256": "19c485e66576c5bbe6d9bdc4659af6df0a3356a3fc608e6b3a010a1f4228a690",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.6: unresolved electrical role on SCL.",
        "JP1.7: unresolved electrical role on TX.",
        "JP1.5C: unresolved electrical role on SDA.",
        "JP1.6C: unresolved electrical role on SCL.",
        "JP1.7C: unresolved electrical role on TX.",
        "JP3.1: unresolved electrical role on RX.",
        "JP3.1C: unresolved electrical role on RX."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.7: unresolved electrical role on TX.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP1.6C: unresolved electrical role on SCL.",
          "JP1.7C: unresolved electrical role on TX.",
          "JP3.1: unresolved electrical role on RX.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI.",
          "JP3.1C: unresolved electrical role on RX.",
          "JP3.2C: unresolved electrical role on SCK.",
          "JP3.3C: unresolved electrical role on MISO.",
          "JP3.4C: unresolved electrical role on MOSI.",
          "X1.7: unresolved electrical role on MISO.",
          "X1.5: unresolved electrical role on SCK.",
          "X1.3: unresolved electrical role on MOSI."
        ]
      }
    }
  },
  "adafruit-module-5770": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A0. Physical source contact JP1.1.",
        "x": 7.62,
        "y": -7.62,
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
        "label": "A1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1. Physical source contact JP1.2.",
        "x": 7.62,
        "y": -5.08,
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
        "label": "A2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A2. Physical source contact JP1.3.",
        "x": 7.62,
        "y": -2.54,
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
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact JP1.4.",
        "x": 7.62,
        "y": 0,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": 7.62,
        "y": 2.54,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
        "x": 7.62,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP1.7.",
        "x": 7.62,
        "y": 7.62,
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
        "id": "jp1-1c",
        "number": "JP1.1C",
        "label": "A0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A0. Physical source contact JP1.1C.",
        "x": 8.943975,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "A1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1. Physical source contact JP1.2C.",
        "x": 8.943975,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "A2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A2. Physical source contact JP1.3C.",
        "x": 8.943975,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4c",
        "number": "JP1.4C",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact JP1.4C.",
        "x": 8.943975,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5c",
        "number": "JP1.5C",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
        "x": 8.943975,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6c",
        "number": "JP1.6C",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
        "x": 8.943975,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7c",
        "number": "JP1.7C",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP1.7C.",
        "x": 8.943975,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
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
        "x": -7.62,
        "y": 7.62,
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
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP3.2.",
        "x": -7.62,
        "y": 5.08,
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
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP3.3.",
        "x": -7.62,
        "y": 2.54,
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
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP3.4.",
        "x": -7.62,
        "y": 0,
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
        "label": "3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V. Physical source contact JP3.5.",
        "x": -7.62,
        "y": -2.54,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6.",
        "x": -7.62,
        "y": -5.08,
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
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7.",
        "x": -7.62,
        "y": -7.62,
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
        "id": "jp3-1c",
        "number": "JP3.1C",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP3.1C.",
        "x": -8.943975,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP3.2C.",
        "x": -8.943975,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3c",
        "number": "JP3.3C",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP3.3C.",
        "x": -8.943975,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP3.4C.",
        "x": -8.943975,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5c",
        "number": "JP3.5C",
        "label": "3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V. Physical source contact JP3.5C.",
        "x": -8.943975,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6c",
        "number": "JP3.6C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6C.",
        "x": -8.943975,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7c",
        "number": "JP3.7C",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7C.",
        "x": -8.943975,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "DIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIN. Physical source contact JP2.1.",
        "x": 5.08,
        "y": -6.7945,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "LRCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LRCLK. Physical source contact JP4.1.",
        "x": 3.048,
        "y": -6.7945,
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
        "label": "BCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BCLK. Physical source contact JP5.1.",
        "x": 3.937,
        "y": -0.6985,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "u-1-1",
        "number": "U$1.1",
        "label": "VO+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO+. Physical source contact U$1.1.",
        "x": -0.371,
        "y": -0.8255,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$1",
        "back": false,
        "smd": true
      },
      {
        "id": "u-1-2",
        "number": "U$1.2",
        "label": "VO-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO-. Physical source contact U$1.2.",
        "x": 0.879,
        "y": -0.8255,
        "size": [
          0.8,
          1.6
        ],
        "shape": "rect",
        "connector": "U$1",
        "back": false,
        "smd": true
      },
      {
        "id": "u-1-m1",
        "number": "U$1.M1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$1.M1.",
        "x": -2.931,
        "y": 1.9245,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$1",
        "back": false,
        "smd": true
      },
      {
        "id": "u-1-m2",
        "number": "U$1.M2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$1.M2.",
        "x": 3.439,
        "y": 1.9245,
        "size": [
          2.1,
          3
        ],
        "shape": "rect",
        "connector": "U$1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.496\" y=\"-1.1381\" width=\"7.5\" height=\"4.3751\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.904\" y=\"-8.8255\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.223\" y=\"-1.7145\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"-9.8425\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"-5.9055\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"-3.6195\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.359\" y=\"-8.6995\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.48\" y=\"-8.8015\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.838\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.42\" y=\"-6.1975\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.197\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.673\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.721\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.258\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit I2S Amplifier BFF.brd",
      "boardSha256": "fc8031dfbf7e8457ca5e05a8fcf1c3abaf286b8ff9a1515235ecfc91062808ab",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "JP2",
        "JP4",
        "JP5",
        "U$1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.4C passive pass-through verified from schematic endpoints.",
        "JP1.5C passive pass-through verified from schematic endpoints.",
        "JP1.6C passive pass-through verified from schematic endpoints.",
        "JP1.7C passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "JP3.2 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints.",
        "JP3.1C passive pass-through verified from schematic endpoints.",
        "JP3.2C passive pass-through verified from schematic endpoints.",
        "JP3.3C passive pass-through verified from schematic endpoints.",
        "JP3.4C passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP1.4C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP1.5C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP1.6C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP1.7C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP3.1C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP3.2C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP3.3C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        },
        {
          "number": "JP3.4C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-I2S-Amplifier-BFF-PCB/Adafruit I2S Amplifier BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-I2S-Amplifier-BFF-PCB",
      "commit": "fe191f0585be438605feca267afa38fe587e57f4",
      "boardURL": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/Adafruit%20I2S%20Amplifier%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/Adafruit%20I2S%20Amplifier%20BFF.sch",
      "schematicSha256": "a80c2da1e7d7ae7aaaa7f9bbeb9eac7557d345e006bd2de0336073b89d562347",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-I2S-Amplifier-BFF-PCB/blob/fe191f0585be438605feca267afa38fe587e57f4/license.txt",
      "sourceArchiveSha256": "90673f00a82e66a0428b4c8a1f5c1034d2d21d1a22b56a6c914b5cde4aae11b3",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.4: unresolved electrical role on A3.",
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.6: unresolved electrical role on SCL.",
        "JP1.7: unresolved electrical role on TX.",
        "JP1.4C: unresolved electrical role on A3.",
        "JP1.5C: unresolved electrical role on SDA.",
        "JP1.6C: unresolved electrical role on SCL.",
        "JP1.7C: unresolved electrical role on TX.",
        "JP3.1: unresolved electrical role on RX.",
        "JP3.2: unresolved electrical role on SCK.",
        "JP3.3: unresolved electrical role on MISO.",
        "JP3.4: unresolved electrical role on MOSI.",
        "JP3.1C: unresolved electrical role on RX.",
        "JP3.2C: unresolved electrical role on SCK.",
        "JP3.3C: unresolved electrical role on MISO.",
        "JP3.4C: unresolved electrical role on MOSI."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.4: unresolved electrical role on A3.",
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.7: unresolved electrical role on TX.",
          "JP1.4C: unresolved electrical role on A3.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP1.6C: unresolved electrical role on SCL.",
          "JP1.7C: unresolved electrical role on TX.",
          "JP3.1: unresolved electrical role on RX.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI.",
          "JP3.1C: unresolved electrical role on RX.",
          "JP3.2C: unresolved electrical role on SCK.",
          "JP3.3C: unresolved electrical role on MISO.",
          "JP3.4C: unresolved electrical role on MOSI."
        ]
      }
    }
  },
  "adafruit-module-1381": {
    "contacts": [
      {
        "id": "cn1-cd1",
        "number": "CN1.CD1",
        "label": "SD_DETECT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SD_DETECT. Physical source contact CN1.CD1.",
        "x": -5.4596,
        "y": 13.2925,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-cd2",
        "number": "CN1.CD2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.CD2.",
        "x": 0.5404,
        "y": 13.2925,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-8",
        "number": "CN1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.8.",
        "x": -6.1596,
        "y": 23.4925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-7",
        "number": "CN1.7",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact CN1.7.",
        "x": -5.0596,
        "y": 23.4925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-6",
        "number": "CN1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.6.",
        "x": -3.9596,
        "y": 23.8925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-5",
        "number": "CN1.5",
        "label": "SCLK_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK_3V. Physical source contact CN1.5.",
        "x": -2.8596,
        "y": 23.4925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-4",
        "number": "CN1.4",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CN1.4.",
        "x": -1.7596,
        "y": 23.8925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-3",
        "number": "CN1.3",
        "label": "MOSI_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_3V. Physical source contact CN1.3.",
        "x": -0.6596,
        "y": 23.4925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-2",
        "number": "CN1.2",
        "label": "SDCS_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDCS_3V. Physical source contact CN1.2.",
        "x": 0.4404,
        "y": 23.0925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-1",
        "number": "CN1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.1.",
        "x": 1.5404,
        "y": 23.4925,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "R_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: R_OUT. Physical source contact JP2.1.",
        "x": 11.5824,
        "y": -20.6755,
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
        "label": "L_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: L_OUT. Physical source contact JP2.2.",
        "x": 11.5824,
        "y": -18.1355,
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
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP2.3.",
        "x": 11.5824,
        "y": -15.5955,
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
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP2.4.",
        "x": 11.5824,
        "y": -13.0555,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.5.",
        "x": 11.5824,
        "y": -10.5155,
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
        "label": "DREQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DREQ. Physical source contact JP2.6.",
        "x": 11.5824,
        "y": -7.9755,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.7.",
        "x": 11.5824,
        "y": -5.4355,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP2.8.",
        "x": 11.5824,
        "y": -2.8955,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.9.",
        "x": 11.5824,
        "y": -0.3555,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP2.10.",
        "x": 11.5824,
        "y": 2.1845,
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
        "label": "MOSI_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI_5V. Physical source contact JP2.11.",
        "x": 11.5824,
        "y": 4.7245,
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
        "label": "SCLK_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK_5V. Physical source contact JP2.12.",
        "x": 11.5824,
        "y": 7.2645,
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
        "label": "RST_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST_5V. Physical source contact JP2.13.",
        "x": 11.5824,
        "y": 9.8045,
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
        "label": "CS_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS_5V. Physical source contact JP2.14.",
        "x": 11.5824,
        "y": 12.3445,
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
        "id": "jp2-15",
        "number": "JP2.15",
        "label": "SDCS_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDCS_5V. Physical source contact JP2.15.",
        "x": 11.5824,
        "y": 14.8845,
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
        "id": "jp2-16",
        "number": "JP2.16",
        "label": "XDCS_5V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: XDCS_5V. Physical source contact JP2.16.",
        "x": 11.5824,
        "y": 17.4245,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "LINE2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LINE2. Physical source contact JP3.1.",
        "x": -11.2776,
        "y": -20.6755,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "MIC_P",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MIC_P. Physical source contact JP3.2.",
        "x": -11.2776,
        "y": -18.1355,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "MIC_N",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MIC_N. Physical source contact JP3.3.",
        "x": -11.2776,
        "y": -15.5955,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact JP3.4.",
        "x": -11.2776,
        "y": -13.0555,
        "size": [
          1.6764,
          1.6764
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
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.5.",
        "x": -11.2776,
        "y": -10.5155,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "GPIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO0. Physical source contact JP3.6.",
        "x": -11.2776,
        "y": -7.9755,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "GPIO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO1. Physical source contact JP3.7.",
        "x": -11.2776,
        "y": -5.4355,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP3.8.",
        "x": -11.2776,
        "y": -2.8955,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "GPIO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO3. Physical source contact JP3.9.",
        "x": -11.2776,
        "y": -0.3555,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "GPIO4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO4. Physical source contact JP3.10.",
        "x": -11.2776,
        "y": 2.1845,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "GPIO5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO5. Physical source contact JP3.11.",
        "x": -11.2776,
        "y": 4.7245,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-12",
        "number": "JP3.12",
        "label": "GPIO6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO6. Physical source contact JP3.12.",
        "x": -11.2776,
        "y": 7.2645,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-13",
        "number": "JP3.13",
        "label": "GPIO7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO7. Physical source contact JP3.13.",
        "x": -11.2776,
        "y": 9.8045,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-14",
        "number": "JP3.14",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP3.14.",
        "x": -11.2776,
        "y": 12.3445,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-15",
        "number": "JP3.15",
        "label": "RX_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX_5V. Physical source contact JP3.15.",
        "x": -11.2776,
        "y": 14.8845,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-16",
        "number": "JP3.16",
        "label": "SD_DETECT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SD_DETECT. Physical source contact JP3.16.",
        "x": -11.2776,
        "y": 17.4245,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-mt1",
        "number": "CN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.MT1.",
        "x": -7.0596,
        "y": 26.3925,
        "size": [
          1.4,
          1.9
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-mt2",
        "number": "CN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.MT2.",
        "x": 6.1404,
        "y": 27.2925,
        "size": [
          1.4,
          1.9
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-7.5096\" y=\"12.7525\" width=\"14.2\" height=\"20.47\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.1476\" y=\"-15.2125\" width=\"6.6\" height=\"6.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4318\" y=\"5.1105\" width=\"10.0\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.1244\" y=\"-25.3075\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.7176\" y=\"-25.3075\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0794\" y=\"-4.4399\" width=\"4.1\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7914\" y=\"-7.1577\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7152\" y=\"0.4623\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7882\" y=\"7.9045\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9384\" y=\"-3.7145\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.5486\" y=\"7.0265\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9902\" y=\"-10.2313\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.205\" y=\"-5.8943\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4636\" y=\"-18.6935\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.7134\" y=\"0.7855\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.0624\" y=\"0.7855\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.0256\" y=\"19.6835\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7038\" y=\"-0.7635\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2684\" y=\"-3.1769\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6242\" y=\"-17.0547\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5444\" y=\"-18.8215\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.9678\" y=\"-11.0827\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.693597\" y=\"-20.428897\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.623597\" y=\"-20.486497\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.5554\" y=\"-19.4275\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.017397\" y=\"-15.1669\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.127597\" y=\"-23.3355\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.1354\" y=\"-17.4435\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8402\" y=\"-5.8689\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7376\" y=\"10.4145\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit VS1053 Breakout.brd",
      "boardSha256": "49f74d68d81ead8c1974d0289e93fac0ad371cf34ac7cc76ff81e0017a456c67",
      "sourceBounds": [
        0,
        0,
        27.6352,
        57.709
      ],
      "selectedConnectors": [
        "CN1",
        "JP2",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "CN1.CD1 passive pass-through verified from schematic endpoints.",
        "JP3.16 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "CN1.CD1",
          "sourceNet": "SD_DETECT",
          "before": {
            "type": "unspecified",
            "label": "SD_DETECT"
          },
          "after": {
            "type": "passive",
            "label": "SD_DETECT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-VS1053-Breakout-PCB/Adafruit VS1053 Breakout.sch"
        },
        {
          "number": "JP3.16",
          "sourceNet": "SD_DETECT",
          "before": {
            "type": "unspecified",
            "label": "SD_DETECT"
          },
          "after": {
            "type": "passive",
            "label": "SD_DETECT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-VS1053-Breakout-PCB/Adafruit VS1053 Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$50",
          "x": -10.8966,
          "y": 25.0445,
          "drill": 3
        },
        {
          "sourceRef": "U$51",
          "x": 10.4394,
          "y": 25.0445,
          "drill": 3
        },
        {
          "sourceRef": "U$52",
          "x": 10.4394,
          "y": -25.3745,
          "drill": 3
        },
        {
          "sourceRef": "U$53",
          "x": -10.8966,
          "y": -25.3745,
          "drill": 3
        }
      ],
      "repo": "adafruit/Adafruit-VS1053-Breakout-PCB",
      "commit": "61db4e571d89d321c33bb693b84f80da1510c5e2",
      "boardURL": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/Adafruit%20VS1053%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/Adafruit%20VS1053%20Breakout.sch",
      "schematicSha256": "8a98feaf7a8b337daddd8111306d3fbc87c7729a226df19b7a3b8bc4d95b50c2",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-VS1053-Breakout-PCB/blob/61db4e571d89d321c33bb693b84f80da1510c5e2/license.txt",
      "sourceArchiveSha256": "9d76e00cfabb15feb50f1da269c27362431723a4d3ace9dd22f2347ea0514a45",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "CN1.CD1: unresolved electrical role on SD_DETECT.",
        "JP3.16: unresolved electrical role on SD_DETECT."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "CN1.CD1: unresolved electrical role on SD_DETECT.",
          "JP3.16: unresolved electrical role on SD_DETECT."
        ]
      }
    }
  },
  "adafruit-module-5768": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP1.1.",
        "x": 19.05,
        "y": 10.16,
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
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.2.",
        "x": 16.51,
        "y": 10.16,
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
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.3.",
        "x": 13.97,
        "y": 10.16,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.4.",
        "x": 11.43,
        "y": 10.16,
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
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.5.",
        "x": 8.89,
        "y": 10.16,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 10.16,
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
        "label": "D25",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D25. Physical source contact JP1.7.",
        "x": 3.81,
        "y": 10.16,
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
        "label": "D24",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D24. Physical source contact JP1.8.",
        "x": 1.27,
        "y": 10.16,
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
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.9.",
        "x": -1.27,
        "y": 10.16,
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
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.10.",
        "x": -3.81,
        "y": 10.16,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.11.",
        "x": -6.35,
        "y": 10.16,
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
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.12.",
        "x": -8.89,
        "y": 10.16,
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
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.13.",
        "x": -11.43,
        "y": 10.16,
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
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.14.",
        "x": -13.97,
        "y": 10.16,
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
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.15.",
        "x": -16.51,
        "y": 10.16,
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
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.16.",
        "x": -19.05,
        "y": 10.16,
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
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -15.478,
        "y": -4.174,
        "size": [
          1,
          4.6
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
        "x": -13.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.1.",
        "x": -8.89,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.2.",
        "x": -6.35,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.3.",
        "x": -3.81,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "D13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13. Physical source contact JP3.4.",
        "x": -1.27,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact JP3.5.",
        "x": 1.27,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact JP3.6.",
        "x": 3.81,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP3.7.",
        "x": 6.35,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP3.8.",
        "x": 8.89,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP3.9.",
        "x": 11.43,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP3.10.",
        "x": 13.97,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.11.",
        "x": 16.51,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-12",
        "number": "JP3.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.12.",
        "x": 19.05,
        "y": -10.2235,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": -24.0065,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -24.0065,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -19.8265,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": -19.8265,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": -19.2515,
        "y": -3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": -19.2515,
        "y": -2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": -19.2515,
        "y": -1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": -19.2515,
        "y": -1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.B7.",
        "x": -19.2515,
        "y": -0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.A6.",
        "x": -19.2515,
        "y": -0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.A7.",
        "x": -19.2515,
        "y": 0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.B6.",
        "x": -19.2515,
        "y": 0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -19.2515,
        "y": 1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -19.2515,
        "y": 1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -19.2515,
        "y": 2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -19.2515,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "USBBOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USBBOOT. Physical source contact TP3.P$1.",
        "x": -13.97,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact CONN1.2.",
        "x": 8.6075,
        "y": -4.3895,
        "size": [
          1.55,
          0.6
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
        "x": 8.6075,
        "y": -5.3895,
        "size": [
          1.55,
          0.6
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
        "x": 8.6075,
        "y": -3.3895,
        "size": [
          1.55,
          0.6
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
        "x": 8.6075,
        "y": -6.3895,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "outputs-1",
        "number": "OUTPUTS.1",
        "label": "PIXELOUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PIXELOUT. Physical source contact OUTPUTS.1.",
        "x": 21.59,
        "y": -6.35,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "outputs-2",
        "number": "OUTPUTS.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact OUTPUTS.2.",
        "x": 21.59,
        "y": -3.81,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "outputs-3",
        "number": "OUTPUTS.3",
        "label": "V+",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V+. Physical source contact OUTPUTS.3.",
        "x": 21.59,
        "y": -1.27,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "outputs-4",
        "number": "OUTPUTS.4",
        "label": "BUTTON",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BUTTON. Physical source contact OUTPUTS.4.",
        "x": 21.59,
        "y": 1.27,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "outputs-5",
        "number": "OUTPUTS.5",
        "label": "VO-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO-. Physical source contact OUTPUTS.5.",
        "x": 21.59,
        "y": 3.81,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "outputs-6",
        "number": "OUTPUTS.6",
        "label": "VO+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VO+. Physical source contact OUTPUTS.6.",
        "x": 21.59,
        "y": 6.35,
        "size": [
          2.7112,
          1.3556
        ],
        "shape": "oval",
        "connector": "OUTPUTS",
        "back": false,
        "drill": 1
      },
      {
        "id": "servo-1",
        "number": "SERVO.1",
        "label": "SERVO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SERVO. Physical source contact SERVO.1.",
        "x": 16.51,
        "y": 1.27,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "SERVO",
        "back": false,
        "drill": 1
      },
      {
        "id": "servo-2",
        "number": "SERVO.2",
        "label": "V+",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V+. Physical source contact SERVO.2.",
        "x": 16.51,
        "y": -1.27,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "SERVO",
        "back": false,
        "drill": 1
      },
      {
        "id": "servo-3",
        "number": "SERVO.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SERVO.3.",
        "x": 16.51,
        "y": -3.81,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "SERVO",
        "back": false,
        "drill": 1
      },
      {
        "id": "dplus1-tp",
        "number": "D+1.TP",
        "label": "USB_D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D+. Physical source contact D+1.TP.",
        "x": -23.9395,
        "y": 1.2065,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D+1",
        "back": true,
        "smd": true
      },
      {
        "id": "d-1-tp",
        "number": "D-1.TP",
        "label": "USB_D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D-. Physical source contact D-1.TP.",
        "x": -24.003,
        "y": -1.397,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D-1",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-nc1",
        "number": "X1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC1.",
        "x": -17.878,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-nc2",
        "number": "X1.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC2.",
        "x": -11.078,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 6.0593,
        "y": -7.6895,
        "size": [
          1.8,
          1.2
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
        "x": 6.0593,
        "y": -2.0895,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-26.6065\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.478\" y=\"-10.874\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6115\" y=\"-2.23\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.4355\" y=\"-7.8895\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.2225\" y=\"-8.477\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.625\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.975\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.984\" y=\"-5.891\" width=\"3.4\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.431\" y=\"3.684\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.172\" y=\"-0.8015\" width=\"2.5\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.159\" y=\"-5.8269\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.3281\" y=\"0.255\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.3606\" y=\"-1.0414\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6776\" y=\"-0.1524\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.054\" y=\"-6.2104\" width=\"2.075\" height=\"1.575\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.335\" y=\"-9.8995\" width=\"1.3\" height=\"2.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.5495\" y=\"5.5008\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1435\" y=\"6.539\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.198\" y=\"-8.3025\" width=\"1.1\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.32\" y=\"5.6325\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3805\" y=\"-6.3925\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.04\" y=\"0.127\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.9468\" y=\"-2.3241\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.837\" y=\"-7.8628\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.5575\" y=\"-1.3585\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.109\" y=\"-2.6135\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.408\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.408\" y=\"4.267\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"9.7155\" y=\"2.6035\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-0.889\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Feather RP2040 Prop-Maker.brd",
      "boardSha256": "d1f434c1da4d7ab0b70ecd9ee710e3150e708ab6d29b9648dee83500349ec43b",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "JP3",
        "X6",
        "TP3",
        "CONN1",
        "OUTPUTS",
        "SERVO",
        "D+1",
        "D-1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "OUTPUTS.3 supply role verified from connected power pins.",
        "SERVO.2 supply role verified from connected power pins."
      ],
      "pinOverrides": [
        {
          "number": "OUTPUTS.3",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "power_in",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC2",
              "pin": "VCC",
              "direction": "pwr"
            },
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "GAIN",
              "pin": "3",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RP2040-Prop-Maker-Feather-PCB/Adafruit Feather RP2040 Prop-Maker.sch"
        },
        {
          "number": "SERVO.2",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "power_in",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC2",
              "pin": "VCC",
              "direction": "pwr"
            },
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "GAIN",
              "pin": "3",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RP2040-Prop-Maker-Feather-PCB/Adafruit Feather RP2040 Prop-Maker.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$31",
          "x": -22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": -22.86,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB",
      "commit": "408fa9a40c0a01a3a65497ef42a29e0b08fe711e",
      "boardURL": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/Adafruit%20Feather%20RP2040%20Prop-Maker.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/Adafruit%20Feather%20RP2040%20Prop-Maker.sch",
      "schematicSha256": "b94e1e25f71b7f7b6ab203b362476060f20fc40aa0f0b3186e82d129be12d5ed",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-RP2040-Prop-Maker-Feather-PCB/blob/408fa9a40c0a01a3a65497ef42a29e0b08fe711e/license.txt",
      "sourceArchiveSha256": "5f414e74225bafd6605501f8117de98adac5f8f74e7e0dc360f0bd9359bef79e",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "OUTPUTS.3: non-rail V+ is marked pwr in the source symbol; independent role override required.",
        "SERVO.2: non-rail V+ is marked pwr in the source symbol; independent role override required."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "OUTPUTS.3: non-rail V+ is marked pwr in the source symbol; independent role override required.",
          "SERVO.2: non-rail V+ is marked pwr in the source symbol; independent role override required."
        ]
      }
    }
  }
};
