import assets from "./temperature-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-1893",
    "sku": "ADA1893",
    "name": "MPL3115A2 - I2C Barometric Pressure/Altitude/Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1893",
    "revision": "EAGLE MPL3115A2_v0.2.brd; commit c57b3e05fa79",
    "category": "Sensors",
    "board": {
      "width": 19.05,
      "height": 17.78,
      "color": "#246545",
      "outline": "M9.525 6.35A2.54 2.54 0 0 1 6.985 8.89L-6.985 8.89A2.54 2.54 0 0 1 -9.525 6.35L-9.525 -6.35A2.54 2.54 0 0 1 -6.985 -8.89L6.985 -8.89A2.54 2.54 0 0 1 9.525 -6.35L9.525 6.35Z"
    },
    "contacts": assets["adafruit-module-1893"]["contacts"],
    "holes": [
      {
        "x": -6.985,
        "y": -6.35,
        "drill": 2.5
      },
      {
        "x": 6.985,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1893"]["artwork"],
    "backArtwork": assets["adafruit-module-1893"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1893"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1893"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/MPL3115A2_v0.2.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/MPL3115A2_v0.2.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1893",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1893",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1893. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.547999999999998,
      -4.51,
      8.574,
      4.002
    ]
  },
  {
    "id": "adafruit-module-4821",
    "sku": "ADA4821",
    "name": "Adafruit TMP117 ±0.1°C High Accuracy I2C Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4821",
    "revision": "EAGLE Adafruit_TMP117.brd; commit 874b3a5b2779",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4821"]["contacts"],
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
    "artwork": assets["adafruit-module-4821"]["artwork"],
    "backArtwork": assets["adafruit-module-4821"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4821"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4821"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/Adafruit_TMP117.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/Adafruit_TMP117.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4821",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4821",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4821. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      4.002
    ],
    "backArtworkBounds": [
      -8.3966,
      0.7727999999999999,
      -5.0146,
      2.8848
    ]
  },
  {
    "id": "adafruit-module-4369",
    "sku": "ADA4369",
    "name": "Adafruit PCT2075 Temperature Sensor - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4369",
    "revision": "EAGLE Adafruit_PCT2075.brd; commit 9f80ea91d459",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4369"]["contacts"],
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
    "artwork": assets["adafruit-module-4369"]["artwork"],
    "backArtwork": assets["adafruit-module-4369"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4369"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-4"
      ],
      [
        "conn3-1",
        "conn4-1",
        "jp3-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4369"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/Adafruit_PCT2075.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/Adafruit_PCT2075.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4369",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4369",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4369. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.123,
      12.286,
      3.748
    ],
    "backArtworkBounds": [
      -4.104,
      -4.866,
      4.231,
      -0.214
    ]
  },
  {
    "id": "adafruit-module-992",
    "sku": "ADA992",
    "name": "MPL115A2 - I2C Barometric Pressure/Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/992",
    "revision": "EAGLE Adafruit MPL115A2 Breakout.brd; commit c28cfcbce2a9",
    "category": "Sensors",
    "board": {
      "width": 17.78,
      "height": 15.24,
      "color": "#246545",
      "outline": "M-8.89 -5.08A2.54 2.54 0 0 1 -6.35 -7.62L6.35 -7.62A2.54 2.54 0 0 1 8.89 -5.08L8.89 5.08A2.54 2.54 0 0 1 6.35 7.62L-6.35 7.62A2.54 2.54 0 0 1 -8.89 5.08L-8.89 -5.08Z"
    },
    "contacts": assets["adafruit-module-992"]["contacts"],
    "holes": [
      {
        "x": -6.35,
        "y": -5.08,
        "drill": 2.5
      },
      {
        "x": 6.35,
        "y": -5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-992"]["artwork"],
    "backArtwork": assets["adafruit-module-992"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-992"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/992"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/Adafruit%20MPL115A2%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/Adafruit%20MPL115A2%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/992",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA992",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA992. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.543999999999999,
      -5.096,
      7.29,
      1.16
    ]
  },
  {
    "id": "adafruit-module-4686",
    "sku": "ADA4686",
    "name": "Adafruit TMP235 - Plug-and-Play STEMMA Analog Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4686",
    "revision": "EAGLE TMP235 Rev A.brd; commit 05afa047f232",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 4.191A1.27 1.27 0 0 0 11.43 2.921L7.62 2.921L7.62 2.159L11.43 2.159A1.27 1.27 0 0 0 12.7 0.889L12.7 -0.889A1.27 1.27 0 0 0 11.43 -2.159L7.62 -2.159L7.62 -2.921L11.43 -2.921A1.27 1.27 0 0 0 12.7 -4.191L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4686"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4686"]["artwork"],
    "backArtwork": assets["adafruit-module-4686"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4686"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3"
      ],
      [
        "jp1-2",
        "x4-2"
      ],
      [
        "jp1-3",
        "x4-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4686"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/TMP235%20Rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/TMP235%20Rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4686",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4686",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4686. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -7.346,
      10.7,
      5.04
    ],
    "backArtworkBounds": [
      -5.0565,
      -5.628,
      -2.9445,
      -2.246
    ]
  },
  {
    "id": "adafruit-module-1727",
    "sku": "ADA1727",
    "name": "Thermocouple Amplifier with 1-Wire Breakout Board - MAX31850K",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1727",
    "revision": "EAGLE Adafruit MAX31850.brd; commit 759ee92d8dd9",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#246545",
      "outline": "M10.16 7.62A2.54 2.54 0 0 1 7.62 10.16L-7.62 10.16A2.54 2.54 0 0 1 -10.16 7.62L-10.16 -7.62A2.54 2.54 0 0 1 -7.62 -10.16L7.62 -10.16A2.54 2.54 0 0 1 10.16 -7.62L10.16 7.62Z"
    },
    "contacts": assets["adafruit-module-1727"]["contacts"],
    "holes": [
      {
        "x": 7.62,
        "y": -7.62,
        "drill": 2.5
      },
      {
        "x": -7.62,
        "y": -7.62,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-1727"]["artwork"],
    "backArtwork": assets["adafruit-module-1727"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-1727"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1727"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/Adafruit%20MAX31850.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/Adafruit%20MAX31850.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1727",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1727",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1727. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.484,
      -10.116999999999999,
      3.812,
      4.86
    ],
    "backArtworkBounds": [
      5.294,
      -3.85,
      9.946,
      5.882
    ]
  },
  {
    "id": "adafruit-module-6482",
    "sku": "ADA6482",
    "name": "Adafruit TMP119 High-Precision ±0.03°C I2C Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6482",
    "revision": "EAGLE Adafruit TMP119 Temperature Sensor.brd; commit fe8ae26b0f83",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6482"]["contacts"],
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
    "artwork": assets["adafruit-module-6482"]["artwork"],
    "backArtwork": assets["adafruit-module-6482"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6482"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6482"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/Adafruit%20TMP119%20Temperature%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/Adafruit%20TMP119%20Temperature%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6482",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6482",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6482. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      4.002
    ],
    "backArtworkBounds": [
      -8.802999999999999,
      -3.215,
      5.7677,
      4.8279
    ]
  },
  {
    "id": "adafruit-module-6403",
    "sku": "ADA6403",
    "name": "Adafruit MLX90632 FIR Remote Thermal Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6403",
    "revision": "EAGLE Adafruit MLX90632 FIR Remote Temperature Sensor.brd; commit 928c72870468",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6403"]["contacts"],
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
    "artwork": assets["adafruit-module-6403"]["artwork"],
    "backArtwork": assets["adafruit-module-6403"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6403"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-4",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-5",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6403"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/Adafruit%20MLX90632%20FIR%20Remote%20Temperature%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/Adafruit%20MLX90632%20FIR%20Remote%20Temperature%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6403",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6403",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6403. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -7.185,
      12.159,
      3.888
    ],
    "backArtworkBounds": [
      -6.517,
      -7.533,
      8.1045,
      5.247
    ]
  },
  {
    "id": "adafruit-module-6420",
    "sku": "ADA6420",
    "name": "Adafruit SPA06-003 Temperature + Pressure Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6420",
    "revision": "EAGLE Adafruit SPA06-003 Temperature + Pressure Sensor.brd; commit c4adbd023d64",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6420"]["contacts"],
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
    "artwork": assets["adafruit-module-6420"]["artwork"],
    "backArtwork": assets["adafruit-module-6420"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6420"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-6"
      ],
      [
        "conn3-1",
        "conn4-1",
        "jp1-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6420"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/Adafruit%20SPA06-003%20Temperature%20%2B%20Pressure%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/Adafruit%20SPA06-003%20Temperature%20%2B%20Pressure%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6420",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6420",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6420. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.804,
      12.286,
      3.875
    ],
    "backArtworkBounds": [
      -1.437,
      2.3729999999999998,
      1.945,
      4.485
    ]
  },
  {
    "id": "adafruit-module-4808",
    "sku": "ADA4808",
    "name": "Adafruit EMC2101 I2C PC Fan Controller and Temperature Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4808",
    "revision": "EAGLE Adafruit_EMC2101.brd; commit 3d1c2ca4c2ec",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4808"]["contacts"],
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
    "artwork": assets["adafruit-module-4808"]["artwork"],
    "backArtwork": assets["adafruit-module-4808"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4808"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-3",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-4",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-5",
        "conn3-3",
        "conn4-3"
      ],
      [
        "jp1-6",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4808"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/Adafruit_EMC2101.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/Adafruit_EMC2101.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4808",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4808",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4808. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.123,
      12.159,
      3.875
    ],
    "backArtworkBounds": [
      5.04,
      -4.358,
      8.549,
      4.358
    ]
  },
  {
    "id": "adafruit-module-5165",
    "sku": "ADA5165",
    "name": "Adafruit MCP9601 (MCP96L01) I2C Thermocouple Amplifier",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5165",
    "revision": "EAGLE Adafruit MCP9601.brd; commit 135d6a8e4ca8",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5165"]["contacts"],
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
      }
    ],
    "artwork": assets["adafruit-module-5165"]["artwork"],
    "backArtwork": assets["adafruit-module-5165"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5165"]["provenance"],
    "internalConnections": [
      [
        "jp3-6",
        "conn3-3",
        "conn4-3"
      ],
      [
        "jp3-7",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp3-8",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp3-9",
        "conn3-2",
        "conn4-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5165"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/Adafruit%20MCP9601.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/Adafruit%20MCP9601.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5165",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5165",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5165. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -8.719999999999999,
      12.286,
      4.0915
    ],
    "backArtworkBounds": [
      6.056,
      -0.3575,
      9.438,
      4.1675
    ]
  },
  {
    "id": "adafruit-module-5027",
    "sku": "ADA5027",
    "name": "Adafruit MCP9808 High Accuracy I2C Temperature Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5027",
    "revision": "EAGLE Adafruit MCP9808 STEMMA QT.brd; commit 5a46deacf915",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5027"]["contacts"],
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
    "artwork": assets["adafruit-module-5027"]["artwork"],
    "backArtwork": assets["adafruit-module-5027"]["backArtwork"],
    "provenance": assets["adafruit-module-5027"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5027"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/Adafruit%20MCP9808%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/Adafruit%20MCP9808%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5027",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5027",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5027. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -4.231,
      12.159,
      3.621
    ],
    "backArtworkBounds": [
      2.754,
      0.849,
      9.438,
      4.231
    ]
  },
];
