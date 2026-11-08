// Reviewed manufacturer source facts for explicit existing-ID physical views.
// Native exports and default illustrations remain owned by their catalog entries.
export default {
  "adafruit-4226-ina260": {
    "sku": "adafruit-4226-ina260",
    "source": {
      "label": "Adafruit INA260 Current and Power Sensor manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-INA260-PCB/blob/master/Adafruit%20INA260.brd"
    },
    "revision": "Adafruit INA260.brd / SHA-256 70f06bf914a1",
    "board": {
      "width": 22.868674,
      "height": 22.860279,
      "color": "#1165a1",
      "outline": "M-11.431315 8.635861A2.670022 2.670022 0 0 0 -8.891315 11.429861L8.787085 11.429861A2.603779 2.603779 0 0 0 11.428685 8.864461L11.428685 -8.458339A2.799652 2.799652 0 0 0 8.812485 -11.430139L-8.942115 -11.430139A2.606008 2.606008 0 0 0 -11.431315 -8.712339L-11.431315 8.635861Z"
    },
    "holes": [
      {
        "x": 8.888685,
        "y": -8.890139,
        "drill": 2.5
      },
      {
        "x": -8.891315,
        "y": -8.890139,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-5.081315\" y=\"-11.420139\" width=\"10.16\" height=\"8.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.284115\" y=\"-1.244739\" width=\"4.5656\" height=\"5.0292\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.078685\" y=\"1.396861\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.526315\" y=\"4.628445\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.526315\" y=\"-0.203339\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.283815\" y=\"3.588276\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.283815\" y=\"2.070061\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.557715\" y=\"4.858276\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.661985\" y=\"4.464276\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.910385\" y=\"4.419061\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -9.566315,
      -11.460139,
      7.150685,
      6.700445
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP2.1",
        "label": "Vcc",
        "type": "power_in",
        "description": "2.7\u20135.5 V sensor supply.",
        "x": -8.891315,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vcc",
        "insert": true
      },
      {
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": -6.351315,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP2.3",
        "label": "SCL",
        "type": "input",
        "description": "I\u00b2C clock.",
        "x": -3.811315,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "scl",
        "insert": true
      },
      {
        "number": "JP2.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I\u00b2C data.",
        "x": -1.271315,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "sda",
        "insert": true
      },
      {
        "number": "JP2.5",
        "label": "Alert",
        "type": "open_collector",
        "description": "Open-drain programmable alert output.",
        "x": 1.268685,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "alert",
        "insert": true
      },
      {
        "number": "JP2.6",
        "label": "VBus",
        "type": "input",
        "description": "Bus-voltage sense input. Factory jumper ties this to VIN+.",
        "x": 3.808685,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vbus",
        "insert": true
      },
      {
        "number": "JP2.7",
        "label": "Vin+",
        "type": "passive",
        "description": "Positive side of the integrated current shunt.",
        "x": 6.348685,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "ip",
        "insert": true
      },
      {
        "number": "JP2.8",
        "label": "Vin\u2212",
        "type": "passive",
        "description": "Negative side of the integrated current shunt.",
        "x": 8.888685,
        "y": 8.889861,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "im",
        "insert": true
      },
      {
        "number": "X1.P$3",
        "label": "Vin+",
        "type": "passive",
        "description": "Screw-terminal connection to the same shunt terminal as the Vin+ header.",
        "x": -2.541315,
        "y": -7.620139,
        "size": [
          2.1844,
          4.3688
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 1.1,
        "pinId": "ip-term",
        "insert": false
      },
      {
        "number": "X1.P$4",
        "label": "Vin\u2212",
        "type": "passive",
        "description": "Screw-terminal connection to the same shunt terminal as the Vin\u2212 header.",
        "x": 2.538685,
        "y": -7.620139,
        "size": [
          2.1844,
          4.3688
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 1.1,
        "pinId": "im-term",
        "insert": false
      }
    ],
    "bodyRegions": [
      {
        "x": -11.434337,
        "y": -11.4301395,
        "width": 22.868674,
        "height": 22.860279
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit INA260.brd source revision, SHA-256 70f06bf914a16d83663a3447265374dfcb3b36b3c32a25687348a96367421d3a. Header bank(s) JP2 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit INA260.brd",
      "boardSha256": "70f06bf914a16d83663a3447265374dfcb3b36b3c32a25687348a96367421d3a",
      "sourceBounds": [
        -0.003022097286836889,
        -0.00027876556361849936,
        22.865651556890604,
        22.86
      ],
      "selectedConnectors": [
        "JP2",
        "X1"
      ],
      "reviewWarnings": [
        "JP2.3: unresolved electrical role on SCL.",
        "JP2.4: unresolved electrical role on SDA.",
        "JP2.5: unresolved electrical role on ALERT.",
        "JP2.7: unresolved electrical role on IN+.",
        "JP2.8: unresolved electrical role on IN-.",
        "X1.P$3: unresolved electrical role on IN+.",
        "X1.P$4: unresolved electrical role on IN-."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-INA260-PCB/blob/master/Adafruit%20INA260.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-INA260-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-5580-max17048": {
    "sku": "adafruit-5580-max17048",
    "source": {
      "label": "Adafruit MAX17048 LiPo Fuel Gauge manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-MAX17048-PCB/blob/main/Adafruit-MAX17048-STEMMA.brd"
    },
    "revision": "Adafruit-MAX17048-STEMMA.brd / SHA-256 01830495f0e6",
    "board": {
      "width": 25.4,
      "height": 20.32,
      "color": "#292d32",
      "outline": "M-12.7 7.62A2.54 2.54 0 0 0 -10.16 10.16L10.16 10.16A2.54 2.54 0 0 0 12.7 7.62L12.7 -7.62A2.54 2.54 0 0 0 10.16 -10.16L-10.16 -10.16A2.54 2.54 0 0 0 -12.7 -7.62L-12.7 7.62Z"
    },
    "holes": [
      {
        "x": -10.16,
        "y": -7.62,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": -7.62,
        "drill": 2.54
      },
      {
        "x": -10.16,
        "y": 7.62,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 7.62,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"0.318\" y=\"-9.604\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.318\" y=\"-9.604\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.1825\" y=\"-1.73\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.8825\" y=\"-1.83\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.718\" y=\"1.148\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"0.551\" width=\"3.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.858\" y=\"-3.448\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.597\" y=\"0.724\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.073\" y=\"2.235\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.674\" y=\"-0.165\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.222499999999998,
      -9.643999999999998,
      12.2225,
      4.988
    ],
    "backArtwork": "<rect x=\"-2.159\" y=\"-0.127\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.049\" y=\"-5.588\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -11.088999999999999,
      -5.628,
      2.453,
      1.945
    ],
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Supply for the I\u00b2C logic level. The fuel gauge itself is powered by the battery.",
        "x": -6.35,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "vin",
        "insert": true
      },
      {
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": -3.81,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP1.3",
        "label": "SCL",
        "type": "input",
        "description": "I\u00b2C clock.",
        "x": -1.27,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "scl",
        "insert": true
      },
      {
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I\u00b2C data.",
        "x": 1.27,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sda",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "INT",
        "type": "open_collector",
        "description": "Active-low alert output.",
        "x": 3.81,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "int",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "QStart",
        "type": "input",
        "description": "Quick-start input. Drive high to restart the gauge estimate.",
        "x": 6.35,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "qst",
        "insert": true
      },
      {
        "number": "JP2.1",
        "label": "BAT",
        "type": "passive",
        "description": "Single-cell battery positive terminal.",
        "x": -1.27,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "bat",
        "insert": false
      },
      {
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Battery return. Common with logic GND.",
        "x": 1.27,
        "y": -1.27,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "bat-gnd",
        "insert": false
      }
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -10.16,
        "width": 25.4,
        "height": 20.32
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit-MAX17048-STEMMA.brd source revision, SHA-256 01830495f0e61780aba63709bdb3ba2ddadd4f3bf83ce6022c07f68072542906. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit-MAX17048-STEMMA.brd",
      "boardSha256": "01830495f0e61780aba63709bdb3ba2ddadd4f3bf83ce6022c07f68072542906",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        20.32
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [
        "JP1.3: unresolved electrical role on SCL.",
        "JP1.4: unresolved electrical role on SDA.",
        "JP1.5: unresolved electrical role on INT.",
        "JP1.6: unresolved electrical role on QSTART."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-MAX17048-PCB/blob/main/Adafruit-MAX17048-STEMMA.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-MAX17048-PCB/blob/main/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-5807-husb238": {
    "sku": "adafruit-5807-husb238",
    "source": {
      "label": "Adafruit HUSB238 USB-C PD Breakout manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Power-Delivery-Dummy-Breakout-PCB/blob/main/Adafruit%20HUSB238%20USB-C%20PD%20Breakout.brd"
    },
    "revision": "Adafruit HUSB238 USB-C PD Breakout.brd / SHA-256 5c99400328f1",
    "board": {
      "width": 20.32,
      "height": 23.495,
      "color": "#292d32",
      "outline": "M10.16 9.2075A2.54 2.54 0 0 1 7.62 11.7475L-7.62 11.7475A2.54 2.54 0 0 1 -10.16 9.2075L-10.16 -9.2075A2.54 2.54 0 0 1 -7.62 -11.7475L7.62 -11.7475A2.54 2.54 0 0 1 10.16 -9.2075L10.16 9.2075Z"
    },
    "holes": [
      {
        "x": 7.493,
        "y": -9.2075,
        "drill": 2.5
      },
      {
        "x": -7.747,
        "y": -9.2075,
        "drill": 2.5
      },
      {
        "x": -2.89,
        "y": -6.6105,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -6.6105,
        "drill": 0.65
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-12.8905\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.6595\" y=\"0.23\" width=\"3.35\" height=\"3.35\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.056\" y=\"-3.2145\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.731\" y=\"-5.461\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.906\" y=\"-4.7625\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.731\" y=\"1.143\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.731\" y=\"-3.2385\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.731\" y=\"-1.016\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.731\" y=\"3.302\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.8425\" y=\"-1.016\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.016\" y=\"-3.2\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"5.69\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"1.626\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"3.658\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.611\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.851\" y=\"-3.848\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.724\" y=\"0.851\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6605\" y=\"3.2005\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.6605\" y=\"-1.435\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.4225\" y=\"1.041\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.66\" y=\"-1.3845\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.165\" y=\"1.041\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -9.946,
      -12.930499999999999,
      10.073,
      7.05
    ],
    "backArtwork": "<rect x=\"-3.6\" y=\"3.7755\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -3.64,
      3.7355,
      3.44,
      10.8155
    ],
    "contacts": [
      {
        "number": "JP3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "I\u00b2C data. Pull up to the host logic voltage.",
        "x": -7.62,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.0,
        "pinId": "sda",
        "insert": true
      },
      {
        "number": "JP3.2",
        "label": "SCL",
        "type": "input",
        "description": "I\u00b2C clock. Pull up to the host logic voltage.",
        "x": -5.08,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.0,
        "pinId": "scl",
        "insert": true
      },
      {
        "number": "JP3.1",
        "label": "V+",
        "type": "power_out",
        "description": "Negotiated USB power output, also available at the optional screw terminal.",
        "x": -2.54,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1.0,
        "pinId": "vout",
        "insert": true
      },
      {
        "number": "JP4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": 2.54,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP4.2",
        "label": "D\u2212",
        "type": "passive",
        "description": "USB 2.0 data minus, passed through from the USB-C receptacle.",
        "x": 5.08,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "dm",
        "insert": true
      },
      {
        "number": "JP4.3",
        "label": "D+",
        "type": "passive",
        "description": "USB 2.0 data plus, passed through from the USB-C receptacle.",
        "x": 7.62,
        "y": 9.2075,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "dp",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -10.16,
        "y": -11.7475,
        "width": 20.32,
        "height": 23.495
      },
      {
        "x": -4.47,
        "y": -12.8905,
        "width": 8.94,
        "height": 7.35
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit HUSB238 USB-C PD Breakout.brd source revision, SHA-256 5c99400328f11ad21f835db0b2ade5e4f43ff88045cffdbcf1c84359ce222794. Header bank(s) JP3, JP4 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit HUSB238 USB-C PD Breakout.brd",
      "boardSha256": "5c99400328f11ad21f835db0b2ade5e4f43ff88045cffdbcf1c84359ce222794",
      "sourceBounds": [
        0.0,
        0.0,
        20.32,
        23.495000000000005
      ],
      "selectedConnectors": [
        "JP3",
        "JP4"
      ],
      "reviewWarnings": [
        "JP3.2: unresolved electrical role on SCL.",
        "JP3.3: unresolved electrical role on SDA.",
        "JP4.2: unresolved electrical role on D-.",
        "JP4.3: unresolved electrical role on D+."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Power-Delivery-Dummy-Breakout-PCB/blob/main/Adafruit%20HUSB238%20USB-C%20PD%20Breakout.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-USB-Type-C-Power-Delivery-Dummy-Breakout-PCB/blob/main/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-powerboost-500c": {
    "sku": "adafruit-powerboost-500c",
    "source": {
      "label": "Adafruit PowerBoost 500C manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-PowerBoost-500-Charger-PCB/blob/master/Adafruit%20PowerBoost%20500C.brd"
    },
    "revision": "Adafruit PowerBoost 500C.brd / SHA-256 1c7ebdaa8168",
    "board": {
      "width": 35.56771,
      "height": 21.59,
      "color": "#1165a1",
      "outline": "M-17.783855 8.255A2.54 2.54 0 0 0 -15.243855 10.795L15.236145 10.795A2.54 2.54 0 0 0 17.776145 8.255L17.776145 -8.255A2.35721 2.35721 0 0 0 15.617145 -10.795L-15.243855 -10.795A2.54 2.54 0 0 0 -17.783855 -8.255L-17.783855 8.255Z"
    },
    "holes": [
      {
        "x": -15.243855,
        "y": -8.255,
        "drill": 2.5
      },
      {
        "x": -15.243855,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": -13.465855,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -13.465855,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": "<rect x=\"-9.845855\" y=\"2.739\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.365855\" y=\"-3.975\" width=\"6.0\" height=\"8.325\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.217145\" y=\"-3.473\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.387145\" y=\"-6.081\" width=\"5.7\" height=\"5.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.879145\" y=\"0.267\" width=\"4.2\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.497145\" y=\"5.285\" width=\"3.0\" height=\"5.432\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.228855\" y=\"-5.714\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.300255\" y=\"-1.8764\" width=\"2.8448\" height=\"1.7208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.897855\" y=\"-9.688\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.976855\" y=\"-9.688\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.627855\" y=\"7.711\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.862145\" y=\"8.855\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.750145\" y=\"5.461\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.546145\" y=\"1.777\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.528145\" y=\"-1.839\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.496145\" y=\"-5.461\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.823145\" y=\"-10.058\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.918145\" y=\"8.865\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.622145\" y=\"-2.667\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.733145\" y=\"0.762\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.123145\" y=\"3.277\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.886855\" y=\"-4.445\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.585855\" y=\"3.683\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.585855\" y=\"-0.508\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.155855\" y=\"-2.667\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.543145\" y=\"7.366\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.638145\" y=\"7.366\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.192145\" y=\"7.24\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.680855\" y=\"-5.334\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.585855\" y=\"-5.334\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -18.405855,
      -10.097999999999999,
      19.257145,
      10.757
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP2.1",
        "label": "USB",
        "type": "power_in",
        "description": "5 V charge input. This contact is shared with the USB input power rail.",
        "x": -7.623855,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "usb",
        "insert": true
      },
      {
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": -5.083855,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP1.1",
        "label": "Bat",
        "type": "passive",
        "description": "Single-cell battery positive terminal.",
        "x": -2.543855,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "bat",
        "insert": true
      },
      {
        "number": "JP1.2",
        "label": "EN",
        "type": "input",
        "description": "Boost enable. Pulled high on the board. Connect to GND to disable the boost output.",
        "x": -0.003855,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "en",
        "insert": true
      },
      {
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": 2.536145,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "gnd-2",
        "insert": true
      },
      {
        "number": "JP1.4",
        "label": "LB",
        "type": "open_collector",
        "description": "Active-low battery flag. The board pulls it up above 3.3 V when the battery is charged. Use level translation for a 3.3 V input.",
        "x": 5.076145,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "low",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": 7.616145,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "gnd-3",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "5V",
        "type": "power_out",
        "description": "Boost converter output, nominally 5.2 V.",
        "x": 10.156145,
        "y": -9.525,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "vout",
        "insert": true
      },
      {
        "number": "X1.1",
        "label": "\u2212",
        "type": "power_in",
        "description": "Ground at the alternate screw terminal.",
        "x": 15.617145,
        "y": -1.673,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "out-gnd",
        "insert": false
      },
      {
        "number": "X1.2",
        "label": "+",
        "type": "power_out",
        "description": "Alternate connection to the 5.2 V boost output.",
        "x": 15.617145,
        "y": 1.827,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "out-alt",
        "insert": false
      }
    ],
    "bodyRegions": [
      {
        "x": -17.783855,
        "y": -10.795,
        "width": 35.56771,
        "height": 21.59
      },
      {
        "x": -18.365855,
        "y": -3.975,
        "width": 6.0,
        "height": 8.325
      },
      {
        "x": 12.217145,
        "y": -3.473,
        "width": 7.0,
        "height": 7.0
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit PowerBoost 500C.brd source revision, SHA-256 1c7ebdaa8168ddcdbd16c8bc7363d5dc77b9001cd671e5d0048d99fcababbfb5. Header bank(s) JP1, JP2 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PowerBoost 500C.brd",
      "boardSha256": "1c7ebdaa8168ddcdbd16c8bc7363d5dc77b9001cd671e5d0048d99fcababbfb5",
      "sourceBounds": [
        0.0,
        0.0,
        35.56771032154537,
        21.59
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "X1"
      ],
      "reviewWarnings": [
        "JP1.2: unresolved electrical role on ENABLE.",
        "JP1.4: unresolved electrical role on LBO.",
        "JP2.1: unresolved electrical role on VDD1."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-PowerBoost-500-Charger-PCB/blob/master/Adafruit%20PowerBoost%20500C.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-PowerBoost-500-Charger-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-powerboost-1000c": {
    "sku": "adafruit-powerboost-1000c",
    "source": {
      "label": "Adafruit PowerBoost 1000C manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-PowerBoost-1000C/blob/master/Adafruit%20PowerBoost%201000C%20Rev%20B.brd"
    },
    "revision": "Adafruit PowerBoost 1000C Rev B.brd / SHA-256 a7cf8c4e0de0",
    "board": {
      "width": 36.10136,
      "height": 22.86,
      "color": "#1165a1",
      "outline": "M-15.51068 -11.43A2.54 2.54 0 0 0 -18.05068 -8.89L-18.05068 -4.064L-17.79668 -3.81L-17.79668 3.81L-18.05068 4.064L-18.05068 8.89A2.54 2.54 0 0 0 -15.51068 11.43L16.23932 11.43A2.19236 2.19236 0 0 0 18.01732 8.89L18.01732 -8.89A2.19236 2.19236 0 0 0 16.23932 -11.43L-15.51068 -11.43Z"
    },
    "holes": [
      {
        "x": -15.51068,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -15.51068,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -13.73268,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -13.73268,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": "<rect x=\"-11.38268\" y=\"-10.874\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.63268\" y=\"-3.975\" width=\"6.0\" height=\"8.325\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.45832\" y=\"-3.9175\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.50132\" y=\"-7.224\" width=\"5.7\" height=\"5.5\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.12032\" y=\"-0.876\" width=\"4.2\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.23968\" y=\"0.032\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.77588\" y=\"5.2356\" width=\"2.8448\" height=\"1.7208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.86672\" y=\"5.3848\" width=\"2.4892\" height=\"1.9304\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.19668\" y=\"-10.356\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.19668\" y=\"9.712\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.75268\" y=\"9.712\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.74732\" y=\"9.299\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.99732\" y=\"-3.71\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.99732\" y=\"-1.805\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.99132\" y=\"4.953\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.78732\" y=\"1.142\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.76932\" y=\"-2.474\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.73732\" y=\"-6.096\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.78432\" y=\"5.461\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.00632\" y=\"4.953\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.96932\" y=\"-10.439\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.54032\" y=\"-9.804\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.12632\" y=\"-5.74\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.61832\" y=\"6.325\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.43332\" y=\"2.16\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.04268\" y=\"5.969\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.13768\" y=\"5.969\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.20768\" y=\"-3.073\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.34368\" y=\"1.397\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.86768\" y=\"-5.574\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.12268\" y=\"6.731\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.72568\" y=\"1.651\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.59868\" y=\"-1.905\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.21768\" y=\"5.969\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.43868\" y=\"1.397\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -18.67268,
      -10.914,
      19.49832,
      10.902
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP2.1",
        "label": "USB",
        "type": "power_in",
        "description": "5 V charge input. This contact is shared with the USB input power rail.",
        "x": -5.22368,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "usb",
        "insert": true
      },
      {
        "number": "JP2.2",
        "label": "Bat",
        "type": "passive",
        "description": "Single-cell battery positive terminal.",
        "x": -2.68368,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "bat",
        "insert": true
      },
      {
        "number": "JP2.3",
        "label": "VS",
        "type": "power_out",
        "description": "Load-sharing supply to the boost converter. Powered by USB when present or by the battery otherwise.",
        "x": -0.14368,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vs",
        "insert": true
      },
      {
        "number": "JP2.4",
        "label": "EN",
        "type": "input",
        "description": "Boost enable. Pulled high on the board. Connect to GND to disable the boost output.",
        "x": 2.39632,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "en",
        "insert": true
      },
      {
        "number": "JP2.5",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": 4.93632,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP2.6",
        "label": "LBO",
        "type": "open_collector",
        "description": "Active-low battery flag. The board pulls it up above 3.3 V when the battery is charged. Use level translation for a 3.3 V input.",
        "x": 7.47632,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "low",
        "insert": true
      },
      {
        "number": "JP2.7",
        "label": "G",
        "type": "power_in",
        "description": "Board ground.",
        "x": 10.01632,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd-2",
        "insert": true
      },
      {
        "number": "JP2.8",
        "label": "5V",
        "type": "power_out",
        "description": "Boost converter output, nominally 5.2 V.",
        "x": 12.55632,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vout",
        "insert": true
      },
      {
        "number": "X1.1",
        "label": "\u2212",
        "type": "power_in",
        "description": "Ground at the alternate screw terminal.",
        "x": 15.85832,
        "y": -2.1175,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "out-gnd",
        "insert": false
      },
      {
        "number": "X1.2",
        "label": "+",
        "type": "power_out",
        "description": "Alternate connection to the 5.2 V boost output.",
        "x": 15.85832,
        "y": 1.3825,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "out-alt",
        "insert": false
      }
    ],
    "bodyRegions": [
      {
        "x": -18.05068,
        "y": -11.43,
        "width": 36.10136,
        "height": 22.86
      },
      {
        "x": -18.63268,
        "y": -3.975,
        "width": 6.0,
        "height": 8.325
      },
      {
        "x": 12.45832,
        "y": -3.9175,
        "width": 7.0,
        "height": 7.0
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit PowerBoost 1000C Rev B.brd source revision, SHA-256 a7cf8c4e0de0597d009340d0f4f226e90fb3a21f8a44586d50fb94d56a8ab352. Header bank(s) JP2 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit PowerBoost 1000C Rev B.brd",
      "boardSha256": "a7cf8c4e0de0597d009340d0f4f226e90fb3a21f8a44586d50fb94d56a8ab352",
      "sourceBounds": [
        0.0,
        0.0,
        36.10135991570727,
        22.86
      ],
      "selectedConnectors": [
        "JP2",
        "X1"
      ],
      "reviewWarnings": [
        "JP2.2: unresolved electrical role on VLIPO.",
        "JP2.4: unresolved electrical role on ENABLE.",
        "JP2.6: unresolved electrical role on LBO."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-PowerBoost-1000C/blob/master/Adafruit%20PowerBoost%201000C%20Rev%20B.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-PowerBoost-1000C/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-4410-microlipo-usbc": {
    "sku": "adafruit-4410-microlipo-usbc",
    "source": {
      "label": "Adafruit Micro-Lipo USB-C Charger manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-MicroLipo-PCB/blob/master/Adafruit%20USB%20C%20microlipo%20charger.brd"
    },
    "revision": "Adafruit USB C microlipo charger.brd / SHA-256 b8e763aba838",
    "board": {
      "width": 22.86,
      "height": 19.050814,
      "color": "#1165a1",
      "outline": "M8.89 -9.525407A2.54 2.54 0 0 1 11.43 -6.985407L11.43 7.111593A2.477314 2.477314 0 0 1 8.89 9.524593L-8.89 9.524593A2.54 2.54 0 0 1 -11.43 6.984593L-11.43 -6.985407A2.54 2.54 0 0 1 -8.89 -9.525407L8.89 -9.525407Z"
    },
    "holes": [
      {
        "x": 8.89,
        "y": 6.984593,
        "drill": 2.5
      },
      {
        "x": 8.89,
        "y": -6.985407,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": 6.984593,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": -6.985407,
        "drill": 2.5
      },
      {
        "x": -6.293,
        "y": 2.889593,
        "drill": 0.65
      },
      {
        "x": -6.293,
        "y": -2.890407,
        "drill": 0.65
      }
    ],
    "artwork": "<rect x=\"3.374\" y=\"-4.000407\" width=\"7.5\" height=\"8.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.302\" y=\"7.365593\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.193\" y=\"-2.031407\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.14\" y=\"6.250093\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.473\" y=\"6.250093\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.946\" y=\"-4.254907\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.787\" y=\"-4.254907\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.854\" y=\"3.263093\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.33\" y=\"3.263093\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.261\" y=\"3.390593\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.877\" y=\"7.136593\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9435\" y=\"1.599593\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.261\" y=\"4.914593\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -4.917,
      -4.294907,
      10.914,
      9.437593
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP4.1",
        "label": "5V",
        "type": "power_in",
        "description": "5 V charge input. This contact is shared with the USB input power rail.",
        "x": -5.08,
        "y": -6.985407,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "usb",
        "insert": true
      },
      {
        "number": "JP4.2",
        "label": "D\u2212",
        "type": "passive",
        "description": "USB 2.0 data minus, directly connected to the receptacle.",
        "x": -2.54,
        "y": -6.985407,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "dm",
        "insert": true
      },
      {
        "number": "JP4.3",
        "label": "D+",
        "type": "passive",
        "description": "USB 2.0 data plus, directly connected to the receptacle.",
        "x": 0.0,
        "y": -6.985407,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "dp",
        "insert": true
      },
      {
        "number": "JP4.4",
        "label": "GND",
        "type": "power_in",
        "description": "Board ground.",
        "x": 2.54,
        "y": -6.985407,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP4.5",
        "label": "BAT",
        "type": "passive",
        "description": "Single-cell battery positive terminal.",
        "x": 5.08,
        "y": -6.985407,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1.0,
        "pinId": "bat",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -11.43,
        "y": -9.525407,
        "width": 22.86,
        "height": 19.050814
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit USB C microlipo charger.brd source revision, SHA-256 b8e763aba83878db3fe9ff061a46e61d8c958ce7d2dfae46ad26c27f44c36639. Header bank(s) JP4 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit USB C microlipo charger.brd",
      "boardSha256": "b8e763aba83878db3fe9ff061a46e61d8c958ce7d2dfae46ad26c27f44c36639",
      "sourceBounds": [
        0.0,
        -0.0008139687976589371,
        22.86,
        19.05
      ],
      "selectedConnectors": [
        "JP4"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-MicroLipo-PCB/blob/master/Adafruit%20USB%20C%20microlipo%20charger.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-MicroLipo-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  }
};
