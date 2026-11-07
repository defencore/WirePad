import svg from "../../artwork/ready-arduino-more/arduino-mkr-wan-1300.js";

// Exact manufacturer CAD contacts and provenance; the illustration is a separate generated asset.
const board = {
  "key": "mkr-wan-1300",
  "id": "arduino-mkr-wan-1300",
  "name": "Arduino MKR WAN 1300",
  "shortName": "MKR WAN 1300",
  "manufacturer": "Arduino",
  "source": "https://docs.arduino.cc/hardware/mkr-wan-1300/",
  "cad": {
    "label": "Arduino ABX00017 V1.0 Eagle CAD",
    "url": "https://docs.arduino.cc/static/fccaf5f4a3388a3c68ec709017e404e6/ABX00017-cad-files.zip"
  },
  "subtitle": "ABX00017 / SAMD21 / 3.3 V GPIO",
  "revision": "MKR WAN 1300 V1.0",
  "description": "ABX00017, manufacturer Eagle V1.0. MKR expansion rows, SWD pad group, battery and any fitted ESLOV contacts follow this exact board CAD. Radio/SIM/USB ports are complete cable/card interfaces. Two AA/AAA cells, maximum 3.3 V battery input; this version has no LiPo charging.",
  "tags": [
    "arduino",
    "mkr",
    "mkr wan 1300",
    "samd21",
    "radio"
  ],
  "color": "#087e83",
  "body": [
    67.6,
    25.0
  ],
  "view": [
    67.6,
    56.0
  ],
  "contacts": [
    {
      "id": "j5-1",
      "number": "J5.1",
      "label": "D6",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA20_TCC0-W6. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA21_TCC0-W7. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA16_S1_MOSI. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA17_S1_SCK. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA19_S1_MISO. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA08_S0_I2C_SDA. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA09_S0_I2C_SCL. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB23_S5_RX. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB22_S5_TX. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V active-low reset input. CAD net: RESET#. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "VIN input: 5–5.5 V. CAD net: VIN. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "5 V supply rail; follow the documented board power-path rules. CAD net: +5V. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: PA03_VREFA. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA02_AIN0. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB02_AIN10. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB03_AIN11. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA04_AIN4. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA05_AIN5. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA06_AIN6. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA07_AIN7. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA22_TC4-W0. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA23_TC4-W1. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA10_TCC0-W2. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA11_TCC0-W3. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB10_TCC0-W4. MKR WAN 1300 V1.0; component-side contact.",
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
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PB11_TCC0-W5. MKR WAN 1300 V1.0; component-side contact.",
      "x": 55.1548,
      "y": 22.66,
      "back": false,
      "connector": "J3",
      "vx": 55.1548,
      "vy": 22.66
    },
    {
      "id": "j2-1",
      "number": "J2.1",
      "label": "3V3",
      "type": "power_out",
      "description": "Regulated 3.3 V supply output. CAD net: +3V3. MKR WAN 1300 V1.0; underside contact.",
      "x": 27.39,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 40.21,
      "vy": 45.7225
    },
    {
      "id": "j2-2",
      "number": "J2.2",
      "label": "SWDIO",
      "type": "bidirectional",
      "description": "3.3 V GPIO; select the peripheral/analog function documented in the manufacturer pinout. GPIO is not specified for 5 V input. CAD net: PA31_SWDIO. MKR WAN 1300 V1.0; underside contact.",
      "x": 27.39,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 40.21,
      "vy": 41.2775
    },
    {
      "id": "j2-3",
      "number": "J2.3",
      "label": "RST",
      "type": "input",
      "description": "Active-low target reset through the published SWD reset series circuit. CAD net: N$4. MKR WAN 1300 V1.0; underside contact.",
      "x": 24.85,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 42.75,
      "vy": 45.7225
    },
    {
      "id": "j2-4",
      "number": "J2.4",
      "label": "SWCLK",
      "type": "input",
      "description": "3.3 V control/debug/reference input; follow the manufacturer circuit. CAD net: PA30_SWCLK. MKR WAN 1300 V1.0; underside contact.",
      "x": 24.85,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 42.75,
      "vy": 41.2775
    },
    {
      "id": "j2-5",
      "number": "J2.5",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1300 V1.0; underside contact.",
      "x": 22.31,
      "y": 14.7225,
      "back": true,
      "connector": "J2",
      "vx": 45.29,
      "vy": 45.7225
    },
    {
      "id": "j2-6",
      "number": "J2.6",
      "label": "NC",
      "type": "no_connect",
      "description": "Unconnected manufacturer connector position; leave open. CAD net: NC. MKR WAN 1300 V1.0; underside contact.",
      "x": 22.31,
      "y": 10.2775,
      "back": true,
      "connector": "J2",
      "vx": 45.29,
      "vy": 41.2775
    },
    {
      "id": "x1-gnd",
      "number": "X1.GND",
      "label": "GND",
      "type": "power_in",
      "description": "Common ground / supply return. CAD net: GND. MKR WAN 1300 V1.0; component-side contact.",
      "x": 10.77,
      "y": 22.0,
      "back": false,
      "connector": "X1",
      "vx": 10.77,
      "vy": 22.0
    },
    {
      "id": "x1-v",
      "number": "X1.V+",
      "label": "BAT",
      "type": "passive",
      "description": "Two AA/AAA cells, maximum 3.3 V battery input; this version has no LiPo charging. CAD net: VBATT. MKR WAN 1300 V1.0; component-side contact.",
      "x": 8.23,
      "y": 22.0,
      "back": false,
      "connector": "X1",
      "vx": 8.23,
      "vy": 22.0
    },
    {
      "id": "tp1-x",
      "number": "TP1.X",
      "label": "TP1",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$9. MKR WAN 1300 V1.0; underside contact.",
      "x": 51.6,
      "y": 18.9,
      "back": true,
      "connector": "TP1",
      "vx": 16.0,
      "vy": 49.9
    },
    {
      "id": "tp2-x",
      "number": "TP2.X",
      "label": "TP2",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$20. MKR WAN 1300 V1.0; underside contact.",
      "x": 50.6,
      "y": 18.9,
      "back": true,
      "connector": "TP2",
      "vx": 17.0,
      "vy": 49.9
    },
    {
      "id": "tp3-x",
      "number": "TP3.X",
      "label": "TP3",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$21. MKR WAN 1300 V1.0; underside contact.",
      "x": 57.0,
      "y": 7.0,
      "back": true,
      "connector": "TP3",
      "vx": 10.6,
      "vy": 38.0
    },
    {
      "id": "tp4-x",
      "number": "TP4.X",
      "label": "TP4",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$22. MKR WAN 1300 V1.0; underside contact.",
      "x": 57.0,
      "y": 8.0,
      "back": true,
      "connector": "TP4",
      "vx": 10.6,
      "vy": 39.0
    },
    {
      "id": "tp5-x",
      "number": "TP5.X",
      "label": "TP5",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$23. MKR WAN 1300 V1.0; underside contact.",
      "x": 46.3,
      "y": 6.1,
      "back": true,
      "connector": "TP5",
      "vx": 21.3,
      "vy": 37.1
    },
    {
      "id": "tp6-x",
      "number": "TP6.X",
      "label": "TP6",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$24. MKR WAN 1300 V1.0; underside contact.",
      "x": 47.3,
      "y": 6.1,
      "back": true,
      "connector": "TP6",
      "vx": 20.3,
      "vy": 37.1
    },
    {
      "id": "tp7-x",
      "number": "TP7.X",
      "label": "TP7",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$25. MKR WAN 1300 V1.0; underside contact.",
      "x": 48.3,
      "y": 6.1,
      "back": true,
      "connector": "TP7",
      "vx": 19.3,
      "vy": 37.1
    },
    {
      "id": "tp15-x",
      "number": "TP15.X",
      "label": "TP15",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$33. MKR WAN 1300 V1.0; underside contact.",
      "x": 57.0,
      "y": 10.5,
      "back": true,
      "connector": "TP15",
      "vx": 10.6,
      "vy": 41.5
    },
    {
      "id": "tp18-x",
      "number": "TP18.X",
      "label": "TP18",
      "type": "passive",
      "description": "Exposed manufacturer test point; the exact schematic net is retained below. Not an assumed GPIO. CAD net: N$36. MKR WAN 1300 V1.0; underside contact.",
      "x": 52.6,
      "y": 18.9,
      "back": true,
      "connector": "TP18",
      "vx": 15.0,
      "vy": 49.9
    }
  ],
  "pads": [
    {
      "id": "j5-1",
      "x": 21.3548,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-2",
      "x": 18.8148,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-3",
      "x": 16.2748,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-4",
      "x": 13.7348,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-5",
      "x": 11.1948,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-6",
      "x": 8.6548,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-7",
      "x": 6.1148,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-8",
      "x": 3.5748,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-9",
      "x": 1.0348,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-10",
      "x": -1.5052,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-11",
      "x": -4.0452,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-12",
      "x": -6.5852,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-13",
      "x": -9.1252,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j5-14",
      "x": -11.6652,
      "y": -10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-1",
      "x": -11.6652,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-2",
      "x": -9.1252,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-3",
      "x": -6.5852,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-4",
      "x": -4.0452,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-5",
      "x": -1.5052,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-6",
      "x": 1.0348,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-7",
      "x": 3.5748,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-8",
      "x": 6.1148,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-9",
      "x": 8.6548,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-10",
      "x": 11.1948,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-11",
      "x": 13.7348,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-12",
      "x": 16.2748,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-13",
      "x": 18.8148,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j3-14",
      "x": 21.3548,
      "y": 10.16,
      "size": 1.8,
      "drill": 1.0,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "j2-1",
      "x": -6.41,
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
      "x": -6.41,
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
      "x": -8.95,
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
      "x": -8.95,
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
      "x": -11.49,
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
      "x": -11.49,
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
      "id": "x1-gnd",
      "x": -23.03,
      "y": 9.5,
      "size": 2.3400000000000003,
      "drill": 1.3,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "x1-v",
      "x": -25.57,
      "y": 9.5,
      "size": 2.3400000000000003,
      "drill": 1.3,
      "smd": false,
      "shape": "circle"
    },
    {
      "id": "tp1-x",
      "x": 17.8,
      "y": 6.4,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp2-x",
      "x": 16.8,
      "y": 6.4,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp3-x",
      "x": 23.2,
      "y": -5.5,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp4-x",
      "x": 23.2,
      "y": -4.5,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp5-x",
      "x": 12.5,
      "y": -6.4,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp6-x",
      "x": 13.5,
      "y": -6.4,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp7-x",
      "x": 14.5,
      "y": -6.4,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp15-x",
      "x": 23.2,
      "y": -2.0,
      "size": [
        0.5,
        0.5
      ],
      "drill": null,
      "smd": true,
      "shape": "rect"
    },
    {
      "id": "tp18-x",
      "x": 18.8,
      "y": 6.4,
      "size": [
        0.5,
        0.5
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
