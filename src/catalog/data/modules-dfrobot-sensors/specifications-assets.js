// Original CAD-derived illustrations and retained source evidence.
// Attribution and manufacturer references remain in each specification/provenance.
export default {
  "dfrobot-bmp280-sen0372": {
    "contacts": [
      {
        "id": "h1",
        "number": "H1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": 6.661219,
        "y": -3.749993,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h2",
        "number": "H2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 6.661219,
        "y": -1.209993,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h3",
        "number": "H3",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": 6.661219,
        "y": 1.330007,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h4",
        "number": "H4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": 6.661219,
        "y": 3.870007,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      }
    ],
    "artwork": "<rect x=\"-1.3\" y=\"-1.3\" width=\"2.6\" height=\"2.6\" rx=\"0.15\" fill=\"#bfc2ba\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.7\" y=\"-5.45\" width=\"2.0\" height=\"2.5\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.7\" y=\"2.95\" width=\"2.0\" height=\"2.5\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.1\" y=\"-0.7000000000000001\" width=\"2.2\" height=\"1.6\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-7.0\" y=\"-0.8999999999999999\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-7.0\" y=\"1.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.2\" y=\"-4.1\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.2\" y=\"-0.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.2\" y=\"3.4000000000000004\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.1000000000000005\" y=\"-4.2\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.1000000000000005\" y=\"-2.6999999999999997\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.1000000000000005\" y=\"2.4000000000000004\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.1000000000000005\" y=\"3.9000000000000004\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a67e\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-5.749952\" cy=\"-3.749988\" r=\"1.650001\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-5.749952\" cy=\"-3.749988\" r=\"1.000001\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-5.749952\" cy=\"3.750012\" r=\"1.650001\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-5.749952\" cy=\"3.750012\" r=\"1.000001\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "<circle cx=\"1.93\" cy=\"-2.63\" r=\"1.0\" fill=\"#cdb75d\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><path d=\"M1.93 -3.63v2\" stroke=\"#252d29\" stroke-width=\".15\"/>",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0372-DXF.dxf",
        "sha256": "d8191763223e61e907230e3025201a9acbf4b82657ccd3ce322127c3b47c83c7",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          7.9286,
          34.4765,
          24.4286,
          46.9765
        ],
        "outlineLayer": "轮廓线",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/6bd1eb42a4dc950f676c37c52fd27ff4.jpg",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-ens160-sen0515": {
    "contacts": [
      {
        "id": "t1",
        "number": "T1",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": -7.615548,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "t2",
        "number": "T2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -5.075542,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "t3",
        "number": "T3",
        "label": "SCK",
        "type": "input",
        "description": "SPI serial-clock input.",
        "x": -2.535537,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      },
      {
        "id": "t4",
        "number": "T4",
        "label": "SDI",
        "type": "bidirectional",
        "description": "ENS160 SPI data input / bidirectional I2C data on its shared MOSI/SDA signal.",
        "x": 0.004455,
        "y": -5.875072,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "t5",
        "number": "T5",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output / I2C address-selection input, according to the selected interface.",
        "x": 2.544473,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      },
      {
        "id": "t6",
        "number": "T6",
        "label": "CS",
        "type": "input",
        "description": "SPI chip-select / interface-selection input.",
        "x": 5.084453,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "t7",
        "number": "T7",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt output; use the manufacturer pull-up/polarity configuration.",
        "x": 7.624483,
        "y": -5.87507,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      },
      {
        "id": "b1",
        "number": "B1",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": -3.81556,
        "y": 5.864902,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "b2",
        "number": "B2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -1.27556,
        "y": 5.864902,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      },
      {
        "id": "b3",
        "number": "B3",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": 1.26444,
        "y": 5.864902,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      },
      {
        "id": "b4",
        "number": "B4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": 3.80444,
        "y": 5.864902,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.907798
      }
    ],
    "artwork": "<rect x=\"-1.5\" y=\"-1.6\" width=\"3.0\" height=\"3.0\" rx=\"0.15\" fill=\"#b8bdb4\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-7.1\" y=\"-1.0\" width=\"2.0\" height=\"1.6\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-8.9\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.9\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.5\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"5.1\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"6.699999999999999\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"8.299999999999999\" y=\"-0.75\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.7000000000000002\" y=\"1.85\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.9\" y=\"1.85\" width=\"0.8\" height=\"1.5\" rx=\"0.15\" fill=\"#aa9c78\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-7.504844\" cy=\"4.995427\" r=\"1.6500005\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-7.504844\" cy=\"4.995427\" r=\"1.0000005\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7.504843\" cy=\"4.995427\" r=\"1.6500005\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7.504843\" cy=\"4.995427\" r=\"1.0000005\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0515_2D_CAD.dxf",
        "sha256": "c0886ffdc0426e31c73eeaaf03c98b0d61b35466bdfaed97f10f186449f21942",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          12.29463164830142,
          -2.08906177302628,
          32.29463228830143,
          12.91123588697327
        ],
        "outlineLayer": "尺寸图$可见线$曲线",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/4c2e4277edadd04b0d01686d89e244fa.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-aht20-fermion-sen0527": {
    "contacts": [
      {
        "id": "h1",
        "number": "H1",
        "label": "VCC",
        "type": "power_in",
        "description": "2–5 V module supply input.",
        "x": -3.804456,
        "y": 5.284658,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h2",
        "number": "H2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -1.264456,
        "y": 5.284658,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h3",
        "number": "H3",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": 1.275544,
        "y": 5.284658,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      },
      {
        "id": "h4",
        "number": "H4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": 3.815544,
        "y": 5.284658,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.899998
      }
    ],
    "artwork": "<rect x=\"-1.5\" y=\"-4.2\" width=\"3\" height=\"3\" rx=\"0.15\" fill=\"#555e55\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-0.75\" y=\"-5.6499999999999995\" width=\"1.5\" height=\"0.7\" rx=\"0.15\" fill=\"#baa77a\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.0\" y=\"1.85\" width=\"1.2\" height=\"0.7\" rx=\"0.15\" fill=\"#baa77a\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.7999999999999998\" y=\"1.85\" width=\"1.2\" height=\"0.7\" rx=\"0.15\" fill=\"#baa77a\" stroke=\"#9da99c\" stroke-width=\".1\"/><path d=\"M-2.7 -5.6V.4h.9M2.7 -5.6V.4h-.9\" fill=\"none\" stroke=\"#eef3ed\" stroke-width=\".8\" stroke-linecap=\"round\"/><circle cx=\"-8.5\" cy=\"4.249834\" r=\"1.6500005\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-8.5\" cy=\"4.249834\" r=\"1.0000005\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"8.5\" cy=\"4.249834\" r=\"1.6500005\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"8.5\" cy=\"4.249834\" r=\"1.0000005\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0527_2D_CAD.dxf",
        "sha256": "3e682c7a606d14f05ac2f46b1344885832197028ca162c1356b7db7ee255bd13",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          20.54734271521414,
          21.67676031085377,
          42.54734189521414,
          35.17709399085344
        ],
        "outlineLayer": "默认值",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/b9285ae0ca3393d36d6d9320cfc597ff.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-aht20-gravity-sen0528": {
    "contacts": [
      {
        "id": "p1",
        "number": "P1",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": -3.021067,
        "y": 2.593127,
        "size": [
          0.8,
          2.1
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p2",
        "number": "P2",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": -1.038367,
        "y": 2.593127,
        "size": [
          0.8,
          2.1
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p3",
        "number": "P3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 0.944283,
        "y": 2.593127,
        "size": [
          0.8,
          2.1
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p4",
        "number": "P4",
        "label": "VCC",
        "type": "power_in",
        "description": "2–5 V module supply input.",
        "x": 2.926933,
        "y": 2.553177,
        "size": [
          0.8,
          2.1
        ],
        "shape": "rect",
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-6.0\" y=\"3.45\" width=\"12\" height=\"6.5\" rx=\"0.3\" fill=\"#e7eadc\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.5\" y=\"-5.7\" width=\"3\" height=\"3\" rx=\"0.15\" fill=\"#b6bcb1\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-0.65\" y=\"-7.2\" width=\"1.3\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a375\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-3.05\" y=\"-0.19999999999999998\" width=\"1.3\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a375\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.75\" y=\"-0.19999999999999998\" width=\"1.3\" height=\"0.6\" rx=\"0.15\" fill=\"#b6a375\" stroke=\"#9da99c\" stroke-width=\".1\"/><path d=\"M-2.7 -7V-1.1h.9M2.7 -7V-1.1h-.9\" fill=\"none\" stroke=\"#eef3ed\" stroke-width=\".8\" stroke-linecap=\"round\"/><circle cx=\"-7.039134\" cy=\"-6.5\" r=\"2.199999\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-7.039134\" cy=\"-6.5\" r=\"1.549999\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7.960866\" cy=\"-6.5\" r=\"2.199999\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7.960866\" cy=\"-6.5\" r=\"1.549999\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0528_2D_尺寸图.dxf",
        "sha256": "46b7ace076c2fda3f42f97efeb1bfc4a9a1b491ea85db8d33aabb99052ee65b7",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          -11.23043417892286,
          18.42692660795037,
          10.76956754107891,
          38.4269272479511
        ],
        "outlineLayer": "默认值",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/d15b67dad57b09d38f8c38f2385353ca.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-ltr390-sen0540": {
    "contacts": [
      {
        "id": "p1",
        "number": "P1",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C SDA data / module UART transmit output, selected by the onboard interface switch.",
        "x": -8.623263,
        "y": -3.021053,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p2",
        "number": "P2",
        "label": "C/R",
        "type": "input",
        "description": "I2C SCL clock / module UART receive input, selected by the onboard interface switch.",
        "x": -8.623263,
        "y": -1.038353,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p3",
        "number": "P3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -8.623263,
        "y": 0.944247,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p4",
        "number": "P4",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": -8.583463,
        "y": 2.926947,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.85\" y=\"-5.85\" width=\"6.5\" height=\"11.7\" rx=\"0.3\" fill=\"#ebeadd\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.0\" y=\"-5.6\" width=\"3.8\" height=\"3.8\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.6\" y=\"7.15\" width=\"3.0\" height=\"1.7\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"8.15\" y=\"-4.2\" width=\"4.5\" height=\"8.4\" rx=\"0.15\" fill=\"#d2d9cb\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"9.25\" y=\"-2.75\" width=\"2.3\" height=\"2.3\" rx=\"0.15\" fill=\"#4e5d55\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.0999999999999996\" y=\"-0.19999999999999996\" width=\"2.4\" height=\"3.0\" rx=\"0.15\" fill=\"#c0c6b9\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"4.3\" cy=\"1.3\" r=\"0.65\" fill=\"#e8eadc\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-5.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-1.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"2.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.2999999999999998\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.6999999999999997\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.9\" y=\"-4.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.4\" y=\"4.6000000000000005\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"5.800000000000001\" y=\"4.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0540_2D_CAD.dxf",
        "sha256": "e87a4ac483f132e4c8c32656ffadd89b4984c7686ed78345ef51b4a842e3fd20",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          60.71061367833769,
          5.932945769707063,
          92.71061317833872,
          32.93294764970797
        ],
        "outlineLayer": "轮廓线",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/nobody/wiki/fd693361b387fd4ad8631816b0a68531.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-bmp585-gravity-sen0664": {
    "contacts": [
      {
        "id": "p1",
        "number": "P1",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C SDA data / module UART transmit output, selected by the onboard interface switch.",
        "x": -8.277352,
        "y": -2.997267,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p2",
        "number": "P2",
        "label": "C/R",
        "type": "input",
        "description": "I2C SCL clock / module UART receive input, selected by the onboard interface switch.",
        "x": -8.277352,
        "y": -0.999167,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p3",
        "number": "P3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -8.277352,
        "y": 0.999033,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p4",
        "number": "P4",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": -8.277352,
        "y": 2.997133,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "h1",
        "number": "H1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": -5.08,
        "y": 11.67501,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h2",
        "number": "H2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -2.54,
        "y": 11.67501,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h3",
        "number": "H3",
        "label": "C/R",
        "type": "input",
        "description": "I2C SCL clock / module UART receive input, selected by the onboard interface switch.",
        "x": -0.0,
        "y": 11.67501,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h4",
        "number": "H4",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C SDA data / module UART transmit output, selected by the onboard interface switch.",
        "x": 2.54,
        "y": 11.67501,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h5",
        "number": "H5",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt output; use the manufacturer pull-up/polarity configuration.",
        "x": 5.08,
        "y": 11.67501,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-15.85\" y=\"-5.85\" width=\"6.5\" height=\"11.7\" rx=\"0.3\" fill=\"#ebeadd\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.0\" y=\"-5.6\" width=\"3.8\" height=\"3.8\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.6\" y=\"7.15\" width=\"3.0\" height=\"1.7\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"8.15\" y=\"-4.2\" width=\"4.5\" height=\"8.4\" rx=\"0.15\" fill=\"#d2d9cb\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"9.25\" y=\"-2.75\" width=\"2.3\" height=\"2.3\" rx=\"0.15\" fill=\"#4e5d55\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.8000000000000003\" y=\"-1.89\" width=\"3.3\" height=\"3.3\" rx=\"0.15\" fill=\"#c0c6b9\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"5.45\" cy=\"-0.24\" r=\"0.65\" fill=\"#e8eadc\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-5.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-1.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"2.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.2999999999999998\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.6999999999999997\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.9\" y=\"-4.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.4\" y=\"4.6000000000000005\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"5.800000000000001\" y=\"4.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0664.dxf",
        "sha256": "4de4a816a68e5d0682beaf3bc1e3f3a3c3c79c7c3e82d781d5026bda2f1e6784",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          1577.666901689167,
          9.853822779746118,
          1609.666901689168,
          36.85384277974611
        ],
        "outlineLayer": "粗实线层",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/8116b3fb111c496b92a0efac795320fc/wikien/b9c79a47a13151d3199424de61bb3375.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-bmp581-gravity-sen0665": {
    "contacts": [
      {
        "id": "p1",
        "number": "P1",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C SDA data / module UART transmit output, selected by the onboard interface switch.",
        "x": -8.27735,
        "y": -2.99725,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p2",
        "number": "P2",
        "label": "C/R",
        "type": "input",
        "description": "I2C SCL clock / module UART receive input, selected by the onboard interface switch.",
        "x": -8.27735,
        "y": -0.99915,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p3",
        "number": "P3",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -8.27735,
        "y": 0.99895,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "p4",
        "number": "P4",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": -8.27735,
        "y": 2.99715,
        "size": [
          2.1,
          0.8
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "h1",
        "number": "H1",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "x": -5.080045,
        "y": 11.675001,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h2",
        "number": "H2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -2.540045,
        "y": 11.675001,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h3",
        "number": "H3",
        "label": "C/R",
        "type": "input",
        "description": "I2C SCL clock / module UART receive input, selected by the onboard interface switch.",
        "x": -4.5e-05,
        "y": 11.675001,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h4",
        "number": "H4",
        "label": "D/T",
        "type": "bidirectional",
        "description": "I2C SDA data / module UART transmit output, selected by the onboard interface switch.",
        "x": 2.539955,
        "y": 11.675001,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "h5",
        "number": "H5",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt output; use the manufacturer pull-up/polarity configuration.",
        "x": 5.079955,
        "y": 11.675001,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-15.85\" y=\"-5.85\" width=\"6.5\" height=\"11.7\" rx=\"0.3\" fill=\"#ebeadd\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.0\" y=\"-5.6\" width=\"3.8\" height=\"3.8\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.6\" y=\"7.15\" width=\"3.0\" height=\"1.7\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"8.15\" y=\"-4.2\" width=\"4.5\" height=\"8.4\" rx=\"0.15\" fill=\"#d2d9cb\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"9.25\" y=\"-2.75\" width=\"2.3\" height=\"2.3\" rx=\"0.15\" fill=\"#4e5d55\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.35\" y=\"-1.34\" width=\"2.2\" height=\"2.2\" rx=\"0.15\" fill=\"#c0c6b9\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"5.45\" cy=\"-0.24\" r=\"0.65\" fill=\"#e8eadc\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-5.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"-1.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-5.6\" y=\"2.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.2999999999999998\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.6999999999999997\" y=\"-6.0\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"4.9\" y=\"-4.3\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"3.4\" y=\"4.6000000000000005\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"5.800000000000001\" y=\"4.7\" width=\"1.2\" height=\"0.6\" rx=\"0.15\" fill=\"#af9e77\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"-10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"2.25\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"12.5\" cy=\"10\" r=\"1.6\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0665.dxf",
        "sha256": "551dcb8f900ea00803264d5c45913970a6d149a868e257ef4cf44f9a8349cd02",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          1651.5172,
          9.4739,
          1683.5172,
          36.474
        ],
        "outlineLayer": "粗实线层",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/0cbdedf75e335cca582b3ef3a667dfa8.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-bmp585-fermion-sen0666": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": -7.621667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -5.081667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SCL/SCK",
        "type": "input",
        "description": "Shared serial-clock input for I2C/I3C/SPI operation.",
        "x": -2.541667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SDA/SDI",
        "type": "bidirectional",
        "description": "Shared I2C/I3C data / SPI data-input contact, according to the selected interface.",
        "x": -0.001667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "CSB",
        "type": "input",
        "description": "Active-low SPI chip-select input.",
        "x": 2.538333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output / I2C address-selection input, according to the selected interface.",
        "x": 5.078333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-7",
        "number": "J1.7",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt output; use the manufacturer pull-up/polarity configuration.",
        "x": 7.618333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-1.64\" y=\"-7.039999999999999\" width=\"3.3\" height=\"3.3\" rx=\"0.15\" fill=\"#c5c9bd\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"0.01\" cy=\"-5.39\" r=\"0.55\" fill=\"#eeeeeb\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-7.3\" y=\"0.3500000000000001\" width=\"3\" height=\"1.5\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-4.7\" y=\"-2.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.9999999999999999\" y=\"-2.15\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.4\" y=\"-2.15\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.9999999999999999\" y=\"0.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.4\" y=\"0.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-7\" cy=\"-5.5\" r=\"1.65\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-7\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7\" cy=\"-5.5\" r=\"1.65\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0666.dxf",
        "sha256": "17c20f245f966964f2ce1f61a9417d4655df245c2f7c4c00b913ae1a9a3b4065",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          1726.528499870403,
          12.87541814308937,
          1745.528499870403,
          28.87541814308941
        ],
        "outlineLayer": "粗实线层",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/4dfa67056d305e3007d72ad5457affd5.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-bmp581-fermion-sen0667": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": -7.621667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -5.081667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "SCL/SCK",
        "type": "input",
        "description": "Shared serial-clock input for I2C/I3C/SPI operation.",
        "x": -2.541667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "SDA/SDI",
        "type": "bidirectional",
        "description": "Shared I2C/I3C data / SPI data-input contact, according to the selected interface.",
        "x": -0.001667,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-5",
        "number": "J1.5",
        "label": "CSB",
        "type": "input",
        "description": "Active-low SPI chip-select input.",
        "x": 2.538333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-6",
        "number": "J1.6",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data output / I2C address-selection input, according to the selected interface.",
        "x": 5.078333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      },
      {
        "id": "j1-7",
        "number": "J1.7",
        "label": "INT",
        "type": "output",
        "description": "Sensor interrupt output; use the manufacturer pull-up/polarity configuration.",
        "x": 7.618333,
        "y": 6.28,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.9
      }
    ],
    "artwork": "<rect x=\"-1.1300000000000001\" y=\"-6.27\" width=\"2.2\" height=\"2.2\" rx=\"0.15\" fill=\"#c5c9bd\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-0.03\" cy=\"-5.17\" r=\"0.55\" fill=\"#eeeeeb\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-7.3\" y=\"0.3500000000000001\" width=\"3\" height=\"1.5\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-4.7\" y=\"-2.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.9999999999999999\" y=\"-2.15\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.4\" y=\"-2.15\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.9999999999999999\" y=\"0.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"2.4\" y=\"0.25\" width=\"0.8\" height=\"0.5\" rx=\"0.15\" fill=\"#b7a680\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-7\" cy=\"-5.5\" r=\"1.65\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-7\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7\" cy=\"-5.5\" r=\"1.65\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"7\" cy=\"-5.5\" r=\"1.0\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0667.dxf",
        "sha256": "0ba80d1a3a9c422eeef941abb6e9e841d5bf68bc88a85d54858a29529d17013e",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          1791.687541840024,
          14.39838606325198,
          1810.687541840024,
          30.39838606325201
        ],
        "outlineLayer": "粗实线层",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/62d52567aa9508d63a4247a1/wikien/502f4e6e3a0bdc9c18f95d77b702683f.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  },
  "dfrobot-bmi323-fermion-sen0693": {
    "contacts": [
      {
        "id": "h1",
        "number": "H1",
        "label": "INT1",
        "type": "output",
        "description": "BMI323 interrupt output1; configure the source sensor interrupt/polarity before use.",
        "x": -6.34005,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "h2",
        "number": "H2",
        "label": "INT2",
        "type": "output",
        "description": "BMI323 interrupt output2; configure the source sensor interrupt/polarity before use.",
        "x": -3.80005,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "h3",
        "number": "H3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": -1.26005,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "h4",
        "number": "H4",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": 1.27995,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "h5",
        "number": "H5",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 3.81995,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "h6",
        "number": "H6",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": 6.35995,
        "y": 6.529977,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "drill": 0.95
      },
      {
        "id": "sh-1",
        "number": "SH.1",
        "label": "3V3",
        "type": "power_in",
        "description": "3.3 V module supply input only.",
        "x": 3.24,
        "y": -1.17014,
        "size": [
          1.1,
          0.5
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "sh-2",
        "number": "SH.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 3.24,
        "y": -0.17014,
        "size": [
          1.1,
          0.5
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "sh-3",
        "number": "SH.3",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock input.",
        "x": 3.24,
        "y": 0.82985,
        "size": [
          1.1,
          0.5
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "sh-4",
        "number": "SH.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; follow the source pull-up configuration.",
        "x": 3.24,
        "y": 1.82985,
        "size": [
          1.1,
          0.5
        ],
        "shape": "rect",
        "smd": true
      },
      {
        "id": "sh-5",
        "number": "SH.5",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected published connector contact; leave open.",
        "x": 3.24,
        "y": 2.82985,
        "size": [
          1.1,
          0.5
        ],
        "shape": "rect",
        "smd": true
      }
    ],
    "artwork": "<rect x=\"4.05\" y=\"-2.42\" width=\"3.9\" height=\"6.5\" rx=\"0.15\" fill=\"#e8ece0\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.55\" y=\"-0.9500000000000001\" width=\"3.1\" height=\"3.1\" rx=\"0.15\" fill=\"#343d39\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-4.21468\" cy=\"1.674372\" r=\"0.80585\" fill=\"#c9c5b0\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><rect x=\"-5.9\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-4.4\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-2.9\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"-1.4\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"0.09999999999999998\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><rect x=\"1.6\" y=\"3.35\" width=\"0.8\" height=\"1.3\" rx=\"0.15\" fill=\"#b2a37d\" stroke=\"#9da99c\" stroke-width=\".1\"/><circle cx=\"-5.50005\" cy=\"-5.500023\" r=\"1.625\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"-5.50005\" cy=\"-5.500023\" r=\"0.975\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"5.49995\" cy=\"-5.500023\" r=\"1.625\" fill=\"#bcb68e\" stroke=\"#a0ad9e\" stroke-width=\".1\"/><circle cx=\"5.49995\" cy=\"-5.500023\" r=\"0.975\" fill=\"#eef3ed\" stroke=\"#a0ad9e\" stroke-width=\".1\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "Manufacturer DXF and physical pin map",
      "geometry": {
        "file": "SEN0693.dxf",
        "sha256": "26150b88dfeda63a0ba641b8615a82ce77c3a73bf0346e6d5b66de1e65e5a4cd",
        "dxfVersion": "AC1021",
        "unitsHeader": 4,
        "millimetersPerUnit": 1,
        "bounds": [
          1890.4658,
          15.4525,
          1906.4658,
          31.4525
        ],
        "outlineLayer": "粗实线层",
        "outlineEndpointGridMm": 0.0001,
        "curveFlatteningErrorMm": 0.01
      },
      "pinmap": "https://dfimg.dfrobot.com/8116b3fb111c496b92a0efac795320fc/wikien/741726f5085b2013eab20634c1490fba.png",
      "review": "Source circles or reviewed connector metal-lead contours supply physical positions; electrical roles and order come from the primary pin map and schematic. No generic distant header banks are used.",
      "terminalNumbering": "H/T/B/P numbers are deterministic physical-position identifiers where the board prints functions without numbers. The raw BMP58x seven-pin row retains the manufacturer J1.1–J1.7 schematic numbering.",
      "configurationFeatures": "Published address/pull-up pads and unmarked manufacturing details are illustrated without inventing undocumented per-half GPIO functions; the native asset is an off-board contact reference, not the assembled-board production PCB."
    }
  }
};
