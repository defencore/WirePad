// Contact geometry extracted from the manufacturer EAGLE boards linked by each entry.
// Adafruit Industries / Limor Fried: CC BY-SA 3.0; SparkFun: CC BY-SA 4.0.
// https://creativecommons.org/licenses/by-sa/3.0/
// https://creativecommons.org/licenses/by-sa/4.0/
export default [
  {
    "revision": "unmarked CAD revision; source commit 8891795d7776b7203f25237db4f25ad5692758d4",
    "id": "adafruit-bluefruit-le-spi-friend-2633",
    "name": "Adafruit Bluefruit LE SPI Friend",
    "shortName": "Bluefruit SPI Friend",
    "manufacturer": "Adafruit",
    "source": "https://github.com/adafruit/Adafruit-Bluefruit-LE-SPI-Friend-PCB/blob/8891795d7776b7203f25237db4f25ad5692758d4/Adafruit%20Bluefruit%20LE%20SPI%20Friend.brd",
    "cad": {
      "label": "Adafruit manufacturer EAGLE board and schematic",
      "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-SPI-Friend-PCB/blob/8891795d7776b7203f25237db4f25ad5692758d4/Adafruit%20Bluefruit%20LE%20SPI%20Friend.brd"
    },
    "subtitle": "nRF51822 / Raytac MDBT40 / product 2633",
    "color": "#145f9d",
    "body": [
      22.86,
      25.4
    ],
    "view": [
      22.86,
      56.8
    ],
    "contacts": [
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "CLK",
        "type": "input",
        "description": "TP1.P$1 — 3.3 V SWD clock input. CAD net: SWCLK.",
        "connector": "TP1",
        "x": 21.336,
        "y": 6.35,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 1.524,
        "vy": 37.75
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "DIO",
        "type": "bidirectional",
        "description": "TP2.P$1 — Direct 3.3 V SWD data / reset contact on the reverse. Use a compatible debug probe. CAD net: SWDIO/RST_3V.",
        "connector": "TP2",
        "x": 21.336,
        "y": 8.89,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 1.524,
        "vy": 40.29
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "SCK",
        "type": "input",
        "description": "JP2.1 — SPI clock input with onboard level shifting; follow the VIN/logic-level guidance. CAD net: SCK_5V.",
        "connector": "JP2",
        "x": 1.27,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 1.27,
        "vy": 22.987
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "MISO",
        "type": "output",
        "description": "JP2.2 — SPI data output to the host, 3.3 V logic. CAD net: MISO_3V.",
        "connector": "JP2",
        "x": 3.81,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 3.81,
        "vy": 22.987
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "MOSI",
        "type": "input",
        "description": "JP2.3 — SPI data input from the host with onboard level shifting. CAD net: MOSI_5V.",
        "connector": "JP2",
        "x": 6.35,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 6.35,
        "vy": 22.987
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "CS",
        "type": "input",
        "description": "JP2.4 — Active-low SPI chip-select input with onboard level shifting. CAD net: CS_5V.",
        "connector": "JP2",
        "x": 8.89,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 8.89,
        "vy": 22.987
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "IRQ",
        "type": "output",
        "description": "JP2.5 — Data-ready interrupt output to the host, 3.3 V logic. CAD net: IRQ_3V.",
        "connector": "JP2",
        "x": 11.43,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 11.43,
        "vy": 22.987
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "DFU",
        "type": "input",
        "description": "JP2.6 — Firmware-update/factory-reset input. This CAD net connects directly to the 3.3 V module; use open-drain or 3.3 V drive. CAD net: DFU_3V.",
        "connector": "JP2",
        "x": 13.97,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 13.97,
        "vy": 22.987
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "RST",
        "type": "input",
        "description": "JP2.7 — Active-low reset input with onboard level shifting; the separate reverse DIO pad is the direct 3.3 V SWD signal. CAD net: SWDIO/RST_5V.",
        "connector": "JP2",
        "x": 16.51,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 16.51,
        "vy": 22.987
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "GND",
        "type": "power_in",
        "description": "JP2.8 — Common ground / supply return. CAD net: GND.",
        "connector": "JP2",
        "x": 19.05,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 19.05,
        "vy": 22.987
      },
      {
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "VIN",
        "type": "power_in",
        "description": "JP2.9 — Board supply input; observe manufacturer power limits and the USB/battery power path. CAD net: VIN.",
        "connector": "JP2",
        "x": 21.59,
        "y": 22.987,
        "back": false,
        "size": [
          1.778,
          1.778
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 21.59,
        "vy": 22.987
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "F.RST",
        "type": "input",
        "description": "TP3.P$1 — Direct module factory-reset service pad; hold low during power-up as the guide describes. CAD net: FACTORYRST.",
        "connector": "TP3",
        "x": 21.336,
        "y": 11.43,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 1.524,
        "vy": 42.83
      },
      {
        "id": "vtref-p-1",
        "number": "VTREF.P$1",
        "label": "3V",
        "type": "power_out",
        "description": "VTREF.P$1 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "VTREF",
        "x": 21.336,
        "y": 13.97,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 1.524,
        "vy": 45.37
      }
    ],
    "elements": [
      [
        11.557,
        9.652,
        10.0,
        18.0,
        "module",
        "U1"
      ],
      [
        17.526,
        2.667,
        1,
        2.1,
        "part",
        "D1"
      ],
      [
        5.334,
        2.54,
        1,
        2.1,
        "part",
        "D2"
      ],
      [
        19.939,
        6.985,
        2.032,
        1,
        "part",
        "R1"
      ],
      [
        3.556,
        6.858,
        2.032,
        1,
        "part",
        "R2"
      ],
      [
        3.429,
        9.271,
        2.1,
        1,
        "part",
        "C1"
      ],
      [
        20.066,
        15.24,
        2.6002,
        1.9,
        "part",
        "U2"
      ],
      [
        20.955,
        18.923,
        1,
        1.9,
        "part",
        "C3"
      ],
      [
        3.556,
        19.177,
        2.1,
        1,
        "part",
        "C4"
      ],
      [
        18.923,
        18.923,
        1,
        1.9,
        "part",
        "R3"
      ],
      [
        19.939,
        11.557,
        1.9,
        2.0,
        "part",
        "Q1"
      ],
      [
        19.939,
        8.763,
        1.9,
        1,
        "part",
        "R4"
      ],
      [
        3.429,
        16.129,
        2.6,
        1.9,
        "part",
        "IC1"
      ],
      [
        3.429,
        10.922,
        2.54,
        1,
        "part",
        "D3"
      ],
      [
        3.429,
        12.7,
        2.032,
        1,
        "part",
        "R5"
      ]
    ],
    "hasBack": true
  },
  {
    "revision": "unmarked CAD revision; source commit c4c1e41ac42f744587e5f3dfef258113a2126342",
    "id": "adafruit-bluefruit-le-uart-friend-2479",
    "name": "Adafruit Bluefruit LE UART Friend",
    "shortName": "Bluefruit UART Friend",
    "manufacturer": "Adafruit",
    "source": "https://github.com/adafruit/Adafruit-Bluefruit-LE-UART-Friend-PCB/blob/c4c1e41ac42f744587e5f3dfef258113a2126342/Adafruit%20Bluefruit%20LE%20UART%20Friend.brd",
    "cad": {
      "label": "Adafruit manufacturer EAGLE board and schematic",
      "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-UART-Friend-PCB/blob/c4c1e41ac42f744587e5f3dfef258113a2126342/Adafruit%20Bluefruit%20LE%20UART%20Friend.brd"
    },
    "subtitle": "nRF51822 / Raytac MDBT40 / product 2479",
    "color": "#145f9d",
    "body": [
      21.336,
      31.75
    ],
    "view": [
      21.336,
      69.5
    ],
    "contacts": [
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "CLK",
        "type": "input",
        "description": "TP1.P$1 — 3.3 V SWD clock input. CAD net: SWCLK.",
        "connector": "TP1",
        "x": 17.272,
        "y": 5.842,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 4.064,
        "vy": 43.592
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "DIO",
        "type": "bidirectional",
        "description": "TP2.P$1 — Direct 3.3 V SWD data / reset contact on the reverse. Use a compatible debug probe. CAD net: SWDIO/RST_3V.",
        "connector": "TP2",
        "x": 17.272,
        "y": 8.382,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 4.064,
        "vy": 46.132
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "F.RST",
        "type": "input",
        "description": "TP3.P$1 — Direct 3.3 V module factory-reset service pad; hold low during power-up. CAD net: FCTRYRST_3V.",
        "connector": "TP3",
        "x": 17.272,
        "y": 10.922,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 4.064,
        "vy": 48.672
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "X1.1 — Common ground / supply return. CAD net: GND.",
        "connector": "X1",
        "x": 11.668,
        "y": 7.51,
        "back": true,
        "size": [
          1.0,
          4.6
        ],
        "drill": null,
        "smd": true,
        "vx": 9.668,
        "vy": 45.26
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "BAT",
        "type": "power_in",
        "description": "X1.2 — External battery supply at the reverse JST connector. This board has no LiPo charging circuit. CAD net: VBAT.",
        "connector": "X1",
        "x": 9.668,
        "y": 7.51,
        "back": true,
        "size": [
          1.0,
          4.6
        ],
        "drill": null,
        "smd": true,
        "vx": 11.668,
        "vy": 45.26
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "DFU",
        "type": "input",
        "description": "JP1.1 — Firmware-update/factory-reset input with onboard level shifting. CAD net: DFU_5V.",
        "connector": "JP1",
        "x": 19.558,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 19.558,
        "vy": 29.21
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "JP1.2 — Common ground / supply return. CAD net: GND.",
        "connector": "JP1",
        "x": 17.018,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 17.018,
        "vy": 29.21
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RTS",
        "type": "output",
        "description": "JP1.3 — UART flow-control output from the Bluefruit module, active low and 3.3 V logic. CAD net: RTS_O.",
        "connector": "JP1",
        "x": 14.478,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 14.478,
        "vy": 29.21
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "VIN",
        "type": "power_in",
        "description": "JP1.4 — Board supply input; observe manufacturer power limits and the USB/battery power path. CAD net: VIN.",
        "connector": "JP1",
        "x": 11.938,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 11.938,
        "vy": 29.21
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "RXI",
        "type": "input",
        "description": "JP1.5 — UART RX input into Bluefruit, with level shifting for 3–5 V host logic. CAD net: RXD_5V.",
        "connector": "JP1",
        "x": 9.398,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 9.398,
        "vy": 29.21
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "TXO",
        "type": "output",
        "description": "JP1.6 — UART TX output from Bluefruit to the host, 3.3 V logic. CAD net: TX_O.",
        "connector": "JP1",
        "x": 6.858,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 6.858,
        "vy": 29.21
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "CTS",
        "type": "input",
        "description": "JP1.7 — Active-low UART clear-to-send input with level shifting; low enables data from TXO. CAD net: CTS_5V.",
        "connector": "JP1",
        "x": 4.318,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 4.318,
        "vy": 29.21
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "MOD",
        "type": "input",
        "description": "JP1.8 — UART mode input: high selects command mode; low selects data mode. Overrides the onboard switch. CAD net: MODE_5V.",
        "connector": "JP1",
        "x": 1.778,
        "y": 29.21,
        "back": false,
        "size": [
          1.9304,
          1.9304
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 1.778,
        "vy": 29.21
      },
      {
        "id": "vtref-p-1",
        "number": "VTREF.P$1",
        "label": "3V",
        "type": "power_out",
        "description": "VTREF.P$1 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "VTREF",
        "x": 17.272,
        "y": 13.462,
        "back": true,
        "size": [
          2.0,
          1.5
        ],
        "drill": null,
        "smd": true,
        "vx": 4.064,
        "vy": 51.212
      }
    ],
    "elements": [
      [
        10.668,
        8.89,
        10.0,
        18.0,
        "module",
        "U1"
      ],
      [
        1.524,
        7.62,
        1,
        2.1,
        "part",
        "D1"
      ],
      [
        19.558,
        7.62,
        1,
        2.1,
        "part",
        "D2"
      ],
      [
        3.556,
        7.62,
        1,
        1.9,
        "part",
        "R1"
      ],
      [
        17.78,
        7.62,
        1,
        1.9,
        "part",
        "R2"
      ],
      [
        2.54,
        10.414,
        1.9,
        1,
        "part",
        "C1"
      ],
      [
        3.302,
        13.208,
        1,
        1.9,
        "part",
        "C2"
      ],
      [
        2.54,
        17.272,
        1.9,
        2.6002,
        "part",
        "U2"
      ],
      [
        2.54,
        20.32,
        1.9,
        1,
        "part",
        "C3"
      ],
      [
        1.524,
        13.208,
        1,
        1.9,
        "part",
        "C4"
      ],
      [
        10.668,
        23.114,
        5.0,
        5.6,
        "button",
        "SW1"
      ],
      [
        3.556,
        24.13,
        1,
        3.7,
        "part",
        "D3"
      ],
      [
        18.542,
        12.954,
        1.9,
        1,
        "part",
        "R3"
      ],
      [
        18.542,
        16.764,
        1.9,
        1,
        "part",
        "R4"
      ],
      [
        18.8468,
        14.986,
        2.54,
        1,
        "part",
        "D4"
      ],
      [
        18.4404,
        18.796,
        2.54,
        1,
        "part",
        "D5"
      ],
      [
        18.542,
        25.4,
        1.9,
        1,
        "part",
        "R7"
      ],
      [
        18.3388,
        23.114,
        2.54,
        1,
        "part",
        "D6"
      ],
      [
        18.3134,
        21.082,
        2.54,
        1,
        "part",
        "D7"
      ],
      [
        1.524,
        24.13,
        1,
        3.7,
        "part",
        "D8"
      ]
    ],
    "hasBack": true
  },
  {
    "revision": "unmarked CAD revision; source commit 3a3a478c8059b5ab06fbf25c2583ac7d3a8ca3eb",
    "id": "adafruit-itsybitsy-nrf52840-express-4481",
    "name": "Adafruit ItsyBitsy nRF52840 Express",
    "shortName": "ItsyBitsy nRF52840",
    "manufacturer": "Adafruit",
    "source": "https://github.com/adafruit/Adafruit-ItsyBitsy-nRF52840-Express-PCB/blob/3a3a478c8059b5ab06fbf25c2583ac7d3a8ca3eb/Adafruit%20ItsyBitsy%20nRF52840%20Express.brd",
    "cad": {
      "label": "Adafruit manufacturer EAGLE board and schematic",
      "url": "https://github.com/adafruit/Adafruit-ItsyBitsy-nRF52840-Express-PCB/blob/3a3a478c8059b5ab06fbf25c2583ac7d3a8ca3eb/Adafruit%20ItsyBitsy%20nRF52840%20Express.brd"
    },
    "subtitle": "nRF52840 / Raytac MDBT50 / product 4481",
    "color": "#145f9d",
    "body": [
      35.56,
      17.78
    ],
    "view": [
      35.56,
      41.56
    ],
    "contacts": [
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "SWD.TP — 3.3 V bidirectional SWD data. CAD net: SWDIO.",
        "connector": "SWD",
        "x": 29.21,
        "y": 13.208,
        "back": true,
        "size": [
          1.3,
          1.3
        ],
        "drill": null,
        "smd": true,
        "vx": 6.35,
        "vy": 36.988
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "CLK",
        "type": "input",
        "description": "SWC.TP — 3.3 V SWD clock input. CAD net: SWCLK.",
        "connector": "SWC",
        "x": 31.242,
        "y": 13.208,
        "back": true,
        "size": [
          1.3,
          1.3
        ],
        "drill": null,
        "smd": true,
        "vx": 4.318,
        "vy": 36.988
      },
      {
        "id": "d-minusplus-tp",
        "number": "D+.TP",
        "label": "D+",
        "type": "bidirectional",
        "description": "D+.TP — USB D+ reverse service pad, shared with the fitted USB connector. CAD net: D+.",
        "connector": "D+",
        "x": 4.953,
        "y": 9.525,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": null,
        "smd": true,
        "vx": 30.607,
        "vy": 33.305
      },
      {
        "id": "d-minus-tp",
        "number": "D-.TP",
        "label": "D-",
        "type": "bidirectional",
        "description": "D-.TP — USB D− reverse service pad, shared with the fitted USB connector. CAD net: D-.",
        "connector": "D-",
        "x": 4.953,
        "y": 8.3185,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": null,
        "smd": true,
        "vx": 30.607,
        "vy": 32.0985
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "BAT",
        "type": "power_in",
        "description": "JP2.1 — External BAT power input, 3.5–6 V on ItsyBitsy. This board does not charge a battery. CAD net: VBAT.",
        "connector": "JP2",
        "x": 1.27,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 1.27,
        "vy": 1.27
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "JP2.2 — Common ground / supply return. CAD net: GND.",
        "connector": "JP2",
        "x": 3.81,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 3.81,
        "vy": 1.27
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "USB",
        "type": "power_out",
        "description": "JP2.3 — USB VBUS 5 V rail output; do not back-feed the attached USB host. CAD net: VBUS.",
        "connector": "JP2",
        "x": 6.35,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 6.35,
        "vy": 1.27
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "D13",
        "type": "bidirectional",
        "description": "JP2.4 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D13.",
        "connector": "JP2",
        "x": 8.89,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 8.89,
        "vy": 1.27
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "D12",
        "type": "bidirectional",
        "description": "JP2.5 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D12.",
        "connector": "JP2",
        "x": 11.43,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 11.43,
        "vy": 1.27
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "D11",
        "type": "bidirectional",
        "description": "JP2.6 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D11.",
        "connector": "JP2",
        "x": 13.97,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 13.97,
        "vy": 1.27
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "D10",
        "type": "bidirectional",
        "description": "JP2.7 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D10.",
        "connector": "JP2",
        "x": 16.51,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 16.51,
        "vy": 1.27
      },
      {
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "D9",
        "type": "bidirectional",
        "description": "JP2.8 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D9.",
        "connector": "JP2",
        "x": 19.05,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 19.05,
        "vy": 1.27
      },
      {
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "D7",
        "type": "bidirectional",
        "description": "JP2.9 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D7.",
        "connector": "JP2",
        "x": 21.59,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 21.59,
        "vy": 1.27
      },
      {
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "5!",
        "type": "output",
        "description": "JP2.10 — D5 output translated to VHI (USB/BAT) level for LEDs; not a bidirectional 3.3 V GPIO. CAD net: D5_5V.",
        "connector": "JP2",
        "x": 24.13,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 24.13,
        "vy": 1.27
      },
      {
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "JP2.11 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: SCL.",
        "connector": "JP2",
        "x": 26.67,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 26.67,
        "vy": 1.27
      },
      {
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "JP2.12 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: SDA.",
        "connector": "JP2",
        "x": 29.21,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 29.21,
        "vy": 1.27
      },
      {
        "id": "jp2-13",
        "number": "JP2.13",
        "label": "TX",
        "type": "bidirectional",
        "description": "JP2.13 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: TX_D1.",
        "connector": "JP2",
        "x": 31.75,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 31.75,
        "vy": 1.27
      },
      {
        "id": "jp2-14",
        "number": "JP2.14",
        "label": "RX",
        "type": "bidirectional",
        "description": "JP2.14 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: RX_D0.",
        "connector": "JP2",
        "x": 34.29,
        "y": 1.27,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 34.29,
        "vy": 1.27
      },
      {
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "D2",
        "type": "bidirectional",
        "description": "JP4.1 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: D2.",
        "connector": "JP4",
        "x": 34.29,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 34.29,
        "vy": 16.51
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "MISO",
        "type": "bidirectional",
        "description": "JP4.2 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: MISO.",
        "connector": "JP4",
        "x": 31.75,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 31.75,
        "vy": 16.51
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "JP4.3 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: MOSI.",
        "connector": "JP4",
        "x": 29.21,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 29.21,
        "vy": 16.51
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "SCK",
        "type": "bidirectional",
        "description": "JP4.4 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: SCK.",
        "connector": "JP4",
        "x": 26.67,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 26.67,
        "vy": 16.51
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "A5",
        "type": "bidirectional",
        "description": "JP4.5 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A5.",
        "connector": "JP4",
        "x": 24.13,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 24.13,
        "vy": 16.51
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "A4",
        "type": "bidirectional",
        "description": "JP4.6 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A4.",
        "connector": "JP4",
        "x": 21.59,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 21.59,
        "vy": 16.51
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "A3",
        "type": "bidirectional",
        "description": "JP4.7 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A3.",
        "connector": "JP4",
        "x": 19.05,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 19.05,
        "vy": 16.51
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "A2",
        "type": "bidirectional",
        "description": "JP4.8 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A2.",
        "connector": "JP4",
        "x": 16.51,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 16.51,
        "vy": 16.51
      },
      {
        "id": "jp4-9",
        "number": "JP4.9",
        "label": "A1",
        "type": "bidirectional",
        "description": "JP4.9 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A1.",
        "connector": "JP4",
        "x": 13.97,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 13.97,
        "vy": 16.51
      },
      {
        "id": "jp4-10",
        "number": "JP4.10",
        "label": "A0",
        "type": "bidirectional",
        "description": "JP4.10 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: A0.",
        "connector": "JP4",
        "x": 11.43,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 11.43,
        "vy": 16.51
      },
      {
        "id": "jp4-11",
        "number": "JP4.11",
        "label": "VHI",
        "type": "power_out",
        "description": "JP4.11 — Diode-selected BAT/USB high-voltage output rail; this is not a 3.3 V supply. CAD net: VHI.",
        "connector": "JP4",
        "x": 8.89,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 8.89,
        "vy": 16.51
      },
      {
        "id": "jp4-12",
        "number": "JP4.12",
        "label": "EN",
        "type": "input",
        "description": "JP4.12 — Pull low to disable the onboard 3.3 V regulator. CAD net: EN.",
        "connector": "JP4",
        "x": 6.35,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 6.35,
        "vy": 16.51
      },
      {
        "id": "jp4-13",
        "number": "JP4.13",
        "label": "3V",
        "type": "power_out",
        "description": "JP4.13 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "JP4",
        "x": 3.81,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 3.81,
        "vy": 16.51
      },
      {
        "id": "jp4-14",
        "number": "JP4.14",
        "label": "RST",
        "type": "input",
        "description": "JP4.14 — Active-low nRF52840 reset, shared with the RESET button. CAD net: !RESET.",
        "connector": "JP4",
        "x": 1.27,
        "y": 16.51,
        "back": false,
        "size": [
          1.6764,
          1.6764
        ],
        "drill": 1.0,
        "smd": false,
        "vx": 1.27,
        "vy": 16.51
      }
    ],
    "elements": [
      [
        8.9408,
        12.192,
        4.1,
        1.6,
        "button",
        "SW1"
      ],
      [
        3.895,
        8.89,
        2.9,
        7.2,
        "usb",
        "X1"
      ],
      [
        12.573,
        8.8646,
        2.1,
        1,
        "part",
        "D2"
      ],
      [
        27.686,
        8.89,
        15.5,
        10.5,
        "module",
        "MDBT1"
      ],
      [
        16.7259,
        9.6774,
        1,
        1.7,
        "part",
        "C4"
      ],
      [
        12.3317,
        7.3914,
        1.7,
        1,
        "part",
        "R2"
      ],
      [
        8.763,
        7.874,
        1.7,
        1,
        "part",
        "R10"
      ],
      [
        8.4455,
        9.5885,
        1.7,
        1,
        "part",
        "R11"
      ],
      [
        18.542,
        9.5885,
        1.5,
        1.9,
        "part",
        "L2"
      ],
      [
        8.89,
        5.207,
        4.1,
        1.6,
        "button",
        "SW2"
      ],
      [
        18.0848,
        5.3594,
        1,
        2.4,
        "part",
        "Y2"
      ],
      [
        16.4084,
        5.4356,
        1,
        1.524,
        "part",
        "C1"
      ],
      [
        15.24,
        5.4483,
        1,
        1.524,
        "part",
        "C2"
      ]
    ],
    "hasBack": true
  },
  {
    "revision": "v1.0; source commit 46f154b42a57c1eed5dd1d212e41cef3c25b264b",
    "id": "sparkfun-pro-nrf52840-mini-15025",
    "name": "SparkFun Pro nRF52840 Mini",
    "shortName": "Pro nRF52840 Mini",
    "manufacturer": "SparkFun",
    "source": "https://github.com/sparkfun/nRF52840_Breakout_MDBT50Q/blob/46f154b42a57c1eed5dd1d212e41cef3c25b264b/Hardware/nrf52840-breakout-mdbt50q.brd",
    "cad": {
      "label": "SparkFun manufacturer EAGLE board and schematic",
      "url": "https://github.com/sparkfun/nRF52840_Breakout_MDBT50Q/blob/46f154b42a57c1eed5dd1d212e41cef3c25b264b/Hardware/nrf52840-breakout-mdbt50q.brd"
    },
    "subtitle": "nRF52840 / Raytac MDBT50Q / DEV-15025",
    "color": "#b12636",
    "body": [
      46.99,
      22.86
    ],
    "view": [
      50.5252,
      51.72
    ],
    "contacts": [
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "J4.1 — 3.3 V bidirectional SWD data. CAD net: SWDIO.",
        "connector": "J4",
        "x": 44.069,
        "y": 10.16,
        "back": true,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 2.921,
        "vy": 39.02
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "SWDCLK",
        "type": "input",
        "description": "J4.2 — 3.3 V SWD clock input. CAD net: SWDCLK.",
        "connector": "J4",
        "x": 44.069,
        "y": 12.7,
        "back": true,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 2.921,
        "vy": 41.56
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "J3.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J3",
        "x": 23.9,
        "y": 17.907,
        "back": false,
        "size": [
          0.6,
          1.35
        ],
        "drill": null,
        "smd": true,
        "vx": 23.9,
        "vy": 17.907
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "3V",
        "type": "power_out",
        "description": "J3.2 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "J3",
        "x": 24.9,
        "y": 17.907,
        "back": false,
        "size": [
          0.6,
          1.35
        ],
        "drill": null,
        "smd": true,
        "vx": 24.9,
        "vy": 17.907
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "08",
        "type": "bidirectional",
        "description": "J3.3 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.08.",
        "connector": "J3",
        "x": 25.9,
        "y": 17.907,
        "back": false,
        "size": [
          0.6,
          1.35
        ],
        "drill": null,
        "smd": true,
        "vx": 25.9,
        "vy": 17.907
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "11",
        "type": "bidirectional",
        "description": "J3.4 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.11.",
        "connector": "J3",
        "x": 26.9,
        "y": 17.907,
        "back": false,
        "size": [
          0.6,
          1.35
        ],
        "drill": null,
        "smd": true,
        "vx": 26.9,
        "vy": 17.907
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "02",
        "type": "bidirectional",
        "description": "J2.1 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.02/AIN0.",
        "connector": "J2",
        "x": 45.72,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 45.72,
        "vy": 3.81
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "03",
        "type": "bidirectional",
        "description": "J2.2 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.03/AIN1.",
        "connector": "J2",
        "x": 43.18,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 43.18,
        "vy": 3.81
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "31",
        "type": "bidirectional",
        "description": "J2.3 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.31/AIN7.",
        "connector": "J2",
        "x": 40.64,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 40.64,
        "vy": 3.81
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "30",
        "type": "bidirectional",
        "description": "J2.4 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.30/AIN6.",
        "connector": "J2",
        "x": 38.1,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 38.1,
        "vy": 3.81
      },
      {
        "id": "j2-5",
        "number": "J2.5",
        "label": "29",
        "type": "bidirectional",
        "description": "J2.5 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.29/AIN5.",
        "connector": "J2",
        "x": 35.56,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 35.56,
        "vy": 3.81
      },
      {
        "id": "j2-6",
        "number": "J2.6",
        "label": "28",
        "type": "bidirectional",
        "description": "J2.6 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.28/AIN4.",
        "connector": "J2",
        "x": 33.02,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 33.02,
        "vy": 3.81
      },
      {
        "id": "j2-7",
        "number": "J2.7",
        "label": "05",
        "type": "bidirectional",
        "description": "J2.7 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.05/AIN3.",
        "connector": "J2",
        "x": 30.48,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 30.48,
        "vy": 3.81
      },
      {
        "id": "j2-8",
        "number": "J2.8",
        "label": "04",
        "type": "bidirectional",
        "description": "J2.8 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.04/AIN2.",
        "connector": "J2",
        "x": 27.94,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 27.94,
        "vy": 3.81
      },
      {
        "id": "j2-9",
        "number": "J2.9",
        "label": "3V",
        "type": "power_out",
        "description": "J2.9 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "J2",
        "x": 25.4,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 25.4,
        "vy": 3.81
      },
      {
        "id": "j2-10",
        "number": "J2.10",
        "label": "RST",
        "type": "input",
        "description": "J2.10 — Active-low nRF52840 reset, shared with the RESET button. CAD net: !RESET.",
        "connector": "J2",
        "x": 22.86,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 22.86,
        "vy": 3.81
      },
      {
        "id": "j2-11",
        "number": "J2.11",
        "label": "GND",
        "type": "power_in",
        "description": "J2.11 — Common ground / supply return. CAD net: GND.",
        "connector": "J2",
        "x": 20.32,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 20.32,
        "vy": 3.81
      },
      {
        "id": "j2-12",
        "number": "J2.12",
        "label": "VIN",
        "type": "power_in",
        "description": "J2.12 — Board supply input; observe manufacturer power limits and the USB/battery power path. CAD net: VIN.",
        "connector": "J2",
        "x": 17.78,
        "y": 3.81,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 17.78,
        "vy": 3.81
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "15",
        "type": "bidirectional",
        "description": "J5.1 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.15.",
        "connector": "J5",
        "x": 20.32,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 20.32,
        "vy": 19.05
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "17",
        "type": "bidirectional",
        "description": "J5.2 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.17.",
        "connector": "J5",
        "x": 17.78,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 17.78,
        "vy": 19.05
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "10",
        "type": "bidirectional",
        "description": "J7.1 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.10/NFC2.",
        "connector": "J7",
        "x": 45.72,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 45.72,
        "vy": 19.05
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "09",
        "type": "bidirectional",
        "description": "J7.2 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.09/NFC1.",
        "connector": "J7",
        "x": 43.18,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 43.18,
        "vy": 19.05
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "23",
        "type": "bidirectional",
        "description": "J7.3 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.23.",
        "connector": "J7",
        "x": 40.64,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 40.64,
        "vy": 19.05
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "22",
        "type": "bidirectional",
        "description": "J7.4 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.22.",
        "connector": "J7",
        "x": 38.1,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 38.1,
        "vy": 19.05
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "21",
        "type": "bidirectional",
        "description": "J7.5 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.21.",
        "connector": "J7",
        "x": 35.56,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 35.56,
        "vy": 19.05
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "20",
        "type": "bidirectional",
        "description": "J7.6 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.20.",
        "connector": "J7",
        "x": 33.02,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 33.02,
        "vy": 19.05
      },
      {
        "id": "j7-7",
        "number": "J7.7",
        "label": "19",
        "type": "bidirectional",
        "description": "J7.7 — 3.3 V GPIO; configure its alternate function in firmware. Not 5 V tolerant. CAD net: P0.19.",
        "connector": "J7",
        "x": 30.48,
        "y": 19.05,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 30.48,
        "vy": 19.05
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "GND",
        "type": "power_in",
        "description": "J1.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J1",
        "x": 7.1544,
        "y": 16.8496,
        "back": false,
        "size": [
          4.6,
          1.0
        ],
        "drill": null,
        "smd": true,
        "vx": 7.1544,
        "vy": 16.8496
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "BAT",
        "type": "power_in",
        "description": "J1.2 — Single-cell rechargeable LiPo battery positive. Follow the onboard charger requirements. CAD net: V_BATT.",
        "connector": "J1",
        "x": 7.1544,
        "y": 14.8496,
        "back": false,
        "size": [
          4.6,
          1.0
        ],
        "drill": null,
        "smd": true,
        "vx": 7.1544,
        "vy": 14.8496
      },
      {
        "id": "j8-8",
        "number": "J8.8",
        "label": "NC",
        "type": "no_connect",
        "description": "J8.8 — Not connected in the published board CAD. CAD net: NC.",
        "connector": "J8",
        "x": 40.005,
        "y": 10.16,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 6.985,
        "vy": 39.02
      },
      {
        "id": "j8-6",
        "number": "J8.6",
        "label": "NC",
        "type": "no_connect",
        "description": "J8.6 — Not connected in the published board CAD. CAD net: NC.",
        "connector": "J8",
        "x": 40.005,
        "y": 11.43,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 6.985,
        "vy": 40.29
      },
      {
        "id": "j8-4",
        "number": "J8.4",
        "label": "SWDCLK",
        "type": "input",
        "description": "J8.4 — 3.3 V SWD clock input. CAD net: SWDCLK.",
        "connector": "J8",
        "x": 40.005,
        "y": 12.7,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 6.985,
        "vy": 41.56
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "J8.2 — 3.3 V bidirectional SWD data. CAD net: SWDIO.",
        "connector": "J8",
        "x": 40.005,
        "y": 13.97,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 6.985,
        "vy": 42.83
      },
      {
        "id": "j8-10",
        "number": "J8.10",
        "label": "RST",
        "type": "input",
        "description": "J8.10 — Active-low nRF52840 reset, shared with the RESET button. CAD net: !RESET.",
        "connector": "J8",
        "x": 40.005,
        "y": 8.89,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 6.985,
        "vy": 37.75
      },
      {
        "id": "j8-7",
        "number": "J8.7",
        "label": "NC",
        "type": "no_connect",
        "description": "J8.7 — Not connected in the published board CAD. CAD net: NC.",
        "connector": "J8",
        "x": 38.735,
        "y": 10.16,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 8.255,
        "vy": 39.02
      },
      {
        "id": "j8-5",
        "number": "J8.5",
        "label": "GND",
        "type": "power_in",
        "description": "J8.5 — Common ground / supply return. CAD net: GND.",
        "connector": "J8",
        "x": 38.735,
        "y": 11.43,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 8.255,
        "vy": 40.29
      },
      {
        "id": "j8-3",
        "number": "J8.3",
        "label": "GND",
        "type": "power_in",
        "description": "J8.3 — Common ground / supply return. CAD net: GND.",
        "connector": "J8",
        "x": 38.735,
        "y": 12.7,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 8.255,
        "vy": 41.56
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "3V",
        "type": "power_out",
        "description": "J8.1 — Onboard regulated 3.3 V output; do not connect another regulator output. CAD net: 3.3V.",
        "connector": "J8",
        "x": 38.735,
        "y": 13.97,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 8.255,
        "vy": 42.83
      },
      {
        "id": "j8-9",
        "number": "J8.9",
        "label": "GND",
        "type": "power_in",
        "description": "J8.9 — Common ground / supply return. CAD net: GND.",
        "connector": "J8",
        "x": 38.735,
        "y": 8.89,
        "back": true,
        "size": [
          1.0,
          1.0
        ],
        "drill": 0.508,
        "smd": false,
        "vx": 8.255,
        "vy": 37.75
      },
      {
        "id": "j9-1",
        "number": "J9.1",
        "label": "GND",
        "type": "power_in",
        "description": "J9.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 30.48,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 30.48,
        "vy": 21.59
      },
      {
        "id": "j9-2",
        "number": "J9.2",
        "label": "GND",
        "type": "power_in",
        "description": "J9.2 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 33.02,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 33.02,
        "vy": 21.59
      },
      {
        "id": "j9-3",
        "number": "J9.3",
        "label": "GND",
        "type": "power_in",
        "description": "J9.3 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 35.56,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 35.56,
        "vy": 21.59
      },
      {
        "id": "j9-4",
        "number": "J9.4",
        "label": "GND",
        "type": "power_in",
        "description": "J9.4 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 38.1,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 38.1,
        "vy": 21.59
      },
      {
        "id": "j9-5",
        "number": "J9.5",
        "label": "GND",
        "type": "power_in",
        "description": "J9.5 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 40.64,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 40.64,
        "vy": 21.59
      },
      {
        "id": "j9-6",
        "number": "J9.6",
        "label": "GND",
        "type": "power_in",
        "description": "J9.6 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 43.18,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 43.18,
        "vy": 21.59
      },
      {
        "id": "j9-7",
        "number": "J9.7",
        "label": "GND",
        "type": "power_in",
        "description": "J9.7 — Common ground / supply return. CAD net: GND.",
        "connector": "J9",
        "x": 45.72,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 45.72,
        "vy": 21.59
      },
      {
        "id": "j12-1",
        "number": "J12.1",
        "label": "GND",
        "type": "power_in",
        "description": "J12.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J12",
        "x": 1.27,
        "y": 17.145,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 1.27,
        "vy": 17.145
      },
      {
        "id": "j12-2",
        "number": "J12.2",
        "label": "BAT",
        "type": "power_in",
        "description": "J12.2 — Single-cell rechargeable LiPo battery positive. Follow the onboard charger requirements. CAD net: V_BATT.",
        "connector": "J12",
        "x": 1.27,
        "y": 14.605,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 1.27,
        "vy": 14.605
      },
      {
        "id": "j13-1",
        "number": "J13.1",
        "label": "GND",
        "type": "power_in",
        "description": "J13.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 17.78,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 17.78,
        "vy": 1.27
      },
      {
        "id": "j13-2",
        "number": "J13.2",
        "label": "GND",
        "type": "power_in",
        "description": "J13.2 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 20.32,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 20.32,
        "vy": 1.27
      },
      {
        "id": "j13-3",
        "number": "J13.3",
        "label": "GND",
        "type": "power_in",
        "description": "J13.3 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 22.86,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 22.86,
        "vy": 1.27
      },
      {
        "id": "j13-4",
        "number": "J13.4",
        "label": "GND",
        "type": "power_in",
        "description": "J13.4 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 25.4,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 25.4,
        "vy": 1.27
      },
      {
        "id": "j13-5",
        "number": "J13.5",
        "label": "GND",
        "type": "power_in",
        "description": "J13.5 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 27.94,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 27.94,
        "vy": 1.27
      },
      {
        "id": "j13-6",
        "number": "J13.6",
        "label": "GND",
        "type": "power_in",
        "description": "J13.6 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 30.48,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 30.48,
        "vy": 1.27
      },
      {
        "id": "j13-7",
        "number": "J13.7",
        "label": "GND",
        "type": "power_in",
        "description": "J13.7 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 33.02,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 33.02,
        "vy": 1.27
      },
      {
        "id": "j13-8",
        "number": "J13.8",
        "label": "GND",
        "type": "power_in",
        "description": "J13.8 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 35.56,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 35.56,
        "vy": 1.27
      },
      {
        "id": "j13-9",
        "number": "J13.9",
        "label": "GND",
        "type": "power_in",
        "description": "J13.9 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 38.1,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 38.1,
        "vy": 1.27
      },
      {
        "id": "j13-10",
        "number": "J13.10",
        "label": "GND",
        "type": "power_in",
        "description": "J13.10 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 40.64,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 40.64,
        "vy": 1.27
      },
      {
        "id": "j13-11",
        "number": "J13.11",
        "label": "GND",
        "type": "power_in",
        "description": "J13.11 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 43.18,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 43.18,
        "vy": 1.27
      },
      {
        "id": "j13-12",
        "number": "J13.12",
        "label": "GND",
        "type": "power_in",
        "description": "J13.12 — Common ground / supply return. CAD net: GND.",
        "connector": "J13",
        "x": 45.72,
        "y": 1.27,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 45.72,
        "vy": 1.27
      },
      {
        "id": "j14-1",
        "number": "J14.1",
        "label": "GND",
        "type": "power_in",
        "description": "J14.1 — Common ground / supply return. CAD net: GND.",
        "connector": "J14",
        "x": 17.78,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 17.78,
        "vy": 21.59
      },
      {
        "id": "j14-2",
        "number": "J14.2",
        "label": "GND",
        "type": "power_in",
        "description": "J14.2 — Common ground / supply return. CAD net: GND.",
        "connector": "J14",
        "x": 20.32,
        "y": 21.59,
        "back": false,
        "size": [
          1.8796,
          1.8796
        ],
        "drill": 1.016,
        "smd": false,
        "vx": 20.32,
        "vy": 21.59
      }
    ],
    "elements": [
      [
        8.255,
        7.112,
        1.7,
        1,
        "part",
        "R1"
      ],
      [
        8.255,
        5.6388,
        1.7,
        1,
        "part",
        "R2"
      ],
      [
        7.62,
        9.906,
        1,
        1.754,
        "part",
        "D6"
      ],
      [
        3.72504,
        6.7056,
        3.00592,
        5.8,
        "usb",
        "J6"
      ],
      [
        18.415,
        7.112,
        1.7,
        1,
        "part",
        "R10"
      ],
      [
        32.766,
        15.367,
        1.7,
        1,
        "part",
        "C1"
      ],
      [
        32.766,
        13.843,
        1.7,
        1,
        "part",
        "C2"
      ],
      [
        33.274,
        6.985,
        1,
        2.5,
        "part",
        "Y1"
      ],
      [
        31.242,
        6.985,
        1,
        1.7,
        "part",
        "C3"
      ],
      [
        32.766,
        9.652,
        1.7,
        1,
        "part",
        "C7"
      ],
      [
        26.67,
        12.954,
        1.7,
        1,
        "part",
        "R3"
      ],
      [
        32.766,
        12.319,
        1.7,
        1,
        "part",
        "C4"
      ],
      [
        42.7752,
        11.43,
        15.5,
        10.5,
        "module",
        "U1"
      ],
      [
        26.67,
        11.43,
        1.754,
        1,
        "part",
        "D1"
      ],
      [
        12.7,
        4.064,
        3.9,
        1,
        "button",
        "S1"
      ],
      [
        21.717,
        7.112,
        1.7,
        1,
        "part",
        "R4"
      ],
      [
        18.4404,
        11.5824,
        1.9,
        2.6002,
        "part",
        "U2"
      ],
      [
        21.717,
        14.605,
        1.7,
        1,
        "part",
        "R5"
      ],
      [
        18.415,
        16.129,
        1.7,
        1,
        "part",
        "R6"
      ],
      [
        7.62,
        3.81,
        1.754,
        1,
        "part",
        "D2"
      ],
      [
        21.717,
        10.795,
        2.3,
        1,
        "part",
        "D3"
      ],
      [
        21.717,
        12.7,
        2.3,
        1,
        "part",
        "D4"
      ],
      [
        18.415,
        8.636,
        1.7,
        1,
        "part",
        "C5"
      ],
      [
        18.415,
        14.605,
        1.7,
        1,
        "part",
        "C6"
      ],
      [
        26.67,
        8.89,
        2.6002,
        1.9,
        "part",
        "U3"
      ],
      [
        26.67,
        6.35,
        1.7,
        1,
        "part",
        "C8"
      ],
      [
        29.718,
        8.9154,
        1,
        1.7,
        "part",
        "C9"
      ],
      [
        12.325,
        11.43,
        2.75,
        7.3,
        "part",
        "S2"
      ],
      [
        12.7,
        18.796,
        3.9,
        1,
        "button",
        "S3"
      ],
      [
        21.717,
        16.129,
        1.7,
        1,
        "part",
        "R7"
      ],
      [
        28.829,
        15.367,
        1,
        1.7,
        "part",
        "R8"
      ],
      [
        30.353,
        15.367,
        1,
        1.7,
        "part",
        "R9"
      ]
    ],
    "hasBack": true
  }
];
