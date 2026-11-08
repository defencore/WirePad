// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-5830": {
    "contacts": [
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "STATUS",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: STATUS. Physical source contact JP3.1.",
        "x": 6.35,
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
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "!ON",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !ON. Physical source contact JP3.2.",
        "x": 3.81,
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
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "VOUT",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VOUT. Physical source contact JP3.3.",
        "x": 1.27,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.4.",
        "x": -1.27,
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
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "VIN2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: VIN2. Physical source contact JP3.5.",
        "x": -3.81,
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
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "VIN1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: VIN1. Physical source contact JP3.6.",
        "x": -6.35,
        "y": 2.54,
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
    "artwork": "<rect x=\"-2.809\" y=\"-1.685\" width=\"1.3\" height=\"2.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.295\" y=\"-0.94\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LM66200 Ideal Diode Breakout.brd",
      "boardSha256": "46bf6a6a842f51fdb3cbe87e57a614b3e8e0a7214f4a5f5e956236798d8b6918",
      "sourceBounds": [
        0,
        0,
        16.51,
        10.16
      ],
      "selectedConnectors": [
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": -5.715,
          "y": -2.54,
          "drill": 2.5
        },
        {
          "sourceRef": "U$1",
          "x": 5.715,
          "y": -2.54,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-LM66200-PCB",
      "commit": "a305a260e91be4643626c906667e9f58f7349832",
      "boardURL": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/Adafruit%20LM66200%20Ideal%20Diode%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/Adafruit%20LM66200%20Ideal%20Diode%20Breakout.sch",
      "schematicSha256": "331b4e2b4d47708d56671843d67716856f65f79f61eed8908e240391be6fb52b",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LM66200-PCB/blob/a305a260e91be4643626c906667e9f58f7349832/license.txt",
      "sourceArchiveSha256": "1209e1af01c8704d7a1f131e62312d6d37aeed6a5b8373d116dd4804038535a6",
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
  "adafruit-module-6066": {
    "contacts": [
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.1.",
        "x": -7.62,
        "y": -3.81,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP4.2.",
        "x": -7.62,
        "y": -1.27,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "DAT_3V",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DAT_3V. Physical source contact JP4.3.",
        "x": -7.62,
        "y": 1.27,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "CLK_3V",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CLK_3V. Physical source contact JP4.4.",
        "x": -7.62,
        "y": 3.81,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "CLK_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CLK_5V. Physical source contact JP1.1.",
        "x": 7.62,
        "y": 3.81,
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
        "label": "!DAT_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !DAT_5V. Physical source contact JP1.2.",
        "x": 7.62,
        "y": 1.27,
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
        "label": "DAT_5V",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DAT_5V. Physical source contact JP1.3.",
        "x": 7.62,
        "y": -1.27,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": 7.62,
        "y": -3.81,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-10.82\" y=\"-5.4\" width=\"6.3\" height=\"10.8\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.52\" y=\"-5.4\" width=\"6.3\" height=\"10.8\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.556\" y=\"-2.6565\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.275\" y=\"-4.737\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.294\" y=\"0.932\" width=\"1.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.3095\" y=\"0.4875\" width=\"1.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.962\" y=\"-4.953\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.7715\" y=\"-1.4605\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.6795\" y=\"-1.499\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.159\" y=\"-4.953\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Pixel Shifter.brd",
      "boardSha256": "05301d2a525160dce02657189ebfd72cdc971b5ea36b45c59d35608b7846082b",
      "sourceBounds": [
        0,
        0,
        25.4,
        15.24
      ],
      "selectedConnectors": [
        "JP4",
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
        },
        {
          "sourceRef": "U$6",
          "x": 0,
          "y": 5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Pixel-Shifter-PCB",
      "commit": "e8ec19ef46cda9e6cf594e6738372a66d1208d0e",
      "boardURL": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/Adafruit%20Pixel%20Shifter.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/Adafruit%20Pixel%20Shifter.sch",
      "schematicSha256": "07adb839560ed7f5575adc5c6439fc48e1a6397d26ff04917ca3fdfc4b92f4b9",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Pixel-Shifter-PCB/blob/e8ec19ef46cda9e6cf594e6738372a66d1208d0e/license.txt",
      "sourceArchiveSha256": "7d80c5cbee1c888bd9231f936b39776883fc1bb0c11117b9f5a12fe2ee05dc0a",
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
  "adafruit-module-5743": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 0.5,
        "y": -6.376,
        "size": [
          0.6,
          1.55
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
        "x": -0.5,
        "y": -6.376,
        "size": [
          0.6,
          1.55
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
        "x": 1.5,
        "y": -6.376,
        "size": [
          0.6,
          1.55
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
        "x": -1.5,
        "y": -6.376,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -6.35,
        "y": 9.525,
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
        "y": 9.525,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.3.",
        "x": -1.27,
        "y": 9.525,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.4.",
        "x": 1.27,
        "y": 9.525,
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
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP2.5.",
        "x": 3.81,
        "y": 9.525,
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
        "label": "UPDI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: UPDI. Physical source contact JP2.6.",
        "x": 6.35,
        "y": 9.525,
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
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 2.8,
        "y": -10.276,
        "size": [
          1.2,
          1.8
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
        "x": -2.8,
        "y": -10.276,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-22.97\" y=\"-9.0\" width=\"18.0\" height=\"18.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.155359\" y=\"-4.242641\" width=\"8.485281\" height=\"8.485281\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.362359\" y=\"0.964359\" width=\"8.485281\" height=\"8.485281\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.362359\" y=\"-9.449641\" width=\"8.485281\" height=\"8.485281\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.442359\" y=\"-4.242641\" width=\"8.485281\" height=\"8.485281\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.214545\" y=\"2.643455\" width=\"5.12709\" height=\"5.12709\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.627455\" y=\"2.008455\" width=\"5.12709\" height=\"5.12709\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.1\" y=\"-10.976\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.847\" y=\"-7.75\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.847\" y=\"-10.925\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-4.294\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.172\" y=\"-10.35\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.718\" y=\"-10.452\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.5175\" y=\"-5.08\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.737\" y=\"0.089\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"4.5085\" y=\"-0.9525\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"-3.2385\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Gamepad Seesaw QT rev A.brd",
      "boardSha256": "b60d024c024bfc2539ddc95bb85c5691c1889035021dc144451ac6ef2adf6b03",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "CONN3",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": -22.86,
          "y": 8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": 22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$4",
          "x": 22.86,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Mini-I2C-Gamepad-PCB",
      "commit": "f214e3c4c4cc4926375d8748b2b136e1991acdf8",
      "boardURL": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/Gamepad%20Seesaw%20QT%20rev%20A.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/Gamepad%20Seesaw%20QT%20rev%20A.sch",
      "schematicSha256": "72879b53d1849aebb4a5d656653ccd31926afe3bab5e6bc676789becb7a67152",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Mini-I2C-Gamepad-PCB/blob/f214e3c4c4cc4926375d8748b2b136e1991acdf8/license.txt",
      "sourceArchiveSha256": "bb72d6d3ac53bfff1492b9cd327b88ab7ba8c912e83551077cdc142d4ce5262b",
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
  "adafruit-module-5791": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP1.1.",
        "x": -10.033,
        "y": -2.54,
        "size": [
          2.7112,
          1.3556
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
          2.7112,
          1.3556
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
          2.7112,
          1.3556
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact X4.3.",
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP2.3.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO+. Physical source contact JP2.4.",
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
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO-. Physical source contact JP2.5.",
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
        "label": "VO+",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO+. Physical source contact X2.1.",
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
        "label": "VO-",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO-. Physical source contact X2.2.",
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
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.49\" y=\"-3.6\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.857\" y=\"-8.586\" width=\"6.0\" height=\"4.98\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.095\" y=\"-1.0\" width=\"2.16\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.087\" y=\"-6.623\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.087\" y=\"5.95\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-2.819\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-0.66\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.819\" y=\"-2.972\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.946\" y=\"2.489\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.595\" y=\"-6.782\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"3.391\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.595\" y=\"5.918\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"1.867\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-7.112\" y=\"-4.953\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.0485\" y=\"2.032\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit STEMMA Piezo Driver Amp.brd",
      "boardSha256": "62b051531a294530c537db2d9ed7913c865619f679ef31be2efe0b0a997aff71",
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
      "repo": "adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB",
      "commit": "678bf96ec53107bd831f84c2aebca380a3bd4157",
      "boardURL": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/Adafruit%20STEMMA%20Piezo%20Driver%20Amp.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/Adafruit%20STEMMA%20Piezo%20Driver%20Amp.sch",
      "schematicSha256": "eb4bbea6c221bd1130c648b93274529bcba9bd87894db7275220771184924bab",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-STEMMA-Piezo-Driver-Amp-PCB/blob/678bf96ec53107bd831f84c2aebca380a3bd4157/license.txt",
      "sourceArchiveSha256": "3aebb5df76698f76ab0c488204be6637ce030495fbe291cea54d85472e384506",
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
  "adafruit-module-6365": {
    "contacts": [
      {
        "id": "rpi1-1",
        "number": "RPI1.1",
        "label": "3V3 HOST",
        "type": "passive",
        "description": "Un-routed host 3.3 V header contact. Manufacturer package maps pads 1 and 1-prime to the same physical header terminal; this board uses its separate local regulator. Physical source contact RPI1.1.",
        "x": 0.9906,
        "y": -2.357163,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-2",
        "number": "RPI1.2",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.2.",
        "x": 0.9906,
        "y": -4.897162,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-3",
        "number": "RPI1.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact RPI1.3.",
        "x": 3.5306,
        "y": -2.357163,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-4",
        "number": "RPI1.4",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.4.",
        "x": 3.5306,
        "y": -4.897162,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-5",
        "number": "RPI1.5",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact RPI1.5.",
        "x": 6.0706,
        "y": -2.357163,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-6",
        "number": "RPI1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.6.",
        "x": 6.0706,
        "y": -4.897162,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 1
      },
      {
        "id": "rpi1-2-",
        "number": "RPI1.2'",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.2'.",
        "x": 0.9906,
        "y": -6.421163,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi1-4-",
        "number": "RPI1.4'",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.4'.",
        "x": 3.5306,
        "y": -6.421163,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi1-6-",
        "number": "RPI1.6'",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.6'.",
        "x": 6.0706,
        "y": -6.421163,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi1-1-",
        "number": "RPI1.1'",
        "label": "3V3 HOST",
        "type": "passive",
        "description": "Un-routed host 3.3 V header contact. Manufacturer package maps pads 1 and 1-prime to the same physical header terminal; this board uses its separate local regulator. Physical source contact RPI1.1'.",
        "x": 0.9906,
        "y": -0.833162,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi1-3-",
        "number": "RPI1.3'",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact RPI1.3'.",
        "x": 3.5306,
        "y": -0.833162,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi1-5-",
        "number": "RPI1.5'",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact RPI1.5'.",
        "x": 6.0706,
        "y": -0.833162,
        "size": [
          1.27,
          2.032
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN3.2.",
        "x": 3.183,
        "y": 2.571038,
        "size": [
          0.6,
          1.55
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 4.183,
        "y": 2.571038,
        "size": [
          0.6,
          1.55
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
        "x": 2.183,
        "y": 2.571038,
        "size": [
          0.6,
          1.55
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 5.183,
        "y": 2.571038,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 0.883,
        "y": 6.471038,
        "size": [
          1.2,
          1.8
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
        "x": 6.483,
        "y": 6.471038,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"0.683\" y=\"2.871038\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.178\" y=\"2.423038\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.984\" y=\"1.099638\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.197\" y=\"6.463038\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.286\" y=\"-0.273962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.715\" y=\"4.298038\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"6.317038\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.715\" y=\"4.196038\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Pi Stemma QT Breakout.brd",
      "boardSha256": "9729d407af67b4aaadcb36e9092f9def3a25e561ec682eef7d49b384f79897f9",
      "sourceBounds": [
        0,
        0,
        14.732,
        15.250075
      ],
      "selectedConnectors": [
        "RPI1",
        "CONN3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$4",
          "x": -3.8862,
          "y": -3.627162,
          "drill": 3
        }
      ],
      "repo": "adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB",
      "commit": "58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c",
      "boardURL": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/Adafruit%20Pi%20Stemma%20QT%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/Adafruit%20Pi%20Stemma%20QT%20Breakout.sch",
      "schematicSha256": "3b7ae9bac7c11646376a83142eaaaed797b2c4f0bff6197ad156cac13e99857c",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Pi-Stemma-QT-Breakout-PCB/blob/58188b7bb82e7a350ddfcdb5ebd9e4ec83bcc90c/license.txt",
      "sourceArchiveSha256": "c34a7cfa93a5c14417f112b733d6776d3d017b2283dbb6aba16f5b460a197adc",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "verifiedPackageInternalConnection": {
        "sourceRef": "RPI1",
        "sourcePin": "3.3V",
        "pads": [
          "1",
          "1'"
        ],
        "evidence": "Matching manufacturer deviceset RASPBERRYPI_2X3 maps this source pin to both carrier lands."
      },
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
  "adafruit-module-5613": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.1.",
        "x": 10.16,
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
        "label": "LITE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LITE. Physical source contact JP2.2.",
        "x": 7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.3.",
        "x": 5.08,
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
        "label": "SCK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCK. Physical source contact JP2.4.",
        "x": 2.54,
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
        "label": "MOSI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MOSI. Physical source contact JP2.5.",
        "x": 0,
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
        "label": "MISO",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: MISO. Physical source contact JP2.6.",
        "x": -2.54,
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
        "label": "TFTDC",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TFTDC. Physical source contact JP2.7.",
        "x": -5.08,
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
        "label": "TFTRST",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TFTRST. Physical source contact JP2.8.",
        "x": -7.62,
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
        "label": "TFTCS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TFTCS. Physical source contact JP2.9.",
        "x": -10.16,
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
        "label": "CARDCS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CARDCS. Physical source contact JP1.1.",
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
        "label": "MEM_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MEM_CS. Physical source contact JP1.2.",
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
        "label": "TSCS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TSCS. Physical source contact JP1.3.",
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
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
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
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP1.6.",
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
        "label": "BUSY",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: BUSY. Physical source contact JP1.7.",
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
        "label": "GPIO1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO1. Physical source contact JP1.8.",
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
        "label": "GPIO2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO2. Physical source contact JP1.9.",
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
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X1.1.",
        "x": 4.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "LITE",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: LITE. Physical source contact X1.2.",
        "x": 3.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.3.",
        "x": 3.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact X1.4.",
        "x": 2.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact X1.5.",
        "x": 2.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact X1.6.",
        "x": 1.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "TFTDC",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TFTDC. Physical source contact X1.7.",
        "x": 1.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "TFTRST",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TFTRST. Physical source contact X1.8.",
        "x": 0.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9",
        "number": "X1.9",
        "label": "TFTCS",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TFTCS. Physical source contact X1.9.",
        "x": 0.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-10",
        "number": "X1.10",
        "label": "CARDCS",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CARDCS. Physical source contact X1.10.",
        "x": -0.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-11",
        "number": "X1.11",
        "label": "MEM_CS",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MEM_CS. Physical source contact X1.11.",
        "x": -0.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-12",
        "number": "X1.12",
        "label": "TSCS",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TSCS. Physical source contact X1.12.",
        "x": -1.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-13",
        "number": "X1.13",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X1.13.",
        "x": -1.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-14",
        "number": "X1.14",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X1.14.",
        "x": -2.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-15",
        "number": "X1.15",
        "label": "INT",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: INT. Physical source contact X1.15.",
        "x": -2.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-16",
        "number": "X1.16",
        "label": "BUSY",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: BUSY. Physical source contact X1.16.",
        "x": -3.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-17",
        "number": "X1.17",
        "label": "GPIO1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO1. Physical source contact X1.17.",
        "x": -3.75,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-18",
        "number": "X1.18",
        "label": "GPIO2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO2. Physical source contact X1.18.",
        "x": -4.25,
        "y": -2.678,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-support1",
        "number": "X1.SUPPORT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.SUPPORT1.",
        "x": -5.8,
        "y": -0.372,
        "size": [
          1.8,
          3.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-support2",
        "number": "X1.SUPPORT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.SUPPORT2.",
        "x": 5.8,
        "y": -0.372,
        "size": [
          1.8,
          3.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.9\" y=\"-2.322\" width=\"13.8\" height=\"4.6\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit EYESPI Breakout Board.brd",
      "boardSha256": "980a07b3e4ffe77d07f7cedaf70c3356e2b34062b28a7dd54c361a6482c1c47d",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP2",
        "JP1",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP2.2",
          "sourceNet": "LITE",
          "before": {
            "type": "unspecified",
            "label": "LITE"
          },
          "after": {
            "type": "passive",
            "label": "LITE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.7",
          "sourceNet": "TFTDC",
          "before": {
            "type": "unspecified",
            "label": "TFTDC"
          },
          "after": {
            "type": "passive",
            "label": "TFTDC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.8",
          "sourceNet": "TFTRST",
          "before": {
            "type": "unspecified",
            "label": "TFTRST"
          },
          "after": {
            "type": "passive",
            "label": "TFTRST"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP2.9",
          "sourceNet": "TFTCS",
          "before": {
            "type": "unspecified",
            "label": "TFTCS"
          },
          "after": {
            "type": "passive",
            "label": "TFTCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.1",
          "sourceNet": "CARDCS",
          "before": {
            "type": "unspecified",
            "label": "CARDCS"
          },
          "after": {
            "type": "passive",
            "label": "CARDCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "MEM_CS",
          "before": {
            "type": "unspecified",
            "label": "MEM_CS"
          },
          "after": {
            "type": "passive",
            "label": "MEM_CS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "TSCS",
          "before": {
            "type": "unspecified",
            "label": "TSCS"
          },
          "after": {
            "type": "passive",
            "label": "TSCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "BUSY",
          "before": {
            "type": "unspecified",
            "label": "BUSY"
          },
          "after": {
            "type": "passive",
            "label": "BUSY"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.8",
          "sourceNet": "GPIO1",
          "before": {
            "type": "unspecified",
            "label": "GPIO1"
          },
          "after": {
            "type": "passive",
            "label": "GPIO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "JP1.9",
          "sourceNet": "GPIO2",
          "before": {
            "type": "unspecified",
            "label": "GPIO2"
          },
          "after": {
            "type": "passive",
            "label": "GPIO2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.2",
          "sourceNet": "LITE",
          "before": {
            "type": "unspecified",
            "label": "LITE"
          },
          "after": {
            "type": "passive",
            "label": "LITE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.7",
          "sourceNet": "TFTDC",
          "before": {
            "type": "unspecified",
            "label": "TFTDC"
          },
          "after": {
            "type": "passive",
            "label": "TFTDC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.8",
          "sourceNet": "TFTRST",
          "before": {
            "type": "unspecified",
            "label": "TFTRST"
          },
          "after": {
            "type": "passive",
            "label": "TFTRST"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.9",
          "sourceNet": "TFTCS",
          "before": {
            "type": "unspecified",
            "label": "TFTCS"
          },
          "after": {
            "type": "passive",
            "label": "TFTCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.10",
          "sourceNet": "CARDCS",
          "before": {
            "type": "unspecified",
            "label": "CARDCS"
          },
          "after": {
            "type": "passive",
            "label": "CARDCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.11",
          "sourceNet": "MEM_CS",
          "before": {
            "type": "unspecified",
            "label": "MEM_CS"
          },
          "after": {
            "type": "passive",
            "label": "MEM_CS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.12",
          "sourceNet": "TSCS",
          "before": {
            "type": "unspecified",
            "label": "TSCS"
          },
          "after": {
            "type": "passive",
            "label": "TSCS"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.16",
          "sourceNet": "BUSY",
          "before": {
            "type": "unspecified",
            "label": "BUSY"
          },
          "after": {
            "type": "passive",
            "label": "BUSY"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.17",
          "sourceNet": "GPIO1",
          "before": {
            "type": "unspecified",
            "label": "GPIO1"
          },
          "after": {
            "type": "passive",
            "label": "GPIO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        },
        {
          "number": "X1.18",
          "sourceNet": "GPIO2",
          "before": {
            "type": "unspecified",
            "label": "GPIO2"
          },
          "after": {
            "type": "passive",
            "label": "GPIO2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-PCB/Adafruit EYESPI Breakout Board.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$9",
          "x": -10.16,
          "y": 0,
          "drill": 2.5
        },
        {
          "sourceRef": "U$10",
          "x": 10.16,
          "y": 0,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-EYESPI-PCB",
      "commit": "bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b",
      "boardURL": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/Adafruit%20EYESPI%20Breakout%20Board.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/Adafruit%20EYESPI%20Breakout%20Board.sch",
      "schematicSha256": "51649ecb7216c5a9a87b9ec5054ec75583afb24be768326b0277e0aba29bd7a9",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-EYESPI-PCB/blob/bc5fa13b55c25feb3bf47e483b4d0bc770fbf20b/license.txt",
      "sourceArchiveSha256": "d8af0393c03d9f7a96ab5dc5e3560433a09dc28a7620103ab4adb182ab76afad",
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
          "JP2.2: unresolved electrical role on LITE.",
          "JP2.4: unresolved electrical role on SCK.",
          "JP2.5: unresolved electrical role on MOSI.",
          "JP2.6: unresolved electrical role on MISO.",
          "JP2.7: unresolved electrical role on TFTDC.",
          "JP2.8: unresolved electrical role on TFTRST.",
          "JP2.9: unresolved electrical role on TFTCS.",
          "JP1.1: unresolved electrical role on CARDCS.",
          "JP1.2: unresolved electrical role on MEM_CS.",
          "JP1.3: unresolved electrical role on TSCS.",
          "JP1.4: unresolved electrical role on SCL.",
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on INT.",
          "JP1.7: unresolved electrical role on BUSY.",
          "JP1.8: unresolved electrical role on GPIO1.",
          "JP1.9: unresolved electrical role on GPIO2.",
          "X1.2: unresolved electrical role on LITE.",
          "X1.4: unresolved electrical role on SCK.",
          "X1.5: unresolved electrical role on MOSI.",
          "X1.6: unresolved electrical role on MISO.",
          "X1.7: unresolved electrical role on TFTDC.",
          "X1.8: unresolved electrical role on TFTRST.",
          "X1.9: unresolved electrical role on TFTCS.",
          "X1.10: unresolved electrical role on CARDCS.",
          "X1.11: unresolved electrical role on MEM_CS.",
          "X1.12: unresolved electrical role on TSCS.",
          "X1.13: unresolved electrical role on SCL.",
          "X1.14: unresolved electrical role on SDA.",
          "X1.15: unresolved electrical role on INT.",
          "X1.16: unresolved electrical role on BUSY.",
          "X1.17: unresolved electrical role on GPIO1.",
          "X1.18: unresolved electrical role on GPIO2."
        ]
      }
    }
  },
  "adafruit-module-4570": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -3.81,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "RW",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RW. Physical source contact JP1.2.",
        "x": -1.27,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RH",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RH. Physical source contact JP1.3.",
        "x": 1.27,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.4.",
        "x": 3.81,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -6.35,
        "y": 6.35,
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
        "y": 6.35,
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
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.3.",
        "x": -1.27,
        "y": 6.35,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.4.",
        "x": 1.27,
        "y": 6.35,
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
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP2.5.",
        "x": 3.81,
        "y": 6.35,
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
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact JP2.6.",
        "x": 6.35,
        "y": 6.35,
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
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN1.2.",
        "x": 7.646,
        "y": 0.5,
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
        "x": 7.646,
        "y": -0.5,
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
        "x": 7.646,
        "y": 1.5,
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 7.646,
        "y": -1.5,
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
        "id": "conn2-2",
        "number": "CONN2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN2.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-3",
        "number": "CONN2.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN2.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-1",
        "number": "CONN2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-4",
        "number": "CONN2.4",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN2.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.553\" y=\"-2.154\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-0.865\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.096\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.969\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.819\" y=\"2.489\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.452\" y=\"-4.75\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.794\" y=\"-0.6858\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.3086\" y=\"-0.6858\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "DS1841 rev A.brd",
      "boardSha256": "9b2da042da6ec18fccf489b9b19265b2207a46bdef36b72091cd63b751bf0ea4",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "CONN1",
        "CONN2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$2",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$6",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$7",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-DS1841-PCB",
      "commit": "5d475eace8eedf69f1152edd5dc347744d76609f",
      "boardURL": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/DS1841%20rev%20A.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/DS1841%20rev%20A.sch",
      "schematicSha256": "49ef1b7b79744a997e02e17064ede9eb0bc98f589a414e4ee3877727cf58e070",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-DS1841-PCB/blob/5d475eace8eedf69f1152edd5dc347744d76609f/license.txt",
      "sourceArchiveSha256": "86d9eb2a92112b543c9c6750d833fdba4e9f2402d660c5890b5ef179ea8a2ec8",
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
  "adafruit-module-6495": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.1.",
        "x": 16.51,
        "y": 7.62,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.2.",
        "x": 16.51,
        "y": 5.08,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.3.",
        "x": 16.51,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.4.",
        "x": 16.51,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.5.",
        "x": 16.51,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": 16.51,
        "y": -5.08,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "+5V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +5V. Physical source contact JP1.7.",
        "x": 16.51,
        "y": -7.62,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP2.1.",
        "x": -16.51,
        "y": -7.62,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP2.2.",
        "x": -16.51,
        "y": -5.08,
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
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP2.3.",
        "x": -16.51,
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP2.4.",
        "x": -16.51,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.5.",
        "x": -16.51,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.6.",
        "x": -16.51,
        "y": 5.08,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP2.7.",
        "x": -16.51,
        "y": 7.62,
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
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": -0.5,
        "y": 5.233,
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
        "x": 0.5,
        "y": 5.233,
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
        "x": -1.5,
        "y": 5.233,
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
        "x": 1.5,
        "y": 5.233,
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
        "id": "x2-1",
        "number": "X2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.1.",
        "x": -1,
        "y": -3.031,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X2.2.",
        "x": 1,
        "y": -3.031,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact X1.1.",
        "x": -6.477,
        "y": -7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1b",
        "number": "X1.1B",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact X1.1B.",
        "x": -11.303,
        "y": -7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact X1.2.",
        "x": -6.477,
        "y": -5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2b",
        "number": "X1.2B",
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact X1.2B.",
        "x": -11.303,
        "y": -5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3b",
        "number": "X1.3B",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact X1.3B.",
        "x": -11.049,
        "y": -2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact X1.3.",
        "x": -6.731,
        "y": -2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4b",
        "number": "X1.4B",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact X1.4B.",
        "x": -11.049,
        "y": 0,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact X1.4.",
        "x": -6.731,
        "y": 0,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5b",
        "number": "X1.5B",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X1.5B.",
        "x": -11.049,
        "y": 2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X1.5.",
        "x": -6.731,
        "y": 2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6b",
        "number": "X1.6B",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X1.6B.",
        "x": -11.303,
        "y": 5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X1.6.",
        "x": -6.477,
        "y": 5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7b",
        "number": "X1.7B",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact X1.7B.",
        "x": -11.303,
        "y": 7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact X1.7.",
        "x": -6.477,
        "y": 7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-14b",
        "number": "X1.14B",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X1.14B.",
        "x": 11.303,
        "y": -7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-14",
        "number": "X1.14",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X1.14.",
        "x": 6.477,
        "y": -7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-13b",
        "number": "X1.13B",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.13B.",
        "x": 11.303,
        "y": -5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-13",
        "number": "X1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.13.",
        "x": 6.477,
        "y": -5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-12",
        "number": "X1.12",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X1.12.",
        "x": 6.731,
        "y": -2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-12b",
        "number": "X1.12B",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X1.12B.",
        "x": 11.049,
        "y": -2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-11",
        "number": "X1.11",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact X1.11.",
        "x": 6.731,
        "y": 0,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-11b",
        "number": "X1.11B",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact X1.11B.",
        "x": 11.049,
        "y": 0,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-10",
        "number": "X1.10",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact X1.10.",
        "x": 6.731,
        "y": 2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-10b",
        "number": "X1.10B",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact X1.10B.",
        "x": 11.049,
        "y": 2.54,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9",
        "number": "X1.9",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact X1.9.",
        "x": 6.477,
        "y": 5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9b",
        "number": "X1.9B",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact X1.9B.",
        "x": 11.303,
        "y": 5.08,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact X1.8.",
        "x": 6.477,
        "y": 7.62,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8b",
        "number": "X1.8B",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact X1.8B.",
        "x": 11.303,
        "y": 7.62,
        "size": [
          2.54,
          1.524
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
        "x": -2.8,
        "y": 9.133,
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
        "x": 2.8,
        "y": 9.133,
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
        "id": "x2-nc1",
        "number": "X2.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.NC1.",
        "x": -3.4,
        "y": -8.231,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-nc2",
        "number": "X2.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.NC2.",
        "x": 3.4,
        "y": -8.231,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.954\" y=\"-10.3505\" width=\"25.908\" height=\"20.701\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.41\" y=\"-9.14\" width=\"6.3\" height=\"18.28\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.71\" y=\"-9.14\" width=\"6.3\" height=\"18.28\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.0\" y=\"-9.731\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0\" y=\"5.533\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1135\" y=\"-0.507\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.7945\" y=\"-1.35\" width=\"1.65\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.344\" y=\"-9.925\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.817\" y=\"-10.052\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.667\" y=\"2.7055\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.8985\" y=\"-0.635\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.032\" y=\"-0.508\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.191\" y=\"-0.508\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Terminal Block BFF.brd",
      "boardSha256": "55f77c300ddcc0ad81f95a9c4cae483383d4f54df6b168b61071ea9bab2a09aa",
      "sourceBounds": [
        -21.59,
        -15.24,
        21.59,
        15.24
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "CONN1",
        "X2",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP1.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "JP2.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "CONN1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "CONN1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.1B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.2B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.3B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.4B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.5B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.6B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.7B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.11B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.10",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.10B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.9",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.9B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.8",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        },
        {
          "number": "X1.8B",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Terminal-Block-BFF-PCB/Adafruit Terminal Block BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -16.51,
          "y": -12.7,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": 16.51,
          "y": 12.7,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": -16.51,
          "y": 12.7,
          "drill": 2.5
        },
        {
          "sourceRef": "U$4",
          "x": 16.51,
          "y": -12.7,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Terminal-Block-BFF-PCB",
      "commit": "6e2c47d43d37a4911910750956fb27c9459b2a57",
      "boardURL": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/Adafruit%20Terminal%20Block%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/Adafruit%20Terminal%20Block%20BFF.sch",
      "schematicSha256": "c8a604dd5dde4cd64418c0e667b33b1a2ea9849c85062c47f7bc7271c0517278",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Terminal-Block-BFF-PCB/blob/6e2c47d43d37a4911910750956fb27c9459b2a57/license.txt",
      "sourceArchiveSha256": "43bf4bb6152e30ad35f425dc83a216377f2b8d66bc82bd2a3a9ee99c05da1c50",
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
          "JP1.1: unresolved electrical role on RX.",
          "JP1.2: unresolved electrical role on SCK.",
          "JP1.3: unresolved electrical role on MISO.",
          "JP1.4: unresolved electrical role on MOSI.",
          "JP2.1: unresolved electrical role on A0.",
          "JP2.2: unresolved electrical role on A1.",
          "JP2.3: unresolved electrical role on A2.",
          "JP2.4: unresolved electrical role on A3.",
          "JP2.5: unresolved electrical role on SDA.",
          "JP2.6: unresolved electrical role on SCL.",
          "JP2.7: unresolved electrical role on TX.",
          "CONN1.3: unresolved electrical role on SDA.",
          "CONN1.4: unresolved electrical role on SCL.",
          "X1.1: unresolved electrical role on A0.",
          "X1.1B: unresolved electrical role on A0.",
          "X1.2: unresolved electrical role on A1.",
          "X1.2B: unresolved electrical role on A1.",
          "X1.3B: unresolved electrical role on A2.",
          "X1.3: unresolved electrical role on A2.",
          "X1.4B: unresolved electrical role on A3.",
          "X1.4: unresolved electrical role on A3.",
          "X1.5B: unresolved electrical role on SDA.",
          "X1.5: unresolved electrical role on SDA.",
          "X1.6B: unresolved electrical role on SCL.",
          "X1.6: unresolved electrical role on SCL.",
          "X1.7B: unresolved electrical role on TX.",
          "X1.7: unresolved electrical role on TX.",
          "X1.11: unresolved electrical role on MOSI.",
          "X1.11B: unresolved electrical role on MOSI.",
          "X1.10: unresolved electrical role on MISO.",
          "X1.10B: unresolved electrical role on MISO.",
          "X1.9: unresolved electrical role on SCK.",
          "X1.9B: unresolved electrical role on SCK.",
          "X1.8: unresolved electrical role on RX.",
          "X1.8B: unresolved electrical role on RX."
        ]
      }
    }
  },
  "adafruit-module-5964": {
    "contacts": [
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
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
        "id": "x1-1",
        "number": "X1.1",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact X1.1.",
        "x": 3.125,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.2.",
        "x": 1.875,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X1.3.",
        "x": 0.625,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X1.4.",
        "x": -0.625,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.5.",
        "x": -1.875,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.6.",
        "x": -3.125,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.7.",
        "x": 4.975,
        "y": -7.0393,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.8.",
        "x": -4.975,
        "y": -7.0393,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "X1",
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
    "artwork": "<rect x=\"-5.4864\" y=\"-8.2804\" width=\"10.9728\" height=\"5.1054\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.226\" y=\"-2.408\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.81\" y=\"0.963\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.69\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.801\" y=\"2.286\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.064\" y=\"-0.914\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.769\" y=\"2.286\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.991\" y=\"-1.27\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.826\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.946\" y=\"-1.27\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.271\" y=\"-4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SEN5x Adapter Breakout.brd",
      "boardSha256": "a28e6cb575e3af8edf548efc8077f0284966667496bd03e8acb7c3a7d10b2464",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP1",
        "X1"
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
      "repo": "adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB",
      "commit": "fcedf60e56ee80e49331ec1621d4c64182aa6177",
      "boardURL": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/Adafruit%20SEN5x%20Adapter%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/Adafruit%20SEN5x%20Adapter%20Breakout.sch",
      "schematicSha256": "5a38a74da2c70c6c40b6de1cdf91c938dfd978141d8c1ce96dc47fd9ca08070c",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SEN5x-Adapter-Breakout-PCB/blob/fcedf60e56ee80e49331ec1621d4c64182aa6177/license.txt",
      "sourceArchiveSha256": "00e9543d5da05380d035fc57db6945401a98bc814322d6122c4477225440cc1a",
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
  "adafruit-module-6331": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact X1.1.",
        "x": 3.125,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.2.",
        "x": 1.875,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "SDA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_3V. I2C serial data / source-listed alternate function. Physical source contact X1.3.",
        "x": 0.625,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "SCL_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_3V. I2C serial clock / source-listed alternate function. Physical source contact X1.4.",
        "x": -0.625,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.5.",
        "x": -1.875,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact X1.6.",
        "x": -3.125,
        "y": -3.8393,
        "size": [
          0.6096,
          1.7018
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.7.",
        "x": 4.975,
        "y": -7.0393,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.8.",
        "x": -4.975,
        "y": -7.0393,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN1.2.",
        "x": 7.519,
        "y": 0.5,
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
        "x": 7.519,
        "y": -0.5,
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
        "x": 7.519,
        "y": 1.5,
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
        "x": 7.519,
        "y": -1.5,
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
        "id": "conn2-2",
        "number": "CONN2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN2.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-3",
        "number": "CONN2.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN2.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-1",
        "number": "CONN2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-4",
        "number": "CONN2.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN2.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
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
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 11.419,
        "y": 2.8,
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
        "x": 11.419,
        "y": -2.8,
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
        "id": "conn2-mt1",
        "number": "CONN2.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-mt2",
        "number": "CONN2.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.4864\" y=\"-8.2804\" width=\"10.9728\" height=\"5.1054\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.783\" y=\"-2.162\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.936\" y=\"1.109\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.677\" y=\"1.821\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.867\" y=\"2.032\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.54\" y=\"-1.676\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.766\" y=\"-1.88\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.058\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.969\" y=\"-4.953\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SEN6x Breakout.brd",
      "boardSha256": "875448b578c99ee1a9db721c6441c7109ca120475d3d68e2772cb817b2707210",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "X1",
        "CONN1",
        "CONN2",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$35",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$36",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$38",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$39",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SEN6x-Breakout-PCB",
      "commit": "7caff419c5f32d5bf41f8e42641b9c158a1db04e",
      "boardURL": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/Adafruit%20SEN6x%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/Adafruit%20SEN6x%20Breakout.sch",
      "schematicSha256": "47ceabb445b41725549b9f4dbe283f59fe97f793eac56e376ee703ce7050c39f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SEN6x-Breakout-PCB/blob/7caff419c5f32d5bf41f8e42641b9c158a1db04e/license.txt",
      "sourceArchiveSha256": "31bb3180267e3d418c918fbbf3d9fd42bc5e7127dd3e7d2531e5fb47f6d94940",
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
  "adafruit-module-5973": {
    "contacts": [
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": 4.32,
        "y": -11.243,
        "size": [
          1,
          2
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
        "x": -4.32,
        "y": -11.243,
        "size": [
          1,
          2
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
        "x": -4.32,
        "y": -7.063,
        "size": [
          1,
          2
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
        "x": 4.32,
        "y": -7.063,
        "size": [
          1,
          2
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
        "x": 3.2,
        "y": -6.488,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X6.A4B9.",
        "x": 2.4,
        "y": -6.488,
        "size": [
          0.575,
          1.15
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
        "x": 1.75,
        "y": -6.488,
        "size": [
          0.275,
          1.15
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
        "x": 1.25,
        "y": -6.488,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.B7.",
        "x": 0.75,
        "y": -6.488,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.A6.",
        "x": 0.25,
        "y": -6.488,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.A7.",
        "x": -0.25,
        "y": -6.488,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.B6.",
        "x": -0.75,
        "y": -6.488,
        "size": [
          0.275,
          1.15
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
        "x": -1.25,
        "y": -6.488,
        "size": [
          0.275,
          1.15
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
        "x": -1.75,
        "y": -6.488,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X6.B4A9.",
        "x": -2.4,
        "y": -6.488,
        "size": [
          0.575,
          1.15
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
        "x": -3.2,
        "y": -6.488,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.3.",
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "!RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST. Physical source contact JP1.4.",
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
        "id": "x1-2",
        "number": "X1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact X1.2.",
        "x": 5.106,
        "y": 4.699,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.3.",
        "x": 5.106,
        "y": 3.699,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact X1.1.",
        "x": 5.106,
        "y": 5.699,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "GP0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GP0. Physical source contact TP1.P$1.",
        "x": -8.89,
        "y": -6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "GP1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GP1. Physical source contact TP2.P$1.",
        "x": -8.89,
        "y": -3.81,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "GP2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GP2. Physical source contact TP3.P$1.",
        "x": -8.89,
        "y": -1.27,
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
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "GP3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GP3. Physical source contact TP4.P$1.",
        "x": -8.89,
        "y": 1.27,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "dplus-tp",
        "number": "D+.TP",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact D+.TP.",
        "x": -1.27,
        "y": -11.43,
        "size": [
          1.7,
          1.7
        ],
        "shape": "rect",
        "connector": "D+",
        "back": true,
        "smd": true
      },
      {
        "id": "d--tp",
        "number": "D-.TP",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact D-.TP.",
        "x": 1.27,
        "y": -11.43,
        "size": [
          1.7,
          1.7
        ],
        "shape": "rect",
        "connector": "D-",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-mt1",
        "number": "X1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.MT1.",
        "x": 9.006,
        "y": 6.999,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-mt2",
        "number": "X1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.MT2.",
        "x": 9.006,
        "y": 2.399,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-13.843\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5748\" y=\"-5.588\" width=\"3.9116\" height=\"10.16\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.431\" y=\"-1.176\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.406\" y=\"2.099\" width=\"4.3\" height=\"5.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.631\" y=\"-5.972\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.43\" y=\"-3.829\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.43\" y=\"-6.369\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.849\" y=\"-0.508\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.667\" y=\"4.801\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.283\" y=\"-6.96\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.791\" y=\"-3.785\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.486\" y=\"0.838\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.486\" y=\"-1.448\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"-3.785\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.93\" y=\"5.169\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.087\" y=\"-7.29\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"5.588\" y=\"-3.302\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit CH9328 UART to HID Keyboard Breakout.brd",
      "boardSha256": "fe2c63dac691fff3230331ed86234a72ee9127b487d374415230534e6d6f2bf7",
      "sourceBounds": [
        0,
        0,
        20.32,
        25.4
      ],
      "selectedConnectors": [
        "X6",
        "JP1",
        "X1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "D+",
        "D-"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$7",
          "x": -7.62,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$6",
          "x": 7.62,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": 7.62,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": -7.62,
          "y": -10.16,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-CH9328-Breakout-PCB",
      "commit": "8dccab1fd771ca7ed068b74442a3e8785da59d03",
      "boardURL": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/Adafruit%20CH9328%20UART%20to%20HID%20Keyboard%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/Adafruit%20CH9328%20UART%20to%20HID%20Keyboard%20Breakout.sch",
      "schematicSha256": "20acea29024c1a62cef94ddd883f13ffd315157841b54762ca0414a1682638f8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-CH9328-Breakout-PCB/blob/8dccab1fd771ca7ed068b74442a3e8785da59d03/license.txt",
      "sourceArchiveSha256": "3323cf2f31eea8e2af64ec1477801dbf30324ca82a98d238789c415588c845c3",
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
  "adafruit-module-5772": {
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A3. Physical source contact JP1.4.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX. Physical source contact JP1.7.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A3. Physical source contact JP1.4C.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
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
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX. Physical source contact JP1.7C.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX. Physical source contact JP3.1.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX. Physical source contact JP3.1C.",
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP2.1.",
        "x": -2.54,
        "y": 2.6035,
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
        "label": "TS_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TS_CS. Physical source contact JP4.1.",
        "x": 0.889,
        "y": -1.9685,
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
        "label": "MEM_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: MEM_CS. Physical source contact JP5.1.",
        "x": 0.889,
        "y": 0.0635,
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
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "SD_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SD_CS. Physical source contact JP6.1.",
        "x": 0.889,
        "y": 2.4765,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "TFT_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TFT_CS. Physical source contact JP7.1.",
        "x": 1.143,
        "y": 7.6835,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "TFT_DC",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: TFT_DC. Physical source contact JP8.1.",
        "x": -1.016,
        "y": 7.6835,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "LITE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LITE. Physical source contact JP9.1.",
        "x": -2.54,
        "y": 5.08,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP9",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "jp10-1",
        "number": "JP10.1",
        "label": "!RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: !RESET. Physical source contact JP10.1.",
        "x": 0.889,
        "y": 5.0165,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP10",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X1.1.",
        "x": -4.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "LITE",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: LITE. Physical source contact X1.2.",
        "x": -3.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.3.",
        "x": -3.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact X1.4.",
        "x": -2.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact X1.5.",
        "x": -2.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact X1.6.",
        "x": -1.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "TFT_DC",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TFT_DC. Physical source contact X1.7.",
        "x": -1.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: !RESET. Physical source contact X1.8.",
        "x": -0.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9",
        "number": "X1.9",
        "label": "TFT_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TFT_CS. Physical source contact X1.9.",
        "x": -0.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-10",
        "number": "X1.10",
        "label": "SD_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SD_CS. Physical source contact X1.10.",
        "x": 0.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-11",
        "number": "X1.11",
        "label": "MEM_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: MEM_CS. Physical source contact X1.11.",
        "x": 0.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-12",
        "number": "X1.12",
        "label": "TS_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TS_CS. Physical source contact X1.12.",
        "x": 1.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-13",
        "number": "X1.13",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X1.13.",
        "x": 1.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-14",
        "number": "X1.14",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X1.14.",
        "x": 2.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-15",
        "number": "X1.15",
        "label": "INT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: INT. Physical source contact X1.15.",
        "x": 2.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-16",
        "number": "X1.16",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.16.",
        "x": 3.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-17",
        "number": "X1.17",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.17.",
        "x": 3.75,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-18",
        "number": "X1.18",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.18.",
        "x": 4.25,
        "y": -4.8785,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-support1",
        "number": "X1.SUPPORT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.SUPPORT1.",
        "x": 5.15,
        "y": -7.6825,
        "size": [
          1.5,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-support2",
        "number": "X1.SUPPORT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.SUPPORT2.",
        "x": -5.15,
        "y": -7.6825,
        "size": [
          1.5,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.7\" y=\"-8.3105\" width=\"11.4\" height=\"3.33\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"1.4605\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"6.2865\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"-3.1115\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"-0.8255\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"6.4135\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.683\" y=\"-1.778\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit EYESPI BFF PCB.brd",
      "boardSha256": "8678eae8d4edcd19f3d2c076bb88b7f327d50c1df7fd43e22a341636d5e1080a",
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
        "JP6",
        "JP7",
        "JP8",
        "JP9",
        "JP10",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "JP9.1",
          "sourceNet": "LITE",
          "before": {
            "type": "unspecified",
            "label": "LITE"
          },
          "after": {
            "type": "passive",
            "label": "LITE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "JP10.1",
          "sourceNet": "!RESET",
          "before": {
            "type": "unspecified",
            "label": "!RESET"
          },
          "after": {
            "type": "passive",
            "label": "!RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.2",
          "sourceNet": "LITE",
          "before": {
            "type": "unspecified",
            "label": "LITE"
          },
          "after": {
            "type": "passive",
            "label": "LITE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.8",
          "sourceNet": "!RESET",
          "before": {
            "type": "unspecified",
            "label": "!RESET"
          },
          "after": {
            "type": "passive",
            "label": "!RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        },
        {
          "number": "X1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-EYESPI-BFF-PCB/Adafruit EYESPI BFF PCB.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-EYESPI-BFF-PCB",
      "commit": "90ddd1a730d2963aacaa67d787213e31e9ef8a0f",
      "boardURL": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/Adafruit%20EYESPI%20BFF%20PCB.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/Adafruit%20EYESPI%20BFF%20PCB.sch",
      "schematicSha256": "d67bc64b44a913d81a1f4e6d191422ddc19827660afab8d525d2821efbe07a3f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-EYESPI-BFF-PCB/blob/90ddd1a730d2963aacaa67d787213e31e9ef8a0f/license.txt",
      "sourceArchiveSha256": "38c47712435340640b38a08867ab5904ec7d4763ea94d57c2b4e063d980868ee",
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
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP1.6C: unresolved electrical role on SCL.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI.",
          "JP3.2C: unresolved electrical role on SCK.",
          "JP3.3C: unresolved electrical role on MISO.",
          "JP3.4C: unresolved electrical role on MOSI.",
          "JP9.1: unresolved electrical role on LITE.",
          "JP10.1: unresolved electrical role on !RESET.",
          "X1.2: unresolved electrical role on LITE.",
          "X1.4: unresolved electrical role on SCK.",
          "X1.5: unresolved electrical role on MOSI.",
          "X1.6: unresolved electrical role on MISO.",
          "X1.8: unresolved electrical role on !RESET.",
          "X1.13: unresolved electrical role on SCL.",
          "X1.14: unresolved electrical role on SDA."
        ]
      }
    }
  },
  "adafruit-module-5978": {
    "contacts": [
      {
        "id": "x1-b12",
        "number": "X1.B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.B12.",
        "x": -0.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a4",
        "number": "X1.A4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.A4.",
        "x": -1.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a3",
        "number": "X1.A3",
        "label": "SSTX-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SSTX-. Physical source contact X1.A3.",
        "x": -1.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a2",
        "number": "X1.A2",
        "label": "SSTX+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SSTX+. Physical source contact X1.A2.",
        "x": -2.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a1",
        "number": "X1.A1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.A1.",
        "x": -2.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b11",
        "number": "X1.B11",
        "label": "SSRX+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SSRX+. Physical source contact X1.B11.",
        "x": -0.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a5",
        "number": "X1.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X1.A5.",
        "x": 1.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b10",
        "number": "X1.B10",
        "label": "SSRX-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SSRX-. Physical source contact X1.B10.",
        "x": 0.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b9",
        "number": "X1.B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.B9.",
        "x": 0.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a6",
        "number": "X1.A6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.A6.",
        "x": 1.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a7",
        "number": "X1.A7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.A7.",
        "x": 2.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a12",
        "number": "X1.A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.A12.",
        "x": 2.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": 5.08,
        "y": 3.81,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP2.2.",
        "x": 2.54,
        "y": 3.81,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP2.3.",
        "x": 0,
        "y": 3.81,
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
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact JP2.4.",
        "x": -2.54,
        "y": 3.81,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP2.5.",
        "x": -5.08,
        "y": 3.81,
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
    "artwork": "<rect x=\"-1.499\" y=\"-3.607\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.032\" y=\"-1.397\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Type C Plug Breakout.brd",
      "boardSha256": "b80c3e751655f75034cd39061f65298ff1a800066df9b829f6c1d06be1bacac5",
      "sourceBounds": [
        0,
        0,
        13.97,
        12.7
      ],
      "selectedConnectors": [
        "X1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X1.A3 passive pass-through verified from schematic endpoints.",
        "X1.A2 passive pass-through verified from schematic endpoints.",
        "X1.B11 passive pass-through verified from schematic endpoints.",
        "X1.B10 passive pass-through verified from schematic endpoints.",
        "X1.A6 passive pass-through verified from schematic endpoints.",
        "X1.A7 passive pass-through verified from schematic endpoints.",
        "JP2.2 passive pass-through verified from schematic endpoints.",
        "JP2.3 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "X1.A3",
          "sourceNet": "SSTX-",
          "before": {
            "type": "unspecified",
            "label": "SSTX-"
          },
          "after": {
            "type": "passive",
            "label": "SSTX-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "X1.A2",
          "sourceNet": "SSTX+",
          "before": {
            "type": "unspecified",
            "label": "SSTX+"
          },
          "after": {
            "type": "passive",
            "label": "SSTX+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "X1.B11",
          "sourceNet": "SSRX+",
          "before": {
            "type": "unspecified",
            "label": "SSRX+"
          },
          "after": {
            "type": "passive",
            "label": "SSRX+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "X1.B10",
          "sourceNet": "SSRX-",
          "before": {
            "type": "unspecified",
            "label": "SSRX-"
          },
          "after": {
            "type": "passive",
            "label": "SSRX-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "X1.A6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "X1.A7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "JP2.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        },
        {
          "number": "JP2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Plug-Breakout-PCB/Adafruit USB Type C Plug Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": 4.445,
          "y": -1.27,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": -4.445,
          "y": -1.27,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB",
      "commit": "11a5d518bac2d73989a15c8c9e2dcd97611ef6ab",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/Adafruit%20USB%20Type%20C%20Plug%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/Adafruit%20USB%20Type%20C%20Plug%20Breakout.sch",
      "schematicSha256": "b417ed13c1c357af47d92626c57effb6ec1cacc462be3bd32a5abf47ae53d0b1",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Plug-Breakout-PCB/blob/11a5d518bac2d73989a15c8c9e2dcd97611ef6ab/license.txt",
      "sourceArchiveSha256": "fcdd620847c1c4dc7171b344db95d4c665c03fe4c64933fc1bbc765c88646c54",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X1.A3: unresolved electrical role on SSTX-.",
        "X1.A2: unresolved electrical role on SSTX+.",
        "X1.B11: unresolved electrical role on SSRX+.",
        "X1.B10: unresolved electrical role on SSRX-.",
        "X1.A6: unresolved electrical role on D+.",
        "X1.A7: unresolved electrical role on D-.",
        "JP2.2: unresolved electrical role on D-.",
        "JP2.3: unresolved electrical role on D+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [
          "X1.MNT1",
          "X1.MNT2",
          "X1.P$1",
          "X1.P$2"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "X1.A3: unresolved electrical role on SSTX-.",
          "X1.A2: unresolved electrical role on SSTX+.",
          "X1.B11: unresolved electrical role on SSRX+.",
          "X1.B10: unresolved electrical role on SSRX-.",
          "X1.A6: unresolved electrical role on D+.",
          "X1.A7: unresolved electrical role on D-.",
          "JP2.2: unresolved electrical role on D-.",
          "JP2.3: unresolved electrical role on D+."
        ]
      }
    }
  },
  "adafruit-module-4090": {
    "contacts": [
      {
        "id": "x1-m3",
        "number": "X1.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M3.",
        "x": 4.32,
        "y": -4.385,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m4",
        "number": "X1.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M4.",
        "x": -4.32,
        "y": -4.385,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m2",
        "number": "X1.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M2.",
        "x": -4.32,
        "y": -0.205,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m1",
        "number": "X1.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M1.",
        "x": 4.32,
        "y": -0.205,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-a1b12",
        "number": "X1.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.A1B12.",
        "x": 3.2,
        "y": 0.37,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a4b9",
        "number": "X1.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.A4B9.",
        "x": 2.4,
        "y": 0.37,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b8",
        "number": "X1.B8",
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact X1.B8.",
        "x": 1.75,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a5",
        "number": "X1.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X1.A5.",
        "x": 1.25,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b7",
        "number": "X1.B7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.B7.",
        "x": 0.75,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a6",
        "number": "X1.A6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.A6.",
        "x": 0.25,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a7",
        "number": "X1.A7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.A7.",
        "x": -0.25,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b6",
        "number": "X1.B6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.B6.",
        "x": -0.75,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a8",
        "number": "X1.A8",
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact X1.A8.",
        "x": -1.25,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b5",
        "number": "X1.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X1.B5.",
        "x": -1.75,
        "y": 0.37,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b4a9",
        "number": "X1.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.B4A9.",
        "x": -2.4,
        "y": 0.37,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b1a12",
        "number": "X1.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.B1A12.",
        "x": -3.2,
        "y": 0.37,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 8.89,
        "y": 4.445,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.2.",
        "x": 6.35,
        "y": 4.445,
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
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact JP1.3.",
        "x": 3.81,
        "y": 4.445,
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
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 4.445,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP1.5.",
        "x": -1.27,
        "y": 4.445,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP1.6.",
        "x": -3.81,
        "y": 4.445,
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
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact JP1.7.",
        "x": -6.35,
        "y": 4.445,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact JP1.8.",
        "x": -8.89,
        "y": 4.445,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-6.985\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.484\" y=\"0.711\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.484\" y=\"-1.067\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Type C Downstream Breakout rev B.brd",
      "boardSha256": "07970b0ad3243684bdf59c0ced537b8b9a8e8b67f7e9032b9464600da21b04e0",
      "sourceBounds": [
        0,
        0,
        20.32,
        13.97
      ],
      "selectedConnectors": [
        "X1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X1.B8 passive pass-through verified from schematic endpoints.",
        "X1.B7 passive pass-through verified from schematic endpoints.",
        "X1.A6 passive pass-through verified from schematic endpoints.",
        "X1.A7 passive pass-through verified from schematic endpoints.",
        "X1.B6 passive pass-through verified from schematic endpoints.",
        "X1.A8 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "X1.B8",
          "sourceNet": "SBU2",
          "before": {
            "type": "unspecified",
            "label": "SBU2"
          },
          "after": {
            "type": "passive",
            "label": "SBU2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "X1.B7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "X1.A6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "X1.A7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "X1.B6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "X1.A8",
          "sourceNet": "SBU1",
          "before": {
            "type": "unspecified",
            "label": "SBU1"
          },
          "after": {
            "type": "passive",
            "label": "SBU1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "SBU2",
          "before": {
            "type": "unspecified",
            "label": "SBU2"
          },
          "after": {
            "type": "passive",
            "label": "SBU2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "JP1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "JP1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "SBU1",
          "before": {
            "type": "unspecified",
            "label": "SBU1"
          },
          "after": {
            "type": "passive",
            "label": "SBU1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-C-Downstream-Breakout/Adafruit USB Type C Downstream Breakout rev B.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": 7.62,
          "y": -4.445,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": -7.62,
          "y": -4.445,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-USB-C-Downstream-Breakout",
      "commit": "1484ecb56b369e177848e69de4b7b7e513399590",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/Adafruit%20USB%20Type%20C%20Downstream%20Breakout%20rev%20B.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/Adafruit%20USB%20Type%20C%20Downstream%20Breakout%20rev%20B.sch",
      "schematicSha256": "ec14aee06c7a24546fcc6f6b1687ae85a13cadff955a721f458b125b70954330",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-C-Downstream-Breakout/blob/1484ecb56b369e177848e69de4b7b7e513399590/license.txt",
      "sourceArchiveSha256": "3c2c696f0f8904f21048d5f5c6d7f2bc6c82f4b171dcbd23e126e7abbd8f2a90",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X1.B8: unresolved electrical role on SBU2.",
        "X1.B7: unresolved electrical role on D-.",
        "X1.A6: unresolved electrical role on D+.",
        "X1.A7: unresolved electrical role on D-.",
        "X1.B6: unresolved electrical role on D+.",
        "X1.A8: unresolved electrical role on SBU1.",
        "JP1.3: unresolved electrical role on SBU2.",
        "JP1.5: unresolved electrical role on D-.",
        "JP1.6: unresolved electrical role on D+.",
        "JP1.7: unresolved electrical role on SBU1."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "X1.B8: unresolved electrical role on SBU2.",
          "X1.B7: unresolved electrical role on D-.",
          "X1.A6: unresolved electrical role on D+.",
          "X1.A7: unresolved electrical role on D-.",
          "X1.B6: unresolved electrical role on D+.",
          "X1.A8: unresolved electrical role on SBU1.",
          "JP1.3: unresolved electrical role on SBU2.",
          "JP1.5: unresolved electrical role on D-.",
          "JP1.6: unresolved electrical role on D+.",
          "JP1.7: unresolved electrical role on SBU1."
        ]
      }
    }
  },
  "adafruit-module-6050": {
    "contacts": [
      {
        "id": "x1-m3",
        "number": "X1.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M3.",
        "x": 5.62,
        "y": -5.461,
        "size": [
          1.2,
          2.4
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m4",
        "number": "X1.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M4.",
        "x": -5.62,
        "y": -5.461,
        "size": [
          1.2,
          2.4
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m2",
        "number": "X1.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M2.",
        "x": -5.62,
        "y": -1.461,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-m1",
        "number": "X1.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M1.",
        "x": 5.62,
        "y": -1.461,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-a1b12",
        "number": "X1.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.A1B12.",
        "x": 3.2,
        "y": -0.336,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a4b9",
        "number": "X1.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.A4B9.",
        "x": 2.4,
        "y": -0.336,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b8",
        "number": "X1.B8",
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact X1.B8.",
        "x": 1.75,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a5",
        "number": "X1.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X1.A5.",
        "x": 1.25,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b7",
        "number": "X1.B7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.B7.",
        "x": 0.75,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a6",
        "number": "X1.A6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.A6.",
        "x": 0.25,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a7",
        "number": "X1.A7",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.A7.",
        "x": -0.25,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b6",
        "number": "X1.B6",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.B6.",
        "x": -0.75,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a8",
        "number": "X1.A8",
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact X1.A8.",
        "x": -1.25,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b5",
        "number": "X1.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X1.B5.",
        "x": -1.75,
        "y": -0.336,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b4a9",
        "number": "X1.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.B4A9.",
        "x": -2.4,
        "y": -0.336,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b1a12",
        "number": "X1.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.B1A12.",
        "x": -3.2,
        "y": -0.336,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 8.89,
        "y": 4.445,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.2.",
        "x": 6.35,
        "y": 4.445,
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
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact JP1.3.",
        "x": 3.81,
        "y": 4.445,
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
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 4.445,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP1.5.",
        "x": -1.27,
        "y": 4.445,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP1.6.",
        "x": -3.81,
        "y": 4.445,
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
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact JP1.7.",
        "x": -6.35,
        "y": 4.445,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact JP1.8.",
        "x": -8.89,
        "y": 4.445,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-4.52\" y=\"-7.561\" width=\"9.04\" height=\"6.7\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.994\" y=\"0.978\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"1.346\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Sunken USB Type C Breakout.brd",
      "boardSha256": "69c93336fbd822bb387f3f753466ece7d1254a1f5a956ddee6fc482309b2dc7b",
      "sourceBounds": [
        0,
        0,
        20.32,
        13.97
      ],
      "selectedConnectors": [
        "X1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X1.B8 passive pass-through verified from schematic endpoints.",
        "X1.B7 passive pass-through verified from schematic endpoints.",
        "X1.A6 passive pass-through verified from schematic endpoints.",
        "X1.A7 passive pass-through verified from schematic endpoints.",
        "X1.B6 passive pass-through verified from schematic endpoints.",
        "X1.A8 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "X1.B8",
          "sourceNet": "SBU2",
          "before": {
            "type": "unspecified",
            "label": "SBU2"
          },
          "after": {
            "type": "passive",
            "label": "SBU2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "X1.B7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "X1.A6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "X1.A7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "X1.B6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "X1.A8",
          "sourceNet": "SBU1",
          "before": {
            "type": "unspecified",
            "label": "SBU1"
          },
          "after": {
            "type": "passive",
            "label": "SBU1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "SBU2",
          "before": {
            "type": "unspecified",
            "label": "SBU2"
          },
          "after": {
            "type": "passive",
            "label": "SBU2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "JP1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "JP1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "SBU1",
          "before": {
            "type": "unspecified",
            "label": "SBU1"
          },
          "after": {
            "type": "passive",
            "label": "SBU1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Sunken-USB-Type-C-Breakout-PCB/Adafruit Sunken USB Type C Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": 7.874,
          "y": -3.429,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": -7.874,
          "y": -3.429,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB",
      "commit": "4cb1207ddd6eae864f4410d110bac38072e9b895",
      "boardURL": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/Adafruit%20Sunken%20USB%20Type%20C%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/Adafruit%20Sunken%20USB%20Type%20C%20Breakout.sch",
      "schematicSha256": "25a4901c57038e8db23f1e998228b9e3a012f47aaa39c0f834d5bf01c662c7de",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Sunken-USB-Type-C-Breakout-PCB/blob/4cb1207ddd6eae864f4410d110bac38072e9b895/license.txt",
      "sourceArchiveSha256": "aa734df55c7cbca19c31bf3424c55884e52731a18ab93387c9c3bc7155c5ab0d",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X1.B8: unresolved electrical role on SBU2.",
        "X1.B7: unresolved electrical role on D-.",
        "X1.A6: unresolved electrical role on D+.",
        "X1.A7: unresolved electrical role on D-.",
        "X1.B6: unresolved electrical role on D+.",
        "X1.A8: unresolved electrical role on SBU1.",
        "JP1.3: unresolved electrical role on SBU2.",
        "JP1.5: unresolved electrical role on D-.",
        "JP1.6: unresolved electrical role on D+.",
        "JP1.7: unresolved electrical role on SBU1."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "X1.B8: unresolved electrical role on SBU2.",
          "X1.B7: unresolved electrical role on D-.",
          "X1.A6: unresolved electrical role on D+.",
          "X1.A7: unresolved electrical role on D-.",
          "X1.B6: unresolved electrical role on D+.",
          "X1.A8: unresolved electrical role on SBU1.",
          "JP1.3: unresolved electrical role on SBU2.",
          "JP1.5: unresolved electrical role on D-.",
          "JP1.6: unresolved electrical role on D+.",
          "JP1.7: unresolved electrical role on SBU1."
        ]
      }
    }
  },
  "adafruit-module-5625": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 11.465,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 11.465,
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
        "x": 11.465,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 11.465,
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
        "x": -8.855,
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
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -8.855,
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
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -8.855,
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
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -8.855,
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
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN1.2.",
        "x": -3.775,
        "y": 0.5,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": -3.775,
        "y": -0.5,
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
        "x": -3.775,
        "y": 1.5,
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": -3.775,
        "y": -1.5,
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
        "id": "conn2-2",
        "number": "CONN2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN2.2.",
        "x": 6.385,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-3",
        "number": "CONN2.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN2.3.",
        "x": 6.385,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-1",
        "number": "CONN2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.1.",
        "x": 6.385,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-4",
        "number": "CONN2.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN2.4.",
        "x": 6.385,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": 3.81,
        "y": -6.35,
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
        "x": 1.27,
        "y": -6.35,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.27,
        "y": -6.35,
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": -3.81,
        "y": -6.35,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP4.1.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.2.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP4.3.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP4.4.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn5-2",
        "number": "CONN5.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN5.2.",
        "x": 1.305,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      },
      {
        "id": "conn5-3",
        "number": "CONN5.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN5.3.",
        "x": 1.305,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      },
      {
        "id": "conn5-1",
        "number": "CONN5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN5.1.",
        "x": 1.305,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      },
      {
        "id": "conn5-4",
        "number": "CONN5.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN5.4.",
        "x": 1.305,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 8.9168,
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
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 8.9168,
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
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.4032,
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
        "x": -11.4032,
        "y": 2.8,
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
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": -6.3232,
        "y": -2.8,
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
        "x": -6.3232,
        "y": 2.8,
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
        "id": "conn2-mt1",
        "number": "CONN2.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.MT1.",
        "x": 3.8368,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-mt2",
        "number": "CONN2.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.MT2.",
        "x": 3.8368,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn5-mt1",
        "number": "CONN5.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN5.MT1.",
        "x": -1.2432,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      },
      {
        "id": "conn5-mt2",
        "number": "CONN5.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN5.MT2.",
        "x": -1.2432,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN5",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"8.293\" y=\"-3.0\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.213\" y=\"-3.0\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.947\" y=\"-3.0\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.867\" y=\"-3.0\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.027\" y=\"-3.0\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.912\" y=\"-4.718\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.547\" y=\"-4.737\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Stemma QT 5 Port Hub.brd",
      "boardSha256": "f672895bdded6cf7cafd0561f77ba7539391ef21df848d2ed41b0fe0ba83e5dd",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "CONN1",
        "CONN2",
        "JP1",
        "JP4",
        "CONN5"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "CONN3.3 passive pass-through verified from schematic endpoints.",
        "CONN3.4 passive pass-through verified from schematic endpoints.",
        "CONN4.3 passive pass-through verified from schematic endpoints.",
        "CONN4.4 passive pass-through verified from schematic endpoints.",
        "CONN1.3 passive pass-through verified from schematic endpoints.",
        "CONN1.4 passive pass-through verified from schematic endpoints.",
        "CONN2.3 passive pass-through verified from schematic endpoints.",
        "CONN2.4 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP4.3 passive pass-through verified from schematic endpoints.",
        "JP4.4 passive pass-through verified from schematic endpoints.",
        "CONN5.3 passive pass-through verified from schematic endpoints.",
        "CONN5.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "CONN3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN4.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN4.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN2.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "JP1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "JP1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "JP4.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "JP4.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN5.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        },
        {
          "number": "CONN5.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/Adafruit Stemma QT 5 Port Hub.sch"
        }
      ],
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
      "repo": "adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB",
      "commit": "6e0b58b27cc36f2f4f2ae72371457032f9a1dc75",
      "boardURL": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/Adafruit%20Stemma%20QT%205%20Port%20Hub.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/Adafruit%20Stemma%20QT%205%20Port%20Hub.sch",
      "schematicSha256": "4816d50371f7923e984f874bedc36920ab8f6290eec427cd132c4db9ab20e100",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Qwiic-Stemma-QT-5-Port-Hub-PCB/blob/6e0b58b27cc36f2f4f2ae72371457032f9a1dc75/license.txt",
      "sourceArchiveSha256": "3fc6967198afccfdff5ebf7772b0beb07af2d1d152e520b7469f51cda71e457f",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "CONN3.3: unresolved electrical role on SDA.",
        "CONN3.4: unresolved electrical role on SCL.",
        "CONN4.3: unresolved electrical role on SDA.",
        "CONN4.4: unresolved electrical role on SCL.",
        "CONN1.3: unresolved electrical role on SDA.",
        "CONN1.4: unresolved electrical role on SCL.",
        "CONN2.3: unresolved electrical role on SDA.",
        "CONN2.4: unresolved electrical role on SCL.",
        "JP1.3: unresolved electrical role on SCL.",
        "JP1.4: unresolved electrical role on SDA.",
        "JP4.3: unresolved electrical role on SCL.",
        "JP4.4: unresolved electrical role on SDA.",
        "CONN5.3: unresolved electrical role on SDA.",
        "CONN5.4: unresolved electrical role on SCL."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "CONN3.3: unresolved electrical role on SDA.",
          "CONN3.4: unresolved electrical role on SCL.",
          "CONN4.3: unresolved electrical role on SDA.",
          "CONN4.4: unresolved electrical role on SCL.",
          "CONN1.3: unresolved electrical role on SDA.",
          "CONN1.4: unresolved electrical role on SCL.",
          "CONN2.3: unresolved electrical role on SDA.",
          "CONN2.4: unresolved electrical role on SCL.",
          "JP1.3: unresolved electrical role on SCL.",
          "JP1.4: unresolved electrical role on SDA.",
          "JP4.3: unresolved electrical role on SCL.",
          "JP4.4: unresolved electrical role on SDA.",
          "CONN5.3: unresolved electrical role on SDA.",
          "CONN5.4: unresolved electrical role on SCL."
        ]
      }
    }
  },
  "adafruit-module-5937": {
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
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact JP1.3.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
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
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact JP1.3C.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
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
      }
    ],
    "artwork": "<rect x=\"-2.1\" y=\"-2.6095\" width=\"4.2\" height=\"5.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.667\" y=\"-8.6995\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"-9.9695\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.667\" y=\"-6.4135\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.2545\" y=\"2.921\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.227\" y=\"-9.7955\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.729\" y=\"-2.4255\" width=\"1.4\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.356\" y=\"-5.5245\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.835\" y=\"-3.975\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.997\" y=\"2.3745\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.486\" y=\"4.2795\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"0.7745\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.166\" y=\"-0.8765\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.832\" y=\"-4.9915\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.308\" y=\"-4.9915\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.038\" y=\"4.2795\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.356\" y=\"-3.0865\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.658\" y=\"-7.4805\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.689\" y=\"4.2795\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit BNO055 and BMP280 BFF.brd",
      "boardSha256": "b669e21a27ff81e0abfab94e824f96fadd472bc51561334459bd004a270fe5fc",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "JP1",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.3C passive pass-through verified from schematic endpoints.",
        "JP1.4C passive pass-through verified from schematic endpoints.",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
        },
        {
          "number": "JP1.3C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-BNO055-BMP280-BFF-PCB/Adafruit BNO055 and BMP280 BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-BNO055-BMP280-BFF-PCB",
      "commit": "6959d4d990cc3c7b6c0eb1595544220e9e2b8a87",
      "boardURL": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/Adafruit%20BNO055%20and%20BMP280%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/Adafruit%20BNO055%20and%20BMP280%20BFF.sch",
      "schematicSha256": "6f8181d3bd6ab5fb5dc0c4141cc18781d2d379b3eed785f84d84c9085540b017",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-BNO055-BMP280-BFF-PCB/blob/6959d4d990cc3c7b6c0eb1595544220e9e2b8a87/license.txt",
      "sourceArchiveSha256": "1b29ca071b60cc5bb57f67956a7c9a6f7da22f50c39d9036eb63bb354ca12902",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.3: unresolved electrical role on A2.",
        "JP1.4: unresolved electrical role on A3.",
        "JP1.7: unresolved electrical role on TX.",
        "JP1.3C: unresolved electrical role on A2.",
        "JP1.4C: unresolved electrical role on A3.",
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
          "JP1.3: unresolved electrical role on A2.",
          "JP1.4: unresolved electrical role on A3.",
          "JP1.7: unresolved electrical role on TX.",
          "JP1.3C: unresolved electrical role on A2.",
          "JP1.4C: unresolved electrical role on A3.",
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
  "adafruit-module-5956": {
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
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP1.2.",
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
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP1.3.",
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
        "drill": 1.2
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP1.2C.",
        "x": 8.943975,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP1.3C.",
        "x": 8.943975,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.2
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
        "drill": 1.2
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
        "drill": 1.2
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
        "drill": 1.2
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
        "drill": 1.2
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3.",
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4.",
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
        "drill": 1.2
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2C.",
        "x": -8.943975,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp3-3c",
        "number": "JP3.3C",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3C.",
        "x": -8.943975,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1.2
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4C.",
        "x": -8.943975,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1.2
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
        "drill": 1.2
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
        "drill": 1.2
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
        "drill": 1.2
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP2.1.",
        "x": 5.08,
        "y": -2.54,
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
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP2.2.",
        "x": 5.08,
        "y": -5.08,
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
        "label": "5V_EN",
        "type": "input",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V_EN. Physical source contact JP2.3. Enable-control signal, separate from its named supply rail.",
        "x": 5.08,
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
        "id": "x3-vbus",
        "number": "X3.VBUS",
        "label": "VBUS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$32. Physical source contact X3.VBUS.",
        "x": -1.3,
        "y": 5.1535,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-d-",
        "number": "X3.D-",
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$26. Physical source contact X3.D-.",
        "x": -0.65,
        "y": 5.1535,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-dplus",
        "number": "X3.D+",
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$27. Physical source contact X3.D+.",
        "x": 0,
        "y": 5.1535,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-id",
        "number": "X3.ID",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.ID.",
        "x": 0.65,
        "y": 5.1535,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-gnd",
        "number": "X3.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.GND.",
        "x": 1.3,
        "y": 5.1535,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-sprt-4",
        "number": "X3.SPRT@4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.SPRT@4.",
        "x": 3.625,
        "y": 8.0785,
        "size": [
          2.413,
          2.413
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x3-sprt-3",
        "number": "X3.SPRT@3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.SPRT@3.",
        "x": -3.6,
        "y": 8.0785,
        "size": [
          2.413,
          2.413
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x3-sprt-1",
        "number": "X3.SPRT@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.SPRT@1.",
        "x": -2.425,
        "y": 5.4035,
        "size": [
          1.143,
          1.143
        ],
        "shape": "circle",
        "connector": "X3",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x3-sprt-2",
        "number": "X3.SPRT@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.SPRT@2.",
        "x": 2.45,
        "y": 5.4035,
        "size": [
          1.143,
          1.143
        ],
        "shape": "circle",
        "connector": "X3",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x3-base-1",
        "number": "X3.BASE@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.BASE@1.",
        "x": -0.889,
        "y": 8.53435,
        "size": [
          1,
          1.5
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-base-2",
        "number": "X3.BASE@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.BASE@2.",
        "x": 0.889,
        "y": 8.53435,
        "size": [
          1,
          1.5
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.975\" y=\"5.0785\" width=\"8.325\" height=\"5.7\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.777\" y=\"-6.1425\" width=\"5.3\" height=\"5.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.068\" y=\"-0.103\" width=\"2.5\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.026\" y=\"-9.483\" width=\"1.575\" height=\"2.075\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.0621\" y=\"-9.3504\" width=\"1.8448\" height=\"0.9208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.0515\" y=\"7.811\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5495\" y=\"-4.0005\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.486\" y=\"2.4765\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.143\" y=\"-8.9531\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.613\" y=\"-7.6835\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"3.4415\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.385\" y=\"-0.737\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"-8.636\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.508\" y=\"-8.0645\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Host BFF.brd",
      "boardSha256": "87755cb302f682a41cb60a75b1cab1aea4137e88891c24141dae9b5ef3a03299",
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
        "X3"
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
        "JP3.1C passive pass-through verified from schematic endpoints."
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-BFF-PCB/Adafruit USB Host BFF.sch"
        },
        {
          "number": "JP2.3",
          "from": "power_in",
          "to": "input",
          "reason": "Exact schematic endpoint is an enable/control signal, not a power terminal; EN suffix is not a supply rail.",
          "source": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-USB-Host-BFF-PCB",
      "commit": "dc61b50d5ba04d7ba3a73dfa57c0a54d25154393",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/Adafruit%20USB%20Host%20BFF.sch",
      "schematicSha256": "db91692a2ab8fd54ba774d3cef421151240249cad1c6a33a2c6ce31f314de9bd",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Host-BFF-PCB/blob/dc61b50d5ba04d7ba3a73dfa57c0a54d25154393/license.txt",
      "sourceArchiveSha256": "ff7702e591d07e8eabac6a8e814d130e6c3812871c22d1d5dffbb62b44b01943",
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
        "JP3.1C: unresolved electrical role on RX."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "X3.VBUS",
            "net": "N$32",
            "sourceConnectorFunctions": [
              "VBUS"
            ]
          },
          {
            "number": "X3.D-",
            "net": "N$26",
            "sourceConnectorFunctions": [
              "D-"
            ]
          },
          {
            "number": "X3.D+",
            "net": "N$27",
            "sourceConnectorFunctions": [
              "D+"
            ]
          }
        ],
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
          "JP3.1C: unresolved electrical role on RX.",
          "X3.SPRT@1: offset copper shape needs a native-land review.",
          "X3.SPRT@2: offset copper shape needs a native-land review."
        ]
      },
      "referenceCopperReview": {
        "source": "SHOU_MICROXNJ073 SPRT@1 R180 and SPRT@2 R0 offset pads, diameter 1.143 mm, drill 0.8 mm.",
        "selectedReferenceLand": "Round 1.143 mm copper / 0.8 mm drill at the exact source drill center, replacing an incorrectly centered 2.286 mm oval approximation.",
        "scope": "R: selected reference copper, not the manufacturer offset production land. Contact anchors and source drill coordinates are unchanged."
      }
    }
  },
  "adafruit-module-3464": {
    "contacts": [
      {
        "id": "rpi1-1",
        "number": "RPI1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI1.1.",
        "x": 24.1304,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-2",
        "number": "RPI1.2",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.2.",
        "x": 24.1304,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-3",
        "number": "RPI1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact RPI1.3.",
        "x": 21.5904,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-4",
        "number": "RPI1.4",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.4.",
        "x": 21.5904,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-6",
        "number": "RPI1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.6.",
        "x": 19.0504,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-5",
        "number": "RPI1.5",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact RPI1.5.",
        "x": 19.0504,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-8",
        "number": "RPI1.8",
        "label": "TXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TXD. Physical source contact RPI1.8.",
        "x": 16.5104,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-7",
        "number": "RPI1.7",
        "label": "GPIO4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO4. Physical source contact RPI1.7.",
        "x": 16.5104,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-10",
        "number": "RPI1.10",
        "label": "RXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RXD. Physical source contact RPI1.10.",
        "x": 13.9704,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-9",
        "number": "RPI1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.9.",
        "x": 13.9704,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-12",
        "number": "RPI1.12",
        "label": "BCLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: BCLK. Physical source contact RPI1.12.",
        "x": 11.4304,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-11",
        "number": "RPI1.11",
        "label": "GPIO17",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO17. Physical source contact RPI1.11.",
        "x": 11.4304,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-14",
        "number": "RPI1.14",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.14.",
        "x": 8.8904,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-13",
        "number": "RPI1.13",
        "label": "GPIO27",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO27. Physical source contact RPI1.13.",
        "x": 8.8904,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-16",
        "number": "RPI1.16",
        "label": "PLAYER2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PLAYER2. Physical source contact RPI1.16.",
        "x": 6.3504,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-15",
        "number": "RPI1.15",
        "label": "PLAYER1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PLAYER1. Physical source contact RPI1.15.",
        "x": 6.3504,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-18",
        "number": "RPI1.18",
        "label": "GPIO24",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO24. Physical source contact RPI1.18.",
        "x": 3.8104,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-17",
        "number": "RPI1.17",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI1.17.",
        "x": 3.8104,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-20",
        "number": "RPI1.20",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.20.",
        "x": 1.2704,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-19",
        "number": "RPI1.19",
        "label": "SPI_MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MOSI. Physical source contact RPI1.19.",
        "x": 1.2704,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-22",
        "number": "RPI1.22",
        "label": "GPIO25",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO25. Physical source contact RPI1.22.",
        "x": -1.2696,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-21",
        "number": "RPI1.21",
        "label": "SPI_MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MISO. Physical source contact RPI1.21.",
        "x": -1.2696,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-24",
        "number": "RPI1.24",
        "label": "SPI_CE0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE0. Physical source contact RPI1.24.",
        "x": -3.8096,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-23",
        "number": "RPI1.23",
        "label": "SPI_SCLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_SCLK. Physical source contact RPI1.23.",
        "x": -3.8096,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-26",
        "number": "RPI1.26",
        "label": "SPI_CE1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE1. Physical source contact RPI1.26.",
        "x": -6.3496,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-25",
        "number": "RPI1.25",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.25.",
        "x": -6.3496,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-28",
        "number": "RPI1.28",
        "label": "EECLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EECLK. Physical source contact RPI1.28.",
        "x": -8.8896,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-27",
        "number": "RPI1.27",
        "label": "EEDATA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EEDATA. Physical source contact RPI1.27.",
        "x": -8.8896,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-30",
        "number": "RPI1.30",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.30.",
        "x": -11.4296,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-29",
        "number": "RPI1.29",
        "label": "GPIO5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO5. Physical source contact RPI1.29.",
        "x": -11.4296,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-32",
        "number": "RPI1.32",
        "label": "A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A. Physical source contact RPI1.32.",
        "x": -13.9696,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-31",
        "number": "RPI1.31",
        "label": "B",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B. Physical source contact RPI1.31.",
        "x": -13.9696,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-34",
        "number": "RPI1.34",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.34.",
        "x": -16.5096,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-33",
        "number": "RPI1.33",
        "label": "Y",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: Y. Physical source contact RPI1.33.",
        "x": -16.5096,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-36",
        "number": "RPI1.36",
        "label": "X",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: X. Physical source contact RPI1.36.",
        "x": -19.0496,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-35",
        "number": "RPI1.35",
        "label": "LRCLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: LRCLK. Physical source contact RPI1.35.",
        "x": -19.0496,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-38",
        "number": "RPI1.38",
        "label": "SELECT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SELECT. Physical source contact RPI1.38.",
        "x": -21.5896,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-37",
        "number": "RPI1.37",
        "label": "START",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: START. Physical source contact RPI1.37.",
        "x": -21.5896,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-40",
        "number": "RPI1.40",
        "label": "DIN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DIN. Physical source contact RPI1.40.",
        "x": -24.1296,
        "y": 13.3272,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-39",
        "number": "RPI1.39",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.39.",
        "x": -24.1296,
        "y": 9.0092,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-41",
        "number": "RPI1.41",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI1.41.",
        "x": 29.96,
        "y": 13.8798,
        "size": [
          1,
          1
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      },
      {
        "id": "rpi1-42",
        "number": "RPI1.42",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI1.42.",
        "x": -29.73,
        "y": 13.8798,
        "size": [
          1,
          1
        ],
        "shape": "rect",
        "connector": "RPI1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-30.0305\" y=\"-9.3442\" width=\"18.0\" height=\"18.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.281\" y=\"-3.3442\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.4375\" y=\"-4.8682\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.5795\" y=\"2.7518\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.5795\" y=\"-12.4882\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.7215\" y=\"-4.8682\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.244\" y=\"-3.3442\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.444\" y=\"-13.2996\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.081\" y=\"-13.3631\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6185\" y=\"-8.2212\" width=\"2.8\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Joy Bonnet.brd",
      "boardSha256": "d20f9deb81697fe6cf5cd9cbf459682ce76ccf08369200e98e290c41a8bb2b7d",
      "sourceBounds": [
        -0.039500000000003865,
        -0.6884,
        64.9605,
        29.97200000000001
      ],
      "selectedConnectors": [
        "RPI1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "RPI1.8 passive pass-through verified from schematic endpoints.",
        "RPI1.7 passive pass-through verified from schematic endpoints.",
        "RPI1.10 passive pass-through verified from schematic endpoints.",
        "RPI1.12 passive pass-through verified from schematic endpoints.",
        "RPI1.11 passive pass-through verified from schematic endpoints.",
        "RPI1.13 passive pass-through verified from schematic endpoints.",
        "RPI1.18 passive pass-through verified from schematic endpoints.",
        "RPI1.19 passive pass-through verified from schematic endpoints.",
        "RPI1.22 passive pass-through verified from schematic endpoints.",
        "RPI1.21 passive pass-through verified from schematic endpoints.",
        "RPI1.24 passive pass-through verified from schematic endpoints.",
        "RPI1.23 passive pass-through verified from schematic endpoints.",
        "RPI1.26 passive pass-through verified from schematic endpoints.",
        "RPI1.28 passive pass-through verified from schematic endpoints.",
        "RPI1.27 passive pass-through verified from schematic endpoints.",
        "RPI1.29 passive pass-through verified from schematic endpoints.",
        "RPI1.35 passive pass-through verified from schematic endpoints.",
        "RPI1.40 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "RPI1.8",
          "sourceNet": "TXD",
          "before": {
            "type": "unspecified",
            "label": "TXD"
          },
          "after": {
            "type": "passive",
            "label": "TXD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.7",
          "sourceNet": "GPIO4",
          "before": {
            "type": "unspecified",
            "label": "GPIO4"
          },
          "after": {
            "type": "passive",
            "label": "GPIO4"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.10",
          "sourceNet": "RXD",
          "before": {
            "type": "unspecified",
            "label": "RXD"
          },
          "after": {
            "type": "passive",
            "label": "RXD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.12",
          "sourceNet": "BCLK",
          "before": {
            "type": "unspecified",
            "label": "BCLK"
          },
          "after": {
            "type": "passive",
            "label": "BCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.11",
          "sourceNet": "GPIO17",
          "before": {
            "type": "unspecified",
            "label": "GPIO17"
          },
          "after": {
            "type": "passive",
            "label": "GPIO17"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.13",
          "sourceNet": "GPIO27",
          "before": {
            "type": "unspecified",
            "label": "GPIO27"
          },
          "after": {
            "type": "passive",
            "label": "GPIO27"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.18",
          "sourceNet": "GPIO24",
          "before": {
            "type": "unspecified",
            "label": "GPIO24"
          },
          "after": {
            "type": "passive",
            "label": "GPIO24"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.19",
          "sourceNet": "SPI_MOSI",
          "before": {
            "type": "unspecified",
            "label": "SPI_MOSI"
          },
          "after": {
            "type": "passive",
            "label": "SPI_MOSI"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.22",
          "sourceNet": "GPIO25",
          "before": {
            "type": "unspecified",
            "label": "GPIO25"
          },
          "after": {
            "type": "passive",
            "label": "GPIO25"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.21",
          "sourceNet": "SPI_MISO",
          "before": {
            "type": "unspecified",
            "label": "SPI_MISO"
          },
          "after": {
            "type": "passive",
            "label": "SPI_MISO"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.24",
          "sourceNet": "SPI_CE0",
          "before": {
            "type": "unspecified",
            "label": "SPI_CE0"
          },
          "after": {
            "type": "passive",
            "label": "SPI_CE0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.23",
          "sourceNet": "SPI_SCLK",
          "before": {
            "type": "unspecified",
            "label": "SPI_SCLK"
          },
          "after": {
            "type": "passive",
            "label": "SPI_SCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.26",
          "sourceNet": "SPI_CE1",
          "before": {
            "type": "unspecified",
            "label": "SPI_CE1"
          },
          "after": {
            "type": "passive",
            "label": "SPI_CE1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.28",
          "sourceNet": "EECLK",
          "before": {
            "type": "unspecified",
            "label": "EECLK"
          },
          "after": {
            "type": "passive",
            "label": "EECLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.27",
          "sourceNet": "EEDATA",
          "before": {
            "type": "unspecified",
            "label": "EEDATA"
          },
          "after": {
            "type": "passive",
            "label": "EEDATA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.29",
          "sourceNet": "GPIO5",
          "before": {
            "type": "unspecified",
            "label": "GPIO5"
          },
          "after": {
            "type": "passive",
            "label": "GPIO5"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.35",
          "sourceNet": "LRCLK",
          "before": {
            "type": "unspecified",
            "label": "LRCLK"
          },
          "after": {
            "type": "passive",
            "label": "LRCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        },
        {
          "number": "RPI1.40",
          "sourceNet": "DIN",
          "before": {
            "type": "unspecified",
            "label": "DIN"
          },
          "after": {
            "type": "passive",
            "label": "DIN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Bonnet-PCB/Adafruit Joy Bonnet.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Joy-Bonnet-PCB",
      "commit": "6f2c397555472348c959db74b7dde90106c48bb4",
      "boardURL": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/Adafruit%20Joy%20Bonnet.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/Adafruit%20Joy%20Bonnet.sch",
      "schematicSha256": "48f4e133a8c108e47f794117920aab22090210cc9d4eb39bf7f24ba4a7fb1e55",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Joy-Bonnet-PCB/blob/6f2c397555472348c959db74b7dde90106c48bb4/license.txt",
      "sourceArchiveSha256": "b80ff3718113420c71b7f86841c2740f6040047b8630443173b3e8d9e9f4416d",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "RPI1.8: unresolved electrical role on TXD.",
        "RPI1.7: unresolved electrical role on GPIO4.",
        "RPI1.10: unresolved electrical role on RXD.",
        "RPI1.12: unresolved electrical role on BCLK.",
        "RPI1.11: unresolved electrical role on GPIO17.",
        "RPI1.13: unresolved electrical role on GPIO27.",
        "RPI1.18: unresolved electrical role on GPIO24.",
        "RPI1.19: unresolved electrical role on SPI_MOSI.",
        "RPI1.22: unresolved electrical role on GPIO25.",
        "RPI1.21: unresolved electrical role on SPI_MISO.",
        "RPI1.24: unresolved electrical role on SPI_CE0.",
        "RPI1.23: unresolved electrical role on SPI_SCLK.",
        "RPI1.26: unresolved electrical role on SPI_CE1.",
        "RPI1.28: unresolved electrical role on EECLK.",
        "RPI1.27: unresolved electrical role on EEDATA.",
        "RPI1.29: unresolved electrical role on GPIO5.",
        "RPI1.35: unresolved electrical role on LRCLK.",
        "RPI1.40: unresolved electrical role on DIN."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "RPI1.8: unresolved electrical role on TXD.",
          "RPI1.7: unresolved electrical role on GPIO4.",
          "RPI1.10: unresolved electrical role on RXD.",
          "RPI1.12: unresolved electrical role on BCLK.",
          "RPI1.11: unresolved electrical role on GPIO17.",
          "RPI1.13: unresolved electrical role on GPIO27.",
          "RPI1.18: unresolved electrical role on GPIO24.",
          "RPI1.19: unresolved electrical role on SPI_MOSI.",
          "RPI1.22: unresolved electrical role on GPIO25.",
          "RPI1.21: unresolved electrical role on SPI_MISO.",
          "RPI1.24: unresolved electrical role on SPI_CE0.",
          "RPI1.23: unresolved electrical role on SPI_SCLK.",
          "RPI1.26: unresolved electrical role on SPI_CE1.",
          "RPI1.28: unresolved electrical role on EECLK.",
          "RPI1.27: unresolved electrical role on EEDATA.",
          "RPI1.29: unresolved electrical role on GPIO5.",
          "RPI1.35: unresolved electrical role on LRCLK.",
          "RPI1.40: unresolved electrical role on DIN."
        ]
      }
    }
  },
  "adafruit-module-5302": {
    "contacts": [
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "USBBOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USBBOOT. Physical source contact TP1.P$1.",
        "x": 13.7922,
        "y": 5.4864,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D+. Physical source contact JP2.1.",
        "x": -15.24,
        "y": 7.62,
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
        "label": "D0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0. Physical source contact JP2.2.",
        "x": -12.7,
        "y": 7.62,
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
        "label": "D1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1. Physical source contact JP2.3.",
        "x": -10.16,
        "y": 7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.4.",
        "x": -7.62,
        "y": 7.62,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.5.",
        "x": -5.08,
        "y": 7.62,
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
        "label": "D2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D2. Physical source contact JP2.6.",
        "x": -2.54,
        "y": 7.62,
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
        "label": "D3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D3. Physical source contact JP2.7.",
        "x": 0,
        "y": 7.62,
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
        "id": "jp2-1c",
        "number": "JP2.1C",
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D+. Physical source contact JP2.1C.",
        "x": -15.24,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-2c",
        "number": "JP2.2C",
        "label": "D0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D0. Physical source contact JP2.2C.",
        "x": -12.7,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-3c",
        "number": "JP2.3C",
        "label": "D1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D1. Physical source contact JP2.3C.",
        "x": -10.16,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-4c",
        "number": "JP2.4C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.4C.",
        "x": -7.62,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-5c",
        "number": "JP2.5C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.5C.",
        "x": -5.08,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-6c",
        "number": "JP2.6C",
        "label": "D2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D2. Physical source contact JP2.6C.",
        "x": -2.54,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-7c",
        "number": "JP2.7C",
        "label": "D3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D3. Physical source contact JP2.7C.",
        "x": 0,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP2.8.",
        "x": 2.54,
        "y": 7.62,
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
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP2.9.",
        "x": 5.08,
        "y": 7.62,
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
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP2.10.",
        "x": 7.62,
        "y": 7.62,
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "D7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D7. Physical source contact JP2.11.",
        "x": 10.16,
        "y": 7.62,
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "D8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D8. Physical source contact JP2.12.",
        "x": 12.7,
        "y": 7.62,
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
        "id": "jp2-8c",
        "number": "JP2.8C",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP2.8C.",
        "x": 2.54,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-9c",
        "number": "JP2.9C",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP2.9C.",
        "x": 5.08,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-10c",
        "number": "JP2.10C",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP2.10C.",
        "x": 7.62,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-11c",
        "number": "JP2.11C",
        "label": "D7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D7. Physical source contact JP2.11C.",
        "x": 10.16,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-12c",
        "number": "JP2.12C",
        "label": "D8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D8. Physical source contact JP2.12C.",
        "x": 12.7,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp2-13",
        "number": "JP2.13",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP2.13.",
        "x": 15.24,
        "y": 7.62,
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
        "id": "jp2-13c",
        "number": "JP2.13C",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP2.13C.",
        "x": 15.24,
        "y": 9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": -15.1165,
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
        "x": -15.1165,
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
        "x": -10.9365,
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
        "x": -10.9365,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D-. Physical source contact X6.B7.",
        "x": -10.3615,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D+. Physical source contact X6.A6.",
        "x": -10.3615,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D-. Physical source contact X6.A7.",
        "x": -10.3615,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D+. Physical source contact X6.B6.",
        "x": -10.3615,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "x": -10.3615,
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
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 11.456,
        "y": 0.5,
        "size": [
          1.55,
          0.5
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
        "x": 11.456,
        "y": -0.5,
        "size": [
          1.55,
          0.5
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
        "x": 11.456,
        "y": 1.5,
        "size": [
          1.55,
          0.5
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
        "x": 11.456,
        "y": -1.5,
        "size": [
          1.55,
          0.5
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP1.1.",
        "x": 15.24,
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
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.2.",
        "x": 12.7,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.3.",
        "x": 10.16,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact JP1.4.",
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.5.",
        "x": 5.08,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.6.",
        "x": 2.54,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.7.",
        "x": 0,
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
        "id": "jp1-1c",
        "number": "JP1.1C",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP1.1C.",
        "x": 15.24,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.2C.",
        "x": 12.7,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.3C.",
        "x": 10.16,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-4c",
        "number": "JP1.4C",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact JP1.4C.",
        "x": 7.62,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-5c",
        "number": "JP1.5C",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.5C.",
        "x": 5.08,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-6c",
        "number": "JP1.6C",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.6C.",
        "x": 2.54,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-7c",
        "number": "JP1.7C",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.7C.",
        "x": 0,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.8.",
        "x": -2.54,
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
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.9.",
        "x": -5.08,
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
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.10.",
        "x": -7.62,
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
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.11.",
        "x": -10.16,
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
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "RAW",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: RAW. Physical source contact JP1.12.",
        "x": -12.7,
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
        "id": "jp1-8c",
        "number": "JP1.8C",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.8C.",
        "x": -2.54,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-9c",
        "number": "JP1.9C",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.9C.",
        "x": -5.08,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-10c",
        "number": "JP1.10C",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.10C.",
        "x": -7.62,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-11c",
        "number": "JP1.11C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.11C.",
        "x": -10.16,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-12c",
        "number": "JP1.12C",
        "label": "RAW",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: RAW. Physical source contact JP1.12C.",
        "x": -12.7,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D-. Physical source contact JP1.13.",
        "x": -15.24,
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
        "id": "jp1-13c",
        "number": "JP1.13C",
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D-. Physical source contact JP1.13C.",
        "x": -15.24,
        "y": -9.144,
        "size": [
          1.778,
          3.556
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.397
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 15.356,
        "y": 2.8,
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
        "x": 15.356,
        "y": -2.8,
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
    "artwork": "<rect x=\"-17.7165\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.6425\" y=\"-3.7921\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.756\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.191\" y=\"1.2385\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.616\" y=\"3.4911\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.616\" y=\"-6.4784\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.136\" y=\"-0.0435\" width=\"3.0\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.4605\" y=\"-2.8551\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.947\" y=\"-0.0785\" width=\"2.4\" height=\"1.3\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2234\" y=\"4.3919\" width=\"2.4\" height=\"1.3\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.6676\" y=\"-5.3577\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.8745\" y=\"-5.861\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.3586\" y=\"-5.4499\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.8055\" y=\"-1.4625\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.169\" y=\"2.54\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.3405\" y=\"2.5015\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7627\" y=\"-5.1193\" width=\"0.864\" height=\"0.612\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7627\" y=\"-3.5826\" width=\"0.864\" height=\"0.612\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-16.256\" y=\"-1.016\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit KB2040.brd",
      "boardSha256": "6fef1dc137e3ef2e2870be4618694b680f8ff729eb24d1f40409ea2decb6d083",
      "sourceBounds": [
        0,
        0,
        33.02,
        17.78
      ],
      "selectedConnectors": [
        "TP1",
        "JP2",
        "X6",
        "CONN1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.12 supply role verified from connected power pins.",
        "JP1.12C supply role verified from connected power pins."
      ],
      "pinOverrides": [
        {
          "number": "JP1.12",
          "sourceNet": "RAW",
          "before": {
            "type": "unspecified",
            "label": "RAW"
          },
          "after": {
            "type": "power_in",
            "label": "RAW"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U2",
              "pin": "EN",
              "direction": "in"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "IN",
              "direction": "pwr"
            },
            {
              "part": "D1",
              "pin": "C",
              "direction": "pas"
            },
            {
              "part": "SJ1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-KB2040-PCB/Adafruit KB2040.sch"
        },
        {
          "number": "JP1.12C",
          "sourceNet": "RAW",
          "before": {
            "type": "unspecified",
            "label": "RAW"
          },
          "after": {
            "type": "power_in",
            "label": "RAW"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U2",
              "pin": "EN",
              "direction": "in"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "IN",
              "direction": "pwr"
            },
            {
              "part": "D1",
              "pin": "C",
              "direction": "pas"
            },
            {
              "part": "SJ1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-KB2040-PCB/Adafruit KB2040.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-KB2040-PCB",
      "commit": "b4160dcf4385ef2cc30e9652489328321720ee4b",
      "boardURL": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/Adafruit%20KB2040.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/Adafruit%20KB2040.sch",
      "schematicSha256": "d7663f4e2ba8a96b7a4c7ab5b964edb56cf2f0ed130397b7c927250946b438ef",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-KB2040-PCB/blob/b4160dcf4385ef2cc30e9652489328321720ee4b/license.txt",
      "sourceArchiveSha256": "1c0619ad500287f97f2c8798cc62b8d1bc4551598ab4ec88a42716a1d7670124",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.12: non-rail RAW is marked pwr in the source symbol; independent role override required.",
        "JP1.12C: non-rail RAW is marked pwr in the source symbol; independent role override required."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.12: non-rail RAW is marked pwr in the source symbol; independent role override required.",
          "JP1.12C: non-rail RAW is marked pwr in the source symbol; independent role override required."
        ]
      }
    }
  },
  "adafruit-module-3538": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.1.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.2.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.3.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.4.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.5.",
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP2.6.",
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
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
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.2.",
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
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.3.",
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
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.4.",
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
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.5.",
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
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP3.6.",
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
    "artwork": "<rect x=\"-4.1\" y=\"-4.63\" width=\"8.2\" height=\"11.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.506\" y=\"-7.361\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.559\" y=\"3.938\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.123\" y=\"-4.562\" width=\"2.2\" height=\"1.25\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.845\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.604\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.121\" y=\"5.461\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.09\" y=\"5.207\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.381\" y=\"-6.502\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.613\" y=\"5.042\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.29\" y=\"-4.166\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.753\" y=\"-2.896\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.766\" y=\"0.152\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.283\" y=\"-1.372\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.658\" y=\"-6.134\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"4.699\" y=\"1.651\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit AMG8833.brd",
      "boardSha256": "dffa6669ebfa6874341fb2ac6a0d853bc5e335ce38b1fcacc14fc56217aa8493",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "JP2",
        "JP3",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$40",
          "x": -10.16,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$41",
          "x": 10.16,
          "y": -10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$43",
          "x": -10.16,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$44",
          "x": 10.16,
          "y": 10.16,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-AMG8833-Breakout-PCB",
      "commit": "3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489",
      "boardURL": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/Adafruit%20AMG8833.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/Adafruit%20AMG8833.sch",
      "schematicSha256": "6d7ebd31513628504f40738cf3e79df7ca96d2264014ea6d09c486e9acdd5bc0",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-AMG8833-Breakout-PCB/blob/3e5dd5f7bc0ed9e6ca07226eaa56b04bbe408489/license.txt",
      "sourceArchiveSha256": "236856378c400113ec1385828d0072732cb90c7b0e8e9383511def05bcd7eedd",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit AMG8833.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
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
  "adafruit-module-3387": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.5825,
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
        "x": 7.5825,
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
        "x": 7.5825,
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
        "x": 7.5825,
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
        "x": -7.5825,
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
        "x": -7.5825,
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
        "x": -7.5825,
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
        "x": -7.5825,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "SDO_M",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO_M. Physical source contact JP4.1.",
        "x": 10.16,
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
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "SDO_AG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO_AG. Physical source contact JP4.2.",
        "x": 7.62,
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
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "CS_M_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CS_M_5V. Physical source contact JP4.3.",
        "x": 5.08,
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
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "CS_AG_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CS_AG_5V. Physical source contact JP4.4.",
        "x": 2.54,
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
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP4.5.",
        "x": 0,
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
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP4.6.",
        "x": -2.54,
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
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.7.",
        "x": -5.08,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP4.8.",
        "x": -7.62,
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
        "id": "jp4-9",
        "number": "JP4.9",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP4.9.",
        "x": -10.16,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "DEN_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DEN_5V. Physical source contact JP2.1.",
        "x": -5.08,
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
        "label": "INT2_AG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT2_AG. Physical source contact JP2.2.",
        "x": -2.54,
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
        "label": "INT1_AG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT1_AG. Physical source contact JP2.3.",
        "x": 0,
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
        "label": "INT_M",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT_M. Physical source contact JP2.4.",
        "x": 2.54,
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
        "label": "DRDY_M",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DRDY_M. Physical source contact JP2.5.",
        "x": 5.08,
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
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.4825,
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
        "x": 11.4825,
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
        "x": -11.4825,
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
        "x": -11.4825,
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
    "artwork": "<rect x=\"-12.1825\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.8825\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.374\" y=\"-0.838\" width=\"3.7\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.392\" y=\"-4.5115\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.6085\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.984\" y=\"-0.288\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.0805\" y=\"3.364\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.7625\" y=\"2.5385\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.764\" y=\"-4.302\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.7565\" y=\"-0.211\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.305\" y=\"3.7195\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.747\" y=\"3.404\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.978\" y=\"3.2\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.5945\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.893\" y=\"-3.15\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.547\" y=\"3.0735\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.499\" y=\"3.0605\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LSM9DS1 Rev C.brd",
      "boardSha256": "38dd2a62696fde4803ad7f471b7df6ba751a58e886d6463a92b72367ef3daeaa",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP4",
        "JP2"
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
        }
      ],
      "repo": "adafruit/Adafruit-LSM9DS1-Breakout-PCB",
      "commit": "9f6db79a66ae599aa410a2a14b161e26216e8bd4",
      "boardURL": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/Adafruit%20LSM9DS1%20Rev%20C.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/Adafruit%20LSM9DS1%20Rev%20C.sch",
      "schematicSha256": "3a5c5efaf67a58ebd64ef76a41d272c8ea84641c76bcc4a85941682add0aa6ff",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LSM9DS1-Breakout-PCB/blob/9f6db79a66ae599aa410a2a14b161e26216e8bd4/license.txt",
      "sourceArchiveSha256": "95b3bfe1ecaa84bb335fb53ad93950b9686c48296af2c6870b11eb0f41728507",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit LSM9DS1 Rev C.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
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
  "adafruit-module-1465": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "RST",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RST. Physical source contact JP1.1.",
        "x": -7.62,
        "y": 2.54,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP1.2.",
        "x": -7.62,
        "y": 0,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP1.3.",
        "x": -7.62,
        "y": -2.54,
        "size": [
          1.6764,
          1.6764
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
        "x": 7.62,
        "y": -2.54,
        "size": [
          1.6764,
          1.6764
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
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP2.2.",
        "x": 7.62,
        "y": 0,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.3.",
        "x": 7.62,
        "y": 2.54,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "isp1-3",
        "number": "ISP1.3",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact ISP1.3.",
        "x": -1.143,
        "y": 0,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "isp1-4",
        "number": "ISP1.4",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact ISP1.4.",
        "x": 1.143,
        "y": 0,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "isp1-2",
        "number": "ISP1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact ISP1.2.",
        "x": 1.397,
        "y": -2.54,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "isp1-1",
        "number": "ISP1.1",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact ISP1.1.",
        "x": -1.397,
        "y": -2.54,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "isp1-5",
        "number": "ISP1.5",
        "label": "RST",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RST. Physical source contact ISP1.5.",
        "x": -1.397,
        "y": 2.54,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "isp1-6",
        "number": "ISP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact ISP1.6.",
        "x": 1.397,
        "y": 2.54,
        "size": [
          1.6256,
          1.6256
        ],
        "shape": "circle",
        "connector": "ISP1",
        "back": false,
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-4.4\" y=\"-7.6\" width=\"8.8\" height=\"15.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit 6-ISP AVR.brd",
      "boardSha256": "ec8544345907361863a6a8700fa9d32b8e88b25fedb2633243307ba1f0f018f9",
      "sourceBounds": [
        -8.89,
        -7.62,
        8.89,
        7.62
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "ISP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.1 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP2.2 passive pass-through verified from schematic endpoints.",
        "ISP1.3 passive pass-through verified from schematic endpoints.",
        "ISP1.4 passive pass-through verified from schematic endpoints.",
        "ISP1.1 passive pass-through verified from schematic endpoints.",
        "ISP1.5 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP1.1",
          "sourceNet": "RST",
          "before": {
            "type": "unspecified",
            "label": "RST"
          },
          "after": {
            "type": "passive",
            "label": "RST"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "JP1.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "JP1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "JP2.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "ISP1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "ISP1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "ISP1.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        },
        {
          "number": "ISP1.5",
          "sourceNet": "RST",
          "before": {
            "type": "unspecified",
            "label": "RST"
          },
          "after": {
            "type": "passive",
            "label": "RST"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/Adafruit 6-ISP AVR.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs",
      "commit": "0c7bd1cb7a409f9d1689bc26a0a18079c9339b33",
      "boardURL": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/Adafruit%206-ISP%20AVR.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/Adafruit%206-ISP%20AVR.sch",
      "schematicSha256": "c37e346b0865dbebf2e982866e8ea407e1b982ba4d2e6851c19c74dfe9e6f02d",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ISP-SWD-and-JTAG-Breakout-PCBs/blob/0c7bd1cb7a409f9d1689bc26a0a18079c9339b33/license.txt",
      "sourceArchiveSha256": "c2b6b12e1daecf7f5b577fda77f3032ed38a44f4061e7177731c446f44883c0a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit 6-ISP AVR.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
      "resolvedSourceWarnings": [
        "JP1.1: unresolved electrical role on RST.",
        "JP1.2: unresolved electrical role on SCK.",
        "JP1.3: unresolved electrical role on MISO.",
        "JP2.2: unresolved electrical role on MOSI.",
        "ISP1.3: unresolved electrical role on SCK.",
        "ISP1.4: unresolved electrical role on MOSI.",
        "ISP1.1: unresolved electrical role on MISO.",
        "ISP1.5: unresolved electrical role on RST."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.1: unresolved electrical role on RST.",
          "JP1.2: unresolved electrical role on SCK.",
          "JP1.3: unresolved electrical role on MISO.",
          "JP2.2: unresolved electrical role on MOSI.",
          "ISP1.3: unresolved electrical role on SCK.",
          "ISP1.4: unresolved electrical role on MOSI.",
          "ISP1.1: unresolved electrical role on MISO.",
          "ISP1.5: unresolved electrical role on RST."
        ]
      }
    }
  }
};
