import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-dev16402",
    "sku": "DEV-16402",
    "name": "SparkFun MicroMod Teensy Processor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micromod-teensy-processor.html",
    "revision": "EAGLE MicroMod-Teensy.brd; commit 51ca16ddcabd",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "artworkBounds": [
      -10.29,
      -10.51625,
      10.29,
      5.0916
    ],
    "backArtworkBounds": [
      -9.9224,
      -4.9576,
      10.656,
      6.01
    ],
    "board": {
      "width": 22,
      "height": 22,
      "color": "#246545",
      "outline": "M10.4 7.0A0.510657 0.510657 0 0 0 9.925 7.5L9.925 11.0L3.225 11.0L3.225 8.1A0.6 0.6 0 0 0 2.025 8.1L2.025 11.0L-9.925 11.0L-9.925 7.5A0.516237 0.516237 0 0 0 -10.4 7.0A0.617568 0.617568 0 0 1 -11.0 6.4L-11.0 -10.0A1.025305 1.025305 0 0 1 -10.0 -11.0L2.25 -11.0A1.75 1.75 0 0 0 5.75 -11.0L10.0 -11.0A1.025305 1.025305 0 0 1 11.0 -10.0L11.0 6.4A0.617568 0.617568 0 0 1 10.4 7.0Z"
    },
    "contacts": assets["sparkfun-module-dev16402"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev16402"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev16402"]["backArtwork"],
    "provenance": assets["sparkfun-module-dev16402"]["provenance"],
    "internalConnections": [
      [
        "j1-gnd1",
        "j1-gnd3",
        "j1-gnd2",
        "j1-1",
        "j1-7",
        "j1-33",
        "j1-36",
        "j1-39",
        "j1-45",
        "j1-75"
      ],
      [
        "j1-2",
        "j1-74",
        "tp13-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micromod-teensy-processor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroMod_Teensy_Processor/blob/51ca16ddcabd38d134c051391ffedf16dafc19a0/Hardware/MicroMod-Teensy.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroMod_Teensy_Processor/blob/51ca16ddcabd38d134c051391ffedf16dafc19a0/Hardware/MicroMod-Teensy.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroMod_Teensy_Processor/blob/51ca16ddcabd38d134c051391ffedf16dafc19a0/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micromod-teensy-processor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-16402",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-16402. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev16401",
    "sku": "DEV-16401",
    "name": "SparkFun MicroMod Artemis Processor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micromod-artemis-processor.html",
    "revision": "EAGLE MicroMod-Artemis-ProcessorBoard.brd; commit f3e16866c81b",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 22,
      "height": 22,
      "color": "#9b242d",
      "outline": "M10.0 -11.0A1.025305 1.025305 0 0 1 11.0 -10.0L11.0 6.4A0.617568 0.617568 0 0 1 10.4 7.0A0.510657 0.510657 0 0 0 9.925 7.5L9.925 11.0L3.225 11.0L3.225 8.1A0.6 0.6 0 0 0 2.025 8.1L2.025 11.0L-9.925 11.0L-9.925 7.5A0.516237 0.516237 0 0 0 -10.4 7.0A0.617568 0.617568 0 0 1 -11.0 6.4L-11.0 -10.0A1.025305 1.025305 0 0 1 -10.0 -11.0L2.25 -11.0A1.75 1.75 0 0 0 5.75 -11.0L10.0 -11.0Z"
    },
    "contacts": assets["sparkfun-module-dev16401"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev16401"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev16401"]["backArtwork"],
    "artworkBounds": [
      -9.6275,
      -10.51625,
      10.09,
      4.415
    ],
    "backArtworkBounds": [
      -10.395,
      -5.04,
      10.619,
      6.34
    ],
    "provenance": assets["sparkfun-module-dev16401"]["provenance"],
    "internalConnections": [
      [
        "j1-gnd1",
        "j1-gnd3",
        "j1-gnd2",
        "j1-1",
        "j1-7",
        "j1-33",
        "j1-36",
        "j1-39",
        "j1-45",
        "j1-75"
      ],
      [
        "j1-2",
        "j1-74"
      ],
      [
        "j1-17",
        "j1-65"
      ],
      [
        "j1-56",
        "j1-58"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micromod-artemis-processor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroMod_Artemis_Processor/blob/f3e16866c81b140543ed791169d8974c673a9ff8/Hardware/MicroMod-Artemis-ProcessorBoard.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroMod_Artemis_Processor/blob/f3e16866c81b140543ed791169d8974c673a9ff8/Hardware/MicroMod-Artemis-ProcessorBoard.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroMod_Artemis_Processor/blob/f3e16866c81b140543ed791169d8974c673a9ff8/license.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micromod-artemis-processor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-16401",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-16401. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl16781",
    "sku": "WRL-16781",
    "name": "SparkFun MicroMod ESP32 Processor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micromod-esp32-processor.html",
    "revision": "EAGLE SparkFun_MicroMod_ESP32.brd; commit 0faa0480023b",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 22,
      "height": 22,
      "color": "#9b242d",
      "outline": "M10.4 7.0A0.510657 0.510657 0 0 0 9.925 7.5L9.925 11.0L3.225 11.0L3.225 8.1A0.6 0.6 0 0 0 2.025 8.1L2.025 11.0L-9.925 11.0L-9.925 7.5A0.516237 0.516237 0 0 0 -10.4 7.0A0.617568 0.617568 0 0 1 -11.0 6.4L-11.0 -10.0A1.025305 1.025305 0 0 1 -10.0 -11.0L2.25 -11.0A1.75 1.75 0 0 0 5.75 -11.0L10.0 -11.0A1.025305 1.025305 0 0 1 11.0 -10.0L11.0 6.4A0.617568 0.617568 0 0 1 10.4 7.0Z"
    },
    "contacts": assets["sparkfun-module-wrl16781"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-wrl16781"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl16781"]["backArtwork"],
    "artworkBounds": [
      -10.723999999999998,
      -9.582249999999998,
      10.3125,
      6.48
    ],
    "backArtworkBounds": [
      -6.09,
      -9.403599999999999,
      9.8043,
      3.7462
    ],
    "provenance": assets["sparkfun-module-wrl16781"]["provenance"],
    "internalConnections": [
      [
        "j1-gnd1",
        "j1-gnd3",
        "j1-gnd2",
        "j1-1",
        "j1-7",
        "j1-33",
        "j1-36",
        "j1-39",
        "j1-45",
        "j1-75"
      ],
      [
        "j1-2",
        "j1-74"
      ],
      [
        "j1-17",
        "j1-46",
        "j1-56"
      ],
      [
        "j1-19",
        "j1-48",
        "j1-54"
      ],
      [
        "j1-42",
        "j1-52",
        "j1-53"
      ],
      [
        "j1-44",
        "j1-50",
        "j1-51"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micromod-esp32-processor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroMod_ESP32_Processor/blob/0faa0480023b6428aa1653dea9e5e82c78e1e742/Hardware/SparkFun_MicroMod_ESP32.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroMod_ESP32_Processor/blob/0faa0480023b6428aa1653dea9e5e82c78e1e742/Hardware/SparkFun_MicroMod_ESP32.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroMod_ESP32_Processor/blob/0faa0480023b6428aa1653dea9e5e82c78e1e742/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micromod-esp32-processor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-16781",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-16781. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev21326",
    "sku": "DEV-21326",
    "name": "SparkFun MicroMod STM32 Processor",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-micromod-stm32-processor.html",
    "revision": "EAGLE MicroMod_STM32_Processor.brd; commit 419f9807fba0",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 22,
      "height": 22,
      "color": "#9b242d",
      "outline": "M10.4 7.0A0.510657 0.510657 0 0 0 9.925 7.5L9.925 11.0L3.225 11.0L3.225 8.1A0.6 0.6 0 0 0 2.025 8.1L2.025 11.0L-9.925 11.0L-9.925 7.5A0.516237 0.516237 0 0 0 -10.4 7.0A0.617568 0.617568 0 0 1 -11.0 6.4L-11.0 -10.0A1.025305 1.025305 0 0 1 -10.0 -11.0L2.25 -11.0A1.75 1.75 0 0 0 5.75 -11.0L10.0 -11.0A1.025305 1.025305 0 0 1 11.0 -10.0L11.0 6.4A0.617568 0.617568 0 0 1 10.4 7.0Z"
    },
    "contacts": assets["sparkfun-module-dev21326"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-dev21326"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev21326"]["backArtwork"],
    "artworkBounds": [
      -10.719999999999999,
      -10.32625,
      10.3075,
      6.52
    ],
    "backArtworkBounds": [
      -3.84,
      -7.01,
      8.8624,
      2.89
    ],
    "provenance": assets["sparkfun-module-dev21326"]["provenance"],
    "internalConnections": [
      [
        "j1-gnd1",
        "j1-gnd3",
        "j1-gnd2",
        "j1-1",
        "j1-7",
        "j1-33",
        "j1-36",
        "j1-39",
        "j1-45",
        "j1-75"
      ],
      [
        "j1-2",
        "j1-74"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-micromod-stm32-processor.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/MicroMod_STM32_Processor/blob/419f9807fba00844d928c920a6be062b85855e37/Hardware/MicroMod_STM32_Processor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/MicroMod_STM32_Processor/blob/419f9807fba00844d928c920a6be062b85855e37/Hardware/MicroMod_STM32_Processor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/MicroMod_STM32_Processor/blob/419f9807fba00844d928c920a6be062b85855e37/license.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-micromod-stm32-processor.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-21326",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-21326. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-wrl17381",
    "mountingReview": {
      "contactIds": ["j2-1", "j2-2", "j2-3", "j2-4", "j2-5", "j2-6", "j2-7", "j2-8", "j2-9", "j2-10", "j2-11", "j2-12", "j4-1", "j4-2", "j4-3", "j4-4", "j4-5", "j4-6", "j4-7", "j4-8", "j4-9", "j4-10", "j4-11", "j4-12", "j4-13", "j4-14", "j4-15", "j4-16"],
      "source": {"label": "SparkFun WRL-17381: EAGLE ESP32_Thing_Plus_UFL.brd; commit cc74046280c1 header geometry", "url": "https://github.com/sparkfun/ESP32_Thing_Plus_U.FL/blob/cc74046280c1cc5f410adf89ca029a7923f55154/Hardware/ESP32_Thing_Plus_UFL.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J2", "count": 12, "package": "1X12_SM_SQ_NOSILK"}, {"id": "J4", "count": 16, "package": "1X16_SM_SQ_NOSILK"}],
        "boardSha256": "20807fc1370b46dac3823a1fc094b0464870e3e859449207b90b25c509fa73bc"
      },
      "bodyRegions": [
        {"x": -11.43, "y": -29.21, "width": 22.86, "height": 58.42},
        {"x": -3.999, "y": 24.9932, "width": 8.04, "height": 5.62}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "WRL-17381",
    "name": "SparkFun Thing Plus - ESP32 WROOM (U.FL)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-u-fl.html",
    "revision": "EAGLE ESP32_Thing_Plus_UFL.brd; commit cc74046280c1",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 22.86,
      "height": 58.42,
      "color": "#9b242d",
      "outline": "M11.43 -26.67A2.54 2.54 0 0 0 8.89 -29.21L-8.89 -29.21A2.54 2.54 0 0 0 -11.43 -26.67L-11.43 26.67A2.54 2.54 0 0 0 -8.89 29.21L8.89 29.21A2.54 2.54 0 0 0 11.43 26.67L11.43 -26.67Z"
    },
    "contacts": assets["sparkfun-module-wrl17381"]["contacts"],
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
      },
      {
        "x": -8.89,
        "y": -26.67,
        "drill": 3.048
      },
      {
        "x": 8.89,
        "y": -26.67,
        "drill": 3.048
      }
    ],
    "artwork": assets["sparkfun-module-wrl17381"]["artwork"],
    "backArtwork": assets["sparkfun-module-wrl17381"]["backArtwork"],
    "artworkBounds": [
      -10.9902,
      -23.038,
      9.167,
      30.6532
    ],
    "provenance": assets["sparkfun-module-wrl17381"]["provenance"],
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
        "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-u-fl.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus_U.FL/blob/cc74046280c1cc5f410adf89ca029a7923f55154/Hardware/ESP32_Thing_Plus_UFL.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus_U.FL/blob/cc74046280c1cc5f410adf89ca029a7923f55154/Hardware/ESP32_Thing_Plus_UFL.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ESP32_Thing_Plus_U.FL/blob/cc74046280c1cc5f410adf89ca029a7923f55154/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-thing-plus-esp32-wroom-u-fl.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WRL-17381",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WRL-17381. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "sparkfun-module-dev15443",
    "sku": "DEV-15443",
    "name": "SparkFun RedBoard Artemis Nano",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-redboard-artemis-nano.html",
    "revision": "EAGLE RedBoard-Artemis-Nano.brd; commit 2e62061e8ccc",
    "category": "Microcontrollers",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 43.18,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M-20.515078 10.16A1.074922 1.074922 0 0 1 -21.59 9.085078L-21.59 -8.996394A1.163606 1.163606 0 0 1 -20.426394 -10.16L20.426394 -10.16A1.163606 1.163606 0 0 1 21.59 -8.996394L21.59 8.996394A1.163606 1.163606 0 0 1 20.426394 10.16L-20.515078 10.16Z"
    },
    "contacts": assets["sparkfun-module-dev15443"]["contacts"],
    "holes": [
      {
        "x": 16.685,
        "y": -6.7,
        "drill": 0.65
      },
      {
        "x": 16.685,
        "y": -0.92,
        "drill": 0.65
      },
      {
        "x": 10.16,
        "y": 8.62,
        "drill": 0.8
      }
    ],
    "artwork": assets["sparkfun-module-dev15443"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15443"]["backArtwork"],
    "artworkBounds": [
      -16.968999999999998,
      -9.857,
      21.16,
      9.692
    ],
    "backArtworkBounds": [
      -24.925,
      -10.075999999999999,
      22.98,
      9.847
    ],
    "provenance": assets["sparkfun-module-dev15443"]["provenance"],
    "internalConnections": [
      [
        "j3-1",
        "j2-11",
        "j1-1",
        "j9-1",
        "j9-2",
        "j9-3",
        "j9-4",
        "j9-5",
        "j9-6",
        "j9-7",
        "j12-1",
        "j13-1",
        "j13-2",
        "j13-3",
        "j13-4",
        "j13-5",
        "j13-6",
        "j13-7",
        "j13-8",
        "j13-9",
        "j13-10",
        "j13-11",
        "j13-12",
        "j14-1",
        "j14-2",
        "j10-gnd2",
        "j10-gnd",
        "j11-5",
        "j11-3",
        "j11-9",
        "j4-2"
      ],
      [
        "j3-2",
        "j2-9",
        "j11-1"
      ],
      [
        "j3-3",
        "tp3-p-1"
      ],
      [
        "j3-4",
        "tp4-p-1"
      ],
      [
        "j2-10",
        "j11-10"
      ],
      [
        "j5-1",
        "j11-6"
      ],
      [
        "j1-2",
        "j12-2"
      ],
      [
        "j10-b6",
        "j10-a6"
      ],
      [
        "j10-a7",
        "j10-b7"
      ],
      [
        "j10-vbus2",
        "j10-vbus1"
      ],
      [
        "j10-shld1",
        "j10-shld2",
        "j10-shld3",
        "j10-shld4",
        "j10-shld5",
        "j10-shld6",
        "j10-shld7",
        "j10-shld8"
      ],
      [
        "tp1-p-1",
        "j11-4"
      ],
      [
        "tp2-p-1",
        "j11-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-redboard-artemis-nano.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RedBoard_Artemis_Nano/blob/2e62061e8ccc0fd7359bf5a990b46df76c59b5bc/Hardware/RedBoard-Artemis-Nano.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RedBoard_Artemis_Nano/blob/2e62061e8ccc0fd7359bf5a990b46df76c59b5bc/Hardware/RedBoard-Artemis-Nano.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RedBoard_Artemis_Nano/blob/2e62061e8ccc0fd7359bf5a990b46df76c59b5bc/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-redboard-artemis-nano.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15443",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15443. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
