// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-5635": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "SS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SS. Physical source contact JP2.1.",
        "x": 7.62,
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP2.2.",
        "x": 5.08,
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
        "label": "MISO_3.3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO_3.3V. Physical source contact JP2.3.",
        "x": 2.54,
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP2.4.",
        "x": 0,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.5.",
        "x": -2.54,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP2.6.",
        "x": -5.08,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP2.7.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"2.592\" y=\"-2.654\" width=\"5.23\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.6736\" y=\"-2.4098\" width=\"5.0292\" height=\"4.5656\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.7954\" y=\"-2.031\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.985\" y=\"1.626\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"-3.708\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.756\" y=\"2.883\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.438\" y=\"2.997\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SPI Flash Rev E.brd",
      "boardSha256": "4469982fcd4fbc34f039edcbb144ef684fe35142d6eafdf0e3bf949878178e5f",
      "sourceBounds": [
        0,
        0,
        20.32,
        17.78
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$16",
          "x": -7.62,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 7.62,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SPI-Flash-Breakout-PCB",
      "commit": "9a46c77e68ab9a797bfdce54b0629004823e868a",
      "boardURL": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/SPI%20Flash%20Rev%20E.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/SPI%20Flash%20Rev%20E.sch",
      "schematicSha256": "bf473bbb6989fd4bed693e106d9edcd21665725506dba4e213971a42175fc55b",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SPI-Flash-Breakout-PCB/blob/9a46c77e68ab9a797bfdce54b0629004823e868a/license.txt",
      "sourceArchiveSha256": "146cdc6bae5a4d0bb7dc32366b1a456c5e6a66c9da2129e56d4a5649911af11e",
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
  "adafruit-module-5146": {
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
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
        "label": "WP",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: WP. Physical source contact JP1.6.",
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "A2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A2. Physical source contact JP3.1.",
        "x": -3.81,
        "y": -6.35,
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
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact JP3.2.",
        "x": -1.27,
        "y": -6.35,
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
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP3.3.",
        "x": 1.27,
        "y": -6.35,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.4.",
        "x": 3.81,
        "y": -6.35,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.4\" y=\"-1.9\" width=\"4.8\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.8625\" y=\"-2.162\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4085\" y=\"-3.813\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"-1.0\" width=\"3.2\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-0.034\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"1.694\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.207\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.461\" y=\"3.277\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.5945\" y=\"-3.8485\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.826\" y=\"-4.191\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.254\" y=\"-4.191\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.286\" y=\"-4.191\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit 24LC32 I2C EEPROM.brd",
      "boardSha256": "145b889c336df7ca2c1600e5fefbcfdaba4fea14e94434b61e5dc4cb890a5964",
      "sourceBounds": [
        -4.953,
        -4.5085,
        20.447,
        13.2715
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4",
        "JP3"
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
      "repo": "adafruit/Adafruit-24LC32-PCB",
      "commit": "e92cf5549d43c5c17ab04d6ee2899a7783cc19f4",
      "boardURL": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/Adafruit%2024LC32%20I2C%20EEPROM.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/Adafruit%2024LC32%20I2C%20EEPROM.sch",
      "schematicSha256": "aa270ce7c06e9349dced5e0cfcf75c237c41aad73d9c740ea11deaf0e8544620",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-24LC32-PCB/blob/e92cf5549d43c5c17ab04d6ee2899a7783cc19f4/license.txt",
      "sourceArchiveSha256": "65d204bde20928c82c47c521cd8469e52d09e5e852fa114b1aef55ff55e5c07e",
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
  "adafruit-module-4682": {
    "contacts": [
      {
        "id": "x1-cd1",
        "number": "X1.CD1",
        "label": "CARDDET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CARDDET. Physical source contact X1.CD1.",
        "x": 4.985,
        "y": 4.259,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-cd2",
        "number": "X1.CD2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.CD2.",
        "x": -1.015,
        "y": 4.259,
        "size": [
          1.8,
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
        "label": "DAT1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DAT1. Physical source contact X1.8.",
        "x": 5.685,
        "y": -5.941,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-7",
        "number": "X1.7",
        "label": "DO",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DO. Physical source contact X1.7.",
        "x": 4.585,
        "y": -5.941,
        "size": [
          0.7,
          1.5
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
        "x": 3.485,
        "y": -6.341,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "SCLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCLK. Physical source contact X1.5.",
        "x": 2.385,
        "y": -5.941,
        "size": [
          0.7,
          1.5
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
        "x": 1.285,
        "y": -6.341,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "DI",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DI. Physical source contact X1.3.",
        "x": 0.185,
        "y": -5.941,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CS. Physical source contact X1.2.",
        "x": -0.915,
        "y": -5.541,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "DAT2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DAT2. Physical source contact X1.1.",
        "x": -2.015,
        "y": -5.941,
        "size": [
          0.7,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.1.",
        "x": -10.16,
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
        "x": -7.62,
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
        "label": "SCLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCLK. Physical source contact JP1.3.",
        "x": -5.08,
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
        "label": "DO",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DO. Physical source contact JP1.4.",
        "x": -2.54,
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
        "label": "DI",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DI. Physical source contact JP1.5.",
        "x": 0,
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
        "label": "CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CS. Physical source contact JP1.6.",
        "x": 2.54,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "DAT1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DAT1. Physical source contact JP1.7.",
        "x": 5.08,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "DAT2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DAT2. Physical source contact JP1.8.",
        "x": 7.62,
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
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "CARDDET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CARDDET. Physical source contact JP1.9.",
        "x": 10.16,
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
        "id": "x1-mt1",
        "number": "X1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.MT1.",
        "x": 6.585,
        "y": -8.841,
        "size": [
          1.4,
          1.9
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
        "x": -6.615,
        "y": -9.741,
        "size": [
          1.4,
          1.9
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-7.165\" y=\"-15.671\" width=\"14.2\" height=\"20.47\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.798\" y=\"-2.154\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.998\" y=\"-2.154\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.779\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.801\" y=\"-5.182\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SDIO microSD.brd",
      "boardSha256": "0ec91e989f1004c85c203bc4539bb2652b8c33614cc18f624bd3bdac7cbf8c57",
      "sourceBounds": [
        0,
        0,
        25.4,
        22.86
      ],
      "selectedConnectors": [
        "X1",
        "JP1"
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
          "sourceRef": "U$2",
          "x": 10.16,
          "y": -8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB",
      "commit": "959792478854acec21fb862650427ffaa32b07f1",
      "boardURL": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/Adafruit%20SDIO%20microSD.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/Adafruit%20SDIO%20microSD.sch",
      "schematicSha256": "2d6f148ef86f4478184cf76fbda9a9554ce3597025784223532577f4de9ebe8e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MicroSD-SPI-or-SDIO-card-breakout-PCB/blob/959792478854acec21fb862650427ffaa32b07f1/license.txt",
      "sourceArchiveSha256": "ecb654fd97e3d4922112e1ad97233621343233493be0245cf70938df38379c97",
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
  "adafruit-module-5703": {
    "contacts": [
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": -20.981,
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
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": -20.981,
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
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": -20.981,
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
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": -20.981,
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
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "IO11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO11. Physical source contact JP3.1.",
        "x": 11.43,
        "y": 6.35,
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
        "label": "IO10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO10. Physical source contact JP3.2.",
        "x": 8.89,
        "y": 6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.3.",
        "x": 6.35,
        "y": 6.35,
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
        "label": "IO9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO9. Physical source contact JP3.4.",
        "x": 3.81,
        "y": 6.35,
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
        "label": "IO8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO8. Physical source contact JP3.5.",
        "x": 1.27,
        "y": 6.35,
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
        "label": "IO7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO7. Physical source contact JP3.6.",
        "x": -1.27,
        "y": 6.35,
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
        "label": "IO6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO6. Physical source contact JP3.7.",
        "x": -3.81,
        "y": 6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.8.",
        "x": -6.35,
        "y": 6.35,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.9.",
        "x": -8.89,
        "y": 6.35,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.10.",
        "x": -11.43,
        "y": 6.35,
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
        "label": "IO3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO3. Physical source contact JP3.11.",
        "x": -13.97,
        "y": 6.35,
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
        "label": "IO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO2. Physical source contact JP3.12.",
        "x": -16.51,
        "y": 6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.13.",
        "x": -19.05,
        "y": 6.35,
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
        "label": "IO1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO1. Physical source contact JP3.14.",
        "x": -21.59,
        "y": 6.35,
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
        "label": "IO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO0. Physical source contact JP3.15.",
        "x": -24.13,
        "y": 6.35,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP4.1.",
        "x": -24.13,
        "y": -6.35,
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
        "label": "VSYS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VSYS. Physical source contact JP4.2.",
        "x": -21.59,
        "y": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.3.",
        "x": -19.05,
        "y": -6.35,
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
        "label": "!EN",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !EN. Physical source contact JP4.4.",
        "x": -16.51,
        "y": -6.35,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP4.5.",
        "x": -13.97,
        "y": -6.35,
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
        "label": "VREF",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VREF. Physical source contact JP4.6.",
        "x": -11.43,
        "y": -6.35,
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
        "label": "AD2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD2. Physical source contact JP4.7.",
        "x": -8.89,
        "y": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.8.",
        "x": -6.35,
        "y": -6.35,
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
        "label": "AD1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD1. Physical source contact JP4.9.",
        "x": -3.81,
        "y": -6.35,
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
        "label": "AD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD0. Physical source contact JP4.10.",
        "x": -1.27,
        "y": -6.35,
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
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP4.11.",
        "x": 1.27,
        "y": -6.35,
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
        "label": "IO22",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO22. Physical source contact JP4.12.",
        "x": 3.81,
        "y": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.13.",
        "x": 6.35,
        "y": -6.35,
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
        "label": "IO21",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO21. Physical source contact JP4.14.",
        "x": 8.89,
        "y": -6.35,
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
        "id": "jp4-15",
        "number": "JP4.15",
        "label": "IO20",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO20. Physical source contact JP4.15.",
        "x": 11.43,
        "y": -6.35,
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
        "id": "cb1-1",
        "number": "CB1.1",
        "label": "IO0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO0. Physical source contact CB1.1.",
        "x": -24.13,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-2",
        "number": "CB1.2",
        "label": "IO1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO1. Physical source contact CB1.2.",
        "x": -21.59,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-3",
        "number": "CB1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.3.",
        "x": -19.05,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-4",
        "number": "CB1.4",
        "label": "IO2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO2. Physical source contact CB1.4.",
        "x": -16.51,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-5",
        "number": "CB1.5",
        "label": "IO3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO3. Physical source contact CB1.5.",
        "x": -13.97,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-6",
        "number": "CB1.6",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CB1.6.",
        "x": -11.43,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-7",
        "number": "CB1.7",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CB1.7.",
        "x": -8.89,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-8",
        "number": "CB1.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.8.",
        "x": -6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-9",
        "number": "CB1.9",
        "label": "IO6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO6. Physical source contact CB1.9.",
        "x": -3.81,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-10",
        "number": "CB1.10",
        "label": "IO7",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO7. Physical source contact CB1.10.",
        "x": -1.27,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-11",
        "number": "CB1.11",
        "label": "IO8",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO8. Physical source contact CB1.11.",
        "x": 1.27,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-12",
        "number": "CB1.12",
        "label": "IO9",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO9. Physical source contact CB1.12.",
        "x": 3.81,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-13",
        "number": "CB1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.13.",
        "x": 6.35,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-14",
        "number": "CB1.14",
        "label": "IO10",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO10. Physical source contact CB1.14.",
        "x": 8.89,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-15",
        "number": "CB1.15",
        "label": "IO11",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO11. Physical source contact CB1.15.",
        "x": 11.43,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-16",
        "number": "CB1.16",
        "label": "IO12",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO12. Physical source contact CB1.16.",
        "x": 13.97,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-17",
        "number": "CB1.17",
        "label": "IO13",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO13. Physical source contact CB1.17.",
        "x": 16.51,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-18",
        "number": "CB1.18",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.18.",
        "x": 19.05,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-19",
        "number": "CB1.19",
        "label": "IO14",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO14. Physical source contact CB1.19.",
        "x": 21.59,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-20",
        "number": "CB1.20",
        "label": "GPIO15",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1. Physical source contact CB1.20.",
        "x": 24.13,
        "y": 8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-21",
        "number": "CB1.21",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact CB1.21.",
        "x": 24.13,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-22",
        "number": "CB1.22",
        "label": "CARD_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CARD_CS. Physical source contact CB1.22.",
        "x": 21.59,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-23",
        "number": "CB1.23",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.23.",
        "x": 19.05,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-24",
        "number": "CB1.24",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact CB1.24.",
        "x": 16.51,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-25",
        "number": "CB1.25",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact CB1.25.",
        "x": 13.97,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-26",
        "number": "CB1.26",
        "label": "IO20",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO20. Physical source contact CB1.26.",
        "x": 11.43,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-27",
        "number": "CB1.27",
        "label": "IO21",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO21. Physical source contact CB1.27.",
        "x": 8.89,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-28",
        "number": "CB1.28",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.28.",
        "x": 6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-29",
        "number": "CB1.29",
        "label": "IO22",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IO22. Physical source contact CB1.29.",
        "x": 3.81,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-30",
        "number": "CB1.30",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact CB1.30.",
        "x": 1.27,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-31",
        "number": "CB1.31",
        "label": "AD0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AD0. Physical source contact CB1.31.",
        "x": -1.27,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-32",
        "number": "CB1.32",
        "label": "AD1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AD1. Physical source contact CB1.32.",
        "x": -3.81,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-33",
        "number": "CB1.33",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.33.",
        "x": -6.35,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-34",
        "number": "CB1.34",
        "label": "AD2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AD2. Physical source contact CB1.34.",
        "x": -8.89,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-35",
        "number": "CB1.35",
        "label": "VREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: VREF. Physical source contact CB1.35.",
        "x": -11.43,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-36",
        "number": "CB1.36",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CB1.36.",
        "x": -13.97,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-37",
        "number": "CB1.37",
        "label": "!EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: !EN. Physical source contact CB1.37.",
        "x": -16.51,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-38",
        "number": "CB1.38",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CB1.38.",
        "x": -19.05,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-39",
        "number": "CB1.39",
        "label": "VSYS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VSYS. Physical source contact CB1.39.",
        "x": -21.59,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cb1-40",
        "number": "CB1.40",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CB1.40.",
        "x": -24.13,
        "y": -8.89,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CB1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.8.",
        "x": 24.754,
        "y": 4.545,
        "size": [
          1.1,
          0.75
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
        "x": 24.754,
        "y": 3.495,
        "size": [
          1.1,
          0.85
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
        "x": 24.754,
        "y": 2.395,
        "size": [
          1.1,
          0.85
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
        "x": 24.754,
        "y": 1.295,
        "size": [
          1.1,
          0.85
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
        "x": 24.754,
        "y": 0.195,
        "size": [
          1.1,
          0.85
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
        "x": 24.754,
        "y": -0.905,
        "size": [
          1.1,
          0.85
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "CARD_CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CARD_CS. Physical source contact X1.2.",
        "x": 24.754,
        "y": -2.005,
        "size": [
          1.1,
          0.85
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
        "x": 24.754,
        "y": -3.105,
        "size": [
          1.1,
          0.85
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-9",
        "number": "X1.9",
        "label": "CARD_DET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CARD_DET. Physical source contact X1.9.",
        "x": 18.604,
        "y": -5.74,
        "size": [
          1,
          1.2
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
        "x": 14.904,
        "y": -5.74,
        "size": [
          1,
          1.2
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
        "x": -24.881,
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
        "x": -24.881,
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
        "id": "x1-g3",
        "number": "X1.G3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G3.",
        "x": 13.929,
        "y": 3.73,
        "size": [
          1.35,
          1.9
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
        "x": 13.929,
        "y": -2.24,
        "size": [
          1.35,
          1.9
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
        "x": 24.404,
        "y": 5.755,
        "size": [
          1.8,
          1.17
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
        "x": 24.629,
        "y": -5.565,
        "size": [
          1.35,
          1.55
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "b1--",
        "number": "B1.-",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B1.-.",
        "x": -5.187,
        "y": 0,
        "size": [
          4,
          2
        ],
        "shape": "rect",
        "connector": "B1",
        "back": false,
        "smd": true
      },
      {
        "id": "b1-plus",
        "number": "B1.+",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact B1.+.",
        "x": 10.703,
        "y": 0,
        "size": [
          4,
          2
        ],
        "shape": "rect",
        "connector": "B1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"13.604\" y=\"-5.975\" width=\"11.4\" height=\"11.95\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.581\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.9335\" y=\"-2.781\" width=\"3.8\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.466\" y=\"-4.7004\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.463\" y=\"0.3685\" width=\"1.4\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.923\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.367\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.9295\" y=\"-3.988\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.5005\" y=\"-3.9245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.04\" y=\"2.883\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.782\" y=\"2.692\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><g><title>B1 round housing from manufacturer package circles; finish representative</title><circle cx=\"2.613\" cy=\"0.0\" r=\"7.39\" fill=\"none\" stroke=\"#87958d\" stroke-width=\".22\"/></g>",
    "backArtwork": "<rect x=\"23.114\" y=\"4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PiCowbell Adalogger.brd",
      "boardSha256": "50a523188ebcfcff8f2cdf00530a91e264fd47946906bd94f1c0ad5ca6b1e7f1",
      "sourceBounds": [
        0,
        -1.27,
        52.07,
        19.05
      ],
      "selectedConnectors": [
        "CONN1",
        "JP3",
        "JP4",
        "CB1",
        "X1",
        "B1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP3.1",
          "sourceNet": "IO11",
          "before": {
            "type": "unspecified",
            "label": "IO11"
          },
          "after": {
            "type": "passive",
            "label": "IO11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.2",
          "sourceNet": "IO10",
          "before": {
            "type": "unspecified",
            "label": "IO10"
          },
          "after": {
            "type": "passive",
            "label": "IO10"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.4",
          "sourceNet": "IO9",
          "before": {
            "type": "unspecified",
            "label": "IO9"
          },
          "after": {
            "type": "passive",
            "label": "IO9"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.5",
          "sourceNet": "IO8",
          "before": {
            "type": "unspecified",
            "label": "IO8"
          },
          "after": {
            "type": "passive",
            "label": "IO8"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.6",
          "sourceNet": "IO7",
          "before": {
            "type": "unspecified",
            "label": "IO7"
          },
          "after": {
            "type": "passive",
            "label": "IO7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.7",
          "sourceNet": "IO6",
          "before": {
            "type": "unspecified",
            "label": "IO6"
          },
          "after": {
            "type": "passive",
            "label": "IO6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.11",
          "sourceNet": "IO3",
          "before": {
            "type": "unspecified",
            "label": "IO3"
          },
          "after": {
            "type": "passive",
            "label": "IO3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.12",
          "sourceNet": "IO2",
          "before": {
            "type": "unspecified",
            "label": "IO2"
          },
          "after": {
            "type": "passive",
            "label": "IO2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.14",
          "sourceNet": "IO1",
          "before": {
            "type": "unspecified",
            "label": "IO1"
          },
          "after": {
            "type": "passive",
            "label": "IO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP3.15",
          "sourceNet": "IO0",
          "before": {
            "type": "unspecified",
            "label": "IO0"
          },
          "after": {
            "type": "passive",
            "label": "IO0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.4",
          "sourceNet": "!EN",
          "before": {
            "type": "unspecified",
            "label": "!EN"
          },
          "after": {
            "type": "passive",
            "label": "!EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.6",
          "sourceNet": "VREF",
          "before": {
            "type": "unspecified",
            "label": "VREF"
          },
          "after": {
            "type": "passive",
            "label": "VREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.7",
          "sourceNet": "AD2",
          "before": {
            "type": "unspecified",
            "label": "AD2"
          },
          "after": {
            "type": "passive",
            "label": "AD2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.9",
          "sourceNet": "AD1",
          "before": {
            "type": "unspecified",
            "label": "AD1"
          },
          "after": {
            "type": "passive",
            "label": "AD1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.10",
          "sourceNet": "AD0",
          "before": {
            "type": "unspecified",
            "label": "AD0"
          },
          "after": {
            "type": "passive",
            "label": "AD0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.12",
          "sourceNet": "IO22",
          "before": {
            "type": "unspecified",
            "label": "IO22"
          },
          "after": {
            "type": "passive",
            "label": "IO22"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.14",
          "sourceNet": "IO21",
          "before": {
            "type": "unspecified",
            "label": "IO21"
          },
          "after": {
            "type": "passive",
            "label": "IO21"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "JP4.15",
          "sourceNet": "IO20",
          "before": {
            "type": "unspecified",
            "label": "IO20"
          },
          "after": {
            "type": "passive",
            "label": "IO20"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.1",
          "sourceNet": "IO0",
          "before": {
            "type": "unspecified",
            "label": "IO0"
          },
          "after": {
            "type": "passive",
            "label": "IO0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.2",
          "sourceNet": "IO1",
          "before": {
            "type": "unspecified",
            "label": "IO1"
          },
          "after": {
            "type": "passive",
            "label": "IO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.4",
          "sourceNet": "IO2",
          "before": {
            "type": "unspecified",
            "label": "IO2"
          },
          "after": {
            "type": "passive",
            "label": "IO2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.5",
          "sourceNet": "IO3",
          "before": {
            "type": "unspecified",
            "label": "IO3"
          },
          "after": {
            "type": "passive",
            "label": "IO3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.9",
          "sourceNet": "IO6",
          "before": {
            "type": "unspecified",
            "label": "IO6"
          },
          "after": {
            "type": "passive",
            "label": "IO6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.10",
          "sourceNet": "IO7",
          "before": {
            "type": "unspecified",
            "label": "IO7"
          },
          "after": {
            "type": "passive",
            "label": "IO7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.11",
          "sourceNet": "IO8",
          "before": {
            "type": "unspecified",
            "label": "IO8"
          },
          "after": {
            "type": "passive",
            "label": "IO8"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.12",
          "sourceNet": "IO9",
          "before": {
            "type": "unspecified",
            "label": "IO9"
          },
          "after": {
            "type": "passive",
            "label": "IO9"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.14",
          "sourceNet": "IO10",
          "before": {
            "type": "unspecified",
            "label": "IO10"
          },
          "after": {
            "type": "passive",
            "label": "IO10"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.15",
          "sourceNet": "IO11",
          "before": {
            "type": "unspecified",
            "label": "IO11"
          },
          "after": {
            "type": "passive",
            "label": "IO11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.16",
          "sourceNet": "IO12",
          "before": {
            "type": "unspecified",
            "label": "IO12"
          },
          "after": {
            "type": "passive",
            "label": "IO12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.17",
          "sourceNet": "IO13",
          "before": {
            "type": "unspecified",
            "label": "IO13"
          },
          "after": {
            "type": "passive",
            "label": "IO13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.19",
          "sourceNet": "IO14",
          "before": {
            "type": "unspecified",
            "label": "IO14"
          },
          "after": {
            "type": "passive",
            "label": "IO14"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.21",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.24",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.25",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.26",
          "sourceNet": "IO20",
          "before": {
            "type": "unspecified",
            "label": "IO20"
          },
          "after": {
            "type": "passive",
            "label": "IO20"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.27",
          "sourceNet": "IO21",
          "before": {
            "type": "unspecified",
            "label": "IO21"
          },
          "after": {
            "type": "passive",
            "label": "IO21"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.29",
          "sourceNet": "IO22",
          "before": {
            "type": "unspecified",
            "label": "IO22"
          },
          "after": {
            "type": "passive",
            "label": "IO22"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.31",
          "sourceNet": "AD0",
          "before": {
            "type": "unspecified",
            "label": "AD0"
          },
          "after": {
            "type": "passive",
            "label": "AD0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.32",
          "sourceNet": "AD1",
          "before": {
            "type": "unspecified",
            "label": "AD1"
          },
          "after": {
            "type": "passive",
            "label": "AD1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.34",
          "sourceNet": "AD2",
          "before": {
            "type": "unspecified",
            "label": "AD2"
          },
          "after": {
            "type": "passive",
            "label": "AD2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.35",
          "sourceNet": "VREF",
          "before": {
            "type": "unspecified",
            "label": "VREF"
          },
          "after": {
            "type": "passive",
            "label": "VREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        },
        {
          "number": "CB1.37",
          "sourceNet": "!EN",
          "before": {
            "type": "unspecified",
            "label": "!EN"
          },
          "after": {
            "type": "passive",
            "label": "!EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Adalogger-PCB/Adafruit PiCowbell Adalogger.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-PiCowbell-Adalogger-PCB",
      "commit": "667876fdbc1bf1bf7e68f5d9e240d109c55e5093",
      "boardURL": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/Adafruit%20PiCowbell%20Adalogger.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/Adafruit%20PiCowbell%20Adalogger.sch",
      "schematicSha256": "a859da9c4d137b2d324c98fb19835e470e4fb8426063b57d80fca290ebe85805",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PiCowbell-Adalogger-PCB/blob/667876fdbc1bf1bf7e68f5d9e240d109c55e5093/license.txt",
      "sourceArchiveSha256": "46e8a0b2795604b8e40d095f1228e2e0eca8f7f447e977ba65efff297bfd884d",
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
            "number": "CB1.20",
            "net": "N$1",
            "sourceConnectorFunctions": [
              "GPIO15"
            ]
          }
        ],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP3.1: unresolved electrical role on IO11.",
          "JP3.2: unresolved electrical role on IO10.",
          "JP3.4: unresolved electrical role on IO9.",
          "JP3.5: unresolved electrical role on IO8.",
          "JP3.6: unresolved electrical role on IO7.",
          "JP3.7: unresolved electrical role on IO6.",
          "JP3.11: unresolved electrical role on IO3.",
          "JP3.12: unresolved electrical role on IO2.",
          "JP3.14: unresolved electrical role on IO1.",
          "JP3.15: unresolved electrical role on IO0.",
          "JP4.4: unresolved electrical role on !EN.",
          "JP4.6: unresolved electrical role on VREF.",
          "JP4.7: unresolved electrical role on AD2.",
          "JP4.9: unresolved electrical role on AD1.",
          "JP4.10: unresolved electrical role on AD0.",
          "JP4.12: unresolved electrical role on IO22.",
          "JP4.14: unresolved electrical role on IO21.",
          "JP4.15: unresolved electrical role on IO20.",
          "CB1.1: unresolved electrical role on IO0.",
          "CB1.2: unresolved electrical role on IO1.",
          "CB1.4: unresolved electrical role on IO2.",
          "CB1.5: unresolved electrical role on IO3.",
          "CB1.9: unresolved electrical role on IO6.",
          "CB1.10: unresolved electrical role on IO7.",
          "CB1.11: unresolved electrical role on IO8.",
          "CB1.12: unresolved electrical role on IO9.",
          "CB1.14: unresolved electrical role on IO10.",
          "CB1.15: unresolved electrical role on IO11.",
          "CB1.16: unresolved electrical role on IO12.",
          "CB1.17: unresolved electrical role on IO13.",
          "CB1.19: unresolved electrical role on IO14.",
          "CB1.21: unresolved electrical role on MISO.",
          "CB1.24: unresolved electrical role on SCK.",
          "CB1.25: unresolved electrical role on MOSI.",
          "CB1.26: unresolved electrical role on IO20.",
          "CB1.27: unresolved electrical role on IO21.",
          "CB1.29: unresolved electrical role on IO22.",
          "CB1.31: unresolved electrical role on AD0.",
          "CB1.32: unresolved electrical role on AD1.",
          "CB1.34: unresolved electrical role on AD2.",
          "CB1.35: unresolved electrical role on VREF.",
          "CB1.37: unresolved electrical role on !EN.",
          "X1.7: unresolved electrical role on MISO.",
          "X1.5: unresolved electrical role on SCK.",
          "X1.3: unresolved electrical role on MOSI."
        ]
      },
      "roundHousingReview": [
        {
          "ref": "B1",
          "package": "CR1220-2",
          "sourceLayer": "51",
          "center": [
            2.613,
            0
          ],
          "radius": 7.39,
          "back": false
        }
      ]
    }
  },
  "adafruit-module-5683": {
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "SD_CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SD_CS. Physical source contact TP1.P$1.",
        "x": 5.842,
        "y": 3.4925,
        "size": [
          1,
          1
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-8",
        "number": "X1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.8.",
        "x": -4.545,
        "y": 1.8305,
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
        "x": -3.495,
        "y": 1.8305,
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
        "x": -2.395,
        "y": 1.8305,
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
        "x": -1.295,
        "y": 1.8305,
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
        "x": -0.195,
        "y": 1.8305,
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
        "x": 0.905,
        "y": 1.8305,
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
        "x": 2.005,
        "y": 1.8305,
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
        "x": 3.105,
        "y": 1.8305,
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
        "x": 5.74,
        "y": -4.3195,
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
        "x": 5.74,
        "y": -8.0195,
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
        "id": "x1-g3",
        "number": "X1.G3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.G3.",
        "x": -3.73,
        "y": -8.9945,
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
        "x": 2.24,
        "y": -8.9945,
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
        "x": -5.755,
        "y": 1.4805,
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
        "x": 5.565,
        "y": 1.7055,
        "size": [
          1.55,
          1.35
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.975\" y=\"-9.3195\" width=\"11.95\" height=\"11.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.286\" y=\"2.7305\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.334\" y=\"2.7305\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.048\" y=\"2.7305\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.762\" y=\"2.7305\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.142\" y=\"2.7925\" width=\"1.4\" height=\"1.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit microSD BFF.brd",
      "boardSha256": "45fb4da45eddfd208308093b6977287fca291384e3fdfa8d35628d74f4f1422a",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "TP1",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.3C passive pass-through verified from schematic endpoints.",
        "JP1.4C passive pass-through verified from schematic endpoints.",
        "JP1.5C passive pass-through verified from schematic endpoints.",
        "JP1.6C passive pass-through verified from schematic endpoints."
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-microSD-Card-BFF-PCB/Adafruit microSD BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-microSD-Card-BFF-PCB",
      "commit": "65445ba23f0ee7e381b21e19db13e9ccfef9ba11",
      "boardURL": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/Adafruit%20microSD%20BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/Adafruit%20microSD%20BFF.sch",
      "schematicSha256": "00cf0bbba52ee30c2470a5a217eaa57a8e6a4c95a663b10aafc43ef2b4309569",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-microSD-Card-BFF-PCB/blob/65445ba23f0ee7e381b21e19db13e9ccfef9ba11/license.txt",
      "sourceArchiveSha256": "fa09e260abfd57504f5d9f1c8b0810d6f1fdf2c2815124d19a670423e655ce4a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.3: unresolved electrical role on A2.",
        "JP1.4: unresolved electrical role on A3.",
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.6: unresolved electrical role on SCL.",
        "JP1.3C: unresolved electrical role on A2.",
        "JP1.4C: unresolved electrical role on A3.",
        "JP1.5C: unresolved electrical role on SDA.",
        "JP1.6C: unresolved electrical role on SCL."
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
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.3C: unresolved electrical role on A2.",
          "JP1.4C: unresolved electrical role on A3.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP1.6C: unresolved electrical role on SCL.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI.",
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
  "adafruit-module-1895": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP1.1.",
        "x": 8.89,
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
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact JP1.2.",
        "x": 6.35,
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
        "label": "A2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A2. Physical source contact JP1.3.",
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.5.",
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "WP",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: WP. Physical source contact JP1.6.",
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
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.7.",
        "x": -6.35,
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
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.8.",
        "x": -8.89,
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
    "artwork": "<rect x=\"-2.615\" y=\"-2.4\" width=\"5.23\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.424\" y=\"1.593\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.424\" y=\"-2.367\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.424\" y=\"-0.621\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit I2C FRAM.brd",
      "boardSha256": "5b1f3d761b525adf69dad0457708bbc4a2f44c9484cddc3eb237a37bafeb067b",
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
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$5",
          "x": -7.62,
          "y": -5.08,
          "drill": 2.5
        },
        {
          "sourceRef": "U$6",
          "x": 7.62,
          "y": -5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-FRAM-Breakout-PCB",
      "commit": "f7d4afa22ddd562f52c557e2e8f003611515b4f4",
      "boardURL": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/Adafruit%20I2C%20FRAM.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/Adafruit%20I2C%20FRAM.sch",
      "schematicSha256": "aae071fc2878faa12d67968b409d4e4a644eaf19180859095465be87cad14ad3",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-FRAM-Breakout-PCB/blob/f7d4afa22ddd562f52c557e2e8f003611515b4f4/license.txt",
      "sourceArchiveSha256": "4b2362bfda8d0451105d4fdfedc78dcc6be626be8d802e6294f4d6d8c25194cb",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit I2C FRAM.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
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
