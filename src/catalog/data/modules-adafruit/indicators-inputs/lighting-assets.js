// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-1312": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "IN",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: IN. Physical source contact JP1.1.",
        "x": -5.08,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -5.08,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.3.",
        "x": -5.08,
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
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP2.1.",
        "x": 5.08,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": 5.08,
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
        "label": "OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OUT. Physical source contact JP2.3.",
        "x": 5.08,
        "y": 2.54,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-2.5\" y=\"-2.5\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.196\" y=\"-4.287\" width=\"1.45\" height=\"0.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.489\" y=\"3.581\" width=\"0.864\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.353\" y=\"3.581\" width=\"0.864\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.353\" y=\"-4.293\" width=\"0.864\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_Breadboard_NeoPixel.brd",
      "boardSha256": "0992ebc56e332a783d2c930136177dc28b54698957433717e1587d3e701c7e26",
      "sourceBounds": [
        -6.35,
        -5.08,
        6.35,
        5.08
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit_Breadboard_NeoPixel_PCB",
      "commit": "fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e",
      "boardURL": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/Adafruit_Breadboard_NeoPixel.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/Adafruit_Breadboard_NeoPixel.sch",
      "schematicSha256": "817dde498d1a961e7c7aab88694b859575d9785b94818a5b1f3ba9f92758b2c0",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit_Breadboard_NeoPixel_PCB/blob/fcb0f12bb62142336634dfb3a8a8ffc5c15bb90e/license.txt",
      "sourceArchiveSha256": "70f5354786a0a1b369b8df768a692078daea1a33beb49d749101d542aa1a4342",
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
  "adafruit-module-5201": {
    "contacts": [
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP5.1.",
        "x": -7.62,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.2.",
        "x": -5.08,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP5.3.",
        "x": -2.54,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-4",
        "number": "JP5.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP5.4.",
        "x": 0,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "SHUTDOWN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SHUTDOWN. Physical source contact JP5.5.",
        "x": 2.54,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "ADDR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR. Physical source contact JP5.6.",
        "x": 5.08,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-7",
        "number": "JP5.7",
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP5.7.",
        "x": 7.62,
        "y": -23.04,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN1.2.",
        "x": 13.25,
        "y": -20.026,
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
        "x": 12.25,
        "y": -20.026,
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
        "x": 14.25,
        "y": -20.026,
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
        "x": 11.25,
        "y": -20.026,
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
        "id": "conn2-2",
        "number": "CONN2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN2.2.",
        "x": -12.25,
        "y": -20.026,
        "size": [
          0.6,
          1.55
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
        "x": -13.25,
        "y": -20.026,
        "size": [
          0.6,
          1.55
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
        "x": -11.25,
        "y": -20.026,
        "size": [
          0.6,
          1.55
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
        "x": -14.25,
        "y": -20.026,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 15.55,
        "y": -23.926,
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
        "x": 9.95,
        "y": -23.926,
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
        "id": "conn2-mt1",
        "number": "CONN2.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN2.MT1.",
        "x": -9.95,
        "y": -23.926,
        "size": [
          1.2,
          1.8
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
        "x": -15.55,
        "y": -23.926,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.678669\" y=\"-20.363169\" width=\"10.182338\" height=\"10.182338\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.65\" y=\"-24.626\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.85\" y=\"-24.626\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.104\" y=\"-20.124\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.5805\" y=\"-9.612\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.193\" y=\"-9.739\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.0575\" y=\"-9.612\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.818\" y=\"-9.739\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.3585\" y=\"-9.9295\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.4045\" y=\"-9.485\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"8.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"5.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"2.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"17.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"14.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"-6.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"-3.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.9\" y=\"-0.54\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1\" y=\"11.46\" width=\"2.2\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"8.285\" y=\"-14.575\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.258\" y=\"-20.69\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.258\" y=\"-18.658\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.258\" y=\"-16.626\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit IS31FL3741 Matrix.brd",
      "boardSha256": "2e2d6821b4e157d6a6725c70ff019c5fb55605eaea5eff173b8e027174b90c32",
      "sourceBounds": [
        0,
        -5.08,
        39,
        46
      ],
      "selectedConnectors": [
        "JP5",
        "CONN1",
        "CONN2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$5",
          "x": -17,
          "y": -15.54,
          "drill": 2.5
        },
        {
          "sourceRef": "U$6",
          "x": 17,
          "y": -15.54,
          "drill": 2.5
        },
        {
          "sourceRef": "U$3",
          "x": -17,
          "y": 22.96,
          "drill": 2.5
        },
        {
          "sourceRef": "U$4",
          "x": 17,
          "y": 22.96,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-IS31FL3741-PCB",
      "commit": "07d4cb6a19e65be56da4a96736c2335b714ff82b",
      "boardURL": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/Adafruit%20IS31FL3741%20Matrix.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/Adafruit%20IS31FL3741%20Matrix.sch",
      "schematicSha256": "a54da0186e3bdbc681588dc681ab99bf9e5a1411660ff896c1aa3770ee8cc9ba",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-IS31FL3741-PCB/blob/07d4cb6a19e65be56da4a96736c2335b714ff82b/license.txt",
      "sourceArchiveSha256": "62a1830fb357c3d7104ae4e1a0499008ce5488405c043df195c3026ca35ca713",
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
  "adafruit-module-4886": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 13.869,
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
        "x": 13.869,
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
        "x": 13.869,
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
        "x": 13.869,
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
        "x": -13.869,
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
        "x": -13.869,
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
        "x": -13.869,
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
        "x": -13.869,
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
        "x": -12.7,
        "y": 6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -10.16,
        "y": 6.35,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -7.62,
        "y": 6.35,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": -5.08,
        "y": 6.35,
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
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP1.5.",
        "x": -2.54,
        "y": 6.35,
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
        "label": "RST",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RST. Physical source contact JP1.6.",
        "x": 0,
        "y": 6.35,
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
        "label": "P1_0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_0. Physical source contact JP1.7.",
        "x": 2.54,
        "y": 6.35,
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
        "label": "P1_1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_1. Physical source contact JP1.8.",
        "x": 5.08,
        "y": 6.35,
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
        "label": "P1_2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_2. Physical source contact JP1.9.",
        "x": 7.62,
        "y": 6.35,
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
        "label": "P1_3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_3. Physical source contact JP1.10.",
        "x": 10.16,
        "y": 6.35,
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
        "label": "P0_0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_0. Physical source contact JP1.11.",
        "x": 12.7,
        "y": 6.35,
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
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "P0_1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_1. Physical source contact JP7.1.",
        "x": 12.7,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "P0_2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_2. Physical source contact JP7.2.",
        "x": 10.16,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-3",
        "number": "JP7.3",
        "label": "P0_3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_3. Physical source contact JP7.3.",
        "x": 7.62,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-4",
        "number": "JP7.4",
        "label": "P0_4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_4. Physical source contact JP7.4.",
        "x": 5.08,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-5",
        "number": "JP7.5",
        "label": "P0_5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_5. Physical source contact JP7.5.",
        "x": 2.54,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-6",
        "number": "JP7.6",
        "label": "P0_6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_6. Physical source contact JP7.6.",
        "x": 0,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-7",
        "number": "JP7.7",
        "label": "P0_7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P0_7. Physical source contact JP7.7.",
        "x": -2.54,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-8",
        "number": "JP7.8",
        "label": "P1_4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_4. Physical source contact JP7.8.",
        "x": -5.08,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-9",
        "number": "JP7.9",
        "label": "P1_5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_5. Physical source contact JP7.9.",
        "x": -7.62,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-10",
        "number": "JP7.10",
        "label": "P1_6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_6. Physical source contact JP7.10.",
        "x": -10.16,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-11",
        "number": "JP7.11",
        "label": "P1_7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: P1_7. Physical source contact JP7.11.",
        "x": -12.7,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -12.7,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.2.",
        "x": -10.16,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.3.",
        "x": -7.62,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.4.",
        "x": -5.08,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.5.",
        "x": -2.54,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.6.",
        "x": 0,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.7.",
        "x": 2.54,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.8.",
        "x": 5.08,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.9.",
        "x": 7.62,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.10.",
        "x": 10.16,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.11.",
        "x": 12.7,
        "y": -3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": 2.54,
        "y": 3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.2.",
        "x": 5.08,
        "y": 3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.4.",
        "x": 10.16,
        "y": 3.81,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.5.",
        "x": 12.7,
        "y": 3.81,
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
        "x": 17.769,
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
        "x": 17.769,
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
        "x": -17.769,
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
        "x": -17.769,
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
    "artwork": "<rect x=\"-6.257427\" y=\"-1.812427\" width=\"5.656854\" height=\"5.656854\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.469\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.169\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.649\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.318\" y=\"-0.635\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0\" y=\"-0.635\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.969\" y=\"0.108\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.598\" y=\"1.143\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.674\" y=\"3.073\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.437\" y=\"3.391\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.465\" y=\"2.311\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit AW9523.brd",
      "boardSha256": "3dec4c7ca674817b9b1a5f79dbcd7cabf7c74e58928bf5e64bc0a95a8b9831b9",
      "sourceBounds": [
        0,
        0,
        38.1,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP1",
        "JP7",
        "JP2",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -16.51,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 16.51,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -16.51,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 16.51,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-AW9523-PCB",
      "commit": "080a15c70db83a9091bdfd03ee7e85ae38b694a5",
      "boardURL": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/Adafruit%20AW9523.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/Adafruit%20AW9523.sch",
      "schematicSha256": "cdda65d8c7194f5b38656cf614d8ab585308fe7fa9f213aa823a66fc0cd670cd",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-AW9523-PCB/blob/080a15c70db83a9091bdfd03ee7e85ae38b694a5/license.txt",
      "sourceArchiveSha256": "2d6650245162866b5ce99441689e649106880fd4f0aec791850545366a0f9071",
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
  "adafruit-module-5766": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact CONN3.2.",
        "x": -7.646,
        "y": 3.31,
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
        "x": -7.646,
        "y": 4.31,
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
        "x": -7.646,
        "y": 2.31,
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
        "x": -7.646,
        "y": 5.31,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact CONN4.2.",
        "x": 7.646,
        "y": 4.437,
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
        "x": 7.646,
        "y": 3.437,
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
        "x": 7.646,
        "y": 5.437,
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
        "x": 7.646,
        "y": 2.437,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.1.",
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
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
        "label": "NEOPIX_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: NEOPIX_OUT. Physical source contact JP1.5.",
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
        "label": "UPDI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: UPDI. Physical source contact JP1.6.",
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.1.",
        "x": -3.81,
        "y": -2.54,
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
        "label": "V+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: V+. Physical source contact JP2.2.",
        "x": -6.35,
        "y": -2.54,
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
        "label": "V+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: V+. Physical source contact JP3.1.",
        "x": 6.35,
        "y": -2.54,
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
        "label": "NEOPIX_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: NEOPIX_OUT. Physical source contact JP3.2.",
        "x": 3.81,
        "y": -2.54,
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
        "x": 1.27,
        "y": -2.54,
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
        "id": "x2-1",
        "number": "X2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.1.",
        "x": -6e-06,
        "y": -7.62,
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
        "label": "NEOPIX_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: NEOPIX_OUT. Physical source contact X2.2.",
        "x": 3.499994,
        "y": -7.62,
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
        "id": "x2-3",
        "number": "X2.3",
        "label": "V+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: V+. Physical source contact X2.3.",
        "x": 6.999994,
        "y": -7.62,
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
        "id": "x3-1",
        "number": "X3.1",
        "label": "V+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: V+. Physical source contact X3.1.",
        "x": -7.05,
        "y": -7.62,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X3",
        "back": false,
        "drill": 1
      },
      {
        "id": "x3-2",
        "number": "X3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.2.",
        "x": -3.55,
        "y": -7.62,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X3",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": -11.546,
        "y": 1.01,
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
        "x": -11.546,
        "y": 6.61,
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
        "x": 11.546,
        "y": 6.737,
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
        "x": 11.546,
        "y": 1.137,
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
    "artwork": "<rect x=\"-1.750006\" y=\"-11.22\" width=\"10.5\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.85\" y=\"-11.22\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"0.81\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"0.837\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.791\" y=\"2.164\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"0.532\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.223\" y=\"4.9\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.391\" y=\"1.124\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.309\" y=\"-0.273\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.248\" y=\"2.159\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.121\" y=\"5.842\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.835\" y=\"-0.292\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"-0.305\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.575\" y=\"-1.88\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.051\" y=\"6.502\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.842\" y=\"-0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"-0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.683\" y=\"-0.508\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit NeoDriver STEMMA QT.brd",
      "boardSha256": "9b0f6e4a0ed9a4b5eccdef8c1cf990e34c6304df0aeb127fabdbd6e85d994bc1",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP1",
        "JP2",
        "JP3",
        "X2",
        "X3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP2.2 passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "X2.3 passive pass-through verified from schematic endpoints.",
        "X3.1 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP2.2",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "passive",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoDriver-STEMMA-QT-PCB/Adafruit NeoDriver STEMMA QT.sch"
        },
        {
          "number": "JP3.1",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "passive",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoDriver-STEMMA-QT-PCB/Adafruit NeoDriver STEMMA QT.sch"
        },
        {
          "number": "X2.3",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "passive",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoDriver-STEMMA-QT-PCB/Adafruit NeoDriver STEMMA QT.sch"
        },
        {
          "number": "X3.1",
          "sourceNet": "V+",
          "before": {
            "type": "unspecified",
            "label": "V+"
          },
          "after": {
            "type": "passive",
            "label": "V+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoDriver-STEMMA-QT-PCB/Adafruit NeoDriver STEMMA QT.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$6",
          "x": -10.16,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$18",
          "x": 10.16,
          "y": 10.16,
          "drill": 2.5
        },
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -2.54,
          "drill": 2.5
        },
        {
          "sourceRef": "U$9",
          "x": 10.16,
          "y": -2.54,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB",
      "commit": "aaaae6964cf56ddb17c5ab11a15566573e1a4cb7",
      "boardURL": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/Adafruit%20NeoDriver%20STEMMA%20QT.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/Adafruit%20NeoDriver%20STEMMA%20QT.sch",
      "schematicSha256": "8e38ff172408f553fe6a1285a5fcf126dd98ad8060142047657bb2742aca0ca5",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-NeoDriver-STEMMA-QT-PCB/blob/aaaae6964cf56ddb17c5ab11a15566573e1a4cb7/license.txt",
      "sourceArchiveSha256": "145f26f883fe9437c4166f6f16d7758543622350777bd4fd96a99d0033406cc8",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP2.2: unresolved electrical role on V+.",
        "JP3.1: unresolved electrical role on V+.",
        "X2.3: unresolved electrical role on V+.",
        "X3.1: unresolved electrical role on V+."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP2.2: unresolved electrical role on V+.",
          "JP3.1: unresolved electrical role on V+.",
          "X2.3: unresolved electrical role on V+.",
          "X3.1: unresolved electrical role on V+."
        ]
      }
    }
  },
  "adafruit-module-5646": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP1.1.",
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
        "label": "TX_A6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX_A6. Physical source contact JP1.7.",
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
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP1.1C.",
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
        "label": "TX_A6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX_A6. Physical source contact JP1.7C.",
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
        "label": "RX_A7",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX_A7. Physical source contact JP3.1.",
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
        "label": "RX_A7",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX_A7. Physical source contact JP3.1C.",
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
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "DI",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: N$25. Physical source contact TP1.P$1.",
        "x": 0.635,
        "y": -8.0645,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$26. Physical source contact TP2.P$1.",
        "x": -1.855,
        "y": -8.8645,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": false,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP3.P$1.",
        "x": -4.395,
        "y": -8.8645,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"2.3495\" y=\"-9.8425\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.3495\" y=\"-7.8105\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.3495\" y=\"-5.7785\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"4.3705\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"-3.2495\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"-0.7095\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.74\" y=\"4.3705\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.74\" y=\"-3.2495\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.74\" y=\"-0.7095\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"4.3705\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"-3.2495\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"-0.7095\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"6.9105\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.74\" y=\"6.9105\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"6.9105\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.28\" y=\"1.8305\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.74\" y=\"1.8305\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.88\" y=\"4.3705\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.88\" y=\"-3.2495\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.88\" y=\"-0.7095\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8\" y=\"1.8305\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.88\" y=\"6.9105\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.88\" y=\"1.8305\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"6.9105\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"4.3705\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"-3.2495\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"-0.7095\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"1.8305\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.175\" y=\"-5.0815\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.533\" y=\"-4.75\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1345\" y=\"8.966\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.4835\" y=\"-6.2105\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_5x5_NeoPixel_Grid_BFF.brd",
      "boardSha256": "0fbc1b916d7cb9f132e1474895c906cd805705d79517aee981c949c838da50f2",
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
        "TP2",
        "TP3"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.1 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.1C passive pass-through verified from schematic endpoints.",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "TX_A6",
          "before": {
            "type": "unspecified",
            "label": "TX_A6"
          },
          "after": {
            "type": "passive",
            "label": "TX_A6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        },
        {
          "number": "JP1.1C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        },
        {
          "number": "JP1.7C",
          "sourceNet": "TX_A6",
          "before": {
            "type": "unspecified",
            "label": "TX_A6"
          },
          "after": {
            "type": "passive",
            "label": "TX_A6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        },
        {
          "number": "JP3.1",
          "sourceNet": "RX_A7",
          "before": {
            "type": "unspecified",
            "label": "RX_A7"
          },
          "after": {
            "type": "passive",
            "label": "RX_A7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        },
        {
          "number": "JP3.1C",
          "sourceNet": "RX_A7",
          "before": {
            "type": "unspecified",
            "label": "RX_A7"
          },
          "after": {
            "type": "passive",
            "label": "RX_A7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/Adafruit_5x5_NeoPixel_Grid_BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB",
      "commit": "defbba9accab3281a52eb74f49cb0ef6d8ce7387",
      "boardURL": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/Adafruit_5x5_NeoPixel_Grid_BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/Adafruit_5x5_NeoPixel_Grid_BFF.sch",
      "schematicSha256": "4c951ada9829994fe863a5983b70bc414c7737e6f29c84260be933d34ee54f27",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-5x5-NeoPixel-Grid-BFF-PCB/blob/defbba9accab3281a52eb74f49cb0ef6d8ce7387/license.txt",
      "sourceArchiveSha256": "45751a170bdf9af636096db11a80f5d78da1a1c1374927e31d80e095ed870968",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.1: unresolved electrical role on A0.",
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.6: unresolved electrical role on SCL.",
        "JP1.7: unresolved electrical role on TX_A6.",
        "JP1.1C: unresolved electrical role on A0.",
        "JP1.5C: unresolved electrical role on SDA.",
        "JP1.6C: unresolved electrical role on SCL.",
        "JP1.7C: unresolved electrical role on TX_A6.",
        "JP3.1: unresolved electrical role on RX_A7.",
        "JP3.2: unresolved electrical role on SCK.",
        "JP3.3: unresolved electrical role on MISO.",
        "JP3.4: unresolved electrical role on MOSI.",
        "JP3.1C: unresolved electrical role on RX_A7.",
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
          "JP1.1: unresolved electrical role on A0.",
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.6: unresolved electrical role on SCL.",
          "JP1.7: unresolved electrical role on TX_A6.",
          "JP1.1C: unresolved electrical role on A0.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP1.6C: unresolved electrical role on SCL.",
          "JP1.7C: unresolved electrical role on TX_A6.",
          "JP3.1: unresolved electrical role on RX_A7.",
          "JP3.2: unresolved electrical role on SCK.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.4: unresolved electrical role on MOSI.",
          "JP3.1C: unresolved electrical role on RX_A7.",
          "JP3.2C: unresolved electrical role on SCK.",
          "JP3.3C: unresolved electrical role on MISO.",
          "JP3.4C: unresolved electrical role on MOSI."
        ]
      }
    }
  },
  "adafruit-module-5645": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP1.1.",
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
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact JP1.2.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
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
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP1.1C.",
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
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact JP1.2C.",
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
        "drill": 1.2
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
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
        "drill": 1.2
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
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCK. Physical source contact JP3.2.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: MOSI. Physical source contact JP3.4.",
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
        "drill": 1.2
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCK. Physical source contact JP3.2C.",
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
        "drill": 1.2
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: MOSI. Physical source contact JP3.4C.",
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
        "id": "neo-1",
        "number": "NEO.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact NEO.1.",
        "x": -2,
        "y": -2.8245,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "NEO",
        "back": false,
        "smd": true
      },
      {
        "id": "neo-2",
        "number": "NEO.2",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact NEO.2.",
        "x": 0,
        "y": -2.8245,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "NEO",
        "back": false,
        "smd": true
      },
      {
        "id": "neo-3",
        "number": "NEO.3",
        "label": "NEOPIX_OUT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: NEOPIX_OUT. Physical source contact NEO.3.",
        "x": 2,
        "y": -2.8245,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "NEO",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "NEOPIXEL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: NEOPIXEL. Physical source contact JP2.1.",
        "x": 0,
        "y": 5.2705,
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
        "id": "neo-nc1",
        "number": "NEO.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact NEO.NC1.",
        "x": -4.4,
        "y": -8.0245,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "NEO",
        "back": false,
        "smd": true
      },
      {
        "id": "neo-nc2",
        "number": "NEO.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact NEO.NC2.",
        "x": 4.4,
        "y": -8.0245,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "NEO",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"-9.5245\" width=\"10.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.175\" y=\"0.5715\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"6.5405\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"4.1275\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"6.5405\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"4.1275\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"-0.3175\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.2135\" y=\"1.4225\" width=\"2.84\" height=\"2.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.0005\" y=\"2.1975\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"-1.7525\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6255\" y=\"2.057\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-9.525\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-9.0\" width=\"2.54\" height=\"18.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_NeoPixel_Driver_BFF.brd",
      "boardSha256": "5bd5a07613ec766a277e56ce1370dcb9972db186c020e16f0d399ff65b1e57fa",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "NEO",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.1 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.1C passive pass-through verified from schematic endpoints.",
        "JP1.2C passive pass-through verified from schematic endpoints.",
        "JP1.3C passive pass-through verified from schematic endpoints.",
        "JP1.5C passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.3C passive pass-through verified from schematic endpoints."
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
        },
        {
          "number": "JP1.1C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
        },
        {
          "number": "JP1.2C",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoPixel-Driver-BFF-PCB/Adafruit_NeoPixel_Driver_BFF.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-NeoPixel-Driver-BFF-PCB",
      "commit": "eb3fc189fbd73227ace0e5a74d15265b98fb59e1",
      "boardURL": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/Adafruit_NeoPixel_Driver_BFF.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/Adafruit_NeoPixel_Driver_BFF.sch",
      "schematicSha256": "58dfc0d1bec0f6d5a316d9d550f64027f8201bd3755d4f62ae22629088b5d938",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-NeoPixel-Driver-BFF-PCB/blob/eb3fc189fbd73227ace0e5a74d15265b98fb59e1/license.txt",
      "sourceArchiveSha256": "d5cfdda79bcdbd22262bebd6c864729dc755dedd1fdd9cd9b6f235f37b72d27f",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.1: unresolved electrical role on A0.",
        "JP1.2: unresolved electrical role on A1.",
        "JP1.3: unresolved electrical role on A2.",
        "JP1.5: unresolved electrical role on SDA.",
        "JP1.1C: unresolved electrical role on A0.",
        "JP1.2C: unresolved electrical role on A1.",
        "JP1.3C: unresolved electrical role on A2.",
        "JP1.5C: unresolved electrical role on SDA.",
        "JP3.3: unresolved electrical role on MISO.",
        "JP3.3C: unresolved electrical role on MISO."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.1: unresolved electrical role on A0.",
          "JP1.2: unresolved electrical role on A1.",
          "JP1.3: unresolved electrical role on A2.",
          "JP1.5: unresolved electrical role on SDA.",
          "JP1.1C: unresolved electrical role on A0.",
          "JP1.2C: unresolved electrical role on A1.",
          "JP1.3C: unresolved electrical role on A2.",
          "JP1.5C: unresolved electrical role on SDA.",
          "JP3.3: unresolved electrical role on MISO.",
          "JP3.3C: unresolved electrical role on MISO."
        ]
      }
    }
  }
};
