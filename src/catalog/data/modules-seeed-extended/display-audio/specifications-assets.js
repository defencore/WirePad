// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-module-104020130": {
    "contacts": [
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "RX",
        "type": "output",
        "description": "Printed RX is the host receive contact: source Q2 connects it to STM32 PA2/USART_TX. Physical source terminal J4.1. CAD net: RX.",
        "x": -3.000312,
        "y": -25.504336,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "TX",
        "type": "input",
        "description": "Printed TX is the host transmit contact: source Q1 connects it to STM32 PA3/USART_RX. Physical source terminal J4.2. CAD net: TX.",
        "x": -1.000312,
        "y": -25.504336,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 0.999688,
        "y": -25.504336,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-4",
        "number": "J4.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J4.4. CAD net: GND.",
        "x": 2.999688,
        "y": -25.504336,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-ss1",
        "number": "J4.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J4.SS1. CAD net: GND.",
        "x": -5.400312,
        "y": -33.004336,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "j4-ss2",
        "number": "J4.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J4.SS2. CAD net: GND.",
        "x": 5.399688,
        "y": -33.004336,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "BS",
        "type": "input",
        "description": "Board mode-selection input. Physical source terminal JP1.MM. CAD net: BS.",
        "x": 10.018629,
        "y": 8.334502,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "BS HIGH",
        "type": "passive",
        "description": "BS strap high option through R9=10 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$28.",
        "x": 10.018629,
        "y": 7.064502,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP1.11. CAD net: GND.",
        "x": 10.018629,
        "y": 9.604502,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "RX",
        "type": "output",
        "description": "Printed RX is the host receive contact: source Q2 connects it to STM32 PA2/USART_TX. Physical source terminal TP1.T. CAD net: RX.",
        "x": -5.475371,
        "y": -33.575498,
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
        "description": "Printed TX is the host transmit contact: source Q1 connects it to STM32 PA3/USART_RX. Physical source terminal TP2.T. CAD net: TX.",
        "x": -2.935371,
        "y": -33.575498,
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
        "x": 2.779629,
        "y": -33.575498,
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
        "x": 5.319629,
        "y": -33.575498,
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
        "label": "BOOT0",
        "type": "input",
        "description": "STM32 BOOT0 through R14=1 kOhm. Physical source terminal J2.1. CAD net: BOOT.",
        "x": 12.939629,
        "y": -9.445498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard XC6227 3.3 V regulator output downstream of L2. Physical source terminal J2.2. CAD net: 3V3.",
        "x": 12.939629,
        "y": -6.905498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "SWCLK",
        "type": "input",
        "description": "STM32 PA14/SWCLK through fitted R17=0 ohm. Physical source terminal J2.3. CAD net: N$4.",
        "x": 12.939629,
        "y": -4.365498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "STM32 PA13/SWIO through fitted R18=0 ohm. Physical source terminal J2.4. CAD net: N$10.",
        "x": 12.939629,
        "y": -1.825498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.5. CAD net: GND.",
        "x": 12.939629,
        "y": 0.714502,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "BOOT0",
        "type": "input",
        "description": "STM32 BOOT0 through R14=1 kOhm. Physical source terminal J3.1. CAD net: BOOT.",
        "x": 12.939629,
        "y": -9.445498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard XC6227 3.3 V regulator output downstream of L2. Physical source terminal J3.2. CAD net: 3V3.",
        "x": 12.939629,
        "y": -6.905498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "SWCLK",
        "type": "input",
        "description": "STM32 PA14/SWCLK through fitted R17=0 ohm. Physical source terminal J3.3. CAD net: N$4.",
        "x": 12.939629,
        "y": -4.365498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "STM32 PA13/SWIO through fitted R18=0 ohm. Physical source terminal J3.4. CAD net: N$10.",
        "x": 12.939629,
        "y": -1.825498,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      },
      {
        "id": "j3-5",
        "number": "J3.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.5. CAD net: GND.",
        "x": 12.939629,
        "y": 0.714502,
        "size": [
          1.524,
          1.524
        ],
        "shape": "rect",
        "connector": "J3",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.100312\" y=\"-34.804336\" width=\"12.2\" height=\"9.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.800371\" y=\"28.208502\" width=\"17.6\" height=\"4.527\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.865371\" y=\"-1.900498\" width=\"4.4\" height=\"6.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.375629\" y=\"11.549502\" width=\"2.968\" height=\"5.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.586371\" y=\"-18.652998\" width=\"2.794\" height=\"4.953\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.522371\" y=\"11.319002\" width=\"2.794\" height=\"4.953\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.605129\" y=\"-21.002498\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.256629\" y=\"6.302502\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.650371\" y=\"-14.525498\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.031371\" y=\"-12.366498\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.999371\" y=\"-18.208498\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.761371\" y=\"10.620502\" width=\"3.302\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.031371\" y=\"12.906502\" width=\"1.27\" height=\"3.937\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.507371\" y=\"12.906502\" width=\"1.27\" height=\"3.937\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.983371\" y=\"12.906502\" width=\"1.27\" height=\"3.937\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.445229\" y=\"-17.880498\" width=\"1.6208\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"5.794502\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"4.270502\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"2.746502\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.208629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.684629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.160629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.018629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.636629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"6.429502\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"3.445002\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.779629\" y=\"12.652502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.031371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.112629\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.507371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.983371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.459371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.935371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.555371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.411371\" y=\"17.732502\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"1.921002\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.904371\" y=\"-17.827498\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.745371\" y=\"-12.112498\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.332371\" y=\"-6.270498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.332371\" y=\"-11.350498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"1.222502\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"-4.873498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"-3.349498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"-1.825498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.047371\" y=\"-0.301498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.649371\" y=\"-19.986498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.522371\" y=\"-6.270498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.522371\" y=\"-11.350498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.303629\" y=\"-17.700498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.303629\" y=\"-16.176498\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"0.397002\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"-4.174998\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"-2.650998\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.922629\" y=\"-1.126998\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.732629\" y=\"18.494502\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.141371\" y=\"-8.810498\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.951371\" y=\"-8.810498\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-13.500000\" y=\"-28.000000\" width=\"27.000000\" height=\"54.000000\" rx=\"0.4\" fill=\"#ede9d9\" stroke=\"#5c6870\" stroke-width=\".1\"/><rect x=\"-11.500000\" y=\"-25.000000\" width=\"23.000000\" height=\"48.000000\" rx=\"0.1\" fill=\"#ece8df\" stroke=\"#a7a49b\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - Triple Color E-Ink Display 2.13''.brd",
      "boardSha256": "75a28954635ae7eb8597386a7146a13d75debe4773519755be3709c8913ad210",
      "sourceBounds": [
        0.00037,
        0.0045,
        30.000371875,
        70.004503125
      ],
      "selectedConnectors": [
        "J4",
        "JP1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/104020130/extracted/Triple_Color_E-Ink_Display_2_13/Grove - Triple Color E-Ink Display 2.13''.sch",
      "pinOverrides": [
        {
          "number": "J4.1",
          "before": {
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX",
            "type": "output",
            "description": "Printed RX is the host receive contact: source Q2 connects it to STM32 PA2/USART_TX. Physical source terminal J4.1. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "10K",
                [
                  "RX",
                  "VCC"
                ]
              ],
              [
                "Q2",
                "BSS138LT3G",
                [
                  "3V3",
                  "RX",
                  "SDA_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "10K",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "CE",
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
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX",
            "type": "input",
            "description": "Printed TX is the host transmit contact: source Q1 connects it to STM32 PA3/USART_RX. Physical source terminal J4.2. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "10K",
                [
                  "TX",
                  "VCC"
                ]
              ],
              [
                "Q1",
                "BSS138LT3G",
                [
                  "3V3",
                  "SCL_3V3",
                  "TX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "10K",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "CE",
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
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J4.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J4.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J4.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.MM",
          "before": {
            "label": "BS",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BS."
          },
          "after": {
            "label": "BS",
            "type": "input",
            "description": "Board mode-selection input. Physical source terminal JP1.MM. CAD net: BS."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "BS",
            "label": "BS",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "J1",
                "pin": "8",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": []
          }
        },
        {
          "number": "JP1.00",
          "before": {
            "label": "N$28",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$28."
          },
          "after": {
            "label": "BS HIGH",
            "type": "passive",
            "description": "BS strap high option through R9=10 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$28."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "N$28",
            "label": "N$28",
            "type": "passive",
            "endpoints": [
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R9",
                "10K",
                [
                  "3V3",
                  "N$28"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R9",
                    "value": "10K",
                    "from": "N$28",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R9",
                    "value": "10K",
                    "from": "N$28",
                    "to": "3V3"
                  },
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "3V3",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "NRST",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_3V3",
                "hops": [
                  {
                    "part": "R9",
                    "value": "10K",
                    "from": "N$28",
                    "to": "3V3"
                  },
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SDA_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA2/USART_TX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_3V3",
                "hops": [
                  {
                    "part": "R9",
                    "value": "10K",
                    "from": "N$28",
                    "to": "3V3"
                  },
                  {
                    "part": "R3",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SCL_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA3/USART_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R9",
                    "value": "10K",
                    "from": "N$28",
                    "to": "3V3"
                  },
                  {
                    "part": "L2",
                    "value": "0R",
                    "from": "3V3",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.11",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP1.11. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
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
            "description": "Printed RX is the host receive contact: source Q2 connects it to STM32 PA2/USART_TX. Physical source terminal TP1.T. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "RX",
            "label": "RX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R2",
                "10K",
                [
                  "RX",
                  "VCC"
                ]
              ],
              [
                "Q2",
                "BSS138LT3G",
                [
                  "3V3",
                  "RX",
                  "SDA_3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R2",
                    "value": "10K",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "CE",
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
            "description": "Printed TX is the host transmit contact: source Q1 connects it to STM32 PA3/USART_RX. Physical source terminal TP2.T. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "TX",
            "label": "TX",
            "type": "passive",
            "endpoints": [
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "10K",
                [
                  "TX",
                  "VCC"
                ]
              ],
              [
                "Q1",
                "BSS138LT3G",
                [
                  "3V3",
                  "SCL_3V3",
                  "TX"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R1",
                    "value": "10K",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "CE",
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
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
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
            "label": "BOOT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BOOT."
          },
          "after": {
            "label": "BOOT0",
            "type": "input",
            "description": "STM32 BOOT0 through R14=1 kOhm. Physical source terminal J2.1. CAD net: BOOT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "BOOT",
            "label": "BOOT",
            "type": "passive",
            "endpoints": [
              {
                "part": "R14",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R14",
                "1K",
                [
                  "BOOT",
                  "N$5"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R14",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R14",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$5"
                  },
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "N$5",
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
                    "part": "U1",
                    "pin": "VSS",
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
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard XC6227 3.3 V regulator output downstream of L2. Physical source terminal J2.2. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C21",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "15",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "16",
                "direction": "io"
              },
              {
                "part": "C16",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "L1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDDA",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "G",
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
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "L2",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "L1",
                "10uH",
                [
                  "3V3",
                  "N$11"
                ]
              ],
              [
                "R9",
                "10K",
                [
                  "3V3",
                  "N$28"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "3V3",
                  "N$8"
                ]
              ],
              [
                "C5",
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
                "C8",
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
                "Q2",
                "BSS138LT3G",
                [
                  "3V3",
                  "RX",
                  "SDA_3V3"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "3V3",
                  "SDA_3V3"
                ]
              ],
              [
                "Q1",
                "BSS138LT3G",
                [
                  "3V3",
                  "SCL_3V3",
                  "TX"
                ]
              ],
              [
                "R3",
                "10K",
                [
                  "3V3",
                  "SCL_3V3"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "L2",
                "0R",
                [
                  "3V3",
                  "VOUT"
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
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "3V3",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "NRST",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_3V3",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SDA_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA2/USART_TX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_3V3",
                "hops": [
                  {
                    "part": "R3",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SCL_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA3/USART_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "L2",
                    "value": "0R",
                    "from": "3V3",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.3",
          "before": {
            "label": "N$4",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$4."
          },
          "after": {
            "label": "SWCLK",
            "type": "input",
            "description": "STM32 PA14/SWCLK through fitted R17=0 ohm. Physical source terminal J2.3. CAD net: N$4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "N$4",
            "label": "N$4",
            "type": "passive",
            "endpoints": [
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R17",
                "0R",
                [
                  "N$13",
                  "N$4"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R17",
                    "value": "0R",
                    "from": "N$4",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA14/SWCLK",
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
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "SWDIO",
            "type": "bidirectional",
            "description": "STM32 PA13/SWIO through fitted R18=0 ohm. Physical source terminal J2.4. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R18",
                "0R",
                [
                  "N$10",
                  "N$14"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$14",
                "hops": [
                  {
                    "part": "R18",
                    "value": "0R",
                    "from": "N$10",
                    "to": "N$14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA13/SWIO",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.5",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.5. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
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
            "label": "BOOT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BOOT."
          },
          "after": {
            "label": "BOOT0",
            "type": "input",
            "description": "STM32 BOOT0 through R14=1 kOhm. Physical source terminal J3.1. CAD net: BOOT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "BOOT",
            "label": "BOOT",
            "type": "passive",
            "endpoints": [
              {
                "part": "R14",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R14",
                "1K",
                [
                  "BOOT",
                  "N$5"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R14",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R14",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$5"
                  },
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "N$5",
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
                    "part": "U1",
                    "pin": "VSS",
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
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard XC6227 3.3 V regulator output downstream of L2. Physical source terminal J3.2. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C21",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "15",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "16",
                "direction": "io"
              },
              {
                "part": "C16",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "L1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDDA",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "G",
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
                "part": "R3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "L2",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "L1",
                "10uH",
                [
                  "3V3",
                  "N$11"
                ]
              ],
              [
                "R9",
                "10K",
                [
                  "3V3",
                  "N$28"
                ]
              ],
              [
                "R6",
                "10K",
                [
                  "3V3",
                  "N$8"
                ]
              ],
              [
                "C5",
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
                "C8",
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
                "Q2",
                "BSS138LT3G",
                [
                  "3V3",
                  "RX",
                  "SDA_3V3"
                ]
              ],
              [
                "R4",
                "10K",
                [
                  "3V3",
                  "SDA_3V3"
                ]
              ],
              [
                "Q1",
                "BSS138LT3G",
                [
                  "3V3",
                  "SCL_3V3",
                  "TX"
                ]
              ],
              [
                "R3",
                "10K",
                [
                  "3V3",
                  "SCL_3V3"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "L2",
                "0R",
                [
                  "3V3",
                  "VOUT"
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
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R6",
                    "value": "10K",
                    "from": "3V3",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "NRST",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_3V3",
                "hops": [
                  {
                    "part": "R4",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SDA_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA2/USART_TX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL_3V3",
                "hops": [
                  {
                    "part": "R3",
                    "value": "10K",
                    "from": "3V3",
                    "to": "SCL_3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA3/USART_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "L2",
                    "value": "0R",
                    "from": "3V3",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
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
            "label": "N$4",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$4."
          },
          "after": {
            "label": "SWCLK",
            "type": "input",
            "description": "STM32 PA14/SWCLK through fitted R17=0 ohm. Physical source terminal J3.3. CAD net: N$4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "N$4",
            "label": "N$4",
            "type": "passive",
            "endpoints": [
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R17",
                "0R",
                [
                  "N$13",
                  "N$4"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R17",
                    "value": "0R",
                    "from": "N$4",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA14/SWCLK",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J3.4",
          "before": {
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "SWDIO",
            "type": "bidirectional",
            "description": "STM32 PA13/SWIO through fitted R18=0 ohm. Physical source terminal J3.4. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R18",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R18",
                "0R",
                [
                  "N$10",
                  "N$14"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$14",
                "hops": [
                  {
                    "part": "R18",
                    "value": "0R",
                    "from": "N$10",
                    "to": "N$14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA13/SWIO",
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
          "source": "https://wiki.seeedstudio.com/Grove-Triple_Color_E-Ink_Display_2_13/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "J1",
                "pin": "P1",
                "direction": "io"
              },
              {
                "part": "J1",
                "pin": "P2",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "D3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "J1",
                "pin": "17",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "R19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C23",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C22",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C24",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "1uF",
                [
                  "GND",
                  "VCOM"
                ]
              ],
              [
                "C10",
                "1uF",
                [
                  "GND",
                  "N$27"
                ]
              ],
              [
                "C11",
                "1uF",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C12",
                "1uF",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "C13",
                "1uF",
                [
                  "GND",
                  "N$24"
                ]
              ],
              [
                "C14",
                "1uF",
                [
                  "GND",
                  "N$23"
                ]
              ],
              [
                "C15",
                "1uF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "D3",
                "B0540W",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "220uF/6.3V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C17",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R7",
                "0.47R/1%",
                [
                  "GND",
                  "RESE"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "GDR",
                  "GND"
                ]
              ],
              [
                "C20",
                "1uF",
                [
                  "GND",
                  "VGH"
                ]
              ],
              [
                "C19",
                "1uF",
                [
                  "GND",
                  "N$12"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "R19",
                "10K",
                [
                  "GND",
                  "N$6"
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
                "C7",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$8"
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
                "C5",
                "1uF",
                [
                  "3V3",
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
                "C1",
                "1uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C23",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C22",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C24",
                "220uF/6.3v",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C25",
                "1uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C26",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C3",
                "220uF/6.3V",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C27",
                "DNP",
                [
                  "GND",
                  "N$7"
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$6",
                "hops": [
                  {
                    "part": "R19",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PB1/TIM3_CH4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "JP1.00: autogenerated net N$28 requires printed/function label review.",
        "J2.3: autogenerated net N$4 requires printed/function label review.",
        "J2.4: autogenerated net N$10 requires printed/function label review.",
        "J3.3: autogenerated net N$4 requires printed/function label review.",
        "J3.4: autogenerated net N$10 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J4.1",
          "net": "RX",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J4.2",
          "net": "TX",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J4.3",
          "net": "VCC",
          "connectedPins": [
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
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "CE",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J4.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J4.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J4.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.MM",
          "net": "BS",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "8",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.00",
          "net": "N$28",
          "connectedPins": [
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.11",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "RX",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "D",
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
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "D",
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
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "CE",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "+",
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
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": "BOOT",
          "connectedPins": [
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "C21",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "15",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "16",
              "direction": "io"
            },
            {
              "part": "C16",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDDA",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
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
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "L2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J2.3",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J2.4",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J2.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.1",
          "net": "BOOT",
          "connectedPins": [
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.2",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "C21",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "15",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "16",
              "direction": "io"
            },
            {
              "part": "C16",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDDA",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
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
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "L2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.3",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.4",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J3.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "J1",
              "pin": "P1",
              "direction": "io"
            },
            {
              "part": "J1",
              "pin": "P2",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "J1",
              "pin": "17",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "R19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C23",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C22",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C24",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H5-SMD-2.54",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "4e9646d5e01c07c41118d460371c895d91353cf681f2e8f3d80dd9c943f5f665",
      "completePortInventory": [
        "J4",
        "JP1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J2",
        "J3"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [
        "J1 supplied e-paper assembly FPC"
      ],
      "closedOutlineBounds": [
        -15.000001,
        -35.00000200000025,
        15.000001000001,
        35.000002
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "20e687be1fa35e79b949034bddca805ad685ed059ce102468f88490cff061a4c",
      "sourceWikiSha256": "cf72d5568d943c73209ad5fccfb46c032c6ef79d2abdfe6482ca908dda76a818",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg",
        "sha256": "71c94d2a1309a4dceb9a8f848ffe7be847f8d73099572aa7d5702b27d093fd70"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "Triple Color E-Ink Display 2.13''\n                       v1.0"
      ]
    }
  },
  "seeed-module-104020132": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A2 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R6=47 kOhm to common scan/address strobe. Physical source terminal JP1.1. CAD net: N$1.",
        "x": 1.905,
        "y": 17.526,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "E/A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: E/A2.",
        "x": 1.905,
        "y": 16.764,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "A1 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R7=47 kOhm to common scan/address strobe. Physical source terminal JP3.1. CAD net: N$7.",
        "x": 0,
        "y": 17.526,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "N/A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N/A1.",
        "x": 0,
        "y": 16.764,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "A0 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R8=47 kOhm to common scan/address strobe. Physical source terminal JP4.1. CAD net: N$9.",
        "x": -1.905,
        "y": 17.526,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "M/A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: M/A0.",
        "x": -1.905,
        "y": 16.764,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL_VCC",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_VCC.",
        "x": -3,
        "y": -14.0208,
        "size": [
          1,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_VCC.",
        "x": -1,
        "y": -14.0208,
        "size": [
          1,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 1,
        "y": -14.0208,
        "size": [
          1,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": 3,
        "y": -14.0208,
        "size": [
          1,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND.",
        "x": -5.8,
        "y": -17.1438,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND.",
        "x": 5.8,
        "y": -17.1438,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-9.1186\" y=\"-3.7465\" width=\"18.2372\" height=\"7.493\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1\" y=\"-19.2938\" width=\"12.2\" height=\"5.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.5095\" y=\"3.683\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.3355\" y=\"11.811\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.3355\" y=\"-14.605\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.01\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.311\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.197\" y=\"6.958\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"9.752\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"7.847\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"5.942\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"4.037\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"-9.425\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"-7.52\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"-5.615\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"-11.33\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.224\" y=\"-0.635\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.684\" y=\"-0.635\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"16.256\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.27\" y=\"16.256\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.54\" y=\"16.256\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.39\" y=\"10.805\" width=\"1.7\" height=\"1.25\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.344\" y=\"-12.473\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.9\" y=\"1.751\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.9\" y=\"-2.821\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.961\" y=\"4.037\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.961\" y=\"2.64\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.961\" y=\"-5.107\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.961\" y=\"-3.71\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.8495\" y=\"2.64\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.8495\" y=\"-3.71\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.071\" y=\"-12.473\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.058\" y=\"-12.473\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"8.99\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"15.34\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"13.943\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"12.546\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"1.751\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"-2.821\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.785\" y=\"-12.473\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.331\" y=\"5.55\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.061\" y=\"5.55\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-12.6\" y=\"-10.55\" width=\"25.2\" height=\"21.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.600000\" y=\"-10.550000\" width=\"25.200000\" height=\"21.100000\" rx=\"0.35\" fill=\"#101824\" stroke=\"#728388\" stroke-width=\".1\"/><path d=\"M-10.458 -7.596L-2.1419999999999995 -7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-10.458 7.596L-2.1419999999999995 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-10.458 -7.596L-10.458 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-10.458 0.0L-10.458 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.1419999999999995 -7.596L-2.1419999999999995 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.1419999999999995 0.0L-2.1419999999999995 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-10.458 0.0L-6.3 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.3 0.0L-2.1419999999999995 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-10.458 -7.596L-6.3 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.3 0.0L-2.1419999999999995 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.1419999999999995 -7.596L-6.3 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.3 0.0L-10.458 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.3 -7.596L-6.3 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.3 0.0L-6.3 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 -7.596L10.457999999999998 -7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 7.596L10.457999999999998 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 -7.596L2.1419999999999986 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 0.0L2.1419999999999986 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M10.457999999999998 -7.596L10.457999999999998 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M10.457999999999998 0.0L10.457999999999998 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 0.0L6.299999999999999 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.299999999999999 0.0L10.457999999999998 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.1419999999999986 -7.596L6.299999999999999 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.299999999999999 0.0L10.457999999999998 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M10.457999999999998 -7.596L6.299999999999999 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.299999999999999 0.0L2.1419999999999986 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.299999999999999 -7.596L6.299999999999999 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.299999999999999 0.0L6.299999999999999 7.596\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - 0.54 Red Dual Alphanumeric Display.brd",
      "boardSha256": "35e59645370976b5dd0ce689553ff52130a3800d725803a4d475ac462fea71fc",
      "sourceBounds": [
        -22.1,
        -22.1,
        22.1,
        22.1
      ],
      "selectedConnectors": [
        "JP1",
        "JP3",
        "JP4",
        "J1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/104020132/extracted/202002301_PCBA; Grove - 0.54 Red Dual Alphanumeric Display_原理图/Grove - 0.54 Red Dual Alphanumeric Display.sch",
      "pinOverrides": [
        {
          "number": "JP1.1",
          "before": {
            "label": "N$1",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1."
          },
          "after": {
            "label": "A2 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R6=47 kOhm to common scan/address strobe. Physical source terminal JP1.1. CAD net: N$1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$1",
            "label": "N$1",
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
                "47k",
                [
                  "N$1",
                  "N$6"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "JP3.1",
          "before": {
            "label": "N$7",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$7."
          },
          "after": {
            "label": "A1 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R7=47 kOhm to common scan/address strobe. Physical source terminal JP3.1. CAD net: N$7."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$7",
            "label": "N$7",
            "type": "passive",
            "endpoints": [
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R7",
                "47k",
                [
                  "N$6",
                  "N$7"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "JP4.1",
          "before": {
            "label": "N$9",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$9."
          },
          "after": {
            "label": "A0 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R8=47 kOhm to common scan/address strobe. Physical source terminal JP4.1. CAD net: N$9."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$9",
            "label": "N$9",
            "type": "passive",
            "endpoints": [
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R8",
                "47k",
                [
                  "N$6",
                  "N$9"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "SCL_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_VCC."
          },
          "after": {
            "label": "SCL_VCC",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "SCL_VCC",
            "label": "SCL_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "S",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R17",
                "4.7k",
                [
                  "SCL_VCC",
                  "VCC"
                ]
              ],
              [
                "Q2",
                "CJ2102",
                [
                  "SCL",
                  "SCL_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$18",
                "hops": [
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "L3",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$18"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VIN",
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
            "label": "SDA_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_VCC."
          },
          "after": {
            "label": "SDA_VCC",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "SDA_VCC",
            "label": "SDA_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R16",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "CJ2102",
                [
                  "SDA",
                  "SDA_VCC",
                  "VCC"
                ]
              ],
              [
                "R16",
                "4.7k",
                [
                  "SDA_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$18",
                "hops": [
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "L3",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$18"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VIN",
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
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C14",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C14",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Dual_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C14",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "JP1.1: autogenerated net N$1 requires printed/function label review.",
        "JP3.1: autogenerated net N$7 requires printed/function label review.",
        "JP4.1: autogenerated net N$9 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "JP1.1",
          "net": "N$1",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.2",
          "net": "E/A2",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "E",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "ROW0/A2",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.1",
          "net": "N$7",
          "connectedPins": [
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.2",
          "net": "N/A1",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "N",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "ROW1/A1",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.1",
          "net": "N$9",
          "connectedPins": [
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.2",
          "net": "M/A0",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "M",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "ROW2/A0",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "J1.1",
          "net": "SCL_VCC",
          "connectedPins": [
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "S",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "SDA_VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
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
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "3045f9afaf216fec62418d02f5dcdcb8b1cfdea348b75cd1507770207766aea7",
      "completePortInventory": [
        "JP1",
        "JP3",
        "JP4",
        "J1"
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
      "sourceArchiveSha256": "81b0f27ef337e430b121db4d9f8651729bf76fad651734335918a7c3d53a7b5e",
      "sourceWikiSha256": "0ccfed0bd07258bb128223b190fa1be857b42d2df2fec5b08c09d03b168cac27",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png",
        "sha256": "82df08e2d867850a81f64138c3fc3e7840f87265e7856027dcdc9de4492fbba9"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.0"
      ]
    }
  },
  "seeed-module-107020129": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "TX",
        "type": "output",
        "description": "WT2605C UART_TX through Q1 level shifter. Physical source terminal J1.1. CAD net: TX.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "RX",
        "type": "input",
        "description": "WT2605C UART_RX through Q2 level shifter. Physical source terminal J1.2. CAD net: RX.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
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
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND.",
        "x": -16.558,
        "y": 5.85,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND.",
        "x": -16.558,
        "y": -5.75,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.1. CAD net: unconnected.",
        "x": 12.31,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SD DAT3/CS",
        "type": "passive",
        "description": "microSD DAT3/CS pulled up through R1=1 kOhm; not used by the module SD data interface. Physical source terminal J2.2. CAD net: N$2.",
        "x": 11.21,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "SD CMD",
        "type": "output",
        "description": "Command output from WT2605C to removable microSD card. Physical source terminal J2.3. CAD net: SD_CMD.",
        "x": 10.11,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard XC6206 3.3 V rail supplies the microSD socket. Physical source terminal J2.4. CAD net: 3V3.",
        "x": 9.01,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "SD CLK",
        "type": "output",
        "description": "Clock output from WT2605C to removable microSD card. Physical source terminal J2.5. CAD net: SD_CLK.",
        "x": 7.91,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.6. CAD net: GND.",
        "x": 6.81,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-7",
        "number": "J2.7",
        "label": "SD DATA0",
        "type": "input",
        "description": "Data from removable microSD card to WT2605C. Physical source terminal J2.7. CAD net: SD_DATA.",
        "x": 5.71,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-8",
        "number": "J2.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.8. CAD net: unconnected.",
        "x": 4.61,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-9",
        "number": "J2.9",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.9. CAD net: unconnected.",
        "x": 3.51,
        "y": -5.03,
        "size": [
          0.7,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-g1",
        "number": "J2.G1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.G1. CAD net: GND.",
        "x": 2.21,
        "y": -4.43,
        "size": [
          1.4,
          1.6
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-g2",
        "number": "J2.G2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.G2. CAD net: GND.",
        "x": 2.21,
        "y": 5.07,
        "size": [
          1.4,
          2.2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-g4",
        "number": "J2.G4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.G4. CAD net: GND.",
        "x": 17.01,
        "y": -4.53,
        "size": [
          1.8,
          1.4
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-g3",
        "number": "J2.G3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.G3. CAD net: GND.",
        "x": 17.91,
        "y": 5.07,
        "size": [
          1.4,
          2.2
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-5",
        "number": "J3.5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.5. CAD net: unconnected.",
        "x": -7.285,
        "y": 8.48,
        "size": [
          2.25,
          1.5
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.1. CAD net: unconnected.",
        "x": -0.535,
        "y": 7.58,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "AGND",
        "type": "power_in",
        "description": "Audio signal ground. Physical source terminal J3.2. CAD net: AGND.",
        "x": -0.535,
        "y": 4.68,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "AUDIO L",
        "type": "output",
        "description": "AC-coupled left audio output through C5. Physical source terminal J3.3. CAD net: N$5.",
        "x": -0.535,
        "y": 1.68,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-8",
        "number": "J3.8",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.8. CAD net: unconnected.",
        "x": -0.535,
        "y": -0.52,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "AUDIO R",
        "type": "output",
        "description": "AC-coupled right audio output through C6. Physical source terminal J3.4. CAD net: N$6.",
        "x": -7.285,
        "y": 1.48,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-7",
        "number": "J3.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.7. CAD net: unconnected.",
        "x": -7.285,
        "y": 3.58,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-6",
        "number": "J3.6",
        "label": "AGND",
        "type": "power_in",
        "description": "Audio signal ground. Physical source terminal J3.6. CAD net: AGND.",
        "x": -7.285,
        "y": 6.48,
        "size": [
          2.25,
          1.6
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP1.T. CAD net: GND.",
        "x": -18.515,
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
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "RX",
        "type": "input",
        "description": "WT2605C UART_RX through Q2 level shifter. Physical source terminal TP3.T. CAD net: RX.",
        "x": -18.515,
        "y": 3.86,
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
        "label": "TX",
        "type": "output",
        "description": "WT2605C UART_TX through Q1 level shifter. Physical source terminal TP4.T. CAD net: TX.",
        "x": -18.515,
        "y": 6.4,
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
        "id": "j4--",
        "number": "J4.-",
        "label": "SPK-",
        "type": "output",
        "description": "HT6881 bridge-tied speaker output VO2; not ground. Physical source terminal J4.-. CAD net: N$17.",
        "x": -2.91,
        "y": -7.685,
        "size": [
          1.3,
          1.3
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j4-plus",
        "number": "J4.+",
        "label": "SPK+",
        "type": "output",
        "description": "HT6881 bridge-tied speaker output VO1. Physical source terminal J4.+. CAD net: N$12.",
        "x": -4.91,
        "y": -7.685,
        "size": [
          1.3,
          1.3
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 0.8
      }
    ],
    "artwork": "<rect x=\"2.503\" y=\"-5.03\" width=\"14.986\" height=\"14.986\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.708\" y=\"-6.05\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.91\" y=\"-9.2972\" width=\"6.0\" height=\"4.7122\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"4.472\" y=\"-1.855\" width=\"4.826\" height=\"3.81\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.927\" y=\"-1.982\" width=\"4.064\" height=\"4.064\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.831\" y=\"-2.236\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.767\" y=\"-2.236\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.832\" y=\"-8.3955\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.345\" y=\"-7.062\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.625\" y=\"3.733\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.149\" y=\"-6.3635\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.356\" y=\"1.955\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.356\" y=\"-3.125\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.7925\" y=\"-5.869\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.4115\" y=\"4.291\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.8085\" y=\"-5.869\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.702\" y=\"-5.234\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7495\" y=\"-5.234\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.6865\" y=\"3.656\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.6705\" y=\"3.656\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.6545\" y=\"3.656\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.3955\" y=\"4.291\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.0045\" y=\"-7.774\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.1785\" y=\"-7.774\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.1145\" y=\"3.656\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.2725\" y=\"-4.218\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.1405\" y=\"-0.789\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.1255\" y=\"4.291\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.8555\" y=\"-5.869\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4105\" y=\"-0.789\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4105\" y=\"-2.694\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.1405\" y=\"-2.694\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3365\" y=\"-4.218\" width=\"0.789\" height=\"1.678\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.179\" y=\"0.1635\" width=\"1.678\" height=\"0.789\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.179\" y=\"-0.8525\" width=\"1.678\" height=\"0.789\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.179\" y=\"4.2275\" width=\"1.678\" height=\"0.789\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.179\" y=\"-4.9165\" width=\"1.678\" height=\"0.789\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove-MP3-V4.brd",
      "boardSha256": "8ce2f14e163345ac6121fb5c4b4091742ca37eef1680c2ec53c0dddecc67f573",
      "sourceBounds": [
        -20.635,
        -10.199999999999998,
        19.565,
        10.300000000000002
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J4"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/107020129/extracted/Grove-MP3-V4.sch",
      "pinOverrides": [
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
            "description": "WT2605C UART_TX through Q1 level shifter. Physical source terminal J1.1. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002",
                [
                  "3V3",
                  "TX",
                  "TX_1"
                ]
              ],
              [
                "R10",
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
                    "part": "R10",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
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
            "description": "WT2605C UART_RX through Q2 level shifter. Physical source terminal J1.2. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
                "part": "R11",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002",
                [
                  "3V3",
                  "RX",
                  "RX_1"
                ]
              ],
              [
                "R11",
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
                    "part": "R11",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
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
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
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
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.1. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J2.2",
          "before": {
            "label": "N$2",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2."
          },
          "after": {
            "label": "SD DAT3/CS",
            "type": "passive",
            "description": "microSD DAT3/CS pulled up through R1=1 kOhm; not used by the module SD data interface. Physical source terminal J2.2. CAD net: N$2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "N$2",
            "label": "N$2",
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
                "1K",
                [
                  "3V3",
                  "N$2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1K",
                    "from": "N$2",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "TX_1",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1K",
                    "from": "N$2",
                    "to": "3V3"
                  },
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "TX_1"
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
                "net": "RX_1",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1K",
                    "from": "N$2",
                    "to": "3V3"
                  },
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "RX_1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "UART_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1K",
                    "from": "N$2",
                    "to": "3V3"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "3V3",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.3",
          "before": {
            "label": "SD_CMD",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SD_CMD."
          },
          "after": {
            "label": "SD CMD",
            "type": "output",
            "description": "Command output from WT2605C to removable microSD card. Physical source terminal J2.3. CAD net: SD_CMD."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "SD_CMD",
            "label": "SD_CMD",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "SDCMD",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SD_CMD",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "SDCMD",
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
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard XC6206 3.3 V rail supplies the microSD socket. Physical source terminal J2.4. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q1",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VOUT",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "G",
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
                "R1",
                "1K",
                [
                  "3V3",
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
                "Q1",
                "2N7002",
                [
                  "3V3",
                  "TX",
                  "TX_1"
                ]
              ],
              [
                "R8",
                "4.7k",
                [
                  "3V3",
                  "TX_1"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "Q2",
                "2N7002",
                [
                  "3V3",
                  "RX",
                  "RX_1"
                ]
              ],
              [
                "R9",
                "4.7k",
                [
                  "3V3",
                  "RX_1"
                ]
              ],
              [
                "R7",
                "47k",
                [
                  "3V3",
                  "N$20"
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
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "TX_1",
                "hops": [
                  {
                    "part": "R8",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "TX_1"
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
                "net": "RX_1",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "RX_1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "UART_RX",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "3V3",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "3V3",
                    "to": "N$20"
                  },
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "N$20",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.5",
          "before": {
            "label": "SD_CLK",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SD_CLK."
          },
          "after": {
            "label": "SD CLK",
            "type": "output",
            "description": "Clock output from WT2605C to removable microSD card. Physical source terminal J2.5. CAD net: SD_CLK."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "SD_CLK",
            "label": "SD_CLK",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "SDCLK",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SD_CLK",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "SDCLK",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.6",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.6. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.7",
          "before": {
            "label": "SD_DATA",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SD_DATA."
          },
          "after": {
            "label": "SD DATA0",
            "type": "input",
            "description": "Data from removable microSD card to WT2605C. Physical source terminal J2.7. CAD net: SD_DATA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "SD_DATA",
            "label": "SD_DATA",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "SDDAT",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SD_DATA",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "SDDAT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.8",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.8. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J2.9",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J2.9. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J2.G1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.G1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.G2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.G2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.G4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.G4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.G3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.G3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
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
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.5. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J3.1",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.1. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J3.2",
          "before": {
            "label": "AGND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND."
          },
          "after": {
            "label": "AGND",
            "type": "power_in",
            "description": "Audio signal ground. Physical source terminal J3.2. CAD net: AGND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "AGND",
            "label": "AGND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AGND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "AGND",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "AGND",
                    "to": "GND"
                  },
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
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
            "label": "N$5",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$5."
          },
          "after": {
            "label": "AUDIO L",
            "type": "output",
            "description": "AC-coupled left audio output through C5. Physical source terminal J3.3. CAD net: N$5."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "N$5",
            "label": "N$5",
            "type": "passive",
            "endpoints": [
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C5",
                "47uF",
                [
                  "N$5",
                  "N$7"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J3.8",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.8. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J3.4",
          "before": {
            "label": "N$6",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$6."
          },
          "after": {
            "label": "AUDIO R",
            "type": "output",
            "description": "AC-coupled right audio output through C6. Physical source terminal J3.4. CAD net: N$6."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "N$6",
            "label": "N$6",
            "type": "passive",
            "endpoints": [
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C6",
                "47uF",
                [
                  "N$6",
                  "N$8"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J3.7",
          "before": {
            "label": "NC",
            "type": "no_connect",
            "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected."
          },
          "after": {
            "label": "NC",
            "type": "no_connect",
            "description": "Unconnected physical contact retained from the manufacturer board. Physical source terminal J3.7. CAD net: unconnected."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
          "number": "J3.6",
          "before": {
            "label": "AGND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: AGND."
          },
          "after": {
            "label": "AGND",
            "type": "power_in",
            "description": "Audio signal ground. Physical source terminal J3.6. CAD net: AGND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "AGND",
            "label": "AGND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AGND",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "AGND",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "AGND",
                    "to": "GND"
                  },
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
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
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP1.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U4",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C14",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "EPAD",
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
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
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
                "C7",
                "100nF",
                [
                  "GND",
                  "N$11"
                ]
              ],
              [
                "R17",
                "22K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R6",
                "0R",
                [
                  "AGND",
                  "GND"
                ]
              ],
              [
                "C1",
                "10uF",
                [
                  "GND",
                  "N$1"
                ]
              ],
              [
                "C14",
                "100nF",
                [
                  "GND",
                  "N$22"
                ]
              ],
              [
                "C12",
                "100nF",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "C13",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C11",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C15",
                "100nF",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "C4",
                "100nF",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "C2",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "10uF",
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
                    "part": "U4",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "EPAD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "SHUTDOWN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "AGND",
                "hops": [
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "GND",
                    "to": "AGND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "AGND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R17",
                    "value": "22K",
                    "from": "GND",
                    "to": "N$20"
                  },
                  {
                    "part": "R7",
                    "value": "47k",
                    "from": "N$20",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VOUT",
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
            "label": "RX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RX."
          },
          "after": {
            "label": "RX",
            "type": "input",
            "description": "WT2605C UART_RX through Q2 level shifter. Physical source terminal TP3.T. CAD net: RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
                "part": "R11",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q2",
                "2N7002",
                [
                  "3V3",
                  "RX",
                  "RX_1"
                ]
              ],
              [
                "R11",
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
                    "part": "R11",
                    "value": "4.7k",
                    "from": "RX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
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
            "label": "TX",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: TX."
          },
          "after": {
            "label": "TX",
            "type": "output",
            "description": "WT2605C UART_TX through Q1 level shifter. Physical source terminal TP4.T. CAD net: TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
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
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002",
                [
                  "3V3",
                  "TX",
                  "TX_1"
                ]
              ],
              [
                "R10",
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
                    "part": "R10",
                    "value": "4.7k",
                    "from": "TX",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.-",
          "before": {
            "label": "VO2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$17."
          },
          "after": {
            "label": "SPK-",
            "type": "output",
            "description": "HT6881 bridge-tied speaker output VO2; not ground. Physical source terminal J4.-. CAD net: N$17."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "N$17",
            "label": "VO2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U4",
                "pin": "VO2",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "N$17",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "VO2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J4.+",
          "before": {
            "label": "VO1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$12."
          },
          "after": {
            "label": "SPK+",
            "type": "output",
            "description": "HT6881 bridge-tied speaker output VO1. Physical source terminal J4.+. CAD net: N$12."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/grove_mp3_v4/",
          "sourceNetEvidence": {
            "net": "N$12",
            "label": "VO1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U4",
                "pin": "VO1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "N$12",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "VO1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J2.2: autogenerated net N$2 requires printed/function label review.",
        "J3.3: autogenerated net N$5 requires printed/function label review.",
        "J3.4: autogenerated net N$6 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R11",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C16",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": null,
          "connectedPins": [],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "N$2",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.3",
          "net": "SD_CMD",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SDCMD",
              "direction": "io"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.4",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.5",
          "net": "SD_CLK",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SDCLK",
              "direction": "io"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.6",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.7",
          "net": "SD_DATA",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "SDDAT",
              "direction": "io"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.8",
          "net": null,
          "connectedPins": [],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.9",
          "net": null,
          "connectedPins": [],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.G1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.G2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.G4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J2.G3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "MICRO-SD9+4P-SMD-16.1X14.5X1.85MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.5",
          "net": null,
          "connectedPins": [],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.1",
          "net": null,
          "connectedPins": [],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.2",
          "net": "AGND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.3",
          "net": "N$5",
          "connectedPins": [
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.8",
          "net": null,
          "connectedPins": [],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.4",
          "net": "N$6",
          "connectedPins": [
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.7",
          "net": null,
          "connectedPins": [],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "J3.6",
          "net": "AGND",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "AUDIO8P-SMD-3.5-14.5X6.1X4.0MM",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "EPAD",
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
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C16",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U4",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP3.T",
          "net": "RX",
          "connectedPins": [
            {
              "part": "Q2",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R11",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP4.T",
          "net": "TX",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "D",
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
          "number": "J4.-",
          "net": "N$17",
          "connectedPins": [
            {
              "part": "U4",
              "pin": "VO2",
              "direction": "io"
            }
          ],
          "package": "H2-2.0-6X4.5MM",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.+",
          "net": "N$12",
          "connectedPins": [
            {
              "part": "U4",
              "pin": "VO1",
              "direction": "io"
            }
          ],
          "package": "H2-2.0-6X4.5MM",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "90c525591cc47f53a238c0926ec8eaa9d98da2b9198d8a5062a9d7555bde0859",
      "completePortInventory": [
        "J1",
        "J2",
        "J3",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J4"
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
      "sourceArchiveSha256": "93396f12c2b1fca95a8e7c205399c5271121ebdb68a56450a8657c91a5d51e02",
      "sourceWikiSha256": "f023914cfdf1dfc2d2837110bbb1555e772e49649875d76d1db9e258a4182d19",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg",
        "sha256": "cf913473e131529db01d2d72a4bd068b8e375200cd8789973efc48e8cdebcdca"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "MP3 v4.0"
      ]
    }
  },
  "seeed-module-104020248": {
    "contacts": [
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "IIC_ADDR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: IIC_ADDR.",
        "x": 6.985,
        "y": 7.543,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "ADDR HIGH",
        "type": "passive",
        "description": "Address-high option through R9=4.7 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$11.",
        "x": 5.715,
        "y": 7.543,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "ADDR LOW",
        "type": "passive",
        "description": "Address-low option through R7=4.7 kOhm to GND. Physical source terminal JP1.11. CAD net: N$10.",
        "x": 8.255,
        "y": 7.543,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "HSCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: HSCL.",
        "x": -3.175,
        "y": 3.05,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "HSDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: HSDA.",
        "x": -3.175,
        "y": 1.05,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC_IN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC_IN.",
        "x": -3.175,
        "y": -0.95,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -3.175,
        "y": -2.95,
        "size": [
          2.54,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND.",
        "x": -6.425,
        "y": 5.85,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND.",
        "x": -6.425,
        "y": -5.75,
        "size": [
          2.6,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-8.575\" y=\"-6.05\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.953\" y=\"6.781\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.4191\" y=\"3.9616\" width=\"3.8989\" height=\"1.0668\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"-6.9985\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"2.082\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.572\" y=\"-0.585\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.497\" y=\"-3.544\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.232\" y=\"5.23\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.232\" y=\"-8.613\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.232\" y=\"-7.089\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.407\" y=\"-3.66\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2385\" y=\"7.7335\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"7.7335\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6355\" y=\"-2.2995\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"0.8755\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"-1.6645\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"-0.3945\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2385\" y=\"6.3365\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2385\" y=\"5.4475\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"6.5905\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"2.3995\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"-5.7285\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4605\" y=\"-4.8395\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.575000\" y=\"-6.050000\" width=\"5.100000\" height=\"12.200000\" rx=\"0.2\" fill=\"#e4e3d2\" stroke=\"#a1aaa0\" stroke-width=\".1\"/>",
    "backArtwork": "<rect x=\"-9.888\" y=\"-9.18\" width=\"19.7\" height=\"18.46\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.888000\" y=\"-9.180000\" width=\"19.700000\" height=\"18.460000\" rx=\"0.35\" fill=\"#101824\" stroke=\"#728388\" stroke-width=\".1\"/><rect x=\"-8.312000\" y=\"-6.964800\" width=\"16.548000\" height=\"13.475800\" rx=\"0.1\" fill=\"#101d2b\" stroke=\"#2c3f54\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - OLED Display 0.66 (SSD1306)_v1.0.brd",
      "boardSha256": "a3b6143e89b36ab61658cd8493f1b5e098db9dfc2955e327f3d56576e430bb70",
      "sourceBounds": [
        -10,
        -10.2,
        10,
        10.3
      ],
      "selectedConnectors": [
        "JP1",
        "J1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/104020248/extracted/Grove - OLED Display 0.66 (SSD1306)_v1.0.sch",
      "pinOverrides": [
        {
          "number": "JP1.00",
          "before": {
            "label": "N$11",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11."
          },
          "after": {
            "label": "ADDR HIGH",
            "type": "passive",
            "description": "Address-high option through R9=4.7 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$11."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "N$11",
            "label": "N$11",
            "type": "passive",
            "endpoints": [
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R9",
                "4.7k",
                [
                  "3V3",
                  "N$11"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BS1",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDDB",
                    "direction": "pwr"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "pwr"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "D1",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D2",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "D0",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RES",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R5",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "RES"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "RES#",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.11",
          "before": {
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "ADDR LOW",
            "type": "passive",
            "description": "Address-low option through R7=4.7 kOhm to GND. Physical source terminal JP1.11. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R7",
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
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@1",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "R/W#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "E/RD#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "BS2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "CS#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "D3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D7",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D6",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D5",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VLSS",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  },
                  {
                    "part": "R8",
                    "value": "390k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.1",
          "before": {
            "label": "HSCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: HSCL."
          },
          "after": {
            "label": "HSCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: HSCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "HSCL",
            "label": "HSCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q4",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "4.7k",
                [
                  "HSCL",
                  "VCC_IN"
                ]
              ],
              [
                "Q4",
                "CJ2102",
                [
                  "3V3",
                  "HSCL",
                  "SCL"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_IN",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7k",
                    "from": "HSCL",
                    "to": "VCC_IN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
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
            "label": "HSDA",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: HSDA."
          },
          "after": {
            "label": "HSDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: HSDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "HSDA",
            "label": "HSDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "4.7k",
                [
                  "HSDA",
                  "VCC_IN"
                ]
              ],
              [
                "Q3",
                "CJ2102",
                [
                  "3V3",
                  "HSDA",
                  "SDA"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_IN",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "HSDA",
                    "to": "VCC_IN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
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
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
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
                "part": "U2",
                "pin": "NC/GND@1",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "R/W#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "E/RD#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "BS2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "CS#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "D3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D7",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D6",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D5",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D4",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
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
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VLSS",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "NC/GND@2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "in"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF/10V",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C2",
                "10uF/10V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "RES"
                ]
              ],
              [
                "R8",
                "390k",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C6",
                "4.7uF/10V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C7",
                "2.2uF/10V",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "R7",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@1",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "R/W#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "E/RD#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "BS2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "CS#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "D3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D7",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D6",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D5",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VLSS",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R8",
                    "value": "390k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
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
                "part": "U2",
                "pin": "NC/GND@1",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "R/W#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "E/RD#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "BS2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "CS#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "D3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D7",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D6",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D5",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D4",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
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
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VLSS",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "NC/GND@2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "in"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF/10V",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C2",
                "10uF/10V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "RES"
                ]
              ],
              [
                "R8",
                "390k",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C6",
                "4.7uF/10V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C7",
                "2.2uF/10V",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "R7",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@1",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "R/W#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "E/RD#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "BS2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "CS#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "D3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D7",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D6",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D5",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VLSS",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R8",
                    "value": "390k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.66-SSD1306_v1.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
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
                "part": "U2",
                "pin": "NC/GND@1",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "R/W#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "E/RD#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "BS2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "CS#",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "D3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D7",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D6",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D5",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "D4",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
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
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VLSS",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "NC/GND@2",
                "direction": "in"
              },
              {
                "part": "U2",
                "pin": "VSS",
                "direction": "in"
              }
            ],
            "neighbors": [
              [
                "C1",
                "10uF/10V",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C2",
                "10uF/10V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "RES"
                ]
              ],
              [
                "R8",
                "390k",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C6",
                "4.7uF/10V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C7",
                "2.2uF/10V",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "R7",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@1",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "R/W#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "E/RD#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "BS2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "CS#",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "D3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D7",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D6",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D5",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "D4",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VLSS",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "NC/GND@2",
                    "direction": "in"
                  },
                  {
                    "part": "U2",
                    "pin": "VSS",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R8",
                    "value": "390k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "JP1.00: autogenerated net N$11 requires printed/function label review.",
        "JP1.11: autogenerated net N$10 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "JP1.MM",
          "net": "IIC_ADDR",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "D/C#",
              "direction": "in"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.00",
          "net": "N$11",
          "connectedPins": [
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.11",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "J1.1",
          "net": "HSCL",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "HSDA",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "VCC_IN",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
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
              "part": "U2",
              "pin": "NC/GND@1",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "R/W#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "E/RD#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "BS2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "CS#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "D3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D7",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D6",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D5",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D4",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
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
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VLSS",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "NC/GND@2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "in"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
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
              "part": "U2",
              "pin": "NC/GND@1",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "R/W#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "E/RD#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "BS2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "CS#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "D3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D7",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D6",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D5",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D4",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
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
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VLSS",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "NC/GND@2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "in"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
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
              "part": "U2",
              "pin": "NC/GND@1",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "R/W#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "E/RD#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "BS2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "CS#",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "D3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D7",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D6",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D5",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "D4",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
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
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VLSS",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "NC/GND@2",
              "direction": "in"
            },
            {
              "part": "U2",
              "pin": "VSS",
              "direction": "in"
            }
          ],
          "package": "4P-SMD-2.0",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "b800431bc93027560af342b4e46a35830257a7e0bdd4bb05c7c8fd0456088129",
      "completePortInventory": [
        "JP1",
        "J1"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -10,
        -11.873540604271303,
        10,
        11.96050003250049
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "78139ab4d45444492e1f1c25c7233b7a5b13b2c9298d933e705a8efeb29d1f76",
      "sourceWikiSha256": "917be6988e7e87c9ac4417d09011feadc4dd1dae513cde697f0159a8cb7d7d51",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png",
        "sha256": "d8952e4af5dcd935eec397a5f8a7976a904566380295c8e2ce0c1a7e752c7ac4"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": []
    }
  },
  "seeed-module-104020133": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL_VCC",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_VCC.",
        "x": -23.495,
        "y": 3,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA_VCC",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_VCC.",
        "x": -23.495,
        "y": 1,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -23.495,
        "y": -1,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -23.495,
        "y": -3,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND.",
        "x": -26.618,
        "y": 5.8,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND.",
        "x": -26.618,
        "y": -5.8,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A2 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R6=47 kOhm to common scan/address strobe. Physical source terminal JP1.1. CAD net: N$1.",
        "x": 15.24,
        "y": -18.161,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "E/A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: E/A2.",
        "x": 15.24,
        "y": -17.399,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "A1 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R7=47 kOhm to common scan/address strobe. Physical source terminal JP3.1. CAD net: N$7.",
        "x": 13.335,
        "y": -18.161,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "N/A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N/A1.",
        "x": 13.335,
        "y": -17.399,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "A0 BRIDGE",
        "type": "passive",
        "description": "Address strap branch through R8=47 kOhm to common scan/address strobe. Physical source terminal JP4.1. CAD net: N$9.",
        "x": 11.43,
        "y": -18.161,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "M/A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: M/A0.",
        "x": 11.43,
        "y": -17.399,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.3086\" y=\"-3.7465\" width=\"18.2372\" height=\"7.493\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-28.768\" y=\"-6.1\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7955\" y=\"14.478\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7955\" y=\"-17.272\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.763\" y=\"-17.272\" width=\"4.953\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.565\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.645\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-17.9705\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-14.1605\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.8065\" y=\"6.45\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.8065\" y=\"-7.9645\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.9485\" y=\"-13.9335\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.3145\" y=\"9.117\" width=\"1.578\" height=\"2.086\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.251\" y=\"-11.203\" width=\"1.578\" height=\"2.086\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.8065\" y=\"4.291\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.8065\" y=\"-5.869\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.743\" y=\"12.3555\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.743\" y=\"-13.9335\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.605\" y=\"-18.669\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.7\" y=\"-18.669\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.406\" y=\"-9.261\" width=\"1.7\" height=\"1.25\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.974\" y=\"-17.31\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.974\" y=\"-13.5\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.386\" y=\"-17.31\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.386\" y=\"-13.5\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"2.64\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-7.647\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-6.25\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-4.853\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-3.329\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.754\" y=\"-3.71\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.6905\" y=\"2.64\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-0.408\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"1.116\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.583\" y=\"-1.932\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"1.497\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-4.599\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-3.075\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-1.551\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.055\" y=\"-0.027\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.695\" y=\"-4.102\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.515\" y=\"-11.965\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-24.0\" y=\"-10.0\" width=\"48.0\" height=\"20.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.000000\" y=\"-10.000000\" width=\"48.000000\" height=\"20.000000\" rx=\"0.35\" fill=\"#101824\" stroke=\"#728388\" stroke-width=\".1\"/><path d=\"M-21.96 -7.199999999999999L-14.04 -7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-21.96 7.199999999999999L-14.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-21.96 -7.199999999999999L-21.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-21.96 0.0L-21.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-14.04 -7.199999999999999L-14.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-14.04 0.0L-14.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-21.96 0.0L-18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-18.0 0.0L-14.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-21.96 -7.199999999999999L-18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-18.0 0.0L-14.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-14.04 -7.199999999999999L-18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-18.0 0.0L-21.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-18.0 -7.199999999999999L-18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-18.0 0.0L-18.0 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 -7.199999999999999L-2.04 -7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 7.199999999999999L-2.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 -7.199999999999999L-9.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 0.0L-9.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.04 -7.199999999999999L-2.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.04 0.0L-2.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 0.0L-6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.0 0.0L-2.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-9.96 -7.199999999999999L-6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.0 0.0L-2.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-2.04 -7.199999999999999L-6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.0 0.0L-9.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.0 -7.199999999999999L-6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M-6.0 0.0L-6.0 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 -7.199999999999999L9.96 -7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 7.199999999999999L9.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 -7.199999999999999L2.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 0.0L2.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M9.96 -7.199999999999999L9.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M9.96 0.0L9.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 0.0L6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.0 0.0L9.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M2.04 -7.199999999999999L6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.0 0.0L9.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M9.96 -7.199999999999999L6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.0 0.0L2.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.0 -7.199999999999999L6.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M6.0 0.0L6.0 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 -7.199999999999999L21.96 -7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 7.199999999999999L21.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 -7.199999999999999L14.04 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 0.0L14.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M21.96 -7.199999999999999L21.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M21.96 0.0L21.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 0.0L18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M18.0 0.0L21.96 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M14.04 -7.199999999999999L18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M18.0 0.0L21.96 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M21.96 -7.199999999999999L18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M18.0 0.0L14.04 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M18.0 -7.199999999999999L18.0 0.0\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/><path d=\"M18.0 0.0L18.0 7.199999999999999\" stroke=\"#626769\" stroke-width=\".32\" stroke-linecap=\"round\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - 0.54 Red Quad Alphanumeric Display.brd",
      "boardSha256": "589e23fb40a613ee186b33d24a9286a30361e874c3a63f0336487f97b1941915",
      "sourceBounds": [
        -32.1,
        -22.1,
        32.1,
        22.1
      ],
      "selectedConnectors": [
        "J1",
        "JP1",
        "JP3",
        "JP4"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/104020133/extracted/202002302_PCBA;Grove - 0.54 Red Quad Alphanumeric Display_原理图/Grove - 0.54 Red Quad Alphanumeric Display.sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "SCL_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL_VCC."
          },
          "after": {
            "label": "SCL_VCC",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "SCL_VCC",
            "label": "SCL_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "R17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q2",
                "pin": "S",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R17",
                "4.7k",
                [
                  "SCL_VCC",
                  "VCC"
                ]
              ],
              [
                "Q2",
                "2N7002,215",
                [
                  "SCL",
                  "SCL_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$18",
                "hops": [
                  {
                    "part": "R17",
                    "value": "4.7k",
                    "from": "SCL_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "L3",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$18"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VIN",
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
            "label": "SDA_VCC",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA_VCC."
          },
          "after": {
            "label": "SDA_VCC",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA_VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "SDA_VCC",
            "label": "SDA_VCC",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q1",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "R16",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q1",
                "2N7002,215",
                [
                  "SDA",
                  "SDA_VCC",
                  "VCC"
                ]
              ],
              [
                "R16",
                "4.7k",
                [
                  "SDA_VCC",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "R1",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$18",
                "hops": [
                  {
                    "part": "R16",
                    "value": "4.7k",
                    "from": "SDA_VCC",
                    "to": "VCC"
                  },
                  {
                    "part": "L3",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$18"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "EN",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "VIN",
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
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "5V0",
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
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "5V0",
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
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J1.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U3",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U3",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C18",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C19",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C21",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C2",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C18",
                "DNP",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C20",
                "100nF",
                [
                  "GND",
                  "VOUT"
                ]
              ],
              [
                "C4",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C17",
                "220uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C19",
                "DNP",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C21",
                "100nF",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "R20",
                "DNP",
                [
                  "GND",
                  "N$19"
                ]
              ],
              [
                "R3",
                "56k_1%",
                [
                  "GND",
                  "N$17"
                ]
              ],
              [
                "C1",
                "220uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C6",
                "10uF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "5V0",
                  "GND"
                ]
              ],
              [
                "C7",
                "DNP",
                [
                  "5V0",
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
                    "part": "U3",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R20",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "MODE/SYNC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$17",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VOUT",
                "hops": [
                  {
                    "part": "R3",
                    "value": "56k_1%",
                    "from": "GND",
                    "to": "N$17"
                  },
                  {
                    "part": "R4",
                    "value": "510k_1%",
                    "from": "N$17",
                    "to": "VOUT"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "VOUT",
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
            "label": "N$1",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1."
          },
          "after": {
            "label": "A2 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R6=47 kOhm to common scan/address strobe. Physical source terminal JP1.1. CAD net: N$1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$1",
            "label": "N$1",
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
                "47k",
                [
                  "N$1",
                  "N$6"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "JP3.1",
          "before": {
            "label": "N$7",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$7."
          },
          "after": {
            "label": "A1 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R7=47 kOhm to common scan/address strobe. Physical source terminal JP3.1. CAD net: N$7."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$7",
            "label": "N$7",
            "type": "passive",
            "endpoints": [
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R7",
                "47k",
                [
                  "N$6",
                  "N$7"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "JP4.1",
          "before": {
            "label": "N$9",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$9."
          },
          "after": {
            "label": "A0 BRIDGE",
            "type": "passive",
            "description": "Address strap branch through R8=47 kOhm to common scan/address strobe. Physical source terminal JP4.1. CAD net: N$9."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-0.54_inch_Red_Quad_Alphanumeric_Display/",
          "sourceNetEvidence": {
            "net": "N$9",
            "label": "N$9",
            "type": "passive",
            "endpoints": [
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R8",
                "47k",
                [
                  "N$6",
                  "N$9"
                ]
              ]
            ],
            "paths": []
          }
        }
      ],
      "reviewWarningsResolved": [
        "JP1.1: autogenerated net N$1 requires printed/function label review.",
        "JP3.1: autogenerated net N$7 requires printed/function label review.",
        "JP4.1: autogenerated net N$9 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "SCL_VCC",
          "connectedPins": [
            {
              "part": "R17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "S",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "SDA_VCC",
          "connectedPins": [
            {
              "part": "Q1",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "L3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C19",
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
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "J1.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U3",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C18",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C19",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C21",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.1",
          "net": "N$1",
          "connectedPins": [
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.2",
          "net": "E/A2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ROW0/A2",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.1",
          "net": "N$7",
          "connectedPins": [
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.2",
          "net": "N/A1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ROW1/A1",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-NO",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.1",
          "net": "N$9",
          "connectedPins": [
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "2P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.2",
          "net": "M/A0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "ROW2/A0",
              "direction": "io"
            }
          ],
          "package": "2P-SMD-SHORT",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "98ccfe5f537a4097385577beb90e48c08ea15981f33ae9d9679dc8cf10575a0f",
      "completePortInventory": [
        "J1",
        "JP1",
        "JP3",
        "JP4"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -32.1,
        -22.1,
        32.1,
        22.1
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "231716bd0a6fcb1080b19f4270b055958fc6103c37298a36e3d7fd65f06dd2b4",
      "sourceWikiSha256": "c6b27744958a5323d4fca6f08cc401f458bcef39f2849ec32042ba6415c215ec",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png",
        "sha256": "019f1592c3c2ac3aa3ca7424515d5f383736166ca3f62c1892ba6de3d6d677a6"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.0"
      ]
    }
  },
  "seeed-module-104020208": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "HSCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: HSCL.",
        "x": -17.5555,
        "y": 3,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "HSDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: HSDA.",
        "x": -17.5555,
        "y": 1,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC_IN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC_IN.",
        "x": -17.5555,
        "y": -1,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.4. CAD net: GND.",
        "x": -17.5555,
        "y": -3,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "IIC_ADDR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: IIC_ADDR.",
        "x": -17.5555,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "ADDR HIGH",
        "type": "passive",
        "description": "Address-high option through R9=4.7 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$11.",
        "x": -18.8255,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "ADDR LOW",
        "type": "passive",
        "description": "Address-low option through R7=4.7 kOhm to GND. Physical source terminal JP1.11. CAD net: N$10.",
        "x": -16.2855,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-7.0655\" y=\"-8.45\" width=\"24.74\" height=\"16.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.7555\" y=\"-5.0\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.5875\" y=\"6.858\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.4595\" y=\"4.4069\" width=\"1.0668\" height=\"3.8989\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.226\" y=\"-7.5565\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.015\" y=\"-4.1955\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.015\" y=\"-1.6555\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.006\" y=\"-1.435\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.7195\" y=\"6.577\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.7195\" y=\"5.2308\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.8785\" y=\"-7.15\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.0105\" y=\"5.3468\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.8085\" y=\"-7.1755\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.3325\" y=\"2.6035\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.9863\" y=\"0.9525\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.9736\" y=\"2.6035\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.8229\" y=\"0.9525\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.793\" y=\"2.6035\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.793\" y=\"-3.7465\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.3534\" y=\"0.9525\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.661\" y=\"-3.7465\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.661\" y=\"-1.1811\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.491\" y=\"4.3561\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.6401\" y=\"0.9525\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.6274\" y=\"2.6035\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.065500\" y=\"-8.450000\" width=\"24.740000\" height=\"16.900000\" rx=\"0.35\" fill=\"#101824\" stroke=\"#728388\" stroke-width=\".1\"/><rect x=\"-5.086300\" y=\"-6.422000\" width=\"20.781600\" height=\"12.337000\" rx=\"0.1\" fill=\"#101d2b\" stroke=\"#2c3f54\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - OLED Display 0.96 (SSD1315)_v1.0.brd",
      "boardSha256": "67d5d8dfb422f09284cec9b4d6c5d9858997bc0b3148bcfc8e74d9f038086713",
      "sourceBounds": [
        -20.0045,
        -12.1,
        22.0955,
        12.1
      ],
      "selectedConnectors": [
        "J1",
        "JP1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/104020208/extracted/Grove - OLED Display 0.96 (SSD1315)_v1.0.sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "HSCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: HSCL."
          },
          "after": {
            "label": "HSCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: HSCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/",
          "sourceNetEvidence": {
            "net": "HSCL",
            "label": "HSCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q4",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "4.7k",
                [
                  "HSCL",
                  "VCC_IN"
                ]
              ],
              [
                "Q4",
                "CJ2102",
                [
                  "3V3",
                  "HSCL",
                  "SCL"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_IN",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7k",
                    "from": "HSCL",
                    "to": "VCC_IN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
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
            "label": "HSDA",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: HSDA."
          },
          "after": {
            "label": "HSDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: HSDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/",
          "sourceNetEvidence": {
            "net": "HSDA",
            "label": "HSDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "R3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q3",
                "pin": "D",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R3",
                "4.7k",
                [
                  "HSDA",
                  "VCC_IN"
                ]
              ],
              [
                "Q3",
                "CJ2102",
                [
                  "3V3",
                  "HSDA",
                  "SDA"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_IN",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7k",
                    "from": "HSDA",
                    "to": "VCC_IN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VIN",
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
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
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
                "part": "U4",
                "pin": "NC/GND",
                "direction": "in"
              },
              {
                "part": "U4",
                "pin": "VSS",
                "direction": "pwr"
              },
              {
                "part": "U4",
                "pin": "BS0",
                "direction": "in"
              },
              {
                "part": "U4",
                "pin": "/CS",
                "direction": "in"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R8",
                "pin": "2",
                "direction": "pas"
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
                "part": "U4",
                "pin": "VLSS",
                "direction": "pwr"
              },
              {
                "part": "U4",
                "pin": "NC/GND1",
                "direction": "in"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C5",
                "10uF",
                [
                  "GND",
                  "RES"
                ]
              ],
              [
                "R8",
                "620k",
                [
                  "GND",
                  "N$5"
                ]
              ],
              [
                "C1",
                "10uF/10V",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C2",
                "10uF/10V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC_IN"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C6",
                "4.7uF/10V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C7",
                "2.2uF/10V",
                [
                  "GND",
                  "N$7"
                ]
              ],
              [
                "R7",
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
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "NC/GND",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "VSS",
                    "direction": "pwr"
                  },
                  {
                    "part": "U4",
                    "pin": "BS0",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "/CS",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "VLSS",
                    "direction": "pwr"
                  },
                  {
                    "part": "U4",
                    "pin": "NC/GND1",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R8",
                    "value": "620k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.00",
          "before": {
            "label": "N$11",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11."
          },
          "after": {
            "label": "ADDR HIGH",
            "type": "passive",
            "description": "Address-high option through R9=4.7 kOhm to 3V3. Physical source terminal JP1.00. CAD net: N$11."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/",
          "sourceNetEvidence": {
            "net": "N$11",
            "label": "N$11",
            "type": "passive",
            "endpoints": [
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R9",
                "4.7k",
                [
                  "3V3",
                  "N$11"
                ]
              ]
            ],
            "paths": [
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "VDD",
                    "direction": "pwr"
                  },
                  {
                    "part": "U4",
                    "pin": "BS1",
                    "direction": "in"
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R1",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "D1/SDIN",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "D2",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R2",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "D0/SCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RES",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R5",
                    "value": "4.7k",
                    "from": "3V3",
                    "to": "RES"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "/RES",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$8",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7k",
                    "from": "N$11",
                    "to": "3V3"
                  },
                  {
                    "part": "R6",
                    "value": "0R",
                    "from": "3V3",
                    "to": "N$8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "VBAT",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.11",
          "before": {
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "ADDR LOW",
            "type": "passive",
            "description": "Address-low option through R7=4.7 kOhm to GND. Physical source terminal JP1.11. CAD net: N$10."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R7",
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
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U4",
                    "pin": "NC/GND",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "VSS",
                    "direction": "pwr"
                  },
                  {
                    "part": "U4",
                    "pin": "BS0",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "/CS",
                    "direction": "in"
                  },
                  {
                    "part": "U4",
                    "pin": "VLSS",
                    "direction": "pwr"
                  },
                  {
                    "part": "U4",
                    "pin": "NC/GND1",
                    "direction": "in"
                  }
                ]
              },
              {
                "net": "N$5",
                "hops": [
                  {
                    "part": "R7",
                    "value": "4.7k",
                    "from": "N$10",
                    "to": "GND"
                  },
                  {
                    "part": "R8",
                    "value": "620k",
                    "from": "GND",
                    "to": "N$5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U4",
                    "pin": "IREF",
                    "direction": "in"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "JP1.00: autogenerated net N$11 requires printed/function label review.",
        "JP1.11: autogenerated net N$10 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "HSCL",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "HSDA",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q3",
              "pin": "D",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.3",
          "net": "VCC_IN",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
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
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
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
              "part": "U4",
              "pin": "NC/GND",
              "direction": "in"
            },
            {
              "part": "U4",
              "pin": "VSS",
              "direction": "pwr"
            },
            {
              "part": "U4",
              "pin": "BS0",
              "direction": "in"
            },
            {
              "part": "U4",
              "pin": "/CS",
              "direction": "in"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
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
              "part": "U4",
              "pin": "VLSS",
              "direction": "pwr"
            },
            {
              "part": "U4",
              "pin": "NC/GND1",
              "direction": "in"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "JP1.MM",
          "net": "IIC_ADDR",
          "connectedPins": [
            {
              "part": "U4",
              "pin": "D/C",
              "direction": "in"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.00",
          "net": "N$11",
          "connectedPins": [
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.11",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "0f2ab13b1528aa3fc184db4f14accf7419b55322e9c0e72cf634fc9e05fa9551",
      "completePortInventory": [
        "J1",
        "JP1"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -21.05,
        -12.1,
        21.05,
        12.1
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "5259c3bfc5eae681dc24e35bde3b4c2b2c9e757609df5fee1aa0cf9e36eb522f",
      "sourceWikiSha256": "e03c581b6e0c337747913ff9f1ec634a44abf212b922ab2855282ce67747ef7c",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg",
        "sha256": "e5b3be0166682dcde1a4674237438d84fb1d362799504b7c0a61b0bb0949b591"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.0"
      ]
    }
  },
  "seeed-module-107020007": {
    "contacts": [
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "VO2",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$3.",
        "x": -18.315,
        "y": -6.4,
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
        "label": "VO1",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$4.",
        "x": -18.315,
        "y": -3.86,
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
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal TP8.T. CAD net: GND.",
        "x": -18.315,
        "y": 6.3,
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
        "id": "j2-2",
        "number": "J2.2",
        "label": "VO1",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$4.",
        "x": -16.295,
        "y": -5.527,
        "size": [
          1.3,
          1.3
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "VO2",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: N$3.",
        "x": -16.295,
        "y": -7.527,
        "size": [
          1.3,
          1.3
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "PLAY",
        "type": "input",
        "description": "ISD1820 PLAYL playback trigger input. Physical source terminal J1.1. CAD net: PLAY.",
        "x": 16.604506,
        "y": -3.05,
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
        "label": "REC SELECT",
        "type": "input",
        "description": "Mode-switch common routes this external trigger according to switch position. Physical source terminal J1.2. CAD net: N$17.",
        "x": 16.604506,
        "y": -1.05,
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
        "description": "External 3.3–5 V module supply, not a generated rail. Physical source terminal J1.3. CAD net: VCC.",
        "x": 16.604506,
        "y": 0.95,
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
        "x": 16.604506,
        "y": 2.95,
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
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "REC",
        "type": "input",
        "description": "ISD1820 recording trigger input. Physical source terminal TP1.T. CAD net: REC.",
        "x": 18.515,
        "y": -3.854506,
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
        "label": "PLAY",
        "type": "input",
        "description": "ISD1820 PLAYL playback trigger input. Physical source terminal TP2.T. CAD net: PLAY.",
        "x": 18.515,
        "y": -6.394506,
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
        "description": "External 3.3–5 V module supply, not a generated rail. Physical source terminal TP3.T. CAD net: VCC.",
        "x": 18.515,
        "y": 3.765494,
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
        "x": 18.515,
        "y": 6.305494,
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
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "AMP IN-",
        "type": "input",
        "description": "NS8002 amplifier inverting input / volume network service point. Physical source terminal TP7.T. CAD net: N$12.",
        "x": -18.315,
        "y": 3.765494,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-7.52\" y=\"-6.273\" width=\"17.272\" height=\"6.35\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.804506\" y=\"-5.05\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.84\" y=\"2.540506\" width=\"6.8\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.085\" y=\"2.665\" width=\"6.0\" height=\"6.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.395\" y=\"-9.527\" width=\"4.7\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.297494\" y=\"-9.702\" width=\"6.604\" height=\"2.794\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.251\" y=\"0.458\" width=\"2.8575\" height=\"0.635\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"-12.981000000000002\" cy=\"3.6329999999999973\" r=\"4.445\" fill=\"#9ba9a9\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"-12.981000000000002\" cy=\"3.6329999999999973\" r=\"2.6670000000000003\" fill=\"#1b3039\"/>",
    "backArtwork": "<rect x=\"-11.049494\" y=\"-5.852\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.3625\" y=\"-4.368\" width=\"4.445\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.650506\" y=\"-2.912994\" width=\"4.191\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.445494\" y=\"-5.071994\" width=\"4.191\" height=\"1.651\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.197\" y=\"7.378\" width=\"3.301\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.837\" y=\"-3.547994\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.251\" y=\"6.173\" width=\"2.8575\" height=\"0.635\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.3225\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.371006\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.985494\" y=\"-5.511\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.651994\" y=\"-5.511\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.2335\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1795\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.985494\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.0905\" y=\"-2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.0685\" y=\"-5.13\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.5615\" y=\"-4.114\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2915\" y=\"-4.114\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.418\" y=\"-4.0505\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.216994\" y=\"-5.135494\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.8315\" y=\"-4.114\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.166506\" y=\"-1.3835\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.418\" y=\"-5.1935\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.959\" y=\"6.1095\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - Recorder v2.0.brd",
      "boardSha256": "49d62e6bd0e76526f30fdf224c2632f987f87ad8d5857b53327324a7c5a9cb94",
      "sourceBounds": [
        -18.294999999999998,
        -10.300000000000002,
        21.905,
        10.199999999999998
      ],
      "selectedConnectors": [
        "TP5",
        "TP6",
        "TP8",
        "J2",
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP7"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/107020007/extracted/Grove - Recorder v2.0 Schematic Eagle file/Grove - Recorder v2.0.sch",
      "pinOverrides": [
        {
          "number": "TP8.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal TP8.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSA",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSD",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "SS2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS4",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "SD",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R5",
                "100K",
                [
                  "GND",
                  "PLAY"
                ]
              ],
              [
                "R6",
                "100K",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R7",
                "100K",
                [
                  "GND",
                  "REC"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "1uF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "DNP",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R2",
                "4.7K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C7",
                "4.7uF_16V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C9",
                "47uF_16V",
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
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PLAY",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "GND",
                    "to": "PLAY"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "REC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "GND",
                    "to": "REC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "PLAY",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PLAY."
          },
          "after": {
            "label": "PLAY",
            "type": "input",
            "description": "ISD1820 PLAYL playback trigger input. Physical source terminal J1.1. CAD net: PLAY."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "PLAY",
            "label": "PLAY",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PLAYL",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R5",
                "100K",
                [
                  "GND",
                  "PLAY"
                ]
              ]
            ],
            "paths": [
              {
                "net": "PLAY",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "REC",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "GND",
                    "to": "REC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "COM",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$17."
          },
          "after": {
            "label": "REC SELECT",
            "type": "input",
            "description": "Mode-switch common routes this external trigger according to switch position. Physical source terminal J1.2. CAD net: N$17."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "N$17",
            "label": "COM",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "SW1",
                "pin": "COM",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "N$17",
                "hops": [],
                "endpoints": [
                  {
                    "part": "SW1",
                    "pin": "COM",
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
            "label": "VCC",
            "type": "power_out",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC."
          },
          "after": {
            "label": "VCC",
            "type": "power_in",
            "description": "External 3.3–5 V module supply, not a generated rail. Physical source terminal J1.3. CAD net: VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "VCC",
            "label": "VCC",
            "type": "power_out",
            "endpoints": [
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "REC",
                "pin": "B1",
                "direction": "io"
              },
              {
                "part": "REC",
                "pin": "B0",
                "direction": "io"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "sup"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R4",
                "1K",
                [
                  "N$16",
                  "VCC"
                ]
              ],
              [
                "R9",
                "DNP",
                [
                  "N$13",
                  "VCC"
                ]
              ],
              [
                "R10",
                "470R",
                [
                  "N$2",
                  "VCC"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C9",
                "47uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [],
                "endpoints": [
                  {
                    "part": "REC",
                    "pin": "B1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "B0",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "FT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R4",
                    "value": "1K",
                    "from": "VCC",
                    "to": "N$16"
                  },
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "N$16",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC2",
                    "pin": "+",
                    "direction": "io"
                  },
                  {
                    "part": "MIC1",
                    "pin": "+",
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
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSA",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSD",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "SS2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS4",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "SD",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R5",
                "100K",
                [
                  "GND",
                  "PLAY"
                ]
              ],
              [
                "R6",
                "100K",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R7",
                "100K",
                [
                  "GND",
                  "REC"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "1uF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "DNP",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R2",
                "4.7K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C7",
                "4.7uF_16V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C9",
                "47uF_16V",
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
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PLAY",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "GND",
                    "to": "PLAY"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "REC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "GND",
                    "to": "REC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "REC",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: REC."
          },
          "after": {
            "label": "REC",
            "type": "input",
            "description": "ISD1820 recording trigger input. Physical source terminal TP1.T. CAD net: REC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "REC",
            "label": "REC",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "REC",
                "direction": "io"
              },
              {
                "part": "REC",
                "pin": "A1",
                "direction": "io"
              },
              {
                "part": "REC",
                "pin": "A0",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "B",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R7",
                "100K",
                [
                  "GND",
                  "REC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "REC",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "REC",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PLAY",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "REC",
                    "to": "GND"
                  },
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "GND",
                    "to": "PLAY"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "REC",
                    "to": "GND"
                  },
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "REC",
                    "to": "GND"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "PLAY",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PLAY."
          },
          "after": {
            "label": "PLAY",
            "type": "input",
            "description": "ISD1820 PLAYL playback trigger input. Physical source terminal TP2.T. CAD net: PLAY."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "PLAY",
            "label": "PLAY",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "PLAYL",
                "direction": "io"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R5",
                "100K",
                [
                  "GND",
                  "PLAY"
                ]
              ]
            ],
            "paths": [
              {
                "net": "PLAY",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "REC",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "GND",
                    "to": "REC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "PLAY",
                    "to": "GND"
                  },
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "VCC",
            "type": "power_out",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: VCC."
          },
          "after": {
            "label": "VCC",
            "type": "power_in",
            "description": "External 3.3–5 V module supply, not a generated rail. Physical source terminal TP3.T. CAD net: VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "VCC",
            "label": "VCC",
            "type": "power_out",
            "endpoints": [
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "REC",
                "pin": "B1",
                "direction": "io"
              },
              {
                "part": "REC",
                "pin": "B0",
                "direction": "io"
              },
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "sup"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R4",
                "1K",
                [
                  "N$16",
                  "VCC"
                ]
              ],
              [
                "R9",
                "DNP",
                [
                  "N$13",
                  "VCC"
                ]
              ],
              [
                "R10",
                "470R",
                [
                  "N$2",
                  "VCC"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C9",
                "47uF_16V",
                [
                  "GND",
                  "VCC"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC",
                "hops": [],
                "endpoints": [
                  {
                    "part": "REC",
                    "pin": "B1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "B0",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VCC",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "sup"
                  }
                ]
              },
              {
                "net": "N$13",
                "hops": [
                  {
                    "part": "R9",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "N$13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "FT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$19",
                "hops": [
                  {
                    "part": "R4",
                    "value": "1K",
                    "from": "VCC",
                    "to": "N$16"
                  },
                  {
                    "part": "R3",
                    "value": "4.7K",
                    "from": "N$16",
                    "to": "N$19"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC2",
                    "pin": "+",
                    "direction": "io"
                  },
                  {
                    "part": "MIC1",
                    "pin": "+",
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
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSA",
                "direction": "io"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VSSD",
                "direction": "io"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "sup"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "SS2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS4",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "SS3",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "SD",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R5",
                "100K",
                [
                  "GND",
                  "PLAY"
                ]
              ],
              [
                "R6",
                "100K",
                [
                  "GND",
                  "N$15"
                ]
              ],
              [
                "R7",
                "100K",
                [
                  "GND",
                  "REC"
                ]
              ],
              [
                "C5",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C3",
                "1uF",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C8",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C4",
                "DNP",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R2",
                "4.7K",
                [
                  "GND",
                  "N$20"
                ]
              ],
              [
                "C7",
                "4.7uF_16V",
                [
                  "GND",
                  "N$6"
                ]
              ],
              [
                "C9",
                "47uF_16V",
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
                    "pin": "VSSA",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSSD",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "GND",
                    "direction": "sup"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS4",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "SS3",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "SD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PLAY",
                "hops": [
                  {
                    "part": "R5",
                    "value": "100K",
                    "from": "GND",
                    "to": "PLAY"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "PLAYL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$15",
                "hops": [
                  {
                    "part": "R6",
                    "value": "100K",
                    "from": "GND",
                    "to": "N$15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "ROSC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "REC",
                "hops": [
                  {
                    "part": "R7",
                    "value": "100K",
                    "from": "GND",
                    "to": "REC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "REC",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A1",
                    "direction": "io"
                  },
                  {
                    "part": "REC",
                    "pin": "A0",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "B",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$20",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K",
                    "from": "GND",
                    "to": "N$20"
                  }
                ],
                "endpoints": [
                  {
                    "part": "MIC1",
                    "pin": "-",
                    "direction": "io"
                  },
                  {
                    "part": "MIC2",
                    "pin": "-",
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
            "label": "-IN",
            "type": "input",
            "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: N$12."
          },
          "after": {
            "label": "AMP IN-",
            "type": "input",
            "description": "NS8002 amplifier inverting input / volume network service point. Physical source terminal TP7.T. CAD net: N$12."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-Recorder_v2.0/",
          "sourceNetEvidence": {
            "net": "N$12",
            "label": "-IN",
            "type": "input",
            "endpoints": [
              {
                "part": "U2",
                "pin": "-IN",
                "direction": "in"
              },
              {
                "part": "R11",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "VR2",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R11",
                "560R",
                [
                  "N$11",
                  "N$12"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$12",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "-IN",
                    "direction": "in"
                  },
                  {
                    "part": "VR2",
                    "pin": "1",
                    "direction": "pas"
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
          "number": "TP5.T",
          "net": "N$3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VO2",
              "direction": "out"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP6.T",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VO1",
              "direction": "out"
            },
            {
              "part": "VR2",
              "pin": "3",
              "direction": "pas"
            },
            {
              "part": "VR2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "TP8.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSA",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSD",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "SS2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS4",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "SD",
              "direction": "io"
            }
          ],
          "package": "TP_4545",
          "sourceLayer": "1"
        },
        {
          "number": "J2.2",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VO1",
              "direction": "out"
            },
            {
              "part": "VR2",
              "pin": "3",
              "direction": "pas"
            },
            {
              "part": "VR2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "JST-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.1",
          "net": "N$3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VO2",
              "direction": "out"
            }
          ],
          "package": "JST-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.1",
          "net": "PLAY",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PLAYL",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "N$17",
          "connectedPins": [
            {
              "part": "SW1",
              "pin": "COM",
              "direction": "io"
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
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "REC",
              "pin": "B1",
              "direction": "io"
            },
            {
              "part": "REC",
              "pin": "B0",
              "direction": "io"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "sup"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "io"
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
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSA",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSD",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "SS2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS4",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "SD",
              "direction": "io"
            }
          ],
          "package": "HW4-2.0",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP1.T",
          "net": "REC",
          "connectedPins": [
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "REC",
              "direction": "io"
            },
            {
              "part": "REC",
              "pin": "A1",
              "direction": "io"
            },
            {
              "part": "REC",
              "pin": "A0",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "B",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP2.T",
          "net": "PLAY",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "PLAYL",
              "direction": "io"
            },
            {
              "part": "R5",
              "pin": "2",
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
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "REC",
              "pin": "B1",
              "direction": "io"
            },
            {
              "part": "REC",
              "pin": "B0",
              "direction": "io"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "sup"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "io"
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
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSA",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VSSD",
              "direction": "io"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "sup"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "SS2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS4",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "SS3",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "SD",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP7.T",
          "net": "N$12",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "-IN",
              "direction": "in"
            },
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "VR2",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "eb8425325cd29d9b4e98fa6c90f46e4729885776695a40c1497a0ec4c9f88353",
      "completePortInventory": [
        "TP5",
        "TP6",
        "TP8",
        "J2",
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP7"
      ],
      "viewReview": "Contact x/y and package rotation are source top-view coordinates. Only bottom SMD contacts receive a separate horizontally mirrored underside illustration. Through-hole contacts stay on the component-side view; native land coordinates remain source top-view coordinates.",
      "assemblyExclusions": [],
      "closedOutlineBounds": [
        -21.810500032500492,
        -11.960500032500494,
        20.100000000000005,
        11.873540604271307
      ],
      "artworkReview": "Original simplified source-body primitives with relevant controls, lenses, displays and antenna zones added from the same-side manufacturer photo. Source traces, logos and silkscreen graphics are not copied. Covered capacitive sensing electrodes are illustrated controls, not external solder terminals.",
      "sourceArchiveSha256": "b1a1edea309e5884dd36ca9f5310a4bb49eaa8b0dbf1a2779fcfc452f9d0b275",
      "sourceWikiSha256": "dd15c5041ca16a89e9546cad51c99aef3e1441e61c78f09b5311d79f0247f782",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg",
        "sha256": "4dd74f700e1645129272ddefda775509224b3f0ed6bf6f5daa237293c30073f6"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v2.0"
      ]
    }
  }
};
