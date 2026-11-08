// Manufacturer CAD-derived geometry for explicitly reviewed existing-ID views.
// Original artwork and native export definitions remain unchanged.
export default {
  "adafruit-tmc2209-6121": {
    "source": {
      "label": "Adafruit TMC2209 Stepper Motor Driver exact manufacturer EAGLE header and assembly reference",
      "url": "https://github.com/adafruit/Adafruit-TMC2209-Breakout-PCB/blob/main/Adafruit%20TMC2209%20Stepper%20Motor%20Driver.brd"
    },
    "board": {
      "width": 26.67,
      "height": 24.13,
      "color": "#30383a",
      "outline": "M-13.335 9.525A2.54 2.54 0 0 0 -10.795 12.065L10.795 12.065A2.54 2.54 0 0 0 13.335 9.525L13.335 -9.525A2.54 2.54 0 0 0 10.795 -12.065L-10.795 -12.065A2.54 2.54 0 0 0 -13.335 -9.525L-13.335 9.525Z"
    },
    "holes": [
      {
        "x": -10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": -10.795,
        "y": 5.08,
        "drill": 2.2
      },
      {
        "x": 10.795,
        "y": 5.08,
        "drill": 2.2
      }
    ],
    "contacts": [
      {
        "number": "JP1.6",
        "label": "+",
        "type": "power_in",
        "description": "5\u201329 V motor supply input.",
        "x": -6.35,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "vm",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP1.5",
        "label": "\u2212",
        "type": "power_in",
        "description": "Common supply and signal return.",
        "x": -3.81,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "motor-ground",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP1.4",
        "label": "2B",
        "type": "output",
        "description": "Motor winding 2, terminal B.",
        "x": -1.27,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "b2",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP1.3",
        "label": "2A",
        "type": "output",
        "description": "Motor winding 2, terminal A.",
        "x": 1.27,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a2",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP1.2",
        "label": "1A",
        "type": "output",
        "description": "Motor winding 1, terminal A.",
        "x": 3.81,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a1",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP1.1",
        "label": "1B",
        "type": "output",
        "description": "Motor winding 1, terminal B.",
        "x": 6.35,
        "y": -8.255,
        "size": [
          1.508,
          3.016
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "b1",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP4.1",
        "label": "VDD",
        "type": "power_in",
        "description": "3.3\u20135 V logic supply.",
        "x": -11.43,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "vdd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common supply and signal return.",
        "x": -8.89,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "logic-ground",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.3",
        "label": "DIR",
        "type": "input",
        "description": "Direction control input.",
        "x": -6.35,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "dir",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.4",
        "label": "STEP",
        "type": "input",
        "description": "A rising edge advances one microstep.",
        "x": -3.81,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "step",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.5",
        "label": "MS1",
        "type": "input",
        "description": "Microstep select input 1. Also sets the UART address.",
        "x": -1.27,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "ms1",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.6",
        "label": "MS2",
        "type": "input",
        "description": "Microstep select input 2. Also sets the UART address.",
        "x": 1.27,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "ms2",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.7",
        "label": "DIAG",
        "type": "output",
        "description": "Diagnostic output. Can indicate a fault or configured stall event.",
        "x": 3.81,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "diag",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.8",
        "label": "INDEX",
        "type": "output",
        "description": "Microstep index pulse output.",
        "x": 6.35,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "index",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.9",
        "label": "UART",
        "type": "bidirectional",
        "description": "Single-wire UART configuration and diagnostics.",
        "x": 8.89,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "uart",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP4.10",
        "label": "EN",
        "type": "input",
        "description": "Active-low output enable. Drive high to disable the motor outputs.",
        "x": 11.43,
        "y": 9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "enable",
        "insert": true,
        "face": "front"
      }
    ],
    "extraPads": [],
    "artwork": "<rect x=\"-7.87\" y=\"-11.455\" width=\"15.74\" height=\"6.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.6965\" y=\"-3.997\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.119\" y=\"-2.627\" width=\"5.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.391\" y=\"-3.801\" width=\"4.3\" height=\"4.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.1325\" y=\"2.9815\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.001\" y=\"3.048\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.1565\" y=\"-0.7365\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.95\" y=\"-0.7615\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7435\" y=\"-0.7365\" width=\"0.8\" height=\"1.625\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.261\" y=\"5.334\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.4925\" y=\"5.309\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.931\" y=\"1.74\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.994\" y=\"-3.213\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.7745\" y=\"5.486\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.849\" y=\"1.867\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.563\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.563\" y=\"-1.702\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.563\" y=\"-0.051\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7375\" y=\"1.6\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.674\" y=\"3.137\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.7365,
      -11.495,
      12.731,
      6.669
    ],
    "bodyRegions": [
      {
        "x": -13.335,
        "y": -12.065,
        "width": 26.67,
        "height": 24.13
      }
    ],
    "reverse": false,
    "connections": [
      [
        "motor-ground",
        "logic-ground"
      ]
    ],
    "installation": "Populate the complete ten-pin JP4 logic strip downward. The six motor/power screw terminals remain above the PCB; dashed B markers show their underside solder-tail projections, not extra insertion leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TMC2209 Stepper Motor Driver.brd",
      "boardSha256": "f8a2ecc77d44b62e8cba84cd3d71dd8687c66b013cdde7c47c1fa578e9d2685b",
      "sourceBounds": [
        0.0,
        0.0,
        26.67,
        24.13
      ],
      "selectedConnectors": [
        "JP1",
        "JP4"
      ],
      "reviewWarnings": []
    },
    "attribution": {
      "manufacturer": "Adafruit",
      "license": "Creative Commons Attribution/Share-Alike",
      "licenseURL": "https://github.com/adafruit/Adafruit-TMC2209-Breakout-PCB/blob/main/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-pca9685-815": {
    "source": {
      "label": "Adafruit PCA9685 16-Channel Servo Driver exact manufacturer EAGLE header and assembly reference",
      "url": "https://github.com/adafruit/Adafruit-16-Channel-PWM-Servo-Driver-PCB/blob/master/Adafruit%20PCA9685.brd"
    },
    "board": {
      "width": 62.23,
      "height": 25.4,
      "color": "#17679a",
      "outline": "M-27.94 12.7A3.175 3.175 0 0 1 -31.115 9.525L-31.115 -9.525A3.175 3.175 0 0 1 -27.94 -12.7L27.94 -12.7A3.175 3.175 0 0 1 31.115 -9.525L31.115 9.525A3.175 3.175 0 0 1 27.94 12.7L-27.94 12.7Z"
    },
    "holes": [
      {
        "x": -27.94,
        "y": -9.525,
        "drill": 2.5
      },
      {
        "x": -27.94,
        "y": 9.525,
        "drill": 2.5
      },
      {
        "x": 27.94,
        "y": -9.525,
        "drill": 2.5
      },
      {
        "x": 27.94,
        "y": 9.525,
        "drill": 2.5
      }
    ],
    "contacts": [
      {
        "number": "JP3.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common supply and signal return.",
        "x": -29.21,
        "y": -6.477,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "gnd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP3.5",
        "label": "OE",
        "type": "input",
        "description": "Active-low output enable. Pulled low on the board.",
        "x": -29.21,
        "y": -3.937,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "oe",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I\u00b2C clock. Use pull-ups appropriate for this bus.",
        "x": -29.21,
        "y": -1.397,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "scl",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I\u00b2C data. Use pull-ups appropriate for this bus.",
        "x": -29.21,
        "y": 1.143,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "sda",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Logic supply, 3.3\u20135 V. Match the host I\u00b2C logic level.",
        "x": -29.21,
        "y": 3.683,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "vcc",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP3.1",
        "label": "V+",
        "type": "power_in",
        "description": "Servo supply rail shared by both side headers and all 16 servo connectors. Match the attached servos.",
        "x": -29.21,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.016,
        "pinId": "vplus",
        "insert": true,
        "face": "front"
      },
      {
        "number": "J1.1",
        "label": "V+ IN",
        "type": "power_in",
        "description": "Positive screw terminal. Feeds the servo supply rail through the reverse-polarity protection MOSFET.",
        "x": -1.8,
        "y": -8.89,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.0,
        "pinId": "pwrin",
        "insert": false,
        "face": "rear"
      },
      {
        "number": "JP2.10",
        "label": "0",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 0. The companion V+ and GND contacts share the board's servo rails.",
        "x": -24.13,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm0",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP2.7",
        "label": "1",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 1. The companion V+ and GND contacts share the board's servo rails.",
        "x": -21.59,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm1",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP2.4",
        "label": "2",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 2. The companion V+ and GND contacts share the board's servo rails.",
        "x": -19.05,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm2",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP2.1",
        "label": "3",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 3. The companion V+ and GND contacts share the board's servo rails.",
        "x": -16.51,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm3",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP1.10",
        "label": "4",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 4. The companion V+ and GND contacts share the board's servo rails.",
        "x": -11.43,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm4",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP1.7",
        "label": "5",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 5. The companion V+ and GND contacts share the board's servo rails.",
        "x": -8.89,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm5",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP1.4",
        "label": "6",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 6. The companion V+ and GND contacts share the board's servo rails.",
        "x": -6.35,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm6",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP1.1",
        "label": "7",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 7. The companion V+ and GND contacts share the board's servo rails.",
        "x": -3.81,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm7",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP6.10",
        "label": "8",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 8. The companion V+ and GND contacts share the board's servo rails.",
        "x": 3.81,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm8",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP6.7",
        "label": "9",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 9. The companion V+ and GND contacts share the board's servo rails.",
        "x": 6.35,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm9",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP6.4",
        "label": "10",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 10. The companion V+ and GND contacts share the board's servo rails.",
        "x": 8.89,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm10",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP6.1",
        "label": "11",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 11. The companion V+ and GND contacts share the board's servo rails.",
        "x": 11.43,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP6",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm11",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP5.10",
        "label": "12",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 12. The companion V+ and GND contacts share the board's servo rails.",
        "x": 16.51,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm12",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP5.7",
        "label": "13",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 13. The companion V+ and GND contacts share the board's servo rails.",
        "x": 19.05,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm13",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP5.4",
        "label": "14",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 14. The companion V+ and GND contacts share the board's servo rails.",
        "x": 21.59,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm14",
        "insert": false,
        "face": "front"
      },
      {
        "number": "JP5.1",
        "label": "15",
        "type": "output",
        "description": "12-bit PWM signal for servo channel 15. The companion V+ and GND contacts share the board's servo rails.",
        "x": 24.13,
        "y": 6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP5",
        "back": false,
        "drill": 1.0,
        "pinId": "pwm15",
        "insert": false,
        "face": "front"
      }
    ],
    "extraPads": [
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 1.7,
        "y": -8.89,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -3.81,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -6.35,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -8.89,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -11.43,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -3.81,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -6.35,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -8.89,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -11.43,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -16.51,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -19.05,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -21.59,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": -24.13,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -16.51,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -19.05,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -21.59,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -24.13,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 29.21,
        "y": 6.223,
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
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC.",
        "x": 29.21,
        "y": 3.683,
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
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA.",
        "x": 29.21,
        "y": 1.143,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL.",
        "x": 29.21,
        "y": -1.397,
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
        "label": "OE",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: OE.",
        "x": 29.21,
        "y": -3.937,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 29.21,
        "y": -6.477,
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
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 24.13,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 21.59,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-8",
        "number": "JP5.8",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 19.05,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-11",
        "number": "JP5.11",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 16.51,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 24.13,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 21.59,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-9",
        "number": "JP5.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 19.05,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp5-12",
        "number": "JP5.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 16.51,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-2",
        "number": "JP6.2",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 11.43,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-5",
        "number": "JP6.5",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 8.89,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-8",
        "number": "JP6.8",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 6.35,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-11",
        "number": "JP6.11",
        "label": "5.0V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5.0V.",
        "x": 3.81,
        "y": 8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-3",
        "number": "JP6.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 11.43,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-6",
        "number": "JP6.6",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 8.89,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-9",
        "number": "JP6.9",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 6.35,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "jp6-12",
        "number": "JP6.12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 3.81,
        "y": 11.303,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.0
      }
    ],
    "artwork": "<rect x=\"2.54\" y=\"4.953\" width=\"10.16\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.7\" y=\"4.953\" width=\"10.16\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.24\" y=\"4.953\" width=\"10.16\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.4\" y=\"4.953\" width=\"10.16\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.6\" y=\"-12.49\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.2828\" y=\"-4.7186\" width=\"4.5656\" height=\"8.9292\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"-9.779\" width=\"5.08\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.463\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.923\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.383\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.763\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.303\" y=\"-12.033\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.7445\" y=\"-5.0385\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.895\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.879\" y=\"-7.245\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.959\" y=\"-7.245\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.705\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.8\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.419\" y=\"-7.245\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.251\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.346\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.441\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.61\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.156\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"23.23\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.579\" y=\"-7.277\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"21.325\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.42\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.039\" y=\"-7.277\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.515\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.499\" y=\"-7.277\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.903\" y=\"-9.8645\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.776\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.871\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.966\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.061\" y=\"-0.149\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.992\" y=\"-8.266\" width=\"3.6\" height=\"1.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.9285\" y=\"-6.1865\" width=\"3.6\" height=\"1.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.7125\" y=\"-5.0385\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.9265\" y=\"-8.166\" width=\"3.597\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.3474\" y=\"-12.0514\" width=\"1.3208\" height=\"3.1448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -25.784499999999998,
      -12.53,
      25.44,
      12.613
    ],
    "bodyRegions": [
      {
        "x": -31.115,
        "y": -12.7,
        "width": 62.23,
        "height": 25.4
      }
    ],
    "reverse": false,
    "connections": [],
    "installation": "Populate only the complete six-pin JP3 host strip downward. Leave the duplicate JP4 and all servo banks unpopulated downward, or populate them upward for servo cables. All sixteen PWM signals remain available; repeated supply holes share the single modeled supply endpoints.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PCA9685.brd",
      "boardSha256": "23450939ba27614243a1dacab0cea22af5d8514872fcb8e63a0863a8102a309c",
      "sourceBounds": [
        -31.115,
        -1.7763568394002505e-15,
        31.115,
        25.4
      ],
      "selectedConnectors": [
        "J1",
        "JP1",
        "JP2",
        "JP3",
        "JP4",
        "JP5",
        "JP6"
      ],
      "reviewWarnings": [
        "JP1.1: autogenerated net N$3 requires printed/function label review.",
        "JP1.4: autogenerated net N$2 requires printed/function label review.",
        "JP1.7: autogenerated net N$4 requires printed/function label review.",
        "JP1.10: autogenerated net N$5 requires printed/function label review.",
        "JP2.1: autogenerated net N$6 requires printed/function label review.",
        "JP2.4: autogenerated net N$7 requires printed/function label review.",
        "JP2.7: autogenerated net N$8 requires printed/function label review.",
        "JP2.10: autogenerated net N$9 requires printed/function label review.",
        "JP5.1: autogenerated net N$17 requires printed/function label review.",
        "JP5.4: autogenerated net N$16 requires printed/function label review.",
        "JP5.7: autogenerated net N$15 requires printed/function label review.",
        "JP5.10: autogenerated net N$14 requires printed/function label review.",
        "JP6.1: autogenerated net N$13 requires printed/function label review.",
        "JP6.4: autogenerated net N$12 requires printed/function label review.",
        "JP6.7: autogenerated net N$11 requires printed/function label review.",
        "JP6.10: autogenerated net N$10 requires printed/function label review."
      ]
    },
    "attribution": {
      "manufacturer": "Adafruit",
      "license": "Creative Commons Attribution/Share-Alike",
      "licenseURL": "https://github.com/adafruit/Adafruit-16-Channel-PWM-Servo-Driver-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-max9814-1713": {
    "source": {
      "label": "Adafruit MAX9814 AGC Microphone Amplifier exact manufacturer EAGLE header and assembly reference",
      "url": "https://github.com/adafruit/Adafruit-MAX9814-AGC-Microphone-PCB/blob/master/Adafruit%20MAX9814.brd"
    },
    "board": {
      "width": 25.4,
      "height": 14.097,
      "color": "#17679a",
      "outline": "M-12.7 5.1435A1.905 1.905 0 0 0 -10.795 7.0485L10.795 7.0485A1.905 1.905 0 0 0 12.7 5.1435L12.7 -5.1435A1.905 1.905 0 0 0 10.795 -7.0485L-10.795 -7.0485A1.905 1.905 0 0 0 -12.7 -5.1435L-12.7 5.1435Z"
    },
    "holes": [
      {
        "x": 10.668,
        "y": -5.0165,
        "drill": 2.2
      },
      {
        "x": 10.668,
        "y": 5.0165,
        "drill": 2.2
      }
    ],
    "contacts": [
      {
        "number": "J2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common supply and analog ground.",
        "x": -11.303,
        "y": -4.8895,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "J2.2",
        "label": "V+",
        "type": "power_in",
        "description": "2.7\u20135.5 V supply input through the onboard ferrite filter.",
        "x": -11.303,
        "y": -2.3495,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0,
        "pinId": "vdd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "J2.3",
        "label": "G",
        "type": "input",
        "description": "Maximum gain select. Floating selects 60 dB, GND selects 50 dB, and V+ selects 40 dB.",
        "x": -11.303,
        "y": 0.1905,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0,
        "pinId": "gain",
        "insert": true,
        "face": "front"
      },
      {
        "number": "J2.4",
        "label": "Out",
        "type": "output",
        "description": "Amplified analog microphone output with approximately 1.25 V DC bias and up to 2 V peak-to-peak swing.",
        "x": -11.303,
        "y": 2.7305,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0,
        "pinId": "out",
        "insert": true,
        "face": "front"
      },
      {
        "number": "J2.5",
        "label": "AR",
        "type": "input",
        "description": "Attack/release ratio select. Floating selects 1:4000, V+ selects 1:2000, and GND selects 1:500.",
        "x": -11.303,
        "y": 5.2705,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.0,
        "pinId": "ar",
        "insert": true,
        "face": "front"
      }
    ],
    "extraPads": [],
    "artwork": "<circle cx=\"7.461\" cy=\"-0.0635\" r=\"4.85\" fill=\"#b9bdb7\" stroke=\"#778c81\" stroke-width=\".12\"/><circle cx=\"7.461\" cy=\"-0.0635\" r=\"4.15\" fill=\"#5f726a\" stroke=\"#d5dbd2\" stroke-width=\".12\"/><path d=\"M3.861 -2.8634999999999997h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 -2.1634999999999995h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 -1.4634999999999998h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 -0.7635h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 -0.0635h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 0.6365h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 1.3365h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 2.0364999999999998h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/><path d=\"M3.861 2.7365h7.2\" stroke=\"#9caaa0\" stroke-width=\".14\"/>",
    "artworkBounds": [
      2.551,
      -4.9735000000000005,
      12.371,
      4.8465
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -7.0485,
        "width": 25.4,
        "height": 14.097
      }
    ],
    "reverse": true,
    "connections": [],
    "installation": "Mount with the microphone capsule facing up and all five J2 pins below the PCB. The source electronics-side coordinates are mirrored into this capsule-side view so the capsule never occupies the space between PCB and breadboard.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MAX9814.brd",
      "boardSha256": "0f4d3918b70b92574e25a7539a521718f188e42f9cfb584ca04dbff8aa2db830",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        14.097000000000003
      ],
      "selectedConnectors": [
        "J2"
      ],
      "reviewWarnings": []
    },
    "attribution": {
      "manufacturer": "Adafruit",
      "license": "Creative Commons Attribution/Share-Alike",
      "licenseURL": "https://github.com/adafruit/Adafruit-MAX9814-AGC-Microphone-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-qt-rotary-4991": {
    "source": {
      "label": "Adafruit I\u00b2C QT Rotary Encoder Breakout exact manufacturer EAGLE header and assembly reference",
      "url": "https://github.com/adafruit/Adafruit-I2C-QT-Rotary-Encoder-PCB/blob/main/Adafruit%20I2C%20QT%20Rotary%20Encoder.brd"
    },
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#30383a",
      "outline": "M-12.7 10.16A2.54 2.54 0 0 0 -10.16 12.7L10.16 12.7A2.54 2.54 0 0 0 12.7 10.16L12.7 -10.16A2.54 2.54 0 0 0 10.16 -12.7L-10.16 -12.7A2.54 2.54 0 0 0 -12.7 -10.16L-12.7 10.16Z"
    },
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 2.5
      }
    ],
    "contacts": [
      {
        "number": "JP2.6",
        "label": "INT",
        "type": "output",
        "description": "Configurable active-low interrupt output for encoder and switch events.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "int",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Level-shifted bidirectional I\u00b2C data for 3\u20135 V host logic.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "sda",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.4",
        "label": "SCL",
        "type": "input",
        "description": "Level-shifted I\u00b2C clock input for 3\u20135 V host logic.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "scl",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground for power and logic.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.2",
        "label": "3Vo",
        "type": "power_out",
        "description": "Regulated 3.3 V output.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "3vo",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "3\u20135 V board supply. Match VIN to the host logic voltage.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vin",
        "insert": true,
        "face": "front"
      }
    ],
    "extraPads": [
      {
        "id": "sw1-p-c",
        "number": "SW1.P$C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -5.388154,
        "y": -5.388154,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "SW1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "sw1-p-a",
        "number": "SW1.P$A",
        "label": "ENC_A",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ENC_A.",
        "x": -7.184205,
        "y": -3.592102,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "SW1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "sw1-p-b",
        "number": "SW1.P$B",
        "label": "ENC_B",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ENC_B.",
        "x": -3.592102,
        "y": -7.184205,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "SW1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "sw1-p-gnd1",
        "number": "SW1.P$GND1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": -4.490128,
        "y": 4.490128,
        "size": [
          5.6,
          2.8
        ],
        "shape": "oval",
        "connector": "SW1",
        "back": false,
        "drill": 1.8
      },
      {
        "id": "sw1-p-gnd2",
        "number": "SW1.P$GND2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 4.490128,
        "y": -4.490128,
        "size": [
          5.6,
          2.8
        ],
        "shape": "oval",
        "connector": "SW1",
        "back": false,
        "drill": 1.8
      },
      {
        "id": "sw1-p-1",
        "number": "SW1.P$1",
        "label": "SWITCH",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SWITCH.",
        "x": 3.592102,
        "y": 7.184205,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "SW1",
        "back": false,
        "drill": 1.0
      },
      {
        "id": "sw1-p-2",
        "number": "SW1.P$2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND.",
        "x": 7.184205,
        "y": 3.592102,
        "size": [
          1.8,
          1.8
        ],
        "shape": "circle",
        "connector": "SW1",
        "back": false,
        "drill": 1.0
      }
    ],
    "artwork": "<rect x=\"-3.387227\" y=\"-4.581027\" width=\"5.656854\" height=\"5.656854\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.26\" y=\"-7.115\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.715\" y=\"-11.811\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.429\" y=\"-11.811\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.62\" y=\"-11.811\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.81\" y=\"4.9046\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.074\" y=\"-0.592\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.868\" y=\"3.791\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.62\" y=\"-4.464\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.254\" y=\"5.817\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.486\" y=\"-1.27\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.454\" y=\"3.886\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.185\" y=\"6.045\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.3298\" y=\"3.8352\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.151\" y=\"-6.642\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.286,
      -11.850999999999999,
      12.286,
      7.177
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -12.7,
        "width": 25.4,
        "height": 25.4
      }
    ],
    "reverse": false,
    "connections": [],
    "installation": "This is the bare #4991 board, as sold without an encoder. Populate the entire six-pin JP2 strip downward with the electronics/QT face up. An encoder fitted underneath is a different assembly and requires a new clearance review.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit I2C QT Rotary Encoder.brd",
      "boardSha256": "483f2206f4e19127362d340a6546160befb9e214d98e3efa5e9222d502139ab2",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "JP2",
        "SW1"
      ],
      "reviewWarnings": [
        "SW1.P$GND1: non-orthogonal pad rotation needs an explicit native pattern.",
        "SW1.P$GND2: non-orthogonal pad rotation needs an explicit native pattern."
      ]
    },
    "attribution": {
      "manufacturer": "Adafruit",
      "license": "Creative Commons Attribution/Share-Alike",
      "licenseURL": "https://github.com/adafruit/Adafruit-I2C-QT-Rotary-Encoder-PCB/blob/main/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "sparkfun-openlog-13712": {
    "source": {
      "label": "SparkFun OpenLog Serial Logger exact manufacturer EAGLE header and assembly reference",
      "url": "https://github.com/sparkfun/OpenLog/blob/master/hardware/OpenLog.brd"
    },
    "board": {
      "width": 15.24,
      "height": 19.05,
      "color": "#a52e39",
      "outline": "M7.62 9.525L7.62 -9.525L-7.62 -9.525L-7.62 9.525L7.62 9.525Z"
    },
    "holes": [],
    "contacts": [
      {
        "number": "JP2.6",
        "label": "GRN",
        "type": "input",
        "description": "1 \u2014 Auto-reset from the serial adapter DTR output through the reset capacitor.",
        "x": -6.35,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "grn",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.5",
        "label": "RXI",
        "type": "input",
        "description": "2 \u2014 UART receive, 3.3 V logic. Connect to host TX.",
        "x": -3.81,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "rxi",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.4",
        "label": "TXO",
        "type": "output",
        "description": "3 \u2014 UART transmit, 3.3 V logic. Connect to host RX.",
        "x": -1.27,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "txo",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "4 \u2014 Module power input, 3.3\u201312 V, with 3.3\u20135 V recommended.",
        "x": 1.27,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "vin",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.2",
        "label": "GND",
        "type": "passive",
        "description": "5 \u2014 Ground reference.",
        "x": 3.81,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "gnd",
        "insert": true,
        "face": "front"
      },
      {
        "number": "JP2.1",
        "label": "BLK",
        "type": "passive",
        "description": "6 \u2014 Ground reference.",
        "x": 6.35,
        "y": 8.255,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016,
        "pinId": "blk",
        "insert": true,
        "face": "front"
      }
    ],
    "extraPads": [],
    "artwork": "<g><title>U3 microSD socket, card side up; empty card path</title><rect x=\"-6.858\" y=\"-9.204\" width=\"14\" height=\"15.3\" rx=\".35\" fill=\"#aeb6b4\" stroke=\"#5c716c\" stroke-width=\".12\"/><path d=\"M-6.1 -8.6H6.4V3.8H-4.5L-5.4 5.4H-6.1Z\" fill=\"#c6cbca\" stroke=\"#7c8c87\" stroke-width=\".12\"/><path d=\"M-4.2 -8.5H5.5V-6.9H-4.2Z\" fill=\"#42534f\"/><path d=\"M-5.4 -4.6H5.6M-5.4 -3.1H5.6M-5.4 -1.6H5.6\" stroke=\"#a1aaa6\" stroke-width=\".15\"/></g>",
    "artworkBounds": [
      -6.918,
      -9.264,
      7.202,
      6.156
    ],
    "bodyRegions": [
      {
        "x": -7.62,
        "y": -9.525,
        "width": 15.24,
        "height": 19.05
      }
    ],
    "reverse": true,
    "connections": [
      [
        "gnd",
        "blk"
      ]
    ],
    "installation": "Mount with the microSD socket facing up and all six JP2 pins downward. The original electronics-side source is mirrored to the card-side assembly; this keeps the fitted socket and card path above the breadboard.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "OpenLog.brd",
      "boardSha256": "ba5821b42f633c255d0b6d4cfe7b4d8b0d477664aff0063dff59ae38f8ba480d",
      "sourceBounds": [
        0.0,
        0.0,
        15.24,
        19.05
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": []
    },
    "attribution": {
      "manufacturer": "SparkFun",
      "license": "SparkFun open hardware license; see original LICENSE.md",
      "licenseURL": "https://github.com/sparkfun/OpenLog/blob/master/LICENSE.md",
      "notice": "SparkFun Electronics open source hardware. Original schematic and layout attribution retained."
    }
  }
};
