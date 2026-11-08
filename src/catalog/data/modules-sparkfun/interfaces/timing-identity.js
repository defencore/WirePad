import assets from "./timing-identity-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob10160",
    "sku": "BOB-10160",
    "name": "SparkFun DeadOn RTC Breakout - DS3234",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-deadon-rtc-breakout-ds3234.html",
    "revision": "EAGLE DeadOn RTC - DS3234 Breakout-v11.brd; commit c5d6d0ee0d7e",
    "category": "Interfaces",
    "board": {
      "width": 20.32,
      "height": 20.32,
      "color": "#9b242d",
      "outline": "M5.08 -10.16A6.023345 6.023345 0 0 1 -5.08 -10.16L-10.16 -10.16L-10.16 10.16L10.16 10.16L10.16 -10.16L5.08 -10.16Z"
    },
    "contacts": assets["sparkfun-module-bob10160"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob10160"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob10160"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-bob10160"]["provenance"],
    "internalConnections": [
      [
        "jp1-7",
        "bat1-gnd"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-deadon-rtc-breakout-ds3234.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Hardware/DeadOn%20RTC%20-%20DS3234%20Breakout-v11.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Hardware/DeadOn%20RTC%20-%20DS3234%20Breakout-v11.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Libraries/Arduino/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-deadon-rtc-breakout-ds3234.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-10160",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-10160. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.93,
      -3.79,
      8.93,
      10.2
    ],
    "backArtworkBounds": [
      -6.136,
      -9.184,
      6.136,
      2.58
    ]
  },
  {
    "id": "sparkfun-module-bob16281",
    "sku": "BOB-16281",
    "name": "SparkFun Real Time Clock Module - RV-8803 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-real-time-clock-module-rv-8803-qwiic.html",
    "revision": "EAGLE Qwiic_RTC_RV8803.brd; commit 3e7ea152fc18",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-bob16281"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob16281"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob16281"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-bob16281"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j2-1",
        "j3-1",
        "bt2-gnd"
      ],
      [
        "j1-2",
        "j2-2",
        "j3-2"
      ],
      [
        "j1-3",
        "j2-3",
        "j3-3"
      ],
      [
        "j1-4",
        "j2-4",
        "j3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-real-time-clock-module-rv-8803-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/Hardware/Qwiic_RTC_RV8803.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/Hardware/Qwiic_RTC_RV8803.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-real-time-clock-module-rv-8803-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-16281",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-16281. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -8.93,
      12.26,
      11.7875
    ],
    "backArtworkBounds": [
      -6.136,
      -13.239,
      6.136,
      -0.849
    ]
  },
  {
    "id": "sparkfun-module-dev15573",
    "sku": "DEV-15573",
    "name": "SparkFun Cryptographic Co-Processor Breakout - ATECC508A (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc508a-qwiic.html",
    "revision": "EAGLE SparkFun_Cryptographic_Co-processor_ATECC508A.brd; commit da869f8ba6f8",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-dev15573"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-dev15573"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev15573"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-dev15573"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j3-1",
        "j2-1"
      ],
      [
        "j1-2",
        "j3-2",
        "j2-2"
      ],
      [
        "j1-3",
        "j3-3",
        "j2-3"
      ],
      [
        "j1-4",
        "j3-4",
        "j2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc508a-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/Hardware/SparkFun_Cryptographic_Co-processor_ATECC508A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/Hardware/SparkFun_Cryptographic_Co-processor_ATECC508A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc508a-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-15573",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-15573. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -3.04,
      12.26,
      5.59625
    ],
    "backArtworkBounds": [
      -4.866,
      2.0428,
      8.7268,
      6.1106
    ]
  },
  {
    "id": "sparkfun-module-dev18077",
    "sku": "DEV-18077",
    "name": "SparkFun Cryptographic Co-Processor Breakout - ATECC608A (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc608a-qwiic.html",
    "revision": "EAGLE SparkFun_Cryptographic_Co-processor_ATECC608A.brd; commit a9a339c4b7ac",
    "category": "Interfaces",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-dev18077"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": 10.16,
        "drill": 3.302
      },
      {
        "x": -10.16,
        "y": 10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-dev18077"]["artwork"],
    "backArtwork": assets["sparkfun-module-dev18077"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-dev18077"]["provenance"],
    "internalConnections": [
      [
        "j1-1",
        "j3-1",
        "j2-1"
      ],
      [
        "j1-2",
        "j3-2",
        "j2-2"
      ],
      [
        "j1-3",
        "j3-3",
        "j2-3"
      ],
      [
        "j1-4",
        "j3-4",
        "j2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc608a-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/Hardware/SparkFun_Cryptographic_Co-processor_ATECC608A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/Hardware/SparkFun_Cryptographic_Co-processor_ATECC608A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-cryptographic-co-processor-breakout-atecc608a-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "DEV-18077",
      "reportedStock": "In stock"
    },
    "description": "SparkFun DEV-18077. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -4.1928,
      12.26,
      5.806
    ],
    "backArtworkBounds": [
      -4.866,
      2.0428,
      8.7268,
      6.1106
    ]
  },
];
