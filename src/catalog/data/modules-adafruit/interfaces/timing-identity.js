import assets from "./timing-identity-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-2045",
    "sku": "ADA2045",
    "name": "Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2045",
    "revision": "EAGLE Adafruit Si5351A.brd; commit 14a50ca2041b",
    "category": "Interfaces",
    "board": {
      "width": 30.48,
      "height": 21.59,
      "color": "#246545",
      "outline": "M-15.24 -8.255A2.54 2.54 0 0 1 -12.7 -10.795L12.7 -10.795A2.54 2.54 0 0 1 15.24 -8.255L15.24 8.255A2.54 2.54 0 0 1 12.7 10.795L-12.7 10.795A2.54 2.54 0 0 1 -15.24 8.255L-15.24 -8.255Z"
    },
    "contacts": assets["adafruit-module-2045"]["contacts"],
    "holes": [
      {
        "x": 12.7,
        "y": 8.255,
        "drill": 2.5
      },
      {
        "x": -12.7,
        "y": 8.255,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2045"]["artwork"],
    "backArtwork": assets["adafruit-module-2045"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-2045"]["provenance"],
    "internalConnections": [
      [
        "x1-gnd-2",
        "x1-gnd-1",
        "x1-gnd-3",
        "x1-gnd-4",
        "x2-gnd-2",
        "x2-gnd-1",
        "x2-gnd-3",
        "x2-gnd-4",
        "x3-gnd-2",
        "x3-gnd-1",
        "x3-gnd-3",
        "x3-gnd-4",
        "jp1-2"
      ],
      [
        "x1-p",
        "jp1-7"
      ],
      [
        "x2-p",
        "jp1-6"
      ],
      [
        "x3-p",
        "jp1-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2045"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-Breakout-PCB/blob/14a50ca2041bbcccc6a2b1378cb72424603f5d20/Adafruit%20Si5351A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-Breakout-PCB/blob/14a50ca2041bbcccc6a2b1378cb72424603f5d20/Adafruit%20Si5351A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-Breakout-PCB/blob/14a50ca2041bbcccc6a2b1378cb72424603f5d20/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2045",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2045",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2045. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -13.375,
      -19.534499999999998,
      13.375,
      5.653
    ]
  },
  {
    "id": "adafruit-module-3386",
    "sku": "ADA3386",
    "name": "Adafruit PiRTC - PCF8523 Real Time Clock for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3386",
    "revision": "EAGLE Adafruit PiRTC PCF8523.brd; commit afaa9a44856f",
    "category": "Interfaces",
    "board": {
      "width": 19.9898,
      "height": 21.209,
      "color": "#246545",
      "outline": "M-9.9949 -10.6045L6.6929 -10.5791A3.058565 3.058565 0 0 1 9.9949 -7.7851L9.9949 4.2545L3.0099 4.2545L3.0099 8.0645A2.54 2.54 0 0 1 0.4699 10.6045L-7.7089 10.6045A2.350358 2.350358 0 0 1 -9.9949 8.1915L-9.9949 5.3975L-8.57985 3.72845A2.539999 2.539999 0 0 0 -7.8359 1.932397L-7.8359 -2.059397A2.54 2.54 0 0 0 -8.57985 -3.85545L-9.9949 -5.5245L-9.9949 -10.6045Z"
    },
    "contacts": assets["adafruit-module-3386"]["contacts"],
    "holes": [
      {
        "x": 6.0071,
        "y": -7.0993,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-3386"]["artwork"],
    "backArtwork": assets["adafruit-module-3386"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3386"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-1-"
      ],
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-2-",
        "rpi1-4-"
      ],
      [
        "rpi1-3",
        "rpi1-3-"
      ],
      [
        "rpi1-5",
        "rpi1-5-"
      ],
      [
        "rpi1-6",
        "rpi1-6-",
        "b1--"
      ],
      [
        "b1-plus-1",
        "b1-plus-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3386"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-RTC-for-Raspberry-Pi-PCB/blob/afaa9a44856f370313c9509650e84d1f5b4b9b28/Adafruit%20PiRTC%20PCF8523.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-RTC-for-Raspberry-Pi-PCB/blob/afaa9a44856f370313c9509650e84d1f5b4b9b28/Adafruit%20PiRTC%20PCF8523.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-RTC-for-Raspberry-Pi-PCB/blob/afaa9a44856f370313c9509650e84d1f5b4b9b28/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3386",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3386",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3386. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.034899999999999,
      -10.263499999999999,
      3.2531,
      10.1365
    ],
    "backArtworkBounds": [
      -7.5711,
      -9.0885,
      1.8921,
      6.7833
    ]
  },
  {
    "id": "adafruit-module-4314",
    "sku": "ADA4314",
    "name": "Adafruit ATECC608 Breakout Board - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4314",
    "revision": "EAGLE Adafruit ATECC608.brd; commit 1535820f36fb",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4314"]["contacts"],
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
    "artwork": assets["adafruit-module-4314"]["artwork"],
    "backArtwork": assets["adafruit-module-4314"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4314"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp2-2",
        "conn3-1",
        "conn4-1"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4314"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ATECC608-PCB/blob/1535820f36fb71b8a76cebc654b934e32a760c9c/Adafruit%20ATECC608.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ATECC608-PCB/blob/1535820f36fb71b8a76cebc654b934e32a760c9c/Adafruit%20ATECC608.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ATECC608-PCB/blob/1535820f36fb71b8a76cebc654b934e32a760c9c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4314",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4314",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4314. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.155,
      12.286,
      3.14
    ]
  },
  {
    "id": "adafruit-module-4351",
    "sku": "ADA4351",
    "name": "Adafruit Infineon Trust M Breakout Board - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4351",
    "revision": "EAGLE Adafruit Infineon Trust M.brd; commit be8bbc2b780c",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4351"]["contacts"],
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
    "artwork": assets["adafruit-module-4351"]["artwork"],
    "backArtwork": assets["adafruit-module-4351"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4351"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp1-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp1-4"
      ],
      [
        "conn3-1",
        "conn4-1",
        "jp1-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4351"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Infineon-Trust-M-PCB/blob/be8bbc2b780c9807f57df6a793e743d38681eccd/Adafruit%20Infineon%20Trust%20M.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Infineon-Trust-M-PCB/blob/be8bbc2b780c9807f57df6a793e743d38681eccd/Adafruit%20Infineon%20Trust%20M.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Infineon-Trust-M-PCB/blob/be8bbc2b780c9807f57df6a793e743d38681eccd/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4351",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4351",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4351. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.155,
      12.286,
      3.14
    ]
  },
  {
    "id": "adafruit-module-4282",
    "sku": "ADA4282",
    "name": "Adafruit PiRTC - Precise DS3231 Real Time Clock for Raspberry Pi",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4282",
    "revision": "EAGLE Adafruit DS3231 PiRTC.brd; commit fea853b94ebe",
    "category": "Interfaces",
    "board": {
      "width": 19.9898,
      "height": 21.209,
      "color": "#246545",
      "outline": "M-9.9949 -10.6045L6.6929 -10.5791A3.058565 3.058565 0 0 1 9.9949 -7.7851L9.9949 4.2545L3.0099 4.2545L3.0099 8.0645A2.54 2.54 0 0 1 0.4699 10.6045L-7.7089 10.6045A2.350358 2.350358 0 0 1 -9.9949 8.1915L-9.9949 5.3975L-9.46885 3.60145A2.539999 2.539999 0 0 0 -8.7249 1.805397L-8.7249 -2.186397A2.54 2.54 0 0 0 -9.46885 -3.98245L-9.9949 -5.5245L-9.9949 -10.6045Z"
    },
    "contacts": assets["adafruit-module-4282"]["contacts"],
    "holes": [
      {
        "x": 6.0071,
        "y": -7.0993,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-4282"]["artwork"],
    "backArtwork": assets["adafruit-module-4282"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-4282"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-1-"
      ],
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-2-",
        "rpi1-4-"
      ],
      [
        "rpi1-3",
        "rpi1-3-"
      ],
      [
        "rpi1-5",
        "rpi1-5-"
      ],
      [
        "rpi1-6",
        "rpi1-6-",
        "b1--"
      ],
      [
        "b1-plus-1",
        "b1-plus-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4282"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-DS3231-PCB/blob/fea853b94ebefe77f3655f3e572b4addfe14ead7/Adafruit%20DS3231%20PiRTC.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-DS3231-PCB/blob/fea853b94ebefe77f3655f3e572b4addfe14ead7/Adafruit%20DS3231%20PiRTC.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PiRTC-DS3231-PCB/blob/fea853b94ebefe77f3655f3e572b4addfe14ead7/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4282",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4282",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4282. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.034899999999999,
      -10.263499999999999,
      3.2531,
      10.1365
    ],
    "backArtworkBounds": [
      -8.570099999999998,
      -8.332699999999999,
      1.8899,
      3.7019
    ]
  },
  {
    "id": "adafruit-module-6538",
    "sku": "ADA6538",
    "name": "Adafruit RV-8803 High Accuracy Real Time Clock Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6538",
    "revision": "EAGLE Adafruit RV-8803 RTC Breakout Board.brd; commit 32351f05d78d",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L6.477 -8.89L4.699 -7.112L-4.699 -7.112L-6.477 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6538"]["contacts"],
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
    "artwork": assets["adafruit-module-6538"]["artwork"],
    "backArtwork": assets["adafruit-module-6538"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-6538"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-8"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-7",
        "b1--"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-6"
      ],
      [
        "b1-plus-1",
        "b1-plus-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6538"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-RV-8803-High-Accuracy-Real-Time-Clock-PCB/blob/32351f05d78df6b2e532512ec7fc56d9bd44c9e4/Adafruit%20RV-8803%20RTC%20Breakout%20Board.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-RV-8803-High-Accuracy-Real-Time-Clock-PCB/blob/32351f05d78df6b2e532512ec7fc56d9bd44c9e4/Adafruit%20RV-8803%20RTC%20Breakout%20Board.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-RV-8803-High-Accuracy-Real-Time-Clock-PCB/blob/32351f05d78df6b2e532512ec7fc56d9bd44c9e4/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6538",
      "status": "Official Adafruit stock feed reported 48 available.",
      "sku": "ADA6538",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "48"
    },
    "description": "Adafruit ADA6538. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -7.025,
      12.286,
      4.002
    ],
    "backArtworkBounds": [
      -10.2,
      -8.549,
      10.2,
      4.739
    ]
  },
  {
    "id": "adafruit-module-5640",
    "sku": "ADA5640",
    "name": "Adafruit Si5351A Clock Generator with STEMMA QT - 8KHz to 160MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5640",
    "revision": "EAGLE Si5351 STEMMA QT Board.brd; commit f4ca8e1c846c",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5640"]["contacts"],
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
    "artwork": assets["adafruit-module-5640"]["artwork"],
    "backArtwork": assets["adafruit-module-5640"]["backArtwork"],
    "provenance": assets["adafruit-module-5640"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "x2-gnd-2",
        "x2-gnd-1",
        "x2-gnd-3",
        "x2-gnd-4",
        "jp2-3",
        "jp5-2",
        "jp5-4"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-4"
      ],
      [
        "x2-p",
        "jp5-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5640"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-with-STEMMA-QT-PCB/blob/f4ca8e1c846ced71a104c657bcb727502675b466/Si5351%20STEMMA%20QT%20Board.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-with-STEMMA-QT-PCB/blob/f4ca8e1c846ced71a104c657bcb727502675b466/Si5351%20STEMMA%20QT%20Schematic.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Si5351A-Clock-Generator-with-STEMMA-QT-PCB/blob/f4ca8e1c846ced71a104c657bcb727502675b466/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5640",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5640",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5640. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.158999999999999,
      -17.7565,
      12.159,
      4.569
    ],
    "backArtworkBounds": [
      -8.295,
      -5.247,
      -6.183,
      -1.865
    ]
  },
  {
    "id": "adafruit-module-6534",
    "sku": "ADA6534",
    "name": "Adafruit Si5351C 8 Channel TCXO Clock Generator - 2.5KHz-200MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6534",
    "revision": "EAGLE Adafruit Si5351C 8 Channel TCXO Clock Generator rev B.brd; commit d5fc0fc928d6",
    "category": "Interfaces",
    "board": {
      "width": 45.72,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-22.86 6.35A2.54 2.54 0 0 0 -20.32 8.89L20.32 8.89A2.54 2.54 0 0 0 22.86 6.35L22.86 -6.35A2.54 2.54 0 0 0 20.32 -8.89L-20.32 -8.89A2.54 2.54 0 0 0 -22.86 -6.35L-22.86 6.35Z"
    },
    "contacts": assets["adafruit-module-6534"]["contacts"],
    "holes": [
      {
        "x": -20.32,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 20.32,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6534"]["artwork"],
    "backArtwork": assets["adafruit-module-6534"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-6534"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-1",
        "jp3-3",
        "jp3-5",
        "jp3-7",
        "jp3-9",
        "jp3-11",
        "jp3-13",
        "jp3-15",
        "jp3-17",
        "x1-gnd-2",
        "x1-gnd-1",
        "x1-gnd-3",
        "x1-gnd-4",
        "x2-gnd-2",
        "x2-gnd-1",
        "x2-gnd-3",
        "x2-gnd-4",
        "x3-gnd-2",
        "x3-gnd-1",
        "x3-gnd-3",
        "x3-gnd-4",
        "x4-gnd-2",
        "x4-gnd-1",
        "x4-gnd-3",
        "x4-gnd-4",
        "x8-gnd-2",
        "x8-gnd-3",
        "jp2-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-4"
      ],
      [
        "jp3-2",
        "x1-p"
      ],
      [
        "jp3-4",
        "x5-p"
      ],
      [
        "jp3-6",
        "x2-p"
      ],
      [
        "jp3-8",
        "x6-p"
      ],
      [
        "jp3-10",
        "x3-p"
      ],
      [
        "jp3-12",
        "x7-p"
      ],
      [
        "jp3-14",
        "x4-p"
      ],
      [
        "jp3-16",
        "x8-p"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6534"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Si5351C-8-Channel-TCXO-Clock-Generator-PCB/blob/d5fc0fc928d6088a98b8ff0acc428731f978a110/Adafruit%20Si5351C%208%20Channel%20TCXO%20Clock%20Generator%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Si5351C-8-Channel-TCXO-Clock-Generator-PCB/blob/d5fc0fc928d6088a98b8ff0acc428731f978a110/Adafruit%20Si5351C%208%20Channel%20TCXO%20Clock%20Generator%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Si5351C-8-Channel-TCXO-Clock-Generator-PCB/blob/d5fc0fc928d6088a98b8ff0acc428731f978a110/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6534",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6534",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6534. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -22.319,
      -17.883499999999998,
      22.319,
      4.0915
    ],
    "backArtworkBounds": [
      -15.407,
      -3.215,
      17.566,
      5.247
    ],
    "footprintPads": assets["adafruit-module-6534"]["footprintPads"]
  },
  {
    "id": "adafruit-module-5189",
    "sku": "ADA5189",
    "name": "Adafruit PCF8523 Real Time Clock Breakout Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5189",
    "revision": "EAGLE Adafrruit PCF8523 QT.brd; commit 4ec7e14d667a",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L6.477 -8.89L4.699 -7.112L-4.699 -7.112L-6.477 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5189"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -6.35,
        "drill": 3
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 3
      },
      {
        "x": -10.16,
        "y": 6.35,
        "drill": 3
      },
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-5189"]["artwork"],
    "backArtwork": assets["adafruit-module-5189"]["backArtwork"],
    "provenance": assets["adafruit-module-5189"]["provenance"],
    "internalConnections": [
      [
        "jp2-2",
        "conn3-3",
        "conn4-3"
      ],
      [
        "jp2-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp2-4",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "b1--"
      ],
      [
        "jp2-5",
        "conn3-2",
        "conn4-2"
      ],
      [
        "b1-plus-1",
        "b1-plus-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5189"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCF8523-RTC-Breakout-PCB/blob/4ec7e14d667a2d075430da0980c35c4f049e860b/Adafrruit%20PCF8523%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCF8523-RTC-Breakout-PCB/blob/4ec7e14d667a2d075430da0980c35c4f049e860b/Adafrruit%20PCF8523%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCF8523-RTC-Breakout-PCB/blob/4ec7e14d667a2d075430da0980c35c4f049e860b/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5189",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5189",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5189. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -3.996,
      12.286,
      4.104
    ],
    "backArtworkBounds": [
      -10.2,
      -8.549,
      10.2,
      4.739
    ]
  },
];
