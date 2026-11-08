import assets from "./serial-transceivers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob10124",
    "sku": "BOB-10124",
    "name": "SparkFun Transceiver Breakout - RS-485",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-transceiver-breakout-rs-485.html",
    "revision": "EAGLE RS485_Breakout.brd; commit 08f1d60e6739",
    "category": "Interfaces",
    "board": {
      "width": 22.86,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M-11.43 13.97L11.43 13.97L11.43 -13.97L-11.43 -13.97L-11.43 13.97Z"
    },
    "contacts": assets["sparkfun-module-bob10124"]["contacts"],
    "holes": [
      {
        "x": 8.89,
        "y": 5.715,
        "drill": 3.2
      },
      {
        "x": 8.89,
        "y": -5.715,
        "drill": 3.2
      },
      {
        "x": -8.89,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": -8.89,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": -11.43,
        "drill": 3.302
      },
      {
        "x": 8.89,
        "y": 11.43,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-bob10124"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob10124"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob10124"]["provenance"],
    "internalConnections": [
      [
        "jp4-8",
        "jp3-2",
        "jp2-2"
      ],
      [
        "jp4-7",
        "jp3-3",
        "jp2-3"
      ],
      [
        "jp4-6",
        "jp1-1"
      ],
      [
        "jp4-4",
        "jp4-5",
        "jp3-1",
        "jp2-1",
        "jp9-5"
      ],
      [
        "jp4-2",
        "jp1-3"
      ],
      [
        "jp4-3",
        "jp1-2"
      ],
      [
        "jp4-1",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-transceiver-breakout-rs-485.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RS-485_Breakout/blob/08f1d60e6739cf89f001febbcf19147ea7988cf7/Hardware/RS485_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RS-485_Breakout/blob/08f1d60e6739cf89f001febbcf19147ea7988cf7/Hardware/RS485_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RS-485_Breakout/blob/08f1d60e6739cf89f001febbcf19147ea7988cf7/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-transceiver-breakout-rs-485.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-10124",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-10124. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -10.2,
      -7.66,
      19.73,
      14.01
    ]
  },
  {
    "id": "sparkfun-module-dev14050",
    "sku": "DEV-14050",
    "name": "SparkFun Serial Basic Breakout - CH340G",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-serial-basic-breakout-ch340g.html",
    "revision": "EAGLE Serial-Basic.brd; commit 19004d825615",
    "category": "Interfaces",
    "board": {
      "width": 22.86,
      "height": 17.272,
      "color": "#9b242d",
      "outline": "M-11.43 -8.636L11.43 -8.636L11.43 8.636L-11.43 8.636L-11.43 -8.636Z"
    },
    "contacts": assets["sparkfun-module-dev14050"]["contacts"],
    "holes": [
      {
        "x": 7.325,
        "y": 1.9,
        "drill": 0.85
      },
      {
        "x": 7.325,
        "y": -1.9,
        "drill": 0.85
      }
    ],
    "artwork": assets["sparkfun-module-dev14050"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev14050"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-dev14050"]["provenance"],
    "internalConnections": [
      [
        "j1-gnd",
        "j2-1"
      ],
      [
        "j1-shield1",
        "j1-shield3",
        "j1-shield2"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-serial-basic-breakout-ch340g.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Serial_Basic_Breakout-CH340G/blob/19004d8256151ac61e5502eeaa41979b48e95c62/Hardware/Serial-Basic.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Serial_Basic_Breakout-CH340G/blob/19004d8256151ac61e5502eeaa41979b48e95c62/Hardware/Serial-Basic.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Serial_Basic_Breakout-CH340G/blob/19004d8256151ac61e5502eeaa41979b48e95c62/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-serial-basic-breakout-ch340g.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-14050",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-14050. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.40625,
      -7.698,
      12.565,
      7.49
    ],
    "backArtworkBounds": [
      -11.392,
      -7.54,
      7.406,
      7.54
    ]
  },
  {
    "id": "sparkfun-module-wig09555",
    "sku": "WIG-09555",
    "name": "SparkFun OBD-II UART",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-obd-ii-uart.html",
    "revision": "EAGLE OBD-II-UART.brd; commit c35ae778350c",
    "category": "Interfaces",
    "board": {
      "width": 68.58,
      "height": 43.18,
      "color": "#9b242d",
      "outline": "M-34.29 21.59L34.29 21.59L34.29 -21.59L-34.29 -21.59L-34.29 21.59Z"
    },
    "contacts": assets["sparkfun-module-wig09555"]["contacts"],
    "holes": [
      {
        "x": -31.75,
        "y": 19.05,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": -19.05,
        "drill": 3.302
      },
      {
        "x": 31.75,
        "y": 19.05,
        "drill": 3.302
      },
      {
        "x": -31.75,
        "y": -19.05,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-wig09555"]["artwork"],
    "backArtwork": assets["sparkfun-module-wig09555"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-wig09555"]["provenance"],
    "internalConnections": [
      [
        "jp8-gnd",
        "jp9-2",
        "jp1-1",
        "x2-2",
        "x2-1"
      ],
      [
        "jp1-2",
        "x2-6"
      ],
      [
        "jp1-3",
        "x2-7"
      ],
      [
        "jp1-4",
        "x2-8"
      ],
      [
        "jp1-5",
        "x2-4"
      ],
      [
        "jp1-6",
        "x2-3"
      ],
      [
        "jp1-7",
        "x2-5"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-obd-ii-uart.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/OBD-II_UART/blob/c35ae778350c3c9f5c8568319e0dbf106518fd76/Hardware/OBD-II-UART.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/OBD-II_UART/blob/c35ae778350c3c9f5c8568319e0dbf106518fd76/Hardware/OBD-II-UART.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/OBD-II_UART/blob/c35ae778350c3c9f5c8568319e0dbf106518fd76/Hardware/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-obd-ii-uart.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "WIG-09555",
      "reportedStock": "In stock"
    },
    "description": "SparkFun WIG-09555. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -29.58,
      -29.817,
      31.75,
      20.36
    ]
  },
];
