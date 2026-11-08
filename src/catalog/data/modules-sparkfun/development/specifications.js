import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-wrl13711",
    "sku": "WRL-13711",
    "name": "SparkFun ESP8266 Thing - Dev Board",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-esp8266-thing-dev-board.html",
    "revision": "EAGLE ESP8266-Thing-Dev.brd; commit e2f5277a9f49",
    "category": "Microcontrollers",
    "board": {
      "width": 55.372,
      "height": 25.908,
      "color": "#9b242d",
      "outline": "M-27.686 12.954L-27.686 -12.954L27.686 -12.954L27.686 12.954L-27.686 12.954Z"
    },
    "contacts": assets["sparkfun-module-wrl13711"]["contacts"],
    "holes": [
      {
        "x": -23.327,
        "y": 4.45,
        "drill": 0.85
      },
      {
        "x": -23.327,
        "y": 8.25,
        "drill": 0.85
      },
      {
        "x": 16.129,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 16.129,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -15.621,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": -15.621,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -24.614,
        "y": -9.906,
        "drill": 0.9
      },
      {
        "x": -21.614,
        "y": -9.906,
        "drill": 0.9
      }
    ],
    "artwork": assets["sparkfun-module-wrl13711"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl13711"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-wrl13711"]["provenance"],
    "internalConnections": [
      [
        "jp1-gnd1",
        "jp1-shield1",
        "jp1-shield3",
        "jp1-shield2",
        "jp2-1",
        "jp2-10",
        "jp3-1",
        "jp4-1",
        "jp5-1",
        "jp6-1",
        "j1-p-1",
        "j1-p-2"
      ],
      [
        "jp3-2",
        "jp4-2",
        "jp5-2",
        "jp6-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-esp8266-thing-dev-board.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP8266_Thing_Dev/blob/e2f5277a9f49694436a95733a86f40216b845bbd/Hardware/ESP8266-Thing-Dev.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP8266_Thing_Dev/blob/e2f5277a9f49694436a95733a86f40216b845bbd/Hardware/ESP8266-Thing-Dev.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP8266_Thing_Dev/blob/e2f5277a9f49694436a95733a86f40216b845bbd/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-esp8266-thing-dev-board.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-13711",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-13711. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -28.567,
      -12.9695,
      27.626,
      12.8605
    ],
    "backArtworkBounds": [
      -9.1205,
      -7.406,
      -6.8815,
      -5.294
    ]
  },
  {
    "id": "sparkfun-module-dev15123",
    "sku": "DEV-15123",
    "name": "SparkFun RedBoard Qwiic",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-redboard-qwiic.html",
    "revision": "EAGLE RedBoard.brd; commit 498b7cf536c7",
    "category": "Microcontrollers",
    "board": {
      "width": 68.58,
      "height": 53.34,
      "color": "#9b242d",
      "outline": "M30.226 -26.67L31.75 -25.146L31.75 -13.716L34.29 -11.176L34.29 21.59L31.75 24.13L31.75 26.67L-34.29 26.67L-34.29 -26.67L30.226 -26.67Z"
    },
    "contacts": assets["sparkfun-module-dev15123"]["contacts"],
    "holes": [
      {
        "x": -20.32,
        "y": 24.13,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.302
      },
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.302
      },
      {
        "x": -29.21,
        "y": -14.392,
        "drill": 0.9
      },
      {
        "x": -29.21,
        "y": -9.992,
        "drill": 0.9
      },
      {
        "x": 30.48,
        "y": -2.54,
        "drill": 1.8
      },
      {
        "x": 30.48,
        "y": 0,
        "drill": 1.8
      },
      {
        "x": -32.258,
        "y": 18.034,
        "drill": 2.032
      },
      {
        "x": -27.686,
        "y": 18.034,
        "drill": 2.032
      }
    ],
    "artwork": assets["sparkfun-module-dev15123"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15123"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-dev15123"]["provenance"],
    "internalConnections": [
      [
        "jp2-7b",
        "jp2-7a",
        "j2-4",
        "tp2-p-1"
      ],
      [
        "jp2-5b",
        "jp2-5a",
        "j2-3",
        "tp5-p-1"
      ],
      [
        "jp2-3b",
        "jp2-3a"
      ],
      [
        "jp2-8a",
        "jp2-8b"
      ],
      [
        "jp2-6a",
        "jp2-6b",
        "j2-1",
        "tp4-p-1"
      ],
      [
        "jp2-4a",
        "jp2-4b",
        "jp10-3b",
        "jp10-2b",
        "jp10-2a",
        "jp10-3a",
        "jp12-gnd",
        "jp12-mtn3",
        "jp12-mtn1",
        "jp12-mtn4",
        "jp12-mtn2",
        "j2-6",
        "tp3-p-1",
        "j3-gnd"
      ],
      [
        "jp2-2a",
        "jp2-2b",
        "jp13-5a",
        "jp13-5b"
      ],
      [
        "jp2-1a",
        "jp2-1b",
        "jp13-6a",
        "jp13-6b"
      ],
      [
        "jp2-9a",
        "jp2-9b"
      ],
      [
        "jp2-10a",
        "jp2-10b"
      ],
      [
        "jp10-7b",
        "jp10-4b",
        "jp10-4a",
        "jp10-7a",
        "j2-2",
        "tp1-p-1"
      ],
      [
        "jp10-5b",
        "jp10-5a"
      ],
      [
        "jp10-6b",
        "jp10-6a",
        "j2-5",
        "tp6-p-1"
      ],
      [
        "jp10-1a",
        "jp10-1b"
      ],
      [
        "jp11-7b",
        "jp11-7a"
      ],
      [
        "jp11-5b",
        "jp11-5a"
      ],
      [
        "jp11-3b",
        "jp11-3a"
      ],
      [
        "jp11-8b",
        "jp11-8a"
      ],
      [
        "jp11-6b",
        "jp11-6a"
      ],
      [
        "jp11-4b",
        "jp11-4a"
      ],
      [
        "jp11-2b",
        "jp11-2a"
      ],
      [
        "jp11-1a",
        "jp11-1b"
      ],
      [
        "jp13-3a",
        "jp13-3b"
      ],
      [
        "jp13-1a",
        "jp13-1b"
      ],
      [
        "jp13-4a",
        "jp13-4b"
      ],
      [
        "jp13-2a",
        "jp13-2b"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-redboard-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RedBoard/blob/498b7cf536c74f1a9a3a2315bf9f8feb0d7169c9/Hardware/RedBoard.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RedBoard/blob/498b7cf536c74f1a9a3a2315bf9f8feb0d7169c9/Hardware/RedBoard.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RedBoard/blob/498b7cf536c74f1a9a3a2315bf9f8feb0d7169c9/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-redboard-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15123",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15123. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -37.298,
      -25.439999999999998,
      33.06,
      25.46
    ]
  },
  {
    "id": "sparkfun-module-wrl13231",
    "sku": "WRL-13231",
    "name": "SparkFun ESP8266 Thing",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-esp8266-thing.html",
    "revision": "EAGLE SparkFun_ESP8266_Thing_V10a.brd; commit 9f412e78a485",
    "category": "Microcontrollers",
    "board": {
      "width": 55.372,
      "height": 25.908,
      "color": "#9b242d",
      "outline": "M-27.686 12.954L-27.686 -12.954L27.686 -12.954L27.686 12.954L-27.686 12.954Z"
    },
    "contacts": assets["sparkfun-module-wrl13231"]["contacts"],
    "holes": [
      {
        "x": -23.2635,
        "y": 3.18,
        "drill": 0.85
      },
      {
        "x": -23.2635,
        "y": 6.98,
        "drill": 0.85
      },
      {
        "x": -15.621,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 16.129,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 16.129,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -15.621,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -24.614,
        "y": -10.16,
        "drill": 0.9
      },
      {
        "x": -21.614,
        "y": -10.16,
        "drill": 0.9
      }
    ],
    "artwork": assets["sparkfun-module-wrl13231"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl13231"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl13231"]["provenance"],
    "internalConnections": [
      [
        "jp4-gnd",
        "j1-p-1",
        "j1-p-2",
        "jp5-1",
        "jp1-gnd1",
        "jp1-shield1",
        "jp1-shield3",
        "jp1-shield2",
        "jp2-1",
        "jp3-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-esp8266-thing.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP8266_Thing/blob/9f412e78a48587f9689b4d6eafaf941f308822ea/Hardware/SparkFun_ESP8266_Thing_V10a.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP8266_Thing/blob/9f412e78a48587f9689b4d6eafaf941f308822ea/Hardware/SparkFun_ESP8266_Thing_V10a.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP8266_Thing/blob/9f412e78a48587f9689b4d6eafaf941f308822ea/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-esp8266-thing.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-13231",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-13231. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -28.5035,
      -13,
      27.626,
      12.8605
    ],
    "backArtworkBounds": [
      -12.485999999999999,
      -12.739999999999998,
      12.994,
      12.74
    ]
  },
  {
    "id": "sparkfun-module-wrl15663",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8", "j2-9", "j2-10", "j2-11", "j2-12", "j4-1", "j4-2", "j4-3", "j4-4", "j4-5", "j4-6", "j4-7", "j4-8", "j4-9", "j4-10", "j4-11", "j4-12", "j4-13", "j4-14", "j4-15", "j4-16"],
      "source": {"label": "SparkFun WRL-15663: EAGLE ESP32_Thing_Plus.brd; commit ed6d941070fa header geometry", "url": "https://github.com/sparkfun/ESP32_Thing_Plus/blob/ed6d941070fa7756af6d2e24bdcfed8e27b2734a/Hardware/ESP32_Thing_Plus.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 12, "package": "1X12_SM_SQ_NOSILK"}, {"id": "J4", "count": 16, "package": "1X16_SM_SQ_NOSILK"}],
        "boardSha256": "2d8ad41aa8942343e4000bf90b9a1adba8d3b31a5b996843e28cd5cdbba27a75"
      },
      "bodyRegions": [
        {"x": -11.43, "y": -29.21, "width": 22.86, "height": 58.42},
        {"x": -9.127, "y": -29.297, "width": 18.254, "height": 25.754},
        {"x": -3.999, "y": 24.9932, "width": 8.04, "height": 5.62}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "WRL-15663",
    "name": "SparkFun Thing Plus - ESP32 WROOM (Micro-B)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-micro-b.html",
    "revision": "EAGLE ESP32_Thing_Plus.brd; commit ed6d941070fa",
    "category": "Microcontrollers",
    "board": {
      "width": 22.86,
      "height": 58.42,
      "color": "#9b242d",
      "outline": "M11.43 -26.67A2.54 2.54 0 0 0 8.89 -29.21L-8.89 -29.21A2.54 2.54 0 0 0 -11.43 -26.67L-11.43 26.67A2.54 2.54 0 0 0 -8.89 29.21L8.89 29.21A2.54 2.54 0 0 0 11.43 26.67L11.43 -26.67Z"
    },
    "contacts": assets["sparkfun-module-wrl15663"]["contacts"],
    "holes": [
      {
        "x": -8.89,
        "y": 26.67,
        "drill": 3.048
      },
      {
        "x": 8.89,
        "y": 26.67,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-wrl15663"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl15663"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-wrl15663"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "j3-1",
        "j4-4",
        "j5-gnd"
      ],
      [
        "jp2-2",
        "j2-1"
      ],
      [
        "j3-2",
        "j4-2"
      ],
      [
        "j3-3",
        "j2-12"
      ],
      [
        "j3-4",
        "j2-11"
      ],
      [
        "j2-3",
        "j5-vbus"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-micro-b.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus/blob/ed6d941070fa7756af6d2e24bdcfed8e27b2734a/Hardware/ESP32_Thing_Plus.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus/blob/ed6d941070fa7756af6d2e24bdcfed8e27b2734a/Hardware/ESP32_Thing_Plus.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus/blob/ed6d941070fa7756af6d2e24bdcfed8e27b2734a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-micro-b.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-15663",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-15663. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.9902,
      -29.337,
      9.167,
      30.6532
    ]
  },
  {
    "id": "sparkfun-module-dev13907",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4", "j1-5", "j1-6", "j1-7", "j1-8", "j1-9", "j1-10", "j1-11", "j1-12", "j1-13", "j1-14", "j1-15", "j1-16", "j1-17", "j1-18", "j1-19", "j1-20", "j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8", "j2-9", "j2-10", "j2-11", "j2-12", "j2-13", "j2-14", "j2-15", "j2-16", "j2-17", "j2-18", "j2-19", "j2-20"],
      "source": {"label": "SparkFun DEV-13907: EAGLE esp32-thing.brd; commit fb2dac4c1c49 header geometry", "url": "https://github.com/sparkfun/ESP32_Thing/blob/fb2dac4c1c493854c3db8a74acc9377a38db2b4a/Hardware/esp32-thing.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 20, "package": "1X20_NOSILK"}, {"id": "J2", "count": 20, "package": "1X20_NOSILK"}],
        "boardSha256": "35caa64b3d683df10ced0ecfc5b1c8b9020ced8027c273202ede50298bb30c88"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -29.464, "width": 25.4, "height": 58.928},
        {"x": -12.524, "y": -29.491, "width": 24.861, "height": 9.52},
        {"x": -12.08, "y": 24.4955, "width": 11.0, "height": 6.0},
        {"x": 3.4, "y": 21.895, "width": 5.9, "height": 7.6}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "DEV-13907",
    "name": "SparkFun ESP32 Thing",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-esp32-thing.html",
    "revision": "EAGLE esp32-thing.brd; commit fb2dac4c1c49",
    "category": "Microcontrollers",
    "board": {
      "width": 25.4,
      "height": 58.928,
      "color": "#9b242d",
      "outline": "M-12.7 -28.829A0.635 0.635 0 0 1 -12.065 -29.464L12.065 -29.464A0.635 0.635 0 0 1 12.7 -28.829L12.7 29.464L-12.7 29.464L-12.7 -28.829Z"
    },
    "contacts": assets["sparkfun-module-dev13907"]["contacts"],
    "holes": [
      {
        "x": -6.98,
        "y": 25.2955,
        "drill": 0.85
      },
      {
        "x": -3.18,
        "y": 25.2955,
        "drill": 0.85
      }
    ],
    "artwork": assets["sparkfun-module-dev13907"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev13907"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-dev13907"]["provenance"],
    "internalConnections": [
      [
        "jp15-vbus",
        "j1-2",
        "j2-2"
      ],
      [
        "jp15-gnd",
        "jp2-1",
        "j1-1",
        "j1-4",
        "j2-1",
        "j2-4",
        "j2-20"
      ],
      [
        "jp15-shield1",
        "jp15-shield3",
        "jp15-shield2"
      ],
      [
        "jp2-2",
        "j1-3",
        "j2-3"
      ],
      [
        "j1-5",
        "j2-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-esp32-thing.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP32_Thing/blob/fb2dac4c1c493854c3db8a74acc9377a38db2b4a/Hardware/esp32-thing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP32_Thing/blob/fb2dac4c1c493854c3db8a74acc9377a38db2b4a/Hardware/esp32-thing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP32_Thing/blob/fb2dac4c1c493854c3db8a74acc9377a38db2b4a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-esp32-thing.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-13907",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-13907. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.563999999999998,
      -29.531,
      12.377,
      30.5355
    ],
    "backArtworkBounds": [
      -2.326,
      1.865,
      6.8345,
      24.17
    ]
  },
  {
    "id": "sparkfun-module-wrl15574",
    "sku": "WRL-15574",
    "name": "SparkFun Thing Plus - Artemis",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-thing-plus-artemis.html",
    "revision": "EAGLE Artemis Thing Plus.brd; commit fc9612da34b7",
    "category": "Microcontrollers",
    "board": {
      "width": 22.86,
      "height": 58.42,
      "color": "#9b242d",
      "outline": "M-11.43 26.67A2.54 2.54 0 0 0 -8.89 29.21L8.89 29.21A2.54 2.54 0 0 0 11.43 26.67L11.43 -26.67A2.54 2.54 0 0 0 8.89 -29.21L-8.89 -29.21A2.54 2.54 0 0 0 -11.43 -26.67L-11.43 26.67Z"
    },
    "contacts": assets["sparkfun-module-wrl15574"]["contacts"],
    "holes": [
      {
        "x": 4.572,
        "y": 6.08,
        "drill": 0.8
      },
      {
        "x": -2.89,
        "y": 24.305,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": 24.305,
        "drill": 0.65
      },
      {
        "x": -8.89,
        "y": -26.67,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": -26.67,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": 26.67,
        "drill": 3.302
      },
      {
        "x": -8.89,
        "y": 26.67,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wrl15574"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl15574"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl15574"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j5-gnd2",
        "j5-gnd",
        "j2-5",
        "j2-3",
        "j2-9",
        "j6-1",
        "j4-4"
      ],
      [
        "j1-2",
        "j3-1"
      ],
      [
        "j5-b6",
        "j5-a6"
      ],
      [
        "j5-a7",
        "j5-b7"
      ],
      [
        "j5-vbus2",
        "j5-vbus1",
        "j3-3"
      ],
      [
        "j5-shld1",
        "j5-shld2",
        "j5-shld3",
        "j5-shld4",
        "j5-shld5",
        "j5-shld6",
        "j5-shld7",
        "j5-shld8"
      ],
      [
        "j2-6",
        "j4-5"
      ],
      [
        "j2-4",
        "tp1-p-1"
      ],
      [
        "j2-10",
        "j4-1"
      ],
      [
        "j2-1",
        "j6-2",
        "j4-2"
      ],
      [
        "j6-3",
        "tp5-p-1"
      ],
      [
        "j6-4",
        "tp4-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-thing-plus-artemis.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Artemis_Thing_Plus/blob/fc9612da34b751c9c8a5c7f041443c914a42a65d/Hardware/Artemis%20Thing%20Plus.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Artemis_Thing_Plus/blob/fc9612da34b751c9c8a5c7f041443c914a42a65d/Hardware/Artemis%20Thing%20Plus.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Artemis_Thing_Plus/blob/fc9612da34b751c9c8a5c7f041443c914a42a65d/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-thing-plus-artemis.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-15574",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-15574. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.9902,
      -29.3065,
      7.457,
      30.6
    ]
  },
  {
    "id": "sparkfun-module-wrl15435",
    "sku": "WRL-15435",
    "name": "SparkFun Thing Plus - XBee3 Micro (U.FL)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-thing-plus-xbee3-micro-u-fl.html",
    "revision": "EAGLE XBEE3_Thing_Plus.brd; commit 624c5b541806",
    "category": "Microcontrollers",
    "board": {
      "width": 22.86,
      "height": 58.42,
      "color": "#9b242d",
      "outline": "M8.89 29.21A2.54 2.54 0 0 0 11.43 26.67L11.43 -26.67A2.54 2.54 0 0 0 8.89 -29.21L-8.89 -29.21A2.54 2.54 0 0 0 -11.43 -26.67L-11.43 26.67A2.54 2.54 0 0 0 -8.89 29.21L8.89 29.21Z"
    },
    "contacts": assets["sparkfun-module-wrl15435"]["contacts"],
    "holes": [
      {
        "x": -8.89,
        "y": 26.67,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": 26.67,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": -26.67,
        "drill": 3.302
      },
      {
        "x": -8.89,
        "y": -26.67,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wrl15435"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl15435"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl15435"]["provenance"],
    "internalConnections": [
      [
        "u1-p-12",
        "u1-p-21",
        "u1-p-10",
        "u1-p-1",
        "u1-p-32",
        "u1-p-34",
        "j2-4",
        "j2-16",
        "j5-gnd",
        "j3-1",
        "j4-1"
      ],
      [
        "u1-p-13",
        "j2-11"
      ],
      [
        "u1-p-11",
        "j1-10"
      ],
      [
        "u1-p-9",
        "j1-6"
      ],
      [
        "u1-p-8",
        "j1-12",
        "j3-3"
      ],
      [
        "u1-p-7",
        "j1-8"
      ],
      [
        "u1-p-6",
        "j2-1"
      ],
      [
        "u1-p-5",
        "j1-9"
      ],
      [
        "u1-p-4",
        "j2-14"
      ],
      [
        "u1-p-3",
        "j2-15"
      ],
      [
        "u1-p-2",
        "j2-2",
        "j3-2"
      ],
      [
        "u1-p-23",
        "j2-8"
      ],
      [
        "u1-p-24",
        "j1-5"
      ],
      [
        "u1-p-25",
        "j1-7"
      ],
      [
        "u1-p-26",
        "j2-9"
      ],
      [
        "u1-p-27",
        "j2-10"
      ],
      [
        "u1-p-28",
        "j2-7"
      ],
      [
        "u1-p-29",
        "j2-6"
      ],
      [
        "u1-p-30",
        "j1-11",
        "j3-4"
      ],
      [
        "u1-p-31",
        "j2-5"
      ],
      [
        "u1-p-14",
        "j1-4"
      ],
      [
        "u1-p-15",
        "j2-12"
      ],
      [
        "u1-p-16",
        "j2-13"
      ],
      [
        "j1-1",
        "j4-2"
      ],
      [
        "j1-3",
        "j5-vbus"
      ],
      [
        "j5-shield7",
        "j5-shield2",
        "j5-shield",
        "j5-shield3",
        "j5-shield4",
        "j5-shield5",
        "j5-shield6",
        "j5-shield8",
        "j5-shield9",
        "j5-shield10"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-thing-plus-xbee3-micro-u-fl.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/XBee3_Thing_Plus/blob/624c5b54180645034c3d2f315639a831f0518abc/Hardware/XBEE3_Thing_Plus.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/XBee3_Thing_Plus/blob/624c5b54180645034c3d2f315639a831f0518abc/Hardware/XBEE3_Thing_Plus.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/XBee3_Thing_Plus/blob/624c5b54180645034c3d2f315639a831f0518abc/License.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-thing-plus-xbee3-micro-u-fl.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-15435",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-15435. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.9902,
      -24.551,
      8.968,
      29.815
    ]
  },
  {
    "id": "sparkfun-module-wrl17743",
    "sku": "WRL-17743",
    "name": "SparkFun Thing Plus - ESP32-S2 WROOM",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-s2-wroom.html",
    "revision": "EAGLE ESP32-S2_Thing_Plus.brd; commit 49a7c05da8a2",
    "category": "Microcontrollers",
    "board": {
      "width": 22.86,
      "height": 64.77,
      "color": "#9b242d",
      "outline": "M11.43 -29.845A2.54 2.54 0 0 0 8.89 -32.385L-8.89 -32.385A2.54 2.54 0 0 0 -11.43 -29.845L-11.43 29.845A2.54 2.54 0 0 0 -8.89 32.385L8.89 32.385A2.54 2.54 0 0 0 11.43 29.845L11.43 -29.845Z"
    },
    "contacts": assets["sparkfun-module-wrl17743"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": 27.226,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": 27.226,
        "drill": 0.65
      },
      {
        "x": -8.89,
        "y": 29.845,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": 29.845,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wrl17743"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl17743"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-wrl17743"]["provenance"],
    "internalConnections": [
      [
        "jp2-1",
        "j3-1",
        "j4-4",
        "j5-gnd2",
        "j5-gnd",
        "j6-7",
        "j6-5",
        "j6-3",
        "j6-9"
      ],
      [
        "jp2-2",
        "j2-1"
      ],
      [
        "j3-2",
        "j4-2",
        "j6-1"
      ],
      [
        "j3-3",
        "j2-12"
      ],
      [
        "j3-4",
        "j2-11"
      ],
      [
        "j2-3",
        "j5-vbus2",
        "j5-vbus1"
      ],
      [
        "j4-1",
        "j6-10"
      ],
      [
        "j5-b6",
        "j5-a6"
      ],
      [
        "j5-a7",
        "j5-b7"
      ],
      [
        "j6-8",
        "j7-7",
        "tp2-p-1"
      ],
      [
        "j6-6",
        "tp3-p-1"
      ],
      [
        "j6-4",
        "tp4-p-1"
      ],
      [
        "j6-2",
        "tp5-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-s2-wroom.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP32-S2_Thing_Plus/blob/49a7c05da8a254010d7022d4b9586dff2c6bbb9a/Hardware/ESP32-S2_Thing_Plus.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP32-S2_Thing_Plus/blob/49a7c05da8a254010d7022d4b9586dff2c6bbb9a/Hardware/ESP32-S2_Thing_Plus.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP32-S2_Thing_Plus/blob/49a7c05da8a254010d7022d4b9586dff2c6bbb9a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-s2-wroom.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-17743",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-17743. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.9902,
      -32.077,
      10.833537,
      33.521
    ],
    "backArtworkBounds": [
      -7.66,
      -12.104999999999999,
      5.882,
      20.5632
    ]
  },
];
