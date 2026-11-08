// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-4026": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -30.844,
        "y": 3,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VIN. Physical source contact X1.2.",
        "x": -30.844,
        "y": 1,
        "size": [
          4.6,
          1
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
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact X1.3.",
        "x": -30.844,
        "y": -1,
        "size": [
          4.6,
          1
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
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact X1.4.",
        "x": -30.844,
        "y": -3,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-tp",
        "number": "TP1.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "SWD programming/debug clock input, exposed service test pad. CAD net: SWCLK. Physical source contact TP1.TP.",
        "x": -18.288,
        "y": 3.81,
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
        "id": "tp2-tp",
        "number": "TP2.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SWDIO. Physical source contact TP2.TP.",
        "x": -18.288,
        "y": 5.969,
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
        "id": "tp3-tp",
        "number": "TP3.TP",
        "label": "SENSOR",
        "type": "bidirectional",
        "description": "Capacitive soil-probe node exposed as a test pad; firmware charges and senses this node. CAD net: SENSOR. Physical source contact TP3.TP.",
        "x": -12.446,
        "y": 0.381,
        "size": [
          1,
          1
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": false,
        "smd": true
      },
      {
        "id": "tp4-tp",
        "number": "TP4.TP",
        "label": "!RESET",
        "type": "input",
        "description": "Active-low microcontroller reset input, exposed service test pad. CAD net: !RESET. Physical source contact TP4.TP.",
        "x": -22.225,
        "y": 1.905,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-37.544\" y=\"-6.0\" width=\"7.5\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.574\" y=\"-4.159\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.816\" y=\"-3.678\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.9404\" y=\"1.017\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.041\" y=\"-6.307\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.69\" y=\"4.632\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.838\" y=\"2.413\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.615\" y=\"2.921\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.55\" y=\"4.775\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.863\" y=\"4.724\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-34.163\" y=\"0.381\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-34.163\" y=\"-2.159\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit STEMMA Soil Sensor.brd",
      "boardSha256": "731600be9d83725868a7dc424523f75f377917853a2333997361f63096d35bc5",
      "sourceBounds": [
        0,
        0,
        76.2,
        13.97
      ],
      "selectedConnectors": [
        "X1",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "TP1.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "PA30/I2/SER1.0+2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-STEMMA-Soil-Sensor-PCB/Adafruit STEMMA Soil Sensor.sch"
        },
        {
          "number": "TP4.TP",
          "sourceNet": "!RESET",
          "before": {
            "type": "bidirectional",
            "label": "!RESET"
          },
          "after": {
            "type": "input",
            "label": "!RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC1",
              "pin": "PA28/!RESET",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-STEMMA-Soil-Sensor-PCB/Adafruit STEMMA Soil Sensor.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-STEMMA-Soil-Sensor-PCB",
      "commit": "b20a708dd015cb81da8740460d47aae1555a1781",
      "boardURL": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/Adafruit%20STEMMA%20Soil%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/Adafruit%20STEMMA%20Soil%20Sensor.sch",
      "schematicSha256": "c03d0994b59640a89bd1d2da9967bbd47c6d52b1f6081118511fb2780a153624",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/license.txt",
      "sourceArchiveSha256": "7148b3d8bc9a436a089a791eee798354c7525c9ac6bb07841c2ab926038b7a61",
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
  "adafruit-module-3199": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V. Physical source contact JP2.1.",
        "x": -3.81,
        "y": 7.62,
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
        "x": -1.27,
        "y": 7.62,
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
        "label": "AOUT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AOUT. Physical source contact JP2.3.",
        "x": 1.27,
        "y": 7.62,
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
        "label": "ENABLE",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ENABLE. Physical source contact JP2.4.",
        "x": 3.81,
        "y": 7.62,
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
    "artwork": "<rect x=\"-2.6\" y=\"-4.489\" width=\"5.2\" height=\"7.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.6456\" y=\"2.8956\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.166\" y=\"-1.016\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.486\" y=\"3.048\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.486\" y=\"-1.016\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MICS-5524.brd",
      "boardSha256": "581f6049044c6a728f320b02fe49ae19a7b1777968dcbfa1c04599b088b14010",
      "sourceBounds": [
        0,
        0,
        12.7,
        19.05
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$3",
          "x": -3.81,
          "y": -6.985,
          "drill": 2.5
        },
        {
          "sourceRef": "U$4",
          "x": 3.81,
          "y": -6.985,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB",
      "commit": "d347601d3c62369d5b22a20b0e3f15a8fc04ef48",
      "boardURL": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/Adafruit%20MICS-5524.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/Adafruit%20MICS-5524.sch",
      "schematicSha256": "dfb56bb0b082fbed0d21ef6f86966dc03777affdeaa4f9b5bcbd9a591b0f71da",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/license.txt",
      "sourceArchiveSha256": "f8c621c00a1a49f87909a0720acc259d1b4e5018b86e77e30798d87fae9fca1a",
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
  "adafruit-module-6362": {
    "contacts": [
      {
        "id": "soil2-p-1",
        "number": "SOIL2.P$1",
        "label": "SOIL2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SOIL2. Physical source contact SOIL2.P$1.",
        "x": 5.715,
        "y": -5.736789,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "SOIL2",
        "back": false,
        "smd": true
      },
      {
        "id": "soil1-p-1",
        "number": "SOIL1.P$1",
        "label": "SOIL1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SOIL1. Physical source contact SOIL1.P$1.",
        "x": -5.715,
        "y": -5.482789,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "SOIL1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-2",
        "number": "CN1.2",
        "label": "V+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: V+. Physical source contact CN1.2.",
        "x": -7.5825,
        "y": -15.642789,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-3",
        "number": "CN1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.3.",
        "x": -7.5825,
        "y": -14.642789,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-1",
        "number": "CN1.1",
        "label": "SIGNAL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact CN1.1.",
        "x": -7.5825,
        "y": -16.642789,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "V+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: V+. Physical source contact TP1.P$1.",
        "x": 0,
        "y": -23.008789,
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
        "label": "SIGNAL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIGNAL. Physical source contact TP2.P$1.",
        "x": 7.62,
        "y": -23.008789,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP3.P$1.",
        "x": -7.62,
        "y": -23.008789,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP3",
        "back": false,
        "drill": 3.2
      }
    ],
    "artwork": "<rect x=\"-12.1825\" y=\"-18.142789\" width=\"4.3\" height=\"5.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9144\" y=\"-15.537189\" width=\"1.3208\" height=\"3.3448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.699\" y=\"-14.524789\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-17.318789\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Simple Soil Moisture Sensor.brd",
      "boardSha256": "11888f35c7381163f7ebf067f9ccd0f93a207e549d6860fe00037dabe49f1ae8",
      "sourceBounds": [
        0,
        1.734421875,
        25.4,
        53.34
      ],
      "selectedConnectors": [
        "SOIL2",
        "SOIL1",
        "CN1",
        "TP1",
        "TP2",
        "TP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB",
      "commit": "c5401f929e78ba1f8dc35b9587ab3c62d0f73073",
      "boardURL": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/Adafruit%20Simple%20Soil%20Moisture%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/Adafruit%20Simple%20Soil%20Moisture%20Sensor.sch",
      "schematicSha256": "fd2928a49f3102bcb6002f1f4f3f3b29a716e83c0ad0b6a8cb2ab40958ee5630",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/license.txt",
      "sourceArchiveSha256": "4cda35f7b75e7e4ee37718f0c5dceb8cb5bb165afa80cba2d775e3b36d32b995",
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
  "adafruit-module-6455": {
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 6.35,
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
        "x": -2.54,
        "y": 6.35,
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
        "x": 0,
        "y": 6.35,
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
        "x": 2.54,
        "y": 6.35,
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
        "x": 5.08,
        "y": 6.35,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.3\" y=\"-1.3\" width=\"2.6\" height=\"2.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-1.177\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-4.75\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-3.099\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SGP41 Gas Sensor Breakout rev A.brd",
      "boardSha256": "a20c8bddd53446b7dbb918b35a25ec0b1a851194e85340d3b20277cb3529e2a5",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$28",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$29",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$31",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB",
      "commit": "9c8e8c6d195e430a3537b0dca20fe7e310ece822",
      "boardURL": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/Adafruit%20SGP41%20Gas%20Sensor%20Breakout%20rev%20A.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/Adafruit%20SGP41%20Gas%20Sensor%20Breakout%20rev%20A.sch",
      "schematicSha256": "99b2a9476f1ee7c1dc36db1a8947014423c7838d54c1d1693a34c7e1e31737af",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/license.txt",
      "sourceArchiveSha256": "9460a7ac284149118e17a328119acac7b416632069bb0b537650c699dab5b4d8",
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
  "adafruit-module-4829": {
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 6.35,
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
        "x": -2.54,
        "y": 6.35,
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
        "x": 0,
        "y": 6.35,
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
        "x": 2.54,
        "y": 6.35,
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
        "x": 5.08,
        "y": 6.35,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.3\" y=\"-1.3\" width=\"2.6\" height=\"2.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-1.177\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-4.75\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-3.099\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SGP40.brd",
      "boardSha256": "c449f7663c8c2a658d518e9a40da6acf90dc57b8ac764f254bc321a83f159909",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$28",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$29",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$31",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SGP40-PCB",
      "commit": "57911e5d238bc5c3730c621e3135ff2aa36604ec",
      "boardURL": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/Adafruit%20SGP40.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/Adafruit%20SGP40.sch",
      "schematicSha256": "8e986b9967b96be9aefe39f7b2047be945b6443005fe3fa6bdf1fcde1b8795aa",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/license.txt",
      "sourceArchiveSha256": "e39f067a00a426fa8eee0b04e75bcc3fa696a074552f301dfc4d6abb4ea24039",
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
  "adafruit-module-5606": {
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -8.89,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U1.VOUT2 to this rail. CAD net: 3.3V. Physical source contact JP2.2.",
        "x": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.3.",
        "x": -3.81,
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact JP2.4.",
        "x": -1.27,
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
        "label": "SDO/ADR",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SDO/ADR. Physical source contact JP2.5.",
        "x": 1.27,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact JP2.6.",
        "x": 3.81,
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
        "label": "!CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !CS. Physical source contact JP2.7.",
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "!INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: !INT. Physical source contact JP2.8.",
        "x": 8.89,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7\" y=\"-1.446\" width=\"3.4\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.418\" y=\"-4.575\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.53\" y=\"-0.937\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.842\" y=\"2.475\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.328\" y=\"-0.592\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-4.089\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.994\" y=\"1.93\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.353\" y=\"-0.0766\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5498\" y=\"-3.8988\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.445\" y=\"-1.143\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit ENS160.brd",
      "boardSha256": "7d25dd033c86e786d2ebbef0de3d52451e0bb83af755d8f0e9fe386403492ace",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP2.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT2",
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
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "VDDIO",
              "direction": "pwr"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ENS160-PCB/Adafruit ENS160.sch"
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
        }
      ],
      "repo": "adafruit/Adafruit-ENS160-PCB",
      "commit": "70109a844d554d955433ffba0b05acc497bd77d5",
      "boardURL": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/Adafruit%20ENS160.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/Adafruit%20ENS160.sch",
      "schematicSha256": "0cdd843ff52ebd411a2ebc346bf4506feb04d319c8259ea8f72ce8fab4af8381",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/license.txt",
      "sourceArchiveSha256": "659f75f71dbf8189f1dae45995e8c251fcf163fba5b15e900c8b8b4f7515a5fe",
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
  "adafruit-module-6431": {
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP2.1.",
        "x": -8.89,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U1.VOUT2 to this rail. CAD net: 3.3V. Physical source contact JP2.2.",
        "x": -6.35,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.3.",
        "x": -3.81,
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
        "label": "SCL/SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL/SCK. I2C serial clock / source-listed alternate function. Physical source contact JP2.4.",
        "x": -1.27,
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
        "label": "SDO/ADR",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SDO/ADR. Physical source contact JP2.5.",
        "x": 1.27,
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
        "label": "SDA/MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA/MOSI. I2C serial data / source-listed alternate function. Physical source contact JP2.6.",
        "x": 3.81,
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
        "label": "!CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !CS. Physical source contact JP2.7.",
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "!INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: !INT. Physical source contact JP2.8.",
        "x": 8.89,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.7\" y=\"-1.446\" width=\"3.4\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.418\" y=\"-4.575\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.53\" y=\"-0.937\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.842\" y=\"2.475\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.328\" y=\"-0.592\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-4.089\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.794\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.994\" y=\"1.93\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.353\" y=\"-0.0766\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5498\" y=\"-3.8988\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.445\" y=\"-1.143\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit ENS161 MOX Gas Sensor rev A.brd",
      "boardSha256": "731db81bfcc5a915dea7606028366261cbf5855fd272a9a2fee70fd3790a2693",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP2.2",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT2",
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
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "VDDIO",
              "direction": "pwr"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ENS161-MOX-Gas-Sensor-PCB/Adafruit ENS161 MOX Gas Sensor rev A.sch"
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
        }
      ],
      "repo": "adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB",
      "commit": "e86ce34b208d4d83c8f4cb945312f6c976704c81",
      "boardURL": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/Adafruit%20ENS161%20MOX%20Gas%20Sensor%20rev%20A.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/Adafruit%20ENS161%20MOX%20Gas%20Sensor%20rev%20A.sch",
      "schematicSha256": "4b32769038e3bb080368273326939ce5ba45a39559d4698e8462c66192e183ce",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/license.txt",
      "sourceArchiveSha256": "7c50c07012dd8b8e42e6f82b657d61a6ac4605f41ecc1098112351b234458fc6",
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
  "adafruit-module-3709": {
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 6.35,
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
        "x": -2.54,
        "y": 6.35,
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
        "x": 0,
        "y": 6.35,
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
        "x": 2.54,
        "y": 6.35,
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
        "x": 5.08,
        "y": 6.35,
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
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.3\" y=\"-1.3\" width=\"2.6\" height=\"2.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-1.177\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-4.75\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.61\" y=\"-3.099\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "SGP30 Rev D.brd",
      "boardSha256": "03095d305f77e73aa1e0f05e18e6ec62ccbb897cbb0e3663fc613c40cb143ec9",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$28",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$29",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$31",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SGP30-PCB",
      "commit": "7050ebded47a6c29e98e50ed1329a57262b66f66",
      "boardURL": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/SGP30%20Rev%20D.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/SGP30%20Rev%20D.sch",
      "schematicSha256": "e1b2a651918ce6b125fb6a60b236d9bddf2998dda9a3b86bc966c162a70c694d",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/license.txt",
      "sourceArchiveSha256": "ace9468f14920e0d33eaaab99e1beb58eb0497d241bdfd96c034d9d0712924b3",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant SGP30 Rev D.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
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
