import assets from "./adapters-carriers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-2267",
    "sku": "ADA2267",
    "name": "Adafruit Bluefruit LE USB Friend (nRF51822)",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2267",
    "revision": "EAGLE Adafruit Bluefruit LE USB Friend Rev I.brd; commit bb6108b9a9eb",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -7.68,
      -19.427,
      8.4234,
      35.469
    ],
    "backArtworkBounds": [
      -8.127999999999998,
      -7.215,
      -3.048,
      4.365
    ],
    "board": {
      "width": 17.78,
      "height": 40.894,
      "color": "#246545",
      "outline": "M8.89 -17.907A2.54 2.54 0 0 0 6.35 -20.447L-6.35 -20.447A2.54 2.54 0 0 0 -8.89 -17.907L-8.89 17.907A2.54 2.54 0 0 0 -6.35 20.447L6.35 20.447A2.54 2.54 0 0 0 8.89 17.907L8.89 -17.907Z"
    },
    "contacts": assets["adafruit-module-2267"]["contacts"],
    "holes": [
      {
        "x": -0.34,
        "y": -14.737,
        "drill": 0.9
      },
      {
        "x": 2.25,
        "y": 17.929,
        "drill": 1.1
      },
      {
        "x": -2.25,
        "y": 17.929,
        "drill": 1.1
      },
      {
        "x": -5.08,
        "y": 8.485,
        "drill": 1
      },
      {
        "x": -5.08,
        "y": 5.485,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-2267"]["artwork"],
    "backArtwork": assets["adafruit-module-2267"]["backArtwork"],
    "provenance": assets["adafruit-module-2267"]["provenance"],
    "internalConnections": [
      [
        "x1-gnd",
        "tp2-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2267"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/Adafruit%20Bluefruit%20LE%20USB%20Friend%20Rev%20I.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/Adafruit%20Bluefruit%20LE%20USB%20Friend%20Rev%20I.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-USB-Friend-and-Sniffer-PCB/blob/bb6108b9a9eb952f4e8514530771253a16800d14/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2267",
      "status": "Official Adafruit stock feed reported 33 available.",
      "sku": "ADA2267",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "33"
    },
    "description": "Adafruit ADA2267. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-292",
    "sku": "ADA292",
    "name": "i2c / SPI character LCD backpack - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/292",
    "revision": "EAGLE Adafruit I2C SPI LCD STEMMA backpack.brd; commit f5c03f2f3004",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -23.779999999999998,
      -9.9333,
      24.605,
      10.9425
    ],
    "board": {
      "width": 50.8,
      "height": 22.225,
      "color": "#246545",
      "outline": "M-25.395 11.0745L25.4 11.1125L25.4 -11.1125L-25.4 -11.1125L-25.395 11.0745Z"
    },
    "contacts": assets["adafruit-module-292"]["contacts"],
    "holes": [
      {
        "x": 22.225,
        "y": -8.6233,
        "drill": 2.8
      },
      {
        "x": -22.86,
        "y": 8.5725,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-292"]["artwork"],
    "backArtwork": assets["adafruit-module-292"]["backArtwork"],
    "provenance": assets["adafruit-module-292"]["provenance"],
    "internalConnections": [
      [
        "j1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "j1-4",
        "conn3-3",
        "conn4-3"
      ],
      [
        "j1-2",
        "conn3-2",
        "conn4-2"
      ],
      [
        "j1-1",
        "jp1-1",
        "jp1-5",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-2",
        "jp1-15"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/292"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/Adafruit%20I2C%20SPI%20LCD%20STEMMA%20backpack.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/Adafruit%20I2C%20SPI%20LCD%20STEMMA%20backpack.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-I2C-SPI-LCD-Backpack-PCB/blob/f5c03f2f3004402e60c7103068c4016b3c749bdf/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/292",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA292",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA292. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible. One module from the commercial multi-pack is illustrated.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5420",
    "sku": "ADA5420",
    "name": "MEMENTO - Python Programmable DIY Camera - Bare Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5420",
    "revision": "EAGLE Adafruit MEMENTO Camera Board.brd; commit 8f1e07b4baa4",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -35.777,
      -32.7993,
      32.5266,
      28.0054
    ],
    "backArtworkBounds": [
      -24.530534,
      -23.293,
      31.8395,
      17.125
    ],
    "board": {
      "width": 63.5,
      "height": 63.5,
      "color": "#246545",
      "outline": "M29.21 -20.701L31.75 -22.225L31.75 -26.67A5.08 5.08 0 0 0 26.67 -31.75L12.7 -31.75L11.938 -30.988L8.382 -30.988L7.62 -31.75L-26.67 -31.75A5.08 5.08 0 0 0 -31.75 -26.67L-31.75 26.67A5.08 5.08 0 0 0 -26.67 31.75L26.67 31.75A5.08 5.08 0 0 0 31.75 26.67L31.75 2.794L29.21 1.524L29.21 -20.701Z"
    },
    "contacts": assets["adafruit-module-5420"]["contacts"],
    "holes": [
      {
        "x": 20.1309,
        "y": -29.9593,
        "drill": 0.9
      },
      {
        "x": 17.1309,
        "y": -29.9593,
        "drill": 0.9
      },
      {
        "x": 26.2066,
        "y": 16.2108,
        "drill": 0.65
      },
      {
        "x": 26.2066,
        "y": 21.9908,
        "drill": 0.65
      },
      {
        "x": 11.2592,
        "y": -29.5354,
        "drill": 1
      },
      {
        "x": 8.9592,
        "y": -29.5354,
        "drill": 1
      },
      {
        "x": -18.3953,
        "y": -30.2339,
        "drill": 1
      },
      {
        "x": -20.6953,
        "y": -30.2339,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-5420"]["artwork"],
    "backArtwork": assets["adafruit-module-5420"]["backArtwork"],
    "provenance": assets["adafruit-module-5420"]["provenance"],
    "internalConnections": [
      [
        "x1-1",
        "x1-nc1",
        "x1-nc2",
        "x4-a1b12",
        "x4-b1a12",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "sense2-1",
        "sense2-nc1",
        "sense2-nc2",
        "sense1-1",
        "sense1-nc1",
        "sense1-nc2",
        "tp3-p-1",
        "tp4-p-1",
        "tp5-p-1",
        "tp6-p-1",
        "x3-mt1",
        "x3-mt2",
        "x3-6",
        "x2-sprt1",
        "x2-sprt2",
        "x2-15"
      ],
      [
        "x4-a4b9",
        "x4-b4a9"
      ],
      [
        "x4-b7",
        "x4-a7"
      ],
      [
        "x4-a6",
        "x4-b6"
      ],
      [
        "conn1-2",
        "x2-11"
      ],
      [
        "conn1-3",
        "x2-3"
      ],
      [
        "conn1-4",
        "x2-5"
      ],
      [
        "tp1-p-1",
        "tp8-p-1"
      ],
      [
        "sense2-2",
        "sense1-2"
      ],
      [
        "tp2-p-1",
        "tp7-p-1"
      ],
      [
        "x3-cd1",
        "x3-cd2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5420"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/Adafruit%20MEMENTO%20Camera%20Board.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/Adafruit%20MEMENTO%20Camera%20Board.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MEMENTO-PCB/blob/8f1e07b4baa4e43749793e3ebebd12005a5a8f96/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5420",
      "status": "Official Adafruit stock feed reported 52 available.",
      "sku": "ADA5420",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "52"
    },
    "description": "Adafruit ADA5420. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3632",
    "sku": "ADA3632",
    "name": "Adafruit Joy FeatherWing for all Feathers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3632",
    "revision": "EAGLE Joypad FeatherWing rev C.brd; commit 45f843d490a5",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89Z"
    },
    "contacts": assets["adafruit-module-3632"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      },
      {
        "x": -19.97,
        "y": 6,
        "drill": 1.6
      },
      {
        "x": -7.97,
        "y": -6,
        "drill": 1.6
      }
    ],
    "artwork": assets["adafruit-module-3632"]["artwork"],
    "backArtwork": assets["adafruit-module-3632"]["backArtwork"],
    "artworkBounds": [
      -23.009999999999998,
      -9.04,
      24.884,
      9.04
    ],
    "backArtworkBounds": [
      -4.231,
      -9.056999999999999,
      15.026,
      4.866
    ],
    "provenance": assets["adafruit-module-3632"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3632"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/Joypad%20FeatherWing%20rev%20C.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/Joypad%20FeatherWing%20rev%20C.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Joy-Featherwing-PCB/blob/45f843d490a5968f4642ff970e8e867918c80b8d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3632",
      "status": "Official Adafruit stock feed reported 23 available.",
      "sku": "ADA3632",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "23"
    },
    "description": "Adafruit ADA3632. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-6001",
    "sku": "ADA6001",
    "name": "Adafruit Reversible USB Type A Plug Connector Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6001",
    "revision": "EAGLE Adafruit Reversible USB Type A Plug Connector Breakout.brd; commit 61c86cfbb89a",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 15.24,
      "height": 14.224,
      "color": "#246545",
      "outline": "M-7.62 -5.207A1.905 1.905 0 0 1 -5.715 -7.112L5.715 -7.112A1.905 1.905 0 0 1 7.62 -5.207L7.62 4.572A2.54 2.54 0 0 1 5.08 7.112L-5.08 7.112A2.54 2.54 0 0 1 -7.62 4.572L-7.62 -5.207Z"
    },
    "contacts": assets["adafruit-module-6001"]["contacts"],
    "holes": [
      {
        "x": -5.08,
        "y": 0.762,
        "drill": 2.5
      },
      {
        "x": 5.08,
        "y": 0.762,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6001"]["artwork"],
    "backArtwork": assets["adafruit-module-6001"]["backArtwork"],
    "provenance": assets["adafruit-module-6001"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "x1-mnt1",
        "x1-mnt2"
      ],
      [
        "jp2-2",
        "x1-gnd"
      ],
      [
        "jp2-3",
        "x1-dplus"
      ],
      [
        "jp2-4",
        "x1-d-"
      ],
      [
        "jp2-5",
        "x1-vbus"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6001"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/Adafruit%20Reversible%20USB%20Type%20A%20Plug%20Connector%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/Adafruit%20Reversible%20USB%20Type%20A%20Plug%20Connector%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Reversible-USB-Type-A-Plug-Connector-Breakout-PCB/blob/61c86cfbb89a45a97a5046854997d486fac109d2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6001",
      "status": "Official Adafruit stock feed reported 75 available.",
      "sku": "ADA6001",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "75"
    },
    "description": "Adafruit ADA6001. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-6323",
    "sku": "ADA6323",
    "name": "Adafruit USB Type C CC Resistor Fixer",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6323",
    "revision": "EAGLE Adafruit USB Type-C CC Resistor Fixer.brd; commit 7ab085193a51",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 13.97,
      "height": 12.7,
      "color": "#246545",
      "outline": "M5.715 -6.35A1.27 1.27 0 0 1 6.985 -5.08L6.985 5.08A1.27 1.27 0 0 1 5.715 6.35L4.5085 6.35L4.5085 0.4445L-4.5085 0.4445L-4.5085 6.35L-5.715 6.35A1.27 1.27 0 0 1 -6.985 5.08L-6.985 -5.08A1.27 1.27 0 0 1 -5.715 -6.35L5.715 -6.35Z"
    },
    "contacts": assets["adafruit-module-6323"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-6323"]["artwork"],
    "backArtwork": assets["adafruit-module-6323"]["backArtwork"],
    "artworkBounds": [
      -5.5200000000000005,
      -2.8085,
      5.6025,
      6.966
    ],
    "backArtworkBounds": [
      -6.0725,
      -3.088,
      -2.6905,
      -0.976
    ],
    "provenance": assets["adafruit-module-6323"]["provenance"],
    "internalConnections": [
      [
        "x1-a1b12",
        "x1-b1a12",
        "x2-mnt1",
        "x2-mnt2",
        "x2-b12",
        "x2-a1",
        "x2-a12",
        "x2-p-1",
        "x2-p-2"
      ],
      [
        "x1-a4b9",
        "x1-b4a9",
        "x2-a4",
        "x2-b9"
      ],
      [
        "x1-b7",
        "x1-a7",
        "x2-a7"
      ],
      [
        "x1-a6",
        "x1-b6",
        "x2-a6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6323"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/Adafruit%20USB%20Type-C%20CC%20Resistor%20Fixer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/Adafruit%20USB%20Type-C%20CC%20Resistor%20Fixer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-CC-Resistor-Fixer-PCB/blob/7ab085193a5180f3ebc9a4a0971910ae7ee4553b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6323",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6323",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6323. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5993",
    "sku": "ADA5993",
    "name": "Adafruit USB Type C Vertical Breakout - Downstream Connection",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5993",
    "revision": "EAGLE Adafruit USB Type C Vertical Breakout.brd; commit 412fb33dba25",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 30.48,
      "height": 15.24,
      "color": "#246545",
      "outline": "M15.24 5.08A2.54 2.54 0 0 1 12.7 7.62L-12.7 7.62A2.54 2.54 0 0 1 -15.24 5.08L-15.24 -5.08A2.54 2.54 0 0 1 -12.7 -7.62L12.7 -7.62A2.54 2.54 0 0 1 15.24 -5.08L15.24 5.08Z"
    },
    "contacts": assets["adafruit-module-5993"]["contacts"],
    "holes": [
      {
        "x": 12.7,
        "y": -5.08,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": -5.08,
        "drill": 2.5
      },
      {
        "x": 5.4,
        "y": 0,
        "drill": 0.9
      },
      {
        "x": -5.4,
        "y": 0,
        "drill": 0.9
      },
      {
        "x": -12.7,
        "y": 5.08,
        "drill": 2.5
      },
      {
        "x": 12.7,
        "y": 5.08,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5993"]["artwork"],
    "backArtwork": assets["adafruit-module-5993"]["backArtwork"],
    "artworkBounds": [
      -9.667,
      -2.46,
      9.159,
      3.38
    ],
    "provenance": assets["adafruit-module-5993"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x1-p-1",
        "x1-p-2",
        "x1-p-3",
        "x1-p-4",
        "x1-b12",
        "x1-a1",
        "x1-b1",
        "x1-a12",
        "jp2-1"
      ],
      [
        "jp1-2",
        "x1-a4",
        "x1-a9",
        "x1-b9",
        "x1-b4",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x1-a8",
        "jp2-3"
      ],
      [
        "jp1-4",
        "x1-a5",
        "jp2-4"
      ],
      [
        "jp1-5",
        "x1-a6",
        "x1-b6",
        "jp2-5"
      ],
      [
        "jp1-6",
        "x1-a7",
        "x1-b7",
        "jp2-6"
      ],
      [
        "jp1-7",
        "x1-b8",
        "jp2-7"
      ],
      [
        "jp1-8",
        "x1-b5",
        "jp2-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5993"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/Adafruit%20USB%20Type%20C%20Vertical%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/Adafruit%20USB%20Type%20C%20Vertical%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-Type-C-Vertical-Breakout-PCB/blob/412fb33dba25c7b84994b1aa90161a8e67a379b2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5993",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5993",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5993. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-6014",
    "sku": "ADA6014",
    "name": "Adafruit FPC Breakout for Raspberry Pi 5 DSI or RP2350 HSTX",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6014",
    "revision": "EAGLE Adafruit FPC Breakout - Pi 5 DSI - RP2350 HSTX.brd; commit 78b551a2118c",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 44.45,
      "height": 12.7,
      "color": "#246545",
      "outline": "M-22.225 3.81A2.54 2.54 0 0 0 -19.685 6.35L19.685 6.35A2.54 2.54 0 0 0 22.225 3.81L22.225 -3.81A2.54 2.54 0 0 0 19.685 -6.35L-19.685 -6.35A2.54 2.54 0 0 0 -22.225 -3.81L-22.225 3.81Z"
    },
    "contacts": assets["adafruit-module-6014"]["contacts"],
    "holes": [
      {
        "x": -19.685,
        "y": -3.81,
        "drill": 2.5
      },
      {
        "x": 19.685,
        "y": -3.81,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6014"]["artwork"],
    "backArtwork": assets["adafruit-module-6014"]["backArtwork"],
    "artworkBounds": [
      -7.64,
      -5.747,
      7.54,
      -1.267
    ],
    "provenance": assets["adafruit-module-6014"]["provenance"],
    "internalConnections": [
      [
        "cn1-1",
        "cn1-4",
        "cn1-7",
        "cn1-10",
        "cn1-13",
        "cn1-16",
        "cn1-19",
        "jp1-1",
        "jp1-12"
      ],
      [
        "cn1-2",
        "jp1-2"
      ],
      [
        "cn1-3",
        "jp1-3"
      ],
      [
        "cn1-5",
        "jp1-4"
      ],
      [
        "cn1-6",
        "jp1-5"
      ],
      [
        "cn1-8",
        "jp1-6"
      ],
      [
        "cn1-9",
        "jp1-7"
      ],
      [
        "cn1-11",
        "jp1-8"
      ],
      [
        "cn1-12",
        "jp1-9"
      ],
      [
        "cn1-14",
        "jp1-10"
      ],
      [
        "cn1-15",
        "jp1-11"
      ],
      [
        "cn1-17",
        "jp1-13"
      ],
      [
        "cn1-18",
        "jp1-14"
      ],
      [
        "cn1-20",
        "jp1-15"
      ],
      [
        "cn1-21",
        "jp1-16"
      ],
      [
        "cn1-22",
        "jp1-17"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6014"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/Adafruit%20FPC%20Breakout%20-%20Pi%205%20DSI%20-%20RP2350%20HSTX.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/Adafruit%20FPC%20Breakout%20-%20Pi%205%20DSI%20-%20RP2350%20HSTX.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-FPC-Breakout-PCB/blob/78b551a2118c356b7c2f6ffc1eb3b41b45943fb4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6014",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6014",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6014. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4687",
    "sku": "ADA4687",
    "name": "Adafruit 2.13\" Monochrome E-Ink Bonnet for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4687",
    "revision": "EAGLE Adafruit 2.13in eInk Bonnet.brd; commit 76df16153ef3",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 65,
      "height": 31.6,
      "color": "#246545",
      "outline": "M-32.5 -10.1L-31.3 -7.4L-31.3 7.2L-32.5 9.5L-32.5 14.8A1.0 1.0 0 0 0 -31.5 15.8L29.5 15.8A3.0 3.0 0 0 0 32.5 12.8L32.5 -12.8A3.0 3.0 0 0 0 29.5 -15.8L-29.5 -15.8A3.0 3.0 0 0 0 -32.5 -12.8L-32.5 -10.1Z"
    },
    "contacts": assets["adafruit-module-4687"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-4687"]["artwork"],
    "backArtwork": assets["adafruit-module-4687"]["backArtwork"],
    "artworkBounds": [
      -15.947,
      -6.728,
      25.96,
      14.745
    ],
    "backArtworkBounds": [
      -32.5604,
      -15.9004,
      32.5196,
      15.57
    ],
    "provenance": assets["adafruit-module-4687"]["provenance"],
    "internalConnections": [
      [
        "rpi2-1",
        "rpi2-17",
        "conn2-2"
      ],
      [
        "rpi2-2",
        "rpi2-4"
      ],
      [
        "rpi2-3",
        "conn2-3"
      ],
      [
        "rpi2-6",
        "rpi2-9",
        "rpi2-14",
        "rpi2-20",
        "rpi2-25",
        "rpi2-30",
        "rpi2-34",
        "rpi2-39",
        "conn2-1"
      ],
      [
        "rpi2-5",
        "conn2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4687"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/Adafruit%202.13in%20eInk%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/Adafruit%202.13in%20eInk%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-2-13in-eInk-Bonnet-PCB/blob/76df16153ef37dc6a620457f3f69457a8bdb660a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4687",
      "status": "Official Adafruit stock feed reported 60 available.",
      "sku": "ADA4687",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "60"
    },
    "description": "Adafruit ADA4687. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5945",
    "sku": "ADA5945",
    "name": "Adafruit PiCowbell Camera Breakout - Autofocus 72 Degree Lens",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5945",
    "revision": "EAGLE Adafruit PiCowbell Camera Breakout.brd; commit 493cada020a7",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 52.07,
      "height": 20.32,
      "color": "#246545",
      "outline": "M-26.035 10.16L-26.035 -10.16L26.035 -10.16L26.035 10.16L-26.035 10.16Z"
    },
    "contacts": assets["adafruit-module-5945"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": -5.715,
        "drill": 2.286
      },
      {
        "x": -19.05,
        "y": 5.715,
        "drill": 2.286
      },
      {
        "x": -24.892,
        "y": -4.66,
        "drill": 0.7
      },
      {
        "x": -24.892,
        "y": -2.96,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-5945"]["artwork"],
    "backArtwork": assets["adafruit-module-5945"]["backArtwork"],
    "artworkBounds": [
      -27.032,
      -7.5344,
      25.044,
      7.613
    ],
    "backArtworkBounds": [
      -5.882,
      -0.9925,
      25.186,
      7.787
    ],
    "provenance": assets["adafruit-module-5945"]["provenance"],
    "internalConnections": [
      [
        "conn1-2",
        "cb1-36",
        "x1-4",
        "x2-11"
      ],
      [
        "conn1-3",
        "cb1-6",
        "x2-3"
      ],
      [
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "cb1-3",
        "cb1-8",
        "cb1-13",
        "cb1-18",
        "cb1-23",
        "cb1-28",
        "cb1-33",
        "cb1-38",
        "x1-6",
        "x1-10",
        "x1-g3",
        "x1-g4",
        "x1-g2",
        "x1-g1",
        "x2-15",
        "x2-sprt1",
        "x2-sprt2"
      ],
      [
        "conn1-4",
        "cb1-7",
        "x2-5"
      ],
      [
        "tp1-p-1",
        "x2-1"
      ],
      [
        "cb1-1",
        "x2-7"
      ],
      [
        "cb1-2",
        "x2-8"
      ],
      [
        "cb1-4",
        "x2-9"
      ],
      [
        "cb1-5",
        "x2-17"
      ],
      [
        "cb1-9",
        "x2-19"
      ],
      [
        "cb1-10",
        "x2-21"
      ],
      [
        "cb1-11",
        "x2-22"
      ],
      [
        "cb1-12",
        "x2-20"
      ],
      [
        "cb1-14",
        "x2-18"
      ],
      [
        "cb1-15",
        "x2-16"
      ],
      [
        "cb1-16",
        "x2-14"
      ],
      [
        "cb1-17",
        "x2-12"
      ],
      [
        "cb1-19",
        "x2-6"
      ],
      [
        "cb1-21",
        "x1-7"
      ],
      [
        "cb1-22",
        "x1-2"
      ],
      [
        "cb1-24",
        "x1-5"
      ],
      [
        "cb1-25",
        "x1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5945"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/Adafruit%20PiCowbell%20Camera%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/Adafruit%20PiCowbell%20Camera%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiCowbell-Camera-Breakout-PCB/blob/493cada020a7b197c078ba895efb419d1902f8a1/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5945",
      "status": "Official Adafruit stock feed reported 87 available.",
      "sku": "ADA5945",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "87"
    },
    "description": "Adafruit ADA5945. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5858",
    "sku": "ADA5858",
    "name": "Adafruit USB Host FeatherWing with MAX3421E",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5858",
    "revision": "EAGLE Adafruit USB Host FeatherWing.brd; commit 7011deb53161",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43Z"
    },
    "contacts": assets["adafruit-module-5858"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      },
      {
        "x": -16.563,
        "y": -2.5,
        "drill": 1.5
      },
      {
        "x": -16.563,
        "y": 2.5,
        "drill": 1.5
      }
    ],
    "artwork": assets["adafruit-module-5858"]["artwork"],
    "backArtwork": assets["adafruit-module-5858"]["backArtwork"],
    "artworkBounds": [
      -27.032999999999998,
      -11.4714,
      25.44,
      11.47
    ],
    "backArtworkBounds": [
      8.278500000000001,
      1.8014999999999999,
      11.6605,
      3.9135
    ],
    "provenance": assets["adafruit-module-5858"]["provenance"],
    "internalConnections": [
      [
        "ms1-28",
        "jp1-1"
      ],
      [
        "ms1-27",
        "jp1-2"
      ],
      [
        "ms1-26",
        "jp1-3"
      ],
      [
        "ms1-25",
        "jp1-4"
      ],
      [
        "ms1-24",
        "jp1-5"
      ],
      [
        "ms1-23",
        "jp1-6"
      ],
      [
        "ms1-22",
        "jp1-7",
        "jp4-2"
      ],
      [
        "ms1-21",
        "jp1-8",
        "jp4-3"
      ],
      [
        "ms1-20",
        "jp1-9"
      ],
      [
        "ms1-19",
        "jp1-10"
      ],
      [
        "ms1-18",
        "jp1-11"
      ],
      [
        "ms1-17",
        "jp1-12"
      ],
      [
        "ms1-5",
        "jp2-12"
      ],
      [
        "ms1-6",
        "jp2-11"
      ],
      [
        "ms1-7",
        "jp2-10"
      ],
      [
        "ms1-8",
        "jp2-9"
      ],
      [
        "ms1-9",
        "jp2-8"
      ],
      [
        "ms1-10",
        "jp2-7"
      ],
      [
        "ms1-11",
        "jp2-6"
      ],
      [
        "ms1-12",
        "jp2-5"
      ],
      [
        "ms1-13",
        "jp2-4"
      ],
      [
        "ms1-14",
        "jp2-3"
      ],
      [
        "ms1-15",
        "jp2-2"
      ],
      [
        "ms1-16",
        "jp2-1"
      ],
      [
        "ms1-4",
        "x2-gnd"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5858"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/Adafruit%20USB%20Host%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/Adafruit%20USB%20Host%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-USB-Host-FeatherWing-PCB/blob/7011deb5316121374db87580ad3b03f22d8f676d/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5858",
      "status": "Official Adafruit stock feed reported 27 available.",
      "sku": "ADA5858",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "27"
    },
    "description": "Adafruit ADA5858. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4569",
    "sku": "ADA4569",
    "name": "Adafruit ISM330DHCX + LIS3MDL FeatherWing",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4569",
    "revision": "EAGLE Adafruit ISM330DHCX + LIS3MDL FeatherWing.brd; commit bd7f6d63e4ed",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-4569"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      }
    ],
    "artwork": assets["adafruit-module-4569"]["artwork"],
    "backArtwork": assets["adafruit-module-4569"]["backArtwork"],
    "artworkBounds": [
      -16.744999999999997,
      -10.4554,
      24.986,
      4.612
    ],
    "backArtworkBounds": [
      -10.962,
      0.214,
      10.581,
      2.326
    ],
    "provenance": assets["adafruit-module-4569"]["provenance"],
    "internalConnections": [
      [
        "conn4-2",
        "ms1-2",
        "jp3-15"
      ],
      [
        "conn4-3",
        "ms1-17",
        "jp2-12"
      ],
      [
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "ms1-4",
        "jp3-13"
      ],
      [
        "conn4-4",
        "ms1-18",
        "jp2-11"
      ],
      [
        "ms1-28",
        "jp2-1"
      ],
      [
        "ms1-27",
        "jp2-2"
      ],
      [
        "ms1-26",
        "jp2-3"
      ],
      [
        "ms1-25",
        "jp2-4"
      ],
      [
        "ms1-24",
        "jp2-5"
      ],
      [
        "ms1-23",
        "jp2-6"
      ],
      [
        "ms1-22",
        "jp2-7"
      ],
      [
        "ms1-21",
        "jp2-8"
      ],
      [
        "ms1-20",
        "jp2-9"
      ],
      [
        "ms1-19",
        "jp2-10"
      ],
      [
        "ms1-5",
        "jp3-12"
      ],
      [
        "ms1-6",
        "jp3-11"
      ],
      [
        "ms1-7",
        "jp3-10"
      ],
      [
        "ms1-8",
        "jp3-9"
      ],
      [
        "ms1-9",
        "jp3-8"
      ],
      [
        "ms1-10",
        "jp3-7"
      ],
      [
        "ms1-11",
        "jp3-6"
      ],
      [
        "ms1-12",
        "jp3-5"
      ],
      [
        "ms1-13",
        "jp3-4"
      ],
      [
        "ms1-14",
        "jp3-3"
      ],
      [
        "ms1-15",
        "jp3-2"
      ],
      [
        "ms1-16",
        "jp3-1"
      ],
      [
        "ms1-3",
        "jp3-14"
      ],
      [
        "ms1-1",
        "jp3-16"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4569"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/Adafruit%20ISM330DHCX%20%2B%20LIS3MDL%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/Adafruit%20ISM330DHCX%20%2B%20LIS3MDL%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ISM330DHCX-LIS3MDL-FeatherWing-PCB/blob/bd7f6d63e4edaed3d9089f1c9197f40e5a437c67/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4569",
      "status": "Official Adafruit stock feed reported 52 available.",
      "sku": "ADA4569",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "52"
    },
    "description": "Adafruit ADA4569. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4300",
    "sku": "ADA4300",
    "name": "Adafruit HalloWing M4 Express - Goth Adafruit Black Edition",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4300",
    "revision": "EAGLE Adafruit Hallowing M4.brd; commit 24076afe1a14",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 60.0964,
      "color": "#246545",
      "outline": "M-7.62 30.0482A5.067698 5.067698 0 0 1 -12.7508 25.0444L-12.7508 20.298769A3.81 3.81 0 0 0 -15.819359 16.561609L-23.788834 14.980491A2.019358 2.019358 0 0 1 -25.4 12.987338L-25.4 -16.991719A3.797424 3.797424 0 0 1 -24.312459 -19.682809L-16.202866 -27.810384A7.620001 7.620001 0 0 1 -10.808747 -30.0482L-2.54 -30.0482L-2.032 -29.5402L2.032 -29.5402L2.54 -30.0482L10.717034 -30.0482A7.62 7.62 0 0 1 16.099219 -27.822316L24.230291 -19.709234A3.835887 3.835887 0 0 1 25.4 -17.012175L25.4 12.990625A2.057634 2.057634 0 0 1 23.716491 14.983009L15.815481 16.559069A3.809998 3.809998 0 0 0 12.7508 20.295459L12.7508 25.0444A5.067698 5.067698 0 0 1 7.62 30.0482L-7.62 30.0482Z"
    },
    "contacts": assets["adafruit-module-4300"]["contacts"],
    "holes": [
      {
        "x": 8.89,
        "y": 17.9832,
        "drill": 2.54
      },
      {
        "x": -8.89,
        "y": 17.9832,
        "drill": 2.54
      },
      {
        "x": -17.0815,
        "y": -22.7838,
        "drill": 3.175
      },
      {
        "x": 17.2085,
        "y": -22.7838,
        "drill": 3.175
      },
      {
        "x": 8.89,
        "y": -27.7368,
        "drill": 2.5
      },
      {
        "x": -8.89,
        "y": -27.7368,
        "drill": 2.5
      },
      {
        "x": -13.673184,
        "y": -27.427003,
        "drill": 2.4
      },
      {
        "x": 1.95,
        "y": -25.5778,
        "drill": 0.7
      },
      {
        "x": -1.95,
        "y": -25.5778,
        "drill": 0.7
      },
      {
        "x": -1.421,
        "y": 17.7927,
        "drill": 1
      },
      {
        "x": -4.421,
        "y": 17.7927,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-4300"]["artwork"],
    "backArtwork": assets["adafruit-module-4300"]["backArtwork"],
    "artworkBounds": [
      -25.043,
      -30.517799999999998,
      25.043,
      23.6497
    ],
    "backArtworkBounds": [
      -15.672999999999998,
      -21.9533,
      15.927,
      12.8667
    ],
    "provenance": assets["adafruit-module-4300"]["provenance"],
    "internalConnections": [
      [
        "tp3-p-1",
        "ms2-10b",
        "ms2-10"
      ],
      [
        "tp4-p-1",
        "ms2-9b",
        "ms2-9"
      ],
      [
        "tp28-p-1",
        "ms2-8b",
        "ms2-8"
      ],
      [
        "tp29-p-1",
        "ms2-7b",
        "ms2-7"
      ],
      [
        "x2-sprt-4",
        "x2-sprt-3",
        "x2-sprt-1",
        "x2-sprt-2",
        "x2-gnd",
        "x2-base-1",
        "x2-base-2",
        "x4-1",
        "ms2-4b",
        "ms2-4",
        "sense1-1",
        "neopix1-1",
        "i2c1-1",
        "i2c1-nc1",
        "i2c1-nc2"
      ],
      [
        "x2-vbus",
        "ms2-26",
        "ms2-26b"
      ],
      [
        "x2-id",
        "ms2-25",
        "ms2-25b"
      ],
      [
        "x4-2",
        "ms2-28b",
        "ms2-28"
      ],
      [
        "ms2-1",
        "ms2-1b"
      ],
      [
        "ms2-2",
        "ms2-2b"
      ],
      [
        "ms2-3b",
        "ms2-3"
      ],
      [
        "ms2-5b",
        "ms2-5"
      ],
      [
        "ms2-6b",
        "ms2-6"
      ],
      [
        "ms2-11b",
        "ms2-11"
      ],
      [
        "ms2-12b",
        "ms2-12"
      ],
      [
        "ms2-13b",
        "ms2-13"
      ],
      [
        "ms2-14b",
        "ms2-14"
      ],
      [
        "ms2-15b",
        "ms2-15"
      ],
      [
        "ms2-16b",
        "ms2-16"
      ],
      [
        "ms2-27b",
        "ms2-27"
      ],
      [
        "ms2-24",
        "ms2-24b"
      ],
      [
        "ms2-23",
        "ms2-23b"
      ],
      [
        "ms2-22",
        "ms2-22b"
      ],
      [
        "ms2-21",
        "ms2-21b"
      ],
      [
        "ms2-20",
        "ms2-20b"
      ],
      [
        "ms2-19",
        "ms2-19b"
      ],
      [
        "ms2-18",
        "ms2-18b"
      ],
      [
        "ms2-17",
        "ms2-17b"
      ],
      [
        "sense1-2",
        "neopix1-2",
        "i2c1-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4300"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/Adafruit%20Hallowing%20M4.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/Adafruit%20Hallowing%20M4.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Hallowing-M4-PCB/blob/24076afe1a14927e0a7cc2fb2cabb8cb0a7cdd27/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4300",
      "status": "Official Adafruit stock feed reported 29 available.",
      "sku": "ADA4300",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "29"
    },
    "description": "Adafruit ADA4300. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5679",
    "sku": "ADA5679",
    "name": "Adafruit Floppy FeatherWing with 34-Pin IDC Connector",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5679",
    "revision": "EAGLE Adafruit Floppy FeatherWing.brd; commit 8793e86222bd",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-25.4 -8.89A2.54 2.54 0 0 1 -22.86 -11.43L22.86 -11.43A2.54 2.54 0 0 1 25.4 -8.89L25.4 8.89A2.54 2.54 0 0 1 22.86 11.43L-22.86 11.43A2.54 2.54 0 0 1 -25.4 8.89L-25.4 -8.89Z"
    },
    "contacts": assets["adafruit-module-5679"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.54
      },
      {
        "x": -23.622,
        "y": -1.5,
        "drill": 0.9
      },
      {
        "x": -23.622,
        "y": 1.5,
        "drill": 0.9
      }
    ],
    "artwork": assets["adafruit-module-5679"]["artwork"],
    "backArtwork": assets["adafruit-module-5679"]["backArtwork"],
    "artworkBounds": [
      -26.462,
      -5.5675,
      19.001,
      6.139
    ],
    "backArtworkBounds": [
      -25.43,
      -12.402999999999999,
      25.43,
      4.54
    ],
    "provenance": assets["adafruit-module-5679"]["provenance"],
    "internalConnections": [
      [
        "ms1-28",
        "jp1-1"
      ],
      [
        "ms1-27",
        "jp1-2"
      ],
      [
        "ms1-26",
        "jp1-3",
        "x1-2"
      ],
      [
        "ms1-25",
        "jp1-4"
      ],
      [
        "ms1-24",
        "jp1-5"
      ],
      [
        "ms1-23",
        "jp1-6"
      ],
      [
        "ms1-22",
        "jp1-7"
      ],
      [
        "ms1-21",
        "jp1-8"
      ],
      [
        "ms1-20",
        "jp1-9"
      ],
      [
        "ms1-19",
        "jp1-10"
      ],
      [
        "ms1-18",
        "jp1-11"
      ],
      [
        "ms1-17",
        "jp1-12"
      ],
      [
        "ms1-5",
        "jp3-12"
      ],
      [
        "ms1-6",
        "jp3-11"
      ],
      [
        "ms1-7",
        "jp3-10"
      ],
      [
        "ms1-8",
        "jp3-9"
      ],
      [
        "ms1-9",
        "jp3-8"
      ],
      [
        "ms1-10",
        "jp3-7"
      ],
      [
        "ms1-11",
        "jp3-6"
      ],
      [
        "ms1-12",
        "jp3-5"
      ],
      [
        "ms1-13",
        "jp3-4"
      ],
      [
        "ms1-14",
        "jp3-3"
      ],
      [
        "ms1-15",
        "jp3-2"
      ],
      [
        "ms1-16",
        "jp3-1"
      ],
      [
        "ms1-4",
        "jp3-13",
        "fdd1-1",
        "fdd1-3",
        "fdd1-5",
        "fdd1-7",
        "fdd1-9",
        "fdd1-11",
        "fdd1-13",
        "fdd1-15",
        "fdd1-17",
        "fdd1-19",
        "fdd1-21",
        "fdd1-23",
        "fdd1-25",
        "fdd1-27",
        "fdd1-29",
        "fdd1-31",
        "fdd1-33",
        "x1-1"
      ],
      [
        "ms1-3",
        "jp3-14"
      ],
      [
        "ms1-2",
        "jp3-15"
      ],
      [
        "ms1-1",
        "jp3-16"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5679"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/Adafruit%20Floppy%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/Adafruit%20Floppy%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit_Floppy_FeatherWing_PCB/blob/8793e86222bd62b1ee243e07e97a8de9ff6a7e7e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5679",
      "status": "Official Adafruit stock feed reported 98 available.",
      "sku": "ADA5679",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "98"
    },
    "description": "Adafruit ADA5679. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5862",
    "sku": "ADA5862",
    "name": "Adafruit Grove and Stemma QT FeatherWing for all Feathers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5862",
    "revision": "EAGLE Adafruit Grove and STEMMA QT FeatherWing.brd; commit 2815cb84b56f",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-12.573 -11.43L-13.589 -10.414L-16.891 -10.414L-17.907 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-5862"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.54
      },
      {
        "x": -14.09,
        "y": -9.19,
        "drill": 1
      },
      {
        "x": -16.39,
        "y": -9.19,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-5862"]["artwork"],
    "backArtwork": assets["adafruit-module-5862"]["backArtwork"],
    "artworkBounds": [
      -25.439999999999998,
      -11.469999999999999,
      25.44,
      11.47
    ],
    "provenance": assets["adafruit-module-5862"]["provenance"],
    "internalConnections": [
      [
        "ms1-28",
        "jp5-1"
      ],
      [
        "ms1-27",
        "jp5-2"
      ],
      [
        "ms1-26",
        "jp5-3"
      ],
      [
        "ms1-25",
        "jp5-4"
      ],
      [
        "ms1-24",
        "jp5-5"
      ],
      [
        "ms1-23",
        "jp5-6"
      ],
      [
        "ms1-22",
        "jp5-7"
      ],
      [
        "ms1-21",
        "jp5-8"
      ],
      [
        "ms1-20",
        "jp5-9"
      ],
      [
        "ms1-19",
        "jp5-10"
      ],
      [
        "ms1-18",
        "jp5-11",
        "conn1-4",
        "x5-4",
        "x6-4"
      ],
      [
        "ms1-17",
        "jp5-12",
        "conn1-3",
        "x5-3",
        "x6-3"
      ],
      [
        "ms1-5",
        "jp6-12",
        "x1-4"
      ],
      [
        "ms1-6",
        "jp6-11",
        "x1-3"
      ],
      [
        "ms1-7",
        "jp6-10",
        "x2-4"
      ],
      [
        "ms1-8",
        "jp6-9",
        "x2-3"
      ],
      [
        "ms1-9",
        "jp6-8",
        "x3-4"
      ],
      [
        "ms1-10",
        "jp6-7",
        "x3-3"
      ],
      [
        "ms1-11",
        "jp6-6"
      ],
      [
        "ms1-12",
        "jp6-5"
      ],
      [
        "ms1-13",
        "jp6-4"
      ],
      [
        "ms1-14",
        "jp6-3",
        "x4-4"
      ],
      [
        "ms1-15",
        "jp6-2",
        "x4-3"
      ],
      [
        "ms1-16",
        "jp6-1"
      ],
      [
        "ms1-4",
        "jp6-13",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "x1-mt1",
        "x1-mt2",
        "x1-1",
        "x2-mt1",
        "x2-mt2",
        "x2-1",
        "x3-mt1",
        "x3-mt2",
        "x3-1",
        "x4-mt1",
        "x4-mt2",
        "x4-1",
        "x5-mt1",
        "x5-mt2",
        "x5-1",
        "x6-mt1",
        "x6-mt2",
        "x6-1"
      ],
      [
        "ms1-3",
        "jp6-14"
      ],
      [
        "ms1-2",
        "jp6-15",
        "conn1-2",
        "x1-2",
        "x2-2",
        "x3-2",
        "x4-2",
        "x5-2",
        "x6-2"
      ],
      [
        "ms1-1",
        "jp6-16"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5862"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/Adafruit%20Grove%20and%20STEMMA%20QT%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/Adafruit%20Grove%20and%20STEMMA%20QT%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Grove-and-Stemma-QT-FeatherWing-PCB/blob/2815cb84b56f4e79c573aa0c641fadef878a512f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5862",
      "status": "Official Adafruit stock feed reported 68 available.",
      "sku": "ADA5862",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "68"
    },
    "description": "Adafruit ADA5862. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2601",
    "sku": "ADA2601",
    "name": "Adafruit RGB Matrix Shield for Arduino",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2601",
    "revision": "EAGLE Adafruit RGB Matrix Shield.brd; commit d49153b7b42f",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 68.58,
      "height": 53.34,
      "color": "#246545",
      "outline": "M31.75 24.13L34.29 21.59L34.29 -11.176L31.75 -13.716L31.75 -25.146L30.226 -26.67L-34.29 -26.67L-34.29 26.67L31.75 26.67L31.75 24.13Z"
    },
    "contacts": assets["adafruit-module-2601"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.2
      },
      {
        "x": -20.32,
        "y": 24.13,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.2
      }
    ],
    "artwork": assets["adafruit-module-2601"]["artwork"],
    "backArtwork": assets["adafruit-module-2601"]["backArtwork"],
    "artworkBounds": [
      -34.33,
      -26.71,
      34.33,
      26.71
    ],
    "provenance": assets["adafruit-module-2601"]["provenance"],
    "internalConnections": [
      [
        "u-41-d4",
        "jp1-4"
      ],
      [
        "u-41-a0",
        "jp8-6"
      ],
      [
        "u-41-d3",
        "jp1-5"
      ],
      [
        "u-41-d2",
        "jp1-6"
      ],
      [
        "u-41-d1",
        "jp1-7"
      ],
      [
        "u-41-d0",
        "jp1-8"
      ],
      [
        "u-41-d5",
        "jp1-3"
      ],
      [
        "u-41-d6",
        "jp1-2"
      ],
      [
        "u-41-d7",
        "jp1-1"
      ],
      [
        "u-41-d8",
        "jp6-10"
      ],
      [
        "u-41-d9",
        "jp6-9"
      ],
      [
        "u-41-d10",
        "jp6-8"
      ],
      [
        "u-41-d11",
        "jp6-7"
      ],
      [
        "u-41-d12",
        "jp6-6"
      ],
      [
        "u-41-d13",
        "jp6-5"
      ],
      [
        "u-41-gnd",
        "u-41-gnd-1",
        "u-41-gnd-2",
        "u-41-gnd-3",
        "jp4-2",
        "jp4-3",
        "jp6-4",
        "jp15-4",
        "jp3-2",
        "matrix_pwr-p-3"
      ],
      [
        "u-41-aref",
        "jp6-3"
      ],
      [
        "u-41-a1",
        "jp8-5"
      ],
      [
        "u-41-a2",
        "jp8-4"
      ],
      [
        "u-41-a3",
        "jp8-3"
      ],
      [
        "u-41-a4",
        "jp8-2"
      ],
      [
        "u-41-a5",
        "jp8-1"
      ],
      [
        "u-41-vin",
        "jp4-1"
      ],
      [
        "u-41-5v",
        "u-41-5v_icsp",
        "jp4-4",
        "matrix_pwr-p-4"
      ],
      [
        "u-41-3v",
        "jp4-5"
      ],
      [
        "u-41-reset",
        "u-41-reset_icsp",
        "jp4-6"
      ],
      [
        "u-41-sda",
        "jp6-2"
      ],
      [
        "u-41-scl",
        "jp6-1"
      ],
      [
        "u-41-ioref",
        "jp4-7"
      ],
      [
        "u-41-reserved",
        "jp4-8"
      ],
      [
        "jp15-1",
        "jp2-8"
      ],
      [
        "jp15-2",
        "jp3-1"
      ],
      [
        "jp15-3",
        "jp2-7"
      ],
      [
        "jp15-5",
        "jp2-6"
      ],
      [
        "jp15-6",
        "jp3-3"
      ],
      [
        "jp15-7",
        "jp2-5"
      ],
      [
        "jp15-8",
        "jp3-4"
      ],
      [
        "jp15-9",
        "jp2-4"
      ],
      [
        "jp15-10",
        "jp3-5"
      ],
      [
        "jp15-11",
        "jp2-3"
      ],
      [
        "jp15-12",
        "jp3-6"
      ],
      [
        "jp15-13",
        "jp2-2"
      ],
      [
        "jp15-14",
        "jp3-7"
      ],
      [
        "jp15-15",
        "jp2-1"
      ],
      [
        "jp15-16",
        "jp3-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2601"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/Adafruit%20RGB%20Matrix%20Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/Adafruit%20RGB%20Matrix%20Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RGB-Matrix-Shield-PCB/blob/d49153b7b42f584c5b243d7605a7ec9c75c3b934/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2601",
      "status": "Official Adafruit stock feed reported 5 available.",
      "sku": "ADA2601",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "5"
    },
    "description": "Adafruit ADA2601. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3422",
    "sku": "ADA3422",
    "name": "Adafruit Arcade Bonnet for Raspberry Pi with JST Connectors",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3422",
    "revision": "EAGLE Adafruit Arcade Bonnet.brd; commit 20446a9dc6a3",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 65,
      "height": 30,
      "color": "#246545",
      "outline": "M-32.5 12.0A3.0 3.0 0 0 0 -29.5 15.0L29.5 15.0A3.0 3.0 0 0 0 32.5 12.0L32.5 -12.0A3.0 3.0 0 0 0 29.5 -15.0L-29.5 -15.0A3.0 3.0 0 0 0 -32.5 -12.0L-32.5 12.0Z"
    },
    "contacts": assets["adafruit-module-3422"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 11.5,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -11.5,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -11.5,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.5,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-3422"]["artwork"],
    "backArtwork": assets["adafruit-module-3422"]["backArtwork"],
    "artworkBounds": [
      -32.082,
      -5.173,
      31.852,
      14.576
    ],
    "backArtworkBounds": [
      -22.253,
      -3.201,
      -1.218,
      5.515
    ],
    "provenance": assets["adafruit-module-3422"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17",
        "jp1-4"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ],
      [
        "rpi1-3",
        "conn1-1"
      ],
      [
        "rpi1-5",
        "conn1-2"
      ],
      [
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39",
        "b4-2",
        "b3-2",
        "b2-2",
        "b0-2",
        "b1-2",
        "joy1-1",
        "b5-2",
        "jp1-1",
        "jp2-1",
        "jp2-2",
        "jp2-3",
        "jp3-1",
        "jp3-2",
        "jp3-3",
        "jp4-2",
        "jp6-2",
        "jp7-2",
        "jp8-2",
        "jp9-2",
        "jp10-2"
      ],
      [
        "rpi1-7",
        "conn1-5"
      ],
      [
        "rpi1-8",
        "conn1-3"
      ],
      [
        "rpi1-10",
        "conn1-4"
      ],
      [
        "rpi1-11",
        "conn1-6"
      ],
      [
        "rpi1-12",
        "conn1-7"
      ],
      [
        "rpi1-13",
        "conn1-8"
      ],
      [
        "rpi1-15",
        "conn1-9"
      ],
      [
        "rpi1-16",
        "conn1-10"
      ],
      [
        "rpi1-18",
        "conn1-11"
      ],
      [
        "rpi1-19",
        "conn1-13"
      ],
      [
        "rpi1-21",
        "conn1-14"
      ],
      [
        "rpi1-22",
        "conn1-12"
      ],
      [
        "rpi1-23",
        "conn1-15"
      ],
      [
        "rpi1-24",
        "conn1-16"
      ],
      [
        "rpi1-26",
        "conn1-17"
      ],
      [
        "rpi1-29",
        "conn1-18"
      ],
      [
        "rpi1-31",
        "conn1-19"
      ],
      [
        "rpi1-32",
        "conn1-20"
      ],
      [
        "rpi1-33",
        "conn1-21"
      ],
      [
        "rpi1-35",
        "conn1-23"
      ],
      [
        "rpi1-36",
        "conn1-22"
      ],
      [
        "rpi1-38",
        "conn1-24"
      ],
      [
        "rpi1-40",
        "conn1-25"
      ],
      [
        "b4-1",
        "jp6-1"
      ],
      [
        "b3-1",
        "jp4-1"
      ],
      [
        "b2-1",
        "jp8-1"
      ],
      [
        "b0-1",
        "jp10-1"
      ],
      [
        "b1-1",
        "jp9-1"
      ],
      [
        "b5-1",
        "jp7-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3422"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/Adafruit%20Arcade%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/Adafruit%20Arcade%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Arcade-Bonnet-PCB/blob/20446a9dc6a3f9b86abfc56c499863b030211beb/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3422",
      "status": "Official Adafruit stock feed reported 43 available.",
      "sku": "ADA3422",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "43"
    },
    "description": "Adafruit ADA3422. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
