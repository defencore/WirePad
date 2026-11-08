import assets from "./timing-identity-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-bob10160",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6", "jp1-7"],
      "source": {"label": "SparkFun BOB-10160: EAGLE DeadOn RTC - DS3234 Breakout-v11.brd; commit c5d6d0ee0d7e physical insertion headers", "url": "https://github.com/sparkfun/DeadOn_RTC/blob/c5d6d0ee0d7e84953a3c0a122b234d60a61bf15d/Hardware/DeadOn%20RTC%20-%20DS3234%20Breakout-v11.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "JP1", "count": 7, "package": "1X07"}],
        "boardSha256": "9c5d5d32bfddcaa07ed9495b2db79f1760537b809811d5c61fb2c23e5768e8a7"
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -10.16, "y": -10.16, "width": 20.32, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
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
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4", "j3-5", "j3-6", "j3-7", "j3-8"],
      "source": {"label": "SparkFun BOB-16281: EAGLE Qwiic_RTC_RV8803.brd; commit 3e7ea152fc18 physical insertion headers", "url": "https://github.com/sparkfun/Qwiic_Real_Time_Clock_RV-8803/blob/3e7ea152fc18804519abb0774bacf88edacfb60f/Hardware/Qwiic_RTC_RV8803.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Exact manufacturer EAGLE connector package and full plated header rows reviewed. Only source-identified primary header holes are insertion leads. Source model internal connections verify every excluded duplicate header/castellation terminal is electrically represented by a selected lead.",
        "connectors": [{"id": "J3", "count": 8, "package": "1X08_NO_SILK"}],
        "boardSha256": "2127e2c8ebbf97e776a6f41944f2fa848065d341c9c4fa40fc059ee04b2f4d1a"
      },
      "projectRearContacts": true,
      "rearOverhangRegions": [{"x": -6.0, "y": -13.239, "width": 12.0, "height": 12.0}],
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4},
        {"x": -6.0, "y": -13.239, "width": 12.0, "height": 12.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
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
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4"],
      "source": {"label": "SparkFun DEV-15573: EAGLE SparkFun_Cryptographic_Co-processor_ATECC508A.brd; commit da869f8ba6f8 header geometry", "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC508A_Qwiic/blob/da869f8ba6f81d4b27afae658ca783c68a12dfaa/Hardware/SparkFun_Cryptographic_Co-processor_ATECC508A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "e434d8ba6f9358e1785c73b8faaaa22200054bc3600775f5ceaf881aa56a5023"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
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
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4"],
      "source": {"label": "SparkFun DEV-18077: EAGLE SparkFun_Cryptographic_Co-processor_ATECC608A.brd; commit a9a339c4b7ac header geometry", "url": "https://github.com/sparkfun/SparkFun_Cryptographic_Co-Processor_Breakout_ATECC608A_Qwiic/blob/a9a339c4b7ac3794252c8a24e5d9b2c1dacdae88/Hardware/SparkFun_Cryptographic_Co-processor_ATECC608A.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "c1d0f7dd71764546791af3a52f1598dd16b7a4d418b8af16b97699e9ced71c1d"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
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
