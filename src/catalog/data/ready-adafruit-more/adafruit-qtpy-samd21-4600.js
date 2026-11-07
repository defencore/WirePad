import svg from "../../artwork/ready-adafruit-more/adafruit-qtpy-samd21-4600.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "qtpy-samd21",
  "id": "adafruit-qtpy-samd21-4600",
  "name": "Adafruit QT Py SAMD21",
  "shortName": "QT Py SAMD21",
  "manufacturer": "Adafruit",
  "source": "https://github.com/adafruit/Adafruit-QT-Py-PCB",
  "cad": {
    "label": "Adafruit manufacturer Eagle CAD / schematics",
    "url": "https://github.com/adafruit/Adafruit-QT-Py-PCB"
  },
  "subtitle": "ATSAMD21E18 / USB-C / STEMMA QT",
  "revision": "published Eagle board",
  "description": "Adafruit product #4600; published Eagle board. Physical headers, battery/STEMMA/debug contacts and exposed documented test pads are represented. USB, microSD and RF are complete cable/card interfaces. Unassigned prototyping holes are illustrated; they are not claimed as numbered manufacturer connectors.",
  "tags": [
    "adafruit",
    "qt py samd21",
    "circuitpython",
    "microcontroller"
  ],
  "color": "#292e30",
  "body": [
    17.78,
    20.701
  ],
  "view": [
    17.78,
    47.402
  ],
  "contacts": [
    {
      "id": "swc-tp",
      "number": "SWC.TP",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: SWCLK. published Eagle board; underside contact.",
      "x": 10.16,
      "y": 5.461,
      "back": true,
      "connector": "SWC",
      "vx": 7.62,
      "vy": 32.162
    },
    {
      "id": "swd-tp",
      "number": "SWD.TP",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SWDIO. published Eagle board; underside contact.",
      "x": 7.62,
      "y": 5.461,
      "back": true,
      "connector": "SWD",
      "vx": 10.16,
      "vy": 32.162
    },
    {
      "id": "jp1-1",
      "number": "JP1.1",
      "label": "A0",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A0. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 2.7305,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 2.7305
    },
    {
      "id": "jp1-2",
      "number": "JP1.2",
      "label": "A1",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A1. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 5.2705,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 5.2705
    },
    {
      "id": "jp1-3",
      "number": "JP1.3",
      "label": "A2",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A2. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 7.8105,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 7.8105
    },
    {
      "id": "jp1-4",
      "number": "JP1.4",
      "label": "A3",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A3. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 10.3505,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 10.3505
    },
    {
      "id": "jp1-5",
      "number": "JP1.5",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 12.8905,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 12.8905
    },
    {
      "id": "jp1-6",
      "number": "JP1.6",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 15.4305,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 15.4305
    },
    {
      "id": "jp1-7",
      "number": "JP1.7",
      "label": "TX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: TX_A6. published Eagle board; component-side contact.",
      "x": 1.27,
      "y": 17.9705,
      "back": false,
      "connector": "JP1",
      "vx": 1.27,
      "vy": 17.9705
    },
    {
      "id": "conn1-2",
      "number": "CONN1.2",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; component-side contact.",
      "x": 6.5104,
      "y": 15.7994,
      "back": false,
      "connector": "CONN1",
      "vx": 6.5104,
      "vy": 15.7994
    },
    {
      "id": "conn1-3",
      "number": "CONN1.3",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; component-side contact.",
      "x": 7.5104,
      "y": 15.7994,
      "back": false,
      "connector": "CONN1",
      "vx": 7.5104,
      "vy": 15.7994
    },
    {
      "id": "conn1-1",
      "number": "CONN1.1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; component-side contact.",
      "x": 5.5104,
      "y": 15.7994,
      "back": false,
      "connector": "CONN1",
      "vx": 5.5104,
      "vy": 15.7994
    },
    {
      "id": "conn1-4",
      "number": "CONN1.4",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; component-side contact.",
      "x": 8.5104,
      "y": 15.7994,
      "back": false,
      "connector": "CONN1",
      "vx": 8.5104,
      "vy": 15.7994
    },
    {
      "id": "jp3-1",
      "number": "JP3.1",
      "label": "RX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: RX_A7. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 17.9705,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 17.9705
    },
    {
      "id": "jp3-2",
      "number": "JP3.2",
      "label": "SCK",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCK. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 15.4305,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 15.4305
    },
    {
      "id": "jp3-3",
      "number": "JP3.3",
      "label": "MISO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MISO. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 12.8905,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 12.8905
    },
    {
      "id": "jp3-4",
      "number": "JP3.4",
      "label": "MOSI",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MOSI. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 10.3505,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 10.3505
    },
    {
      "id": "jp3-5",
      "number": "JP3.5",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 7.8105,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 7.8105
    },
    {
      "id": "jp3-6",
      "number": "JP3.6",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 5.2705,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 5.2705
    },
    {
      "id": "jp3-7",
      "number": "JP3.7",
      "label": "5V",
      "type": "power_out",
      "description": "5 V supply rail; follow the documented board power-path rules. CAD net: +5V. published Eagle board; component-side contact.",
      "x": 16.51,
      "y": 2.7305,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 2.7305
    },
    {
      "id": "tp1-p-1",
      "number": "TP1.P$1",
      "label": "5V",
      "type": "power_out",
      "description": "5 V supply rail; follow the documented board power-path rules. CAD net: +5V. published Eagle board; underside contact.",
      "x": 10.795,
      "y": 1.778,
      "back": true,
      "connector": "TP1",
      "vx": 6.985,
      "vy": 28.479
    },
    {
      "id": "tp2-p-1",
      "number": "TP2.P$1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; underside contact.",
      "x": 6.985,
      "y": 1.778,
      "back": true,
      "connector": "TP2",
      "vx": 10.795,
      "vy": 28.479
    }
  ],
  "pads": [
    {
      "id": "swc-tp",
      "x": 1.27,
      "y": -4.8895,
      "size": [
        1.27,
        1.27
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "swd-tp",
      "x": -1.27,
      "y": -4.8895,
      "size": [
        1.27,
        1.27
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "jp1-1",
      "x": -7.62,
      "y": -7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-1",
      "x": -8.89,
      "y": -7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-2",
      "x": -7.62,
      "y": -5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-2",
      "x": -8.89,
      "y": -5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-3",
      "x": -7.62,
      "y": -2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-3",
      "x": -8.89,
      "y": -2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-4",
      "x": -7.62,
      "y": 0.0,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-4",
      "x": -8.89,
      "y": 0.0,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-5",
      "x": -7.62,
      "y": 2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-5",
      "x": -8.89,
      "y": 2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-6",
      "x": -7.62,
      "y": 5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-6",
      "x": -8.89,
      "y": 5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-7",
      "x": -7.62,
      "y": 7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp1-7",
      "x": -8.89,
      "y": 7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "conn1-2",
      "x": -2.3796,
      "y": 5.4489,
      "size": [
        0.5,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-3",
      "x": -1.3796,
      "y": 5.4489,
      "size": [
        0.5,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-1",
      "x": -3.3796,
      "y": 5.4489,
      "size": [
        0.5,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-4",
      "x": -0.3796,
      "y": 5.4489,
      "size": [
        0.5,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "jp3-1",
      "x": 7.62,
      "y": 7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-1",
      "x": 8.89,
      "y": 7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-2",
      "x": 7.62,
      "y": 5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-2",
      "x": 8.89,
      "y": 5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-3",
      "x": 7.62,
      "y": 2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-3",
      "x": 8.89,
      "y": 2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-4",
      "x": 7.62,
      "y": 0.0,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-4",
      "x": 8.89,
      "y": 0.0,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-5",
      "x": 7.62,
      "y": -2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-5",
      "x": 8.89,
      "y": -2.54,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-6",
      "x": 7.62,
      "y": -5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-6",
      "x": 8.89,
      "y": -5.08,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-7",
      "x": 7.62,
      "y": -7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-7",
      "x": 8.89,
      "y": -7.62,
      "size": 1.778,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "tp1-p-1",
      "x": 1.905,
      "y": -8.5725,
      "size": [
        1.5,
        3.0
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp2-p-1",
      "x": -1.905,
      "y": -8.5725,
      "size": [
        1.5,
        3.0
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    }
  ],
  "hasBack": true,
  "printedPinLabels": false
};

export default { ...board, svg };
