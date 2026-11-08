import assets from "./radio-wireless-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-1272",
    "sku": "ADA1272",
    "name": "Adafruit Ultimate GPS Logger Shield - Includes GPS Module",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/1272",
    "revision": "EAGLE Adafruit GPS Logger Shield Rev D.brd; commit 20679c594e36",
    "category": "Wireless modules",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "artworkBounds": [
      -38.444,
      -26.281,
      30.52,
      26.583
    ],
    "backArtworkBounds": [
      -6.39,
      -18.962999999999997,
      0.802,
      -15.581
    ],
    "board": {
      "width": 68.58,
      "height": 53.34,
      "color": "#246545",
      "outline": "M31.75 24.13L34.29 21.59L34.29 -11.176L31.75 -13.716L31.75 -25.146L30.226 -26.67L-34.29 -26.67L-34.29 26.67L31.75 26.67L31.75 24.13Z"
    },
    "contacts": assets["adafruit-module-1272"]["contacts"],
    "holes": [
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.2
      },
      {
        "x": -20.266,
        "y": 5.118,
        "drill": 3
      },
      {
        "x": 22.63,
        "y": -15.24,
        "drill": 1
      },
      {
        "x": 25.63,
        "y": -15.24,
        "drill": 1
      }
    ],
    "artwork": assets["adafruit-module-1272"]["artwork"],
    "backArtwork": assets["adafruit-module-1272"]["backArtwork"],
    "provenance": assets["adafruit-module-1272"]["provenance"],
    "internalConnections": [
      [
        "x2-1",
        "x2-2",
        "jp1-6",
        "jp1-7",
        "m1-gnd",
        "m1-gnd-1",
        "m1-gnd-2",
        "m1-gnd-3",
        "x1-mt1",
        "x1-mt2",
        "x1-6",
        "b1--",
        "u-9-4"
      ],
      [
        "jp4-1",
        "m1-d0"
      ],
      [
        "jp4-2",
        "m1-d1"
      ],
      [
        "jp4-3",
        "m1-d2"
      ],
      [
        "jp4-4",
        "m1-d3"
      ],
      [
        "jp4-5",
        "m1-d4"
      ],
      [
        "jp4-6",
        "m1-d5"
      ],
      [
        "jp4-7",
        "m1-d6"
      ],
      [
        "jp4-8",
        "jp6-1",
        "m1-d7"
      ],
      [
        "jp9-1",
        "m1-a0"
      ],
      [
        "jp9-2",
        "m1-a1"
      ],
      [
        "jp9-3",
        "m1-a2"
      ],
      [
        "jp9-4",
        "m1-a3"
      ],
      [
        "jp9-5",
        "m1-a4"
      ],
      [
        "jp9-6",
        "m1-a5"
      ],
      [
        "jp1-1",
        "m1-reserved"
      ],
      [
        "jp1-2",
        "m1-ioref"
      ],
      [
        "jp1-3",
        "m1-reset",
        "m1-reset_icsp"
      ],
      [
        "jp1-4",
        "m1-3v"
      ],
      [
        "jp1-5",
        "m1-5v"
      ],
      [
        "jp1-8",
        "m1-vin"
      ],
      [
        "jp6-2",
        "m1-d8",
        "u-9-10"
      ],
      [
        "jp6-4",
        "m1-d10",
        "u-9-8"
      ],
      [
        "jp6-5",
        "x1-cd1",
        "x1-cd2"
      ],
      [
        "jp6-6",
        "x1-4"
      ],
      [
        "m1-d9",
        "u-9-9"
      ],
      [
        "m1-d11",
        "u-9-7"
      ],
      [
        "m1-d12",
        "u-9-6"
      ],
      [
        "m1-d13",
        "u-9-5"
      ],
      [
        "m1-aref",
        "u-9-3"
      ],
      [
        "m1-sda",
        "u-9-2"
      ],
      [
        "m1-scl",
        "u-9-1"
      ],
      [
        "m1-miso",
        "x1-7"
      ],
      [
        "b1-plus-1",
        "b1-plus-2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/1272"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-GPS-Logger-Shield-PCB/blob/20679c594e363723b81bb2cac5fc47c21cd4b214/Adafruit%20GPS%20Logger%20Shield%20Rev%20D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-GPS-Logger-Shield-PCB/blob/20679c594e363723b81bb2cac5fc47c21cd4b214/Adafruit%20GPS%20Logger%20Shield%20Rev%20D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-GPS-Logger-Shield-PCB/blob/20679c594e363723b81bb2cac5fc47c21cd4b214/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/1272",
      "status": "Official Adafruit stock feed reported 52 available.",
      "sku": "ADA1272",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "52"
    },
    "description": "Adafruit ADA1272. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2324",
    "sku": "ADA2324",
    "name": "Adafruit Ultimate GPS HAT for Raspberry Pi A+/B+/Pi 2/3/4/Pi 5",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2324",
    "revision": "EAGLE Adafruit Ultimate GPS HAT.brd; commit 73b23e57b2c8",
    "category": "Wireless modules",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 65,
      "height": 56.5,
      "color": "#246545",
      "outline": "M-32.5 25.25A3.0 3.0 0 0 0 -29.5 28.25L29.5 28.25A3.0 3.0 0 0 0 32.5 25.25L32.5 -25.25A3.0 3.0 0 0 0 29.5 -28.25L-29.5 -28.25A3.0 3.0 0 0 0 -32.5 -25.25L-32.5 25.25Z"
    },
    "contacts": assets["adafruit-module-2324"]["contacts"],
    "holes": [
      {
        "x": -29,
        "y": 24.75,
        "drill": 2.8
      },
      {
        "x": -29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": -24.25,
        "drill": 2.8
      },
      {
        "x": 29,
        "y": 24.75,
        "drill": 2.8
      },
      {
        "x": -14.886,
        "y": 4.493,
        "drill": 3
      }
    ],
    "artwork": assets["adafruit-module-2324"]["artwork"],
    "backArtwork": assets["adafruit-module-2324"]["backArtwork"],
    "artworkBounds": [
      -27.936,
      -14.613999999999999,
      -0.71,
      28.163
    ],
    "provenance": assets["adafruit-module-2324"]["provenance"],
    "internalConnections": [
      [
        "conn1-1",
        "rpi1-3"
      ],
      [
        "conn1-2",
        "rpi1-5"
      ],
      [
        "conn1-3",
        "rpi1-8"
      ],
      [
        "conn1-4",
        "rpi1-10"
      ],
      [
        "conn1-5",
        "rpi1-7"
      ],
      [
        "conn1-6",
        "rpi1-11"
      ],
      [
        "conn1-7",
        "rpi1-12"
      ],
      [
        "conn1-8",
        "rpi1-13"
      ],
      [
        "conn1-9",
        "rpi1-15"
      ],
      [
        "conn1-10",
        "rpi1-16"
      ],
      [
        "conn1-11",
        "rpi1-18"
      ],
      [
        "conn1-12",
        "rpi1-22"
      ],
      [
        "conn1-13",
        "rpi1-19"
      ],
      [
        "conn1-14",
        "rpi1-21"
      ],
      [
        "conn1-15",
        "rpi1-23"
      ],
      [
        "conn1-16",
        "rpi1-24"
      ],
      [
        "conn1-17",
        "rpi1-26"
      ],
      [
        "conn1-18",
        "rpi1-29"
      ],
      [
        "conn1-19",
        "rpi1-31"
      ],
      [
        "conn1-20",
        "rpi1-32"
      ],
      [
        "conn1-21",
        "rpi1-33"
      ],
      [
        "conn1-22",
        "rpi1-36"
      ],
      [
        "conn1-23",
        "rpi1-35"
      ],
      [
        "conn1-24",
        "rpi1-38"
      ],
      [
        "conn1-25",
        "rpi1-40"
      ],
      [
        "b1--",
        "rpi1-6",
        "rpi1-9",
        "rpi1-14",
        "rpi1-20",
        "rpi1-25",
        "rpi1-30",
        "rpi1-34",
        "rpi1-39",
        "u-20-p-1",
        "u-20-p-2"
      ],
      [
        "rpi1-1",
        "rpi1-17"
      ],
      [
        "rpi1-2",
        "rpi1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2324"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-HAT-PCB/blob/73b23e57b2c80f36aa1405aa67be887b5dabe68e/Adafruit%20Ultimate%20GPS%20HAT.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-HAT-PCB/blob/73b23e57b2c80f36aa1405aa67be887b5dabe68e/Adafruit%20Ultimate%20GPS%20HAT.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-HAT-PCB/blob/73b23e57b2c80f36aa1405aa67be887b5dabe68e/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2324",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA2324",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA2324. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3133",
    "sku": "ADA3133",
    "name": "Adafruit Ultimate GPS FeatherWing",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3133",
    "revision": "EAGLE Adafruit Ultimate GPS FeatherWing.brd; commit 1b15a4f782c5",
    "category": "Wireless modules",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M25.4 -8.89A2.54 2.54 0 0 0 22.86 -11.43L-22.86 -11.43A2.54 2.54 0 0 0 -25.4 -8.89L-25.4 8.89A2.54 2.54 0 0 0 -22.86 11.43L22.86 11.43A2.54 2.54 0 0 0 25.4 8.89L25.4 -8.89Z"
    },
    "contacts": assets["adafruit-module-3133"]["contacts"],
    "holes": [
      {
        "x": 11.723,
        "y": -0.5,
        "drill": 3
      },
      {
        "x": -11.417,
        "y": -1.397,
        "drill": 1.5
      },
      {
        "x": -18.867,
        "y": -1.397,
        "drill": 1.5
      },
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
    "artwork": assets["adafruit-module-3133"]["artwork"],
    "backArtwork": assets["adafruit-module-3133"]["backArtwork"],
    "artworkBounds": [
      -23.007,
      -9.337,
      24.454,
      8.04
    ],
    "backArtworkBounds": [
      -1.437,
      -6.136,
      17.566,
      8.93
    ],
    "provenance": assets["adafruit-module-3133"]["provenance"],
    "internalConnections": [
      [
        "x1-1",
        "x1-2",
        "ms1-4",
        "jp4-7",
        "b1--"
      ],
      [
        "ms1-27",
        "jp2-1"
      ],
      [
        "ms1-26",
        "jp2-2"
      ],
      [
        "ms1-25",
        "jp2-3"
      ],
      [
        "ms1-24",
        "jp2-4"
      ],
      [
        "ms1-23",
        "jp2-5"
      ],
      [
        "ms1-5",
        "jp4-6"
      ],
      [
        "ms1-6",
        "jp4-5"
      ],
      [
        "ms1-7",
        "jp4-4"
      ],
      [
        "ms1-8",
        "jp4-3"
      ],
      [
        "ms1-9",
        "jp4-2"
      ],
      [
        "ms1-10",
        "jp4-1"
      ],
      [
        "ms1-3",
        "jp4-8"
      ],
      [
        "ms1-2",
        "jp4-9"
      ],
      [
        "ms1-1",
        "jp4-10"
      ],
      [
        "tp1-p-1",
        "b1-plus"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3133"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-FeatherWing-PCB/blob/1b15a4f782c555903c0cfd7174d0616d2e128887/Adafruit%20Ultimate%20GPS%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-FeatherWing-PCB/blob/1b15a4f782c555903c0cfd7174d0616d2e128887/Adafruit%20Ultimate%20GPS%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Ultimate-GPS-FeatherWing-PCB/blob/1b15a4f782c555903c0cfd7174d0616d2e128887/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3133",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3133",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3133. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3229",
    "sku": "ADA3229",
    "name": "Adafruit Radio FeatherWing - RFM69HCW 900MHz",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3229",
    "revision": "EAGLE Adafruit Radio FeatherWing.brd; commit 926b55164daa",
    "category": "Wireless modules",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "board": {
      "width": 50.8,
      "height": 22.86,
      "color": "#246545",
      "outline": "M25.4 10.16A1.27 1.27 0 0 1 24.13 11.43L-22.86 11.43A2.54 2.54 0 0 1 -25.4 8.89L-25.4 -8.89A2.54 2.54 0 0 1 -22.86 -11.43L22.86 -11.43A2.54 2.54 0 0 1 25.4 -8.89L25.4 10.16Z"
    },
    "contacts": assets["adafruit-module-3229"]["contacts"],
    "holes": [
      {
        "x": 22.86,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": -22.86,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": -22.86,
        "y": -8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3229"]["artwork"],
    "backArtwork": assets["adafruit-module-3229"]["backArtwork"],
    "artworkBounds": [
      -25.439999999999998,
      -11.469999999999999,
      34.5205,
      11.47
    ],
    "provenance": assets["adafruit-module-3229"]["provenance"],
    "internalConnections": [
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
        "jp7-1"
      ],
      [
        "ms1-22",
        "jp7-2"
      ],
      [
        "ms1-21",
        "jp7-3"
      ],
      [
        "ms1-20",
        "jp7-4"
      ],
      [
        "ms1-19",
        "jp7-5"
      ],
      [
        "ms1-18",
        "jp6-1"
      ],
      [
        "ms1-17",
        "jp6-2"
      ],
      [
        "ms1-5",
        "jp1-5"
      ],
      [
        "ms1-6",
        "jp1-4"
      ],
      [
        "ms1-7",
        "jp1-3"
      ],
      [
        "ms1-8",
        "jp1-2"
      ],
      [
        "ms1-9",
        "jp1-1"
      ],
      [
        "ms1-10",
        "jp4-1"
      ],
      [
        "ms1-14",
        "jp4-2"
      ],
      [
        "ms1-15",
        "jp4-3"
      ],
      [
        "ms1-4",
        "x1-gnd-2",
        "x1-gnd-1",
        "x1-gnd-3",
        "x1-gnd-4",
        "jp1-6"
      ],
      [
        "ms1-3",
        "jp1-7"
      ],
      [
        "ms1-2",
        "jp1-8"
      ],
      [
        "ms1-1",
        "jp1-9"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3229"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Radio-FeatherWing-PCB/blob/926b55164daad155e05ebe8ca3a02365bc07a40c/Adafruit%20Radio%20FeatherWing.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Radio-FeatherWing-PCB/blob/926b55164daad155e05ebe8ca3a02365bc07a40c/Adafruit%20Radio%20FeatherWing.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Radio-FeatherWing-PCB/blob/926b55164daad155e05ebe8ca3a02365bc07a40c/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3229",
      "status": "Official Adafruit stock feed reported 20 available.",
      "sku": "ADA3229",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "20"
    },
    "description": "Adafruit ADA3229. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-2746",
    "sku": "ADA2746",
    "name": "Adafruit Bluefruit LE Shield - Bluetooth® LE for Arduino",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/2746",
    "revision": "EAGLE Adafruit Bluefruit LE Shield.brd; commit 6b86d1bdaa0a",
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
    "contacts": assets["adafruit-module-2746"]["contacts"],
    "holes": [
      {
        "x": -20.32,
        "y": 24.13,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.2
      },
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.2
      },
      {
        "x": -28.58,
        "y": -2.2,
        "drill": 0.9
      }
    ],
    "artwork": assets["adafruit-module-2746"]["artwork"],
    "backArtwork": assets["adafruit-module-2746"]["backArtwork"],
    "artworkBounds": [
      -34.33,
      -26.71,
      34.33,
      26.71
    ],
    "backArtworkBounds": [
      -6.39,
      -19.471,
      32.425,
      9.692
    ],
    "provenance": assets["adafruit-module-2746"]["provenance"],
    "internalConnections": [
      [
        "m1-d4",
        "jp2-4"
      ],
      [
        "m1-a0",
        "jp4-6"
      ],
      [
        "m1-d3",
        "jp2-5"
      ],
      [
        "m1-d2",
        "jp2-6"
      ],
      [
        "m1-d1",
        "jp2-7"
      ],
      [
        "m1-d0",
        "jp2-8"
      ],
      [
        "m1-d5",
        "jp2-3"
      ],
      [
        "m1-d6",
        "jp2-2"
      ],
      [
        "m1-d7",
        "jp2-1"
      ],
      [
        "m1-d8",
        "jp5-10"
      ],
      [
        "m1-d9",
        "jp5-9"
      ],
      [
        "m1-d10",
        "jp5-8"
      ],
      [
        "m1-d11",
        "jp5-7"
      ],
      [
        "m1-d12",
        "jp5-6"
      ],
      [
        "m1-d13",
        "jp5-5"
      ],
      [
        "m1-gnd",
        "m1-gnd-1",
        "m1-gnd-3",
        "jp3-2",
        "jp3-3",
        "jp5-4"
      ],
      [
        "m1-aref",
        "jp5-3"
      ],
      [
        "m1-a1",
        "jp4-5"
      ],
      [
        "m1-a2",
        "jp4-4"
      ],
      [
        "m1-a3",
        "jp4-3"
      ],
      [
        "m1-a4",
        "jp4-2"
      ],
      [
        "m1-a5",
        "jp4-1"
      ],
      [
        "m1-vin",
        "jp3-1"
      ],
      [
        "m1-5v",
        "jp3-4"
      ],
      [
        "m1-3v",
        "jp3-5"
      ],
      [
        "m1-reset",
        "jp3-6"
      ],
      [
        "m1-sda",
        "jp5-2"
      ],
      [
        "m1-scl",
        "jp5-1"
      ],
      [
        "m1-ioref",
        "jp3-7"
      ],
      [
        "m1-reserved",
        "jp3-8"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/2746"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-Shield-PCB/blob/6b86d1bdaa0a1058f4738f09524606a86cd793ce/Adafruit%20Bluefruit%20LE%20Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-Shield-PCB/blob/6b86d1bdaa0a1058f4738f09524606a86cd793ce/Adafruit%20Bluefruit%20LE%20Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Bluefruit-LE-Shield-PCB/blob/6b86d1bdaa0a1058f4738f09524606a86cd793ce/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/2746",
      "status": "Official Adafruit stock feed reported 18 available.",
      "sku": "ADA2746",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "18"
    },
    "description": "Adafruit ADA2746. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
  {
    "id": "adafruit-module-3654",
    "sku": "ADA3654",
    "name": "Adafruit WINC1500 WiFi Shield with uFL Connector",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3654",
    "revision": "EAGLE Adafruit Winc1500 Shield.brd; commit 5b4642c624ff",
    "category": "Interfaces",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 68.58,
      "height": 53.34,
      "color": "#246545",
      "outline": "M31.75 24.13L34.29 21.59L34.29 -11.176L31.75 -13.716L31.75 -25.146L30.226 -26.67L-34.29 -26.67L-34.29 -21.463L-33.274 -20.447L-33.274 -9.398L-34.29 -8.382L-34.29 26.67L31.75 26.67L31.75 24.13Z"
    },
    "contacts": assets["adafruit-module-3654"]["contacts"],
    "holes": [
      {
        "x": -20.32,
        "y": 24.13,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": -8.89,
        "drill": 3.2
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.2
      },
      {
        "x": -19.05,
        "y": -24.13,
        "drill": 3.2
      }
    ],
    "artwork": assets["adafruit-module-3654"]["artwork"],
    "backArtwork": assets["adafruit-module-3654"]["backArtwork"],
    "artworkBounds": [
      -37.682,
      -26.71,
      34.33,
      26.71
    ],
    "backArtworkBounds": [
      -6.39,
      -19.471,
      32.425,
      9.692
    ],
    "provenance": assets["adafruit-module-3654"]["provenance"],
    "internalConnections": [
      [
        "m1-d4",
        "jp2-4"
      ],
      [
        "m1-a0",
        "jp4-6"
      ],
      [
        "m1-d3",
        "jp2-5"
      ],
      [
        "m1-d2",
        "jp2-6"
      ],
      [
        "m1-d1",
        "jp2-7"
      ],
      [
        "m1-d0",
        "jp2-8"
      ],
      [
        "m1-d5",
        "jp2-3"
      ],
      [
        "m1-d6",
        "jp2-2"
      ],
      [
        "m1-d7",
        "jp2-1"
      ],
      [
        "m1-d8",
        "jp5-10"
      ],
      [
        "m1-d9",
        "jp5-9"
      ],
      [
        "m1-d10",
        "jp5-8"
      ],
      [
        "m1-d11",
        "jp5-7"
      ],
      [
        "m1-d12",
        "jp5-6"
      ],
      [
        "m1-d13",
        "jp5-5"
      ],
      [
        "m1-gnd",
        "m1-gnd-1",
        "m1-gnd-3",
        "jp3-2",
        "jp3-3",
        "jp5-4",
        "x1-mt1",
        "x1-mt2",
        "x1-6"
      ],
      [
        "m1-aref",
        "jp5-3"
      ],
      [
        "m1-a1",
        "jp4-5"
      ],
      [
        "m1-a2",
        "jp4-4"
      ],
      [
        "m1-a3",
        "jp4-3"
      ],
      [
        "m1-a4",
        "jp4-2"
      ],
      [
        "m1-a5",
        "jp4-1"
      ],
      [
        "m1-vin",
        "jp3-1"
      ],
      [
        "m1-5v",
        "jp3-4"
      ],
      [
        "m1-3v",
        "jp3-5"
      ],
      [
        "m1-reset",
        "jp3-6"
      ],
      [
        "m1-sda",
        "jp5-2"
      ],
      [
        "m1-scl",
        "jp5-1"
      ],
      [
        "m1-ioref",
        "jp3-7"
      ],
      [
        "m1-reserved",
        "jp3-8"
      ],
      [
        "jp9-1",
        "x1-7"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3654"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-WINC1500-Shield-PCB/blob/5b4642c624ffe549731ff9aae4aeb5330fbbb4a3/Adafruit%20Winc1500%20Shield.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-WINC1500-Shield-PCB/blob/5b4642c624ffe549731ff9aae4aeb5330fbbb4a3/Adafruit%20Winc1500%20Shield.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-WINC1500-Shield-PCB/blob/5b4642c624ffe549731ff9aae4aeb5330fbbb4a3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3654",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3654",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3654. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ]
  },
];
