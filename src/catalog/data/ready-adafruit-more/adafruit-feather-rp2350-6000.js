import svg from "../../artwork/ready-adafruit-more/adafruit-feather-rp2350-6000.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "feather-rp2350",
  "id": "adafruit-feather-rp2350-6000",
  "name": "Adafruit Feather RP2350 with HSTX",
  "shortName": "Feather RP2350 with HSTX",
  "manufacturer": "Adafruit",
  "source": "https://github.com/adafruit/Adafruit-Feather-RP2350-PCB",
  "cad": {
    "label": "Adafruit manufacturer Eagle CAD / schematics",
    "url": "https://github.com/adafruit/Adafruit-Feather-RP2350-PCB"
  },
  "subtitle": "RP2350A / 8 MB flash / HSTX FPC",
  "revision": "published Eagle board; PSRAM is an option",
  "description": "Adafruit product #6000; published Eagle board; PSRAM is an option. Physical headers, battery/STEMMA/debug contacts and exposed documented test pads are represented. USB, microSD and RF are complete cable/card interfaces. Unassigned prototyping holes are illustrated; they are not claimed as numbered manufacturer connectors.",
  "tags": [
    "adafruit",
    "feather rp2350 with hstx",
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
    51.72
  ],
  "contacts": [
    {
      "id": "jp1-1",
      "number": "JP1.1",
      "label": "PSRAM_CS",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PSRAM_CS. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: TX. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: RX. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MISO. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: MOSI. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCK. published Eagle board; PSRAM is an option; component-side contact.",
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
      "label": "D25",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D25. published Eagle board; PSRAM is an option; component-side contact.",
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
      "label": "D24",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D24. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A3. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A2. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A1. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: A0. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "3.3 V active-low reset input. CAD net: !RESET. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. published Eagle board; PSRAM is an option; component-side contact.",
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
      "description": "Single-cell 3.7 V nominal LiPo battery/charger connection; observe polarity. CAD net: VBAT. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 16.51,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 16.51,
      "vy": 1.2065
    },
    {
      "id": "jp3-2",
      "number": "JP3.2",
      "label": "EN",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: EN. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 19.05,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 19.05,
      "vy": 1.2065
    },
    {
      "id": "jp3-3",
      "number": "JP3.3",
      "label": "USB",
      "type": "passive",
      "description": "USB VBUS 5 V rail. Do not back-feed an attached host. CAD net: VBUS. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 21.59,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 21.59,
      "vy": 1.2065
    },
    {
      "id": "jp3-4",
      "number": "JP3.4",
      "label": "D7",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D7. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 24.13,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 24.13,
      "vy": 1.2065
    },
    {
      "id": "jp3-5",
      "number": "JP3.5",
      "label": "D4",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D4. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 26.67,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 26.67,
      "vy": 1.2065
    },
    {
      "id": "jp3-6",
      "number": "JP3.6",
      "label": "D11",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D11. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 29.21,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 29.21,
      "vy": 1.2065
    },
    {
      "id": "jp3-7",
      "number": "JP3.7",
      "label": "D10",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D10. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 31.75,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 31.75,
      "vy": 1.2065
    },
    {
      "id": "jp3-8",
      "number": "JP3.8",
      "label": "D9",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D9. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 34.29,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 34.29,
      "vy": 1.2065
    },
    {
      "id": "jp3-9",
      "number": "JP3.9",
      "label": "D6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D6. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 36.83,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 36.83,
      "vy": 1.2065
    },
    {
      "id": "jp3-10",
      "number": "JP3.10",
      "label": "D5",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D5. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 39.37,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 39.37,
      "vy": 1.2065
    },
    {
      "id": "jp3-11",
      "number": "JP3.11",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 41.91,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 41.91,
      "vy": 1.2065
    },
    {
      "id": "jp3-12",
      "number": "JP3.12",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 44.45,
      "y": 1.2065,
      "back": false,
      "connector": "JP3",
      "vx": 44.45,
      "vy": 1.2065
    },
    {
      "id": "tp3-p-1",
      "number": "TP3.P$1",
      "label": "USBBOOT",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: USBBOOT. published Eagle board; PSRAM is an option; underside contact.",
      "x": 12.446,
      "y": 18.415,
      "back": true,
      "connector": "TP3",
      "vx": 38.354,
      "vy": 47.275
    },
    {
      "id": "swd-p-1",
      "number": "SWD.P$1",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SWDIO. published Eagle board; PSRAM is an option; underside contact.",
      "x": 19.431,
      "y": 13.5255,
      "back": true,
      "connector": "SWD",
      "vx": 31.369,
      "vy": 42.3855
    },
    {
      "id": "swc-p-1",
      "number": "SWC.P$1",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: SWCLK. published Eagle board; PSRAM is an option; underside contact.",
      "x": 16.891,
      "y": 13.5255,
      "back": true,
      "connector": "SWC",
      "vx": 33.909,
      "vy": 42.3855
    },
    {
      "id": "cn2-1",
      "number": "CN2.1",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 6.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 6.307
    },
    {
      "id": "cn2-2",
      "number": "CN2.2",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 6.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 6.807
    },
    {
      "id": "cn2-3",
      "number": "CN2.3",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 7.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 7.307
    },
    {
      "id": "cn2-4",
      "number": "CN2.4",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 7.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 7.807
    },
    {
      "id": "cn2-5",
      "number": "CN2.5",
      "label": "D10",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D10. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 8.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 8.307
    },
    {
      "id": "cn2-6",
      "number": "CN2.6",
      "label": "D11",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: D11. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 8.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 8.807
    },
    {
      "id": "cn2-7",
      "number": "CN2.7",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 9.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 9.307
    },
    {
      "id": "cn2-8",
      "number": "CN2.8",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 9.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 9.807
    },
    {
      "id": "cn2-9",
      "number": "CN2.9",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 10.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 10.307
    },
    {
      "id": "cn2-10",
      "number": "CN2.10",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 10.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 10.807
    },
    {
      "id": "cn2-11",
      "number": "CN2.11",
      "label": "HSTX12",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX12. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 11.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 11.307
    },
    {
      "id": "cn2-12",
      "number": "CN2.12",
      "label": "HSTX13",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX13. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 11.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 11.807
    },
    {
      "id": "cn2-13",
      "number": "CN2.13",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 12.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 12.307
    },
    {
      "id": "cn2-14",
      "number": "CN2.14",
      "label": "HSTX14",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX14. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 12.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 12.807
    },
    {
      "id": "cn2-15",
      "number": "CN2.15",
      "label": "HSTX15",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX15. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 13.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 13.307
    },
    {
      "id": "cn2-16",
      "number": "CN2.16",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 13.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 13.807
    },
    {
      "id": "cn2-17",
      "number": "CN2.17",
      "label": "HSTX16",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX16. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 14.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 14.307
    },
    {
      "id": "cn2-18",
      "number": "CN2.18",
      "label": "HSTX17",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX17. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 14.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 14.807
    },
    {
      "id": "cn2-19",
      "number": "CN2.19",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 15.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 15.307
    },
    {
      "id": "cn2-20",
      "number": "CN2.20",
      "label": "HSTX18",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX18. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 15.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 15.807
    },
    {
      "id": "cn2-21",
      "number": "CN2.21",
      "label": "HSTX19",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: HSTX19. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 16.307,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 16.307
    },
    {
      "id": "cn2-22",
      "number": "CN2.22",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 42.026,
      "y": 16.807,
      "back": false,
      "connector": "CN2",
      "vx": 42.026,
      "vy": 16.807
    },
    {
      "id": "conn1-2",
      "number": "CONN1.2",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: 3.3V. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 36.7745,
      "y": 13.4335,
      "back": false,
      "connector": "CONN1",
      "vx": 36.7745,
      "vy": 13.4335
    },
    {
      "id": "conn1-3",
      "number": "CONN1.3",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SDA. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 37.7745,
      "y": 13.4335,
      "back": false,
      "connector": "CONN1",
      "vx": 37.7745,
      "vy": 13.4335
    },
    {
      "id": "conn1-1",
      "number": "CONN1.1",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 35.7745,
      "y": 13.4335,
      "back": false,
      "connector": "CONN1",
      "vx": 35.7745,
      "vy": 13.4335
    },
    {
      "id": "conn1-4",
      "number": "CONN1.4",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SCL. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 38.7745,
      "y": 13.4335,
      "back": false,
      "connector": "CONN1",
      "vx": 38.7745,
      "vy": 13.4335
    },
    {
      "id": "debug-2",
      "number": "DEBUG.2",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 37.465,
      "y": 18.7675,
      "back": false,
      "connector": "DEBUG",
      "vx": 37.465,
      "vy": 18.7675
    },
    {
      "id": "debug-3",
      "number": "DEBUG.3",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: SWDIO. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 38.465,
      "y": 18.7675,
      "back": false,
      "connector": "DEBUG",
      "vx": 38.465,
      "vy": 18.7675
    },
    {
      "id": "debug-1",
      "number": "DEBUG.1",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: SWCLK. published Eagle board; PSRAM is an option; component-side contact.",
      "x": 36.465,
      "y": 18.7675,
      "back": false,
      "connector": "DEBUG",
      "vx": 36.465,
      "vy": 18.7675
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
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-2",
      "x": -6.35,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-3",
      "x": -3.81,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-4",
      "x": -1.27,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-5",
      "x": 1.27,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-6",
      "x": 3.81,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-7",
      "x": 6.35,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-8",
      "x": 8.89,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-9",
      "x": 11.43,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-10",
      "x": 13.97,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-11",
      "x": 16.51,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "jp3-12",
      "x": 19.05,
      "y": -10.2235,
      "size": 1.6764,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "tp3-p-1",
      "x": -12.954,
      "y": 6.985,
      "size": [
        1.5,
        1.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "swd-p-1",
      "x": -5.969,
      "y": 2.0955,
      "size": [
        1.0,
        1.0
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "swc-p-1",
      "x": -8.509,
      "y": 2.0955,
      "size": [
        1.0,
        1.0
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-1",
      "x": 16.626,
      "y": -5.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-2",
      "x": 16.626,
      "y": -4.623,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-3",
      "x": 16.626,
      "y": -4.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-4",
      "x": 16.626,
      "y": -3.623,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-5",
      "x": 16.626,
      "y": -3.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-6",
      "x": 16.626,
      "y": -2.623,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-7",
      "x": 16.626,
      "y": -2.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-8",
      "x": 16.626,
      "y": -1.623,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-9",
      "x": 16.626,
      "y": -1.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-10",
      "x": 16.626,
      "y": -0.623,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-11",
      "x": 16.626,
      "y": -0.123,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-12",
      "x": 16.626,
      "y": 0.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-13",
      "x": 16.626,
      "y": 0.877,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-14",
      "x": 16.626,
      "y": 1.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-15",
      "x": 16.626,
      "y": 1.877,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-16",
      "x": 16.626,
      "y": 2.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-17",
      "x": 16.626,
      "y": 2.877,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-18",
      "x": 16.626,
      "y": 3.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-19",
      "x": 16.626,
      "y": 3.877,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-20",
      "x": 16.626,
      "y": 4.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-21",
      "x": 16.626,
      "y": 4.877,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "cn2-22",
      "x": 16.626,
      "y": 5.377,
      "size": [
        1.4,
        0.25
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-2",
      "x": 11.3745,
      "y": 2.0035,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-3",
      "x": 12.3745,
      "y": 2.0035,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-1",
      "x": 10.3745,
      "y": 2.0035,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "conn1-4",
      "x": 13.3745,
      "y": 2.0035,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "debug-2",
      "x": 12.065,
      "y": 7.3375,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "debug-3",
      "x": 13.065,
      "y": 7.3375,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "debug-1",
      "x": 11.065,
      "y": 7.3375,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    }
  ],
  "hasBack": true,
  "printedPinLabels": true
};

export default { ...board, svg };
