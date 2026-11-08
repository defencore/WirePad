// Reviewed manufacturer source facts for explicit existing-ID physical views.
// Native exports and default illustrations remain owned by their catalog entries.
export default {
  "adafruit-aht20-4566": {
    "sku": "adafruit-aht20-4566",
    "source": {
      "label": "Adafruit AHT20 Temperature & Humidity manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-AHT20-PCB/blob/master/Adafruit%20AHT20%20Temperature%20%26%20Humidity.brd"
    },
    "revision": "Adafruit AHT20 Temperature & Humidity.brd / SHA-256 e62842f51add",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#292d32",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-12.1825\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.8825\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.807\" y=\"-2.662\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-2.77\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.826\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.388\" y=\"-0.102\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.419\" y=\"2.184\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.222499999999998,
      -4.123,
      12.2225,
      4.002
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply. Match VIN to the host logic voltage.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "vin",
        "insert": true
      },
      {
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground for power and signals.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
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
        "description": "I\u00b2C clock input.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
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
        "description": "Bidirectional I\u00b2C data line.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "sda",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -8.89,
        "width": 25.4,
        "height": 17.78
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit AHT20 Temperature & Humidity.brd source revision, SHA-256 e62842f51add3bb27446ef5ceb85fb929e1063e842dc5c9f1e9974b1be3482d2. Header bank(s) JP2 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit AHT20 Temperature & Humidity.brd",
      "boardSha256": "e62842f51add3bb27446ef5ceb85fb929e1063e842dc5c9f1e9974b1be3482d2",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-AHT20-PCB/blob/master/Adafruit%20AHT20%20Temperature%20%26%20Humidity.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-AHT20-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-sht31-2857": {
    "sku": "adafruit-sht31-2857",
    "source": {
      "label": "Adafruit SHT31 Temperature & Humidity manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-SHT31-Sensor-Breakout-PCB/blob/master/Adafruit%20SHT31-D%20STEMMA%20QT%20Breakout.brd"
    },
    "revision": "Adafruit SHT31-D STEMMA QT Breakout.brd / SHA-256 bf37330d46a9",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#292d32",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "holes": [
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.54
      },
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-12.1825\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.8825\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.773\" y=\"1.2035\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.3365\" y=\"-2.8605\" width=\"2.8\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.248\" y=\"-1.5875\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.105\" y=\"3.0735\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6425\" y=\"-4.115\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.222499999999998,
      -4.155,
      12.2225,
      4.0435
    ],
    "backArtwork": "<rect x=\"-2.159\" y=\"2.286\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -2.199,
      2.246,
      1.183,
      4.358
    ],
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply. Match VIN to the host logic voltage.",
        "x": -7.62,
        "y": 6.35,
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
        "description": "Common ground for power and signals.",
        "x": -5.08,
        "y": 6.35,
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
        "description": "I\u00b2C clock input.",
        "x": -2.54,
        "y": 6.35,
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
        "description": "Bidirectional I\u00b2C data line.",
        "x": 0.0,
        "y": 6.35,
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
        "label": "ADDR",
        "type": "input",
        "description": "Address select. Low selects 0x44 and high selects 0x45.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "addr",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "RST",
        "type": "input",
        "description": "Active-low hardware reset input with an onboard pull-up.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "rst",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "ALRT",
        "type": "output",
        "description": "Configurable alert output for programmed measurement limits.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "alert",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -8.89,
        "width": 25.4,
        "height": 17.78
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit SHT31-D STEMMA QT Breakout.brd source revision, SHA-256 bf37330d46a9f6ef9a0516d99991d94d1f1447412caadaed982c892c748d6c10. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SHT31-D STEMMA QT Breakout.brd",
      "boardSha256": "bf37330d46a9f6ef9a0516d99991d94d1f1447412caadaed982c892c748d6c10",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-SHT31-Sensor-Breakout-PCB/blob/master/Adafruit%20SHT31-D%20STEMMA%20QT%20Breakout.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-SHT31-Sensor-Breakout-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-bmp280-2651": {
    "sku": "adafruit-bmp280-2651",
    "source": {
      "label": "Adafruit BMP280 Barometric Pressure manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-BMP280-Breakout-PCB/blob/master/Adafruit%20BMP280%20STEMMA%20QT.brd"
    },
    "revision": "Adafruit BMP280 STEMMA QT.brd / SHA-256 298fc9dc2b29",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#292d32",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "holes": [
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.54
      },
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.35\" y=\"-1.35\" width=\"2.7\" height=\"2.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.476\" y=\"-1.05\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0\" y=\"-4.764\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.334\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"-0.3814\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.626\" y=\"-2.832\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.3052\" y=\"2.6668\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.286,
      -4.804,
      12.286,
      3.875
    ],
    "backArtwork": "<rect x=\"-1.397\" y=\"2.413\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -1.437,
      2.3729999999999998,
      1.945,
      4.485
    ],
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply. Match VIN to the host logic voltage.",
        "x": -7.62,
        "y": 6.35,
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
        "label": "3Vo",
        "type": "power_out",
        "description": "Regulated 3.3 V output.",
        "x": -5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "3vo",
        "insert": true
      },
      {
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground for power and signals.",
        "x": -2.54,
        "y": 6.35,
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
        "number": "JP1.4",
        "label": "SCK",
        "type": "input",
        "description": "I\u00b2C clock or SPI clock input.",
        "x": 0.0,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sck",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "SDO",
        "type": "output",
        "description": "SPI data output. Pull low for I\u00b2C address 0x76.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sdo",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "SDI",
        "type": "bidirectional",
        "description": "I\u00b2C data line or SPI data input.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sdi",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "CS",
        "type": "input",
        "description": "Active-low SPI chip select. Leave high for I\u00b2C.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "cs",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -12.7,
        "y": -8.89,
        "width": 25.4,
        "height": 17.78
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit BMP280 STEMMA QT.brd source revision, SHA-256 298fc9dc2b29183778cda4863d27a83792e84cfe282ea07e38645042f2c15427. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit BMP280 STEMMA QT.brd",
      "boardSha256": "298fc9dc2b29183778cda4863d27a83792e84cfe282ea07e38645042f2c15427",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-BMP280-Breakout-PCB/blob/master/Adafruit%20BMP280%20STEMMA%20QT.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-BMP280-Breakout-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  }
};
