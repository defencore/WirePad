// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-6067": {
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
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP1.6.",
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-0.923\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-3.734\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.372\" y=\"2.743\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.223\" y=\"-3.302\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit LPS28 Pressure Sensor.brd",
      "boardSha256": "a0762d93d636e04c368c6394c9ab94bafc692b6582b55cc9d0ae4fccb517863b",
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
      "repo": "adafruit/Adafruit-LPS28-Pressure-Sensor-PCB",
      "commit": "593fed8bfe3f406d6f40a9c7bd83e88b92a25055",
      "boardURL": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/Adafruit%20LPS28%20Pressure%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/Adafruit%20LPS28%20Pressure%20Sensor.sch",
      "schematicSha256": "8bb1737c5e3d6e6574134f5289b4ffbc9dce746440a896cfc0dfe8ce20914049",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-LPS28-Pressure-Sensor-PCB/blob/593fed8bfe3f406d6f40a9c7bd83e88b92a25055/license.txt",
      "sourceArchiveSha256": "3b1a22be2ee9bd84dc47025a5def45ac3f1c482f2ef8ef0c47bcb347f9f09a01",
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
  "adafruit-module-5974": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "V+",
        "type": "power_in",
        "description": "External board supply or motor-power rail. CAD net: V+. Physical source contact JP1.1.",
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
        "label": "VDDIO",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDDIO. Physical source contact JP1.2.",
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
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
        "label": "SCLK",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCLK. Physical source contact JP1.4.",
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
        "label": "DATAOUT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATAOUT. Physical source contact JP1.5.",
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
        "label": "RATE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RATE. Physical source contact JP1.6.",
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VPP",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VPP. Physical source contact JP2.1.",
        "x": 6.35,
        "y": -8.001,
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
        "label": "B-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B-. Physical source contact JP2.2.",
        "x": 3.81,
        "y": -8.001,
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
        "label": "B+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B+. Physical source contact JP2.3.",
        "x": 1.27,
        "y": -8.001,
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
        "label": "A+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A+. Physical source contact JP2.4.",
        "x": -1.27,
        "y": -8.001,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "A-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A-. Physical source contact JP2.5.",
        "x": -3.81,
        "y": -8.001,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.6.",
        "x": -6.35,
        "y": -8.001,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-7.87\" y=\"-11.201\" width=\"15.74\" height=\"6.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.255\" y=\"0.4572\" width=\"10.16\" height=\"3.9116\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.352\" y=\"-1.241\" width=\"4.1\" height=\"6.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.2646\" y=\"2.8956\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.271\" y=\"-3.708\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4925\" y=\"0.0385\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.74\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.3905\" y=\"-1.448\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"5.791\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.311\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.4045\" y=\"-3.1625\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.1025\" y=\"-3.1495\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.643\" y=\"0.343\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9275\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.957\" y=\"-1.9435\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.8935\" y=\"3.0095\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.735\" y=\"3.0095\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.608\" y=\"-1.9435\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.7065\" y=\"5.283\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.918\" y=\"4.597\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.604\" y=\"5.461\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit HX711 ADC Breakout.brd",
      "boardSha256": "158bde6f472703152b468b128c81ef813c23a9afd2334108cdf277de0651e963",
      "sourceBounds": [
        0,
        0,
        25.4,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.1 supply role verified from connected power pins."
      ],
      "pinOverrides": [
        {
          "number": "JP1.1",
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
              "part": "X3",
              "pin": "VSUP",
              "direction": "pwr"
            },
            {
              "part": "Q1",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "SJ1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-HX711-24-bit-ADC-PCB/Adafruit HX711 ADC Breakout.sch"
        }
      ],
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
      "repo": "adafruit/Adafruit-HX711-24-bit-ADC-PCB",
      "commit": "4444b42fc47d665fcd6694097690cfbf6c609b43",
      "boardURL": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/Adafruit%20HX711%20ADC%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/Adafruit%20HX711%20ADC%20Breakout.sch",
      "schematicSha256": "a7d9aa67ee9f71fd6b4c400d9c5c89b558ee6aa0b6c58107fd816fc4fca5bcc7",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-HX711-24-bit-ADC-PCB/blob/4444b42fc47d665fcd6694097690cfbf6c609b43/license.txt",
      "sourceArchiveSha256": "bb6d8f035b7e66057916f1cbf0420623ef95227c980b023da39afcef47b23aa0",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.1: non-rail V+ is marked pwr in the source symbol; independent role override required."
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": [
          "JP1.1: non-rail V+ is marked pwr in the source symbol; independent role override required."
        ]
      }
    }
  }
};
