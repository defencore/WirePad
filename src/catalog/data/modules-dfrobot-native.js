// Manufacturer KiCad contact geometry, reconciled with physical pin maps.
export default [
  {
    "id": "dfrobot-fermion-bmm150-sen0419",
    "sku": "SEN0419",
    "name": "DFRobot Fermion: BMM150 Triple Axis Magnetometer Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer KiCad library",
    "source": "https://wiki.dfrobot.com/sen0419/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/5249018a98840c48c5e0258a6e0a2145.png",
      "https://dfimg.dfrobot.com/wiki/20544/SEN0419_bmm150-3-axis-digital-geomagnetic-sensor_cad_1.0.zip",
      "https://dfimg.dfrobot.com/wiki/20544/SEN0419_bmm150-3-axis-digital-geomagnetic-sensor_schematics_1.0.pdf"
    ],
    "description": "BMM150 three-axis magnetometer breakout, with all nine physical header terminals. Physical numbering follows the manufacturer KiCad library and photographed row: VCC, GND, SCK, SDI, SDO, CS, PS, DRDY, INT. The wiki table omits the GND row, so its subsequent logical numbers do not describe the nine-contact header. Supply and logic are 3.3 V only.",
    "tags": [
      "fermion",
      "bmm150",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2507.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 25,
      "height": 16,
      "color": "#262b28",
      "outline": "M-11.0 -8.0H11.0A1.5 1.5 0 0 1 12.5 -6.5V6.5A1.5 1.5 0 0 1 11.0 8.0H-11.0A1.5 1.5 0 0 1 -12.5 6.5V-6.5A1.5 1.5 0 0 1 -11.0 -8.0Z"
    },
    "contacts": [
      {
        "id": "p1",
        "number": "1",
        "x": -10.152,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V supply input only.",
        "connector": "HEADER"
      },
      {
        "id": "p2",
        "number": "2",
        "x": -7.612,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "connector": "HEADER"
      },
      {
        "id": "p3",
        "number": "3",
        "x": -5.072,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "SCK",
        "type": "input",
        "description": "Sensor serial clock input.",
        "connector": "HEADER"
      },
      {
        "id": "p4",
        "number": "4",
        "x": -2.532,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "SDI",
        "type": "bidirectional",
        "description": "SPI data input / bidirectional I2C data depending on the selected interface.",
        "connector": "HEADER"
      },
      {
        "id": "p5",
        "number": "5",
        "x": 0.008,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output / I2C address-selection input depending on the selected interface.",
        "connector": "HEADER"
      },
      {
        "id": "p6",
        "number": "6",
        "x": 2.548,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "CS",
        "type": "input",
        "description": "Chip-select/interface configuration input; follow the manufacturer PS/CS configuration.",
        "connector": "HEADER"
      },
      {
        "id": "p7",
        "number": "7",
        "x": 5.088,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "PS",
        "type": "input",
        "description": "Communication-protocol selection input.",
        "connector": "HEADER"
      },
      {
        "id": "p8",
        "number": "8",
        "x": 7.628,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "DRDY",
        "type": "output",
        "description": "Data-ready output.",
        "connector": "HEADER"
      },
      {
        "id": "p9",
        "number": "9",
        "x": 10.168,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "INT",
        "type": "output",
        "description": "Programmable interrupt output.",
        "connector": "HEADER"
      }
    ],
    "footprintPads": [
      {
        "id": "p1",
        "number": "1",
        "x": -10.152,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p2",
        "number": "2",
        "x": -7.612,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p3",
        "number": "3",
        "x": -5.072,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p4",
        "number": "4",
        "x": -2.532,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p5",
        "number": "5",
        "x": 0.008,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p6",
        "number": "6",
        "x": 2.548,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p7",
        "number": "7",
        "x": 5.088,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p8",
        "number": "8",
        "x": 7.628,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p9",
        "number": "9",
        "x": 10.168,
        "y": 6.467,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "holes": [
      {
        "x": -10.0,
        "y": -5.5,
        "drill": 2.0
      },
      {
        "x": 10.0,
        "y": -5.5,
        "drill": 2.0
      }
    ],
    "artwork": "<circle cx=\"-10.0\" cy=\"-5.5\" r=\"1.85\" fill=\"#b9b38d\" stroke=\"#d3d0b2\" stroke-width=\".1\"/><circle cx=\"-10.0\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"10.0\" cy=\"-5.5\" r=\"1.85\" fill=\"#b9b38d\" stroke=\"#d3d0b2\" stroke-width=\".1\"/><circle cx=\"10.0\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.3\" y=\"-3.7\" width=\"2.6\" height=\"2.6\" rx=\".15\" fill=\"#4b4c48\" stroke=\"#8b948c\" stroke-width=\".1\"/><rect x=\"-8.4\" y=\"1.0\" width=\"2.0\" height=\"2.2\" rx=\".15\" fill=\"#343d38\" stroke=\"#8a978d\" stroke-width=\".1\"/><rect x=\"-10.85\" y=\"1.8\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"-5.05\" y=\"1.8\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"-0.45\" y=\"1.8\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"2.55\" y=\"1.8\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"5.55\" y=\"1.8\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"-4.75\" y=\"-6.2\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><rect x=\"3.55\" y=\"-6.2\" width=\".9\" height=\"1.4\" rx=\".08\" fill=\"#ac9b72\" stroke=\"#d5d4b9\" stroke-width=\".1\"/><circle cx=\"-11.7\" cy=\"-3.1\" r=\".45\" fill=\"#b9b48c\"/><circle cx=\"11.7\" cy=\"-3.1\" r=\".45\" fill=\"#b9b48c\"/>",
    "backArtwork": "",
    "cad": {
      "label": "Manufacturer STEP/CAD resource",
      "url": "https://dfimg.dfrobot.com/wiki/20544/SEN0419_bmm150-3-axis-digital-geomagnetic-sensor_stpfile_1.0.zip"
    },
    "footprintMode": "source",
    "footprintNote": "Exact electrical pad centers, copper sizes and drills from the manufacturer KiCad footprint. Repeated lands retain one electrical terminal number. Mounting copper, complete mating mechanics and original assembled-board layers remain outside this off-board contact reference.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "provenance": {
      "format": "Manufacturer KiCad footprint and symbol",
      "footprintFile": "SEN0419.kicad_mod",
      "footprintSha256": "b404f5bc003706b04323a50024dfacde32b2287fa17972cc4c3aef4595cea495",
      "symbolSha256": "e694d233dd3892d1f83980a3622192299defce217ed294479901ab1b031ae5e3",
      "sourceCenter": [
        10,
        5.5
      ],
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/5249018a98840c48c5e0258a6e0a2145.png",
      "review": "Manufacturer physical pin map takes precedence over incomplete wiki numbering and generic vendor symbol electrical types. Source grounds are power_in, clock/select pins are inputs and sensor/interrupt/UART output roles are explicit."
    }
  },
  {
    "id": "dfrobot-fermion-gr10-30-sen0543",
    "sku": "SEN0543",
    "name": "DFRobot Fermion: GR10-30 Gesture Sensor (Breakout, UART & I2C, 12 Gestures, 0~30cm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer KiCad library",
    "source": "https://wiki.dfrobot.com/sen0543/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/fc8ffc8e840eb84d3bdd8bf1f96c04b2.jpg",
      "https://dfimg.dfrobot.com/wiki/21145/SEN0543_fermion-gr10-30-gesture-recognition-sensor_cad_1.0.zip"
    ],
    "description": "GR10-30 gesture-recognition breakout V1.0 with I2C, UART, reset and two interrupt outputs. The twelve physical terminals include NC and repeated power contacts omitted from the wiki function summary. Each edge terminal has two manufacturer-defined native lands; those repeated lands share its one terminal number. Three unmarked manufacturing pads are illustrated without inventing user-interface functions. Supply is 3.3–5 V.",
    "tags": [
      "fermion",
      "gr10-30",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2654.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 20.5,
      "height": 23.5,
      "color": "#262b28",
      "outline": "M-9.25 -11.75H9.25A1 1 0 0 1 10.25 -10.75V10.75A1 1 0 0 1 9.25 11.75H-9.25A1 1 0 0 1 -10.25 10.75V-10.75A1 1 0 0 1 -9.25 -11.75Z"
    },
    "contacts": [
      {
        "id": "p1",
        "number": "1",
        "x": -8.89,
        "y": -6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "connector": "HEADER"
      },
      {
        "id": "p2",
        "number": "2",
        "x": -8.89,
        "y": -3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "connector": "HEADER"
      },
      {
        "id": "p3",
        "number": "3",
        "x": -8.89,
        "y": -1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "connector": "HEADER"
      },
      {
        "id": "p4",
        "number": "4",
        "x": -8.89,
        "y": 1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional I2C data.",
        "connector": "HEADER"
      },
      {
        "id": "p5",
        "number": "5",
        "x": -8.89,
        "y": 3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "RST",
        "type": "input",
        "description": "Reset control input; follow the module reset procedure.",
        "connector": "HEADER"
      },
      {
        "id": "p6",
        "number": "6",
        "x": -8.89,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected published header terminal.",
        "connector": "HEADER"
      },
      {
        "id": "p7",
        "number": "7",
        "x": 8.87,
        "y": 6.34272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "INT2",
        "type": "output",
        "description": "Object-motion detection output; HIGH during motion, LOW when no object moves or the field remains blocked for over three seconds.",
        "connector": "HEADER"
      },
      {
        "id": "p8",
        "number": "8",
        "x": 8.87,
        "y": 3.80272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "INT1",
        "type": "output",
        "description": "Gesture recognition interrupt; 10 ms pulses indicate a recognized gesture.",
        "connector": "HEADER"
      },
      {
        "id": "p9",
        "number": "9",
        "x": 8.87,
        "y": 1.26272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "TX",
        "type": "output",
        "description": "UART transmit output; default 9600 baud.",
        "connector": "HEADER"
      },
      {
        "id": "p10",
        "number": "10",
        "x": 8.87,
        "y": -1.27728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "RX",
        "type": "input",
        "description": "UART receive input; default 9600 baud.",
        "connector": "HEADER"
      },
      {
        "id": "p11",
        "number": "11",
        "x": 8.87,
        "y": -3.81728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return, duplicated at the UART end.",
        "connector": "HEADER"
      },
      {
        "id": "p12",
        "number": "12",
        "x": 8.87,
        "y": -6.35728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input, duplicated at the UART end.",
        "connector": "HEADER"
      }
    ],
    "footprintPads": [
      {
        "id": "p1",
        "number": "1",
        "x": -10.25,
        "y": -6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p1",
        "number": "1",
        "x": -8.89,
        "y": -6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p2",
        "number": "2",
        "x": -10.25,
        "y": -3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p2",
        "number": "2",
        "x": -8.89,
        "y": -3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p3",
        "number": "3",
        "x": -10.25,
        "y": -1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p3",
        "number": "3",
        "x": -8.89,
        "y": -1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p4",
        "number": "4",
        "x": -10.25,
        "y": 1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p4",
        "number": "4",
        "x": -8.89,
        "y": 1.27,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p5",
        "number": "5",
        "x": -8.89,
        "y": 3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p5",
        "number": "5",
        "x": -10.25,
        "y": 3.81,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p6",
        "number": "6",
        "x": -10.25,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p6",
        "number": "6",
        "x": -8.89,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p7",
        "number": "7",
        "x": 10.23,
        "y": 6.34272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p7",
        "number": "7",
        "x": 8.87,
        "y": 6.34272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p8",
        "number": "8",
        "x": 10.23,
        "y": 3.80272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p8",
        "number": "8",
        "x": 8.87,
        "y": 3.80272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p9",
        "number": "9",
        "x": 10.23,
        "y": 1.26272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p9",
        "number": "9",
        "x": 8.87,
        "y": 1.26272,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p10",
        "number": "10",
        "x": 10.23,
        "y": -1.27728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p10",
        "number": "10",
        "x": 8.87,
        "y": -1.27728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p11",
        "number": "11",
        "x": 10.23,
        "y": -3.81728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p11",
        "number": "11",
        "x": 8.87,
        "y": -3.81728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p12",
        "number": "12",
        "x": 10.23,
        "y": -6.35728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "id": "p12",
        "number": "12",
        "x": 8.87,
        "y": -6.35728,
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "holes": [],
    "artwork": "<path d=\"M-8.89 -6.35H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M-8.89 -3.81H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M-8.89 -1.27H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M-8.89 1.27H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M-8.89 3.81H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M-8.89 6.35H-10.25\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 6.34272H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 3.80272H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 1.26272H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 -1.27728H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 -3.81728H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><path d=\"M8.87 -6.35728H10.23\" stroke=\"#d7b95e\" stroke-width=\"1.5\"/><rect x=\"-1.9\" y=\"-10.2\" width=\"3.8\" height=\"3.7\" rx=\".15\" fill=\"#70736d\" stroke=\"#bbb991\" stroke-width=\".15\"/><rect x=\"-2.6\" y=\"-1.5\" width=\"5.9\" height=\"9.5\" rx=\".3\" fill=\"#33333f\" stroke=\"#b7b7ad\" stroke-width=\".15\"/><circle cx=\".35\" cy=\"6.0\" r=\"1.2\" fill=\"#d9d4b4\"/><circle cx=\".35\" cy=\".3\" r=\".3\" fill=\"#695181\"/><rect x=\"-6.0\" y=\"-5.7\" width=\"3\" height=\"2\" rx=\".15\" fill=\"#424b43\"/><rect x=\"4.0\" y=\"-6.1\" width=\"3.4\" height=\"2.6\" rx=\".15\" fill=\"#424b43\"/><rect x=\"-6.55\" y=\"-1.3\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"-6.55\" y=\"0.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"-6.55\" y=\"2.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"-6.55\" y=\"4.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"-6.55\" y=\"6.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"-1.3\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"0.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"2.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"4.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"6.7\" width=\"1.1\" height=\".6\" fill=\"#b6a076\" stroke=\"#d4d7bb\" stroke-width=\".08\"/><circle cx=\"-10.25\" cy=\"-6.35\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"-6.35\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"-10.25\" cy=\"-3.81\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"-3.81\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"-10.25\" cy=\"-1.27\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"-1.27\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"-10.25\" cy=\"1.27\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"1.27\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"-10.25\" cy=\"3.81\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"3.81\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"-10.25\" cy=\"6.35\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"-10.25\" cy=\"6.35\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"6.34272\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"6.34272\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"3.80272\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"3.80272\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"1.26272\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"1.26272\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"-1.27728\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"-1.27728\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"-3.81728\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"-3.81728\" r=\".45\" fill=\"#eef3ed\"/><circle cx=\"10.23\" cy=\"-6.35728\" r=\".75\" fill=\"#d7b95e\"/><circle cx=\"10.23\" cy=\"-6.35728\" r=\".45\" fill=\"#eef3ed\"/>",
    "backArtwork": "<circle cx=\"8.9\" cy=\"-10.2\" r=\".55\" fill=\"#c7ad57\"/><circle cx=\"6.9\" cy=\"-10.2\" r=\".55\" fill=\"#c7ad57\"/><circle cx=\"4.9\" cy=\"-10.2\" r=\".55\" fill=\"#c7ad57\"/>",
    "cad": {
      "label": "Manufacturer KiCad symbol and footprint",
      "url": "https://dfimg.dfrobot.com/wiki/21145/SEN0543_fermion-gr10-30-gesture-recognition-sensor_cad_1.0.zip"
    },
    "footprintMode": "source",
    "footprintNote": "Exact electrical pad centers, copper sizes and drills from the manufacturer KiCad footprint. Repeated lands retain one electrical terminal number. Mounting copper, complete mating mechanics and original assembled-board layers remain outside this off-board contact reference.",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE",
    "provenance": {
      "format": "Manufacturer KiCad footprint and symbol",
      "footprintFile": "SEN0543.kicad_mod",
      "footprintSha256": "01f2a5d5da8ee47d5e58c8ef84612e45007fbf48c47b8510b7d7cee8bef6abf0",
      "symbolSha256": "0334b7e39cd65568b5b6356284f0bffb2f327ae18fe1608badf5adcd69bca198",
      "sourceCenter": [
        10.25,
        0
      ],
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/fc8ffc8e840eb84d3bdd8bf1f96c04b2.jpg",
      "review": "Manufacturer physical pin map takes precedence over incomplete wiki numbering and generic vendor symbol electrical types. Source grounds are power_in, clock/select pins are inputs and sensor/interrupt/UART output roles are explicit."
    },
    "internalConnections": [
      [
        "p1",
        "p12"
      ],
      [
        "p2",
        "p11"
      ]
    ]
  }
];
