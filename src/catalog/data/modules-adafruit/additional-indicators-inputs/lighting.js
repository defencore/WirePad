import assets from "./lighting-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-1463",
    "sku": "ADA1463",
    "name": "NeoPixel Ring - 16 x 5050 RGB LED with Integrated Drivers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1463",
    "revision": "EAGLE Adafruit NeoPixel Ring 16 rev C.brd; commit 3d43edf8f182",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -22.262999999999998,
      -22.136,
      22.39,
      22.39
    ],
    "board": {
      "width": 44.45,
      "height": 44.45,
      "color": "#246545",
      "outline": "M-22.225 0A22.225 22.225 0 1 0 22.225 0A22.225 22.225 0 1 0 -22.225 0Z"
    },
    "contacts": assets["adafruit-module-1463"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 0,
        "drill": 31.75
      }
    ],
    "artwork": assets["adafruit-module-1463"]["artwork"],
    "backArtwork": assets["adafruit-module-1463"]["backArtwork"],
    "provenance": assets["adafruit-module-1463"]["provenance"],
    "internalConnections": [
      [
        "jp3-1",
        "jp5-1"
      ],
      [
        "jp4-1",
        "jp6-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1463"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Ring/blob/3d43edf8f1828cdbbd85560876027ded6257eae3/Adafruit%20NeoPixel%20Ring%2016%20rev%20C.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Ring/blob/3d43edf8f1828cdbbd85560876027ded6257eae3/Adafruit%20NeoPixel%20Ring%2016%20rev%20C.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-Ring/blob/3d43edf8f1828cdbbd85560876027ded6257eae3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1463",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1463",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1463. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-1426",
    "sku": "ADA1426",
    "name": "NeoPixel Stick - 8 x 5050 RGB LED with Integrated Drivers",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1426",
    "revision": "EAGLE Adafruit NeoPixel 8 Stick.brd; commit 73d3e5537936",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -24.765,
      -3.942,
      24.765,
      3.81
    ],
    "board": {
      "width": 50.8,
      "height": 10.16,
      "color": "#246545",
      "outline": "M-25.4 5.08L25.4 5.08L25.4 -5.08L-25.4 -5.08L-25.4 5.08Z"
    },
    "contacts": assets["adafruit-module-1426"]["contacts"],
    "holes": [
      {
        "x": -12.7,
        "y": -3.048,
        "drill": 2.2
      },
      {
        "x": 12.7,
        "y": -3.048,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-1426"]["artwork"],
    "backArtwork": assets["adafruit-module-1426"]["backArtwork"],
    "provenance": assets["adafruit-module-1426"]["provenance"],
    "internalConnections": [
      [
        "cn1-3",
        "cn2-2"
      ],
      [
        "cn1-4",
        "cn1-1",
        "cn2-4",
        "cn2-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1426"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/NeoPixel-Sticks/blob/73d3e55379367ca0ef051d7c9a8b846b6948b21a/Adafruit%20NeoPixel%208%20Stick.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/NeoPixel-Sticks/blob/73d3e55379367ca0ef051d7c9a8b846b6948b21a/Adafruit%20NeoPixel%208%20Stick.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/NeoPixel-Sticks/blob/73d3e55379367ca0ef051d7c9a8b846b6948b21a/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1426",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA1426",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA1426. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-1487",
    "sku": "ADA1487",
    "name": "Adafruit NeoPixel NeoMatrix 8x8 - 64 RGB LED Pixel Matrix",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1487",
    "revision": "EAGLE Adafruit_NeoMatrix_8x8.brd; commit afa33c7b1e1a",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -34.964999999999996,
      -33.655,
      34.711,
      33.655
    ],
    "backArtworkBounds": [
      -35.937,
      -35.937,
      35.937,
      35.937
    ],
    "board": {
      "width": 71.12,
      "height": 71.12,
      "color": "#246545",
      "outline": "M-35.56 35.56L35.56 35.56L35.56 -35.56L-35.56 -35.56L-35.56 35.56Z"
    },
    "contacts": assets["adafruit-module-1487"]["contacts"],
    "holes": [
      {
        "x": -33.02,
        "y": -17.78,
        "drill": 2.8
      },
      {
        "x": 33.02,
        "y": -17.78,
        "drill": 2.8
      },
      {
        "x": -33.02,
        "y": 17.78,
        "drill": 2.8
      },
      {
        "x": 33.02,
        "y": 17.78,
        "drill": 2.8
      },
      {
        "x": -33.02,
        "y": 0,
        "drill": 2.8
      },
      {
        "x": 33.02,
        "y": 0,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-1487"]["artwork"],
    "backArtwork": assets["adafruit-module-1487"]["backArtwork"],
    "provenance": assets["adafruit-module-1487"]["provenance"],
    "internalConnections": [
      [
        "jp1-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "jp2-3",
        "tp1-p-1",
        "tp2-p-1",
        "tp3-p-1",
        "tp4-p-1",
        "tp5-p-1",
        "tp6-p-1",
        "tp7-p-1",
        "tp8-p-1",
        "tp9-p-1",
        "tp10-p-1",
        "tp11-p-1",
        "tp12-p-1",
        "tp13-p-1",
        "tp14-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1487"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-8x8-Matrix/blob/afa33c7b1e1a1a4d74bcbe9e3e798099545cdf91/Adafruit_NeoMatrix_8x8.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-8x8-Matrix/blob/afa33c7b1e1a1a4d74bcbe9e3e798099545cdf91/Adafruit_NeoMatrix_8x8.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-8x8-Matrix/blob/afa33c7b1e1a1a4d74bcbe9e3e798099545cdf91/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1487",
      "status": "Official Adafruit stock feed reported 43 available.",
      "sku": "ADA1487",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "43"
    },
    "description": "Adafruit ADA1487. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2946",
    "sku": "ADA2946",
    "name": "Adafruit 16x9 Charlieplexed PWM LED Matrix Driver - IS31FL3731",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2946",
    "revision": "EAGLE Adafruit IS31FL3731 STEMMA QT.brd; commit 6293e5aa3d88",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -15.686,
      -6.95,
      21.049,
      6.85
    ],
    "board": {
      "width": 43.18,
      "height": 27.94,
      "color": "#246545",
      "outline": "M-21.59 -11.43A2.54 2.54 0 0 1 -19.05 -13.97L19.05 -13.97A2.54 2.54 0 0 1 21.59 -11.43L21.59 11.43A2.54 2.54 0 0 1 19.05 13.97L-19.05 13.97A2.54 2.54 0 0 1 -21.59 11.43L-21.59 -11.43Z"
    },
    "contacts": assets["adafruit-module-2946"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": 11.43,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": 11.43,
        "drill": 2.5
      },
      {
        "x": -19.05,
        "y": -11.43,
        "drill": 2.5
      },
      {
        "x": 19.05,
        "y": -11.43,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2946"]["artwork"],
    "backArtwork": assets["adafruit-module-2946"]["backArtwork"],
    "provenance": assets["adafruit-module-2946"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "jp5-1",
        "conn1-2",
        "conn2-2"
      ],
      [
        "jp2-2",
        "jp5-2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "conn2-1",
        "conn2-mt1",
        "conn2-mt2"
      ],
      [
        "jp2-3",
        "jp5-3",
        "conn1-4",
        "conn2-4"
      ],
      [
        "jp2-4",
        "jp5-4",
        "conn1-3",
        "conn2-3"
      ],
      [
        "jp4-10",
        "jp5-7"
      ],
      [
        "jp4-11",
        "jp5-6"
      ],
      [
        "jp4-13",
        "jp5-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2946"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3731-CharliePlex-LED-Breakout-PCB/blob/6293e5aa3d88caab44292709fef00a5e12c1bef6/Adafruit%20IS31FL3731%20STEMMA%20QT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3731-CharliePlex-LED-Breakout-PCB/blob/6293e5aa3d88caab44292709fef00a5e12c1bef6/Adafruit%20IS31FL3731%20STEMMA%20QT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-IS31FL3731-CharliePlex-LED-Breakout-PCB/blob/6293e5aa3d88caab44292709fef00a5e12c1bef6/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2946",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2946",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2946. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3249",
    "mountingReview": {
      "contactIds": ["jp9-1", "jp9-2", "jp9-3", "jp9-4", "jp9-5", "jp9-6", "jp9-7", "jp9-8", "jp9-9", "jp12-1", "jp12-2", "jp12-3", "jp12-4", "jp12-5", "jp12-6", "jp12-7", "jp12-8", "jp12-9", "jp12-10"],
      "source": {"label": "Adafruit ADA3249: EAGLE Adafruit NeoPXL8 M0 Wing.brd; commit 1aa9e3e82c58 header geometry", "url": "https://github.com/adafruit/Adafruit-NeoPXL8-PCBs/blob/1aa9e3e82c5872db786e047b8eb1b8fadaa7e802/Adafruit%20NeoPXL8%20M0%20Wing.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP9", "count": 9, "package": "1X09_ROUND_70"}, {"id": "JP12", "count": 10, "package": "1X10_ROUND"}],
        "boardSha256": "39872152a2de53e956761e84ec784da1a9f0217fd79b6883be6708bbac6900c3"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3249",
    "name": "Adafruit NeoPXL8 FeatherWing for Feather M0 - 8 x DMA NeoPixels!",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3249",
    "revision": "EAGLE Adafruit NeoPXL8 M0 Wing.brd; commit 1aa9e3e82c58",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -25.279999999999998,
      -7.79,
      25.153,
      7.79
    ],
    "backArtworkBounds": [
      -21.413999999999998,
      -10.745999999999999,
      19.889,
      5.247
    ],
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89Z"
    },
    "contacts": assets["adafruit-module-3249"]["contacts"],
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
        "x": -15.24,
        "y": 5.715,
        "drill": 3.302
      },
      {
        "x": -15.34,
        "y": -5.715,
        "drill": 3.302
      },
      {
        "x": 15.113,
        "y": -5.715,
        "drill": 3.302
      },
      {
        "x": 15.213,
        "y": 5.715,
        "drill": 3.302
      }
    ],
    "artwork": assets["adafruit-module-3249"]["artwork"],
    "backArtwork": assets["adafruit-module-3249"]["backArtwork"],
    "provenance": assets["adafruit-module-3249"]["provenance"],
    "internalConnections": [
      [
        "ms1-28",
        "jp9-1"
      ],
      [
        "ms1-27",
        "jp9-2"
      ],
      [
        "ms1-26",
        "jp9-3"
      ],
      [
        "ms1-25",
        "jp9-4"
      ],
      [
        "ms1-24",
        "jp9-5"
      ],
      [
        "ms1-23",
        "jp9-6"
      ],
      [
        "ms1-22",
        "jp9-7"
      ],
      [
        "ms1-21",
        "jp9-8"
      ],
      [
        "ms1-20",
        "jp9-9"
      ],
      [
        "ms1-19",
        "jp8-1"
      ],
      [
        "ms1-18",
        "jp7-1"
      ],
      [
        "ms1-17",
        "jp6-1"
      ],
      [
        "ms1-5",
        "jp12-9"
      ],
      [
        "ms1-6",
        "jp12-8"
      ],
      [
        "ms1-7",
        "jp12-7"
      ],
      [
        "ms1-8",
        "jp12-6"
      ],
      [
        "ms1-9",
        "jp12-5"
      ],
      [
        "ms1-10",
        "jp12-4"
      ],
      [
        "ms1-11",
        "jp12-3"
      ],
      [
        "ms1-12",
        "jp12-2"
      ],
      [
        "ms1-13",
        "jp12-1"
      ],
      [
        "ms1-14",
        "jp11-1"
      ],
      [
        "ms1-15",
        "jp10-1"
      ],
      [
        "ms1-16",
        "jp1-1"
      ],
      [
        "ms1-4",
        "neo_out-1",
        "neo_out-3",
        "neo_out-5",
        "neo_out-7",
        "neo_out-9",
        "neo_out-11",
        "neo_out-13",
        "neo_out-15",
        "cn1-1",
        "cn1-3",
        "cn1-5",
        "cn1-7",
        "cn2-1",
        "cn2-3",
        "cn2-5",
        "cn2-7",
        "jp12-10"
      ],
      [
        "ms1-3",
        "jp5-1"
      ],
      [
        "ms1-2",
        "jp3-1"
      ],
      [
        "ms1-1",
        "jp2-1"
      ],
      [
        "neo_out-2",
        "cn1-2"
      ],
      [
        "neo_out-4",
        "cn1-4"
      ],
      [
        "neo_out-6",
        "cn1-6"
      ],
      [
        "neo_out-8",
        "cn1-8"
      ],
      [
        "neo_out-10",
        "cn2-2"
      ],
      [
        "neo_out-12",
        "cn2-4"
      ],
      [
        "neo_out-14",
        "cn2-6"
      ],
      [
        "neo_out-16",
        "cn2-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3249"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoPXL8-PCBs/blob/1aa9e3e82c5872db786e047b8eb1b8fadaa7e802/Adafruit%20NeoPXL8%20M0%20Wing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoPXL8-PCBs/blob/1aa9e3e82c5872db786e047b8eb1b8fadaa7e802/Adafruit%20NeoPXL8%20M0%20Wing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoPXL8-PCBs/blob/1aa9e3e82c5872db786e047b8eb1b8fadaa7e802/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3249",
      "status": "Official Adafruit stock feed reported 30 available.",
      "sku": "ADA3249",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "30"
    },
    "description": "Adafruit ADA3249. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2945",
    "sku": "ADA2945",
    "name": "NeoPixel FeatherWing - 4x8 RGB LED Add-on For All Feather Boards",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2945",
    "revision": "EAGLE Adafruit NeoPixel FeatherWing.brd; commit 3b80152edf18",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89Z"
    },
    "contacts": assets["adafruit-module-2945"]["contacts"],
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
    "artwork": assets["adafruit-module-2945"]["artwork"],
    "backArtwork": assets["adafruit-module-2945"]["backArtwork"],
    "artworkBounds": [
      -24.828,
      -8.543999999999999,
      24.9334,
      8.671
    ],
    "backArtworkBounds": [
      -9.946,
      -9.311,
      20.106,
      9.311
    ],
    "provenance": assets["adafruit-module-2945"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2945"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-FeatherWing-PCB/blob/3b80152edf1808446eab953d2f7a7b06b433c199/Adafruit%20NeoPixel%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-FeatherWing-PCB/blob/3b80152edf1808446eab953d2f7a7b06b433c199/Adafruit%20NeoPixel%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-NeoPixel-FeatherWing-PCB/blob/3b80152edf1808446eab953d2f7a7b06b433c199/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2945",
      "status": "Official Adafruit stock feed reported 17 available.",
      "sku": "ADA2945",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "17"
    },
    "description": "Adafruit ADA2945. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3467",
    "sku": "ADA3467",
    "name": "Adafruit CharliePlex LED Matrix Bonnet - 8x16 Blue LEDs",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3467",
    "revision": "EAGLE Adafruit CharliePlex Bonnet.brd; commit e6c0dc1cc87f",
    "category": "Indicators",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 65,
      "height": 30.6604,
      "color": "#246545",
      "outline": "M-32.5 12.3302A3.0 3.0 0 0 0 -29.5 15.3302L29.5 15.3302A3.0 3.0 0 0 0 32.5 12.3302L32.5 -12.3302A3.0 3.0 0 0 0 29.5 -15.3302L-29.5 -15.3302A3.0 3.0 0 0 0 -32.5 -12.3302L-32.5 12.3302Z"
    },
    "contacts": assets["adafruit-module-3467"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -11.1698,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 11.8302,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": 11.8302,
        "drill": 2.8
      }
    ],
    "artwork": assets["adafruit-module-3467"]["artwork"],
    "backArtwork": assets["adafruit-module-3467"]["backArtwork"],
    "artworkBounds": [
      -29.877499999999998,
      -8.423817,
      25.099518,
      14.547818
    ],
    "backArtworkBounds": [
      -27.079,
      3.7332,
      -23.697,
      5.8452
    ],
    "provenance": assets["adafruit-module-3467"]["provenance"],
    "internalConnections": [
      [
        "rpi1-1",
        "rpi1-17",
        "rpi1-s1",
        "rpi1-s17"
      ],
      [
        "rpi1-2",
        "rpi1-4",
        "rpi1-s2",
        "rpi1-s4"
      ],
      [
        "rpi1-3",
        "rpi1-s3"
      ],
      [
        "rpi1-5",
        "rpi1-s5"
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
        "rpi1-s6",
        "rpi1-s9",
        "rpi1-s14",
        "rpi1-s20",
        "rpi1-s25",
        "rpi1-s30",
        "rpi1-s34",
        "rpi1-s39"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3467"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CharliePlex-Bonnet-PCBs/blob/e6c0dc1cc87f6add9272260db3fe237371e3ac52/Adafruit%20CharliePlex%20Bonnet.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CharliePlex-Bonnet-PCBs/blob/e6c0dc1cc87f6add9272260db3fe237371e3ac52/Adafruit%20CharliePlex%20Bonnet.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CharliePlex-Bonnet-PCBs/blob/e6c0dc1cc87f6add9272260db3fe237371e3ac52/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3467",
      "status": "Official Adafruit stock feed reported 37 available.",
      "sku": "ADA3467",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "37"
    },
    "description": "Adafruit ADA3467. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
