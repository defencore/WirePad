// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-module-108020103": {
    "contacts": [
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "PA13/SWIO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA13/SWIO.",
        "x": -3.048,
        "y": 18.161,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "SWCLK",
        "type": "input",
        "description": "STM32 SWD clock input. Physical source terminal J7.2. CAD net: PA14/SWCLK.",
        "x": -5.588,
        "y": 18.161,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "RESET",
        "type": "input",
        "description": "STM32 active-low reset input. Physical source terminal J7.3. CAD net: !RST.",
        "x": -8.128,
        "y": 18.161,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "BOOT0",
        "type": "input",
        "description": "STM32 BOOT0 programming strap via R21=1 kOhm. Physical source terminal J7.6. CAD net: BOOT.",
        "x": -8.128,
        "y": 15.621,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-7",
        "number": "J7.7",
        "label": "PA9/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA9/SCL.",
        "x": -5.588,
        "y": 15.621,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-8",
        "number": "J7.8",
        "label": "PA10/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA10/SDA.",
        "x": -3.048,
        "y": 15.621,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard AP7333 3.3 V regulator output. Physical source terminal J7.4. CAD net: 3V3.",
        "x": -10.668,
        "y": 18.161,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J7.5. CAD net: GND.",
        "x": -10.668,
        "y": 15.621,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "sda2-t",
        "number": "SDA2.T",
        "label": "TX",
        "type": "output",
        "description": "STM32 USART transmit service pad. Physical source terminal SDA2.T. CAD net: PA2/TX.",
        "x": -7.62,
        "y": -3.175,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA2",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
        "label": "RX",
        "type": "input",
        "description": "STM32 USART receive service pad. Physical source terminal SDA4.T. CAD net: PA3/RX.",
        "x": -10.16,
        "y": -3.175,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA4",
        "back": true,
        "smd": true
      },
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard AP7333 3.3 V regulator output. Physical source terminal SDA3.T. CAD net: 3V3.",
        "x": -14.605,
        "y": 8.509,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA3",
        "back": true,
        "smd": true
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J5.1. CAD net: SCL.",
        "x": -20.728,
        "y": 3,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J5.2. CAD net: SDA.",
        "x": -20.728,
        "y": 1,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -20.728,
        "y": -1,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J5.4. CAD net: GND.",
        "x": -20.728,
        "y": -3,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-ss1",
        "number": "J5.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J5.SS1. CAD net: GND.",
        "x": -28.228,
        "y": 5.4,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-ss2",
        "number": "J5.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J5.SS2. CAD net: GND.",
        "x": -28.228,
        "y": -5.4,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "gnd1-t",
        "number": "GND1.T",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal GND1.T. CAD net: SCL.",
        "x": -28.575,
        "y": 3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND1",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc2-t",
        "number": "VCC2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal VCC2.T. CAD net: SDA.",
        "x": -28.575,
        "y": 1.27,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC2",
        "back": true,
        "smd": true
      },
      {
        "id": "sda1-t",
        "number": "SDA1.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -28.575,
        "y": -1.27,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA1",
        "back": true,
        "smd": true
      },
      {
        "id": "scl1-t",
        "number": "SCL1.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal SCL1.T. CAD net: GND.",
        "x": -28.575,
        "y": -3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL1",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "AO2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.1. CAD net: AO2.",
        "x": 28.194,
        "y": 3.81,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "AO1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.2. CAD net: AO1.",
        "x": 28.194,
        "y": 1.27,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "BO2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.3. CAD net: BO2.",
        "x": 28.194,
        "y": -1.27,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "BO1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.4. CAD net: BO1.",
        "x": 28.194,
        "y": -3.81,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "AO2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J6.1. CAD net: AO2.",
        "x": 22.86,
        "y": 14.986,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "AO1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J6.2. CAD net: AO1.",
        "x": 22.86,
        "y": 11.43,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "BO2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J8.1. CAD net: BO2.",
        "x": 22.86,
        "y": -11.43,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "BO1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J8.2. CAD net: BO1.",
        "x": 22.86,
        "y": -14.986,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "VMOTOR",
        "type": "power_in",
        "description": "External motor-current power input through D2 to the driver VIN rail. Physical source terminal J1.1. CAD net: DC_IN.",
        "x": -8.509,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J1.2. CAD net: GND.",
        "x": -12.065,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-30.028\" y=\"-6.1\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.05\" y=\"9.398\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.05\" y=\"-17.018\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.097\" y=\"-17.018\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.995\" y=\"-4.15\" width=\"5.6\" height=\"8.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.957\" y=\"6.402\" width=\"6.5\" height=\"6.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.957\" y=\"-11.886\" width=\"6.5\" height=\"6.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.957\" y=\"-18.998\" width=\"6.5\" height=\"6.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.235\" y=\"-2.2\" width=\"6.5\" height=\"4.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.924\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.572\" y=\"-15.875\" width=\"3.81\" height=\"4.318\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"-8.763\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.97\" y=\"8.001\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.97\" y=\"16.51\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.97\" y=\"14.097\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.97\" y=\"10.541\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"-17.526\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"-15.24\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"-11.049\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.7005\" y=\"-7.874\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.2555\" y=\"-7.874\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.7005\" y=\"3.81\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.283\" y=\"-2.059\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.767\" y=\"1.751\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.767\" y=\"-3.964\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.028\" y=\"9.752\" width=\"1.578\" height=\"2.086\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.108\" y=\"-5.234\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.256\" y=\"13.335\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.256\" y=\"10.16\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.3525\" y=\"9.652\" width=\"2.032\" height=\"1.016\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.66\" y=\"9.625\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.807\" y=\"9.995\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.807\" y=\"13.17\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.743\" y=\"9.995\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.743\" y=\"13.17\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.567\" y=\"-2.705\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.17\" y=\"-2.705\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.01\" y=\"0.354\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"6.577\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"5.18\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"-8.028\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.039\" y=\"-6.631\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.753\" y=\"-8.028\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.753\" y=\"-6.631\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"7.974\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"6.577\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"1.243\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"-4.853\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"-0.154\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"5.207\" cy=\"-8.635999999999997\" r=\"3.1\" fill=\"#24383e\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"5.207\" cy=\"-8.635999999999997\" r=\"1.8599999999999999\" fill=\"#1b3039\"/><circle cx=\"5.207\" cy=\"9.652000000000001\" r=\"3.1\" fill=\"#24383e\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"5.207\" cy=\"9.652000000000001\" r=\"1.8599999999999999\" fill=\"#1b3039\"/><circle cx=\"5.207\" cy=\"-15.747999999999998\" r=\"3.1\" fill=\"#24383e\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"5.207\" cy=\"-15.747999999999998\" r=\"1.8599999999999999\" fill=\"#1b3039\"/><rect x=\"19.050000\" y=\"9.398000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"22.86\" cy=\"14.986\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"22.86\" cy=\"11.43\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><rect x=\"19.050000\" y=\"-17.018000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"22.86\" cy=\"-11.43\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"22.86\" cy=\"-14.986\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><rect x=\"-14.097000\" y=\"-17.018000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"-8.509\" cy=\"-13.208\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-12.065\" cy=\"-13.208\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/>",
    "backArtwork": "<rect x=\"-11.922\" y=\"14.351\" width=\"10.128\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - I2C Motor Driver (TB6612FNG).brd",
      "boardSha256": "90db58bf683e43ea5492a137565fbe22965401ba7314f7981445506d465f9e93",
      "sourceBounds": [
        -32.1,
        -22.1,
        32.1,
        22.100000000000005
      ],
      "selectedConnectors": [
        "J7",
        "SDA2",
        "SDA4",
        "SDA3",
        "J5",
        "GND1",
        "VCC2",
        "SDA1",
        "SCL1",
        "J2",
        "J6",
        "J8",
        "J1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/108020103/extracted/Grove - I2C Motor Driver (TB6612FNG).sch",
      "pinOverrides": [
        {
          "number": "J7.2",
          "before": {
            "label": "PA14/SWCLK",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA14/SWCLK."
          },
          "after": {
            "label": "SWCLK",
            "type": "input",
            "description": "STM32 SWD clock input. Physical source terminal J7.2. CAD net: PA14/SWCLK."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "PA14/SWCLK",
            "label": "PA14/SWCLK",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "PA14/SWCLK",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "PA14/SWCLK",
                "hops": [],
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
          "number": "J7.3",
          "before": {
            "label": "!RST",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RST."
          },
          "after": {
            "label": "RESET",
            "type": "input",
            "description": "STM32 active-low reset input. Physical source terminal J7.3. CAD net: !RST."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "!RST",
            "label": "!RST",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "NRST",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "!RST",
                  "3V3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "!RST",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "NRST",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "3V3",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "!RST",
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
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "SDA3",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA9/SCL",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "!RST",
                    "to": "3V3"
                  },
                  {
                    "part": "R9",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA9/SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA9/I2C_SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA10/SDA",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "!RST",
                    "to": "3V3"
                  },
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA10/SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA10/I2C_SDA",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.6",
          "before": {
            "label": "BOOT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: BOOT."
          },
          "after": {
            "label": "BOOT0",
            "type": "input",
            "description": "STM32 BOOT0 programming strap via R21=1 kOhm. Physical source terminal J7.6. CAD net: BOOT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "BOOT",
            "label": "BOOT",
            "type": "passive",
            "endpoints": [
              {
                "part": "R21",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R21",
                "1K",
                [
                  "BOOT",
                  "N$26"
                ]
              ]
            ],
            "paths": [
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R21",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$26"
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
                    "part": "R21",
                    "value": "1K",
                    "from": "BOOT",
                    "to": "N$26"
                  },
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "N$26",
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
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.4",
          "before": {
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard AP7333 3.3 V regulator output. Physical source terminal J7.4. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VDDA",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C11",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VOUT",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q4",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "Q5",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "!RST",
                  "3V3"
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
                "C12",
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
                "C5",
                "10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "Q4",
                "2N7002",
                [
                  "3V3",
                  "PA10/SDA",
                  "SDA"
                ]
              ],
              [
                "Q5",
                "2N7002",
                [
                  "3V3",
                  "PA9/SCL",
                  "SCL"
                ]
              ],
              [
                "R9",
                "4.7K",
                [
                  "3V3",
                  "PA9/SCL"
                ]
              ],
              [
                "R4",
                "4.7K",
                [
                  "3V3",
                  "PA10/SDA"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
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
                    "part": "U2",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "SDA3",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "!RST",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "3V3",
                    "to": "!RST"
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
                "net": "PA9/SCL",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA9/SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA9/I2C_SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA10/SDA",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA10/SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA10/I2C_SDA",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.5",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J7.5. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "SDA2.T",
          "before": {
            "label": "PA2/TX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA2/TX."
          },
          "after": {
            "label": "TX",
            "type": "output",
            "description": "STM32 USART transmit service pad. Physical source terminal SDA2.T. CAD net: PA2/TX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "PA2/TX",
            "label": "PA2/TX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "PA2/USART_TX",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "PA2/TX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA2/USART_TX",
                    "direction": "io"
                  },
                  {
                    "part": "SDA2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "SDA4.T",
          "before": {
            "label": "PA3/RX",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: PA3/RX."
          },
          "after": {
            "label": "RX",
            "type": "input",
            "description": "STM32 USART receive service pad. Physical source terminal SDA4.T. CAD net: PA3/RX."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "PA3/RX",
            "label": "PA3/RX",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U2",
                "pin": "PA3/USART_RX",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "PA3/RX",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA3/USART_RX",
                    "direction": "io"
                  },
                  {
                    "part": "SDA4",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "SDA3.T",
          "before": {
            "label": "3V3",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 3V3."
          },
          "after": {
            "label": "3V3",
            "type": "power_out",
            "description": "Onboard AP7333 3.3 V regulator output. Physical source terminal SDA3.T. CAD net: 3V3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "3V3",
            "label": "3V3",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U2",
                "pin": "VDDA",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C11",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "VOUT",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C5",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "Q4",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "Q5",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "VCC",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "R5",
                "10K",
                [
                  "!RST",
                  "3V3"
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
                "C12",
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
                "C5",
                "10uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "Q4",
                "2N7002",
                [
                  "3V3",
                  "PA10/SDA",
                  "SDA"
                ]
              ],
              [
                "Q5",
                "2N7002",
                [
                  "3V3",
                  "PA9/SCL",
                  "SCL"
                ]
              ],
              [
                "R9",
                "4.7K",
                [
                  "3V3",
                  "PA9/SCL"
                ]
              ],
              [
                "R4",
                "4.7K",
                [
                  "3V3",
                  "PA10/SDA"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
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
                    "part": "U2",
                    "pin": "VDDA",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VOUT",
                    "direction": "io"
                  },
                  {
                    "part": "SDA3",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VCC",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "!RST",
                "hops": [
                  {
                    "part": "R5",
                    "value": "10K",
                    "from": "3V3",
                    "to": "!RST"
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
                "net": "PA9/SCL",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA9/SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA9/I2C_SCL",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "PA10/SDA",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K",
                    "from": "3V3",
                    "to": "PA10/SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "PA10/I2C_SDA",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.1",
          "before": {
            "label": "SCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J5.1. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q5",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R25",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q5",
                "2N7002",
                [
                  "3V3",
                  "PA9/SCL",
                  "SCL"
                ]
              ],
              [
                "R25",
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
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
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
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VIN",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "VIN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "VM1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM3",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.2",
          "before": {
            "label": "SDA",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J5.2. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q4",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R24",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q4",
                "2N7002",
                [
                  "3V3",
                  "PA10/SDA",
                  "SDA"
                ]
              ],
              [
                "R24",
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
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
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
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VIN",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "VIN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "VM1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM3",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J5.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.SS1",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J5.SS1. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.SS2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J5.SS2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "GND1.T",
          "before": {
            "label": "SCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal GND1.T. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q5",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R25",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q5",
                "2N7002",
                [
                  "3V3",
                  "PA9/SCL",
                  "SCL"
                ]
              ],
              [
                "R25",
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
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
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
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VIN",
                "hops": [
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "VIN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "VM1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM3",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "VCC2.T",
          "before": {
            "label": "SDA",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal VCC2.T. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q4",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "R24",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q4",
                "2N7002",
                [
                  "3V3",
                  "PA10/SDA",
                  "SDA"
                ]
              ],
              [
                "R24",
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
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
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
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R25",
                    "value": "4.7K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VIN",
                "hops": [
                  {
                    "part": "R24",
                    "value": "4.7K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R3",
                    "value": "DNP",
                    "from": "VCC",
                    "to": "VIN"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "VM1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM3",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "VM2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "SCL1.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal SCL1.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
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
            "label": "AO2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AO2."
          },
          "after": {
            "label": "AO2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.1. CAD net: AO2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "AO2",
            "label": "AO2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "AO2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "AO2@1",
                "direction": "io"
              },
              {
                "part": "D4",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D4",
                "LL4148",
                [
                  "AO2",
                  "VIN"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AO2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "AO2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "AO2@1",
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
            "label": "AO1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AO1."
          },
          "after": {
            "label": "AO1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.2. CAD net: AO1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "AO1",
            "label": "AO1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "AO1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "AO1",
                "direction": "io"
              },
              {
                "part": "D3",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D3",
                "LL4148",
                [
                  "AO1",
                  "VIN"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AO1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "AO1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "AO1",
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
            "label": "BO2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BO2."
          },
          "after": {
            "label": "BO2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.3. CAD net: BO2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "BO2",
            "label": "BO2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "BO2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "BO2@2",
                "direction": "io"
              },
              {
                "part": "D5",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D5",
                "LL4148",
                [
                  "BO2",
                  "VIN"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BO2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "BO2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "BO2@2",
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
            "label": "BO1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BO1."
          },
          "after": {
            "label": "BO1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J2.4. CAD net: BO1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "BO1",
            "label": "BO1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "BO1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "BO1@1",
                "direction": "io"
              },
              {
                "part": "D6",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D6",
                "LL4148",
                [
                  "BO1",
                  "VIN"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BO1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "BO1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "BO1@1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.1",
          "before": {
            "label": "AO2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AO2."
          },
          "after": {
            "label": "AO2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J6.1. CAD net: AO2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "AO2",
            "label": "AO2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "AO2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "AO2@1",
                "direction": "io"
              },
              {
                "part": "D4",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D4",
                "LL4148",
                [
                  "AO2",
                  "VIN"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AO2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "AO2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "AO2@1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.2",
          "before": {
            "label": "AO1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AO1."
          },
          "after": {
            "label": "AO1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J6.2. CAD net: AO1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "AO1",
            "label": "AO1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "AO1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "AO1",
                "direction": "io"
              },
              {
                "part": "D3",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D3",
                "LL4148",
                [
                  "AO1",
                  "VIN"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "AO1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "AO1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "AO1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.1",
          "before": {
            "label": "BO2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BO2."
          },
          "after": {
            "label": "BO2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J8.1. CAD net: BO2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "BO2",
            "label": "BO2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "BO2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "BO2@2",
                "direction": "io"
              },
              {
                "part": "D5",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D5",
                "LL4148",
                [
                  "BO2",
                  "VIN"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BO2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "BO2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "BO2@2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.2",
          "before": {
            "label": "BO1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BO1."
          },
          "after": {
            "label": "BO1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J8.2. CAD net: BO1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "BO1",
            "label": "BO1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U13",
                "pin": "BO1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "BO1@1",
                "direction": "io"
              },
              {
                "part": "D6",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D6",
                "LL4148",
                [
                  "BO1",
                  "VIN"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ]
            ],
            "paths": [
              {
                "net": "BO1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U13",
                    "pin": "BO1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "BO1@1",
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
            "label": "DC_IN",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC_IN."
          },
          "after": {
            "label": "VMOTOR",
            "type": "power_in",
            "description": "External motor-current power input through D2 to the driver VIN rail. Physical source terminal J1.1. CAD net: DC_IN."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "DC_IN",
            "label": "DC_IN",
            "type": "passive",
            "endpoints": [
              {
                "part": "D2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "G",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "Q9",
                "pin": "G",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D2",
                "MBRS360BT3G",
                [
                  "DC_IN",
                  "VIN"
                ]
              ],
              [
                "Q8",
                "DNP/CJ3407",
                [
                  "DC_IN",
                  "N$1",
                  "VCC"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "Q9",
                "DNP/CJ3407",
                [
                  "DC_IN",
                  "N$1",
                  "VIN"
                ]
              ]
            ],
            "paths": [
              {
                "net": "GND",
                "hops": [
                  {
                    "part": "R26",
                    "value": "DNP/10K",
                    "from": "DC_IN",
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
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R26",
                    "value": "DNP/10K",
                    "from": "DC_IN",
                    "to": "GND"
                  },
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
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
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J1.2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
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
                "pin": "VSS",
                "direction": "io"
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
                "part": "C13",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C17",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "PGND1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND1@1",
                "direction": "io"
              },
              {
                "part": "U13",
                "pin": "PGND2@1",
                "direction": "io"
              },
              {
                "part": "C4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C20",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C15",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C16",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U13",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C19",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D10",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "10K",
                [
                  "GND",
                  "N$26"
                ]
              ],
              [
                "C1",
                "1uF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "!RST",
                  "GND"
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
                "C12",
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
                "C6",
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
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C13",
                "10uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C17",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R26",
                "DNP/10K",
                [
                  "DC_IN",
                  "GND"
                ]
              ],
              [
                "C4",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C8",
                "22uF/25V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C20",
                "220uF/16V",
                [
                  "GND",
                  "VIN"
                ]
              ],
              [
                "C15",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C7",
                "22uF/25V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C16",
                "100nF",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "C19",
                "220uF/16V",
                [
                  "3V3",
                  "GND"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "BO1",
                  "GND"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "BO2",
                  "GND"
                ]
              ],
              [
                "D9",
                "LL4148",
                [
                  "AO2",
                  "GND"
                ]
              ],
              [
                "D10",
                "LL4148",
                [
                  "AO1",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND1@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "PGND2@1",
                    "direction": "io"
                  },
                  {
                    "part": "U13",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$26",
                "hops": [
                  {
                    "part": "R20",
                    "value": "10K",
                    "from": "GND",
                    "to": "N$26"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U2",
                    "pin": "BOOT0",
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
          "number": "J7.1",
          "net": "PA13/SWIO",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA13/SWIO",
              "direction": "io"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.2",
          "net": "PA14/SWCLK",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA14/SWCLK",
              "direction": "io"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.3",
          "net": "!RST",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "NRST",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.6",
          "net": "BOOT",
          "connectedPins": [
            {
              "part": "R21",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.7",
          "net": "PA9/SCL",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA9/I2C_SCL",
              "direction": "io"
            },
            {
              "part": "Q5",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.8",
          "net": "PA10/SDA",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA10/I2C_SDA",
              "direction": "io"
            },
            {
              "part": "Q4",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.4",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VDDA",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "Q5",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "J7.5",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "H2X4-SMD-2.54",
          "sourceLayer": "1"
        },
        {
          "number": "SDA2.T",
          "net": "PA2/TX",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA2/USART_TX",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "SDA4.T",
          "net": "PA3/RX",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "PA3/USART_RX",
              "direction": "io"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "SDA3.T",
          "net": "3V3",
          "connectedPins": [
            {
              "part": "U2",
              "pin": "VDDA",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VOUT",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C5",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "Q5",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J5.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "Q5",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R25",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J5.2",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "Q4",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R24",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J5.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R24",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "S",
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
          "number": "J5.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J5.SS1",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J5.SS2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "GND1.T",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "Q5",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R25",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "VCC2.T",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "Q4",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "R24",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "SDA1.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VIN",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C13",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R24",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "S",
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
          "number": "SCL1.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": "AO2",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "AO2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "AO2@1",
              "direction": "io"
            },
            {
              "part": "D4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "H4-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.2",
          "net": "AO1",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "AO1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "AO1",
              "direction": "io"
            },
            {
              "part": "D3",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "H4-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.3",
          "net": "BO2",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "BO2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "BO2@2",
              "direction": "io"
            },
            {
              "part": "D5",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "H4-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.4",
          "net": "BO1",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "BO1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "BO1@1",
              "direction": "io"
            },
            {
              "part": "D6",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "H4-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.1",
          "net": "AO2",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "AO2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "AO2@1",
              "direction": "io"
            },
            {
              "part": "D4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.2",
          "net": "AO1",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "AO1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "AO1",
              "direction": "io"
            },
            {
              "part": "D3",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.1",
          "net": "BO2",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "BO2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "BO2@2",
              "direction": "io"
            },
            {
              "part": "D5",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.2",
          "net": "BO1",
          "connectedPins": [
            {
              "part": "U13",
              "pin": "BO1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "BO1@1",
              "direction": "io"
            },
            {
              "part": "D6",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.1",
          "net": "DC_IN",
          "connectedPins": [
            {
              "part": "D2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q9",
              "pin": "G",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
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
              "pin": "VSS",
              "direction": "io"
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
              "part": "C13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C17",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "PGND1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND1@1",
              "direction": "io"
            },
            {
              "part": "U13",
              "pin": "PGND2@1",
              "direction": "io"
            },
            {
              "part": "C4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C20",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C15",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C16",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U13",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C19",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D10",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "3f7f8b3d60e1e56e1794c59b90c66efb949dab5049c171899a31a06b93bd1b27",
      "completePortInventory": [
        "J7",
        "SDA2",
        "SDA4",
        "SDA3",
        "J5",
        "GND1",
        "VCC2",
        "SDA1",
        "SCL1",
        "J2",
        "J6",
        "J8",
        "J1"
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
      "sourceArchiveSha256": "6157f8f9e504fd7ae865b70a6edb0c13a3e94a997cc632880bf809307f405797",
      "sourceWikiSha256": "ea918ed2e0f7d123fe342aa5f03603abf6c89b9c239a44a981f777cb0ac0fee2",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Primary XML board/schematic pair and exact positive official offer verified; contact roles, complete selection and artwork still need module review.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg",
        "sha256": "d23530dabb1069e7ad0d2ae6829e7ff11eb2cb0c4c1665f4c3200eefed163963"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.0"
      ]
    }
  },
  "seeed-module-105020001": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J1.1. CAD net: OUT1.",
        "x": -22.86,
        "y": 14.478,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "OUT2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J1.2. CAD net: OUT2.",
        "x": -22.86,
        "y": 10.922,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "OUT3",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J5.1. CAD net: OUT3.",
        "x": -22.86,
        "y": -10.922,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "OUT4",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J5.2. CAD net: OUT4.",
        "x": -22.86,
        "y": -14.478,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "OUT1",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.1. CAD net: OUT1.",
        "x": -28.194,
        "y": 3.81,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "OUT2",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.2. CAD net: OUT2.",
        "x": -28.194,
        "y": 1.27,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "OUT3",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.3. CAD net: OUT3.",
        "x": -28.194,
        "y": -1.27,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "OUT4",
        "type": "output",
        "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.4. CAD net: OUT4.",
        "x": -28.194,
        "y": -3.81,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "GROVE VCC",
        "type": "power_in",
        "description": "Grove logic-supply contact; J4 may bridge it to the onboard 5 V regulator. Keep motor power and logic-power source selection separate. Physical source terminal J4.1. CAD net: N$2.",
        "x": 25.4,
        "y": -7.239,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "5V REG",
        "type": "power_out",
        "description": "Onboard 78M05 regulated 5 V rail for MCU and ISP; J4 can bridge it to Grove VCC. Physical source terminal J4.2. CAD net: VCC.",
        "x": 22.86,
        "y": -7.239,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "VMOTOR",
        "type": "power_in",
        "description": "External motor supply through polarity-protection diode D9. Physical source terminal J6.1. CAD net: N$12.",
        "x": 22.733,
        "y": -14.732,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J6.2. CAD net: GND.",
        "x": 22.733,
        "y": -11.176,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "MISO",
        "type": "output",
        "description": "ATmega8 SPI ISP data output. Physical source terminal J2.1. CAD net: MISO.",
        "x": 23.368,
        "y": 11.811,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SCK",
        "type": "input",
        "description": "ATmega8 SPI ISP clock input. Physical source terminal J2.2. CAD net: SCK.",
        "x": 23.368,
        "y": 14.351,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "RESET",
        "type": "input",
        "description": "ATmega8 active-low reset for ISP. Physical source terminal J2.3. CAD net: RST.",
        "x": 23.368,
        "y": 16.891,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": 25.908,
        "y": 16.891,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "MOSI",
        "type": "input",
        "description": "ATmega8 SPI ISP data input. Physical source terminal J2.5. CAD net: MOSI.",
        "x": 25.908,
        "y": 14.351,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "5V REG",
        "type": "power_out",
        "description": "Onboard 78M05 regulated 5 V rail for MCU and ISP; J4 can bridge it to Grove VCC. Physical source terminal J2.6. CAD net: VCC.",
        "x": 25.908,
        "y": 11.811,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "i2c-1",
        "number": "I2C.1",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal I2C.1. CAD net: SCL.",
        "x": 24.13,
        "y": 2.746,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "I2C",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "i2c-2",
        "number": "I2C.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal I2C.2. CAD net: SDA.",
        "x": 24.13,
        "y": 0.746,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "I2C",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "i2c-3",
        "number": "I2C.3",
        "label": "GROVE VCC",
        "type": "power_in",
        "description": "Grove logic-supply contact; J4 may bridge it to the onboard 5 V regulator. Keep motor power and logic-power source selection separate. Physical source terminal I2C.3. CAD net: N$2.",
        "x": 24.13,
        "y": -1.254,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "I2C",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "i2c-4",
        "number": "I2C.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal I2C.4. CAD net: GND.",
        "x": 24.13,
        "y": -3.254,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "I2C",
        "back": false,
        "drill": 0.8
      }
    ],
    "artwork": "<rect x=\"-18.7452\" y=\"-5.461\" width=\"15.9004\" height=\"10.922\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.143\" y=\"9.906\" width=\"11.684\" height=\"6.858\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.67\" y=\"8.89\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.67\" y=\"-16.51\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.923\" y=\"-16.764\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.93\" y=\"-5.254\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.861\" y=\"-2.997\" width=\"7.01\" height=\"7.01\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.461\" y=\"-17.882\" width=\"7.2644\" height=\"6.5544\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"22.098\" y=\"10.541\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.464\" y=\"-5.08\" width=\"2.54\" height=\"10.16\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"9.5885\" width=\"3.302\" height=\"7.493\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4135\" y=\"-17.399\" width=\"7.493\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.113\" y=\"10.414\" width=\"3.81\" height=\"6.096\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.875\" y=\"-17.399\" width=\"2.54\" height=\"6.35\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.58\" y=\"-9.601\" width=\"5.0\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.59\" y=\"-8.509\" width=\"5.08\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.3655\" y=\"-13.716\" width=\"4.445\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.081\" y=\"5.715\" width=\"2.54\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.414\" y=\"9.779\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"-16.129\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"8.636\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"16.256\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"13.716\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"11.176\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"-18.669\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"-13.589\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.383\" y=\"-11.049\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.383\" y=\"5.842\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.255\" y=\"-11.938\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"9.652\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.905\" y=\"9.652\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.255\" y=\"-6.096\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.699\" y=\"6.096\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"-11.938\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.16\" y=\"-11.938\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.971\" y=\"8.001\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.844\" y=\"6.096\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.255\" y=\"-15.9385\" width=\"1.27\" height=\"2.667\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.0825\" y=\"8.001\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.0825\" y=\"6.096\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"13.9065\" width=\"1.27\" height=\"2.667\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.16\" y=\"-15.9385\" width=\"1.27\" height=\"2.667\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.905\" y=\"13.9065\" width=\"1.27\" height=\"2.667\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.2245\" y=\"5.969\" width=\"1.143\" height=\"2.54\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.286\" y=\"-6.0325\" width=\"2.54\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-6.0325\" width=\"2.54\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.670000\" y=\"8.890000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"-22.86\" cy=\"14.478\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-22.86\" cy=\"10.922\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><rect x=\"-26.670000\" y=\"-16.510000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"-22.86\" cy=\"-10.922\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"-22.86\" cy=\"-14.478\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><rect x=\"18.923000\" y=\"-16.764000\" width=\"7.620000\" height=\"7.620000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"22.733\" cy=\"-14.732\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"22.733\" cy=\"-11.176\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Grove - I2C Motor Driver  v1.3b.brd",
      "boardSha256": "1e2d189f4cfdef2a9f95e9cb3452c6d1a10f4841e4a936fd085d2377c37eea41",
      "sourceBounds": [
        -32.1,
        -22.1,
        32.1,
        22.100000000000005
      ],
      "selectedConnectors": [
        "J1",
        "J5",
        "J3",
        "J4",
        "J6",
        "J2",
        "I2C"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/105020001/extracted/Grove - I2C Motor Driver v1.3 Eagle File/Grove - I2C Motor Driver  v1.3b.sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "OUT1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT1."
          },
          "after": {
            "label": "OUT1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J1.1. CAD net: OUT1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT1",
            "label": "OUT1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D1",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D1",
                "LL4148",
                [
                  "12V",
                  "OUT1"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "GND",
                  "OUT1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT1",
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
            "label": "OUT2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT2."
          },
          "after": {
            "label": "OUT2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J1.2. CAD net: OUT2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT2",
            "label": "OUT2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "OUT2",
                "direction": "io"
              },
              {
                "part": "D2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D2",
                "LL4148",
                [
                  "12V",
                  "OUT2"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "GND",
                  "OUT2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.1",
          "before": {
            "label": "OUT3",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT3."
          },
          "after": {
            "label": "OUT3",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J5.1. CAD net: OUT3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT3",
            "label": "OUT3",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D3",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT3",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D3",
                "LL4148",
                [
                  "12V",
                  "OUT3"
                ]
              ],
              [
                "D6",
                "LL4148",
                [
                  "GND",
                  "OUT3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J5.2",
          "before": {
            "label": "OUT4",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT4."
          },
          "after": {
            "label": "OUT4",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J5.2. CAD net: OUT4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT4",
            "label": "OUT4",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D4",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D5",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D4",
                "LL4148",
                [
                  "12V",
                  "OUT4"
                ]
              ],
              [
                "D5",
                "LL4148",
                [
                  "GND",
                  "OUT4"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT4",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT4",
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
            "label": "OUT1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT1."
          },
          "after": {
            "label": "OUT1",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.1. CAD net: OUT1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT1",
            "label": "OUT1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D1",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT1",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D1",
                "LL4148",
                [
                  "12V",
                  "OUT1"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "GND",
                  "OUT1"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT1",
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
            "label": "OUT2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT2."
          },
          "after": {
            "label": "OUT2",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.2. CAD net: OUT2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT2",
            "label": "OUT2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "OUT2",
                "direction": "io"
              },
              {
                "part": "D2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D2",
                "LL4148",
                [
                  "12V",
                  "OUT2"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "GND",
                  "OUT2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT2",
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
            "label": "OUT3",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT3."
          },
          "after": {
            "label": "OUT3",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.3. CAD net: OUT3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT3",
            "label": "OUT3",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D3",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D6",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT3",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D3",
                "LL4148",
                [
                  "12V",
                  "OUT3"
                ]
              ],
              [
                "D6",
                "LL4148",
                [
                  "GND",
                  "OUT3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT3",
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
            "label": "OUT4",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: OUT4."
          },
          "after": {
            "label": "OUT4",
            "type": "output",
            "description": "Bridge motor-driver output; either output can drive current in either direction. Not a logic GPIO or ground. Physical source terminal J3.4. CAD net: OUT4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "OUT4",
            "label": "OUT4",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "D4",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D5",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "OUT4",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "D4",
                "LL4148",
                [
                  "12V",
                  "OUT4"
                ]
              ],
              [
                "D5",
                "LL4148",
                [
                  "GND",
                  "OUT4"
                ]
              ]
            ],
            "paths": [
              {
                "net": "OUT4",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "OUT4",
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
            "label": "N$2",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: N$2."
          },
          "after": {
            "label": "GROVE VCC",
            "type": "power_in",
            "description": "Grove logic-supply contact; J4 may bridge it to the onboard 5 V regulator. Keep motor power and logic-power source selection separate. Physical source terminal J4.1. CAD net: N$2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "N$2",
            "label": "N$2",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "N$2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "I2C",
                    "pin": "3",
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
            "label": "VCC",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC."
          },
          "after": {
            "label": "5V REG",
            "type": "power_out",
            "description": "Onboard 78M05 regulated 5 V rail for MCU and ISP; J4 can bridge it to Grove VCC. Physical source terminal J4.2. CAD net: VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "VCC",
            "label": "VCC",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "POWER",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "RST",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "AVCC",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "VCC@1",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "VCC@2",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "OUT",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R10",
                "10K",
                [
                  "RST",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "C2",
                "16V_22uF",
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
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "100nF",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "POWER",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "RST",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "IC1",
                    "pin": "AVCC",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@2",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RST",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K",
                    "from": "VCC",
                    "to": "RST"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "PC6(/RESET)",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$10",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K",
                    "from": "VCC",
                    "to": "RST"
                  },
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "RST",
                    "to": "N$10"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RST",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.1",
          "before": {
            "label": "+",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$12."
          },
          "after": {
            "label": "VMOTOR",
            "type": "power_in",
            "description": "External motor supply through polarity-protection diode D9. Physical source terminal J6.1. CAD net: N$12."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "N$12",
            "label": "+",
            "type": "passive",
            "endpoints": [
              {
                "part": "D9",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "D9",
                "IN4007",
                [
                  "12V",
                  "N$12"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J6.2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J6.2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "D5",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D6",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@11",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@20",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_B",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_A",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@10",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "RESET",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@2",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "IN1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "3",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
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
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "1k",
                [
                  "GND",
                  "N$3"
                ]
              ],
              [
                "D5",
                "LL4148",
                [
                  "GND",
                  "OUT4"
                ]
              ],
              [
                "D6",
                "LL4148",
                [
                  "GND",
                  "OUT3"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "GND",
                  "OUT2"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "GND",
                  "OUT1"
                ]
              ],
              [
                "C9",
                "DNP",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C6",
                "DNP",
                [
                  "GND",
                  "N$8"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "RST"
                ]
              ],
              [
                "C1",
                "22uF_25V",
                [
                  "12V",
                  "GND"
                ]
              ],
              [
                "C2",
                "16V_22uF",
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
                "C4",
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
                  "12V",
                  "GND"
                ]
              ],
              [
                "C7",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C8",
                "22uF_25V",
                [
                  "12V",
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
                    "pin": "GND@11",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@20",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_B",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@10",
                    "direction": "io"
                  },
                  {
                    "part": "I2C",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "IN1",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN4",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN3",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN2",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "SW1",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
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
                "net": "N$3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1k",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "POWER",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.1",
          "before": {
            "label": "MISO",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO."
          },
          "after": {
            "label": "MISO",
            "type": "output",
            "description": "ATmega8 SPI ISP data output. Physical source terminal J2.1. CAD net: MISO."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "MISO",
            "label": "MISO",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "IC1",
                "pin": "PB4(MISO)",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "MISO",
                "hops": [],
                "endpoints": [
                  {
                    "part": "IC1",
                    "pin": "PB4(MISO)",
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
            "label": "SCK",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK."
          },
          "after": {
            "label": "SCK",
            "type": "input",
            "description": "ATmega8 SPI ISP clock input. Physical source terminal J2.2. CAD net: SCK."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "SCK",
            "label": "SCK",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "IC1",
                "pin": "PB5(SCK)",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SCK",
                "hops": [],
                "endpoints": [
                  {
                    "part": "IC1",
                    "pin": "PB5(SCK)",
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
            "label": "RST",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RST."
          },
          "after": {
            "label": "RESET",
            "type": "input",
            "description": "ATmega8 active-low reset for ISP. Physical source terminal J2.3. CAD net: RST."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "RST",
            "label": "RST",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "R9",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "RESET",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "R10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "PC6(/RESET)",
                "direction": "io"
              }
            ],
            "neighbors": [
              [
                "R9",
                "1k",
                [
                  "N$10",
                  "RST"
                ]
              ],
              [
                "R10",
                "10K",
                [
                  "RST",
                  "VCC"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "RST"
                ]
              ]
            ],
            "paths": [
              {
                "net": "RST",
                "hops": [],
                "endpoints": [
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "PC6(/RESET)",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$10",
                "hops": [
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "RST",
                    "to": "N$10"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RST",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K",
                    "from": "RST",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "POWER",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "RST",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "IC1",
                    "pin": "AVCC",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@2",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "OUT",
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
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "D5",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D6",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@11",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@20",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_B",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_A",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@10",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "RESET",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@2",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "IN1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "3",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
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
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "1k",
                [
                  "GND",
                  "N$3"
                ]
              ],
              [
                "D5",
                "LL4148",
                [
                  "GND",
                  "OUT4"
                ]
              ],
              [
                "D6",
                "LL4148",
                [
                  "GND",
                  "OUT3"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "GND",
                  "OUT2"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "GND",
                  "OUT1"
                ]
              ],
              [
                "C9",
                "DNP",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C6",
                "DNP",
                [
                  "GND",
                  "N$8"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "RST"
                ]
              ],
              [
                "C1",
                "22uF_25V",
                [
                  "12V",
                  "GND"
                ]
              ],
              [
                "C2",
                "16V_22uF",
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
                "C4",
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
                  "12V",
                  "GND"
                ]
              ],
              [
                "C7",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C8",
                "22uF_25V",
                [
                  "12V",
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
                    "pin": "GND@11",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@20",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_B",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@10",
                    "direction": "io"
                  },
                  {
                    "part": "I2C",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "IN1",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN4",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN3",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN2",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "SW1",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
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
                "net": "N$3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1k",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "POWER",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J2.5",
          "before": {
            "label": "MOSI",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI."
          },
          "after": {
            "label": "MOSI",
            "type": "input",
            "description": "ATmega8 SPI ISP data input. Physical source terminal J2.5. CAD net: MOSI."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "MOSI",
            "label": "MOSI",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "IC1",
                "pin": "PB3(MOSI/OC2)",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "MOSI",
                "hops": [],
                "endpoints": [
                  {
                    "part": "IC1",
                    "pin": "PB3(MOSI/OC2)",
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
            "label": "VCC",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC."
          },
          "after": {
            "label": "5V REG",
            "type": "power_out",
            "description": "Onboard 78M05 regulated 5 V rail for MCU and ISP; J4 can bridge it to Grove VCC. Physical source terminal J2.6. CAD net: VCC."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "VCC",
            "label": "VCC",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U1",
                "pin": "VSS",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "POWER",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "RST",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "AVCC",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "VCC@1",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "VCC@2",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R2",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U2",
                "pin": "OUT",
                "direction": "io"
              },
              {
                "part": "C2",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R10",
                "10K",
                [
                  "RST",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "R2",
                "DNP",
                [
                  "N$11",
                  "N$4",
                  "N$5",
                  "N$7",
                  "VCC"
                ]
              ],
              [
                "C2",
                "16V_22uF",
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
                "C4",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C7",
                "100nF",
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
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "POWER",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "RST",
                    "pin": "+",
                    "direction": "pas"
                  },
                  {
                    "part": "IC1",
                    "pin": "AVCC",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "VCC@2",
                    "direction": "io"
                  },
                  {
                    "part": "U2",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "RST",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K",
                    "from": "VCC",
                    "to": "RST"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RESET",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "PC6(/RESET)",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$10",
                "hops": [
                  {
                    "part": "R10",
                    "value": "10K",
                    "from": "VCC",
                    "to": "RST"
                  },
                  {
                    "part": "R9",
                    "value": "1k",
                    "from": "RST",
                    "to": "N$10"
                  }
                ],
                "endpoints": [
                  {
                    "part": "RST",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "I2C.1",
          "before": {
            "label": "SCL",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal I2C.1. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "IC1",
                "pin": "PC5(ADC5/SCL)",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SCL",
                "hops": [],
                "endpoints": [
                  {
                    "part": "I2C",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "PC5(ADC5/SCL)",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "I2C.2",
          "before": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal I2C.2. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "IC1",
                "pin": "PC4(ADC4/SDA)",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "SDA",
                "hops": [],
                "endpoints": [
                  {
                    "part": "I2C",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "PC4(ADC4/SDA)",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "I2C.3",
          "before": {
            "label": "N$2",
            "type": "unspecified",
            "description": "Electrical role requires independent pinout review. CAD net: N$2."
          },
          "after": {
            "label": "GROVE VCC",
            "type": "power_in",
            "description": "Grove logic-supply contact; J4 may bridge it to the onboard 5 V regulator. Keep motor power and logic-power source selection separate. Physical source terminal I2C.3. CAD net: N$2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "N$2",
            "label": "N$2",
            "type": "unspecified",
            "endpoints": [],
            "neighbors": [],
            "paths": [
              {
                "net": "N$2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "I2C",
                    "pin": "3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "I2C.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal I2C.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",
          "sourceNetEvidence": {
            "net": "GND",
            "label": "GND",
            "type": "power_in",
            "endpoints": [
              {
                "part": "D5",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D6",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D7",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D8",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@11",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "U1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@20",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_B",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "SENSE_A",
                "direction": "io"
              },
              {
                "part": "U1",
                "pin": "GND@10",
                "direction": "io"
              },
              {
                "part": "R1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "RESET",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C10",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "IC1",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@2",
                "direction": "io"
              },
              {
                "part": "IC1",
                "pin": "GND@1",
                "direction": "io"
              },
              {
                "part": "IN1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN4",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "IN2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "SW1",
                "pin": "1",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "2",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "3",
                "direction": "io"
              },
              {
                "part": "SW1",
                "pin": "4",
                "direction": "io"
              },
              {
                "part": "U2",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C1",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
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
                "part": "C5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "-",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R1",
                "1k",
                [
                  "GND",
                  "N$3"
                ]
              ],
              [
                "D5",
                "LL4148",
                [
                  "GND",
                  "OUT4"
                ]
              ],
              [
                "D6",
                "LL4148",
                [
                  "GND",
                  "OUT3"
                ]
              ],
              [
                "D7",
                "LL4148",
                [
                  "GND",
                  "OUT2"
                ]
              ],
              [
                "D8",
                "LL4148",
                [
                  "GND",
                  "OUT1"
                ]
              ],
              [
                "C9",
                "DNP",
                [
                  "GND",
                  "N$9"
                ]
              ],
              [
                "C6",
                "DNP",
                [
                  "GND",
                  "N$8"
                ]
              ],
              [
                "C10",
                "100nF",
                [
                  "GND",
                  "RST"
                ]
              ],
              [
                "C1",
                "22uF_25V",
                [
                  "12V",
                  "GND"
                ]
              ],
              [
                "C2",
                "16V_22uF",
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
                "C4",
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
                  "12V",
                  "GND"
                ]
              ],
              [
                "C7",
                "100nF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C8",
                "22uF_25V",
                [
                  "12V",
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
                    "pin": "GND@11",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@20",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_B",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "SENSE_A",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "GND@10",
                    "direction": "io"
                  },
                  {
                    "part": "I2C",
                    "pin": "4",
                    "direction": "io"
                  },
                  {
                    "part": "RESET",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@2",
                    "direction": "io"
                  },
                  {
                    "part": "IC1",
                    "pin": "GND@1",
                    "direction": "io"
                  },
                  {
                    "part": "IN1",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN4",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN3",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "IN2",
                    "pin": "-",
                    "direction": "pas"
                  },
                  {
                    "part": "SW1",
                    "pin": "1",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "2",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
                    "pin": "3",
                    "direction": "io"
                  },
                  {
                    "part": "SW1",
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
                "net": "N$3",
                "hops": [
                  {
                    "part": "R1",
                    "value": "1k",
                    "from": "GND",
                    "to": "N$3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "POWER",
                    "pin": "-",
                    "direction": "pas"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J4.1: unresolved electrical role on N$2.",
        "J4.1: autogenerated net N$2 requires printed/function label review.",
        "I2C.3: unresolved electrical role on N$2.",
        "I2C.3: autogenerated net N$2 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "OUT1",
          "connectedPins": [
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT1",
              "direction": "io"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J1.2",
          "net": "OUT2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "OUT2",
              "direction": "io"
            },
            {
              "part": "D2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J5.1",
          "net": "OUT3",
          "connectedPins": [
            {
              "part": "D3",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT3",
              "direction": "io"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J5.2",
          "net": "OUT4",
          "connectedPins": [
            {
              "part": "D4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D5",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT4",
              "direction": "io"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.1",
          "net": "OUT1",
          "connectedPins": [
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT1",
              "direction": "io"
            }
          ],
          "package": "CK_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.2",
          "net": "OUT2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "OUT2",
              "direction": "io"
            },
            {
              "part": "D2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CK_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.3",
          "net": "OUT3",
          "connectedPins": [
            {
              "part": "D3",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D6",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT3",
              "direction": "io"
            }
          ],
          "package": "CK_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.4",
          "net": "OUT4",
          "connectedPins": [
            {
              "part": "D4",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D5",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "OUT4",
              "direction": "io"
            }
          ],
          "package": "CK_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.1",
          "net": "N$2",
          "connectedPins": [],
          "package": "65*35",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.2",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "POWER",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "RST",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "AVCC",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "VCC@1",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "VCC@2",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "OUT",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "65*35",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.1",
          "net": "N$12",
          "connectedPins": [
            {
              "part": "D9",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "D5",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D6",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@11",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@20",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_B",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_A",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@10",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "RESET",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@2",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "IN1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "3",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
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
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "CON2",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.1",
          "net": "MISO",
          "connectedPins": [
            {
              "part": "IC1",
              "pin": "PB4(MISO)",
              "direction": "io"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.2",
          "net": "SCK",
          "connectedPins": [
            {
              "part": "IC1",
              "pin": "PB5(SCK)",
              "direction": "io"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.3",
          "net": "RST",
          "connectedPins": [
            {
              "part": "R9",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "RESET",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "R10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "PC6(/RESET)",
              "direction": "io"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "D5",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D6",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@11",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@20",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_B",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_A",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@10",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "RESET",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@2",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "IN1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "3",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
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
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.5",
          "net": "MOSI",
          "connectedPins": [
            {
              "part": "IC1",
              "pin": "PB3(MOSI/OC2)",
              "direction": "io"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.6",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "POWER",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "RST",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "AVCC",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "VCC@1",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "VCC@2",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "OUT",
              "direction": "io"
            },
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "2X3P-2.54-65/35MIL",
          "sourceLayer": "through-hole"
        },
        {
          "number": "I2C.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "IC1",
              "pin": "PC5(ADC5/SCL)",
              "direction": "io"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "I2C.2",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "IC1",
              "pin": "PC4(ADC4/SDA)",
              "direction": "io"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "I2C.3",
          "net": "N$2",
          "connectedPins": [],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        },
        {
          "number": "I2C.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "D5",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D6",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D7",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D8",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@11",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@20",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_B",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "SENSE_A",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "GND@10",
              "direction": "io"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "RESET",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C10",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@2",
              "direction": "io"
            },
            {
              "part": "IC1",
              "pin": "GND@1",
              "direction": "io"
            },
            {
              "part": "IN1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN4",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "IN2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "SW1",
              "pin": "1",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "2",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "3",
              "direction": "io"
            },
            {
              "part": "SW1",
              "pin": "4",
              "direction": "io"
            },
            {
              "part": "U2",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C1",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
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
              "part": "C5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "-",
              "direction": "pas"
            }
          ],
          "package": "2.0_1X4",
          "sourceLayer": "through-hole"
        }
      ],
      "sourceSchematicSha256": "f194381f0892be8a2a31871a4d93d363f00d06f293a975128d14ced5dd5233e9",
      "completePortInventory": [
        "J1",
        "J5",
        "J3",
        "J4",
        "J6",
        "J2",
        "I2C"
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
      "sourceArchiveSha256": "3fbfca1d1d0c5618c0dc73b762365c2dc1e25abf8defc93d6c3b1563b620b2f3",
      "sourceWikiSha256": "ce3eea531d0664d93448117d829a3916a43b58792a93d7c3b5694505b58c7e82",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Include named I2C connector (package 2.0_1X4), missed by preliminary selector. J4 bridges regulator 5 V to Grove logic. J2 is AVR ISP. Separate motor and logic power.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg",
        "sha256": "ee691d4748fd024bea359a46ab6fcd83e3d7988e78ff72c7217ce558e8c0780d"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": [
        "v1.3b"
      ]
    }
  },
  "seeed-module-108020102": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL.",
        "x": -20.474,
        "y": 3,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA.",
        "x": -20.474,
        "y": 1,
        "size": [
          2.74,
          1.01
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
        "x": -20.474,
        "y": -1,
        "size": [
          2.74,
          1.01
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
        "x": -20.474,
        "y": -3,
        "size": [
          2.74,
          1.01
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
        "x": -27.974,
        "y": 5.4,
        "size": [
          3,
          1.5
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
        "x": -27.974,
        "y": -5.4,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "gnd1-t",
        "number": "GND1.T",
        "label": "SCL",
        "type": "input",
        "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal GND1.T. CAD net: SCL.",
        "x": -23.495,
        "y": 3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND1",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc2-t",
        "number": "VCC2.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal VCC2.T. CAD net: SDA.",
        "x": -23.495,
        "y": 1.27,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC2",
        "back": true,
        "smd": true
      },
      {
        "id": "sda1-t",
        "number": "SDA1.T",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": -23.495,
        "y": -1.27,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA1",
        "back": true,
        "smd": true
      },
      {
        "id": "scl1-t",
        "number": "SCL1.T",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal SCL1.T. CAD net: GND.",
        "x": -23.495,
        "y": -3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL1",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "LED1",
        "type": "output",
        "description": "Driver LED1 through fitted R17=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J2.1. CAD net: N$15.",
        "x": 19.05,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J2.2. CAD net: DC5V_OUT.",
        "x": 19.05,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.3. CAD net: GND.",
        "x": 19.05,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J2.4. CAD net: GND.",
        "x": 21.59,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J2.5. CAD net: DC5V_OUT.",
        "x": 21.59,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "LED0",
        "type": "output",
        "description": "Driver LED0 through fitted R18=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J2.6. CAD net: N$17.",
        "x": 21.59,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "AD0",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP1.MM. CAD net: AD0.",
        "x": 7.62,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP1.00. CAD net: GND.",
        "x": 8.89,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "JP1 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP1.11. CAD net: N$1.",
        "x": 6.35,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-mm",
        "number": "JP2.MM",
        "label": "AD1",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP2.MM. CAD net: AD1.",
        "x": 0,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-00",
        "number": "JP2.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP2.00. CAD net: GND.",
        "x": 1.27,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "JP2 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP2.11. CAD net: N$4.",
        "x": -1.27,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-mm",
        "number": "JP3.MM",
        "label": "AD2",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP3.MM. CAD net: AD2.",
        "x": 7.62,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-00",
        "number": "JP3.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP3.00. CAD net: GND.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "JP3 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP3.11. CAD net: N$5.",
        "x": 6.35,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-mm",
        "number": "JP4.MM",
        "label": "AD3",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP4.MM. CAD net: AD3.",
        "x": -7.62,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-00",
        "number": "JP4.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP4.00. CAD net: GND.",
        "x": -6.35,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-11",
        "number": "JP4.11",
        "label": "JP4 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP4.11. CAD net: N$6.",
        "x": -8.89,
        "y": -7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp5-mm",
        "number": "JP5.MM",
        "label": "AD4",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP5.MM. CAD net: AD4.",
        "x": -7.62,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": true,
        "smd": true
      },
      {
        "id": "jp5-00",
        "number": "JP5.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP5.00. CAD net: GND.",
        "x": -6.35,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": true,
        "smd": true
      },
      {
        "id": "jp5-11",
        "number": "JP5.11",
        "label": "JP5 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP5.11. CAD net: N$7.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": true,
        "smd": true
      },
      {
        "id": "jp6-mm",
        "number": "JP6.MM",
        "label": "AD5",
        "type": "input",
        "description": "PCA9685 address-selection input. Physical source terminal JP6.MM. CAD net: AD5.",
        "x": 0,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": true,
        "smd": true
      },
      {
        "id": "jp6-00",
        "number": "JP6.00",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal JP6.00. CAD net: GND.",
        "x": 1.27,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": true,
        "smd": true
      },
      {
        "id": "jp6-11",
        "number": "JP6.11",
        "label": "JP6 HIGH",
        "type": "passive",
        "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP6.11. CAD net: N$8.",
        "x": -1.27,
        "y": 7.62,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": true,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "SERVO V+ IN",
        "type": "power_in",
        "description": "External servo-current supply, independent from Grove logic VCC. Physical source terminal J4.1. CAD net: DC5V_IN.",
        "x": 25.908,
        "y": 2.54,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J4.2. CAD net: GND.",
        "x": 25.908,
        "y": -2.54,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "LED8",
        "type": "output",
        "description": "Driver LED8 through fitted R28=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J3.1. CAD net: N$2.",
        "x": -21.59,
        "y": 11.43,
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
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J3.2. CAD net: DC5V_OUT.",
        "x": -21.59,
        "y": 13.97,
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
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.3. CAD net: GND.",
        "x": -21.59,
        "y": 16.51,
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
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J3.4. CAD net: GND.",
        "x": -19.05,
        "y": 16.51,
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
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J3.5. CAD net: DC5V_OUT.",
        "x": -19.05,
        "y": 13.97,
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
        "label": "LED9",
        "type": "output",
        "description": "Driver LED9 through fitted R31=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J3.6. CAD net: N$10.",
        "x": -19.05,
        "y": 11.43,
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
        "id": "j6-1",
        "number": "J6.1",
        "label": "LED3",
        "type": "output",
        "description": "Driver LED3 through fitted R15=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J6.1. CAD net: N$13.",
        "x": 9.017,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J6.2. CAD net: DC5V_OUT.",
        "x": 9.017,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-3",
        "number": "J6.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J6.3. CAD net: GND.",
        "x": 9.017,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-4",
        "number": "J6.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J6.4. CAD net: GND.",
        "x": 11.557,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-5",
        "number": "J6.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J6.5. CAD net: DC5V_OUT.",
        "x": 11.557,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j6-6",
        "number": "J6.6",
        "label": "LED2",
        "type": "output",
        "description": "Driver LED2 through fitted R16=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J6.6. CAD net: N$14.",
        "x": 11.557,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "LED10",
        "type": "output",
        "description": "Driver LED10 through fitted R23=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J7.1. CAD net: N$21.",
        "x": -11.557,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J7.2. CAD net: DC5V_OUT.",
        "x": -11.557,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J7.3. CAD net: GND.",
        "x": -11.557,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J7.4. CAD net: GND.",
        "x": -9.017,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J7.5. CAD net: DC5V_OUT.",
        "x": -9.017,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "LED11",
        "type": "output",
        "description": "Driver LED11 through fitted R27=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J7.6. CAD net: N$22.",
        "x": -9.017,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "LED5",
        "type": "output",
        "description": "Driver LED5 through fitted R11=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J8.1. CAD net: N$11.",
        "x": -11.557,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J8.2. CAD net: DC5V_OUT.",
        "x": -11.557,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-3",
        "number": "J8.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J8.3. CAD net: GND.",
        "x": -11.557,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-4",
        "number": "J8.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J8.4. CAD net: GND.",
        "x": -9.017,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-5",
        "number": "J8.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J8.5. CAD net: DC5V_OUT.",
        "x": -9.017,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j8-6",
        "number": "J8.6",
        "label": "LED4",
        "type": "output",
        "description": "Driver LED4 through fitted R12=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J8.6. CAD net: N$12.",
        "x": -9.017,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-1",
        "number": "J9.1",
        "label": "LED12",
        "type": "output",
        "description": "Driver LED12 through fitted R21=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J9.1. CAD net: N$19.",
        "x": 9.017,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-2",
        "number": "J9.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J9.2. CAD net: DC5V_OUT.",
        "x": 9.017,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-3",
        "number": "J9.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J9.3. CAD net: GND.",
        "x": 9.017,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-4",
        "number": "J9.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J9.4. CAD net: GND.",
        "x": 11.557,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-5",
        "number": "J9.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J9.5. CAD net: DC5V_OUT.",
        "x": 11.557,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j9-6",
        "number": "J9.6",
        "label": "LED13",
        "type": "output",
        "description": "Driver LED13 through fitted R22=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J9.6. CAD net: N$20.",
        "x": 11.557,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-1",
        "number": "J10.1",
        "label": "LED7",
        "type": "output",
        "description": "Driver LED7 through fitted R8=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J10.1. CAD net: N$23.",
        "x": -21.59,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-2",
        "number": "J10.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J10.2. CAD net: DC5V_OUT.",
        "x": -21.59,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-3",
        "number": "J10.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J10.3. CAD net: GND.",
        "x": -21.59,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-4",
        "number": "J10.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J10.4. CAD net: GND.",
        "x": -19.05,
        "y": -11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-5",
        "number": "J10.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J10.5. CAD net: DC5V_OUT.",
        "x": -19.05,
        "y": -13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j10-6",
        "number": "J10.6",
        "label": "LED6",
        "type": "output",
        "description": "Driver LED6 through fitted R10=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J10.6. CAD net: N$24.",
        "x": -19.05,
        "y": -16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J10",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-1",
        "number": "J11.1",
        "label": "LED14",
        "type": "output",
        "description": "Driver LED14 through fitted R19=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J11.1. CAD net: N$3.",
        "x": 19.05,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "rect",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-2",
        "number": "J11.2",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J11.2. CAD net: DC5V_OUT.",
        "x": 19.05,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-3",
        "number": "J11.3",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J11.3. CAD net: GND.",
        "x": 19.05,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-4",
        "number": "J11.4",
        "label": "GND",
        "type": "power_in",
        "description": "Circuit ground/return contact. Physical source terminal J11.4. CAD net: GND.",
        "x": 21.59,
        "y": 16.51,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-5",
        "number": "J11.5",
        "label": "SERVO V+",
        "type": "power_out",
        "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J11.5. CAD net: DC5V_OUT.",
        "x": 21.59,
        "y": 13.97,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "j11-6",
        "number": "J11.6",
        "label": "LED15",
        "type": "output",
        "description": "Driver LED15 through fitted R20=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J11.6. CAD net: N$9.",
        "x": 21.59,
        "y": 11.43,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "J11",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp12-t",
        "number": "TP12.T",
        "label": "BUCK RAIL",
        "type": "power_out",
        "description": "ETA3410 intermediate regulated rail. Physical source terminal TP12.T. CAD net: VCC_3V.",
        "x": -12.065,
        "y": 3.175,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP12",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "5V LOGIC",
        "type": "power_out",
        "description": "ETA1038 boosted 5 V logic rail for PCA9685, distinct from servo power. Physical source terminal TP1.T. CAD net: VCC_5V.",
        "x": 4.445,
        "y": 11.049,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"20.828\" y=\"-5.08\" width=\"10.502\" height=\"10.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-29.774\" y=\"-6.1\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.85\" y=\"-2.2\" width=\"9.7\" height=\"4.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.275\" y=\"-7.06\" width=\"6.5\" height=\"6.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.006\" y=\"-7.06\" width=\"6.5\" height=\"6.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.747\" y=\"10.16\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.747\" y=\"-17.78\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"10.16\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"-17.78\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.78\" y=\"10.16\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.78\" y=\"-17.78\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.86\" y=\"10.16\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.86\" y=\"-17.78\" width=\"5.08\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.676\" y=\"2.199\" width=\"7.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.905\" y=\"13.97\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4224\" y=\"10.6196\" width=\"2.8448\" height=\"1.6208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.43\" y=\"-1.0\" width=\"2.0\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.034\" y=\"3.4925\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.434\" y=\"2.005\" width=\"1.578\" height=\"2.086\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.007\" y=\"1.116\" width=\"2.086\" height=\"1.578\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.04\" y=\"-1.0\" width=\"1.6\" height=\"2.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"2.413\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"-3.048\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.552\" y=\"7.001\" width=\"1.25\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.2415\" y=\"7.747\" width=\"2.032\" height=\"1.016\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"24.8285\" y=\"7.366\" width=\"2.032\" height=\"1.016\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.09\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.926\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.656\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"25.108\" y=\"8.736\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.679\" y=\"8.228\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.679\" y=\"6.831\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.79\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.386\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.25\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.63\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.69\" y=\"7.72\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.69\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.742\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.218\" y=\"14.059\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.075\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.676\" y=\"7.72\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.39\" y=\"7.72\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.39\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.948\" y=\"14.059\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.85\" y=\"7.72\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.85\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.516\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"7.72\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"2.132\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"-4.599\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"-3.329\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.678\" y=\"14.059\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.408\" y=\"14.059\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.345\" y=\"10.63\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.23\" y=\"3.402\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.34\" y=\"7.455\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.391\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.34\" y=\"2.883\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.425\" y=\"-4.864\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.55\" y=\"-9.425\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.418\" y=\"4.407\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.148\" y=\"4.407\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.34\" y=\"5.042\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"9.498\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.44\" y=\"10.895\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.751\" y=\"4.407\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.425\" y=\"4.28\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.828000\" y=\"-5.080000\" width=\"10.502000\" height=\"10.780000\" rx=\"0.3\" fill=\"#608d69\" stroke=\"#bdd6c0\" stroke-width=\".1\"/><circle cx=\"25.908\" cy=\"2.54\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"25.908\" cy=\"-2.54\" r=\".85\" fill=\"#263c35\" stroke=\"#b1c7b0\" stroke-width=\".1\"/><circle cx=\"9.525\" cy=\"-3.8099999999999983\" r=\"3.1\" fill=\"#24383e\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"9.525\" cy=\"-3.8099999999999983\" r=\"1.8599999999999999\" fill=\"#1b3039\"/><circle cx=\"16.256\" cy=\"-3.8099999999999983\" r=\"3.1\" fill=\"#24383e\" stroke=\"#bbccca\" stroke-width=\".15\"/><circle cx=\"16.256\" cy=\"-3.8099999999999983\" r=\"1.8599999999999999\" fill=\"#1b3039\"/>",
    "backArtwork": "<rect x=\"5.588\" y=\"6.858\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.588\" y=\"-8.382\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.652\" y=\"6.858\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.652\" y=\"-8.382\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.032\" y=\"6.858\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.032\" y=\"-8.382\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "16-Channel PWM Driver(PCA9685).brd",
      "boardSha256": "8b829721df5d554b16dc652db482cb7098b57ac57b9babc2b5ca3fb2a178f69b",
      "sourceBounds": [
        -32.1,
        -22.1,
        32.1,
        22.100000000000005
      ],
      "selectedConnectors": [
        "J1",
        "GND1",
        "VCC2",
        "SDA1",
        "SCL1",
        "J2",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "JP5",
        "JP6",
        "J4",
        "J3",
        "J6",
        "J7",
        "J8",
        "J9",
        "J10",
        "J11",
        "TP12",
        "TP1"
      ],
      "reviewWarnings": [],
      "outlineReview": "Closed manufacturer routing contour, deduplicated source edges before tracing; arcs and keyed Grove fixing notches retained.",
      "attribution": "Seeed Studio. Physical board facts derived from manufacturer EAGLE source; original simplified package primitives, no copied logos or silkscreen artwork.",
      "sourceArchiveURL": "https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip",
      "sourceSchematic": "/tmp/wirepad-modules-dfrobot-seeed/cad/108020102/extracted/16-Channel PWM Driver(PCA9685).sch",
      "pinOverrides": [
        {
          "number": "J1.1",
          "before": {
            "label": "SCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal J1.1. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q5",
                "pin": "S",
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
                "Q5",
                "2N7002",
                [
                  "SCL",
                  "SCL_5V",
                  "VCC"
                ]
              ],
              [
                "R14",
                "10K",
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
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PVIN",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AVIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$28",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R90",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$28"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "EN",
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
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal J1.2. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q4",
                "pin": "S",
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
                "Q4",
                "2N7002",
                [
                  "SDA",
                  "SDA_5V",
                  "VCC"
                ]
              ],
              [
                "R13",
                "10K",
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
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PVIN",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AVIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$28",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R90",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$28"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "EN",
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
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "GND1.T",
          "before": {
            "label": "SCL",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SCL."
          },
          "after": {
            "label": "SCL",
            "type": "input",
            "description": "Module I2C clock input in the indicated supply domain; clock-stretching bus operation follows the onboard device. Physical source terminal GND1.T. CAD net: SCL."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "SCL",
            "label": "SCL",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q5",
                "pin": "S",
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
                "Q5",
                "2N7002",
                [
                  "SCL",
                  "SCL_5V",
                  "VCC"
                ]
              ],
              [
                "R14",
                "10K",
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
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PVIN",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AVIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "VCC",
                    "to": "SDA"
                  }
                ],
                "endpoints": [
                  {
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$28",
                "hops": [
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "SCL",
                    "to": "VCC"
                  },
                  {
                    "part": "R90",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$28"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "EN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "VCC2.T",
          "before": {
            "label": "SDA",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: SDA."
          },
          "after": {
            "label": "SDA",
            "type": "bidirectional",
            "description": "Module I2C bidirectional data in the indicated supply domain. Physical source terminal VCC2.T. CAD net: SDA."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "SDA",
            "label": "SDA",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q4",
                "pin": "S",
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
                "Q4",
                "2N7002",
                [
                  "SDA",
                  "SDA_5V",
                  "VCC"
                ]
              ],
              [
                "R13",
                "10K",
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
                    "part": "VCC2",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  }
                ],
                "endpoints": [
                  {
                    "part": "SDA1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PVIN",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AVIN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SCL",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R14",
                    "value": "10K",
                    "from": "VCC",
                    "to": "SCL"
                  }
                ],
                "endpoints": [
                  {
                    "part": "GND1",
                    "pin": "T",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$28",
                "hops": [
                  {
                    "part": "R13",
                    "value": "10K",
                    "from": "SDA",
                    "to": "VCC"
                  },
                  {
                    "part": "R90",
                    "value": "0R",
                    "from": "VCC",
                    "to": "N$28"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "EN",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "SCL1.T",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal SCL1.T. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J2.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J2.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J2.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J2.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "JP1.MM",
          "before": {
            "label": "AD0",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD0."
          },
          "after": {
            "label": "AD0",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP1.MM. CAD net: AD0."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD0",
            "label": "AD0",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A0",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD0",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A0",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP1.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP1.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP2.MM",
          "before": {
            "label": "AD1",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD1."
          },
          "after": {
            "label": "AD1",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP2.MM. CAD net: AD1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD1",
            "label": "AD1",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A1",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD1",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A1",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP2.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP2.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.MM",
          "before": {
            "label": "AD2",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD2."
          },
          "after": {
            "label": "AD2",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP3.MM. CAD net: AD2."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD2",
            "label": "AD2",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A2",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD2",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP3.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP4.MM",
          "before": {
            "label": "AD3",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD3."
          },
          "after": {
            "label": "AD3",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP4.MM. CAD net: AD3."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD3",
            "label": "AD3",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A3",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD3",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP4.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP4.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP5.MM",
          "before": {
            "label": "AD4",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD4."
          },
          "after": {
            "label": "AD4",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP5.MM. CAD net: AD4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD4",
            "label": "AD4",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A4",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD4",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP5.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP5.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP6.MM",
          "before": {
            "label": "AD5",
            "type": "bidirectional",
            "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AD5."
          },
          "after": {
            "label": "AD5",
            "type": "input",
            "description": "PCA9685 address-selection input. Physical source terminal JP6.MM. CAD net: AD5."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "AD5",
            "label": "AD5",
            "type": "bidirectional",
            "endpoints": [
              {
                "part": "U1",
                "pin": "A5",
                "direction": "io"
              }
            ],
            "neighbors": [],
            "paths": [
              {
                "net": "AD5",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "A5",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP6.00",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal JP6.00. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
            "label": "DC5V_IN",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_IN."
          },
          "after": {
            "label": "SERVO V+ IN",
            "type": "power_in",
            "description": "External servo-current supply, independent from Grove logic VCC. Physical source terminal J4.1. CAD net: DC5V_IN."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_IN",
            "label": "DC5V_IN",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "D",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "D2",
                "pin": "+",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "D2",
                "DNP",
                [
                  "DC5V_IN",
                  "N$35"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J4.2",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J4.2. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J3.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J3.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J3.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
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
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J3.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J6.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J6.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J6.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J6.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J6.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J6.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J7.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J7.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J7.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J7.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J7.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J7.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J8.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J8.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J8.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J8.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J8.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J8.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J9.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J9.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J9.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J9.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J9.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J9.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J9.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J9.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J10.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J10.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J10.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J10.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J10.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J10.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J10.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J10.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J11.2",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J11.2. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "J11.3",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J11.3. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J11.4",
          "before": {
            "label": "GND",
            "type": "power_in",
            "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND."
          },
          "after": {
            "label": "GND",
            "type": "power_in",
            "description": "Circuit ground/return contact. Physical source terminal J11.4. CAD net: GND."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
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
                "part": "U1",
                "pin": "!OE",
                "direction": "io"
              },
              {
                "part": "R37",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C3",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R29",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R30",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C2",
                "pin": "-",
                "direction": "pas"
              },
              {
                "part": "U6",
                "pin": "MODE",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PAD",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "AGND",
                "direction": "io"
              },
              {
                "part": "U6",
                "pin": "PGND",
                "direction": "io"
              },
              {
                "part": "R49",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C103",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C105",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R26",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "C12",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R35",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R36",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "GND",
                "direction": "io"
              },
              {
                "part": "R40",
                "pin": "2",
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
              }
            ],
            "neighbors": [
              [
                "R29",
                "10K",
                [
                  "GND",
                  "N$16"
                ]
              ],
              [
                "R30",
                "10K",
                [
                  "GND",
                  "N$18"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C2",
                "220uF/16V",
                [
                  "DC5V_IN",
                  "GND"
                ]
              ],
              [
                "R49",
                "22K_1%",
                [
                  "GND",
                  "N$49"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C103",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C105",
                "22uF",
                [
                  "GND",
                  "VCC"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "R26",
                "33K_1%",
                [
                  "GND",
                  "N$30"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R35",
                "DNP",
                [
                  "GND",
                  "N$34"
                ]
              ],
              [
                "R36",
                "DNP",
                [
                  "GND",
                  "N$35"
                ]
              ],
              [
                "R37",
                "DNP",
                [
                  "GND",
                  "N$25"
                ]
              ],
              [
                "R40",
                "DNP",
                [
                  "GND",
                  "N$36"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C5",
                "15pF",
                [
                  "CLK",
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
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R49",
                    "value": "22K_1%",
                    "from": "GND",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R26",
                    "value": "33K_1%",
                    "from": "GND",
                    "to": "N$30"
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
                "net": "N$25",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "EXTCLK",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$36",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "CLK",
                "hops": [
                  {
                    "part": "R37",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$25"
                  },
                  {
                    "part": "R38",
                    "value": "0R",
                    "from": "N$25",
                    "to": "CLK"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "OUT",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "GND",
                    "to": "N$36"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "N$36",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J11.5",
          "before": {
            "label": "DC5V_OUT",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DC5V_OUT."
          },
          "after": {
            "label": "SERVO V+",
            "type": "power_out",
            "description": "Protected external servo-current supply distributed to the servo headers. Physical source terminal J11.5. CAD net: DC5V_OUT."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "DC5V_OUT",
            "label": "DC5V_OUT",
            "type": "passive",
            "endpoints": [
              {
                "part": "Q6",
                "pin": "S",
                "direction": "pas"
              },
              {
                "part": "Q8",
                "pin": "E",
                "direction": "pas"
              },
              {
                "part": "R7",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "Q6",
                "CJ2305",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$18"
                ]
              ],
              [
                "Q8",
                "BCM856BS",
                [
                  "DC5V_IN",
                  "DC5V_OUT",
                  "N$16",
                  "N$18"
                ]
              ],
              [
                "R7",
                "DNP",
                [
                  "DC5V_IN",
                  "DC5V_OUT"
                ]
              ]
            ],
            "paths": []
          }
        },
        {
          "number": "TP12.T",
          "before": {
            "label": "VCC_3V",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC_3V."
          },
          "after": {
            "label": "BUCK RAIL",
            "type": "power_out",
            "description": "ETA3410 intermediate regulated rail. Physical source terminal TP12.T. CAD net: VCC_3V."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "VCC_3V",
            "label": "VCC_3V",
            "type": "power_in",
            "endpoints": [
              {
                "part": "L1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R45",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C102",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C104",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "L3",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "U3",
                "pin": "IN",
                "direction": "io"
              },
              {
                "part": "R32",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C12",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C9",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "L1",
                "470nH",
                [
                  "N$27",
                  "VCC_3V"
                ]
              ],
              [
                "R45",
                "68k 1%",
                [
                  "N$33",
                  "VCC_3V"
                ]
              ],
              [
                "C102",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C104",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "L3",
                "2.2uH",
                [
                  "N$29",
                  "VCC_3V"
                ]
              ],
              [
                "R32",
                "0R",
                [
                  "N$31",
                  "VCC_3V"
                ]
              ],
              [
                "C12",
                "22uF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ],
              [
                "C9",
                "100nF",
                [
                  "GND",
                  "VCC_3V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_3V",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "IN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$27",
                "hops": [
                  {
                    "part": "L1",
                    "value": "470nH",
                    "from": "VCC_3V",
                    "to": "N$27"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "SW",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$29",
                "hops": [
                  {
                    "part": "L3",
                    "value": "2.2uH",
                    "from": "VCC_3V",
                    "to": "N$29"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "SW",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$31",
                "hops": [
                  {
                    "part": "R32",
                    "value": "0R",
                    "from": "VCC_3V",
                    "to": "N$31"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "EN",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$49",
                "hops": [
                  {
                    "part": "R45",
                    "value": "68k 1%",
                    "from": "VCC_3V",
                    "to": "N$33"
                  },
                  {
                    "part": "R34",
                    "value": "20k_1%",
                    "from": "N$33",
                    "to": "N$49"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U6",
                    "pin": "FB",
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
            "label": "VCC_5V",
            "type": "power_in",
            "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC_5V."
          },
          "after": {
            "label": "5V LOGIC",
            "type": "power_out",
            "description": "ETA1038 boosted 5 V logic rail for PCA9685, distinct from servo power. Physical source terminal TP1.T. CAD net: VCC_5V."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "VCC_5V",
            "label": "VCC_5V",
            "type": "power_in",
            "endpoints": [
              {
                "part": "U3",
                "pin": "OUT",
                "direction": "io"
              },
              {
                "part": "C7",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R6",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "C4",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C8",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "C11",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R9",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R5",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R4",
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
                "part": "U1",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C3",
                "pin": "+",
                "direction": "pas"
              },
              {
                "part": "C1",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "R24",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R25",
                "pin": "1",
                "direction": "pas"
              },
              {
                "part": "R39",
                "pin": "2",
                "direction": "pas"
              },
              {
                "part": "X1",
                "pin": "VDD",
                "direction": "io"
              },
              {
                "part": "C6",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "C7",
                "DNP",
                [
                  "N$29",
                  "VCC_5V"
                ]
              ],
              [
                "R6",
                "100K_1%",
                [
                  "N$32",
                  "VCC_5V"
                ]
              ],
              [
                "C4",
                "DNP",
                [
                  "N$30",
                  "VCC_5V"
                ]
              ],
              [
                "C8",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C11",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R1",
                "4.7K_5%",
                [
                  "N$8",
                  "VCC_5V"
                ]
              ],
              [
                "R2",
                "4.7K_5%",
                [
                  "N$7",
                  "VCC_5V"
                ]
              ],
              [
                "R3",
                "4.7K_5%",
                [
                  "N$6",
                  "VCC_5V"
                ]
              ],
              [
                "R4",
                "4.7K_5%",
                [
                  "N$5",
                  "VCC_5V"
                ]
              ],
              [
                "R5",
                "4.7K_5%",
                [
                  "N$4",
                  "VCC_5V"
                ]
              ],
              [
                "R9",
                "4.7K_5%",
                [
                  "N$1",
                  "VCC_5V"
                ]
              ],
              [
                "R24",
                "10K",
                [
                  "SDA_5V",
                  "VCC_5V"
                ]
              ],
              [
                "R25",
                "10K",
                [
                  "SCL_5V",
                  "VCC_5V"
                ]
              ],
              [
                "C3",
                "220uF/16V",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "C1",
                "22uF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ],
              [
                "R39",
                "0R",
                [
                  "N$36",
                  "VCC_5V"
                ]
              ],
              [
                "C6",
                "100nF",
                [
                  "GND",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "N$30",
                "hops": [
                  {
                    "part": "R6",
                    "value": "100K_1%",
                    "from": "VCC_5V",
                    "to": "N$32"
                  },
                  {
                    "part": "R33",
                    "value": "8.06K_1%",
                    "from": "N$32",
                    "to": "N$30"
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
                "net": "GND",
                "hops": [
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  },
                  {
                    "part": "R40",
                    "value": "DNP",
                    "from": "N$36",
                    "to": "GND"
                  }
                ],
                "endpoints": [
                  {
                    "part": "SCL1",
                    "pin": "T",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VSS",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "!OE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "MODE",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PAD",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "AGND",
                    "direction": "io"
                  },
                  {
                    "part": "U6",
                    "pin": "PGND",
                    "direction": "io"
                  },
                  {
                    "part": "U3",
                    "pin": "GND",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "GND",
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
            "label": "N$15",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$15."
          },
          "after": {
            "label": "LED1",
            "type": "output",
            "description": "Driver LED1 through fitted R17=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J2.1. CAD net: N$15."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$15",
            "label": "N$15",
            "type": "passive",
            "endpoints": [
              {
                "part": "R17",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R17",
                "0R",
                [
                  "LED1",
                  "N$15"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED1",
                "hops": [
                  {
                    "part": "R17",
                    "value": "0R",
                    "from": "N$15",
                    "to": "LED1"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED1",
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
            "label": "N$17",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$17."
          },
          "after": {
            "label": "LED0",
            "type": "output",
            "description": "Driver LED0 through fitted R18=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J2.6. CAD net: N$17."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$17",
            "label": "N$17",
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
                  "LED0",
                  "N$17"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED0",
                "hops": [
                  {
                    "part": "R18",
                    "value": "0R",
                    "from": "N$17",
                    "to": "LED0"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED0",
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
            "label": "N$2",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2."
          },
          "after": {
            "label": "LED8",
            "type": "output",
            "description": "Driver LED8 through fitted R28=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J3.1. CAD net: N$2."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$2",
            "label": "N$2",
            "type": "passive",
            "endpoints": [
              {
                "part": "R28",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R28",
                "0R",
                [
                  "LED8",
                  "N$2"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED8",
                "hops": [
                  {
                    "part": "R28",
                    "value": "0R",
                    "from": "N$2",
                    "to": "LED8"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED8",
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
            "label": "N$10",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10."
          },
          "after": {
            "label": "LED9",
            "type": "output",
            "description": "Driver LED9 through fitted R31=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J3.6. CAD net: N$10."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$10",
            "label": "N$10",
            "type": "passive",
            "endpoints": [
              {
                "part": "R31",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R31",
                "0R",
                [
                  "LED9",
                  "N$10"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED9",
                "hops": [
                  {
                    "part": "R31",
                    "value": "0R",
                    "from": "N$10",
                    "to": "LED9"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED9",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.1",
          "before": {
            "label": "N$13",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$13."
          },
          "after": {
            "label": "LED3",
            "type": "output",
            "description": "Driver LED3 through fitted R15=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J6.1. CAD net: N$13."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$13",
            "label": "N$13",
            "type": "passive",
            "endpoints": [
              {
                "part": "R15",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R15",
                "0R",
                [
                  "LED3",
                  "N$13"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED3",
                "hops": [
                  {
                    "part": "R15",
                    "value": "0R",
                    "from": "N$13",
                    "to": "LED3"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED3",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J6.6",
          "before": {
            "label": "N$14",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$14."
          },
          "after": {
            "label": "LED2",
            "type": "output",
            "description": "Driver LED2 through fitted R16=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J6.6. CAD net: N$14."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$14",
            "label": "N$14",
            "type": "passive",
            "endpoints": [
              {
                "part": "R16",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R16",
                "0R",
                [
                  "LED2",
                  "N$14"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED2",
                "hops": [
                  {
                    "part": "R16",
                    "value": "0R",
                    "from": "N$14",
                    "to": "LED2"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED2",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.1",
          "before": {
            "label": "N$21",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$21."
          },
          "after": {
            "label": "LED10",
            "type": "output",
            "description": "Driver LED10 through fitted R23=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J7.1. CAD net: N$21."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$21",
            "label": "N$21",
            "type": "passive",
            "endpoints": [
              {
                "part": "R23",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R23",
                "0R",
                [
                  "LED10",
                  "N$21"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED10",
                "hops": [
                  {
                    "part": "R23",
                    "value": "0R",
                    "from": "N$21",
                    "to": "LED10"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED10",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J7.6",
          "before": {
            "label": "N$22",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$22."
          },
          "after": {
            "label": "LED11",
            "type": "output",
            "description": "Driver LED11 through fitted R27=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J7.6. CAD net: N$22."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$22",
            "label": "N$22",
            "type": "passive",
            "endpoints": [
              {
                "part": "R27",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R27",
                "0R",
                [
                  "LED11",
                  "N$22"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED11",
                "hops": [
                  {
                    "part": "R27",
                    "value": "0R",
                    "from": "N$22",
                    "to": "LED11"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED11",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.1",
          "before": {
            "label": "N$11",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$11."
          },
          "after": {
            "label": "LED5",
            "type": "output",
            "description": "Driver LED5 through fitted R11=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J8.1. CAD net: N$11."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$11",
            "label": "N$11",
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
                "0R",
                [
                  "LED5",
                  "N$11"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED5",
                "hops": [
                  {
                    "part": "R11",
                    "value": "0R",
                    "from": "N$11",
                    "to": "LED5"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED5",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J8.6",
          "before": {
            "label": "N$12",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$12."
          },
          "after": {
            "label": "LED4",
            "type": "output",
            "description": "Driver LED4 through fitted R12=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J8.6. CAD net: N$12."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$12",
            "label": "N$12",
            "type": "passive",
            "endpoints": [
              {
                "part": "R12",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R12",
                "0R",
                [
                  "LED4",
                  "N$12"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED4",
                "hops": [
                  {
                    "part": "R12",
                    "value": "0R",
                    "from": "N$12",
                    "to": "LED4"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED4",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J9.1",
          "before": {
            "label": "N$19",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$19."
          },
          "after": {
            "label": "LED12",
            "type": "output",
            "description": "Driver LED12 through fitted R21=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J9.1. CAD net: N$19."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$19",
            "label": "N$19",
            "type": "passive",
            "endpoints": [
              {
                "part": "R21",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R21",
                "0R",
                [
                  "LED12",
                  "N$19"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED12",
                "hops": [
                  {
                    "part": "R21",
                    "value": "0R",
                    "from": "N$19",
                    "to": "LED12"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED12",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J9.6",
          "before": {
            "label": "N$20",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$20."
          },
          "after": {
            "label": "LED13",
            "type": "output",
            "description": "Driver LED13 through fitted R22=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J9.6. CAD net: N$20."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$20",
            "label": "N$20",
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
                  "LED13",
                  "N$20"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED13",
                "hops": [
                  {
                    "part": "R22",
                    "value": "0R",
                    "from": "N$20",
                    "to": "LED13"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED13",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J10.1",
          "before": {
            "label": "N$23",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$23."
          },
          "after": {
            "label": "LED7",
            "type": "output",
            "description": "Driver LED7 through fitted R8=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J10.1. CAD net: N$23."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$23",
            "label": "N$23",
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
                "0R",
                [
                  "LED7",
                  "N$23"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED7",
                "hops": [
                  {
                    "part": "R8",
                    "value": "0R",
                    "from": "N$23",
                    "to": "LED7"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED7",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J10.6",
          "before": {
            "label": "N$24",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$24."
          },
          "after": {
            "label": "LED6",
            "type": "output",
            "description": "Driver LED6 through fitted R10=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J10.6. CAD net: N$24."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$24",
            "label": "N$24",
            "type": "passive",
            "endpoints": [
              {
                "part": "R10",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R10",
                "0R",
                [
                  "LED6",
                  "N$24"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED6",
                "hops": [
                  {
                    "part": "R10",
                    "value": "0R",
                    "from": "N$24",
                    "to": "LED6"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED6",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J11.1",
          "before": {
            "label": "N$3",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$3."
          },
          "after": {
            "label": "LED14",
            "type": "output",
            "description": "Driver LED14 through fitted R19=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J11.1. CAD net: N$3."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$3",
            "label": "N$3",
            "type": "passive",
            "endpoints": [
              {
                "part": "R19",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R19",
                "0R",
                [
                  "LED14",
                  "N$3"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED14",
                "hops": [
                  {
                    "part": "R19",
                    "value": "0R",
                    "from": "N$3",
                    "to": "LED14"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED14",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "J11.6",
          "before": {
            "label": "N$9",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$9."
          },
          "after": {
            "label": "LED15",
            "type": "output",
            "description": "Driver LED15 through fitted R20=0R. Row terminals may also serve the HT16K33 key-scan/address functions. Physical source terminal J11.6. CAD net: N$9."
          },
          "reason": "Verified series-resistor path to active driver pin",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$9",
            "label": "N$9",
            "type": "passive",
            "endpoints": [
              {
                "part": "R20",
                "pin": "1",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R20",
                "0R",
                [
                  "LED15",
                  "N$9"
                ]
              ]
            ],
            "paths": [
              {
                "net": "LED15",
                "hops": [
                  {
                    "part": "R20",
                    "value": "0R",
                    "from": "N$9",
                    "to": "LED15"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U1",
                    "pin": "LED15",
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
            "label": "N$1",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1."
          },
          "after": {
            "label": "JP1 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP1.11. CAD net: N$1."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$1",
            "label": "N$1",
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
                "4.7K_5%",
                [
                  "N$1",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K_5%",
                    "from": "N$1",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K_5%",
                    "from": "N$1",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K_5%",
                    "from": "N$1",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R9",
                    "value": "4.7K_5%",
                    "from": "N$1",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP2.11",
          "before": {
            "label": "N$4",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$4."
          },
          "after": {
            "label": "JP2 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP2.11. CAD net: N$4."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$4",
            "label": "N$4",
            "type": "passive",
            "endpoints": [
              {
                "part": "R5",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R5",
                "4.7K_5%",
                [
                  "N$4",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R5",
                    "value": "4.7K_5%",
                    "from": "N$4",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R5",
                    "value": "4.7K_5%",
                    "from": "N$4",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R5",
                    "value": "4.7K_5%",
                    "from": "N$4",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R5",
                    "value": "4.7K_5%",
                    "from": "N$4",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP3.11",
          "before": {
            "label": "N$5",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$5."
          },
          "after": {
            "label": "JP3 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP3.11. CAD net: N$5."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$5",
            "label": "N$5",
            "type": "passive",
            "endpoints": [
              {
                "part": "R4",
                "pin": "2",
                "direction": "pas"
              }
            ],
            "neighbors": [
              [
                "R4",
                "4.7K_5%",
                [
                  "N$5",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K_5%",
                    "from": "N$5",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K_5%",
                    "from": "N$5",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K_5%",
                    "from": "N$5",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R4",
                    "value": "4.7K_5%",
                    "from": "N$5",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP4.11",
          "before": {
            "label": "N$6",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$6."
          },
          "after": {
            "label": "JP4 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP4.11. CAD net: N$6."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$6",
            "label": "N$6",
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
                "4.7K_5%",
                [
                  "N$6",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K_5%",
                    "from": "N$6",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K_5%",
                    "from": "N$6",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K_5%",
                    "from": "N$6",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R3",
                    "value": "4.7K_5%",
                    "from": "N$6",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP5.11",
          "before": {
            "label": "N$7",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$7."
          },
          "after": {
            "label": "JP5 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP5.11. CAD net: N$7."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$7",
            "label": "N$7",
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
                "4.7K_5%",
                [
                  "N$7",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K_5%",
                    "from": "N$7",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K_5%",
                    "from": "N$7",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K_5%",
                    "from": "N$7",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R2",
                    "value": "4.7K_5%",
                    "from": "N$7",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        },
        {
          "number": "JP6.11",
          "before": {
            "label": "N$8",
            "type": "passive",
            "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8."
          },
          "after": {
            "label": "JP6 HIGH",
            "type": "passive",
            "description": "Address-high option through a 4.7 kOhm resistor to the 5 V logic rail. Physical source terminal JP6.11. CAD net: N$8."
          },
          "reason": "Matching manufacturer schematic and module pinout review",
          "source": "https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",
          "sourceNetEvidence": {
            "net": "N$8",
            "label": "N$8",
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
                "4.7K_5%",
                [
                  "N$8",
                  "VCC_5V"
                ]
              ]
            ],
            "paths": [
              {
                "net": "VCC_5V",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K_5%",
                    "from": "N$8",
                    "to": "VCC_5V"
                  }
                ],
                "endpoints": [
                  {
                    "part": "U3",
                    "pin": "OUT",
                    "direction": "io"
                  },
                  {
                    "part": "U1",
                    "pin": "VDD",
                    "direction": "io"
                  },
                  {
                    "part": "X1",
                    "pin": "VDD",
                    "direction": "io"
                  }
                ]
              },
              {
                "net": "SDA_5V",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K_5%",
                    "from": "N$8",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R24",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SDA_5V"
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
                "net": "SCL_5V",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K_5%",
                    "from": "N$8",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R25",
                    "value": "10K",
                    "from": "VCC_5V",
                    "to": "SCL_5V"
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
                "net": "N$36",
                "hops": [
                  {
                    "part": "R1",
                    "value": "4.7K_5%",
                    "from": "N$8",
                    "to": "VCC_5V"
                  },
                  {
                    "part": "R39",
                    "value": "0R",
                    "from": "VCC_5V",
                    "to": "N$36"
                  }
                ],
                "endpoints": [
                  {
                    "part": "X1",
                    "pin": "ENABLE",
                    "direction": "io"
                  }
                ]
              }
            ]
          }
        }
      ],
      "reviewWarningsResolved": [
        "J2.1: autogenerated net N$15 requires printed/function label review.",
        "J2.6: autogenerated net N$17 requires printed/function label review.",
        "JP1.11: autogenerated net N$1 requires printed/function label review.",
        "JP2.11: autogenerated net N$4 requires printed/function label review.",
        "JP3.11: autogenerated net N$5 requires printed/function label review.",
        "JP4.11: autogenerated net N$6 requires printed/function label review.",
        "JP5.11: autogenerated net N$7 requires printed/function label review.",
        "JP6.11: autogenerated net N$8 requires printed/function label review.",
        "J3.1: autogenerated net N$2 requires printed/function label review.",
        "J3.6: autogenerated net N$10 requires printed/function label review.",
        "J6.1: autogenerated net N$13 requires printed/function label review.",
        "J6.6: autogenerated net N$14 requires printed/function label review.",
        "J7.1: autogenerated net N$21 requires printed/function label review.",
        "J7.6: autogenerated net N$22 requires printed/function label review.",
        "J8.1: autogenerated net N$11 requires printed/function label review.",
        "J8.6: autogenerated net N$12 requires printed/function label review.",
        "J9.1: autogenerated net N$19 requires printed/function label review.",
        "J9.6: autogenerated net N$20 requires printed/function label review.",
        "J10.1: autogenerated net N$23 requires printed/function label review.",
        "J10.6: autogenerated net N$24 requires printed/function label review.",
        "J11.1: autogenerated net N$3 requires printed/function label review.",
        "J11.6: autogenerated net N$9 requires printed/function label review."
      ],
      "rawPinEvidence": [
        {
          "number": "J1.1",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "Q5",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J1.2",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "Q4",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "J1.3",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "Q5",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "PVIN",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AVIN",
              "direction": "io"
            },
            {
              "part": "C103",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R90",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "HW4-SMD-2.0-90D",
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
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "HW4-SMD-2.0-90D",
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
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "HW4-SMD-2.0-90D",
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
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "HW4-SMD-2.0-90D",
          "sourceLayer": "1"
        },
        {
          "number": "GND1.T",
          "net": "SCL",
          "connectedPins": [
            {
              "part": "Q5",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "VCC2.T",
          "net": "SDA",
          "connectedPins": [
            {
              "part": "Q4",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "SDA1.T",
          "net": "VCC",
          "connectedPins": [
            {
              "part": "D1",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "Q4",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "Q5",
              "pin": "G",
              "direction": "pas"
            },
            {
              "part": "R14",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R13",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "PVIN",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AVIN",
              "direction": "io"
            },
            {
              "part": "C103",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R90",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "SCL1.T",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "J2.1",
          "net": "N$15",
          "connectedPins": [
            {
              "part": "R17",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J2.6",
          "net": "N$17",
          "connectedPins": [
            {
              "part": "R18",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "JP1.MM",
          "net": "AD0",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A0",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP1.11",
          "net": "N$1",
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
          "number": "JP2.MM",
          "net": "AD1",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A1",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP2.11",
          "net": "N$4",
          "connectedPins": [
            {
              "part": "R5",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.MM",
          "net": "AD2",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A2",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP3.11",
          "net": "N$5",
          "connectedPins": [
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.MM",
          "net": "AD3",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A3",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP4.11",
          "net": "N$6",
          "connectedPins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP5.MM",
          "net": "AD4",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A4",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP5.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP5.11",
          "net": "N$7",
          "connectedPins": [
            {
              "part": "R2",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP6.MM",
          "net": "AD5",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "A5",
              "direction": "io"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP6.00",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "JP6.11",
          "net": "N$8",
          "connectedPins": [
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "3P-SMD-SHORT",
          "sourceLayer": "1"
        },
        {
          "number": "J4.1",
          "net": "DC5V_IN",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "D",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "D2",
              "pin": "+",
              "direction": "pas"
            }
          ],
          "package": "2P-5.0-10.6X10X14.8H",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J4.2",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "2P-5.0-10.6X10X14.8H",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.1",
          "net": "N$2",
          "connectedPins": [
            {
              "part": "R28",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J3.6",
          "net": "N$10",
          "connectedPins": [
            {
              "part": "R31",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.1",
          "net": "N$13",
          "connectedPins": [
            {
              "part": "R15",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J6.6",
          "net": "N$14",
          "connectedPins": [
            {
              "part": "R16",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.1",
          "net": "N$21",
          "connectedPins": [
            {
              "part": "R23",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J7.6",
          "net": "N$22",
          "connectedPins": [
            {
              "part": "R27",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.1",
          "net": "N$11",
          "connectedPins": [
            {
              "part": "R11",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J8.6",
          "net": "N$12",
          "connectedPins": [
            {
              "part": "R12",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.1",
          "net": "N$19",
          "connectedPins": [
            {
              "part": "R21",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J9.6",
          "net": "N$20",
          "connectedPins": [
            {
              "part": "R22",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.1",
          "net": "N$23",
          "connectedPins": [
            {
              "part": "R8",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J10.6",
          "net": "N$24",
          "connectedPins": [
            {
              "part": "R10",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.1",
          "net": "N$3",
          "connectedPins": [
            {
              "part": "R19",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.2",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.3",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.4",
          "net": "GND",
          "connectedPins": [
            {
              "part": "U1",
              "pin": "VSS",
              "direction": "io"
            },
            {
              "part": "U1",
              "pin": "!OE",
              "direction": "io"
            },
            {
              "part": "R37",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R29",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R30",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "-",
              "direction": "pas"
            },
            {
              "part": "U6",
              "pin": "MODE",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PAD",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "AGND",
              "direction": "io"
            },
            {
              "part": "U6",
              "pin": "PGND",
              "direction": "io"
            },
            {
              "part": "R49",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C103",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C105",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R26",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "C12",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R35",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R36",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "GND",
              "direction": "io"
            },
            {
              "part": "R40",
              "pin": "2",
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
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.5",
          "net": "DC5V_OUT",
          "connectedPins": [
            {
              "part": "Q6",
              "pin": "S",
              "direction": "pas"
            },
            {
              "part": "Q8",
              "pin": "E",
              "direction": "pas"
            },
            {
              "part": "R7",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "J11.6",
          "net": "N$9",
          "connectedPins": [
            {
              "part": "R20",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "package": "H2X3-2.54",
          "sourceLayer": "through-hole"
        },
        {
          "number": "TP12.T",
          "net": "VCC_3V",
          "connectedPins": [
            {
              "part": "L1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R45",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C102",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C104",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "L3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U3",
              "pin": "IN",
              "direction": "io"
            },
            {
              "part": "R32",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C12",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C9",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        },
        {
          "number": "TP1.T",
          "net": "VCC_5V",
          "connectedPins": [
            {
              "part": "U3",
              "pin": "OUT",
              "direction": "io"
            },
            {
              "part": "C7",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R6",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C11",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R9",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R4",
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
              "part": "U1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C3",
              "pin": "+",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R24",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R25",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R39",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "VDD",
              "direction": "io"
            },
            {
              "part": "C6",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "package": "TP-D45MIL",
          "sourceLayer": "1"
        }
      ],
      "sourceSchematicSha256": "d7c6cd4984344f621f10f98881af6e43a42b0d4d081345e7434a6a0fafb4696f",
      "completePortInventory": [
        "J1",
        "GND1",
        "VCC2",
        "SDA1",
        "SCL1",
        "J2",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "JP5",
        "JP6",
        "J4",
        "J3",
        "J6",
        "J7",
        "J8",
        "J9",
        "J10",
        "J11",
        "TP12",
        "TP1"
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
      "sourceArchiveSha256": "ca73ab055bf7f847a4f5efef3a9ca8094eb16b75ce68b70c06fc69ebdc387e2f",
      "sourceWikiSha256": "84c5d13d139d6b15255f7245a9db36e043b4e9e070dd27ae3df1dc56f482f87d",
      "license": "Manufacturer archive, no explicit redistribution license identified; physical facts only and original simplified artwork.",
      "sourceIdentityReview": "Trace output N$ nets through resistors to PCA9685 LED0–LED15. Include JP1–JP6 three-pad address straps. External servo power is separate from Grove power.",
      "photoEvidence": {
        "url": "https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg",
        "sha256": "b57b88c8f84ce275c71c369c97f842da653bd1327ffc3ed4cdbc5f9fcebd0987"
      },
      "electricalTypeReview": "Every imported direction reviewed against exact nets/endpoints, source series components, and manufacturer pinout. Generated labels from anonymous N$ nets were replaced with traced functions or explicitly identified passive strap/service roles.",
      "sourceRevisionMarkings": []
    }
  }
};
