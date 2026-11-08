// Reviewed manufacturer source facts for explicit existing-ID physical views.
// Native exports and default illustrations remain owned by their catalog entries.
export default {
  "adafruit-ds3231-rtc": {
    "sku": "adafruit-ds3231-rtc",
    "source": {
      "label": "Adafruit DS3231 Precision RTC manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-DS3231-Precision-RTC-Breakout-PCB/blob/master/Adafruit%20DS3231%20RTC%20Breakout.brd"
    },
    "revision": "Adafruit DS3231 RTC Breakout.brd / SHA-256 94eccdcaa3ac",
    "board": {
      "width": 22.86,
      "height": 17.78,
      "color": "#1165a1",
      "outline": "M8.89 -8.89A2.54 2.54 0 0 1 11.43 -6.35L11.43 6.35A2.54 2.54 0 0 1 8.89 8.89L-8.89 8.89A2.54 2.54 0 0 1 -11.43 6.35L-11.43 -6.35A2.54 2.54 0 0 1 -8.89 -8.89L8.89 -8.89Z"
    },
    "holes": [
      {
        "x": 8.89,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-3.954\" y=\"-6.714\" width=\"7.4\" height=\"10.38\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.198\" y=\"1.905\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.763\" y=\"2.134\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.763\" y=\"0.102\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -8.802999999999999,
      -6.7540000000000004,
      7.558,
      3.706
    ],
    "backArtwork": "<rect x=\"-10.16\" y=\"-8.382\" width=\"20.32\" height=\"13.208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtworkBounds": [
      -10.2,
      -8.421999999999999,
      10.2,
      4.866
    ],
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "1 \u2014 Module power input, 2.3\u20135.5 V.",
        "x": -8.89,
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
        "type": "passive",
        "description": "2 \u2014 Ground reference.",
        "x": -6.35,
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
        "description": "3 \u2014 I\u00b2C clock from the host.",
        "x": -3.81,
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
        "description": "4 \u2014 I\u00b2C data.",
        "x": -1.27,
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
        "label": "BAT",
        "type": "power_in",
        "description": "5 \u2014 CR1220 positive contact or external backup supply. Follow the DS3231 battery input limits.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "bat",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "32K",
        "type": "open_collector",
        "description": "6 \u2014 32.768 kHz open-drain output. Add a pull-up if used.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "32k",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "SQW",
        "type": "open_collector",
        "description": "7 \u2014 Open-drain alarm interrupt or square-wave output. Add a pull-up.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sqw",
        "insert": true
      },
      {
        "number": "JP1.8",
        "label": "RST",
        "type": "bidirectional",
        "description": "8 \u2014 Active-low bidirectional reset and power-fail indicator.",
        "x": 8.89,
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
      }
    ],
    "bodyRegions": [
      {
        "x": -11.43,
        "y": -8.89,
        "width": 22.86,
        "height": 17.78
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit DS3231 RTC Breakout.brd source revision, SHA-256 94eccdcaa3acb66e469c0b006a539d414744f3d20d641aa573c948a81c32cc66. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit DS3231 RTC Breakout.brd",
      "boardSha256": "94eccdcaa3acb66e469c0b006a539d414744f3d20d641aa573c948a81c32cc66",
      "sourceBounds": [
        0.0,
        0.0,
        22.86,
        17.78
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-DS3231-Precision-RTC-Breakout-PCB/blob/master/Adafruit%20DS3231%20RTC%20Breakout.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-DS3231-Precision-RTC-Breakout-PCB/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-microsd-spi-254": {
    "sku": "adafruit-microsd-spi-254",
    "source": {
      "label": "Adafruit SPI microSD Breakout #254 manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/MicroSD-breakout-board/blob/master/microsd.brd"
    },
    "revision": "microsd.brd / SHA-256 dc07c84b5019",
    "board": {
      "width": 31.75,
      "height": 25.4,
      "color": "#1165a1",
      "outline": "M15.875 10.795A1.905 1.905 0 0 1 13.97 12.7L-13.97 12.7A1.905 1.905 0 0 1 -15.875 10.795L-15.875 -10.795A1.905 1.905 0 0 1 -13.97 -12.7L13.97 -12.7A1.905 1.905 0 0 1 15.875 -10.795L15.875 10.795Z"
    },
    "holes": [
      {
        "x": -13.335,
        "y": -10.16,
        "drill": 2.2
      },
      {
        "x": -13.335,
        "y": 10.16,
        "drill": 2.2
      },
      {
        "x": 6.985,
        "y": -10.16,
        "drill": 2.2
      },
      {
        "x": 6.985,
        "y": 10.16,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-20.731159\" y=\"-6.858\" width=\"20.564159\" height=\"14.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.335\" y=\"-10.033\" width=\"2.54\" height=\"20.32\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.2512\" y=\"-6.096\" width=\"3.9116\" height=\"10.16\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.572\" y=\"8.23\" width=\"1.62\" height=\"2.844\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.927\" y=\"8.925\" width=\"2.9\" height=\"1.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.488\" y=\"5.623\" width=\"1.85\" height=\"1.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.73\" y=\"-9.007\" width=\"0.925\" height=\"1.25\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.474\" y=\"-9.017\" width=\"0.82\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -20.771159,
      -10.072999999999999,
      15.915,
      11.114
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP1.1",
        "label": "5V",
        "type": "power_in",
        "description": "8 \u2014 Input to the on-board 3.3 V regulator.",
        "x": 14.605,
        "y": 9.017,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "5v",
        "insert": true
      },
      {
        "number": "JP1.2",
        "label": "3V",
        "type": "passive",
        "description": "7 \u2014 Direct 3.3 V card rail. Use a regulated 3.3 V supply here if bypassing the on-board regulator.",
        "x": 14.605,
        "y": 6.477,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "3v",
        "insert": true
      },
      {
        "number": "JP1.3",
        "label": "GND",
        "type": "passive",
        "description": "6 \u2014 Ground reference.",
        "x": 14.605,
        "y": 3.937,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "gnd",
        "insert": true
      },
      {
        "number": "JP1.4",
        "label": "CLK",
        "type": "input",
        "description": "5 \u2014 SPI clock.",
        "x": 14.605,
        "y": 1.397,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "clk",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "DO",
        "type": "output",
        "description": "4 \u2014 SPI data from the card to host MISO.",
        "x": 14.605,
        "y": -1.143,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "do",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "DI",
        "type": "input",
        "description": "3 \u2014 SPI data into the card from host MOSI.",
        "x": 14.605,
        "y": -3.683,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "di",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "CS",
        "type": "input",
        "description": "2 \u2014 Active-low SPI chip select.",
        "x": 14.605,
        "y": -6.223,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "cs",
        "insert": true
      },
      {
        "number": "JP1.8",
        "label": "CD",
        "type": "passive",
        "description": "1 \u2014 Mechanical card-detect contact. It closes to ground when a card is inserted.",
        "x": 14.605,
        "y": -8.763,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016,
        "pinId": "cd",
        "insert": true
      }
    ],
    "bodyRegions": [
      {
        "x": -15.875,
        "y": -12.7,
        "width": 31.75,
        "height": 25.4
      },
      {
        "x": -20.731159,
        "y": -6.858,
        "width": 20.564159,
        "height": 14.0
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact microsd.brd source revision, SHA-256 dc07c84b501987f493253b39291105826bbd58a372e25a767a420a5165418967. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "microsd.brd",
      "boardSha256": "dc07c84b501987f493253b39291105826bbd58a372e25a767a420a5165418967",
      "sourceBounds": [
        0.0,
        -4.440892098500626e-16,
        31.75,
        25.4
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/MicroSD-breakout-board/blob/master/microsd.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/MicroSD-breakout-board/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  },
  "adafruit-max98357a-i2s": {
    "sku": "adafruit-max98357a-i2s",
    "source": {
      "label": "Adafruit MAX98357A I\u00b2S Mono Amplifier manufacturer EAGLE mechanical/header source",
      "url": "https://github.com/adafruit/Adafruit-MAX98357-I2S-Amp-Breakout/blob/master/Adafruit%20MAX98357%20Breakout.brd"
    },
    "revision": "Adafruit MAX98357 Breakout.brd / SHA-256 de54250dee04",
    "board": {
      "width": 17.78,
      "height": 19.05,
      "color": "#1165a1",
      "outline": "M-8.89 -6.985A2.54 2.54 0 0 1 -6.35 -9.525L6.35 -9.525A2.54 2.54 0 0 1 8.89 -6.985L8.89 6.985A2.54 2.54 0 0 1 6.35 9.525L-6.35 9.525A2.54 2.54 0 0 1 -8.89 6.985L-8.89 -6.985Z"
    },
    "holes": [
      {
        "x": 6.35,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -6.35,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": "<rect x=\"-3.6\" y=\"-9.569\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.65\" y=\"0.255\" width=\"3.3\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.842\" y=\"-2.057\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.182\" y=\"1.016\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.445\" y=\"3.531\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.15\" y=\"1.016\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.159\" y=\"-2.057\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.921\" y=\"-2.057\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.731\" y=\"-2.057\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "artworkBounds": [
      -6.771,
      -9.609,
      6.644,
      4.891
    ],
    "backArtwork": "",
    "contacts": [
      {
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "7 \u2014 Module power input, 2.7\u20135.5 V.",
        "x": 7.62,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
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
        "type": "passive",
        "description": "6 \u2014 Ground reference.",
        "x": 5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
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
        "label": "SD",
        "type": "input",
        "description": "5 \u2014 Shutdown and channel-mix selection.",
        "x": 2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "sd",
        "insert": true
      },
      {
        "number": "JP1.4",
        "label": "GAIN",
        "type": "input",
        "description": "4 \u2014 Gain configuration. See the datasheet resistor table.",
        "x": 0.0,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "gain",
        "insert": true
      },
      {
        "number": "JP1.5",
        "label": "DIN",
        "type": "input",
        "description": "3 \u2014 I\u00b2S serial audio data from the host.",
        "x": -2.54,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "din",
        "insert": true
      },
      {
        "number": "JP1.6",
        "label": "BCLK",
        "type": "input",
        "description": "2 \u2014 I\u00b2S bit clock from the host.",
        "x": -5.08,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "bclk",
        "insert": true
      },
      {
        "number": "JP1.7",
        "label": "LRC",
        "type": "input",
        "description": "1 \u2014 I\u00b2S left/right clock from the host.",
        "x": -7.62,
        "y": 6.985,
        "size": [
          1.9304,
          1.9304
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.0,
        "pinId": "lrc",
        "insert": true
      },
      {
        "number": "X1.1",
        "label": "SPK\u2212",
        "type": "output",
        "description": "SPK.1 \u2014 Negative bridge output to the speaker. Keep isolated from ground.",
        "x": -1.8,
        "y": -5.969,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "spk-n",
        "insert": false
      },
      {
        "number": "X1.2",
        "label": "SPK+",
        "type": "output",
        "description": "SPK.2 \u2014 Positive bridge output to the speaker.",
        "x": 1.7,
        "y": -5.969,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1.0,
        "pinId": "spk-p",
        "insert": false
      }
    ],
    "bodyRegions": [
      {
        "x": -8.89,
        "y": -9.525,
        "width": 17.78,
        "height": 19.05
      },
      {
        "x": -3.6,
        "y": -9.569,
        "width": 7.0,
        "height": 7.0
      }
    ],
    "bodyEvidence": "Manufacturer EAGLE dimension-layer outline and component-side package envelopes. Header contact centers and mirrored source-side flags come from connector packages and schematic nets, independently of the older catalog artwork and reference footprint.",
    "note": "Exact Adafruit MAX98357 Breakout.brd source revision, SHA-256 de54250dee04ac9aa117992ecf2da398a11785ee4310fdfde1480231e2b54f84. Header bank(s) JP1 are reviewed in full; each original canvas signal has an explicit manufacturer connector/pad mapping. Other optional contacts are wire-only, not inserted.",
    "installation": "Install the full reviewed bank(s) as straight 2.54 mm male leads facing downward. Keep optional terminal blocks, battery pads and USB-A alternatives above the PCB or unpopulated; they are not additional inserted leads.",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MAX98357 Breakout.brd",
      "boardSha256": "de54250dee04ac9aa117992ecf2da398a11785ee4310fdfde1480231e2b54f84",
      "sourceBounds": [
        0.0,
        0.0,
        17.78,
        19.05
      ],
      "selectedConnectors": [
        "JP1",
        "X1"
      ],
      "reviewWarnings": [],
      "boardURL": "https://github.com/adafruit/Adafruit-MAX98357-I2S-Amp-Breakout/blob/master/Adafruit%20MAX98357%20Breakout.brd"
    },
    "attribution": {
      "manufacturer": "Adafruit Industries",
      "designer": "Limor Fried/Ladyada for Adafruit Industries",
      "license": "Creative Commons Attribution/Share-Alike; see manufacturer repository license.txt",
      "licenseURL": "https://github.com/adafruit/Adafruit-MAX98357-I2S-Amp-Breakout/blob/master/license.txt",
      "notice": "Adafruit invests time and resources providing this open source design, please support Adafruit and open-source hardware by purchasing products from Adafruit. Designed by Limor Fried/Ladyada for Adafruit Industries."
    }
  }
};
