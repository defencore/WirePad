import svg from "../../artwork/ready-adafruit-more/adafruit-feather-f405-4382.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "feather-f405",
  "id": "adafruit-feather-f405-4382",
  "name": "Adafruit Feather STM32F405 Express",
  "shortName": "Feather STM32F405 Express",
  "manufacturer": "Adafruit",
  "source": "https://github.com/adafruit/Adafruit-Feather-STM32F405-Express-PCB",
  "cad": {
    "label": "Adafruit manufacturer Eagle CAD / schematics",
    "url": "https://github.com/adafruit/Adafruit-Feather-STM32F405-Express-PCB"
  },
  "subtitle": "STM32F405 / 168 MHz / SDIO / USB-C",
  "revision": "published Eagle board",
  "description": "Adafruit product #4382; published Eagle board. Physical headers, battery/STEMMA/debug contacts and exposed documented test pads are represented. USB, microSD and RF are complete cable/card interfaces. Unassigned prototyping holes are illustrated; they are not claimed as numbered manufacturer connectors.",
  "tags": [
    "adafruit",
    "feather stm32f405 express",
    "circuitpython",
    "microcontroller"
  ],
  "color": "#264c6a",
  "body": [
    50.8,
    22.86
  ],
  "view": [
    50.8,
    51.72
  ],
  "contacts": [
    {
      "id": "jp1-1",
      "number": "JP1.1",
      "label": "BOOT0",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: BOOT0. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: TX_D1. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: RX_D0. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MISO. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MOSI. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCK. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A5. published Eagle board; component-side contact.",
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
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A4. published Eagle board; component-side contact.",
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
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A3. published Eagle board; component-side contact.",
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
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A2. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A1. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A0. published Eagle board; component-side contact.",
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
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; component-side contact.",
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
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. published Eagle board; component-side contact.",
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
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. published Eagle board; component-side contact.",
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
      "description": "3.3 V active-low reset input. CAD net: !RESET. published Eagle board; component-side contact.",
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
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; component-side contact.",
      "x": 9.922,
      "y": 7.256,
      "back": false,
      "connector": "X1",
      "vx": 9.922,
      "vy": 7.256
    },
    {
      "id": "x1-2",
      "number": "X1.2",
      "label": "BAT",
      "type": "passive",
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. published Eagle board; component-side contact.",
      "x": 11.922,
      "y": 7.256,
      "back": false,
      "connector": "X1",
      "vx": 11.922,
      "vy": 7.256
    },
    {
      "id": "jp3-1",
      "number": "JP3.1",
      "label": "BAT",
      "type": "passive",
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. published Eagle board; component-side contact.",
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
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: EN. published Eagle board; component-side contact.",
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
      "description": "USB VBUS 5 V rail. Do not back-feed an attached host. CAD net: VBUS. published Eagle board; component-side contact.",
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
      "label": "D13",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D13. published Eagle board; component-side contact.",
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
      "label": "D12",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D12. published Eagle board; component-side contact.",
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
      "label": "D11",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D11. published Eagle board; component-side contact.",
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
      "label": "D10",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D10. published Eagle board; component-side contact.",
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
      "label": "D9",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D9. published Eagle board; component-side contact.",
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
      "label": "D6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D6. published Eagle board; component-side contact.",
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
      "label": "D5",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D5. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; component-side contact.",
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
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. published Eagle board; component-side contact.",
      "x": 45.492,
      "y": 14.978,
      "back": false,
      "connector": "CONN1",
      "vx": 45.492,
      "vy": 14.978
    },
    {
      "id": "conn1-3",
      "number": "CONN1.3",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; component-side contact.",
      "x": 45.492,
      "y": 13.978,
      "back": false,
      "connector": "CONN1",
      "vx": 45.492,
      "vy": 13.978
    },
    {
      "id": "conn1-1",
      "number": "CONN1.1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; component-side contact.",
      "x": 45.492,
      "y": 15.978,
      "back": false,
      "connector": "CONN1",
      "vx": 45.492,
      "vy": 15.978
    },
    {
      "id": "conn1-4",
      "number": "CONN1.4",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; component-side contact.",
      "x": 45.492,
      "y": 12.978,
      "back": false,
      "connector": "CONN1",
      "vx": 45.492,
      "vy": 12.978
    },
    {
      "id": "tp1-p-1",
      "number": "TP1.P$1",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SWDIO. published Eagle board; underside contact.",
      "x": 32.258,
      "y": 13.589,
      "back": true,
      "connector": "TP1",
      "vx": 18.542,
      "vy": 42.449
    },
    {
      "id": "tp2-p-1",
      "number": "TP2.P$1",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: SWCLK. published Eagle board; underside contact.",
      "x": 32.258,
      "y": 10.8585,
      "back": true,
      "connector": "TP2",
      "vx": 18.542,
      "vy": 39.7185
    },
    {
      "id": "x3-2",
      "number": "X3.2",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SWDIO. published Eagle board; underside contact.",
      "x": 13.28,
      "y": 17.145,
      "back": true,
      "connector": "X3",
      "vx": 37.52,
      "vy": 46.005
    },
    {
      "id": "x3-4",
      "number": "X3.4",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: SWCLK. published Eagle board; underside contact.",
      "x": 13.28,
      "y": 15.875,
      "back": true,
      "connector": "X3",
      "vx": 37.52,
      "vy": 44.735
    },
    {
      "id": "x3-6",
      "number": "X3.6",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. published Eagle board; underside contact.",
      "x": 13.28,
      "y": 14.605,
      "back": true,
      "connector": "X3",
      "vx": 37.52,
      "vy": 43.465
    },
    {
      "id": "x3-8",
      "number": "X3.8",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. published Eagle board; underside contact.",
      "x": 13.28,
      "y": 13.335,
      "back": true,
      "connector": "X3",
      "vx": 37.52,
      "vy": 42.195
    },
    {
      "id": "x3-10",
      "number": "X3.10",
      "label": "RST",
      "type": "input",
      "description": "3.3 V active-low reset input. CAD net: !RESET. published Eagle board; underside contact.",
      "x": 13.28,
      "y": 12.065,
      "back": true,
      "connector": "X3",
      "vx": 37.52,
      "vy": 40.925
    },
    {
      "id": "x3-1",
      "number": "X3.1",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. published Eagle board; underside contact.",
      "x": 9.58,
      "y": 17.145,
      "back": true,
      "connector": "X3",
      "vx": 41.22,
      "vy": 46.005
    },
    {
      "id": "x3-3",
      "number": "X3.3",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; underside contact.",
      "x": 9.58,
      "y": 15.875,
      "back": true,
      "connector": "X3",
      "vx": 41.22,
      "vy": 44.735
    },
    {
      "id": "x3-5",
      "number": "X3.5",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; underside contact.",
      "x": 9.58,
      "y": 14.605,
      "back": true,
      "connector": "X3",
      "vx": 41.22,
      "vy": 43.465
    },
    {
      "id": "x3-7",
      "number": "X3.7",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; underside contact.",
      "x": 9.58,
      "y": 13.335,
      "back": true,
      "connector": "X3",
      "vx": 41.22,
      "vy": 42.195
    },
    {
      "id": "x3-9",
      "number": "X3.9",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; underside contact.",
      "x": 9.58,
      "y": 12.065,
      "back": true,
      "connector": "X3",
      "vx": 41.22,
      "vy": 40.925
    },
    {
      "id": "tp3-p-1",
      "number": "TP3.P$1",
      "label": "RTC_BAT",
      "type": "power_in",
      "description": "STM32F405 VBAT RTC backup input, distinct from the LiPo charger battery rail. Follow STM32 VBAT limits; do not connect a nominal 3.7 V LiPo directly. CAD net: BATTERY. published Eagle board; underside contact.",
      "x": 25.146,
      "y": 7.874,
      "back": true,
      "connector": "TP3",
      "vx": 25.654,
      "vy": 36.734
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
      "x": -15.478,
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
      "x": -13.478,
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
      "x": 20.092,
      "y": 3.548,
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
      "x": 20.092,
      "y": 2.548,
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
      "x": 20.092,
      "y": 4.548,
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
      "x": 20.092,
      "y": 1.548,
      "size": [
        1.55,
        0.6
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp1-p-1",
      "x": 6.858,
      "y": 2.159,
      "size": [
        1.5,
        1.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp2-p-1",
      "x": 6.858,
      "y": -0.5715,
      "size": [
        1.5,
        1.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-2",
      "x": -12.12,
      "y": 5.715,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-4",
      "x": -12.12,
      "y": 4.445,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-6",
      "x": -12.12,
      "y": 3.175,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-8",
      "x": -12.12,
      "y": 1.905,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-10",
      "x": -12.12,
      "y": 0.635,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-1",
      "x": -15.82,
      "y": 5.715,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-3",
      "x": -15.82,
      "y": 4.445,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-5",
      "x": -15.82,
      "y": 3.175,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-7",
      "x": -15.82,
      "y": 1.905,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "x3-9",
      "x": -15.82,
      "y": 0.635,
      "size": [
        2.6,
        0.65
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp3-p-1",
      "x": -0.254,
      "y": -3.556,
      "size": [
        1.5,
        1.5
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
