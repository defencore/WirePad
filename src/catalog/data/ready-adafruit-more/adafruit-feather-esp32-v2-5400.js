import svg from "../../artwork/ready-adafruit-more/adafruit-feather-esp32-v2-5400.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "feather-esp32-v2",
  "id": "adafruit-feather-esp32-v2-5400",
  "name": "Adafruit ESP32 Feather V2",
  "shortName": "ESP32 Feather V2",
  "manufacturer": "Adafruit",
  "source": "https://github.com/adafruit/Adafruit-ESP32-Feather-V2-PCB",
  "cad": {
    "label": "Adafruit manufacturer Eagle CAD / schematics",
    "url": "https://github.com/adafruit/Adafruit-ESP32-Feather-V2-PCB"
  },
  "subtitle": "ESP32-PICO-MINI-02 / 8 MB flash / 2 MB PSRAM",
  "revision": "Feather V2",
  "description": "Adafruit product #5400; Feather V2. Physical headers, battery/STEMMA/debug contacts and exposed documented test pads are represented. USB, microSD and RF are complete cable/card interfaces. Unassigned prototyping holes are illustrated; they are not claimed as numbered manufacturer connectors.",
  "tags": [
    "adafruit",
    "esp32 feather v2",
    "circuitpython",
    "microcontroller"
  ],
  "color": "#292e30",
  "body": [
    50.8,
    22.86
  ],
  "view": [
    50.8,
    22.86
  ],
  "contacts": [
    {
      "id": "jp1-1",
      "number": "JP1.1",
      "label": "I37",
      "type": "input",
      "description": "ESP32 input-only GPIO/ADC contact. No output drive or internal pull resistors. CAD net: I37. Feather V2; component-side contact.",
      "x": 44.45,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 44.45,
      "vy": 21.59
    },
    {
      "id": "jp1-2",
      "number": "JP1.2",
      "label": "TX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: TX/IO8. Feather V2; component-side contact.",
      "x": 41.91,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 41.91,
      "vy": 21.59
    },
    {
      "id": "jp1-3",
      "number": "JP1.3",
      "label": "RX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: RX/IO7. Feather V2; component-side contact.",
      "x": 39.37,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 39.37,
      "vy": 21.59
    },
    {
      "id": "jp1-4",
      "number": "JP1.4",
      "label": "MISO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MISO. Feather V2; component-side contact.",
      "x": 36.83,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 36.83,
      "vy": 21.59
    },
    {
      "id": "jp1-5",
      "number": "JP1.5",
      "label": "MOSI",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MOSI. Feather V2; component-side contact.",
      "x": 34.29,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 34.29,
      "vy": 21.59
    },
    {
      "id": "jp1-6",
      "number": "JP1.6",
      "label": "SCK",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCK. Feather V2; component-side contact.",
      "x": 31.75,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 31.75,
      "vy": 21.59
    },
    {
      "id": "jp1-7",
      "number": "JP1.7",
      "label": "A5",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A5_IO4. Feather V2; component-side contact.",
      "x": 29.21,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 29.21,
      "vy": 21.59
    },
    {
      "id": "jp1-8",
      "number": "JP1.8",
      "label": "A4",
      "type": "input",
      "description": "ESP32 input-only GPIO/ADC contact. No output drive or internal pull resistors. CAD net: A4_I36. Feather V2; component-side contact.",
      "x": 26.67,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 26.67,
      "vy": 21.59
    },
    {
      "id": "jp1-9",
      "number": "JP1.9",
      "label": "A3",
      "type": "input",
      "description": "ESP32 input-only GPIO/ADC contact. No output drive or internal pull resistors. CAD net: A3_I39. Feather V2; component-side contact.",
      "x": 24.13,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 24.13,
      "vy": 21.59
    },
    {
      "id": "jp1-10",
      "number": "JP1.10",
      "label": "A2",
      "type": "input",
      "description": "ESP32 input-only GPIO/ADC contact. No output drive or internal pull resistors. CAD net: A2_I34. Feather V2; component-side contact.",
      "x": 21.59,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 21.59,
      "vy": 21.59
    },
    {
      "id": "jp1-11",
      "number": "JP1.11",
      "label": "A1",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A1_DAC1. Feather V2; component-side contact.",
      "x": 19.05,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 19.05,
      "vy": 21.59
    },
    {
      "id": "jp1-12",
      "number": "JP1.12",
      "label": "A0",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A0_DAC2. Feather V2; component-side contact.",
      "x": 16.51,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 16.51,
      "vy": 21.59
    },
    {
      "id": "jp1-13",
      "number": "JP1.13",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. Feather V2; component-side contact.",
      "x": 13.97,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 13.97,
      "vy": 21.59
    },
    {
      "id": "jp1-14",
      "number": "JP1.14",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. Feather V2; component-side contact.",
      "x": 11.43,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 11.43,
      "vy": 21.59
    },
    {
      "id": "jp1-15",
      "number": "JP1.15",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. Feather V2; component-side contact.",
      "x": 8.89,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 8.89,
      "vy": 21.59
    },
    {
      "id": "jp1-16",
      "number": "JP1.16",
      "label": "RST",
      "type": "input",
      "description": "3.3 V active-low reset input. CAD net: !RESET. Feather V2; component-side contact.",
      "x": 6.35,
      "y": 21.59,
      "back": false,
      "connector": "JP1",
      "vx": 6.35,
      "vy": 21.59
    },
    {
      "id": "x1-1",
      "number": "X1.1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. Feather V2; component-side contact.",
      "x": 9.9855,
      "y": 7.256,
      "back": false,
      "connector": "X1",
      "vx": 9.9855,
      "vy": 7.256
    },
    {
      "id": "x1-2",
      "number": "X1.2",
      "label": "BAT",
      "type": "passive",
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. Feather V2; component-side contact.",
      "x": 11.9855,
      "y": 7.256,
      "back": false,
      "connector": "X1",
      "vx": 11.9855,
      "vy": 7.256
    },
    {
      "id": "jp3-1",
      "number": "JP3.1",
      "label": "BAT",
      "type": "passive",
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. Feather V2; component-side contact.",
      "x": 16.51,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 1.27
    },
    {
      "id": "jp3-2",
      "number": "JP3.2",
      "label": "EN",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: EN. Feather V2; component-side contact.",
      "x": 19.05,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 19.05,
      "vy": 1.27
    },
    {
      "id": "jp3-3",
      "number": "JP3.3",
      "label": "USB",
      "type": "passive",
      "description": "USB VBUS 5 V rail. Do not back-feed an attached host. CAD net: VBUS. Feather V2; component-side contact.",
      "x": 21.59,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 21.59,
      "vy": 1.27
    },
    {
      "id": "jp3-4",
      "number": "JP3.4",
      "label": "IO13_A12",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO13_A12. Feather V2; component-side contact.",
      "x": 24.13,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 24.13,
      "vy": 1.27
    },
    {
      "id": "jp3-5",
      "number": "JP3.5",
      "label": "IO12_A11",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO12_A11. Feather V2; component-side contact.",
      "x": 26.67,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 26.67,
      "vy": 1.27
    },
    {
      "id": "jp3-6",
      "number": "JP3.6",
      "label": "IO27_A10",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO27_A10. Feather V2; component-side contact.",
      "x": 29.21,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 29.21,
      "vy": 1.27
    },
    {
      "id": "jp3-7",
      "number": "JP3.7",
      "label": "IO33_A9",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO33_A9. Feather V2; component-side contact.",
      "x": 31.75,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 31.75,
      "vy": 1.27
    },
    {
      "id": "jp3-8",
      "number": "JP3.8",
      "label": "IO15_A8",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO15_A8. Feather V2; component-side contact.",
      "x": 34.29,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 34.29,
      "vy": 1.27
    },
    {
      "id": "jp3-9",
      "number": "JP3.9",
      "label": "IO32_A7",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO32_A7. Feather V2; component-side contact.",
      "x": 36.83,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 36.83,
      "vy": 1.27
    },
    {
      "id": "jp3-10",
      "number": "JP3.10",
      "label": "IO14_A6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: IO14_A6. Feather V2; component-side contact.",
      "x": 39.37,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 39.37,
      "vy": 1.27
    },
    {
      "id": "jp3-11",
      "number": "JP3.11",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. Feather V2; component-side contact.",
      "x": 41.91,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 41.91,
      "vy": 1.27
    },
    {
      "id": "jp3-12",
      "number": "JP3.12",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. Feather V2; component-side contact.",
      "x": 44.45,
      "y": 1.27,
      "back": false,
      "connector": "JP3",
      "vx": 44.45,
      "vy": 1.27
    },
    {
      "id": "conn1-2",
      "number": "CONN1.2",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: V_NEOI2C. Feather V2; component-side contact.",
      "x": 31.4675,
      "y": 7.612,
      "back": false,
      "connector": "CONN1",
      "vx": 31.4675,
      "vy": 7.612
    },
    {
      "id": "conn1-3",
      "number": "CONN1.3",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. Feather V2; component-side contact.",
      "x": 31.4675,
      "y": 6.612,
      "back": false,
      "connector": "CONN1",
      "vx": 31.4675,
      "vy": 6.612
    },
    {
      "id": "conn1-1",
      "number": "CONN1.1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. Feather V2; component-side contact.",
      "x": 31.4675,
      "y": 8.612,
      "back": false,
      "connector": "CONN1",
      "vx": 31.4675,
      "vy": 8.612
    },
    {
      "id": "conn1-4",
      "number": "CONN1.4",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. Feather V2; component-side contact.",
      "x": 31.4675,
      "y": 5.612,
      "back": false,
      "connector": "CONN1",
      "vx": 31.4675,
      "vy": 5.612
    }
  ],
  "pads": [
    {
      "id": "jp1-1",
      "x": 19.05,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-2",
      "x": 16.51,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-3",
      "x": 13.97,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-4",
      "x": 11.43,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-5",
      "x": 8.89,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-6",
      "x": 6.35,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-7",
      "x": 3.81,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-8",
      "x": 1.27,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-9",
      "x": -1.27,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-10",
      "x": -3.81,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-11",
      "x": -6.35,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-12",
      "x": -8.89,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-13",
      "x": -11.43,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-14",
      "x": -13.97,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-15",
      "x": -16.51,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-16",
      "x": -19.05,
      "y": 10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "x1-1",
      "x": -15.4145,
      "y": -4.174,
      "size": [
        1.0,
        4.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x1-2",
      "x": -13.4145,
      "y": -4.174,
      "size": [
        1.0,
        4.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "jp3-1",
      "x": -8.89,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-2",
      "x": -6.35,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-3",
      "x": -3.81,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-4",
      "x": -1.27,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-5",
      "x": 1.27,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-6",
      "x": 3.81,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-7",
      "x": 6.35,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-8",
      "x": 8.89,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-9",
      "x": 11.43,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-10",
      "x": 13.97,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-11",
      "x": 16.51,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-12",
      "x": 19.05,
      "y": -10.16,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "conn1-2",
      "x": 6.0675,
      "y": -3.818,
      "size": [
        1.55,
        0.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-3",
      "x": 6.0675,
      "y": -4.818,
      "size": [
        1.55,
        0.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-1",
      "x": 6.0675,
      "y": -2.818,
      "size": [
        1.55,
        0.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-4",
      "x": 6.0675,
      "y": -5.818,
      "size": [
        1.55,
        0.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    }
  ],
  "hasBack": false,
  "printedPinLabels": true
};

export default { ...board, svg };
