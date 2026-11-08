import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-5325",
    "sku": "ADA5325",
    "name": "Adafruit QT Py ESP32-S2 WiFi Dev Board with STEMMA QT",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5325",
    "revision": "EAGLE Adafruit QT Py ESP32-S2 Rev C.brd; commit 7df4eac2c0b9",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -6.5040000000000004,
      -11.4065,
      5.3244,
      10.157
    ],
    "backArtworkBounds": [
      -5.4915,
      -9.612499999999999,
      6.2645,
      8.8719
    ],
    "board": {
      "width": 17.78,
      "height": 20.701,
      "color": "#246545",
      "outline": "M8.89 7.8105A2.54 2.54 0 0 1 6.35 10.3505L-6.35 10.3505A2.54 2.54 0 0 1 -8.89 7.8105L-8.89 -7.8105A2.54 2.54 0 0 1 -6.35 -10.3505L6.35 -10.3505A2.54 2.54 0 0 1 8.89 -7.8105L8.89 7.8105Z"
    },
    "contacts": assets["adafruit-module-5325"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -5.0865,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -5.0865,
        "drill": 0.65
      }
    ],
    "artwork": assets["adafruit-module-5325"]["artwork"],
    "backArtwork": assets["adafruit-module-5325"]["backArtwork"],
    "provenance": assets["adafruit-module-5325"]["provenance"],
    "internalConnections": [
      [
        "x6-a1b12",
        "x6-b1a12",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "jp3-6",
        "jp3-6c",
        "gnd-p-1"
      ],
      [
        "x6-a4b9",
        "x6-b4a9"
      ],
      [
        "x6-b7",
        "x6-a7"
      ],
      [
        "x6-a6",
        "x6-b6"
      ],
      [
        "jp1-1",
        "jp1-1c"
      ],
      [
        "jp1-2",
        "jp1-2c"
      ],
      [
        "jp1-3",
        "jp1-3c"
      ],
      [
        "jp1-4",
        "jp1-4c"
      ],
      [
        "jp1-5",
        "jp1-5c"
      ],
      [
        "jp1-6",
        "jp1-6c"
      ],
      [
        "jp1-7",
        "jp1-7c"
      ],
      [
        "conn1-2",
        "jp3-5",
        "jp3-5c"
      ],
      [
        "jp3-1",
        "jp3-1c"
      ],
      [
        "jp3-2",
        "jp3-2c"
      ],
      [
        "jp3-3",
        "jp3-3c"
      ],
      [
        "jp3-4",
        "jp3-4c"
      ],
      [
        "jp3-7",
        "jp3-7c"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5325"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-S2-PCB/blob/7df4eac2c0b9a73ba966766ae6027b0a4d8a6901/Adafruit%20QT%20Py%20ESP32-S2%20Rev%20C.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-S2-PCB/blob/7df4eac2c0b9a73ba966766ae6027b0a4d8a6901/Adafruit%20QT%20Py%20ESP32-S2%20Rev%20C.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-S2-PCB/blob/7df4eac2c0b9a73ba966766ae6027b0a4d8a6901/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5325",
      "status": "Official Adafruit stock feed reported 41 available.",
      "sku": "ADA5325",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "41"
    },
    "description": "Adafruit ADA5325. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-4500",
    "sku": "ADA4500",
    "name": "Adafruit CLUE - nRF52840 Express with Bluetooth® LE",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4500",
    "revision": "EAGLE Adafruit CLUE nRF52840 Express.brd; commit ce323d9f40e6",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 51.4,
      "height": 42,
      "color": "#246545",
      "outline": "M-22.7 -21.0A3.0 3.0 0 0 0 -25.7 -18.0L-25.7 18.0A3.0 3.0 0 0 0 -22.7 21.0L22.7 21.0A3.0 3.0 0 0 0 25.7 18.0L25.7 -18.0A3.0 3.0 0 0 0 22.7 -21.0L-22.7 -21.0Z"
    },
    "contacts": assets["adafruit-module-4500"]["contacts"],
    "holes": [
      {
        "x": 2.05,
        "y": -16.992,
        "drill": 0.7
      },
      {
        "x": -1.85,
        "y": -16.992,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-4500"]["artwork"],
    "backArtwork": assets["adafruit-module-4500"]["backArtwork"],
    "artworkBounds": [
      -23.49,
      -21.332,
      24.7002,
      10.7786
    ],
    "backArtworkBounds": [
      -22.84,
      -20.459,
      22.84,
      3.04
    ],
    "provenance": assets["adafruit-module-4500"]["provenance"],
    "internalConnections": [
      [
        "x3-1",
        "x1-sprt-4",
        "x1-sprt-3",
        "x1-sprt-1",
        "x1-sprt-2",
        "x1-gnd",
        "x1-base-1",
        "x1-base-2",
        "mb1-gnd-1",
        "mb1-gnd",
        "mb1-gnd-2",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2"
      ],
      [
        "mb1-plus3v3-1",
        "mb1-plus3v3",
        "mb1-plus3v3-2",
        "conn1-2"
      ],
      [
        "mb1-p19",
        "conn1-4"
      ],
      [
        "mb1-p20",
        "conn1-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4500"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CLUE-PCB/blob/ce323d9f40e63fbe0ae231c9287abce5d2070663/Adafruit%20CLUE%20nRF52840%20Express.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CLUE-PCB/blob/ce323d9f40e63fbe0ae231c9287abce5d2070663/Adafruit%20CLUE%20nRF52840%20Express.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CLUE-PCB/blob/ce323d9f40e63fbe0ae231c9287abce5d2070663/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4500",
      "status": "Official Adafruit stock feed reported 1 available.",
      "sku": "ADA4500",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "1"
    },
    "description": "Adafruit ADA4500. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-5786",
    "sku": "ADA5786",
    "name": "Adafruit Metro RP2040",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5786",
    "revision": "EAGLE Adafruit Metro RP2040.brd; commit 9fe571ea428c",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 68.58,
      "height": 53.34,
      "color": "#246545",
      "outline": "M30.226 -26.67L31.75 -25.146L31.75 -13.716L34.29 -11.176L34.29 21.59L31.75 24.13L31.75 25.67A1.0 1.0 0 0 1 30.75 26.67L-8.763 26.67L-9.906 25.527L-14.859 25.527L-16.002 26.67L-33.29 26.67A1.0 1.0 0 0 1 -34.29 25.67L-34.29 -25.67A1.0 1.0 0 0 1 -33.29 -26.67L30.226 -26.67Z"
    },
    "contacts": assets["adafruit-module-5786"]["contacts"],
    "holes": [
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.175
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.175
      },
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.175
      },
      {
        "x": -20.32,
        "y": 24.13,
        "drill": 3.175
      },
      {
        "x": -13.8444,
        "y": 23.8252,
        "drill": 0.9
      },
      {
        "x": -10.8444,
        "y": 23.8252,
        "drill": 0.9
      },
      {
        "x": -28.9625,
        "y": -8.54,
        "drill": 0.65
      },
      {
        "x": -28.9625,
        "y": -14.32,
        "drill": 0.65
      },
      {
        "x": 16.3195,
        "y": 10.287,
        "drill": 1
      },
      {
        "x": 16.3195,
        "y": 14.097,
        "drill": 1
      },
      {
        "x": -32.812,
        "y": -21.978,
        "drill": 1
      },
      {
        "x": -32.812,
        "y": -19.678,
        "drill": 1
      },
      {
        "x": 30.272,
        "y": -15.36,
        "drill": 1
      },
      {
        "x": 30.272,
        "y": -17.66,
        "drill": 1
      },
      {
        "x": 22.884,
        "y": -16.256,
        "drill": 1
      },
      {
        "x": 25.884,
        "y": -16.256,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-5786"]["artwork"],
    "backArtwork": assets["adafruit-module-5786"]["backArtwork"],
    "artworkBounds": [
      -38.444,
      -26.128999999999998,
      33.622,
      26.6652
    ],
    "provenance": assets["adafruit-module-5786"]["provenance"],
    "internalConnections": [
      [
        "icsp-2",
        "power-5"
      ],
      [
        "icsp-4",
        "x1-3"
      ],
      [
        "icsp-6",
        "ioh-4",
        "power-6",
        "power-7",
        "x5-gnd",
        "x5-gndbreak",
        "conn1-1",
        "conn1-mt1",
        "conn1-mt2",
        "x3-a1b12",
        "x3-b1a12",
        "swd-3",
        "swd-5",
        "swd-7",
        "swd-9",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "debug-2",
        "debug-mt1",
        "debug-mt2"
      ],
      [
        "icsp-1",
        "x1-7"
      ],
      [
        "icsp-3",
        "x1-5"
      ],
      [
        "icsp-5",
        "power-3",
        "swd-10"
      ],
      [
        "ioh-1",
        "conn1-4"
      ],
      [
        "ioh-2",
        "conn1-3"
      ],
      [
        "ioh-3",
        "power-2",
        "power-4",
        "conn1-2",
        "swd-1",
        "x1-4"
      ],
      [
        "x3-a4b9",
        "x3-b4a9"
      ],
      [
        "x3-b7",
        "x3-a7",
        "d-1-tp"
      ],
      [
        "x3-a6",
        "x3-b6",
        "dplus1-tp"
      ],
      [
        "swd-2",
        "debug-3"
      ],
      [
        "swd-4",
        "debug-1"
      ],
      [
        "x1-cd1",
        "x1-cd2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5786"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Metro-RP2040-PCB/blob/9fe571ea428c5c2bc1b7593dadf61e8ef804f480/Adafruit%20Metro%20RP2040.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Metro-RP2040-PCB/blob/9fe571ea428c5c2bc1b7593dadf61e8ef804f480/Adafruit%20Metro%20RP2040.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Metro-RP2040-PCB/blob/9fe571ea428c5c2bc1b7593dadf61e8ef804f480/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5786",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5786",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5786. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3405",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12"],
      "source": {"label": "Adafruit ADA3405: EAGLE Adafruit HUZZAH32 ESP32 Feather.brd; commit e23514c6f9e1 header geometry", "url": "https://github.com/adafruit/Adafruit-HUZZAH32-ESP32-Feather-PCB/blob/e23514c6f9e124a60f9d1de6567c791561b43e73/Adafruit%20HUZZAH32%20ESP32%20Feather.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16_ROUND_MIN"}, {"id": "JP3", "count": 12, "package": "1X12_ROUND_MIN"}],
        "boardSha256": "992bffd6f20cd5fb8087a5008e6154a038db17f7a3e3fe9dad4bcff48adc0200"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86},
        {"x": -0.046, "y": -9.0, "width": 25.5, "height": 18.0},
        {"x": -25.855, "y": -3.975, "width": 6.0, "height": 8.325}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3405",
    "name": "Adafruit HUZZAH32 – ESP32 Feather Board",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3405",
    "revision": "EAGLE Adafruit HUZZAH32 ESP32 Feather.brd; commit e23514c6f9e1",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.54L-24.892 -2.032L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3405"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": 9.5885,
        "drill": 2.2
      },
      {
        "x": 22.86,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-3405"]["artwork"],
    "backArtwork": assets["adafruit-module-3405"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      25.494,
      9.04
    ],
    "provenance": assets["adafruit-module-3405"]["provenance"],
    "internalConnections": [
      [
        "jp1-13",
        "x1-1",
        "x4-sprt-4",
        "x4-sprt-3",
        "x4-sprt-1",
        "x4-sprt-2",
        "x4-gnd",
        "x4-base-1",
        "x4-base-2"
      ],
      [
        "x1-2",
        "jp3-1"
      ],
      [
        "jp3-3",
        "x4-vbus"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3405"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-HUZZAH32-ESP32-Feather-PCB/blob/e23514c6f9e124a60f9d1de6567c791561b43e73/Adafruit%20HUZZAH32%20ESP32%20Feather.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-HUZZAH32-ESP32-Feather-PCB/blob/e23514c6f9e124a60f9d1de6567c791561b43e73/Adafruit%20HUZZAH32%20ESP32%20Feather.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-HUZZAH32-ESP32-Feather-PCB/blob/e23514c6f9e124a60f9d1de6567c791561b43e73/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3405",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3405",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3405. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3458",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12"],
      "source": {"label": "Adafruit ADA3458: EAGLE Adafruit Feather 328P.brd; commit 62859c243921 header geometry", "url": "https://github.com/adafruit/Adafruit-Feather-328P-PCB/blob/62859c243921da2d1221681373356f1559855cbc/Adafruit%20Feather%20328P.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16_ROUND"}, {"id": "JP3", "count": 12, "package": "1X12_ROUND"}],
        "boardSha256": "da3bf5d00775cd123b660238dfa295a343b72016b7f9919aa3341755c3ebd760"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86},
        {"x": -25.855, "y": -3.975, "width": 6.0, "height": 8.325}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA3458",
    "name": "Adafruit Feather 328P - Atmega328P 3.3V @ 8 MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3458",
    "revision": "EAGLE Adafruit Feather 328P.brd; commit 62859c243921",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.54L-24.892 -2.032L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3458"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": 9.5885,
        "drill": 2.2
      },
      {
        "x": 22.86,
        "y": -9.525,
        "drill": 2.2
      },
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-3458"]["artwork"],
    "backArtwork": assets["adafruit-module-3458"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      9.5395,
      7.698
    ],
    "provenance": assets["adafruit-module-3458"]["provenance"],
    "internalConnections": [
      [
        "jp1-13",
        "x1-1",
        "x4-sprt-4",
        "x4-sprt-3",
        "x4-sprt-1",
        "x4-sprt-2",
        "x4-gnd",
        "x4-base-1",
        "x4-base-2"
      ],
      [
        "x1-2",
        "jp3-1"
      ],
      [
        "jp3-3",
        "x4-vbus"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3458"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-328P-PCB/blob/62859c243921da2d1221681373356f1559855cbc/Adafruit%20Feather%20328P.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-328P-PCB/blob/62859c243921da2d1221681373356f1559855cbc/Adafruit%20Feather%20328P.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-328P-PCB/blob/62859c243921da2d1221681373356f1559855cbc/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3458",
      "status": "Official Adafruit stock feed reported 77 available.",
      "sku": "ADA3458",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "77"
    },
    "description": "Adafruit ADA3458. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2771",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12"],
      "source": {"label": "Adafruit ADA2771: EAGLE Adafruit Feather 32u4 Basic rev B.brd; commit 42d06b39d8af header geometry", "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Basic-Proto-PCB/blob/42d06b39d8afeb23881364d3a9fabe1cc80b6dd5/Adafruit%20Feather%2032u4%20Basic%20rev%20B.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16_ROUND"}, {"id": "JP3", "count": 12, "package": "1X12_ROUND"}],
        "boardSha256": "ef83aadf8d0598e7b205a50def247c2fb806b8ce3fff1b2f74038c0fd24b4a4f"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86},
        {"x": -25.855, "y": -3.975, "width": 6.0, "height": 8.325}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2771",
    "name": "Adafruit Feather 32u4 Basic Proto",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2771",
    "revision": "EAGLE Adafruit Feather 32u4 Basic rev B.brd; commit 42d06b39d8af",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.54L-24.892 -2.032L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-2771"]["contacts"],
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
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-2771"]["artwork"],
    "backArtwork": assets["adafruit-module-2771"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      4.496106,
      7.798406
    ],
    "provenance": assets["adafruit-module-2771"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-1",
        "jp1-13",
        "x1-1"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "x1-2",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2771"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Basic-Proto-PCB/blob/42d06b39d8afeb23881364d3a9fabe1cc80b6dd5/Adafruit%20Feather%2032u4%20Basic%20rev%20B.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Basic-Proto-PCB/blob/42d06b39d8afeb23881364d3a9fabe1cc80b6dd5/Adafruit%20Feather%2032u4%20Basic%20rev%20B.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Basic-Proto-PCB/blob/42d06b39d8afeb23881364d3a9fabe1cc80b6dd5/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2771",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2771",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2771. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3403",
    "sku": "ADA3403",
    "name": "Adafruit Feather M0 Express",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3403",
    "revision": "EAGLE Adafruit Feather M0 Express.brd; commit 5017ef418853",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.54L-24.892 -2.032L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3403"]["contacts"],
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
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-3403"]["artwork"],
    "backArtwork": assets["adafruit-module-3403"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      10.949,
      7.584
    ],
    "provenance": assets["adafruit-module-3403"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-1",
        "jp1-13",
        "x1-1"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "x1-2",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3403"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Express-PCB/blob/5017ef41885371f8a26ba1b8ab9dd700bd7ce655/Adafruit%20Feather%20M0%20Express.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Express-PCB/blob/5017ef41885371f8a26ba1b8ab9dd700bd7ce655/Adafruit%20Feather%20M0%20Express.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Express-PCB/blob/5017ef41885371f8a26ba1b8ab9dd700bd7ce655/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3403",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3403",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3403. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2829",
    "sku": "ADA2829",
    "name": "Adafruit Feather 32u4 Bluefruit LE",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2829",
    "revision": "EAGLE Adafruit Feather 32u4 Bluefruit LE.brd; commit fab08d3f5f07",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.413L-24.892 -1.905L-24.892 1.905L-25.4 2.413L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-2829"]["contacts"],
    "holes": [
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      },
      {
        "x": 20.706,
        "y": 2.2,
        "drill": 0.9
      },
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-2829"]["artwork"],
    "backArtwork": assets["adafruit-module-2829"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      25.396,
      7.838
    ],
    "backArtworkBounds": [
      12.091000000000001,
      0.6649999999999999,
      18.643,
      3.145
    ],
    "provenance": assets["adafruit-module-2829"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-13",
        "x1-1"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "x1-2",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2829"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Bluefruit-LE-PCB/blob/fab08d3f5f0755a29559b81ad54239b746906b56/Adafruit%20Feather%2032u4%20Bluefruit%20LE.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Bluefruit-LE-PCB/blob/fab08d3f5f0755a29559b81ad54239b746906b56/Adafruit%20Feather%2032u4%20Bluefruit%20LE.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Bluefruit-LE-PCB/blob/fab08d3f5f0755a29559b81ad54239b746906b56/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2829",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2829",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2829. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2995",
    "sku": "ADA2995",
    "name": "Adafruit Feather M0 Bluefruit LE",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2995",
    "revision": "EAGLE Adafruit Feather Zero BLE rev A.brd; commit b2e0b3f29305",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.667L-24.892 -2.159L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-2995"]["contacts"],
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
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      },
      {
        "x": 20.706,
        "y": 2.2,
        "drill": 0.9
      }
    ],
    "artwork": assets["adafruit-module-2995"]["artwork"],
    "backArtwork": assets["adafruit-module-2995"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      25.396,
      7.838
    ],
    "backArtworkBounds": [
      12.091000000000001,
      0.6649999999999999,
      18.643,
      3.145
    ],
    "provenance": assets["adafruit-module-2995"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-13",
        "x1-1"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "x1-2",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2995"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Bluefruit-LE-PCB/blob/b2e0b3f2930568da3471d6c42cb4919d573d3481/Adafruit%20Feather%20Zero%20BLE%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Bluefruit-LE-PCB/blob/b2e0b3f2930568da3471d6c42cb4919d573d3481/Adafruit%20Feather%20Zero%20BLE%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-Bluefruit-LE-PCB/blob/b2e0b3f2930568da3471d6c42cb4919d573d3481/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2995",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2995",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2995. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3178",
    "sku": "ADA3178",
    "name": "Adafruit Feather M0 with RFM95 LoRa Radio - 900MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3178",
    "revision": "EAGLE Adafruit Feather M0 RFMxx.brd; commit 1b3616c9daf1",
    "category": "Wireless modules",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.54L-24.892 -2.032L-24.892 2.032L-25.4 2.54L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-3178"]["contacts"],
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
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-3178"]["artwork"],
    "backArtwork": assets["adafruit-module-3178"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      24.83,
      8.14
    ],
    "backArtworkBounds": [
      18.853,
      4.21,
      21.733,
      8.49
    ],
    "provenance": assets["adafruit-module-3178"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-13",
        "x1-1",
        "x4-1",
        "x4-2"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "x1-2",
        "jp3-1"
      ],
      [
        "jp2-1",
        "x4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3178"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-RFM-LoRa-PCB/blob/1b3616c9daf1cd0643bb7f6a98f4e3c71fe16c83/Adafruit%20Feather%20M0%20RFMxx.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-RFM-LoRa-PCB/blob/1b3616c9daf1cd0643bb7f6a98f4e3c71fe16c83/Adafruit%20Feather%20M0%20RFMxx.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-M0-RFM-LoRa-PCB/blob/1b3616c9daf1cd0643bb7f6a98f4e3c71fe16c83/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3178",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3178",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3178. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2795",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7", "jp1-8", "jp1-9", "jp1-10", "jp1-11", "jp1-12", "jp1-13", "jp1-14", "jp1-15", "jp1-16", "jp3-1", "jp3-2", "jp3-3", "jp3-4", "jp3-5", "jp3-6", "jp3-7", "jp3-8", "jp3-9", "jp3-10", "jp3-11", "jp3-12"],
      "source": {"label": "Adafruit ADA2795: EAGLE Adafruit Feather 32u4 Adalogger.brd; commit c7e87d6e0feb header geometry", "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Adalogger-PCB/blob/c7e87d6e0feb5d3e048c3715038c0e4ce71cdfa0/Adafruit%20Feather%2032u4%20Adalogger.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 16, "package": "1X16_ROUND"}, {"id": "JP3", "count": 12, "package": "1X12_ROUND"}],
        "boardSha256": "2d4114b9801c7fb54a7a4b30004daf894802c3752a97dbe67a96cfb64f257026"
      },
      "bodyRegions": [
        {"x": -25.4, "y": -11.43, "width": 50.8, "height": 22.86},
        {"x": 8.409, "y": -7.165, "width": 20.47, "height": 14.2},
        {"x": -25.855, "y": -3.975, "width": 6.0, "height": 8.325}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ADA2795",
    "name": "Adafruit Feather 32u4 Adalogger",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2795",
    "revision": "EAGLE Adafruit Feather 32u4 Adalogger.brd; commit c7e87d6e0feb",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 8.001L24.257 6.858L24.257 -4.191L25.4 -5.334L25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 -2.413L-24.892 -1.905L-24.892 1.905L-25.4 2.413L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43Z"
    },
    "contacts": assets["adafruit-module-2795"]["contacts"],
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
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -20.955,
        "y": -1.95,
        "drill": 0.7
      },
      {
        "x": -20.955,
        "y": 1.95,
        "drill": 0.7
      }
    ],
    "artwork": assets["adafruit-module-2795"]["artwork"],
    "backArtwork": assets["adafruit-module-2795"]["backArtwork"],
    "artworkBounds": [
      -25.895,
      -10.914,
      28.919,
      7.838
    ],
    "provenance": assets["adafruit-module-2795"]["provenance"],
    "internalConnections": [
      [
        "x3-sprt-4",
        "x3-sprt-3",
        "x3-sprt-1",
        "x3-sprt-2",
        "x3-gnd",
        "x3-base-1",
        "x3-base-2",
        "jp1-1",
        "jp1-13",
        "x1-1",
        "x2-mt1",
        "x2-mt2",
        "x2-6"
      ],
      [
        "x3-vbus",
        "jp3-3"
      ],
      [
        "jp1-4",
        "x2-7"
      ],
      [
        "jp1-5",
        "x2-3"
      ],
      [
        "jp1-6",
        "x2-5"
      ],
      [
        "jp1-15",
        "x2-4"
      ],
      [
        "x1-2",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2795"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Adalogger-PCB/blob/c7e87d6e0feb5d3e048c3715038c0e4ce71cdfa0/Adafruit%20Feather%2032u4%20Adalogger.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Adalogger-PCB/blob/c7e87d6e0feb5d3e048c3715038c0e4ce71cdfa0/Adafruit%20Feather%2032u4%20Adalogger.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Feather-32u4-Adalogger-PCB/blob/c7e87d6e0feb5d3e048c3715038c0e4ce71cdfa0/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2795",
      "status": "Official Adafruit stock feed reported 41 available.",
      "sku": "ADA2795",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "41"
    },
    "description": "Adafruit ADA2795. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
