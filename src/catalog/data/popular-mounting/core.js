// Reviewed manufacturer source facts for explicit existing-ID physical views.
// Native exports and default illustrations remain owned by their catalog entries.
export default {
  "bme280": {
    "sku": "bme280",
    "source": {
      "label": "BME280 Environmental Sensor manufacturer EAGLE mechanical/header source",
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
        "description": "3\u20135 V input. Match the supply to the host logic level.",
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
        "description": "3.3 V regulator output.",
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
        "description": "Ground and signal reference.",
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
        "description": "I\u00b2C clock or SPI serial clock.",
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
        "pinId": "scl",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "SDO",
        "type": "bidirectional",
        "description": "SPI data out. In I\u00b2C mode, connect to ground to change the address from 0x77 to 0x76.",
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
        "description": "I\u00b2C data or SPI serial data input.",
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
        "pinId": "sda",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "CS",
        "type": "input",
        "description": "Active-low chip select in SPI mode. Leave open for I\u00b2C.",
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
    "note": "Exact Adafruit BMP280 STEMMA QT.brd source revision, SHA-256 298fc9dc2b29183778cda4863d27a83792e84cfe282ea07e38645042f2c15427. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted. Adafruit explicitly states the BME280 STEMMA QT revision uses the exact same PCB as BMP280: https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout/downloads.",
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
  },
  "ads1115": {
    "sku": "ads1115",
    "source": {
      "label": "ADS1115 16-bit ADC manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/ADS1X15-Breakout-Board-PCBs/blob/master/Adafruit%20ADS1115%20ADC%20STEMMA%20QT.brd"
    },
    "revision": "Adafruit ADS1115 ADC STEMMA QT.brd / SHA-256 bdbfce2bca2b",
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
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9\" y=\"1.0765\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.146\" y=\"-2.035\" width=\"2.8\" height=\"2.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.708\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.826\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5335\" y=\"-1.054\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.055\" y=\"0.0125\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.928\" y=\"-1.562\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.544\" y=\"-3.785\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      3.9165
    ],
    "backArtwork": "<rect x=\"-9.779\" y=\"-4.191\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.032\" y=\"2.54\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -9.818999999999999,
      -4.231,
      5.374,
      4.612
    ],
    "contacts": [
      {
        "number": "JP2.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Supply input. Use the same supply voltage as the host logic.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
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
        "description": "Ground and signal reference.",
        "x": -3.81,
        "y": 6.35,
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
        "x": -1.27,
        "y": 6.35,
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
        "x": 1.27,
        "y": 6.35,
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
        "label": "ADDR",
        "type": "input",
        "description": "I\u00b2C address selection. Defaults to 0x48.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.0,
        "pinId": "addr",
        "insert": true
      },
      {
        "number": "JP2.6",
        "label": "ALRT",
        "type": "open_collector",
        "description": "Open-drain comparator or conversion-ready output.",
        "x": 6.35,
        "y": 6.35,
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
        "number": "JP1.1",
        "label": "A+",
        "type": "power_out",
        "description": "Analog supply output from VIN through a ferrite bead.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "analog-v",
        "insert": true
      },
      {
        "number": "JP1.2",
        "label": "A3",
        "type": "input",
        "description": "Analog input channel 3.",
        "x": -3.81,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a3",
        "insert": true
      },
      {
        "number": "JP1.3",
        "label": "A2",
        "type": "input",
        "description": "Analog input channel 2.",
        "x": -1.27,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a2",
        "insert": true
      },
      {
        "number": "JP1.4",
        "label": "A1",
        "type": "input",
        "description": "Analog input channel 1.",
        "x": 1.27,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a1",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "A0",
        "type": "input",
        "description": "Analog input channel 0.",
        "x": 3.81,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "a0",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "A\u2212",
        "type": "power_out",
        "description": "Analog ground reference from digital ground through a ferrite bead.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "analog-gnd",
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
    "note": "Exact Adafruit ADS1115 ADC STEMMA QT.brd source revision, SHA-256 bdbfce2bca2b78ef24887f2fa0efb9d6b124c98c7596133bd8e6dd1a309705f2. Header bank(s) JP1, JP2 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit ADS1115 ADC STEMMA QT.brd",
      "boardSha256": "bdbfce2bca2b78ef24887f2fa0efb9d6b124c98c7596133bd8e6dd1a309705f2",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "JP2"
      ],
      "reviewWarnings": [
        "JP1.1: unresolved electrical role on AVDD.",
        "JP1.2: unresolved electrical role on AIN3.",
        "JP1.3: unresolved electrical role on AIN2.",
        "JP1.4: unresolved electrical role on AIN1.",
        "JP1.5: unresolved electrical role on AIN0.",
        "JP2.3: unresolved electrical role on SCL.",
        "JP2.4: unresolved electrical role on SDA.",
        "JP2.5: unresolved electrical role on ADDR.",
        "JP2.6: unresolved electrical role on ALERT."
      ],
      "boardURL": "https://github.com/adafruit/ADS1X15-Breakout-Board-PCBs/blob/master/Adafruit%20ADS1115%20ADC%20STEMMA%20QT.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "No separate license file verified in this repository. This view uses factual mechanical/contact geometry; manufacturer attribution is retained.",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries.",
      "sourceReadmeURL": "https://github.com/adafruit/ADS1X15-Breakout-Board-PCBs/blob/master/README.md"
    }
  },
  "ina219": {
    "sku": "ina219",
    "source": {
      "label": "INA219 Current Sensor manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-INA219-Current-Sensor-PCB/blob/master/Adafruit%20INA219%20STEMMA%20QT.brd"
    },
    "revision": "Adafruit INA219 STEMMA QT.brd / SHA-256 2a114d101bf9",
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
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -7.62,
        "drill": 2.5
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
    "artwork": "<rect x=\"-3.6\" y=\"-9.95\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.362\" y=\"-2.489\" width=\"4.749\" height=\"2.946\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.41\" y=\"1.275\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"2.275\" width=\"3.2\" height=\"1.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.591\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.978\" y=\"2.667\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"2.692\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.544\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -12.286,
      -9.989999999999998,
      12.286,
      5.115
    ],
    "backArtwork": "<rect x=\"6.604\" y=\"1.27\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"3.429\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      6.564,
      1.23,
      9.946,
      5.501
    ],
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "2.7\u20135.5 V logic supply input.",
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
        "description": "Ground and signal reference.",
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
        "number": "JP1.6",
        "label": "V+",
        "type": "passive",
        "description": "Positive shunt terminal. Connect to the source for high-side measurements.",
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
        "pinId": "vin-plus",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "V\u2212",
        "type": "passive",
        "description": "Negative shunt terminal. Connect to the load for high-side measurements.",
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
        "pinId": "vin-minus",
        "insert": true
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
    "note": "Exact Adafruit INA219 STEMMA QT.brd source revision, SHA-256 2a114d101bf924a550649b8eadee45d16584debab93e88410f6f2ab86a05fb45. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit INA219 STEMMA QT.brd",
      "boardSha256": "2a114d101bf924a550649b8eadee45d16584debab93e88410f6f2ab86a05fb45",
      "sourceBounds": [
        0.0,
        0.0,
        25.4,
        20.32
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [
        "JP1.3: unresolved electrical role on SCL.",
        "JP1.4: unresolved electrical role on SDA.",
        "JP1.5: unresolved electrical role on VIN-.",
        "JP1.6: unresolved electrical role on VIN+."
      ],
      "boardURL": "https://github.com/adafruit/Adafruit-INA219-Current-Sensor-PCB/blob/master/Adafruit%20INA219%20STEMMA%20QT.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-INA219-Current-Sensor-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  }
};
