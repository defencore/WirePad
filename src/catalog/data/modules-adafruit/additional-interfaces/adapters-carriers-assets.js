// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-2267": {
    "contacts": [
      {
        "id": "x1-vbus",
        "number": "X1.VBUS",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X1.VBUS.",
        "x": 3.5,
        "y": 15.807,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-d-",
        "number": "X1.D-",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Source connector symbol functions: D-. Physical source contact X1.D-.",
        "x": 1,
        "y": 15.807,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-dplus",
        "number": "X1.D+",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$8. Source connector symbol functions: D+. Physical source contact X1.D+.",
        "x": -1,
        "y": 15.807,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-gnd",
        "number": "X1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND.",
        "x": -3.5,
        "y": 15.807,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact TP1.P$1.",
        "x": 6.477,
        "y": -10.414,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP2.P$1.",
        "x": 6.477,
        "y": -12.954,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact TP3.P$1.",
        "x": 6.477,
        "y": -15.494,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact TP4.P$1.",
        "x": 6.477,
        "y": -18.034,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.0\" y=\"16.729\" width=\"12.0\" height=\"18.7\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.64\" y=\"-19.387\" width=\"10.2\" height=\"18.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.83\" y=\"3.385\" width=\"3.5\" height=\"7.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.222\" y=\"4.731\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.3326\" y=\"-5.529\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8026\" y=\"11.2532\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.425\" y=\"-15.053\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.918\" y=\"3.139\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.552\" y=\"-9.592\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.14\" y=\"3.139\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.84\" y=\"-13.235\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.833\" y=\"7.239\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.223\" y=\"-0.3933\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.096\" y=\"-7.899\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.096\" y=\"-11.455\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.055\" y=\"7.239\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.248\" y=\"13.3223\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.381\" y=\"2.007\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.4892\" y=\"12.3956\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.969\" y=\"0.229\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.651\" y=\"0.229\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.969\" y=\"-18.821\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.969\" y=\"-16.916\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-8.088\" y=\"-7.175\" width=\"5.0\" height=\"11.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Bluefruit LE USB Friend Rev I.brd",
      "boardSha256": "1d5c155fc39b3463fca66dd1945599dbcf32c71bcf675fa7d7d3232e0b7075d1",
      "sourceBounds": [
        0,
        0,
        17.78,
        40.894
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
          "number": "TP3.P$1",
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
              "part": "U1",
              "pin": "SWCLK",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/Adafruit Bluefruit LE USB Friend Rev I.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [
          "X1.MNT1",
          "X1.MNT2"
        ],
        "sourceAliasEvidence": [
          {
            "number": "X1.D-",
            "sourceNet": "N$1",
            "label": "D-",
            "sourceConnectorPins": [
              {
                "part": "X1",
                "pin": "D-",
                "direction": "io"
              }
            ]
          },
          {
            "number": "X1.D+",
            "sourceNet": "N$8",
            "label": "D+",
            "sourceConnectorPins": [
              {
                "part": "X1",
                "pin": "D+",
                "direction": "io"
              }
            ]
          }
        ],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [
        {
          "number": "X1.D-",
          "sourceNet": "N$1",
          "label": "D-",
          "sourceConnectorPins": [
            {
              "part": "X1",
              "pin": "D-",
              "direction": "io"
            }
          ]
        },
        {
          "number": "X1.D+",
          "sourceNet": "N$8",
          "label": "D+",
          "sourceConnectorPins": [
            {
              "part": "X1",
              "pin": "D+",
              "direction": "io"
            }
          ]
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB",
      "commit": "bb6108b9a9eb952f4e8514530771253a16800d14",
      "boardURL": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/Adafruit%20Bluefruit%20LE%20USB%20Friend%20Rev%20I.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/Adafruit%20Bluefruit%20LE%20USB%20Friend%20Rev%20I.sch",
      "schematicSha256": "d6d59693bbd89aeeb4b86b207a2fc5c1272e7ccb90e87861330935e83024a3b7",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/license.txt",
      "sourceArchiveSha256": "639916baf88aaf687a447a7e26e9e4ab466ec975f78ae587b2dfed0be2441243",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "partIdentityReview": "Exact nRF51822-based USB Friend source revision; the commercial feed title truncates the MCU text to nRF5182."
    }
  },
  "adafruit-module-292": {
    "contacts": [
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "CLOCK_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLOCK_LV. Physical source contact J1.3.",
        "x": 15.494,
        "y": 7.3025,
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
        "id": "j1-4",
        "number": "J1.4",
        "label": "DATA_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA_LV. Physical source contact J1.4.",
        "x": 11.994,
        "y": 7.3025,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact J1.2.",
        "x": 18.994,
        "y": 7.3025,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact J1.1.",
        "x": 22.494,
        "y": 7.3025,
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
        "id": "j1-5",
        "number": "J1.5",
        "label": "LATCH",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LATCH. Physical source contact J1.5.",
        "x": 8.494,
        "y": 7.3025,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 16.764,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP1.2.",
        "x": 14.224,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "CONTRAST",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CONTRAST. Physical source contact JP1.3.",
        "x": 11.684,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "RS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RS. Physical source contact JP1.4.",
        "x": 9.144,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.5.",
        "x": 6.604,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "E",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: E. Physical source contact JP1.6.",
        "x": 4.064,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.7.",
        "x": 1.524,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.8.",
        "x": -1.016,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.9.",
        "x": -3.556,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.10.",
        "x": -6.096,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "DB4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DB4. Physical source contact JP1.11.",
        "x": -8.636,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "DB5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DB5. Physical source contact JP1.12.",
        "x": -11.176,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "DB6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DB6. Physical source contact JP1.13.",
        "x": -13.716,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "DB7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DB7. Physical source contact JP1.14.",
        "x": -16.256,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "5.0V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 5.0V. Physical source contact JP1.15.",
        "x": -18.796,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "LEDK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LEDK. Physical source contact JP1.16.",
        "x": -21.336,
        "y": -8.6233,
        "size": [
          1.524,
          3.048
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": -3.167,
        "y": 5.6775,
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
        "label": "DATA_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA_LV. Physical source contact CONN3.3.",
        "x": -2.167,
        "y": 5.6775,
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
        "x": -4.167,
        "y": 5.6775,
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
        "label": "CLOCK_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLOCK_LV. Physical source contact CONN3.4.",
        "x": -1.167,
        "y": 5.6775,
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
        "x": -5.467,
        "y": 9.5775,
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
        "x": 0.133,
        "y": 9.5775,
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
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": 19.965,
        "y": -2.6115,
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
        "label": "DATA_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA_LV. Physical source contact CONN4.3.",
        "x": 19.965,
        "y": -3.6115,
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
        "x": 19.965,
        "y": -1.6115,
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
        "label": "CLOCK_LV",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CLOCK_LV. Physical source contact CONN4.4.",
        "x": 19.965,
        "y": -4.6115,
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
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": 23.865,
        "y": -0.3115,
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
        "x": 23.865,
        "y": -5.9115,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "A2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A2. Physical source contact TP1.P$1.",
        "x": -16.129,
        "y": 8.0645,
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
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact TP2.P$1.",
        "x": -12.192,
        "y": 8.0645,
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
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact TP3.P$1.",
        "x": -8.128,
        "y": 8.0645,
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
        "label": "CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CS. Physical source contact TP4.P$1.",
        "x": 3.429,
        "y": 5.7785,
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
    "artwork": "<rect x=\"6.494\" y=\"3.9025\" width=\"18.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.606\" y=\"-9.8933\" width=\"40.64\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.654\" y=\"-3.0015\" width=\"11.684\" height=\"7.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-2.6543\" width=\"10.16\" height=\"3.9116\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.265\" y=\"-6.2115\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.667\" y=\"5.9775\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.74\" y=\"1.4695\" width=\"4.3\" height=\"4.3\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.228\" y=\"-3.3605\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.173\" y=\"-5.3925\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"4.5085\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.779\" y=\"7.0485\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.526\" y=\"7.0485\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.589\" y=\"7.0485\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.256\" y=\"0.0635\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.445\" y=\"-4.8155\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.2615\" y=\"-5.705\" width=\"2.2\" height=\"1.25\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.012\" y=\"-4.8465\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.603\" y=\"1.0415\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.747\" y=\"-1.6125\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.547\" y=\"-3.7465\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.256\" y=\"-1.9935\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2\" y=\"7.0105\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.231\" y=\"-5.3725\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.394\" y=\"1.3585\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.282\" y=\"1.4855\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit I2C SPI LCD STEMMA backpack.brd",
      "boardSha256": "8d9677aecc50153dcd94a62a1b2649388e1a6c913500b66d2ba85b8342f11f1b",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.225
      ],
      "selectedConnectors": [
        "J1",
        "JP1",
        "CONN3",
        "CONN4",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB",
      "commit": "f5c03f2f3004402e60c7103068c4016b3c749bdf",
      "boardURL": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/Adafruit%20I2C%20SPI%20LCD%20STEMMA%20backpack.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/Adafruit%20I2C%20SPI%20LCD%20STEMMA%20backpack.sch",
      "schematicSha256": "0d8541f365c4fea7a276bf6d732a669ca5e1dff6787e6275293f508f16decb51",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/license.txt",
      "sourceArchiveSha256": "004f5e58ff2b09141175aaaca925dce14bd4837cc4c8a2857b9d072a5ee5f564",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": []
    }
  },
  "adafruit-module-5420": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": 28.8714,
        "y": 10.1567,
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
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X1.2.",
        "x": 28.8714,
        "y": 8.1567,
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
        "id": "x1-nc1",
        "number": "X1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC1.",
        "x": 23.6714,
        "y": 12.5567,
        "size": [
          3.4,
          1.6
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
        "x": 23.6714,
        "y": 5.7567,
        "size": [
          3.4,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-m3",
        "number": "X4.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M3.",
        "x": 29.8866,
        "y": 23.4208,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m4",
        "number": "X4.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M4.",
        "x": 29.8866,
        "y": 14.7808,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m2",
        "number": "X4.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M2.",
        "x": 25.7066,
        "y": 14.7808,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-m1",
        "number": "X4.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.M1.",
        "x": 25.7066,
        "y": 23.4208,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X4",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x4-a1b12",
        "number": "X4.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.A1B12.",
        "x": 25.1316,
        "y": 22.3008,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a4b9",
        "number": "X4.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X4.A4B9.",
        "x": 25.1316,
        "y": 21.5008,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b8",
        "number": "X4.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.B8.",
        "x": 25.1316,
        "y": 20.8508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a5",
        "number": "X4.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X4.A5.",
        "x": 25.1316,
        "y": 20.3508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b7",
        "number": "X4.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X4.B7.",
        "x": 25.1316,
        "y": 19.8508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a6",
        "number": "X4.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X4.A6.",
        "x": 25.1316,
        "y": 19.3508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a7",
        "number": "X4.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X4.A7.",
        "x": 25.1316,
        "y": 18.8508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b6",
        "number": "X4.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X4.B6.",
        "x": 25.1316,
        "y": 18.3508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-a8",
        "number": "X4.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X4.A8.",
        "x": 25.1316,
        "y": 17.8508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b5",
        "number": "X4.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X4.B5.",
        "x": 25.1316,
        "y": 17.3508,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b4a9",
        "number": "X4.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X4.B4A9.",
        "x": 25.1316,
        "y": 16.7008,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-b1a12",
        "number": "X4.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.B1A12.",
        "x": 25.1316,
        "y": 15.9008,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": -26.0737,
        "y": -8.12,
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
        "x": -26.0737,
        "y": -7.12,
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
        "x": -26.0737,
        "y": -9.12,
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
        "x": -26.0737,
        "y": -6.12,
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
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": -29.9737,
        "y": -10.42,
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
        "x": -29.9737,
        "y": -4.82,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "TXD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TXD0. Physical source contact JP2.1.",
        "x": 10.2362,
        "y": -17.145,
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
        "label": "RXD0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RXD0. Physical source contact JP2.2.",
        "x": 10.2362,
        "y": -19.685,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "BOOT0/SHUTTER",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOT0/SHUTTER. Physical source contact TP1.P$1.",
        "x": -19.1643,
        "y": -26.2509,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense2-1",
        "number": "SENSE2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE2.1.",
        "x": -24.3637,
        "y": -15.78,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense2-2",
        "number": "SENSE2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SENSE2.2.",
        "x": -24.3637,
        "y": -17.78,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense2-nc1",
        "number": "SENSE2.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE2.NC1.",
        "x": -29.5637,
        "y": -13.38,
        "size": [
          3.4,
          1.6
        ],
        "shape": "rect",
        "connector": "SENSE2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense2-nc2",
        "number": "SENSE2.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE2.NC2.",
        "x": -29.5637,
        "y": -22.18,
        "size": [
          3.4,
          1.6
        ],
        "shape": "rect",
        "connector": "SENSE2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense2-3",
        "number": "SENSE2.3",
        "label": "D10_JST",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D10_JST. Physical source contact SENSE2.3.",
        "x": -24.3637,
        "y": -19.78,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-1",
        "number": "SENSE1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE1.1.",
        "x": -24.2367,
        "y": 4.54,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-2",
        "number": "SENSE1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SENSE1.2.",
        "x": -24.2367,
        "y": 2.54,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-nc1",
        "number": "SENSE1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE1.NC1.",
        "x": -29.4367,
        "y": 6.94,
        "size": [
          3.4,
          1.6
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-nc2",
        "number": "SENSE1.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE1.NC2.",
        "x": -29.4367,
        "y": -1.86,
        "size": [
          3.4,
          1.6
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-3",
        "number": "SENSE1.3",
        "label": "A1_JST1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1_JST1. Physical source contact SENSE1.3.",
        "x": -24.2367,
        "y": 0.54,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact TP2.P$1.",
        "x": 6.8072,
        "y": -25.8064,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": false,
        "smd": true
      },
      {
        "id": "tp7-p-1",
        "number": "TP7.P$1",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact TP7.P$1.",
        "x": 6.8707,
        "y": -25.7429,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-p-1",
        "number": "TP8.P$1",
        "label": "BOOT0/SHUTTER",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOT0/SHUTTER. Physical source contact TP8.P$1.",
        "x": -19.1643,
        "y": -26.2509,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP3.P$1.",
        "x": -27.305,
        "y": 27.305,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP3",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP4.P$1.",
        "x": 27.305,
        "y": 27.305,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP4",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp5-p-1",
        "number": "TP5.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP5.P$1.",
        "x": -27.305,
        "y": -27.305,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP5",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "tp6-p-1",
        "number": "TP6.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP6.P$1.",
        "x": 27.305,
        "y": -27.305,
        "size": [
          4.572,
          4.572
        ],
        "shape": "circle",
        "connector": "TP6",
        "back": false,
        "drill": 4.25
      },
      {
        "id": "x3-mt1",
        "number": "X3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.MT1.",
        "x": -28.907,
        "y": 9.544,
        "size": [
          1.9,
          1.4
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-mt2",
        "number": "X3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.MT2.",
        "x": -29.807,
        "y": 22.744,
        "size": [
          1.9,
          1.4
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-cd1",
        "number": "X3.CD1",
        "label": "CARDDET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CARDDET. Physical source contact X3.CD1.",
        "x": -15.807,
        "y": 11.144,
        "size": [
          1.4,
          1.8
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-cd2",
        "number": "X3.CD2",
        "label": "CARDDET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CARDDET. Physical source contact X3.CD2.",
        "x": -15.807,
        "y": 16.763,
        "size": [
          1.4,
          1.8
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-8",
        "number": "X3.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X3.8.",
        "x": -26.007,
        "y": 10.444,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-7",
        "number": "X3.7",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact X3.7.",
        "x": -26.007,
        "y": 11.544,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-6",
        "number": "X3.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.6.",
        "x": -26.407,
        "y": 12.644,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-5",
        "number": "X3.5",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact X3.5.",
        "x": -26.007,
        "y": 13.744,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-4",
        "number": "X3.4",
        "label": "SD_VDD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SD_VDD. Physical source contact X3.4.",
        "x": -26.407,
        "y": 14.844,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-3",
        "number": "X3.3",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact X3.3.",
        "x": -26.007,
        "y": 15.944,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-2",
        "number": "X3.2",
        "label": "CARD_CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CARD_CS. Physical source contact X3.2.",
        "x": -25.607,
        "y": 17.044,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-1",
        "number": "X3.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X3.1.",
        "x": -26.007,
        "y": 18.144,
        "size": [
          1.5,
          0.7
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-sprt1",
        "number": "X2.SPRT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT1.",
        "x": -7.6,
        "y": 15.8715,
        "size": [
          2,
          4
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-sprt2",
        "number": "X2.SPRT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT2.",
        "x": 7.51,
        "y": 15.8715,
        "size": [
          2,
          4
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-1",
        "number": "X2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.1.",
        "x": -5.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact X2.2.",
        "x": -5.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-3",
        "number": "X2.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X2.3.",
        "x": -4.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-4",
        "number": "X2.4",
        "label": "2.8V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 2.8V. Physical source contact X2.4.",
        "x": -4.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-5",
        "number": "X2.5",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X2.5.",
        "x": -3.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-6",
        "number": "X2.6",
        "label": "CAM_RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAM_RST. Physical source contact X2.6.",
        "x": -3.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-7",
        "number": "X2.7",
        "label": "VSYNC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: VSYNC. Physical source contact X2.7.",
        "x": -2.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-8",
        "number": "X2.8",
        "label": "CAM_PWDN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAM_PWDN. Physical source contact X2.8.",
        "x": -2.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-9",
        "number": "X2.9",
        "label": "HSYNC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: HSYNC. Physical source contact X2.9.",
        "x": -1.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-10",
        "number": "X2.10",
        "label": "1.5V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 1.5V. Physical source contact X2.10.",
        "x": -1.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-11",
        "number": "X2.11",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact X2.11.",
        "x": -0.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-12",
        "number": "X2.12",
        "label": "DATA9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA9. Physical source contact X2.12.",
        "x": -0.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-13",
        "number": "X2.13",
        "label": "EXT_XCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EXT_XCLK. Physical source contact X2.13.",
        "x": 0.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-14",
        "number": "X2.14",
        "label": "DATA8",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA8. Physical source contact X2.14.",
        "x": 0.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-15",
        "number": "X2.15",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.15.",
        "x": 1.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-16",
        "number": "X2.16",
        "label": "DATA7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA7. Physical source contact X2.16.",
        "x": 1.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-17",
        "number": "X2.17",
        "label": "PCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PCLK. Physical source contact X2.17.",
        "x": 2.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-18",
        "number": "X2.18",
        "label": "DATA6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA6. Physical source contact X2.18.",
        "x": 2.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-19",
        "number": "X2.19",
        "label": "DATA2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA2. Physical source contact X2.19.",
        "x": 3.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-20",
        "number": "X2.20",
        "label": "DATA5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA5. Physical source contact X2.20.",
        "x": 3.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-21",
        "number": "X2.21",
        "label": "DATA3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA3. Physical source contact X2.21.",
        "x": 4.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-22",
        "number": "X2.22",
        "label": "DATA4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA4. Physical source contact X2.22.",
        "x": 4.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-23",
        "number": "X2.23",
        "label": "DATA1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DATA1. Physical source contact X2.23.",
        "x": 5.25,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-24",
        "number": "X2.24",
        "label": "DATA0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA0. Physical source contact X2.24.",
        "x": 5.75,
        "y": 18.0615,
        "size": [
          0.275,
          1.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-10.1092\" y=\"-31.2166\" width=\"15.6464\" height=\"22.4028\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1\" y=\"-3.9385\" width=\"14.2\" height=\"21.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.737\" y=\"9.094\" width=\"20.47\" height=\"14.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-31.0637\" y=\"-22.78\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-30.9367\" y=\"-2.46\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.1366\" y=\"14.6308\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.1714\" y=\"5.1567\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.2309\" y=\"-32.7593\" width=\"6.8\" height=\"4.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-30.6737\" y=\"-10.62\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.6092\" y=\"-31.6354\" width=\"7.0\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.0453\" y=\"-32.3339\" width=\"7.0\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.3505\" y=\"-0.857\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.5529\" y=\"1.2083\" width=\"3.4\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.639\" y=\"4.831\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.886\" y=\"-5.21\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.3327\" y=\"-12.4841\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.399\" y=\"-15.748\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.1085\" y=\"-15.2525\" width=\"2.9\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.375\" y=\"0.151\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5593\" y=\"19.3929\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.0579\" y=\"1.2202\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.7227\" y=\"-22.9987\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.7227\" y=\"-19.4427\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.9085\" y=\"-10.6529\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.9476\" y=\"-22.5044\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.987\" y=\"-7.4017\" width=\"1.3208\" height=\"3.1448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.5449\" y=\"-3.2385\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.0354\" y=\"26.6446\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7573\" y=\"-31.253\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.6677\" y=\"-18.0561\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.4772\" y=\"3.5974\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.5491\" y=\"-0.7762\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"30.1054\" y=\"5.3722\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.1966\" y=\"-30.7847\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.6547\" y=\"6.5548\" width=\"1.105208\" height=\"1.105208\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.9498\" y=\"-11.2141\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.9592\" y=\"-21.8059\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.9211\" y=\"-18.1737\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.8525\" y=\"-20.828\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.5589\" y=\"21.3233\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.241\" y=\"23.851\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.4659\" y=\"-11.8872\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.9602\" y=\"-24.2951\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.9475\" y=\"-20.828\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.0552\" y=\"-24.2951\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.0425\" y=\"-20.828\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.6122\" y=\"-9.1821\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.8652\" y=\"-24.2951\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.2794\" y=\"22.5683\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.0703\" y=\"1.8279\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.3562\" y=\"1.3081\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.7081\" y=\"-14.3252\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.4893\" y=\"-6.3881\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.4794\" y=\"14.9352\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.8251\" y=\"-21.7297\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.787\" y=\"-18.161\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.5988\" y=\"1.905\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.2278\" y=\"-14.2744\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.2343\" y=\"0.6346\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.931\" y=\"2.743\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.931\" y=\"1.219\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.6013\" y=\"-25.9846\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.9884\" y=\"-25.9973\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.0735\" y=\"-18.8978\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.0735\" y=\"-17.3227\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7753\" y=\"-6.4266\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.518\" y=\"-8.992\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.346\" y=\"3.759\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.4699\" y=\"-3.0103\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.4572\" y=\"-6.1599\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.9005\" y=\"-23.253\" width=\"34.7\" height=\"31.52\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.585\" y=\"9.585\" width=\"7.5\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.490534\" y=\"-9.885534\" width=\"7.071068\" height=\"7.071068\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.410534\" y=\"-4.805534\" width=\"7.071068\" height=\"7.071068\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.410534\" y=\"-14.965534\" width=\"7.071068\" height=\"7.071068\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.330534\" y=\"-9.885534\" width=\"7.071068\" height=\"7.071068\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.86\" y=\"10.335\" width=\"6.0\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.81\" y=\"10.335\" width=\"6.0\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7295\" y=\"-20.831\" width=\"1.9\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MEMENTO Camera Board.brd",
      "boardSha256": "400fc72d1b9736b6bd3cadc6d250c345520eaf4e119c49d4a954262eca158644",
      "sourceBounds": [
        0,
        0,
        63.5,
        63.5
      ],
      "selectedConnectors": [
        "X1",
        "X4",
        "CONN1",
        "JP2",
        "TP1",
        "SENSE2",
        "SENSE1",
        "TP2",
        "TP7",
        "TP8",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "X3",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "X2.24",
          "sourceNet": "DATA0",
          "before": {
            "type": "unspecified",
            "label": "DATA0"
          },
          "after": {
            "type": "passive",
            "label": "DATA0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MEMENTO-PCB/Adafruit MEMENTO Camera Board.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-MEMENTO-PCB",
      "commit": "8f1e07b4baa4e43749793e3ebebd12005a5a8f96",
      "boardURL": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/Adafruit%20MEMENTO%20Camera%20Board.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/Adafruit%20MEMENTO%20Camera%20Board.sch",
      "schematicSha256": "0b9e68d8ab3eb398210ecd311032c230e65003167f870c7bfbd447a1c43b6c79",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/license.txt",
      "sourceArchiveSha256": "7a4d975157c7ad87003d65ad02e15beb2888853be01cc6e1f0fad4496a51c94e",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "finalPortInventoryReview": {
        "addedRefs": [
          "X2"
        ],
        "addedNumbers": [
          "X2.SPRT1",
          "X2.SPRT2",
          "X2.1",
          "X2.2",
          "X2.3",
          "X2.4",
          "X2.5",
          "X2.6",
          "X2.7",
          "X2.8",
          "X2.9",
          "X2.10",
          "X2.11",
          "X2.12",
          "X2.13",
          "X2.14",
          "X2.15",
          "X2.16",
          "X2.17",
          "X2.18",
          "X2.19",
          "X2.20",
          "X2.21",
          "X2.22",
          "X2.23",
          "X2.24"
        ],
        "excludedUnnettedMounts": [],
        "symbolFunctionEvidence": [],
        "sourceWarnings": [
          "X2.24: unresolved electrical role on DATA0."
        ],
        "unresolved": []
      }
    }
  },
  "adafruit-module-3632": {
    "contacts": [
      {
        "id": "ms1-p-1",
        "number": "MS1.P$1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$1.",
        "x": -22.86,
        "y": -8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-p-2",
        "number": "MS1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$2.",
        "x": -22.86,
        "y": 8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-28",
        "number": "MS1.28",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.28.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-27",
        "number": "MS1.27",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.27.",
        "x": -6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-26",
        "number": "MS1.26",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.26.",
        "x": -3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-25",
        "number": "MS1.25",
        "label": "GPIO13",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8. Source connector symbol functions: GPIO13. Physical source contact MS1.25.",
        "x": -1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-24",
        "number": "MS1.24",
        "label": "GPIO12",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$7. Source connector symbol functions: GPIO12. Physical source contact MS1.24.",
        "x": 1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-23",
        "number": "MS1.23",
        "label": "GPIO11",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$6. Source connector symbol functions: GPIO11. Physical source contact MS1.23.",
        "x": 3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-22",
        "number": "MS1.22",
        "label": "GPIO10",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$4. Source connector symbol functions: GPIO10. Physical source contact MS1.22.",
        "x": 6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-21",
        "number": "MS1.21",
        "label": "GPIO9",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$3. Source connector symbol functions: GPIO9. Physical source contact MS1.21.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-20",
        "number": "MS1.20",
        "label": "GPIO6",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2. Source connector symbol functions: GPIO6. Physical source contact MS1.20.",
        "x": 11.43,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-19",
        "number": "MS1.19",
        "label": "GPIO5",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1. Source connector symbol functions: GPIO5. Physical source contact MS1.19.",
        "x": 13.97,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-18",
        "number": "MS1.18",
        "label": "PA23_SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA23_SCL. I2C serial clock / source-listed alternate function. Physical source contact MS1.18.",
        "x": 16.51,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-17",
        "number": "MS1.17",
        "label": "PA22_SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA22_SDA. I2C serial data / source-listed alternate function. Physical source contact MS1.17.",
        "x": 19.05,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-5",
        "number": "MS1.5",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.5.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-6",
        "number": "MS1.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.6.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-7",
        "number": "MS1.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.7.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-8",
        "number": "MS1.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.8.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-9",
        "number": "MS1.9",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.9.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-10",
        "number": "MS1.10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.10.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-11",
        "number": "MS1.11",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.11.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-12",
        "number": "MS1.12",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.12.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-13",
        "number": "MS1.13",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.13.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-14",
        "number": "MS1.14",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.14.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-15",
        "number": "MS1.15",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.15.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-16",
        "number": "MS1.16",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.16.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-4",
        "number": "MS1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS1.4.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-3",
        "number": "MS1.3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.3.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-2",
        "number": "MS1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact MS1.2.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-1",
        "number": "MS1.1",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact MS1.1.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact TP1.P$1.",
        "x": -5.842,
        "y": 3.048,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact TP2.P$1.",
        "x": -8.636,
        "y": 3.048,
        "size": [
          2,
          2
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-22.97\" y=\"-9.0\" width=\"18.0\" height=\"18.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.239\" y=\"-3.3\" width=\"6.0\" height=\"6.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.844\" y=\"-3.3\" width=\"6.0\" height=\"6.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.178\" y=\"-8.588\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.178\" y=\"2.588\" width=\"6.6\" height=\"6.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.508\" y=\"2.953\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.735\" y=\"-8.5104\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.735\" y=\"-2.6684\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.012\" y=\"-7.56\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.581\" y=\"-5.766\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.964\" y=\"-6.909\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.964\" y=\"-5.385\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.369\" y=\"1.93\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.794\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.254\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.286\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.334\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.191\" y=\"0.508\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.191\" y=\"2.794\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.874\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.954\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.414\" y=\"-9.017\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Joypad FeatherWing rev C.brd",
      "boardSha256": "7f6a7f3a1d6a4b3db19cb0c323af9e3b0a131aad40bf5828af7ca086ab4913a6",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "MS1",
        "TP1",
        "TP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "TP1.P$1",
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
              "part": "IC1",
              "pin": "PA30/I2/SECOM1.0+2/SWCLK",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Joy-Featherwing-PCB/Joypad FeatherWing rev C.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "MS1.25",
            "sourceNet": "N$8",
            "label": "GPIO13",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO13",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.24",
            "sourceNet": "N$7",
            "label": "GPIO12",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO12",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.23",
            "sourceNet": "N$6",
            "label": "GPIO11",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO11",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.22",
            "sourceNet": "N$4",
            "label": "GPIO10",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO10",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.21",
            "sourceNet": "N$3",
            "label": "GPIO9",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO9",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.20",
            "sourceNet": "N$2",
            "label": "GPIO6",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO6",
                "direction": "io"
              }
            ]
          },
          {
            "number": "MS1.19",
            "sourceNet": "N$1",
            "label": "GPIO5",
            "sourceConnectorPins": [
              {
                "part": "MS1",
                "pin": "GPIO5",
                "direction": "io"
              }
            ]
          }
        ],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [
        {
          "number": "MS1.25",
          "sourceNet": "N$8",
          "label": "GPIO13",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO13",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.24",
          "sourceNet": "N$7",
          "label": "GPIO12",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO12",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.23",
          "sourceNet": "N$6",
          "label": "GPIO11",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO11",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.22",
          "sourceNet": "N$4",
          "label": "GPIO10",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO10",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.21",
          "sourceNet": "N$3",
          "label": "GPIO9",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO9",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.20",
          "sourceNet": "N$2",
          "label": "GPIO6",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO6",
              "direction": "io"
            }
          ]
        },
        {
          "number": "MS1.19",
          "sourceNet": "N$1",
          "label": "GPIO5",
          "sourceConnectorPins": [
            {
              "part": "MS1",
              "pin": "GPIO5",
              "direction": "io"
            }
          ]
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Joy-Featherwing-PCB",
      "commit": "45f843d490a5968f4642ff970e8e867918c80b8d",
      "boardURL": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/Joypad%20FeatherWing%20rev%20C.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/Joypad%20FeatherWing%20rev%20C.sch",
      "schematicSha256": "aebb53b73b550e6e03662131dd6cddc9afeac961711f17b11987addcee130ec5",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/license.txt",
      "sourceArchiveSha256": "9f1e7ebec8ad1a818931be9be954ea08c9931b2ba37406df350db36e294222f4",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "MS1.25: autogenerated net N$8 requires printed/function label review.",
        "MS1.24: autogenerated net N$7 requires printed/function label review.",
        "MS1.23: autogenerated net N$6 requires printed/function label review.",
        "MS1.22: autogenerated net N$4 requires printed/function label review.",
        "MS1.21: autogenerated net N$3 requires printed/function label review.",
        "MS1.20: autogenerated net N$2 requires printed/function label review.",
        "MS1.19: autogenerated net N$1 requires printed/function label review."
      ]
    }
  },
  "adafruit-module-6001": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact JP2.1.",
        "x": 5.08,
        "y": 4.572,
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
        "x": 2.54,
        "y": 4.572,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP2.3.",
        "x": 0,
        "y": 4.572,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP2.4.",
        "x": -2.54,
        "y": 4.572,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP2.5.",
        "x": -5.08,
        "y": 4.572,
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
        "id": "x1-mnt1",
        "number": "X1.MNT1",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact X1.MNT1.",
        "x": -5.85,
        "y": -4.356,
        "size": [
          2.2,
          4.4
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x1-mnt2",
        "number": "X1.MNT2",
        "label": "SHIELD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SHIELD. Physical source contact X1.MNT2.",
        "x": 5.85,
        "y": -4.356,
        "size": [
          2,
          4
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x1-dplus",
        "number": "X1.D+",
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact X1.D+.",
        "x": 1,
        "y": -2.586,
        "size": [
          1.2,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-d-",
        "number": "X1.D-",
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact X1.D-.",
        "x": -1,
        "y": -2.586,
        "size": [
          1.2,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-vbus",
        "number": "X1.VBUS",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.VBUS.",
        "x": -3.5,
        "y": -2.586,
        "size": [
          1.2,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-gnd",
        "number": "X1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND.",
        "x": 3.5,
        "y": -2.586,
        "size": [
          1.2,
          2
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Reversible USB Type A Plug Connector Breakout.brd",
      "boardSha256": "8c352f9ac4e6f12a3f703ecfbcf2979145967388b0b76d5e04d6398b7fad49a3",
      "sourceBounds": [
        0,
        0,
        15.24,
        14.224
      ],
      "selectedConnectors": [
        "JP2",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP2.1 passive pass-through verified from schematic endpoints.",
        "JP2.3 passive pass-through verified from schematic endpoints.",
        "JP2.4 passive pass-through verified from schematic endpoints.",
        "X1.MNT1 passive pass-through verified from schematic endpoints.",
        "X1.MNT2 passive pass-through verified from schematic endpoints.",
        "X1.D+ passive pass-through verified from schematic endpoints.",
        "X1.D- passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP2.1",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        },
        {
          "number": "JP2.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        },
        {
          "number": "X1.MNT1",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        },
        {
          "number": "X1.MNT2",
          "sourceNet": "SHIELD",
          "before": {
            "type": "unspecified",
            "label": "SHIELD"
          },
          "after": {
            "type": "passive",
            "label": "SHIELD"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        },
        {
          "number": "X1.D+",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        },
        {
          "number": "X1.D-",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/Adafruit Reversible USB Type A Plug Connector Breakout.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB",
      "commit": "61c86cfbb89a45a97a5046854997d486fac109d2",
      "boardURL": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/Adafruit%20Reversible%20USB%20Type%20A%20Plug%20Connector%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/Adafruit%20Reversible%20USB%20Type%20A%20Plug%20Connector%20Breakout.sch",
      "schematicSha256": "b3e07330288af427af593c6443a5c4983b10d7878515bfe80446b9ccd611d563",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/license.txt",
      "sourceArchiveSha256": "4186e4bc263a4ddc9bc99cbeb97041970c793ab77e038b1281f3287379cf6c3c",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP2.1: unresolved electrical role on SHIELD.",
        "JP2.3: unresolved electrical role on D+.",
        "JP2.4: unresolved electrical role on D-.",
        "X1.MNT1: unresolved electrical role on SHIELD.",
        "X1.MNT2: unresolved electrical role on SHIELD.",
        "X1.D+: unresolved electrical role on D+.",
        "X1.D-: unresolved electrical role on D-."
      ]
    }
  },
  "adafruit-module-6323": {
    "contacts": [
      {
        "id": "x1-m3",
        "number": "X1.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.M3.",
        "x": -5.62,
        "y": 4.826,
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
        "x": 5.62,
        "y": 4.826,
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
        "x": 5.62,
        "y": 0.826,
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
        "x": -5.62,
        "y": 0.826,
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
        "x": -3.2,
        "y": -0.299,
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
        "x": -2.4,
        "y": -0.299,
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.B8.",
        "x": -1.75,
        "y": -0.299,
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
        "x": -1.25,
        "y": -0.299,
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
        "x": -0.75,
        "y": -0.299,
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
        "x": -0.25,
        "y": -0.299,
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
        "x": 0.25,
        "y": -0.299,
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
        "x": 0.75,
        "y": -0.299,
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X1.A8.",
        "x": 1.25,
        "y": -0.299,
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
        "x": 1.75,
        "y": -0.299,
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
        "x": 2.4,
        "y": -0.299,
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
        "x": 3.2,
        "y": -0.299,
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
        "id": "x2-mnt1",
        "number": "X2.MNT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.MNT1.",
        "x": 4.3,
        "y": -4.826,
        "size": [
          1.25,
          2.5
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.55
      },
      {
        "id": "x2-mnt2",
        "number": "X2.MNT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.MNT2.",
        "x": -4.3,
        "y": -4.826,
        "size": [
          1.25,
          2.5
        ],
        "shape": "oval",
        "connector": "X2",
        "back": false,
        "drill": 0.55
      },
      {
        "id": "x2-b12",
        "number": "X2.B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.B12.",
        "x": -0.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a4",
        "number": "X2.A4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.A4.",
        "x": -1.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a3",
        "number": "X2.A3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.A3.",
        "x": -1.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a2",
        "number": "X2.A2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.A2.",
        "x": -2.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a1",
        "number": "X2.A1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.A1.",
        "x": -2.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b11",
        "number": "X2.B11",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.B11.",
        "x": -0.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a5",
        "number": "X2.A5",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.A5.",
        "x": 1.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b10",
        "number": "X2.B10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.B10.",
        "x": 0.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-b9",
        "number": "X2.B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.B9.",
        "x": 0.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
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
        "x": 1.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
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
        "x": 2.25,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-a12",
        "number": "X2.A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.A12.",
        "x": 2.75,
        "y": -4.826,
        "size": [
          0.275,
          0.8
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-p-1",
        "number": "X2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.P$1.",
        "x": -3.5,
        "y": -5.326,
        "size": [
          0.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-p-2",
        "number": "X2.P$2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.P$2.",
        "x": 3.5,
        "y": -5.326,
        "size": [
          0.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.52\" y=\"0.226\" width=\"9.04\" height=\"6.7\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.48\" y=\"-2.7685\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7115\" y=\"-2.261\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5015\" y=\"-2.324\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.769\" y=\"-2.1465\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.0325\" y=\"-3.048\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Type-C CC Resistor Fixer.brd",
      "boardSha256": "48b671c9698bb90a4eca2751f28c6b6f3d81b2fc7b88543d4696f5bc33a38900",
      "sourceBounds": [
        0,
        0,
        13.97,
        12.7
      ],
      "selectedConnectors": [
        "X1",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "X1.B7 passive pass-through verified from schematic endpoints.",
        "X1.A6 passive pass-through verified from schematic endpoints.",
        "X1.A7 passive pass-through verified from schematic endpoints.",
        "X1.B6 passive pass-through verified from schematic endpoints.",
        "X2.A6 passive pass-through verified from schematic endpoints.",
        "X2.A7 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/Adafruit USB Type-C CC Resistor Fixer.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB",
      "commit": "7ab085193a5180f3ebc9a4a0971910ae7ee4553b",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/Adafruit%20USB%20Type-C%20CC%20Resistor%20Fixer.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/Adafruit%20USB%20Type-C%20CC%20Resistor%20Fixer.sch",
      "schematicSha256": "d6effd0c45389c6c3eba1c698c5d1e2a451d2d2a53d30fc6fa4300b8e6738c23",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/license.txt",
      "sourceArchiveSha256": "43e34ec2d99d73bef32ae1b4a338d5c0e8acda6d565f48422ac88435c34ab74b",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X1.B7: unresolved electrical role on D-.",
        "X1.A6: unresolved electrical role on D+.",
        "X1.A7: unresolved electrical role on D-.",
        "X1.B6: unresolved electrical role on D+.",
        "X2.A6: unresolved electrical role on D+.",
        "X2.A7: unresolved electrical role on D-."
      ]
    }
  },
  "adafruit-module-5993": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 8.89,
        "y": 5.08,
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
        "y": 5.08,
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
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact JP1.3.",
        "x": 3.81,
        "y": 5.08,
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
        "y": 5.08,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP1.5.",
        "x": -1.27,
        "y": 5.08,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP1.6.",
        "x": -3.81,
        "y": 5.08,
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
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact JP1.7.",
        "x": -6.35,
        "y": 5.08,
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
        "y": 5.08,
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
        "id": "x1-p-1",
        "number": "X1.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.P$1.",
        "x": 4.225,
        "y": -2.02,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-p-2",
        "number": "X1.P$2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.P$2.",
        "x": 4.225,
        "y": 2.02,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-p-3",
        "number": "X1.P$3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.P$3.",
        "x": -4.225,
        "y": -2.02,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-p-4",
        "number": "X1.P$4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.P$4.",
        "x": -4.225,
        "y": 2.02,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-a4",
        "number": "X1.A4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.A4.",
        "x": 2.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": 1.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": 0.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": -0.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": -1.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-a9",
        "number": "X1.A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.A9.",
        "x": -2.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": 2.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": 1.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": 0.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": -0.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": -1.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b4",
        "number": "X1.B4",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X1.B4.",
        "x": -2.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b12",
        "number": "X1.B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.B12.",
        "x": 3.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": 3.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-b1",
        "number": "X1.B1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.B1.",
        "x": -3.5,
        "y": -1.22,
        "size": [
          0.55,
          1.6
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
        "x": -3.5,
        "y": 1.22,
        "size": [
          0.55,
          1.6
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
        "x": 8.89,
        "y": -5.08,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP2.2.",
        "x": 6.35,
        "y": -5.08,
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
        "label": "SBU1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU1. Physical source contact JP2.3.",
        "x": 3.81,
        "y": -5.08,
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
        "x": 1.27,
        "y": -5.08,
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
        "label": "D+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D+. Physical source contact JP2.5.",
        "x": -1.27,
        "y": -5.08,
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
        "label": "D-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D-. Physical source contact JP2.6.",
        "x": -3.81,
        "y": -5.08,
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
        "label": "SBU2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SBU2. Physical source contact JP2.7.",
        "x": -6.35,
        "y": -5.08,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact JP2.8.",
        "x": -8.89,
        "y": -5.08,
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
    "artwork": "<rect x=\"-6.0\" y=\"-2.42\" width=\"12.0\" height=\"4.84\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.407\" y=\"1.613\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.627\" y=\"2.489\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Type C Vertical Breakout.brd",
      "boardSha256": "da6725da602cbdd4b940fde1702d3a8eeee2d3dcbc99dee6374f19a15fb376e5",
      "sourceBounds": [
        0,
        0,
        30.48,
        15.24
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "X1.A6 passive pass-through verified from schematic endpoints.",
        "X1.A7 passive pass-through verified from schematic endpoints.",
        "X1.A8 passive pass-through verified from schematic endpoints.",
        "X1.B8 passive pass-through verified from schematic endpoints.",
        "X1.B7 passive pass-through verified from schematic endpoints.",
        "X1.B6 passive pass-through verified from schematic endpoints.",
        "JP2.3 passive pass-through verified from schematic endpoints.",
        "JP2.5 passive pass-through verified from schematic endpoints.",
        "JP2.6 passive pass-through verified from schematic endpoints.",
        "JP2.7 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "JP1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP1.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP2.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP2.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        },
        {
          "number": "JP2.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Type-C-Vertical-Breakout-PCB/Adafruit USB Type C Vertical Breakout.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB",
      "commit": "412fb33dba25c7b84994b1aa90161a8e67a379b2",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/Adafruit%20USB%20Type%20C%20Vertical%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/Adafruit%20USB%20Type%20C%20Vertical%20Breakout.sch",
      "schematicSha256": "b08eab884c2ea6f85eb0a648d3f319e76465d25c790904fff531c5a9149b1d5f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/license.txt",
      "sourceArchiveSha256": "8dd32c80fc8b1ba79f7e0494c6eaeaaa383e218837d5a6fadbf5b8f8263cab87",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "JP1.3: unresolved electrical role on SBU1.",
        "JP1.5: unresolved electrical role on D+.",
        "JP1.6: unresolved electrical role on D-.",
        "JP1.7: unresolved electrical role on SBU2.",
        "X1.A6: unresolved electrical role on D+.",
        "X1.A7: unresolved electrical role on D-.",
        "X1.A8: unresolved electrical role on SBU1.",
        "X1.B8: unresolved electrical role on SBU2.",
        "X1.B7: unresolved electrical role on D-.",
        "X1.B6: unresolved electrical role on D+.",
        "JP2.3: unresolved electrical role on SBU1.",
        "JP2.5: unresolved electrical role on D+.",
        "JP2.6: unresolved electrical role on D-.",
        "JP2.7: unresolved electrical role on SBU2."
      ]
    }
  },
  "adafruit-module-6014": {
    "contacts": [
      {
        "id": "cn1-1",
        "number": "CN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.1.",
        "x": -5.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-2",
        "number": "CN1.2",
        "label": "D0-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0-. Physical source contact CN1.2.",
        "x": -4.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-3",
        "number": "CN1.3",
        "label": "D0+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0+. Physical source contact CN1.3.",
        "x": -4.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-4",
        "number": "CN1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.4.",
        "x": -3.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-5",
        "number": "CN1.5",
        "label": "D1-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1-. Physical source contact CN1.5.",
        "x": -3.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-6",
        "number": "CN1.6",
        "label": "D1+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1+. Physical source contact CN1.6.",
        "x": -2.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-7",
        "number": "CN1.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.7.",
        "x": -2.25,
        "y": -0.751,
        "size": [
          0.25,
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
        "label": "CK-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CK-. Physical source contact CN1.8.",
        "x": -1.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-9",
        "number": "CN1.9",
        "label": "CK+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CK+. Physical source contact CN1.9.",
        "x": -1.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-10",
        "number": "CN1.10",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.10.",
        "x": -0.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-11",
        "number": "CN1.11",
        "label": "D2-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2-. Physical source contact CN1.11.",
        "x": -0.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-12",
        "number": "CN1.12",
        "label": "D2+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2+. Physical source contact CN1.12.",
        "x": 0.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-13",
        "number": "CN1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.13.",
        "x": 0.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-14",
        "number": "CN1.14",
        "label": "D3-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3-. Physical source contact CN1.14.",
        "x": 1.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-15",
        "number": "CN1.15",
        "label": "D3+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3+. Physical source contact CN1.15.",
        "x": 1.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-16",
        "number": "CN1.16",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.16.",
        "x": 2.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-17",
        "number": "CN1.17",
        "label": "CAM_IO0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_IO0. Physical source contact CN1.17.",
        "x": 2.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-18",
        "number": "CN1.18",
        "label": "CAM_IO1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_IO1. Physical source contact CN1.18.",
        "x": 3.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-19",
        "number": "CN1.19",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.19.",
        "x": 3.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-20",
        "number": "CN1.20",
        "label": "CAM_SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_SCL. I2C serial clock / source-listed alternate function. Physical source contact CN1.20.",
        "x": 4.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-21",
        "number": "CN1.21",
        "label": "CAM_SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_SDA. I2C serial data / source-listed alternate function. Physical source contact CN1.21.",
        "x": 4.75,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-22",
        "number": "CN1.22",
        "label": "CAM_3V3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_3V3. Physical source contact CN1.22.",
        "x": 5.25,
        "y": -0.751,
        "size": [
          0.25,
          1.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": -20.32,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "D0-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0-. Physical source contact JP1.2.",
        "x": -17.78,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "D0+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0+. Physical source contact JP1.3.",
        "x": -15.24,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "D1-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1-. Physical source contact JP1.4.",
        "x": -12.7,
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
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "D1+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1+. Physical source contact JP1.5.",
        "x": -10.16,
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
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "CK-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CK-. Physical source contact JP1.6.",
        "x": -7.62,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "CK+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CK+. Physical source contact JP1.7.",
        "x": -5.08,
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
        "label": "D2-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2-. Physical source contact JP1.8.",
        "x": -2.54,
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
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "D2+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D2+. Physical source contact JP1.9.",
        "x": 0,
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
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "D3-",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3-. Physical source contact JP1.10.",
        "x": 2.54,
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
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "D3+",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D3+. Physical source contact JP1.11.",
        "x": 5.08,
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
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.12.",
        "x": 7.62,
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
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "CAM_IO0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_IO0. Physical source contact JP1.13.",
        "x": 10.16,
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
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "CAM_IO1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_IO1. Physical source contact JP1.14.",
        "x": 12.7,
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
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "CAM_SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.15.",
        "x": 15.24,
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
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "CAM_SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.16.",
        "x": 17.78,
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
        "id": "jp1-17",
        "number": "JP1.17",
        "label": "CAM_3V3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: CAM_3V3. Physical source contact JP1.17.",
        "x": 20.32,
        "y": 3.81,
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
    "artwork": "<rect x=\"-7.6\" y=\"-5.707\" width=\"15.1\" height=\"4.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.brd",
      "boardSha256": "ae107af3e4a4f4da5236aa31211bdbf1ddb66dc1affe74ed65b89097b0787dea",
      "sourceBounds": [
        0,
        0,
        44.45,
        12.7
      ],
      "selectedConnectors": [
        "CN1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "CN1.2 passive pass-through verified from schematic endpoints.",
        "CN1.3 passive pass-through verified from schematic endpoints.",
        "CN1.5 passive pass-through verified from schematic endpoints.",
        "CN1.6 passive pass-through verified from schematic endpoints.",
        "CN1.8 passive pass-through verified from schematic endpoints.",
        "CN1.9 passive pass-through verified from schematic endpoints.",
        "CN1.11 passive pass-through verified from schematic endpoints.",
        "CN1.12 passive pass-through verified from schematic endpoints.",
        "CN1.14 passive pass-through verified from schematic endpoints.",
        "CN1.15 passive pass-through verified from schematic endpoints.",
        "CN1.17 passive pass-through verified from schematic endpoints.",
        "CN1.18 passive pass-through verified from schematic endpoints.",
        "CN1.20 passive pass-through verified from schematic endpoints.",
        "CN1.21 passive pass-through verified from schematic endpoints.",
        "CN1.22 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.8 passive pass-through verified from schematic endpoints.",
        "JP1.9 passive pass-through verified from schematic endpoints.",
        "JP1.10 passive pass-through verified from schematic endpoints.",
        "JP1.11 passive pass-through verified from schematic endpoints.",
        "JP1.13 passive pass-through verified from schematic endpoints.",
        "JP1.14 passive pass-through verified from schematic endpoints.",
        "JP1.15 passive pass-through verified from schematic endpoints.",
        "JP1.16 passive pass-through verified from schematic endpoints.",
        "JP1.17 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "CN1.2",
          "sourceNet": "D0-",
          "before": {
            "type": "unspecified",
            "label": "D0-"
          },
          "after": {
            "type": "passive",
            "label": "D0-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.3",
          "sourceNet": "D0+",
          "before": {
            "type": "unspecified",
            "label": "D0+"
          },
          "after": {
            "type": "passive",
            "label": "D0+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.5",
          "sourceNet": "D1-",
          "before": {
            "type": "unspecified",
            "label": "D1-"
          },
          "after": {
            "type": "passive",
            "label": "D1-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.6",
          "sourceNet": "D1+",
          "before": {
            "type": "unspecified",
            "label": "D1+"
          },
          "after": {
            "type": "passive",
            "label": "D1+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.8",
          "sourceNet": "CK-",
          "before": {
            "type": "unspecified",
            "label": "CK-"
          },
          "after": {
            "type": "passive",
            "label": "CK-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.9",
          "sourceNet": "CK+",
          "before": {
            "type": "unspecified",
            "label": "CK+"
          },
          "after": {
            "type": "passive",
            "label": "CK+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.11",
          "sourceNet": "D2-",
          "before": {
            "type": "unspecified",
            "label": "D2-"
          },
          "after": {
            "type": "passive",
            "label": "D2-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.12",
          "sourceNet": "D2+",
          "before": {
            "type": "unspecified",
            "label": "D2+"
          },
          "after": {
            "type": "passive",
            "label": "D2+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.14",
          "sourceNet": "D3-",
          "before": {
            "type": "unspecified",
            "label": "D3-"
          },
          "after": {
            "type": "passive",
            "label": "D3-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.15",
          "sourceNet": "D3+",
          "before": {
            "type": "unspecified",
            "label": "D3+"
          },
          "after": {
            "type": "passive",
            "label": "D3+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.17",
          "sourceNet": "CAM_IO0",
          "before": {
            "type": "unspecified",
            "label": "CAM_IO0"
          },
          "after": {
            "type": "passive",
            "label": "CAM_IO0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.18",
          "sourceNet": "CAM_IO1",
          "before": {
            "type": "unspecified",
            "label": "CAM_IO1"
          },
          "after": {
            "type": "passive",
            "label": "CAM_IO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.20",
          "sourceNet": "CAM_SCL",
          "before": {
            "type": "unspecified",
            "label": "CAM_SCL"
          },
          "after": {
            "type": "passive",
            "label": "CAM_SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.21",
          "sourceNet": "CAM_SDA",
          "before": {
            "type": "unspecified",
            "label": "CAM_SDA"
          },
          "after": {
            "type": "passive",
            "label": "CAM_SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "CN1.22",
          "sourceNet": "CAM_3V3",
          "before": {
            "type": "unspecified",
            "label": "CAM_3V3"
          },
          "after": {
            "type": "passive",
            "label": "CAM_3V3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "D0-",
          "before": {
            "type": "unspecified",
            "label": "D0-"
          },
          "after": {
            "type": "passive",
            "label": "D0-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "D0+",
          "before": {
            "type": "unspecified",
            "label": "D0+"
          },
          "after": {
            "type": "passive",
            "label": "D0+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.4",
          "sourceNet": "D1-",
          "before": {
            "type": "unspecified",
            "label": "D1-"
          },
          "after": {
            "type": "passive",
            "label": "D1-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.5",
          "sourceNet": "D1+",
          "before": {
            "type": "unspecified",
            "label": "D1+"
          },
          "after": {
            "type": "passive",
            "label": "D1+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.6",
          "sourceNet": "CK-",
          "before": {
            "type": "unspecified",
            "label": "CK-"
          },
          "after": {
            "type": "passive",
            "label": "CK-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "CK+",
          "before": {
            "type": "unspecified",
            "label": "CK+"
          },
          "after": {
            "type": "passive",
            "label": "CK+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.8",
          "sourceNet": "D2-",
          "before": {
            "type": "unspecified",
            "label": "D2-"
          },
          "after": {
            "type": "passive",
            "label": "D2-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.9",
          "sourceNet": "D2+",
          "before": {
            "type": "unspecified",
            "label": "D2+"
          },
          "after": {
            "type": "passive",
            "label": "D2+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.10",
          "sourceNet": "D3-",
          "before": {
            "type": "unspecified",
            "label": "D3-"
          },
          "after": {
            "type": "passive",
            "label": "D3-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.11",
          "sourceNet": "D3+",
          "before": {
            "type": "unspecified",
            "label": "D3+"
          },
          "after": {
            "type": "passive",
            "label": "D3+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.13",
          "sourceNet": "CAM_IO0",
          "before": {
            "type": "unspecified",
            "label": "CAM_IO0"
          },
          "after": {
            "type": "passive",
            "label": "CAM_IO0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.14",
          "sourceNet": "CAM_IO1",
          "before": {
            "type": "unspecified",
            "label": "CAM_IO1"
          },
          "after": {
            "type": "passive",
            "label": "CAM_IO1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.15",
          "sourceNet": "CAM_SCL",
          "before": {
            "type": "unspecified",
            "label": "CAM_SCL"
          },
          "after": {
            "type": "passive",
            "label": "CAM_SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.16",
          "sourceNet": "CAM_SDA",
          "before": {
            "type": "unspecified",
            "label": "CAM_SDA"
          },
          "after": {
            "type": "passive",
            "label": "CAM_SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        },
        {
          "number": "JP1.17",
          "sourceNet": "CAM_3V3",
          "before": {
            "type": "unspecified",
            "label": "CAM_3V3"
          },
          "after": {
            "type": "passive",
            "label": "CAM_3V3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-FPC-Breakout-PCB/Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [
          "CN1.SUPPORT1",
          "CN1.SUPPORT2"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-FPC-Breakout-PCB",
      "commit": "78b551a2118c356b7c2f6ffc1eb3b41b45943fb4",
      "boardURL": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/Adafruit%20FPC%20Breakout%20-%20Pi%205%20DSI%20-%20RP2350%20HSTX.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/Adafruit%20FPC%20Breakout%20-%20Pi%205%20DSI%20-%20RP2350%20HSTX.sch",
      "schematicSha256": "e31423dabe40f899849d4d77a0280fff4f0f26bcdec41516f7b29106b8a91048",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/license.txt",
      "sourceArchiveSha256": "abbf034b061767df792eb30afffa00165ca94baed22c03663a0bceedb84e1d3c",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "CN1.2: unresolved electrical role on D0-.",
        "CN1.3: unresolved electrical role on D0+.",
        "CN1.5: unresolved electrical role on D1-.",
        "CN1.6: unresolved electrical role on D1+.",
        "CN1.8: unresolved electrical role on CK-.",
        "CN1.9: unresolved electrical role on CK+.",
        "CN1.11: unresolved electrical role on D2-.",
        "CN1.12: unresolved electrical role on D2+.",
        "CN1.14: unresolved electrical role on D3-.",
        "CN1.15: unresolved electrical role on D3+.",
        "CN1.17: unresolved electrical role on CAM_IO0.",
        "CN1.18: unresolved electrical role on CAM_IO1.",
        "CN1.20: unresolved electrical role on CAM_SCL.",
        "CN1.21: unresolved electrical role on CAM_SDA.",
        "CN1.22: unresolved electrical role on CAM_3V3.",
        "JP1.2: unresolved electrical role on D0-.",
        "JP1.3: unresolved electrical role on D0+.",
        "JP1.4: unresolved electrical role on D1-.",
        "JP1.5: unresolved electrical role on D1+.",
        "JP1.6: unresolved electrical role on CK-.",
        "JP1.7: unresolved electrical role on CK+.",
        "JP1.8: unresolved electrical role on D2-.",
        "JP1.9: unresolved electrical role on D2+.",
        "JP1.10: unresolved electrical role on D3-.",
        "JP1.11: unresolved electrical role on D3+.",
        "JP1.13: unresolved electrical role on CAM_IO0.",
        "JP1.14: unresolved electrical role on CAM_IO1.",
        "JP1.15: unresolved electrical role on CAM_SCL.",
        "JP1.16: unresolved electrical role on CAM_SDA.",
        "JP1.17: unresolved electrical role on CAM_3V3."
      ]
    }
  },
  "adafruit-module-4687": {
    "contacts": [
      {
        "id": "rpi2-1",
        "number": "RPI2.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI2.1.",
        "x": 24.11,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-2",
        "number": "RPI2.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V. Physical source contact RPI2.2.",
        "x": 24.11,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-3",
        "number": "RPI2.3",
        "label": "SDA_3V",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA_3V. I2C serial data / source-listed alternate function. Physical source contact RPI2.3.",
        "x": 21.57,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-4",
        "number": "RPI2.4",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V. Physical source contact RPI2.4.",
        "x": 21.57,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-6",
        "number": "RPI2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.6.",
        "x": 19.03,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-5",
        "number": "RPI2.5",
        "label": "SCL_3V",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL_3V. I2C serial clock / source-listed alternate function. Physical source contact RPI2.5.",
        "x": 19.03,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-8",
        "number": "RPI2.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.8.",
        "x": 16.49,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-7",
        "number": "RPI2.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.7.",
        "x": 16.49,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-10",
        "number": "RPI2.10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.10.",
        "x": 13.95,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-9",
        "number": "RPI2.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.9.",
        "x": 13.95,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-12",
        "number": "RPI2.12",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.12.",
        "x": 11.41,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-11",
        "number": "RPI2.11",
        "label": "BUSY",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: BUSY. Physical source contact RPI2.11.",
        "x": 11.41,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-14",
        "number": "RPI2.14",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.14.",
        "x": 8.87,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-13",
        "number": "RPI2.13",
        "label": "RESET",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: RESET. Physical source contact RPI2.13.",
        "x": 8.87,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-16",
        "number": "RPI2.16",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.16.",
        "x": 6.33,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-15",
        "number": "RPI2.15",
        "label": "DC",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DC. Physical source contact RPI2.15.",
        "x": 6.33,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-18",
        "number": "RPI2.18",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.18.",
        "x": 3.79,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-17",
        "number": "RPI2.17",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI2.17.",
        "x": 3.79,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-20",
        "number": "RPI2.20",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.20.",
        "x": 1.25,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-19",
        "number": "RPI2.19",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact RPI2.19.",
        "x": 1.25,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-22",
        "number": "RPI2.22",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.22.",
        "x": -1.29,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-21",
        "number": "RPI2.21",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.21.",
        "x": -1.29,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-24",
        "number": "RPI2.24",
        "label": "CS",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CS. Physical source contact RPI2.24.",
        "x": -3.83,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-23",
        "number": "RPI2.23",
        "label": "SCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCLK. Physical source contact RPI2.23.",
        "x": -3.83,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-26",
        "number": "RPI2.26",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.26.",
        "x": -6.37,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-25",
        "number": "RPI2.25",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.25.",
        "x": -6.37,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-28",
        "number": "RPI2.28",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.28.",
        "x": -8.91,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-27",
        "number": "RPI2.27",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.27.",
        "x": -8.91,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-30",
        "number": "RPI2.30",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.30.",
        "x": -11.45,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-29",
        "number": "RPI2.29",
        "label": "GPIO5",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO5. Physical source contact RPI2.29.",
        "x": -11.45,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-32",
        "number": "RPI2.32",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.32.",
        "x": -13.99,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-31",
        "number": "RPI2.31",
        "label": "GPIO6",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO6. Physical source contact RPI2.31.",
        "x": -13.99,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-34",
        "number": "RPI2.34",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.34.",
        "x": -16.53,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-33",
        "number": "RPI2.33",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.33.",
        "x": -16.53,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-36",
        "number": "RPI2.36",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.36.",
        "x": -19.07,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-35",
        "number": "RPI2.35",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.35.",
        "x": -19.07,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-38",
        "number": "RPI2.38",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.38.",
        "x": -21.61,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-37",
        "number": "RPI2.37",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.37.",
        "x": -21.61,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-40",
        "number": "RPI2.40",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact RPI2.40.",
        "x": -24.15,
        "y": -13.8574,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "rpi2-39",
        "number": "RPI2.39",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI2.39.",
        "x": -24.15,
        "y": -9.5394,
        "size": [
          1.524,
          3.048
        ],
        "shape": "rect",
        "connector": "RPI2",
        "back": false,
        "smd": true
      },
      {
        "id": "conn2-2",
        "number": "CONN2.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CONN2.2.",
        "x": 18.943,
        "y": 10.105,
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
        "label": "SDA_3V",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA_3V. I2C serial data / source-listed alternate function. Physical source contact CONN2.3.",
        "x": 19.943,
        "y": 10.105,
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
        "x": 17.943,
        "y": 10.105,
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
        "label": "SCL_3V",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL_3V. I2C serial clock / source-listed alternate function. Physical source contact CONN2.4.",
        "x": 20.943,
        "y": 10.105,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"16.443\" y=\"10.405\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.611\" y=\"-5.8182\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.2404\" y=\"7.0276\" width=\"1.3604\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.8612\" y=\"1.1078\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3202\" y=\"-1.3448\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.613\" y=\"5.291\" width=\"1.4\" height=\"1.746\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.158\" y=\"8.933\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.8476\" y=\"1.2478\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.7618\" y=\"-5.1254\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.907\" y=\"6.672\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0934\" y=\"0.942\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0692\" y=\"-6.688\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0692\" y=\"-4.783\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0692\" y=\"-2.878\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0692\" y=\"-0.973\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.0556\" y=\"2.801\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.961\" y=\"4.742\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.5386\" y=\"-2.8018\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4816\" y=\"-1.3048\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.142\" y=\"-1.673\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.2702\" y=\"-5.114\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.037\" y=\"-6.066\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.2038\" y=\"-5.114\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-32.5204\" y=\"-15.8604\" width=\"65.0\" height=\"30.6604\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-32.035\" y=\"-13.67\" width=\"59.735\" height=\"29.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.1\" y=\"2.85\" width=\"3.8\" height=\"7.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"28.1\" y=\"-11.15\" width=\"3.8\" height=\"7.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit 2.13in eInk Bonnet.brd",
      "boardSha256": "0f1ff86789710b5f809fb06787ac49aaa7015f3950d74b067dfb4daf60fbdd93",
      "sourceBounds": [
        -11.4935,
        -3.3495,
        53.5065,
        28.2505
      ],
      "selectedConnectors": [
        "RPI2",
        "CONN2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "RPI2.3 passive pass-through verified from schematic endpoints.",
        "RPI2.5 passive pass-through verified from schematic endpoints.",
        "CONN2.3 passive pass-through verified from schematic endpoints.",
        "CONN2.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "RPI2.3",
          "sourceNet": "SDA_3V",
          "before": {
            "type": "unspecified",
            "label": "SDA_3V"
          },
          "after": {
            "type": "passive",
            "label": "SDA_3V"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-2-13in-eInk-Bonnet-PCB/Adafruit 2.13in eInk Bonnet.sch"
        },
        {
          "number": "RPI2.5",
          "sourceNet": "SCL_3V",
          "before": {
            "type": "unspecified",
            "label": "SCL_3V"
          },
          "after": {
            "type": "passive",
            "label": "SCL_3V"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-2-13in-eInk-Bonnet-PCB/Adafruit 2.13in eInk Bonnet.sch"
        },
        {
          "number": "CONN2.3",
          "sourceNet": "SDA_3V",
          "before": {
            "type": "unspecified",
            "label": "SDA_3V"
          },
          "after": {
            "type": "passive",
            "label": "SDA_3V"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-2-13in-eInk-Bonnet-PCB/Adafruit 2.13in eInk Bonnet.sch"
        },
        {
          "number": "CONN2.4",
          "sourceNet": "SCL_3V",
          "before": {
            "type": "unspecified",
            "label": "SCL_3V"
          },
          "after": {
            "type": "passive",
            "label": "SCL_3V"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-2-13in-eInk-Bonnet-PCB/Adafruit 2.13in eInk Bonnet.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-2-13in-eInk-Bonnet-PCB",
      "commit": "76df16153ef37dc6a620457f3f69457a8bdb660a",
      "boardURL": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/Adafruit%202.13in%20eInk%20Bonnet.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/Adafruit%202.13in%20eInk%20Bonnet.sch",
      "schematicSha256": "e79a03e35182ca705c2c4ed5be043519dfe16fb2ce43819610bd57a45777d6e5",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/license.txt",
      "sourceArchiveSha256": "918b2256604a333ef676340edbf05fd2242519c280082a0eb652f59fd57730c1",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "RPI2.3: unresolved electrical role on SDA_3V.",
        "RPI2.5: unresolved electrical role on SCL_3V.",
        "CONN2.3: unresolved electrical role on SDA_3V.",
        "CONN2.4: unresolved electrical role on SCL_3V."
      ]
    }
  },
  "adafruit-module-5945": {
    "contacts": [
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": -20.981,
        "y": 2.294,
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
        "y": 3.294,
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
        "y": 1.294,
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
        "y": 4.294,
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
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": -24.881,
        "y": -0.006,
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
        "y": 5.594,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "STROBE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: STROBE. Physical source contact TP1.P$1.",
        "x": -3.3655,
        "y": -5.7785,
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
        "id": "cb1-1",
        "number": "CB1.1",
        "label": "VSYNC",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VSYNC. Physical source contact CB1.1.",
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
        "label": "PWDN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: PWDN. Physical source contact CB1.2.",
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
        "label": "HSYNC",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: HSYNC. Physical source contact CB1.4.",
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
        "label": "PCLK",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: PCLK. Physical source contact CB1.5.",
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
        "label": "DATA2",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA2. Physical source contact CB1.9.",
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
        "label": "DATA3",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA3. Physical source contact CB1.10.",
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
        "label": "DATA4",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA4. Physical source contact CB1.11.",
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
        "label": "DATA5",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA5. Physical source contact CB1.12.",
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
        "label": "DATA6",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA6. Physical source contact CB1.14.",
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
        "label": "DATA7",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA7. Physical source contact CB1.15.",
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
        "label": "DATA8",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA8. Physical source contact CB1.16.",
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
        "label": "DATA9",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DATA9. Physical source contact CB1.17.",
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
        "label": "CAM_RST",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CAM_RST. Physical source contact CB1.19.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1. Source connector symbol functions: GPIO15. Physical source contact CB1.20.",
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
        "label": "SHUTTER",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SHUTTER. Physical source contact CB1.29.",
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: AD0. Physical source contact CB1.31.",
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
        "id": "x2-1",
        "number": "X2.1",
        "label": "STROBE",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: STROBE. Physical source contact X2.1.",
        "x": -9.933,
        "y": -5.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "AGND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND. Physical source contact X2.2.",
        "x": -9.933,
        "y": -5.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-3",
        "number": "X2.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X2.3.",
        "x": -9.933,
        "y": -4.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-4",
        "number": "X2.4",
        "label": "2.8V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 2.8V. Physical source contact X2.4.",
        "x": -9.933,
        "y": -4.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-5",
        "number": "X2.5",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X2.5.",
        "x": -9.933,
        "y": -3.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-6",
        "number": "X2.6",
        "label": "CAM_RST",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CAM_RST. Physical source contact X2.6.",
        "x": -9.933,
        "y": -3.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-7",
        "number": "X2.7",
        "label": "VSYNC",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: VSYNC. Physical source contact X2.7.",
        "x": -9.933,
        "y": -2.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-8",
        "number": "X2.8",
        "label": "PWDN",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PWDN. Physical source contact X2.8.",
        "x": -9.933,
        "y": -2.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-9",
        "number": "X2.9",
        "label": "HSYNC",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: HSYNC. Physical source contact X2.9.",
        "x": -9.933,
        "y": -1.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-10",
        "number": "X2.10",
        "label": "1.5V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 1.5V. Physical source contact X2.10.",
        "x": -9.933,
        "y": -1.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-11",
        "number": "X2.11",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X2.11.",
        "x": -9.933,
        "y": -0.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-12",
        "number": "X2.12",
        "label": "DATA9",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA9. Physical source contact X2.12.",
        "x": -9.933,
        "y": -0.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-13",
        "number": "X2.13",
        "label": "XCLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: XCLK. Physical source contact X2.13.",
        "x": -9.933,
        "y": 0.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-14",
        "number": "X2.14",
        "label": "DATA8",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA8. Physical source contact X2.14.",
        "x": -9.933,
        "y": 0.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-15",
        "number": "X2.15",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.15.",
        "x": -9.933,
        "y": 1.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-16",
        "number": "X2.16",
        "label": "DATA7",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA7. Physical source contact X2.16.",
        "x": -9.933,
        "y": 1.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-17",
        "number": "X2.17",
        "label": "PCLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PCLK. Physical source contact X2.17.",
        "x": -9.933,
        "y": 2.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-18",
        "number": "X2.18",
        "label": "DATA6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA6. Physical source contact X2.18.",
        "x": -9.933,
        "y": 2.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-sprt1",
        "number": "X2.SPRT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT1.",
        "x": -6.755,
        "y": 6.635,
        "size": [
          2,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-sprt2",
        "number": "X2.SPRT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT2.",
        "x": -6.755,
        "y": -6.635,
        "size": [
          2,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-19",
        "number": "X2.19",
        "label": "DATA2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA2. Physical source contact X2.19.",
        "x": -9.933,
        "y": 3.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-20",
        "number": "X2.20",
        "label": "DATA5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA5. Physical source contact X2.20.",
        "x": -9.933,
        "y": 3.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-21",
        "number": "X2.21",
        "label": "DATA3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA3. Physical source contact X2.21.",
        "x": -9.933,
        "y": 4.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-22",
        "number": "X2.22",
        "label": "DATA4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: DATA4. Physical source contact X2.22.",
        "x": -9.933,
        "y": 4.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-23",
        "number": "X2.23",
        "label": "DATA1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DATA1. Physical source contact X2.23.",
        "x": -9.933,
        "y": 5.25,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-24",
        "number": "X2.24",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X2.24.",
        "x": -9.933,
        "y": 5.75,
        "size": [
          1.4,
          0.25
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-9.377\" y=\"-7.0\" width=\"22.142\" height=\"14.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.604\" y=\"-5.975\" width=\"11.4\" height=\"11.95\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.581\" y=\"-0.206\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.992\" y=\"-6.31\" width=\"3.6\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.957\" y=\"-7.4944\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.889\" y=\"4.365\" width=\"3.937\" height=\"3.208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.779\" y=\"-3.4774\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.8124\" y=\"1.398\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.3345\" y=\"4.928\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.066\" y=\"-2.311\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.5735\" y=\"-0.0885\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.875\" y=\"5.1185\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.995\" y=\"-1.778\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.487\" y=\"3.1115\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.081\" y=\"-4.851\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.583\" y=\"0.635\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.802\" y=\"-6.274\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.929\" y=\"0.6605\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-0.8255\" y=\"-0.9525\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"0.6985\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.114\" y=\"4.445\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PiCowbell Camera Breakout.brd",
      "boardSha256": "d84ca84e7c68c6a61c212a8cc77d58c8fff3f6b9b4b56431bc3f7645b4c524f2",
      "sourceBounds": [
        0,
        -1.27,
        52.07,
        19.05
      ],
      "selectedConnectors": [
        "CONN1",
        "TP1",
        "CB1",
        "X1",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "CB1.21 passive pass-through verified from schematic endpoints.",
        "CB1.24 passive pass-through verified from schematic endpoints.",
        "CB1.25 passive pass-through verified from schematic endpoints.",
        "CB1.26 passive pass-through verified from schematic endpoints.",
        "CB1.27 passive pass-through verified from schematic endpoints.",
        "CB1.32 passive pass-through verified from schematic endpoints.",
        "CB1.34 passive pass-through verified from schematic endpoints.",
        "CB1.35 passive pass-through verified from schematic endpoints.",
        "CB1.37 passive pass-through verified from schematic endpoints.",
        "X1.7 passive pass-through verified from schematic endpoints.",
        "X1.5 passive pass-through verified from schematic endpoints.",
        "X1.3 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "TP1.P$1",
          "sourceNet": "STROBE",
          "before": {
            "type": "unspecified",
            "label": "STROBE"
          },
          "after": {
            "type": "passive",
            "label": "STROBE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.1",
          "sourceNet": "VSYNC",
          "before": {
            "type": "unspecified",
            "label": "VSYNC"
          },
          "after": {
            "type": "passive",
            "label": "VSYNC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.4",
          "sourceNet": "HSYNC",
          "before": {
            "type": "unspecified",
            "label": "HSYNC"
          },
          "after": {
            "type": "passive",
            "label": "HSYNC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.9",
          "sourceNet": "DATA2",
          "before": {
            "type": "unspecified",
            "label": "DATA2"
          },
          "after": {
            "type": "passive",
            "label": "DATA2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.10",
          "sourceNet": "DATA3",
          "before": {
            "type": "unspecified",
            "label": "DATA3"
          },
          "after": {
            "type": "passive",
            "label": "DATA3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.11",
          "sourceNet": "DATA4",
          "before": {
            "type": "unspecified",
            "label": "DATA4"
          },
          "after": {
            "type": "passive",
            "label": "DATA4"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.12",
          "sourceNet": "DATA5",
          "before": {
            "type": "unspecified",
            "label": "DATA5"
          },
          "after": {
            "type": "passive",
            "label": "DATA5"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.14",
          "sourceNet": "DATA6",
          "before": {
            "type": "unspecified",
            "label": "DATA6"
          },
          "after": {
            "type": "passive",
            "label": "DATA6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.15",
          "sourceNet": "DATA7",
          "before": {
            "type": "unspecified",
            "label": "DATA7"
          },
          "after": {
            "type": "passive",
            "label": "DATA7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.16",
          "sourceNet": "DATA8",
          "before": {
            "type": "unspecified",
            "label": "DATA8"
          },
          "after": {
            "type": "passive",
            "label": "DATA8"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "CB1.17",
          "sourceNet": "DATA9",
          "before": {
            "type": "unspecified",
            "label": "DATA9"
          },
          "after": {
            "type": "passive",
            "label": "DATA9"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.1",
          "sourceNet": "STROBE",
          "before": {
            "type": "unspecified",
            "label": "STROBE"
          },
          "after": {
            "type": "passive",
            "label": "STROBE"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.7",
          "sourceNet": "VSYNC",
          "before": {
            "type": "unspecified",
            "label": "VSYNC"
          },
          "after": {
            "type": "passive",
            "label": "VSYNC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.9",
          "sourceNet": "HSYNC",
          "before": {
            "type": "unspecified",
            "label": "HSYNC"
          },
          "after": {
            "type": "passive",
            "label": "HSYNC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.12",
          "sourceNet": "DATA9",
          "before": {
            "type": "unspecified",
            "label": "DATA9"
          },
          "after": {
            "type": "passive",
            "label": "DATA9"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.14",
          "sourceNet": "DATA8",
          "before": {
            "type": "unspecified",
            "label": "DATA8"
          },
          "after": {
            "type": "passive",
            "label": "DATA8"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.16",
          "sourceNet": "DATA7",
          "before": {
            "type": "unspecified",
            "label": "DATA7"
          },
          "after": {
            "type": "passive",
            "label": "DATA7"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.18",
          "sourceNet": "DATA6",
          "before": {
            "type": "unspecified",
            "label": "DATA6"
          },
          "after": {
            "type": "passive",
            "label": "DATA6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.19",
          "sourceNet": "DATA2",
          "before": {
            "type": "unspecified",
            "label": "DATA2"
          },
          "after": {
            "type": "passive",
            "label": "DATA2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.20",
          "sourceNet": "DATA5",
          "before": {
            "type": "unspecified",
            "label": "DATA5"
          },
          "after": {
            "type": "passive",
            "label": "DATA5"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.21",
          "sourceNet": "DATA3",
          "before": {
            "type": "unspecified",
            "label": "DATA3"
          },
          "after": {
            "type": "passive",
            "label": "DATA3"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        },
        {
          "number": "X2.22",
          "sourceNet": "DATA4",
          "before": {
            "type": "unspecified",
            "label": "DATA4"
          },
          "after": {
            "type": "passive",
            "label": "DATA4"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PiCowbell-Camera-Breakout-PCB/Adafruit PiCowbell Camera Breakout.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [
          "CB1",
          "X1"
        ],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "CB1.20",
            "sourceNet": "N$1",
            "label": "GPIO15",
            "sourceConnectorPins": [
              {
                "part": "CB1",
                "pin": "GPIO15",
                "direction": "io"
              }
            ]
          }
        ],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [
        {
          "number": "CB1.20",
          "sourceNet": "N$1",
          "label": "GPIO15",
          "sourceConnectorPins": [
            {
              "part": "CB1",
              "pin": "GPIO15",
              "direction": "io"
            }
          ]
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB",
      "commit": "493cada020a7b197c078ba895efb419d1902f8a1",
      "boardURL": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/Adafruit%20PiCowbell%20Camera%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/Adafruit%20PiCowbell%20Camera%20Breakout.sch",
      "schematicSha256": "05dc9d6b7547dc34444df44a57ee98916b11024ec96cac714134f5f2690492d4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/license.txt",
      "sourceArchiveSha256": "cb85db43886a4df8b94ce622fd52b933b2460057cebba2007e2b320177a73b67",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "CB1.20: autogenerated net N$1 requires printed/function label review.",
        "CB1.21: unresolved electrical role on MISO.",
        "CB1.24: unresolved electrical role on SCK.",
        "CB1.25: unresolved electrical role on MOSI.",
        "CB1.26: unresolved electrical role on IO20.",
        "CB1.27: unresolved electrical role on IO21.",
        "CB1.32: unresolved electrical role on AD1.",
        "CB1.34: unresolved electrical role on AD2.",
        "CB1.35: unresolved electrical role on VREF.",
        "CB1.37: unresolved electrical role on !EN.",
        "X1.7: unresolved electrical role on MISO.",
        "X1.5: unresolved electrical role on SCK.",
        "X1.3: unresolved electrical role on MOSI."
      ],
      "finalPortInventoryReview": {
        "addedRefs": [
          "X2"
        ],
        "addedNumbers": [
          "X2.1",
          "X2.2",
          "X2.3",
          "X2.4",
          "X2.5",
          "X2.6",
          "X2.7",
          "X2.8",
          "X2.9",
          "X2.10",
          "X2.11",
          "X2.12",
          "X2.13",
          "X2.14",
          "X2.15",
          "X2.16",
          "X2.17",
          "X2.18",
          "X2.SPRT1",
          "X2.SPRT2",
          "X2.19",
          "X2.20",
          "X2.21",
          "X2.22",
          "X2.23",
          "X2.24"
        ],
        "excludedUnnettedMounts": [],
        "symbolFunctionEvidence": [],
        "sourceWarnings": [
          "TP1.P$1: unresolved electrical role on STROBE.",
          "CB1.1: unresolved electrical role on VSYNC.",
          "CB1.4: unresolved electrical role on HSYNC.",
          "CB1.9: unresolved electrical role on DATA2.",
          "CB1.10: unresolved electrical role on DATA3.",
          "CB1.11: unresolved electrical role on DATA4.",
          "CB1.12: unresolved electrical role on DATA5.",
          "CB1.14: unresolved electrical role on DATA6.",
          "CB1.15: unresolved electrical role on DATA7.",
          "CB1.16: unresolved electrical role on DATA8.",
          "CB1.17: unresolved electrical role on DATA9.",
          "CB1.20: autogenerated net N$1 requires printed/function label review.",
          "CB1.21: unresolved electrical role on MISO.",
          "CB1.24: unresolved electrical role on SCK.",
          "CB1.25: unresolved electrical role on MOSI.",
          "CB1.26: unresolved electrical role on IO20.",
          "CB1.27: unresolved electrical role on IO21.",
          "CB1.32: unresolved electrical role on AD1.",
          "CB1.34: unresolved electrical role on AD2.",
          "CB1.35: unresolved electrical role on VREF.",
          "CB1.37: unresolved electrical role on !EN.",
          "X1.7: unresolved electrical role on MISO.",
          "X1.5: unresolved electrical role on SCK.",
          "X1.3: unresolved electrical role on MOSI.",
          "X2.1: unresolved electrical role on STROBE.",
          "X2.7: unresolved electrical role on VSYNC.",
          "X2.9: unresolved electrical role on HSYNC.",
          "X2.12: unresolved electrical role on DATA9.",
          "X2.14: unresolved electrical role on DATA8.",
          "X2.16: unresolved electrical role on DATA7.",
          "X2.18: unresolved electrical role on DATA6.",
          "X2.19: unresolved electrical role on DATA2.",
          "X2.20: unresolved electrical role on DATA5.",
          "X2.21: unresolved electrical role on DATA3.",
          "X2.22: unresolved electrical role on DATA4."
        ],
        "unresolved": [],
        "existingAliasReview": "CB1.20 retains its previously reviewed source connector-function alias and passive carrier role; the remaining N$1 warning is from re-reading the original unspecialized source draft, not an unknown new camera terminal."
      }
    }
  },
  "adafruit-module-5858": {
    "contacts": [
      {
        "id": "ms1-p-1",
        "number": "MS1.P$1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$1.",
        "x": -22.86,
        "y": -8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-p-2",
        "number": "MS1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$2.",
        "x": -22.86,
        "y": 8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-28",
        "number": "MS1.28",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS1.28.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-27",
        "number": "MS1.27",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact MS1.27.",
        "x": -6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-26",
        "number": "MS1.26",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact MS1.26.",
        "x": -3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-25",
        "number": "MS1.25",
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact MS1.25.",
        "x": -1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-24",
        "number": "MS1.24",
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact MS1.24.",
        "x": 1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-23",
        "number": "MS1.23",
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact MS1.23.",
        "x": 3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-22",
        "number": "MS1.22",
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact MS1.22.",
        "x": 6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-21",
        "number": "MS1.21",
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact MS1.21.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-20",
        "number": "MS1.20",
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact MS1.20.",
        "x": 11.43,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-19",
        "number": "MS1.19",
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact MS1.19.",
        "x": 13.97,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-18",
        "number": "MS1.18",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact MS1.18.",
        "x": 16.51,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-17",
        "number": "MS1.17",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact MS1.17.",
        "x": 19.05,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-5",
        "number": "MS1.5",
        "label": "A",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A. Physical source contact MS1.5.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-6",
        "number": "MS1.6",
        "label": "B",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: B. Physical source contact MS1.6.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-7",
        "number": "MS1.7",
        "label": "C",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: C. Physical source contact MS1.7.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-8",
        "number": "MS1.8",
        "label": "D",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D. Physical source contact MS1.8.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-9",
        "number": "MS1.9",
        "label": "E",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E. Physical source contact MS1.9.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-10",
        "number": "MS1.10",
        "label": "F",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: F. Physical source contact MS1.10.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-11",
        "number": "MS1.11",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact MS1.11.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-12",
        "number": "MS1.12",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact MS1.12.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-13",
        "number": "MS1.13",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact MS1.13.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-14",
        "number": "MS1.14",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact MS1.14.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-15",
        "number": "MS1.15",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact MS1.15.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-16",
        "number": "MS1.16",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact MS1.16.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-4",
        "number": "MS1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS1.4.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-3",
        "number": "MS1.3",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact MS1.3.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-2",
        "number": "MS1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact MS1.2.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-1",
        "number": "MS1.1",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact MS1.1.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP1.1.",
        "x": -8.89,
        "y": -7.62,
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
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact JP1.2.",
        "x": -6.35,
        "y": -7.62,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.3.",
        "x": -3.81,
        "y": -7.62,
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
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact JP1.4.",
        "x": -1.27,
        "y": -7.62,
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
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact JP1.5.",
        "x": 1.27,
        "y": -7.62,
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
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact JP1.6.",
        "x": 3.81,
        "y": -7.62,
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
        "x": 6.35,
        "y": -7.62,
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
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP1.8.",
        "x": 8.89,
        "y": -7.62,
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
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact JP1.9.",
        "x": 11.43,
        "y": -7.62,
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
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact JP1.10.",
        "x": 13.97,
        "y": -7.62,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.11.",
        "x": 16.51,
        "y": -7.62,
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.12.",
        "x": 19.05,
        "y": -7.62,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact JP2.1.",
        "x": 19.05,
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
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP2.2.",
        "x": 16.51,
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
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP2.3.",
        "x": 13.97,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP2.4.",
        "x": 11.43,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP2.5.",
        "x": 8.89,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP2.6.",
        "x": 6.35,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "F",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: F. Physical source contact JP2.7.",
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
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "E",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E. Physical source contact JP2.8.",
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "D",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D. Physical source contact JP2.9.",
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "C",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: C. Physical source contact JP2.10.",
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "B",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: B. Physical source contact JP2.11.",
        "x": -6.35,
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "A",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A. Physical source contact JP2.12.",
        "x": -8.89,
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
        "id": "x2-d-",
        "number": "X2.D-",
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$26. Source connector symbol functions: D-. Physical source contact X2.D-.",
        "x": -12.205,
        "y": -1,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-dplus",
        "number": "X2.D+",
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$27. Source connector symbol functions: D+. Physical source contact X2.D+.",
        "x": -12.205,
        "y": 1,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-gnd",
        "number": "X2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.GND.",
        "x": -12.205,
        "y": 3.5,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-vbus",
        "number": "X2.VBUS",
        "label": "VBUS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$32. Source connector symbol functions: VBUS. Physical source contact X2.VBUS.",
        "x": -12.205,
        "y": -3.5,
        "size": [
          3,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "GPX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPX. Physical source contact JP4.1.",
        "x": 3.81,
        "y": -4.572,
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
        "label": "CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS. Physical source contact JP4.2.",
        "x": 6.35,
        "y": -4.572,
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
        "label": "IRQ",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IRQ. Physical source contact JP4.3.",
        "x": 8.89,
        "y": -4.572,
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
        "label": "5V_EN",
        "type": "input",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V_EN. Physical source contact JP4.4. Enable-control signal, separate from its named supply rail.",
        "x": 11.43,
        "y": -4.572,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-25.4\" y=\"-11.43\" width=\"50.8\" height=\"22.86\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.993\" y=\"-7.4\" width=\"14.3\" height=\"14.8\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.966\" y=\"-0.564\" width=\"5.5\" height=\"5.7\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.033\" y=\"-0.745\" width=\"5.3\" height=\"5.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.848\" y=\"-11.4314\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.437\" y=\"3.576\" width=\"3.0\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.175\" y=\"-5.907\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.5725\" y=\"-5.907\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.107\" y=\"0.035\" width=\"1.6\" height=\"1.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.809\" y=\"-0.419\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.386\" y=\"0.92\" width=\"1.5\" height=\"0.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.386\" y=\"-0.477\" width=\"1.5\" height=\"0.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.907\" y=\"4.6486\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.907\" y=\"2.769\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.017\" y=\"-4.089\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5245\" y=\"-4.1525\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.977\" y=\"-4.572\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.072\" y=\"-4.572\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.119\" y=\"-1.956\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.293\" y=\"2.489\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.293\" y=\"0.978\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.293\" y=\"-0.546\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.915\" y=\"4.394\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.915\" y=\"2.87\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.865\" y=\"4.267\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.118\" y=\"4.7115\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.694\" y=\"-5.385\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.093\" y=\"-0.229\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.904\" y=\"-3.0865\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.38\" y=\"0.0504\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.38\" y=\"-3.023\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.869\" y=\"-3.023\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"8.3185\" y=\"1.8415\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB Host FeatherWing.brd",
      "boardSha256": "ac536c1223a246d27cc658d5084682470f74463b3869563c8aa8c15e761f8826",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "MS1",
        "JP1",
        "JP2",
        "X2",
        "JP4"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "MS1.27 passive pass-through verified from schematic endpoints.",
        "MS1.25 passive pass-through verified from schematic endpoints.",
        "MS1.24 passive pass-through verified from schematic endpoints.",
        "MS1.23 passive pass-through verified from schematic endpoints.",
        "MS1.20 passive pass-through verified from schematic endpoints.",
        "MS1.19 passive pass-through verified from schematic endpoints.",
        "MS1.18 passive pass-through verified from schematic endpoints.",
        "MS1.17 passive pass-through verified from schematic endpoints.",
        "MS1.5 passive pass-through verified from schematic endpoints.",
        "MS1.6 passive pass-through verified from schematic endpoints.",
        "MS1.7 passive pass-through verified from schematic endpoints.",
        "MS1.8 passive pass-through verified from schematic endpoints.",
        "MS1.9 passive pass-through verified from schematic endpoints.",
        "MS1.10 passive pass-through verified from schematic endpoints.",
        "MS1.14 passive pass-through verified from schematic endpoints.",
        "MS1.15 passive pass-through verified from schematic endpoints.",
        "MS1.16 passive pass-through verified from schematic endpoints.",
        "MS1.3 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.4 passive pass-through verified from schematic endpoints.",
        "JP1.5 passive pass-through verified from schematic endpoints.",
        "JP1.6 passive pass-through verified from schematic endpoints.",
        "JP1.9 passive pass-through verified from schematic endpoints.",
        "JP1.10 passive pass-through verified from schematic endpoints.",
        "JP1.11 passive pass-through verified from schematic endpoints.",
        "JP1.12 passive pass-through verified from schematic endpoints.",
        "JP2.1 passive pass-through verified from schematic endpoints.",
        "JP2.2 passive pass-through verified from schematic endpoints.",
        "JP2.3 passive pass-through verified from schematic endpoints.",
        "JP2.7 passive pass-through verified from schematic endpoints.",
        "JP2.8 passive pass-through verified from schematic endpoints.",
        "JP2.9 passive pass-through verified from schematic endpoints.",
        "JP2.10 passive pass-through verified from schematic endpoints.",
        "JP2.11 passive pass-through verified from schematic endpoints.",
        "JP2.12 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "MS1.27",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.25",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.24",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.23",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.20",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.19",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.18",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.17",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.5",
          "sourceNet": "A",
          "before": {
            "type": "unspecified",
            "label": "A"
          },
          "after": {
            "type": "passive",
            "label": "A"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.6",
          "sourceNet": "B",
          "before": {
            "type": "unspecified",
            "label": "B"
          },
          "after": {
            "type": "passive",
            "label": "B"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.7",
          "sourceNet": "C",
          "before": {
            "type": "unspecified",
            "label": "C"
          },
          "after": {
            "type": "passive",
            "label": "C"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.8",
          "sourceNet": "D",
          "before": {
            "type": "unspecified",
            "label": "D"
          },
          "after": {
            "type": "passive",
            "label": "D"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.9",
          "sourceNet": "E",
          "before": {
            "type": "unspecified",
            "label": "E"
          },
          "after": {
            "type": "passive",
            "label": "E"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.10",
          "sourceNet": "F",
          "before": {
            "type": "unspecified",
            "label": "F"
          },
          "after": {
            "type": "passive",
            "label": "F"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.16",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "MS1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.4",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.5",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.6",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.9",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.10",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.1",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.7",
          "sourceNet": "F",
          "before": {
            "type": "unspecified",
            "label": "F"
          },
          "after": {
            "type": "passive",
            "label": "F"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.8",
          "sourceNet": "E",
          "before": {
            "type": "unspecified",
            "label": "E"
          },
          "after": {
            "type": "passive",
            "label": "E"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.9",
          "sourceNet": "D",
          "before": {
            "type": "unspecified",
            "label": "D"
          },
          "after": {
            "type": "passive",
            "label": "D"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.10",
          "sourceNet": "C",
          "before": {
            "type": "unspecified",
            "label": "C"
          },
          "after": {
            "type": "passive",
            "label": "C"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.11",
          "sourceNet": "B",
          "before": {
            "type": "unspecified",
            "label": "B"
          },
          "after": {
            "type": "passive",
            "label": "B"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP2.12",
          "sourceNet": "A",
          "before": {
            "type": "unspecified",
            "label": "A"
          },
          "after": {
            "type": "passive",
            "label": "A"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-USB-Host-FeatherWing-PCB/Adafruit USB Host FeatherWing.sch"
        },
        {
          "number": "JP4.4",
          "from": "power_in",
          "to": "input",
          "reason": "Exact schematic endpoint is an enable/control signal, not a power terminal; EN suffix is not a supply rail.",
          "source": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/Adafruit%20USB%20Host%20FeatherWing.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "X2.D-",
            "sourceNet": "N$26",
            "label": "D-",
            "sourceConnectorPins": [
              {
                "part": "X2",
                "pin": "D-",
                "direction": "io"
              }
            ]
          },
          {
            "number": "X2.D+",
            "sourceNet": "N$27",
            "label": "D+",
            "sourceConnectorPins": [
              {
                "part": "X2",
                "pin": "D+",
                "direction": "io"
              }
            ]
          },
          {
            "number": "X2.VBUS",
            "sourceNet": "N$32",
            "label": "VBUS",
            "sourceConnectorPins": [
              {
                "part": "X2",
                "pin": "VBUS",
                "direction": "pwr"
              }
            ]
          }
        ],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [
        {
          "number": "X2.D-",
          "sourceNet": "N$26",
          "label": "D-",
          "sourceConnectorPins": [
            {
              "part": "X2",
              "pin": "D-",
              "direction": "io"
            }
          ]
        },
        {
          "number": "X2.D+",
          "sourceNet": "N$27",
          "label": "D+",
          "sourceConnectorPins": [
            {
              "part": "X2",
              "pin": "D+",
              "direction": "io"
            }
          ]
        },
        {
          "number": "X2.VBUS",
          "sourceNet": "N$32",
          "label": "VBUS",
          "sourceConnectorPins": [
            {
              "part": "X2",
              "pin": "VBUS",
              "direction": "pwr"
            }
          ]
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-USB-Host-FeatherWing-PCB",
      "commit": "7011deb5316121374db87580ad3b03f22d8f676d",
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/Adafruit%20USB%20Host%20FeatherWing.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/Adafruit%20USB%20Host%20FeatherWing.sch",
      "schematicSha256": "4f7c1a85ea9f65994535e865aef3353420df58e2bbf0e7d14da67ad4d48e7c73",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/license.txt",
      "sourceArchiveSha256": "ab4ce523f819e879f826b91f8b54b81229d097b13554b3bec481dafd59f0cfa4",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "MS1.27: unresolved electrical role on EN.",
        "MS1.25: unresolved electrical role on N.",
        "MS1.24: unresolved electrical role on M.",
        "MS1.23: unresolved electrical role on L.",
        "MS1.20: unresolved electrical role on I.",
        "MS1.19: unresolved electrical role on H.",
        "MS1.18: unresolved electrical role on SCL.",
        "MS1.17: unresolved electrical role on SDA.",
        "MS1.5: unresolved electrical role on A.",
        "MS1.6: unresolved electrical role on B.",
        "MS1.7: unresolved electrical role on C.",
        "MS1.8: unresolved electrical role on D.",
        "MS1.9: unresolved electrical role on E.",
        "MS1.10: unresolved electrical role on F.",
        "MS1.14: unresolved electrical role on RX.",
        "MS1.15: unresolved electrical role on TX.",
        "MS1.16: unresolved electrical role on G.",
        "MS1.3: unresolved electrical role on AREF.",
        "JP1.2: unresolved electrical role on EN.",
        "JP1.4: unresolved electrical role on N.",
        "JP1.5: unresolved electrical role on M.",
        "JP1.6: unresolved electrical role on L.",
        "JP1.9: unresolved electrical role on I.",
        "JP1.10: unresolved electrical role on H.",
        "JP1.11: unresolved electrical role on SCL.",
        "JP1.12: unresolved electrical role on SDA.",
        "JP2.1: unresolved electrical role on G.",
        "JP2.2: unresolved electrical role on TX.",
        "JP2.3: unresolved electrical role on RX.",
        "JP2.7: unresolved electrical role on F.",
        "JP2.8: unresolved electrical role on E.",
        "JP2.9: unresolved electrical role on D.",
        "JP2.10: unresolved electrical role on C.",
        "JP2.11: unresolved electrical role on B.",
        "JP2.12: unresolved electrical role on A.",
        "X2.D-: autogenerated net N$26 requires printed/function label review.",
        "X2.D+: autogenerated net N$27 requires printed/function label review.",
        "X2.VBUS: autogenerated net N$32 requires printed/function label review."
      ]
    }
  },
  "adafruit-module-4569": {
    "contacts": [
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CONN4.2.",
        "x": 20.346,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": 20.346,
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
        "x": 20.346,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": 20.346,
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
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": 24.246,
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
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": 24.246,
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
        "id": "ms1-p-1",
        "number": "MS1.P$1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$1.",
        "x": -22.86,
        "y": -8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-p-2",
        "number": "MS1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$2.",
        "x": -22.86,
        "y": 8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-28",
        "number": "MS1.28",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS1.28.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-27",
        "number": "MS1.27",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact MS1.27.",
        "x": -6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-26",
        "number": "MS1.26",
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact MS1.26.",
        "x": -3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-25",
        "number": "MS1.25",
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact MS1.25.",
        "x": -1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-24",
        "number": "MS1.24",
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact MS1.24.",
        "x": 1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-23",
        "number": "MS1.23",
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact MS1.23.",
        "x": 3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-22",
        "number": "MS1.22",
        "label": "K",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: K. Physical source contact MS1.22.",
        "x": 6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-21",
        "number": "MS1.21",
        "label": "J",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: J. Physical source contact MS1.21.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-20",
        "number": "MS1.20",
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact MS1.20.",
        "x": 11.43,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-19",
        "number": "MS1.19",
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact MS1.19.",
        "x": 13.97,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-18",
        "number": "MS1.18",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact MS1.18.",
        "x": 16.51,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-17",
        "number": "MS1.17",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact MS1.17.",
        "x": 19.05,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-5",
        "number": "MS1.5",
        "label": "A",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A. Physical source contact MS1.5.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-6",
        "number": "MS1.6",
        "label": "B",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: B. Physical source contact MS1.6.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-7",
        "number": "MS1.7",
        "label": "C",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: C. Physical source contact MS1.7.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-8",
        "number": "MS1.8",
        "label": "D",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D. Physical source contact MS1.8.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-9",
        "number": "MS1.9",
        "label": "E",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E. Physical source contact MS1.9.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-10",
        "number": "MS1.10",
        "label": "F",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: F. Physical source contact MS1.10.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-11",
        "number": "MS1.11",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact MS1.11.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-12",
        "number": "MS1.12",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact MS1.12.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-13",
        "number": "MS1.13",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact MS1.13.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-14",
        "number": "MS1.14",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact MS1.14.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-15",
        "number": "MS1.15",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact MS1.15.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-16",
        "number": "MS1.16",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact MS1.16.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-4",
        "number": "MS1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS1.4.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-3",
        "number": "MS1.3",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact MS1.3.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-2",
        "number": "MS1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact MS1.2.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-1",
        "number": "MS1.1",
        "label": "RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RESET. Physical source contact MS1.1.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact JP3.1.",
        "x": 19.05,
        "y": 7.62,
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
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP3.2.",
        "x": 16.51,
        "y": 7.62,
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
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP3.3.",
        "x": 13.97,
        "y": 7.62,
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
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP3.4.",
        "x": 11.43,
        "y": 7.62,
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
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP3.5.",
        "x": 8.89,
        "y": 7.62,
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
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP3.6.",
        "x": 6.35,
        "y": 7.62,
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
        "label": "F",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: F. Physical source contact JP3.7.",
        "x": 3.81,
        "y": 7.62,
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
        "label": "E",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E. Physical source contact JP3.8.",
        "x": 1.27,
        "y": 7.62,
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
        "label": "D",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D. Physical source contact JP3.9.",
        "x": -1.27,
        "y": 7.62,
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
        "label": "C",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: C. Physical source contact JP3.10.",
        "x": -3.81,
        "y": 7.62,
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
        "label": "B",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: B. Physical source contact JP3.11.",
        "x": -6.35,
        "y": 7.62,
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
        "label": "A",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A. Physical source contact JP3.12.",
        "x": -8.89,
        "y": 7.62,
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
        "x": -11.43,
        "y": 7.62,
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
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact JP3.14.",
        "x": -13.97,
        "y": 7.62,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.15.",
        "x": -16.51,
        "y": 7.62,
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
        "label": "RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RESET. Physical source contact JP3.16.",
        "x": -19.05,
        "y": 7.62,
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
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP2.1.",
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
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact JP2.2.",
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
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact JP2.3.",
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact JP2.4.",
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact JP2.5.",
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact JP2.6.",
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "K",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: K. Physical source contact JP2.7.",
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "J",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: J. Physical source contact JP2.8.",
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact JP2.9.",
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact JP2.10.",
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP2.11.",
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP2.12.",
        "x": 19.05,
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
        "id": "mag_hdr-1",
        "number": "MAG_HDR.1",
        "label": "INTM",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INTM. Physical source contact MAG_HDR.1.",
        "x": -6.35,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MAG_HDR",
        "back": false,
        "drill": 1
      },
      {
        "id": "mag_hdr-2",
        "number": "MAG_HDR.2",
        "label": "DRDY",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: DRDY. Physical source contact MAG_HDR.2.",
        "x": -6.35,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MAG_HDR",
        "back": false,
        "drill": 1
      },
      {
        "id": "mag_hdr-3",
        "number": "MAG_HDR.3",
        "label": "AD_M",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD_M. Physical source contact MAG_HDR.3.",
        "x": -6.35,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MAG_HDR",
        "back": false,
        "drill": 1
      },
      {
        "id": "mag_hdr-4",
        "number": "MAG_HDR.4",
        "label": "CS_M",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CS_M. Physical source contact MAG_HDR.4.",
        "x": -6.35,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MAG_HDR",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "INT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT1. Physical source contact JP1.1.",
        "x": 6.35,
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
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "INT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INT2. Physical source contact JP1.2.",
        "x": 6.35,
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
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "AD_AG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD_AG. Physical source contact JP1.3.",
        "x": 6.35,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "CS_AG",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CS_AG. Physical source contact JP1.4.",
        "x": 6.35,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "SDA_EX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_EX. I2C serial data / source-listed alternate function. Physical source contact JP4.1.",
        "x": 11.43,
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
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "SCL_EX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_EX. I2C serial clock / source-listed alternate function. Physical source contact JP4.2.",
        "x": 11.43,
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
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "SDO_EX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDO_EX. Physical source contact JP4.3.",
        "x": 11.43,
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
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "OCS_EX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OCS_EX. Physical source contact JP4.4.",
        "x": 11.43,
        "y": 3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"20.646\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.705\" y=\"-10.4154\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.889\" y=\"-1.397\" width=\"3.302\" height=\"2.794\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.64\" y=\"-1.1\" width=\"2.2\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.011\" y=\"3.81\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.404\" y=\"3.378\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.536\" y=\"-5.182\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.361\" y=\"-5.182\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.04\" y=\"2.883\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.04\" y=\"0.965\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.632\" y=\"3.708\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.867\" y=\"3.708\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.7975\" y=\"-3.658\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.1719\" y=\"-3.6961\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"7.239\" y=\"0.254\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.922\" y=\"0.254\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit ISM330DHCX + LIS3MDL FeatherWing.brd",
      "boardSha256": "c6bfa5b3a2f28c39be95da38cac942aba145a54f71c7998166cf4d13b83cbb6d",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "CONN4",
        "MS1",
        "JP3",
        "JP2",
        "MAG_HDR",
        "JP1",
        "JP4"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "MS1.27 passive pass-through verified from schematic endpoints.",
        "MS1.26 passive pass-through verified from schematic endpoints.",
        "MS1.25 passive pass-through verified from schematic endpoints.",
        "MS1.24 passive pass-through verified from schematic endpoints.",
        "MS1.23 passive pass-through verified from schematic endpoints.",
        "MS1.22 passive pass-through verified from schematic endpoints.",
        "MS1.21 passive pass-through verified from schematic endpoints.",
        "MS1.20 passive pass-through verified from schematic endpoints.",
        "MS1.19 passive pass-through verified from schematic endpoints.",
        "MS1.5 passive pass-through verified from schematic endpoints.",
        "MS1.6 passive pass-through verified from schematic endpoints.",
        "MS1.7 passive pass-through verified from schematic endpoints.",
        "MS1.8 passive pass-through verified from schematic endpoints.",
        "MS1.9 passive pass-through verified from schematic endpoints.",
        "MS1.10 passive pass-through verified from schematic endpoints.",
        "MS1.11 passive pass-through verified from schematic endpoints.",
        "MS1.12 passive pass-through verified from schematic endpoints.",
        "MS1.13 passive pass-through verified from schematic endpoints.",
        "MS1.14 passive pass-through verified from schematic endpoints.",
        "MS1.15 passive pass-through verified from schematic endpoints.",
        "MS1.16 passive pass-through verified from schematic endpoints.",
        "MS1.3 passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "JP3.2 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints.",
        "JP3.5 passive pass-through verified from schematic endpoints.",
        "JP3.6 passive pass-through verified from schematic endpoints.",
        "JP3.7 passive pass-through verified from schematic endpoints.",
        "JP3.8 passive pass-through verified from schematic endpoints.",
        "JP3.9 passive pass-through verified from schematic endpoints.",
        "JP3.10 passive pass-through verified from schematic endpoints.",
        "JP3.11 passive pass-through verified from schematic endpoints.",
        "JP3.12 passive pass-through verified from schematic endpoints.",
        "JP3.14 passive pass-through verified from schematic endpoints.",
        "JP2.2 passive pass-through verified from schematic endpoints.",
        "JP2.3 passive pass-through verified from schematic endpoints.",
        "JP2.4 passive pass-through verified from schematic endpoints.",
        "JP2.5 passive pass-through verified from schematic endpoints.",
        "JP2.6 passive pass-through verified from schematic endpoints.",
        "JP2.7 passive pass-through verified from schematic endpoints.",
        "JP2.8 passive pass-through verified from schematic endpoints.",
        "JP2.9 passive pass-through verified from schematic endpoints.",
        "JP2.10 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "MS1.27",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.26",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.25",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.24",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.23",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.22",
          "sourceNet": "K",
          "before": {
            "type": "unspecified",
            "label": "K"
          },
          "after": {
            "type": "passive",
            "label": "K"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.21",
          "sourceNet": "J",
          "before": {
            "type": "unspecified",
            "label": "J"
          },
          "after": {
            "type": "passive",
            "label": "J"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.20",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.19",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.5",
          "sourceNet": "A",
          "before": {
            "type": "unspecified",
            "label": "A"
          },
          "after": {
            "type": "passive",
            "label": "A"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.6",
          "sourceNet": "B",
          "before": {
            "type": "unspecified",
            "label": "B"
          },
          "after": {
            "type": "passive",
            "label": "B"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.7",
          "sourceNet": "C",
          "before": {
            "type": "unspecified",
            "label": "C"
          },
          "after": {
            "type": "passive",
            "label": "C"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.8",
          "sourceNet": "D",
          "before": {
            "type": "unspecified",
            "label": "D"
          },
          "after": {
            "type": "passive",
            "label": "D"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.9",
          "sourceNet": "E",
          "before": {
            "type": "unspecified",
            "label": "E"
          },
          "after": {
            "type": "passive",
            "label": "E"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.10",
          "sourceNet": "F",
          "before": {
            "type": "unspecified",
            "label": "F"
          },
          "after": {
            "type": "passive",
            "label": "F"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.16",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "MS1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.1",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.7",
          "sourceNet": "F",
          "before": {
            "type": "unspecified",
            "label": "F"
          },
          "after": {
            "type": "passive",
            "label": "F"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.8",
          "sourceNet": "E",
          "before": {
            "type": "unspecified",
            "label": "E"
          },
          "after": {
            "type": "passive",
            "label": "E"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.9",
          "sourceNet": "D",
          "before": {
            "type": "unspecified",
            "label": "D"
          },
          "after": {
            "type": "passive",
            "label": "D"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.10",
          "sourceNet": "C",
          "before": {
            "type": "unspecified",
            "label": "C"
          },
          "after": {
            "type": "passive",
            "label": "C"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.11",
          "sourceNet": "B",
          "before": {
            "type": "unspecified",
            "label": "B"
          },
          "after": {
            "type": "passive",
            "label": "B"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.12",
          "sourceNet": "A",
          "before": {
            "type": "unspecified",
            "label": "A"
          },
          "after": {
            "type": "passive",
            "label": "A"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP3.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.2",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.3",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.4",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.5",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.6",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.7",
          "sourceNet": "K",
          "before": {
            "type": "unspecified",
            "label": "K"
          },
          "after": {
            "type": "passive",
            "label": "K"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.8",
          "sourceNet": "J",
          "before": {
            "type": "unspecified",
            "label": "J"
          },
          "after": {
            "type": "passive",
            "label": "J"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.9",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        },
        {
          "number": "JP2.10",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/Adafruit ISM330DHCX + LIS3MDL FeatherWing.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB",
      "commit": "bd7f6d63e4edaed3d9089f1c9197f40e5a437c67",
      "boardURL": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/Adafruit%20ISM330DHCX%20%2B%20LIS3MDL%20FeatherWing.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/Adafruit%20ISM330DHCX%20%2B%20LIS3MDL%20FeatherWing.sch",
      "schematicSha256": "8c032683c181eb4bdd33bf90f10ccb3da14cccdde5964adc3c97d6f4131c4da4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/license.txt",
      "sourceArchiveSha256": "7bb32267798231b3b5cc86fa69059d08efdd368ff8d9821a05d997f58c9a439c",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "MS1.27: unresolved electrical role on EN.",
        "MS1.26: unresolved electrical role on USB.",
        "MS1.25: unresolved electrical role on N.",
        "MS1.24: unresolved electrical role on M.",
        "MS1.23: unresolved electrical role on L.",
        "MS1.22: unresolved electrical role on K.",
        "MS1.21: unresolved electrical role on J.",
        "MS1.20: unresolved electrical role on I.",
        "MS1.19: unresolved electrical role on H.",
        "MS1.5: unresolved electrical role on A.",
        "MS1.6: unresolved electrical role on B.",
        "MS1.7: unresolved electrical role on C.",
        "MS1.8: unresolved electrical role on D.",
        "MS1.9: unresolved electrical role on E.",
        "MS1.10: unresolved electrical role on F.",
        "MS1.11: unresolved electrical role on SCK.",
        "MS1.12: unresolved electrical role on MOSI.",
        "MS1.13: unresolved electrical role on MISO.",
        "MS1.14: unresolved electrical role on RX.",
        "MS1.15: unresolved electrical role on TX.",
        "MS1.16: unresolved electrical role on G.",
        "MS1.3: unresolved electrical role on AREF.",
        "JP3.1: unresolved electrical role on G.",
        "JP3.2: unresolved electrical role on TX.",
        "JP3.3: unresolved electrical role on RX.",
        "JP3.4: unresolved electrical role on MISO.",
        "JP3.5: unresolved electrical role on MOSI.",
        "JP3.6: unresolved electrical role on SCK.",
        "JP3.7: unresolved electrical role on F.",
        "JP3.8: unresolved electrical role on E.",
        "JP3.9: unresolved electrical role on D.",
        "JP3.10: unresolved electrical role on C.",
        "JP3.11: unresolved electrical role on B.",
        "JP3.12: unresolved electrical role on A.",
        "JP3.14: unresolved electrical role on AREF.",
        "JP2.2: unresolved electrical role on EN.",
        "JP2.3: unresolved electrical role on USB.",
        "JP2.4: unresolved electrical role on N.",
        "JP2.5: unresolved electrical role on M.",
        "JP2.6: unresolved electrical role on L.",
        "JP2.7: unresolved electrical role on K.",
        "JP2.8: unresolved electrical role on J.",
        "JP2.9: unresolved electrical role on I.",
        "JP2.10: unresolved electrical role on H."
      ]
    }
  },
  "adafruit-module-4300": {
    "contacts": [
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "A5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A5. Physical source contact TP3.P$1.",
        "x": -9.9695,
        "y": 24.0157,
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
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A4. Physical source contact TP4.P$1.",
        "x": -3.175,
        "y": 27.4447,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP4",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "tp28-p-1",
        "number": "TP28.P$1",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact TP28.P$1.",
        "x": 3.302,
        "y": 27.5082,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP28",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "tp29-p-1",
        "number": "TP29.P$1",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact TP29.P$1.",
        "x": 10.033,
        "y": 24.0157,
        "size": [
          4.216,
          4.216
        ],
        "shape": "circle",
        "connector": "TP29",
        "back": false,
        "drill": 3.2
      },
      {
        "id": "x2-sprt-4",
        "number": "X2.SPRT@4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT@4.",
        "x": -3.6,
        "y": -27.4778,
        "size": [
          2.413,
          2.413
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x2-sprt-3",
        "number": "X2.SPRT@3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT@3.",
        "x": 3.6,
        "y": -27.4778,
        "size": [
          2.413,
          2.413
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "x2-sprt-1",
        "number": "X2.SPRT@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT@1.",
        "x": 3.3,
        "y": -24.6778,
        "size": [
          1.143,
          1.143
        ],
        "shape": "circle",
        "connector": "X2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x2-sprt-2",
        "number": "X2.SPRT@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.SPRT@2.",
        "x": -3.3,
        "y": -24.6778,
        "size": [
          1.143,
          1.143
        ],
        "shape": "circle",
        "connector": "X2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "x2-vbus",
        "number": "X2.VBUS",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X2.VBUS.",
        "x": 1.3,
        "y": -24.8028,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-d-",
        "number": "X2.D-",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X2.D-.",
        "x": 0.65,
        "y": -24.8028,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-dplus",
        "number": "X2.D+",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X2.D+.",
        "x": 0,
        "y": -24.8028,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-id",
        "number": "X2.ID",
        "label": "D13_JACDAC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13_JACDAC. Physical source contact X2.ID.",
        "x": -0.65,
        "y": -24.8028,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-gnd",
        "number": "X2.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.GND.",
        "x": -1.3,
        "y": -24.8028,
        "size": [
          0.4,
          1.35
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-base-1",
        "number": "X2.BASE@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.BASE@1.",
        "x": 0.75,
        "y": -27.5778,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-base-2",
        "number": "X2.BASE@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.BASE@2.",
        "x": -0.75,
        "y": -27.5778,
        "size": [
          1,
          2
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-1",
        "number": "X4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.1.",
        "x": 6.9045,
        "y": -20.3548,
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
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X4.2.",
        "x": 6.9045,
        "y": -18.3548,
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
        "id": "ms2-1",
        "number": "MS2.1",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact MS2.1.",
        "x": -9.017,
        "y": -23.4188,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-1b",
        "number": "MS2.1B",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact MS2.1B.",
        "x": -13.843,
        "y": -23.4188,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-2",
        "number": "MS2.2",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact MS2.2.",
        "x": -9.017,
        "y": -20.8788,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-2b",
        "number": "MS2.2B",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact MS2.2B.",
        "x": -13.843,
        "y": -20.8788,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-3b",
        "number": "MS2.3B",
        "label": "AVCC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AVCC. Physical source contact MS2.3B.",
        "x": -13.589,
        "y": -18.3388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-3",
        "number": "MS2.3",
        "label": "AVCC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AVCC. Physical source contact MS2.3.",
        "x": -9.271,
        "y": -18.3388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-4b",
        "number": "MS2.4B",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS2.4B.",
        "x": -13.589,
        "y": -15.7988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-4",
        "number": "MS2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS2.4.",
        "x": -9.271,
        "y": -15.7988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-5b",
        "number": "MS2.5B",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact MS2.5B.",
        "x": -13.589,
        "y": -13.2588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-5",
        "number": "MS2.5",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact MS2.5.",
        "x": -9.271,
        "y": -13.2588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-6b",
        "number": "MS2.6B",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact MS2.6B.",
        "x": -13.589,
        "y": -10.7188,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-6",
        "number": "MS2.6",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact MS2.6.",
        "x": -9.271,
        "y": -10.7188,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-7b",
        "number": "MS2.7B",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact MS2.7B.",
        "x": -13.589,
        "y": -8.1788,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-7",
        "number": "MS2.7",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact MS2.7.",
        "x": -9.271,
        "y": -8.1788,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-8b",
        "number": "MS2.8B",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact MS2.8B.",
        "x": -13.589,
        "y": -5.6388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-8",
        "number": "MS2.8",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact MS2.8.",
        "x": -9.271,
        "y": -5.6388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-9b",
        "number": "MS2.9B",
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A4. Physical source contact MS2.9B.",
        "x": -13.589,
        "y": -3.0988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-9",
        "number": "MS2.9",
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A4. Physical source contact MS2.9.",
        "x": -9.271,
        "y": -3.0988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-10b",
        "number": "MS2.10B",
        "label": "A5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A5. Physical source contact MS2.10B.",
        "x": -13.589,
        "y": -0.5588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-10",
        "number": "MS2.10",
        "label": "A5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A5. Physical source contact MS2.10.",
        "x": -9.271,
        "y": -0.5588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-11b",
        "number": "MS2.11B",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact MS2.11B.",
        "x": -13.589,
        "y": 1.9812,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-11",
        "number": "MS2.11",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact MS2.11.",
        "x": -9.271,
        "y": 1.9812,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-12b",
        "number": "MS2.12B",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact MS2.12B.",
        "x": -13.589,
        "y": 4.5212,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-12",
        "number": "MS2.12",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact MS2.12.",
        "x": -9.271,
        "y": 4.5212,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-13b",
        "number": "MS2.13B",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact MS2.13B.",
        "x": -13.589,
        "y": 7.0612,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-13",
        "number": "MS2.13",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact MS2.13.",
        "x": -9.271,
        "y": 7.0612,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-14b",
        "number": "MS2.14B",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact MS2.14B.",
        "x": -13.589,
        "y": 9.6012,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-14",
        "number": "MS2.14",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact MS2.14.",
        "x": -9.271,
        "y": 9.6012,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-15b",
        "number": "MS2.15B",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact MS2.15B.",
        "x": -13.843,
        "y": 12.1412,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-15",
        "number": "MS2.15",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact MS2.15.",
        "x": -9.017,
        "y": 12.1412,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-16b",
        "number": "MS2.16B",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact MS2.16B.",
        "x": -13.843,
        "y": 14.6812,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-16",
        "number": "MS2.16",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact MS2.16.",
        "x": -9.017,
        "y": 14.6812,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-28b",
        "number": "MS2.28B",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS2.28B.",
        "x": 13.843,
        "y": -13.2588,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-28",
        "number": "MS2.28",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS2.28.",
        "x": 9.017,
        "y": -13.2588,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-27b",
        "number": "MS2.27B",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact MS2.27B.",
        "x": 13.843,
        "y": -10.7188,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-27",
        "number": "MS2.27",
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact MS2.27.",
        "x": 9.017,
        "y": -10.7188,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-26",
        "number": "MS2.26",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact MS2.26.",
        "x": 9.271,
        "y": -8.1788,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-26b",
        "number": "MS2.26B",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact MS2.26B.",
        "x": 13.589,
        "y": -8.1788,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-25",
        "number": "MS2.25",
        "label": "D13_JACDAC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13_JACDAC. Physical source contact MS2.25.",
        "x": 9.271,
        "y": -5.6388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-25b",
        "number": "MS2.25B",
        "label": "D13_JACDAC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13_JACDAC. Physical source contact MS2.25B.",
        "x": 13.589,
        "y": -5.6388,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-24",
        "number": "MS2.24",
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact MS2.24.",
        "x": 9.271,
        "y": -3.0988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-24b",
        "number": "MS2.24B",
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact MS2.24B.",
        "x": 13.589,
        "y": -3.0988,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-23",
        "number": "MS2.23",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact MS2.23.",
        "x": 9.271,
        "y": -0.5588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-23b",
        "number": "MS2.23B",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact MS2.23B.",
        "x": 13.589,
        "y": -0.5588,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-22",
        "number": "MS2.22",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact MS2.22.",
        "x": 9.271,
        "y": 1.9812,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-22b",
        "number": "MS2.22B",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact MS2.22B.",
        "x": 13.589,
        "y": 1.9812,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-21",
        "number": "MS2.21",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact MS2.21.",
        "x": 9.271,
        "y": 4.5212,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-21b",
        "number": "MS2.21B",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact MS2.21B.",
        "x": 13.589,
        "y": 4.5212,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-20",
        "number": "MS2.20",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact MS2.20.",
        "x": 9.271,
        "y": 7.0612,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-20b",
        "number": "MS2.20B",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact MS2.20B.",
        "x": 13.589,
        "y": 7.0612,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-19",
        "number": "MS2.19",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact MS2.19.",
        "x": 9.271,
        "y": 9.6012,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-19b",
        "number": "MS2.19B",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact MS2.19B.",
        "x": 13.589,
        "y": 9.6012,
        "size": [
          3.048,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-18",
        "number": "MS2.18",
        "label": "SCL_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_3V. I2C serial clock / source-listed alternate function. Physical source contact MS2.18.",
        "x": 9.017,
        "y": 12.1412,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-18b",
        "number": "MS2.18B",
        "label": "SCL_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL_3V. I2C serial clock / source-listed alternate function. Physical source contact MS2.18B.",
        "x": 13.843,
        "y": 12.1412,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-17",
        "number": "MS2.17",
        "label": "SDA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_3V. I2C serial data / source-listed alternate function. Physical source contact MS2.17.",
        "x": 9.017,
        "y": 14.6812,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "ms2-17b",
        "number": "MS2.17B",
        "label": "SDA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA_3V. I2C serial data / source-listed alternate function. Physical source contact MS2.17B.",
        "x": 13.843,
        "y": 14.6812,
        "size": [
          2.54,
          1.524
        ],
        "shape": "rect",
        "connector": "MS2",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-1",
        "number": "SENSE1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact SENSE1.1.",
        "x": 18.1915,
        "y": -11.9568,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-2",
        "number": "SENSE1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact SENSE1.2.",
        "x": 18.1915,
        "y": -9.9568,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "sense1-3",
        "number": "SENSE1.3",
        "label": "D2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D2. Physical source contact SENSE1.3.",
        "x": 18.1915,
        "y": -7.9568,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "SENSE1",
        "back": false,
        "smd": true
      },
      {
        "id": "neopix1-1",
        "number": "NEOPIX1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact NEOPIX1.1.",
        "x": -18.1915,
        "y": 10.0137,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "NEOPIX1",
        "back": false,
        "smd": true
      },
      {
        "id": "neopix1-2",
        "number": "NEOPIX1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact NEOPIX1.2.",
        "x": -18.1915,
        "y": 8.0137,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "NEOPIX1",
        "back": false,
        "smd": true
      },
      {
        "id": "neopix1-3",
        "number": "NEOPIX1.3",
        "label": "D3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D3. Physical source contact NEOPIX1.3.",
        "x": -18.1915,
        "y": 6.0137,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "NEOPIX1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-1",
        "number": "I2C1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact I2C1.1.",
        "x": 18.144,
        "y": 3.8072,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-2",
        "number": "I2C1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact I2C1.2.",
        "x": 18.144,
        "y": 5.8072,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-nc1",
        "number": "I2C1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact I2C1.NC1.",
        "x": 23.344,
        "y": 1.1072,
        "size": [
          3.4,
          1.7
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-nc2",
        "number": "I2C1.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact I2C1.NC2.",
        "x": 23.344,
        "y": 12.5072,
        "size": [
          3.4,
          1.7
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-3",
        "number": "I2C1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact I2C1.3.",
        "x": 18.144,
        "y": 7.8072,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "i2c1-4",
        "number": "I2C1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact I2C1.4.",
        "x": 18.144,
        "y": 9.8072,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "I2C1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp6-p-1",
        "number": "TP6.P$1",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact TP6.P$1.",
        "x": -3.3655,
        "y": -12.5603,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp7-p-1",
        "number": "TP7.P$1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact TP7.P$1.",
        "x": -3.81,
        "y": -9.4488,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": false,
        "smd": true
      },
      {
        "id": "u-59-1",
        "number": "U$59.1",
        "label": "SPKR-",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SPKR-. Physical source contact U$59.1.",
        "x": -20.8915,
        "y": -9.3118,
        "size": [
          1.6,
          0.8
        ],
        "shape": "rect",
        "connector": "U$59",
        "back": false,
        "smd": true
      },
      {
        "id": "u-59-2",
        "number": "U$59.2",
        "label": "SPKR+",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SPKR+. Physical source contact U$59.2.",
        "x": -20.8915,
        "y": -8.0618,
        "size": [
          1.6,
          0.8
        ],
        "shape": "rect",
        "connector": "U$59",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.494\" y=\"-29.7688\" width=\"30.988\" height=\"50.8\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.344\" y=\"0.8072\" width=\"7.5\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.654\" y=\"-5.4668\" width=\"8.8\" height=\"8.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.3915\" y=\"-14.9568\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.8915\" y=\"3.0137\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.1045\" y=\"-23.3548\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.35\" y=\"-30.4778\" width=\"8.325\" height=\"6.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.954\" y=\"-12.4368\" width=\"4.3751\" height=\"7.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.342955\" y=\"-28.966845\" width=\"5.12709\" height=\"5.12709\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.521\" y=\"16.0427\" width=\"7.2\" height=\"3.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4725\" y=\"8.2172\" width=\"5.23\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.3625\" y=\"-11.6028\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.013\" y=\"14.7497\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.7325\" y=\"-17.3863\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.003\" y=\"-4.2098\" width=\"2.0\" height=\"4.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.78\" y=\"13.5542\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.003\" y=\"-4.2098\" width=\"2.0\" height=\"4.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.78\" y=\"13.5542\" width=\"4.0\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4585\" y=\"-15.5438\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.666\" y=\"-16.9123\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.1545\" y=\"10.7237\" width=\"2.2\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.738\" y=\"-9.1158\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.4811\" y=\"-3.2639\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4121\" y=\"-20.7772\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4121\" y=\"-17.9832\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.714096\" y=\"-28.086914\" width=\"1.827823\" height=\"1.700823\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.939\" y=\"-0.6238\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.0975\" y=\"-2.6558\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5185\" y=\"15.9942\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.7465\" y=\"-23.4838\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.1635\" y=\"-28.6203\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3535\" y=\"-28.6618\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.182\" y=\"7.1247\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.7045\" y=\"-11.1668\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.01\" y=\"-21.2598\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.345\" y=\"-13.0048\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.6911\" y=\"-16.027\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.17\" y=\"-19.6723\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.733\" y=\"1.0672\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.524\" y=\"-20.7133\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.143\" y=\"-11.7598\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.9525\" y=\"-13.5378\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.7055\" y=\"-24.7908\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.6915\" y=\"-13.1063\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.4375\" y=\"-11.7223\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.87\" y=\"22.8977\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.9955\" y=\"-4.0893\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.607\" y=\"22.8977\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.533\" y=\"1.1682\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.2409\" y=\"-5.4609\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.329\" y=\"-18.6943\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.2315\" y=\"-20.9933\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.5645\" y=\"-17.3608\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.118\" y=\"-9.9948\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.7395\" y=\"13.3097\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1345\" y=\"5.9437\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.42\" y=\"-14.8338\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.363\" y=\"-14.3643\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1345\" y=\"4.4197\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.581\" y=\"19.6597\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.628\" y=\"-2.5658\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.626\" y=\"-18.9613\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.7405\" y=\"-25.0573\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.5655\" y=\"-25.1078\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.2955\" y=\"22.0092\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"21.9962\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.913\" y=\"-25.8698\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-15.633\" y=\"-21.9133\" width=\"31.52\" height=\"34.74\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Hallowing M4.brd",
      "boardSha256": "09cf259848c308a9d2783e053de8d17dadc349d42cf11c545a7b23a345fa6dd3",
      "sourceBounds": [
        -25.4,
        -30.226,
        25.4,
        29.870400000000004
      ],
      "selectedConnectors": [
        "TP3",
        "TP4",
        "TP28",
        "TP29",
        "X2",
        "X4",
        "MS2",
        "SENSE1",
        "NEOPIX1",
        "I2C1",
        "TP6",
        "TP7",
        "U$59"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "TP6.P$1",
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
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U$63",
              "pin": "PA30/I14/SERCOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Hallowing-M4-PCB/Adafruit Hallowing M4.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [
          "U$59"
        ],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [
          "U$59.M1",
          "U$59.M2"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "referenceCopperReview": {
        "sourceWarnings": [
          "X2.SPRT@1: offset copper shape needs a native-land review.",
          "X2.SPRT@2: offset copper shape needs a native-land review."
        ],
        "scope": "Exact source drill centers retained; offset copper is simplified to round reference lands at those centers, not a qualified manufacturer production pattern.",
        "status": "R"
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Hallowing-M4-PCB",
      "commit": "24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27",
      "boardURL": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/Adafruit%20Hallowing%20M4.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/Adafruit%20Hallowing%20M4.sch",
      "schematicSha256": "c780bc98427605009974cb4c9a982c4a733614542cd2752ae5e502b9684d525e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/license.txt",
      "sourceArchiveSha256": "28e212ace8bff154e7b0690c8d1a409e29961f9e9bde6ce34341df710710638d",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "X2.SPRT@1: offset copper shape needs a native-land review.",
        "X2.SPRT@2: offset copper shape needs a native-land review."
      ]
    }
  },
  "adafruit-module-5679": {
    "contacts": [
      {
        "id": "ms1-p-1",
        "number": "MS1.P$1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$1.",
        "x": 22.86,
        "y": -8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-p-2",
        "number": "MS1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$2.",
        "x": 22.86,
        "y": 8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-28",
        "number": "MS1.28",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS1.28.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-27",
        "number": "MS1.27",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact MS1.27.",
        "x": 6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-26",
        "number": "MS1.26",
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact MS1.26.",
        "x": 3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-25",
        "number": "MS1.25",
        "label": "WRDATA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRDATA_3V. Physical source contact MS1.25.",
        "x": 1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-24",
        "number": "MS1.24",
        "label": "WRGATE_3V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: WRGATE_3V. Physical source contact MS1.24.",
        "x": -1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-23",
        "number": "MS1.23",
        "label": "WRPROT_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRPROT_3V. Physical source contact MS1.23.",
        "x": -3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-22",
        "number": "MS1.22",
        "label": "TRACK0_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRACK0_3V. Physical source contact MS1.22.",
        "x": -6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-21",
        "number": "MS1.21",
        "label": "RDDATA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RDDATA_3V. Physical source contact MS1.21.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-20",
        "number": "MS1.20",
        "label": "SIDE_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIDE_3V. Physical source contact MS1.20.",
        "x": -11.43,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-19",
        "number": "MS1.19",
        "label": "READY_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: READY_3V. Physical source contact MS1.19.",
        "x": -13.97,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-18",
        "number": "MS1.18",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact MS1.18.",
        "x": -16.51,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-17",
        "number": "MS1.17",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact MS1.17.",
        "x": -19.05,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-5",
        "number": "MS1.5",
        "label": "SELECT_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SELECT_3V. Physical source contact MS1.5.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-6",
        "number": "MS1.6",
        "label": "DENSITY_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DENSITY_3V. Physical source contact MS1.6.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-7",
        "number": "MS1.7",
        "label": "MOTOR_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOTOR_3V. Physical source contact MS1.7.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-8",
        "number": "MS1.8",
        "label": "DIR_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIR_3V. Physical source contact MS1.8.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-9",
        "number": "MS1.9",
        "label": "STEP_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: STEP_3V. Physical source contact MS1.9.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-10",
        "number": "MS1.10",
        "label": "INDEX_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INDEX_3V. Physical source contact MS1.10.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-11",
        "number": "MS1.11",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact MS1.11.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-12",
        "number": "MS1.12",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact MS1.12.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-13",
        "number": "MS1.13",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact MS1.13.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-14",
        "number": "MS1.14",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact MS1.14.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-15",
        "number": "MS1.15",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact MS1.15.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-16",
        "number": "MS1.16",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact MS1.16.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-4",
        "number": "MS1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS1.4.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-3",
        "number": "MS1.3",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact MS1.3.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-2",
        "number": "MS1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact MS1.2.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-1",
        "number": "MS1.1",
        "label": "RESET",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RESET. Physical source contact MS1.1.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact JP3.1.",
        "x": -19.05,
        "y": 7.62,
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
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP3.2.",
        "x": -16.51,
        "y": 7.62,
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
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP3.3.",
        "x": -13.97,
        "y": 7.62,
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
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP3.4.",
        "x": -11.43,
        "y": 7.62,
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
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP3.5.",
        "x": -8.89,
        "y": 7.62,
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
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP3.6.",
        "x": -6.35,
        "y": 7.62,
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
        "label": "INDEX_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INDEX_3V. Physical source contact JP3.7.",
        "x": -3.81,
        "y": 7.62,
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
        "label": "STEP_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: STEP_3V. Physical source contact JP3.8.",
        "x": -1.27,
        "y": 7.62,
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
        "label": "DIR_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIR_3V. Physical source contact JP3.9.",
        "x": 1.27,
        "y": 7.62,
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
        "label": "MOTOR_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOTOR_3V. Physical source contact JP3.10.",
        "x": 3.81,
        "y": 7.62,
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
        "label": "DENSITY_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DENSITY_3V. Physical source contact JP3.11.",
        "x": 6.35,
        "y": 7.62,
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
        "label": "SELECT_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SELECT_3V. Physical source contact JP3.12.",
        "x": 8.89,
        "y": 7.62,
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
        "x": 11.43,
        "y": 7.62,
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
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact JP3.14.",
        "x": 13.97,
        "y": 7.62,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP3.15.",
        "x": 16.51,
        "y": 7.62,
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
        "label": "RESET",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RESET. Physical source contact JP3.16.",
        "x": 19.05,
        "y": 7.62,
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
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP1.1.",
        "x": 8.89,
        "y": -7.62,
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
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact JP1.2.",
        "x": 6.35,
        "y": -7.62,
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
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact JP1.3.",
        "x": 3.81,
        "y": -7.62,
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
        "label": "WRDATA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRDATA_3V. Physical source contact JP1.4.",
        "x": 1.27,
        "y": -7.62,
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
        "label": "WRGATE_3V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: WRGATE_3V. Physical source contact JP1.5.",
        "x": -1.27,
        "y": -7.62,
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
        "label": "WRPROT_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRPROT_3V. Physical source contact JP1.6.",
        "x": -3.81,
        "y": -7.62,
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
        "label": "TRACK0_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRACK0_3V. Physical source contact JP1.7.",
        "x": -6.35,
        "y": -7.62,
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
        "label": "RDDATA_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RDDATA_3V. Physical source contact JP1.8.",
        "x": -8.89,
        "y": -7.62,
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
        "label": "SIDE_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIDE_3V. Physical source contact JP1.9.",
        "x": -11.43,
        "y": -7.62,
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
        "label": "READY_3V",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: READY_3V. Physical source contact JP1.10.",
        "x": -13.97,
        "y": -7.62,
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
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.11.",
        "x": -16.51,
        "y": -7.62,
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
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.12.",
        "x": -19.05,
        "y": -7.62,
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
        "id": "fdd1-1",
        "number": "FDD1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.1.",
        "x": 20.32,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-2",
        "number": "FDD1.2",
        "label": "DENSITY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DENSITY. Physical source contact FDD1.2.",
        "x": 20.32,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-3",
        "number": "FDD1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.3.",
        "x": 17.78,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-4",
        "number": "FDD1.4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact FDD1.4.",
        "x": 17.78,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-5",
        "number": "FDD1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.5.",
        "x": 15.24,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-6",
        "number": "FDD1.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact FDD1.6.",
        "x": 15.24,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-7",
        "number": "FDD1.7",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.7.",
        "x": 12.7,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-8",
        "number": "FDD1.8",
        "label": "INDEX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: INDEX. Physical source contact FDD1.8.",
        "x": 12.7,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-9",
        "number": "FDD1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.9.",
        "x": 10.16,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-10",
        "number": "FDD1.10",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact FDD1.10.",
        "x": 10.16,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-11",
        "number": "FDD1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.11.",
        "x": 7.62,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-12",
        "number": "FDD1.12",
        "label": "SELECT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SELECT. Physical source contact FDD1.12.",
        "x": 7.62,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-13",
        "number": "FDD1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.13.",
        "x": 5.08,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-14",
        "number": "FDD1.14",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact FDD1.14.",
        "x": 5.08,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-15",
        "number": "FDD1.15",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.15.",
        "x": 2.54,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-16",
        "number": "FDD1.16",
        "label": "MOTOR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOTOR. Physical source contact FDD1.16.",
        "x": 2.54,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-17",
        "number": "FDD1.17",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.17.",
        "x": 0,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-18",
        "number": "FDD1.18",
        "label": "DIRECTION",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIRECTION. Physical source contact FDD1.18.",
        "x": 0,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-19",
        "number": "FDD1.19",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.19.",
        "x": -2.54,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-20",
        "number": "FDD1.20",
        "label": "STEP",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: STEP. Physical source contact FDD1.20.",
        "x": -2.54,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-21",
        "number": "FDD1.21",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.21.",
        "x": -5.08,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-22",
        "number": "FDD1.22",
        "label": "WRDATA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRDATA. Physical source contact FDD1.22.",
        "x": -5.08,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-23",
        "number": "FDD1.23",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.23.",
        "x": -7.62,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-24",
        "number": "FDD1.24",
        "label": "WRGATE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRGATE. Physical source contact FDD1.24.",
        "x": -7.62,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-25",
        "number": "FDD1.25",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.25.",
        "x": -10.16,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-26",
        "number": "FDD1.26",
        "label": "TRACK0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TRACK0. Physical source contact FDD1.26.",
        "x": -10.16,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-27",
        "number": "FDD1.27",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.27.",
        "x": -12.7,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-28",
        "number": "FDD1.28",
        "label": "WRPROT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: WRPROT. Physical source contact FDD1.28.",
        "x": -12.7,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-29",
        "number": "FDD1.29",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.29.",
        "x": -15.24,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-30",
        "number": "FDD1.30",
        "label": "READDATA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: READDATA. Physical source contact FDD1.30.",
        "x": -15.24,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-31",
        "number": "FDD1.31",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.31.",
        "x": -17.78,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-32",
        "number": "FDD1.32",
        "label": "SIDE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SIDE. Physical source contact FDD1.32.",
        "x": -17.78,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-33",
        "number": "FDD1.33",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact FDD1.33.",
        "x": -20.32,
        "y": 3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "fdd1-34",
        "number": "FDD1.34",
        "label": "READY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: READY. Physical source contact FDD1.34.",
        "x": -20.32,
        "y": -3.278,
        "size": [
          1.27,
          3.81
        ],
        "shape": "rect",
        "connector": "FDD1",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": 17.294,
        "y": -8.763,
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
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact X1.2.",
        "x": 13.794,
        "y": -8.763,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-3.986\" y=\"-0.885\" width=\"6.956\" height=\"5.072\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.781\" y=\"-3.806\" width=\"6.956\" height=\"5.072\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.422\" y=\"-3.4\" width=\"4.1\" height=\"6.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.496\" y=\"-5.1385\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.6\" y=\"3.299\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.884\" y=\"-5.5275\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.684\" y=\"-0.434\" width=\"1.62\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.763\" y=\"3.4675\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.405\" y=\"0.508\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.373\" y=\"3.264\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.167\" y=\"3.581\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.518\" y=\"-0.8005\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.11\" y=\"0.7235\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-25.39\" y=\"-4.5\" width=\"50.78\" height=\"9.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.094\" y=\"-12.363\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Floppy FeatherWing.brd",
      "boardSha256": "4292b97d36e58b6ca39cec23a032506d6ac68e747b6868d6ca5c4972ddd02dc4",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "MS1",
        "JP3",
        "JP1",
        "FDD1",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "MS1.27 passive pass-through verified from schematic endpoints.",
        "MS1.26 passive pass-through verified from schematic endpoints.",
        "MS1.18 passive pass-through verified from schematic endpoints.",
        "MS1.17 passive pass-through verified from schematic endpoints.",
        "MS1.11 passive pass-through verified from schematic endpoints.",
        "MS1.12 passive pass-through verified from schematic endpoints.",
        "MS1.13 passive pass-through verified from schematic endpoints.",
        "MS1.14 passive pass-through verified from schematic endpoints.",
        "MS1.15 passive pass-through verified from schematic endpoints.",
        "MS1.16 passive pass-through verified from schematic endpoints.",
        "MS1.3 passive pass-through verified from schematic endpoints.",
        "MS1.1 passive pass-through verified from schematic endpoints.",
        "JP3.1 passive pass-through verified from schematic endpoints.",
        "JP3.2 passive pass-through verified from schematic endpoints.",
        "JP3.3 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints.",
        "JP3.5 passive pass-through verified from schematic endpoints.",
        "JP3.6 passive pass-through verified from schematic endpoints.",
        "JP3.14 passive pass-through verified from schematic endpoints.",
        "JP3.16 passive pass-through verified from schematic endpoints.",
        "JP1.2 passive pass-through verified from schematic endpoints.",
        "JP1.3 passive pass-through verified from schematic endpoints.",
        "JP1.11 passive pass-through verified from schematic endpoints.",
        "JP1.12 passive pass-through verified from schematic endpoints.",
        "X1.2 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "MS1.27",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.26",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.18",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.17",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.16",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "MS1.1",
          "sourceNet": "RESET",
          "before": {
            "type": "unspecified",
            "label": "RESET"
          },
          "after": {
            "type": "passive",
            "label": "RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.1",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP3.16",
          "sourceNet": "RESET",
          "before": {
            "type": "unspecified",
            "label": "RESET"
          },
          "after": {
            "type": "passive",
            "label": "RESET"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP1.2",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP1.3",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "JP1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        },
        {
          "number": "X1.2",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit_Floppy_FeatherWing_PCB/Adafruit Floppy FeatherWing.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit_Floppy_FeatherWing_PCB",
      "commit": "8793e86222bd62b1ee243e07e97a8de9ff6a7e7e",
      "boardURL": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/Adafruit%20Floppy%20FeatherWing.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/Adafruit%20Floppy%20FeatherWing.sch",
      "schematicSha256": "764d1e03cc2e10074eb1d07ff7ea39782d118baba7222c09c8b35f1e398c74fa",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/license.txt",
      "sourceArchiveSha256": "5c0d216c8d5c8377489b807600a836bf67c4b9808abae4534d762e0fe215dbfb",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "MS1.27: unresolved electrical role on EN.",
        "MS1.26: unresolved electrical role on USB.",
        "MS1.18: unresolved electrical role on SCL.",
        "MS1.17: unresolved electrical role on SDA.",
        "MS1.11: unresolved electrical role on SCK.",
        "MS1.12: unresolved electrical role on MOSI.",
        "MS1.13: unresolved electrical role on MISO.",
        "MS1.14: unresolved electrical role on RX.",
        "MS1.15: unresolved electrical role on TX.",
        "MS1.16: unresolved electrical role on G.",
        "MS1.3: unresolved electrical role on AREF.",
        "MS1.1: unresolved electrical role on RESET.",
        "JP3.1: unresolved electrical role on G.",
        "JP3.2: unresolved electrical role on TX.",
        "JP3.3: unresolved electrical role on RX.",
        "JP3.4: unresolved electrical role on MISO.",
        "JP3.5: unresolved electrical role on MOSI.",
        "JP3.6: unresolved electrical role on SCK.",
        "JP3.14: unresolved electrical role on AREF.",
        "JP3.16: unresolved electrical role on RESET.",
        "JP1.2: unresolved electrical role on EN.",
        "JP1.3: unresolved electrical role on USB.",
        "JP1.11: unresolved electrical role on SCL.",
        "JP1.12: unresolved electrical role on SDA.",
        "X1.2: unresolved electrical role on USB."
      ]
    }
  },
  "adafruit-module-5862": {
    "contacts": [
      {
        "id": "ms1-p-1",
        "number": "MS1.P$1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$1.",
        "x": -22.86,
        "y": -8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-p-2",
        "number": "MS1.P$2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact MS1.P$2.",
        "x": -22.86,
        "y": 8.89,
        "size": [
          3.81,
          3.81
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 2.5
      },
      {
        "id": "ms1-28",
        "number": "MS1.28",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact MS1.28.",
        "x": -8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-27",
        "number": "MS1.27",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact MS1.27.",
        "x": -6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-26",
        "number": "MS1.26",
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact MS1.26.",
        "x": -3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-25",
        "number": "MS1.25",
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact MS1.25.",
        "x": -1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-24",
        "number": "MS1.24",
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact MS1.24.",
        "x": 1.27,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-23",
        "number": "MS1.23",
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact MS1.23.",
        "x": 3.81,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-22",
        "number": "MS1.22",
        "label": "K",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: K. Physical source contact MS1.22.",
        "x": 6.35,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-21",
        "number": "MS1.21",
        "label": "J",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: J. Physical source contact MS1.21.",
        "x": 8.89,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-20",
        "number": "MS1.20",
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact MS1.20.",
        "x": 11.43,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-19",
        "number": "MS1.19",
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact MS1.19.",
        "x": 13.97,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-18",
        "number": "MS1.18",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact MS1.18.",
        "x": 16.51,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-17",
        "number": "MS1.17",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact MS1.17.",
        "x": 19.05,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-5",
        "number": "MS1.5",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact MS1.5.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-6",
        "number": "MS1.6",
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact MS1.6.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-7",
        "number": "MS1.7",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact MS1.7.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-8",
        "number": "MS1.8",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact MS1.8.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-9",
        "number": "MS1.9",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact MS1.9.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-10",
        "number": "MS1.10",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact MS1.10.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-11",
        "number": "MS1.11",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact MS1.11.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-12",
        "number": "MS1.12",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact MS1.12.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-13",
        "number": "MS1.13",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact MS1.13.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-14",
        "number": "MS1.14",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact MS1.14.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-15",
        "number": "MS1.15",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact MS1.15.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-16",
        "number": "MS1.16",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact MS1.16.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-4",
        "number": "MS1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MS1.4.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-3",
        "number": "MS1.3",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact MS1.3.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-2",
        "number": "MS1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact MS1.2.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "ms1-1",
        "number": "MS1.1",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact MS1.1.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "MS1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP5.1.",
        "x": -8.89,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "EN",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EN. Physical source contact JP5.2.",
        "x": -6.35,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "USB",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: USB. Physical source contact JP5.3.",
        "x": -3.81,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-4",
        "number": "JP5.4",
        "label": "N",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: N. Physical source contact JP5.4.",
        "x": -1.27,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "M",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: M. Physical source contact JP5.5.",
        "x": 1.27,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "L",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: L. Physical source contact JP5.6.",
        "x": 3.81,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-7",
        "number": "JP5.7",
        "label": "K",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: K. Physical source contact JP5.7.",
        "x": 6.35,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-8",
        "number": "JP5.8",
        "label": "J",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: J. Physical source contact JP5.8.",
        "x": 8.89,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-9",
        "number": "JP5.9",
        "label": "I",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: I. Physical source contact JP5.9.",
        "x": 11.43,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-10",
        "number": "JP5.10",
        "label": "H",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: H. Physical source contact JP5.10.",
        "x": 13.97,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-11",
        "number": "JP5.11",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP5.11.",
        "x": 16.51,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-12",
        "number": "JP5.12",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP5.12.",
        "x": 19.05,
        "y": -7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "G",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: G. Physical source contact JP6.1.",
        "x": 19.05,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact JP6.2.",
        "x": 16.51,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-3",
        "number": "JP6.3",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact JP6.3.",
        "x": 13.97,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-4",
        "number": "JP6.4",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact JP6.4.",
        "x": 11.43,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-5",
        "number": "JP6.5",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact JP6.5.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-6",
        "number": "JP6.6",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact JP6.6.",
        "x": 6.35,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-7",
        "number": "JP6.7",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact JP6.7.",
        "x": 3.81,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-8",
        "number": "JP6.8",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact JP6.8.",
        "x": 1.27,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-9",
        "number": "JP6.9",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact JP6.9.",
        "x": -1.27,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-10",
        "number": "JP6.10",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact JP6.10.",
        "x": -3.81,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-11",
        "number": "JP6.11",
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact JP6.11.",
        "x": -6.35,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-12",
        "number": "JP6.12",
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact JP6.12.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-13",
        "number": "JP6.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.13.",
        "x": -11.43,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-14",
        "number": "JP6.14",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact JP6.14.",
        "x": -13.97,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-15",
        "number": "JP6.15",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP6.15.",
        "x": -16.51,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-16",
        "number": "JP6.16",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact JP6.16.",
        "x": -19.05,
        "y": 7.62,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 21.682,
        "y": -0.246,
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 21.682,
        "y": 0.754,
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
        "x": 21.682,
        "y": -1.246,
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
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 21.682,
        "y": 1.754,
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
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 24.2302,
        "y": 3.054,
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
        "x": 24.2302,
        "y": -2.546,
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
        "id": "x1-mt1",
        "number": "X1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.MT1.",
        "x": -22.66,
        "y": -5.2,
        "size": [
          3,
          1.6
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
        "x": -22.66,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -19.86,
        "y": -3,
        "size": [
          4.5,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X1.2.",
        "x": -19.86,
        "y": -1,
        "size": [
          4.5,
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
        "label": "A1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A1. Physical source contact X1.3.",
        "x": -19.86,
        "y": 1,
        "size": [
          4.5,
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
        "label": "A0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A0. Physical source contact X1.4.",
        "x": -19.86,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-mt1",
        "number": "X2.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.MT1.",
        "x": -15.04,
        "y": -5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-mt2",
        "number": "X2.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.MT2.",
        "x": -15.04,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-1",
        "number": "X2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.1.",
        "x": -12.24,
        "y": -3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X2.2.",
        "x": -12.24,
        "y": -1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-3",
        "number": "X2.3",
        "label": "A3",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A3. Physical source contact X2.3.",
        "x": -12.24,
        "y": 1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x2-4",
        "number": "X2.4",
        "label": "A2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A2. Physical source contact X2.4.",
        "x": -12.24,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X2",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-mt1",
        "number": "X3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.MT1.",
        "x": -7.42,
        "y": -5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-mt2",
        "number": "X3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.MT2.",
        "x": -7.42,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-1",
        "number": "X3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X3.1.",
        "x": -4.62,
        "y": -3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-2",
        "number": "X3.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X3.2.",
        "x": -4.62,
        "y": -1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-3",
        "number": "X3.3",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact X3.3.",
        "x": -4.62,
        "y": 1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x3-4",
        "number": "X3.4",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact X3.4.",
        "x": -4.62,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X3",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-mt1",
        "number": "X4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.MT1.",
        "x": 0.2,
        "y": -5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-mt2",
        "number": "X4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.MT2.",
        "x": 0.2,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-1",
        "number": "X4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.1.",
        "x": 3,
        "y": -3,
        "size": [
          4.5,
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
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X4.2.",
        "x": 3,
        "y": -1,
        "size": [
          4.5,
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
        "label": "TX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TX. Physical source contact X4.3.",
        "x": 3,
        "y": 1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-4",
        "number": "X4.4",
        "label": "RX",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RX. Physical source contact X4.4.",
        "x": 3,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-mt1",
        "number": "X5.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X5.MT1.",
        "x": 15.44,
        "y": -5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-mt2",
        "number": "X5.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X5.MT2.",
        "x": 15.44,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-1",
        "number": "X5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X5.1.",
        "x": 18.24,
        "y": -3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-2",
        "number": "X5.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X5.2.",
        "x": 18.24,
        "y": -1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-3",
        "number": "X5.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X5.3.",
        "x": 18.24,
        "y": 1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x5-4",
        "number": "X5.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X5.4.",
        "x": 18.24,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X5",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-mt1",
        "number": "X6.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.MT1.",
        "x": 7.82,
        "y": -5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-mt2",
        "number": "X6.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.MT2.",
        "x": 7.82,
        "y": 5.2,
        "size": [
          3,
          1.6
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-1",
        "number": "X6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.1.",
        "x": 10.62,
        "y": -3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-2",
        "number": "X6.2",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact X6.2.",
        "x": 10.62,
        "y": -1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-3",
        "number": "X6.3",
        "label": "SDA",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact X6.3.",
        "x": 10.62,
        "y": 1,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-4",
        "number": "X6.4",
        "label": "SCL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact X6.4.",
        "x": 10.62,
        "y": 3,
        "size": [
          4.5,
          1
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-25.4\" y=\"-11.43\" width=\"50.8\" height=\"22.86\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.62\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.24\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.86\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.24\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.62\" y=\"-6.0\" width=\"5.1\" height=\"12.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.74\" y=\"-11.29\" width=\"7.0\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.954\" y=\"-2.846\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.812\" y=\"4.42\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.996\" y=\"-4.496\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.266\" y=\"4.775\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.996\" y=\"-6.02\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Grove and STEMMA QT FeatherWing.brd",
      "boardSha256": "3b141a893876de9a16e1d6bd295627d337f3b2170cd8ceb6f811103d7d8b21c2",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "MS1",
        "JP5",
        "JP6",
        "CONN1",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "MS1.27 passive pass-through verified from schematic endpoints.",
        "MS1.26 passive pass-through verified from schematic endpoints.",
        "MS1.25 passive pass-through verified from schematic endpoints.",
        "MS1.24 passive pass-through verified from schematic endpoints.",
        "MS1.23 passive pass-through verified from schematic endpoints.",
        "MS1.22 passive pass-through verified from schematic endpoints.",
        "MS1.21 passive pass-through verified from schematic endpoints.",
        "MS1.20 passive pass-through verified from schematic endpoints.",
        "MS1.19 passive pass-through verified from schematic endpoints.",
        "MS1.5 passive pass-through verified from schematic endpoints.",
        "MS1.6 passive pass-through verified from schematic endpoints.",
        "MS1.7 passive pass-through verified from schematic endpoints.",
        "MS1.8 passive pass-through verified from schematic endpoints.",
        "MS1.9 passive pass-through verified from schematic endpoints.",
        "MS1.10 passive pass-through verified from schematic endpoints.",
        "MS1.11 passive pass-through verified from schematic endpoints.",
        "MS1.12 passive pass-through verified from schematic endpoints.",
        "MS1.13 passive pass-through verified from schematic endpoints.",
        "MS1.14 passive pass-through verified from schematic endpoints.",
        "MS1.15 passive pass-through verified from schematic endpoints.",
        "MS1.16 passive pass-through verified from schematic endpoints.",
        "MS1.3 passive pass-through verified from schematic endpoints.",
        "JP5.2 passive pass-through verified from schematic endpoints.",
        "JP5.3 passive pass-through verified from schematic endpoints.",
        "JP5.4 passive pass-through verified from schematic endpoints.",
        "JP5.5 passive pass-through verified from schematic endpoints.",
        "JP5.6 passive pass-through verified from schematic endpoints.",
        "JP5.7 passive pass-through verified from schematic endpoints.",
        "JP5.8 passive pass-through verified from schematic endpoints.",
        "JP5.9 passive pass-through verified from schematic endpoints.",
        "JP5.10 passive pass-through verified from schematic endpoints.",
        "JP6.1 passive pass-through verified from schematic endpoints.",
        "JP6.2 passive pass-through verified from schematic endpoints.",
        "JP6.3 passive pass-through verified from schematic endpoints.",
        "JP6.4 passive pass-through verified from schematic endpoints.",
        "JP6.5 passive pass-through verified from schematic endpoints.",
        "JP6.6 passive pass-through verified from schematic endpoints.",
        "JP6.7 passive pass-through verified from schematic endpoints.",
        "JP6.8 passive pass-through verified from schematic endpoints.",
        "JP6.9 passive pass-through verified from schematic endpoints.",
        "JP6.10 passive pass-through verified from schematic endpoints.",
        "JP6.11 passive pass-through verified from schematic endpoints.",
        "JP6.12 passive pass-through verified from schematic endpoints.",
        "JP6.14 passive pass-through verified from schematic endpoints.",
        "X1.3 passive pass-through verified from schematic endpoints.",
        "X1.4 passive pass-through verified from schematic endpoints.",
        "X2.3 passive pass-through verified from schematic endpoints.",
        "X2.4 passive pass-through verified from schematic endpoints.",
        "X3.3 passive pass-through verified from schematic endpoints.",
        "X3.4 passive pass-through verified from schematic endpoints.",
        "X4.3 passive pass-through verified from schematic endpoints.",
        "X4.4 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "MS1.27",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.26",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.25",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.24",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.23",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.22",
          "sourceNet": "K",
          "before": {
            "type": "unspecified",
            "label": "K"
          },
          "after": {
            "type": "passive",
            "label": "K"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.21",
          "sourceNet": "J",
          "before": {
            "type": "unspecified",
            "label": "J"
          },
          "after": {
            "type": "passive",
            "label": "J"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.20",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.19",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.8",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.9",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.10",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.16",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "MS1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.2",
          "sourceNet": "EN",
          "before": {
            "type": "unspecified",
            "label": "EN"
          },
          "after": {
            "type": "passive",
            "label": "EN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.3",
          "sourceNet": "USB",
          "before": {
            "type": "unspecified",
            "label": "USB"
          },
          "after": {
            "type": "passive",
            "label": "USB"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.4",
          "sourceNet": "N",
          "before": {
            "type": "unspecified",
            "label": "N"
          },
          "after": {
            "type": "passive",
            "label": "N"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.5",
          "sourceNet": "M",
          "before": {
            "type": "unspecified",
            "label": "M"
          },
          "after": {
            "type": "passive",
            "label": "M"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.6",
          "sourceNet": "L",
          "before": {
            "type": "unspecified",
            "label": "L"
          },
          "after": {
            "type": "passive",
            "label": "L"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.7",
          "sourceNet": "K",
          "before": {
            "type": "unspecified",
            "label": "K"
          },
          "after": {
            "type": "passive",
            "label": "K"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.8",
          "sourceNet": "J",
          "before": {
            "type": "unspecified",
            "label": "J"
          },
          "after": {
            "type": "passive",
            "label": "J"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.9",
          "sourceNet": "I",
          "before": {
            "type": "unspecified",
            "label": "I"
          },
          "after": {
            "type": "passive",
            "label": "I"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP5.10",
          "sourceNet": "H",
          "before": {
            "type": "unspecified",
            "label": "H"
          },
          "after": {
            "type": "passive",
            "label": "H"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.1",
          "sourceNet": "G",
          "before": {
            "type": "unspecified",
            "label": "G"
          },
          "after": {
            "type": "passive",
            "label": "G"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.6",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.7",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.8",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.9",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.10",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "JP6.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X2.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X2.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X3.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X3.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X4.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        },
        {
          "number": "X4.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/Adafruit Grove and STEMMA QT FeatherWing.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB",
      "commit": "2815cb84b56f4e79c573aa0c641fadef878a512f",
      "boardURL": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/Adafruit%20Grove%20and%20STEMMA%20QT%20FeatherWing.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/Adafruit%20Grove%20and%20STEMMA%20QT%20FeatherWing.sch",
      "schematicSha256": "c8fba185ef7b94e814c719153301d155404bb4354739ba6209be667fffb3b938",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/license.txt",
      "sourceArchiveSha256": "1ccb81c9ef61b12bcb03bc3d3cf12f3c9ef47f07f47e01fba5832fadaf739684",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "MS1.27: unresolved electrical role on EN.",
        "MS1.26: unresolved electrical role on USB.",
        "MS1.25: unresolved electrical role on N.",
        "MS1.24: unresolved electrical role on M.",
        "MS1.23: unresolved electrical role on L.",
        "MS1.22: unresolved electrical role on K.",
        "MS1.21: unresolved electrical role on J.",
        "MS1.20: unresolved electrical role on I.",
        "MS1.19: unresolved electrical role on H.",
        "MS1.5: unresolved electrical role on A0.",
        "MS1.6: unresolved electrical role on A1.",
        "MS1.7: unresolved electrical role on A2.",
        "MS1.8: unresolved electrical role on A3.",
        "MS1.9: unresolved electrical role on A4.",
        "MS1.10: unresolved electrical role on A5.",
        "MS1.11: unresolved electrical role on SCK.",
        "MS1.12: unresolved electrical role on MOSI.",
        "MS1.13: unresolved electrical role on MISO.",
        "MS1.14: unresolved electrical role on RX.",
        "MS1.15: unresolved electrical role on TX.",
        "MS1.16: unresolved electrical role on G.",
        "MS1.3: unresolved electrical role on AREF.",
        "JP5.2: unresolved electrical role on EN.",
        "JP5.3: unresolved electrical role on USB.",
        "JP5.4: unresolved electrical role on N.",
        "JP5.5: unresolved electrical role on M.",
        "JP5.6: unresolved electrical role on L.",
        "JP5.7: unresolved electrical role on K.",
        "JP5.8: unresolved electrical role on J.",
        "JP5.9: unresolved electrical role on I.",
        "JP5.10: unresolved electrical role on H.",
        "JP6.1: unresolved electrical role on G.",
        "JP6.2: unresolved electrical role on TX.",
        "JP6.3: unresolved electrical role on RX.",
        "JP6.4: unresolved electrical role on MISO.",
        "JP6.5: unresolved electrical role on MOSI.",
        "JP6.6: unresolved electrical role on SCK.",
        "JP6.7: unresolved electrical role on A5.",
        "JP6.8: unresolved electrical role on A4.",
        "JP6.9: unresolved electrical role on A3.",
        "JP6.10: unresolved electrical role on A2.",
        "JP6.11: unresolved electrical role on A1.",
        "JP6.12: unresolved electrical role on A0.",
        "JP6.14: unresolved electrical role on AREF.",
        "X1.3: unresolved electrical role on A1.",
        "X1.4: unresolved electrical role on A0.",
        "X2.3: unresolved electrical role on A3.",
        "X2.4: unresolved electrical role on A2.",
        "X3.3: unresolved electrical role on A5.",
        "X3.4: unresolved electrical role on A4.",
        "X4.3: unresolved electrical role on TX.",
        "X4.4: unresolved electrical role on RX."
      ]
    }
  },
  "adafruit-module-2601": {
    "contacts": [
      {
        "id": "u-41-d4",
        "number": "U$41.D4",
        "label": "D4",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D4. Physical source contact U$41.D4.",
        "x": 19.05,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a0",
        "number": "U$41.A0",
        "label": "A0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A0. Physical source contact U$41.A0.",
        "x": 16.51,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d3",
        "number": "U$41.D3",
        "label": "D3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D3. Physical source contact U$41.D3.",
        "x": 21.59,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d2",
        "number": "U$41.D2",
        "label": "D2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D2. Physical source contact U$41.D2.",
        "x": 24.13,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d1",
        "number": "U$41.D1",
        "label": "D1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1. Physical source contact U$41.D1.",
        "x": 26.67,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d0",
        "number": "U$41.D0",
        "label": "D0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0. Physical source contact U$41.D0.",
        "x": 29.21,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d5",
        "number": "U$41.D5",
        "label": "D5",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D5. Physical source contact U$41.D5.",
        "x": 16.51,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d6",
        "number": "U$41.D6",
        "label": "D6",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D6. Physical source contact U$41.D6.",
        "x": 13.97,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d7",
        "number": "U$41.D7",
        "label": "D7",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D7. Physical source contact U$41.D7.",
        "x": 11.43,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d8",
        "number": "U$41.D8",
        "label": "D8",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D8. Physical source contact U$41.D8.",
        "x": 7.366,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d9",
        "number": "U$41.D9",
        "label": "D9",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D9. Physical source contact U$41.D9.",
        "x": 4.826,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d10",
        "number": "U$41.D10",
        "label": "D10",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D10. Physical source contact U$41.D10.",
        "x": 2.286,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d11",
        "number": "U$41.D11",
        "label": "D11",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D11. Physical source contact U$41.D11.",
        "x": -0.254,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d12",
        "number": "U$41.D12",
        "label": "D12",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D12. Physical source contact U$41.D12.",
        "x": -2.794,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-d13",
        "number": "U$41.D13",
        "label": "D13",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D13. Physical source contact U$41.D13.",
        "x": -5.334,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-gnd",
        "number": "U$41.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$41.GND.",
        "x": -7.874,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-aref",
        "number": "U$41.AREF",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact U$41.AREF.",
        "x": -10.414,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a1",
        "number": "U$41.A1",
        "label": "A1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1. Physical source contact U$41.A1.",
        "x": 19.05,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a2",
        "number": "U$41.A2",
        "label": "A2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A2. Physical source contact U$41.A2.",
        "x": 21.59,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a3",
        "number": "U$41.A3",
        "label": "A3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A3. Physical source contact U$41.A3.",
        "x": 24.13,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a4",
        "number": "U$41.A4",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact U$41.A4.",
        "x": 26.67,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-a5",
        "number": "U$41.A5",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact U$41.A5.",
        "x": 29.21,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-vin",
        "number": "U$41.VIN",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact U$41.VIN.",
        "x": 11.43,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-gnd-1",
        "number": "U$41.GND@1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$41.GND@1.",
        "x": 8.89,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-gnd-2",
        "number": "U$41.GND@2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$41.GND@2.",
        "x": 6.35,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-5v",
        "number": "U$41.5V",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact U$41.5V.",
        "x": 3.81,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-3v",
        "number": "U$41.3V",
        "label": "+3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +3V. Physical source contact U$41.3V.",
        "x": 1.27,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-reset",
        "number": "U$41.RESET",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact U$41.RESET.",
        "x": -1.27,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-sda",
        "number": "U$41.SDA",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact U$41.SDA.",
        "x": -12.954,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-scl",
        "number": "U$41.SCL",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact U$41.SCL.",
        "x": -15.494,
        "y": -24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-ioref",
        "number": "U$41.IOREF",
        "label": "IOREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IOREF. Physical source contact U$41.IOREF.",
        "x": -3.81,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-reserved",
        "number": "U$41.RESERVED",
        "label": "NC",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: NC. Physical source contact U$41.RESERVED.",
        "x": -6.35,
        "y": 24.13,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-mosi",
        "number": "U$41.MOSI",
        "label": "MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MOSI. Physical source contact U$41.MOSI.",
        "x": 31.877,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-sck",
        "number": "U$41.SCK",
        "label": "SCK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCK. Physical source contact U$41.SCK.",
        "x": 29.337,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-miso",
        "number": "U$41.MISO",
        "label": "MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: MISO. Physical source contact U$41.MISO.",
        "x": 29.337,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-5v_icsp",
        "number": "U$41.5V_ICSP",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact U$41.5V_ICSP.",
        "x": 31.877,
        "y": -3.81,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-gnd-3",
        "number": "U$41.GND@3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact U$41.GND@3.",
        "x": 31.877,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "u-41-reset_icsp",
        "number": "U$41.RESET_ICSP",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact U$41.RESET_ICSP.",
        "x": 29.337,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "U$41",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP4.1.",
        "x": 11.43,
        "y": 20.32,
        "size": [
          1.778,
          1.778
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
        "x": 8.89,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.3.",
        "x": 6.35,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP4.4.",
        "x": 3.81,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "+3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +3V. Physical source contact JP4.5.",
        "x": 1.27,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "!RESET",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: !RESET. Physical source contact JP4.6.",
        "x": -1.27,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "IOREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: IOREF. Physical source contact JP4.7.",
        "x": -3.81,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "NC",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: NC. Physical source contact JP4.8.",
        "x": -6.35,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "SCL",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP6.1.",
        "x": -15.494,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "SDA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP6.2.",
        "x": -12.954,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-3",
        "number": "JP6.3",
        "label": "AREF",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: AREF. Physical source contact JP6.3.",
        "x": -10.414,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-4",
        "number": "JP6.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.4.",
        "x": -7.874,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-5",
        "number": "JP6.5",
        "label": "D13",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D13. Physical source contact JP6.5.",
        "x": -5.334,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-6",
        "number": "JP6.6",
        "label": "D12",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D12. Physical source contact JP6.6.",
        "x": -2.794,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-7",
        "number": "JP6.7",
        "label": "D11",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D11. Physical source contact JP6.7.",
        "x": -0.254,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-8",
        "number": "JP6.8",
        "label": "D10",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D10. Physical source contact JP6.8.",
        "x": 2.286,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-9",
        "number": "JP6.9",
        "label": "D9",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D9. Physical source contact JP6.9.",
        "x": 4.826,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-10",
        "number": "JP6.10",
        "label": "D8",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D8. Physical source contact JP6.10.",
        "x": 7.366,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D7",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D7. Physical source contact JP1.1.",
        "x": 11.43,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "D6",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D6. Physical source contact JP1.2.",
        "x": 13.97,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "D5",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D5. Physical source contact JP1.3.",
        "x": 16.51,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "D4",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D4. Physical source contact JP1.4.",
        "x": 19.05,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "D3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D3. Physical source contact JP1.5.",
        "x": 21.59,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "D2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D2. Physical source contact JP1.6.",
        "x": 24.13,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "D1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D1. Physical source contact JP1.7.",
        "x": 26.67,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "D0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: D0. Physical source contact JP1.8.",
        "x": 29.21,
        "y": -20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "A5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A5. Physical source contact JP8.1.",
        "x": 29.21,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-2",
        "number": "JP8.2",
        "label": "A4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: A4. Physical source contact JP8.2.",
        "x": 26.67,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-3",
        "number": "JP8.3",
        "label": "A3",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A3. Physical source contact JP8.3.",
        "x": 24.13,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-4",
        "number": "JP8.4",
        "label": "A2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A2. Physical source contact JP8.4.",
        "x": 21.59,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-5",
        "number": "JP8.5",
        "label": "A1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A1. Physical source contact JP8.5.",
        "x": 19.05,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp8-6",
        "number": "JP8.6",
        "label": "A0",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: A0. Physical source contact JP8.6.",
        "x": 16.51,
        "y": 20.32,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp15-1",
        "number": "JP15.1",
        "label": "R1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: R1. Physical source contact JP15.1.",
        "x": 12.7,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-2",
        "number": "JP15.2",
        "label": "G1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: G1. Physical source contact JP15.2.",
        "x": 12.7,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-3",
        "number": "JP15.3",
        "label": "B1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B1. Physical source contact JP15.3.",
        "x": 10.16,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-4",
        "number": "JP15.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP15.4.",
        "x": 10.16,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-5",
        "number": "JP15.5",
        "label": "R2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: R2. Physical source contact JP15.5.",
        "x": 7.62,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-6",
        "number": "JP15.6",
        "label": "G2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: G2. Physical source contact JP15.6.",
        "x": 7.62,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-7",
        "number": "JP15.7",
        "label": "B2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B2. Physical source contact JP15.7.",
        "x": 5.08,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-8",
        "number": "JP15.8",
        "label": "E_1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E_1. Physical source contact JP15.8.",
        "x": 5.08,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-9",
        "number": "JP15.9",
        "label": "ADDR_A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_A. Physical source contact JP15.9.",
        "x": 2.54,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-10",
        "number": "JP15.10",
        "label": "ADDR_B",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_B. Physical source contact JP15.10.",
        "x": 2.54,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-11",
        "number": "JP15.11",
        "label": "ADDR_C",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_C. Physical source contact JP15.11.",
        "x": 0,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-12",
        "number": "JP15.12",
        "label": "ADDR_D",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_D. Physical source contact JP15.12.",
        "x": 0,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-13",
        "number": "JP15.13",
        "label": "CLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CLK. Physical source contact JP15.13.",
        "x": -2.54,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-14",
        "number": "JP15.14",
        "label": "LAT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LAT. Physical source contact JP15.14.",
        "x": -2.54,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-15",
        "number": "JP15.15",
        "label": "OE",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OE. Physical source contact JP15.15.",
        "x": -5.08,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp15-16",
        "number": "JP15.16",
        "label": "E_2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E_2. Physical source contact JP15.16.",
        "x": -5.08,
        "y": 1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP15",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "OE",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: OE. Physical source contact JP2.1.",
        "x": -5.08,
        "y": -10.16,
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
        "label": "CLK",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CLK. Physical source contact JP2.2.",
        "x": -2.54,
        "y": -10.16,
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
        "label": "ADDR_C",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_C. Physical source contact JP2.3.",
        "x": 0,
        "y": -10.16,
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
        "label": "ADDR_A",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_A. Physical source contact JP2.4.",
        "x": 2.54,
        "y": -10.16,
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
        "label": "B2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B2. Physical source contact JP2.5.",
        "x": 5.08,
        "y": -10.16,
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
        "label": "R2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: R2. Physical source contact JP2.6.",
        "x": 7.62,
        "y": -10.16,
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
        "label": "B1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: B1. Physical source contact JP2.7.",
        "x": 10.16,
        "y": -10.16,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "R1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: R1. Physical source contact JP2.8.",
        "x": 12.7,
        "y": -10.16,
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
        "label": "G1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: G1. Physical source contact JP3.1.",
        "x": 12.7,
        "y": 10.16,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": 10.16,
        "y": 10.16,
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
        "label": "G2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: G2. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 10.16,
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
        "label": "E_1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E_1. Physical source contact JP3.4.",
        "x": 5.08,
        "y": 10.16,
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
        "label": "ADDR_B",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_B. Physical source contact JP3.5.",
        "x": 2.54,
        "y": 10.16,
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
        "label": "ADDR_D",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADDR_D. Physical source contact JP3.6.",
        "x": 0,
        "y": 10.16,
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
        "label": "LAT",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: LAT. Physical source contact JP3.7.",
        "x": -2.54,
        "y": 10.16,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "E_2",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: E_2. Physical source contact JP3.8.",
        "x": -5.08,
        "y": 10.16,
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
        "id": "matrix_pwr-p-3",
        "number": "MATRIX_PWR.P$3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact MATRIX_PWR.P$3.",
        "x": -29.083,
        "y": 0.762,
        "size": [
          4.3688,
          2.1844
        ],
        "shape": "oval",
        "connector": "MATRIX_PWR",
        "back": false,
        "drill": 1.1
      },
      {
        "id": "matrix_pwr-p-4",
        "number": "MATRIX_PWR.P$4",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact MATRIX_PWR.P$4.",
        "x": -29.083,
        "y": 5.842,
        "size": [
          4.3688,
          2.1844
        ],
        "shape": "oval",
        "connector": "MATRIX_PWR",
        "back": false,
        "drill": 1.1
      }
    ],
    "artwork": "<rect x=\"-34.29\" y=\"-26.67\" width=\"68.58\" height=\"53.34\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.19\" y=\"-4.5\" width=\"28.0\" height=\"9.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-34.163\" y=\"-3.048\" width=\"8.89\" height=\"12.7\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-31.623\" y=\"-26.035\" width=\"6.604\" height=\"6.096\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.096\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.556\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.144\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.064\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.684\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.524\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.016\" y=\"-14.859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.556\" y=\"11.557\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"11.557\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.684\" y=\"11.557\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.524\" y=\"11.557\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.016\" y=\"11.557\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit RGB Matrix Shield.brd",
      "boardSha256": "5d7b423fc17688b6aff6f2de29b08487d4e0ed14a977f6a15b4c7538f861d827",
      "sourceBounds": [
        0,
        0,
        68.58,
        53.34
      ],
      "selectedConnectors": [
        "U$41",
        "JP4",
        "JP6",
        "JP1",
        "JP8",
        "JP15",
        "JP2",
        "JP3",
        "MATRIX_PWR"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "U$41.D1 passive pass-through verified from schematic endpoints.",
        "U$41.D0 passive pass-through verified from schematic endpoints.",
        "U$41.D11 passive pass-through verified from schematic endpoints.",
        "U$41.D12 passive pass-through verified from schematic endpoints.",
        "U$41.D13 passive pass-through verified from schematic endpoints.",
        "U$41.AREF passive pass-through verified from schematic endpoints.",
        "U$41.A4 passive pass-through verified from schematic endpoints.",
        "U$41.A5 passive pass-through verified from schematic endpoints.",
        "U$41.SDA passive pass-through verified from schematic endpoints.",
        "U$41.SCL passive pass-through verified from schematic endpoints.",
        "U$41.IOREF passive pass-through verified from schematic endpoints.",
        "U$41.RESERVED passive pass-through verified from schematic endpoints.",
        "U$41.MOSI passive pass-through verified from schematic endpoints.",
        "U$41.SCK passive pass-through verified from schematic endpoints.",
        "U$41.MISO passive pass-through verified from schematic endpoints.",
        "JP4.7 passive pass-through verified from schematic endpoints.",
        "JP4.8 passive pass-through verified from schematic endpoints.",
        "JP6.1 passive pass-through verified from schematic endpoints.",
        "JP6.2 passive pass-through verified from schematic endpoints.",
        "JP6.3 passive pass-through verified from schematic endpoints.",
        "JP6.5 passive pass-through verified from schematic endpoints.",
        "JP6.6 passive pass-through verified from schematic endpoints.",
        "JP6.7 passive pass-through verified from schematic endpoints.",
        "JP1.7 passive pass-through verified from schematic endpoints.",
        "JP1.8 passive pass-through verified from schematic endpoints.",
        "JP8.1 passive pass-through verified from schematic endpoints.",
        "JP8.2 passive pass-through verified from schematic endpoints.",
        "JP15.8 passive pass-through verified from schematic endpoints.",
        "JP15.16 passive pass-through verified from schematic endpoints.",
        "JP3.4 passive pass-through verified from schematic endpoints.",
        "JP3.8 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
        {
          "number": "U$41.D1",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D0",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D11",
          "sourceNet": "D11",
          "before": {
            "type": "unspecified",
            "label": "D11"
          },
          "after": {
            "type": "passive",
            "label": "D11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D12",
          "sourceNet": "D12",
          "before": {
            "type": "unspecified",
            "label": "D12"
          },
          "after": {
            "type": "passive",
            "label": "D12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D13",
          "sourceNet": "D13",
          "before": {
            "type": "unspecified",
            "label": "D13"
          },
          "after": {
            "type": "passive",
            "label": "D13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.AREF",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.A4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.A5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SDA",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SCL",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.IOREF",
          "sourceNet": "IOREF",
          "before": {
            "type": "unspecified",
            "label": "IOREF"
          },
          "after": {
            "type": "passive",
            "label": "IOREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.RESERVED",
          "sourceNet": "NC",
          "before": {
            "type": "unspecified",
            "label": "NC"
          },
          "after": {
            "type": "passive",
            "label": "NC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.MOSI",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SCK",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.MISO",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP4.7",
          "sourceNet": "IOREF",
          "before": {
            "type": "unspecified",
            "label": "IOREF"
          },
          "after": {
            "type": "passive",
            "label": "IOREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP4.8",
          "sourceNet": "NC",
          "before": {
            "type": "unspecified",
            "label": "NC"
          },
          "after": {
            "type": "passive",
            "label": "NC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.5",
          "sourceNet": "D13",
          "before": {
            "type": "unspecified",
            "label": "D13"
          },
          "after": {
            "type": "passive",
            "label": "D13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.6",
          "sourceNet": "D12",
          "before": {
            "type": "unspecified",
            "label": "D12"
          },
          "after": {
            "type": "passive",
            "label": "D12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.7",
          "sourceNet": "D11",
          "before": {
            "type": "unspecified",
            "label": "D11"
          },
          "after": {
            "type": "passive",
            "label": "D11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP1.8",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP8.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP8.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP15.8",
          "sourceNet": "E_1",
          "before": {
            "type": "unspecified",
            "label": "E_1"
          },
          "after": {
            "type": "passive",
            "label": "E_1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP15.16",
          "sourceNet": "E_2",
          "before": {
            "type": "unspecified",
            "label": "E_2"
          },
          "after": {
            "type": "passive",
            "label": "E_2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP3.4",
          "sourceNet": "E_1",
          "before": {
            "type": "unspecified",
            "label": "E_1"
          },
          "after": {
            "type": "passive",
            "label": "E_1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP3.8",
          "sourceNet": "E_2",
          "before": {
            "type": "unspecified",
            "label": "E_2"
          },
          "after": {
            "type": "passive",
            "label": "E_2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D1",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D0",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D11",
          "sourceNet": "D11",
          "before": {
            "type": "unspecified",
            "label": "D11"
          },
          "after": {
            "type": "passive",
            "label": "D11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D12",
          "sourceNet": "D12",
          "before": {
            "type": "unspecified",
            "label": "D12"
          },
          "after": {
            "type": "passive",
            "label": "D12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.D13",
          "sourceNet": "D13",
          "before": {
            "type": "unspecified",
            "label": "D13"
          },
          "after": {
            "type": "passive",
            "label": "D13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.AREF",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.A4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.A5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SDA",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SCL",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.IOREF",
          "sourceNet": "IOREF",
          "before": {
            "type": "unspecified",
            "label": "IOREF"
          },
          "after": {
            "type": "passive",
            "label": "IOREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.RESERVED",
          "sourceNet": "NC",
          "before": {
            "type": "unspecified",
            "label": "NC"
          },
          "after": {
            "type": "passive",
            "label": "NC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.MOSI",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.SCK",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "U$41.MISO",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP4.7",
          "sourceNet": "IOREF",
          "before": {
            "type": "unspecified",
            "label": "IOREF"
          },
          "after": {
            "type": "passive",
            "label": "IOREF"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP4.8",
          "sourceNet": "NC",
          "before": {
            "type": "unspecified",
            "label": "NC"
          },
          "after": {
            "type": "passive",
            "label": "NC"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.5",
          "sourceNet": "D13",
          "before": {
            "type": "unspecified",
            "label": "D13"
          },
          "after": {
            "type": "passive",
            "label": "D13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.6",
          "sourceNet": "D12",
          "before": {
            "type": "unspecified",
            "label": "D12"
          },
          "after": {
            "type": "passive",
            "label": "D12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP6.7",
          "sourceNet": "D11",
          "before": {
            "type": "unspecified",
            "label": "D11"
          },
          "after": {
            "type": "passive",
            "label": "D11"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP1.7",
          "sourceNet": "D1",
          "before": {
            "type": "unspecified",
            "label": "D1"
          },
          "after": {
            "type": "passive",
            "label": "D1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP1.8",
          "sourceNet": "D0",
          "before": {
            "type": "unspecified",
            "label": "D0"
          },
          "after": {
            "type": "passive",
            "label": "D0"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP8.1",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP8.2",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP15.8",
          "sourceNet": "E_1",
          "before": {
            "type": "unspecified",
            "label": "E_1"
          },
          "after": {
            "type": "passive",
            "label": "E_1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP15.16",
          "sourceNet": "E_2",
          "before": {
            "type": "unspecified",
            "label": "E_2"
          },
          "after": {
            "type": "passive",
            "label": "E_2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP3.4",
          "sourceNet": "E_1",
          "before": {
            "type": "unspecified",
            "label": "E_1"
          },
          "after": {
            "type": "passive",
            "label": "E_1"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        },
        {
          "number": "JP3.8",
          "sourceNet": "E_2",
          "before": {
            "type": "unspecified",
            "label": "E_2"
          },
          "after": {
            "type": "passive",
            "label": "E_2"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-RGB-Matrix-Shield-PCB/Adafruit RGB Matrix Shield.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-RGB-Matrix-Shield-PCB",
      "commit": "d49153b7b42f584c5b243d7605a7ec9c75c3b934",
      "boardURL": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/Adafruit%20RGB%20Matrix%20Shield.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/Adafruit%20RGB%20Matrix%20Shield.sch",
      "schematicSha256": "c72cfefddb2d4fdda72cd38bb6b4a3eef086f76727b9d813e08c16bce84d6e6a",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/license.txt",
      "sourceArchiveSha256": "d437de3942540cef8b35dee920bde0e53a7653cc81eff017499e9b6b15cc8d74",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "U$41.D1: unresolved electrical role on D1.",
        "U$41.D0: unresolved electrical role on D0.",
        "U$41.D11: unresolved electrical role on D11.",
        "U$41.D12: unresolved electrical role on D12.",
        "U$41.D13: unresolved electrical role on D13.",
        "U$41.AREF: unresolved electrical role on AREF.",
        "U$41.A4: unresolved electrical role on A4.",
        "U$41.A5: unresolved electrical role on A5.",
        "U$41.SDA: unresolved electrical role on SDA.",
        "U$41.SCL: unresolved electrical role on SCL.",
        "U$41.IOREF: unresolved electrical role on IOREF.",
        "U$41.RESERVED: unresolved electrical role on NC.",
        "U$41.MOSI: unresolved electrical role on MOSI.",
        "U$41.SCK: unresolved electrical role on SCK.",
        "U$41.MISO: unresolved electrical role on MISO.",
        "JP4.7: unresolved electrical role on IOREF.",
        "JP4.8: unresolved electrical role on NC.",
        "JP6.1: unresolved electrical role on SCL.",
        "JP6.2: unresolved electrical role on SDA.",
        "JP6.3: unresolved electrical role on AREF.",
        "JP6.5: unresolved electrical role on D13.",
        "JP6.6: unresolved electrical role on D12.",
        "JP6.7: unresolved electrical role on D11.",
        "JP1.7: unresolved electrical role on D1.",
        "JP1.8: unresolved electrical role on D0.",
        "JP8.1: unresolved electrical role on A5.",
        "JP8.2: unresolved electrical role on A4.",
        "JP15.8: unresolved electrical role on E_1.",
        "JP15.16: unresolved electrical role on E_2.",
        "JP3.4: unresolved electrical role on E_1.",
        "JP3.8: unresolved electrical role on E_2."
      ],
      "finalPortInventoryReview": {
        "addedRefs": [
          "MATRIX_PWR"
        ],
        "addedNumbers": [
          "MATRIX_PWR.P$3",
          "MATRIX_PWR.P$4"
        ],
        "excludedUnnettedMounts": [],
        "symbolFunctionEvidence": [],
        "sourceWarnings": [
          "U$41.D1: unresolved electrical role on D1.",
          "U$41.D0: unresolved electrical role on D0.",
          "U$41.D11: unresolved electrical role on D11.",
          "U$41.D12: unresolved electrical role on D12.",
          "U$41.D13: unresolved electrical role on D13.",
          "U$41.AREF: unresolved electrical role on AREF.",
          "U$41.A4: unresolved electrical role on A4.",
          "U$41.A5: unresolved electrical role on A5.",
          "U$41.SDA: unresolved electrical role on SDA.",
          "U$41.SCL: unresolved electrical role on SCL.",
          "U$41.IOREF: unresolved electrical role on IOREF.",
          "U$41.RESERVED: unresolved electrical role on NC.",
          "U$41.MOSI: unresolved electrical role on MOSI.",
          "U$41.SCK: unresolved electrical role on SCK.",
          "U$41.MISO: unresolved electrical role on MISO.",
          "JP4.7: unresolved electrical role on IOREF.",
          "JP4.8: unresolved electrical role on NC.",
          "JP6.1: unresolved electrical role on SCL.",
          "JP6.2: unresolved electrical role on SDA.",
          "JP6.3: unresolved electrical role on AREF.",
          "JP6.5: unresolved electrical role on D13.",
          "JP6.6: unresolved electrical role on D12.",
          "JP6.7: unresolved electrical role on D11.",
          "JP1.7: unresolved electrical role on D1.",
          "JP1.8: unresolved electrical role on D0.",
          "JP8.1: unresolved electrical role on A5.",
          "JP8.2: unresolved electrical role on A4.",
          "JP15.8: unresolved electrical role on E_1.",
          "JP15.16: unresolved electrical role on E_2.",
          "JP3.4: unresolved electrical role on E_1.",
          "JP3.8: unresolved electrical role on E_2."
        ],
        "unresolved": []
      }
    }
  },
  "adafruit-module-3422": {
    "contacts": [
      {
        "id": "rpi1-1",
        "number": "RPI1.1",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI1.1.",
        "x": -24.13,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-2",
        "number": "RPI1.2",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.2.",
        "x": -24.13,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-3",
        "number": "RPI1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact RPI1.3.",
        "x": -21.59,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-4",
        "number": "RPI1.4",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact RPI1.4.",
        "x": -21.59,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-5",
        "number": "RPI1.5",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact RPI1.5.",
        "x": -19.05,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-6",
        "number": "RPI1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.6.",
        "x": -19.05,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-7",
        "number": "RPI1.7",
        "label": "GPIO4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO4. Physical source contact RPI1.7.",
        "x": -16.51,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-8",
        "number": "RPI1.8",
        "label": "TXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TXD. Physical source contact RPI1.8.",
        "x": -16.51,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-9",
        "number": "RPI1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.9.",
        "x": -13.97,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-10",
        "number": "RPI1.10",
        "label": "RXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RXD. Physical source contact RPI1.10.",
        "x": -13.97,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-11",
        "number": "RPI1.11",
        "label": "GPIO17",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: GPIO17. Physical source contact RPI1.11.",
        "x": -11.43,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-12",
        "number": "RPI1.12",
        "label": "BCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BCLK. Physical source contact RPI1.12.",
        "x": -11.43,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-13",
        "number": "RPI1.13",
        "label": "GPIO27",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO27. Physical source contact RPI1.13.",
        "x": -8.89,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-14",
        "number": "RPI1.14",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.14.",
        "x": -8.89,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-15",
        "number": "RPI1.15",
        "label": "GPIO22",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO22. Physical source contact RPI1.15.",
        "x": -6.35,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-16",
        "number": "RPI1.16",
        "label": "GPIO23",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO23. Physical source contact RPI1.16.",
        "x": -6.35,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-17",
        "number": "RPI1.17",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact RPI1.17.",
        "x": -3.81,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-18",
        "number": "RPI1.18",
        "label": "GPIO24",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO24. Physical source contact RPI1.18.",
        "x": -3.81,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-19",
        "number": "RPI1.19",
        "label": "SPI_MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MOSI. Physical source contact RPI1.19.",
        "x": -1.27,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-20",
        "number": "RPI1.20",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.20.",
        "x": -1.27,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-21",
        "number": "RPI1.21",
        "label": "SPI_MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MISO. Physical source contact RPI1.21.",
        "x": 1.27,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-22",
        "number": "RPI1.22",
        "label": "GPIO25",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO25. Physical source contact RPI1.22.",
        "x": 1.27,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-23",
        "number": "RPI1.23",
        "label": "SPI_SCLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_SCLK. Physical source contact RPI1.23.",
        "x": 3.81,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-24",
        "number": "RPI1.24",
        "label": "SPI_CE0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE0. Physical source contact RPI1.24.",
        "x": 3.81,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-25",
        "number": "RPI1.25",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.25.",
        "x": 6.35,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-26",
        "number": "RPI1.26",
        "label": "SPI_CE1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE1. Physical source contact RPI1.26.",
        "x": 6.35,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-27",
        "number": "RPI1.27",
        "label": "EEDATA",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EEDATA. Physical source contact RPI1.27.",
        "x": 8.89,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-28",
        "number": "RPI1.28",
        "label": "EECLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: EECLK. Physical source contact RPI1.28.",
        "x": 8.89,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-29",
        "number": "RPI1.29",
        "label": "GPIO5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO5. Physical source contact RPI1.29.",
        "x": 11.43,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-30",
        "number": "RPI1.30",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.30.",
        "x": 11.43,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-31",
        "number": "RPI1.31",
        "label": "GPIO6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO6. Physical source contact RPI1.31.",
        "x": 13.97,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-32",
        "number": "RPI1.32",
        "label": "GPIO12",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO12. Physical source contact RPI1.32.",
        "x": 13.97,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-33",
        "number": "RPI1.33",
        "label": "GPIO13",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO13. Physical source contact RPI1.33.",
        "x": 16.51,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-34",
        "number": "RPI1.34",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.34.",
        "x": 16.51,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-35",
        "number": "RPI1.35",
        "label": "LRCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LRCLK. Physical source contact RPI1.35.",
        "x": 19.05,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-36",
        "number": "RPI1.36",
        "label": "GPIO16",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO16. Physical source contact RPI1.36.",
        "x": 19.05,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-37",
        "number": "RPI1.37",
        "label": "GPIO26",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO26. Physical source contact RPI1.37.",
        "x": 21.59,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-38",
        "number": "RPI1.38",
        "label": "GPIO20",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO20. Physical source contact RPI1.38.",
        "x": 21.59,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-39",
        "number": "RPI1.39",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact RPI1.39.",
        "x": 24.13,
        "y": -10.23,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "rpi1-40",
        "number": "RPI1.40",
        "label": "DIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIN. Physical source contact RPI1.40.",
        "x": 24.13,
        "y": -12.77,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "RPI1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.1.",
        "x": -30.214,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "SCL",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.2.",
        "x": -27.674,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "TXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: TXD. Physical source contact CONN1.3.",
        "x": -25.134,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "RXD",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: RXD. Physical source contact CONN1.4.",
        "x": -22.594,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-5",
        "number": "CONN1.5",
        "label": "GPIO4",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO4. Physical source contact CONN1.5.",
        "x": -20.054,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-6",
        "number": "CONN1.6",
        "label": "GPIO17",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: GPIO17. Physical source contact CONN1.6.",
        "x": -17.514,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-7",
        "number": "CONN1.7",
        "label": "BCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BCLK. Physical source contact CONN1.7.",
        "x": -14.974,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-8",
        "number": "CONN1.8",
        "label": "GPIO27",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO27. Physical source contact CONN1.8.",
        "x": -12.434,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-9",
        "number": "CONN1.9",
        "label": "GPIO22",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO22. Physical source contact CONN1.9.",
        "x": -9.894,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-10",
        "number": "CONN1.10",
        "label": "GPIO23",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO23. Physical source contact CONN1.10.",
        "x": -7.354,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-11",
        "number": "CONN1.11",
        "label": "GPIO24",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO24. Physical source contact CONN1.11.",
        "x": -4.814,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-12",
        "number": "CONN1.12",
        "label": "GPIO25",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO25. Physical source contact CONN1.12.",
        "x": -2.274,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-13",
        "number": "CONN1.13",
        "label": "SPI_MOSI",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MOSI. Physical source contact CONN1.13.",
        "x": 0.266,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-14",
        "number": "CONN1.14",
        "label": "SPI_MISO",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_MISO. Physical source contact CONN1.14.",
        "x": 2.806,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-15",
        "number": "CONN1.15",
        "label": "SPI_SCLK",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_SCLK. Physical source contact CONN1.15.",
        "x": 5.346,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-16",
        "number": "CONN1.16",
        "label": "SPI_CE0",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE0. Physical source contact CONN1.16.",
        "x": 7.886,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-17",
        "number": "CONN1.17",
        "label": "SPI_CE1",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: SPI_CE1. Physical source contact CONN1.17.",
        "x": 10.426,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-18",
        "number": "CONN1.18",
        "label": "GPIO5",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO5. Physical source contact CONN1.18.",
        "x": 12.966,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-19",
        "number": "CONN1.19",
        "label": "GPIO6",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO6. Physical source contact CONN1.19.",
        "x": 15.506,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-20",
        "number": "CONN1.20",
        "label": "GPIO12",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO12. Physical source contact CONN1.20.",
        "x": 18.046,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-21",
        "number": "CONN1.21",
        "label": "GPIO13",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO13. Physical source contact CONN1.21.",
        "x": 20.586,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-22",
        "number": "CONN1.22",
        "label": "GPIO16",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO16. Physical source contact CONN1.22.",
        "x": 23.126,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-23",
        "number": "CONN1.23",
        "label": "LRCLK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: LRCLK. Physical source contact CONN1.23.",
        "x": 25.666,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-24",
        "number": "CONN1.24",
        "label": "GPIO20",
        "type": "passive",
        "description": "Passive connector pass-through; no active onboard device drives this net. CAD net: GPIO20. Physical source contact CONN1.24.",
        "x": 28.206,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-25",
        "number": "CONN1.25",
        "label": "DIN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DIN. Physical source contact CONN1.25.",
        "x": 30.746,
        "y": -6.336,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CONN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "b4-1",
        "number": "B4.1",
        "label": "B1_4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_4. Physical source contact B4.1.",
        "x": 21.455,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B4",
        "back": false,
        "smd": true
      },
      {
        "id": "b4-2",
        "number": "B4.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B4.2.",
        "x": 18.955,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B4",
        "back": false,
        "smd": true
      },
      {
        "id": "b3-1",
        "number": "B3.1",
        "label": "B1_3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_3. Physical source contact B3.1.",
        "x": 10.406,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B3",
        "back": false,
        "smd": true
      },
      {
        "id": "b3-2",
        "number": "B3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B3.2.",
        "x": 7.906,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B3",
        "back": false,
        "smd": true
      },
      {
        "id": "b2-1",
        "number": "B2.1",
        "label": "B1_2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_2. Physical source contact B2.1.",
        "x": -7.628,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B2",
        "back": false,
        "smd": true
      },
      {
        "id": "b2-2",
        "number": "B2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B2.2.",
        "x": -10.128,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B2",
        "back": false,
        "smd": true
      },
      {
        "id": "b0-1",
        "number": "B0.1",
        "label": "B1_0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_0. Physical source contact B0.1.",
        "x": -23.342,
        "y": 1.772,
        "size": [
          4.5,
          1.3
        ],
        "shape": "rect",
        "connector": "B0",
        "back": false,
        "smd": true
      },
      {
        "id": "b0-2",
        "number": "B0.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B0.2.",
        "x": -23.342,
        "y": -0.728,
        "size": [
          4.5,
          1.3
        ],
        "shape": "rect",
        "connector": "B0",
        "back": false,
        "smd": true
      },
      {
        "id": "b1-1",
        "number": "B1.1",
        "label": "B1_1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_1. Physical source contact B1.1.",
        "x": -18.804,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B1",
        "back": false,
        "smd": true
      },
      {
        "id": "b1-2",
        "number": "B1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B1.2.",
        "x": -21.304,
        "y": 5.715,
        "size": [
          1.3,
          4.5
        ],
        "shape": "rect",
        "connector": "B1",
        "back": false,
        "smd": true
      },
      {
        "id": "joy1-1",
        "number": "JOY1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JOY1.1.",
        "x": 0.52,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JOY1",
        "back": false,
        "drill": 1
      },
      {
        "id": "joy1-2",
        "number": "JOY1.2",
        "label": "J1_3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: J1_3. Physical source contact JOY1.2.",
        "x": -2.02,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JOY1",
        "back": false,
        "drill": 1
      },
      {
        "id": "joy1-3",
        "number": "JOY1.3",
        "label": "J1_2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: J1_2. Physical source contact JOY1.3.",
        "x": -4.56,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JOY1",
        "back": false,
        "drill": 1
      },
      {
        "id": "joy1-4",
        "number": "JOY1.4",
        "label": "J1_1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: J1_1. Physical source contact JOY1.4.",
        "x": -7.1,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JOY1",
        "back": false,
        "drill": 1
      },
      {
        "id": "joy1-5",
        "number": "JOY1.5",
        "label": "J1_0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: J1_0. Physical source contact JOY1.5.",
        "x": -9.64,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JOY1",
        "back": false,
        "drill": 1
      },
      {
        "id": "b5-1",
        "number": "B5.1",
        "label": "B1_5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_5. Physical source contact B5.1.",
        "x": 23.112,
        "y": -0.728,
        "size": [
          4.5,
          1.3
        ],
        "shape": "rect",
        "connector": "B5",
        "back": false,
        "smd": true
      },
      {
        "id": "b5-2",
        "number": "B5.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact B5.2.",
        "x": 23.112,
        "y": 1.772,
        "size": [
          4.5,
          1.3
        ],
        "shape": "rect",
        "connector": "B5",
        "back": false,
        "smd": true
      },
      {
        "id": "spkr-1",
        "number": "SPKR.1",
        "label": "VO-",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO-. Physical source contact SPKR.1.",
        "x": 1.812,
        "y": 10.936,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "SPKR",
        "back": false,
        "drill": 1
      },
      {
        "id": "spkr-2",
        "number": "SPKR.2",
        "label": "VO+",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: VO+. Physical source contact SPKR.2.",
        "x": -1.688,
        "y": 10.936,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "SPKR",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.1.",
        "x": 11.95,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "YOUT",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: YOUT. Physical source contact JP1.2.",
        "x": 9.41,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "XOUT",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: XOUT. Physical source contact JP1.3.",
        "x": 6.87,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "3.3V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V. Physical source contact JP1.4.",
        "x": 4.33,
        "y": -1.51,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
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
        "x": 26.301,
        "y": 7.38,
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
        "x": 28.841,
        "y": 7.38,
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
        "x": 31.381,
        "y": 7.38,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.1.",
        "x": -31.357,
        "y": 7.38,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": -28.817,
        "y": 7.38,
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
        "x": -26.277,
        "y": 7.38,
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
        "label": "B1_3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_3. Physical source contact JP4.1.",
        "x": 10.426,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
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
        "x": 7.886,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "B1_4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_4. Physical source contact JP6.1.",
        "x": 21.475,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.2.",
        "x": 18.935,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP6",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "B1_5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_5. Physical source contact JP7.1.",
        "x": 29.349,
        "y": -0.748,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp7-2",
        "number": "JP7.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP7.2.",
        "x": 29.349,
        "y": 1.792,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP7",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp8-1",
        "number": "JP8.1",
        "label": "B1_2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_2. Physical source contact JP8.1.",
        "x": -7.608,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP8",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp8-2",
        "number": "JP8.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP8.2.",
        "x": -10.148,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP8",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp9-1",
        "number": "JP9.1",
        "label": "B1_1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_1. Physical source contact JP9.1.",
        "x": -18.784,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP9",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp9-2",
        "number": "JP9.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP9.2.",
        "x": -21.324,
        "y": 11.952,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP9",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp10-1",
        "number": "JP10.1",
        "label": "B1_0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1_0. Physical source contact JP10.1.",
        "x": -29.579,
        "y": 1.792,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP10",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp10-2",
        "number": "JP10.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP10.2.",
        "x": -29.579,
        "y": -0.748,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP10",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"4.156\" y=\"6.615\" width=\"10.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.205\" y=\"6.615\" width=\"10.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.054\" y=\"6.615\" width=\"10.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.878\" y=\"6.615\" width=\"10.0\" height=\"7.8\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-32.042\" y=\"-4.478\" width=\"7.8\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.012\" y=\"-4.478\" width=\"7.8\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.388\" y=\"7.536\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.3804\" y=\"-3.5194\" width=\"5.7984\" height=\"5.7968\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.2614\" y=\"-3.5388\" width=\"5.0292\" height=\"4.5656\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.384\" y=\"3.698\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.138\" y=\"-5.133\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.014\" y=\"2.91\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.506\" y=\"4.688\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.941\" y=\"2.91\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.926\" y=\"-3.923\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.043\" y=\"4.929\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.614\" y=\"2.135\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.267\" y=\"-4.9265\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-22.213\" y=\"-3.161\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.56\" y=\"3.443\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Arcade Bonnet.brd",
      "boardSha256": "0576767af723614ce937737e5e3940d24a9e21d1b467fe463e130efe671275f0",
      "sourceBounds": [
        0,
        0,
        65,
        30
      ],
      "selectedConnectors": [
        "RPI1",
        "CONN1",
        "B4",
        "B3",
        "B2",
        "B0",
        "B1",
        "JOY1",
        "B5",
        "SPKR",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "JP6",
        "JP7",
        "JP8",
        "JP9",
        "JP10"
      ],
      "reviewWarnings": [],
      "roleReview": [
        "RPI1.7 passive pass-through verified from schematic endpoints.",
        "RPI1.8 passive pass-through verified from schematic endpoints.",
        "RPI1.10 passive pass-through verified from schematic endpoints.",
        "RPI1.13 passive pass-through verified from schematic endpoints.",
        "RPI1.15 passive pass-through verified from schematic endpoints.",
        "RPI1.16 passive pass-through verified from schematic endpoints.",
        "RPI1.18 passive pass-through verified from schematic endpoints.",
        "RPI1.19 passive pass-through verified from schematic endpoints.",
        "RPI1.21 passive pass-through verified from schematic endpoints.",
        "RPI1.22 passive pass-through verified from schematic endpoints.",
        "RPI1.23 passive pass-through verified from schematic endpoints.",
        "RPI1.24 passive pass-through verified from schematic endpoints.",
        "RPI1.26 passive pass-through verified from schematic endpoints.",
        "RPI1.27 passive pass-through verified from schematic endpoints.",
        "RPI1.28 passive pass-through verified from schematic endpoints.",
        "RPI1.29 passive pass-through verified from schematic endpoints.",
        "RPI1.31 passive pass-through verified from schematic endpoints.",
        "RPI1.32 passive pass-through verified from schematic endpoints.",
        "RPI1.33 passive pass-through verified from schematic endpoints.",
        "RPI1.36 passive pass-through verified from schematic endpoints.",
        "RPI1.37 passive pass-through verified from schematic endpoints.",
        "RPI1.38 passive pass-through verified from schematic endpoints.",
        "CONN1.3 passive pass-through verified from schematic endpoints.",
        "CONN1.4 passive pass-through verified from schematic endpoints.",
        "CONN1.5 passive pass-through verified from schematic endpoints.",
        "CONN1.8 passive pass-through verified from schematic endpoints.",
        "CONN1.9 passive pass-through verified from schematic endpoints.",
        "CONN1.10 passive pass-through verified from schematic endpoints.",
        "CONN1.11 passive pass-through verified from schematic endpoints.",
        "CONN1.12 passive pass-through verified from schematic endpoints.",
        "CONN1.13 passive pass-through verified from schematic endpoints.",
        "CONN1.14 passive pass-through verified from schematic endpoints.",
        "CONN1.15 passive pass-through verified from schematic endpoints.",
        "CONN1.16 passive pass-through verified from schematic endpoints.",
        "CONN1.17 passive pass-through verified from schematic endpoints.",
        "CONN1.18 passive pass-through verified from schematic endpoints.",
        "CONN1.19 passive pass-through verified from schematic endpoints.",
        "CONN1.20 passive pass-through verified from schematic endpoints.",
        "CONN1.21 passive pass-through verified from schematic endpoints.",
        "CONN1.22 passive pass-through verified from schematic endpoints.",
        "CONN1.24 passive pass-through verified from schematic endpoints."
      ],
      "pinOverrides": [
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.15",
          "sourceNet": "GPIO22",
          "before": {
            "type": "unspecified",
            "label": "GPIO22"
          },
          "after": {
            "type": "passive",
            "label": "GPIO22"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.16",
          "sourceNet": "GPIO23",
          "before": {
            "type": "unspecified",
            "label": "GPIO23"
          },
          "after": {
            "type": "passive",
            "label": "GPIO23"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.31",
          "sourceNet": "GPIO6",
          "before": {
            "type": "unspecified",
            "label": "GPIO6"
          },
          "after": {
            "type": "passive",
            "label": "GPIO6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.32",
          "sourceNet": "GPIO12",
          "before": {
            "type": "unspecified",
            "label": "GPIO12"
          },
          "after": {
            "type": "passive",
            "label": "GPIO12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.33",
          "sourceNet": "GPIO13",
          "before": {
            "type": "unspecified",
            "label": "GPIO13"
          },
          "after": {
            "type": "passive",
            "label": "GPIO13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.36",
          "sourceNet": "GPIO16",
          "before": {
            "type": "unspecified",
            "label": "GPIO16"
          },
          "after": {
            "type": "passive",
            "label": "GPIO16"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.37",
          "sourceNet": "GPIO26",
          "before": {
            "type": "unspecified",
            "label": "GPIO26"
          },
          "after": {
            "type": "passive",
            "label": "GPIO26"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "RPI1.38",
          "sourceNet": "GPIO20",
          "before": {
            "type": "unspecified",
            "label": "GPIO20"
          },
          "after": {
            "type": "passive",
            "label": "GPIO20"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.3",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.4",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.5",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.8",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.9",
          "sourceNet": "GPIO22",
          "before": {
            "type": "unspecified",
            "label": "GPIO22"
          },
          "after": {
            "type": "passive",
            "label": "GPIO22"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.10",
          "sourceNet": "GPIO23",
          "before": {
            "type": "unspecified",
            "label": "GPIO23"
          },
          "after": {
            "type": "passive",
            "label": "GPIO23"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.11",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.12",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.13",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.14",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.15",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.16",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.17",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.18",
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
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.19",
          "sourceNet": "GPIO6",
          "before": {
            "type": "unspecified",
            "label": "GPIO6"
          },
          "after": {
            "type": "passive",
            "label": "GPIO6"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.20",
          "sourceNet": "GPIO12",
          "before": {
            "type": "unspecified",
            "label": "GPIO12"
          },
          "after": {
            "type": "passive",
            "label": "GPIO12"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.21",
          "sourceNet": "GPIO13",
          "before": {
            "type": "unspecified",
            "label": "GPIO13"
          },
          "after": {
            "type": "passive",
            "label": "GPIO13"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.22",
          "sourceNet": "GPIO16",
          "before": {
            "type": "unspecified",
            "label": "GPIO16"
          },
          "after": {
            "type": "passive",
            "label": "GPIO16"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        },
        {
          "number": "CONN1.24",
          "sourceNet": "GPIO20",
          "before": {
            "type": "unspecified",
            "label": "GPIO20"
          },
          "after": {
            "type": "passive",
            "label": "GPIO20"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Arcade-Bonnet-PCB/Adafruit Arcade Bonnet.sch"
        }
      ],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": []
      },
      "connectorFunctionAliases": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Arcade-Bonnet-PCB",
      "commit": "20446a9dc6a3f9b86abfc56c499863b030211beb",
      "boardURL": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/Adafruit%20Arcade%20Bonnet.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/Adafruit%20Arcade%20Bonnet.sch",
      "schematicSha256": "e6d0253c8a9cbec1c88e4102e487ce4ac5527eefa2e867a0d49b90eea088a8c2",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/license.txt",
      "sourceArchiveSha256": "b48e62b5b4fe1bdf5eac3f27d6ac493c09e4bd0314f3e01170b26726d9c17055",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [
        "RPI1.7: unresolved electrical role on GPIO4.",
        "RPI1.8: unresolved electrical role on TXD.",
        "RPI1.10: unresolved electrical role on RXD.",
        "RPI1.13: unresolved electrical role on GPIO27.",
        "RPI1.15: unresolved electrical role on GPIO22.",
        "RPI1.16: unresolved electrical role on GPIO23.",
        "RPI1.18: unresolved electrical role on GPIO24.",
        "RPI1.19: unresolved electrical role on SPI_MOSI.",
        "RPI1.21: unresolved electrical role on SPI_MISO.",
        "RPI1.22: unresolved electrical role on GPIO25.",
        "RPI1.23: unresolved electrical role on SPI_SCLK.",
        "RPI1.24: unresolved electrical role on SPI_CE0.",
        "RPI1.26: unresolved electrical role on SPI_CE1.",
        "RPI1.27: unresolved electrical role on EEDATA.",
        "RPI1.28: unresolved electrical role on EECLK.",
        "RPI1.29: unresolved electrical role on GPIO5.",
        "RPI1.31: unresolved electrical role on GPIO6.",
        "RPI1.32: unresolved electrical role on GPIO12.",
        "RPI1.33: unresolved electrical role on GPIO13.",
        "RPI1.36: unresolved electrical role on GPIO16.",
        "RPI1.37: unresolved electrical role on GPIO26.",
        "RPI1.38: unresolved electrical role on GPIO20.",
        "CONN1.3: unresolved electrical role on TXD.",
        "CONN1.4: unresolved electrical role on RXD.",
        "CONN1.5: unresolved electrical role on GPIO4.",
        "CONN1.8: unresolved electrical role on GPIO27.",
        "CONN1.9: unresolved electrical role on GPIO22.",
        "CONN1.10: unresolved electrical role on GPIO23.",
        "CONN1.11: unresolved electrical role on GPIO24.",
        "CONN1.12: unresolved electrical role on GPIO25.",
        "CONN1.13: unresolved electrical role on SPI_MOSI.",
        "CONN1.14: unresolved electrical role on SPI_MISO.",
        "CONN1.15: unresolved electrical role on SPI_SCLK.",
        "CONN1.16: unresolved electrical role on SPI_CE0.",
        "CONN1.17: unresolved electrical role on SPI_CE1.",
        "CONN1.18: unresolved electrical role on GPIO5.",
        "CONN1.19: unresolved electrical role on GPIO6.",
        "CONN1.20: unresolved electrical role on GPIO12.",
        "CONN1.21: unresolved electrical role on GPIO13.",
        "CONN1.22: unresolved electrical role on GPIO16.",
        "CONN1.24: unresolved electrical role on GPIO20."
      ]
    }
  }
};
