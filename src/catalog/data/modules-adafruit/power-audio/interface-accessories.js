import assets from "./interface-accessories-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-3435",
    "sku": "ADA3435",
    "name": "Adafruit TPL5110 Low Power Timer Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3435",
    "revision": "EAGLE Adafruit TPL5110.brd; commit f1967694bc20",
    "category": "Power",
    "board": {
      "width": 17.78,
      "height": 19.05,
      "color": "#246545",
      "outline": "M6.35 -9.525A2.54 2.54 0 0 1 8.89 -6.985L8.89 6.985A2.54 2.54 0 0 1 6.35 9.525L-6.35 9.525A2.54 2.54 0 0 1 -8.89 6.985L-8.89 -6.985A2.54 2.54 0 0 1 -6.35 -9.525L6.35 -9.525Z"
    },
    "contacts": assets["adafruit-module-3435"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -6.35,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3435"]["artwork"],
    "backArtwork": assets["adafruit-module-3435"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3435"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3435"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/Adafruit%20TPL5110.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/Adafruit%20TPL5110.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPL5110-Power-Timer-Breakout-PCB/blob/f1967694bc20333d31b167e4eeaff58742e37bba/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3435",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3435",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3435. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -8.193,
      -8.42,
      8.193,
      4.1395
    ],
    "backArtworkBounds": [
      -7.406,
      -1.691,
      7.406,
      0.421
    ]
  },
  {
    "id": "adafruit-module-3573",
    "sku": "ADA3573",
    "name": "Adafruit TPL5111 Low Power Timer Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3573",
    "revision": "EAGLE Adafruit TPL5111 Reset Enable Timer.brd; commit 7a19d15939cb",
    "category": "Power",
    "board": {
      "width": 17.78,
      "height": 19.05,
      "color": "#246545",
      "outline": "M-8.89 -6.985A2.54 2.54 0 0 1 -6.35 -9.525L6.35 -9.525A2.54 2.54 0 0 1 8.89 -6.985L8.89 6.985A2.54 2.54 0 0 1 6.35 9.525L-6.35 9.525A2.54 2.54 0 0 1 -8.89 6.985L-8.89 -6.985Z"
    },
    "contacts": assets["adafruit-module-3573"]["contacts"],
    "holes": [
      {
        "x": 6.35,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": -6.35,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3573"]["artwork"],
    "backArtwork": assets["adafruit-module-3573"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-3573"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "b1-2"
      ],
      [
        "jp1-2",
        "b1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3573"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/Adafruit%20TPL5111%20Reset%20Enable%20Timer.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/Adafruit%20TPL5111%20Reset%20Enable%20Timer.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPL5111-Reset-Enable-Timer-PCB/blob/7a19d15939cb776f1931c3b4b38ac35509f06bd3/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3573",
      "status": "Official Adafruit stock feed reported 7 available.",
      "sku": "ADA3573",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "7"
    },
    "description": "Adafruit ADA3573. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.288,
      -8.42,
      7.315,
      3.903
    ],
    "backArtworkBounds": [
      -7.787,
      -9.008999999999999,
      7.787,
      -0.341
    ]
  },
  {
    "id": "adafruit-module-5639",
    "sku": "ADA5639",
    "name": "Adafruit High Power Infrared IR LED Emitter - STEMMA JST PH 2mm",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5639",
    "revision": "EAGLE IR STEMMA LED Emitter.brd; commit bf82859bcb77",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.033 8.89A2.604274 2.604274 0 0 0 12.7 6.35L12.7 2.413L12.192 1.27L12.192 -1.524L12.7 -2.667L12.7 -6.35A2.604274 2.604274 0 0 0 10.033 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5639"]["contacts"],
    "holes": [
      {
        "x": 10.16,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5639"]["artwork"],
    "backArtwork": assets["adafruit-module-5639"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5639"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x4-3",
        "jp2-1"
      ],
      [
        "jp1-2",
        "x4-2",
        "jp2-2"
      ],
      [
        "jp1-3",
        "x4-1",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5639"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/IR%20STEMMA%20LED%20Emitter.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/IR%20STEMMA%20LED%20Emitter.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-High-Power-Infrared-LED-Emitter-PCB/blob/bf82859bcb77e3b545f9ae6dc629a24ca0695343/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5639",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5639",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5639. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.1045,
      -7.203,
      12.635,
      7.444
    ],
    "backArtworkBounds": [
      -3.0245,
      -4.485,
      6.644,
      3.596
    ]
  },
  {
    "id": "adafruit-module-6354",
    "sku": "ADA6354",
    "name": "Adafruit TPS61169 Constant Current Boost Converter for LEDs",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6354",
    "revision": "EAGLE Adafruit TPS61169 Constant Current Boost Converter LED Driver.brd; commit c538e5fd9950",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 19.05,
      "color": "#246545",
      "outline": "M-12.7 6.985A2.54 2.54 0 0 0 -10.16 9.525L10.16 9.525A2.54 2.54 0 0 0 12.7 6.985L12.7 -6.985A2.54 2.54 0 0 0 10.16 -9.525L-10.16 -9.525A2.54 2.54 0 0 0 -12.7 -6.985L-12.7 6.985Z"
    },
    "contacts": assets["adafruit-module-6354"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": -10.16,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 6.985,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6354"]["artwork"],
    "backArtwork": assets["adafruit-module-6354"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6354"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "x2-1"
      ],
      [
        "jp1-2",
        "x2-2"
      ],
      [
        "jp1-4",
        "x1-2"
      ],
      [
        "jp1-5",
        "x1-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6354"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/Adafruit%20TPS61169%20Constant%20Current%20Boost%20Converter%20LED%20Driver.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/Adafruit%20TPS61169%20Constant%20Current%20Boost%20Converter%20LED%20Driver.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-TPS61169-Constant-Current-Boost-Converter-PCB/blob/c538e5fd9950a652d65cf40744e51a227d458ab2/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6354",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6354",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6354. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.53,
      -9.436,
      12.53,
      5.18
    ]
  },
  {
    "id": "adafruit-module-5959",
    "sku": "ADA5959",
    "name": "Adafruit S-35710 Low-Power Wake Up Timer Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5959",
    "revision": "EAGLE Adafruit S-35710 Breakout.brd; commit acc0684ee70d",
    "category": "Power",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5959"]["contacts"],
    "holes": [
      {
        "x": 1.5,
        "y": -5.334,
        "drill": 0.9
      },
      {
        "x": -1.5,
        "y": -5.334,
        "drill": 0.9
      },
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
    "artwork": assets["adafruit-module-5959"]["artwork"],
    "backArtwork": assets["adafruit-module-5959"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5959"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "conn3-2",
        "conn4-2"
      ],
      [
        "jp1-2",
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2"
      ],
      [
        "jp1-3",
        "conn3-4",
        "conn4-4"
      ],
      [
        "jp1-4",
        "conn3-3",
        "conn4-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5959"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/Adafruit%20S-35710%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/Adafruit%20S-35710%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-S-35710-Breakout-PCB/blob/acc0684ee70d88a395b09dcea589cb5b443159db/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5959",
      "status": "Official Adafruit stock feed reported 82 available.",
      "sku": "ADA5959",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "82"
    },
    "description": "Adafruit ADA5959. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -8.174,
      12.159,
      4.1254
    ],
    "backArtworkBounds": [
      -7.8505,
      -5.628,
      7.7235,
      4.866
    ]
  },
  {
    "id": "adafruit-module-4648",
    "sku": "ADA4648",
    "name": "Adafruit PCF8591 Quad 8-bit ADC + 8-bit DAC - STEMMA QT / Qwiic",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4648",
    "revision": "EAGLE Adafruit_PCF8591.brd; commit 618da56679c5",
    "category": "ADC",
    "board": {
      "width": 25.4,
      "height": 22.86,
      "color": "#246545",
      "outline": "M-12.7 8.89A2.54 2.54 0 0 0 -10.16 11.43L10.16 11.43A2.54 2.54 0 0 0 12.7 8.89L12.7 -8.89A2.54 2.54 0 0 0 10.16 -11.43L-10.16 -11.43A2.54 2.54 0 0 0 -12.7 -8.89L-12.7 8.89Z"
    },
    "contacts": assets["adafruit-module-4648"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": 10.16,
        "y": -8.89,
        "drill": 2.54
      },
      {
        "x": -10.16,
        "y": 8.89,
        "drill": 2.5
      },
      {
        "x": 10.16,
        "y": 8.89,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-4648"]["artwork"],
    "backArtwork": assets["adafruit-module-4648"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4648"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-4"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-7",
        "jp2-2"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4648"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/Adafruit_PCF8591.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/Adafruit_PCF8591.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-PCF8591-PCB/blob/618da56679c56b97583774e2c2f724c453e78396/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4648",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4648",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4648. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -5.8135,
      12.286,
      6.5755
    ],
    "backArtworkBounds": [
      -3.342,
      -2.199,
      3.342,
      5.628
    ]
  },
  {
    "id": "adafruit-module-5335",
    "sku": "ADA5335",
    "name": "Adafruit CP2102N Friend - USB to Serial Converter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5335",
    "revision": "EAGLE Adafruit CP2102N Friend.brd; commit 1c29f780bdc7",
    "category": "Power",
    "board": {
      "width": 17.78,
      "height": 27.94,
      "color": "#246545",
      "outline": "M-8.89 -12.065A1.905 1.905 0 0 1 -6.985 -13.97L6.985 -13.97A1.905 1.905 0 0 1 8.89 -12.065L8.89 13.97L-8.89 13.97L-8.89 -12.065Z"
    },
    "contacts": assets["adafruit-module-5335"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -8.579,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -8.579,
        "drill": 0.65
      },
      {
        "x": 6.858,
        "y": -11.938,
        "drill": 2.2
      },
      {
        "x": -6.858,
        "y": -11.938,
        "drill": 2.2
      }
    ],
    "artwork": assets["adafruit-module-5335"]["artwork"],
    "backArtwork": assets["adafruit-module-5335"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5335"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp4-3",
        "x2-a1b12",
        "x2-b1a12"
      ],
      [
        "jp1-2",
        "jp2-1"
      ],
      [
        "jp1-3",
        "jp4-1",
        "x2-a4b9",
        "x2-b4a9"
      ],
      [
        "jp1-4",
        "jp2-4"
      ],
      [
        "jp1-5",
        "jp2-3"
      ],
      [
        "jp1-6",
        "jp2-2"
      ],
      [
        "x2-b7",
        "x2-a7"
      ],
      [
        "x2-a6",
        "x2-b6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5335"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/Adafruit%20CP2102N%20Friend.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/Adafruit%20CP2102N%20Friend.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-CP2102N-Friend-PCB/blob/1c29f780bdc7503e18c8b6d29d1f8fb7cc1510bb/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5335",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5335",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5335. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.51,
      -14.899,
      4.51,
      8.739
    ]
  },
  {
    "id": "adafruit-module-5568",
    "sku": "ADA5568",
    "name": "Adafruit WCH CH9102F Friend - USB to Serial Converter",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5568",
    "revision": "EAGLE Adafruit CH9102F.brd; commit eb022866b738",
    "category": "Power",
    "board": {
      "width": 17.78,
      "height": 27.94,
      "color": "#246545",
      "outline": "M-8.89 -12.065A1.905 1.905 0 0 1 -6.985 -13.97L6.985 -13.97A1.905 1.905 0 0 1 8.89 -12.065L8.89 13.97L-8.89 13.97L-8.89 -12.065Z"
    },
    "contacts": assets["adafruit-module-5568"]["contacts"],
    "holes": [
      {
        "x": -2.89,
        "y": -8.579,
        "drill": 0.65
      },
      {
        "x": 2.89,
        "y": -8.579,
        "drill": 0.65
      },
      {
        "x": 6.858,
        "y": -11.938,
        "drill": 2.5
      },
      {
        "x": -6.858,
        "y": -11.938,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-5568"]["artwork"],
    "backArtwork": assets["adafruit-module-5568"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5568"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp4-3",
        "x2-a1b12",
        "x2-b1a12"
      ],
      [
        "jp1-2",
        "jp2-1"
      ],
      [
        "jp1-3",
        "jp4-1",
        "x2-a4b9",
        "x2-b4a9"
      ],
      [
        "jp1-4",
        "jp2-4"
      ],
      [
        "jp1-5",
        "jp2-3"
      ],
      [
        "jp1-6",
        "jp2-2"
      ],
      [
        "x2-b7",
        "x2-a7"
      ],
      [
        "x2-a6",
        "x2-b6"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5568"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/Adafruit%20CH9102F.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/Adafruit%20CH9102F.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-WCH-CH9102F-Friend-PCB/blob/eb022866b738f738971172c8725546e7b221369f/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5568",
      "status": "Official Adafruit stock feed reported 12 available.",
      "sku": "ADA5568",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "12"
    },
    "description": "Adafruit ADA5568. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -4.51,
      -14.899,
      4.51,
      8.739
    ],
    "backArtworkBounds": [
      -1.5005,
      -4.0405,
      3.1515,
      -1.9285
    ]
  },
  {
    "id": "adafruit-module-6223",
    "sku": "ADA6223",
    "name": "Adafruit DAC7578 Breakout - 8 x Channel 12-bit I2C DAC",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6223",
    "revision": "EAGLE Adafruit DAC7578P Breakout.brd; commit b9eeb74cd3d0",
    "category": "Audio",
    "board": {
      "width": 27.94,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-13.97 6.35A2.54 2.54 0 0 0 -11.43 8.89L11.43 8.89A2.54 2.54 0 0 0 13.97 6.35L13.97 -6.35A2.54 2.54 0 0 0 11.43 -8.89L-11.43 -8.89A2.54 2.54 0 0 0 -13.97 -6.35L-13.97 6.35Z"
    },
    "contacts": assets["adafruit-module-6223"]["contacts"],
    "holes": [
      {
        "x": -11.43,
        "y": 6.35,
        "drill": 2.5
      },
      {
        "x": 11.43,
        "y": 6.35,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-6223"]["artwork"],
    "backArtwork": assets["adafruit-module-6223"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6223"]["provenance"],
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
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-10",
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
        "url": "https://www.adafruit.com/product/6223"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/Adafruit%20DAC7578P%20Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/Adafruit%20DAC7578P%20Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-DAC7578-Breakout-PCB/blob/b9eeb74cd3d047db6354b2b9f4fa5676c20b3bc9/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6223",
      "status": "Official Adafruit stock feed reported 28 available.",
      "sku": "ADA6223",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "28"
    },
    "description": "Adafruit ADA6223. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -13.556,
      -4.123,
      13.556,
      4.015
    ],
    "backArtworkBounds": [
      -10.327,
      -4.485,
      2.58,
      -0.849
    ]
  },
];
