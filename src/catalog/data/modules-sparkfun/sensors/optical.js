import assets from "./optical-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "sparkfun-module-sen17372",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3"],
      "source": {"label": "SparkFun SEN-17372: EAGLE SparkFun_PIR_Breakout.brd; commit e1c86b184744 header geometry", "url": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/Hardware/SparkFun_PIR_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 3, "package": "1X03_NO_SILK"}],
        "boardSha256": "cd41717cef0c8bc4fb4ef4cf274d7152d1b093a0499c055decf0bd34c639bb90"
      },
      "bodyRegions": [
        {"x": -6.35, "y": -10.795, "width": 12.7, "height": 21.59}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-17372",
    "name": "SparkFun PIR Breakout - 170uA (EKMC4607112K)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-pir-breakout-170ua-ekmc4607112k.html",
    "revision": "EAGLE SparkFun_PIR_Breakout.brd; commit e1c86b184744",
    "category": "Sensors",
    "board": {
      "width": 12.7,
      "height": 21.59,
      "color": "#9b242d",
      "outline": "M-6.35 10.795L6.35 10.795L6.35 -10.795L-6.35 -10.795L-6.35 10.795Z"
    },
    "contacts": assets["sparkfun-module-sen17372"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -8.255,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen17372"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen17372"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen17372"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-pir-breakout-170ua-ekmc4607112k.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/Hardware/SparkFun_PIR_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/Hardware/SparkFun_PIR_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/SparkFun_PIR_Breakout/blob/e1c86b1847447b501164085ba2aaa37a6c01d97a/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-pir-breakout-170ua-ekmc4607112k.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-17372",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-17372. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.55,
      -4.915,
      5.55,
      7.965
    ]
  },
  {
    "id": "sparkfun-module-bob08688",
    "mountingReview": {
      "contactIds": ["jp4-1", "jp4-2", "jp4-3"],
      "source": {"label": "SparkFun BOB-08688: EAGLE SparkFun_TEMT6000_Breakout-v12.brd; commit e330459795e7 header geometry", "url": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/Hardware/SparkFun_TEMT6000_Breakout-v12.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP4", "count": 3, "package": "1X03"}],
        "boardSha256": "5f9db816deeb6b63a45ec8972c6280e5e6b5bbc061b9841241044e8b244ea745"
      },
      "bodyRegions": [
        {"x": -5.08, "y": -5.08, "width": 10.16, "height": 10.16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-08688",
    "name": "SparkFun Ambient Light Sensor Breakout - TEMT6000",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-ambient-light-sensor-breakout-temt6000.html",
    "revision": "EAGLE SparkFun_TEMT6000_Breakout-v12.brd; commit e330459795e7",
    "category": "Sensors",
    "board": {
      "width": 10.16,
      "height": 10.16,
      "color": "#9b242d",
      "outline": "M-5.08 5.08L5.08 5.08L5.08 -5.08L-5.08 -5.08L-5.08 5.08Z"
    },
    "contacts": assets["sparkfun-module-bob08688"]["contacts"],
    "holes": [],
    "artwork": assets["sparkfun-module-bob08688"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob08688"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob08688"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-ambient-light-sensor-breakout-temt6000.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/Hardware/SparkFun_TEMT6000_Breakout-v12.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/Hardware/SparkFun_TEMT6000_Breakout-v12.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Ambient_Light_Sensor_Breakout-TEMT6000/blob/e330459795e7a05b63107fdf66340e42b33b1c33/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-ambient-light-sensor-breakout-temt6000.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-08688",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-08688. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -5.12,
      -3.85,
      3.042,
      3.85
    ]
  },
  {
    "id": "sparkfun-module-bob09322",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "SparkFun BOB-09322: EAGLE PhotoInterrupter-Breakout.brd; commit a2d2437948c4 header geometry", "url": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/Hardware/PhotoInterrupter-Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03"}],
        "boardSha256": "9ac99faa0b102dd491433ad88cfda329743656ca80fd202f3d15aec4f2f53d13"
      },
      "bodyRegions": [
        {"x": -10.16, "y": -7.62, "width": 20.32, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "BOB-09322",
    "name": "SparkFun Photo Interrupter Breakout Board - GP1A57HRJ00F",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-photo-interrupter-breakout-board-gp1a57hrj00f.html",
    "revision": "EAGLE PhotoInterrupter-Breakout.brd; commit a2d2437948c4",
    "category": "Sensors",
    "board": {
      "width": 20.32,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M10.14 7.62L10.16 -7.62L-10.16 -7.62L-10.16 7.62L10.14 7.62Z"
    },
    "contacts": assets["sparkfun-module-bob09322"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 3.81,
        "drill": 1.5
      },
      {
        "x": -8.95,
        "y": 1.81,
        "drill": 0.7
      }
    ],
    "artwork": assets["sparkfun-module-bob09322"]["artwork"],
    "backArtwork": assets["sparkfun-module-bob09322"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-bob09322"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-photo-interrupter-breakout-board-gp1a57hrj00f.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/Hardware/PhotoInterrupter-Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/Hardware/PhotoInterrupter-Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Photo_Interrupter_Breakout/blob/a2d2437948c43567ae02486b14bb44938b972bb2/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-photo-interrupter-breakout-board-gp1a57hrj00f.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "BOB-09322",
      "reportedStock": "In stock"
    },
    "description": "SparkFun BOB-09322. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.54,
      -6.39,
      9.54,
      6.95
    ]
  },
  {
    "id": "sparkfun-module-rob09453",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "SparkFun ROB-09453: EAGLE QRE1113 Line Sensor Breakout - Analog.brd; commit 1671498b31a6 header geometry", "url": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/Hardware/QRE1113%20Line%20Sensor%20Breakout%20-%20Analog.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03"}],
        "boardSha256": "ac6968e743283e9ae96fa28f0716d3bde0c03b757c72ffc377881cb58ca878f3"
      },
      "bodyRegions": [
        {"x": -3.81, "y": -6.985, "width": 7.62, "height": 13.97}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ROB-09453",
    "name": "SparkFun Line Sensor Breakout - QRE1113 (Analog)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-analog.html",
    "revision": "EAGLE QRE1113 Line Sensor Breakout - Analog.brd; commit 1671498b31a6",
    "category": "Sensors",
    "board": {
      "width": 7.62,
      "height": 13.97,
      "color": "#9b242d",
      "outline": "M-3.81 6.985L3.81 6.985L3.81 -6.985L-3.81 -6.985L-3.81 6.985Z"
    },
    "contacts": assets["sparkfun-module-rob09453"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -4.445,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-rob09453"]["artwork"],
    "backArtwork": assets["sparkfun-module-rob09453"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-rob09453"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-analog.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/Hardware/QRE1113%20Line%20Sensor%20Breakout%20-%20Analog.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/Hardware/QRE1113%20Line%20Sensor%20Breakout%20-%20Analog.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor-Analog/blob/1671498b31a63009afdcaf7832a2de51793f45f2/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-analog.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "ROB-09453",
      "reportedStock": "In stock"
    },
    "description": "SparkFun ROB-09453. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -1.92,
      -1.105,
      1.92,
      3.647
    ],
    "backArtworkBounds": [
      -3.85,
      4.405,
      3.85,
      7.025
    ]
  },
  {
    "id": "sparkfun-module-rob09454",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3"],
      "source": {"label": "SparkFun ROB-09454: EAGLE SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd; commit c9880cb4f6ba header geometry", "url": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/Hardware/SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 3, "package": "1X03"}],
        "boardSha256": "e0a672c7003eaba2524e3000f64ab2d30c478b346b7562f2aeae9f9cfaead6a6"
      },
      "bodyRegions": [
        {"x": -3.81, "y": -6.985, "width": 7.62, "height": 13.97}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "ROB-09454",
    "name": "SparkFun Line Sensor Breakout - QRE1113 (Digital)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-digital.html",
    "revision": "EAGLE SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd; commit c9880cb4f6ba",
    "category": "Sensors",
    "board": {
      "width": 7.62,
      "height": 13.97,
      "color": "#9b242d",
      "outline": "M-3.81 6.985L3.81 6.985L3.81 -6.985L-3.81 -6.985L-3.81 6.985Z"
    },
    "contacts": assets["sparkfun-module-rob09454"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": -4.445,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-rob09454"]["artwork"],
    "backArtwork": assets["sparkfun-module-rob09454"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-rob09454"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-digital.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/Hardware/SparkFun_QRE1113_Line_Sensor_Breakout_Digital.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/Hardware/SparkFun_QRE1113_Line_Sensor_Breakout_Digital.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/QRE1113_Line_Sensor_Breakout-Digital/blob/c9880cb4f6baa0265e30cb472d816f04ea348d86/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-line-sensor-breakout-qre1113-digital.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "ROB-09454",
      "reportedStock": "In stock"
    },
    "description": "SparkFun ROB-09454. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -1.44,
      -1.105,
      1.467,
      2.375
    ],
    "backArtworkBounds": [
      -3.85,
      4.405,
      3.85,
      7.025
    ]
  },
  {
    "id": "sparkfun-module-sen11769",
    "sku": "SEN-11769",
    "name": "SparkFun RedBot Sensor - Line Follower",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-redbot-sensor-line-follower.html",
    "revision": "EAGLE RedBot_Line_Sensor.brd; commit 81f44b084360",
    "category": "Sensors",
    "board": {
      "width": 7.62,
      "height": 24.13,
      "color": "#9b242d",
      "outline": "M-3.81 12.065L3.81 12.065L3.81 -12.065L-3.81 -12.065L-3.81 12.065Z"
    },
    "contacts": assets["sparkfun-module-sen11769"]["contacts"],
    "holes": [
      {
        "x": 1.27,
        "y": 10.795,
        "drill": 1.3589
      },
      {
        "x": -1.27,
        "y": 10.795,
        "drill": 1.3589
      },
      {
        "x": 0,
        "y": -0.635,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen11769"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen11769"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate. Opposite-side solder contacts are projected onto one F.Cu reference carrier; use the pinned manufacturer CAD for actual layer placement and production assembly.",
    "provenance": assets["sparkfun-module-sen11769"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-redbot-sensor-line-follower.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/Hardware/RedBot_Line_Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/Hardware/RedBot_Line_Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/RedBot_Line_Sensor/blob/81f44b0843601dd5127585ba34b0852fb47d67b0/README.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-redbot-sensor-line-follower.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-11769",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-11769. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -1.729,
      -11.264999999999999,
      1.742,
      -5.319
    ],
    "backArtworkBounds": [
      -3.85,
      9.505,
      3.85,
      18.085
    ]
  },
  {
    "id": "sparkfun-module-sen12829",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5"],
      "source": {"label": "SparkFun SEN-12829: EAGLE SparkFun_ISL29125_Breakout.brd; commit 97a4a9128a24 header geometry", "url": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/Hardware/SparkFun_ISL29125_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 5, "package": "1X05"}],
        "boardSha256": "9c40d52b4345d2ebe63d2c04fa8d7a0840c9d0b24488638fa49be35ccec48b09"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -8.255, "width": 17.78, "height": 16.51}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-12829",
    "name": "SparkFun RGB Light Sensor - ISL29125",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-rgb-light-sensor-isl29125.html",
    "revision": "EAGLE SparkFun_ISL29125_Breakout.brd; commit 97a4a9128a24",
    "category": "Sensors",
    "board": {
      "width": 17.78,
      "height": 16.51,
      "color": "#9b242d",
      "outline": "M8.87 8.255L8.89 -8.255L-8.89 -8.255L-8.89 8.255L8.87 8.255Z"
    },
    "contacts": assets["sparkfun-module-sen12829"]["contacts"],
    "holes": [
      {
        "x": -6.35,
        "y": -5.715,
        "drill": 3.302
      },
      {
        "x": 6.35,
        "y": -5.715,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen12829"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12829"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12829"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-rgb-light-sensor-isl29125.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/Hardware/SparkFun_ISL29125_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/Hardware/SparkFun_ISL29125_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ISL29125_Breakout/blob/97a4a9128a247f3f6526d20b2deab9c502e6d48e/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-rgb-light-sensor-isl29125.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12829",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12829. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.39,
      -2.3770000000000002,
      6.39,
      8.295
    ],
    "backArtworkBounds": [
      5.802,
      0.849,
      8.93,
      2.961
    ]
  },
  {
    "id": "sparkfun-module-sen12784",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "SparkFun SEN-12784: EAGLE SparkFun_VL6180_Breakout.brd; commit 2faa308fd111 header geometry", "url": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/Hardware/SparkFun_VL6180_Breakout.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06"}],
        "boardSha256": "cb42395e065042391444b8f1c4a75090208085f8474b0353ceeb04da37e1117c"
      },
      "bodyRegions": [
        {"x": -8.89, "y": -7.62, "width": 17.78, "height": 15.24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-12784",
    "name": "SparkFun ToF Range Finder Breakout - VL6180",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-tof-range-finder-breakout-vl6180.html",
    "revision": "EAGLE SparkFun_VL6180_Breakout.brd; commit 2faa308fd111",
    "category": "Sensors",
    "board": {
      "width": 17.78,
      "height": 15.24,
      "color": "#9b242d",
      "outline": "M-8.89 7.62L8.89 7.62L8.89 -7.62L-8.89 -7.62L-8.89 7.62Z"
    },
    "contacts": assets["sparkfun-module-sen12784"]["contacts"],
    "holes": [
      {
        "x": -6.35,
        "y": -2.54,
        "drill": 3.302
      },
      {
        "x": 6.35,
        "y": -2.54,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen12784"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12784"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12784"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-tof-range-finder-breakout-vl6180.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/Hardware/SparkFun_VL6180_Breakout.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/Hardware/SparkFun_VL6180_Breakout.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Breakout-VL6180/blob/2faa308fd111d75ad37b4861f93b4bca551254aa/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-tof-range-finder-breakout-vl6180.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12784",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12784. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -6.822,
      -3.9010000000000002,
      6.517,
      3.85
    ]
  },
  {
    "id": "sparkfun-module-sen12785",
    "mountingReview": {
      "contactIds": ["jp1-1", "jp1-2", "jp1-3", "jp1-4", "jp1-5", "jp1-6"],
      "source": {"label": "SparkFun SEN-12785: EAGLE SparkFun_VL6180_Sensor.brd; commit 6df9637f3e07 header geometry", "url": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/Hardware/SparkFun_VL6180_Sensor.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "JP1", "count": 6, "package": "1X06"}],
        "boardSha256": "158f0f6078e64fd06aeb544532c900dcde9cfc4c3794db36fbaa075e3a1096a1"
      },
      "bodyRegions": [
        {"x": -18.5, "y": -6.5000005, "width": 37, "height": 13.000001},
        {"x": -7.620128, "y": 3.96059, "width": 15.24, "height": 2.54}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-12785",
    "name": "SparkFun ToF Range Finder Sensor - VL6180",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-tof-range-finder-sensor-vl6180.html",
    "revision": "EAGLE SparkFun_VL6180_Sensor.brd; commit 6df9637f3e07",
    "category": "Sensors",
    "board": {
      "width": 37,
      "height": 13.000001,
      "color": "#9b242d",
      "outline": "M-18.5 3.75A3.75 3.75 0 0 1 -18.5 -3.75L-14.5 -3.75L-14.499996 -6.5L14.5 -6.5L14.500004 -3.75L18.5 -3.75A3.75 3.75 0 0 1 18.5 3.75L14.5 3.75L14.500004 6.5L-14.5 6.5L-14.499996 3.75L-18.5 3.75Z"
    },
    "contacts": assets["sparkfun-module-sen12785"]["contacts"],
    "holes": [
      {
        "x": 18.499744,
        "y": 0.00059,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen12785"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen12785"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen12785"]["provenance"],
    "internalConnections": [],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-tof-range-finder-sensor-vl6180.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/Hardware/SparkFun_VL6180_Sensor.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/Hardware/SparkFun_VL6180_Sensor.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/ToF_Range_Finder_Sensor-VL6180/blob/6df9637f3e0700be49c3cc0022caf16341af2d0b/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-tof-range-finder-sensor-vl6180.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-12785",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-12785. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -9.879256,
      -5.13441,
      9.923744,
      6.54059
    ]
  },
  {
    "id": "sparkfun-module-sen13582",
    "sku": "SEN-13582",
    "name": "SparkFun Line Follower Array",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-line-follower-array.html",
    "revision": "EAGLE SparkFun Line Follower Array.brd; commit 085d5392b6d6",
    "category": "Sensors",
    "board": {
      "width": 106.68,
      "height": 27.94,
      "color": "#9b242d",
      "outline": "M-53.34 13.97L53.34 13.97L53.34 -13.97L-53.34 -13.97L-53.34 13.97Z"
    },
    "contacts": assets["sparkfun-module-sen13582"]["contacts"],
    "holes": [
      {
        "x": -46.99,
        "y": -1.27,
        "drill": 2.3
      },
      {
        "x": -6.35,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": -19.05,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": -31.75,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": -44.45,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": 44.45,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": 31.75,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": 19.05,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": 6.35,
        "y": -6.35,
        "drill": 2.3
      },
      {
        "x": -19.05,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -12.7,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": -4.92125,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": 4.92125,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": 12.7,
        "y": 11.43,
        "drill": 3.302
      },
      {
        "x": 19.05,
        "y": 11.43,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen13582"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen13582"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen13582"]["provenance"],
    "internalConnections": [
      [
        "jp1-1",
        "jp1-2"
      ],
      [
        "jp1-3",
        "jp1-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-line-follower-array.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/Hardware/SparkFun%20Line%20Follower%20Array.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/Hardware/SparkFun%20Line%20Follower%20Array.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Line_Follower_Array/blob/085d5392b6d6eb41aa79620b34c0454d9ededbc9/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-line-follower-array.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-13582",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-13582. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -42.905,
      -8.9325,
      52.11,
      3.85
    ],
    "backArtworkBounds": [
      -50.382799999999996,
      -11.899999999999999,
      49.926,
      8.56825
    ]
  },
  {
    "id": "sparkfun-module-sen15177",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4"],
      "source": {"label": "SparkFun SEN-15177: EAGLE Qwiic Proximity Sensor - VCNL4040.brd; commit af01991774b8 header geometry", "url": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/Hardware/Qwiic%20Proximity%20Sensor%20-%20VCNL4040.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "cc03e494959d2951093f3621fd7b1702219af076d48c596a0a11a0c274ed9baa"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-15177",
    "name": "SparkFun Proximity Sensor Breakout - 20cm, VCNL4040 (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-proximity-sensor-breakout-20cm-vcnl4040-qwiic.html",
    "revision": "EAGLE Qwiic Proximity Sensor - VCNL4040.brd; commit af01991774b8",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen15177"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen15177"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen15177"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen15177"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j4-1"
      ],
      [
        "j2-2",
        "j3-2",
        "j4-2"
      ],
      [
        "j2-3",
        "j3-3",
        "j4-3"
      ],
      [
        "j2-4",
        "j3-4",
        "j4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-proximity-sensor-breakout-20cm-vcnl4040-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/Hardware/Qwiic%20Proximity%20Sensor%20-%20VCNL4040.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/Hardware/Qwiic%20Proximity%20Sensor%20-%20VCNL4040.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Proximity_Sensor/blob/af01991774b84238a18030e7f02f67c530ec456c/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-proximity-sensor-breakout-20cm-vcnl4040-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-15177",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-15177. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -4.282,
      12.26,
      8.46
    ],
    "backArtworkBounds": [
      -10.0095,
      -4.866,
      1.7672,
      7.406
    ]
  },
  {
    "id": "sparkfun-module-sen14722",
    "mountingReview": {
      "contactIds": ["j3-1", "j3-2", "j3-3", "j3-4"],
      "source": {"label": "SparkFun SEN-14722: EAGLE Qwiic Distance Sensor - VL53L1X.brd; commit 543b1e2d8032 header geometry", "url": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/Hardware/Qwiic%20Distance%20Sensor%20-%20VL53L1X.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J3", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "0705d900704d4ba9d78a18d0126cd4067e52c2402f01f066310bbb0960f1f456"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-14722",
    "name": "SparkFun Distance Sensor Breakout - 4 Meter, VL53L1X (Qwiic)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-distance-sensor-breakout-4-meter-vl53l1x-qwiic.html",
    "revision": "EAGLE Qwiic Distance Sensor - VL53L1X.brd; commit 543b1e2d8032",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L-12.7 -12.7L12.7 -12.7L12.7 12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen14722"]["contacts"],
    "holes": [
      {
        "x": -10.16,
        "y": -10.16,
        "drill": 3.302
      },
      {
        "x": 10.16,
        "y": -10.16,
        "drill": 3.302
      }
    ],
    "artwork": assets["sparkfun-module-sen14722"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen14722"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen14722"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j4-1"
      ],
      [
        "j2-2",
        "j3-2",
        "j4-2"
      ],
      [
        "j2-3",
        "j3-3",
        "j4-3"
      ],
      [
        "j2-4",
        "j3-4",
        "j4-4"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-distance-sensor-breakout-4-meter-vl53l1x-qwiic.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/Hardware/Qwiic%20Distance%20Sensor%20-%20VL53L1X.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/Hardware/Qwiic%20Distance%20Sensor%20-%20VL53L1X.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_Distance_VL53L1X/blob/543b1e2d80325a39c2585882808757361f86cc66/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-distance-sensor-breakout-4-meter-vl53l1x-qwiic.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-14722",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-14722. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -4.282,
      12.26,
      8.46
    ],
    "backArtworkBounds": [
      -10.0095,
      -4.866,
      1.7672,
      7.406
    ]
  },
  {
    "id": "sparkfun-module-sen17374",
    "mountingReview": {
      "contactIds": ["j1-1", "j1-2", "j1-3", "j1-4"],
      "source": {"label": "SparkFun SEN-17374: EAGLE Qwiic_PIR.brd; commit 17b39a30d9ea header geometry", "url": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/Hardware/Qwiic_PIR.brd"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed manufacturer EAGLE connector packages and front through-hole centers. All selected header leads share one exact 2.54 mm grid; non-header sockets, screw terminals and auxiliary service contacts are excluded.",
        "connectors": [{"id": "J1", "count": 4, "package": "1X04_NO_SILK"}],
        "boardSha256": "66d605d4561e8aa24a5ac8eda0232f7803251440bdd50e3e21097a5555b3121c"
      },
      "bodyRegions": [
        {"x": -12.7, "y": -12.7, "width": 25.4, "height": 25.4}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN-17374",
    "name": "SparkFun Qwiic PIR - 170uA (EKMC4607112K)",
    "manufacturer": "SparkFun",
    "source": "https://www.sparkfun.com/sparkfun-qwiic-pir-170ua-ekmc4607112k.html",
    "revision": "EAGLE Qwiic_PIR.brd; commit 17b39a30d9ea",
    "category": "Sensors",
    "board": {
      "width": 25.4,
      "height": 25.4,
      "color": "#9b242d",
      "outline": "M-12.7 12.7L12.7 12.7L12.7 -12.7L-12.7 -12.7L-12.7 12.7Z"
    },
    "contacts": assets["sparkfun-module-sen17374"]["contacts"],
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
      }
    ],
    "artwork": assets["sparkfun-module-sen17374"]["artwork"],
    "backArtwork": assets["sparkfun-module-sen17374"]["backArtwork"],
    "viewLabel": "COMPONENT SIDE / MIRRORED UNDERSIDE WHEN PRESENT",
    "footprintMode": "reference",
    "footprintNote": "Reference module contact carrier derived from the cited manufacturer board contact centers. Exposed electrical header, socket-solder and test contacts are modeled; this is not a certified mating or production host footprint. Connector mechanical retention and configuration solder jumpers are not separate electrical terminals. Verify the shipped PCB revision, mating contact face and mechanical hardware. Generated 3D geometry is approximate.",
    "provenance": assets["sparkfun-module-sen17374"]["provenance"],
    "internalConnections": [
      [
        "j2-1",
        "j3-1",
        "j1-4",
        "j7-6"
      ],
      [
        "j2-2",
        "j3-2",
        "j1-3",
        "j7-2"
      ],
      [
        "j2-3",
        "j3-3",
        "j1-2",
        "j7-4"
      ],
      [
        "j2-4",
        "j3-4",
        "j1-1",
        "j7-3"
      ]
    ],
    "references": [
      {
        "label": "Exact manufacturer product / availability",
        "url": "https://www.sparkfun.com/sparkfun-qwiic-pir-170ua-ekmc4607112k.html"
      },
      {
        "label": "Pinned manufacturer EAGLE PCB",
        "url": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/Hardware/Qwiic_PIR.brd"
      },
      {
        "label": "Matching manufacturer schematic",
        "url": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/Hardware/Qwiic_PIR.sch"
      },
      {
        "label": "Source hardware license / attribution",
        "url": "https://github.com/sparkfun/Qwiic_PIR/blob/17b39a30d9ea2ae5aa8e94abd94721c7a31928aa/LICENSE.md"
      }
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.sparkfun.com/sparkfun-qwiic-pir-170ua-ekmc4607112k.html",
      "status": "Official SparkFun exact-SKU product page reported In stock.",
      "sku": "SEN-17374",
      "reportedStock": "In stock"
    },
    "description": "SparkFun SEN-17374. Board color and small finishes are representative. Source-revision module with the electrical connector and service-test contacts identified in the manufacturer PCB and matching schematic. Physical contact numbers are CAD reference plus pad number; hover for source nets and electrical functions. Connector housings are transparent so their board-side solder contacts remain accessible.",
    "tags": [
      "module",
      "breakout",
      "diy",
      "starter kit",
      "arduino"
    ],
    "artworkBounds": [
      -12.26,
      -11.9,
      12.26,
      12.1177
    ],
    "backArtworkBounds": [
      2.5508,
      0.849,
      10.1492,
      9.0697
    ]
  },
];
