import svg from "../../artwork/ready-arduino-more/arduino-mkr-wan-1310.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "mkr-wan-1310",
  "id": "arduino-mkr-wan-1310",
  "name": "Arduino MKR WAN 1310",
  "shortName": "MKR WAN 1310",
  "manufacturer": "Arduino",
  "source": "https://docs.arduino.cc/hardware/mkr-wan-1310/",
  "cad": {
    "label": "Arduino ABX00029 V3.0 Eagle CAD",
    "url": "https://docs.arduino.cc/static/15f456e5f8dae930df2fb11d4b812b49/ABX00029-cad-files.zip"
  },
  "subtitle": "ABX00029 / SAMD21 / 3.3 V GPIO",
  "revision": "MKR WAN 1310 V3.0",
  "description": "ABX00029, manufacturer Eagle V3.0. MKR expansion rows, SWD pad group, battery and any fitted ESLOV contacts follow this exact board CAD. Radio/SIM/USB ports are complete cable/card interfaces. Single-cell 3.7 V LiPo battery/charger connection; use the board-specific minimum battery capacity in Arduino documentation.",
  "tags": [
    "arduino",
    "mkr",
    "mkr wan 1310",
    "samd21",
    "radio"
  ],
  "color": "#087e83",
  "body": [
    67.7,
    25.0
  ],
  "view": [
    67.7,
    56.0
  ],
  "contacts": [
    {
      "id": "j5-1",
      "number": "J5.1",
      "label": "D6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA20_TCC0-W6. MKR WAN 1310 V3.0; component-side contact.",
      "x": 55.1548,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 55.1548,
      "vy": 2.34
    },
    {
      "id": "j5-2",
      "number": "J5.2",
      "label": "D7",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA21_TCC0-W7. MKR WAN 1310 V3.0; component-side contact.",
      "x": 52.6148,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 52.6148,
      "vy": 2.34
    },
    {
      "id": "j5-3",
      "number": "J5.3",
      "label": "D8",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA16_S1_MOSI. MKR WAN 1310 V3.0; component-side contact.",
      "x": 50.0748,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 50.0748,
      "vy": 2.34
    },
    {
      "id": "j5-4",
      "number": "J5.4",
      "label": "D9",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA17_S1_SCK. MKR WAN 1310 V3.0; component-side contact.",
      "x": 47.5348,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 47.5348,
      "vy": 2.34
    },
    {
      "id": "j5-5",
      "number": "J5.5",
      "label": "D10",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA19_S1_MISO. MKR WAN 1310 V3.0; component-side contact.",
      "x": 44.9948,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 44.9948,
      "vy": 2.34
    },
    {
      "id": "j5-6",
      "number": "J5.6",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA08_S0_I2C_SDA. MKR WAN 1310 V3.0; component-side contact.",
      "x": 42.4548,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 42.4548,
      "vy": 2.34
    },
    {
      "id": "j5-7",
      "number": "J5.7",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA09_S0_I2C_SCL. MKR WAN 1310 V3.0; component-side contact.",
      "x": 39.9148,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 39.9148,
      "vy": 2.34
    },
    {
      "id": "j5-8",
      "number": "J5.8",
      "label": "RX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB23_S5_RX. MKR WAN 1310 V3.0; component-side contact.",
      "x": 37.3748,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 37.3748,
      "vy": 2.34
    },
    {
      "id": "j5-9",
      "number": "J5.9",
      "label": "TX",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB22_S5_TX. MKR WAN 1310 V3.0; component-side contact.",
      "x": 34.8348,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 34.8348,
      "vy": 2.34
    },
    {
      "id": "j5-10",
      "number": "J5.10",
      "label": "RST",
      "type": "input",
      "description": "3.3 V active-low reset input. CAD net: RESET#. MKR WAN 1310 V3.0; component-side contact.",
      "x": 32.2948,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 32.2948,
      "vy": 2.34
    },
    {
      "id": "j5-11",
      "number": "J5.11",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1310 V3.0; component-side contact.",
      "x": 29.7548,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 29.7548,
      "vy": 2.34
    },
    {
      "id": "j5-12",
      "number": "J5.12",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. MKR WAN 1310 V3.0; component-side contact.",
      "x": 27.2148,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 27.2148,
      "vy": 2.34
    },
    {
      "id": "j5-13",
      "number": "J5.13",
      "label": "VIN",
      "type": "power_in",
      "description": "VIN input: 5–7 V per the board specifications. CAD net: VIN. MKR WAN 1310 V3.0; component-side contact.",
      "x": 24.6748,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 24.6748,
      "vy": 2.34
    },
    {
      "id": "j5-14",
      "number": "J5.14",
      "label": "5V",
      "type": "power_out",
      "description": "5 V supply rail; follow the documented board power-path rules. CAD net: N$3. MKR WAN 1310 V3.0; component-side contact.",
      "x": 22.1348,
      "y": 2.34,
      "back": false,
      "connector": "J5",
      "vx": 22.1348,
      "vy": 2.34
    },
    {
      "id": "j3-1",
      "number": "J3.1",
      "label": "AREF",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: PA03_VREFA. MKR WAN 1310 V3.0; component-side contact.",
      "x": 22.1348,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 22.1348,
      "vy": 22.66
    },
    {
      "id": "j3-2",
      "number": "J3.2",
      "label": "A0",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA02_AIN0. MKR WAN 1310 V3.0; component-side contact.",
      "x": 24.6748,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 24.6748,
      "vy": 22.66
    },
    {
      "id": "j3-3",
      "number": "J3.3",
      "label": "A1",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB02_AIN10. MKR WAN 1310 V3.0; component-side contact.",
      "x": 27.2148,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 27.2148,
      "vy": 22.66
    },
    {
      "id": "j3-4",
      "number": "J3.4",
      "label": "A2",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB03_AIN11. MKR WAN 1310 V3.0; component-side contact.",
      "x": 29.7548,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 29.7548,
      "vy": 22.66
    },
    {
      "id": "j3-5",
      "number": "J3.5",
      "label": "A3",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA04_AIN4. MKR WAN 1310 V3.0; component-side contact.",
      "x": 32.2948,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 32.2948,
      "vy": 22.66
    },
    {
      "id": "j3-6",
      "number": "J3.6",
      "label": "A4",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA05_AIN5. MKR WAN 1310 V3.0; component-side contact.",
      "x": 34.8348,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 34.8348,
      "vy": 22.66
    },
    {
      "id": "j3-7",
      "number": "J3.7",
      "label": "A5",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA06_AIN6. MKR WAN 1310 V3.0; component-side contact.",
      "x": 37.3748,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 37.3748,
      "vy": 22.66
    },
    {
      "id": "j3-8",
      "number": "J3.8",
      "label": "A6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA07_AIN7. MKR WAN 1310 V3.0; component-side contact.",
      "x": 39.9148,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 39.9148,
      "vy": 22.66
    },
    {
      "id": "j3-9",
      "number": "J3.9",
      "label": "D0",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA22_TC4-W0. MKR WAN 1310 V3.0; component-side contact.",
      "x": 42.4548,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 42.4548,
      "vy": 22.66
    },
    {
      "id": "j3-10",
      "number": "J3.10",
      "label": "D1",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA23_TC4-W1. MKR WAN 1310 V3.0; component-side contact.",
      "x": 44.9948,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 44.9948,
      "vy": 22.66
    },
    {
      "id": "j3-11",
      "number": "J3.11",
      "label": "D2",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA10_TCC0-W2. MKR WAN 1310 V3.0; component-side contact.",
      "x": 47.5348,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 47.5348,
      "vy": 22.66
    },
    {
      "id": "j3-12",
      "number": "J3.12",
      "label": "D3",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA11_TCC0-W3. MKR WAN 1310 V3.0; component-side contact.",
      "x": 50.0748,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 50.0748,
      "vy": 22.66
    },
    {
      "id": "j3-13",
      "number": "J3.13",
      "label": "D4",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB10_TCC0-W4. MKR WAN 1310 V3.0; component-side contact.",
      "x": 52.6148,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 52.6148,
      "vy": 22.66
    },
    {
      "id": "j3-14",
      "number": "J3.14",
      "label": "D5",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB11_TCC0-W5. MKR WAN 1310 V3.0; component-side contact.",
      "x": 55.1548,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 55.1548,
      "vy": 22.66
    },
    {
      "id": "j7-1",
      "number": "J7.1",
      "label": "BAT",
      "type": "passive",
      "description": "Single-cell 3.7 V LiPo battery/charger connection; use the board-specific minimum battery capacity in Arduino documentation. CAD net: N$2. MKR WAN 1310 V3.0; component-side contact.",
      "x": 14.4,
      "y": 17.1,
      "back": false,
      "connector": "J7",
      "vx": 14.4,
      "vy": 17.1
    },
    {
      "id": "j7-2",
      "number": "J7.2",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1310 V3.0; component-side contact.",
      "x": 16.4,
      "y": 17.1,
      "back": false,
      "connector": "J7",
      "vx": 16.4,
      "vy": 17.1
    },
    {
      "id": "j4-1",
      "number": "J4.1",
      "label": "5V",
      "type": "power_out",
      "description": "5 V supply rail; follow the documented board power-path rules. CAD net: +5V. MKR WAN 1310 V3.0; component-side contact.",
      "x": 11.5,
      "y": 5.225,
      "back": false,
      "connector": "J4",
      "vx": 11.5,
      "vy": 5.225
    },
    {
      "id": "j4-2",
      "number": "J4.2",
      "label": "WK",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA21_TCC0-W7. MKR WAN 1310 V3.0; component-side contact.",
      "x": 10.5,
      "y": 5.225,
      "back": false,
      "connector": "J4",
      "vx": 10.5,
      "vy": 5.225
    },
    {
      "id": "j4-3",
      "number": "J4.3",
      "label": "SCL",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA09_S0_I2C_SCL. MKR WAN 1310 V3.0; component-side contact.",
      "x": 9.5,
      "y": 5.225,
      "back": false,
      "connector": "J4",
      "vx": 9.5,
      "vy": 5.225
    },
    {
      "id": "j4-4",
      "number": "J4.4",
      "label": "SDA",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA08_S0_I2C_SDA. MKR WAN 1310 V3.0; component-side contact.",
      "x": 8.5,
      "y": 5.225,
      "back": false,
      "connector": "J4",
      "vx": 8.5,
      "vy": 5.225
    },
    {
      "id": "j4-5",
      "number": "J4.5",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1310 V3.0; component-side contact.",
      "x": 7.5,
      "y": 5.225,
      "back": false,
      "connector": "J4",
      "vx": 7.5,
      "vy": 5.225
    },
    {
      "id": "j2-1",
      "number": "J2.1",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. MKR WAN 1310 V3.0; underside contact.",
      "x": 27.39,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 40.31,
      "vy": 45.7225
    },
    {
      "id": "j2-2",
      "number": "J2.2",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA31_SWDIO. MKR WAN 1310 V3.0; underside contact.",
      "x": 27.39,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 40.31,
      "vy": 41.2775
    },
    {
      "id": "j2-3",
      "number": "J2.3",
      "label": "RST",
      "type": "input",
      "description": "Active-low target reset through the published SWD reset series circuit. CAD net: N$4. MKR WAN 1310 V3.0; underside contact.",
      "x": 24.85,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 42.85,
      "vy": 45.7225
    },
    {
      "id": "j2-4",
      "number": "J2.4",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: PA30_SWCLK. MKR WAN 1310 V3.0; underside contact.",
      "x": 24.85,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 42.85,
      "vy": 41.2775
    },
    {
      "id": "j2-5",
      "number": "J2.5",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1310 V3.0; underside contact.",
      "x": 22.31,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 45.39,
      "vy": 45.7225
    },
    {
      "id": "j2-6",
      "number": "J2.6",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. MKR WAN 1310 V3.0; underside contact.",
      "x": 22.31,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 45.39,
      "vy": 41.2775
    }
  ],
  "pads": [
    {
      "id": "j5-1",
      "x": 21.3048,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-2",
      "x": 18.7648,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-3",
      "x": 16.2248,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-4",
      "x": 13.6848,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-5",
      "x": 11.1448,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-6",
      "x": 8.6048,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-7",
      "x": 6.0648,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-8",
      "x": 3.5248,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-9",
      "x": 0.9848,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-10",
      "x": -1.5552,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-11",
      "x": -4.0952,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-12",
      "x": -6.6352,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-13",
      "x": -9.1752,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-14",
      "x": -11.7152,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-1",
      "x": -11.7152,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-2",
      "x": -9.1752,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-3",
      "x": -6.6352,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-4",
      "x": -4.0952,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-5",
      "x": -1.5552,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-6",
      "x": 0.9848,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-7",
      "x": 3.5248,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-8",
      "x": 6.0648,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-9",
      "x": 8.6048,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-10",
      "x": 11.1448,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-11",
      "x": 13.6848,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-12",
      "x": 16.2248,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-13",
      "x": 18.7648,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-14",
      "x": 21.3048,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j7-1",
      "x": -19.45,
      "y": 4.6,
      "size": [
        1.0,
        3.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j7-2",
      "x": -17.45,
      "y": 4.6,
      "size": [
        1.0,
        3.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j4-1",
      "x": -22.35,
      "y": -7.275,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j4-2",
      "x": -23.35,
      "y": -7.275,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j4-3",
      "x": -24.35,
      "y": -7.275,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j4-4",
      "x": -25.35,
      "y": -7.275,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j4-5",
      "x": -26.35,
      "y": -7.275,
      "size": [
        0.6,
        1.55
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-1",
      "x": -6.46,
      "y": 2.2225,
      "size": [
        1.143,
        3.683
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-2",
      "x": -6.46,
      "y": -2.2225,
      "size": [
        1.143,
        3.683
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-3",
      "x": -9.0,
      "y": 2.2225,
      "size": [
        1.143,
        3.683
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-4",
      "x": -9.0,
      "y": -2.2225,
      "size": [
        1.143,
        3.683
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-5",
      "x": -11.54,
      "y": 2.2225,
      "size": [
        1.143,
        3.683
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "j2-6",
      "x": -11.54,
      "y": -2.2225,
      "size": [
        1.143,
        3.683
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
