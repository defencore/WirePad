// Original CAD-derived illustrations and retained source evidence.
// Attribution and manufacturer references remain in each specification/provenance.
export default {
  "dfrobot-fermion-sht31-f-sen0332": {
    "contacts": [
      {
        "label": "VCC",
        "x": -6.35,
        "y": 6.45,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "2.15–5.5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -3.81,
        "y": 6.45,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": -1.27,
        "y": 6.45,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 1.27,
        "y": 6.45,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT",
        "x": 3.81,
        "y": 6.45,
        "number": "P1.5",
        "connector": "P1",
        "id": "p5",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "RST",
        "x": 6.35,
        "y": 6.45,
        "number": "P1.6",
        "connector": "P1",
        "id": "p6",
        "type": "input",
        "description": "Active-low sensor reset / shutdown control input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7.5\" cy=\"-6\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7.5\" cy=\"-6\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7.5\" cy=\"-6\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7.5\" cy=\"-6\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.4\" y=\"-4.199999999999999\" width=\"2.8\" height=\"2.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.15\" cy=\"-3.9499999999999993\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6600000000000001\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M-4 -3.8V-5H4V-3.8M-4 -1.8V.1H4V-1.8\" fill=\"none\" stroke=\"#e7e8d7\" stroke-width=\".65\" stroke-linecap=\"round\"/><rect x=\"-1.1\" y=\"-3.9\" width=\"2.2\" height=\"2.2\" rx=\"0.15\" fill=\"#b5ac7b\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-0.5\" y=\"-3.3\" width=\"1\" height=\"1\" rx=\"0.05\" fill=\"#4b5043\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Dimension-calibrated manufacturer vector PDF contact centers",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "99538ccdb9bf7f93be9c9e379b2cf158d0ef9b5853d7e87a3ac4878a4da13fd4",
        "photo.jpg": "249a0f8e786ae5975ee5197ff612c6cd27617c3136c945a6ea218f7ae61686f3",
        "pinmap.jpg": "f61c9468060e1fe2c62b91a1b1ea4150025cb5d06f188fca3c079fdc4bb65e85",
        "layout.pdf": "ec1262a5b1e4a1798848a501c7d1d73c8abe483cf71096ba6d3b9dd63557fa12"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -6.35,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -3.81,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": -1.27,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 1.27,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.5",
          "label": "INT",
          "x": 3.81,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.6",
          "label": "RST",
          "x": 6.35,
          "y": 6.45,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented.",
      "mechanicalPDF": {
        "file": "layout.pdf",
        "sha256": "ec1262a5b1e4a1798848a501c7d1d73c8abe483cf71096ba6d3b9dd63557fa12",
        "bounds": [
          73.702,
          48.26,
          225.383,
          175.937
        ],
        "units": "PDF points converted to millimeters; reviewed dimension-matched view",
        "page": 1,
        "endpointGridSourceMm": 0.001,
        "calibration": [
          0.1252628872436231,
          0.1253162276682566
        ]
      }
    }
  },
  "dfrobot-fermion-lwlp5000-sen0343": {
    "contacts": [
      {
        "label": "VCC",
        "x": 5.98,
        "y": 3.81,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": 5.98,
        "y": 1.27,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 5.98,
        "y": -1.27,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 5.98,
        "y": -3.81,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"-5.3\" cy=\"10\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-5.3\" cy=\"10\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-5.3\" cy=\"-10\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-5.3\" cy=\"-10\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-6.7\" y=\"-4.0\" width=\"10.4\" height=\"9\" rx=\"0.4\" fill=\"#333938\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.75\" y=\"-3.3\" width=\"8.5\" height=\"7.6\" rx=\"0.2\" fill=\"#424946\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.5\" cy=\"-1.7\" r=\"1.4\" fill=\"#3d4641\" stroke=\"#6c756d\" stroke-width=\".2\"/><circle cx=\"-1.5\" cy=\"-1.7\" r=\".7\" fill=\"#151e1c\"/><circle cx=\"-1.5\" cy=\"2.7\" r=\"1.4\" fill=\"#3d4641\" stroke=\"#6c756d\" stroke-width=\".2\"/><circle cx=\"-1.5\" cy=\"2.7\" r=\".7\" fill=\"#151e1c\"/><rect x=\"-5.3\" y=\"-7.1\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.3\" y=\"-7.1\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"-7.1\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"-7.1\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"-7.1\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.3\" y=\"6.3\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.3\" y=\"6.3\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"6.3\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"6.3\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"6.3\" width=\"0.6\" height=\"2\" rx=\"0.05\" fill=\"#babcaa\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.35\" y=\"-9.1\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"0.65\" y=\"-9.1\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-9.1\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Dimension-calibrated manufacturer vector PDF contact centers",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "97b06b0e1917ad10f2a3d9408fc74228f9104d2ffa3638cb613c45fb823efc6f",
        "dimension.pdf": "894a068e393d4720f84fd1b30083819c325347652471cc11e1fe593c6b37e228",
        "photo.jpg": "45d75a6bcd38e346e922c86fa73559c636ed9d2cdb1076a8e25b94d9bfc98648"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": 5.98,
          "y": 3.81,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": 5.98,
          "y": 1.27,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": 5.98,
          "y": -1.27,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 5.98,
          "y": -3.81,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented.",
      "mechanicalPDF": {
        "file": "dimension.pdf",
        "sha256": "894a068e393d4720f84fd1b30083819c325347652471cc11e1fe593c6b37e228",
        "bounds": [
          21.971,
          34.121,
          168.19,
          276.267
        ],
        "units": "PDF points converted to millimeters; reviewed dimension-matched view",
        "page": 1,
        "endpointGridSourceMm": 0.001,
        "calibration": [
          0.09916631901462875,
          0.09911375781553278
        ]
      }
    }
  },
  "dfrobot-fermion-as7341-sen0365": {
    "contacts": [
      {
        "label": "VCC",
        "x": -6.35,
        "y": 5.7,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -3.81,
        "y": 5.7,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": -1.27,
        "y": 5.7,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 1.27,
        "y": 5.7,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT",
        "x": 3.81,
        "y": 5.7,
        "number": "P1.5",
        "connector": "P1",
        "id": "p5",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GPIO",
        "x": 6.35,
        "y": 5.7,
        "number": "P1.6",
        "connector": "P1",
        "id": "p6",
        "type": "bidirectional",
        "description": "Programmable sensor digital input/output; function depends on register configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7\" cy=\"-5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7\" cy=\"-5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7\" cy=\"-5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7\" cy=\"-5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.4\" y=\"-1.9\" width=\"2.8\" height=\"2.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.15\" cy=\"-1.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6600000000000001\" y=\"-1.48\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"0.19999999999999996\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-1.48\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"0.19999999999999996\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"0\" cy=\"-.5\" r=\".45\" fill=\"#626b5b\"/><rect x=\"-4.65\" y=\"-2.05\" width=\"1.3\" height=\"3.1\" rx=\"0.15\" fill=\"#efeead\" stroke=\"#ddd9b6\" stroke-width=\".1\"/><rect x=\"3.35\" y=\"-2.05\" width=\"1.3\" height=\"3.1\" rx=\"0.15\" fill=\"#efeead\" stroke=\"#ddd9b6\" stroke-width=\".1\"/><text x=\"0\" y=\"2.7\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">AS7341</text>",
    "provenance": {
      "format": "Dimension-calibrated manufacturer vector PDF contact centers",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "70bbd8d6c7792bd68d81e584be8cfede176cb2438ab371ca203f5270ca2078d8",
        "dimension.pdf": "56269056faedd14c2f3398bcbc16b9d5e5c3976bbae9e9ffe48bd4781f970d9b",
        "photo.jpg": "5b160110c98870ed191ad422f2839c63c4aea943a09f4126ce363b1d9ed9ffea",
        "pinmap.png": "cea63d61a1ea6ca9d43e8e0ac0f76ddc2f13c0c56c8f71c3d9f4a473e36ef6a0"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -6.35,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -3.81,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": -1.27,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 1.27,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "P1.5",
          "label": "INT",
          "x": 3.81,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "P1.6",
          "label": "GPIO",
          "x": 6.35,
          "y": 5.7,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented.",
      "mechanicalPDF": {
        "file": "dimension.pdf",
        "sha256": "56269056faedd14c2f3398bcbc16b9d5e5c3976bbae9e9ffe48bd4781f970d9b",
        "bounds": [
          57.235,
          43.561,
          242.062,
          187.198
        ],
        "units": "PDF points converted to millimeters; reviewed dimension-matched view",
        "page": 1,
        "endpointGridSourceMm": 0.001,
        "calibration": [
          0.09738836858251229,
          0.09746792261046945
        ]
      }
    }
  },
  "dfrobot-fermion-vl53l3cx-sen0378": {
    "contacts": [
      {
        "label": "GPIO1",
        "x": -6.35,
        "y": -5.95,
        "number": "GPIO1",
        "connector": "P1",
        "id": "p1",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "XSHUT",
        "x": -3.81,
        "y": -5.95,
        "number": "XSHUT",
        "connector": "P1",
        "id": "p2",
        "type": "input",
        "description": "Active-low sensor reset / shutdown control input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": -1.27,
        "y": -5.95,
        "number": "SDA",
        "connector": "P1",
        "id": "p3",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": -5.95,
        "number": "SCL",
        "connector": "P1",
        "id": "p4",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": 3.81,
        "y": -5.95,
        "number": "GND",
        "connector": "P1",
        "id": "p5",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VCC",
        "x": 6.35,
        "y": -5.95,
        "number": "VCC",
        "connector": "P1",
        "id": "p6",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7\" cy=\"5.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7\" cy=\"5.5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7\" cy=\"5.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7\" cy=\"5.5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-2.25\" y=\"-0.3500000000000001\" width=\"4.5\" height=\"2.7\" rx=\"0.2\" fill=\"#333936\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.3\" cy=\"1\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><circle cx=\"1.3\" cy=\"1\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><rect x=\"-1.05\" y=\"3.2\" width=\"2.1\" height=\"1.6\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-0.8\" cy=\"3.45\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.31\" y=\"3.38\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"3.86\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"4.340000000000001\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"3.38\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"3.86\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"4.340000000000001\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><text x=\"0\" y=\"3.8\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.8\">VL53L3CX</text>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "403b4d3c6b2bc0067cd85c28ad08f45a8dff063ee7476edf7dfa042ae7fec235",
        "dimension.pdf": "99538ccdb9bf7f93be9c9e379b2cf158d0ef9b5853d7e87a3ac4878a4da13fd4",
        "photo.jpg": "e355f2ebabb9d4404500474b1b905751a4676ad1058553a4df2ca49bf3111cfd",
        "pinmap.png": "9abd89b006c7936b1c8e45a1161216b16b3e53878fd5abcb2b4960ac3147fe0f"
      },
      "contactMap": [
        {
          "number": "GPIO1",
          "label": "GPIO1",
          "x": -6.35,
          "y": -5.95,
          "connector": "P1"
        },
        {
          "number": "XSHUT",
          "label": "XSHUT",
          "x": -3.81,
          "y": -5.95,
          "connector": "P1"
        },
        {
          "number": "SDA",
          "label": "SDA",
          "x": -1.27,
          "y": -5.95,
          "connector": "P1"
        },
        {
          "number": "SCL",
          "label": "SCL",
          "x": 1.27,
          "y": -5.95,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": 3.81,
          "y": -5.95,
          "connector": "P1"
        },
        {
          "number": "VCC",
          "label": "VCC",
          "x": 6.35,
          "y": -5.95,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-sgp40-sen0392": {
    "contacts": [
      {
        "label": "VCC",
        "x": -3.81,
        "y": 4.35,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -1.27,
        "y": 4.35,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": 4.35,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 3.81,
        "y": 4.35,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7\" cy=\"3.75\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7\" cy=\"3.75\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7\" cy=\"3.75\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7\" cy=\"3.75\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.5\" y=\"-2.1\" width=\"3\" height=\"3\" rx=\"0.2\" fill=\"#616d63\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"0\" cy=\"-.6\" r=\".6\" fill=\"#b2b6a6\"/><rect x=\"-6.35\" y=\"-3.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-3.35\" y=\"-3.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.65\" y=\"-3.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"5.65\" y=\"-3.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><text x=\"0\" y=\"1.8\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">SGP40</text>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "90 degrees clockwise relative to the portrait pinmap",
      "sourceHashes": {
        "schematics.pdf": "a9bd83cc8f5b66c2fcbabd00fdd5d7518a91caf92c7f41dd5ca7b2000fe96227",
        "photo.jpg": "9750b7158c00522e4e4ed941abab701fa5fadb97d4c98c8b3eb8f2bfff667c6d",
        "pinmap.png": "b4c00fb8aad8d39ee6b403590491dcbc2a93dc1416bce27d121ab6cc05050d41"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -3.81,
          "y": 4.35,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -1.27,
          "y": 4.35,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": 1.27,
          "y": 4.35,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 3.81,
          "y": 4.35,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-tcs3430-sen0403": {
    "contacts": [
      {
        "label": "INT",
        "x": -6.35,
        "y": -5.7,
        "number": "INT",
        "connector": "P1",
        "id": "p1",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "LED",
        "x": -3.81,
        "y": -5.7,
        "number": "LED",
        "connector": "P1",
        "id": "p2",
        "type": "input",
        "description": "Illumination LED driver control input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": -1.27,
        "y": -5.7,
        "number": "SDA",
        "connector": "P1",
        "id": "p3",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": -5.7,
        "number": "SCL",
        "connector": "P1",
        "id": "p4",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": 3.81,
        "y": -5.7,
        "number": "GND",
        "connector": "P1",
        "id": "p5",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VCC",
        "x": 6.35,
        "y": -5.7,
        "number": "VCC",
        "connector": "P1",
        "id": "p6",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"9\" cy=\"5.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"9\" cy=\"5.5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-9\" cy=\"5.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-9\" cy=\"5.5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.4\" y=\"-1.9\" width=\"2.8\" height=\"2.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.15\" cy=\"-1.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6600000000000001\" y=\"-1.48\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"0.19999999999999996\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-1.48\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"0.19999999999999996\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"0\" cy=\"-.5\" r=\".45\" fill=\"#626b5b\"/><rect x=\"-4.65\" y=\"-2.05\" width=\"1.3\" height=\"3.1\" rx=\"0.15\" fill=\"#efeead\" stroke=\"#ddd9b6\" stroke-width=\".1\"/><rect x=\"3.35\" y=\"-2.05\" width=\"1.3\" height=\"3.1\" rx=\"0.15\" fill=\"#efeead\" stroke=\"#ddd9b6\" stroke-width=\".1\"/><text x=\"0\" y=\"2.7\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">TCS3430</text>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "6adb628e8916b26fddd5d1e1580aba64247d4c68fa66b461d152b0d31f490964",
        "dimension.pdf": "65c67379134fd0e9c5a8693ccfe19309d9626fbbddc3ac3f3bbdeedfe4e17401",
        "photo.jpg": "0c5ebb50143425b2d0cddb4b5fc37519763a8d3e09ef5f772ce5c0bc7e9ac369",
        "pinmap.png": "ee88f98f0c9621611a3f83ebff3a348e117d69214c8f79119fa9f5f63e6912a5"
      },
      "contactMap": [
        {
          "number": "INT",
          "label": "INT",
          "x": -6.35,
          "y": -5.7,
          "connector": "P1"
        },
        {
          "number": "LED",
          "label": "LED",
          "x": -3.81,
          "y": -5.7,
          "connector": "P1"
        },
        {
          "number": "SDA",
          "label": "SDA",
          "x": -1.27,
          "y": -5.7,
          "connector": "P1"
        },
        {
          "number": "SCL",
          "label": "SCL",
          "x": 1.27,
          "y": -5.7,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": 3.81,
          "y": -5.7,
          "connector": "P1"
        },
        {
          "number": "VCC",
          "label": "VCC",
          "x": 6.35,
          "y": -5.7,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-lis2dw12-sen0405": {
    "contacts": [
      {
        "label": "VCC",
        "x": -3.81,
        "y": -5.65,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -1.27,
        "y": -5.65,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": -5.65,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input / SPI serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 3.81,
        "y": -5.65,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data / SPI data input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDO",
        "x": -3.81,
        "y": 5.65,
        "number": "P2.1",
        "connector": "P2",
        "id": "p5",
        "type": "bidirectional",
        "description": "SPI serial data output / I2C address-selection input, depending on the selected interface.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "CS",
        "x": -1.27,
        "y": 5.65,
        "number": "P2.2",
        "connector": "P2",
        "id": "p6",
        "type": "input",
        "description": "Active-low SPI chip-select input / I2C mode-selection input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT1",
        "x": 1.27,
        "y": 5.65,
        "number": "P2.3",
        "connector": "P2",
        "id": "p7",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT2",
        "x": 3.81,
        "y": 5.65,
        "number": "P2.4",
        "connector": "P2",
        "id": "p8",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7.5\" cy=\"5\" r=\"2.35\" fill=\"#cbb96e\"/><circle cx=\"7.5\" cy=\"5\" r=\"1.55\" fill=\"#eef3ed\"/><circle cx=\"-7.5\" cy=\"5\" r=\"2.35\" fill=\"#cbb96e\"/><circle cx=\"-7.5\" cy=\"5\" r=\"1.55\" fill=\"#eef3ed\"/><rect x=\"-1.35\" y=\"-1.6500000000000001\" width=\"2.7\" height=\"2.7\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.1\" cy=\"-1.4000000000000001\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6100000000000003\" y=\"-1.25\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6100000000000003\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6100000000000003\" y=\"0.37\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"-1.25\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"0.37\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M3 -2H6M6 -2L5.3 -2.6M6 -2L5.3 -1.4M3 -2V-4M3 -4L2.5 -3.3M3 -4L3.5 -3.3\" stroke=\"#e5e7d6\" fill=\"none\" stroke-width=\".15\"/><text x=\"0\" y=\"3\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">LIS2DW12</text><rect x=\"-5.35\" y=\"-1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-5.35\" y=\"0.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-0.35\" y=\"-4.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-1.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"0.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "b9644db28f02fbcb8bf1525f743279aa0c0ef53ad33eae372628368babbd9982",
        "dimension.jpg": "3c4788e842c2d3de9a5e8310e05a4bfafd0825b6cd898558a70c1385441f3b7e",
        "photo.jpg": "5856d09af98d6fe33400946ee70faa2dad7b16dc82b218363362c932f1292cfd",
        "pinmap.jpg": "3c4788e842c2d3de9a5e8310e05a4bfafd0825b6cd898558a70c1385441f3b7e"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -3.81,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -1.27,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": 1.27,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 3.81,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P2.1",
          "label": "SDO",
          "x": -3.81,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.2",
          "label": "CS",
          "x": -1.27,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.3",
          "label": "INT1",
          "x": 1.27,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.4",
          "label": "INT2",
          "x": 3.81,
          "y": 5.65,
          "connector": "P2"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-h3lis200dl-sen0408": {
    "contacts": [
      {
        "label": "VCC",
        "x": -3.81,
        "y": -5.65,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -1.27,
        "y": -5.65,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": -5.65,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input / SPI serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 3.81,
        "y": -5.65,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data / SPI data input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDO",
        "x": -3.81,
        "y": 5.65,
        "number": "P2.1",
        "connector": "P2",
        "id": "p5",
        "type": "bidirectional",
        "description": "SPI serial data output / I2C address-selection input, depending on the selected interface.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "CS",
        "x": -1.27,
        "y": 5.65,
        "number": "P2.2",
        "connector": "P2",
        "id": "p6",
        "type": "input",
        "description": "Active-low SPI chip-select input / I2C mode-selection input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT1",
        "x": 1.27,
        "y": 5.65,
        "number": "P2.3",
        "connector": "P2",
        "id": "p7",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT2",
        "x": 3.81,
        "y": 5.65,
        "number": "P2.4",
        "connector": "P2",
        "id": "p8",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7.5\" cy=\"5\" r=\"2.35\" fill=\"#cbb96e\"/><circle cx=\"7.5\" cy=\"5\" r=\"1.55\" fill=\"#eef3ed\"/><circle cx=\"-7.5\" cy=\"5\" r=\"2.35\" fill=\"#cbb96e\"/><circle cx=\"-7.5\" cy=\"5\" r=\"1.55\" fill=\"#eef3ed\"/><rect x=\"-2.0\" y=\"-2.3\" width=\"4\" height=\"4\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.75\" cy=\"-2.05\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-2.2600000000000002\" y=\"-1.6400000000000001\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-2.2600000000000002\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-2.2600000000000002\" y=\"0.7599999999999999\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.98\" y=\"-1.6400000000000001\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.98\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.98\" y=\"0.7599999999999999\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M3 -2H6M6 -2L5.3 -2.6M6 -2L5.3 -1.4M3 -2V-4M3 -4L2.5 -3.3M3 -4L3.5 -3.3\" stroke=\"#e5e7d6\" fill=\"none\" stroke-width=\".15\"/><text x=\"0\" y=\"3\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">H3LIS200DL</text><rect x=\"-5.35\" y=\"-1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-5.35\" y=\"0.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-0.35\" y=\"-4.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-1.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"0.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "86770f33f4d63fb88cf6c8d0d1bb6a97990705df96bed500cacae8f0c6161812",
        "dimension.png": "0915fc22579ca7d86e3e9db4ec64e6f704d83736b910c639724fe49cc0f91eff",
        "photo.jpg": "d1b077fbc088e0ba2744de87456886bf3c01a2e74e7b40a9250282447ca2a7ee",
        "pinmap.png": "7e5ba024d4a581c6f150bfac9a0b28f8ecaa4af02dc8468d75d4507985d04838"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -3.81,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -1.27,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": 1.27,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 3.81,
          "y": -5.65,
          "connector": "P1"
        },
        {
          "number": "P2.1",
          "label": "SDO",
          "x": -3.81,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.2",
          "label": "CS",
          "x": -1.27,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.3",
          "label": "INT1",
          "x": 1.27,
          "y": 5.65,
          "connector": "P2"
        },
        {
          "number": "P2.4",
          "label": "INT2",
          "x": 3.81,
          "y": 5.65,
          "connector": "P2"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-vl6180x-sen0427": {
    "contacts": [
      {
        "label": "VCC",
        "x": -6.35,
        "y": 7.3,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -3.81,
        "y": 7.3,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": -1.27,
        "y": 7.3,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 1.27,
        "y": 7.3,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT",
        "x": 3.81,
        "y": 7.3,
        "number": "P1.5",
        "connector": "P1",
        "id": "p5",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "CE",
        "x": 6.35,
        "y": 7.3,
        "number": "P1.6",
        "connector": "P1",
        "id": "p6",
        "type": "input",
        "description": "Sensor enable input; LOW shuts down the sensor.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7.5\" cy=\"-7\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7.5\" cy=\"-7\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7.5\" cy=\"-7\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7.5\" cy=\"-7\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-2.25\" y=\"-4.85\" width=\"4.5\" height=\"2.7\" rx=\"0.2\" fill=\"#333936\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.3\" cy=\"-3.5\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><circle cx=\"1.3\" cy=\"-3.5\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><rect x=\"-1.05\" y=\"-1.3\" width=\"2.1\" height=\"1.6\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-0.8\" cy=\"-1.05\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.31\" y=\"-1.12\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"-0.16000000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-1.12\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-0.16000000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.2\" y=\"-0.9\" width=\"2.4\" height=\"1.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-5.95\" cy=\"-0.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-6.46\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.46\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.46\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.8\" y=\"-0.9\" width=\"2.4\" height=\"1.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"4.05\" cy=\"-0.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"3.5399999999999996\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-7.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-3.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"6.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><text x=\"0\" y=\"-6\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.8\">VL6180X</text>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "e61a06a48b960ded63d01471549c1436e8b088d93c3c1259a83c11af459b9f9a",
        "dimension.pdf": "fef3ab5ef14fe9ad10ce9c46717b9ff783c5da713cf8727fb15f7b6ebe73850d",
        "photo.jpg": "e3a3e74c92935912773343bf84241d192255cf67c51f4e7231f366ba4740e222",
        "pinmap.png": "78b7ed89b2b3b53ca8dcd9ab651e063762ec38689508ccad702fc70d5dd7590b"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "VCC",
          "x": -6.35,
          "y": 7.3,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -3.81,
          "y": 7.3,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "SCL",
          "x": -1.27,
          "y": 7.3,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "SDA",
          "x": 1.27,
          "y": 7.3,
          "connector": "P1"
        },
        {
          "number": "P1.5",
          "label": "INT",
          "x": 3.81,
          "y": 7.3,
          "connector": "P1"
        },
        {
          "number": "P1.6",
          "label": "CE",
          "x": 6.35,
          "y": 7.3,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-tmf8801-sen0430": {
    "contacts": [
      {
        "label": "VCC",
        "x": -8.89,
        "y": 5.7,
        "number": "VCC",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "2.7–3.3 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -6.35,
        "y": 5.7,
        "number": "GND",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": -3.81,
        "y": 5.7,
        "number": "SCL",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": -1.27,
        "y": 5.7,
        "number": "SDA",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT",
        "x": 1.27,
        "y": 5.7,
        "number": "INT",
        "connector": "P1",
        "id": "p5",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "EN",
        "x": 3.81,
        "y": 5.7,
        "number": "EN",
        "connector": "P1",
        "id": "p6",
        "type": "input",
        "description": "Sensor enable / reset input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "PIN0",
        "x": 6.35,
        "y": 5.7,
        "number": "PIN0",
        "connector": "P1",
        "id": "p7",
        "type": "bidirectional",
        "description": "Programmable sensor digital input/output; function depends on register configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "PIN1",
        "x": 8.89,
        "y": 5.7,
        "number": "PIN1",
        "connector": "P1",
        "id": "p8",
        "type": "bidirectional",
        "description": "Programmable sensor digital input/output; function depends on register configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"8.5\" cy=\"-5.25\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"8.5\" cy=\"-5.25\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-8.5\" cy=\"-5.25\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-8.5\" cy=\"-5.25\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-2.25\" y=\"-4.85\" width=\"4.5\" height=\"2.7\" rx=\"0.2\" fill=\"#333936\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.3\" cy=\"-3.5\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><circle cx=\"1.3\" cy=\"-3.5\" r=\".5\" fill=\"#9a805a\" stroke=\"#bbb199\" stroke-width=\".1\"/><rect x=\"-1.05\" y=\"-1.3\" width=\"2.1\" height=\"1.6\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-0.8\" cy=\"-1.05\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.31\" y=\"-1.12\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.31\" y=\"-0.16000000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-1.12\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-0.64\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.0299999999999998\" y=\"-0.16000000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.2\" y=\"-0.9\" width=\"2.4\" height=\"1.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-5.95\" cy=\"-0.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-6.46\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.46\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-6.46\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-3.82\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.8\" y=\"-0.9\" width=\"2.4\" height=\"1.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"4.05\" cy=\"-0.65\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"3.5399999999999996\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"-0.68\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"-0.14\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"0.4\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-7.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-3.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"6.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><text x=\"0\" y=\"-6\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.8\">TMF8801</text>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "4be65994c618f050580bdee9dc3ded0dca44ae59263d6919e2d60fc206aebc76",
        "photo.jpg": "65873faffcc42179ecd24f83dd84e8328dd5bd8b4f69965516168a6c0d7e9b9f",
        "pinmap.png": "c5383ca373c7fb9a88f7c48778e64b5c071874002bcfa1ea4d1823f0dae7d480"
      },
      "contactMap": [
        {
          "number": "VCC",
          "label": "VCC",
          "x": -8.89,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": -6.35,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "SCL",
          "label": "SCL",
          "x": -3.81,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "SDA",
          "label": "SDA",
          "x": -1.27,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "INT",
          "label": "INT",
          "x": 1.27,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "EN",
          "label": "EN",
          "x": 3.81,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "PIN0",
          "label": "PIN0",
          "x": 6.35,
          "y": 5.7,
          "connector": "P1"
        },
        {
          "number": "PIN1",
          "label": "PIN1",
          "x": 8.89,
          "y": 5.7,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-sts35-sen0434": {
    "contacts": [
      {
        "label": "RST",
        "x": -6.35,
        "y": 7.2,
        "number": "RST",
        "connector": "P1",
        "id": "p1",
        "type": "input",
        "description": "Active-low sensor reset / shutdown control input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "ADDR",
        "x": -3.81,
        "y": 7.2,
        "number": "ADDR",
        "connector": "P1",
        "id": "p2",
        "type": "input",
        "description": "I2C address-selection input; follow the manufacturer pull-up/pull-down configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": -1.27,
        "y": 7.2,
        "number": "SDA",
        "connector": "P1",
        "id": "p3",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 1.27,
        "y": 7.2,
        "number": "SCL",
        "connector": "P1",
        "id": "p4",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": 3.81,
        "y": 7.2,
        "number": "GND",
        "connector": "P1",
        "id": "p5",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VCC",
        "x": 6.35,
        "y": 7.2,
        "number": "VCC",
        "connector": "P1",
        "id": "p6",
        "type": "power_in",
        "description": "3.3–5.5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"7.5\" cy=\"-6.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"7.5\" cy=\"-6.5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-7.5\" cy=\"-6.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-7.5\" cy=\"-6.5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.4\" y=\"-4.199999999999999\" width=\"2.8\" height=\"2.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.15\" cy=\"-3.9499999999999993\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6600000000000001\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M-4 -3.8V-5H4V-3.8M-4 -1.8V.1H4V-1.8\" fill=\"none\" stroke=\"#e7e8d7\" stroke-width=\".65\" stroke-linecap=\"round\"/><rect x=\"-3.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "981c8914a84c76781faadf0559d5ae5c374ea816c6c0746cf411501d2cf7e3a8",
        "dimension.pdf": "f79bb1a5b8b9c295df249a73626c61bb261b3b79c5adb6c7bd634ab1a3785e7e",
        "photo.jpg": "a43b7cb52b67005491c255e0a3915d71cc198fc7949ecc01f55fffc4e3124b60",
        "pinmap.png": "d7762970156dfcb4878ec4ae470af95e7a674ca13925b4942bce7acc8084d1ea"
      },
      "contactMap": [
        {
          "number": "RST",
          "label": "RST",
          "x": -6.35,
          "y": 7.2,
          "connector": "P1"
        },
        {
          "number": "ADDR",
          "label": "ADDR",
          "x": -3.81,
          "y": 7.2,
          "connector": "P1"
        },
        {
          "number": "SDA",
          "label": "SDA",
          "x": -1.27,
          "y": 7.2,
          "connector": "P1"
        },
        {
          "number": "SCL",
          "label": "SCL",
          "x": 1.27,
          "y": 7.2,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": 3.81,
          "y": 7.2,
          "connector": "P1"
        },
        {
          "number": "VCC",
          "label": "VCC",
          "x": 6.35,
          "y": 7.2,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-mcp9808-sen0435": {
    "contacts": [
      {
        "label": "A2",
        "x": -8.89,
        "y": 7.78,
        "number": "A2",
        "connector": "P1",
        "id": "p1",
        "type": "input",
        "description": "I2C address-selection input; follow the manufacturer pull-up/pull-down configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "A1",
        "x": -6.35,
        "y": 7.78,
        "number": "A1",
        "connector": "P1",
        "id": "p2",
        "type": "input",
        "description": "I2C address-selection input; follow the manufacturer pull-up/pull-down configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "A0",
        "x": -3.81,
        "y": 7.78,
        "number": "A0",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C address-selection input; follow the manufacturer pull-up/pull-down configuration.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "ALT",
        "x": -1.27,
        "y": 7.78,
        "number": "ALT",
        "connector": "P1",
        "id": "p4",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": 1.27,
        "y": 7.78,
        "number": "SDA",
        "connector": "P1",
        "id": "p5",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": 3.81,
        "y": 7.78,
        "number": "SCL",
        "connector": "P1",
        "id": "p6",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": 6.35,
        "y": 7.78,
        "number": "GND",
        "connector": "P1",
        "id": "p7",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VCC",
        "x": 8.89,
        "y": 7.78,
        "number": "VCC",
        "connector": "P1",
        "id": "p8",
        "type": "power_in",
        "description": "2.7–5.5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"9\" cy=\"-7.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"9\" cy=\"-7.5\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-9\" cy=\"-7.5\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-9\" cy=\"-7.5\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.4\" y=\"-4.199999999999999\" width=\"2.8\" height=\"2.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.15\" cy=\"-3.9499999999999993\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6600000000000001\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6600000000000001\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-3.78\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.94\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.38\" y=\"-2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M-4 -3.8V-5H4V-3.8M-4 -1.8V.1H4V-1.8\" fill=\"none\" stroke=\"#e7e8d7\" stroke-width=\".65\" stroke-linecap=\"round\"/><rect x=\"-3.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"1.5\" width=\"0.6\" height=\"1\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Dimension-calibrated manufacturer vector PDF contact centers",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "9b058d48384727ae16caf2e42247158d311ecbcc3c5dba6315c9461d21bcbcff",
        "dimension.pdf": "f32b3ce3e734ccd96f7fdfcdbc6cd245d0cf1db61daba9831e55ae2069463114",
        "photo.jpg": "33612077a4b2f208d8a6705cd906728ab8e8ee5225250559a1ebc62755bfa7d5",
        "pinmap.png": "35a34686d8abf68756bad019fa289f7cad48e2e581aea8ff8bc81336fb15e24b"
      },
      "contactMap": [
        {
          "number": "A2",
          "label": "A2",
          "x": -8.89,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "A1",
          "label": "A1",
          "x": -6.35,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "A0",
          "label": "A0",
          "x": -3.81,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "ALT",
          "label": "ALT",
          "x": -1.27,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "SDA",
          "label": "SDA",
          "x": 1.27,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "SCL",
          "label": "SCL",
          "x": 3.81,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": 6.35,
          "y": 7.78,
          "connector": "P1"
        },
        {
          "number": "VCC",
          "label": "VCC",
          "x": 8.89,
          "y": 7.78,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented.",
      "mechanicalPDF": {
        "file": "dimension.pdf",
        "sha256": "f32b3ce3e734ccd96f7fdfcdbc6cd245d0cf1db61daba9831e55ae2069463114",
        "bounds": [
          80.814,
          60.791,
          196.511,
          153.797
        ],
        "units": "PDF points converted to millimeters; reviewed dimension-matched view",
        "page": 1,
        "endpointGridSourceMm": 0.001,
        "calibration": [
          0.1987951286550213,
          0.19891189815710814
        ]
      }
    }
  },
  "dfrobot-fermion-mics5524-sen0440": {
    "contacts": [
      {
        "label": "5V",
        "x": -3.81,
        "y": 6.3,
        "number": "P1.1",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "4.9–5.1 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -1.27,
        "y": 6.3,
        "number": "P1.2",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "A0",
        "x": 1.27,
        "y": 6.3,
        "number": "P1.3",
        "connector": "P1",
        "id": "p3",
        "type": "output",
        "description": "Analog signal voltage output from the sensor circuit.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "EN",
        "x": 3.81,
        "y": 6.3,
        "number": "P1.4",
        "connector": "P1",
        "id": "p4",
        "type": "input",
        "description": "Sensor power enable input; LOW enables and HIGH disables the gas-sensor supply.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"4\" cy=\"-5.75\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"4\" cy=\"-5.75\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-4\" cy=\"-5.75\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-4\" cy=\"-5.75\" r=\"1.0\" fill=\"#eef3ed\"/><g><rect x=\"-2.9\" y=\"-3.9\" width=\"5.8\" height=\"7\" rx=\"0.5\" fill=\"#b6b9b2\" stroke=\"#e0e0d0\" stroke-width=\".1\"/><circle cx=\"-1.8\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><rect x=\"-4.35\" y=\"-3.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-4.35\" y=\"-0.8999999999999999\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-4.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-3.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-0.8999999999999999\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/></g>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "b71ff90c97c2f64cca67349f466985cb796d497abbcdbb9f36600f88eb7bb0d8",
        "dimension.pdf": "6d7fe3e9aed78b1c9eb8e073dc3ba686f2536e042d815712d6f5669a9a7cdfa0",
        "photo.jpg": "aaccc6f446b98710064f87a63d62f5f8943eaefef30dadcd0744be7742ba555b"
      },
      "contactMap": [
        {
          "number": "P1.1",
          "label": "5V",
          "x": -3.81,
          "y": 6.3,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "GND",
          "x": -1.27,
          "y": 6.3,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "A0",
          "x": 1.27,
          "y": 6.3,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "EN",
          "x": 3.81,
          "y": 6.3,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-mics2714-sen0441": {
    "contacts": [
      {
        "label": "5V",
        "x": -6.3,
        "y": -3.81,
        "number": "5V",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "4.9–5.1 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -6.3,
        "y": -1.27,
        "number": "GND",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VO",
        "x": -6.3,
        "y": 1.27,
        "number": "VO",
        "connector": "P1",
        "id": "p3",
        "type": "output",
        "description": "Analog signal voltage output from the sensor circuit.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "EN",
        "x": -6.3,
        "y": 3.81,
        "number": "EN",
        "connector": "P1",
        "id": "p4",
        "type": "input",
        "description": "Sensor power enable input; LOW enables and HIGH disables the gas-sensor supply.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"5.75\" cy=\"4\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"5.75\" cy=\"4\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"5.75\" cy=\"-4\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"5.75\" cy=\"-4\" r=\"1.0\" fill=\"#eef3ed\"/><g transform=\"rotate(90)\"><rect x=\"-2.9\" y=\"-3.9\" width=\"5.8\" height=\"7\" rx=\"0.5\" fill=\"#b6b9b2\" stroke=\"#e0e0d0\" stroke-width=\".1\"/><circle cx=\"-1.8\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-1.8\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"-0.6\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"0.6\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-2.6\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-1.4\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"-0.2\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"1.0\" r=\".22\" fill=\"#555e57\"/><circle cx=\"1.8\" cy=\"2.2\" r=\".22\" fill=\"#555e57\"/><rect x=\"-4.35\" y=\"-3.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-4.35\" y=\"-0.8999999999999999\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-4.35\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-3.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-0.8999999999999999\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/></g>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "90 degrees clockwise relative to the portrait mechanical drawing",
      "sourceHashes": {
        "schematics.pdf": "b8819273b31294a16f870e4cd30e3070a19dc90ae4c0005476c8847441e818b6",
        "dimension.pdf": "7a946a3c4ed1b2634921f5757bb52a0cbfe7d6176d37131cd0a9ff67cb33482b",
        "photo.jpg": "7bc448f0a4a11895975f1c450385b5d2c4558a111d06a2f0176d1f96b1192da5",
        "pinmap.png": "2cffc4f3e5830735cfee1dd7a3d2b1b728e28377d215a581de16ff56c269cc02"
      },
      "contactMap": [
        {
          "number": "5V",
          "label": "5V",
          "x": -6.3,
          "y": -3.81,
          "connector": "P1"
        },
        {
          "number": "GND",
          "label": "GND",
          "x": -6.3,
          "y": -1.27,
          "connector": "P1"
        },
        {
          "number": "VO",
          "label": "VO",
          "x": -6.3,
          "y": 1.27,
          "connector": "P1"
        },
        {
          "number": "EN",
          "label": "EN",
          "x": -6.3,
          "y": 3.81,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  },
  "dfrobot-fermion-s15ot421-sen0487": {
    "contacts": [
      {
        "label": "GND",
        "x": -2.54,
        "y": -4.84,
        "number": "J1.1",
        "connector": "J1",
        "id": "p1",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "VCC",
        "x": 0.0,
        "y": -4.84,
        "number": "J1.2",
        "connector": "J1",
        "id": "p2",
        "type": "power_in",
        "description": "3.3–5 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "A",
        "x": 2.54,
        "y": -4.84,
        "number": "J1.3",
        "connector": "J1",
        "id": "p3",
        "type": "output",
        "description": "Analog signal voltage output from the sensor circuit.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"6.5\" cy=\"-4.1\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"6.5\" cy=\"-4.1\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-6.5\" cy=\"-4.1\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-6.5\" cy=\"-4.1\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.3\" y=\"1.4\" width=\"2.6\" height=\"3.2\" rx=\"0.25\" fill=\"#b5bcb2\" stroke=\"#dedfc9\" stroke-width=\".1\"/><circle cx=\"0\" cy=\"3.5\" r=\".28\" fill=\"#313c35\"/><rect x=\"3.8\" y=\"0.10000000000000009\" width=\"2.4\" height=\"3\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"4.05\" cy=\"0.3500000000000001\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"3.5399999999999996\" y=\"0.5600000000000002\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"1.46\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"3.5399999999999996\" y=\"2.36\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"0.5600000000000002\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"1.46\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"6.180000000000001\" y=\"2.36\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.5\" y=\"0.7999999999999999\" width=\"3\" height=\"1.8\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-5.25\" cy=\"1.0499999999999998\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-5.76\" y=\"1.02\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.76\" y=\"1.56\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.76\" y=\"2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-2.52\" y=\"1.02\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-2.52\" y=\"1.56\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-2.52\" y=\"2.1\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-5.3\" y=\"-2.2\" width=\"0.6\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-3.3\" y=\"-2.2\" width=\"0.6\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-1.3\" y=\"-2.2\" width=\"0.6\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"0.7\" y=\"-2.2\" width=\"0.6\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"2.7\" y=\"-2.2\" width=\"0.6\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><text x=\"0\" y=\"5.3\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.8\">MIC</text>",
    "provenance": {
      "format": "Dimension-calibrated manufacturer vector PDF contact centers",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "839c10072fe1c4a2f3786b5848e75034b1e2cb4efbf4f578e30c30a99507df8d",
        "dimension.pdf": "8ba4d73bf438c3c8fbb43cc1bcb0c496eff05028feb898010120c146892a1811",
        "photo.jpg": "a24d5c8cbf0d71318bc238e869e06c8092030e97372e360d91af8e9494af0920",
        "pinmap.png": "43a4d3a590bf81178122596ebabb3e4699c63715dbc6d0242da7d4d72f488afa"
      },
      "contactMap": [
        {
          "number": "J1.1",
          "label": "GND",
          "x": -2.54,
          "y": -4.84,
          "connector": "J1"
        },
        {
          "number": "J1.2",
          "label": "VCC",
          "x": 0.0,
          "y": -4.84,
          "connector": "J1"
        },
        {
          "number": "J1.3",
          "label": "A",
          "x": 2.54,
          "y": -4.84,
          "connector": "J1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented.",
      "mechanicalPDF": {
        "file": "dimension.pdf",
        "sha256": "8ba4d73bf438c3c8fbb43cc1bcb0c496eff05028feb898010120c146892a1811",
        "bounds": [
          102.489,
          92.117,
          192.701,
          154.728
        ],
        "units": "PDF points converted to millimeters; reviewed dimension-matched view",
        "page": 1,
        "endpointGridSourceMm": 0.001,
        "calibration": [
          0.1995299960094001,
          0.19964542971682292
        ]
      }
    }
  },
  "dfrobot-fermion-bmm350-sen0622": {
    "contacts": [
      {
        "label": "3V3",
        "x": -10.16,
        "y": 6.45,
        "number": "P1.9",
        "connector": "P1",
        "id": "p1",
        "type": "power_in",
        "description": "3.3 V module supply input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "GND",
        "x": -7.62,
        "y": 6.45,
        "number": "P1.8",
        "connector": "P1",
        "id": "p2",
        "type": "power_in",
        "description": "Common ground / supply return.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SCL",
        "x": -5.08,
        "y": 6.45,
        "number": "P1.7",
        "connector": "P1",
        "id": "p3",
        "type": "input",
        "description": "I2C serial clock input.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "SDA",
        "x": -2.54,
        "y": 6.45,
        "number": "P1.6",
        "connector": "P1",
        "id": "p4",
        "type": "bidirectional",
        "description": "Bidirectional I2C serial data.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "NC",
        "x": 0.0,
        "y": 6.45,
        "number": "P1.5",
        "connector": "P1",
        "id": "p5",
        "type": "no_connect",
        "description": "Unconnected physical header contact shown as NC in the manufacturer pinmap.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "NC",
        "x": 2.54,
        "y": 6.45,
        "number": "P1.4",
        "connector": "P1",
        "id": "p6",
        "type": "no_connect",
        "description": "Unconnected physical header contact shown as NC in the manufacturer pinmap.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "NC",
        "x": 5.08,
        "y": 6.45,
        "number": "P1.3",
        "connector": "P1",
        "id": "p7",
        "type": "no_connect",
        "description": "Unconnected physical header contact shown as NC in the manufacturer pinmap.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "NC",
        "x": 7.62,
        "y": 6.45,
        "number": "P1.2",
        "connector": "P1",
        "id": "p8",
        "type": "no_connect",
        "description": "Unconnected physical header contact shown as NC in the manufacturer pinmap.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      },
      {
        "label": "INT",
        "x": 10.16,
        "y": 6.45,
        "number": "P1.1",
        "connector": "P1",
        "id": "p9",
        "type": "output",
        "description": "Sensor interrupt / alert output; consult the manufacturer for polarity and pull-up requirements.",
        "size": [
          1.5,
          1.5
        ],
        "drill": 0.9,
        "shape": "circle"
      }
    ],
    "artwork": "<circle cx=\"10.5\" cy=\"-6\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"10.5\" cy=\"-6\" r=\"1.0\" fill=\"#eef3ed\"/><circle cx=\"-10.5\" cy=\"-6\" r=\"1.8\" fill=\"#cbb96e\"/><circle cx=\"-10.5\" cy=\"-6\" r=\"1.0\" fill=\"#eef3ed\"/><rect x=\"-1.35\" y=\"-1.6500000000000001\" width=\"2.7\" height=\"2.7\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.1\" cy=\"-1.4000000000000001\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.6100000000000003\" y=\"-1.25\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6100000000000003\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.6100000000000003\" y=\"0.37\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"-1.25\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"-0.44\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.33\" y=\"0.37\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><path d=\"M3 -2H6M6 -2L5.3 -2.6M6 -2L5.3 -1.4M3 -2V-4M3 -4L2.5 -3.3M3 -4L3.5 -3.3\" stroke=\"#e5e7d6\" fill=\"none\" stroke-width=\".15\"/><text x=\"0\" y=\"3\" fill=\"#ece9d7\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"0.9\">BMM350</text><rect x=\"-5.35\" y=\"-1.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-5.35\" y=\"0.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-0.35\" y=\"-4.2\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"-1.4\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"3.65\" y=\"0.6\" width=\"0.7\" height=\"1.2\" rx=\"0.05\" fill=\"#a79370\" stroke=\"#d1d2bb\" stroke-width=\".1\"/><rect x=\"-1.5\" y=\"2.35\" width=\"3\" height=\"1.7\" rx=\"0.12\" fill=\"#343b35\" stroke=\"#8d978a\" stroke-width=\".1\"/><circle cx=\"-1.25\" cy=\"2.6\" r=\".12\" fill=\"#b5b49c\"/><rect x=\"-1.7600000000000002\" y=\"2.5500000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.7600000000000002\" y=\"3.06\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"-1.7600000000000002\" y=\"3.57\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.48\" y=\"2.5500000000000003\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.48\" y=\"3.06\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/><rect x=\"1.48\" y=\"3.57\" width=\"0.28\" height=\"0.28\" rx=\"0.01\" fill=\"#c4c5b1\" stroke=\"#8d978a\" stroke-width=\".1\"/>",
    "provenance": {
      "format": "Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch",
      "sourceView": "Component side as illustrated; any rotation is stated explicitly.",
      "rotation": "None",
      "sourceHashes": {
        "schematics.pdf": "16107b907d68d047a00aa9b79a68caaed91b709441635d46ac867c7abf09adc0",
        "photo.jpg": "aa06d711aa4453be7f8513c7cc73abd2a8ddc06b12adabcee33a39a1c9145ae5",
        "product-dimension.jpg": "3e8e3b1747201042ecc158b305e007bd26f5c8e4c83f6c302287409a0be49031",
        "pinmap.png": "c786dc1940939cd3d7aca1bc750cd544cfecff37dfbfc05b23881ace6d2b9855",
        "layout.pdf": "001868ded57722df0434b86504738e11c6252902644b582c2922eda35ef8f05f"
      },
      "contactMap": [
        {
          "number": "P1.9",
          "label": "3V3",
          "x": -10.16,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.8",
          "label": "GND",
          "x": -7.62,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.7",
          "label": "SCL",
          "x": -5.08,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.6",
          "label": "SDA",
          "x": -2.54,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.5",
          "label": "NC",
          "x": 0.0,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.4",
          "label": "NC",
          "x": 2.54,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.3",
          "label": "NC",
          "x": 5.08,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.2",
          "label": "NC",
          "x": 7.62,
          "y": 6.45,
          "connector": "P1"
        },
        {
          "number": "P1.1",
          "label": "INT",
          "x": 10.16,
          "y": 6.45,
          "connector": "P1"
        }
      ],
      "review": "Contact order follows the retained manufacturer front/back pinmap and schematic. The SVG contact centers and canvas anchors share these reviewed coordinates. Configuration bridges and non-interface fiducials are drawn only where visible; no unpublished service functions are invented."
    }
  }
};
