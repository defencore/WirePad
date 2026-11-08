// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-module-113020006": {
    "contacts": [
      {
        "id": "ant1-gnd1",
        "number": "ANT1.GND1",
        "label": "ANT1",
        "type": "passive",
        "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND1. CAD net: N$8.",
        "x": 15.3305,
        "y": -1.22,
        "size": [
          2.286,
          0.762
        ],
        "shape": "rect",
        "connector": "ANT1",
        "back": false,
        "smd": true
      },
      {
        "id": "ant1-gnd2",
        "number": "ANT1.GND2",
        "label": "ANT1",
        "type": "passive",
        "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND2. CAD net: N$8.",
        "x": 15.3305,
        "y": 1.574,
        "size": [
          2.286,
          0.762
        ],
        "shape": "rect",
        "connector": "ANT1",
        "back": false,
        "smd": true
      },
      {
        "id": "ant1-gnd3",
        "number": "ANT1.GND3",
        "label": "ANT1",
        "type": "passive",
        "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND3. CAD net: N$8.",
        "x": 16.8545,
        "y": 0.177,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ANT1",
        "back": false,
        "smd": true
      },
      {
        "id": "ant1-d",
        "number": "ANT1.D",
        "label": "ANT2",
        "type": "passive",
        "description": "External antenna center through R5 to RFTX2. This module uses its coax connector for the differential antenna feed. Physical source terminal ANT1.D. CAD net: N$17.",
        "x": 13.8065,
        "y": 0.177,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ANT1",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "TX/SDA",
        "type": "bidirectional",
        "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal J3.1. CAD net: TX.",
        "x": -10.16,
        "y": 3.05,
        "size": [
          2.74,
          0.9652
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "RX/SCL",
        "type": "input",
        "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal J3.2. CAD net: RX.",
        "x": -10.16,
        "y": 1.05,
        "size": [
          2.74,
          0.9652
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -10.16,
        "y": -0.95,
        "size": [
          2.74,
          0.9652
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.4. CAD net: GND.",
        "x": -10.16,
        "y": -2.95,
        "size": [
          2.74,
          0.9652
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-ss1",
        "number": "J3.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.SS1. CAD net: GND.",
        "x": -17.66,
        "y": 5.8206,
        "size": [
          2.1844,
          2.54
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-ss2",
        "number": "J3.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.SS2. CAD net: GND.",
        "x": -17.66,
        "y": -5.7206,
        "size": [
          2.1844,
          2.54
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "TX/SDA",
        "type": "bidirectional",
        "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal TP1.T. CAD net: TX.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "RX/SCL",
        "type": "input",
        "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal TP2.T. CAD net: RX.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3V3.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP6.T. CAD net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP7.T. CAD net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP8.T. CAD net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.1. CAD net: GND.",
        "x": 16.41,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 13.87,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "IRQ",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: IRQ.",
        "x": 11.33,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "RX/SCL",
        "type": "input",
        "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal J1.4. CAD net: RX.",
        "x": 8.79,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "TX/SDA",
        "type": "bidirectional",
        "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal J1.5. CAD net: TX.",
        "x": 6.25,
        "y": 5.13,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "p1-mm",
        "number": "P1.MM",
        "label": "SEL0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: SEL0.",
        "x": -7.085,
        "y": -4.395,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-00",
        "number": "P1.00",
        "label": "SEL0 HIGH",
        "type": "passive",
        "description": "SEL0 high option through R11=1 kOhm to 3V3. Physical source terminal P1.00. CAD net: N$10.",
        "x": -7.085,
        "y": -3.125,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-11",
        "number": "P1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal P1.11. CAD net: GND.",
        "x": -7.085,
        "y": -5.665,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-19.46\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.846\" y=\"-2.315\" width=\"6.0\" height=\"6.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.98\" y=\"3.86\" width=\"12.7\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.9335\" y=\"-1.855\" width=\"2.794\" height=\"4.064\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.811\" y=\"-7.169\" width=\"3.2\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7355\" y=\"-8.3955\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.5195\" y=\"-7.316\" width=\"4.191\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.504\" y=\"-7.7605\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.0535\" y=\"5.13\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.7515\" y=\"5.13\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.964\" y=\"1.066\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.964\" y=\"-0.458\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.154\" y=\"4.749\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.9485\" y=\"-3.125\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9005\" y=\"-3.125\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7355\" y=\"-3.379\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.98\" y=\"-3.1885\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.98\" y=\"-2.1725\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.6145\" y=\"4.749\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.974\" y=\"2.7805\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"2.7805\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"1.7645\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"0.7485\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"-0.2675\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.7035\" y=\"-7.189\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.688\" y=\"-1.2835\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.583\" y=\"-4.268\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.949\" y=\"1.2565\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.37\" y=\"-4.268\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.789\" y=\"-4.268\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.583\" y=\"-5.284\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.949\" y=\"-0.2675\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.5295\" y=\"-4.395\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.7515\" y=\"-3.379\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.933\" y=\"1.2565\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.933\" y=\"-1.1565\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"-0.2675\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.9485\" y=\"1.2565\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.9485\" y=\"-1.1565\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"1.2565\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.460000\" y=\"-6.050000\" width=\"9.200000\" height=\"12.200000\" rx=\"0.2\" fill=\"#e4e3d2\" stroke=\"#a1aaa0\" stroke-width=\".1\"/>",
    "backArtwork": "<rect x=\"-7.847\" y=\"-6.427\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - NFC v1.brd",
      "boardSha256": "a44e9c453466b151f337f80c19b6121e1e32ac32845cfbcab8406c5c6009aa22",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "ANT1",
        "J3",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "J1",
        "P1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/113020006/extracted/Grove - NFC/Grove - NFC v1.sch",
      "pinOverrides": [
        {
          "number": "ANT1.GND1",
          "before": {
            "label": "N$8",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8."
          },
          "after": {
            "label": "ANT1",
            "type": "passive",
            "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND1. CAD net: N$8."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "N$8",
            "label": "N$8",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "1.5R",
                [
                  "N$8",
                  "RFTX1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$8",
                "hops": [],
                "endpoints": [
                  {
                    "part": "ANT1",
                    "pin": "GND3",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND2",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ANT1.GND2",
          "before": {
            "label": "N$8",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8."
          },
          "after": {
            "label": "ANT1",
            "type": "passive",
            "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND2. CAD net: N$8."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "N$8",
            "label": "N$8",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "1.5R",
                [
                  "N$8",
                  "RFTX1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$8",
                "hops": [],
                "endpoints": [
                  {
                    "part": "ANT1",
                    "pin": "GND3",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND2",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ANT1.GND3",
          "before": {
            "label": "N$8",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8."
          },
          "after": {
            "label": "ANT1",
            "type": "passive",
            "description": "External antenna outer contacts are one RF terminal through R3 to RFTX1; they are not directly ground despite package pad names GND1/2/3. Physical source terminal ANT1.GND3. CAD net: N$8."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "N$8",
            "label": "N$8",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "1.5R",
                [
                  "N$8",
                  "RFTX1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$8",
                "hops": [],
                "endpoints": [
                  {
                    "part": "ANT1",
                    "pin": "GND3",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND2",
                    "direction": "io"
                  },
                  {
                    "part": "ANT1",
                    "pin": "GND1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ANT1.D",
          "before": {
            "label": "N$17",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$17."
          },
          "after": {
            "label": "ANT2",
            "type": "passive",
            "description": "External antenna center through R5 to RFTX2. This module uses its coax connector for the differential antenna feed. Physical source terminal ANT1.D. CAD net: N$17."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "N$17",
            "label": "N$17",
            "type": "passive",
            "endpoints": [
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R5",
                "1.5R",
                [
                  "N$17",
                  "RFTX2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$17",
                "hops": [],
                "endpoints": [
                  {
                    "part": "ANT1",
                    "pin": "D",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.1",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX/SDA",
            "type": "bidirectional",
            "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal J3.1. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R12",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "",
                [
                  "3V3",
                  "MOSI/SDA/TX",
                  "TX"
                ]
              ],
              [
                "R12",
                "4.7k",
                [
                  "TX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R12",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.2",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX/SCL",
            "type": "input",
            "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal J3.2. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R14",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "",
                [
                  "3V3",
                  "RX",
                  "SS/SCL/RX"
                ]
              ],
              [
                "R14",
                "4.7k",
                [
                  "RX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J3.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J3.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J3.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP1.T",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX/SDA",
            "type": "bidirectional",
            "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal TP1.T. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R12",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "",
                [
                  "3V3",
                  "MOSI/SDA/TX",
                  "TX"
                ]
              ],
              [
                "R12",
                "4.7k",
                [
                  "TX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R12",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP2.T",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX/SCL",
            "type": "input",
            "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal TP2.T. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R14",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "",
                [
                  "3V3",
                  "RX",
                  "SS/SCL/RX"
                ]
              ],
              [
                "R14",
                "4.7k",
                [
                  "RX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP4.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP6.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP6.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "TP7.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP7.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "TP8.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP8.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.4",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX/SCL",
            "type": "input",
            "description": "PN532 HSU receive input in UART mode, or I2C SCL after modification, through Q2. Physical source terminal J1.4. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R14",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "",
                [
                  "3V3",
                  "RX",
                  "SS/SCL/RX"
                ]
              ],
              [
                "R14",
                "4.7k",
                [
                  "RX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.5",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX/SDA",
            "type": "bidirectional",
            "description": "PN532 HSU transmit output in UART mode, or I2C SDA after host-interface modification, through Q1. Physical source terminal J1.5. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R12",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "",
                [
                  "3V3",
                  "MOSI/SDA/TX",
                  "TX"
                ]
              ],
              [
                "R12",
                "4.7k",
                [
                  "TX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R12",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.00",
          "before": {
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "SEL0 HIGH",
            "type": "passive",
            "description": "SEL0 high option through R11=1 kOhm to 3V3. Physical source terminal P1.00. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R11",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R11",
                "1k",
                [
                  "3V3",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$10",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "L",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R11",
                    "value": "1k",
                    "from": "N$10",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "TVDD",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "AVDD",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "PVDD",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "VBAT",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "DVDD",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "SVDD",
                    "direction": "sup"
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "out"
                  }
                ]
              },
              {
                "net": "RSTPDN",
                "hops": [
                  {
                    "part": "R11",
                    "value": "1k",
                    "from": "N$10",
                    "to": "3V3"
                  },
                  {
                    "part": "R2",
                    "value": "10k",
                    "from": "3V3",
                    "to": "RSTPDN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "RSTPD_N",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "MOSI/SDA/TX",
                "hops": [
                  {
                    "part": "R11",
                    "value": "1k",
                    "from": "N$10",
                    "to": "3V3"
                  },
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "MOSI/SDA/TX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MOSI/SDA/HSU_TX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SS/SCL/RX",
                "hops": [
                  {
                    "part": "R11",
                    "value": "1k",
                    "from": "N$10",
                    "to": "3V3"
                  },
                  {
                    "part": "R13",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SS/SCL/RX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "NSS/P50_SCL/HSU_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "IRQ",
                "hops": [
                  {
                    "part": "R11",
                    "value": "1k",
                    "from": "N$10",
                    "to": "3V3"
                  },
                  {
                    "part": "R4",
                    "value": "10k",
                    "from": "3V3",
                    "to": "IRQ"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "IP70_RQ",
                    "direction": "out"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.11",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal P1.11. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove_NFC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "DVSS",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS1",
                "direction": "sup"
              },
              {
                "part": "U2",
                "pin": "TVSS2",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "HEAT",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "TESTEN",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "AVSS",
                "direction": "sup"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "sup"
              },
              {
                "part": "C12",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C14",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C2",
                "22pF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C15",
                "22pF",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C11",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "56pF",
                [
                  "GND",
                  "RFTX2"
                ]
              ],
              [
                "C6",
                "56pF",
                [
                  "GND",
                  "RFTX1"
                ]
              ],
              [
                "C9",
                "220pF",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C7",
                "220pF",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R9",
                "1k",
                [
                  "GND",
                  "SEL1"
                ]
              ],
              [
                "C17",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C12",
                "16V 10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C18",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "DVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS1",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "TVSS2",
                    "direction": "sup"
                  },
                  {
                    "part": "U2",
                    "pin": "HEAT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "TESTEN",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "AVSS",
                    "direction": "sup"
                  },
                  {
                    "part": "P1",
                    "pin": "R",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "SEL1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "GND",
                    "to": "SEL1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "I1",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "ANT1.GND1: autogenerated net N$8 requires printed/function label review.",
        "ANT1.GND2: autogenerated net N$8 requires printed/function label review.",
        "ANT1.GND3: autogenerated net N$8 requires printed/function label review.",
        "ANT1.D: autogenerated net N$17 requires printed/function label review.",
        "P1.00: autogenerated net N$10 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "ANT1.GND1",
          "net": "N$8",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-U-FL",
          "sourceLayer": "1"
        },
        {
          "number": "ANT1.GND2",
          "net": "N$8",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-U-FL",
          "sourceLayer": "1"
        },
        {
          "number": "ANT1.GND3",
          "net": "N$8",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-U-FL",
          "sourceLayer": "1"
        },
        {
          "number": "ANT1.D",
          "net": "N$17",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-U-FL",
          "sourceLayer": "1"
        },
        {
          "number": "J3.1",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J3.2",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J3.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "in"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J3.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J3.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J3.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "in"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP5.T",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "TVDD",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "AVDD",
              "direction": "sup"
            },
            {
              "part": "C16",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PVDD",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "VBAT",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "DVDD",
              "direction": "sup"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "SVDD",
              "direction": "sup"
            },
            {
              "part": "R11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT",
              "direction": "out"
            },
            {
              "part": "C12",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP6.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP7.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP8.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "J1.1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "5P-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "in"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "5P-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "IRQ",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "IP70_RQ",
              "direction": "out"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "5P-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.4",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "5P-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.5",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R12",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "5P-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "P1.MM",
          "net": "SEL0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "I0",
              "direction": "in"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "P1.00",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "P1.11",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "DVSS",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS1",
              "direction": "sup"
            },
            {
              "part": "U2",
              "pin": "TVSS2",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "HEAT",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "TESTEN",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "AVSS",
              "direction": "sup"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "sup"
            },
            {
              "part": "C12",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "5153e2a464bbfcaefadcd1fe88ccc475b62c7eae0d4cc177ae1f0045453307af",
      "completePortInventory": [
        "ANT1",
        "J3",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "J1",
        "P1"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "ec03579696ab89f02a52b8d8e16d02f1e5f05224dde44f6ebecec511f316fd13",
      "sourceWikiSha256": "d667ec203d00564148671d81050c8b6df511cc9b6aab1e4814ce4edc4e39c854",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "PN532 NFC: wiki specifies 3.3 V. Trace UART TX/RX through FETs to PN532. Include P1 SEL0 strap; inspect antenna connector/photo.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg",
        "sha256": "e6edc0ea9853c387c92268852790947bebc14339bc8e5c31231b9fb2a32c485a"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "NFC v1.0"
      ]
    }
  },
  "seeed-module-103020013": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SIG",
        "type": "input",
        "description": "Analog input through R2/R6 divider to ADC121C021 VIN. Physical source terminal J2.1. CAD net: SIG.",
        "x": -14.705,
        "y": -2.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unused analog Grove contact. Physical source terminal J2.2. CAD net: NC.",
        "x": -14.705,
        "y": -0.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -14.705,
        "y": 1.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": -14.705,
        "y": 3.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL_H",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_H.",
        "x": 15.775,
        "y": -2.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA_H",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_H.",
        "x": 15.775,
        "y": -0.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 15.775,
        "y": 1.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": 15.775,
        "y": 3.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "va-t",
        "number": "VA.T",
        "label": "3V0 REF",
        "type": "power_out",
        "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal VA.T. CAD net: 3V0.",
        "x": 4.345,
        "y": -7.57,
        "size": [
          0.889,
          0.889
        ],
        "shape": "rect",
        "connector": "VA",
        "back": false,
        "smd": true
      },
      {
        "id": "alert-t",
        "number": "ALERT.T",
        "label": "ALERT",
        "type": "open_collector",
        "description": "ADC121C021 open-drain conversion alert output. Physical source terminal ALERT.T. CAD net: ALERT.",
        "x": 2.44,
        "y": -7.57,
        "size": [
          0.889,
          0.889
        ],
        "shape": "rect",
        "connector": "ALERT",
        "back": false,
        "smd": true
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal GND.T. CAD net: GND.",
        "x": -3.91,
        "y": -7.57,
        "size": [
          0.889,
          0.889
        ],
        "shape": "rect",
        "connector": "GND",
        "back": false,
        "smd": true
      },
      {
        "id": "addr1-mm",
        "number": "ADDR1.MM",
        "label": "ADDR1",
        "type": "input",
        "description": "ADC121C021 address-selection input. Physical source terminal ADDR1.MM. CAD net: ADR1.",
        "x": 1.17,
        "y": 7.67,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR1",
        "back": false,
        "smd": true
      },
      {
        "id": "addr1-00",
        "number": "ADDR1.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal ADDR1.00. CAD net: GND.",
        "x": 1.17,
        "y": 8.94,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR1",
        "back": false,
        "smd": true
      },
      {
        "id": "addr1-11",
        "number": "ADDR1.11",
        "label": "3V0 REF",
        "type": "power_out",
        "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal ADDR1.11. CAD net: 3V0.",
        "x": 1.17,
        "y": 6.4,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR1",
        "back": false,
        "smd": true
      },
      {
        "id": "addr0-mm",
        "number": "ADDR0.MM",
        "label": "ADDR0",
        "type": "input",
        "description": "ADC121C021 address-selection input. Physical source terminal ADDR0.MM. CAD net: ADR0.",
        "x": -2.005,
        "y": 7.67,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR0",
        "back": false,
        "smd": true
      },
      {
        "id": "addr0-00",
        "number": "ADDR0.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal ADDR0.00. CAD net: GND.",
        "x": -2.005,
        "y": 8.94,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR0",
        "back": false,
        "smd": true
      },
      {
        "id": "addr0-11",
        "number": "ADDR0.11",
        "label": "3V0 REF",
        "type": "power_out",
        "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal ADDR0.11. CAD net: 3V0.",
        "x": -2.005,
        "y": 6.4,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "ADDR0",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"12.975\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.505\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.976\" y=\"0.338\" width=\"2.96\" height=\"2.97\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.0855\" y=\"-0.1405\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.767\" y=\"5.638\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.408\" y=\"5.638\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.805\" y=\"-4.5855\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.64\" y=\"0.4945\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.155\" y=\"0.4945\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.155\" y=\"-4.5855\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.075\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.1\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.577\" y=\"-1.22\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.18\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.18\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.615\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.695\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.99\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.085\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.085\" y=\"-4.522\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.615\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.695\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.99\" y=\"0.558\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.505000\" y=\"-4.950000\" width=\"5.000000\" height=\"10.000000\" rx=\"0.2\" fill=\"#e4e3d2\" stroke=\"#a1aaa0\" stroke-width=\".1\"/><rect x=\"12.975000\" y=\"-4.950000\" width=\"5.000000\" height=\"10.000000\" rx=\"0.2\" fill=\"#e4e3d2\" stroke=\"#a1aaa0\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - I2C ADC.brd",
      "boardSha256": "2ba843c78a546b1f54a18ebf651a09b2bd9b7e83817d6307140d29ada9d7c6f2",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "J1",
        "VA",
        "ALERT",
        "GND",
        "ADDR1",
        "ADDR0"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/103020013/extracted/I2C ADC Eagle File/Grove - I2C ADC.sch",
      "pinOverrides": [
        {
          "number": "J2.1",
          "before": {
            "label": "SIG",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SIG."
          },
          "after": {
            "label": "SIG",
            "type": "input",
            "description": "Analog input through R2/R6 divider to ADC121C021 VIN. Physical source terminal J2.1. CAD net: SIG."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "SIG",
            "label": "SIG",
            "type": "passive",
            "endpoints": [
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "10K_1%",
                [
                  "SIG",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R2",
                    "value": "10K_1%",
                    "from": "SIG",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R2",
                    "value": "10K_1%",
                    "from": "SIG",
                    "to": "SIG1"
                  },
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "SIG1",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.2",
          "before": {
            "label": "NC",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: NC."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unused analog Grove contact. Physical source terminal J2.2. CAD net: NC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "NC",
            "label": "NC",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J2.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "A",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R10",
                "10K_1%",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C4",
                "10uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "10K_1%",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "C1",
                "100nf",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  },
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "N$5",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "SCL_H",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_H."
          },
          "after": {
            "label": "SCL_H",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_H."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "SCL_H",
            "label": "SCL_H",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "CJ2302",
                [
                  "3V0",
                  "SCL_H",
                  "SCL_L"
                ]
              ],
              [
                "R4",
                "4.7K",
                [
                  "SCL_H",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "SCL_H",
                    "to": "VCC"
                  },
                  {
                    "part": "R5",
                    "value": "1.5k",
                    "from": "VCC",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.2",
          "before": {
            "label": "SDA_H",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_H."
          },
          "after": {
            "label": "SDA_H",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_H."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "SDA_H",
            "label": "SDA_H",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q3",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q3",
                "CJ2302",
                [
                  "3V0",
                  "SDA_H",
                  "SDA_L"
                ]
              ],
              [
                "R9",
                "4.7K",
                [
                  "SDA_H",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K",
                    "from": "SDA_H",
                    "to": "VCC"
                  },
                  {
                    "part": "R5",
                    "value": "1.5k",
                    "from": "VCC",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "A",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R10",
                "10K_1%",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C4",
                "10uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "10K_1%",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "C1",
                "100nf",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  },
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "N$5",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "VA.T",
          "before": {
            "label": "3V0",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V0."
          },
          "after": {
            "label": "3V0 REF",
            "type": "power_out",
            "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal VA.T. CAD net: 3V0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "3V0",
            "label": "3V0",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VA",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "K",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "2",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "R5",
                "1.5k",
                [
                  "3V0",
                  "VCC"
                ]
              ],
              [
                "Q3",
                "CJ2302",
                [
                  "3V0",
                  "SDA_H",
                  "SDA_L"
                ]
              ],
              [
                "R8",
                "4.7K",
                [
                  "3V0",
                  "SDA_L"
                ]
              ],
              [
                "Q1",
                "CJ2302",
                [
                  "3V0",
                  "SCL_H",
                  "SCL_L"
                ]
              ],
              [
                "R3",
                "4.7K",
                [
                  "3V0",
                  "SCL_L"
                ]
              ],
              [
                "R7",
                "15K_1%",
                [
                  "3V0",
                  "N$5"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_L",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SDA_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_L",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SCL_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  },
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "N$5",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ALERT.T",
          "before": {
            "label": "ALERT",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT."
          },
          "after": {
            "label": "ALERT",
            "type": "open_collector",
            "description": "ADC121C021 open-drain conversion alert output. Physical source terminal ALERT.T. CAD net: ALERT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "ALERT",
            "label": "ALERT",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ALERT",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "100K",
                [
                  "ALERT",
                  "N$1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ALERT",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT",
                    "direction": "io"
                  },
                  {
                    "part": "ALERT",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "GND.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal GND.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "A",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R10",
                "10K_1%",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C4",
                "10uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "10K_1%",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "C1",
                "100nf",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  },
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "N$5",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR1.MM",
          "before": {
            "label": "ADR1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR1."
          },
          "after": {
            "label": "ADDR1",
            "type": "input",
            "description": "ADC121C021 address-selection input. Physical source terminal ADDR1.MM. CAD net: ADR1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "ADR1",
            "label": "ADR1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADR1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADR1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADR1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR1.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal ADDR1.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "A",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R10",
                "10K_1%",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C4",
                "10uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "10K_1%",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "C1",
                "100nf",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  },
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "N$5",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR1.11",
          "before": {
            "label": "3V0",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V0."
          },
          "after": {
            "label": "3V0 REF",
            "type": "power_out",
            "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal ADDR1.11. CAD net: 3V0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "3V0",
            "label": "3V0",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VA",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "K",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "2",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "R5",
                "1.5k",
                [
                  "3V0",
                  "VCC"
                ]
              ],
              [
                "Q3",
                "CJ2302",
                [
                  "3V0",
                  "SDA_H",
                  "SDA_L"
                ]
              ],
              [
                "R8",
                "4.7K",
                [
                  "3V0",
                  "SDA_L"
                ]
              ],
              [
                "Q1",
                "CJ2302",
                [
                  "3V0",
                  "SCL_H",
                  "SCL_L"
                ]
              ],
              [
                "R3",
                "4.7K",
                [
                  "3V0",
                  "SCL_L"
                ]
              ],
              [
                "R7",
                "15K_1%",
                [
                  "3V0",
                  "N$5"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_L",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SDA_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_L",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SCL_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  },
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "N$5",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR0.MM",
          "before": {
            "label": "ADR0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADR0."
          },
          "after": {
            "label": "ADDR0",
            "type": "input",
            "description": "ADC121C021 address-selection input. Physical source terminal ADDR0.MM. CAD net: ADR0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "ADR0",
            "label": "ADR0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADR0",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADR0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADR0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR0.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal ADDR0.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "A",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R10",
                "10K_1%",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C4",
                "10uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "10K_1%",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "C1",
                "100nf",
                [
                  "GND",
                  "SIG1"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SIG1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "SIG1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V0",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "GND",
                    "to": "N$5"
                  },
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "N$5",
                    "to": "3V0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "ADDR0.11",
          "before": {
            "label": "3V0",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V0."
          },
          "after": {
            "label": "3V0 REF",
            "type": "power_out",
            "description": "Onboard CJ432 shunt-derived 3.0 V ADC/reference rail. Physical source terminal ADDR0.11. CAD net: 3V0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_ADC/",
          "sourceNetEvidence": {
            "net": "3V0",
            "label": "3V0",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VA",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "K",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "2",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V0",
                  "GND"
                ]
              ],
              [
                "R5",
                "1.5k",
                [
                  "3V0",
                  "VCC"
                ]
              ],
              [
                "Q3",
                "CJ2302",
                [
                  "3V0",
                  "SDA_H",
                  "SDA_L"
                ]
              ],
              [
                "R8",
                "4.7K",
                [
                  "3V0",
                  "SDA_L"
                ]
              ],
              [
                "Q1",
                "CJ2302",
                [
                  "3V0",
                  "SCL_H",
                  "SCL_L"
                ]
              ],
              [
                "R3",
                "4.7K",
                [
                  "3V0",
                  "SCL_L"
                ]
              ],
              [
                "R7",
                "15K_1%",
                [
                  "3V0",
                  "N$5"
                ]
              ],
              [
                "Q2",
                "DNP",
                [
                  "3V0",
                  "GND",
                  "SIG1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "K",
                    "direction": "io"
                  },
                  {
                    "part": "VA",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_L",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SDA_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_L",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "3V0",
                    "to": "SCL_L"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "R",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R7",
                    "value": "15K_1%",
                    "from": "3V0",
                    "to": "N$5"
                  },
                  {
                    "part": "R10",
                    "value": "10K_1%",
                    "from": "N$5",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J2.2: unresolved electrical role on NC."
      ],
      "rawPinEvidence": [
        {
          "number": "J2.1",
          "net": "SIG",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.2",
          "net": "NC",
          "connectedPins": [],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "A",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.1",
          "net": "SCL_H",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "SDA_H",
          "connectedPins": [
            {
              "part": "Q3",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "A",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "4P-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "VA.T",
          "net": "3V0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VA",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "K",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "2",
              "direction": "io"
            }
          ],
          "package": "TP_3535",
          "sourceLayer": "1"
        },
        {
          "number": "ALERT.T",
          "net": "ALERT",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ALERT",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_3535",
          "sourceLayer": "1"
        },
        {
          "number": "GND.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "A",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "TP_3535",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR1.MM",
          "net": "ADR1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADR1",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR1.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "A",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR1.11",
          "net": "3V0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VA",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "K",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "2",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR0.MM",
          "net": "ADR0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADR0",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR0.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "A",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        },
        {
          "number": "ADDR0.11",
          "net": "3V0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VA",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "K",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "2",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-4.1X1.5",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "86714739ed08cc1f47517fa78fb10f3a14dd277098a8015113c30410b20cc578",
      "completePortInventory": [
        "J2",
        "J1",
        "VA",
        "ALERT",
        "GND",
        "ADDR1",
        "ADDR0"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "7e2cf571b10f6934cf80b2ba7344e67ac43a169aac237637f4f478515e32dd3f",
      "sourceWikiSha256": "515311d6a31d41fb6796c778b493d02a407523a83dc0c80a64a2104bc7c559b4",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "ADC121C021, 5 V. Include ADDR0/ADDR1 three-pad straps. Analog Grove J2 SIG is an input; 3V0 reference is an output.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg",
        "sha256": "5784308377b2344d710bd8a2e680cee37eccf7ccd0601895d8b5359df169f6a3"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "I2C ADC v1.0"
      ]
    }
  },
  "seeed-module-103020193": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "B",
        "type": "bidirectional",
        "description": "RS485 B terminal through fitted R11=10 ohm to MAX13487E B. Physical source terminal J1.1. CAD net: N$10.",
        "x": 4.162,
        "y": -6.3,
        "size": [
          1.85,
          1.85
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "A",
        "type": "bidirectional",
        "description": "RS485 A terminal through fitted R12=10 ohm to MAX13487E A. Physical source terminal J1.2. CAD net: N$11.",
        "x": 0.662,
        "y": -6.3,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.3. CAD net: GND.",
        "x": -2.838,
        "y": -6.3,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "RX",
        "type": "output",
        "description": "Receiver output: Q1/R1 path from MAX13487E RO. Printed RX names the host receive direction. Physical source terminal J2.1. CAD net: RX.",
        "x": -14.6415,
        "y": 2.881,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "TX",
        "type": "input",
        "description": "Transmit input: Q2/R2 path to MAX13487E DI. Printed TX names the host transmit direction. Physical source terminal J2.2. CAD net: TX.",
        "x": -14.6415,
        "y": 0.881,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -14.6415,
        "y": -1.119,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": -14.6415,
        "y": -3.119,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND.",
        "x": -17.7645,
        "y": 5.681,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND.",
        "x": -17.7645,
        "y": -5.919,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "RX",
        "type": "output",
        "description": "Receiver output: Q1/R1 path from MAX13487E RO. Printed RX names the host receive direction. Physical source terminal TP1.T. CAD net: RX.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "TX",
        "type": "input",
        "description": "Transmit input: Q2/R2 path to MAX13487E DI. Printed TX names the host transmit direction. Physical source terminal TP2.T. CAD net: TX.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.053\" y=\"-9.8\" width=\"11.43\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.9145\" y=\"-6.219\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.362\" y=\"1.193\" width=\"3.81\" height=\"5.08\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.696\" y=\"-0.053\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.784\" y=\"-3.252\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.323\" y=\"4.876\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.514\" y=\"4.876\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.355\" y=\"4.876\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.456\" y=\"3.4155\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.456\" y=\"-0.5215\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.3465\" y=\"7.035\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.9175\" y=\"7.035\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.123\" y=\"3.479\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.123\" y=\"-0.458\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.916\" y=\"3.479\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.916\" y=\"-0.458\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.767\" y=\"5.13\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.243\" y=\"5.13\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.291\" y=\"5.13\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.784\" y=\"1.828\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.584\" y=\"-2.998\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.466\" y=\"-2.109\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.784\" y=\"3.352\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.784\" y=\"0.304\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.784\" y=\"-1.22\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.916\" y=\"7.035\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.964\" y=\"7.035\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"5.384\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"3.86\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"2.336\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"0.812\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"-0.712\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.886\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.584\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.41\" y=\"-2.998\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.886\" y=\"-2.998\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.235\" y=\"-2.998\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.124\" y=\"1.09\" width=\"3.0\" height=\"0.968\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.053000\" y=\"-9.800000\" width=\"11.430000\" height=\"7.000000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"4.162\" cy=\"-6.3\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"0.662\" cy=\"-6.3\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-2.838\" cy=\"-6.3\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove-RS485.brd",
      "boardSha256": "e561a771915eacb51df51d8e98a43437ec38c90c02acc288388891cbb33db8fb",
      "sourceBounds": [
        0.06599999999999895,
        -0.16699999999999804,
        40.266000000000005,
        20.333000000000002
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/103020193/extracted/Grove - RS485/Grove-RS485.sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "B",
            "type": "bidirectional",
            "description": "RS485 B terminal through fitted R11=10 ohm to MAX13487E B. Physical source terminal J1.1. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R11",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R13",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R11",
                "10R",
                [
                  "N$10",
                  "N$8"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ],
              [
                "R13",
                "120R",
                [
                  "N$10",
                  "N$11"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  },
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  },
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$9",
                "hops": [
                  {
                    "part": "R13",
                    "value": "120R",
                    "from": "N$10",
                    "to": "N$11"
                  },
                  {
                    "part": "R12",
                    "value": "10R",
                    "from": "N$11",
                    "to": "N$9"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R13",
                    "value": "120R",
                    "from": "N$10",
                    "to": "N$11"
                  },
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.2",
          "before": {
            "label": "N$11",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11."
          },
          "after": {
            "label": "A",
            "type": "bidirectional",
            "description": "RS485 A terminal through fitted R12=10 ohm to MAX13487E A. Physical source terminal J1.2. CAD net: N$11."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "N$11",
            "label": "N$11",
            "type": "passive",
            "endpoints": [
              {
                "part": "R12",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R14",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R13",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R12",
                "10R",
                [
                  "N$11",
                  "N$9"
                ]
              ],
              [
                "R14",
                "4.7k",
                [
                  "N$11",
                  "V+5"
                ]
              ],
              [
                "R13",
                "120R",
                [
                  "N$10",
                  "N$11"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$9",
                "hops": [
                  {
                    "part": "R12",
                    "value": "10R",
                    "from": "N$11",
                    "to": "N$9"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "V+5"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "V+5",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "DE",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "V+5"
                  },
                  {
                    "part": "R21",
                    "value": "0R",
                    "from": "V+5",
                    "to": "DE"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "DE",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!RE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R14",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "V+5"
                  },
                  {
                    "part": "FB1",
                    "value": "0R",
                    "from": "V+5",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R13",
                    "value": "120R",
                    "from": "N$11",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R13",
                    "value": "120R",
                    "from": "N$11",
                    "to": "N$10"
                  },
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C5",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C4",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "GND",
                  "N$14"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R18",
                "56k 1%",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$15",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "N$16",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "GND",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.1",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX",
            "type": "output",
            "description": "Receiver output: Q1/R1 path from MAX13487E RO. Printed RX names the host receive direction. Physical source terminal J2.1. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002",
                [
                  "N$6",
                  "RX",
                  "VCC"
                ]
              ],
              [
                "R7",
                "4.7k",
                [
                  "RX",
                  "VCC"
                ]
              ],
              [
                "R9",
                "DNP",
                [
                  "N$6",
                  "RX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "RX",
                    "to": "N$6"
                  },
                  {
                    "part": "R1",
                    "value": "20R",
                    "from": "N$6",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "RO",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "RX",
                    "to": "N$6"
                  },
                  {
                    "part": "R5",
                    "value": "4.7k",
                    "from": "N$6",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.2",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX",
            "type": "input",
            "description": "Transmit input: Q2/R2 path to MAX13487E DI. Printed TX names the host transmit direction. Physical source terminal J2.2. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002",
                [
                  "N$7",
                  "TX",
                  "VCC"
                ]
              ],
              [
                "R8",
                "4.7k",
                [
                  "TX",
                  "VCC"
                ]
              ],
              [
                "R10",
                "DNP",
                [
                  "N$7",
                  "TX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R10",
                    "value": "DNP",
                    "from": "TX",
                    "to": "N$7"
                  },
                  {
                    "part": "R2",
                    "value": "20R",
                    "from": "N$7",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "DI",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "DNP",
                    "from": "TX",
                    "to": "N$7"
                  },
                  {
                    "part": "R6",
                    "value": "4.7k",
                    "from": "N$7",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C5",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C4",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "GND",
                  "N$14"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R18",
                "56k 1%",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$15",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "N$16",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "GND",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C5",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C4",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "GND",
                  "N$14"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R18",
                "56k 1%",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$15",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "N$16",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "GND",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C5",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C4",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "GND",
                  "N$14"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R18",
                "56k 1%",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$15",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "N$16",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "GND",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP1.T",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX",
            "type": "output",
            "description": "Receiver output: Q1/R1 path from MAX13487E RO. Printed RX names the host receive direction. Physical source terminal TP1.T. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002",
                [
                  "N$6",
                  "RX",
                  "VCC"
                ]
              ],
              [
                "R7",
                "4.7k",
                [
                  "RX",
                  "VCC"
                ]
              ],
              [
                "R9",
                "DNP",
                [
                  "N$6",
                  "RX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "RX",
                    "to": "N$6"
                  },
                  {
                    "part": "R1",
                    "value": "20R",
                    "from": "N$6",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "RO",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "RX",
                    "to": "N$6"
                  },
                  {
                    "part": "R5",
                    "value": "4.7k",
                    "from": "N$6",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP2.T",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX",
            "type": "input",
            "description": "Transmit input: Q2/R2 path to MAX13487E DI. Printed TX names the host transmit direction. Physical source terminal TP2.T. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002",
                [
                  "N$7",
                  "TX",
                  "VCC"
                ]
              ],
              [
                "R8",
                "4.7k",
                [
                  "TX",
                  "VCC"
                ]
              ],
              [
                "R10",
                "DNP",
                [
                  "N$7",
                  "TX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R10",
                    "value": "DNP",
                    "from": "TX",
                    "to": "N$7"
                  },
                  {
                    "part": "R2",
                    "value": "20R",
                    "from": "N$7",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "DI",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R10",
                    "value": "DNP",
                    "from": "TX",
                    "to": "N$7"
                  },
                  {
                    "part": "R6",
                    "value": "4.7k",
                    "from": "N$7",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP4.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-RS485/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C5",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C4",
                "22uF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "V+5"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "GND",
                  "N$14"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R18",
                "56k 1%",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "GND",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "PGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$16",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$15"
                  },
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$15",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "V+5",
                "hops": [
                  {
                    "part": "R18",
                    "value": "56k 1%",
                    "from": "GND",
                    "to": "N$16"
                  },
                  {
                    "part": "R17",
                    "value": "510k 1%",
                    "from": "N$16",
                    "to": "V+5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "FB1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "GND",
                    "to": "N$10"
                  },
                  {
                    "part": "R11",
                    "value": "10R",
                    "from": "N$10",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J1.1: autogenerated net N$10 requires printed/function label review.",
        "J1.2: autogenerated net N$11 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H3-3.5-11.5X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "N$11",
          "connectedPins": [
            {
              "part": "R12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H3-3.5-11.5X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H3-3.5-11.5X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.1",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "EN",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "EN",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "396f03f212253651197b7bf58c57a27c4b458034e90d4c29c80cd534d04542d7",
      "completePortInventory": [
        "J1",
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "fa72ce0a02b9d011dc77eba9cf367a07d95771e1dba52af8cb50276e50a7efd0",
      "sourceWikiSha256": "9c56b218a1d4c8d7203042bea4187e6c75c4afee92c8b911bf0a2c76524a82a0",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "MAX13487E auto-direction RS485. Trace N$10/N$11 to A/B through protection. Trace FETs for actual UART direction.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png",
        "sha256": "5741b4ef185d9a8eea62f24c19201869f6d1a3d7c331f925bc78e09ad75132ad"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "Grove-RS485 v1.0"
      ]
    }
  },
  "seeed-module-103020293": {
    "contacts": [
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL.",
        "x": -38.4032,
        "y": 6.5524,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": -38.4032,
        "y": 3.9616,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -38.3778,
        "y": -3.6076,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND.",
        "x": -38.4032,
        "y": -6.0968,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-p1",
        "number": "TP5.P1",
        "label": "RESET",
        "type": "input",
        "description": "TCA9548A active-low reset service pad. Physical source terminal TP5.P1. CAD net: RST.",
        "x": -36.3458,
        "y": -7.951,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP5",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp6-p1",
        "number": "TP6.P1",
        "label": "SCL0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL0.",
        "x": -4.164,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp7-p1",
        "number": "TP7.P1",
        "label": "SDA0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA0.",
        "x": -1.624,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp8-p1",
        "number": "TP8.P1",
        "label": "SCL1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL1.",
        "x": 0.916,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp9-p1",
        "number": "TP9.P1",
        "label": "SDA1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA1.",
        "x": 3.456,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp10-p1",
        "number": "TP10.P1",
        "label": "SCL2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL2.",
        "x": 14.886,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp11-p1",
        "number": "TP11.P1",
        "label": "SDA2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA2.",
        "x": 17.426,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp12-p1",
        "number": "TP12.P1",
        "label": "SCL3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL3.",
        "x": 19.966,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP12",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp13-p1",
        "number": "TP13.P1",
        "label": "SDA3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA3.",
        "x": 22.506,
        "y": -8.078,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP13",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp14-p1",
        "number": "TP14.P1",
        "label": "SCL4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL4.",
        "x": -4.164,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP14",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp15-p1",
        "number": "TP15.P1",
        "label": "SDA4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA4.",
        "x": -1.624,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP15",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp16-p1",
        "number": "TP16.P1",
        "label": "SCL5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL5.",
        "x": 0.916,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP16",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp17-p1",
        "number": "TP17.P1",
        "label": "SDA5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA5.",
        "x": 3.456,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP17",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp18-p1",
        "number": "TP18.P1",
        "label": "SCL6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL6.",
        "x": 14.886,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP18",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp19-p1",
        "number": "TP19.P1",
        "label": "SDA6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA6.",
        "x": 17.426,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP19",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp20-p1",
        "number": "TP20.P1",
        "label": "SCL7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL7.",
        "x": 19.966,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP20",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp21-p1",
        "number": "TP21.P1",
        "label": "SDA7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA7.",
        "x": 22.506,
        "y": 8.305,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP21",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "ADDR0",
        "type": "input",
        "description": "TCA9548A A0 address input. Physical source terminal JP1.1. CAD net: N$1.",
        "x": -26.516,
        "y": 5.892,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -26.516,
        "y": 7.797,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "ADDR1",
        "type": "input",
        "description": "TCA9548A A1 address input. Physical source terminal JP2.1. CAD net: N$2.",
        "x": -24.2554,
        "y": 5.892,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -24.2554,
        "y": 7.797,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "ADDR2",
        "type": "input",
        "description": "TCA9548A A2 address input. Physical source terminal JP3.1. CAD net: N$3.",
        "x": -21.944,
        "y": 5.892,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -21.944,
        "y": 7.797,
        "size": [
          0.254,
          0.254
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "ch0-1",
        "number": "CH0.1",
        "label": "SCL0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL0.",
        "x": -15.086,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH0",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch0-2",
        "number": "CH0.2",
        "label": "SDA0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA0.",
        "x": -15.086,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH0",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch0-3",
        "number": "CH0.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -15.086,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH0",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch0-4",
        "number": "CH0.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH0.4. CAD net: GND.",
        "x": -15.086,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH0",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch1-1",
        "number": "CH1.1",
        "label": "SCL1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL1.",
        "x": -7.974,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch1-2",
        "number": "CH1.2",
        "label": "SDA1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA1.",
        "x": -7.974,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch1-3",
        "number": "CH1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -7.974,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch1-4",
        "number": "CH1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH1.4. CAD net: GND.",
        "x": -7.974,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch2-1",
        "number": "CH2.1",
        "label": "SCL2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL2.",
        "x": -0.862,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch2-2",
        "number": "CH2.2",
        "label": "SDA2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA2.",
        "x": -0.862,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch2-3",
        "number": "CH2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -0.862,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch2-4",
        "number": "CH2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH2.4. CAD net: GND.",
        "x": -0.862,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH2",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch3-1",
        "number": "CH3.1",
        "label": "SCL3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL3.",
        "x": 6.25,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch3-2",
        "number": "CH3.2",
        "label": "SDA3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA3.",
        "x": 6.25,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch3-3",
        "number": "CH3.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 6.25,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch3-4",
        "number": "CH3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH3.4. CAD net: GND.",
        "x": 6.25,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH3",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch4-1",
        "number": "CH4.1",
        "label": "SCL4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL4.",
        "x": 13.362,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch4-2",
        "number": "CH4.2",
        "label": "SDA4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA4.",
        "x": 13.362,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch4-3",
        "number": "CH4.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 13.362,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch4-4",
        "number": "CH4.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH4.4. CAD net: GND.",
        "x": 13.362,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH4",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch5-1",
        "number": "CH5.1",
        "label": "SCL5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL5.",
        "x": 20.474,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch5-2",
        "number": "CH5.2",
        "label": "SDA5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA5.",
        "x": 20.474,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch5-3",
        "number": "CH5.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 20.474,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch5-4",
        "number": "CH5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH5.4. CAD net: GND.",
        "x": 20.474,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch6-1",
        "number": "CH6.1",
        "label": "SCL6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL6.",
        "x": 27.586,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH6",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch6-2",
        "number": "CH6.2",
        "label": "SDA6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA6.",
        "x": 27.586,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH6",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch6-3",
        "number": "CH6.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 27.586,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH6",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch6-4",
        "number": "CH6.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH6.4. CAD net: GND.",
        "x": 27.586,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH6",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch7-1",
        "number": "CH7.1",
        "label": "SCL7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL7.",
        "x": 34.698,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CH7",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch7-2",
        "number": "CH7.2",
        "label": "SDA7",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA7.",
        "x": 34.698,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH7",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch7-3",
        "number": "CH7.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 34.698,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH7",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "ch7-4",
        "number": "CH7.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal CH7.4. CAD net: GND.",
        "x": 34.698,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "CH7",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL.",
        "x": -30.707,
        "y": 3.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": -30.707,
        "y": 1.177,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -30.707,
        "y": -0.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -30.707,
        "y": -2.823,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      }
    ],
    "artwork": "<rect x=\"-39.107\" y=\"-4.823\" width=\"9.9\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.05\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.162\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.174\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.062\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.386\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.274\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.286\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.498\" y=\"-4.823\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.0744\" y=\"-3.723\" width=\"4.4\" height=\"7.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.167\" y=\"-8.078\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.7446\" y=\"-8.078\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.3222\" y=\"-8.078\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.8518\" y=\"-8.078\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.2676\" y=\"5.4348\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.3532\" y=\"-8.078\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.849\" y=\"-8.078\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.849\" y=\"-6.554\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - 8 Channel I2C Hub TCA9548A_v1.0_190814.brd",
      "boardSha256": "50ebfc6f347a85589d971c55a143211cf9ad6fc15760826357578b081ef406d2",
      "sourceBounds": [
        -41.016,
        -9.565,
        39.184000000000005,
        10.935
      ],
      "selectedConnectors": [
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "TP9",
        "TP10",
        "TP11",
        "TP12",
        "TP13",
        "TP14",
        "TP15",
        "TP16",
        "TP17",
        "TP18",
        "TP19",
        "TP20",
        "TP21",
        "JP1",
        "JP2",
        "JP3",
        "CH0",
        "CH1",
        "CH2",
        "CH3",
        "CH4",
        "CH5",
        "CH6",
        "CH7",
        "J1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/103020293/extracted/Grove - 8 Channel I2C Hub TCA9548A_v1.0_190814.sch",
      "pinOverrides": [
        {
          "number": "TP4.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP5.P1",
          "before": {
            "label": "RST",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST."
          },
          "after": {
            "label": "RESET",
            "type": "input",
            "description": "TCA9548A active-low reset service pad. Physical source terminal TP5.P1. CAD net: RST."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "RST",
            "label": "RST",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "!RESET",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "10K",
                [
                  "RST",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RST",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "!RESET",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "10K",
                    "from": "RST",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R1",
                    "value": "10K",
                    "from": "RST",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R1",
                    "value": "10K",
                    "from": "RST",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.1",
          "before": {
            "label": "A0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1."
          },
          "after": {
            "label": "ADDR0",
            "type": "input",
            "description": "TCA9548A A0 address input. Physical source terminal JP1.1. CAD net: N$1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "N$1",
            "label": "A0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "A0",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "N$1",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "N$1",
                    "to": "GND"
                  },
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "N$1",
                    "to": "GND"
                  },
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP2.1",
          "before": {
            "label": "A1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$2."
          },
          "after": {
            "label": "ADDR1",
            "type": "input",
            "description": "TCA9548A A1 address input. Physical source terminal JP2.1. CAD net: N$2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "N$2",
            "label": "A1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "A1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "N$2",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "N$2",
                    "to": "GND"
                  },
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "N$2",
                    "to": "GND"
                  },
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.1",
          "before": {
            "label": "A2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$3."
          },
          "after": {
            "label": "ADDR2",
            "type": "input",
            "description": "TCA9548A A2 address input. Physical source terminal JP3.1. CAD net: N$3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "N$3",
            "label": "A2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "A2",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "N$3",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "N$3",
                    "to": "GND"
                  },
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "N$3",
                    "to": "GND"
                  },
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH0.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH0.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH2.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH2.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH3.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH3.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH4.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH4.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH5.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH5.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH6.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH6.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "CH7.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal CH7.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$2"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "GND",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "CH4",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH5",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH6",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH7",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH3",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH2",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "CH0",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [],
      "rawPinEvidence": [
        {
          "number": "TP1.T",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "SCL",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "SDA",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP5.P1",
          "net": "RST",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "!RESET",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP6.P1",
          "net": "SCL0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC0",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP7.P1",
          "net": "SDA0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD0",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP8.P1",
          "net": "SCL1",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC1",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP9.P1",
          "net": "SDA1",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD1",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP10.P1",
          "net": "SCL2",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC2",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP11.P1",
          "net": "SDA2",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD2",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP12.P1",
          "net": "SCL3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC3",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP13.P1",
          "net": "SDA3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD3",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP14.P1",
          "net": "SCL4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC4",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP15.P1",
          "net": "SDA4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD4",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP16.P1",
          "net": "SCL5",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC5",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP17.P1",
          "net": "SDA5",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD5",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP18.P1",
          "net": "SCL6",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC6",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP19.P1",
          "net": "SDA6",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD6",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP20.P1",
          "net": "SCL7",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC7",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP21.P1",
          "net": "SDA7",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD7",
              "direction": "io"
            }
          ],
          "package": "TP-D65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "JP1.1",
          "net": "N$1",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "A0",
              "direction": "io"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.1",
          "net": "N$2",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "A1",
              "direction": "io"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.1",
          "net": "N$3",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "A2",
              "direction": "io"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-0805",
          "sourceLayer": "1"
        },
        {
          "number": "CH0.1",
          "net": "SCL0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC0",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH0.2",
          "net": "SDA0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD0",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH0.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH0.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH1.1",
          "net": "SCL1",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC1",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH1.2",
          "net": "SDA1",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD1",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH2.1",
          "net": "SCL2",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC2",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH2.2",
          "net": "SDA2",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD2",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH2.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH3.1",
          "net": "SCL3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC3",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH3.2",
          "net": "SDA3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD3",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH3.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH3.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH4.1",
          "net": "SCL4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC4",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH4.2",
          "net": "SDA4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD4",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH4.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH4.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH5.1",
          "net": "SCL5",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC5",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH5.2",
          "net": "SDA5",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD5",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH5.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH5.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH6.1",
          "net": "SCL6",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC6",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH6.2",
          "net": "SDA6",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD6",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH6.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH6.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH7.1",
          "net": "SCL7",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SC7",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH7.2",
          "net": "SDA7",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SD7",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH7.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "CH7.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "SCL",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0-90D",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "SDA",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0-90D",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0-90D",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0-90D",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "36c63caf1ebbe77d2f5beca3c558787b47c3dd4a87afc993eadd03affa408205",
      "completePortInventory": [
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "TP9",
        "TP10",
        "TP11",
        "TP12",
        "TP13",
        "TP14",
        "TP15",
        "TP16",
        "TP17",
        "TP18",
        "TP19",
        "TP20",
        "TP21",
        "JP1",
        "JP2",
        "JP3",
        "CH0",
        "CH1",
        "CH2",
        "CH3",
        "CH4",
        "CH5",
        "CH6",
        "CH7",
        "J1"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -40.1,
        -11.873540604271307,
        41.81050003250049,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "59c7be64e0164fab916022a9c526f4b41a3190428cd7b8024c344633b7150f27",
      "sourceWikiSha256": "02f73b718711e531bfd1b703da27dc2e0707d5a2f9f7731d3801d3857ee6352b",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "TCA9548A branches are conditional and independent; never join channels by similar SDA/SCL labels. Include JP1–JP3 address straps.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg",
        "sha256": "d568d4ab712563ab3fc64dd44a4dbf7e2925c75d4f82649b856ad9f2e4bd143d"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "Hub (TCA9548A) v1.0"
      ]
    }
  },
  "seeed-module-109020041": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL.",
        "x": -16.356,
        "y": 2.923,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA.",
        "x": -16.356,
        "y": 0.923,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -16.356,
        "y": -1.077,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -16.356,
        "y": -3.077,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "ADDR",
        "type": "input",
        "description": "ADS1115 address selection input. Physical source terminal J3.1. CAD net: ADDR.",
        "x": -5.688,
        "y": -5.792,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J3.2. CAD net: SCL.",
        "x": -3.148,
        "y": -5.792,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J3.3. CAD net: SDA.",
        "x": -0.608,
        "y": -5.792,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 1.932,
        "y": -5.792,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-5",
        "number": "J3.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.5. CAD net: GND.",
        "x": 4.472,
        "y": -5.792,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-6",
        "number": "J3.6",
        "label": "AIN0",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J3.6. CAD net: AIN0.",
        "x": 4.472,
        "y": -8.332,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-7",
        "number": "J3.7",
        "label": "AIN1",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J3.7. CAD net: AIN1.",
        "x": 1.932,
        "y": -8.332,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-8",
        "number": "J3.8",
        "label": "AIN2",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J3.8. CAD net: AIN2.",
        "x": -0.608,
        "y": -8.332,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-9",
        "number": "J3.9",
        "label": "AIN3",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J3.9. CAD net: AIN3.",
        "x": -3.148,
        "y": -8.332,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-10",
        "number": "J3.10",
        "label": "ALERT/RDY",
        "type": "open_collector",
        "description": "ADS1115 open-drain alert/conversion-ready output. Physical source terminal J3.10. CAD net: ALERT.",
        "x": -5.688,
        "y": -8.332,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "AIN3",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J4.1. CAD net: AIN3.",
        "x": 11.571,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "AIN2",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J4.2. CAD net: AIN2.",
        "x": 8.071,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "AIN1",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J4.3. CAD net: AIN1.",
        "x": 4.571,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "AIN0",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal J4.4. CAD net: AIN0.",
        "x": 1.071,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "j4-5",
        "number": "J4.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J4.5. CAD net: GND.",
        "x": -2.429,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "j4-6",
        "number": "J4.6",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -5.929,
        "y": 6.146,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP1.1. CAD net: GND.",
        "x": -16.856,
        "y": -8.967,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "ADDR",
        "type": "input",
        "description": "ADS1115 address selection input. Physical source terminal JP1.2. CAD net: ADDR.",
        "x": -15.856,
        "y": -8.967,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -16.856,
        "y": -7.697,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "ADDR",
        "type": "input",
        "description": "ADS1115 address selection input. Physical source terminal JP2.2. CAD net: ADDR.",
        "x": -15.856,
        "y": -7.697,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal JP3.1. CAD net: SDA.",
        "x": -16.856,
        "y": -6.427,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "ADDR",
        "type": "input",
        "description": "ADS1115 address selection input. Physical source terminal JP3.2. CAD net: ADDR.",
        "x": -15.856,
        "y": -6.427,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal JP4.1. CAD net: SCL.",
        "x": -16.856,
        "y": -5.157,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "ADDR",
        "type": "input",
        "description": "ADS1115 address selection input. Physical source terminal JP4.2. CAD net: ADDR.",
        "x": -15.856,
        "y": -5.157,
        "size": [
          0.6096,
          0.889
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "ain0-1",
        "number": "AIN0.1",
        "label": "AIN0",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal AIN0.1. CAD net: AIN0.",
        "x": 17.045,
        "y": -3.077,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "AIN0",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "ain0-2",
        "number": "AIN0.2",
        "label": "AIN1",
        "type": "input",
        "description": "ADS1115 analog measurement input. Physical source terminal AIN0.2. CAD net: AIN1.",
        "x": 17.045,
        "y": -1.077,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "AIN0",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "ain0-3",
        "number": "AIN0.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 17.045,
        "y": 0.923,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "AIN0",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "ain0-4",
        "number": "AIN0.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal AIN0.4. CAD net: GND.",
        "x": 17.045,
        "y": 2.923,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "AIN0",
        "back": false,
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-7.989\" y=\"2.646\" width=\"21.62\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.208\" y=\"-9.602\" width=\"13.2\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.245\" y=\"-5.077\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.556\" y=\"-5.077\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.981\" y=\"-2.593\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.234\" y=\"-4.014\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.228\" y=\"0.558\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.228\" y=\"-4.014\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.228\" y=\"-0.966\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.234\" y=\"0.558\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.234\" y=\"-2.49\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.234\" y=\"-0.966\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.228\" y=\"-2.49\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.989000\" y=\"2.646000\" width=\"21.620000\" height=\"7.000000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"11.571\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"8.071\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"4.571\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"1.071\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-2.429\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-5.929\" cy=\"6.146\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - ADS1115 16-bit ADC_v1.0_200303.brd",
      "boardSha256": "576ac95f94e46c8d5901e4dd00af8295974e0f36af7e8da702767c34efd946e5",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "J3",
        "J4",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "AIN0"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/109020041/extracted/202002980_Grove - ADS1115 16-bit ADC_v1.0_SCH & PCB/Grove - ADS1115 16-bit ADC_v1.0_200303.sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "SCL",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SCL",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "4.7K",
                [
                  "SCL",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SCL",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.2",
          "before": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SDA",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "4.7K",
                [
                  "SDA",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SDA",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.1",
          "before": {
            "label": "ADDR",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR."
          },
          "after": {
            "label": "ADDR",
            "type": "input",
            "description": "ADS1115 address selection input. Physical source terminal J3.1. CAD net: ADDR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ADDR",
            "label": "ADDR",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADDR",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADDR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADDR",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.2",
          "before": {
            "label": "SCL",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J3.2. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SCL",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "4.7K",
                [
                  "SCL",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SCL",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.3",
          "before": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J3.3. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SDA",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "4.7K",
                [
                  "SDA",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SDA",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.5",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J3.5. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.6",
          "before": {
            "label": "AIN0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN0."
          },
          "after": {
            "label": "AIN0",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J3.6. CAD net: AIN0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN0",
            "label": "AIN0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN0",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN0",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.7",
          "before": {
            "label": "AIN1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN1."
          },
          "after": {
            "label": "AIN1",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J3.7. CAD net: AIN1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN1",
            "label": "AIN1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN1",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.8",
          "before": {
            "label": "AIN2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN2."
          },
          "after": {
            "label": "AIN2",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J3.8. CAD net: AIN2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN2",
            "label": "AIN2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN2",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.9",
          "before": {
            "label": "AIN3",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN3."
          },
          "after": {
            "label": "AIN3",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J3.9. CAD net: AIN3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN3",
            "label": "AIN3",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN3",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.10",
          "before": {
            "label": "ALERT",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT."
          },
          "after": {
            "label": "ALERT/RDY",
            "type": "open_collector",
            "description": "ADS1115 open-drain alert/conversion-ready output. Physical source terminal J3.10. CAD net: ALERT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ALERT",
            "label": "ALERT",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ALERT/RDY",
                "direction": "io"
              },
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "4.7K",
                [
                  "ALERT",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ALERT",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "ALERT",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "ALERT",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "ALERT",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.1",
          "before": {
            "label": "AIN3",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN3."
          },
          "after": {
            "label": "AIN3",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J4.1. CAD net: AIN3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN3",
            "label": "AIN3",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN3",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.2",
          "before": {
            "label": "AIN2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN2."
          },
          "after": {
            "label": "AIN2",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J4.2. CAD net: AIN2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN2",
            "label": "AIN2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN2",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.3",
          "before": {
            "label": "AIN1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN1."
          },
          "after": {
            "label": "AIN1",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J4.3. CAD net: AIN1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN1",
            "label": "AIN1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN1",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.4",
          "before": {
            "label": "AIN0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN0."
          },
          "after": {
            "label": "AIN0",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal J4.4. CAD net: AIN0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN0",
            "label": "AIN0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN0",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN0",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.5",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J4.5. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP1.1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.2",
          "before": {
            "label": "ADDR",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR."
          },
          "after": {
            "label": "ADDR",
            "type": "input",
            "description": "ADS1115 address selection input. Physical source terminal JP1.2. CAD net: ADDR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ADDR",
            "label": "ADDR",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADDR",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADDR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADDR",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP2.2",
          "before": {
            "label": "ADDR",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR."
          },
          "after": {
            "label": "ADDR",
            "type": "input",
            "description": "ADS1115 address selection input. Physical source terminal JP2.2. CAD net: ADDR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ADDR",
            "label": "ADDR",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADDR",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADDR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADDR",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.1",
          "before": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal JP3.1. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SDA",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "4.7K",
                [
                  "SDA",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SDA",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.2",
          "before": {
            "label": "ADDR",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR."
          },
          "after": {
            "label": "ADDR",
            "type": "input",
            "description": "ADS1115 address selection input. Physical source terminal JP3.2. CAD net: ADDR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ADDR",
            "label": "ADDR",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADDR",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADDR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADDR",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP4.1",
          "before": {
            "label": "SCL",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal JP4.1. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "SCL",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "4.7K",
                [
                  "SCL",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SCL",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "ALERT",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "ALERT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ALERT/RDY",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP4.2",
          "before": {
            "label": "ADDR",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR."
          },
          "after": {
            "label": "ADDR",
            "type": "input",
            "description": "ADS1115 address selection input. Physical source terminal JP4.2. CAD net: ADDR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "ADDR",
            "label": "ADDR",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "ADDR",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "ADDR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ADDR",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "AIN0.1",
          "before": {
            "label": "AIN0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN0."
          },
          "after": {
            "label": "AIN0",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal AIN0.1. CAD net: AIN0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN0",
            "label": "AIN0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN0",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN0",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "AIN0.2",
          "before": {
            "label": "AIN1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AIN1."
          },
          "after": {
            "label": "AIN1",
            "type": "input",
            "description": "ADS1115 analog measurement input. Physical source terminal AIN0.2. CAD net: AIN1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "AIN1",
            "label": "AIN1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "AIN1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AIN1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "AIN1",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "AIN0.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal AIN0.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-bit-ADC-ADS1115/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "AIN0",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SCL",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SDA",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.1",
          "net": "ADDR",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADDR",
              "direction": "io"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.2",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SCL",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.3",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SDA",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.4",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.6",
          "net": "AIN0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN0",
              "direction": "io"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.7",
          "net": "AIN1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN1",
              "direction": "io"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.8",
          "net": "AIN2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN2",
              "direction": "io"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.9",
          "net": "AIN3",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN3",
              "direction": "io"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.10",
          "net": "ALERT",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ALERT/RDY",
              "direction": "io"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X5-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.1",
          "net": "AIN3",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN3",
              "direction": "io"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.2",
          "net": "AIN2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN2",
              "direction": "io"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.3",
          "net": "AIN1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN1",
              "direction": "io"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.4",
          "net": "AIN0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN0",
              "direction": "io"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.6",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H6-3.5-21.7X7.0MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "JP1.1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-SHORT-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.2",
          "net": "ADDR",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADDR",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-SHORT-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.1",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.2",
          "net": "ADDR",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADDR",
              "direction": "io"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.1",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SDA",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.2",
          "net": "ADDR",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADDR",
              "direction": "io"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "SCL",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.2",
          "net": "ADDR",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ADDR",
              "direction": "io"
            }
          ],
          "package": "JP-2P-1",
          "sourceLayer": "1"
        },
        {
          "number": "AIN0.1",
          "net": "AIN0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN0",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "AIN0.2",
          "net": "AIN1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "AIN1",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "AIN0.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "AIN0.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "146f7097c1395a9baf5969c40e3a00968d7f1768d34c04197faff0c3c16dadb8",
      "completePortInventory": [
        "J1",
        "J3",
        "J4",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "AIN0"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "6e41e37bbd70cb65cafe3458fe17573bd96d3f9d56fdbceb9c8f775d6bbb5fd1",
      "sourceWikiSha256": "58a858c2ef773e523abd2c99378b54bc2a51b6dbfa2764a6352a2b85bca37671",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png",
        "sha256": "30d40666fabb1499c38cd19c66ac86b8426e450ef814f6f7a5a6c1fedf2a8758"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "Grove - ADS1115 16-bit ADC\nV1.0"
      ]
    }
  },
  "seeed-module-101020636": {
    "contacts": [
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "TXD",
        "type": "output",
        "description": "ATtiny1616 PB2 UART transmitter through fitted R4. Physical source terminal P1.1. CAD net: TXD.",
        "x": -2.9795,
        "y": 30.615,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "RXD",
        "type": "input",
        "description": "ATtiny1616 PB3 UART receiver through fitted R6. Physical source terminal P1.2. CAD net: RXD.",
        "x": -0.9795,
        "y": 30.615,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-3",
        "number": "P1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 1.0205,
        "y": 30.615,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-4",
        "number": "P1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal P1.4. CAD net: GND.",
        "x": 3.0205,
        "y": 30.615,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-ss1",
        "number": "P1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal P1.SS1. CAD net: GND.",
        "x": -5.3795,
        "y": 38.115,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-ss2",
        "number": "P1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal P1.SS2. CAD net: GND.",
        "x": 5.4205,
        "y": 38.115,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "TXD",
        "type": "output",
        "description": "ATtiny1616 PB2 UART transmitter through fitted R4. Physical source terminal TP1.T. CAD net: TXD.",
        "x": 8.808,
        "y": 36.042,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "RXD",
        "type": "input",
        "description": "ATtiny1616 PB3 UART receiver through fitted R6. Physical source terminal TP2.T. CAD net: RXD.",
        "x": 8.808,
        "y": 33.502,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP3.T. CAD net: GND.",
        "x": 8.808,
        "y": 28.422,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 8.808,
        "y": 30.962,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "j15-2",
        "number": "J15.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 22.055,
        "y": 38.335,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J15",
        "back": true,
        "smd": true
      },
      {
        "id": "j15-3",
        "number": "J15.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J15.3. CAD net: GND.",
        "x": 19.515,
        "y": 38.335,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J15",
        "back": true,
        "smd": true
      },
      {
        "id": "j15-4",
        "number": "J15.4",
        "label": "UPDI",
        "type": "bidirectional",
        "description": "ATtiny1616 PA0/RESET/UPDI through R22; source pad number is 4, not an invented pin 1. Physical source terminal J15.4. CAD net: N$1.",
        "x": 16.975,
        "y": 38.335,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J15",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"10.000000\" y=\"-34.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"16.000000\" y=\"-28.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">3</text><rect x=\"-6.000000\" y=\"-34.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"0.000000\" y=\"-28.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">2</text><rect x=\"-22.000000\" y=\"-34.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"-16.000000\" y=\"-28.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">1</text><rect x=\"10.000000\" y=\"-19.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"16.000000\" y=\"-13.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">6</text><rect x=\"-6.000000\" y=\"-19.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"0.000000\" y=\"-13.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">5</text><rect x=\"-22.000000\" y=\"-19.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"-16.000000\" y=\"-13.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">4</text><rect x=\"-22.000000\" y=\"-4.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"-16.000000\" y=\"2.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">7</text><rect x=\"-6.000000\" y=\"-4.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"0.000000\" y=\"2.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">8</text><rect x=\"10.000000\" y=\"-4.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"16.000000\" y=\"2.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">9</text><rect x=\"-22.000000\" y=\"11.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"-16.000000\" y=\"17.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">*</text><rect x=\"-6.000000\" y=\"11.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"0.000000\" y=\"17.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">0</text><rect x=\"10.000000\" y=\"11.000000\" width=\"12.000000\" height=\"12.000000\" rx=\"0.12\" fill=\"#e6e6d6\" stroke=\"#9cb4b5\" stroke-width=\".1\"/><text x=\"16.000000\" y=\"17.000000\" font-family=\"sans-serif\" font-size=\"3.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#20536a\">#</text>",
    "backArtwork": "<rect x=\"-6.0795\" y=\"30.715\" width=\"12.2\" height=\"9.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.815\" y=\"29.85\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.664\" y=\"29.826272\" width=\"2.0\" height=\"3.681728\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.0615\" y=\"31.2165\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.982\" y=\"35.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.8405\" y=\"25.8755\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.4715\" y=\"35.0185\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.9475\" y=\"35.0185\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.4235\" y=\"35.0185\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.3955\" y=\"25.8755\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.3625\" y=\"25.8925\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.857\" y=\"25.9035\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.4425\" y=\"35.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.329\" y=\"25.8745\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.6795\" y=\"33.223\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.651\" y=\"29.742\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.475\" y=\"30.461\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.759\" y=\"26.651\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7735\" y=\"35.5545\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.759\" y=\"28.048\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7455\" y=\"34.0315\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7455\" y=\"32.5075\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7445\" y=\"31.019\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.7445\" y=\"29.495\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - 12-Channel Capacitive Touch Keypad (ATtiny1616).brd",
      "boardSha256": "357c87cc09c459b7815638260b2e8c6ab905fbac23e7d9b14234b841d127c6d8",
      "sourceBounds": [
        7,
        -15,
        67,
        65
      ],
      "selectedConnectors": [
        "P1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J15"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/101020636/extracted/Grove - 12-Channel Capacitive Touch Keypad (ATtiny1616)/Grove - 12-Channel Capacitive Touch Keypad (ATtiny1616).sch",
      "pinOverrides": [
        {
          "number": "P1.1",
          "before": {
            "label": "TXD",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TXD."
          },
          "after": {
            "label": "TXD",
            "type": "output",
            "description": "ATtiny1616 PB2 UART transmitter through fitted R4. Physical source terminal P1.1. CAD net: TXD."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "TXD",
            "label": "TXD",
            "type": "passive",
            "endpoints": [
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "0R",
                [
                  "N$4",
                  "TXD"
                ]
              ],
              [
                "R1",
                "4.7k",
                [
                  "TXD",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "TXD",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$4",
                "hops": [
                  {
                    "part": "R4",
                    "value": "0R",
                    "from": "TXD",
                    "to": "N$4"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PB2/TOSC2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RXD",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "RXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PA0/!RESET!/UPDI",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.2",
          "before": {
            "label": "RXD",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD."
          },
          "after": {
            "label": "RXD",
            "type": "input",
            "description": "ATtiny1616 PB3 UART receiver through fitted R6. Physical source terminal P1.2. CAD net: RXD."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "RXD",
            "label": "RXD",
            "type": "passive",
            "endpoints": [
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "0R",
                [
                  "N$3",
                  "RXD"
                ]
              ],
              [
                "R2",
                "4.7k",
                [
                  "RXD",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RXD",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "RXD",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PB3/TOSC1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "TXD",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "TXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PA0/!RESET!/UPDI",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal P1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "4.7uF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal P1.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "4.7uF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "P1.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal P1.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "4.7uF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP1.T",
          "before": {
            "label": "TXD",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TXD."
          },
          "after": {
            "label": "TXD",
            "type": "output",
            "description": "ATtiny1616 PB2 UART transmitter through fitted R4. Physical source terminal TP1.T. CAD net: TXD."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "TXD",
            "label": "TXD",
            "type": "passive",
            "endpoints": [
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "0R",
                [
                  "N$4",
                  "TXD"
                ]
              ],
              [
                "R1",
                "4.7k",
                [
                  "TXD",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "TXD",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$4",
                "hops": [
                  {
                    "part": "R4",
                    "value": "0R",
                    "from": "TXD",
                    "to": "N$4"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PB2/TOSC2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RXD",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "RXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "TXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PA0/!RESET!/UPDI",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP2.T",
          "before": {
            "label": "RXD",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD."
          },
          "after": {
            "label": "RXD",
            "type": "input",
            "description": "ATtiny1616 PB3 UART receiver through fitted R6. Physical source terminal TP2.T. CAD net: RXD."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "RXD",
            "label": "RXD",
            "type": "passive",
            "endpoints": [
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "0R",
                [
                  "N$3",
                  "RXD"
                ]
              ],
              [
                "R2",
                "4.7k",
                [
                  "RXD",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RXD",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "RXD",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PB3/TOSC1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "TXD",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "TXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "RXD",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "VCC",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PA0/!RESET!/UPDI",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP3.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP3.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "4.7uF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J15.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J15.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "4.7uF",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "P1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J15.4",
          "before": {
            "label": "N$1",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1."
          },
          "after": {
            "label": "UPDI",
            "type": "bidirectional",
            "description": "ATtiny1616 PA0/RESET/UPDI through R22; source pad number is 4, not an invented pin 1. Physical source terminal J15.4. CAD net: N$1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/",
          "sourceNetEvidence": {
            "net": "N$1",
            "label": "N$1",
            "type": "passive",
            "endpoints": [
              {
                "part": "R22",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R22",
                "0R",
                [
                  "N$1",
                  "N$2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$2",
                "hops": [
                  {
                    "part": "R22",
                    "value": "0R",
                    "from": "N$1",
                    "to": "N$2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PA0/!RESET!/UPDI",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R22",
                    "value": "0R",
                    "from": "N$1",
                    "to": "N$2"
                  },
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "N$2",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "P1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J15.4: autogenerated net N$1 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "P1.1",
          "net": "TXD",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "P1.2",
          "net": "RXD",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "P1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "P1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "P1.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "P1.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "TXD",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "RXD",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J15.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H3-2.54-SMD",
          "sourceLayer": "1"
        },
        {
          "number": "J15.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H3-2.54-SMD",
          "sourceLayer": "1"
        },
        {
          "number": "J15.4",
          "net": "N$1",
          "connectedPins": [
            {
              "part": "R22",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H3-2.54-SMD",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "d3e5bd9fb6639a8a25bab7d18680a88d72a9449446737358ea7654fcdc96b1be",
      "completePortInventory": [
        "P1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J15"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [
        "J1–J12 covered touch keypad electrodes; shown as controls, not wiring contacts"
      ],
      "closedOutlineBounds": [
        -30,
        -40,
        30,
        40
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "c3bcdc0405d04afbf7f87516c98dfb9580c8886e0ef2161b1a9743a33aae71d5",
      "sourceWikiSha256": "d04952ba3d7e5568931afb505cb7d9acb895df1172b839c3daf04ee9c1f40570",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg",
        "sha256": "d8d3dd949558fd060c873009818c75cf33009a5566e4cf95b1df6cc79eef3a63"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "12-Channel Capacitive Touch \nKeypad (ATtiny1616)    v1.0"
      ]
    }
  },
  "seeed-module-111020048": {
    "contacts": [
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SCL_VCC",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal TP1.T. CAD net: SCL_VCC.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal TP2.T. CAD net: SDA_VCC.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SCL_VCC",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J2.1. CAD net: SCL_VCC.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J2.2. CAD net: SDA_VCC.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND.",
        "x": -16.558,
        "y": 5.85,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND.",
        "x": -16.558,
        "y": -5.75,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "3V3",
        "type": "power_out",
        "description": "XC6206 generated 3.3 V internal rail. Physical source terminal TP5.T. CAD net: 3V3.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP6.T. CAD net: GND.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP7.T. CAD net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP8.T. CAD net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "BOOT0",
        "type": "input",
        "description": "STM32 BOOT0 through R6=1 kOhm. Physical source terminal J1.1. CAD net: BOOT.",
        "x": -4.545,
        "y": -8.205,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -2.005,
        "y": -8.205,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SCL/SWCLK",
        "type": "bidirectional",
        "description": "Default fitted R11=0 ohm connects PA9/I2C_SCL; optional R13 DNP would select PA14/SWCLK. Not permanently tied to both MCU pins. Physical source terminal J1.3. CAD net: N$3.",
        "x": 0.535,
        "y": -8.205,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SDA/SWDIO",
        "type": "bidirectional",
        "description": "Default fitted R12=0 ohm connects PA10/I2C_SDA; optional R14 DNP would select PA13/SWIO. Physical source terminal J1.4. CAD net: N$4.",
        "x": 3.075,
        "y": -8.205,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.5. CAD net: GND.",
        "x": 5.615,
        "y": -8.205,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "PB1/D14",
        "type": "bidirectional",
        "description": "Level-shifted spare GPIO; printed D14_VCC names the GPIO voltage domain, not a supply rail. Physical source terminal J3.1. CAD net: PB1/D14_VCC.",
        "x": -16.61,
        "y": 8.432,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      }
    ],
    "artwork": "<rect x=\"-4.565\" y=\"-5.05\" width=\"10.2\" height=\"10.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.708\" y=\"-6.05\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.273\" y=\"-3.2\" width=\"4.4\" height=\"6.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.88\" y=\"7.162\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.498\" y=\"0.8755\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.498\" y=\"4.0505\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.498\" y=\"-5.7285\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.498\" y=\"-2.4265\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.461\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.191\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.921\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.381\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.509\" y=\"-8.116\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.239\" y=\"-8.116\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.969\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.699\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.429\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.159\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.557\" y=\"-8.116\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.287\" y=\"-8.116\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.651\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.889\" y=\"6.997\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.271\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.271\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.383\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.383\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.986\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.986\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.589\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.589\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.192\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.192\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.795\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.795\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.874\" y=\"4.838\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.874\" y=\"-6.592\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.565000\" y=\"-5.050000\" width=\"10.200000\" height=\"10.200000\" rx=\"0.4\" fill=\"#67767d\" stroke=\"#c5d0d2\" stroke-width=\".1\"/><rect x=\"-2.321000\" y=\"-2.806000\" width=\"5.712000\" height=\"5.712000\" rx=\"0.3\" fill=\"#25282d\" stroke=\"#aabac3\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - 5-Way Switch.brd",
      "boardSha256": "2a594d362f7a99480934f326a4eeecb6e3245c5d1321842275efd13770defdfe",
      "sourceBounds": [
        -20.635,
        -10.199999999999998,
        19.565,
        10.300000000000002
      ],
      "selectedConnectors": [
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J2",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "J1",
        "J3"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/111020048/extracted/Grove-5-Way_Switch/Grove - 5-Way Switch.sch",
      "pinOverrides": [
        {
          "number": "TP1.T",
          "before": {
            "label": "SCL_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_VCC."
          },
          "after": {
            "label": "SCL_VCC",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal TP1.T. CAD net: SCL_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "SCL_VCC",
            "label": "SCL_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002,215",
                [
                  "3V3",
                  "SCL_3V3",
                  "SCL_VCC"
                ]
              ],
              [
                "R19",
                "4.7k",
                [
                  "SCL_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R19",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP2.T",
          "before": {
            "label": "SDA_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_VCC."
          },
          "after": {
            "label": "SDA_VCC",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal TP2.T. CAD net: SDA_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "SDA_VCC",
            "label": "SDA_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002,215",
                [
                  "3V3",
                  "SDA_3V3",
                  "SDA_VCC"
                ]
              ],
              [
                "R18",
                "4.7k",
                [
                  "SDA_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R18",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP4.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP4.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.1",
          "before": {
            "label": "SCL_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_VCC."
          },
          "after": {
            "label": "SCL_VCC",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J2.1. CAD net: SCL_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "SCL_VCC",
            "label": "SCL_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002,215",
                [
                  "3V3",
                  "SCL_3V3",
                  "SCL_VCC"
                ]
              ],
              [
                "R19",
                "4.7k",
                [
                  "SCL_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R19",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.2",
          "before": {
            "label": "SDA_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_VCC."
          },
          "after": {
            "label": "SDA_VCC",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J2.2. CAD net: SDA_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "SDA_VCC",
            "label": "SDA_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002,215",
                [
                  "3V3",
                  "SDA_3V3",
                  "SDA_VCC"
                ]
              ],
              [
                "R18",
                "4.7k",
                [
                  "SDA_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R18",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP5.T",
          "before": {
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "XC6206 generated 3.3 V internal rail. Physical source terminal TP5.T. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VOUT",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VDDA",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
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
                "part": "Q1",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R16",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R8",
                "10k",
                [
                  "!RST",
                  "3V3"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R3",
                "4.7k",
                [
                  "3V3",
                  "PA6_D12"
                ]
              ],
              [
                "R2",
                "4.7k",
                [
                  "3V3",
                  "PA5_D11"
                ]
              ],
              [
                "R1",
                "4.7k",
                [
                  "3V3",
                  "PA4_D10"
                ]
              ],
              [
                "R5",
                "4.7k",
                [
                  "3V3",
                  "PA7_D13"
                ]
              ],
              [
                "R4",
                "4.7k",
                [
                  "3V3",
                  "PA1_D5"
                ]
              ],
              [
                "Q1",
                "2N7002,215",
                [
                  "3V3",
                  "SDA_3V3",
                  "SDA_VCC"
                ]
              ],
              [
                "R16",
                "4.7k",
                [
                  "3V3",
                  "SDA_3V3"
                ]
              ],
              [
                "Q2",
                "2N7002,215",
                [
                  "3V3",
                  "SCL_3V3",
                  "SCL_VCC"
                ]
              ],
              [
                "R17",
                "4.7k",
                [
                  "3V3",
                  "SCL_3V3"
                ]
              ],
              [
                "Q3",
                "2N7002,215",
                [
                  "3V3",
                  "PB1/D14_3V3",
                  "PB1/D14_VCC"
                ]
              ],
              [
                "R10",
                "4.7k",
                [
                  "3V3",
                  "PB1/D14_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "!RST",
                "hops": [
                  {
                    "part": "R8",
                    "value": "10k",
                    "from": "3V3",
                    "to": "!RST"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "NRST",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA6_D12",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PA6_D12"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA6/SPI_MISO",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA5_D11",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PA5_D11"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA5/SPI_SCK",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA4_D10",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PA4_D10"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA4/SPI_CS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "1",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA7_D13",
                "hops": [
                  {
                    "part": "R5",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PA7_D13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA7/SPI_MOSI",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "5",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA1_D5",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PA1_D5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "6",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_3V3",
                "hops": [
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SDA_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA10/I2C_SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SCL_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA9/I2C_SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PB1/D14_3V3",
                "hops": [
                  {
                    "part": "R10",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "PB1/D14_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP6.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP6.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP7.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP7.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "TP8.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP8.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "BOOT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BOOT."
          },
          "after": {
            "label": "BOOT0",
            "type": "input",
            "description": "STM32 BOOT0 through R6=1 kOhm. Physical source terminal J1.1. CAD net: BOOT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "BOOT",
            "label": "BOOT",
            "type": "passive",
            "endpoints": [
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "1k",
                [
                  "BOOT",
                  "N$1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "1k",
                    "from": "BOOT",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "1k",
                    "from": "BOOT",
                    "to": "N$1"
                  },
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "N$1",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.3",
          "before": {
            "label": "N$3",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$3."
          },
          "after": {
            "label": "SCL/SWCLK",
            "type": "bidirectional",
            "description": "Default fitted R11=0 ohm connects PA9/I2C_SCL; optional R13 DNP would select PA14/SWCLK. Not permanently tied to both MCU pins. Physical source terminal J1.3. CAD net: N$3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "N$3",
            "label": "N$3",
            "type": "passive",
            "endpoints": [
              {
                "part": "R11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R13",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R11",
                "0R",
                [
                  "N$3",
                  "SCL_3V3"
                ]
              ],
              [
                "R13",
                "DNP",
                [
                  "N$3",
                  "SWCLK/PA14"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SCL_3V3",
                "hops": [
                  {
                    "part": "R11",
                    "value": "0R",
                    "from": "N$3",
                    "to": "SCL_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA9/I2C_SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SWCLK/PA14",
                "hops": [
                  {
                    "part": "R13",
                    "value": "DNP",
                    "from": "N$3",
                    "to": "SWCLK/PA14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA14/SWCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R11",
                    "value": "0R",
                    "from": "N$3",
                    "to": "SCL_3V3"
                  },
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "SCL_3V3",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.4",
          "before": {
            "label": "N$4",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$4."
          },
          "after": {
            "label": "SDA/SWDIO",
            "type": "bidirectional",
            "description": "Default fitted R12=0 ohm connects PA10/I2C_SDA; optional R14 DNP would select PA13/SWIO. Physical source terminal J1.4. CAD net: N$4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "N$4",
            "label": "N$4",
            "type": "passive",
            "endpoints": [
              {
                "part": "R12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R14",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R12",
                "0R",
                [
                  "N$4",
                  "SDA_3V3"
                ]
              ],
              [
                "R14",
                "DNP",
                [
                  "N$4",
                  "SWIO/PA13"
                ]
              ]
            ],
            "paths": [
              {
                "net": "SDA_3V3",
                "hops": [
                  {
                    "part": "R12",
                    "value": "0R",
                    "from": "N$4",
                    "to": "SDA_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA10/I2C_SDA",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SWIO/PA13",
                "hops": [
                  {
                    "part": "R14",
                    "value": "DNP",
                    "from": "N$4",
                    "to": "SWIO/PA13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PA13/SWIO",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R12",
                    "value": "0R",
                    "from": "N$4",
                    "to": "SDA_3V3"
                  },
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "SDA_3V3",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.5",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.5. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
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
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "GND",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.1",
          "before": {
            "label": "PB1/D14_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: PB1/D14_VCC."
          },
          "after": {
            "label": "PB1/D14",
            "type": "bidirectional",
            "description": "Level-shifted spare GPIO; printed D14_VCC names the GPIO voltage domain, not a supply rail. Physical source terminal J3.1. CAD net: PB1/D14_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-5-Way_Switch/",
          "sourceNetEvidence": {
            "net": "PB1/D14_VCC",
            "label": "PB1/D14_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q3",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q3",
                "2N7002,215",
                [
                  "3V3",
                  "PB1/D14_3V3",
                  "PB1/D14_VCC"
                ]
              ],
              [
                "R15",
                "4.7k",
                [
                  "PB1/D14_VCC",
                  "VCC"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "PB1/D14_3V3",
                  "PB1/D14_VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R15",
                    "value": "4.7k",
                    "from": "PB1/D14_VCC",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PB1/D14_3V3",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "PB1/D14_VCC",
                    "to": "PB1/D14_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "PB1/D14_VCC",
                    "to": "PB1/D14_3V3"
                  },
                  {
                    "part": "R10",
                    "value": "4.7k",
                    "from": "PB1/D14_3V3",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J1.3: autogenerated net N$3 requires printed/function label review.",
        "J1.4: autogenerated net N$4 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "TP1.T",
          "net": "SCL_VCC",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "SDA_VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": "SCL_VCC",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "SDA_VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "TP5.T",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VOUT",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VDDA",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
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
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R16",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP6.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP7.T",
          "net": null,
          "connectedPins": [],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP8.T",
          "net": null,
          "connectedPins": [],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J1.1",
          "net": "BOOT",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R18",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "N$3",
          "connectedPins": [
            {
              "part": "R11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J1.4",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "R12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J1.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
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
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.1",
          "net": "PB1/D14_VCC",
          "connectedPins": [
            {
              "part": "Q3",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "1P-65/35MIL",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "8a7e1d598a4f64da467b7900a7d56a383c9c78d3abe4dfaee764e4251c60642b",
      "completePortInventory": [
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J2",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "J1",
        "J3"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "3591345b2099c59f2d70592e4318b4d6e4415863976e65674eb4f32144f06050",
      "sourceWikiSha256": "6d6c7b7d6cb1f507db1faf8c070ed95ea53f0901f3bf23bbc19d9782f7964edb",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Five-way STM32 module: trace J1 N$3/N$4 through series resistors to SWD functions. J3 is PB1/D14_VCC.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/main.jpg",
        "sha256": "c2010bedb41815e5a6529e13c3b8170f70cf16631c093e22b9d0c00d9bb271ce"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.0"
      ]
    }
  },
  "seeed-module-113020007": {
    "contacts": [
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal GND.T. CAD net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "rx-t",
        "number": "RX.T",
        "label": "RX",
        "type": "input",
        "description": "HM-11 receive input through Q1 level shifter. Physical source terminal RX.T. CAD net: BT_RX.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "RX",
        "back": true,
        "smd": true
      },
      {
        "id": "tx-t",
        "number": "TX.T",
        "label": "TX",
        "type": "output",
        "description": "HM-11 transmit output through Q2 level shifter. Physical source terminal TX.T. CAD net: BT_TX.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TX",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP1.T. CAD net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP2.T. CAD net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "3v3-t",
        "number": "3V3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "TD6810 regulated 3.3 V module rail. Physical source terminal 3V3.T. CAD net: 3.3V.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "3V3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP3.T. CAD net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "TX",
        "type": "output",
        "description": "HM-11 transmit output through Q2 level shifter. Physical source terminal J2.1. CAD net: BT_TX.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "RX",
        "type": "input",
        "description": "HM-11 receive input through Q1 level shifter. Physical source terminal J2.2. CAD net: BT_RX.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND.",
        "x": -16.835,
        "y": 5.996,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND.",
        "x": -16.835,
        "y": -5.896,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-0.215\" y=\"-6.7\" width=\"18.89\" height=\"13.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.835\" y=\"-6.05\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.149\" y=\"1.701\" width=\"5.588\" height=\"4.318\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.3705\" y=\"6.654\" width=\"4.445\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.894\" y=\"1.193\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.926\" y=\"1.193\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.403\" y=\"-2.236\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.2764\" y=\"-2.035\" width=\"1.6208\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.346\" y=\"4.838\" width=\"2.65\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.434\" y=\"-8.3955\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.434\" y=\"-5.2205\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.307\" y=\"-1.982\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.259\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.783\" y=\"-1.982\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.259\" y=\"-1.982\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.101\" y=\"-8.332\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.259\" y=\"-8.332\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.339\" y=\"6.654\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.101\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.227\" y=\"8.178\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.9585\" y=\"7.035\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.835000\" y=\"-6.050000\" width=\"5.300000\" height=\"12.200000\" rx=\"0.2\" fill=\"#e4e3d2\" stroke=\"#a1aaa0\" stroke-width=\".1\"/><rect x=\"-0.215000\" y=\"-6.700000\" width=\"18.890000\" height=\"13.500000\" rx=\"0.1\" fill=\"#315960\" stroke=\"#b5b4a0\" stroke-width=\".1\"/><rect x=\"2.240700\" y=\"-3.325000\" width=\"13.600800\" height=\"8.100000\" rx=\"0.1\" fill=\"#252c32\" stroke=\"#8b9b8e\" stroke-width=\".1\"/><path d=\"M0.7294999999999986 -5.3500000000000005h14.167500000000004v1.3500000000000005h-10.389500000000004\" fill=\"none\" stroke=\"#cebc6c\" stroke-width=\".25\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - BLE v1.0.brd",
      "boardSha256": "fcc1e91112df4bb80218eff686a677a8abb53280abb5fbc6b414ff80439ef98c",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "GND",
        "VCC",
        "RX",
        "TX",
        "TP1",
        "TP2",
        "3V3",
        "TP3",
        "J2"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/113020007/extracted/Grove - BLE v1.0.sch",
      "pinOverrides": [
        {
          "number": "GND.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal GND.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "D1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D1",
                "Green",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C2",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R2",
                "150k_1%",
                [
                  "GND",
                  "N$13"
                ]
              ],
              [
                "C3",
                "10uF",
                [
                  "3.3V",
                  "GND"
                ]
              ],
              [
                "C6",
                "47uF/10v",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D2",
                "6.2v-250mW",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VFB",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "3.3V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  },
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "N$13",
                    "to": "3.3V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "3V3",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "RX.T",
          "before": {
            "label": "BT_RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BT_RX."
          },
          "after": {
            "label": "RX",
            "type": "input",
            "description": "HM-11 receive input through Q1 level shifter. Physical source terminal RX.T. CAD net: BT_RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "BT_RX",
            "label": "BT_RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2n7002",
                [
                  "BT_RX",
                  "RXD",
                  "VCC_3V3"
                ]
              ],
              [
                "R5",
                "10k",
                [
                  "BT_RX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BT_RX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "RX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "BT_RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "RUN",
                    "direction": "io"
                  },
                  {
                    "part": "VCC",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "BT_TX",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "BT_RX",
                    "to": "VCC"
                  },
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "VCC",
                    "to": "BT_TX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "TX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TX.T",
          "before": {
            "label": "BT_TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BT_TX."
          },
          "after": {
            "label": "TX",
            "type": "output",
            "description": "HM-11 transmit output through Q2 level shifter. Physical source terminal TX.T. CAD net: BT_TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "BT_TX",
            "label": "BT_TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2n7002",
                [
                  "BT_TX",
                  "TXD",
                  "VCC_3V3"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "BT_TX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BT_TX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "TX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "BT_TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "RUN",
                    "direction": "io"
                  },
                  {
                    "part": "VCC",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "BT_RX",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "BT_TX",
                    "to": "VCC"
                  },
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "VCC",
                    "to": "BT_RX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP1.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP1.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "TP2.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP2.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "3V3.T",
          "before": {
            "label": "3.3V",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3.3V."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "TD6810 regulated 3.3 V module rail. Physical source terminal 3V3.T. CAD net: 3.3V."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "3.3V",
            "label": "3.3V",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "L2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "L1",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "22pF",
                [
                  "3.3V",
                  "N$13"
                ]
              ],
              [
                "R1",
                "680k_1%",
                [
                  "3.3V",
                  "N$13"
                ]
              ],
              [
                "C3",
                "10uF",
                [
                  "3.3V",
                  "GND"
                ]
              ],
              [
                "L2",
                "470R 2A",
                [
                  "3.3V",
                  "VCC_3V3"
                ]
              ],
              [
                "L1",
                "10uH",
                [
                  "3.3V",
                  "N$18"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3.3V",
                "hops": [],
                "endpoints": [
                  {
                    "part": "3V3",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "3.3V",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VFB",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "VCC_3V3",
                "hops": [
                  {
                    "part": "L2",
                    "value": "470R 2A",
                    "from": "3.3V",
                    "to": "VCC_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$18",
                "hops": [
                  {
                    "part": "L1",
                    "value": "10uH",
                    "from": "3.3V",
                    "to": "N$18"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "SW",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "3.3V",
                    "to": "N$13"
                  },
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "N$13",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "TXD",
                "hops": [
                  {
                    "part": "L2",
                    "value": "470R 2A",
                    "from": "3.3V",
                    "to": "VCC_3V3"
                  },
                  {
                    "part": "R6",
                    "value": "10k",
                    "from": "VCC_3V3",
                    "to": "TXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "UART_TX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RXD",
                "hops": [
                  {
                    "part": "L2",
                    "value": "470R 2A",
                    "from": "3.3V",
                    "to": "VCC_3V3"
                  },
                  {
                    "part": "R4",
                    "value": "10k",
                    "from": "VCC_3V3",
                    "to": "RXD"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "UART_RX",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "TP3.T",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal TP3.T. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J2.1",
          "before": {
            "label": "BT_TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BT_TX."
          },
          "after": {
            "label": "TX",
            "type": "output",
            "description": "HM-11 transmit output through Q2 level shifter. Physical source terminal J2.1. CAD net: BT_TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "BT_TX",
            "label": "BT_TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2n7002",
                [
                  "BT_TX",
                  "TXD",
                  "VCC_3V3"
                ]
              ],
              [
                "R7",
                "10k",
                [
                  "BT_TX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BT_TX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "TX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "BT_TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "RUN",
                    "direction": "io"
                  },
                  {
                    "part": "VCC",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "BT_RX",
                "hops": [
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "BT_TX",
                    "to": "VCC"
                  },
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "VCC",
                    "to": "BT_RX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.2",
          "before": {
            "label": "BT_RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BT_RX."
          },
          "after": {
            "label": "RX",
            "type": "input",
            "description": "HM-11 receive input through Q1 level shifter. Physical source terminal J2.2. CAD net: BT_RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "BT_RX",
            "label": "BT_RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2n7002",
                [
                  "BT_RX",
                  "RXD",
                  "VCC_3V3"
                ]
              ],
              [
                "R5",
                "10k",
                [
                  "BT_RX",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BT_RX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "RX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "BT_RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "RUN",
                    "direction": "io"
                  },
                  {
                    "part": "VCC",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "BT_TX",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10k",
                    "from": "BT_RX",
                    "to": "VCC"
                  },
                  {
                    "part": "R7",
                    "value": "10k",
                    "from": "VCC",
                    "to": "BT_TX"
                  }
                ],
                "endpoints": [
                  {
                    "part": "TX",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "D1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D1",
                "Green",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C2",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R2",
                "150k_1%",
                [
                  "GND",
                  "N$13"
                ]
              ],
              [
                "C3",
                "10uF",
                [
                  "3.3V",
                  "GND"
                ]
              ],
              [
                "C6",
                "47uF/10v",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D2",
                "6.2v-250mW",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VFB",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "3.3V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  },
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "N$13",
                    "to": "3.3V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "3V3",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "D1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D1",
                "Green",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C2",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R2",
                "150k_1%",
                [
                  "GND",
                  "N$13"
                ]
              ],
              [
                "C3",
                "10uF",
                [
                  "3.3V",
                  "GND"
                ]
              ],
              [
                "C6",
                "47uF/10v",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D2",
                "6.2v-250mW",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VFB",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "3.3V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  },
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "N$13",
                    "to": "3.3V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "3V3",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-BLE_v1/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "D1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D2",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D1",
                "Green",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "C2",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R2",
                "150k_1%",
                [
                  "GND",
                  "N$13"
                ]
              ],
              [
                "C3",
                "10uF",
                [
                  "3.3V",
                  "GND"
                ]
              ],
              [
                "C6",
                "47uF/10v",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ],
              [
                "D2",
                "6.2v-250mW",
                [
                  "GND",
                  "VCC_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "GND",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VFB",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "3.3V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "150k_1%",
                    "from": "GND",
                    "to": "N$13"
                  },
                  {
                    "part": "R1",
                    "value": "680k_1%",
                    "from": "N$13",
                    "to": "3.3V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "3V3",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [],
      "rawPinEvidence": [
        {
          "number": "GND.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "D1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "VCC.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "in"
            },
            {
              "part": "U1",
              "pin": "RUN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "RX.T",
          "net": "BT_RX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TX.T",
          "net": "BT_TX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "3V3.T",
          "net": "3.3V",
          "connectedPins": [
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "L2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": null,
          "connectedPins": [],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": "BT_TX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "BT_RX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "in"
            },
            {
              "part": "U1",
              "pin": "RUN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "D1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "D1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "D1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D2",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "589007ed8d169d3c95c250974591312479205767f7bbe48c5de0d146c60e6018",
      "completePortInventory": [
        "GND",
        "VCC",
        "RX",
        "TX",
        "TP1",
        "TP2",
        "3V3",
        "TP3",
        "J2"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -20.100000000000005,
        -11.873540604271307,
        21.810500032500492,
        11.960500032500494
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "f06c7389a26cd2d700ad8b95f306e650e60a9558207ef419bee3283e64d0ba26",
      "sourceWikiSha256": "96cb53c0cca16de1c2f6d32663f7169ae0a39a8b09ecf270caf7e5d785af6ab8",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_front.png",
        "sha256": "576f5d7ee01b54b292271b4d49ca15ad57ccac0c176637d69e9e29d4e9f8fe9a"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "BLE v1.0"
      ]
    }
  },
  "seeed-module-103020002": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "TX",
        "type": "output",
        "description": "Carrier buffer output from the separately fitted XBee DOUT; an XBee is not included. Physical source terminal J1.1. CAD net: TX.",
        "x": -16.51,
        "y": -3,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "RX",
        "type": "input",
        "description": "Carrier buffer input to the separately fitted XBee DIN; an XBee is not included. Physical source terminal J1.2. CAD net: RX.",
        "x": -16.51,
        "y": -1,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V.",
        "x": -16.51,
        "y": 1,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -16.51,
        "y": 3,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated 3.3 V supply for a separately fitted XBee radio. Physical source terminal J2.1. CAD net: 3V3.",
        "x": 13.97,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "DOUT",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DOUT function. No radio is included. Physical source terminal J2.2. CAD net: X_TX.",
        "x": 11.43,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "DIN",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIN function. No radio is included. Physical source terminal J2.3. CAD net: X_RX.",
        "x": 8.89,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "DIO8/CD",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO8/CD function. No radio is included. Physical source terminal J2.4. CAD net: XB4.",
        "x": 6.35,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "RESET",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RESET function. No radio is included. Physical source terminal J2.5. CAD net: RST.",
        "x": 3.81,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "RSSI",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RSSI function. No radio is included. Physical source terminal J2.6. CAD net: RSSI.",
        "x": 1.27,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-7",
        "number": "J2.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Unrouted auxiliary header contact; source does not connect it to an XBee socket terminal. Physical source terminal J2.7. CAD net: N$9.",
        "x": -1.27,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-8",
        "number": "J2.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Unrouted auxiliary header contact; source does not connect it to an XBee socket terminal. Physical source terminal J2.8. CAD net: N$10.",
        "x": -3.81,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-9",
        "number": "J2.9",
        "label": "DTR/SLEEP",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DTR/SLEEP function. No radio is included. Physical source terminal J2.9. CAD net: XBEE_DTR.",
        "x": -6.35,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j2-10",
        "number": "J2.10",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.10. CAD net: GND.",
        "x": -8.89,
        "y": -14.605,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "DIO4",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO4 function. No radio is included. Physical source terminal J3.1. CAD net: XB11.",
        "x": -8.89,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "CTS/DIO7",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee CTS/DIO7 function. No radio is included. Physical source terminal J3.2. CAD net: X_CTS.",
        "x": -6.35,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "ON/SLEEP",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee ON/SLEEP function. No radio is included. Physical source terminal J3.3. CAD net: ON/SLEEP.",
        "x": -3.81,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "VREF",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee VREF function. No radio is included. Physical source terminal J3.4. CAD net: XB14.",
        "x": -1.27,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-5",
        "number": "J3.5",
        "label": "ASSOC",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee ASSOC function. No radio is included. Physical source terminal J3.5. CAD net: ASSOC.",
        "x": 1.27,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-6",
        "number": "J3.6",
        "label": "RTS/DIO6",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RTS/DIO6 function. No radio is included. Physical source terminal J3.6. CAD net: X_RTS.",
        "x": 3.81,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-7",
        "number": "J3.7",
        "label": "DIO3",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO3 function. No radio is included. Physical source terminal J3.7. CAD net: XB17.",
        "x": 6.35,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-8",
        "number": "J3.8",
        "label": "DIO2",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO2 function. No radio is included. Physical source terminal J3.8. CAD net: XB18.",
        "x": 8.89,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-9",
        "number": "J3.9",
        "label": "DIO1",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO1 function. No radio is included. Physical source terminal J3.9. CAD net: XB19.",
        "x": 11.43,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "j3-10",
        "number": "J3.10",
        "label": "DIO0",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO0 function. No radio is included. Physical source terminal J3.10. CAD net: XB20.",
        "x": 13.97,
        "y": 15.875,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.8128
      },
      {
        "id": "xbee-1",
        "number": "XBEE.1",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard regulated 3.3 V supply for a separately fitted XBee radio. Physical source terminal XBEE.1. CAD net: 3V3.",
        "x": 11.8186,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-2",
        "number": "XBEE.2",
        "label": "DOUT",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DOUT function. No radio is included. Physical source terminal XBEE.2. CAD net: X_TX.",
        "x": 9.7866,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-3",
        "number": "XBEE.3",
        "label": "DIN",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIN function. No radio is included. Physical source terminal XBEE.3. CAD net: X_RX.",
        "x": 7.7546,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-4",
        "number": "XBEE.4",
        "label": "DIO8/CD",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO8/CD function. No radio is included. Physical source terminal XBEE.4. CAD net: XB4.",
        "x": 5.7226,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-5",
        "number": "XBEE.5",
        "label": "RESET",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RESET function. No radio is included. Physical source terminal XBEE.5. CAD net: RST.",
        "x": 3.6906,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-6",
        "number": "XBEE.6",
        "label": "RSSI",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RSSI function. No radio is included. Physical source terminal XBEE.6. CAD net: RSSI.",
        "x": 1.6586,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-7",
        "number": "XBEE.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal XBEE.7. CAD net: unconnected.",
        "x": -0.3734,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-8",
        "number": "XBEE.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal XBEE.8. CAD net: unconnected.",
        "x": -2.4054,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-9",
        "number": "XBEE.9",
        "label": "DTR/SLEEP",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DTR/SLEEP function. No radio is included. Physical source terminal XBEE.9. CAD net: XBEE_DTR.",
        "x": -4.4374,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-10",
        "number": "XBEE.10",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal XBEE.10. CAD net: GND.",
        "x": -6.4694,
        "y": -10.287,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-11",
        "number": "XBEE.11",
        "label": "DIO4",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO4 function. No radio is included. Physical source terminal XBEE.11. CAD net: XB11.",
        "x": -6.477,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-12",
        "number": "XBEE.12",
        "label": "CTS/DIO7",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee CTS/DIO7 function. No radio is included. Physical source terminal XBEE.12. CAD net: X_CTS.",
        "x": -4.445,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-13",
        "number": "XBEE.13",
        "label": "ON/SLEEP",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee ON/SLEEP function. No radio is included. Physical source terminal XBEE.13. CAD net: ON/SLEEP.",
        "x": -2.413,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-14",
        "number": "XBEE.14",
        "label": "VREF",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee VREF function. No radio is included. Physical source terminal XBEE.14. CAD net: XB14.",
        "x": -0.381,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-15",
        "number": "XBEE.15",
        "label": "ASSOC",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee ASSOC function. No radio is included. Physical source terminal XBEE.15. CAD net: ASSOC.",
        "x": 1.651,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-16",
        "number": "XBEE.16",
        "label": "RTS/DIO6",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee RTS/DIO6 function. No radio is included. Physical source terminal XBEE.16. CAD net: X_RTS.",
        "x": 3.683,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-17",
        "number": "XBEE.17",
        "label": "DIO3",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO3 function. No radio is included. Physical source terminal XBEE.17. CAD net: XB17.",
        "x": 5.715,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-18",
        "number": "XBEE.18",
        "label": "DIO2",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO2 function. No radio is included. Physical source terminal XBEE.18. CAD net: XB18.",
        "x": 7.747,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-19",
        "number": "XBEE.19",
        "label": "DIO1",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO1 function. No radio is included. Physical source terminal XBEE.19. CAD net: XB19.",
        "x": 9.779,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      },
      {
        "id": "xbee-20",
        "number": "XBEE.20",
        "label": "DIO0",
        "type": "passive",
        "description": "Passive carrier connection for the separately fitted XBee DIO0 function. No radio is included. Physical source terminal XBEE.20. CAD net: XB20.",
        "x": 11.811,
        "y": 11.7094,
        "size": [
          1.016,
          1.016
        ],
        "shape": "circle",
        "connector": "XBEE",
        "back": false,
        "drill": 0.635
      }
    ],
    "artwork": "<rect x=\"-8.128\" y=\"-11.303\" width=\"27.305\" height=\"24.0284\" rx=\".12\" fill=\"none\" stroke=\"#8b9b8e\" stroke-width=\".12\" stroke-dasharray=\".6 .4\"/><rect x=\"-10.16\" y=\"-15.875\" width=\"25.4\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.16\" y=\"14.605\" width=\"25.4\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.31\" y=\"-5.0\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.994\" y=\"17.042\" width=\"7.0\" height=\"3.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-7.087\" width=\"3.556\" height=\"6.554\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8255\" y=\"0.4445\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1755\" y=\"0.4445\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-17.145\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.938\" y=\"-3.81\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.938\" y=\"-1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.938\" y=\"-0.0\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.938\" y=\"1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.938\" y=\"-5.715\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-9.525\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-14.605\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-12.065\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.8435\" y=\"-17.145\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.8435\" y=\"-9.525\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.8435\" y=\"-14.605\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.8435\" y=\"-12.065\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.535\" y=\"0.905\" width=\"1.25\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.535\" y=\"-2.905\" width=\"1.25\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.469400\" y=\"-11.287000\" width=\"20.288000\" height=\"2.000000\" rx=\"0.1\" fill=\"#a7ada0\" stroke=\"#d0d3c1\" stroke-width=\".1\"/><rect x=\"-7.477000\" y=\"10.709000\" width=\"20.288000\" height=\"2.000000\" rx=\"0.1\" fill=\"#a7ada0\" stroke=\"#d0d3c1\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove Bee Socket V0.9a.brd",
      "boardSha256": "aec166acfdd70017609d40f21cfa9ad83570b7ea4a0f2d67ba9b5d23f97a870c",
      "sourceBounds": [
        -22.1,
        -22.1,
        22.1,
        22.1
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "XBEE"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/103020002/extracted/Eagle/Grove Bee Socket V0.9a.sch",
      "pinOverrides": [
        {
          "number": "J1.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S2",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S1",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "ON/SLEEP",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "ASSOC",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "RSSI",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "PWR",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "10uF_16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF_16V",
                [
                  "5V",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S2",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S1",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "ON/SLEEP",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "ASSOC",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "RSSI",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "PWR",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "U2",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.10",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.10. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S2",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S1",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "ON/SLEEP",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "ASSOC",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "RSSI",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "PWR",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "10uF_16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF_16V",
                [
                  "5V",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S2",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S1",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "ON/SLEEP",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "ASSOC",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "RSSI",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "PWR",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "U2",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.7",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal XBEE.7. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "XBEE.8",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal XBEE.8. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": null,
            "label": "NC",
            "type": "no_connect",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "XBEE.10",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal XBEE.10. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S2",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "S1",
                "direction": "io"
              },
              {
                "part": "RESET",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "ON/SLEEP",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "ASSOC",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "RSSI",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "PWR",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "!OE!",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "C2",
                "10uF_16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF_16V",
                [
                  "5V",
                  "GND"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S2",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "S1",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "ON/SLEEP",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "ASSOC",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "RSSI",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "PWR",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "U2",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "!OE!",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX",
            "type": "output",
            "description": "Carrier buffer output from the separately fitted XBee DOUT; an XBee is not included. Physical source terminal J1.1. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "33",
                [
                  "N$1",
                  "TX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$1",
                "hops": [
                  {
                    "part": "R6",
                    "value": "33",
                    "from": "TX",
                    "to": "N$1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "Y",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.2",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX",
            "type": "input",
            "description": "Carrier buffer input to the separately fitted XBee DIN; an XBee is not included. Physical source terminal J1.2. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R5",
                "1k",
                [
                  "N$132",
                  "RX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$132",
                "hops": [
                  {
                    "part": "R5",
                    "value": "1k",
                    "from": "RX",
                    "to": "N$132"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "A",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.1",
          "before": {
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard regulated 3.3 V supply for a separately fitted XBee radio. Physical source terminal J2.1. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT",
                "direction": "io"
              },
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "10uF_16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R4",
                "1k",
                [
                  "3V3",
                  "N$14"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "VCC",
                    "direction": "pwr"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$14",
                "hops": [
                  {
                    "part": "R4",
                    "value": "1k",
                    "from": "3V3",
                    "to": "N$14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "PWR",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.2",
          "before": {
            "label": "X_TX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: X_TX."
          },
          "after": {
            "label": "DOUT",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DOUT function. No radio is included. Physical source terminal J2.2. CAD net: X_TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_TX",
            "label": "X_TX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U3",
                "pin": "A",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "X_TX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "DOUT",
                    "direction": "out"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.3",
          "before": {
            "label": "X_RX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: X_RX."
          },
          "after": {
            "label": "DIN",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIN function. No radio is included. Physical source terminal J2.3. CAD net: X_RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_RX",
            "label": "X_RX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "Y",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "X_RX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "DIN/!CONFIG",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "Y",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.4",
          "before": {
            "label": "XB4",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB4."
          },
          "after": {
            "label": "DIO8/CD",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO8/CD function. No radio is included. Physical source terminal J2.4. CAD net: XB4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB4",
            "label": "XB4",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB4",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "CD/DOUT_EN/DO8",
                    "direction": "out"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.5",
          "before": {
            "label": "RST",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST."
          },
          "after": {
            "label": "RESET",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RESET function. No radio is included. Physical source terminal J2.5. CAD net: RST."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "RST",
            "label": "RST",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "RESET",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "RST",
                "hops": [],
                "endpoints": [
                  {
                    "part": "RESET",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "!RESET",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.6",
          "before": {
            "label": "RSSI",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RSSI."
          },
          "after": {
            "label": "RSSI",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RSSI function. No radio is included. Physical source terminal J2.6. CAD net: RSSI."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "RSSI",
            "label": "RSSI",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "1k",
                [
                  "N$11",
                  "RSSI"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RSSI",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "PWM0/RSSI",
                    "direction": "out"
                  }
                ]
              },
              {
                "net": "N$11",
                "hops": [
                  {
                    "part": "R3",
                    "value": "1k",
                    "from": "RSSI",
                    "to": "N$11"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RSSI",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.7",
          "before": {
            "label": "N$9",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: N$9."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unrouted auxiliary header contact; source does not connect it to an XBee socket terminal. Physical source terminal J2.7. CAD net: N$9."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "N$9",
            "label": "N$9",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J2.8",
          "before": {
            "label": "N$10",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: N$10."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unrouted auxiliary header contact; source does not connect it to an XBee socket terminal. Physical source terminal J2.8. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "J2.9",
          "before": {
            "label": "XBEE_DTR",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XBEE_DTR."
          },
          "after": {
            "label": "DTR/SLEEP",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DTR/SLEEP function. No radio is included. Physical source terminal J2.9. CAD net: XBEE_DTR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XBEE_DTR",
            "label": "XBEE_DTR",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XBEE_DTR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!DTR!/SLEEP_RQ/DI8",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.1",
          "before": {
            "label": "XB11",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB11."
          },
          "after": {
            "label": "DIO4",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO4 function. No radio is included. Physical source terminal J3.1. CAD net: XB11."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB11",
            "label": "XB11",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB11",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "RF_TX/AD4/DIO4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.2",
          "before": {
            "label": "X_CTS",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: X_CTS."
          },
          "after": {
            "label": "CTS/DIO7",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee CTS/DIO7 function. No radio is included. Physical source terminal J3.2. CAD net: X_CTS."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_CTS",
            "label": "X_CTS",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "X_CTS",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!CTS!/DIO7",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.3",
          "before": {
            "label": "ON/SLEEP",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ON/SLEEP."
          },
          "after": {
            "label": "ON/SLEEP",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee ON/SLEEP function. No radio is included. Physical source terminal J3.3. CAD net: ON/SLEEP."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "ON/SLEEP",
            "label": "ON/SLEEP",
            "type": "passive",
            "endpoints": [
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "1k",
                [
                  "N$3",
                  "ON/SLEEP"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ON/SLEEP",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "ON/!SLEEP",
                    "direction": "out"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1k",
                    "from": "ON/SLEEP",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "ON/SLEEP",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.4",
          "before": {
            "label": "XB14",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB14."
          },
          "after": {
            "label": "VREF",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee VREF function. No radio is included. Physical source terminal J3.4. CAD net: XB14."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB14",
            "label": "XB14",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB14",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "VREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.5",
          "before": {
            "label": "ASSOC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ASSOC."
          },
          "after": {
            "label": "ASSOC",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee ASSOC function. No radio is included. Physical source terminal J3.5. CAD net: ASSOC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "ASSOC",
            "label": "ASSOC",
            "type": "passive",
            "endpoints": [
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "1k",
                [
                  "ASSOC",
                  "N$8"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ASSOC",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "ASSOC/AD5/DIO5",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R2",
                    "value": "1k",
                    "from": "ASSOC",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "ASSOC",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.6",
          "before": {
            "label": "X_RTS",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: X_RTS."
          },
          "after": {
            "label": "RTS/DIO6",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RTS/DIO6 function. No radio is included. Physical source terminal J3.6. CAD net: X_RTS."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_RTS",
            "label": "X_RTS",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "X_RTS",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!RTS!/AD6/DIO6",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.7",
          "before": {
            "label": "XB17",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB17."
          },
          "after": {
            "label": "DIO3",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO3 function. No radio is included. Physical source terminal J3.7. CAD net: XB17."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB17",
            "label": "XB17",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB17",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "COORD_SEL/AD3/DIO3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.8",
          "before": {
            "label": "XB18",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB18."
          },
          "after": {
            "label": "DIO2",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO2 function. No radio is included. Physical source terminal J3.8. CAD net: XB18."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB18",
            "label": "XB18",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB18",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD2/DIO2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.9",
          "before": {
            "label": "XB19",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB19."
          },
          "after": {
            "label": "DIO1",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO1 function. No radio is included. Physical source terminal J3.9. CAD net: XB19."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB19",
            "label": "XB19",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB19",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD1/DIO1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.10",
          "before": {
            "label": "XB20",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB20."
          },
          "after": {
            "label": "DIO0",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO0 function. No radio is included. Physical source terminal J3.10. CAD net: XB20."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB20",
            "label": "XB20",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB20",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD0/DIO0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.1",
          "before": {
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard regulated 3.3 V supply for a separately fitted XBee radio. Physical source terminal XBEE.1. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT",
                "direction": "io"
              },
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "10uF_16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R4",
                "1k",
                [
                  "3V3",
                  "N$14"
                ]
              ],
              [
                "C3",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "VCC",
                    "direction": "pwr"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$14",
                "hops": [
                  {
                    "part": "R4",
                    "value": "1k",
                    "from": "3V3",
                    "to": "N$14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "PWR",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.2",
          "before": {
            "label": "X_TX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: X_TX."
          },
          "after": {
            "label": "DOUT",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DOUT function. No radio is included. Physical source terminal XBEE.2. CAD net: X_TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_TX",
            "label": "X_TX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U3",
                "pin": "A",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "X_TX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "A",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "DOUT",
                    "direction": "out"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.3",
          "before": {
            "label": "X_RX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: X_RX."
          },
          "after": {
            "label": "DIN",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIN function. No radio is included. Physical source terminal XBEE.3. CAD net: X_RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_RX",
            "label": "X_RX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "Y",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "X_RX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "DIN/!CONFIG",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "Y",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.4",
          "before": {
            "label": "XB4",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB4."
          },
          "after": {
            "label": "DIO8/CD",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO8/CD function. No radio is included. Physical source terminal XBEE.4. CAD net: XB4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB4",
            "label": "XB4",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB4",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "CD/DOUT_EN/DO8",
                    "direction": "out"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.5",
          "before": {
            "label": "RST",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST."
          },
          "after": {
            "label": "RESET",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RESET function. No radio is included. Physical source terminal XBEE.5. CAD net: RST."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "RST",
            "label": "RST",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "RESET",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "RST",
                "hops": [],
                "endpoints": [
                  {
                    "part": "RESET",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "XBEE",
                    "pin": "!RESET",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.6",
          "before": {
            "label": "RSSI",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RSSI."
          },
          "after": {
            "label": "RSSI",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RSSI function. No radio is included. Physical source terminal XBEE.6. CAD net: RSSI."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "RSSI",
            "label": "RSSI",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "1k",
                [
                  "N$11",
                  "RSSI"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RSSI",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "PWM0/RSSI",
                    "direction": "out"
                  }
                ]
              },
              {
                "net": "N$11",
                "hops": [
                  {
                    "part": "R3",
                    "value": "1k",
                    "from": "RSSI",
                    "to": "N$11"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RSSI",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.9",
          "before": {
            "label": "XBEE_DTR",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XBEE_DTR."
          },
          "after": {
            "label": "DTR/SLEEP",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DTR/SLEEP function. No radio is included. Physical source terminal XBEE.9. CAD net: XBEE_DTR."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XBEE_DTR",
            "label": "XBEE_DTR",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XBEE_DTR",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!DTR!/SLEEP_RQ/DI8",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.11",
          "before": {
            "label": "XB11",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB11."
          },
          "after": {
            "label": "DIO4",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO4 function. No radio is included. Physical source terminal XBEE.11. CAD net: XB11."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB11",
            "label": "XB11",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB11",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "RF_TX/AD4/DIO4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.12",
          "before": {
            "label": "X_CTS",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: X_CTS."
          },
          "after": {
            "label": "CTS/DIO7",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee CTS/DIO7 function. No radio is included. Physical source terminal XBEE.12. CAD net: X_CTS."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_CTS",
            "label": "X_CTS",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "X_CTS",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!CTS!/DIO7",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.13",
          "before": {
            "label": "ON/SLEEP",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ON/SLEEP."
          },
          "after": {
            "label": "ON/SLEEP",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee ON/SLEEP function. No radio is included. Physical source terminal XBEE.13. CAD net: ON/SLEEP."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "ON/SLEEP",
            "label": "ON/SLEEP",
            "type": "passive",
            "endpoints": [
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "1k",
                [
                  "N$3",
                  "ON/SLEEP"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ON/SLEEP",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "ON/!SLEEP",
                    "direction": "out"
                  }
                ]
              },
              {
                "net": "N$3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1k",
                    "from": "ON/SLEEP",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "ON/SLEEP",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.14",
          "before": {
            "label": "XB14",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB14."
          },
          "after": {
            "label": "VREF",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee VREF function. No radio is included. Physical source terminal XBEE.14. CAD net: XB14."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB14",
            "label": "XB14",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB14",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "VREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.15",
          "before": {
            "label": "ASSOC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ASSOC."
          },
          "after": {
            "label": "ASSOC",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee ASSOC function. No radio is included. Physical source terminal XBEE.15. CAD net: ASSOC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "ASSOC",
            "label": "ASSOC",
            "type": "passive",
            "endpoints": [
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "1k",
                [
                  "ASSOC",
                  "N$8"
                ]
              ]
            ],
            "paths": [
              {
                "net": "ASSOC",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "ASSOC/AD5/DIO5",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R2",
                    "value": "1k",
                    "from": "ASSOC",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "ASSOC",
                    "pin": "+",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.16",
          "before": {
            "label": "X_RTS",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: X_RTS."
          },
          "after": {
            "label": "RTS/DIO6",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee RTS/DIO6 function. No radio is included. Physical source terminal XBEE.16. CAD net: X_RTS."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "X_RTS",
            "label": "X_RTS",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "X_RTS",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "!RTS!/AD6/DIO6",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.17",
          "before": {
            "label": "XB17",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB17."
          },
          "after": {
            "label": "DIO3",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO3 function. No radio is included. Physical source terminal XBEE.17. CAD net: XB17."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB17",
            "label": "XB17",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB17",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "COORD_SEL/AD3/DIO3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.18",
          "before": {
            "label": "XB18",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB18."
          },
          "after": {
            "label": "DIO2",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO2 function. No radio is included. Physical source terminal XBEE.18. CAD net: XB18."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB18",
            "label": "XB18",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB18",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD2/DIO2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.19",
          "before": {
            "label": "XB19",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB19."
          },
          "after": {
            "label": "DIO1",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO1 function. No radio is included. Physical source terminal XBEE.19. CAD net: XB19."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB19",
            "label": "XB19",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB19",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD1/DIO1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "XBEE.20",
          "before": {
            "label": "XB20",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: XB20."
          },
          "after": {
            "label": "DIO0",
            "type": "passive",
            "description": "Passive carrier connection for the separately fitted XBee DIO0 function. No radio is included. Physical source terminal XBEE.20. CAD net: XB20."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Bee_Socket/",
          "sourceNetEvidence": {
            "net": "XB20",
            "label": "XB20",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "XB20",
                "hops": [],
                "endpoints": [
                  {
                    "part": "XBEE",
                    "pin": "AD0/DIO0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J2.4: unresolved electrical role on XB4.",
        "J2.7: unresolved electrical role on N$9.",
        "J2.7: autogenerated net N$9 requires printed/function label review.",
        "J2.8: unresolved electrical role on N$10.",
        "J2.8: autogenerated net N$10 requires printed/function label review.",
        "J2.9: unresolved electrical role on XBEE_DTR.",
        "J3.1: unresolved electrical role on XB11.",
        "J3.2: unresolved electrical role on X_CTS.",
        "J3.4: unresolved electrical role on XB14.",
        "J3.6: unresolved electrical role on X_RTS.",
        "J3.7: unresolved electrical role on XB17.",
        "J3.8: unresolved electrical role on XB18.",
        "J3.9: unresolved electrical role on XB19.",
        "J3.10: unresolved electrical role on XB20.",
        "XBEE.4: unresolved electrical role on XB4.",
        "XBEE.9: unresolved electrical role on XBEE_DTR.",
        "XBEE.11: unresolved electrical role on XB11.",
        "XBEE.12: unresolved electrical role on X_CTS.",
        "XBEE.14: unresolved electrical role on XB14.",
        "XBEE.16: unresolved electrical role on X_RTS.",
        "XBEE.17: unresolved electrical role on XB17.",
        "XBEE.18: unresolved electrical role on XB18.",
        "XBEE.19: unresolved electrical role on XB19.",
        "XBEE.20: unresolved electrical role on XB20."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "TX",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "RX",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "5V",
          "connectedPins": [
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "IN",
              "direction": "io"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S2",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S1",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "ON/SLEEP",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "ASSOC",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "RSSI",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "PWR",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.1",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT",
              "direction": "io"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.2",
          "net": "X_TX",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "A",
              "direction": "io"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.3",
          "net": "X_RX",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "Y",
              "direction": "io"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.4",
          "net": "XB4",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.5",
          "net": "RST",
          "connectedPins": [
            {
              "part": "RESET",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.6",
          "net": "RSSI",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.7",
          "net": "N$9",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.8",
          "net": "N$10",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.9",
          "net": "XBEE_DTR",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.10",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S2",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S1",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "ON/SLEEP",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "ASSOC",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "RSSI",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "PWR",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.1",
          "net": "XB11",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.2",
          "net": "X_CTS",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.3",
          "net": "ON/SLEEP",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.4",
          "net": "XB14",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.5",
          "net": "ASSOC",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.6",
          "net": "X_RTS",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.7",
          "net": "XB17",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.8",
          "net": "XB18",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.9",
          "net": "XB19",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.10",
          "net": "XB20",
          "connectedPins": [],
          "package": "CK1X10",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.1",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT",
              "direction": "io"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.2",
          "net": "X_TX",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "A",
              "direction": "io"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.3",
          "net": "X_RX",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "Y",
              "direction": "io"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.4",
          "net": "XB4",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.5",
          "net": "RST",
          "connectedPins": [
            {
              "part": "RESET",
              "pin": "1",
              "direction": "io"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.6",
          "net": "RSSI",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.7",
          "net": null,
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.8",
          "net": null,
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.9",
          "net": "XBEE_DTR",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.10",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S2",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "S1",
              "direction": "io"
            },
            {
              "part": "RESET",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "ON/SLEEP",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "ASSOC",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "RSSI",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "PWR",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "!OE!",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.11",
          "net": "XB11",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.12",
          "net": "X_CTS",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.13",
          "net": "ON/SLEEP",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.14",
          "net": "XB14",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.15",
          "net": "ASSOC",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.16",
          "net": "X_RTS",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.17",
          "net": "XB17",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.18",
          "net": "XB18",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.19",
          "net": "XB19",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        },
        {
          "number": "XBEE.20",
          "net": "XB20",
          "connectedPins": [],
          "package": "XBEE_PLUG",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "fd30442fc9d0b4c7de5bc59c73adf336872c08dc392a87328e1175a39961d515",
      "completePortInventory": [
        "J1",
        "J2",
        "J3",
        "XBEE"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -22.1,
        -22.1,
        22.1,
        22.1
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "9896c5dc451ffa522061004bbc07a70d8420cfc99b635c3947b1d1c459c2d8d8",
      "sourceWikiSha256": "e833fdb30cd70e7e85ccae369958fc21b5ed104c18d426bfc04fe07825ddd7ba",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "XBEE is an actual external removable socket; include its 20 pads plus auxiliary J2/J3 contacts and Grove J1. J2.7/.8 are unconnected source nets.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg",
        "sha256": "df46baeb65d3114bf7ab86299bcb11f10344b3cfd862a0987788d7ea31f837d2"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v0.9a"
      ]
    }
  }
};
