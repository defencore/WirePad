import assets from "./environmental-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "adafruit-module-4026",
    "sku": "ADA4026",
    "name": "Adafruit STEMMA Soil Sensor - I2C Capacitive Moisture Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4026",
    "revision": "EAGLE Adafruit STEMMA Soil Sensor.brd; commit b20a708dd015",
    "category": "Sensors",
    "board": {
      "width": 76.2,
      "height": 13.97,
      "color": "#246545",
      "outline": "M24.910841 6.985A2.54 2.54 0 0 0 25.854172 6.803331L36.503331 2.543669A2.539999 2.539999 0 0 0 38.1 0.185338L38.1 0.068663A2.54 2.54 0 0 0 36.503331 -2.289669L25.854172 -6.549331A2.747318 2.747318 0 0 0 24.910841 -6.985L-38.1 -6.985L-38.1 6.985L24.910841 6.985Z"
    },
    "contacts": assets["adafruit-module-4026"]["contacts"],
    "holes": [
      {
        "x": -15.24,
        "y": -4.191,
        "drill": 2.54
      },
      {
        "x": -15.24,
        "y": 4.445,
        "drill": 2.54
      }
    ],
    "artwork": assets["adafruit-module-4026"]["artwork"],
    "backArtwork": assets["adafruit-module-4026"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["adafruit-module-4026"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4026"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/Adafruit%20STEMMA%20Soil%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/Adafruit%20STEMMA%20Soil%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-STEMMA-Soil-Sensor-PCB/blob/b20a708dd015cb81da8740460d47aae1555a1781/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4026",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4026",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4026. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -37.583999999999996,
      -6.347,
      -18.534,
      6.04
    ],
    "backArtworkBounds": [
      -34.202999999999996,
      -2.199,
      -30.821,
      2.453
    ]
  },
  {
    "id": "adafruit-module-3199",
    "sku": "ADA3199",
    "name": "Adafruit MiCS5524 CO, Alcohol and VOC Gas Sensor Breakout",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3199",
    "revision": "EAGLE Adafruit MICS-5524.brd; commit d347601d3c62",
    "category": "Sensors",
    "board": {
      "width": 12.7,
      "height": 19.05,
      "color": "#246545",
      "outline": "M6.35 6.985A2.54 2.54 0 0 1 3.81 9.525L-3.81 9.525A2.54 2.54 0 0 1 -6.35 6.985L-6.35 -6.985A2.54 2.54 0 0 1 -3.81 -9.525L3.81 -9.525A2.54 2.54 0 0 1 6.35 -6.985L6.35 6.985Z"
    },
    "contacts": assets["adafruit-module-3199"]["contacts"],
    "holes": [
      {
        "x": -3.81,
        "y": -6.985,
        "drill": 2.5
      },
      {
        "x": 3.81,
        "y": -6.985,
        "drill": 2.5
      }
    ],
    "artwork": assets["adafruit-module-3199"]["artwork"],
    "backArtwork": assets["adafruit-module-3199"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-3199"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3199"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/Adafruit%20MICS-5524.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/Adafruit%20MICS-5524.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-MiCS-5524-Gas-Sensor-Breakout-PCB/blob/d347601d3c62369d5b22a20b0e3f15a8fc04ef48/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3199",
      "status": "Official Adafruit stock feed reported 68 available.",
      "sku": "ADA3199",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "68"
    },
    "description": "Adafruit ADA3199. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.526,
      -4.529,
      6.0304,
      4.2564
    ]
  },
  {
    "id": "adafruit-module-6362",
    "sku": "ADA6362",
    "name": "Adafruit Simple Soil Moisture Sensor - For micro:bit, and more",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6362",
    "revision": "EAGLE Adafruit Simple Soil Moisture Sensor.brd; commit c5401f929e78",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 51.605578,
      "color": "#246545",
      "outline": "M2.54 20.76637A1.016 1.016 0 0 0 2.837578 21.484789L7.155578 25.802789A1.016001 1.016001 0 0 0 8.89 25.08437L8.89 -10.562789L10.16 -10.562789A2.54 2.54 0 0 0 12.7 -13.102789L12.7 -23.262789A2.54 2.54 0 0 0 10.16 -25.802789L-10.16 -25.802789A2.54 2.54 0 0 0 -12.7 -23.262789L-12.7 -13.102789A2.54 2.54 0 0 0 -10.16 -10.562789L-8.89 -10.562789L-8.89 24.991986A1.016 1.016 0 0 0 -7.162872 25.717627L-2.844872 21.485986A1.016 1.016 0 0 0 -2.54 20.760345L-2.54 -9.292789A1.27 1.27 0 0 1 -1.27 -10.562789L1.27 -10.562789A1.27 1.27 0 0 1 2.54 -9.292789L2.54 20.76637Z"
    },
    "contacts": assets["adafruit-module-6362"]["contacts"],
    "holes": [],
    "artwork": assets["adafruit-module-6362"]["artwork"],
    "backArtwork": assets["adafruit-module-6362"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6362"]["provenance"],
    "internalConnections": [
      [
        "cn1-2",
        "tp1-p-1"
      ],
      [
        "cn1-3",
        "tp3-p-1"
      ],
      [
        "cn1-1",
        "tp2-p-1"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6362"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/Adafruit%20Simple%20Soil%20Moisture%20Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/Adafruit%20Simple%20Soil%20Moisture%20Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-Simple-Soil-Moisture-Sensor-PCB/blob/c5401f929e78ba1f8dc35b9587ab3c62d0f73073/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6362",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA6362",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA6362. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.222499999999998,
      -18.182789,
      0.4464,
      -12.152389
    ]
  },
  {
    "id": "adafruit-module-6455",
    "sku": "ADA6455",
    "name": "Adafruit SGP41 Multi-Pixel Gas Sensor Breakout - VOC & NOx",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6455",
    "revision": "EAGLE Adafruit SGP41 Gas Sensor Breakout rev A.brd; commit 9c8e8c6d195e",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6455"]["contacts"],
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
    "artwork": assets["adafruit-module-6455"]["artwork"],
    "backArtwork": assets["adafruit-module-6455"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6455"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6455"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/Adafruit%20SGP41%20Gas%20Sensor%20Breakout%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/Adafruit%20SGP41%20Gas%20Sensor%20Breakout%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SGP41-Gas-Sensor-Breakout-PCB/blob/9c8e8c6d195e430a3537b0dca20fe7e310ece822/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6455",
      "status": "Official Adafruit stock feed reported 13 available.",
      "sku": "ADA6455",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "13"
    },
    "description": "Adafruit ADA6455. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.79,
      12.286,
      3.875
    ]
  },
  {
    "id": "adafruit-module-4829",
    "sku": "ADA4829",
    "name": "Adafruit SGP40 Air Quality Sensor Breakout - VOC Index",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/4829",
    "revision": "EAGLE Adafruit SGP40.brd; commit 57911e5d238b",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-4829"]["contacts"],
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
    "artwork": assets["adafruit-module-4829"]["artwork"],
    "backArtwork": assets["adafruit-module-4829"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-4829"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/4829"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/Adafruit%20SGP40.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/Adafruit%20SGP40.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SGP40-PCB/blob/57911e5d238bc5c3730c621e3135ff2aa36604ec/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/4829",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA4829",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA4829. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.79,
      12.286,
      3.875
    ]
  },
  {
    "id": "adafruit-module-5606",
    "sku": "ADA5606",
    "name": "Adafruit ENS160 MOX Gas Sensor - Sciosense CCS811 Upgrade",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/5606",
    "revision": "EAGLE Adafruit ENS160.brd; commit 70109a844d55",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-5606"]["contacts"],
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
    "artwork": assets["adafruit-module-5606"]["artwork"],
    "backArtwork": assets["adafruit-module-5606"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-5606"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-6"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/5606"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/Adafruit%20ENS160.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/Adafruit%20ENS160.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ENS160-PCB/blob/70109a844d554d955433ffba0b05acc497bd77d5/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/5606",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA5606",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA5606. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.615,
      12.286,
      3.915
    ],
    "backArtworkBounds": [
      -4.485,
      -1.183,
      -1.103,
      0.929
    ]
  },
  {
    "id": "adafruit-module-6431",
    "sku": "ADA6431",
    "name": "Adafruit ENS161 MOX Gas Sensor",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/6431",
    "revision": "EAGLE Adafruit ENS161 MOX Gas Sensor rev A.brd; commit e86ce34b208d",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-6431"]["contacts"],
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
    "artwork": assets["adafruit-module-6431"]["artwork"],
    "backArtwork": assets["adafruit-module-6431"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["adafruit-module-6431"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp2-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp2-6"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp2-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp2-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/6431"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/Adafruit%20ENS161%20MOX%20Gas%20Sensor%20rev%20A.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/Adafruit%20ENS161%20MOX%20Gas%20Sensor%20rev%20A.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-ENS161-MOX-Gas-Sensor-PCB/blob/e86ce34b208d4d83c8f4cb945312f6c976704c81/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/6431",
      "status": "Official Adafruit stock feed reported 45 available.",
      "sku": "ADA6431",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "45"
    },
    "description": "Adafruit ADA6431. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.615,
      12.286,
      3.915
    ],
    "backArtworkBounds": [
      -4.485,
      -1.183,
      -1.103,
      0.929
    ]
  },
  {
    "id": "adafruit-module-3709",
    "sku": "ADA3709",
    "name": "Adafruit SGP30 Air Quality Sensor Breakout - VOC and eCO2",
    "manufacturer": "Adafruit",
    "source": "https://www.adafruit.com/product/3709",
    "revision": "EAGLE SGP30 Rev D.brd; commit 7050ebded47a",
    "category": "Sensors",
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "board": {
      "width": 25.4,
      "height": 17.78,
      "color": "#246545",
      "outline": "M-12.7 6.35A2.54 2.54 0 0 0 -10.16 8.89L10.16 8.89A2.54 2.54 0 0 0 12.7 6.35L12.7 -6.35A2.54 2.54 0 0 0 10.16 -8.89L-10.16 -8.89A2.54 2.54 0 0 0 -12.7 -6.35L-12.7 6.35Z"
    },
    "contacts": assets["adafruit-module-3709"]["contacts"],
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
    "artwork": assets["adafruit-module-3709"]["artwork"],
    "backArtwork": assets["adafruit-module-3709"]["backArtwork"],
    "provenance": assets["adafruit-module-3709"]["provenance"],
    "internalConnections": [
      [
        "conn3-2",
        "conn4-2",
        "jp3-1"
      ],
      [
        "conn3-3",
        "conn4-3",
        "jp3-5"
      ],
      [
        "conn3-1",
        "conn3-mt1",
        "conn3-mt2",
        "conn4-1",
        "conn4-mt1",
        "conn4-mt2",
        "jp3-3"
      ],
      [
        "conn3-4",
        "conn4-4",
        "jp3-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.adafruit.com/product/3709"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/SGP30%20Rev%20D.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/SGP30%20Rev%20D.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/adafruit/Adafruit-SGP30-PCB/blob/7050ebded47a6c29e98e50ed1329a57262b66f66/license.txt"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.adafruit.com/product/3709",
      "status": "Official Adafruit product feed reported in stock.",
      "sku": "ADA3709",
      "feed": "https://www.adafruit.com/api/products",
      "reportedStock": "in stock"
    },
    "description": "Adafruit ADA3709. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.286,
      -4.79,
      12.286,
      3.875
    ]
  },
];
